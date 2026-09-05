"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MessageCircle, Phone, Mail, ExternalLink, MapPin, Clock, CalendarX } from "lucide-react";
import { SafeEmail } from "@/components/ui/SafeEmail";
import { getTherapistPortrait } from "@/lib/therapistPortraits";

type Rec = Record<string, string>;

// Données réutilisées EXACTEMENT depuis TerminPageContent / TherapistPageContent.
// emailEnc = base64 de l'adresse (cf. SafeEmail), online = lien de réservation en ligne.
const THERAPISTS: {
  slug: string;
  name: string;
  accent: string;
  phone: string;
  whatsapp: string;
  online: string | null;
  emailEnc: string | null;
  role: Rec;
}[] = [
  {
    slug: "philippe-banaszak",
    name: "Philippe Banaszak",
    accent: "#2b3186",
    phone: "+32478218186",
    whatsapp: "https://wa.me/32478218186",
    online: "https://bookings.crossuite.app/50ffa29e-e6ec-496c-95f6-0b41eb3d2071",
    emailEnc: "cGJraW5lQGljbG91ZC5jb20=",
    role: { de: "Manualtherapeut", fr: "Thérapeute Manuel", en: "Manual Therapist", nl: "Manueel Therapeut", tr: "Manuel Terapist", ar: "معالج يدوي", pl: "Terapeuta Manualny", uk: "Мануальний терапевт", es: "Terapeuta manual", ku: "Terapîstê destî" },
  },
  {
    slug: "thom-petit",
    name: "Thom Petit",
    accent: "#f97316",
    phone: "+32471869024",
    whatsapp: "https://wa.me/32471869024",
    online: "https://www.q-top.be/Online-planner/FR/?root=kq43933",
    emailEnc: "dGhvbS5wZXRpdEBtZS5jb20=",
    role: { de: "Sport-Physiotherapeut — Running Clinic — BFR", fr: "Kinésithérapeute du Sport — Running Clinic — BFR", en: "Sports Physiotherapist — Running Clinic — BFR", nl: "Sportfysiotherapeut — Running Clinic — BFR", tr: "Spor Fizyoterapisti — Running Clinic — BFR", ar: "أخصائي علاج طبيعي رياضي — Running Clinic — BFR", pl: "Fizjoterapeuta Sportowy — Running Clinic — BFR", uk: "Спортивний фізіотерапевт — Running Clinic — BFR", es: "Fisioterapeuta deportivo — Running Clinic — BFR", ku: "Fizyoterapîstê werzîşê — Running Clinic — BFR" },
  },
  {
    slug: "fabienne-dormann",
    name: "Fabienne Dormann",
    accent: "#0d9488",
    phone: "+32471765683",
    whatsapp: "https://wa.me/32471765683",
    online: null,
    emailEnc: null,
    role: { de: "Lymphdrainage — Kiefergelenk / CMD", fr: "Drainage Lymphatique — ATM/CMD", en: "Lymphatic Drainage — TMJ/CMD", nl: "Lymfedrainage — Kaakgewricht/CMD", tr: "Lenf Drenajı — Çene Eklemi/CMD", ar: "تصريف لمفاوي — مفصل الفك", pl: "Drenaż Limfatyczny — Staw Żuchwowy", uk: "Лімфодренаж — СНЩС", es: "Drenaje linfático — ATM/CMD", ku: "Drenaja lîmfatîk — TMJ" },
  },
  {
    slug: "felix-esser",
    name: "Félix Esser",
    accent: "#9333ea",
    phone: "+32493122336",
    whatsapp: "https://wa.me/32493122336",
    online: null,
    emailEnc: "ZXNzZXJmZWxpeGtpbmVAZ21haWwuY29t",
    role: { de: "Physiotherapeut — Osteopathie in Ausbildung", fr: "Kinésithérapeute — Ostéopathie en formation", en: "Physiotherapist — Osteopathy (training)", nl: "Fysiotherapeut — Osteopathie (opleiding)", tr: "Fizyoterapist — Osteopati (eğitim)", ar: "أخصائي علاج طبيعي — أوستيوباثي (تدريب)", pl: "Fizjoterapeuta — Osteopatia (szkolenie)", uk: "Фізіотерапевт — остеопатія (навчання)", es: "Fisioterapeuta — Osteopatía (en formación)", ku: "Fizyoterapîst — Osteopatî (perwerde)" },
  },
  {
    slug: "loic-meunier",
    name: "Loïc Meunier",
    accent: "#4f46e5",
    phone: "+32474296326",
    whatsapp: "https://wa.me/32474296326",
    online: null,
    emailEnc: "bG1ldW5pZXIubG9pY0BnbWFpbC5jb20=",
    role: { de: "Physiotherapeut — Osteopathie in Ausbildung", fr: "Kinésithérapeute — Ostéopathie en formation", en: "Physiotherapist — Osteopathy (training)", nl: "Fysiotherapeut — Osteopathie (opleiding)", tr: "Fizyoterapist — Osteopati (eğitim)", ar: "أخصائي علاج طبيعي — أوستيوباثي (تدريب)", pl: "Fizjoterapeuta — Osteopatia (szkolenie)", uk: "Фізіотерапевт — остеопатія (навчання)", es: "Fisioterapeuta — Osteopatía (en formación)", ku: "Fizyoterapîst — Osteopatî (perwerde)" },
  },
];

const T: Record<string, Rec> = {
  de: {
    title: "Kontakt",
    subtitle: "Erreichen Sie Ihren Therapeuten direkt — am schnellsten, um einen Termin abzusagen oder zu verschieben.",
    directContact: "Direkter Kontakt zum Therapeuten",
    whatsapp: "WhatsApp",
    call: "Anrufen",
    email: "E-Mail",
    online: "Online buchen",
    cabinetTitle: "Praxis Loten",
    addressLabel: "Adresse",
    hoursLabel: "Öffnungszeiten",
    hoursVal: "Mo – Fr: 07:30 – 20:30 · Wochenende geschlossen",
    cabinetEmailLabel: "Allgemeine E-Mail",
    cancelTitle: "Termin absagen oder verschieben?",
    cancelText: "Bitte kontaktieren Sie Ihren Therapeuten direkt, möglichst mindestens 24 Stunden im Voraus.",
  },
  fr: {
    title: "Contact",
    subtitle: "Contactez directement votre thérapeute — le plus rapide pour annuler ou déplacer un rendez-vous.",
    directContact: "Contact direct du thérapeute",
    whatsapp: "WhatsApp",
    call: "Appeler",
    email: "E-mail",
    online: "Réserver en ligne",
    cabinetTitle: "Praxis Loten",
    addressLabel: "Adresse",
    hoursLabel: "Heures d'ouverture",
    hoursVal: "Lun – Ven : 07:30 – 20:30 · Week-end fermé",
    cabinetEmailLabel: "E-mail général",
    cancelTitle: "Annuler ou déplacer un rendez-vous ?",
    cancelText: "Merci de contacter directement votre thérapeute, idéalement au moins 24 heures à l'avance.",
  },
  en: {
    title: "Contact",
    subtitle: "Reach your therapist directly — the fastest way to cancel or reschedule an appointment.",
    directContact: "Direct contact with the therapist",
    whatsapp: "WhatsApp",
    call: "Call",
    email: "Email",
    online: "Book online",
    cabinetTitle: "Praxis Loten",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    hoursVal: "Mon – Fri: 07:30 – 20:30 · Weekend closed",
    cabinetEmailLabel: "General email",
    cancelTitle: "Cancel or reschedule an appointment?",
    cancelText: "Please contact your therapist directly, ideally at least 24 hours in advance.",
  },
};

function fmtPhone(p: string) {
  return p.replace(/^(\+32)(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5");
}

export function ContactPageContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.en;
  const tr = (r: Rec) => r[locale] ?? r.en ?? r.de;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f8fc] to-white">
      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
            style={{ color: "#2A2C6D" }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Therapist directory */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
          {THERAPISTS.map((th, i) => {
            const portrait = getTherapistPortrait(th.slug, "thumbnail");
            return (
            <motion.div
              key={th.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="p-6 flex items-center gap-4 border-b border-neutral-100">
                <div
                  className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-2"
                  style={{ ["--tw-ring-color" as string]: th.accent }}
                >
                  <Image
                    src={portrait.src}
                    alt={th.name}
                    fill
                    sizes="64px"
                    className={portrait.className}
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-neutral-900 leading-tight">{th.name}</h2>
                  <p className="text-sm font-medium mt-0.5" style={{ color: th.accent }}>
                    {tr(th.role)}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-5 flex flex-col gap-2.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  {t.directContact}
                </p>

                <a
                  href={th.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#25D366]/10 text-[#128C45] font-semibold text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  {t.whatsapp}
                </a>

                <a
                  href={`tel:${th.phone}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-neutral-200 transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {fmtPhone(th.phone)}
                </a>

                {th.emailEnc && (
                  <SafeEmail
                    encoded={th.emailEnc}
                    iconSize={16}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                  />
                )}

                {th.online && (
                  <a
                    href={th.online}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#9CC93B" }}
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                    {t.online}
                  </a>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </section>

      {/* Cancel / reschedule notice */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-3xl p-6 sm:p-8 flex items-start gap-4"
            style={{ backgroundColor: "#2A2C6D" }}
          >
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <CalendarX className="w-5 h-5 text-[#9CC93B]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{t.cancelTitle}</h3>
              <p className="text-white/80 text-sm mt-1.5 leading-relaxed">{t.cancelText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet info footer block */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 sm:p-8">
          <h3 className="text-xl font-bold mb-5" style={{ color: "#2A2C6D" }}>
            {t.cabinetTitle}
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#9CC93B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t.addressLabel}</p>
                <p className="text-sm text-neutral-700 mt-1">Loten 1, B-4700 Eupen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#9CC93B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t.hoursLabel}</p>
                <p className="text-sm text-neutral-700 mt-1">{t.hoursVal}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#9CC93B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{t.cabinetEmailLabel}</p>
                <SafeEmail
                  encoded="cHJheGlzbG90ZW5AZ21haWwuY29t"
                  showIcon={false}
                  className="text-sm text-neutral-700 mt-1 inline-block hover:text-[#2A2C6D] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
