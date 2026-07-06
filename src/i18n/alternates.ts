import type { Metadata } from "next";
import { routing } from "./routing";

/**
 * Construit les balises canonical + hreflang (alternates.languages) pour une
 * page donnee, de facon coherente sur tout le site
 * (next-intl, localePrefix:'always').
 *
 * - canonical : URL auto-referencee de la locale + chemin courant
 * - languages : map de TOUTES les locales pour ce meme chemin + x-default
 *   (x-default pointe vers la locale par defaut du site => de)
 *
 * @param locale locale courante (ex: "fr")
 * @param path   chemin SANS prefixe de langue, commencant par "/" ou "" pour la home
 *               (ex: "", "/praxis", "/team/philippe-banaszak")
 */
export function buildAlternates(locale: string, path = ""): Metadata["alternates"] {
  const clean = path === "/" ? "" : path;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `/${l}${clean}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${clean}`;

  return {
    canonical: `/${locale}${clean}`,
    languages,
  };
}
