import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BlogPageContent } from "@/components/pages/BlogPageContent";
import { pageSeo } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Blog",
    fr: "Blog",
    en: "Blog",
    nl: "Blog",
    tr: "Blog",
    ar: "المدونة",
    pl: "Blog",
  };
  return { title: titles[locale] || titles.fr, ...pageSeo(locale, "/blog") };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogPageContent />;
}
