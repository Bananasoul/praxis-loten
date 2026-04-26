"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-5">
              <div className="inline-block bg-white rounded-xl px-3 py-1.5">
                <Image
                  src="/logos/logo-full.jpeg"
                  alt="Praxis Loten"
                  width={160}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: nav("home") },
                { href: "/leistungen", label: nav("services") },
                { href: "/team", label: nav("team") },
                { href: "/rehabilitation", label: nav("rehabilitation") },
                { href: "/praxis", label: nav("cabinet") },
                { href: "/blog", label: nav("blog") },
                { href: "/jobs", label: nav("jobs") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-primary-400 transition-colors group"
                  title="Itinéraire vers Praxis Loten"
                >
                  Loten 1<br />
                  B-4700 Eupen<br />
                  Belgium
                  <span className="block text-xs text-primary-400/60 group-hover:text-primary-400 transition-colors mt-0.5">
                    → {t("getDirections")}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href="tel:+3287555670"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  +32 (0)87 555 670
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href="mailto:praxisloten@gmail.com"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  praxisloten@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>
                  Lun – Ven : 08:00 – 20:00<br />
                  Sam : Sur rendez-vous
                </span>
              </li>
            </ul>
          </div>

          {/* Google Reviews + Legal */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-400 mb-4">
              {t("followUs")}
            </h3>
            <a
              href="https://g.page/r/CSQvNpADxvwiEAg/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-sm text-white transition-colors mb-6"
            >
              <ExternalLink className="w-4 h-4" />
              Google Maps Review
            </a>

            <div className="mt-4 space-y-2">
              <Link
                href="/legal"
                className="block text-neutral-400 hover:text-neutral-300 text-xs transition-colors"
              >
                {t("legal")}
              </Link>
              <Link
                href="/privacy"
                className="block text-neutral-400 hover:text-neutral-300 text-xs transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href="/cookies"
                className="block text-neutral-400 hover:text-neutral-300 text-xs transition-colors"
              >
                {t("cookies")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-neutral-500 text-xs">
          © {new Date().getFullYear()} Praxis Loten. {t("allRights")}
        </div>
      </div>
    </footer>
  );
}
