import { setRequestLocale } from "next-intl/server";
import { HonorairesPageContent } from "@/components/pages/HonorairesPageContent";

export default async function HonorairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HonorairesPageContent />;
}
