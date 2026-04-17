import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { RehabDetailPageContent } from "@/components/pages/RehabDetailPageContent";
import { notFound } from "next/navigation";

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
