import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BlogArticlePageContent } from "@/components/pages/BlogArticlePageContent";
import { notFound } from "next/navigation";
import { pageSeo } from "@/i18n/alternates";
import { ARTICLES, type LangKey } from "@/content/blogArticles";
import { metaDescription } from "@/lib/metaDescription";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return pageSeo(locale, `/blog/${slug}`);
  const lang = (locale in article.title ? locale : "en") as LangKey;
  const title = article.title[lang];
  const description = metaDescription(article.intro[lang]);
  return {
    title,
    description,
    // openGraph/twitter remplacent ceux du layout en entier : image et nom du site repris ici
    openGraph: {
      title,
      description,
      type: "article",
      locale,
      siteName: "Praxis Loten",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
    ...pageSeo(locale, `/blog/${slug}`),
  };
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
