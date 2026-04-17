"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/ui/CountUp";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Users, Award, Layers, Heart } from "lucide-react";

export function StatsSection() {
  const t = useTranslations("stats");

  const stats = [
    { icon: Users, value: 6, label: t("therapists"), suffix: "" },
    { icon: Award, value: 10, label: t("experience"), suffix: "+" },
    { icon: Layers, value: 4, label: t("specialties"), suffix: "" },
    { icon: Heart, value: 1000, label: t("patients"), suffix: "+" },
  ];

  return (
    <section className="relative py-20" style={{ background: "#f5fce8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4" style={{ background: "rgba(118,184,42,0.12)" }}>
                  <stat.icon className="w-7 h-7" style={{ color: "#76b82a" }} />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold mb-2" style={{ color: "#2b3186" }}>
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <p className="text-sm font-medium uppercase tracking-wider" style={{ color: "#5c9120" }}>
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
