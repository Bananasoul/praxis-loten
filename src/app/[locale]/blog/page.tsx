import { setRequestLocale } from "next-intl/server";
import { BlogPageContent } from "@/components/pages/BlogPageContent";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogPageContent />;
}
