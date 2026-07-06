import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BlogArticlePageContent } from "@/components/pages/BlogArticlePageContent";
import { notFound } from "next/navigation";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { title, alternates: buildAlternates(locale, `/blog/${slug}`) };
}

const VALID_SLUGS = [
  "sommeil-recuperation-douleur",
  "doser-activite-douleur",
  "position-assise-mal-de-dos",
  "douleurs-cervicales-mobilite-eupen",
  "manuelle-therapie-rueckenschmerzen",
  "laufen-verletzungspraevention",
  "lymphdrainage-wann-wie",
  "kiefergelenk-cmd-symptome",
  "osteopathie-kinesitherapie-unterschied",
  "bfr-training-rehabilitation",
  "montre-connectee-douleur",
  "therapie-manuelle-mythes-mouvement",
];

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  if (!VALID_SLUGS.includes(slug)) notFound();
  return <BlogArticlePageContent slug={slug} />;
}
