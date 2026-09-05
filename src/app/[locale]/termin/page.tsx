import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { TerminPageContent } from "@/components/pages/TerminPageContent";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Termin vereinbaren",
    fr: "Prendre rendez-vous",
    en: "Book an Appointment",
    nl: "Afspraak maken",
    tr: "Randevu almak",
    ar: "حجز موعد",
    pl: "Umów wizytę",
  };
  return { title: titles[locale] || titles.fr, alternates: buildAlternates(locale, "/termin") };
}

export default async function AppointmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TerminPageContent />;
}
