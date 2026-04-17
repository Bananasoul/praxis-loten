"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Hand, Dumbbell, Smile, Droplets, ArrowRight } from "lucide-react";

const services = [
  {
    key: "manualTherapy" as const,
    icon: Hand,
    color: "from-primary-500 to-primary-700",
    bgLight: "bg-primary-50",
    iconColor: "text-primary-600",
    href: "/leistungen/manuelle-therapie",
  },
  {
    key: "sportPhysio" as const,
    icon: Dumbbell,
    color: "from-secondary-500 to-secondary-700",
    bgLight: "bg-secondary-50",
    iconColor: "text-secondary-600",
    href: "/leistungen/sportphysiotherapie",
  },
  {
    key: "jaw" as const,
    icon: Smile,
    color: "from-accent-500 to-accent-700",
    bgLight: "bg-accent-50",
    iconColor: "text-accent-600",
    href: "/leistungen/kiefergelenk",
  },
  {
    key: "lymph" as const,
    icon: Droplets,
    color: "from-purple-500 to-purple-700",
    bgLight: "bg-purple-50",
    iconColor: "text-purple-600",
    href: "/leistungen/lymphdrainage",
  },
];

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {t("sectionTitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.key}>
              <Link href={service.href} className="group block">
                <div className="relative p-8 rounded-3xl border border-neutral-200 bg-white hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgLight} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">
                      {t(`${service.key}.title`)}
                    </h3>
                    <p className="text-neutral-500 leading-relaxed mb-6">
                      {t(`${service.key}.description`)}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                      {t(`${service.key}.link`)}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
