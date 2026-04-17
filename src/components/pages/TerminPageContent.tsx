"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  MessageCircle, ExternalLink, Mail, MapPin, Clock,
  CalendarPlus, ChevronRight, Star, Globe2, Sparkles, ArrowRight, X, Phone,
} from "lucide-react";
import Image from "next/image";
import { SafeEmail } from "@/components/ui/SafeEmail";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const THERAPISTS = [
  {
    slug: "philippe-banaszak",
    name: "Philippe Banaszak",
    initials: "PB",
    color: "from-[#2b3186] to-[#4040a0]",
    accentColor: "#2b3186",
    role: {
      de: "Manualtherapeut",
      fr: "Thérapeute Manuel",
      en: "Manual Therapist",
      nl: "Manueel Therapeut",
      tr: "Manuel Terapist",
      ar: "معالج يدوي",
      pl: "Terapeuta Manualny",
    },
    specialties: ["Manuelle Therapie", "IFOMPT/QPP", "Orthopädie"],
    languages: ["FR", "DE", "EN", "PL"],
    phone: "+32 478 21 81 86",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/32478218186", primary: true },
      { type: "online" as const, label: "Online Booking (Crossuite)", href: "https://bookings.crossuite.app/50ffa29e-e6ec-496c-95f6-0b41eb3d2071", primary: true },
      { type: "email" as const, label: "", emailEnc: "cGJraW5lQGljbG91ZC5jb20=", href: "#", primary: false },
    ],
    convention: null,
  },
  {
    slug: "florence-joris",
    name: "Florence Joris",
    initials: "FJ",
    color: "from-[#76b82a] to-[#95d93a]",
    accentColor: "#76b82a",
    role: {
      de: "Physiotherapeutin — Osteopathie — Crochetage",
      fr: "Kinésithérapeute — Ostéopathie — Crochetage",
      en: "Physiotherapist — Osteopathy — Crochetage",
      nl: "Fysiotherapeut — Osteopathie — Crochetage",
      tr: "Fizyoterapist — Osteopati — Crochetage",
      ar: "فيزيوتيرابيست — هشاشة عظام — Crochetage",
      pl: "Fizjoterapeuta — Osteopatia — Crochetage",
    },
    specialties: ["Ostéopathie", "Crochetage", "Pilates Matwork"],
    languages: ["FR", "DE", "EN"],
    phone: "+32 484 39 55 94",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp Business", href: "https://wa.me/32484395594", primary: true },
      { type: "online" as const, label: "Doctoranytime", href: "https://www.doctoranytime.be/d/kinesitherapeute/florence-joris?area=eupen", primary: true },
      { type: "email" as const, label: "", emailEnc: "Zmtvcmlzay5raW5lQGdtYWlsLmNvbQ==", href: "#", primary: false },
    ],
    convention: { de: "Nicht konventioniert", fr: "Déconventionnée", en: "Non-conv.", nl: "Niet geconv.", tr: "Konv. değil", ar: "غير تقليدي", pl: "Niekonw." },
  },
  {
    slug: "felix-esser",
    name: "Félix Esser",
    initials: "FE",
    color: "from-purple-600 to-purple-400",
    accentColor: "#9333ea",
    role: {
      de: "Physiotherapeut — Osteopathie in Ausbildung",
      fr: "Kinésithérapeute — Ostéopathie en formation",
      en: "Physiotherapist — Osteopathy (training)",
      nl: "Fysiotherapeut — Osteopathie (opleiding)",
      tr: "Fizyoterapist — Osteopati (eğitim)",
      ar: "فيزيوتيرابيست — هشاشة عظام (تدريب)",
      pl: "Fizjoterapeuta — Osteopatia (szkolenie)",
    },
    specialties: ["Kinésithérapie générale", "Ostéopathie", "Réadaptation"],
    languages: ["FR", "DE", "EN"],
    phone: "+32 493 12 23 36",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp Business", href: "https://wa.me/32493122336", primary: true },
      { type: "email" as const, label: "", emailEnc: "ZXNzZXJmZWxpeGtpbmVAZ21haWwuY29t", href: "#", primary: false },
    ],
    convention: null,
  },
  {
    slug: "fabienne-dormann",
    name: "Fabienne Dormann",
    initials: "FD",
    color: "from-teal-600 to-teal-400",
    accentColor: "#0d9488",
    role: {
      de: "Lymphdrainage — Kiefergelenk / ATM",
      fr: "Drainage Lymphatique — ATM/CMD",
      en: "Lymphatic Drainage — TMJ/CMD",
      nl: "Lymfedrainage — Kaakgewricht/CMD",
      tr: "Lenf Drenajı — Çene Eklemi/CMD",
      ar: "صرف لمفاوي — مفصل الفك/CMD",
      pl: "Drenaż Limfatyczny — Staw Żuchwowy",
    },
    specialties: ["Lymphdrainage Leduc", "ATM / CMD", "Kinésithérapie Sportive"],
    languages: ["FR", "DE", "EN"],
    phone: "+32 471 76 56 83",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/32471765683", primary: true },
      { type: "email" as const, label: "", emailEnc: "ZmFiaWVubmVkb3JtYW5uQGdtYWlsLmNvbQ==", href: "#", primary: false },
    ],
    note: "Lun, Mar & Jeu : 12h30–16h",
    convention: null,
  },
  {
    slug: "thom-petit",
    name: "Thom Petit",
    initials: "TP",
    color: "from-orange-500 to-amber-400",
    accentColor: "#f97316",
    role: {
      de: "Sport Physiotherapeut — Running Clinic — BFR",
      fr: "Kinésithérapeute du Sport — Running Clinic — BFR",
      en: "Sports Physiotherapist — Running Clinic — BFR",
      nl: "Sportfysiotherapeut — Running Clinic — BFR",
      tr: "Spor Fizyoterapisti — Running Clinic — BFR",
      ar: "فيزيوتيرابيست رياضي — Running Clinic — BFR",
      pl: "Fizjoterapeuta Sportowy — Running Clinic — BFR",
    },
    specialties: ["Sport Expert", "Running Clinic", "BFR / Kinesport"],
    languages: ["FR", "DE", "EN"],
    phone: "+32 471 86 90 24",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp Business", href: "https://wa.me/32471869024", primary: true },
      { type: "online" as const, label: "Online Booking (Q-top)", href: "https://www.q-top.be/Online-planner/FR/?root=kq43933", primary: true },
      { type: "email" as const, label: "", emailEnc: "dGhvbS5wZXRpdEBtZS5jb20=", href: "#", primary: false },
    ],
    convention: null,
  },
  {
    slug: "loic-meunier",
    name: "Loïc Meunier",
    initials: "LM",
    color: "from-indigo-600 to-indigo-400",
    accentColor: "#4f46e5",
    role: {
      de: "Physiotherapeut — Osteopathie in Ausbildung",
      fr: "Kinésithérapeute — Ostéopathie en formation",
      en: "Physiotherapist — Osteopathy (training)",
      nl: "Fysiotherapeut — Osteopathie (opleiding)",
      tr: "Fizyoterapist — Osteopati (eğitim)",
      ar: "فيزيوتيرابيست — هشاشة عظام (تدريب)",
      pl: "Fizjoterapeuta — Osteopatia (szkolenie)",
    },
    specialties: ["Kinésithérapie générale", "Ostéopathie", "Réadaptation"],
    languages: ["FR", "DE", "EN"],
    phone: "+32 474 29 63 26",
    booking: [
      { type: "whatsapp" as const, label: "WhatsApp", href: "https://wa.me/32474296326", primary: true },
      { type: "email" as const, label: "", emailEnc: "bG1ldW5pZXIubG9pY0BnbWFpbC5jb20=", href: "#", primary: false },
    ],
    convention: null,
  },
];

const UI: Record<LangKey, {
  badge: string; title: string; titleAccent: string; subtitle: string;
  chooseTherapist: string; bookWith: string; viewProfile: string;
  orCall: string; address: string; hours: string; hoursVal: string;
  infoBring: string; bringItems: string[]; cancelTitle: string; cancelText: string;
  convention: string; languages: string; specialties: string;
  bookWhatsApp: string; bookOnline: string; bookEmail: string;
}> = {
  de: {
    badge: "Online & Direkt buchen",
    title: "Termin",
    titleAccent: "vereinbaren",
    subtitle: "Wählen Sie Ihren Therapeuten und buchen Sie direkt per WhatsApp, Online oder E-Mail — schnell, einfach, kostenlos.",
    chooseTherapist: "Therapeuten wählen",
    bookWith: "Termin bei",
    viewProfile: "Profil ansehen",
    orCall: "Oder anrufen:",
    address: "Loten 1, B-4700 Eupen",
    hours: "Öffnungszeiten",
    hoursVal: "Mo – Fr: 08:00 – 20:00 | Sa: nach Vereinbarung",
    infoBring: "Mitzubringen",
    bringItems: ["Ärztliche Verschreibung", "Krankenkassen-Aufkleber", "Großes Handtuch", "Sportkleidung", "Personalausweis"],
    cancelTitle: "Absage",
    cancelText: "24 Stunden im Voraus. Jeder nicht rechtzeitig abgesagte Termin wird in Rechnung gestellt.",
    convention: "Nicht konventioniert",
    languages: "Sprachen",
    specialties: "Spezialitäten",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Online buchen",
    bookEmail: "E-Mail",
  },
  fr: {
    badge: "Réservation en ligne & directe",
    title: "Prendre",
    titleAccent: "rendez-vous",
    subtitle: "Choisissez votre thérapeute et réservez directement par WhatsApp, en ligne ou par e-mail — rapide, simple, gratuit.",
    chooseTherapist: "Choisir un thérapeute",
    bookWith: "Rendez-vous avec",
    viewProfile: "Voir le profil",
    orCall: "Ou appeler :",
    address: "Loten 1, B-4700 Eupen",
    hours: "Heures d'ouverture",
    hoursVal: "Lun – Ven : 08:00 – 20:00 | Sam : sur RDV",
    infoBring: "À apporter",
    bringItems: ["Prescription médicale", "Vignette de mutuelle", "Grande serviette", "Tenue sportive", "Carte d'identité"],
    cancelTitle: "Annulation",
    cancelText: "24h à l'avance. Toute séance non décommandée dans ce délai sera facturée.",
    convention: "Déconventionnée",
    languages: "Langues",
    specialties: "Spécialités",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Réserver en ligne",
    bookEmail: "E-mail",
  },
  en: {
    badge: "Book online & direct",
    title: "Book an",
    titleAccent: "appointment",
    subtitle: "Choose your therapist and book directly via WhatsApp, online or email — fast, easy, free.",
    chooseTherapist: "Choose a therapist",
    bookWith: "Appointment with",
    viewProfile: "View profile",
    orCall: "Or call:",
    address: "Loten 1, B-4700 Eupen",
    hours: "Opening hours",
    hoursVal: "Mon – Fri: 08:00 – 20:00 | Sat: by appointment",
    infoBring: "What to bring",
    bringItems: ["Medical prescription", "Health insurance card", "Large towel", "Sportswear", "ID card"],
    cancelTitle: "Cancellation",
    cancelText: "24 hours in advance. Any session not cancelled within this period will be charged.",
    convention: "Non-conventional",
    languages: "Languages",
    specialties: "Specialties",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Book online",
    bookEmail: "Email",
  },
  nl: {
    badge: "Online & direct boeken",
    title: "Afspraak",
    titleAccent: "maken",
    subtitle: "Kies uw therapeut en boek direct via WhatsApp, online of e-mail — snel, eenvoudig, gratis.",
    chooseTherapist: "Kies een therapeut",
    bookWith: "Afspraak bij",
    viewProfile: "Profiel bekijken",
    orCall: "Of bellen:",
    address: "Loten 1, B-4700 Eupen",
    hours: "Openingstijden",
    hoursVal: "Ma – Vr: 08:00 – 20:00 | Za: op afspraak",
    infoBring: "Mee te brengen",
    bringItems: ["Medisch voorschrift", "Mutualiteitsklever", "Grote handdoek", "Sportkleding", "Identiteitskaart"],
    cancelTitle: "Annulering",
    cancelText: "24 uur op voorhand. Niet-geannuleerde afspraken worden gefactureerd.",
    convention: "Niet geconventioneerd",
    languages: "Talen",
    specialties: "Specialiteiten",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Online boeken",
    bookEmail: "E-mail",
  },
  tr: {
    badge: "Online & Doğrudan rezervasyon",
    title: "Randevu",
    titleAccent: "alın",
    subtitle: "Terapistinizi seçin ve WhatsApp, online veya e-posta ile doğrudan rezervasyon yapın — hızlı, kolay, ücretsiz.",
    chooseTherapist: "Terapist seçin",
    bookWith: "Randevu:",
    viewProfile: "Profili gör",
    orCall: "Veya arayın:",
    address: "Loten 1, B-4700 Eupen",
    hours: "Çalışma saatleri",
    hoursVal: "Pzt – Cum: 08:00 – 20:00 | Cmt: randevu ile",
    infoBring: "Getirilecekler",
    bringItems: ["Tıbbi reçete", "Sağlık sigortası kartı", "Büyük havlu", "Spor kıyafeti", "Kimlik kartı"],
    cancelTitle: "İptal",
    cancelText: "24 saat önceden. Zamanında iptal edilmeyen seanslar faturalandırılır.",
    convention: "Konvansiyonlu değil",
    languages: "Diller",
    specialties: "Uzmanlıklar",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Online rezervasyon",
    bookEmail: "E-posta",
  },
  ar: {
    badge: "حجز عبر الإنترنت ومباشر",
    title: "احجز",
    titleAccent: "موعدك",
    subtitle: "اختر معالجك واحجز مباشرة عبر واتساب أو الإنترنت أو البريد الإلكتروني — سريع، سهل، مجاني.",
    chooseTherapist: "اختر معالجًا",
    bookWith: "موعد مع",
    viewProfile: "عرض الملف",
    orCall: "أو اتصل:",
    address: "Loten 1, B-4700 Eupen",
    hours: "ساعات العمل",
    hoursVal: "الإثنين – الجمعة: 08:00 – 20:00 | السبت: بموعد",
    infoBring: "ما يجب إحضاره",
    bringItems: ["وصفة طبية", "بطاقة التأمين الصحي", "منشفة كبيرة", "ملابس رياضية", "بطاقة الهوية"],
    cancelTitle: "الإلغاء",
    cancelText: "قبل 24 ساعة. أي جلسة لم يتم إلغاؤها في هذه المهلة ستتم فوترتها.",
    convention: "غير تقليدي",
    languages: "اللغات",
    specialties: "التخصصات",
    bookWhatsApp: "واتساب",
    bookOnline: "حجز عبر الإنترنت",
    bookEmail: "البريد الإلكتروني",
  },
  pl: {
    badge: "Rezerwacja online i bezpośrednia",
    title: "Umów",
    titleAccent: "wizytę",
    subtitle: "Wybierz swojego terapeutę i zarezerwuj bezpośrednio przez WhatsApp, online lub e-mail — szybko, łatwo, bezpłatnie.",
    chooseTherapist: "Wybierz terapeutę",
    bookWith: "Wizyta u",
    viewProfile: "Zobacz profil",
    orCall: "Lub zadzwoń:",
    address: "Loten 1, B-4700 Eupen",
    hours: "Godziny otwarcia",
    hoursVal: "Pon – Pt: 08:00 – 20:00 | Sob: na umówienie",
    infoBring: "Co zabrać",
    bringItems: ["Recepta lekarska", "Karta ubezpieczenia", "Duży ręcznik", "Strój sportowy", "Dowód osobisty"],
    cancelTitle: "Anulowanie",
    cancelText: "24 godziny wcześniej. Nieodwołane wizyty będą fakturowane.",
    convention: "Niekonwencjonalna",
    languages: "Języki",
    specialties: "Specjalizacje",
    bookWhatsApp: "WhatsApp",
    bookOnline: "Rezerwacja online",
    bookEmail: "E-mail",
  },
};

const LANG_FLAGS: Record<string, string> = {
  FR: "🇫🇷", DE: "🇩🇪", EN: "🇬🇧", NL: "🇳🇱", PL: "🇵🇱", TR: "🇹🇷", AR: "🇸🇦",
};

function BookingButton({ type, label, href, primary, emailEnc }: { type: string; label: string; href: string; primary: boolean; emailEnc?: string }) {
  if (type === "email" && emailEnc) {
    return (
      <SafeEmail
        encoded={emailEnc}
        label={label || undefined}
        showIcon={true}
        iconSize={16}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] bg-neutral-800 hover:bg-neutral-700 text-white/80 cursor-pointer"
      />
    );
  }

  const icons: Record<string, React.ReactNode> = {
    whatsapp: <MessageCircle className="w-4 h-4" />,
    online: <ExternalLink className="w-4 h-4" />,
    email: <Mail className="w-4 h-4" />,
  };
  const styles: Record<string, string> = {
    whatsapp: "bg-[#25d366] hover:bg-[#1ebe5d] text-white shadow-lg shadow-green-500/25",
    online: "bg-[#2b3186] hover:bg-[#1e2260] text-white shadow-lg shadow-blue-500/20",
    email: "bg-neutral-100 hover:bg-neutral-200 text-neutral-700",
  };

  return (
    <a
      href={href}
      target={type !== "email" ? "_blank" : undefined}
      rel={type !== "email" ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${styles[type]}`}
    >
      {icons[type]}
      {label}
    </a>
  );
}

export function TerminPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";
  const [selected, setSelected] = useState<string | null>(null);

  const selectedTherapist = THERAPISTS.find((t) => t.slug === selected);

  return (
    <div className="min-h-screen bg-neutral-950 text-white" dir={isRtl ? "rtl" : "ltr"}>

      {/* Hero gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b3186]/40 via-neutral-950 to-[#76b82a]/20 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-[#2b3186]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-white/80 font-medium">
              <Sparkles className="w-4 h-4 text-[#76b82a]" />
              {ui.badge}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-center tracking-tight mb-6"
          >
            {ui.title}{" "}
            <span className="bg-gradient-to-r from-[#76b82a] to-[#a8e063] bg-clip-text text-transparent">
              {ui.titleAccent}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center text-lg text-white/60 leading-relaxed mb-16"
          >
            {ui.subtitle}
          </motion.p>

          {/* Info strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#76b82a]" /> {ui.address}
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#76b82a]" /> {ui.hoursVal}
            </span>
            <span className="w-px h-4 bg-white/20 hidden sm:block" />
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#76b82a]" />
              <SafeEmail encoded="cHJheGlzbG90ZW5AZ21haWwuY29t" className="hover:text-white transition-colors" showIcon={false} />
            </span>
          </motion.div>

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/30">
              {ui.chooseTherapist}
            </span>
          </motion.div>

          {/* Therapist cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {THERAPISTS.map((therapist, i) => (
              <motion.button
                key={therapist.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.4 }}
                onClick={() => setSelected(selected === therapist.slug ? null : therapist.slug)}
                className={`relative group text-left w-full rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  selected === therapist.slug
                    ? "border-[#76b82a]/60 shadow-2xl shadow-[#76b82a]/10 scale-[1.01]"
                    : "border-white/10 hover:border-white/25 hover:scale-[1.01]"
                } bg-white/5 backdrop-blur-sm`}
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${therapist.color}`} />

                <div className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className="rounded-2xl overflow-hidden flex-shrink-0 shadow-lg ring-1 ring-white/20" style={{ width: 96, height: 96 }}>
                      <Image
                        src={`/avatars/${therapist.slug}.png`}
                        alt={therapist.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-extrabold text-white text-base leading-tight">{therapist.name}</h3>
                        {therapist.convention && (
                          <span className="text-[10px] px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full font-medium flex-shrink-0 mt-0.5">
                            {(therapist.convention as Record<LangKey, string>)[lang]}
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-xs mt-0.5 leading-snug">
                        {(therapist.role as Record<LangKey, string>)[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {therapist.specialties.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 bg-white/8 border border-white/10 rounded-full text-white/60 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <Globe2 className="w-3 h-3 text-white/30" />
                    {therapist.languages.map((l) => (
                      <span key={l} className="text-xs text-white/50" title={l}>
                        {LANG_FLAGS[l]}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold transition-colors ${
                      selected === therapist.slug ? "text-[#76b82a]" : "text-white/40 group-hover:text-white/60"
                    }`}>
                      {selected === therapist.slug ? "✓ Sélectionné" : ui.bookWith + " →"}
                    </span>
                    <motion.div
                      animate={{ rotate: selected === therapist.slug ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className={`w-4 h-4 transition-colors ${
                        selected === therapist.slug ? "text-[#76b82a]" : "text-white/30"
                      }`} />
                    </motion.div>
                  </div>
                </div>

                {/* Expandable booking section inside card */}
                <AnimatePresence>
                  {selected === therapist.slug && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden border-t border-white/10"
                      style={{
                        background: `linear-gradient(180deg, ${therapist.accentColor}15, transparent 80%)`,
                      }}
                    >
                      <div className="p-5 pt-4">
                        {/* Header with large avatar */}
                        <div className="flex items-start gap-4 mb-4">
                          <Link
                            href={`/team/${therapist.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="block flex-shrink-0 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20 hover:ring-[#76b82a]/60 transition-all hover:scale-105"
                            style={{ width: 120, height: 120 }}
                          >
                            <Image
                              src={`/avatars/${therapist.slug}.png`}
                              alt={therapist.name}
                              width={120}
                              height={120}
                              className="w-full h-full object-cover object-top"
                            />
                          </Link>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">
                                  {ui.bookWith}
                                </p>
                                <p className="text-lg font-extrabold text-white leading-tight">{therapist.name}</p>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelected(null);
                                }}
                                className="text-white/30 hover:text-white/60 transition-colors p-1 rounded-full hover:bg-white/10"
                                aria-label="Close"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Booking buttons */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {therapist.booking.map((b, i) => (
                            <BookingButton key={i} {...b} />
                          ))}
                        </div>

                        {/* Phone call button */}
                        {therapist.phone && (
                          <a
                            href={`tel:${therapist.phone.replace(/\s/g, "")}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-3 py-2 mb-3 bg-white/10 hover:bg-white/20 text-white/80 rounded-xl text-sm font-medium transition-colors"
                          >
                            <Phone className="w-4 h-4" />
                            {therapist.phone}
                          </a>
                        )}

                        {/* Note if any */}
                        {therapist.note && (
                          <div className="flex items-center gap-2 mb-4 text-xs text-amber-300/80 bg-amber-500/10 border border-amber-500/20 rounded-xl px-3 py-2">
                            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                            {therapist.note}
                          </div>
                        )}

                        {/* View profile link */}
                        <Link
                          href={`/team/${therapist.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-[#76b82a] transition-colors mt-2"
                        >
                          <Star className="w-3.5 h-3.5" />
                          {ui.viewProfile}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Selection glow */}
                {selected === therapist.slug && (
                  <motion.div
                    layoutId="selected-glow"
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1.5px ${therapist.accentColor}40` }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Info cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* What to bring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#76b82a] mb-4 flex items-center gap-2">
                <CalendarPlus className="w-4 h-4" /> {ui.infoBring}
              </h3>
              <ul className="space-y-2.5">
                {ui.bringItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cancellation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4" /> {ui.cancelTitle}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {ui.cancelText}
              </p>
            </motion.div>

            {/* Address & contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#76b82a]" /> Contact
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#76b82a] mt-0.5 flex-shrink-0" />
                  Loten 1<br />B-4700 Eupen, Belgique
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0" />
                  {ui.hoursVal}
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0" />
                  <SafeEmail encoded="cHJheGlzbG90ZW5AZ21haWwuY29t" className="hover:text-white transition-colors text-xs" showIcon={false} />
                </li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
