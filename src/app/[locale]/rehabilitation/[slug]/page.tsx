import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { RehabDetailPageContent } from "@/components/pages/RehabDetailPageContent";
import { notFound } from "next/navigation";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, alternates: buildAlternates(locale, `/rehabilitation/${slug}`) };
}

const SLUGS = ["hip", "knee", "acl", "shoulder"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function RehabDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!SLUGS.includes(slug)) notFound();
  return <RehabDetailPageContent slug={slug} />;
}
