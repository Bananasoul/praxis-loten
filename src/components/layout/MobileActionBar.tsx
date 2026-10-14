"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Navigation, CalendarPlus } from "lucide-react";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI";

/**
 * Barre d'action fixe en bas d'écran (Itinéraire · Prendre RDV ; pas d'appel au numéro du cabinet), mobile uniquement (59 % des sessions, 73 % des contacts :
 * audit GA4 du 09/10/2026). Masquée sur la page RDV, qui a ses propres boutons.
 * Le cabinet n'a pas de WhatsApp commun : WhatsApp reste par thérapeute, sur la page RDV.
 */
export function MobileActionBar() {
  const tc = useTranslations("hero.card");
  const nav = useTranslations("nav");
  const pathname = usePathname();

  if (pathname === "/termin") return null;

  return (
    <>
      {/* Réserve la hauteur de la barre pour qu'elle ne masque pas le bas de page */}
      <div className="h-[4.5rem] lg:hidden" aria-hidden="true" />
      <nav
        aria-label={nav("appointment")}
        className="fixed inset-x-0 bottom-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-200 pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-[1fr_2fr] gap-2 px-3 py-2.5">
          <a
            href={MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl text-[12px] font-semibold text-[#2b3186] hover:bg-[#2b3186]/5"
          >
            <Navigation className="w-5 h-5" />
            {tc("directions")}
          </a>
          <Link
            href="/termin"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#76b82a] hover:bg-[#5c9120] text-white text-sm font-semibold"
          >
            <CalendarPlus className="w-5 h-5" />
            {nav("appointment")}
          </Link>
        </div>
      </nav>
    </>
  );
}
