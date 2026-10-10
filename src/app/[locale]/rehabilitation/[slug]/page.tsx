import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { RehabDetailPageContent } from "@/components/pages/RehabDetailPageContent";
import { notFound } from "next/navigation";
import { pageSeo } from "@/i18n/alternates";
import { SURGERY_DATA, type Slug } from "@/content/rehabSurgeries";
import { metaDescription } from "@/lib/metaDescription";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = SURGERY_DATA[slug as Slug];
  if (!data) return pageSeo(locale, `/rehabilitation/${slug}`);
  const title = data.title[locale] ?? data.title.en;
  const description = metaDescription(data.subtitle[locale] ?? data.subtitle.en);
  return {
    title,
    description,
    // openGraph/twitter remplacent ceux du layout en entier : image et nom du site repris ici
    openGraph: {
      title,
      description,
      type: "website",
      locale,
      siteName: "Praxis Loten",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
    ...pageSeo(locale, `/rehabilitation/${slug}`),
  };
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
