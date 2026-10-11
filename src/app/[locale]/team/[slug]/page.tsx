import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TherapistPageContent } from "@/components/pages/TherapistPageContent";
import { buildAlternates } from "@/i18n/alternates";
import { THERAPISTS } from "@/content/team";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = THERAPISTS.find((m) => m.slug === slug);
  if (!member) return { alternates: buildAlternates(locale, `/team/${slug}`) };
  const t = await getTranslations({ locale, namespace: "team" });
  const role = t(`${member.key}.role`);
  return {
    title: `${member.name} — ${role}`,
    description: `${member.name}, ${role}, Praxis Loten (Eupen). ${t(`${member.key}.quote`)}`.slice(0, 160),
    alternates: buildAlternates(locale, `/team/${slug}`),
  };
}

const SLUGS = [
  "philippe-banaszak",
  "felix-esser",
  "fabienne-dormann",
  "thom-petit",
  "loic-meunier",
  "noe-meyer",
];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <TherapistPageContent slug={slug} />;
}
