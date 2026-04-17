"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { MapPin, Phone, Mail, Clock, Star, Building2, Users, CalendarPlus, LucideIcon } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const UI: Record<LangKey, {
  heading: string; headingHighlight: string; subtitle: string;
  contactLabel: string; bookBtn: string; hoursLabel: string;
  hoursNote: string; googleReview: string; welcomeTitle: string;
  p1: string; p2: string; p3: string; p4: string;
}> = {
  de: {
    heading: "Unsere", headingHighlight: "Praxis",
    subtitle: "Moderne Physiotherapie in zentraler Lage in Eupen — für Ihre Gesundheit und Ihr Wohlbefinden.",
    contactLabel: "Kontakt", bookBtn: "Termin buchen", hoursLabel: "Öffnungszeiten",
    hoursNote: "Auf Voranmeldung — flexible Zeiten möglich.",
    googleReview: "Bewerten Sie uns auf Google",
    welcomeTitle: "Herzlich Willkommen in der Praxis Loten",
    p1: "Praxis Loten ist ein modernes Physiotherapie-Kabinett in Eupen, Belgien, im Herzen der Deutschsprachigen Gemeinschaft. Unser dynamisches Team aus 6 spezialisierten Physiotherapeuten begleitet Sie auf Ihrem Weg zur Gesundheit.",
    p2: "Wir bieten eine breite Palette an Rehabilitationsleistungen: von der orthopädischen Manualtherapie bis zur spezialisierten Sportphysiotherapie, der Kiefergelenksbehandlung und der manuellen Lymphdrainage.",
    p3: "Unser Kabinett ist mit modernsten Geräten ausgestattet, darunter der Manuthera 242 — ein hochwertiger finnischer Behandlungstisch für präzise und schonende Behandlungen.",
    p4: "Dank unserer Nähe zum orthopädischen Krankenhaus sind wir Ihr bevorzugter Partner für die postoperative Rehabilitation nach Hüft- oder Knieprothesen sowie nach Kreuzbandrekonstruktionen.",
  },
  fr: {
    heading: "Notre", headingHighlight: "Cabinet",
    subtitle: "Kinésithérapie moderne en plein centre d'Eupen — pour votre santé et votre bien-être.",
    contactLabel: "Contact", bookBtn: "Prendre RDV", hoursLabel: "Horaires d'ouverture",
    hoursNote: "Sur rendez-vous — horaires flexibles possibles.",
    googleReview: "Évaluez-nous sur Google",
    welcomeTitle: "Bienvenue à Praxis Loten",
    p1: "Praxis Loten est un cabinet de kinésithérapie moderne situé à Eupen, en Belgique, au cœur de la Communauté germanophone. Notre équipe dynamique de 6 kinésithérapeutes spécialisés vous accompagne vers la santé.",
    p2: "Nous offrons une large gamme de services : de la thérapie manuelle orthopédique à la kinésithérapie du sport spécialisée, en passant par la prise en charge de l'articulation temporo-mandibulaire et le drainage lymphatique manuel.",
    p3: "Notre cabinet est équipé des appareils les plus modernes, dont le Manuthera 242 — une table de traitement finlandaise haut de gamme pour des traitements précis et doux.",
    p4: "Grâce à notre proximité avec l'hôpital orthopédique, nous sommes votre partenaire privilégié pour la réhabilitation post-opératoire après prothèse de hanche ou de genou, ainsi qu'après reconstruction du LCA.",
  },
  en: {
    heading: "Our", headingHighlight: "Practice",
    subtitle: "Modern physiotherapy in the heart of Eupen — for your health and well-being.",
    contactLabel: "Contact", bookBtn: "Book appointment", hoursLabel: "Opening hours",
    hoursNote: "By appointment — flexible hours available.",
    googleReview: "Review us on Google",
    welcomeTitle: "Welcome to Praxis Loten",
    p1: "Praxis Loten is a modern physiotherapy practice located in Eupen, Belgium, in the heart of the German-speaking Community. Our dynamic team of 6 specialised physiotherapists guides you on your path to health.",
    p2: "We offer a wide range of rehabilitation services: from orthopaedic manual therapy to specialised sports physiotherapy, jaw joint treatment and manual lymphatic drainage.",
    p3: "Our practice is equipped with the latest technology, including the Manuthera 242 — a high-end Finnish treatment table for precise and gentle treatments.",
    p4: "Thanks to our proximity to the orthopaedic hospital, we are your preferred partner for post-operative rehabilitation after hip or knee replacements and ACL reconstructions.",
  },
  nl: {
    heading: "Onze", headingHighlight: "Praktijk",
    subtitle: "Moderne fysiotherapie in het hart van Eupen — voor uw gezondheid en welzijn.",
    contactLabel: "Contact", bookBtn: "Afspraak maken", hoursLabel: "Openingsuren",
    hoursNote: "Op afspraak — flexibele uren mogelijk.",
    googleReview: "Beoordeel ons op Google",
    welcomeTitle: "Welkom bij Praxis Loten",
    p1: "Praxis Loten is een moderne fysiotherapiepraktijk in Eupen, België, in het hart van de Duitstalige Gemeenschap. Ons dynamisch team van 6 gespecialiseerde fysiotherapeuten begeleidt u op uw weg naar gezondheid.",
    p2: "Wij bieden een breed scala aan revalidatiediensten: van orthopedische manuele therapie tot gespecialiseerde sportfysiotherapie, kaakgewrichtbehandeling en manuele lymfedrainage.",
    p3: "Onze praktijk is uitgerust met de nieuwste technologie, waaronder de Manuthera 242 — een hoogwaardige Finse behandeltafel voor nauwkeurige en zachte behandelingen.",
    p4: "Dankzij onze nabijheid van het orthopedisch ziekenhuis zijn wij uw voorkeurpartner voor postoperatieve revalidatie na heup- of knievervanging en VKB-reconstructie.",
  },
  tr: {
    heading: "Kliniğimiz", headingHighlight: "",
    subtitle: "Eupen'in merkezinde modern fizyoterapi — sağlığınız ve refahınız için.",
    contactLabel: "İletişim", bookBtn: "Randevu al", hoursLabel: "Çalışma saatleri",
    hoursNote: "Randevu ile — esnek saatler mevcut.",
    googleReview: "Google'da bizi değerlendirin",
    welcomeTitle: "Praxis Loten'e Hoş Geldiniz",
    p1: "Praxis Loten, Belçika'nın Eupen şehrinde, Almanca Konuşan Topluluk'un kalbinde yer alan modern bir fizyoterapi kliniğidir. 6 uzman fizyoterapistten oluşan dinamik ekibimiz sizi sağlığa giden yolda yönlendirir.",
    p2: "Ortopedik manuel terapiden uzmanlaşmış spor fizyoterapisine, çene eklemi tedavisine ve manuel lenf drenajına kadar geniş bir rehabilitasyon hizmetleri yelpazesi sunuyoruz.",
    p3: "Kliniğimiz, hassas ve nazik tedaviler için üst düzey bir Fin tedavi masası olan Manuthera 242 dahil en son teknolojiyle donatılmıştır.",
    p4: "Ortopedi hastanesine yakınlığımız sayesinde, kalça veya diz replasmanı ile ÖÇB rekonstrüksiyonu sonrası ameliyat sonrası rehabilitasyon için tercih edilen partneriniziz.",
  },
  ar: {
    heading: "عيادتنا", headingHighlight: "",
    subtitle: "علاج طبيعي حديث في قلب مدينة يوبن — لصحتك وراحتك.",
    contactLabel: "اتصل بنا", bookBtn: "احجز موعدًا", hoursLabel: "ساعات العمل",
    hoursNote: "بالموعد المسبق — ساعات مرنة متاحة.",
    googleReview: "قيّمنا على Google",
    welcomeTitle: "مرحبًا بكم في Praxis Loten",
    p1: "Praxis Loten عيادة علاج طبيعي حديثة تقع في يوبن، بلجيكا، في قلب المجتمع الناطق بالألمانية. يرافقكم فريقنا الديناميكي المكوّن من 6 معالجين طبيعيين متخصصين في رحلتكم نحو الصحة.",
    p2: "نقدم مجموعة واسعة من خدمات إعادة التأهيل: من العلاج اليدوي التقويمي إلى العلاج الطبيعي الرياضي المتخصص، ومعالجة مفصل الفك، والتصريف اللمفاوي اليدوي.",
    p3: "عيادتنا مجهزة بأحدث التقنيات، بما في ذلك Manuthera 242 — طاولة علاج فنلندية متطورة للعلاجات الدقيقة واللطيفة.",
    p4: "بفضل قربنا من مستشفى العظام، نحن شريككم المفضل في إعادة التأهيل بعد جراحات استبدال الورك أو الركبة وإعادة بناء الرباط الصليبي.",
  },
  pl: {
    heading: "Nasza", headingHighlight: "Przychodnia",
    subtitle: "Nowoczesna fizjoterapia w centrum Eupen — dla Twojego zdrowia i dobrostanu.",
    contactLabel: "Kontakt", bookBtn: "Umów wizytę", hoursLabel: "Godziny otwarcia",
    hoursNote: "Na wizytę — elastyczne godziny możliwe.",
    googleReview: "Oceń nas na Google",
    welcomeTitle: "Witamy w Praxis Loten",
    p1: "Praxis Loten to nowoczesna przychodnia fizjoterapeutyczna w Eupen, Belgia, w sercu Wspólnoty Niemieckojęzycznej. Nasz dynamiczny zespół 6 wyspecjalizowanych fizjoterapeutów prowadzi Cię na drodze do zdrowia.",
    p2: "Oferujemy szeroką gamę usług rehabilitacyjnych: od ortopedycznej terapii manualnej po specjalistyczną fizjoterapię sportową, leczenie stawu skroniowo-żuchwowego i manualny drenaż limfatyczny.",
    p3: "Nasza przychodnia wyposażona jest w najnowsze technologie, w tym Manuthera 242 — wysokiej klasy fiński stół do zabiegów zapewniający precyzyjne i delikatne leczenie.",
    p4: "Dzięki bliskości szpitala ortopedycznego jesteśmy Twoim preferowanym partnerem w rehabilitacji pooperacyjnej po endoprotezie biodra lub kolana oraz rekonstrukcji ACL.",
  },
};

const FEATURE_ICONS: LucideIcon[] = [Building2, Users, Star, MapPin];

const FEATURES: Record<LangKey, { title: string; desc: string }[]> = {
  de: [
    { title: "Modernes Kabinett", desc: "Vollständig ausgestattete Räumlichkeiten, 24/7 zugänglich, zentral in Eupen gelegen." },
    { title: "6 Spezialisten", desc: "Ein interdisziplinäres Team mit Expertise in Manualtherapie, Sport, ATM und Lymphdrainage." },
    { title: "Manuthera 242", desc: "Hochmoderner Behandlungstisch aus Finnland — für präzise manualtherapeutische Techniken." },
    { title: "Nähe zu Spezialisten", desc: "In der Nähe des orthopädischen Krankenhauses (Hüft-/Knieprothesen, VKB-Rekonstruktion)." },
  ],
  fr: [
    { title: "Cabinet moderne", desc: "Locaux entièrement équipés, accessibles 24h/24, situés au centre d'Eupen." },
    { title: "6 spécialistes", desc: "Une équipe interdisciplinaire avec expertise en thérapie manuelle, sport, ATM et drainage lymphatique." },
    { title: "Manuthera 242", desc: "Table de traitement haute technologie finlandaise — pour des techniques de thérapie manuelle précises." },
    { title: "Proximité avec les spécialistes", desc: "À proximité de l'hôpital orthopédique (prothèses hanche/genou, reconstruction LCA)." },
  ],
  en: [
    { title: "Modern practice", desc: "Fully equipped premises, accessible 24/7, centrally located in Eupen." },
    { title: "6 specialists", desc: "An interdisciplinary team with expertise in manual therapy, sports, TMJ and lymphatic drainage." },
    { title: "Manuthera 242", desc: "High-tech Finnish treatment table — for precise manual therapy techniques." },
    { title: "Close to specialists", desc: "Near the orthopaedic hospital (hip/knee replacements, ACL reconstruction)." },
  ],
  nl: [
    { title: "Moderne praktijk", desc: "Volledig uitgeruste ruimten, 24/7 toegankelijk, centraal gelegen in Eupen." },
    { title: "6 specialisten", desc: "Een interdisciplinair team met expertise in manuele therapie, sport, TMG en lymfedrainage." },
    { title: "Manuthera 242", desc: "Hoogwaardige Finse behandeltafel — voor nauwkeurige manuele therapietechnieken." },
    { title: "Dicht bij specialisten", desc: "In de buurt van het orthopedisch ziekenhuis (heup-/knievervanging, VKB-reconstructie)." },
  ],
  tr: [
    { title: "Modern klinik", desc: "Tam donanımlı tesisler, 24/7 erişilebilir, Eupen merkezinde konumlu." },
    { title: "6 uzman", desc: "Manuel terapi, spor, TME ve lenf drenajı alanlarında uzmanlığa sahip disiplinlerarası bir ekip." },
    { title: "Manuthera 242", desc: "Finlandiya'dan yüksek teknolojili tedavi masası — hassas manuel terapi teknikleri için." },
    { title: "Uzmanlara yakınlık", desc: "Ortopedi hastanesine yakın (kalça/diz replasmanı, ÖÇB rekonstrüksiyonu)." },
  ],
  ar: [
    { title: "عيادة حديثة", desc: "مرافق مجهزة بالكامل، متاحة على مدار الساعة، تقع في وسط مدينة يوبن." },
    { title: "6 متخصصين", desc: "فريق متعدد التخصصات بخبرة في العلاج اليدوي والرياضة ومفصل الفك والتصريف اللمفاوي." },
    { title: "Manuthera 242", desc: "طاولة علاج فنلندية عالية التقنية — لتقنيات العلاج اليدوي الدقيقة." },
    { title: "قرب المتخصصين", desc: "بالقرب من مستشفى العظام (استبدال الورك/الركبة، إعادة بناء الرباط الصليبي)." },
  ],
  pl: [
    { title: "Nowoczesna przychodnia", desc: "W pełni wyposażone pomieszczenia, dostępne 24/7, centralnie zlokalizowane w Eupen." },
    { title: "6 specjalistów", desc: "Interdyscyplinarny zespół z wiedzą w zakresie terapii manualnej, sportu, stawu skroniowo-żuchwowego i drenażu limfatycznego." },
    { title: "Manuthera 242", desc: "Wysokotechnologiczny fiński stół do zabiegów — dla precyzyjnych technik terapii manualnej." },
    { title: "Blisko specjalistów", desc: "W pobliżu szpitala ortopedycznego (endoprotezy biodra/kolana, rekonstrukcja ACL)." },
  ],
};

const DAYS: Record<LangKey, string[]> = {
  de: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
  fr: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  nl: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
  tr: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  ar: ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
  pl: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
};

const SAT_HOURS: Record<LangKey, string> = {
  de: "Nach Vereinbarung", fr: "Sur rendez-vous", en: "By appointment",
  nl: "Op afspraak", tr: "Randevu ile", ar: "بالموعد", pl: "Na umówienie",
};

export function PraxisPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";
  const features = FEATURES[lang].map((f, i) => ({ ...f, Icon: FEATURE_ICONS[i] }));
  const days = DAYS[lang];
  const hours = [
    { day: days[0], hours: "08:00 – 20:00" },
    { day: days[1], hours: "08:00 – 20:00" },
    { day: days[2], hours: "08:00 – 20:00" },
    { day: days[3], hours: "08:00 – 20:00" },
    { day: days[4], hours: "08:00 – 20:00" },
    { day: days[5], hours: SAT_HOURS[lang] },
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.heading}{ui.headingHighlight ? (
              <> <span style={{ color: "#76b82a" }}>{ui.headingHighlight}</span></>
            ) : null}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500">
            {ui.subtitle}
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
                      <f.Icon className="w-5 h-5" style={{ color: "#76b82a" }} />
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
                <h2 className="text-xl font-bold text-neutral-900 mb-4">{ui.welcomeTitle}</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>{ui.p1}</p>
                  <p>{ui.p2}</p>
                  <p>{ui.p3}</p>
                  <p>{ui.p4}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Contact + hours */}
          <div className="space-y-6">

            {/* Contact */}
            <AnimatedSection delay={0.15}>
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-5">{ui.contactLabel}</h3>
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
                    {ui.bookBtn}
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Hours */}
            <AnimatedSection delay={0.25}>
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-[#76b82a]" />
                  <h3 className="font-bold text-neutral-900">{ui.hoursLabel}</h3>
                </div>
                <div className="space-y-2.5">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-neutral-500">{h.day}</span>
                      <span className="font-medium text-neutral-900">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-4 italic">{ui.hoursNote}</p>
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
                <span className="text-sm font-medium text-neutral-700">{ui.googleReview}</span>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
