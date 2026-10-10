/** Texte pour la balise description : sans markdown, coupé à ~155 caractères sur un mot. */
export function metaDescription(text: string): string {
  const plain = text.replace(/\*\*|__|[*_`#>]/g, "").replace(/\s+/g, " ").trim();
  if (plain.length <= 155) return plain;
  return plain.slice(0, plain.lastIndexOf(" ", 152)).replace(/[.,;:!?]+$/, "") + "…";
}
