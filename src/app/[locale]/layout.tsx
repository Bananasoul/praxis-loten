import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { buildAlternates } from "@/i18n/alternates";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import HtmlLang from "@/components/ui/HtmlLang";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("title"),
      template: `%s | Praxis Loten`,
    },
    description: t("description"),
    metadataBase: new URL("https://www.praxisloten.be"),
    alternates: buildAlternates(locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
      type: "website",
      siteName: "Praxis Loten",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Praxis Loten — Cabinet de kinésithérapie & rééducation à Eupen" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Praxis Loten",
    "url": "https://www.praxisloten.be",
    "telephone": "+3287555670",
    "email": "praxisloten@gmail.com",
    "image": "https://www.praxisloten.be/og-image.png",
    "medicalSpecialty": "Physiotherapy",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Loten 1",
      "postalCode": "4700",
      "addressLocality": "Eupen",
      "addressRegion": "Liège",
      "addressCountry": "BE",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.6258867,
      "longitude": 6.0304303,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "20:30",
      },
    ],
    "availableLanguage": ["de", "fr", "nl", "en"],
    "areaServed": ["Eupen", "Kettenis", "Raeren", "Lontzen", "Kelmis", "Ostbelgien", "Deutschsprachige Gemeinschaft Belgiens"],
    "knowsLanguage": ["de", "fr", "nl", "en"],
    "priceRange": "€€",
    "sameAs": [
      "https://www.facebook.com/kineunterstadteupen",
      "https://www.instagram.com/praxisloten",
    ],
  };


  return (
    <NextIntlClientProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <HtmlLang locale={locale} />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
