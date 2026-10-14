"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CalendarOff } from "lucide-react";

/** Mention pour un thérapeute qui ne prend pas de rendez-vous, avec renvoi vers le choix d'un collègue. */
export function NotBookingNotice({ withLink = true }: { withLink?: boolean }) {
  const t = useTranslations("team");
  return (
    <div className="rounded-xl bg-amber-50 border border-amber-200 px-3 py-2.5 text-[13px] text-amber-900">
      <p className="flex items-center gap-1.5 font-semibold">
        <CalendarOff className="w-4 h-4 shrink-0" aria-hidden="true" />
        {t("notBooking")}
      </p>
      {withLink && (
        <Link href="/termin" className="mt-1 inline-flex items-center gap-1 font-medium text-[#2b3186] hover:underline underline-offset-2">
          {t("seeColleagues")}
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}
