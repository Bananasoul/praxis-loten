import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ServiceDetailPageContent } from "@/components/pages/ServiceDetailPageContent";

const SLUGS = ["manuelle-therapie", "sport-kinesitherapie", "kiefergelenk", "lymphdrainage"];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  return <ServiceDetailPageContent slug={slug} />;
}
