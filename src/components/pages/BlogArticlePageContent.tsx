"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, CalendarPlus, CheckCircle2, BookOpen, Info, ListOrdered } from "lucide-react";
import Image from "next/image";
import { InfographicSlot } from "@/components/blog/Infographics";
import { getTherapistPortrait } from "@/lib/therapistPortraits";

import { ARTICLES, type LangKey } from "@/content/blogArticles";

const UI: Record<LangKey, {
  backBlog: string; readMin: string; keyPoints: string; bookCta: string; authorBy: string;
  bibliography: string; onThisPage: string;
}> = {
  de: { backBlog: "← Zurück zum Blog", readMin: "min Lesezeit", keyPoints: "Das Wichtigste auf einen Blick", bookCta: "Termin buchen", authorBy: "Geschrieben von", bibliography: "Bibliographie", onThisPage: "Auf dieser Seite" },
  fr: { backBlog: "← Retour au blog", readMin: "min de lecture", keyPoints: "L'essentiel en un coup d'œil", bookCta: "Prendre RDV", authorBy: "Écrit par", bibliography: "Bibliographie", onThisPage: "Sur cette page" },
  en: { backBlog: "← Back to blog", readMin: "min read", keyPoints: "Key takeaways", bookCta: "Book appointment", authorBy: "Written by", bibliography: "References", onThisPage: "On this page" },
  nl: { backBlog: "← Terug naar blog", readMin: "min leestijd", keyPoints: "De belangrijkste punten", bookCta: "Afspraak boeken", authorBy: "Geschreven door", bibliography: "Bibliografie", onThisPage: "Op deze pagina" },
  tr: { backBlog: "← Bloga dön", readMin: "dk okuma", keyPoints: "Temel çıkarımlar", bookCta: "Randevu al", authorBy: "Yazan", bibliography: "Kaynakça", onThisPage: "Bu sayfada" },
  ar: { backBlog: "← العودة إلى المدونة", readMin: "دقيقة قراءة", keyPoints: "النقاط الرئيسية", bookCta: "احجز موعدًا", authorBy: "كتبه", bibliography: "المراجع", onThisPage: "في هذه الصفحة" },
  pl: { backBlog: "← Powrót do bloga", readMin: "min czytania", keyPoints: "Najważniejsze punkty", bookCta: "Zarezerwuj wizytę", authorBy: "Napisane przez", bibliography: "Bibliografia", onThisPage: "Na tej stronie" },
  "uk": {
    "backBlog": "← Назад до блогу",
    "readMin": "хв читання",
    "keyPoints": "Головне з першого погляду",
    "bookCta": "Записатися на прийом",
    "authorBy": "Автор",
    "bibliography": "Бібліографія",
    "onThisPage": "На цій сторінці"
  },
  "es": {
    "backBlog": "← Volver al blog",
    "readMin": "min de lectura",
    "keyPoints": "Lo esencial de un vistazo",
    "bookCta": "Pedir cita",
    "authorBy": "Escrito por",
    "bibliography": "Bibliografía",
    "onThisPage": "En esta página"
  },
  "ku": {
    "backBlog": "← Vegere blogê",
    "readMin": "deq xwendin",
    "keyPoints": "Ya bingehîn bi nêrînekê",
    "bookCta": "Randevû bigire",
    "authorBy": "Nivîskar",
    "bibliography": "Bîbliyografî",
    "onThisPage": "Li ser vê rûpelê"
  },
};

function formatDate(dateStr: string, lang: LangKey) {
  const d = new Date(dateStr);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  const localeMap: Record<LangKey, string> = { de: "de-DE", fr: "fr-FR", en: "en-GB", nl: "nl-NL", tr: "tr-TR", ar: "ar-EG", pl: "pl-PL",
  "uk": "uk-UA",
  "es": "es-ES",
  "ku": "ku-TR" };
  return d.toLocaleDateString(localeMap[lang], opts);
}

/** Lightweight markdown renderer: **bold**, *italic*, > blockquote, •/- bullets, 1. numbered lists, \n\n paragraphs */
function renderMarkdown(text: string): React.ReactNode {
  const bulletRe = /^[•\-]\s/;
  const orderedRe = /^(?:\*\*)?(\d+)[\.\)]\s*\*?\*?\s*/;

  const blocks = text.split("\n\n");
  const result: React.ReactNode[] = [];

  let i = 0;
  while (i < blocks.length) {
    const trimmed = blocks[i].trim();
    if (!trimmed) { i++; continue; }

    // --- Blockquote ---
    if (trimmed.startsWith(">")) {
      const quoteContent = trimmed
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      result.push(
        <blockquote key={`bq-${i}`} className="border-l-4 border-[#76b82a] pl-4 my-4 italic text-neutral-600">
          {renderInline(quoteContent)}
        </blockquote>
      );
      i++; continue;
    }

    const lines = trimmed.split("\n").map((l) => l.trim());

    // --- Unordered list (all lines start with • or -) ---
    if (lines.length > 1 && lines.every((l) => bulletRe.test(l))) {
      result.push(
        <ul key={`ul-${i}`} className="list-disc list-outside pl-5 my-3 space-y-1.5">
          {lines.map((line, li) => (
            <li key={li} className="text-neutral-700">{renderInline(line.replace(bulletRe, ""))}</li>
          ))}
        </ul>
      );
      i++; continue;
    }

    // --- Ordered list: lines within ONE block separated by \n ---
    if (lines.length > 1 && lines.every((l) => orderedRe.test(l))) {
      result.push(
        <ol key={`ol-${i}`} className="list-decimal list-outside pl-5 my-3 space-y-2">
          {lines.map((line, li) => (
            <li key={li} className="text-neutral-700">{renderInline(line.replace(orderedRe, ""))}</li>
          ))}
        </ol>
      );
      i++; continue;
    }

    // --- Ordered list: consecutive \n\n-separated blocks each starting with a number ---
    if (orderedRe.test(trimmed) && !trimmed.includes("\n")) {
      const items: string[] = [];
      while (i < blocks.length) {
        const cur = blocks[i]?.trim();
        if (!cur) { i++; continue; }
        if (orderedRe.test(cur) && !cur.includes("\n")) {
          items.push(cur.replace(orderedRe, ""));
          i++;
        } else break;
      }
      if (items.length > 0) {
        result.push(
          <ol key={`ol2-${i}`} className="list-decimal list-outside pl-5 my-3 space-y-2">
            {items.map((item, li) => (
              <li key={li} className="text-neutral-700">{renderInline(item)}</li>
            ))}
          </ol>
        );
      }
      continue;
    }

    // --- Regular paragraph ---
    if (trimmed.includes("\n")) {
      // Preserve single \n as line breaks
      const sublines = trimmed.split("\n");
      result.push(
        <span key={`p-${i}`} className="block mb-3 last:mb-0">
          {sublines.map((sl, si) => (
            <span key={si}>{si > 0 && <br />}{renderInline(sl.trim())}</span>
          ))}
        </span>
      );
    } else {
      result.push(
        <span key={`p-${i}`} className="block mb-3 last:mb-0">{renderInline(trimmed)}</span>
      );
    }
    i++;
  }

  return result;
}

/** Parse inline markdown: **bold** and *italic* */
function renderInline(text: string): React.ReactNode {
  // Split by **bold** and *italic* patterns
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|«(.+?)»)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      // **bold**
      parts.push(<strong key={match.index} className="font-semibold text-neutral-900">{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={match.index}>{match[3]}</em>);
    } else if (match[4]) {
      // «guillemets» — render as styled quote
      parts.push(<span key={match.index} className="text-neutral-800">« {match[4]} »</span>);
    }
    lastIndex = match.index + match[0].length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

export function BlogArticlePageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang];
  const article = ARTICLES[slug];

  if (!article) return null;

  const authorPortrait = getTherapistPortrait(article.authorSlug, "thumbnail");
  const isRtl = lang === "ar";

  const BASE_URL = "https://www.praxisloten.be";
  const pickStr = (r: Record<LangKey, string>) => r[lang] ?? r.en ?? r.fr ?? "";
  const articleUrl = `${BASE_URL}/${lang}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    "headline": pickStr(article.title),
    "description": pickStr(article.intro),
    "inLanguage": lang,
    "datePublished": article.date,
    "dateModified": article.date,
    "url": articleUrl,
    "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
    "image": article.heroImage ? `${BASE_URL}${article.heroImage.src}` : `${BASE_URL}/og-image.png`,
    "keywords": (article.keyPoints[lang] ?? article.keyPoints.en ?? []).join(", "),
    "author": {
      "@type": "Person",
      "name": article.authorName,
      "url": `${BASE_URL}/${lang}/team/${article.authorSlug}`,
      "jobTitle": "Physiotherapist",
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Praxis Loten",
      "url": BASE_URL,
      "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logos/logo-full.png` },
    },
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <AnimatedSection className="mb-8">
          <Link href="/blog" className="text-sm text-neutral-500 hover:text-[#2b3186] transition-colors font-medium">
            {ui.backBlog}
          </Link>
        </AnimatedSection>

        {/* Hero image (optional, above banner) */}
        {article.heroImage && (
          <AnimatedSection className="mb-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt[lang] ?? article.heroImage.alt.fr ?? ""}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        )}

        {/* Header banner */}
        <AnimatedSection className="mb-10">
          <div className={`relative overflow-hidden bg-gradient-to-br ${article.color} rounded-3xl p-8 sm:p-12 text-white shadow-xl`}>
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                {article.category[lang]}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 max-w-4xl">
                {article.title[lang]}
              </h1>
              <div className="flex items-center gap-5 text-white/80 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readMin} {ui.readMin}
                </span>
                <span className="opacity-50">•</span>
                <time>{formatDate(article.date, lang)}</time>
                <span className="opacity-50">•</span>
                <span>{article.authorName}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-6">

            {/* Intro with drop cap */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
                <div className={`text-neutral-700 leading-relaxed text-lg ${!isRtl ? "[&>span:first-child]:first-letter:text-6xl [&>span:first-child]:first-letter:font-extrabold [&>span:first-child]:first-letter:text-[#2b3186] [&>span:first-child]:first-letter:mr-2 [&>span:first-child]:first-letter:float-left [&>span:first-child]:first-letter:leading-none [&>span:first-child]:first-letter:mt-1" : ""}`}>
                  {renderMarkdown(article.intro[lang])}
                </div>
              </div>
            </AnimatedSection>

            {/* Sections */}
            {article.sections.map((section, i) => (
              <AnimatedSection key={i} delay={0.05 * (i + 1)}>
                <div id={`section-${i}`} className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm scroll-mt-32">
                  <h2 className="text-2xl font-extrabold text-neutral-900 mb-5 leading-tight tracking-tight">
                    <span className={`inline-block w-1 h-6 align-middle bg-gradient-to-b ${article.color} rounded-full ${isRtl ? "ml-3" : "mr-3"}`} />
                    {section.heading[lang]}
                  </h2>
                  <div className="text-neutral-700 leading-[1.75] text-base">
                    {renderMarkdown(section.body[lang])}
                  </div>
                  {section.image && (
                    <figure className="mt-6 -mx-2">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt[lang] ?? section.image.alt.fr ?? ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 768px"
                          className="object-cover"
                        />
                      </div>
                      {section.image.caption?.[lang] && (
                        <figcaption className="mt-2 text-xs italic text-neutral-500 text-center">
                          {section.image.caption[lang]}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {section.infographic && (
                    <div className="mt-2 -mx-2">
                      <InfographicSlot kind={section.infographic} lang={lang} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}

            {/* Disclaimer */}
            {article.disclaimer && (
              <AnimatedSection delay={0.3}>
                <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
                  <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed italic">
                    {article.disclaimer[lang]}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Bibliography */}
            {article.bibliography && article.bibliography.length > 0 && (
              <AnimatedSection delay={0.35}>
                <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-5 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {ui.bibliography}
                  </h3>
                  <ol className="space-y-3 list-none">
                    {article.bibliography.map((ref, i) => (
                      <li key={i} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 text-neutral-500 text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="flex-1 italic">{ref}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            <div className="sticky top-28 space-y-6">

              {/* Table of contents */}
              {article.sections.length > 1 && (
                <AnimatedSection delay={0.1}>
                  <nav className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-sm">
                      <ListOrdered className="w-4 h-4 text-[#76b82a]" />
                      {ui.onThisPage}
                    </h3>
                    <ul className="space-y-2.5">
                      {article.sections.map((section, i) => (
                        <li key={i}>
                          <a
                            href={`#section-${i}`}
                            className="flex items-start gap-2 text-sm text-neutral-600 hover:text-[#2b3186] transition-colors group"
                          >
                            <span className="text-xs font-mono text-neutral-400 group-hover:text-[#76b82a] mt-0.5 flex-shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="leading-snug">{section.heading[lang]}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </AnimatedSection>
              )}

              {/* Key points */}
              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                  <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#76b82a]" />
                    {ui.keyPoints}
                  </h3>
                  <ul className="space-y-3">
                    {article.keyPoints[lang].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Author + CTA */}
              <AnimatedSection delay={0.25}>
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2b3186] to-[#1e2260] rounded-2xl p-6 text-white shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#76b82a]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-full bg-white/10 overflow-hidden flex-shrink-0 border-2 border-white/20">
                        <Image
                          src={authorPortrait.src}
                          alt={article.authorName}
                          fill
                          sizes="48px"
                          className={authorPortrait.className}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">{ui.authorBy}</p>
                        <Link
                          href={`/team/${article.authorSlug}`}
                          className="text-sm font-bold text-white hover:text-[#76b82a] transition-colors"
                        >
                          {article.authorName}
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-5 leading-relaxed">
                      {article.ctaText[lang]}
                    </p>
                    <Link
                      href="/termin"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl font-semibold transition-colors text-sm shadow-lg shadow-[#76b82a]/20"
                    >
                      <CalendarPlus className="w-4 h-4" />
                      {ui.bookCta}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
