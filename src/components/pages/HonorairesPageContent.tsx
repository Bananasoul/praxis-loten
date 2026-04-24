"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  CheckCircle2, Info, AlertTriangle, Home, Building2,
  CalendarPlus, ExternalLink, Users, Euro,
} from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

/* ─── UI strings ─────────────────────────────────────────────────────────── */
const UI: Record<LangKey, {
  badge: string;
  title: string; titleAccent: string;
  subtitle: string;
  convTitle: string; convSubtitle: string;
  nonConvTitle: string; nonConvSubtitle: string;
  sessionType: string; totalFee: string; inami: string; patientNonBim: string; patientBim: string;
  cabinet: string; home: string;
  faNormal: string; faList: string; fbList: string; intensive: string;
  faNote: string; fbNote: string;
  nonConvExplain: string;
  nonConvFeeLabel: string; nonConvCabinetFee: string; nonConvHomeFee: string;
  nonConvReimburse: string; nonConvReimburseDetail: string;
  bimTitle: string; bimText: string;
  mutuelleTitle: string; mutuelleText: string;
  prescTitle: string; prescText: string;
  checkInami: string; inamiLink: string;
  ctaTitle: string; ctaSub: string; ctaBtn: string;
  whoConv: string; whoNonConv: string;
  convListTitle: string; nonConvListTitle: string;
  tarifsSource: string;
}> = {
  de: {
    badge: "Transparente Preise",
    title: "Unsere", titleAccent: "Honorare",
    subtitle: "Klare und transparente Informationen zu unseren Tarifen — für ein vertrauensvolles Verhältnis mit unseren Patienten.",
    convTitle: "Konventionierte Therapeuten", convSubtitle: "Offizielle INAMI-Tarife · Automatische Rückerstattung durch die Krankenkasse",
    nonConvTitle: "Nicht konventionierte Therapeuten", nonConvSubtitle: "Freie Tarife · Teilrückerstattung durch die Krankenkasse möglich",
    sessionType: "Leistungsart", totalFee: "Honorar", inami: "Rückerstattung Kasse", patientNonBim: "Eigenanteil", patientBim: "BIM-Eigenanteil",
    cabinet: "Kabinett", home: "Hausbesuch",
    faNormal: "Normalsitzung (ohne Liste)", faList: "Liste Fa – Häufige Erkrankungen", fbList: "Liste Fb – Schwere Erkrankungen", intensive: "Intensiv-Reha (postoperativ)",
    faNote: "Liste Fa: akute und gutartige Erkrankungen (Verschreibung erforderlich, z.B. Rücken, Knie, Schulter). Bis zu 18 Sitzungen/Jahr.",
    fbNote: "Liste Fb: schwere oder chronische Erkrankungen (spezifisches ärztliches Attest erforderlich). Unbegrenzte Sitzungen, höherer Tarif.",
    nonConvExplain: "Ein nicht konventionierter Physiotherapeut setzt seine Honorare frei fest. Die Krankenkasse erstattet einen Teil auf Basis des offiziellen INAMI-Tarifs, der seit Mai 2025 um 25 % reduziert wird.",
    nonConvFeeLabel: "Praxis Loten – unsere Tarife", nonConvCabinetFee: "35 € / Sitzung", nonConvHomeFee: "38 € / Hausbesuch",
    nonConvReimburse: "Rückerstattung (ca.)", nonConvReimburseDetail: "Die Krankenkasse erstattet ca. 75 % des konventionierten INAMI-Anteils. Für eine Normalsitzung entspricht das ca. 18 € (nicht-BIM). Bitte fragen Sie Ihre Kasse nach dem genauen Betrag.",
    bimTitle: "BIM-Patienten (erhöhter Sozialtarif)", bimText: "Für Patienten mit BIM-Status (erhöhte Intervention) ist der Eigenanteil deutlich reduziert. Nicht konventionierte Therapeuten dürfen BIM-Patienten keinen Aufpreis berechnen — die offiziellen INAMI-Tarife gelten zwingend.",
    mutuelleTitle: "Zusatzversicherung", mutuelleText: "Viele Krankenkassen bieten eine Zusatzversicherung (hospitalisierung, ambulant) an, die einen zusätzlichen Teil der Physiotherapiekosten übernimmt. Fragen Sie Ihre Kasse.",
    prescTitle: "Ärztliche Verschreibung", prescText: "Für die Rückerstattung durch die Krankenkasse ist eine ärztliche Verschreibung erforderlich. Ohne Verschreibung erfolgt keine Rückerstattung.",
    checkInami: "Offizielle INAMI-Tarife prüfen", inamiLink: "INAMI-Website",
    ctaTitle: "Haben Sie Fragen zu unseren Tarifen?", ctaSub: "Unser Team steht Ihnen für alle Fragen rund um die Kosten und Rückerstattung zur Verfügung.", ctaBtn: "Termin vereinbaren",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Unsere konventionierten Therapeuten:", nonConvListTitle: "Unsere nicht konventionierten Therapeuten:",
    tarifsSource: "Tarife gemäß INAMI-Nomenklatur (Stand 01.01.2026). Können aktualisiert werden — aktuelle Beträge auf inami.fgov.be.",
  },
  fr: {
    badge: "Tarifs transparents",
    title: "Nos", titleAccent: "Honoraires",
    subtitle: "Une information claire et transparente sur nos tarifs — pour une relation de confiance avec nos patients.",
    convTitle: "Thérapeutes conventionnés", convSubtitle: "Tarifs officiels INAMI · Remboursement automatique par la mutuelle",
    nonConvTitle: "Thérapeutes non conventionnés", nonConvSubtitle: "Tarifs libres · Remboursement partiel par la mutuelle possible",
    sessionType: "Type de prestation", totalFee: "Honoraire", inami: "Remboursement mutuelle", patientNonBim: "À votre charge", patientBim: "À charge BIM",
    cabinet: "Cabinet", home: "Visite à domicile",
    faNormal: "Séance normale (hors liste)", faList: "Liste Fa – Pathologies courantes", fbList: "Liste Fb – Pathologies graves", intensive: "Réhabilitation intensive (postop.)",
    faNote: "Liste Fa : pathologies aiguës et bénignes (prescription requise, ex. lombalgie, genou, épaule). Jusqu'à 18 séances/an.",
    fbNote: "Liste Fb : pathologies graves ou chroniques (attestation médicale spécifique requise). Séances illimitées, tarif majoré.",
    nonConvExplain: "Un kinésithérapeute non conventionné fixe librement ses honoraires. La mutuelle rembourse une partie sur base du tarif INAMI officiel, réduit de 25 % depuis mai 2025.",
    nonConvFeeLabel: "Praxis Loten – nos tarifs", nonConvCabinetFee: "35 € / séance", nonConvHomeFee: "38 € / visite à domicile",
    nonConvReimburse: "Remboursement (environ)", nonConvReimburseDetail: "La mutuelle rembourse env. 75 % de la part INAMI conventionnée. Pour une séance normale, cela représente env. 18 € (non-BIM). Contactez votre mutuelle pour le montant exact.",
    bimTitle: "Patients BIM (régime préférentiel)", bimText: "Pour les patients en statut BIM (intervention majorée), la part personnelle est fortement réduite. Les thérapeutes non conventionnés ne peuvent pas appliquer de suppléments aux patients BIM — les tarifs officiels INAMI s'appliquent obligatoirement.",
    mutuelleTitle: "Assurance complémentaire", mutuelleText: "De nombreuses mutuelles proposent une assurance complémentaire (hospitalisation, ambulatoire) qui prend en charge une partie supplémentaire des frais de kinésithérapie. Renseignez-vous auprès de votre mutuelle.",
    prescTitle: "Prescription médicale", prescText: "Une prescription médicale est nécessaire pour bénéficier du remboursement par la mutuelle. Sans prescription, aucun remboursement n'est possible.",
    checkInami: "Consulter les tarifs officiels INAMI", inamiLink: "Site INAMI",
    ctaTitle: "Des questions sur nos tarifs ?", ctaSub: "Notre équipe est disponible pour répondre à toutes vos questions sur les coûts et les remboursements.", ctaBtn: "Prendre rendez-vous",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Nos thérapeutes conventionnés :", nonConvListTitle: "Nos thérapeutes non conventionnés :",
    tarifsSource: "Tarifs selon la nomenclature INAMI (en vigueur au 01/01/2026). Susceptibles d'être mis à jour — montants actuels sur inami.fgov.be.",
  },
  en: {
    badge: "Transparent pricing",
    title: "Our", titleAccent: "Fees",
    subtitle: "Clear and transparent information about our fees — for a relationship of trust with our patients.",
    convTitle: "Conventional therapists", convSubtitle: "Official INAMI rates · Automatic reimbursement by health insurance",
    nonConvTitle: "Non-conventional therapists", nonConvSubtitle: "Free pricing · Partial reimbursement by health insurance possible",
    sessionType: "Session type", totalFee: "Fee", inami: "Insurance reimbursement", patientNonBim: "Your share", patientBim: "BIM share",
    cabinet: "Practice", home: "Home visit",
    faNormal: "Standard session (no list)", faList: "Fa list – Common conditions", fbList: "Fb list – Serious conditions", intensive: "Intensive rehab (post-op)",
    faNote: "Fa list: acute and benign conditions (prescription required, e.g. back pain, knee, shoulder). Up to 18 sessions/year.",
    fbNote: "Fb list: serious or chronic conditions (specific medical certificate required). Unlimited sessions, higher tariff.",
    nonConvExplain: "A non-conventional physiotherapist sets fees freely. Your health insurance reimburses part based on the official INAMI tariff, reduced by 25% since May 2025.",
    nonConvFeeLabel: "Praxis Loten – our fees", nonConvCabinetFee: "€35 / session", nonConvHomeFee: "€38 / home visit",
    nonConvReimburse: "Reimbursement (approx.)", nonConvReimburseDetail: "Your insurer reimburses approx. 75% of the conventional INAMI share. For a standard session, that is approx. €18 (non-BIM). Contact your insurer for the exact amount.",
    bimTitle: "BIM patients (preferential rate)", bimText: "Patients with BIM status (enhanced intervention) benefit from a significantly reduced co-payment. Non-conventional therapists cannot apply supplements to BIM patients — official INAMI rates are mandatory.",
    mutuelleTitle: "Supplementary insurance", mutuelleText: "Many insurers offer supplementary cover (hospitalisation, outpatient) that covers an additional share of physiotherapy costs. Check with your insurer.",
    prescTitle: "Medical prescription", prescText: "A medical prescription is required to receive reimbursement from your insurer. Without a prescription, no reimbursement is possible.",
    checkInami: "Check official INAMI rates", inamiLink: "INAMI website",
    ctaTitle: "Questions about our fees?", ctaSub: "Our team is available to answer all your questions about costs and reimbursements.", ctaBtn: "Book appointment",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Our conventional therapists:", nonConvListTitle: "Our non-conventional therapists:",
    tarifsSource: "Fees according to INAMI nomenclature (in force from 01/01/2026). Subject to updates — current amounts at inami.fgov.be.",
  },
  nl: {
    badge: "Transparante tarieven",
    title: "Onze", titleAccent: "Honoraria",
    subtitle: "Duidelijke en transparante informatie over onze tarieven — voor een vertrouwensrelatie met onze patiënten.",
    convTitle: "Geconventioneerde therapeuten", convSubtitle: "Officiële RIZIV-tarieven · Automatische terugbetaling door mutualiteit",
    nonConvTitle: "Niet-geconventioneerde therapeuten", nonConvSubtitle: "Vrije tarieven · Gedeeltelijke terugbetaling door mutualiteit mogelijk",
    sessionType: "Type prestatie", totalFee: "Honorarium", inami: "Terugbetaling mutualiteit", patientNonBim: "Uw aandeel", patientBim: "BIM-aandeel",
    cabinet: "Kabinet", home: "Huisbezoek",
    faNormal: "Normale sessie (geen lijst)", faList: "Lijst Fa – Courante aandoeningen", fbList: "Lijst Fb – Ernstige aandoeningen", intensive: "Intensieve revalidatie (postop.)",
    faNote: "Lijst Fa: acute en goedaardige aandoeningen (voorschrift vereist, bv. rugpijn, knie, schouder). Tot 18 sessies/jaar.",
    fbNote: "Lijst Fb: ernstige of chronische aandoeningen (specifiek medisch attest vereist). Onbeperkte sessies, hoger tarief.",
    nonConvExplain: "Een niet-geconventioneerde fysiotherapeut stelt zijn tarieven vrij vast. De mutualiteit betaalt een deel terug op basis van het officiële RIZIV-tarief, verminderd met 25% sinds mei 2025.",
    nonConvFeeLabel: "Praxis Loten – onze tarieven", nonConvCabinetFee: "€35 / sessie", nonConvHomeFee: "€38 / huisbezoek",
    nonConvReimburse: "Terugbetaling (ca.)", nonConvReimburseDetail: "Uw mutualiteit betaalt ca. 75% van het geconventioneerde RIZIV-aandeel terug. Voor een normale sessie is dat ca. €18 (niet-BIM). Neem contact op met uw mutualiteit voor het exacte bedrag.",
    bimTitle: "BIM-patiënten (verhoogde tegemoetkoming)", bimText: "Patiënten met BIM-statuut genieten van een sterk verminderd persoonlijk aandeel. Niet-geconventioneerde therapeuten mogen geen supplement aanrekenen aan BIM-patiënten — de officiële RIZIV-tarieven zijn verplicht van toepassing.",
    mutuelleTitle: "Aanvullende verzekering", mutuelleText: "Veel mutualiteiten bieden een aanvullende verzekering (ziekenhuisopname, ambulant) die een extra deel van de fysiotherapiekosten dekt. Informeer bij uw mutualiteit.",
    prescTitle: "Medisch voorschrift", prescText: "Een medisch voorschrift is vereist voor terugbetaling door de mutualiteit. Zonder voorschrift is geen terugbetaling mogelijk.",
    checkInami: "Officiële RIZIV-tarieven raadplegen", inamiLink: "RIZIV-website",
    ctaTitle: "Vragen over onze tarieven?", ctaSub: "Ons team staat klaar om al uw vragen over kosten en terugbetalingen te beantwoorden.", ctaBtn: "Afspraak maken",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Onze geconventioneerde therapeuten:", nonConvListTitle: "Onze niet-geconventioneerde therapeuten:",
    tarifsSource: "Tarieven volgens RIZIV-nomenclatuur (van kracht op 01/01/2026). Kunnen worden bijgewerkt — actuele bedragen op riziv.fgov.be.",
  },
  tr: {
    badge: "Şeffaf fiyatlar",
    title: "Ücret", titleAccent: "Tarifemiz",
    subtitle: "Tarifelerimiz hakkında açık ve şeffaf bilgi — hastalarımızla güvene dayalı bir ilişki için.",
    convTitle: "Konvansiyonel terapistler", convSubtitle: "Resmi INAMI tarifeleri · Sağlık sigortası tarafından otomatik geri ödeme",
    nonConvTitle: "Konvansiyonel olmayan terapistler", nonConvSubtitle: "Serbest fiyatlandırma · Sağlık sigortasından kısmi geri ödeme mümkün",
    sessionType: "Seans tipi", totalFee: "Ücret", inami: "Sigorta geri ödemesi", patientNonBim: "Sizin payınız", patientBim: "BIM payı",
    cabinet: "Klinik", home: "Ev ziyareti",
    faNormal: "Normal seans (liste dışı)", faList: "Fa listesi – Yaygın hastalıklar", fbList: "Fb listesi – Ciddi hastalıklar", intensive: "Yoğun rehabilitasyon (ameliyat sonrası)",
    faNote: "Fa listesi: akut ve iyi huylu hastalıklar (reçete gerekli, ör. sırt ağrısı, diz, omuz). Yılda 18 seansa kadar.",
    fbNote: "Fb listesi: ciddi veya kronik hastalıklar (özel tıbbi sertifika gerekli). Sınırsız seans, daha yüksek tarife.",
    nonConvExplain: "Konvansiyonel olmayan fizyoterapist ücretlerini serbestçe belirler. Sigortanız, Mayıs 2025'ten itibaren %25 azaltılmış resmi INAMI tarifesine göre bir kısım geri öder.",
    nonConvFeeLabel: "Praxis Loten – tarifelerimiz", nonConvCabinetFee: "35 € / seans", nonConvHomeFee: "38 € / ev ziyareti",
    nonConvReimburse: "Geri ödeme (yaklaşık)", nonConvReimburseDetail: "Sigortanız, konvansiyonel INAMI payının yaklaşık %75'ini geri öder. Normal bir seans için bu yaklaşık 18 €'ya karşılık gelir (BIM değil). Kesin tutar için sigortanızla iletişime geçin.",
    bimTitle: "BIM hastaları (tercihli tarife)", bimText: "BIM statüsündeki (artırılmış müdahale) hastalar için katkı payı önemli ölçüde azaltılmıştır. Konvansiyonel olmayan terapistler BIM hastalarına ek ücret uygulayamaz — resmi INAMI tarifeleri zorunlu olarak geçerlidir.",
    mutuelleTitle: "Ek sigorta", mutuelleText: "Birçok sağlık sigortası, fizyoterapi maliyetlerinin ek bir bölümünü karşılayan tamamlayıcı sigorta (hastane, ayakta tedavi) sunar. Sigortanıza danışın.",
    prescTitle: "Tıbbi reçete", prescText: "Sigorta geri ödemesinden yararlanmak için tıbbi reçete gereklidir. Reçete olmadan geri ödeme yapılmaz.",
    checkInami: "Resmi INAMI tarifelerini kontrol et", inamiLink: "INAMI web sitesi",
    ctaTitle: "Tarifelerimiz hakkında sorularınız mı var?", ctaSub: "Ekibimiz, maliyetler ve geri ödemeler hakkındaki tüm sorularınızı yanıtlamaya hazırdır.", ctaBtn: "Randevu al",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Konvansiyonel terapistlerimiz:", nonConvListTitle: "Konvansiyonel olmayan terapistlerimiz:",
    tarifsSource: "INAMI nomanklatürüne göre tarifeler (01/01/2026 itibarıyla geçerli). Güncellenebilir — güncel tutarlar inami.fgov.be'de.",
  },
  ar: {
    badge: "أسعار شفافة",
    title: "رسومنا", titleAccent: "الطبية",
    subtitle: "معلومات واضحة وشفافة حول تعريفاتنا — لعلاقة ثقة مع مرضانا.",
    convTitle: "المعالجون التقليديون", convSubtitle: "تعريفات INAMI الرسمية · تعويض تلقائي من صندوق المرض",
    nonConvTitle: "المعالجون غير التقليديين", nonConvSubtitle: "تسعير حر · تعويض جزئي من صندوق المرض ممكن",
    sessionType: "نوع الجلسة", totalFee: "الأتعاب", inami: "تعويض التأمين", patientNonBim: "على عاتقك", patientBim: "نصيب BIM",
    cabinet: "العيادة", home: "زيارة منزلية",
    faNormal: "جلسة عادية (خارج القائمة)", faList: "قائمة Fa – الأمراض الشائعة", fbList: "قائمة Fb – الأمراض الخطيرة", intensive: "تأهيل مكثف (ما بعد العملية)",
    faNote: "قائمة Fa: الحالات الحادة والحميدة (تستلزم وصفة طبية، مثل آلام الظهر والركبة والكتف). حتى 18 جلسة/سنة.",
    fbNote: "قائمة Fb: الأمراض الخطيرة أو المزمنة (تستلزم شهادة طبية محددة). جلسات غير محدودة، تعريفة أعلى.",
    nonConvExplain: "يحدد المعالج الطبيعي غير التقليدي أتعابه بحرية. يعوّض التأمين جزءًا بناءً على التعريفة الرسمية لـ INAMI، مخفضة بنسبة 25٪ منذ مايو 2025.",
    nonConvFeeLabel: "Praxis Loten – تعريفاتنا", nonConvCabinetFee: "35 € / جلسة", nonConvHomeFee: "38 € / زيارة منزلية",
    nonConvReimburse: "التعويض (تقريبًا)", nonConvReimburseDetail: "يعوّض التأمين ما يقارب 75٪ من حصة INAMI التقليدية. لجلسة عادية، يعادل ذلك ما يقارب 18 € (غير BIM). اتصل بصندوق مرضك للحصول على المبلغ الدقيق.",
    bimTitle: "مرضى BIM (النظام التفضيلي)", bimText: "يستفيد المرضى ذوو الوضع BIM من حصة شخصية مخفضة بشكل كبير. لا يمكن للمعالجين غير التقليديين تطبيق أي رسوم إضافية على مرضى BIM — تعريفات INAMI الرسمية إلزامية.",
    mutuelleTitle: "التأمين التكميلي", mutuelleText: "تقدم كثير من صناديق المرض تأمينًا تكميليًا (استشفاء، علاج خارجي) يغطي جزءًا إضافيًا من تكاليف العلاج الطبيعي. استفسر من صندوق مرضك.",
    prescTitle: "الوصفة الطبية", prescText: "تستلزم الاستفادة من تعويض التأمين تقديم وصفة طبية. بدون وصفة، لا يمكن الحصول على أي تعويض.",
    checkInami: "مراجعة تعريفات INAMI الرسمية", inamiLink: "موقع INAMI",
    ctaTitle: "لديك أسئلة حول أتعابنا؟", ctaSub: "فريقنا متاح للإجابة على جميع أسئلتك حول التكاليف والتعويضات.", ctaBtn: "احجز موعدًا",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "معالجونا التقليديون:", nonConvListTitle: "معالجونا غير التقليديين:",
    tarifsSource: "التعريفات وفق تسمية INAMI (سارية المفعول من 01/01/2026). قابلة للتحديث — المبالغ الحالية على inami.fgov.be.",
  },
  pl: {
    badge: "Przejrzyste ceny",
    title: "Nasze", titleAccent: "Honoraria",
    subtitle: "Jasne i przejrzyste informacje o naszych cenach — dla relacji opartej na zaufaniu z naszymi pacjentami.",
    convTitle: "Terapeuci konwencjonowani", convSubtitle: "Oficjalne stawki INAMI · Automatyczny zwrot kosztów przez kasę chorych",
    nonConvTitle: "Terapeuci niekonwencjonowani", nonConvSubtitle: "Swobodne ceny · Częściowy zwrot kosztów przez kasę chorych możliwy",
    sessionType: "Typ wizyty", totalFee: "Honorarium", inami: "Zwrot z kasy chorych", patientNonBim: "Twój udział", patientBim: "Udział BIM",
    cabinet: "Przychodnia", home: "Wizyta domowa",
    faNormal: "Normalna sesja (bez listy)", faList: "Lista Fa – Częste schorzenia", fbList: "Lista Fb – Poważne schorzenia", intensive: "Intensywna rehab. (pooperacyjna)",
    faNote: "Lista Fa: ostre i łagodne schorzenia (wymagana recepta, np. ból pleców, kolano, bark). Do 18 sesji/rok.",
    fbNote: "Lista Fb: poważne lub przewlekłe schorzenia (wymagane specjalne zaświadczenie lekarskie). Nieograniczona liczba sesji, wyższa stawka.",
    nonConvExplain: "Fizjoterapeuta niekonwencjonowany ustala honorarium swobodnie. Kasa chorych zwraca część na podstawie oficjalnej stawki INAMI, zmniejszonej o 25% od maja 2025.",
    nonConvFeeLabel: "Praxis Loten – nasze ceny", nonConvCabinetFee: "35 € / sesja", nonConvHomeFee: "38 € / wizyta domowa",
    nonConvReimburse: "Zwrot kosztów (około)", nonConvReimburseDetail: "Kasa chorych zwraca ok. 75% konwencjonowanej części INAMI. Dla normalnej sesji wynosi to ok. 18 € (nie-BIM). Skontaktuj się ze swoją kasą chorych w celu uzyskania dokładnej kwoty.",
    bimTitle: "Pacjenci BIM (preferencyjne stawki)", bimText: "Pacjenci ze statusem BIM (podwyższona interwencja) korzystają ze znacznie zmniejszonej dopłaty własnej. Terapeuci niekonwencjonowani nie mogą pobierać dopłat od pacjentów BIM — obowiązują oficjalne stawki INAMI.",
    mutuelleTitle: "Ubezpieczenie uzupełniające", mutuelleText: "Wiele kas chorych oferuje ubezpieczenie uzupełniające (hospitalizacja, ambulatoryjne), które pokrywa dodatkową część kosztów fizjoterapii. Zapytaj swoją kasę chorych.",
    prescTitle: "Recepta lekarska", prescText: "Recepta lekarska jest wymagana do uzyskania zwrotu kosztów. Bez recepty zwrot nie jest możliwy.",
    checkInami: "Sprawdź oficjalne stawki INAMI", inamiLink: "Strona INAMI",
    ctaTitle: "Pytania dotyczące naszych cen?", ctaSub: "Nasz zespół jest dostępny, aby odpowiedzieć na wszystkie pytania dotyczące kosztów i zwrotów.", ctaBtn: "Umów wizytę",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Nasi terapeuci konwencjonowani:", nonConvListTitle: "Nasi terapeuci niekonwencjonowani:",
    tarifsSource: "Stawki zgodnie z nomenklaturą INAMI (obowiązujące od 01/01/2026). Mogą być aktualizowane — aktualne kwoty na inami.fgov.be.",
  },
};

/* ─── INAMI fee table (conventionné, 2026) ───────────────────────────────── */
// Source: INAMI nomenclature 01/01/2026
// Ticket modérateur is a fixed amount since 01/09/2019
const CONV_ROWS: {
  labelKey: keyof typeof UI["de"];
  fee: string;
  inami: string;
  patientNonBim: string;
  patientBim: string;
  isHome?: boolean;
}[] = [
  // Cabinet sessions
  { labelKey: "faNormal",  fee: "30,80 €", inami: "24,55 €", patientNonBim: "6,25 €", patientBim: "2,50 €" },
  { labelKey: "faList",    fee: "30,80 €", inami: "24,55 €", patientNonBim: "6,25 €", patientBim: "2,50 €" },
  { labelKey: "fbList",    fee: "38,16 €", inami: "31,91 €", patientNonBim: "6,25 €", patientBim: "2,50 €" },
  { labelKey: "intensive", fee: "38,16 €", inami: "31,91 €", patientNonBim: "6,25 €", patientBim: "2,50 €" },
  // Home visits
  { labelKey: "faNormal",  fee: "33,88 €", inami: "27,63 €", patientNonBim: "6,25 €", patientBim: "2,50 €", isHome: true },
  { labelKey: "fbList",    fee: "41,24 €", inami: "34,99 €", patientNonBim: "6,25 €", patientBim: "2,50 €", isHome: true },
];

export function HonorairesPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";

  const cabinetRows = CONV_ROWS.filter((r) => !r.isHome);
  const homeRows = CONV_ROWS.filter((r) => r.isHome);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Euro className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.title}{" "}<span style={{ color: "#76b82a" }}>{ui.titleAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">{ui.subtitle}</p>
        </AnimatedSection>

        <StaggerContainer className="space-y-12" staggerDelay={0.12}>

          {/* ══ CONVENTIONNÉ ══════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">

              {/* Card header */}
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.convTitle}</h2>
                    <p className="text-white/70 text-sm mt-0.5">{ui.convSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">

                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-[#2b3186]/5 rounded-2xl">
                  <Users className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#2b3186] mb-1">{ui.convListTitle}</p>
                    <p className="text-sm text-neutral-600">{ui.whoConv}</p>
                  </div>
                </div>

                {/* Cabinet table */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-neutral-400" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">{ui.cabinet}</h3>
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-neutral-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-neutral-200">
                          <th className="text-left px-4 py-3 font-semibold text-neutral-600">{ui.sessionType}</th>
                          <th className="text-right px-4 py-3 font-semibold text-neutral-600">{ui.totalFee}</th>
                          <th className="text-right px-4 py-3 font-semibold text-neutral-600">{ui.inami}</th>
                          <th className="text-right px-4 py-3 font-semibold text-[#2b3186]">{ui.patientNonBim}</th>
                          <th className="text-right px-4 py-3 font-semibold text-[#76b82a]">{ui.patientBim}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cabinetRows.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
                            <td className="px-4 py-3 text-neutral-700">{ui[row.labelKey] as string}</td>
                            <td className="px-4 py-3 text-right font-medium text-neutral-900">{row.fee}</td>
                            <td className="px-4 py-3 text-right text-neutral-500">{row.inami}</td>
                            <td className="px-4 py-3 text-right font-bold text-[#2b3186]">{row.patientNonBim}</td>
                            <td className="px-4 py-3 text-right font-bold text-[#76b82a]">{row.patientBim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Home visits table */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Home className="w-4 h-4 text-neutral-400" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500">{ui.home}</h3>
                  </div>
                  <div className="overflow-x-auto rounded-2xl border border-neutral-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-neutral-50 border-b border-neutral-200">
                          <th className="text-left px-4 py-3 font-semibold text-neutral-600">{ui.sessionType}</th>
                          <th className="text-right px-4 py-3 font-semibold text-neutral-600">{ui.totalFee}</th>
                          <th className="text-right px-4 py-3 font-semibold text-neutral-600">{ui.inami}</th>
                          <th className="text-right px-4 py-3 font-semibold text-[#2b3186]">{ui.patientNonBim}</th>
                          <th className="text-right px-4 py-3 font-semibold text-[#76b82a]">{ui.patientBim}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {homeRows.map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}>
                            <td className="px-4 py-3 text-neutral-700">{ui[row.labelKey] as string}</td>
                            <td className="px-4 py-3 text-right font-medium text-neutral-900">{row.fee}</td>
                            <td className="px-4 py-3 text-right text-neutral-500">{row.inami}</td>
                            <td className="px-4 py-3 text-right font-bold text-[#2b3186]">{row.patientNonBim}</td>
                            <td className="px-4 py-3 text-right font-bold text-[#76b82a]">{row.patientBim}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Fa / Fb notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">{ui.faNote}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-2xl">
                    <Info className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-purple-700 leading-relaxed">{ui.fbNote}</p>
                  </div>
                </div>

                {/* INAMI source note */}
                <p className="text-xs text-neutral-400 italic">{ui.tarifsSource}</p>

                {/* INAMI link */}
                <a
                  href="https://www.inami.fgov.be/fr/themes/soins-de-sante-cout-et-remboursement/les-prestations-de-sante-que-vous-rembourse-votre-mutualite/prestations-de-soins-individuelles/honoraires-prix-et-remboursements/honoraires-prix-et-remboursements-des-kinesitherapeutes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {ui.checkInami} — {ui.inamiLink}
                </a>
              </div>
            </div>
          </StaggerItem>

          {/* ══ NON-CONVENTIONNÉ ══════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">

              {/* Card header */}
              <div className="bg-gradient-to-br from-[#76b82a] to-[#5c9120] px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.nonConvTitle}</h2>
                    <p className="text-white/80 text-sm mt-0.5">{ui.nonConvSubtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-8">

                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-[#76b82a]/5 rounded-2xl">
                  <Users className="w-5 h-5 text-[#5c9120] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#5c9120] mb-1">{ui.nonConvListTitle}</p>
                    <p className="text-sm text-neutral-600">{ui.whoNonConv}</p>
                  </div>
                </div>

                {/* Explanation */}
                <p className="text-neutral-600 leading-relaxed">{ui.nonConvExplain}</p>

                {/* Our fees */}
                <div>
                  <h3 className="font-bold text-neutral-900 mb-4">{ui.nonConvFeeLabel}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#76b82a]/10 to-[#76b82a]/5 rounded-2xl border border-[#76b82a]/20">
                      <div className="w-12 h-12 bg-[#76b82a] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">{ui.cabinet}</p>
                        <p className="text-3xl font-extrabold text-neutral-900">{ui.nonConvCabinetFee}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-gradient-to-br from-[#2b3186]/10 to-[#2b3186]/5 rounded-2xl border border-[#2b3186]/20">
                      <div className="w-12 h-12 bg-[#2b3186] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">{ui.home}</p>
                        <p className="text-3xl font-extrabold text-neutral-900">{ui.nonConvHomeFee}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reimbursement info */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                  <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-700 mb-1">{ui.nonConvReimburse}</p>
                    <p className="text-sm text-amber-700 leading-relaxed">{ui.nonConvReimburseDetail}</p>
                  </div>
                </div>

              </div>
            </div>
          </StaggerItem>

          {/* ══ IMPORTANT NOTES ═══════════════════════════════════════════ */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* BIM */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-[#76b82a]/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#76b82a]" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.bimTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.bimText}</p>
              </div>

              {/* Supplementary insurance */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.mutuelleTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.mutuelleText}</p>
              </div>

              {/* Prescription */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.prescTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.prescText}</p>
              </div>
            </div>
          </StaggerItem>

          {/* ══ CTA ═══════════════════════════════════════════════════════ */}
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
