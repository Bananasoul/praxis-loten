import type { Metadata } from "next";
import { routing } from "./routing";

/**
 * Langues dont seules les pages principales sont traduites (constat du 09/10/2026) :
 * detail des services, reeducation, blog, emploi et pages legales y retombent en
 * FR/EN. Ces pages-la sont exclues des hreflang et du sitemap, et marquees noindex,
 * pour ne pas etre vues par Google comme des doublons (Search Console, 07/10).
 * Retirer une langue de cette liste des que ses pages sont reellement traduites.
 */
export const PARTIAL_LOCALES: readonly string[] = ["es", "uk", "ku"];

/** Chemins (sans prefixe de langue) non traduits dans PARTIAL_LOCALES. */
const UNTRANSLATED_IN_PARTIAL = [
  "/leistungen/",
  "/rehabilitation",
  "/blog",
  "/jobs",
  "/legal",
  "/privacy",
  "/cookies",
];

/** La page `path` existe-t-elle vraiment dans la langue `locale` ? */
export function isTranslated(locale: string, path: string): boolean {
  if (!PARTIAL_LOCALES.includes(locale)) return true;
  return !UNTRANSLATED_IN_PARTIAL.some((prefix) => path.startsWith(prefix));
}

/**
 * Construit les balises canonical + hreflang (alternates.languages) pour une
 * page donnee, de facon coherente sur tout le site
 * (next-intl, localePrefix:'always').
 *
 * - canonical : URL auto-referencee de la locale + chemin courant
 * - languages : map des locales ou ce chemin est traduit (isTranslated) + x-default
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
    if (isTranslated(l, clean)) languages[l] = `/${l}${clean}`;
  }
  languages["x-default"] = `/${routing.defaultLocale}${clean}`;

  return {
    canonical: `/${locale}${clean}`,
    languages,
  };
}

/** alternates + noindex si la page n'est pas traduite dans cette langue. */
export function pageSeo(locale: string, path = ""): Pick<Metadata, "alternates" | "robots"> {
  return {
    alternates: buildAlternates(locale, path),
    ...(isTranslated(locale, path) ? {} : { robots: { index: false, follow: true } }),
  };
}
