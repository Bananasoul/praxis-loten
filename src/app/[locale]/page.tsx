import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { RehabSection } from "@/components/sections/RehabSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { fetchGooglePlaceData } from "@/lib/googlePlaces";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const googleData = await fetchGooglePlaceData();

  return (
    <>
      <HeroSection />
      <StatsSection googleData={googleData} />
      <ServicesSection />
      <RehabSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
