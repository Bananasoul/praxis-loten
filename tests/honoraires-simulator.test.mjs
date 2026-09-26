import assert from "node:assert/strict";
import test from "node:test";

import {
  calculateFeeEstimate,
  calculateTreatmentTotal,
  getPathwaySummary,
} from "../src/lib/honoraires-simulator.ts";

test("a common-pathology patient with 9 completed sessions has 9 preferred-rate sessions left", () => {
  assert.deepEqual(getPathwaySummary("current", 9), {
    pathway: "current",
    completed: 9,
    nextSession: 10,
    band: "preferred",
    preferredLimit: 18,
    remainingPreferred: 9,
    period: "calendar-year",
    requiresApproval: false,
  });
});

test("an Fa patient with 30 completed sessions has 30 preferred-rate sessions left in the 365-day period", () => {
  assert.deepEqual(getPathwaySummary("fa", 30), {
    pathway: "fa",
    completed: 30,
    nextSession: 31,
    band: "preferred",
    preferredLimit: 60,
    remainingPreferred: 30,
    period: "rolling-365-days",
    requiresApproval: false,
  });
});

test("an Fb patient moves through the two reduced-reimbursement bands after session 60", () => {
  assert.equal(getPathwaySummary("fb", 59).band, "preferred");
  assert.equal(getPathwaySummary("fb", 60).band, "reduced-first");
  assert.equal(getPathwaySummary("fb", 80).band, "reduced-second");
  assert.equal(getPathwaySummary("fb", 60).remainingPreferred, 0);
});

test("a list-E pathway requires mutuality approval and has no 18-or-60-session counter", () => {
  assert.deepEqual(getPathwaySummary("e", 42), {
    pathway: "e",
    completed: 42,
    nextSession: 43,
    band: "preferred",
    preferredLimit: null,
    remainingPreferred: null,
    period: "approval-up-to-three-years",
    requiresApproval: true,
  });
});

test("an unknown prescription never produces a guessed reimbursement category", () => {
  assert.equal(getPathwaySummary("unknown", 12).band, "unknown");
  assert.equal(calculateFeeEstimate({
    pathway: "unknown",
    completed: 12,
    practitioner: "conventioned",
    location: "cabinet",
  }), null);
});

test("conventioned estimates use the correct current, F and E patient shares", () => {
  const current = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fa = calculateFeeEstimate({ pathway: "fa", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fb = calculateFeeEstimate({ pathway: "fb", completed: 0, practitioner: "conventioned", location: "cabinet" });
  const fbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "conventioned", location: "cabinet" });
  const e = calculateFeeEstimate({ pathway: "e", completed: 0, practitioner: "conventioned", location: "cabinet" });

  assert.deepEqual(current?.patientShare, { standard: 6.25, bim: 2.5 });
  assert.deepEqual(fa?.patientShare, { standard: 5.5, bim: 2 });
  assert.deepEqual(fb?.patientShare, { standard: 5.5, bim: 2 });
  assert.equal(fbAfter60?.band, "reduced-first");
  assert.deepEqual(fbAfter60?.reimbursement, { standard: 20.87, bim: 24.37 });
  assert.deepEqual(fbAfter60?.patientShare, { standard: 5.5, bim: 2 });
  assert.deepEqual(e?.patientShare, { standard: 3.88, bim: 1.38 });
});

test("home-visit estimates use the dedicated INAMI amounts", () => {
  const conventionedE = calculateFeeEstimate({ pathway: "e", completed: 0, practitioner: "conventioned", location: "home" });
  const loicFbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "loic", location: "home" });

  assert.equal(conventionedE?.chargedFee, 34.81);
  assert.deepEqual(conventionedE?.patientShare, { standard: 3.88, bim: 1.38 });
  assert.equal(loicFbAfter60?.chargedFee, 38);
  assert.deepEqual(loicFbAfter60?.patientShare, { standard: 19.97, bim: 10.47 });
});

test("Loic estimate reflects the selected category and reduced-reimbursement band", () => {
  const current = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "loic", location: "cabinet" });
  const fbAfter60 = calculateFeeEstimate({ pathway: "fb", completed: 60, practitioner: "loic", location: "cabinet" });
  const fbAfter80 = calculateFeeEstimate({ pathway: "fb", completed: 80, practitioner: "loic", location: "cabinet" });

  assert.deepEqual(current?.patientShare, { standard: 15.95, bim: 5.86 });
  assert.deepEqual(fbAfter60?.patientShare, { standard: 19.34, bim: 10.63 });
  assert.deepEqual(fbAfter80?.patientShare, { standard: 30.56, bim: 25.58 });
});

test("completed-session input is normalized to a non-negative whole number", () => {
  assert.equal(getPathwaySummary("current", -3).completed, 0);
  assert.equal(getPathwaySummary("fa", 9.8).completed, 9);
});

test("Noé is estimated like the other non-conventioned therapist (same insurer refund, flagged approximate)", () => {
  for (const location of ["cabinet", "home"]) {
    const noe = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "noe", location });
    const loic = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "loic", location });
    assert.equal(noe?.isApproximate, true);
    assert.deepEqual(noe?.reimbursement, loic?.reimbursement);
    assert.equal(noe?.chargedFee, location === "cabinet" ? 35 : 38);
  }
});

test("treatment total for 1 session equals the single-session estimate", () => {
  const one = calculateTreatmentTotal({ pathway: "current", completed: 0, practitioner: "conventioned", location: "cabinet", sessions: 1 });
  const single = calculateFeeEstimate({ pathway: "current", completed: 0, practitioner: "conventioned", location: "cabinet" });
  assert.equal(one?.charged, single?.chargedFee);
  assert.deepEqual(one?.patientShare, single?.patientShare);
  assert.equal(one?.crossesBand, false);
});

test("treatment total crosses the 18-session band for a common pathology", () => {
  const nine = calculateTreatmentTotal({ pathway: "current", completed: 0, practitioner: "conventioned", location: "cabinet", sessions: 9 });
  assert.equal(nine?.charged, 284.76); // 9 × 31,64
  assert.equal(nine?.crossesBand, false);
  const after = calculateTreatmentTotal({ pathway: "current", completed: 10, practitioner: "conventioned", location: "cabinet", sessions: 18 });
  // 8 séances au meilleur remboursement puis 10 au remboursement réduit
  assert.equal(after?.crossesBand, true);
  assert.equal(after?.charged, 367.32); // 8 × 31,64 + 10 × 11,42
});

test("treatment total returns null for unknown pathway or zero sessions", () => {
  assert.equal(calculateTreatmentTotal({ pathway: "unknown", completed: 0, practitioner: "loic", location: "home", sessions: 9 }), null);
  assert.equal(calculateTreatmentTotal({ pathway: "fa", completed: 0, practitioner: "loic", location: "home", sessions: 0 }), null);
});
