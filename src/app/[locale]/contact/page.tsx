import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ContactPageContent } from "@/components/pages/ContactPageContent";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Kontakt",
    fr: "Contact",
    en: "Contact",
    nl: "Contact",
    tr: "İletişim",
    ar: "اتصل بنا",
    pl: "Kontakt",
    uk: "Контакти",
    es: "Contacto",
    ku: "Têkilî",
  };
  return { title: titles[locale] ?? titles.en, alternates: buildAlternates(locale, "/contact") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageContent />;
}
