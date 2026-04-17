"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CalendarPlus, Bone, Activity, Dumbbell, ArrowRight } from "lucide-react";

const rehabItems = [
  {
    key: "hip" as const,
    icon: Bone,
    gradient: "from-primary-600 to-primary-800",
  },
  {
    key: "knee" as const,
    icon: Activity,
    gradient: "from-secondary-600 to-secondary-800",
  },
  {
    key: "acl" as const,
    icon: Dumbbell,
    gradient: "from-accent-600 to-accent-800",
  },
  {
    key: "shoulder" as const,
    icon: Activity,
    gradient: "from-purple-600 to-purple-800",
  },
];

export function RehabSection() {
  const t = useTranslations("rehab");

  return (
    <section className="py-24 sm:py-32 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1120 0%, #1a1f52 50%, #0d1120 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            {t("sectionTitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
          {rehabItems.map((item) => (
            <StaggerItem key={item.key}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                <Link href={`/rehabilitation/${item.key}`} className="block relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-white/20 transition-colors group-hover:bg-white/10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(`${item.key}.title`)}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {t(`${item.key}.description`)}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-white/40 group-hover:text-white/70 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>{t("learnMore")}</span>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <Link
            href="/termin"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.03] shadow-2xl shadow-[#76b82a]/30"
          >
            <CalendarPlus className="w-5 h-5" />
            {t("cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
