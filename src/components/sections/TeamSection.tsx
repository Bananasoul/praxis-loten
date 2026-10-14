"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { CalendarPlus, ArrowRight, Home, Languages } from "lucide-react";
import { getTherapistPortrait } from "@/lib/therapistPortraits";
import { THERAPISTS } from "@/content/team";
import { WeekHours } from "@/components/ui/WeekHours";

const LANG_FILTERS = ["DE", "FR", "EN", "PL"];
type Filter = "" | "HOME" | (typeof LANG_FILTERS)[number];

/** Cartes équipe avec langues parlées et filtre langue / domicile (inspiration 21st.dev « Team Profile Grid »). */
export function TeamSection() {
  const t = useTranslations("team");
  const [filter, setFilter] = useState<Filter>("");

  const matches = (m: (typeof THERAPISTS)[number]) =>
    !filter || (filter === "HOME" ? !!m.homeVisits : m.langs.includes(filter));

  const chip = (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? "bg-[#2b3186] text-white"
        : "bg-white border border-neutral-200 text-neutral-700 hover:border-[#2b3186]/40"
    }`;

  return (
    <section className="py-24 sm:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight text-balance">
            {t("sectionTitle")}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed text-balance">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label={t("speaks")}>
          <button type="button" aria-pressed={filter === ""} onClick={() => setFilter("")} className={chip(filter === "")}>
            {t("filterAll")}
          </button>
          {LANG_FILTERS.map((l) => (
            <button key={l} type="button" aria-pressed={filter === l} onClick={() => setFilter(filter === l ? "" : l)} className={chip(filter === l)}>
              {l}
            </button>
          ))}
          <button type="button" aria-pressed={filter === "HOME"} onClick={() => setFilter(filter === "HOME" ? "" : "HOME")} className={`${chip(filter === "HOME")} inline-flex items-center gap-1.5`}>
            <Home className="w-4 h-4" />
            {t("filterHome")}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {THERAPISTS.map((member) => {
            const portrait = getTherapistPortrait(member.slug, "card");
            const on = matches(member);
            return (
              <motion.div
                key={member.key}
                animate={{ opacity: on ? 1 : 0.35 }}
                whileHover={on ? { y: -6 } : undefined}
                transition={{ duration: 0.3 }}
                className={on ? "" : "saturate-50"}
                aria-hidden={on ? undefined : true}
              >
                <Link href={`/team/${member.slug}`} tabIndex={on ? undefined : -1} className="group block h-full">
                  <div className="relative h-full bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500">
                    <div className="relative h-56 overflow-hidden bg-[#2b3186]/5">
                      <Image
                        src={portrait.src}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={portrait.className}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-primary-600 font-medium mb-3">{t(`${member.key}.role`)}</p>

                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        <Languages className="w-4 h-4 text-[#76b82a]" aria-label={t("speaks")} />
                        {member.langs.map((l) => (
                          <span key={l} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#2b3186]/[0.06] text-[#2b3186]">
                            {l}
                          </span>
                        ))}
                        {member.homeVisits && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-[#76b82a]/10 text-[#3f6b12]">
                            <Home className="w-3 h-3" />
                            {t("filterHome")}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <WeekHours slug={member.slug} compact />
                      </div>

                      <p className="text-sm text-neutral-500 leading-relaxed italic mb-4">
                        &ldquo;{t(`${member.key}.quote`)}&rdquo;
                      </p>

                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 group-hover:text-primary-700">
                          {t("viewProfile")}
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-50 text-accent-600 rounded-lg text-xs font-semibold hover:bg-accent-100 transition-colors">
                          <CalendarPlus className="w-3 h-3" />
                          {t("bookAppointment")}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
