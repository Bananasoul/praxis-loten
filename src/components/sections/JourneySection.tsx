"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FileText, MessageSquareHeart, Hand, House } from "lucide-react";

const STEPS = [
  { n: 1, Icon: FileText },
  { n: 2, Icon: MessageSquareHeart },
  { n: 3, Icon: Hand },
  { n: 4, Icon: House },
] as const;

/**
 * « Comment ça se passe ? » : parcours patient en 4 étapes
 * (inspiration 21st.dev « Vertical How It Works Timeline »), vertical sur mobile, horizontal dès lg.
 * Contenu administratif et non clinique ; formulation anti-nocebo.
 */
export function JourneySection() {
  const t = useTranslations("journey");

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight text-balance">
            {t("title")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed text-balance">{t("subtitle")}</p>
        </AnimatedSection>

        <div className="relative">
          {/* Rail : vertical sur mobile, horizontal sur grand écran */}
          <span aria-hidden="true" className="absolute start-6 top-6 bottom-6 w-px border-s-2 border-dashed border-[#76b82a]/30 lg:hidden" />
          <span aria-hidden="true" className="absolute hidden lg:block top-6 inset-x-[12%] h-px border-t-2 border-dashed border-[#76b82a]/30" />
        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">

          {STEPS.map(({ n, Icon }, i) => (
            <li key={n} className="relative">
              <AnimatedSection delay={0.08 * i} className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2b3186] text-white text-lg font-bold ring-8 ring-white">
                  {n}
                </span>
                <div className="lg:mt-5">
                  <h3 className="flex items-center gap-2 lg:justify-center text-lg font-bold text-[#1c2060] mb-2">
                    <Icon className="w-5 h-5 text-[#76b82a]" aria-hidden="true" />
                    {t(`s${n}t`)}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed lg:max-w-[16rem] lg:mx-auto">{t(`s${n}d`)}</p>
                </div>
              </AnimatedSection>
            </li>
          ))}
        </ol>
        </div>
      </div>
    </section>
  );
}
