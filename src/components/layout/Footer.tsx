"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, Star, Navigation } from "lucide-react";
import { CookieSettingsLink } from "@/components/ui/ConsentBanner";
import { LOCALE_LABELS } from "@/components/layout/Header";

const MAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI";

/**
 * Pied de page clair, assorti au header et au hero (14/10/2026) : logo de la charte sans pastille,
 * horaires, itinéraire, avis Google, et accès direct aux 10 langues de la page courante.
 * Pas de carte intégrée : un iframe Google Maps déposerait des cookies tiers sans consentement.
 */
export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const tc = useTranslations("hero.card");
  const locale = useLocale();
  const pathname = usePathname();

  const linkCls = "text-neutral-600 hover:text-[#5c9120] text-sm transition-colors";
  const headCls = "font-semibold text-xs uppercase tracking-wider text-[#2b3186] mb-4";

  return (
    <footer className="bg-[#f4f6fc] border-t border-neutral-200 text-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marque */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/logos/logo-full.png" alt="Praxis Loten" width={160} height={52} className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">{t("description")}</p>
            <a
              href="https://g.page/r/CSQvNpADxvwiEAg/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm font-medium text-[#2b3186] hover:border-[#2b3186]/40 transition-colors"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              {tc("reviewsLink")}
            </a>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className={headCls}>{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: nav("home") },
                { href: "/leistungen", label: nav("services") },
                { href: "/team", label: nav("team") },
                { href: "/rehabilitation", label: nav("rehabilitation") },
                { href: "/praxis", label: nav("cabinet") },
                { href: "/honoraires", label: nav("honoraires") },
                { href: "/blog", label: nav("blog") },
                { href: "/jobs", label: nav("jobs") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={headCls}>{t("contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#76b82a] shrink-0" />
                <span>
                  Loten 1, B-4700 Eupen
                  <a
                    href={MAPS_DIRECTIONS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex items-center gap-1 text-[#2b3186] font-medium hover:underline underline-offset-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    {t("getDirections")}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#76b82a] shrink-0" />
                <a href="tel:+3287555670" className={linkCls} dir="ltr">
                  087 55 56 70
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#76b82a] shrink-0" />
                <a href="mailto:praxisloten@gmail.com" className={linkCls}>
                  praxisloten@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-[#76b82a] shrink-0" />
                <span className="whitespace-pre-line">{t("hours")}</span>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div className="lg:pt-8">
            <ul className="space-y-3">
              <li><Link href="/legal" className={linkCls}>{t("legal")}</Link></li>
              <li><Link href="/privacy" className={linkCls}>{t("privacy")}</Link></li>
              <li><Link href="/cookies" className={linkCls}>{t("cookies")}</Link></li>
              <li><CookieSettingsLink className={`${linkCls} text-start`} /></li>
            </ul>
          </div>
        </div>

        {/* Langues + copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label={t("siteLanguages")} className="flex flex-wrap gap-x-3 gap-y-2 text-xs">
            {routing.locales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                hrefLang={l}
                aria-current={l === locale ? "true" : undefined}
                className={l === locale ? "font-semibold text-[#2b3186]" : "text-neutral-500 hover:text-[#2b3186]"}
              >
                {LOCALE_LABELS[l]?.name ?? l}
              </Link>
            ))}
          </nav>
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Praxis Loten. {t("allRights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
