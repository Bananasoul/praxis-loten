/**
 * Reusable infographic components for the Praxis Loten blog.
 * Inline SVGs, accessible, responsive, no external deps.
 * Palette aligned with site identity (#76b82a green + cyan/teal accents).
 */

"use client";

import React from "react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const colors = {
  primary: "#0e7490",       // teal-700 — medical confidence
  primaryLight: "#67e8f9",  // cyan-300 — softness
  accent: "#76b82a",        // praxis-loten green — movement / energy
  ink: "#1f2937",           // gray-800 — text
  muted: "#6b7280",         // gray-500 — secondary
  bg: "#f9fafb",            // gray-50 — card bg
  border: "#e5e7eb",        // gray-200 — border
};

// ─────────────────────────────────────────────────────────────────────────────
// 1. SpineReassurance — Stylised spine + 3 empowerment words
// ─────────────────────────────────────────────────────────────────────────────

const SPINE_WORDS: Record<LangKey, [string, string, string, string]> = {
  fr: ["Solide.", "Mobile.", "Adaptable.", "Votre colonne est conçue pour bouger."],
  de: ["Stabil.", "Beweglich.", "Anpassungsfähig.", "Ihre Wirbelsäule ist zum Bewegen gebaut."],
  en: ["Strong.", "Mobile.", "Adaptable.", "Your spine is built to move."],
  nl: ["Sterk.", "Beweeglijk.", "Aanpasbaar.", "Uw wervelkolom is gemaakt om te bewegen."],
  tr: ["Sağlam.", "Hareketli.", "Uyumlu.", "Omurganız hareket etmek için tasarlandı."],
  ar: ["قوي.", "متحرك.", "قابل للتكيف.", "عمودك الفقري مصمم للحركة."],
  pl: ["Mocny.", "Ruchomy.", "Adaptacyjny.", "Twój kręgosłup jest stworzony do ruchu."],
};

export function SpineReassurance({ lang = "fr" }: { lang?: LangKey }) {
  const [w1, w2, w3, sub] = SPINE_WORDS[lang] ?? SPINE_WORDS.fr;
  const aria = `${w1} ${w2} ${w3} — ${sub}`;
  return (
    <figure
      className="my-8 rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={aria}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <svg viewBox="0 0 120 200" className="h-44 w-auto" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.primaryLight} />
              <stop offset="100%" stopColor={colors.primary} />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={i} transform={`translate(60, ${30 + i * 22})`}>
              <ellipse cx="0" cy="0" rx="22" ry="8" fill="url(#spineGrad)" opacity={0.85} />
              {i < 6 && <ellipse cx="0" cy="11" rx="18" ry="3" fill={colors.accent} opacity={0.65} />}
            </g>
          ))}
        </svg>
        <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
          {[w1, w2, w3].map((word, i) => (
            <div
              key={i}
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: colors.primary }}
            >
              {word}
            </div>
          ))}
          <p className="mt-2 text-sm" style={{ color: colors.muted }}>{sub}</p>
        </div>
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. MovementDoseResponse — Activity pictos + key message
// ─────────────────────────────────────────────────────────────────────────────

const MOVEMENT_TEXT: Record<LangKey, { headline: string; sub: string; activities: string[]; source: string }> = {
  fr: {
    headline: "30 à 60 min/jour",
    sub: "suffisent pour compenser une journée assise",
    activities: ["Marche", "Vélo", "Escaliers", "Jardinage", "Natation"],
    source: "Source : Ekelund et al., The Lancet, 2016 (n = 1 005 791)",
  },
  de: {
    headline: "30 bis 60 Min/Tag",
    sub: "genügen, um einen Bürotag auszugleichen",
    activities: ["Gehen", "Rad", "Treppen", "Garten", "Schwimmen"],
    source: "Quelle: Ekelund et al., The Lancet, 2016 (n = 1.005.791)",
  },
  en: {
    headline: "30 to 60 min/day",
    sub: "is enough to offset a sedentary day",
    activities: ["Walking", "Cycling", "Stairs", "Gardening", "Swimming"],
    source: "Source: Ekelund et al., The Lancet, 2016 (n = 1,005,791)",
  },
  nl: {
    headline: "30 tot 60 min/dag",
    sub: "volstaan om een dag zitten te compenseren",
    activities: ["Wandelen", "Fietsen", "Trap", "Tuinieren", "Zwemmen"],
    source: "Bron: Ekelund et al., The Lancet, 2016 (n = 1 005 791)",
  },
  tr: {
    headline: "Günde 30-60 dk",
    sub: "oturarak geçirilen günü dengelemek için yeterli",
    activities: ["Yürüyüş", "Bisiklet", "Merdiven", "Bahçe", "Yüzme"],
    source: "Kaynak: Ekelund ve ark., The Lancet, 2016 (n = 1.005.791)",
  },
  ar: {
    headline: "30 إلى 60 دقيقة/يوم",
    sub: "تكفي لتعويض يوم من الجلوس",
    activities: ["مشي", "دراجة", "سلالم", "حديقة", "سباحة"],
    source: "المصدر: إيكلوند وآخرون، The Lancet، 2016 (ن = 1,005,791)",
  },
  pl: {
    headline: "30 do 60 min/dzień",
    sub: "wystarczy, by zrekompensować dzień siedzenia",
    activities: ["Spacer", "Rower", "Schody", "Ogród", "Pływanie"],
    source: "Źródło: Ekelund i in., The Lancet, 2016 (n = 1 005 791)",
  },
};

const MOVEMENT_ICONS = ["🚶", "🚴", "🪜", "🌱", "🏊"];

export function MovementDoseResponse({ lang = "fr" }: { lang?: LangKey }) {
  const t = MOVEMENT_TEXT[lang] ?? MOVEMENT_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={`${t.headline} — ${t.sub}`}
    >
      <div className="mb-6 text-center">
        <div className="text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: colors.primary }}>
          {t.headline}
        </div>
        <div className="mt-1 text-sm font-medium md:text-base" style={{ color: colors.muted }}>
          {t.sub}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 md:gap-4">
        {t.activities.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full text-2xl md:h-16 md:w-16 md:text-3xl"
              style={{ backgroundColor: colors.bg, border: `2px solid ${colors.primaryLight}` }}
              aria-hidden="true"
            >
              {MOVEMENT_ICONS[i]}
            </div>
            <span className="text-xs font-medium md:text-sm" style={{ color: colors.ink }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div
        className="mt-6 border-t pt-4 text-center text-xs italic"
        style={{ borderColor: colors.border, color: colors.muted }}
      >
        {t.source}
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. ThreeReflexes — 3 round pictos summarising the actions
// ─────────────────────────────────────────────────────────────────────────────

const REFLEX_TEXT: Record<LangKey, [string, string][]> = {
  fr: [["Toutes les 30 min", "Levez-vous"], ["30 min/jour", "Bougez"], ["Faites confiance", "à votre dos"]],
  de: [["Alle 30 Min", "Aufstehen"], ["30 Min/Tag", "Bewegen"], ["Vertrauen", "in Ihren Rücken"]],
  en: [["Every 30 min", "Stand up"], ["30 min/day", "Move"], ["Trust", "your back"]],
  nl: [["Elke 30 min", "Sta op"], ["30 min/dag", "Beweeg"], ["Vertrouw", "uw rug"]],
  tr: [["Her 30 dk", "Ayağa kalk"], ["Günde 30 dk", "Hareket et"], ["Güvenin", "sırtınıza"]],
  ar: [["كل 30 دقيقة", "قف"], ["30 دقيقة/يوم", "تحرك"], ["ثق", "بظهرك"]],
  pl: [["Co 30 min", "Wstań"], ["30 min/dzień", "Ruszaj się"], ["Zaufaj", "swoim plecom"]],
};

export function ThreeReflexes({ lang = "fr" }: { lang?: LangKey }) {
  const items = REFLEX_TEXT[lang] ?? REFLEX_TEXT.fr;
  const svgs = [
    <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    <svg key="move" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 4v3a3 3 0 0 0 3 3h3" /><path d="M2 14h20" /><path d="M2 14a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-2H2v2z" /><path d="M6 14V8a4 4 0 0 1 4-4h3l8 8" /></svg>,
    <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  ];
  return (
    <figure
      className="my-8"
      role="img"
      aria-label={items.map(([t, s]) => `${t} ${s}`).join(" · ")}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map(([title, subtitle], i) => (
          <div
            key={i}
            className="flex flex-col items-center rounded-2xl border bg-white p-6 text-center transition-all hover:shadow-md hover:-translate-y-0.5 duration-200"
            style={{ borderColor: colors.border }}
          >
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: colors.bg, color: colors.primary }}
            >
              <div className="h-8 w-8">{svgs[i]}</div>
            </div>
            <div className="text-lg font-bold" style={{ color: colors.ink }}>{title}</div>
            <div className="text-sm" style={{ color: colors.muted }}>{subtitle}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. PainAlarm — Pain is an alarm, not always a lesion (sensitivity meter)
// ─────────────────────────────────────────────────────────────────────────────

const PAIN_ALARM_TEXT: Record<LangKey, { headline: string; sub: string; lo: string; hi: string; note: string }> = {
  fr: { headline: "La douleur, c'est une alarme.", sub: "Pas toujours une lésion.", lo: "Tissus", hi: "Sensibilité", note: "Une alarme sensible peut sonner sans qu'il y ait de fumée." },
  de: { headline: "Schmerz ist ein Alarm.", sub: "Nicht immer eine Verletzung.", lo: "Gewebe", hi: "Empfindlichkeit", note: "Ein empfindlicher Alarm kann ohne Rauch losgehen." },
  en: { headline: "Pain is an alarm.", sub: "Not always damage.", lo: "Tissue", hi: "Sensitivity", note: "A sensitive alarm can ring without smoke." },
  nl: { headline: "Pijn is een alarm.", sub: "Niet altijd een letsel.", lo: "Weefsel", hi: "Gevoeligheid", note: "Een gevoelig alarm kan afgaan zonder rook." },
  tr: { headline: "Ağrı bir alarmdır.", sub: "Her zaman bir hasar değil.", lo: "Doku", hi: "Hassasiyet", note: "Hassas bir alarm dumansız da çalabilir." },
  ar: { headline: "الألم هو إنذار.", sub: "ليس دائمًا إصابة.", lo: "الأنسجة", hi: "الحساسية", note: "إنذار حساس قد يدق دون دخان." },
  pl: { headline: "Ból to alarm.", sub: "Nie zawsze uszkodzenie.", lo: "Tkanki", hi: "Wrażliwość", note: "Czuły alarm może zadzwonić bez dymu." },
};

export function PainAlarm({ lang = "fr" }: { lang?: LangKey }) {
  const t = PAIN_ALARM_TEXT[lang] ?? PAIN_ALARM_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-gradient-to-br from-amber-50 to-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={`${t.headline} ${t.sub}`}
    >
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-around">
        <svg viewBox="0 0 120 120" className="h-32 w-32 flex-shrink-0" aria-hidden="true">
          <circle cx="60" cy="60" r="52" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
          <path d="M60 30v32" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
          <circle cx="60" cy="68" r="4" fill="#92400e" />
          <path d="M30 30 Q 60 10 90 30" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M22 38 Q 60 5 98 38" stroke="#f59e0b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
        </svg>
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
          <div className="mt-1 text-base font-medium" style={{ color: "#b45309" }}>{t.sub}</div>
          <div className="mt-4 space-y-2">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: colors.muted }}>
                <span>{t.lo}</span><span>30%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "30%", background: colors.primary }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1" style={{ color: colors.muted }}>
                <span>{t.hi}</span><span>85%</span>
              </div>
              <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: "85%", background: "#f59e0b" }} />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs italic" style={{ color: colors.muted }}>{t.note}</p>
        </div>
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. ImagingMyth — % asymptomatic adults with imaging findings (bar chart)
// ─────────────────────────────────────────────────────────────────────────────

const IMAGING_TEXT: Record<LangKey, { headline: string; sub: string; ages: string[]; finding: string; source: string }> = {
  fr: { headline: "Imagerie : ce qu'on trouve chez les gens en bonne santé", sub: "% sans aucune douleur ayant des « anomalies » à l'IRM", ages: ["20 ans", "40 ans", "60 ans", "80 ans"], finding: "Bombement discal", source: "Brinjikji et al., AJNR 2015 — n = 3 110" },
  de: { headline: "Bildgebung: Was man bei Gesunden findet", sub: "% Schmerzfreier mit „Auffälligkeiten\" im MRT", ages: ["20 J.", "40 J.", "60 J.", "80 J."], finding: "Bandscheibenvorwölbung", source: "Brinjikji et al., AJNR 2015 — n = 3 110" },
  en: { headline: "Imaging: what shows up in pain-free people", sub: "% of asymptomatic adults with MRI 'abnormalities'", ages: ["20 yrs", "40 yrs", "60 yrs", "80 yrs"], finding: "Disc bulge", source: "Brinjikji et al., AJNR 2015 — n = 3,110" },
  nl: { headline: "Beeldvorming: wat zien we bij pijnvrije mensen", sub: "% zonder pijn met MRI-'afwijkingen'", ages: ["20 j.", "40 j.", "60 j.", "80 j."], finding: "Schijfuitstulping", source: "Brinjikji et al., AJNR 2015 — n = 3 110" },
  tr: { headline: "Görüntüleme: ağrısız kişilerde ne görülür", sub: "MRG 'anormallikleri' olan ağrısız yetişkinlerin %", ages: ["20 yaş", "40 yaş", "60 yaş", "80 yaş"], finding: "Disk bombeleşmesi", source: "Brinjikji ve ark., AJNR 2015 — n = 3.110" },
  ar: { headline: "التصوير: ما يظهر لدى الأشخاص بلا ألم", sub: "% الأشخاص بلا ألم مع 'شذوذات' في الرنين", ages: ["20 سنة", "40 سنة", "60 سنة", "80 سنة"], finding: "بروز قرصي", source: "برينجيكجي وآخرون، AJNR 2015 — ن = 3,110" },
  pl: { headline: "Obrazowanie: co widać u osób bez bólu", sub: "% osób bez bólu z 'nieprawidłowościami' w MRI", ages: ["20 lat", "40 lat", "60 lat", "80 lat"], finding: "Wypuklina dysku", source: "Brinjikji i in., AJNR 2015 — n = 3 110" },
};

export function ImagingMyth({ lang = "fr" }: { lang?: LangKey }) {
  const t = IMAGING_TEXT[lang] ?? IMAGING_TEXT.fr;
  const data = [30, 50, 69, 84]; // % asymptomatic with bulge per age group
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="text-center mb-6">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
        <div className="text-sm mt-1" style={{ color: colors.muted }}>{t.sub}</div>
      </div>
      <div className="grid grid-cols-4 gap-3 md:gap-6 items-end h-44">
        {data.map((pct, i) => (
          <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
            <div className="text-sm font-bold" style={{ color: colors.primary }}>{pct}%</div>
            <div
              className="w-full rounded-t-lg transition-all"
              style={{
                height: `${pct}%`,
                background: `linear-gradient(180deg, ${colors.primaryLight}, ${colors.primary})`,
              }}
            />
            <div className="text-xs font-medium" style={{ color: colors.muted }}>{t.ages[i]}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-xs" style={{ color: colors.muted }}>
        <span className="font-semibold" style={{ color: colors.ink }}>{t.finding}</span> · <em>{t.source}</em>
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. ManualTherapyPillars — 4 pillars of modern manual therapy
// ─────────────────────────────────────────────────────────────────────────────

const MT_PILLARS: Record<LangKey, { headline: string; pillars: { title: string; desc: string }[] }> = {
  fr: { headline: "Les 4 piliers de la thérapie manuelle moderne", pillars: [
    { title: "Évaluer", desc: "Bilan clinique précis" },
    { title: "Mobiliser", desc: "Techniques manuelles douces" },
    { title: "Renforcer", desc: "Exercices personnalisés" },
    { title: "Expliquer", desc: "Comprendre votre corps" },
  ]},
  de: { headline: "Die 4 Säulen der modernen Manualtherapie", pillars: [
    { title: "Befunden", desc: "Präzise klinische Untersuchung" },
    { title: "Mobilisieren", desc: "Sanfte manuelle Techniken" },
    { title: "Kräftigen", desc: "Individuelle Übungen" },
    { title: "Erklären", desc: "Ihren Körper verstehen" },
  ]},
  en: { headline: "The 4 pillars of modern manual therapy", pillars: [
    { title: "Assess", desc: "Precise clinical evaluation" },
    { title: "Mobilise", desc: "Gentle hands-on techniques" },
    { title: "Strengthen", desc: "Tailored exercises" },
    { title: "Explain", desc: "Understand your body" },
  ]},
  nl: { headline: "De 4 pijlers van moderne manuele therapie", pillars: [
    { title: "Onderzoeken", desc: "Nauwkeurige klinische evaluatie" },
    { title: "Mobiliseren", desc: "Zachte manuele technieken" },
    { title: "Versterken", desc: "Op maat gemaakte oefeningen" },
    { title: "Uitleggen", desc: "Uw lichaam begrijpen" },
  ]},
  tr: { headline: "Modern manuel terapinin 4 sütunu", pillars: [
    { title: "Değerlendir", desc: "Hassas klinik muayene" },
    { title: "Mobilize et", desc: "Yumuşak manuel teknikler" },
    { title: "Güçlendir", desc: "Kişiye özel egzersizler" },
    { title: "Açıkla", desc: "Vücudunuzu anlayın" },
  ]},
  ar: { headline: "الأركان الأربعة للعلاج اليدوي الحديث", pillars: [
    { title: "تقييم", desc: "فحص سريري دقيق" },
    { title: "تحريك", desc: "تقنيات يدوية لطيفة" },
    { title: "تقوية", desc: "تمارين مخصصة" },
    { title: "شرح", desc: "افهم جسدك" },
  ]},
  pl: { headline: "4 filary nowoczesnej terapii manualnej", pillars: [
    { title: "Oceń", desc: "Precyzyjne badanie kliniczne" },
    { title: "Mobilizuj", desc: "Delikatne techniki manualne" },
    { title: "Wzmacniaj", desc: "Indywidualne ćwiczenia" },
    { title: "Wyjaśniaj", desc: "Zrozum swoje ciało" },
  ]},
};

export function ManualTherapyPillars({ lang = "fr" }: { lang?: LangKey }) {
  const t = MT_PILLARS[lang] ?? MT_PILLARS.fr;
  const icons = ["🔍", "🤲", "💪", "💡"];
  return (
    <figure
      className="my-8 rounded-2xl border bg-gradient-to-br from-cyan-50/40 to-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="text-center mb-6">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {t.pillars.map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border" style={{ borderColor: colors.border }}>
            <div className="text-3xl mb-2" aria-hidden="true">{icons[i]}</div>
            <div className="text-base font-bold" style={{ color: colors.primary }}>{p.title}</div>
            <div className="text-xs mt-1" style={{ color: colors.muted }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. ProgressionRule — The 10% rule for safe load progression
// ─────────────────────────────────────────────────────────────────────────────

const PROGRESSION_TEXT: Record<LangKey, { headline: string; sub: string; week: string; safe: string; risk: string; note: string }> = {
  fr: { headline: "Règle des 10%", sub: "Augmentez votre charge hebdomadaire de max 10%", week: "Semaine", safe: "Zone sûre", risk: "Zone à risque", note: "Le corps s'adapte mieux à des progressions douces qu'à des sauts brusques." },
  de: { headline: "10%-Regel", sub: "Wöchentliche Belastung um max. 10% steigern", week: "Woche", safe: "Sichere Zone", risk: "Risikozone", note: "Der Körper passt sich an sanfte Steigerungen besser an als an plötzliche Sprünge." },
  en: { headline: "The 10% rule", sub: "Increase your weekly load by max 10%", week: "Week", safe: "Safe zone", risk: "Risk zone", note: "The body adapts better to gentle progressions than to sudden jumps." },
  nl: { headline: "De 10%-regel", sub: "Verhoog uw wekelijkse belasting met max 10%", week: "Week", safe: "Veilige zone", risk: "Risicozone", note: "Het lichaam past zich beter aan geleidelijke toenames aan." },
  tr: { headline: "%10 kuralı", sub: "Haftalık yükünüzü en fazla %10 artırın", week: "Hafta", safe: "Güvenli bölge", risk: "Riskli bölge", note: "Vücut, ani sıçramalardan çok yumuşak ilerlemelere daha iyi uyum sağlar." },
  ar: { headline: "قاعدة 10%", sub: "زيادة الحمل الأسبوعي بحد أقصى 10%", week: "الأسبوع", safe: "منطقة آمنة", risk: "منطقة خطر", note: "يتكيف الجسم بشكل أفضل مع التدرجات اللطيفة." },
  pl: { headline: "Reguła 10%", sub: "Zwiększaj tygodniowe obciążenie maks. o 10%", week: "Tydzień", safe: "Strefa bezpieczna", risk: "Strefa ryzyka", note: "Ciało lepiej adaptuje się do łagodnych progresji niż nagłych skoków." },
};

export function ProgressionRule({ lang = "fr" }: { lang?: LangKey }) {
  const t = PROGRESSION_TEXT[lang] ?? PROGRESSION_TEXT.fr;
  const weeks = [100, 110, 121, 133, 146]; // +10%/week compounding
  const max = 200;
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={`${t.headline} — ${t.sub}`}
    >
      <div className="text-center mb-6">
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: colors.accent }}>{t.headline}</div>
        <div className="text-sm font-medium mt-1" style={{ color: colors.muted }}>{t.sub}</div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          <div className="h-1/2 border-b border-dashed" style={{ borderColor: "#fca5a5" }} />
        </div>
        <div className="grid grid-cols-5 gap-2 md:gap-3 items-end h-40">
          {weeks.map((val, i) => {
            const pct = (val / max) * 100;
            const inSafe = pct <= 75;
            return (
              <div key={i} className="flex flex-col items-center gap-1.5 h-full justify-end relative">
                <div className="text-xs font-bold" style={{ color: inSafe ? colors.accent : "#dc2626" }}>+{val - 100 === 0 ? 0 : Math.round(((val/100) - 1) * 100)}%</div>
                <div
                  className="w-full rounded-t-lg"
                  style={{
                    height: `${pct}%`,
                    background: inSafe
                      ? `linear-gradient(180deg, #b9e389, ${colors.accent})`
                      : `linear-gradient(180deg, #fca5a5, #dc2626)`,
                  }}
                />
                <div className="text-xs" style={{ color: colors.muted }}>{t.week} {i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-4 text-xs">
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm" style={{ background: colors.accent }} />{t.safe}</span>
        <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm" style={{ background: "#dc2626" }} />{t.risk}</span>
      </div>
      <p className="mt-4 text-center text-xs italic" style={{ color: colors.muted }}>{t.note}</p>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. LymphFlow — Lymphatic drainage flow direction
// ─────────────────────────────────────────────────────────────────────────────

const LYMPH_TEXT: Record<LangKey, { headline: string; sub: string; nodes: string; direction: string; gentle: string }> = {
  fr: { headline: "Drainage lymphatique : un système intelligent", sub: "Un réseau qui circule lentement, vers les ganglions", nodes: "Ganglions", direction: "Sens du drainage", gentle: "Pression douce, lente, rythmée" },
  de: { headline: "Lymphdrainage: ein intelligentes System", sub: "Ein Netzwerk, das langsam zu den Lymphknoten fließt", nodes: "Lymphknoten", direction: "Drainage-Richtung", gentle: "Sanfter, langsamer, rhythmischer Druck" },
  en: { headline: "Lymphatic drainage: a smart system", sub: "A network flowing slowly towards the nodes", nodes: "Lymph nodes", direction: "Drainage direction", gentle: "Soft, slow, rhythmic pressure" },
  nl: { headline: "Lymfedrainage: een slim systeem", sub: "Een netwerk dat langzaam naar de lymfeklieren stroomt", nodes: "Lymfeklieren", direction: "Drainagerichting", gentle: "Zachte, trage, ritmische druk" },
  tr: { headline: "Lenf drenajı: akıllı bir sistem", sub: "Lenf düğümlerine doğru yavaşça akan bir ağ", nodes: "Lenf düğümleri", direction: "Drenaj yönü", gentle: "Yumuşak, yavaş, ritmik basınç" },
  ar: { headline: "الصرف اللمفاوي: نظام ذكي", sub: "شبكة تتدفق ببطء نحو الغدد", nodes: "الغدد اللمفاوية", direction: "اتجاه الصرف", gentle: "ضغط ناعم وبطيء وإيقاعي" },
  pl: { headline: "Drenaż limfatyczny: inteligentny system", sub: "Sieć, która powoli płynie do węzłów chłonnych", nodes: "Węzły chłonne", direction: "Kierunek drenażu", gentle: "Delikatny, wolny, rytmiczny nacisk" },
};

export function LymphFlow({ lang = "fr" }: { lang?: LangKey }) {
  const t = LYMPH_TEXT[lang] ?? LYMPH_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-gradient-to-br from-teal-50 to-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="text-center mb-5">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
        <div className="text-sm mt-1" style={{ color: colors.muted }}>{t.sub}</div>
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-around">
        <svg viewBox="0 0 140 220" className="h-52 w-auto" aria-hidden="true">
          {/* Body silhouette */}
          <path d="M70 20 c -10 0 -16 8 -16 18 c 0 6 3 12 7 15 l -2 6 c -8 3 -16 10 -16 22 v 35 c 0 5 3 8 6 9 v 60 c 0 6 4 10 8 10 h 26 c 4 0 8 -4 8 -10 v -60 c 3 -1 6 -4 6 -9 v -35 c 0 -12 -8 -19 -16 -22 l -2 -6 c 4 -3 7 -9 7 -15 c 0 -10 -6 -18 -16 -18 z"
                fill={colors.bg} stroke={colors.muted} strokeWidth="1.5" />
          {/* Lymph nodes */}
          {[
            { cx: 56, cy: 60 }, { cx: 84, cy: 60 },     // neck
            { cx: 50, cy: 85 }, { cx: 90, cy: 85 },     // armpit
            { cx: 60, cy: 145 }, { cx: 80, cy: 145 },   // groin
          ].map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r="4.5" fill={colors.primary} />
          ))}
          {/* Flow arrows */}
          {[
            { d: "M 70 175 C 65 150 55 130 55 95", ms: 0 },
            { d: "M 70 175 C 75 150 85 130 85 95", ms: 200 },
            { d: "M 70 130 C 70 110 70 80 70 65", ms: 100 },
          ].map((arrow, i) => (
            <path key={i} d={arrow.d} stroke={colors.accent} strokeWidth="2" fill="none" strokeDasharray="4 3" strokeLinecap="round">
              <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" begin={`${arrow.ms}ms`} />
            </path>
          ))}
        </svg>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full" style={{ background: colors.primary }} /><span style={{ color: colors.ink }}>{t.nodes}</span></div>
          <div className="flex items-center gap-2"><span className="inline-block w-3 h-1 rounded-full" style={{ background: colors.accent }} /><span style={{ color: colors.ink }}>{t.direction}</span></div>
          <div className="text-xs italic mt-2 max-w-[200px]" style={{ color: colors.muted }}>{t.gentle}</div>
        </div>
      </div>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. CmdChecklist — TMJ symptoms checklist
// ─────────────────────────────────────────────────────────────────────────────

const CMD_TEXT: Record<LangKey, { headline: string; sub: string; symptoms: string[]; note: string }> = {
  fr: { headline: "Reconnaître un trouble de l'ATM (CMD)", sub: "5 signes courants à ne pas négliger", symptoms: ["Claquements / craquements à l'ouverture", "Maux de tête au réveil", "Douleur à la mastication", "Tensions dans les cervicales", "Limitation d'ouverture de la bouche"], note: "Plusieurs signes ensemble ? Une évaluation s'impose." },
  de: { headline: "CMD erkennen (Kiefergelenk)", sub: "5 häufige Anzeichen, die ernst zu nehmen sind", symptoms: ["Knacken / Reiben beim Öffnen", "Morgendliche Kopfschmerzen", "Schmerzen beim Kauen", "Verspannungen im Nacken", "Eingeschränkte Mundöffnung"], note: "Mehrere Anzeichen gleichzeitig? Eine Untersuchung ist sinnvoll." },
  en: { headline: "Recognising TMJ disorders (CMD)", sub: "5 common signs not to ignore", symptoms: ["Clicking / popping when opening", "Morning headaches", "Pain when chewing", "Neck tension", "Restricted mouth opening"], note: "Several signs together? An assessment is warranted." },
  nl: { headline: "Kaakgewrichtsklachten (CMD) herkennen", sub: "5 veelvoorkomende tekenen", symptoms: ["Klikken / kraken bij openen", "Hoofdpijn bij het ontwaken", "Pijn bij kauwen", "Spanning in de nek", "Beperkte mondopening"], note: "Meerdere tekenen samen? Een evaluatie is aangewezen." },
  tr: { headline: "Çene eklemi rahatsızlıklarını tanımak (CMD)", sub: "Göz ardı edilmemesi gereken 5 yaygın işaret", symptoms: ["Açarken klik / çatırtı", "Sabah baş ağrıları", "Çiğnerken ağrı", "Boyunda gerginlik", "Sınırlı ağız açıklığı"], note: "Birden fazla işaret bir arada? Değerlendirme gerekli." },
  ar: { headline: "التعرف على اضطرابات مفصل الفك (CMD)", sub: "5 علامات شائعة لا تتجاهلها", symptoms: ["طقطقة عند الفتح", "صداع صباحي", "ألم عند المضغ", "توتر في الرقبة", "تقييد فتح الفم"], note: "عدة علامات معًا؟ التقييم ضروري." },
  pl: { headline: "Rozpoznawanie zaburzeń stawu skroniowo-żuchwowego (CMD)", sub: "5 częstych objawów, których nie należy lekceważyć", symptoms: ["Klikanie / trzaski przy otwieraniu", "Poranne bóle głowy", "Ból przy żuciu", "Napięcie w karku", "Ograniczone otwieranie ust"], note: "Kilka objawów jednocześnie? Wskazana ocena." },
};

export function CmdChecklist({ lang = "fr" }: { lang?: LangKey }) {
  const t = CMD_TEXT[lang] ?? CMD_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="mb-5">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
        <div className="text-sm mt-1" style={{ color: colors.muted }}>{t.sub}</div>
      </div>
      <ul className="space-y-2.5">
        {t.symptoms.map((s, i) => (
          <li key={i} className="flex items-start gap-3 p-3 rounded-xl border bg-neutral-50/40" style={{ borderColor: colors.border }}>
            <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center" style={{ background: colors.primaryLight }}>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm font-medium" style={{ color: colors.ink }}>{s}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs italic text-center" style={{ color: colors.muted }}>{t.note}</p>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 10. KineVsOsteo — Kinesitherapy vs Osteopathy comparison
// ─────────────────────────────────────────────────────────────────────────────

const KO_TEXT: Record<LangKey, { headline: string; kine: { title: string; items: string[] }; osteo: { title: string; items: string[] }; together: string }> = {
  fr: {
    headline: "Kinésithérapie et ostéopathie : complémentaires",
    kine: { title: "Kinésithérapie", items: ["Remboursée (INAMI)", "Ordonnance médicale", "Exercices & rééducation", "Suivi long terme"] },
    osteo: { title: "Ostéopathie", items: ["Approche globale", "Sans ordonnance", "Techniques manuelles", "Séances ponctuelles"] },
    together: "Souvent combinées au cabinet — chacune apporte sa force.",
  },
  de: {
    headline: "Physiotherapie und Osteopathie: ergänzend",
    kine: { title: "Physiotherapie", items: ["Erstattet (INAMI)", "Ärztliche Verordnung", "Übungen & Rehabilitation", "Langzeitbegleitung"] },
    osteo: { title: "Osteopathie", items: ["Ganzheitlicher Ansatz", "Ohne Verordnung", "Manuelle Techniken", "Punktuelle Sitzungen"] },
    together: "Oft in der Praxis kombiniert — beide bringen ihre Stärken ein.",
  },
  en: {
    headline: "Physiotherapy and osteopathy: complementary",
    kine: { title: "Physiotherapy", items: ["Reimbursed (INAMI)", "Medical prescription", "Exercises & rehab", "Long-term follow-up"] },
    osteo: { title: "Osteopathy", items: ["Holistic approach", "No prescription needed", "Hands-on techniques", "Punctual sessions"] },
    together: "Often combined at the practice — each brings its strength.",
  },
  nl: {
    headline: "Kinesitherapie en osteopathie: complementair",
    kine: { title: "Kinesitherapie", items: ["Terugbetaald (INAMI)", "Medisch voorschrift", "Oefeningen & revalidatie", "Langetermijnbegeleiding"] },
    osteo: { title: "Osteopathie", items: ["Holistische aanpak", "Geen voorschrift nodig", "Manuele technieken", "Punctuele sessies"] },
    together: "Vaak gecombineerd in de praktijk — elk brengt zijn kracht.",
  },
  tr: {
    headline: "Fizyoterapi ve osteopati: tamamlayıcı",
    kine: { title: "Fizyoterapi", items: ["Geri ödemeli (INAMI)", "Tıbbi reçete", "Egzersiz & rehabilitasyon", "Uzun vadeli takip"] },
    osteo: { title: "Osteopati", items: ["Bütüncül yaklaşım", "Reçetesiz", "Manuel teknikler", "Anlık seanslar"] },
    together: "Klinikte sıklıkla birlikte kullanılır — her biri kendi gücünü getirir.",
  },
  ar: {
    headline: "العلاج الطبيعي والعلاج اليدوي: متكاملان",
    kine: { title: "العلاج الطبيعي", items: ["مغطى (INAMI)", "وصفة طبية", "تمارين وتأهيل", "متابعة طويلة المدى"] },
    osteo: { title: "العلاج اليدوي", items: ["نهج شامل", "بدون وصفة", "تقنيات يدوية", "جلسات متفرقة"] },
    together: "غالبًا ما يُجمع بينهما في العيادة — كلٌّ يقدم قوته.",
  },
  pl: {
    headline: "Fizjoterapia i osteopatia: uzupełniające się",
    kine: { title: "Fizjoterapia", items: ["Refundowana (INAMI)", "Skierowanie lekarskie", "Ćwiczenia i rehabilitacja", "Długoterminowa opieka"] },
    osteo: { title: "Osteopatia", items: ["Holistyczne podejście", "Bez skierowania", "Techniki manualne", "Sesje punktowe"] },
    together: "Często łączone w gabinecie — każda wnosi swoją siłę.",
  },
};

export function KineVsOsteo({ lang = "fr" }: { lang?: LangKey }) {
  const t = KO_TEXT[lang] ?? KO_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="text-center mb-6">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[t.kine, t.osteo].map((col, i) => (
          <div key={i} className="rounded-2xl p-5 border" style={{ borderColor: colors.border, background: i === 0 ? "#f0fdfa" : "#eef2ff" }}>
            <div className="text-base font-extrabold mb-3" style={{ color: i === 0 ? colors.primary : "#4338ca" }}>
              {col.title}
            </div>
            <ul className="space-y-2">
              {col.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm" style={{ color: colors.ink }}>
                  <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 0 ? colors.primary : "#4338ca" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-sm font-medium" style={{ color: colors.accent }}>{t.together}</p>
    </figure>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 11. BfrZone — Blood Flow Restriction pressure sweet spot
// ─────────────────────────────────────────────────────────────────────────────

const BFR_TEXT: Record<LangKey, { headline: string; sub: string; light: string; sweet: string; high: string; note: string }> = {
  fr: { headline: "BFR : la zone de pression idéale", sub: "% d'occlusion artérielle", light: "Trop léger", sweet: "Zone optimale", high: "Trop élevé", note: "À 40-80% d'occlusion, on stimule la croissance musculaire avec des charges légères." },
  de: { headline: "BFR: der ideale Druckbereich", sub: "% Arterienokklusion", light: "Zu leicht", sweet: "Optimal", high: "Zu hoch", note: "Bei 40-80% Okklusion stimuliert man Muskelaufbau mit leichten Lasten." },
  en: { headline: "BFR: the optimal pressure zone", sub: "% arterial occlusion", light: "Too low", sweet: "Sweet spot", high: "Too high", note: "At 40-80% occlusion, you trigger muscle growth with light loads." },
  nl: { headline: "BFR: de ideale drukzone", sub: "% slagaderocclusie", light: "Te licht", sweet: "Optimale zone", high: "Te hoog", note: "Bij 40-80% occlusie stimuleer je spiergroei met lichte belastingen." },
  tr: { headline: "BFR: ideal basınç bölgesi", sub: "% arteryel oklüzyon", light: "Çok hafif", sweet: "Optimal bölge", high: "Çok yüksek", note: "%40-80 oklüzyonda hafif yüklerle kas büyümesi tetiklenir." },
  ar: { headline: "BFR: منطقة الضغط المثالية", sub: "% انسداد شرياني", light: "خفيف جدًا", sweet: "المنطقة المثلى", high: "مرتفع جدًا", note: "عند 40-80% انسداد، يُحفَّز نمو العضلات بأحمال خفيفة." },
  pl: { headline: "BFR: optymalna strefa nacisku", sub: "% okluzji tętniczej", light: "Za mało", sweet: "Optymalna strefa", high: "Za dużo", note: "Przy 40-80% okluzji wyzwalasz wzrost mięśni przy lekkich obciążeniach." },
};

export function BfrZone({ lang = "fr" }: { lang?: LangKey }) {
  const t = BFR_TEXT[lang] ?? BFR_TEXT.fr;
  return (
    <figure
      className="my-8 rounded-2xl border bg-white p-6 md:p-8 shadow-sm"
      style={{ borderColor: colors.border }}
      role="img"
      aria-label={t.headline}
    >
      <div className="text-center mb-6">
        <div className="text-lg md:text-xl font-extrabold tracking-tight" style={{ color: colors.ink }}>{t.headline}</div>
        <div className="text-sm mt-1" style={{ color: colors.muted }}>{t.sub}</div>
      </div>
      <div className="relative h-12 rounded-full overflow-hidden flex">
        <div className="flex-1 flex items-center justify-center text-xs font-bold text-white" style={{ background: "#fef3c7", color: "#92400e" }}>0-40%</div>
        <div className="flex-[2] flex items-center justify-center text-xs font-bold text-white" style={{ background: `linear-gradient(90deg, ${colors.accent}, #5c9120)` }}>40-80%</div>
        <div className="flex-1 flex items-center justify-center text-xs font-bold text-white" style={{ background: "#dc2626" }}>80-100%</div>
      </div>
      <div className="mt-3 grid grid-cols-3 text-center text-xs">
        <div style={{ color: "#92400e" }}>{t.light}</div>
        <div className="font-bold" style={{ color: colors.accent }}>{t.sweet}</div>
        <div style={{ color: "#dc2626" }}>{t.high}</div>
      </div>
      <p className="mt-5 text-center text-xs italic" style={{ color: colors.muted }}>{t.note}</p>
    </figure>
  );
}

// Slot resolver used by the article renderer
export type InfographicKind =
  | "spine" | "movement" | "reflexes"
  | "pain-alarm" | "imaging-myth" | "manual-therapy-pillars"
  | "progression-rule" | "lymph-flow" | "cmd-checklist"
  | "kine-vs-osteo" | "bfr-zone";

export function InfographicSlot({ kind, lang }: { kind: InfographicKind; lang: LangKey }) {
  switch (kind) {
    case "spine": return <SpineReassurance lang={lang} />;
    case "movement": return <MovementDoseResponse lang={lang} />;
    case "reflexes": return <ThreeReflexes lang={lang} />;
    case "pain-alarm": return <PainAlarm lang={lang} />;
    case "imaging-myth": return <ImagingMyth lang={lang} />;
    case "manual-therapy-pillars": return <ManualTherapyPillars lang={lang} />;
    case "progression-rule": return <ProgressionRule lang={lang} />;
    case "lymph-flow": return <LymphFlow lang={lang} />;
    case "cmd-checklist": return <CmdChecklist lang={lang} />;
    case "kine-vs-osteo": return <KineVsOsteo lang={lang} />;
    case "bfr-zone": return <BfrZone lang={lang} />;
    default: return null;
  }
}
