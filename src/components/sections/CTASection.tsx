"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CalendarPlus } from "lucide-react";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Gradient background — navy blue from logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b3186] via-[#1e2260] to-[#0d1120]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#76b82a]/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2b3186]/30 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white/70 leading-relaxed mb-10">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/termin"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-[#2b3186] rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-[1.03] shadow-2xl hover:shadow-white/25"
            >
              <CalendarPlus className="w-5 h-5" />
              {t("button")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
