import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ServiceDetailPageContent } from "@/components/pages/ServiceDetailPageContent";
import { pageSeo } from "@/i18n/alternates";
import { SERVICE_KEYS } from "@/content/team";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const key = SERVICE_KEYS[slug];
  if (!key) return pageSeo(locale, `/leistungen/${slug}`);
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: `${t(`${key}.title`)} — Eupen`,
    description: t(`${key}.description`),
    ...pageSeo(locale, `/leistungen/${slug}`),
  };
}

const SLUGS = ["manuelle-therapie", "sport-kinesitherapie", "kiefergelenk", "lymphdrainage"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <ServiceDetailPageContent slug={slug} />;
}
