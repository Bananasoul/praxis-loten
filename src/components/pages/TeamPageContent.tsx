"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";
import { CalendarPlus, ExternalLink, GraduationCap, Star, Globe2, Clock, Phone } from "lucide-react";

const TEAM = [
  {
    key: "philippe",
    name: "Philippe Banaszak",
    slug: "philippe-banaszak",
    initials: "PB",
    color: "from-[#2b3186] to-[#1e2260]",
    role: { de: "Manuelle Therapie Orthopädie", fr: "Thérapie Manuelle Orthopédique" },
    tags: ["CUTM IFOMPT", "QPP", "Ostéo", "IFOMPT 2024"],
    languages: ["Français", "Deutsch", "English", "Polski"],
    booking: { label: "WhatsApp", href: "https://wa.me/32478218186" },
    bookingOnline: { label: "Crossuite", href: "https://bookings.crossuite.app/50ffa29e-e6ec-496c-95f6-0b41eb3d2071" },
    phone: "+32 478 21 81 86",
    bio: {
      de: "Spezialist für orthopädische Manualtherapie mit IFOMPT-Zertifizierung. Absolvent der Haute École André Vésale (2008–2012), CUTM-Zertifikat der Universität Lüttich (2015–2017). Regelmäßige internationale Fortbildungen (ECMT, IFOMPT Basel 2024).",
      fr: "Spécialiste en thérapie manuelle orthopédique certifié IFOMPT. Diplômé de la Haute École André Vésale (2008–2012), Certificat Universitaire en Thérapie Manuelle (CUTM) ULiège (2015–2017). Formations continues internationales régulières (ECMT, IFOMPT Bâle 2024).",
      en: "Specialist in orthopaedic manual therapy, IFOMPT certified. Graduate of Haute École André Vésale (2008–2012), University Certificate in Manual Therapy (CUTM) ULiège (2015–2017). Regular international continuing education (ECMT, IFOMPT Basel 2024).",
      nl: "Specialist orthopedische manuele therapie, IFOMPT gecertificeerd. Afgestudeerd aan Haute École André Vésale (2008–2012), Universitair Certificaat Manuele Therapie ULiège (2015–2017).",
      tr: "IFOMPT sertifikalı ortopedik manuel terapi uzmanı. Haute École André Vésale mezunu (2008–2012), ULiège Manuel Terapi Üniversite Sertifikası (2015–2017).",
      ar: "متخصص في العلاج اليدوي العظمي، حاصل على شهادة IFOMPT. خريج Haute École André Vésale (2008–2012)، شهادة جامعية في العلاج اليدوي من ULiège (2015–2017).",
      pl: "Specjalista terapii manualnej ortopedycznej z certyfikatem IFOMPT. Absolwent Haute École André Vésale (2008–2012), Certyfikat Uniwersytecki z Terapii Manualnej ULiège (2015–2017).",
    },
    parcours: [
      { year: "2008–2012", title: "Haute École André Vésale — Master Kinésithérapie" },
      { year: "2013–2014", title: "SERK — Thérapie Manuelle selon Sohier" },
      { year: "2014–2015", title: "IAO — Ostéopathie (manipulations & tissus mous)" },
      { year: "2015–2017", title: "ULiège — CUTM IFOMPT / QPP Kinésithérapie Manuelle" },
      { year: "2019", title: "ECMT 9 — Cervico-cephalic complaints" },
      { year: "2023", title: "ECMT 10 — Patient-centred care" },
      { year: "2024", title: "IFOMPT Basel — World Conference Musculoskeletal PT" },
    ],
    convention: null,
    note: null,
  },
  {
    key: "florence",
    name: "Florence Joris",
    slug: "florence-joris",
    initials: "FJ",
    color: "from-[#76b82a] to-[#5c9120]",
    role: { de: "Allgemeine PT, Osteopathie in Ausbildung, Crochetage", fr: "PT générale, Ostéo en formation, Crochetage" },
    tags: ["Ostéopathie", "Crochetage", "Pilates Matwork"],
    languages: ["Français", "Deutsch", "English"],
    booking: { label: "WhatsApp Business", href: "https://wa.me/32484395594" },
    bookingOnline: { label: "Doctoranytime", href: "https://www.doctoranytime.be/d/kinesitherapeute/florence-joris?area=eupen" },
    phone: "+32 484 39 55 94",
    bio: {
      de: "Allgemeine Physiotherapie und Osteopathie (5-jährige Ausbildung am Collège belge d'Ostéopathie Brüssel). Spezialisiert auf Crochetage (Methode Jean Burnotte D.O.) und Pilates Matwork. 5 Jahre Berufserfahrung in der Schweiz.",
      fr: "Kinésithérapie générale et ostéopathie (master 5 ans au Collège belge d'Ostéopathie Bruxelles). Spécialisée en crochetage fascio-myo-neural (méthode Jean Burnotte D.O.) et Pilates Matwork. 5 ans d'expérience professionnelle en Suisse.",
      en: "General physiotherapy and osteopathy (5-year programme at Collège belge d'Ostéopathie Brussels). Specialised in crochetage (J. Burnotte D.O. method) and Pilates Matwork. 5 years professional experience in Switzerland.",
      nl: "Algemene fysiotherapie en osteopathie (5-jarige opleiding aan het Collège belge d'Ostéopathie Brussel). Gespecialiseerd in crochetage en Pilates Matwork. 5 jaar werkervaring in Zwitserland.",
      tr: "Genel fizyoterapi ve osteopati (Brüksel Belçika Osteopati Koleji'nde 5 yıllık program). Crochetage ve Pilates Matwork uzmanı. İsviçre'de 5 yıl mesleki deneyim.",
      ar: "علاج طبيعي عام وهشاشة العظام (برنامج 5 سنوات في كلية الهشاشة البلجيكية بروكسل). متخصصة في Crochetage وPilates Matwork. 5 سنوات خبرة مهنية في سويسرا.",
      pl: "Fizjoterapia ogólna i osteopatia (5-letni program w Collège belge d'Ostéopathie Bruksela). Specjalizacja: Crochetage i Pilates Matwork. 5 lat doświadczenia zawodowego w Szwajcarii.",
    },
    parcours: [
      { year: "2014–2018", title: "Haute École André Vésale — Master en Kinésithérapie" },
      { year: "2018–2023", title: "Expérience professionnelle en Suisse" },
      { year: "2022–…", title: "Collège belge d'Ostéopathie — Master Ostéopathie (5 ans)" },
      { year: "2023–2024", title: "Crochetage Fascio-Myo-Neural Global (J. Burnotte D.O.)" },
      { year: "2024", title: "IPPP Paris — Pilates Matwork 1" },
    ],
    convention: "non conventionnée",
    note: '"Le corps est une unité, un ensemble harmonieux composé de parties dépendantes les unes des autres." — Andrew Taylor Still',
  },
  {
    key: "felix",
    name: "Félix Esser",
    slug: "felix-esser",
    initials: "FE",
    color: "from-purple-600 to-purple-800",
    role: { de: "Allgemeine PT, Osteopathie in Ausbildung", fr: "PT général, Ostéo en formation" },
    tags: ["Ostéopathie en formation", "ULiège"],
    languages: ["Français", "Deutsch", "English"],
    booking: { label: "WhatsApp Business", href: "https://wa.me/32493122336" },
    phone: "+32 493 12 23 36",
    bio: {
      de: "Absolvent der Universität Lüttich (Master 2021). Derzeit in Ausbildung zum Osteopathen. Allgemeine Physiotherapie mit patientenzentriertem Ansatz.",
      fr: "Diplômé de l'Université de Liège (Master 2021). Actuellement en formation d'ostéopathie. Kinésithérapie générale avec approche centrée sur le patient.",
      en: "Graduate of University of Liège (Master 2021). Currently training in osteopathy. General physiotherapy with patient-centred approach.",
      nl: "Afgestudeerd aan de Universiteit van Luik (Master 2021). Momenteel in osteopathieopleiding. Algemene fysiotherapie met patiëntgerichte aanpak.",
      tr: "Liège Üniversitesi mezunu (Master 2021). Şu anda osteopati eğitiminde. Hasta merkezli yaklaşımla genel fizyoterapi.",
      ar: "خريج جامعة لييج (ماجستير 2021). حاليًا في تدريب الهشاشة. علاج طبيعي عام بنهج يركز على المريض.",
      pl: "Absolwent Uniwersytetu w Liège (Master 2021). Aktualnie w szkoleniu osteopatycznym. Fizjoterapia ogólna z podejściem skoncentrowanym na pacjencie.",
    },
    parcours: [
      { year: "2017–2021", title: "Université de Liège — Master Kinésithérapie & Réadaptation" },
      { year: "2021–…", title: "Formation Ostéopathie en cours" },
    ],
    convention: null,
    note: null,
  },
  {
    key: "fabienne",
    name: "Fabienne Dormann",
    slug: "fabienne-dormann",
    initials: "FD",
    color: "from-teal-600 to-teal-800",
    role: { de: "Lymphdrainage, Kiefergelenk / ATM", fr: "Drainage lymphatique, Articulation temporo-mandibulaire" },
    tags: ["Lymphdrainage Leduc", "ATM/Kiefergelenk", "CMD"],
    languages: ["Français", "Deutsch", "English"],
    booking: { label: "WhatsApp", href: "https://wa.me/32471765683" },
    phone: "+32 471 76 56 83",
    note: "Lun, Mar & Jeu : 12h30–16h",
    bio: {
      de: "Spezialistin für Lymphdrainage nach O. Leduc und Kiefergelenkstherapie (CMD). Mehrere Spezialisierungen: Kiefergelenk nach L. Pitance, R. Giop, und Th. Gouzland (2025). Bachelor & Master mit Auszeichnung.",
      fr: "Spécialiste du drainage lymphatique selon O. Leduc et de la thérapie de l'articulation temporo-mandibulaire (ATM/CMD). Plusieurs spécialisations : ATM selon L. Pitance, R. Giop, et Th. Gouzland (2025). Bachelor & Master avec distinction.",
      en: "Specialist in lymphatic drainage (O. Leduc method) and jaw/TMJ therapy (CMD). Multiple specialisations: TMJ according to L. Pitance, R. Giop, and Th. Gouzland (2025). Bachelor & Master with distinction.",
      nl: "Specialist lymfedrainage (methode O. Leduc) en kaakgewrichtstherapie (CMD). Meerdere specialisaties: kaakgewricht volgens L. Pitance, R. Giop en Th. Gouzland (2025). Bachelor & Master met onderscheiding.",
      tr: "Lenf drenajı (O. Leduc yöntemi) ve çene eklemi tedavisi (CMD) uzmanı. L. Pitance, R. Giop ve Th. Gouzland'a göre çene eklemi dahil birden fazla uzmanlık (2025).",
      ar: "متخصصة في الصرف اللمفاوي (طريقة O. Leduc) وعلاج مفصل الفك (CMD). تخصصات متعددة: مفصل الفك وفق L. Pitance وR. Giop وTh. Gouzland (2025).",
      pl: "Specjalistka drenażu limfatycznego (metoda O. Leduc) i terapii stawu skroniowo-żuchwowego (CMD). Wiele specjalizacji: staw żuchwowy wg L. Pitance, R. Giop i Th. Gouzland (2025).",
    },
    parcours: [
      { year: "2009–2013", title: "Haute École André Vésale — Bachelor & Master (avec distinction)" },
      { year: "2014–2015", title: "SERK — Lymphdrainage nach O. Leduc" },
      { year: "2015–2017", title: "ATMS — Thérapie Manuelle Sportive" },
      { year: "2020", title: "Forthema — Kinésithérapie Cervico-Maxillo-Faciale (L. Pitance)" },
      { year: "2023", title: "Kiné Form — Articulation Temporo-Mandibulaire (R. Giop)" },
      { year: "2025", title: "Kymo Liège — Rééducation Maxillo-Faciale (Th. Gouzland)" },
    ],
    convention: null,
  },
  {
    key: "thom",
    name: "Thom Petit",
    slug: "thom-petit",
    initials: "TP",
    color: "from-orange-500 to-orange-700",
    role: { de: "Sport Physiotherapie, Running Clinic, BFR", fr: "Kinésithérapie du sport, Running Clinic, BFR" },
    tags: ["Running Clinic", "BFR", "Kinesport", "Q-top"],
    languages: ["Français", "Deutsch", "English"],
    booking: { label: "WhatsApp Business", href: "https://wa.me/32471869024" },
    bookingOnline: { label: "Q-top", href: "https://www.q-top.be/Online-planner/FR/?root=kq43933" },
    phone: "+32 471 86 90 24",
    bio: {
      de: "Experte für Sportphysiotherapie, spezialisiert auf Laufverletzungen (La Clinique du Coureur) und Blood Flow Restriction Training (BFR/Kinesport). Betreut Sportler in Kabinett und Klub.",
      fr: "Expert en kinésithérapie du sport, spécialisé dans les blessures de la course à pied (La Clinique du Coureur) et l'entraînement par restriction du flux sanguin (BFR/Kinesport). Prise en charge en cabinet et en club.",
      en: "Sports physiotherapy expert, specialised in running injuries (La Clinique du Coureur) and Blood Flow Restriction training (BFR/Kinesport). Treats athletes in clinic and in clubs.",
      nl: "Expert sportfysiotherapie, gespecialiseerd in loopblessures (La Clinique du Coureur) en Blood Flow Restriction training (BFR/Kinesport). Behandelt sporters in kabinet en club.",
      tr: "Spor fizyoterapisi uzmanı, koşu yaralanmaları (La Clinique du Coureur) ve Kan Akışı Kısıtlama antrenmanı (BFR/Kinesport) konusunda uzmanlaşmış.",
      ar: "خبير في فيزيوتيرابيا الرياضة، متخصص في إصابات الجري (La Clinique du Coureur) وتدريب تقييد تدفق الدم (BFR/Kinesport).",
      pl: "Ekspert fizjoterapii sportowej, specjalizacja: urazy biegowe (La Clinique du Coureur) i trening z ograniczeniem przepływu krwi (BFR/Kinesport).",
    },
    parcours: [
      { year: "2010–2015", title: "Haute École André Vésale — Master Kinésithérapie" },
      { year: "2016–2018", title: "ATMS — Thérapie Manuelle Sportive" },
      { year: "2016–2019", title: "La Clinique du Coureur — Prévention & traitement blessures running" },
      { year: "2019", title: "KINESPORT — Blood Flow Restriction Training (BFR)" },
      { year: "2020–2021", title: "Kinésithérapie du sport expert" },
    ],
    convention: null,
    note: null,
  },
  {
    key: "loic",
    name: "Loïc Meunier",
    slug: "loic-meunier",
    initials: "LM",
    color: "from-indigo-600 to-indigo-800",
    role: { de: "Allgemeine PT, Osteopathie in Ausbildung", fr: "PT général, Ostéo en formation" },
    tags: ["ULiège 2025", "Ostéopathie en formation"],
    languages: ["Français", "Deutsch", "English"],
    booking: { label: "WhatsApp", href: "https://wa.me/32474296326" },
    phone: "+32 474 29 63 26",
    bio: {
      de: "Frisch diplomierter Physiotherapeut der Universität Lüttich (Master 2025). Derzeit in Ausbildung zum Osteopathen. Engagiert und motiviert für patientenzentrierte Rehabilitation.",
      fr: "Jeune kinésithérapeute diplômé de l'Université de Liège (Master 2025). Actuellement en formation d'ostéopathie. Engagé et motivé pour une rééducation centrée sur le patient.",
      en: "Newly qualified physiotherapist from the University of Liège (Master 2025). Currently training in osteopathy. Committed and motivated for patient-centred rehabilitation.",
      nl: "Nieuw afgestudeerd fysiotherapeut van de Universiteit van Luik (Master 2025). Momenteel in osteopathieopleiding. Toegewijd en gemotiveerd voor patiëntgerichte revalidatie.",
      tr: "Liège Üniversitesi'nden yeni mezun fizyoterapist (Master 2025). Şu anda osteopati eğitiminde. Hasta merkezli rehabilitasyona adanmış ve motivasyonlu.",
      ar: "فيزيوتيرابيست حديث التخرج من جامعة لييج (ماجستير 2025). حاليًا في تدريب الهشاشة. ملتزم ومتحمس للتأهيل المتمحور حول المريض.",
      pl: "Świeżo dyplomowany fizjoterapeuta z Uniwersytetu w Liège (Master 2025). Aktualnie w szkoleniu osteopatycznym. Zaangażowany i zmotywowany do rehabilitacji skoncentrowanej na pacjencie.",
    },
    parcours: [
      { year: "2020–2025", title: "Université de Liège — Master Kinésithérapie & Réadaptation" },
      { year: "2025–…", title: "Formation Ostéopathie en cours" },
    ],
    convention: null,
    note: null,
  },
];

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

export function TeamPageContent() {
  const locale = useLocale() as LangKey;
  const t = useTranslations("team");
  const tNav = useTranslations("nav");
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;

  return (
    <div className="pt-28 pb-20 bg-neutral-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            6 {t("sectionTitle")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            <span style={{ color: "#76b82a" }}>{t("sectionTitle")}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        {/* Team Photo */}
        <AnimatedSection delay={0.15} className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/avatars/team-avatar2.png"
              alt="Praxis Loten Team"
              width={1400}
              height={600}
              className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b3186]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
              <p className="text-white/90 text-lg sm:text-xl font-semibold tracking-wide">
                Praxis Loten
              </p>
              <p className="text-white/60 text-sm sm:text-base mt-1">
                Moderne Physical Therapy &amp; more...
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.1}>
          {TEAM.map((member) => (
            <StaggerItem key={member.key}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-400"
              >
                {/* Header card */}
                <div className={`relative h-36 bg-gradient-to-br ${member.color} flex items-end p-6`}>
                  <div className="flex items-end gap-4 w-full">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ring-2 ring-white/30">
                      <Image
                        src={`/avatars/${member.slug}.png`}
                        alt={member.name}
                        fill
                        sizes="80px"
                        className="object-cover object-[center_15%]"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-extrabold text-white leading-tight">{member.name}</h2>
                      <p className="text-white/80 text-sm mt-0.5 leading-tight">
                        {(member.role as Record<string, string>)[lang] ?? member.role.de}
                      </p>
                    </div>
                    {member.convention && (
                      <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-lg font-medium flex-shrink-0">
                        {member.convention}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-[#76b82a]/10 text-[#5c9120] rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {(member.bio as Record<string, string>)[lang] ?? member.bio.de}
                  </p>

                  {/* Quote */}
                  {member.note && (
                    <blockquote className="border-l-2 border-[#76b82a] pl-3 mb-4">
                      <p className="text-xs text-neutral-500 italic leading-relaxed">{member.note}</p>
                    </blockquote>
                  )}

                  {/* Parcours */}
                  <div className="mb-5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {({de:"Laufbahn",fr:"Parcours",en:"Background",nl:"Opleiding",tr:"Eğitim",ar:"المسار",pl:"Wykształcenie"} as Record<string,string>)[lang]}
                    </div>
                    <div className="space-y-2">
                      {member.parcours.map((p, i) => (
                        <div key={i} className="flex gap-3 text-sm">
                          <span className="text-[#76b82a] font-semibold text-xs whitespace-nowrap pt-0.5 w-20 flex-shrink-0">
                            {p.year}
                          </span>
                          <span className="text-neutral-600">{p.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3">
                    <Globe2 className="w-3.5 h-3.5" />
                    {member.languages.join(" · ")}
                  </div>

                  {/* Note (e.g., Fabienne's hours) */}
                  {"note" in member && member.note && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5 mb-4">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      {member.note}
                    </div>
                  )}

                  {/* Booking CTAs */}
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={member.booking.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <CalendarPlus className="w-4 h-4" />
                      {member.booking.label}
                    </a>
                    {"phone" in member && member.phone && (
                      <a
                        href={`tel:${member.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 px-4 py-2.5 bg-neutral-700 hover:bg-neutral-600 text-white rounded-xl text-sm font-semibold transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                    )}
                    {"bookingOnline" in member && member.bookingOnline && (
                      <a
                        href={(member as typeof member & { bookingOnline: { label: string; href: string } }).bookingOnline.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#2b3186] hover:bg-[#1e2260] text-white rounded-xl text-sm font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {(member as typeof member & { bookingOnline: { label: string; href: string } }).bookingOnline.label}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA bas de page */}
        <AnimatedSection delay={0.3} className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white">
            <h2 className="text-2xl font-extrabold mb-3">
              {tNav("appointment")}
            </h2>
            <p className="text-white/70 mb-6">
              {t("sectionSubtitle")}
            </p>
            <Link
              href="/termin"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
            >
              <CalendarPlus className="w-5 h-5" />
              {t("bookAppointment")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
