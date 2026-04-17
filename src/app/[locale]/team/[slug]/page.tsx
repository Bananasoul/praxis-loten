import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { TherapistPageContent } from "@/components/pages/TherapistPageContent";

const SLUGS = [
  "philippe-banaszak",
  "florence-joris",
  "felix-esser",
  "fabienne-dormann",
  "thom-petit",
  "loic-meunier",
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
