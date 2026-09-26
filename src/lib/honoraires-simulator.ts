export type Pathway = "current" | "fa" | "fb" | "e" | "unknown";
export type Practitioner = "conventioned" | "loic" | "noe";
export type Location = "cabinet" | "home";
export type ReimbursementBand = "preferred" | "reduced" | "reduced-first" | "reduced-second" | "unknown";

export interface PathwaySummary {
  pathway: Pathway;
  completed: number;
  nextSession: number;
  band: ReimbursementBand;
  preferredLimit: number | null;
  remainingPreferred: number | null;
  period: "calendar-year" | "rolling-365-days" | "approval-up-to-three-years" | "unknown";
  requiresApproval: boolean;
}

export interface FeeEstimate {
  officialFee: number;
  chargedFee: number;
  reimbursement: { standard: number; bim: number };
  patientShare: { standard: number; bim: number };
  isApproximate: boolean;
  band: ReimbursementBand;
}

interface FeeRow {
  officialFee: number;
  reimbursement: {
    conventioned: { standard: number; bim: number };
    loic: { standard: number; bim: number };
  };
}

const CABINET_FEES: Record<Exclude<Pathway, "unknown">, Partial<Record<ReimbursementBand, FeeRow>>> = {
  current: {
    preferred: feeRow(31.64, 25.39, 29.14, 19.05, 29.14),
    reduced: feeRow(11.42, 5.17, 8.92, 3.88, 8.92),
  },
  fa: {
    preferred: feeRow(31.64, 26.14, 29.64, 19.61, 29.64),
    reduced: feeRow(11.42, 5.92, 9.42, 4.44, 9.42),
  },
  fb: {
    preferred: feeRow(31.64, 26.14, 29.64, 19.61, 29.64),
    "reduced-first": feeRow(26.37, 20.87, 24.37, 15.66, 24.37),
    "reduced-second": feeRow(11.42, 5.92, 9.42, 4.44, 9.42),
  },
  e: {
    preferred: feeRow(31.64, 27.76, 30.26, 20.82, 30.26),
  },
};

const HOME_FEES: Record<Exclude<Pathway, "unknown">, Partial<Record<ReimbursementBand, FeeRow>>> = {
  current: {
    preferred: feeRow(34.81, 28.56, 32.31, 21.42, 32.31),
    reduced: feeRow(12.87, 6.62, 10.37, 4.97, 10.37),
  },
  fa: {
    preferred: feeRow(34.81, 29.31, 32.81, 21.99, 32.81),
    reduced: feeRow(12.87, 7.37, 10.87, 5.53, 10.87),
  },
  fb: {
    preferred: feeRow(34.81, 29.31, 32.81, 21.99, 32.81),
    "reduced-first": feeRow(29.53, 24.03, 27.53, 18.03, 27.53),
    "reduced-second": feeRow(12.87, 7.37, 10.87, 5.53, 10.87),
  },
  e: {
    preferred: feeRow(34.81, 30.93, 33.43, 23.2, 33.43),
  },
};

function feeRow(
  officialFee: number,
  conventionedStandard: number,
  conventionedBim: number,
  nonConventionedStandard: number,
  nonConventionedBim: number,
): FeeRow {
  return {
    officialFee,
    reimbursement: {
      conventioned: { standard: conventionedStandard, bim: conventionedBim },
      loic: { standard: nonConventionedStandard, bim: nonConventionedBim },
    },
  };
}

function normalizeCompleted(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.floor(value));
}

function roundMoney(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function getPathwaySummary(pathway: Pathway, completedInput: number): PathwaySummary {
  const completed = normalizeCompleted(completedInput);
  const base = { pathway, completed, nextSession: completed + 1 };

  if (pathway === "unknown") {
    return {
      ...base,
      band: "unknown",
      preferredLimit: null,
      remainingPreferred: null,
      period: "unknown",
      requiresApproval: false,
    };
  }

  if (pathway === "e") {
    return {
      ...base,
      band: "preferred",
      preferredLimit: null,
      remainingPreferred: null,
      period: "approval-up-to-three-years",
      requiresApproval: true,
    };
  }

  const preferredLimit = pathway === "current" ? 18 : 60;
  const remainingPreferred = Math.max(0, preferredLimit - completed);

  let band: ReimbursementBand = completed < preferredLimit ? "preferred" : "reduced";
  if (pathway === "fb" && completed >= 60) {
    band = completed < 80 ? "reduced-first" : "reduced-second";
  }

  return {
    ...base,
    band,
    preferredLimit,
    remainingPreferred,
    period: pathway === "fa" ? "rolling-365-days" : "calendar-year",
    requiresApproval: false,
  };
}

// Honoraires demandés par les thérapeutes non conventionnés (€ / séance).
// ⚠ Noé : montants PROVISOIRES repris de Loïc — à confirmer avec Noé avant publication.
const NON_CONV_FEES: Record<Exclude<Practitioner, "conventioned">, Record<Location, number>> = {
  loic: { cabinet: 35, home: 38 },
  noe: { cabinet: 35, home: 38 },
};

export function calculateFeeEstimate({
  pathway,
  completed,
  practitioner,
  location,
}: {
  pathway: Pathway;
  completed: number;
  practitioner: Practitioner;
  location: Location;
}): FeeEstimate | null {
  if (pathway === "unknown") return null;

  const { band } = getPathwaySummary(pathway, completed);
  const row = (location === "cabinet" ? CABINET_FEES : HOME_FEES)[pathway][band];
  if (!row) return null;

  const isNonConventioned = practitioner !== "conventioned";
  // Le remboursement mutuelle est identique pour tout thérapeute non conventionné.
  const reimbursement = row.reimbursement[isNonConventioned ? "loic" : "conventioned"];
  const chargedFee = isNonConventioned ? NON_CONV_FEES[practitioner][location] : row.officialFee;

  return {
    officialFee: row.officialFee,
    chargedFee,
    reimbursement,
    patientShare: {
      standard: roundMoney(chargedFee - reimbursement.standard),
      bim: roundMoney(chargedFee - reimbursement.bim),
    },
    isApproximate: isNonConventioned,
    band,
  };
}

export interface TreatmentTotal {
  sessions: number;
  charged: number;
  reimbursement: { standard: number; bim: number };
  patientShare: { standard: number; bim: number };
  isApproximate: boolean;
  /** true si une partie des séances passe dans une tranche au remboursement réduit */
  crossesBand: boolean;
}

/**
 * Coût cumulé de N séances à partir de la prochaine (completed + 1),
 * séance par séance : les changements de tranche (ex. après la 18e) sont pris en compte.
 */
export function calculateTreatmentTotal({
  pathway,
  completed,
  practitioner,
  location,
  sessions,
}: {
  pathway: Pathway;
  completed: number;
  practitioner: Practitioner;
  location: Location;
  sessions: number;
}): TreatmentTotal | null {
  const count = Math.max(0, Math.floor(Number.isFinite(sessions) ? sessions : 0));
  const start = normalizeCompleted(completed);
  if (pathway === "unknown" || count === 0) return null;

  let charged = 0;
  const reimbursement = { standard: 0, bim: 0 };
  const patientShare = { standard: 0, bim: 0 };
  let isApproximate = false;
  let crossesBand = false;
  let firstBand: ReimbursementBand | null = null;

  for (let i = 0; i < count; i++) {
    const estimate = calculateFeeEstimate({ pathway, completed: start + i, practitioner, location });
    if (!estimate) return null;
    firstBand ??= estimate.band;
    if (estimate.band !== firstBand) crossesBand = true;
    charged += estimate.chargedFee;
    reimbursement.standard += estimate.reimbursement.standard;
    reimbursement.bim += estimate.reimbursement.bim;
    patientShare.standard += estimate.patientShare.standard;
    patientShare.bim += estimate.patientShare.bim;
    isApproximate ||= estimate.isApproximate;
  }

  return {
    sessions: count,
    charged: roundMoney(charged),
    reimbursement: { standard: roundMoney(reimbursement.standard), bim: roundMoney(reimbursement.bim) },
    patientShare: { standard: roundMoney(patientShare.standard), bim: roundMoney(patientShare.bim) },
    isApproximate,
    crossesBand,
  };
}
