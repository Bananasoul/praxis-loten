"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SURGERY_DATA, type Slug } from "@/content/rehabSurgeries";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  CalendarPlus, CheckCircle2, Clock, ArrowRight, ArrowLeft,
  Activity, Target, AlertTriangle, Star, ChevronRight,
} from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

/* ─────────────────────────────── DATA ─────────────────────────────── */

/* ─────────────────────────────── UI STRINGS ─────────────────────────────── */

const UI: Record<string, {
  badge: string; backBtn: string; weeksLabel: string;
  whatIsTitle: string; whyRehabTitle: string; objectivesTitle: string;
  expectTitle: string; riskTitle: string; phasesTitle: string;
  cta: string; ctaSub: string; bookBtn: string; allPrograms: string;
}> = {
  de: {
    badge: "Post-Op Rehabilitation", backBtn: "Alle Programme", weeksLabel: "Wochen Rehabilitation",
    whatIsTitle: "Was ist diese Operation?", whyRehabTitle: "Warum ist Rehabilitation unerlässlich?",
    objectivesTitle: "Therapieziele", expectTitle: "Was erwartet Sie?",
    riskTitle: "Risiken ohne strukturierte Rehabilitation", phasesTitle: "Unser Behandlungsprogramm",
    cta: "Bereit für Ihre Rehabilitation?", ctaSub: "Vereinbaren Sie einen Ersttermin — wir erstellen Ihr individuelles Programm.",
    bookBtn: "Termin vereinbaren", allPrograms: "Alle Rehabilitationsprogramme",
  },
  fr: {
    badge: "Rééducation Post-Op", backBtn: "Tous les programmes", weeksLabel: "semaines de rééducation",
    whatIsTitle: "Qu'est-ce que cette opération ?", whyRehabTitle: "Pourquoi la rééducation est-elle indispensable ?",
    objectivesTitle: "Objectifs thérapeutiques", expectTitle: "À quoi vous attendre ?",
    riskTitle: "Risques sans rééducation structurée", phasesTitle: "Notre programme de traitement",
    cta: "Prêt pour votre rééducation ?", ctaSub: "Prenez rendez-vous pour un bilan initial — nous créons votre programme personnalisé.",
    bookBtn: "Prendre rendez-vous", allPrograms: "Tous les programmes de rééducation",
  },
  en: {
    badge: "Post-Op Rehabilitation", backBtn: "All programmes", weeksLabel: "weeks rehabilitation",
    whatIsTitle: "What is this surgery?", whyRehabTitle: "Why is rehabilitation essential?",
    objectivesTitle: "Treatment objectives", expectTitle: "What to expect?",
    riskTitle: "Risks without structured rehabilitation", phasesTitle: "Our treatment programme",
    cta: "Ready for your rehabilitation?", ctaSub: "Book an initial assessment — we create your personalised programme.",
    bookBtn: "Book appointment", allPrograms: "All rehabilitation programmes",
  },
  uk: {
    badge: "Реабілітація після операції", backBtn: "Усі програми", weeksLabel: "тижнів реабілітації",
    whatIsTitle: "Що це за операція?", whyRehabTitle: "Чому реабілітація необхідна?",
    objectivesTitle: "Цілі лікування", expectTitle: "Чого очікувати?",
    riskTitle: "Ризики без структурованої реабілітації", phasesTitle: "Наша програма лікування",
    cta: "Готові до реабілітації?", ctaSub: "Запишіться на первинну оцінку — ми створимо вашу персональну програму.",
    bookBtn: "Записатися", allPrograms: "Усі програми реабілітації",
  },
  es: {
    badge: "Rehabilitación postoperatoria", backBtn: "Todos los programas", weeksLabel: "semanas de rehabilitación",
    whatIsTitle: "¿Qué es esta operación?", whyRehabTitle: "¿Por qué es indispensable la rehabilitación?",
    objectivesTitle: "Objetivos terapéuticos", expectTitle: "¿Qué puede esperar?",
    riskTitle: "Riesgos sin una rehabilitación estructurada", phasesTitle: "Nuestro programa de tratamiento",
    cta: "¿Listo para su rehabilitación?", ctaSub: "Pida una evaluación inicial — creamos su programa personalizado.",
    bookBtn: "Pedir cita", allPrograms: "Todos los programas de rehabilitación",
  },
  ku: {
    badge: "Rehabîlîtasyona piştî emeliyatê", backBtn: "Hemû bername", weeksLabel: "hefte rehabîlîtasyon",
    whatIsTitle: "Ev emeliyat çi ye?", whyRehabTitle: "Çima rehabîlîtasyon pêwîst e?",
    objectivesTitle: "Armancên dermankirinê", expectTitle: "Hûn li bendê çi bin?",
    riskTitle: "Rîskên bê rehabîlîtasyona birêkûpêk", phasesTitle: "Bernameya me ya dermankirinê",
    cta: "Ji bo rehabîlîtasyona xwe amade ne?", ctaSub: "Ji bo nirxandineke destpêkê randevû bigirin — em bernameya we ya kesane çêdikin.",
    bookBtn: "Randevû bigire", allPrograms: "Hemû bernameyên rehabîlîtasyonê",
  },
  nl: {
    badge: "Post-Op Revalidatie", backBtn: "Alle programma's", weeksLabel: "weken revalidatie",
    whatIsTitle: "Wat is deze operatie?", whyRehabTitle: "Waarom is revalidatie essentieel?",
    objectivesTitle: "Behandeldoelen", expectTitle: "Wat kunt u verwachten?",
    riskTitle: "Risico's zonder gestructureerde revalidatie", phasesTitle: "Ons behandelprogramma",
    cta: "Klaar voor uw revalidatie?", ctaSub: "Maak een eerste afspraak — wij stellen uw gepersonaliseerd programma op.",
    bookBtn: "Afspraak maken", allPrograms: "Alle revalidatieprogramma's",
  },
  tr: {
    badge: "Ameliyat Sonrası Rehabilitasyon", backBtn: "Tüm programlar", weeksLabel: "hafta rehabilitasyon",
    whatIsTitle: "Bu ameliyat nedir?", whyRehabTitle: "Rehabilitasyon neden zorunludur?",
    objectivesTitle: "Tedavi hedefleri", expectTitle: "Ne bekleyebilirsiniz?",
    riskTitle: "Yapılandırılmış rehabilitasyon olmadan riskler", phasesTitle: "Tedavi programımız",
    cta: "Rehabilitasyonunuza hazır mısınız?", ctaSub: "Başlangıç değerlendirmesi için randevu alın — kişisel programınızı oluşturuyoruz.",
    bookBtn: "Randevu al", allPrograms: "Tüm rehabilitasyon programları",
  },
  ar: {
    badge: "تأهيل ما بعد الجراحة", backBtn: "جميع البرامج", weeksLabel: "أسابيع إعادة التأهيل",
    whatIsTitle: "ما هي هذه العملية؟", whyRehabTitle: "لماذا إعادة التأهيل ضرورية؟",
    objectivesTitle: "أهداف العلاج", expectTitle: "ماذا تتوقع؟",
    riskTitle: "مخاطر بدون إعادة تأهيل منظمة", phasesTitle: "برنامج علاجنا",
    cta: "هل أنت مستعد لإعادة التأهيل؟", ctaSub: "احجز تقييمًا أوليًا — نضع برنامجك الشخصي.",
    bookBtn: "حجز موعد", allPrograms: "جميع برامج إعادة التأهيل",
  },
  pl: {
    badge: "Rehabilitacja pooperacyjna", backBtn: "Wszystkie programy", weeksLabel: "tygodni rehabilitacji",
    whatIsTitle: "Czym jest ta operacja?", whyRehabTitle: "Dlaczego rehabilitacja jest niezbędna?",
    objectivesTitle: "Cele leczenia", expectTitle: "Czego się spodziewać?",
    riskTitle: "Ryzyko bez ustrukturyzowanej rehabilitacji", phasesTitle: "Nasz program leczenia",
    cta: "Gotowy na rehabilitację?", ctaSub: "Umów wizytę wstępną — tworzymy Twój spersonalizowany program.",
    bookBtn: "Umów wizytę", allPrograms: "Wszystkie programy rehabilitacji",
  },
};

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

export function RehabDetailPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang] ?? UI.en;
  const isRtl = lang === "ar";
  const data = SURGERY_DATA[slug as Slug];

  if (!data) return null;

  const title = (data.title as Record<string, string>)[lang] ?? data.title.en ?? data.title.de;
  const subtitle = (data.subtitle as Record<string, string>)[lang] ?? data.subtitle.en ?? data.subtitle.de;
  const surgeryExplain = (data.surgeryExplain as Record<string, string>)[lang] ?? data.surgeryExplain.en ?? data.surgeryExplain.de;
  const whyRehab = (data.whyRehab as Record<string, string[]>)[lang] ?? data.whyRehab.en ?? data.whyRehab.de;
  const objectives = (data.objectives as Record<string, string[]>)[lang] ?? data.objectives.en ?? data.objectives.de;
  const whatToExpect = (data.whatToExpect as Record<string, { heading: string; text: string }[]>)[lang] ?? data.whatToExpect.en ?? data.whatToExpect.de;
  const risks = (data.risks as Record<string, string[]>)[lang] ?? data.risks.en ?? data.risks.de;
  const phases = (data.phases as Record<string, { label: string; items: string[] }[]>)[lang] ?? data.phases.en ?? data.phases.de;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <AnimatedSection className="mb-8">
          <Link
            href="/rehabilitation"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ui.allPrograms}
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection className="mb-14">
          <div className={`bg-gradient-to-br ${data.color} rounded-3xl p-10 text-white`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold mb-5">
              <Activity className="w-3.5 h-3.5" />
              {ui.badge}
            </div>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <data.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-balance">{title}</h1>
                  <p className="text-white/70 mt-1 text-lg">{subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold">{data.weeks}</div>
                <div className="text-white/60 text-sm">{ui.weeksLabel}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* What is this surgery */}
        <AnimatedSection className="mb-12">
          <div className="bg-white rounded-3xl border border-neutral-200 p-8">
            <h2 className="text-xl font-extrabold text-neutral-900 mb-4 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${data.color}`}>
                <data.icon className="w-4.5 h-4.5 text-white w-5 h-5" />
              </div>
              {ui.whatIsTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base">{surgeryExplain}</p>
          </div>
        </AnimatedSection>

        {/* Why rehab + Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.05}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8 h-full">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#76b82a]" />
                {ui.whyRehabTitle}
              </h2>
              <ul className="space-y-3">
                {whyRehab.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#76b82a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8 h-full">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-5 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#2b3186]" />
                {ui.objectivesTitle}
              </h2>
              <ul className="space-y-3">
                {objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <ChevronRight className="w-4 h-4 text-[#2b3186] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* What to expect */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#2b3186]" />
            {ui.expectTitle}
          </h2>
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {whatToExpect.map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex gap-5">
                  <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${data.color}`}>
                    <span className="text-white font-extrabold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{step.heading}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Treatment phases */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#76b82a]" />
            {ui.phasesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {phases.map((phase, pi) => (
              <motion.div
                key={pi}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6"
              >
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4 bg-gradient-to-br ${data.color}`}>
                  <span className="text-white text-xs font-bold">{pi + 1}</span>
                </div>
                <h3 className="font-bold text-neutral-900 text-sm mb-3">{phase.label}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-xs text-neutral-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Risks without rehab */}
        <AnimatedSection className="mb-14">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <h2 className="text-lg font-extrabold text-red-800 mb-5 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              {ui.riskTitle}
            </h2>
            <ul className="space-y-2">
              {risks.map((risk, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">{ui.cta}</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto text-balance">{ui.ctaSub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/termin"
                className="inline-flex items-center justify-center min-w-[14rem] gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
              >
                <CalendarPlus className="w-5 h-5" />
                {ui.bookBtn}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/rehabilitation"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all"
              >
                {ui.allPrograms}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
