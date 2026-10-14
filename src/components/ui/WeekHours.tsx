"use client";

import { useLocale, useTranslations } from "next-intl";
import { Clock } from "lucide-react";
import { WEEK_HOURS, NOT_BOOKING } from "@/content/team";
import { NotBookingNotice } from "@/components/ui/NotBookingNotice";

/** Jours lun → ven, écrits en dur : Intl peut différer entre serveur et navigateur (erreur d'hydratation). */
const DAYS: Record<string, string[]> = {
  fr: ["Lun", "Mar", "Mer", "Jeu", "Ven"],
  de: ["Mo", "Di", "Mi", "Do", "Fr"],
  en: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  nl: ["Ma", "Di", "Wo", "Do", "Vr"],
  tr: ["Pzt", "Sal", "Çar", "Per", "Cum"],
  ar: ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"],
  pl: ["Pn", "Wt", "Śr", "Cz", "Pt"],
  uk: ["Пн", "Вт", "Ср", "Чт", "Пт"],
  es: ["Lun", "Mar", "Mié", "Jue", "Vie"],
  ku: ["Duş", "Sêş", "Çar", "Pên", "În"],
};

/**
 * Jours et heures de présence d'un thérapeute au cabinet (source : fiche « Occupation des cabinets Loten »).
 * `compact` : seulement les jours présents en pastilles (cartes de l'accueil).
 */
export function WeekHours({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const t = useTranslations("team");
  const locale = useLocale();
  const hours = WEEK_HOURS[slug];
  const days = DAYS[locale] ?? DAYS.en;

  if (NOT_BOOKING.has(slug)) return <NotBookingNotice withLink={!compact} />;

  if (!hours) {
    return (
      <p className="flex items-center gap-1.5 text-xs text-neutral-500">
        <Clock className="w-3.5 h-3.5 text-[#76b82a]" aria-hidden="true" />
        {t("hoursOnRequest")}
      </p>
    );
  }

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-1" aria-label={t("hoursTitle")}>
        <Clock className="w-4 h-4 text-[#76b82a] me-0.5" aria-hidden="true" />
        {days.map((d, i) => (
          <span
            key={d}
            title={hours[i] ?? undefined}
            className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${hours[i] ? "bg-[#76b82a]/10 text-[#3f6b12]" : "text-neutral-300 line-through"}`}
          >
            {d}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="flex items-center gap-1.5 text-[12px] font-semibold text-[#1c2060] mb-1.5">
        <Clock className="w-3.5 h-3.5 text-[#76b82a]" aria-hidden="true" />
        {t("hoursTitle")}
      </p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-[12px]">
        {days.map((d, i) => (
          <div key={d} className="contents">
            <dt className={`capitalize ${hours[i] ? "text-neutral-500" : "text-neutral-300"}`}>{d}</dt>
            <dd className={hours[i] ? "text-neutral-800 tabular-nums" : "text-neutral-300"} dir="ltr">{hours[i] ?? "—"}</dd>
          </div>
        ))}
      </dl>
      <p className="text-[11px] text-neutral-400 mt-1.5">{t("hoursNote")}</p>
    </div>
  );
}
