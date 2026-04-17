"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, MapPin, Clock, Users, Mail, Star } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

export function JobsPageContent() {
  const locale = useLocale() as LangKey;
  const tNav = useTranslations("nav");
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Work with us!
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {lang === "de" ? (
              <><span style={{ color: "#76b82a" }}>Jobs</span> bei Praxis Loten</>
            ) : (
              <>Rejoignez <span style={{ color: "#76b82a" }}>Praxis Loten</span></>
            )}
          </h1>
          <p className="max-w-xl mx-auto text-lg text-neutral-500">
            {lang === "de"
              ? "Wir suchen engagierte Physiotherapeuten für unser dynamisches Team in Eupen."
              : "Nous recherchons des kinésithérapeutes engagés pour rejoindre notre équipe dynamique à Eupen."}
          </p>
        </AnimatedSection>

        {/* Job offer card */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl border-2 border-[#76b82a]/20 overflow-hidden shadow-lg">

            {/* Header card */}
            <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-3 inline-block">
                    {lang === "de" ? "STELLENANGEBOT" : "OFFRE D'EMPLOI"}
                  </span>
                  <h2 className="text-2xl font-extrabold mb-1">
                    {lang === "de"
                      ? "Physiotherapeut / Manualtherapeut / Osteopath"
                      : "Kinésithérapeute / Thérapeute Manuel / Ostéopathe"}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-white/70 text-sm mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Eupen, Belgique</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />
                      {lang === "de" ? "Flexible Arbeitszeiten" : "Horaires flexibles"}
                    </span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />
                      {lang === "de" ? "Selbstständig / Angestellt" : "Indépendant / Salarié"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">

              {/* Description */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  {lang === "de" ? "Stellenbeschreibung" : "Description du poste"}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {lang === "de"
                    ? "Der ideale Kandidat begleitet Patienten auf dem Weg zu ihren Gesundheitszielen — Wohlbefinden, Funktionalität und Teilhabe — unter Einsatz seiner Qualifikationen, Fähigkeiten, Zeit und Energie."
                    : "Le candidat idéal accompagne les patients vers leurs objectifs de santé — bien-être, fonctionnalité et participation — en utilisant ses qualifications, compétences, temps et énergie."}
                </p>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  {lang === "de" ? "Erforderliche Qualifikationen" : "Qualifications requises"}
                </h3>
                <ul className="space-y-2.5">
                  {(lang === "de" ? [
                    "Master in Physiotherapie und Rehabilitation (Universität oder Hochschule)",
                    "Oder gleichwertige internationale Ausbildung mit belgischer INAMI-Nummer",
                    "Kenntnisse der deutschen und französischen Sprache",
                  ] : [
                    "Master en kinésithérapie et sciences de la rééducation (université ou haute école)",
                    "Ou toute formation internationale permettant l'obtention d'un numéro INAMI belge",
                    "Connaissance du français et de l'allemand",
                  ]).map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nous vous proposons */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">
                  {lang === "de" ? "Wir bieten Ihnen" : "Nous vous proposons"}
                </h3>
                <ul className="space-y-2.5">
                  {(lang === "de" ? [
                    "Angenehmes Arbeitsumfeld mit freundlichen Patienten und kollegialen Kollegen",
                    "Vollständig ausgestattetes Kabinett — von der einfachen Zervikalgie bis zur komplexen Reathletisierung",
                    "Professioneller Rahmen und günstige Bedingungen für die persönliche Entwicklung (Fortbildungen, etc.)",
                    "Nähe zu verschiedenen Fachärzten und Gesundheitseinrichtungen",
                    "Zentrale Lage in der Stadt Eupen",
                    "Sehr vorteilhafte Bedingungen für eine langfristige Zusammenarbeit",
                  ] : [
                    "Agréable ambiance de travail avec des patients sympathiques et des collègues accessibles",
                    "Lieu entièrement aménagé — de la plus simple cervicalgie à la réathlétisation la plus complexe",
                    "Cadre professionnel de qualité et conditions favorables au développement personnel (formations, etc.)",
                    "Proximité de différents médecins spécialistes et établissements de soins",
                    "Position centrale dans la ville d'Eupen",
                    "Conditions plus qu'avantageuses pour développer une collaboration sur le long terme",
                  ]).map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Horaires */}
              <div className="bg-neutral-50 rounded-2xl p-5">
                <h3 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#76b82a]" />
                  {lang === "de" ? "Arbeitszeiten" : "Horaires de travail"}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {lang === "de"
                    ? "Flexible Arbeitszeiten mit Räumlichkeiten, die 24/7 verfügbar sind, außer: Mo. 14–16h, Di. 15–16h, Do. 15–15:30h."
                    : "Horaires flexibles avec locaux disponibles 24h/24 et 7j/7, à l'exception des créneaux suivants : Lundi 14–16h, Mardi 15–16h, Jeudi 15–15:30h."}
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-neutral-100 pt-6">
                <h3 className="font-bold text-neutral-900 mb-4">
                  {lang === "de" ? "Jetzt bewerben" : "Postuler maintenant"}
                </h3>
                <a
                  href="mailto:praxisloten@gmail.com?subject=Candidature%20Kinésithérapeute%20Praxis%20Loten"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-5 h-5" />
                  praxisloten@gmail.com
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
