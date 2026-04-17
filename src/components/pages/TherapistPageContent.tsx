"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  GraduationCap, Globe2, CalendarPlus, MessageCircle,
  ExternalLink, ArrowLeft, Star, CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import { SafeEmail } from "@/components/ui/SafeEmail";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

type Therapist = {
  slug: string;
  name: string;
  initials: string;
  color: string;
  convention: { de: string; fr: string; en: string; nl: string; tr: string; ar: string; pl: string } | null;
  role: Record<LangKey, string>;
  description: Record<LangKey, string>;
  specialties: string[];
  languages: string[];
  parcours: { year: string; institution: string; title: string }[];
  booking: { whatsapp?: string; doctoranytime?: string; qtop?: string; crossuite?: string; emailEnc?: string };
  quote: { text: string; author: string } | null;
};

const THERAPISTS: Therapist[] = [
  {
    slug: "philippe-banaszak",
    name: "Philippe Banaszak",
    initials: "PB",
    color: "from-[#2b3186] to-[#1e2260]",
    convention: null,
    role: {
      de: "Manualtherapeut",
      fr: "Thérapeute Manuel",
      en: "Manual Therapist",
      nl: "Manueel Therapeut",
      tr: "Manuel Terapist",
      ar: "معالج يدوي",
      pl: "Terapeuta Manualny",
    },
    description: {
      de: "Physiotherapeut seit 2012 und spezialisiert auf orthopädische Manualtherapie (IFOMPT/QPP). Großen Wert auf einen biopsychosozialen Behandlungsansatz. Regelmäßige internationale Weiterbildungen halten sein Wissen stets auf dem neuesten Stand.",
      fr: "Kinésithérapeute depuis 2012 et spécialisé en thérapie manuelle orthopédique (IFOMPT/QPP). Accorde une grande importance à une approche biopsychosociale du traitement. Des formations continues internationales régulières maintiennent ses connaissances à la pointe.",
      en: "Physiotherapist since 2012, specialised in orthopaedic manual therapy (IFOMPT/QPP). Places great emphasis on a biopsychosocial treatment approach. Regular international continuing education keeps his knowledge at the forefront.",
      nl: "Fysiotherapeut sinds 2012, gespecialiseerd in orthopedische manuele therapie (IFOMPT/QPP). Hecht veel belang aan een biopsychosociale behandelaanpak. Regelmatige internationale bijscholing houdt zijn kennis up-to-date.",
      tr: "2012'den beri fizyoterapist ve ortopedik manuel terapi uzmanı (IFOMPT/QPP). Biyopsikososyal tedavi yaklaşımına büyük önem veriyor. Düzenli uluslararası eğitimler bilgisini güncel tutuyor.",
      ar: "فيزيوتيرابيست منذ 2012 ومتخصص في العلاج اليدوي العظمي (IFOMPT/QPP). يولي أهمية كبيرة للنهج البيوسيكوسوشيالي في العلاج. التدريب الدولي المستمر يبقي معرفته في طليعة المجال.",
      pl: "Fizjoterapeuta od 2012 roku, specjalizujący się w manualnej terapii ortopedycznej (IFOMPT/QPP). Przywiązuje dużą wagę do biopsychospołecznego podejścia terapeutycznego. Regularne szkolenia międzynarodowe utrzymują jego wiedzę na bieżącym poziomie.",
    },
    specialties: ["Manuelle Therapie IFOMPT/QPP", "Orthopädie", "Cervico-cephalic", "Osteopathie", "Yoga & Ayurveda"],
    languages: ["Français", "Deutsch", "English", "Polski"],
    parcours: [
      { year: "2008–2012", institution: "Haute École André Vésale", title: "Master en Kinésithérapie / Physiothérapie" },
      { year: "2013–2014", institution: "SERK", title: "Thérapie Manuelle selon Sohier" },
      { year: "2014–2015", institution: "IAO — International Academy of Osteopathy", title: "Manipulations Ostéopathiques et tissus mous" },
      { year: "2015–2017", institution: "Université de Liège", title: "CUTM IFOMPT — QPP Kinésithérapie Manuelle Orthopédique" },
      { year: "2019", institution: "MATHERA — ECMT 9", title: "Cervico-Cephalic Complaints" },
      { year: "2023", institution: "MATHERA — ECMT 10", title: "Patient-centred care: A key to empower manual therapy" },
      { year: "2024", institution: "University Ghent", title: "Back Rehab: past - present - future (Honorary Symposium Paul Hodges)" },
      { year: "2024", institution: "IFOMPT Basel", title: "\"Crossing Bridges\" — World Conference of Musculoskeletal & Manual PT" },
      { year: "2024", institution: "Rishikesh — Ganesha-trip", title: "Yoga retreat & introduction to Ayurvedic medicine (North India)" },
      { year: "Mars 2026", institution: "JTMO — Université de Reims", title: "Journées de Thérapie Manuelle Orthopédique 2026 — 1er congrès francophone de kinésithérapie musculosquelettique (OMT-France × Mathera)" },
    ],
    booking: { whatsapp: "https://wa.me/32478218186", crossuite: "https://bookings.crossuite.app/50ffa29e-e6ec-496c-95f6-0b41eb3d2071", emailEnc: "cGJraW5lQGljbG91ZC5jb20=" },
    quote: null,
  },
  {
    slug: "florence-joris",
    name: "Florence Joris",
    initials: "FJ",
    color: "from-[#76b82a] to-[#5c9120]",
    convention: {
      de: "Nicht konventioniert",
      fr: "Déconventionnée",
      en: "Non-conventional",
      nl: "Niet geconventioneerd",
      tr: "Konvansiyonlu değil",
      ar: "غير تقليدي",
      pl: "Niekonwencjonalna",
    },
    role: {
      de: "Physiotherapeutin — Osteopathie in Ausbildung — Crochetage",
      fr: "Kinésithérapeute — Ostéopathie en formation — Crochetage",
      en: "Physiotherapist — Osteopathy (in training) — Crochetage",
      nl: "Fysiotherapeut — Osteopathie (in opleiding) — Crochetage",
      tr: "Fizyoterapist — Osteopati (eğitimde) — Crochetage",
      ar: "فيزيوتيرابيست — هشاشة العظام (قيد التدريب) — Crochetage",
      pl: "Fizjoterapeuta — Osteopatia (w trakcie szkolenia) — Crochetage",
    },
    description: {
      de: "Florence bietet umfassende Physiotherapie und Osteopathie an. Ihr ganzheitlicher Ansatz — inspiriert von Andrew Taylor Still — behandelt muskuläre, artikuläre und neurologische Dysfunktionen. Nach 5 Jahren Berufserfahrung in der Schweiz ist sie nun festes Mitglied des Teams.",
      fr: "Florence propose une prise en charge globale en kinésithérapie et ostéopathie. Son approche holistique — inspirée d'Andrew Taylor Still — traite les dysfonctions musculaires, articulaires et neurologiques. Après 5 ans d'expérience en Suisse, elle est aujourd'hui membre à part entière de l'équipe.",
      en: "Florence offers comprehensive physiotherapy and osteopathy. Her holistic approach — inspired by Andrew Taylor Still — addresses muscular, articular and neurological dysfunctions. After 5 years of professional experience in Switzerland, she is now a full member of the team.",
      nl: "Florence biedt uitgebreide fysiotherapie en osteopathie aan. Haar holistische aanpak — geïnspireerd door Andrew Taylor Still — behandelt spier-, gewrichts- en neurologische disfuncties. Na 5 jaar werkervaring in Zwitserland is ze nu een volledig lid van het team.",
      tr: "Florence kapsamlı fizyoterapi ve osteopati sunmaktadır. Andrew Taylor Still'den ilham alan bütüncül yaklaşımı, kas, eklem ve nörolojik disfonksiyonları ele alır. İsviçre'de 5 yıllık mesleki deneyimin ardından artık ekibin tam üyesidir.",
      ar: "تقدم فلورانس علاجًا طبيعيًا شاملًا وهشاشة عظام. نهجها الشمولي — المستوحى من Andrew Taylor Still — يعالج الخلل العضلي والمفصلي والعصبي.",
      pl: "Florence oferuje kompleksową fizjoterapię i osteopatię. Jej holistyczne podejście — inspirowane Andrew Taylor Stillem — zajmuje się dysfunkcjami mięśniowymi, stawowymi i neurologicznymi.",
    },
    specialties: ["Kinésithérapie générale", "Ostéopathie (5 ans)", "Crochetage Fascio-Myo-Neural", "Pilates Matwork", "Dysfonctions neuro-musculo-articulaires"],
    languages: ["Français", "Deutsch", "English"],
    parcours: [
      { year: "2014–2018", institution: "Haute École André Vésale", title: "Master en Kinésithérapie" },
      { year: "2018–2023", institution: "Suisse", title: "Expérience professionnelle en cabinet" },
      { year: "2022–…", institution: "Collège belge d'Ostéopathie, Bruxelles", title: "Master en Ostéopathie (5 ans)" },
      { year: "2023–2024", institution: "Collège belge d'Ostéopathie", title: "Crochetage Fascio-Myo-Neural Global (Méthode Jean Burnotte D.O.)" },
      { year: "2024", institution: "Institut de Pelvi-Périnéologie de Paris (IPPP)", title: "Formation Pilates Matwork 1" },
    ],
    booking: { whatsapp: "https://wa.me/32484395594", doctoranytime: "https://www.doctoranytime.be/d/kinesitherapeute/florence-joris?area=eupen", emailEnc: "Zmtvcmlzay5raW5lQGdtYWlsLmNvbQ==" },
    quote: {
      text: "Le corps est une unité, un ensemble harmonieux composé de parties dépendantes les unes des autres.",
      author: "Andrew Taylor Still",
    },
  },
  {
    slug: "felix-esser",
    name: "Félix Esser",
    initials: "FE",
    color: "from-purple-600 to-purple-800",
    convention: null,
    role: {
      de: "Physiotherapeut — Osteopathie in Ausbildung",
      fr: "Kinésithérapeute — Ostéopathie en formation",
      en: "Physiotherapist — Osteopathy (in training)",
      nl: "Fysiotherapeut — Osteopathie (in opleiding)",
      tr: "Fizyoterapist — Osteopati (eğitimde)",
      ar: "فيزيوتيرابيست — هشاشة العظام (قيد التدريب)",
      pl: "Fizjoterapeuta — Osteopatia (w trakcie szkolenia)",
    },
    description: {
      de: "Frisch diplomierter Physiotherapeut der Universität Lüttich (Master 2021), derzeit in Osteopathie-Ausbildung. Félix verfolgt einen patientenzentrierten Ansatz und bringt Frische und Elan ins Team.",
      fr: "Fraîchement diplômé de l'Université de Liège (Master 2021), actuellement en formation d'ostéopathie. Félix adopte une approche centrée sur le patient et apporte fraîcheur et énergie à l'équipe.",
      en: "Recently graduated from the University of Liège (Master 2021), currently training in osteopathy. Félix takes a patient-centred approach and brings energy and enthusiasm to the team.",
      nl: "Recent afgestudeerd aan de Universiteit van Luik (Master 2021), momenteel in osteopathieopleiding. Félix hanteert een patiëntgerichte aanpak en brengt energie en enthousiasme in het team.",
      tr: "Liège Üniversitesi'nden yakın zamanda mezun olmuş (Master 2021), şu anda osteopati eğitiminde. Félix, hasta merkezli bir yaklaşım benimsiyor ve ekibe enerji katıyor.",
      ar: "خريج حديث من جامعة لييج (ماجستير 2021)، حاليًا في تدريب الهشاشة. يتبنى فيليكس نهجًا يتمحور حول المريض.",
      pl: "Świeżo dyplomowany absolwent Uniwersytetu w Liège (Master 2021), aktualnie w szkoleniu osteopatycznym. Félix stosuje podejście skoncentrowane na pacjencie.",
    },
    specialties: ["Kinésithérapie générale", "Ostéopathie en formation", "Réadaptation"],
    languages: ["Français", "Deutsch", "English"],
    parcours: [
      { year: "2017–2021", institution: "Université de Liège", title: "Master en Kinésithérapie et Réadaptation" },
      { year: "2021–…", institution: "Formation Ostéopathie", title: "En cours de formation" },
    ],
    booking: { whatsapp: "https://wa.me/32493122336", emailEnc: "ZXNzZXJmZWxpeGtpbmVAZ21haWwuY29t" },
    quote: null,
  },
  {
    slug: "fabienne-dormann",
    name: "Fabienne Dormann",
    initials: "FD",
    color: "from-teal-600 to-teal-800",
    convention: null,
    role: {
      de: "Lymphdrainage — Kiefergelenk / ATM — Sporttherapie",
      fr: "Drainage Lymphatique — ATM/CMD — Kinésithérapie Sportive",
      en: "Lymphatic Drainage — TMJ/CMD — Sports Physiotherapy",
      nl: "Lymfedrainage — Kaakgewricht/CMD — Sportfysiotherapie",
      tr: "Lenf Drenajı — Çene Eklemi/CMD — Spor Fizyoterapisi",
      ar: "الصرف اللمفاوي — مفصل الفك/CMD — فيزيوتيرابيا الرياضة",
      pl: "Drenaż Limfatyczny — Staw Żuchwowy/CMD — Fizjoterapia Sportowa",
    },
    description: {
      de: "Fabienne ist Spezialistin für Lymphdrainage nach O. Leduc und Kiefergelenkstherapie (ATM/CMD). Mit ihrem Bachelor & Master mit Auszeichnung und mehreren Spezialisierungen ist sie eine der gefragtesten Therapeutinnen der Praxis.",
      fr: "Fabienne est spécialiste du drainage lymphatique selon O. Leduc et de la thérapie de l'articulation temporo-mandibulaire (ATM/CMD). Avec son Bachelor & Master avec distinction et plusieurs spécialisations, elle est l'une des thérapeutes les plus demandées du cabinet.",
      en: "Fabienne is a specialist in lymphatic drainage (O. Leduc method) and temporomandibular joint therapy (TMJ/CMD). With a Bachelor & Master with distinction and multiple specialisations, she is one of the most sought-after therapists at the practice.",
      nl: "Fabienne is gespecialiseerd in lymfedrainage (methode O. Leduc) en kaakgewrichtstherapie (ATM/CMD). Met haar Bachelor & Master met onderscheiding en meerdere specialisaties is ze een van de meest gevraagde therapeuten van de praktijk.",
      tr: "Fabienne, lenf drenajı (O. Leduc yöntemi) ve temporomandibüler eklem terapisi (ATM/CMD) uzmanıdır. Bachelor & Master derecesiyle ve birden fazla uzmanlıkla kliniğin en çok aranan terapistlerinden biridir.",
      ar: "فابيان متخصصة في الصرف اللمفاوي (طريقة O. Leduc) وعلاج مفصل الفك (ATM/CMD). بحصولها على البكالوريوس والماجستير بامتياز وتخصصات متعددة، فهي من أكثر المعالجين طلبًا في العيادة.",
      pl: "Fabienne specjalizuje się w drenażu limfatycznym (metoda O. Leduc) i terapii stawu skroniowo-żuchwowego (ATM/CMD). Z tytułem Bachelor & Master z wyróżnieniem i wieloma specjalizacjami jest jedną z najbardziej poszukiwanych terapeutek w praktyce.",
    },
    specialties: ["Lymphdrainage O. Leduc", "ATM / Kiefergelenk (CMD)", "Kinésithérapie Cervico-Maxillo-Faciale", "Chirurgie orthognatique & apnée du sommeil", "Thérapie Manuelle Sportive"],
    languages: ["Français", "Deutsch", "English"],
    parcours: [
      { year: "2009–2013", institution: "Haute École André Vésale", title: "Bachelor & Master en Kinésithérapie (avec distinction)" },
      { year: "2014–2015", institution: "SERK", title: "Lymphdrainage nach O. Leduc" },
      { year: "2015–2017", institution: "ATMS", title: "Thérapie Manuelle Sportive — Ostéo-étiopathie" },
      { year: "2020", institution: "Forthema", title: "Kinésithérapie Cervico-Maxillo-Faciale selon L. Pitance" },
      { year: "2023", institution: "Kiné Form", title: "Articulation Temporo-Mandibulaire selon R. Giop" },
      { year: "2025", institution: "Kymo Liège", title: "Rééducation Maxillo-Faciale: Chirurgie orthognatique & apnée du sommeil (Th. Gouzland)" },
    ],
    booking: { whatsapp: "https://wa.me/32471765683", emailEnc: "ZmFiaWVubmVkb3JtYW5uQGdtYWlsLmNvbQ==" },
    quote: null,
  },
  {
    slug: "thom-petit",
    name: "Thom Petit",
    initials: "TP",
    color: "from-orange-500 to-orange-700",
    convention: null,
    role: {
      de: "Sport Physiotherapeut — Running Clinic — BFR",
      fr: "Kinésithérapeute du Sport — Running Clinic — BFR",
      en: "Sports Physiotherapist — Running Clinic — BFR",
      nl: "Sportfysiotherapeut — Running Clinic — BFR",
      tr: "Spor Fizyoterapisti — Running Clinic — BFR",
      ar: "فيزيوتيرابيست رياضي — Running Clinic — BFR",
      pl: "Fizjoterapeuta Sportowy — Running Clinic — BFR",
    },
    description: {
      de: "Thom ist Experte für Sportphysiotherapie mit Spezialisierung auf Laufverletzungen (La Clinique du Coureur) und Blood Flow Restriction Training (BFR/Kinesport). Er betreut Sportler sowohl im Kabinett als auch im Klub.",
      fr: "Thom est expert en kinésithérapie du sport, spécialisé dans les blessures de la course à pied (La Clinique du Coureur) et l'entraînement par restriction du flux sanguin (BFR/Kinesport). Il prend en charge les sportifs en cabinet et en club.",
      en: "Thom is a sports physiotherapy expert, specialised in running injuries (La Clinique du Coureur) and Blood Flow Restriction training (BFR/Kinesport). He treats athletes both in the clinic and at clubs.",
      nl: "Thom is een expert in sportfysiotherapie, gespecialiseerd in loopblessures (La Clinique du Coureur) en Blood Flow Restriction training (BFR/Kinesport). Hij behandelt sporters zowel in het kabinet als in clubs.",
      tr: "Thom, koşu yaralanmaları (La Clinique du Coureur) ve Kan Akışı Kısıtlama antrenmanı (BFR/Kinesport) konusunda uzmanlaşmış bir spor fizyoterapisi uzmanıdır.",
      ar: "ثوم خبير في فيزيوتيرابيا الرياضة، متخصص في إصابات الجري (La Clinique du Coureur) وتدريب تقييد تدفق الدم (BFR/Kinesport).",
      pl: "Thom jest ekspertem fizjoterapii sportowej, specjalizującym się w urazach biegowych (La Clinique du Coureur) i treningu z ograniczeniem przepływu krwi (BFR/Kinesport).",
    },
    specialties: ["Kinésithérapie du sport expert", "Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction (BFR/Kinesport)", "Prévention blessures running", "Nutrition sportive endurance", "Thérapie Manuelle Sportive"],
    languages: ["Français", "Deutsch", "English"],
    parcours: [
      { year: "2010–2015", institution: "Haute École André Vésale", title: "Master en Kinésithérapie / Physiothérapie" },
      { year: "2016–2018", institution: "ATMS", title: "Thérapie Manuelle Sportive — Ostéo-étiopathie" },
      { year: "2016–2019", institution: "La Clinique du Coureur — The Running Clinic", title: "1.0 Prévention des blessures · 1.1 Diagnostics & traitements · 1.2 Exercices thérapeutiques · 1.8 Nutrition & micronutrition sportives" },
      { year: "2019", institution: "KINESPORT", title: "Blood Flow Restriction Training (musculation avec restriction du flux sanguin)" },
      { year: "2020–2021", institution: "Formation complémentaire", title: "Kinésithérapie du sport expert" },
    ],
    booking: { whatsapp: "https://wa.me/32471869024", qtop: "https://www.q-top.be/Online-planner/FR/?root=kq43933", emailEnc: "dGhvbS5wZXRpdEBtZS5jb20=" },
    quote: null,
  },
  {
    slug: "loic-meunier",
    name: "Loïc Meunier",
    initials: "LM",
    color: "from-indigo-600 to-indigo-800",
    convention: null,
    role: {
      de: "Physiotherapeut — Osteopathie in Ausbildung",
      fr: "Kinésithérapeute — Ostéopathie en formation",
      en: "Physiotherapist — Osteopathy (in training)",
      nl: "Fysiotherapeut — Osteopathie (in opleiding)",
      tr: "Fizyoterapist — Osteopati (eğitimde)",
      ar: "فيزيوتيرابيست — هشاشة العظام (قيد التدريب)",
      pl: "Fizjoterapeuta — Osteopatia (w trakcie szkolenia)",
    },
    description: {
      de: "Loïc ist der jüngste Zugang zum Team — frisch diplomiert 2025 an der Universität Lüttich. Leidenschaftlich für den menschlichen Körper stellt er sein frisches Wissen und seine Energie vollständig in den Dienst seiner Patienten.",
      fr: "Loïc est la dernière recrue de l'équipe — fraîchement diplômé en 2025 de l'Université de Liège. Passionné par le corps humain, il met ses connaissances toutes fraîches et son énergie entièrement au service de ses patients.",
      en: "Loïc is the newest addition to the team — freshly graduated in 2025 from the University of Liège. Passionate about the human body, he puts his fresh knowledge and energy entirely at the service of his patients.",
      nl: "Loïc is de nieuwste aanwinst van het team — in 2025 afgestudeerd aan de Universiteit van Luik. Gepassioneerd door het menselijk lichaam, stelt hij zijn verse kennis en energie volledig in dienst van zijn patiënten.",
      tr: "Loïc, ekibin en yeni üyesi — 2025'te Liège Üniversitesi'nden mezun oldu. İnsan vücuduna olan tutkusuyla taze bilgisini ve enerjisini tamamen hastalarının hizmetine sunuyor.",
      ar: "لويك هو أحدث عضو في الفريق — تخرج حديثًا عام 2025 من جامعة لييج. يضع بشغف معرفته الجديدة وطاقته بالكامل في خدمة مرضاه.",
      pl: "Loïc to najnowszy nabytek zespołu — świeżo dyplomowany w 2025 roku na Uniwersytecie w Liège. Z pasją do ludzkiego ciała oddaje swoją świeżą wiedzę i energię w pełni na usługi pacjentów.",
    },
    specialties: ["Kinésithérapie générale", "Ostéopathie en formation", "Réadaptation"],
    languages: ["Français", "Deutsch", "English"],
    parcours: [
      { year: "2020–2025", institution: "Université de Liège", title: "Master en Kinésithérapie et Réadaptation" },
      { year: "2025–…", institution: "Formation Ostéopathie", title: "En cours de formation" },
    ],
    booking: { whatsapp: "https://wa.me/32474296326", emailEnc: "bG1ldW5pZXIubG9pY0BnbWFpbC5jb20=" },
    quote: null,
  },
];

const UI: Record<LangKey, {
  back: string; specialties: string; parcours: string; languages: string;
  bookTitle: string; bookWhatsApp: string; bookOnline: string; bookEmail: string;
  viewTeam: string; convention: string;
}> = {
  de: { back: "Zurück zum Team", specialties: "Spezialisierungen", parcours: "Laufbahn & Ausbildung", languages: "Sprachen", bookTitle: "Termin vereinbaren", bookWhatsApp: "WhatsApp", bookOnline: "Online Buchen", bookEmail: "E-Mail", viewTeam: "Alle Therapeuten", convention: "" },
  fr: { back: "Retour à l'équipe", specialties: "Spécialisations", parcours: "Parcours & Formation", languages: "Langues parlées", bookTitle: "Prendre rendez-vous", bookWhatsApp: "WhatsApp", bookOnline: "Réservation en ligne", bookEmail: "E-mail", viewTeam: "Voir toute l'équipe", convention: "" },
  en: { back: "Back to team", specialties: "Specialisations", parcours: "Background & Training", languages: "Languages spoken", bookTitle: "Book appointment", bookWhatsApp: "WhatsApp", bookOnline: "Book online", bookEmail: "Email", viewTeam: "View full team", convention: "" },
  nl: { back: "Terug naar team", specialties: "Specialisaties", parcours: "Opleiding & Achtergrond", languages: "Gesproken talen", bookTitle: "Afspraak maken", bookWhatsApp: "WhatsApp", bookOnline: "Online boeken", bookEmail: "E-mail", viewTeam: "Volledig team", convention: "" },
  tr: { back: "Takıma dön", specialties: "Uzmanlıklar", parcours: "Eğitim & Kariyer", languages: "Konuşulan diller", bookTitle: "Randevu al", bookWhatsApp: "WhatsApp", bookOnline: "Online rezervasyon", bookEmail: "E-posta", viewTeam: "Tüm ekibi gör", convention: "" },
  ar: { back: "العودة إلى الفريق", specialties: "التخصصات", parcours: "المسار والتكوين", languages: "اللغات المتحدثة", bookTitle: "حجز موعد", bookWhatsApp: "واتساب", bookOnline: "حجز عبر الإنترنت", bookEmail: "البريد الإلكتروني", viewTeam: "عرض الفريق كاملاً", convention: "" },
  pl: { back: "Powrót do zespołu", specialties: "Specjalizacje", parcours: "Wykształcenie i kariera", languages: "Języki", bookTitle: "Umów wizytę", bookWhatsApp: "WhatsApp", bookOnline: "Rezerwacja online", bookEmail: "E-mail", viewTeam: "Cały zespół", convention: "" },
};

export function TherapistPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;

  const therapist = THERAPISTS.find((t) => t.slug === slug);
  const ui = UI[lang];
  const isRtl = lang === "ar";

  if (!therapist) {
    return (
      <div className="pt-28 pb-20 text-center">
        <p className="text-neutral-500 text-lg">Therapeut nicht gefunden / Thérapeute introuvable</p>
        <Link href="/team" className="mt-4 inline-flex items-center gap-2 text-[#2b3186] font-semibold hover:text-[#76b82a]">
          <ArrowLeft className="w-4 h-4" /> {ui.back}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <AnimatedSection className="mb-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#76b82a] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {ui.back}
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — Identity card */}
          <AnimatedSection className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">

              {/* Avatar card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-200">
                <div className={`aspect-square bg-gradient-to-br ${therapist.color} relative overflow-hidden`}>
                  <Image
                    src={`/avatars/${therapist.slug}.png`}
                    alt={therapist.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h1 className="text-2xl font-extrabold text-neutral-900 mb-1">{therapist.name}</h1>
                  <p className="text-sm text-neutral-500 leading-snug mb-3">
                    {therapist.role[lang]}
                  </p>
                  {therapist.convention && (
                    <span className="inline-block text-xs px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full font-medium">
                      {therapist.convention[lang]}
                    </span>
                  )}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-2xl p-5 border border-neutral-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Globe2 className="w-3.5 h-3.5" /> {ui.languages}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {therapist.languages.map((l) => (
                    <span key={l} className="text-xs px-3 py-1 bg-[#76b82a]/10 text-[#5c9120] rounded-full font-semibold">
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Booking */}
              <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-2xl p-5 text-white">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                  <CalendarPlus className="w-4 h-4" /> {ui.bookTitle}
                </h3>
                <div className="space-y-2.5">
                  {therapist.booking.whatsapp && (
                    <a
                      href={therapist.booking.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> {ui.bookWhatsApp}
                    </a>
                  )}
                  {therapist.booking.crossuite && (
                    <a
                      href={therapist.booking.crossuite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {ui.bookOnline} (Crossuite)
                    </a>
                  )}
                  {therapist.booking.doctoranytime && (
                    <a
                      href={therapist.booking.doctoranytime}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {ui.bookOnline} (Doctoranytime)
                    </a>
                  )}
                  {therapist.booking.qtop && (
                    <a
                      href={therapist.booking.qtop}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-sm font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> {ui.bookOnline} (Q-top)
                    </a>
                  )}
                  {therapist.booking.emailEnc && (
                    <SafeEmail
                      encoded={therapist.booking.emailEnc}
                      label={ui.bookEmail}
                      showIcon={true}
                      iconSize={16}
                      className="flex items-center gap-2.5 w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
                    />
                  )}
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT — Content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed text-base">
                  {therapist.description[lang]}
                </p>
                {therapist.quote && (
                  <motion.blockquote
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 border-l-4 border-[#76b82a] pl-5"
                  >
                    <p className="text-neutral-600 italic leading-relaxed">
                      &ldquo;{therapist.quote.text}&rdquo;
                    </p>
                    <footer className="mt-2 text-sm font-semibold text-[#76b82a]">
                      — {therapist.quote.author}
                    </footer>
                  </motion.blockquote>
                )}
              </div>
            </AnimatedSection>

            {/* Specialties */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-5 flex items-center gap-2">
                  <Star className="w-4 h-4" /> {ui.specialties}
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {therapist.specialties.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1.5 text-sm px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl font-medium text-neutral-700 hover:border-[#76b82a]/40 hover:bg-[#76b82a]/5 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a]" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Parcours */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-neutral-200">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> {ui.parcours}
                </h2>
                <div className="relative">
                  <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-neutral-100" />
                  <div className="space-y-5">
                    {therapist.parcours.map((p, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex gap-4"
                      >
                        <div className="w-[3.25rem] flex-shrink-0 text-right">
                          <span className="text-xs font-bold text-[#76b82a] leading-tight block pt-1">
                            {p.year}
                          </span>
                        </div>
                        <div className="flex-shrink-0 relative z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#76b82a] mt-1.5 ml-2" />
                        </div>
                        <div className="flex-1 pb-2">
                          <p className="text-xs text-neutral-400 font-medium mb-0.5">{p.institution}</p>
                          <p className="text-sm text-neutral-800 font-semibold leading-snug">{p.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Back to team */}
            <AnimatedSection delay={0.25}>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> {ui.viewTeam}
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </div>
  );
}
