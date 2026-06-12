import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const locales = ["de", "fr", "en", "nl", "tr", "ar", "pl"];

const teamMembers = [
  "philippe-banaszak",
  "felix-esser",
  "fabienne-dormann",
  "thom-petit",
  "loic-meunier",
];

const services = [
  "manuelle-therapie",
  "sport-kinesitherapie",
  "kiefergelenk",
  "lymphdrainage",
];

function buildRedirects() {
  const redirects: Array<{
    source: string;
    destination: string;
    permanent: boolean;
  }> = [];

  for (const locale of locales) {
    // Team member flat URLs → /team/slug
    for (const member of teamMembers) {
      redirects.push({
        source: `/${locale}/${member}`,
        destination: `/${locale}/team/${member}`,
        permanent: true,
      });
      redirects.push({
        source: `/${locale}/${member}.html`,
        destination: `/${locale}/team/${member}`,
        permanent: true,
      });
    }

    // Service flat URLs → /leistungen/slug
    for (const service of services) {
      redirects.push({
        source: `/${locale}/${service}`,
        destination: `/${locale}/leistungen/${service}`,
        permanent: true,
      });
      redirects.push({
        source: `/${locale}/${service}.html`,
        destination: `/${locale}/leistungen/${service}`,
        permanent: true,
      });
    }

    // Old page names
    redirects.push({
      source: `/${locale}/spezialitaeten`,
      destination: `/${locale}/leistungen`,
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/spezialitaeten.html`,
      destination: `/${locale}/leistungen`,
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/orthopaedische-manuelle-therapie`,
      destination: `/${locale}/leistungen/manuelle-therapie`,
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/orthopaedische-manuelle-therapie.html`,
      destination: `/${locale}/leistungen/manuelle-therapie`,
      permanent: true,
    });

    // Florence Joris (former team member) → team page
    redirects.push({
      source: `/${locale}/florence-joris`,
      destination: `/${locale}/team`,
      permanent: true,
    });
    redirects.push({
      source: `/${locale}/florence-joris.html`,
      destination: `/${locale}/team`,
      permanent: true,
    });

    // .html versions of existing pages
    for (const page of [
      "team",
      "praxis",
      "blog",
      "jobs",
      "leistungen",
      "index",
    ]) {
      redirects.push({
        source: `/${locale}/${page}.html`,
        destination:
          page === "index" ? `/${locale}` : `/${locale}/${page}`,
        permanent: true,
      });
    }
  }


  // Legacy pre-revamp URLs (old site structure, still indexed by Google → were 404s)
  const legacyServicePrefixes = ["/f\u00e4higkeiten-competences", "/f%C3%A4higkeiten-competences"];
  for (const prefix of legacyServicePrefixes) {
    for (const service of services) {
      redirects.push({
        source: `${prefix}/${service}`,
        destination: `/de/leistungen/${service}`,
        permanent: true,
      });
    }
    redirects.push({
      source: prefix,
      destination: "/de/leistungen",
      permanent: true,
    });
  }

  // Anciennes URLs SANS préfixe de langue (ancien site, encore indexées par Google → 404)
  redirects.push(
    { source: "/home", destination: "/de", permanent: true },
    { source: "/termine-rendez-vous", destination: "/de/termin", permanent: true },
    { source: "/termine-rendez-vous/:therapist", destination: "/de/termin", permanent: true },
    { source: "/unsere-praxis-notre-cabinet", destination: "/de/praxis", permanent: true },
    { source: "/blog/:slug", destination: "/de/blog/:slug", permanent: true },
  );

  return redirects;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return buildRedirects();
  },
};

export default withNextIntl(nextConfig);
