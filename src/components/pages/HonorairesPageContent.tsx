"use client";

import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  CheckCircle2, Info, AlertTriangle, Home, Building2,
  CalendarPlus, ExternalLink, Users, Euro, FileText, CreditCard, RotateCcw,
} from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

/* ─── ALL UI STRINGS ──────────────────────────────────────────────────────── */
const UI: Record<LangKey, {
  badge: string; title: string; titleAccent: string; subtitle: string;
  glanceTitle: string; perSession: string; yourPart: string;
  mutuelleShare: string; totalHonoraire: string;
  convTitle: string; nonConvTitle: string;
  normalPathLabel: string; seriousPathLabel: string;
  bimNote: string;
  faNote: string; fbNote: string;
  howTitle: string;
  step1Title: string; step1Desc: string;
  step2Title: string; step2Desc: string;
  step3Title: string; step3Desc: string;
  nonConvExplain: string; nonConvNote: string;
  bimTitle: string; bimText: string;
  mutuelleTitle: string; mutuelleText: string;
  prescTitle: string; prescText: string;
  checkInami: string; inamiLink: string;
  ctaTitle: string; ctaSub: string; ctaBtn: string;
  whoConv: string; whoNonConv: string;
  convListTitle: string; nonConvListTitle: string;
  tarifsSource: string;
  cabinet: string; home: string;
  bimLabel: string; nonBimLabel: string;
  estimateNote: string;
}> = {
  de: {
    badge: "Transparente Preise",
    title: "Was zahlen", titleAccent: "Sie wirklich?",
    subtitle: "Klare Übersicht: Ihr Eigenanteil, die Kassenerstattung und der Gesamtbetrag — auf einen Blick.",
    glanceTitle: "Das Wichtigste",
    perSession: "/ Sitzung", yourPart: "Ihr Eigenanteil", mutuelleShare: "Kassenerstattung", totalHonoraire: "Honorar gesamt",
    convTitle: "Konventionierte Therapeuten", nonConvTitle: "Nicht konventioniert — Loïc Meunier",
    normalPathLabel: "Häufige Erkrankungen (Fa)", seriousPathLabel: "Schwere / chronische Erkrankungen (Fb + Intensiv)",
    bimNote: "Mit BIM-Status:",
    faNote: "Liste Fa: akute und gutartige Erkrankungen (Verschreibung erforderlich, z.B. Rücken, Knie, Schulter). Bis zu 18 Sitzungen/Jahr.",
    fbNote: "Liste Fb: schwere oder chronische Erkrankungen (spezifisches ärztliches Attest). Unbegrenzte Sitzungen.",
    howTitle: "Wie funktioniert die Rückerstattung?",
    step1Title: "Verschreibung holen", step1Desc: "Ihr Arzt stellt eine Physiotherapieverschreibung aus. Ohne sie — keine Erstattung.",
    step2Title: "Sitzung bezahlen", step2Desc: "Sie zahlen den Gesamtbetrag beim Therapeuten — bei jeder Sitzung.",
    step3Title: "Automatische Rückerstattung", step3Desc: "Die Kasse erstattet den INAMI-Anteil automatisch, in der Regel innerhalb weniger Tage.",
    nonConvExplain: "Loïc Meunier setzt seine Honorare frei fest. Die Kasse erstattet ca. 75 % des konventionierten INAMI-Tarifs. Der Differenzbetrag liegt zu Ihren Lasten.",
    nonConvNote: "Schätzwerte — genauen Betrag bei Ihrer Kasse erfragen.",
    bimTitle: "BIM-Patienten (erhöhter Sozialtarif)", bimText: "BIM-Patienten zahlen nur 2,50 € pro Sitzung, unabhängig vom Gesamtbetrag. Nicht konventionierte Therapeuten dürfen keinen Aufpreis berechnen — die INAMI-Tarife gelten zwingend.",
    mutuelleTitle: "Zusatzversicherung", mutuelleText: "Viele Krankenkassen übernehmen über ihre Zusatzversicherung einen weiteren Teil der Kosten. Fragen Sie Ihre Kasse.",
    prescTitle: "Ärztliche Verschreibung erforderlich", prescText: "Eine ärztliche Verschreibung ist für die Rückerstattung zwingend erforderlich. Ohne Verschreibung erfolgt keine Erstattung.",
    checkInami: "Offizielle INAMI-Tarife prüfen", inamiLink: "INAMI-Website",
    ctaTitle: "Fragen zu unseren Tarifen?", ctaSub: "Unser Team beantwortet gerne alle Fragen zu Kosten und Rückerstattung.", ctaBtn: "Termin vereinbaren",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Konventionierte Therapeuten:", nonConvListTitle: "Nicht konventioniert:",
    tarifsSource: "Tarife gemäß INAMI-Nomenklatur (Stand 01/01/2026). Können aktualisiert werden — aktuelle Beträge auf inami.fgov.be.",
    cabinet: "Kabinett", home: "Hausbesuch",
    bimLabel: "BIM", nonBimLabel: "Standard",
    estimateNote: "≈ Schätzung",
  },
  fr: {
    badge: "Tarifs transparents",
    title: "Ce que vous payez", titleAccent: "réellement",
    subtitle: "Votre part, le remboursement de la mutuelle et l'honoraire total — tout en clair, sans surprise.",
    glanceTitle: "En résumé",
    perSession: "/ séance", yourPart: "Votre part", mutuelleShare: "Remboursement mutuelle", totalHonoraire: "Honoraire total",
    convTitle: "Thérapeutes conventionnés", nonConvTitle: "Non conventionné — Loïc Meunier",
    normalPathLabel: "Pathologies courantes (Fa)", seriousPathLabel: "Pathologies graves / chroniques (Fb + Intensif)",
    bimNote: "Statut BIM :",
    faNote: "Liste Fa : pathologies aiguës et bénignes (prescription requise, ex. lombalgie, genou, épaule). Jusqu'à 18 séances/an.",
    fbNote: "Liste Fb : pathologies graves ou chroniques (attestation médicale spécifique). Séances illimitées.",
    howTitle: "Comment fonctionne le remboursement ?",
    step1Title: "Obtenez votre prescription", step1Desc: "Votre médecin vous remet une prescription de kinésithérapie. Sans elle, aucun remboursement n'est possible.",
    step2Title: "Vous payez en séance", step2Desc: "Vous réglez l'honoraire total directement à votre thérapeute, à chaque séance.",
    step3Title: "Remboursement automatique", step3Desc: "Votre mutuelle rembourse la part INAMI automatiquement, généralement en quelques jours.",
    nonConvExplain: "Loïc Meunier fixe librement ses honoraires. La mutuelle rembourse environ 75 % de la part INAMI conventionnée. La différence reste à votre charge.",
    nonConvNote: "Valeurs estimées — contactez votre mutuelle pour le montant exact.",
    bimTitle: "Patients BIM (régime préférentiel)", bimText: "Les patients BIM ne paient que 2,50 € par séance, quel que soit l'honoraire total. Les thérapeutes non conventionnés ne peuvent pas appliquer de suppléments aux patients BIM.",
    mutuelleTitle: "Assurance complémentaire", mutuelleText: "De nombreuses mutuelles remboursent une partie supplémentaire via leur assurance complémentaire. Renseignez-vous auprès de la vôtre.",
    prescTitle: "Prescription médicale obligatoire", prescText: "Une prescription médicale est indispensable pour bénéficier du remboursement. Sans prescription, aucun remboursement n'est accordé.",
    checkInami: "Consulter les tarifs officiels INAMI", inamiLink: "Site INAMI",
    ctaTitle: "Des questions sur nos tarifs ?", ctaSub: "Notre équipe est disponible pour répondre à toutes vos questions sur les coûts et remboursements.", ctaBtn: "Prendre rendez-vous",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Thérapeutes conventionnés :", nonConvListTitle: "Non conventionné :",
    tarifsSource: "Tarifs selon la nomenclature INAMI (en vigueur au 01/01/2026). Susceptibles d'être mis à jour — montants actuels sur inami.fgov.be.",
    cabinet: "Au cabinet", home: "À domicile",
    bimLabel: "BIM", nonBimLabel: "Standard",
    estimateNote: "≈ estimation",
  },
  en: {
    badge: "Transparent pricing",
    title: "What you", titleAccent: "actually pay",
    subtitle: "Your share, the insurance reimbursement and the total fee — all clear, no surprises.",
    glanceTitle: "At a glance",
    perSession: "/ session", yourPart: "Your share", mutuelleShare: "Insurance covers", totalHonoraire: "Total fee",
    convTitle: "Conventional therapists", nonConvTitle: "Non-conventional — Loïc Meunier",
    normalPathLabel: "Common conditions (Fa)", seriousPathLabel: "Serious / chronic conditions (Fb + Intensive)",
    bimNote: "BIM status:",
    faNote: "Fa list: acute and benign conditions (prescription required, e.g. back pain, knee, shoulder). Up to 18 sessions/year.",
    fbNote: "Fb list: serious or chronic conditions (specific medical certificate). Unlimited sessions.",
    howTitle: "How does reimbursement work?",
    step1Title: "Get a prescription", step1Desc: "Your doctor gives you a physiotherapy prescription. Without one, no reimbursement is possible.",
    step2Title: "Pay at your session", step2Desc: "You pay the full fee directly to your therapist at each session.",
    step3Title: "Automatic reimbursement", step3Desc: "Your insurer reimburses the INAMI portion automatically, usually within a few days.",
    nonConvExplain: "Loïc Meunier sets his fees freely. Your insurer reimburses approx. 75% of the conventional INAMI rate. The difference is your responsibility.",
    nonConvNote: "Estimated values — contact your insurer for the exact amount.",
    bimTitle: "BIM patients (preferential rate)", bimText: "BIM patients pay only €2.50 per session regardless of the total fee. Non-conventional therapists cannot charge supplements to BIM patients.",
    mutuelleTitle: "Supplementary insurance", mutuelleText: "Many insurers reimburse an additional share through their supplementary coverage. Check with yours.",
    prescTitle: "Medical prescription required", prescText: "A medical prescription is mandatory to receive reimbursement. Without one, no reimbursement is granted.",
    checkInami: "Check official INAMI rates", inamiLink: "INAMI website",
    ctaTitle: "Questions about our fees?", ctaSub: "Our team is available to answer all your questions about costs and reimbursements.", ctaBtn: "Book appointment",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Conventional therapists:", nonConvListTitle: "Non-conventional:",
    tarifsSource: "Fees according to INAMI nomenclature (in force from 01/01/2026). Subject to updates — current amounts at inami.fgov.be.",
    cabinet: "At the practice", home: "Home visit",
    bimLabel: "BIM", nonBimLabel: "Standard",
    estimateNote: "≈ estimate",
  },
  nl: {
    badge: "Transparante tarieven",
    title: "Wat betaalt", titleAccent: "u werkelijk?",
    subtitle: "Uw aandeel, de terugbetaling van de mutualiteit en het totale honorarium — alles duidelijk, geen verrassingen.",
    glanceTitle: "In één oogopslag",
    perSession: "/ sessie", yourPart: "Uw aandeel", mutuelleShare: "Terugbetaling mutualiteit", totalHonoraire: "Totaal honorarium",
    convTitle: "Geconventioneerde therapeuten", nonConvTitle: "Niet-geconventioneerd — Loïc Meunier",
    normalPathLabel: "Courante aandoeningen (Fa)", seriousPathLabel: "Ernstige / chronische aandoeningen (Fb + Intensief)",
    bimNote: "BIM-statuut:",
    faNote: "Lijst Fa: acute en goedaardige aandoeningen (voorschrift vereist, bv. rugpijn, knie, schouder). Tot 18 sessies/jaar.",
    fbNote: "Lijst Fb: ernstige of chronische aandoeningen (specifiek medisch attest). Onbeperkte sessies.",
    howTitle: "Hoe werkt de terugbetaling?",
    step1Title: "Haal een voorschrift", step1Desc: "Uw arts geeft u een kinesitherapievoorschrift. Zonder voorschrift — geen terugbetaling.",
    step2Title: "Betalen bij de sessie", step2Desc: "U betaalt het volledige honorarium rechtstreeks aan uw therapeut, bij elke sessie.",
    step3Title: "Automatische terugbetaling", step3Desc: "Uw mutualiteit betaalt het RIZIV-aandeel automatisch terug, doorgaans binnen een paar dagen.",
    nonConvExplain: "Loïc Meunier stelt zijn honoraria vrij vast. De mutualiteit vergoedt ca. 75% van het geconventioneerde RIZIV-tarief. Het verschil is voor uw rekening.",
    nonConvNote: "Geschatte waarden — neem contact op met uw mutualiteit voor het exacte bedrag.",
    bimTitle: "BIM-patiënten (verhoogde tegemoetkoming)", bimText: "BIM-patiënten betalen slechts €2,50 per sessie, ongeacht het totale honorarium. Niet-geconventioneerde therapeuten mogen geen supplement aanrekenen aan BIM-patiënten.",
    mutuelleTitle: "Aanvullende verzekering", mutuelleText: "Veel mutualiteiten vergoeden een extra deel via hun aanvullende verzekering. Informeer bij de uwe.",
    prescTitle: "Medisch voorschrift verplicht", prescText: "Een medisch voorschrift is verplicht voor terugbetaling. Zonder voorschrift wordt geen terugbetaling toegekend.",
    checkInami: "Officiële RIZIV-tarieven raadplegen", inamiLink: "RIZIV-website",
    ctaTitle: "Vragen over onze tarieven?", ctaSub: "Ons team staat klaar om al uw vragen over kosten en terugbetalingen te beantwoorden.", ctaBtn: "Afspraak maken",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Geconventioneerde therapeuten:", nonConvListTitle: "Niet-geconventioneerd:",
    tarifsSource: "Tarieven volgens RIZIV-nomenclatuur (van kracht op 01/01/2026). Kunnen worden bijgewerkt — actuele bedragen op riziv.fgov.be.",
    cabinet: "In het kabinet", home: "Huisbezoek",
    bimLabel: "BIM", nonBimLabel: "Standaard",
    estimateNote: "≈ schatting",
  },
  tr: {
    badge: "Şeffaf fiyatlar",
    title: "Gerçekte ne kadar", titleAccent: "ödüyorsunuz?",
    subtitle: "Sizin payınız, sigorta geri ödemesi ve toplam ücret — her şey net, sürpriz yok.",
    glanceTitle: "Özet",
    perSession: "/ seans", yourPart: "Sizin payınız", mutuelleShare: "Sigorta karşılıyor", totalHonoraire: "Toplam ücret",
    convTitle: "Konvansiyonel terapistler", nonConvTitle: "Konvansiyonel olmayan — Loïc Meunier",
    normalPathLabel: "Yaygın hastalıklar (Fa)", seriousPathLabel: "Ciddi / kronik hastalıklar (Fb + Yoğun)",
    bimNote: "BIM statüsü:",
    faNote: "Fa listesi: akut ve iyi huylu hastalıklar (reçete gerekli). Yılda 18 seansa kadar.",
    fbNote: "Fb listesi: ciddi veya kronik hastalıklar (özel tıbbi sertifika). Sınırsız seans.",
    howTitle: "Geri ödeme nasıl çalışır?",
    step1Title: "Reçete alın", step1Desc: "Doktorunuz size fizyoterapi reçetesi verir. Reçete olmadan geri ödeme yapılmaz.",
    step2Title: "Seansta ödeme yapın", step2Desc: "Her seans için toplam ücreti doğrudan terapistinize ödersiniz.",
    step3Title: "Otomatik geri ödeme", step3Desc: "Sigortanız INAMI payını otomatik olarak, genellikle birkaç gün içinde geri öder.",
    nonConvExplain: "Loïc Meunier ücretlerini serbestçe belirler. Sigortanız, konvansiyonel INAMI tarifesinin yaklaşık %75'ini geri öder. Fark sizin sorumluluğunuzdadır.",
    nonConvNote: "Tahmini değerler — kesin tutar için sigortanızla iletişime geçin.",
    bimTitle: "BIM hastaları (tercihli tarife)", bimText: "BIM hastalar toplam ücrete bakılmaksızın seans başına yalnızca 2,50 € öder. Konvansiyonel olmayan terapistler BIM hastalara ek ücret uygulayamaz.",
    mutuelleTitle: "Ek sigorta", mutuelleText: "Birçok sigorta, ek sigortaları aracılığıyla ek bir pay karşılar. Sigortanıza danışın.",
    prescTitle: "Tıbbi reçete zorunlu", prescText: "Geri ödeme için tıbbi reçete zorunludur. Reçete olmadan geri ödeme yapılmaz.",
    checkInami: "Resmi INAMI tarifelerini kontrol et", inamiLink: "INAMI web sitesi",
    ctaTitle: "Tarifeler hakkında sorularınız mı var?", ctaSub: "Ekibimiz maliyet ve geri ödemeler hakkındaki tüm sorularınızı yanıtlamaya hazırdır.", ctaBtn: "Randevu al",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Konvansiyonel terapistler:", nonConvListTitle: "Konvansiyonel olmayan:",
    tarifsSource: "INAMI nomanklatürüne göre tarifeler (01/01/2026 itibarıyla). Güncellenebilir — güncel tutarlar inami.fgov.be'de.",
    cabinet: "Klinikte", home: "Ev ziyareti",
    bimLabel: "BIM", nonBimLabel: "Standart",
    estimateNote: "≈ tahmin",
  },
  ar: {
    badge: "أسعار شفافة",
    title: "ما الذي تدفعه", titleAccent: "فعلياً؟",
    subtitle: "حصتك، تعويض التأمين والأتعاب الإجمالية — كل شيء واضح، بدون مفاجآت.",
    glanceTitle: "ملخص",
    perSession: "/ جلسة", yourPart: "حصتك", mutuelleShare: "تغطية التأمين", totalHonoraire: "الأتعاب الإجمالية",
    convTitle: "المعالجون التقليديون", nonConvTitle: "غير تقليدي — Loïc Meunier",
    normalPathLabel: "الأمراض الشائعة (Fa)", seriousPathLabel: "الأمراض الخطيرة / المزمنة (Fb + مكثف)",
    bimNote: "وضع BIM:",
    faNote: "قائمة Fa: الحالات الحادة والحميدة (وصفة طبية مطلوبة). حتى 18 جلسة/سنة.",
    fbNote: "قائمة Fb: الأمراض الخطيرة أو المزمنة (شهادة طبية محددة). جلسات غير محدودة.",
    howTitle: "كيف يعمل التعويض؟",
    step1Title: "احصل على وصفة طبية", step1Desc: "يمنحك طبيبك وصفة علاج طبيعي. بدونها لا يمكن الحصول على أي تعويض.",
    step2Title: "الدفع في الجلسة", step2Desc: "تدفع الأتعاب الإجمالية مباشرة لمعالجك في كل جلسة.",
    step3Title: "التعويض التلقائي", step3Desc: "يعوّض التأمين حصة INAMI تلقائياً، عادةً في غضون أيام قليلة.",
    nonConvExplain: "يحدد Loïc Meunier أتعابه بحرية. يعوّض التأمين حوالي 75٪ من تعريفة INAMI التقليدية. الفرق على عاتقك.",
    nonConvNote: "قيم تقديرية — اتصل بصندوق مرضك للحصول على المبلغ الدقيق.",
    bimTitle: "مرضى BIM (النظام التفضيلي)", bimText: "يدفع مرضى BIM 2,50 € فقط لكل جلسة بغض النظر عن المبلغ الإجمالي. لا يمكن للمعالجين غير التقليديين تطبيق أي رسوم إضافية على مرضى BIM.",
    mutuelleTitle: "التأمين التكميلي", mutuelleText: "تغطي كثير من الصناديق جزءاً إضافياً عبر تأمينها التكميلي. استفسر من صندوقك.",
    prescTitle: "الوصفة الطبية إلزامية", prescText: "الوصفة الطبية إلزامية للحصول على التعويض. بدون وصفة لا يُمنح أي تعويض.",
    checkInami: "مراجعة تعريفات INAMI الرسمية", inamiLink: "موقع INAMI",
    ctaTitle: "لديك أسئلة حول أتعابنا؟", ctaSub: "فريقنا متاح للإجابة على جميع أسئلتك حول التكاليف والتعويضات.", ctaBtn: "احجز موعدًا",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "المعالجون التقليديون:", nonConvListTitle: "غير تقليدي:",
    tarifsSource: "التعريفات وفق تسمية INAMI (سارية المفعول من 01/01/2026). قابلة للتحديث — المبالغ الحالية على inami.fgov.be.",
    cabinet: "في العيادة", home: "زيارة منزلية",
    bimLabel: "BIM", nonBimLabel: "عادي",
    estimateNote: "≈ تقدير",
  },
  pl: {
    badge: "Przejrzyste ceny",
    title: "Co naprawdę", titleAccent: "płacisz?",
    subtitle: "Twój udział, zwrot z kasy chorych i całkowite honorarium — wszystko jasne, bez niespodzianek.",
    glanceTitle: "W skrócie",
    perSession: "/ sesja", yourPart: "Twój udział", mutuelleShare: "Zwrot z kasy chorych", totalHonoraire: "Całkowite honorarium",
    convTitle: "Terapeuci konwencjonowani", nonConvTitle: "Niekonwencjonowany — Loïc Meunier",
    normalPathLabel: "Częste schorzenia (Fa)", seriousPathLabel: "Poważne / przewlekłe schorzenia (Fb + Intensywna)",
    bimNote: "Status BIM:",
    faNote: "Lista Fa: ostre i łagodne schorzenia (wymagana recepta). Do 18 sesji/rok.",
    fbNote: "Lista Fb: poważne lub przewlekłe schorzenia (specjalne zaświadczenie lekarskie). Nieograniczona liczba sesji.",
    howTitle: "Jak działa zwrot kosztów?",
    step1Title: "Uzyskaj receptę", step1Desc: "Lekarz wystawia Ci receptę na fizjoterapię. Bez niej — brak zwrotu kosztów.",
    step2Title: "Płacisz podczas sesji", step2Desc: "Opłacasz całkowite honorarium bezpośrednio u terapeuty, przy każdej sesji.",
    step3Title: "Automatyczny zwrot", step3Desc: "Kasa chorych automatycznie zwraca część INAMI, zazwyczaj w ciągu kilku dni.",
    nonConvExplain: "Loïc Meunier ustala honoraria swobodnie. Kasa chorych zwraca ok. 75% konwencjonowanej stawki INAMI. Różnica jest po Twojej stronie.",
    nonConvNote: "Wartości szacunkowe — skontaktuj się z kasą chorych w celu uzyskania dokładnej kwoty.",
    bimTitle: "Pacjenci BIM (stawki preferencyjne)", bimText: "Pacjenci BIM płacą tylko 2,50 € za sesję niezależnie od całkowitego honorarium. Terapeuci niekonwencjonowani nie mogą pobierać dopłat od pacjentów BIM.",
    mutuelleTitle: "Ubezpieczenie uzupełniające", mutuelleText: "Wiele kas chorych pokrywa dodatkową część przez ubezpieczenie uzupełniające. Zapytaj swoją kasę.",
    prescTitle: "Recepta lekarska obowiązkowa", prescText: "Recepta lekarska jest obowiązkowa do uzyskania zwrotu. Bez recepty zwrot nie jest możliwy.",
    checkInami: "Sprawdź oficjalne stawki INAMI", inamiLink: "Strona INAMI",
    ctaTitle: "Pytania dotyczące naszych cen?", ctaSub: "Nasz zespół jest dostępny, aby odpowiedzieć na wszystkie pytania dotyczące kosztów i zwrotów.", ctaBtn: "Umów wizytę",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Terapeuci konwencjonowani:", nonConvListTitle: "Niekonwencjonowany:",
    tarifsSource: "Stawki zgodnie z nomenklaturą INAMI (obowiązujące od 01/01/2026). Mogą być aktualizowane — aktualne kwoty na inami.fgov.be.",
    cabinet: "W przychodni", home: "Wizyta domowa",
    bimLabel: "BIM", nonBimLabel: "Standard",
    estimateNote: "≈ szacunek",
  },
};

/* ─── SESSION DATA ─────────────────────────────────────────────────────────── */
function fmt(n: number): string {
  return n.toFixed(2).replace(".", ",") + " €";
}

const CONV = {
  cabinet: [
    { labelKey: "normalPathLabel" as const,  total: 30.80, inami: 24.55, patNonBim: 6.25, patBim: 2.50 },
    { labelKey: "seriousPathLabel" as const, total: 38.16, inami: 31.91, patNonBim: 6.25, patBim: 2.50 },
  ],
  home: [
    { labelKey: "normalPathLabel" as const,  total: 33.88, inami: 27.63, patNonBim: 6.25, patBim: 2.50 },
    { labelKey: "seriousPathLabel" as const, total: 41.24, inami: 34.99, patNonBim: 6.25, patBim: 2.50 },
  ],
};

const NON_CONV = {
  cabinet: { total: 35, inami: 18, patient: 17 },
  home:    { total: 38, inami: 21, patient: 17 },
};

/* ─── SUB-COMPONENT: FeeCard ───────────────────────────────────────────────── */
interface FeeCardProps {
  label: string;
  total: number; inami: number; patNonBim: number; patBim: number;
  ui: typeof UI["fr"];
  isApprox?: boolean;
}

function FeeCard({ label, total, inami, patNonBim, patBim, ui, isApprox }: FeeCardProps) {
  const inamiPct = Math.round((inami / total) * 100);
  const patientPct = 100 - inamiPct;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      {/* Session type header */}
      <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-100">
        <p className="text-sm font-semibold text-neutral-700">{label}</p>
      </div>

      <div className="p-5">
        {/* YOUR SHARE — hero number */}
        <div className="rounded-xl p-4 mb-5" style={{ background: "linear-gradient(135deg, #f0fce0 0%, #e8f8d0 100%)", border: "1.5px solid #c6e88a" }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5c9120] mb-1">{ui.yourPart}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold" style={{ color: "#2d7a00" }}>
              {isApprox ? "~" : ""}{fmt(patNonBim)}
            </span>
            <span className="text-xs text-[#5c9120]">{ui.perSession}</span>
          </div>
          {patBim !== patNonBim && (
            <p className="text-xs mt-2" style={{ color: "#5c9120" }}>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#76b82a]/20 rounded-full font-semibold">
                {ui.bimNote} {isApprox ? "~" : ""}{fmt(patBim)}
              </span>
            </p>
          )}
        </div>

        {/* Visual bar */}
        <div className="mb-3">
          <div className="flex rounded-full overflow-hidden h-3 mb-2">
            <div style={{ width: `${inamiPct}%`, background: "#2b3186" }} className="transition-all duration-700" />
            <div style={{ width: `${patientPct}%`, background: "#76b82a" }} className="transition-all duration-700" />
          </div>
          <div className="flex justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2b3186]" />
              {ui.mutuelleShare} — {inamiPct}%
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#76b82a]" />
              {ui.yourPart} — {patientPct}%
            </span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2 pt-3 border-t border-neutral-100">
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-500 flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2b3186]" />
              {ui.mutuelleShare}
            </span>
            <span className="text-sm font-semibold text-[#2b3186]">
              {isApprox && "≈ "}{fmt(inami)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-400">{ui.totalHonoraire}</span>
            <span className="text-sm text-neutral-500">{fmt(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────────────────────────────────── */
export function HonorairesPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de","fr","en","nl","tr","ar","pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";

  const [convTab, setConvTab] = useState<"cabinet" | "home">("cabinet");
  const [ncTab, setNcTab] = useState<"cabinet" | "home">("cabinet");

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-5">
            <Euro className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.title}{" "}<span style={{ color: "#76b82a" }}>{ui.titleAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">{ui.subtitle}</p>
        </AnimatedSection>

        <StaggerContainer className="space-y-10" staggerDelay={0.1}>

          {/* ══ GLANCE — 3 key scenarios ════════════════════════════════════ */}
          <StaggerItem>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 text-center">{ui.glanceTitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Conventionné non-BIM */}
                <div className="rounded-2xl p-5 text-center border-2" style={{ background: "#f0fce0", borderColor: "#c6e88a" }}>
                  <div className="text-4xl font-extrabold mb-1" style={{ color: "#2d7a00" }}>6,25 €</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#5c9120" }}>{ui.perSession}</div>
                  <div className="text-xs text-neutral-600 font-medium">{ui.convTitle}</div>
                  <div className="text-xs text-neutral-400 mt-1">{ui.nonBimLabel}</div>
                </div>
                {/* BIM */}
                <div className="rounded-2xl p-5 text-center border-2" style={{ background: "#eef6ff", borderColor: "#bfdbfe" }}>
                  <div className="text-4xl font-extrabold mb-1 text-blue-700">2,50 €</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-blue-500">{ui.perSession}</div>
                  <div className="text-xs text-neutral-600 font-medium">{ui.convTitle}</div>
                  <div className="text-xs text-neutral-400 mt-1">{ui.bimLabel}</div>
                </div>
                {/* Non-conventionné */}
                <div className="rounded-2xl p-5 text-center border-2 border-amber-200 bg-amber-50">
                  <div className="text-4xl font-extrabold mb-1 text-amber-700">~17 €</div>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2 text-amber-500">{ui.perSession}</div>
                  <div className="text-xs text-neutral-600 font-medium">{ui.nonConvTitle}</div>
                  <div className="text-xs text-neutral-400 mt-1">{ui.estimateNote}</div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ══ HOW IT WORKS ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-8 text-center">{ui.howTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
                {/* Connecting line (desktop) */}
                <div className="hidden sm:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-neutral-100 z-0" />

                {[
                  { Icon: FileText, title: ui.step1Title, desc: ui.step1Desc, color: "#2b3186", bg: "rgba(43,49,134,0.08)" },
                  { Icon: CreditCard, title: ui.step2Title, desc: ui.step2Desc, color: "#76b82a", bg: "rgba(118,184,42,0.1)" },
                  { Icon: RotateCcw, title: ui.step3Title, desc: ui.step3Desc, color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
                ].map(({ Icon, title, desc, color, bg }, i) => (
                  <div key={i} className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: bg }}>
                        <Icon className="w-7 h-7" style={{ color }} />
                      </div>
                    </div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-sm">{title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* ══ CONVENTIONNÉ ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.convTitle}</h2>
                    <p className="text-white/70 text-sm mt-0.5">Tarifs INAMI officiels · Remboursement automatique</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-[#2b3186]/5 rounded-2xl">
                  <Users className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#2b3186] uppercase tracking-wide mb-1">{ui.convListTitle}</p>
                    <p className="text-sm text-neutral-700 font-medium">{ui.whoConv}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2">
                  {(["cabinet", "home"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setConvTab(tab)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        convTab === tab
                          ? "bg-[#2b3186] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                      }`}
                    >
                      {tab === "cabinet" ? <Building2 className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                      {tab === "cabinet" ? ui.cabinet : ui.home}
                    </button>
                  ))}
                </div>

                {/* Session cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {CONV[convTab].map((row, i) => (
                    <FeeCard
                      key={i}
                      label={ui[row.labelKey]}
                      total={row.total}
                      inami={row.inami}
                      patNonBim={row.patNonBim}
                      patBim={row.patBim}
                      ui={ui}
                    />
                  ))}
                </div>

                {/* Fa / Fb notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">{ui.faNote}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-xl">
                    <Info className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-purple-700 leading-relaxed">{ui.fbNote}</p>
                  </div>
                </div>

                {/* Source + INAMI link */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-neutral-100">
                  <p className="text-xs text-neutral-400 italic">{ui.tarifsSource}</p>
                  <a
                    href="https://www.inami.fgov.be/fr/themes/soins-de-sante-cout-et-remboursement/les-prestations-de-sante-que-vous-rembourse-votre-mutualite/prestations-de-soins-individuelles/honoraires-prix-et-remboursements/honoraires-prix-et-remboursements-des-kinesitherapeutes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {ui.checkInami}
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ══ NON-CONVENTIONNÉ ════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Euro className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.nonConvTitle}</h2>
                    <p className="text-white/80 text-sm mt-0.5">{ui.nonConvExplain.split(".")[0]}.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{ui.nonConvListTitle}</p>
                    <p className="text-sm text-neutral-700 font-medium">{ui.whoNonConv}</p>
                  </div>
                </div>

                {/* Context */}
                <p className="text-sm text-neutral-600 leading-relaxed">{ui.nonConvExplain}</p>

                {/* Tabs */}
                <div className="flex gap-2">
                  {(["cabinet", "home"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setNcTab(tab)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        ncTab === tab
                          ? "bg-amber-500 text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                      }`}
                    >
                      {tab === "cabinet" ? <Building2 className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                      {tab === "cabinet" ? ui.cabinet : ui.home}
                    </button>
                  ))}
                </div>

                {/* Non-conv fee card */}
                <FeeCard
                  label={ncTab === "cabinet" ? ui.cabinet : ui.home}
                  total={NON_CONV[ncTab].total}
                  inami={NON_CONV[ncTab].inami}
                  patNonBim={NON_CONV[ncTab].patient}
                  patBim={NON_CONV[ncTab].patient}
                  ui={ui}
                  isApprox={true}
                />

                {/* Estimate note */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 leading-relaxed">{ui.nonConvNote}</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ══ GOOD TO KNOW ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Prescription */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.prescTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.prescText}</p>
              </div>
              {/* BIM */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.bimTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.bimText}</p>
              </div>
              {/* Supplementary */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-[#76b82a]/10 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#76b82a]" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.mutuelleTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.mutuelleText}</p>
              </div>
            </div>
          </StaggerItem>

          {/* ══ CTA ═════════════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center">
              <h2 className="text-2xl font-extrabold mb-3">{ui.ctaTitle}</h2>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">{ui.ctaSub}</p>
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
              >
                <CalendarPlus className="w-5 h-5" />
                {ui.ctaBtn}
              </Link>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </div>
  );
}
