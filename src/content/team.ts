/** Thérapeutes publiés sur le site : slug de page, nom affiché, clé dans messages/*.json → team.<key>. */
export const THERAPISTS: { slug: string; name: string; key: string }[] = [
  { slug: "philippe-banaszak", name: "Philippe Banaszak", key: "philippe" },
  { slug: "felix-esser", name: "Félix Esser", key: "felix" },
  { slug: "fabienne-dormann", name: "Fabienne Dormann", key: "fabienne" },
  { slug: "thom-petit", name: "Thom Petit", key: "thom" },
  { slug: "loic-meunier", name: "Loïc Meunier", key: "loic" },
  { slug: "noe-meyer", name: "Noé Meyer", key: "noe" },
];

/** Pages de service : slug → clé dans messages/*.json → services.<key>. */
export const SERVICE_KEYS: Record<string, string> = {
  "manuelle-therapie": "manualTherapy",
  "sport-kinesitherapie": "sportPhysio",
  kiefergelenk: "jaw",
  lymphdrainage: "lymph",
};
