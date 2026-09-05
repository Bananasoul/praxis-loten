"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ARTICLES } from "@/components/pages/BlogPageContent";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const UI: Record<LangKey, { eyebrow: string; title: string; cta: string; readMin: string }> = {
  de: { eyebrow: "Aus dem Blog", title: "Neueste Artikel", cta: "Alle Artikel", readMin: "min" },
  fr: { eyebrow: "Du blog", title: "Derniers articles", cta: "Tous les articles", readMin: "min" },
  en: { eyebrow: "From the blog", title: "Latest articles", cta: "All articles", readMin: "min" },
  nl: { eyebrow: "Uit de blog", title: "Recente artikelen", cta: "Alle artikelen", readMin: "min" },
  tr: { eyebrow: "Blogdan", title: "Son makaleler", cta: "Tüm makaleler", readMin: "dk" },
  ar: { eyebrow: "من المدونة", title: "أحدث المقالات", cta: "كل المقالات", readMin: "د" },
  pl: { eyebrow: "Z bloga", title: "Najnowsze artykuły", cta: "Wszystkie artykuły", readMin: "min" },
};

export function RecentArticlesStrip() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang];

  // Top 3 most recent articles
  const recent = [...ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Discreet header */}
        <AnimatedSection className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-400 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{ui.eyebrow}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight text-balance">
              {ui.title}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 hover:text-[#76b82a] transition-colors group"
          >
            {ui.cta}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </AnimatedSection>

        {/* Cards — minimal, no large color blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recent.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${article.slug}`}
                className="group block h-full p-5 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-100 hover:border-neutral-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{
                      background:
                        article.color.includes("76b82a") ? "#76b82a"
                        : article.color.includes("0e7490") ? "#0e7490"
                        : article.color.includes("teal") ? "#0d9488"
                        : article.color.includes("purple") ? "#7e22ce"
                        : article.color.includes("indigo") ? "#4338ca"
                        : article.color.includes("orange") ? "#ea580c"
                        : "#2b3186",
                    }}
                  />
                  {article.category[lang]}
                  <span className="text-neutral-300">·</span>
                  <Clock className="w-3 h-3" />
                  <span>{article.readMin} {ui.readMin}</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 leading-snug line-clamp-3 group-hover:text-[#2b3186] transition-colors">
                  {article.title[lang]}
                </h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-2">
                  {article.excerpt[lang]}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
