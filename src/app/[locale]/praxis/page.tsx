import { setRequestLocale } from "next-intl/server";
import { PraxisPageContent } from "@/components/pages/PraxisPageContent";

export default async function PraxisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PraxisPageContent />;
}
