import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HonorairesPageContent } from "@/components/pages/HonorairesPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Gebühren und Tarife",
    fr: "Honoraires et tarifs",
    en: "Fees and Rates",
    nl: "Tarieven en vergoedingen",
    tr: "Ücretler ve tarifeler",
    ar: "الرسوم والتعريفات",
    pl: "Opłaty i cennik",
  };
  return { title: titles[locale] || titles.fr };
}

export default async function HonorairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HonorairesPageContent />;
}
