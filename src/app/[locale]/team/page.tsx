import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TeamPageContent } from "@/components/pages/TeamPageContent";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Unser Team",
    fr: "Notre équipe",
    en: "Our Team",
    nl: "Ons team",
    tr: "Ekibimiz",
    ar: "فريقنا",
    pl: "Nasz zespół",
  };
  return { title: titles[locale] || titles.fr, alternates: buildAlternates(locale, "/team") };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TeamPageContent />;
}
