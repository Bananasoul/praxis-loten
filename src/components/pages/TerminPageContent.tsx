"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  MessageCircle, ExternalLink, Phone, MapPin, Clock, Mail,
  Sparkles, ArrowRight, RotateCcw, Dices, Target, CalendarPlus, Check, X as XIcon,
  IdCard, FileText, Sticker, Waves, Shirt,
} from "lucide-react";
import { SafeEmail } from "@/components/ui/SafeEmail";
import { getTherapistPortrait } from "@/lib/therapistPortraits";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

const GEN = ["dos", "nuque", "epaule", "coude", "main", "genou", "cheville", "sport", "postop"];
const NICHE = ["drainage", "machoire"];

type Rec = Record<string, string>;

const THERAPISTS: {
  slug: string; name: string; accent: string; langs: string[]; tags: string[];
  specs: string[]; phone: string; whatsapp: string; online: string | null; conv: boolean;
  role: Rec; plain: Rec; absence?: { from: string; to: string; label: Rec };
}[] = [
  {
    slug: "philippe-banaszak", name: "Philippe Banaszak", accent: "#2b3186",
    langs: ["FR", "DE", "EN", "PL"], tags: [...GEN], specs: ["Thérapie manuelle", "Orthopédie", "Dos & nuque"],
    phone: "+32478218186", whatsapp: "https://wa.me/32478218186",
    online: "https://bookings.crossuite.app/50ffa29e-e6ec-496c-95f6-0b41eb3d2071", conv: false,
    role: { de: "Manualtherapeut", fr: "Thérapeute Manuel", en: "Manual Therapist", nl: "Manueel Therapeut", tr: "Manuel Terapist", ar: "معالج يدوي", pl: "Terapeuta Manualny", uk: "Мануальний терапевт", es: "Terapeuta manual", ku: "Terapîstê destî" },
    plain: { de: "Rücken-, Nacken- und Gelenkschmerzen. Hochwertige Manualtherapie.", fr: "Douleurs de dos, nuque et articulations. Thérapie manuelle de pointe.", en: "Back, neck and joint pain. Advanced manual therapy." },
    absence: { from: "2026-09-21", to: "2026-10-14", label: {
      de: "Abwesend vom 21. September bis 14. Oktober — zurück am 15. Oktober",
      fr: "Absent du 21 septembre au 14 octobre — de retour le 15 octobre",
      en: "Away from 21 September to 14 October — back on 15 October",
      nl: "Afwezig van 21 september tot 14 oktober — terug op 15 oktober",
      tr: "21 Eylül – 14 Ekim arası burada değil — 15 Ekim'de döner",
      ar: "غائب من 21 سبتمبر إلى 14 أكتوبر — العودة في 15 أكتوبر",
      pl: "Nieobecny od 21 września do 14 października — powrót 15 października",
      uk: "Відсутній з 21 вересня до 14 жовтня — повернення 15 жовтня",
      es: "Ausente del 21 de septiembre al 14 de octubre — de vuelta el 15 de octubre",
      ku: "Ji 21 îlonê heta 14 cotmehê ne li vir e — di 15 cotmehê de vedigere",
    } },
  },
  {
    slug: "thom-petit", name: "Thom Petit", accent: "#f97316",
    langs: ["FR", "DE", "EN"], tags: [...GEN], specs: ["Sport", "Course à pied", "BFR"],
    phone: "+32471869024", whatsapp: "https://wa.me/32471869024",
    online: "https://www.q-top.be/Online-planner/FR/?root=kq43933", conv: false,
    role: { de: "Sport-Physiotherapeut — Running Clinic — BFR", fr: "Kinésithérapeute du Sport — Running Clinic — BFR", en: "Sports Physiotherapist — Running Clinic — BFR", nl: "Sportfysiotherapeut — Running Clinic — BFR", tr: "Spor Fizyoterapisti — Running Clinic — BFR", ar: "أخصائي علاج طبيعي رياضي — Running Clinic — BFR", pl: "Fizjoterapeuta Sportowy — Running Clinic — BFR", uk: "Спортивний фізіотерапевт — Running Clinic — BFR", es: "Fisioterapeuta deportivo — Running Clinic — BFR", ku: "Fizyoterapîstê werzîşê — Running Clinic — BFR" },
    plain: { de: "Alle Beschwerden — und der Experte für Sport, Laufen & Leistung.", fr: "Toutes pathologies — et l'expert sport, course à pied & performance.", en: "All conditions — and the expert in sport, running & performance." },
  },
  {
    slug: "fabienne-dormann", name: "Fabienne Dormann", accent: "#0d9488",
    langs: ["FR", "DE", "EN"], tags: [...GEN, "drainage", "machoire"], specs: ["Drainage Leduc", "ATM / CMD", "Kiné générale"],
    phone: "+32471765683", whatsapp: "https://wa.me/32471765683", online: null, conv: false,
    role: { de: "Lymphdrainage — Kiefergelenk / CMD", fr: "Drainage Lymphatique — ATM/CMD", en: "Lymphatic Drainage — TMJ/CMD", nl: "Lymfedrainage — Kaakgewricht/CMD", tr: "Lenf Drenajı — Çene Eklemi/CMD", ar: "تصريف لمفاوي — مفصل الفك", pl: "Drenaż Limfatyczny — Staw Żuchwowy", uk: "Лімфодренаж — СНЩС", es: "Drenaje linfático — ATM/CMD", ku: "Drenaja lîmfatîk — TMJ" },
    plain: { de: "Alle Beschwerden — und die Einzige für Lymphdrainage & Kiefergelenk (CMD).", fr: "Toutes pathologies — et la seule pour le drainage lymphatique & la mâchoire (ATM).", en: "All conditions — and the only one for lymphatic drainage & jaw (TMJ)." },
  },
  {
    slug: "felix-esser", name: "Félix Esser", accent: "#9333ea",
    langs: ["FR", "DE", "EN"], tags: [...GEN], specs: ["Kiné générale", "Ostéopathie", "Réadaptation"],
    phone: "+32493122336", whatsapp: "https://wa.me/32493122336", online: null, conv: false,
    role: { de: "Physiotherapeut — Osteopathie in Ausbildung", fr: "Kinésithérapeute — Ostéopathie en formation", en: "Physiotherapist — Osteopathy (training)", nl: "Fysiotherapeut — Osteopathie (opleiding)", tr: "Fizyoterapist — Osteopati (eğitim)", ar: "أخصائي علاج طبيعي — أوستيوباثي (تدريب)", pl: "Fizjoterapeuta — Osteopatia (szkolenie)", uk: "Фізіотерапевт — остеопатія (навчання)", es: "Fisioterapeuta — Osteopatía (en formación)", ku: "Fizyoterapîst — Osteopatî (perwerde)" },
    plain: { de: "Allgemeine Reha, nach Verletzungen, osteopathischer Ansatz.", fr: "Rééducation générale, suites de blessure, approche ostéopathique.", en: "General rehab, post-injury, osteopathic approach." },
  },
  {
    slug: "loic-meunier", name: "Loïc Meunier", accent: "#4f46e5",
    langs: ["FR", "DE", "EN"], tags: [...GEN], specs: ["Kiné générale", "Ostéopathie", "Réadaptation"],
    phone: "+32474296326", whatsapp: "https://wa.me/32474296326", online: null, conv: true,
    role: { de: "Physiotherapeut — Osteopathie in Ausbildung", fr: "Kinésithérapeute — Ostéopathie en formation", en: "Physiotherapist — Osteopathy (training)", nl: "Fysiotherapeut — Osteopathie (opleiding)", tr: "Fizyoterapist — Osteopati (eğitim)", ar: "أخصائي علاج طبيعي — أوستيوباثي (تدريب)", pl: "Fizjoterapeuta — Osteopatia (szkolenie)", uk: "Фізіотерапевт — остеопатія (навчання)", es: "Fisioterapeuta — Osteopatía (en formación)", ku: "Fizyoterapîst — Osteopatî (perwerde)" },
    plain: { de: "Allgemeine Reha, nach Verletzungen, osteopathischer Ansatz.", fr: "Rééducation générale, suites de blessure, approche ostéopathique.", en: "General rehab, post-injury, osteopathic approach." },
  },
];

const MOTIFS: { id: string; emoji: string; label: Rec }[] = [
  { id: "dos", emoji: "🔙", label: { de: "Rückenschmerzen", fr: "Mal de dos", en: "Back pain", nl: "Rugpijn", tr: "Sırt ağrısı", ar: "ألم الظهر", pl: "Ból pleców", uk: "Біль у спині", es: "Dolor de espalda", ku: "Êşa piştê" } },
  { id: "nuque", emoji: "🦒", label: { de: "Nacken", fr: "Cou / nuque", en: "Neck", nl: "Nek", tr: "Boyun", ar: "الرقبة", pl: "Kark / szyja", uk: "Шия", es: "Cuello", ku: "Stû" } },
  { id: "epaule", emoji: "💪", label: { de: "Schulter", fr: "Épaule", en: "Shoulder", nl: "Schouder", tr: "Omuz", ar: "الكتف", pl: "Bark", uk: "Плече", es: "Hombro", ku: "Mil" } },
  { id: "coude", emoji: "🦾", label: { de: "Ellbogen", fr: "Coude", en: "Elbow", nl: "Elleboog", tr: "Dirsek", ar: "المرفق", pl: "Łokieć", uk: "Лікоть", es: "Codo", ku: "Anîşk" } },
  { id: "main", emoji: "🤚", label: { de: "Hand / Handgelenk", fr: "Main / poignet", en: "Hand / wrist", nl: "Hand / pols", tr: "El / bilek", ar: "اليد / الرسغ", pl: "Dłoń / nadgarstek", uk: "Кисть / зап'ясток", es: "Mano / muñeca", ku: "Dest / zend" } },
  { id: "genou", emoji: "🦵", label: { de: "Knie / Bein", fr: "Genou / jambe", en: "Knee / leg", nl: "Knie / been", tr: "Diz / bacak", ar: "الركبة / الساق", pl: "Kolano / noga", uk: "Коліно / нога", es: "Rodilla / pierna", ku: "Çok / ling" } },
  { id: "cheville", emoji: "🦶", label: { de: "Knöchel", fr: "Cheville", en: "Ankle", nl: "Enkel", tr: "Ayak bileği", ar: "الكاحل", pl: "Kostka", uk: "Щиколотка", es: "Tobillo", ku: "Gûzek" } },
  { id: "sport", emoji: "🏃", label: { de: "Sport / Laufen", fr: "Sport / course", en: "Sport / running", nl: "Sport / hardlopen", tr: "Spor / koşu", ar: "رياضة / جري", pl: "Sport / bieganie", uk: "Спорт / біг", es: "Deporte / correr", ku: "Werzîş / bezîn" } },
  { id: "postop", emoji: "🩹", label: { de: "Nach OP", fr: "Après opération", en: "Post-surgery", nl: "Na operatie", tr: "Ameliyat sonrası", ar: "بعد العملية", pl: "Po operacji", uk: "Після операції", es: "Tras cirugía", ku: "Piştî emeliyatê" } },
  { id: "drainage", emoji: "💧", label: { de: "Lymphdrainage", fr: "Drainage", en: "Drainage", nl: "Drainage", tr: "Drenaj", ar: "تصريف لمفاوي", pl: "Drenaż", uk: "Дренаж", es: "Drenaje", ku: "Drenaj" } },
  { id: "machoire", emoji: "😬", label: { de: "Kiefer (CMD)", fr: "Mâchoire (ATM)", en: "Jaw (TMJ)", nl: "Kaak (CMD)", tr: "Çene (TME)", ar: "الفك", pl: "Szczęka", uk: "Щелепа (СНЩС)", es: "Mandíbula (ATM)", ku: "Çene (TMJ)" } },
];

const LANG_FLAGS: Record<string, string> = { FR: "🇫🇷", DE: "🇩🇪", EN: "🇬🇧", PL: "🇵🇱" };
const LANG_OPTS = ["FR", "DE", "EN", "PL"];

const X: Record<string, Rec> = {
  fr: { heroTitle: "Trouvez votre", heroAccent: "kinésithérapeute", heroSub: "Selon votre besoin, votre langue, ou au hasard. En quelques secondes.", trust: "4,8 · 23 avis Google · Eupen", modeNeedT: "J'ai un besoin précis", modeNeedS: "Filtrez par motif & langue", modeRandT: "Peu importe, surprenez-moi", modeRandS: "Un kiné au hasard, équitable", motifQ: "Qu'est-ce qui vous amène ?", langQ: "Dans quelle langue ?", allLang: "Toutes", spinBtn: "Désignez-moi un kiné", spinChose: "Le hasard a choisi", gridTeam: "Notre équipe", gridReco: "Recommandé pour vous", gridSpec: "Le ou la spécialiste pour ce motif", gridAll: "Tous nos kinés s'en occupent", allTakeBanner: "Tous nos kinés prennent en charge ce motif — choisissez, ou laissez le hasard décider.", ribReco: "Recommandé", ribSpec: "Spécialiste", ribWin: "Votre kiné", reserveWith: "Réserver avec", onlineBtn: "Réservation en ligne", profileBtn: "Voir le profil complet", callBtn: "Appeler", reset: "Réinitialiser les filtres", reviews: "avis Google", emptyLang: "Personne ne parle cette langue ici. Élargissez le filtre ou essayez « Surprenez-moi »." },
  de: { heroTitle: "Finden Sie Ihren", heroAccent: "Physiotherapeuten", heroSub: "Nach Beschwerde, Sprache oder per Zufall. In wenigen Sekunden.", trust: "4,8 · 23 Google-Bewertungen · Eupen", modeNeedT: "Ich habe ein konkretes Anliegen", modeNeedS: "Nach Beschwerde & Sprache filtern", modeRandT: "Egal, überraschen Sie mich", modeRandS: "Ein Therapeut per Zufall, fair", motifQ: "Was führt Sie zu uns?", langQ: "In welcher Sprache?", allLang: "Alle", spinBtn: "Therapeut auslosen", spinChose: "Der Zufall hat gewählt", gridTeam: "Unser Team", gridReco: "Für Sie empfohlen", gridSpec: "Spezialist/in für dieses Anliegen", gridAll: "Alle unsere Therapeuten helfen Ihnen", allTakeBanner: "Alle unsere Therapeuten behandeln dieses Anliegen — wählen Sie, oder lassen Sie den Zufall entscheiden.", ribReco: "Empfohlen", ribSpec: "Spezialist/in", ribWin: "Ihr Therapeut", reserveWith: "Termin bei", onlineBtn: "Online buchen", profileBtn: "Vollständiges Profil", callBtn: "Anrufen", reset: "Filter zurücksetzen", reviews: "Google-Bewertungen", emptyLang: "Niemand spricht diese Sprache hier. Erweitern Sie den Filter oder versuchen Sie „Überraschen Sie mich“." },
  en: { heroTitle: "Find your", heroAccent: "physiotherapist", heroSub: "By need, by language, or at random. In seconds.", trust: "4.8 · 23 Google reviews · Eupen", modeNeedT: "I have a specific need", modeNeedS: "Filter by reason & language", modeRandT: "No preference, surprise me", modeRandS: "A therapist at random, fair", motifQ: "What brings you in?", langQ: "In which language?", allLang: "All", spinBtn: "Pick a therapist for me", spinChose: "Chance picked", gridTeam: "Our team", gridReco: "Recommended for you", gridSpec: "The specialist for this", gridAll: "All our therapists handle this", allTakeBanner: "All our therapists treat this — choose one, or let chance decide.", ribReco: "Recommended", ribSpec: "Specialist", ribWin: "Your therapist", reserveWith: "Book with", onlineBtn: "Book online", profileBtn: "View full profile", callBtn: "Call", reset: "Reset filters", reviews: "Google reviews", emptyLang: "Nobody speaks this language here. Widen the filter or try “Surprise me”." },
  nl: { heroTitle: "Vind uw", heroAccent: "kinesist", heroSub: "Op klacht, taal of willekeurig. In enkele seconden.", trust: "4,8 · 23 Google-reviews · Eupen", modeNeedT: "Ik heb een specifieke klacht", modeNeedS: "Filter op klacht & taal", modeRandT: "Maakt niet uit, verras me", modeRandS: "Een kinesist willekeurig, eerlijk", motifQ: "Wat brengt u hier?", langQ: "In welke taal?", allLang: "Alle", spinBtn: "Kies een kinesist voor mij", spinChose: "Het toeval koos", gridTeam: "Ons team", gridReco: "Aanbevolen voor u", gridSpec: "De specialist hiervoor", gridAll: "Al onze kinesisten helpen u", allTakeBanner: "Al onze kinesisten behandelen dit — kies, of laat het toeval beslissen.", ribReco: "Aanbevolen", ribSpec: "Specialist", ribWin: "Uw kinesist", reserveWith: "Boeken bij", onlineBtn: "Online boeken", profileBtn: "Volledig profiel", callBtn: "Bellen", reset: "Filters wissen", reviews: "Google-reviews", emptyLang: "Niemand spreekt deze taal hier. Verbreed de filter of probeer “Verras me”." },
  tr: { heroTitle: "Fizyoterapistinizi", heroAccent: "bulun", heroSub: "İhtiyaca, dile göre ya da rastgele. Saniyeler içinde.", trust: "4,8 · 23 Google değerlendirmesi · Eupen", modeNeedT: "Belirli bir şikâyetim var", modeNeedS: "Şikâyet & dile göre filtrele", modeRandT: "Fark etmez, beni şaşırt", modeRandS: "Rastgele bir terapist, adil", motifQ: "Sizi buraya ne getirdi?", langQ: "Hangi dilde?", allLang: "Tümü", spinBtn: "Benim için bir terapist seç", spinChose: "Şans seçti", gridTeam: "Ekibimiz", gridReco: "Sizin için önerilen", gridSpec: "Bu konunun uzmanı", gridAll: "Tüm terapistlerimiz ilgilenir", allTakeBanner: "Tüm terapistlerimiz bununla ilgilenir — birini seçin ya da şans karar versin.", ribReco: "Önerilen", ribSpec: "Uzman", ribWin: "Terapistiniz", reserveWith: "Randevu:", onlineBtn: "Online rezervasyon", profileBtn: "Profili gör", callBtn: "Ara", reset: "Filtreleri sıfırla", reviews: "Google değerlendirmesi", emptyLang: "Burada bu dili konuşan yok. Filtreyi genişletin veya “Beni şaşırt” deneyin." },
  ar: { heroTitle: "اعثر على", heroAccent: "أخصائي العلاج الطبيعي", heroSub: "حسب الحاجة أو اللغة أو عشوائيًا. في ثوانٍ.", trust: "4.8 · 23 تقييم على Google · أوبن", modeNeedT: "لدي حاجة محددة", modeNeedS: "التصفية حسب السبب واللغة", modeRandT: "لا يهم، فاجئني", modeRandS: "معالج عشوائي، بإنصاف", motifQ: "ما الذي أتى بك؟", langQ: "بأي لغة؟", allLang: "الكل", spinBtn: "اختر لي معالجًا", spinChose: "اختار الحظ", gridTeam: "فريقنا", gridReco: "موصى به لك", gridSpec: "المختص بهذا", gridAll: "كل معالجينا يهتمون بهذا", allTakeBanner: "كل معالجينا يعالجون هذا — اختر، أو دع الحظ يقرر.", ribReco: "موصى به", ribSpec: "مختص", ribWin: "معالجك", reserveWith: "موعد مع", onlineBtn: "حجز عبر الإنترنت", profileBtn: "عرض الملف الكامل", callBtn: "اتصال", reset: "إعادة ضبط التصفية", reviews: "تقييم Google", emptyLang: "لا أحد يتحدث هذه اللغة هنا. وسّع التصفية أو جرّب «فاجئني»." },
  pl: { heroTitle: "Znajdź swojego", heroAccent: "fizjoterapeutę", heroSub: "Według potrzeby, języka lub losowo. W kilka sekund.", trust: "4,8 · 23 opinie Google · Eupen", modeNeedT: "Mam konkretny problem", modeNeedS: "Filtruj wg dolegliwości i języka", modeRandT: "Wszystko jedno, zaskocz mnie", modeRandS: "Losowy fizjoterapeuta, sprawiedliwie", motifQ: "Co Cię sprowadza?", langQ: "W jakim języku?", allLang: "Wszystkie", spinBtn: "Wylosuj fizjoterapeutę", spinChose: "Los wybrał", gridTeam: "Nasz zespół", gridReco: "Polecane dla Ciebie", gridSpec: "Specjalista od tego", gridAll: "Wszyscy nasi fizjoterapeuci się tym zajmują", allTakeBanner: "Wszyscy nasi fizjoterapeuci leczą to — wybierz lub pozwól zadecydować losowi.", ribReco: "Polecany", ribSpec: "Specjalista", ribWin: "Twój fizjoterapeuta", reserveWith: "Wizyta u", onlineBtn: "Rezerwacja online", profileBtn: "Pełny profil", callBtn: "Zadzwoń", reset: "Wyczyść filtry", reviews: "opinie Google", emptyLang: "Nikt tu nie mówi w tym języku. Poszerz filtr lub spróbuj „Zaskocz mnie”." },
  uk: { heroTitle: "Знайдіть свого", heroAccent: "фізіотерапевта", heroSub: "За потребою, мовою або випадково. За кілька секунд.", trust: "4,8 · 23 відгуки Google · Ойпен", modeNeedT: "У мене конкретна проблема", modeNeedS: "Фільтр за приводом і мовою", modeRandT: "Байдуже, здивуйте мене", modeRandS: "Терапевт випадково, чесно", motifQ: "Що вас турбує?", langQ: "Якою мовою?", allLang: "Усі", spinBtn: "Оберіть терапевта для мене", spinChose: "Випадок обрав", gridTeam: "Наша команда", gridReco: "Рекомендовано вам", gridSpec: "Спеціаліст із цього", gridAll: "Усі наші терапевти цим займаються", allTakeBanner: "Усі наші терапевти лікують це — оберіть або довіртеся випадку.", ribReco: "Рекомендовано", ribSpec: "Спеціаліст", ribWin: "Ваш терапевт", reserveWith: "Запис до", onlineBtn: "Бронювати онлайн", profileBtn: "Повний профіль", callBtn: "Подзвонити", reset: "Скинути фільтри", reviews: "відгуки Google", emptyLang: "Тут ніхто не говорить цією мовою. Розширте фільтр або спробуйте «Здивуйте мене»." },
  es: { heroTitle: "Encuentre a su", heroAccent: "fisioterapeuta", heroSub: "Por necesidad, idioma o al azar. En segundos.", trust: "4,8 · 23 reseñas de Google · Eupen", modeNeedT: "Tengo una necesidad concreta", modeNeedS: "Filtre por motivo e idioma", modeRandT: "Me da igual, sorpréndame", modeRandS: "Un fisio al azar, equitativo", motifQ: "¿Qué le trae por aquí?", langQ: "¿En qué idioma?", allLang: "Todos", spinBtn: "Elija un fisio por mí", spinChose: "El azar eligió", gridTeam: "Nuestro equipo", gridReco: "Recomendado para usted", gridSpec: "El o la especialista en esto", gridAll: "Todos nuestros fisios se ocupan de esto", allTakeBanner: "Todos nuestros fisios tratan esto — elija, o deje que decida el azar.", ribReco: "Recomendado", ribSpec: "Especialista", ribWin: "Su fisio", reserveWith: "Cita con", onlineBtn: "Reserva en línea", profileBtn: "Ver perfil completo", callBtn: "Llamar", reset: "Restablecer filtros", reviews: "reseñas de Google", emptyLang: "Aquí nadie habla este idioma. Amplíe el filtro o pruebe «Sorpréndame»." },
  ku: { heroTitle: "Fizyoterapîstê xwe", heroAccent: "bibîne", heroSub: "Li gorî pêwîstî, ziman an bi tesadif. Di çend saniyeyan de.", trust: "4,8 · 23 nirxandinên Google · Eupen", modeNeedT: "Pirsgirêkeke min a diyar heye", modeNeedS: "Li gorî sedem û ziman parzûn bike", modeRandT: "Ferq nake, min surprîz bike", modeRandS: "Terapîstek bi tesadif, bi dadperwerî", motifQ: "Çi we tîne?", langQ: "Bi kîjan zimanî?", allLang: "Hemû", spinBtn: "Ji bo min terapîstekê hilbijêre", spinChose: "Tesadifê hilbijart", gridTeam: "Tîma me", gridReco: "Ji bo we tê pêşniyarkirin", gridSpec: "Pisporê vê yekê", gridAll: "Hemû terapîstên me bi vê re mijûl dibin", allTakeBanner: "Hemû terapîstên me vê derman dikin — hilbijêre, an bila tesadif biryar bide.", ribReco: "Pêşniyarkirî", ribSpec: "Pispor", ribWin: "Terapîstê we", reserveWith: "Randevû bi", onlineBtn: "Online rezerve bike", profileBtn: "Profîla tevahî", callBtn: "Telefon bike", reset: "Parzûnan jê bibe", reviews: "nirxandinên Google", emptyLang: "Li vir kes bi vî zimanî napeyive. Parzûnê fireh bike an „Min surprîz bike\" biceribîne." },
};

const XC: Record<string, Rec> = {
  fr: { chooseTitle: "Comment souhaitez-vous prendre rendez-vous ?", byPhone: "Par téléphone", byWhatsApp: "Par WhatsApp", close: "Fermer" },
  de: { chooseTitle: "Wie möchten Sie einen Termin vereinbaren?", byPhone: "Telefonisch", byWhatsApp: "Per WhatsApp", close: "Schließen" },
  en: { chooseTitle: "How would you like to book?", byPhone: "By phone", byWhatsApp: "Via WhatsApp", close: "Close" },
  nl: { chooseTitle: "Hoe wilt u een afspraak maken?", byPhone: "Telefonisch", byWhatsApp: "Via WhatsApp", close: "Sluiten" },
  tr: { chooseTitle: "Nasıl randevu almak istersiniz?", byPhone: "Telefonla", byWhatsApp: "WhatsApp ile", close: "Kapat" },
  ar: { chooseTitle: "كيف تريد حجز موعد؟", byPhone: "عبر الهاتف", byWhatsApp: "عبر واتساب", close: "إغلاق" },
  pl: { chooseTitle: "Jak chcesz umówić wizytę?", byPhone: "Telefonicznie", byWhatsApp: "Przez WhatsApp", close: "Zamknij" },
  uk: { chooseTitle: "Як ви хочете записатися?", byPhone: "Телефоном", byWhatsApp: "Через WhatsApp", close: "Закрити" },
  es: { chooseTitle: "¿Cómo desea pedir cita?", byPhone: "Por teléfono", byWhatsApp: "Por WhatsApp", close: "Cerrar" },
  ku: { chooseTitle: "Hûn çawa dixwazin randevû bigirin?", byPhone: "Bi telefonê", byWhatsApp: "Bi WhatsApp", close: "Bigire" },
};

const UI: Record<string, { address: string; hours: string; hoursVal: string; infoBring: string; bringItems: string[]; cancelTitle: string; cancelText: string; conv: string }> = {
  de: { address: "Loten 1, B-4700 Eupen", hours: "Öffnungszeiten", hoursVal: "Mo – Fr: 07:30 – 20:30 · Wochenende geschlossen", infoBring: "Mitzubringen", bringItems: ["Ärztliche Verschreibung", "Krankenkassen-Aufkleber", "Großes Handtuch", "Sportkleidung", "Personalausweis"], cancelTitle: "Absage", cancelText: "Bitte sagen Sie Ihren Termin mindestens 24 Stunden im Voraus ab. Bei Nichterscheinen oder Absage weniger als 24 Stunden vorher behalten wir uns das Recht vor, eine Ausfallgebühr in Rechnung zu stellen.", conv: "Nicht konventioniert" },
  fr: { address: "Loten 1, B-4700 Eupen", hours: "Heures d'ouverture", hoursVal: "Lun – Ven : 07:30 – 20:30 · Week-end fermé", infoBring: "À apporter", bringItems: ["Prescription médicale", "Vignette de mutuelle", "Grande serviette", "Tenue sportive", "Carte d'identité"], cancelTitle: "Annulation", cancelText: "Merci d'annuler votre rendez-vous au moins 24 heures à l'avance. En cas de non-présentation ou d'annulation moins de 24h avant, nous nous réservons le droit de facturer des frais d'annulation.", conv: "Déconventionnée" },
  en: { address: "Loten 1, B-4700 Eupen", hours: "Opening hours", hoursVal: "Mon – Fri: 07:30 – 20:30 · Weekend closed", infoBring: "What to bring", bringItems: ["Medical prescription", "Health insurance card", "Large towel", "Sportswear", "ID card"], cancelTitle: "Cancellation policy", cancelText: "Please cancel your appointment at least 24 hours in advance. In the event of a no-show or a cancellation less than 24 hours before, we reserve the right to charge a cancellation fee.", conv: "Non-conventional" },
  nl: { address: "Loten 1, B-4700 Eupen", hours: "Openingstijden", hoursVal: "Ma – Vr: 07:30 – 20:30 · Weekend gesloten", infoBring: "Mee te brengen", bringItems: ["Medisch voorschrift", "Mutualiteitsklever", "Grote handdoek", "Sportkleding", "Identiteitskaart"], cancelTitle: "Annuleringsbeleid", cancelText: "Annuleer uw afspraak minstens 24 uur op voorhand. Bij niet-verschijnen of annulering minder dan 24u vooraf behouden wij ons het recht voor annuleringskosten aan te rekenen.", conv: "Niet geconventioneerd" },
  tr: { address: "Loten 1, B-4700 Eupen", hours: "Çalışma saatleri", hoursVal: "Pzt – Cum: 07:30 – 20:30 · Hafta sonu kapalı", infoBring: "Getirilecekler", bringItems: ["Tıbbi reçete", "Sağlık sigortası kartı", "Büyük havlu", "Spor kıyafeti", "Kimlik kartı"], cancelTitle: "İptal politikası", cancelText: "Lütfen randevunuzu en az 24 saat önceden iptal edin. Gelmemeniz veya 24 saatten az önce iptal etmeniz durumunda iptal ücreti talep etme hakkımızı saklı tutarız.", conv: "Konvansiyonlu değil" },
  ar: { address: "Loten 1, B-4700 Eupen", hours: "ساعات العمل", hoursVal: "الإثنين – الجمعة: 07:30 – 20:30 · مغلق في عطلة نهاية الأسبوع", infoBring: "ما يجب إحضاره", bringItems: ["وصفة طبية", "بطاقة التأمين الصحي", "منشفة كبيرة", "ملابس رياضية", "بطاقة الهوية"], cancelTitle: "سياسة الإلغاء", cancelText: "يُرجى إلغاء موعدك قبل 24 ساعة على الأقل. في حالة عدم الحضور أو الإلغاء قبل أقل من 24 ساعة، نحتفظ بحق تحصيل رسوم تعويضية.", conv: "غير تقليدي" },
  pl: { address: "Loten 1, B-4700 Eupen", hours: "Godziny otwarcia", hoursVal: "Pon – Pt: 07:30 – 20:30 · Weekend: zamknięte", infoBring: "Co zabrać", bringItems: ["Recepta lekarska", "Karta ubezpieczenia", "Duży ręcznik", "Strój sportowy", "Dowód osobisty"], cancelTitle: "Polityka anulowania", cancelText: "Prosimy o odwołanie wizyty co najmniej 24 godziny wcześniej. W przypadku niestawienia się lub odwołania mniej niż 24 godziny przed wizytą zastrzegamy sobie prawo do naliczenia opłaty.", conv: "Niekonwencjonalna" },
  uk: { address: "Loten 1, B-4700 Ойпен", hours: "Години роботи", hoursVal: "Пн – Пт: 07:30 – 20:30 · Вихідні: зачинено", infoBring: "Що взяти з собою", bringItems: ["Медичне направлення", "Картка медичного страхування", "Великий рушник", "Спортивний одяг", "Посвідчення особи"], cancelTitle: "Правила скасування", cancelText: "Будь ласка, скасовуйте запис щонайменше за 24 години. У разі нез'явлення або скасування менш ніж за 24 години ми залишаємо за собою право стягнути плату за скасування.", conv: "Не за конвенцією" },
  es: { address: "Loten 1, B-4700 Eupen", hours: "Horario", hoursVal: "Lun – Vie: 07:30 – 20:30 · Cerrado el fin de semana", infoBring: "Qué traer", bringItems: ["Prescripción médica", "Tarjeta de la mutua", "Toalla grande", "Ropa deportiva", "Documento de identidad"], cancelTitle: "Política de cancelación", cancelText: "Por favor, cancele su cita con al menos 24 horas de antelación. En caso de no presentarse o cancelar con menos de 24 horas, nos reservamos el derecho de cobrar una tarifa de cancelación.", conv: "No convencionado" },
  ku: { address: "Loten 1, B-4700 Eupen", hours: "Demên vekirî", hoursVal: "Duş – În: 07:30 – 20:30 · Dawiya hefteyê girtî ye", infoBring: "Çi bînin", bringItems: ["Recêteya bijîjkî", "Karta sîgorteya tenduristiyê", "Destmaleke mezin", "Cilên werzîşê", "Karta nasnameyê"], cancelTitle: "Polîtîkaya betalkirinê", cancelText: "Ji kerema xwe randevûya xwe herî kêm 24 saet berê betal bikin. Di rewşa nehatinê an betalkirina kêmtir ji 24 saetan de, em mafê xwe diparêzin ku heqê betalkirinê bistînin.", conv: "Ne bi peymanê" },
};

// --- Bloc "À apporter à votre première séance" (patient-facing, anti-nocebo, trilingue par item) ---
const FV: Record<string, { title: string; sub: string }> = {
  de: { title: "Für Ihre erste Sitzung mitbringen", sub: "Damit alles reibungslos und ohne Wartezeit abläuft." },
  fr: { title: "À apporter à votre première séance", sub: "Pour que tout se déroule simplement, sans attente." },
  en: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  nl: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  tr: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  ar: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  pl: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  uk: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  es: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
  ku: { title: "What to bring to your first session", sub: "So everything runs smoothly, with no waiting." },
};

type FVItem = { Icon: typeof IdCard; label: Rec; note?: Rec };
const FV_ITEMS: FVItem[] = [
  {
    Icon: IdCard,
    label: { fr: "Carte d'identité", de: "Personalausweis", en: "Identity card" },
  },
  {
    Icon: FileText,
    label: { fr: "Prescription médicale", de: "Ärztliche Verordnung", en: "Medical prescription" },
    note: { fr: "Nécessaire pour le remboursement.", de: "Für die Erstattung erforderlich.", en: "Required for reimbursement." },
  },
  {
    Icon: Sticker,
    label: { fr: "Vignette de mutuelle", de: "Krankenkassen-Vignette", en: "Insurance sticker" },
  },
  {
    Icon: Waves,
    label: { fr: "Grande serviette", de: "Großes Handtuch", en: "Large towel" },
  },
  {
    Icon: Shirt,
    label: { fr: "Tenue souple", de: "Bequeme Kleidung", en: "Comfortable clothing" },
  },
];

function fmtPhone(p: string) {
  return p.replace(/^(\+32)(\d{3})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5");
}

export function TerminPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const x = X[lang] ?? X.en;
  const xc = XC[lang] ?? XC.en;
  const ui = UI[lang] ?? UI.en;
  const fv = FV[lang] ?? FV.en;
  const isRtl = lang === "ar";

  const [mode, setMode] = useState<"besoin" | "hasard">("besoin");
  const [motif, setMotif] = useState<string | null>(null);
  const [langF, setLangF] = useState<string>("");
  const [order, setOrder] = useState<string[]>(THERAPISTS.map((t) => t.slug));
  const [flash, setFlash] = useState<string | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [chooseFor, setChooseFor] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const a = THERAPISTS.map((t) => t.slug);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    setOrder(a);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, []);

  const ordered = order.map((s) => THERAPISTS.find((t) => t.slug === s)).filter(Boolean) as typeof THERAPISTS;
  const langList = ordered.filter((t) => !langF || t.langs.includes(langF));

  function fireConfetti() {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    const cols = ["#76b82a", "#a8e063", "#2b3186", "#f97316", "#0d9488", "#fbbf24"];
    const P = Array.from({ length: 130 }, (_, i) => ({
      x: cv.width / 2, y: cv.height * 0.38, vx: (Math.random() - 0.5) * 9, vy: Math.random() * -11 - 3,
      s: 4 + Math.random() * 5, c: cols[i % cols.length], r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
    }));
    let t = 0;
    const loop = () => {
      t++;
      ctx.clearRect(0, 0, cv.width, cv.height);
      P.forEach((p) => {
        p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, 1 - t / 95); ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); ctx.restore();
      });
      if (t < 95) requestAnimationFrame(loop);
      else ctx.clearRect(0, 0, cv.width, cv.height);
    };
    loop();
  }

  function startSpin() {
    if (spinning) return;
    const pool = langList;
    if (!pool.length) return;
    setWinner(null);
    setSpinning(true);
    const winIdx = Math.floor(Math.random() * pool.length);
    let i = 0;
    const tot = 20 + Math.floor(Math.random() * 5);
    let delay = 55;
    const step = () => {
      setFlash(pool[i % pool.length].slug);
      i++;
      if (i < tot) {
        delay = delay < 210 ? delay * 1.12 : delay;
        timer.current = setTimeout(step, delay);
      } else {
        setFlash(null);
        setWinner(pool[winIdx].slug);
        setSpinning(false);
        fireConfetti();
      }
    };
    step();
  }

  function pickMode(m: "besoin" | "hasard") {
    setMode(m);
    setWinner(null);
    setFlash(null);
    if (m === "hasard") setMotif(null);
  }

  function resetFilters() {
    setMotif(null);
    setLangF("");
    setWinner(null);
  }

  let gridLabel = x.gridTeam;
  let cards: { t: typeof THERAPISTS[number]; ribbon: "reco" | "spec" | null; dim: boolean }[] = [];
  let banner: string | null = null;

  if (mode === "besoin" && motif) {
    const isNiche = NICHE.includes(motif);
    const m = langList.filter((t) => t.tags.includes(motif));
    const rest = langList.filter((t) => !t.tags.includes(motif));
    if (isNiche && m.length) {
      gridLabel = x.gridSpec;
      cards = [
        ...m.map((t) => ({ t, ribbon: "spec" as const, dim: false })),
        ...rest.map((t) => ({ t, ribbon: null, dim: true })),
      ];
    } else if (m.length) {
      gridLabel = x.gridAll;
      banner = x.allTakeBanner;
      cards = m.map((t) => ({ t, ribbon: null, dim: false }));
    }
  } else {
    cards = langList.map((t) => ({ t, ribbon: null, dim: false }));
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white" dir={isRtl ? "rtl" : "ltr"}>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-50" aria-hidden="true" />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2b3186]/40 via-neutral-950 to-[#76b82a]/15 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-[#76b82a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-44 right-1/4 w-80 h-80 bg-[#2b3186]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/8 border border-white/10 rounded-full text-sm text-white/70 font-medium">
              <Sparkles className="w-4 h-4 text-[#76b82a]" /> {x.trust}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="text-4xl sm:text-6xl font-extrabold text-center tracking-tight mb-4">
            {x.heroTitle}{" "}
            <span className="bg-gradient-to-r from-[#76b82a] to-[#a8e063] bg-clip-text text-transparent">{x.heroAccent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="max-w-xl mx-auto text-center text-lg text-white/55 mb-8">{x.heroSub}</motion.p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-9 text-[13px] text-white/45">
            <a href="https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors"><MapPin className="w-4 h-4 text-[#76b82a]" /> {ui.address}</a>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#76b82a]" /> {ui.hoursVal}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-5">
            {([["besoin", Target, x.modeNeedT, x.modeNeedS], ["hasard", Dices, x.modeRandT, x.modeRandS]] as const).map(([id, Icon, t, s]) => (
              <button key={id} onClick={() => pickMode(id as "besoin" | "hasard")}
                className={`flex items-start gap-3 text-left p-4 rounded-2xl border transition-all ${mode === id ? "border-[#76b82a] bg-[#76b82a]/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}>
                <Icon className={`w-6 h-6 mt-0.5 flex-shrink-0 ${mode === id ? "text-[#76b82a]" : "text-white/50"}`} />
                <span><span className="block font-bold text-[15px] text-white">{t}</span><span className="text-[12.5px] text-white/55">{s}</span></span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {mode === "besoin" ? (
              <motion.div key="besoin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-3xl mx-auto">
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/35 mb-3">{x.motifQ}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {MOTIFS.map((mo) => (
                    <button key={mo.id} onClick={() => setMotif(motif === mo.id ? null : mo.id)}
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-1.5 ${motif === mo.id ? "bg-[#76b82a] text-neutral-950 font-bold" : "bg-white/5 border border-white/10 text-white hover:border-white/25"}`}>
                      <span>{mo.emoji}</span>{mo.label[lang] ?? mo.label.en}
                    </button>
                  ))}
                </div>
                <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/35 mb-3">{x.langQ}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button onClick={() => setLangF("")} className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-all ${langF === "" ? "bg-[#a8e063] text-neutral-950 font-bold" : "bg-white/5 border border-white/10 text-white hover:border-white/25"}`}>{x.allLang}</button>
                  {LANG_OPTS.map((l) => (
                    <button key={l} onClick={() => setLangF(langF === l ? "" : l)}
                      className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-all ${langF === l ? "bg-[#a8e063] text-neutral-950 font-bold" : "bg-white/5 border border-white/10 text-white hover:border-white/25"}`}>{LANG_FLAGS[l]} {l}</button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="hasard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-md mx-auto text-center">
                <button onClick={startSpin} disabled={spinning}
                  className="w-full py-4 rounded-2xl font-extrabold text-[17px] text-neutral-950 bg-gradient-to-r from-[#76b82a] to-[#5c9120] hover:shadow-xl hover:shadow-[#76b82a]/25 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2.5 disabled:opacity-70">
                  <Dices className="w-5 h-5" /> {x.spinBtn}
                </button>
                <AnimatePresence>
                  {winner && (() => {
                    const w = THERAPISTS.find((t) => t.slug === winner)!;
                    return (
                      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                        className="mt-5 p-5 rounded-2xl bg-white/5 border border-[#76b82a]/60 text-left">
                        <div className="text-[12px] text-white/50 mb-1">{x.spinChose}</div>
                        <div className="text-2xl font-extrabold">{w.name}</div>
                        <div className="text-[13px] text-white/55 mt-1.5 mb-4">{w.plain[lang] ?? w.plain.en}</div>
                        <button onClick={() => setChooseFor(w.slug)}
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[15px] font-bold bg-[#76b82a] text-neutral-950 hover:brightness-105 transition">
                          <CalendarPlus className="w-4 h-4" /> {x.reserveWith} {w.name.split(" ")[0]}
                        </button>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mt-12 mb-5">{gridLabel}</p>
          {banner && (
            <div className="max-w-2xl mx-auto mb-5 flex items-center justify-center gap-2 text-center text-[13.5px] text-[#a8e063]">
              <Check className="w-4 h-4 flex-shrink-0" /> {banner}
            </div>
          )}

          {cards.length === 0 ? (
            <p className="text-center text-white/50 text-sm py-6">{x.emptyLang}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {cards.map(({ t, ribbon, dim }, i) => {
                const isFlash = flash === t.slug;
                const isWin = winner === t.slug;
                const portrait = getTherapistPortrait(t.slug, "thumbnail");
                return (
                  <motion.div key={t.slug} initial={{ opacity: 0, y: 18 }} animate={{ opacity: dim ? 0.4 : 1, y: 0 }} transition={{ delay: 0.04 * i }}
                    className={`relative rounded-2xl border p-5 bg-white/5 transition-all duration-300 ${isWin || isFlash ? "border-[#76b82a] ring-2 ring-[#76b82a]/40" : ribbon ? "border-[#76b82a]/60" : "border-white/10"} ${dim ? "saturate-50" : "hover:-translate-y-1 hover:border-white/25"}`}>
                    {isWin && <span className="absolute top-3 ltr:right-0 rtl:left-0 bg-[#a8e063] text-neutral-950 text-[11px] font-extrabold px-3 py-1 rounded-s-lg">{x.ribWin} 🎉</span>}
                    {!isWin && ribbon === "spec" && <span className="absolute top-3 ltr:right-0 rtl:left-0 bg-[#76b82a] text-neutral-950 text-[11px] font-extrabold px-3 py-1 rounded-s-lg">{x.ribSpec}</span>}
                    {!isWin && ribbon === "reco" && <span className="absolute top-3 ltr:right-0 rtl:left-0 bg-[#76b82a] text-neutral-950 text-[11px] font-extrabold px-3 py-1 rounded-s-lg">{x.ribReco}</span>}

                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0" style={{ boxShadow: `0 0 0 2px ${t.accent}` }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={portrait.src} alt={t.name} loading="lazy" className={`w-full h-full ${portrait.className}`} />
                      </div>
                      <div>
                        <div className="text-[17px] font-bold leading-tight">{t.name}</div>
                        <div className="text-[12px] text-white/50 mt-0.5">{t.role[lang] ?? t.role.en}</div>
                      </div>
                    </div>

                    {t.absence && Date.now() <= new Date(t.absence.to + "T23:59:59").getTime() && (
                      <div className="flex items-start gap-1.5 text-[12px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/25 rounded-lg px-2.5 py-1.5 mb-3">
                        <span aria-hidden>🌴</span><span>{t.absence.label[lang] ?? t.absence.label.en}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-[12.5px] text-white/55 mb-2.5">
                      <span className="text-[#fbbf24] tracking-tight">★★★★★</span> 4,8 · {x.reviews}
                    </div>

                    <p className="text-[14.5px] text-white/85 mb-3 min-h-[42px]">{t.plain[lang] ?? t.plain.en}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {t.specs.map((s) => (
                        <span key={s} className="text-[11.5px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-white/55">{s}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-[11.5px] text-white/45 mb-4">
                      <span>🗣️</span>
                      {t.langs.map((l) => <span key={l} className="px-1.5 py-0.5 border border-white/10 rounded">{l}</span>)}
                      {t.conv && <span className="text-amber-400 border border-amber-400/40 bg-amber-400/10 px-2 py-0.5 rounded">{ui.conv}</span>}
                    </div>

                    <button onClick={() => setChooseFor(t.slug)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[15px] font-bold bg-[#76b82a] text-neutral-950 hover:brightness-105 active:scale-[0.98] transition">
                      <CalendarPlus className="w-4 h-4" /> {x.reserveWith} {t.name.split(" ")[0]}
                    </button>
                    <div className="flex items-center justify-end mt-3">
                      <Link href={`/team/${t.slug}`} className="inline-flex items-center gap-1 text-[12px] text-white/45 hover:text-[#76b82a] transition-colors">
                        {x.profileBtn} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {(motif || langF) && (
            <button onClick={resetFilters} className="mx-auto mt-7 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-[13px] text-white/55 hover:border-white/25 hover:text-white transition">
              <RotateCcw className="w-3.5 h-3.5" /> {x.reset}
            </button>
          )}

          {/* À apporter à votre première séance — bloc visible, trilingue par item */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="rounded-3xl bg-[#F8FAFC] text-neutral-900 p-6 sm:p-8 border-l-4 border-[#76b82a] shadow-xl">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-9 h-9 rounded-xl bg-[#76b82a]/15 flex items-center justify-center flex-shrink-0">
                  <CalendarPlus className="w-5 h-5 text-[#5c9120]" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#2b3186]">{fv.title}</h3>
              </div>
              <p className="text-[13.5px] text-neutral-500 mb-6 ms-[2.85rem]">{fv.sub}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {FV_ITEMS.map(({ Icon, label, note }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 text-[#76b82a]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-[15px] leading-tight text-neutral-900">{label[lang] ?? label.en}</div>
                      <div className="text-[12px] text-neutral-400 mt-0.5">
                        {[label.de, label.fr, label.en].filter((v, idx, arr) => v && arr.indexOf(v) === idx).join(" · ")}
                      </div>
                      {note && (
                        <div className="text-[12.5px] text-[#5c9120] font-medium mt-1">{note[lang] ?? note.en}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#76b82a] mb-4 flex items-center gap-2"><CalendarPlus className="w-4 h-4" /> {ui.infoBring}</h3>
              <ul className="space-y-2.5">{ui.bringItems.map((it) => (<li key={it} className="flex items-center gap-2.5 text-sm text-white/60"><span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] flex-shrink-0" />{it}</li>))}</ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2"><Clock className="w-4 h-4" /> {ui.cancelTitle}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{ui.cancelText}</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-[#76b82a]" /> Contact</h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2.5"><MapPin className="w-3.5 h-3.5 text-[#76b82a] mt-0.5 flex-shrink-0" /><a href="https://www.google.com/maps/dir/?api=1&destination=Praxis+Loten+Eupen&destination_place_id=ChIJwVa0rTSEwEcRJC82kAPG_CI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Loten 1<br />B-4700 Eupen</a></li>
                <li className="flex items-center gap-2.5"><Clock className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0" /> {ui.hoursVal}</li>
                <li className="flex items-center gap-2.5"><Mail className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0" /><SafeEmail encoded="cHJheGlzbG90ZW5AZ21haWwuY29t" className="hover:text-white transition-colors text-xs" showIcon={false} /></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {chooseFor && (() => {
          const t = THERAPISTS.find((th) => th.slug === chooseFor)!;
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
              onClick={() => setChooseFor(null)} dir={isRtl ? "rtl" : "ltr"}>
              <motion.div initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 28 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-sm bg-neutral-900 border border-white/10 rounded-3xl p-5 shadow-2xl">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-[16px] font-bold">{x.reserveWith} {t.name.split(" ")[0]}</h3>
                  <button onClick={() => setChooseFor(null)} aria-label={xc.close} className="text-white/40 hover:text-white transition-colors"><XIcon className="w-5 h-5" /></button>
                </div>
                <p className="text-[13px] text-white/55 mb-4">{xc.chooseTitle}</p>
                <div className="space-y-2.5">
                  <a href={t.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl bg-[#25d366] text-neutral-950 font-bold text-[15px] hover:brightness-105 transition">
                    <MessageCircle className="w-5 h-5" /> {xc.byWhatsApp}
                  </a>
                  <a href={`tel:${t.phone}`} className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-[14.5px] hover:bg-white/15 transition">
                    <Phone className="w-5 h-5 text-[#76b82a]" /> {xc.byPhone}
                    <span className="ms-auto text-white/50 text-[13px] font-normal" dir="ltr">{fmtPhone(t.phone)}</span>
                  </a>
                  {t.online && (
                    <a href={t.online} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl bg-[#2b3186] text-white font-semibold text-[14.5px] hover:bg-[#1e2260] transition">
                      <ExternalLink className="w-5 h-5" /> {x.onlineBtn}
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
