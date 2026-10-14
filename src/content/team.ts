/**
 * Thérapeutes publiés sur le site : slug de page, nom affiché, clé dans messages/*.json → team.<key>,
 * langues parlées (codes) et visites à domicile. Langues reprises de la page RDV (14/10/2026).
 */
export const THERAPISTS: { slug: string; name: string; key: string; langs: string[]; homeVisits?: boolean }[] = [
  { slug: "philippe-banaszak", name: "Philippe Banaszak", key: "philippe", langs: ["FR", "DE", "EN", "PL"] },
  { slug: "felix-esser", name: "Félix Esser", key: "felix", langs: ["FR", "DE", "EN"] },
  { slug: "fabienne-dormann", name: "Fabienne Dormann", key: "fabienne", langs: ["FR", "DE", "EN"] },
  { slug: "thom-petit", name: "Thom Petit", key: "thom", langs: ["FR", "DE", "EN"] },
  { slug: "loic-meunier", name: "Loïc Meunier", key: "loic", langs: ["FR", "DE", "EN"] },
  { slug: "noe-meyer", name: "Noé Meyer", key: "noe", langs: ["FR", "DE", "EN"], homeVisits: true },
];

/** Pages de service : slug → clé dans messages/*.json → services.<key>. */
export const SERVICE_KEYS: Record<string, string> = {
  "manuelle-therapie": "manualTherapy",
  "sport-kinesitherapie": "sportPhysio",
  kiefergelenk: "jaw",
  lymphdrainage: "lymph",
};

/**
 * Présence au cabinet, lundi → vendredi (null = absent), reprise de la fiche Drive
 * « Occupation des cabinets Loten », onglet « Occupation cabinet » (modifiée le 28/09/2026, lue le 14/10/2026).
 * Thom Petit n'apparaît pas dans cette fiche : pas d'horaire affiché pour lui.
 */
export const WEEK_HOURS: Record<string, (string | null)[]> = {
  "philippe-banaszak": ["13:00–19:00", "14:30–19:00", "13:00–19:00", "14:30–19:00", "13:00–19:00"],
  "felix-esser": ["08:00–12:30 · 14:00–19:30", "08:00–12:30 · 14:00–19:30", "08:00–12:30 · 14:00–19:30", "08:00–12:30 · 14:00–19:30", "08:00–12:30 · 14:00–19:30"],
  "fabienne-dormann": ["12:00–16:00", "12:00–16:00", null, "12:00–16:00", null],
  "loic-meunier": ["13:00–20:30", "08:00–20:30", null, "08:00–12:00 · 12:30–20:30", "13:30–20:30"],
  "noe-meyer": ["16:00–20:30", "17:00–20:30", "08:00–19:30", "17:00–20:30", "08:00–19:30"],
};
