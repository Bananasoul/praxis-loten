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
