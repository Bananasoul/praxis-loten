import { setRequestLocale } from "next-intl/server";
import { JobsPageContent } from "@/components/pages/JobsPageContent";

export default async function JobsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <JobsPageContent />;
}
