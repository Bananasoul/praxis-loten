"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  Globe,
  ChevronDown,
  CalendarPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<string, { flag: string; name: string }> = {
  de: { flag: "🇩🇪", name: "Deutsch" },
  fr: { flag: "🇫🇷", name: "Français" },
  en: { flag: "🇬🇧", name: "English" },
  nl: { flag: "🇳🇱", name: "Nederlands" },
  tr: { flag: "🇹🇷", name: "Türkçe" },
  ar: { flag: "🇸🇦", name: "العربية" },
  pl: { flag: "🇵🇱", name: "Polski" },
};

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const isHomepage = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const isTransparent = isHomepage && !scrolled;

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/leistungen", label: t("services") },
    { href: "/team", label: t("team") },
    { href: "/rehabilitation", label: t("rehabilitation") },
    { href: "/praxis", label: t("cabinet") },
    { href: "/blog", label: t("blog") },
    { href: "/jobs", label: t("jobs") },
  ];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-xl shadow-sm border-b border-neutral-200/50"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* Logo on white header (scrolled) */}
            <div
              className={cn(
                "transition-all duration-300",
                isTransparent ? "opacity-0 absolute" : "opacity-100"
              )}
            >
              <Image
                src="/logos/logo-full.jpeg"
                alt="Praxis Loten"
                width={160}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            {/* Logo on dark hero (not scrolled): icon + text */}
            <div
              className={cn(
                "flex items-center gap-2 transition-all duration-300",
                isTransparent ? "opacity-100" : "opacity-0 absolute"
              )}
            >
              <Image
                src="/logos/logo-icon.jpeg"
                alt="Praxis Loten"
                width={44}
                height={44}
                className="h-11 w-11 object-contain rounded-full"
                priority
              />
              <div className="hidden sm:block">
                <span className="font-extrabold text-xl text-white leading-none">
                  PRAXIS
                </span>
                <br />
                <span className="font-bold text-base leading-none" style={{ color: "#93ce2a" }}>
                  Loten
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? isTransparent
                      ? "text-white bg-white/10"
                      : "text-[#76b82a] bg-[#76b82a]/10 font-semibold"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-neutral-700 hover:bg-[#76b82a]/10 hover:text-[#5c9120]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  isTransparent
                    ? "text-white/90 hover:bg-white/10"
                    : "text-neutral-700 hover:bg-neutral-100"
                )}
              >
                <Globe className="w-4 h-4" />
                <span>{LOCALE_LABELS[locale]?.flag}</span>
                <ChevronDown
                  className={cn(
                    "w-3 h-3 transition-transform",
                    langOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden z-50"
                  >
                    {routing.locales.map((l) => (
                      <button
                        key={l}
                        onClick={() => switchLocale(l)}
                        className={cn(
                          "flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors hover:bg-primary-50",
                          l === locale
                            ? "bg-primary-50 text-primary-700 font-medium"
                            : "text-neutral-700"
                        )}
                      >
                        <span className="text-lg">{LOCALE_LABELS[l]?.flag}</span>
                        <span>{LOCALE_LABELS[l]?.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="/termin"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#76b82a]/30"
            >
              <CalendarPlus className="w-4 h-4" />
              {t("appointment")}
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-neutral-700 hover:bg-neutral-100"
              )}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white border-t border-neutral-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-primary-50 text-primary-700"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3">
                <Link
                  href="/termin"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl text-base font-semibold transition-colors"
                >
                  <CalendarPlus className="w-5 h-5" />
                  {t("appointment")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
