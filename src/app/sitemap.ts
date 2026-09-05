import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.praxisloten.be";
const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

const staticPages = [
  "",
  "/blog",
  "/team",
  "/praxis",
  "/leistungen",
  "/rehabilitation",
  "/honoraires",
  "/jobs",
  "/termin",
  "/contact",
  "/legal",
  "/privacy",
  "/cookies",
];

const teamSlugs = [
  "philippe-banaszak",
  "felix-esser",
  "fabienne-dormann",
  "thom-petit",
  "loic-meunier",
];

const leistungenSlugs = [
  "manuelle-therapie",
  "sport-kinesitherapie",
  "kiefergelenk",
  "lymphdrainage",
];

const rehabSlugs = ["hip", "knee", "acl", "shoulder"];

const blogSlugs = [
  "sommeil-recuperation-douleur",
  "doser-activite-douleur",
  "position-assise-mal-de-dos",
  "douleurs-cervicales-mobilite-eupen",
  "manuelle-therapie-rueckenschmerzen",
  "laufen-verletzungspraevention",
  "lymphdrainage-wann-wie",
  "kiefergelenk-cmd-symptome",
  "osteopathie-kinesitherapie-unterschied",
  "bfr-training-rehabilitation",
  "montre-connectee-douleur",
];

// Balises hreflang : chaque URL localisée déclare toutes ses variantes + x-default.
function alternates(path: string): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE_URL}/${l}${path}`;
  languages["x-default"] = `${BASE_URL}/${defaultLocale}${path}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  const add = (path: string, changeFrequency: ChangeFreq, priority: number) => {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: alternates(path),
      });
    }
  };

  for (const page of staticPages) {
    add(page, page === "" ? "weekly" : "monthly", page === "" ? 1.0 : 0.8);
  }
  for (const slug of teamSlugs) add(`/team/${slug}`, "monthly", 0.7);
  for (const slug of leistungenSlugs) add(`/leistungen/${slug}`, "monthly", 0.8);
  for (const slug of rehabSlugs) add(`/rehabilitation/${slug}`, "monthly", 0.7);
  for (const slug of blogSlugs) add(`/blog/${slug}`, "monthly", 0.6);

  return entries;
}
