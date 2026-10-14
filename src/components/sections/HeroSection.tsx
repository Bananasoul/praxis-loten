"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  CalendarPlus,
  Users,
  MapPin,
  Clock,
  Languages,
  Home,
  Star,
  Navigation,
  ArrowRight,
} from "lucide-react";
import type { GooglePlaceData } from "@/lib/googlePlaces";
import { SERVICE_KEYS } from "@/content/team";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI";
const GOOGLE_REVIEWS = "https://search.google.com/local/reviews?placeid=ChIJwVa0rTSEwEcRJC82kAPG_CI";
const SPOKEN_LANGUAGES = "DE · FR · EN · PL";

/**
 * Hero clair (14/10/2026) : texte à gauche, « carte pratique » à droite à la place d'une photo.
 * Pas d'avis nominatif : seulement la note agrégée Google, quand l'API la fournit.
 */
export function HeroSection({ googleData }: { googleData?: GooglePlaceData | null }) {
  const t = useTranslations("hero");
  const tc = useTranslations("hero.card");
  const ts = useTranslations("services");
  const tr = useTranslations("rehab");
  const tn = useTranslations("nav");

  const chips = [
    ...Object.entries(SERVICE_KEYS).map(([slug, key]) => ({
      href: `/leistungen/${slug}`,
      label: ts(`${key}.title`),
    })),
    { href: "/rehabilitation", label: tr("sectionTitle") },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f6fc] via-[#f8faf4] to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        {/* Texte */}
        <div>
          <p className="hero-rise hero-d1 inline-flex items-center gap-2 text-sm font-medium text-[#5c9120] mb-5">
            <MapPin className="w-4 h-4" />
            {tc("eyebrow")}
          </p>

          <h1 className="hero-rise hero-d2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c2060] leading-[1.08] tracking-tight text-balance">
            {t("title1")}{" "}
            <span className="text-[#76b82a]">{t("title2")}</span>
          </h1>

          <p className="hero-rise hero-d3 mt-6 max-w-xl text-lg text-neutral-600 leading-relaxed text-balance">
            {t("subtitle")}
          </p>

          <div className="hero-rise hero-d4 mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/termin"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#76b82a]/25"
            >
              <CalendarPlus className="w-5 h-5" />
              {t("cta")}
            </Link>
            <Link
              href="/team"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-lg font-semibold text-[#2b3186] border border-[#2b3186]/25 hover:bg-[#2b3186]/5 transition-colors"
            >
              <Users className="w-5 h-5" />
              {tn("team")}
            </Link>
          </div>

          <ul className="hero-fade hero-d5 mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="inline-block px-3 py-1.5 rounded-full text-sm bg-[#2b3186]/[0.06] text-[#2b3186] hover:bg-[#2b3186]/[0.12] transition-colors"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Carte pratique */}
        <aside
          aria-label={tc("infoTitle")}
          className="hero-rise hero-d5 rounded-3xl bg-white border border-neutral-200/80 shadow-xl shadow-[#2b3186]/5 p-6 sm:p-8"
        >
          <a
            href={GOOGLE_REVIEWS}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 pb-5 border-b border-neutral-100"
          >
            {googleData ? (
              <>
                <span className="text-4xl font-extrabold text-[#1c2060]">
                  {googleData.rating.toFixed(1).replace(".", ",")}
                </span>
                <span>
                  <span className="flex text-amber-400" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-sm text-neutral-500 group-hover:underline">
                    {googleData.reviewCount} {tc("googleReviews")}
                  </span>
                </span>
              </>
            ) : (
              <span className="flex items-center gap-2 text-sm font-medium text-[#2b3186] group-hover:underline">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {tc("reviewsLink")}
              </span>
            )}
          </a>

          <ul className="mt-5 space-y-3 text-neutral-700">
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5 shrink-0 text-[#76b82a]" />
              {tc("hours")}
            </li>
            <li className="flex items-start gap-3">
              <Languages className="w-5 h-5 mt-0.5 shrink-0 text-[#76b82a]" />
              <span>
                {tc("languages")} <strong className="font-semibold text-[#1c2060]">{SPOKEN_LANGUAGES}</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Home className="w-5 h-5 mt-0.5 shrink-0 text-[#76b82a]" />
              {tc("homeVisits")}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#76b82a]" />
              Loten 1, 4700 Eupen
            </li>
          </ul>

          {/* Pas d'appel au numéro du cabinet : on oriente vers le choix du thérapeute (14/10/2026) */}
          <div className="mt-6 grid gap-2">
            <Link
              href="/termin"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#76b82a] text-white hover:bg-[#5c9120] transition-colors"
            >
              {tc("chooseTherapist")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-[#2b3186]/[0.06] text-[#2b3186] hover:bg-[#2b3186]/[0.12] transition-colors"
            >
              <Navigation className="w-4 h-4" />
              {tc("directions")}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
