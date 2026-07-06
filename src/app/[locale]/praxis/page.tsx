import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { PraxisPageContent } from "@/components/pages/PraxisPageContent";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Die Praxis",
    fr: "Le cabinet",
    en: "The Practice",
    nl: "De praktijk",
    tr: "Klinik",
    ar: "العيادة",
    pl: "Gabinet",
  };
  return { title: titles[locale] || titles.fr, alternates: buildAlternates(locale, "/praxis") };
}

export default async function PraxisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PraxisPageContent />;
}
