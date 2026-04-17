"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Mail, Clock, Star, Building2, Users, CalendarPlus } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

export function PraxisPageContent() {
  const locale = useLocale() as LangKey;
  const t = useTranslations("cabinet");
  const tNav = useTranslations("nav");
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;

  const features = lang === "de" ? [
    { icon: Building2, title: "Modernes Kabinett", desc: "Vollständig ausgestattete Räumlichkeiten, 24/7 zugänglich, zentral in Eupen gelegen." },
    { icon: Users, title: "6 Spezialisten", desc: "Ein interdisziplinäres Team mit Expertise in Manualtherapie, Sport, ATM und Lymphdrainage." },
    { icon: Star, title: "Manuthera 242", desc: "Hochmoderner Behandlungstisch aus Finnland — für präzise manualtherapeutische Techniken." },
    { icon: MapPin, title: "Nähe zu Spezialisten", desc: "In der Nähe des orthopädischen Krankenhauses (Hüft-/Knieprothesen, VKB-Rekonstruktion)." },
  ] : [
    { icon: Building2, title: "Cabinet moderne", desc: "Locaux entièrement équipés, accessibles 24h/24, situés au centre d'Eupen." },
    { icon: Users, title: "6 spécialistes", desc: "Une équipe interdisciplinaire avec expertise en thérapie manuelle, sport, ATM et drainage lymphatique." },
    { icon: Star, title: "Manuthera 242", desc: "Table de traitement haute technologie finlandaise — pour des techniques de thérapie manuelle précises." },
    { icon: MapPin, title: "Proximité avec les spécialistes", desc: "À proximité de l'hôpital orthopédique (prothèses hanche/genou, reconstruction LCA)." },
  ];

  const hours = [
    { day: lang === "de" ? "Montag" : "Lundi", hours: "08:00 – 20:00" },
    { day: lang === "de" ? "Dienstag" : "Mardi", hours: "08:00 – 20:00" },
    { day: lang === "de" ? "Mittwoch" : "Mercredi", hours: "08:00 – 20:00" },
    { day: lang === "de" ? "Donnerstag" : "Jeudi", hours: "08:00 – 20:00" },
    { day: lang === "de" ? "Freitag" : "Vendredi", hours: "08:00 – 20:00" },
    { day: lang === "de" ? "Samstag" : "Samedi", hours: lang === "de" ? "Nach Vereinbarung" : "Sur rendez-vous" },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {lang === "de" ? (
              <>Unsere <span style={{ color: "#76b82a" }}>Praxis</span></>
            ) : (
              <>Notre <span style={{ color: "#76b82a" }}>Cabinet</span></>
            )}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500">
            {lang === "de"
              ? "Moderne Physiotherapie in zentraler Lage in Eupen — für Ihre Gesundheit und Ihr Wohlbefinden."
              : "Kinésithérapie moderne en plein centre d'Eupen — pour votre santé et votre bien-être."}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Features + infos */}
          <div className="lg:col-span-2 space-y-6">

            {/* Features grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5" staggerDelay={0.1}>
              {features.map((f, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(118,184,42,0.12)" }}>
                      <f.icon className="w-5 h-5" style={{ color: "#76b82a" }} />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2">{f.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Description */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">
                  {lang === "de" ? "Herzlich Willkommen in der Praxis Loten" : "Bienvenue à Praxis Loten"}
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  {lang === "de" ? (
                    <>
                      <p>Praxis Loten ist ein modernes Physiotherapie-Kabinett in Eupen, Belgien, im Herzen der Deutschsprachigen Gemeinschaft. Unser dynamisches Team aus 6 spezialisierten Physiotherapeuten begleitet Sie auf Ihrem Weg zur Gesundheit.</p>
                      <p>Wir bieten eine breite Palette an Rehabilitationsleistungen: von der orthopädischen Manualtherapie bis zur spezialisierten Sportphysiotherapie, der Kiefergelenksbehandlung und der manuellen Lymphdrainage.</p>
                      <p>Unser Kabinett ist mit modernsten Geräten ausgestattet, darunter der <strong>Manuthera 242</strong> — ein hochwertiger finnischer Behandlungstisch für präzise und schonende Behandlungen.</p>
                      <p>Dank unserer Nähe zum orthopädischen Krankenhaus sind wir Ihr bevorzugter Partner für die postoperative Rehabilitation nach Hüft- oder Knieprothesen sowie nach Kreuzbandrekonstruktionen.</p>
                    </>
                  ) : (
                    <>
                      <p>Praxis Loten est un cabinet de kinésithérapie moderne situé à Eupen, en Belgique, au cœur de la Communauté germanophone. Notre équipe dynamique de 6 kinésithérapeutes spécialisés vous accompagne vers la santé.</p>
                      <p>Nous offrons une large gamme de services : de la thérapie manuelle orthopédique à la kinésithérapie du sport spécialisée, en passant par la prise en charge de l'articulation temporo-mandibulaire et le drainage lymphatique manuel.</p>
                      <p>Notre cabinet est équipé des appareils les plus modernes, dont le <strong>Manuthera 242</strong> — une table de traitement finlandaise haut de gamme pour des traitements précis et doux.</p>
                      <p>Grâce à notre proximité avec l'hôpital orthopédique, nous sommes votre partenaire privilégié pour la réhabilitation post-opératoire après prothèse de hanche ou de genou, ainsi qu'après reconstruction du LCA.</p>
                    </>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact + hours */}
          <div className="space-y-6">

            {/* Contact */}
            <AnimatedSection delay={0.15}>
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-5">
                  {lang === "de" ? "Kontakt" : "Contact"}
                </h3>
                <div className="space-y-4">
                  <a href="https://maps.google.com/?q=Loten+1+Eupen+Belgium" target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                    <MapPin className="w-5 h-5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Loten 1<br />B-4700 Eupen<br />Belgique / Belgien</span>
                  </a>
                  <a href="tel:+3287555670" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-5 h-5 text-[#76b82a] flex-shrink-0" />
                    <span className="text-sm">+32 (0)87 555 670</span>
                  </a>
                  <a href="mailto:praxisloten@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 text-[#76b82a] flex-shrink-0" />
                    <span className="text-sm">praxisloten@gmail.com</span>
                  </a>
                </div>
                <div className="mt-6">
                  <Link
                    href="/termin"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl font-semibold transition-colors"
                  >
                    <CalendarPlus className="w-4 h-4" />
                    {lang === "de" ? "Termin buchen" : "Prendre RDV"}
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection delay={0.25}>
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-[#76b82a]" />
                  <h3 className="font-bold text-neutral-900">
                    {lang === "de" ? "Öffnungszeiten" : "Horaires d'ouverture"}
                  </h3>
                </div>
                <div className="space-y-2.5">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-neutral-500">{h.day}</span>
                      <span className="font-medium text-neutral-900">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-4 italic">
                  {lang === "de"
                    ? "Auf Voranmeldung — flexible Zeiten möglich."
                    : "Sur rendez-vous — horaires flexibles possibles."}
                </p>
              </div>
            </AnimatedSection>

            {/* Google Maps */}
            <AnimatedSection delay={0.3}>
              <a
                href="https://g.page/r/CSQvNpADxvwiEAg/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-neutral-200 hover:border-[#76b82a]/50 hover:shadow-md transition-all"
              >
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-medium text-neutral-700">
                  {lang === "de" ? "Bewerten Sie uns auf Google" : "Évaluez-nous sur Google"}
                </span>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
