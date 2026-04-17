import { setRequestLocale } from "next-intl/server";
import { TerminPageContent } from "@/components/pages/TerminPageContent";

export default async function AppointmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TerminPageContent />;
}
