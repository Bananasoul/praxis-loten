import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { RehabPageContent } from "@/components/pages/RehabPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Rehabilitation",
    fr: "Rééducation",
    en: "Rehabilitation",
    nl: "Revalidatie",
    tr: "Rehabilitasyon",
    ar: "إعادة التأهيل",
    pl: "Rehabilitacja",
  };
  return { title: titles[locale] || titles.fr };
}

export default async function RehabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RehabPageContent />;
}
