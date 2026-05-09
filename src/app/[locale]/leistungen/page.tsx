import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LeistungenPageContent } from "@/components/pages/LeistungenPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Unsere Leistungen",
    fr: "Nos services",
    en: "Our Services",
    nl: "Onze diensten",
    tr: "Hizmetlerimiz",
    ar: "خدماتنا",
    pl: "Nasze usługi",
  };
  return { title: titles[locale] || titles.fr };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LeistungenPageContent />;
}
