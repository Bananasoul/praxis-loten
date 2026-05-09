import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JobsPageContent } from "@/components/pages/JobsPageContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Stellenangebote",
    fr: "Offres d'emploi",
    en: "Job Openings",
    nl: "Vacatures",
    tr: "İş ilanları",
    ar: "عروض العمل",
    pl: "Oferty pracy",
  };
  return { title: titles[locale] || titles.fr };
}

export default async function JobsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <JobsPageContent />;
}
