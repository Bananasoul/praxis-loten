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

// Slot resolver used by the article renderer
export function InfographicSlot({ kind, lang }: { kind: "spine" | "movement" | "reflexes"; lang: LangKey }) {
  if (kind === "spine") return <SpineReassurance lang={lang} />;
  if (kind === "movement") return <MovementDoseResponse lang={lang} />;
  if (kind === "reflexes") return <ThreeReflexes lang={lang} />;
  return null;
}
