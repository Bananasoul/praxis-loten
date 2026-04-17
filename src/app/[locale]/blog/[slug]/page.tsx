import { setRequestLocale } from "next-intl/server";
import { BlogArticlePageContent } from "@/components/pages/BlogArticlePageContent";
import { notFound } from "next/navigation";

const VALID_SLUGS = [
  "manuelle-therapie-rueckenschmerzen",
  "laufen-verletzungspraevention",
  "lymphdrainage-wann-wie",
  "kiefergelenk-cmd-symptome",
  "osteopathie-kinesitherapie-unterschied",
  "bfr-training-rehabilitation",
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
