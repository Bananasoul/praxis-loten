import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://www.praxisloten.be";
const locales = routing.locales;

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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }

    for (const slug of teamSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/team/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of leistungenSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/leistungen/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const slug of rehabSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/rehabilitation/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    for (const slug of blogSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
