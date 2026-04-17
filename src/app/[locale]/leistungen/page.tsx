import { setRequestLocale } from "next-intl/server";
import { LeistungenPageContent } from "@/components/pages/LeistungenPageContent";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LeistungenPageContent />;
}
