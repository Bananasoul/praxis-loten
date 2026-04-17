import { setRequestLocale } from "next-intl/server";
import { RehabPageContent } from "@/components/pages/RehabPageContent";

export default async function RehabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <RehabPageContent />;
}
