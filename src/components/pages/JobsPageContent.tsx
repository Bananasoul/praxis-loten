"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLocale } from "next-intl";
import { CheckCircle2, MapPin, Clock, Users, Mail, Star } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const UI: Record<LangKey, {
  badge: string; h1a: string; h1b: string; subtitle: string;
  offerBadge: string; jobTitle: string; flexible: string; status: string;
  descTitle: string; desc: string;
  qualTitle: string; qual: string[];
  offerTitle: string; offer: string[];
  hoursTitle: string; hoursText: string;
  applyTitle: string;
}> = {
  de: {
    badge: "Work with us!",
    h1a: "Jobs bei", h1b: "Praxis Loten",
    subtitle: "Wir suchen engagierte Physiotherapeuten für unser dynamisches Team in Eupen.",
    offerBadge: "STELLENANGEBOT",
    jobTitle: "Physiotherapeut / Manualtherapeut / Osteopath",
    flexible: "Flexible Arbeitszeiten",
    status: "Selbstständig / Angestellt",
    descTitle: "Stellenbeschreibung",
    desc: "Der ideale Kandidat begleitet Patienten auf dem Weg zu ihren Gesundheitszielen — Wohlbefinden, Funktionalität und Teilhabe — unter Einsatz seiner Qualifikationen, Fähigkeiten, Zeit und Energie.",
    qualTitle: "Erforderliche Qualifikationen",
    qual: [
      "Master in Physiotherapie und Rehabilitation (Universität oder Hochschule)",
      "Oder gleichwertige internationale Ausbildung mit belgischer INAMI-Nummer",
      "Kenntnisse der deutschen und französischen Sprache",
    ],
    offerTitle: "Wir bieten Ihnen",
    offer: [
      "Angenehmes Arbeitsumfeld mit freundlichen Patienten und kollegialen Kollegen",
      "Vollständig ausgestattetes Kabinett — von der einfachen Zervikalgie bis zur komplexen Reathletisierung",
      "Professioneller Rahmen und günstige Bedingungen für die persönliche Entwicklung (Fortbildungen, etc.)",
      "Nähe zu verschiedenen Fachärzten und Gesundheitseinrichtungen",
      "Zentrale Lage in der Stadt Eupen",
      "Sehr vorteilhafte Bedingungen für eine langfristige Zusammenarbeit",
    ],
    hoursTitle: "Arbeitszeiten",
    hoursText: "Flexible Arbeitszeiten mit Räumlichkeiten, die 24/7 verfügbar sind, außer: Mo. 14–16h, Di. 15–16h, Do. 15–15:30h.",
    applyTitle: "Jetzt bewerben",
  },
  fr: {
    badge: "Work with us!",
    h1a: "Rejoignez", h1b: "Praxis Loten",
    subtitle: "Nous recherchons des kinésithérapeutes engagés pour rejoindre notre équipe dynamique à Eupen.",
    offerBadge: "OFFRE D'EMPLOI",
    jobTitle: "Kinésithérapeute / Thérapeute Manuel / Ostéopathe",
    flexible: "Horaires flexibles",
    status: "Indépendant / Salarié",
    descTitle: "Description du poste",
    desc: "Le candidat idéal accompagne les patients vers leurs objectifs de santé — bien-être, fonctionnalité et participation — en utilisant ses qualifications, compétences, temps et énergie.",
    qualTitle: "Qualifications requises",
    qual: [
      "Master en kinésithérapie et sciences de la rééducation (université ou haute école)",
      "Ou toute formation internationale permettant l'obtention d'un numéro INAMI belge",
      "Connaissance du français et de l'allemand",
    ],
    offerTitle: "Nous vous proposons",
    offer: [
      "Agréable ambiance de travail avec des patients sympathiques et des collègues accessibles",
      "Lieu entièrement aménagé — de la plus simple cervicalgie à la réathlétisation la plus complexe",
      "Cadre professionnel de qualité et conditions favorables au développement personnel (formations, etc.)",
      "Proximité de différents médecins spécialistes et établissements de soins",
      "Position centrale dans la ville d'Eupen",
      "Conditions plus qu'avantageuses pour développer une collaboration sur le long terme",
    ],
    hoursTitle: "Horaires de travail",
    hoursText: "Horaires flexibles avec locaux disponibles 24h/24 et 7j/7, à l'exception des créneaux suivants : Lundi 14–16h, Mardi 15–16h, Jeudi 15–15:30h.",
    applyTitle: "Postuler maintenant",
  },
  en: {
    badge: "Work with us!",
    h1a: "Jobs at", h1b: "Praxis Loten",
    subtitle: "We are looking for committed physiotherapists to join our dynamic team in Eupen.",
    offerBadge: "JOB OFFER",
    jobTitle: "Physiotherapist / Manual Therapist / Osteopath",
    flexible: "Flexible working hours",
    status: "Self-employed / Salaried",
    descTitle: "Job description",
    desc: "The ideal candidate guides patients towards their health goals — well-being, functionality and participation — using their qualifications, skills, time and energy.",
    qualTitle: "Required qualifications",
    qual: [
      "Master's degree in physiotherapy and rehabilitation (university or college)",
      "Or equivalent international training enabling a Belgian INAMI number",
      "Knowledge of German and French",
    ],
    offerTitle: "We offer you",
    offer: [
      "Pleasant working environment with friendly patients and collegial colleagues",
      "Fully equipped practice — from simple cervicalgia to complex re-athletisation",
      "Professional setting and favourable conditions for personal development (training, etc.)",
      "Proximity to various specialist doctors and healthcare facilities",
      "Central location in the city of Eupen",
      "Very advantageous conditions for developing a long-term collaboration",
    ],
    hoursTitle: "Working hours",
    hoursText: "Flexible hours with premises available 24/7, except: Mon 14–16h, Tue 15–16h, Thu 15–15:30h.",
    applyTitle: "Apply now",
  },
  nl: {
    badge: "Work with us!",
    h1a: "Jobs bij", h1b: "Praxis Loten",
    subtitle: "Wij zoeken gedreven fysiotherapeuten voor ons dynamisch team in Eupen.",
    offerBadge: "VACATURE",
    jobTitle: "Fysiotherapeut / Manueel Therapeut / Osteopaat",
    flexible: "Flexibele werkuren",
    status: "Zelfstandig / Loondienst",
    descTitle: "Functiebeschrijving",
    desc: "De ideale kandidaat begeleidt patiënten naar hun gezondheidsdoelen — welzijn, functionaliteit en participatie — met inzet van zijn kwalificaties, vaardigheden, tijd en energie.",
    qualTitle: "Vereiste kwalificaties",
    qual: [
      "Master fysiotherapie en revalidatiewetenschappen (universiteit of hogeschool)",
      "Of gelijkwaardige internationale opleiding met Belgisch RIZIV-nummer",
      "Kennis van het Duits en Frans",
    ],
    offerTitle: "Wij bieden u",
    offer: [
      "Aangename werkomgeving met vriendelijke patiënten en collegiale collega's",
      "Volledig uitgeruste praktijk — van eenvoudige cervicalgie tot complexe re-atlétisering",
      "Professioneel kader en gunstige omstandigheden voor persoonlijke ontwikkeling (opleidingen, etc.)",
      "Nabijheid van verschillende specialisten en zorginstellingen",
      "Centrale ligging in de stad Eupen",
      "Zeer voordelige voorwaarden voor een langdurige samenwerking",
    ],
    hoursTitle: "Werktijden",
    hoursText: "Flexibele uren met lokalen beschikbaar 24/7, behalve: Ma 14–16u, Di 15–16u, Do 15–15:30u.",
    applyTitle: "Solliciteer nu",
  },
  tr: {
    badge: "Work with us!",
    h1a: "Praxis Loten'de", h1b: "İş İmkânları",
    subtitle: "Eupen'deki dinamik ekibimize katılmak için kendini adamış fizyoterapistler arıyoruz.",
    offerBadge: "İŞ İLANI",
    jobTitle: "Fizyoterapist / Manuel Terapist / Osteopat",
    flexible: "Esnek çalışma saatleri",
    status: "Serbest / Çalışan",
    descTitle: "İş tanımı",
    desc: "İdeal aday, nitelikleri, becerileri, zamanı ve enerjisini kullanarak hastaları sağlık hedeflerine — refah, işlevsellik ve katılım — doğru yönlendirir.",
    qualTitle: "Gerekli nitelikler",
    qual: [
      "Fizyoterapi ve rehabilitasyon alanında yüksek lisans (üniversite veya yüksekokul)",
      "Veya Belçika INAMI numarası almayı sağlayan eşdeğer uluslararası eğitim",
      "Almanca ve Fransızca bilgisi",
    ],
    offerTitle: "Size sunduklarımız",
    offer: [
      "Güler yüzlü hastalar ve ekip arkadaşlarıyla keyifli çalışma ortamı",
      "Tam donanımlı klinik — basit servikal ağrıdan karmaşık yeniden atletizme kadar",
      "Kaliteli profesyonel ortam ve kişisel gelişim için uygun koşullar (eğitimler vb.)",
      "Çeşitli uzman doktorlara ve sağlık tesislerine yakınlık",
      "Eupen şehrinin merkezinde yer",
      "Uzun vadeli işbirliği için son derece avantajlı koşullar",
    ],
    hoursTitle: "Çalışma saatleri",
    hoursText: "Şu saatler hariç 24/7 kullanılabilen tesislerle esnek saatler: Pzt 14–16h, Sal 15–16h, Per 15–15:30h.",
    applyTitle: "Başvur",
  },
  ar: {
    badge: "Work with us!",
    h1a: "وظائف في", h1b: "Praxis Loten",
    subtitle: "نبحث عن معالجين طبيعيين ملتزمين للانضمام إلى فريقنا الديناميكي في يوبن.",
    offerBadge: "عرض عمل",
    jobTitle: "معالج طبيعي / معالج يدوي / أوستيوباث",
    flexible: "ساعات عمل مرنة",
    status: "مستقل / موظف",
    descTitle: "وصف الوظيفة",
    desc: "يرافق المرشح المثالي المرضى نحو أهدافهم الصحية — الرفاهية والوظيفية والمشاركة — باستخدام مؤهلاته ومهاراته ووقته وطاقته.",
    qualTitle: "المؤهلات المطلوبة",
    qual: [
      "ماجستير في العلاج الطبيعي وعلوم إعادة التأهيل (جامعة أو كلية)",
      "أو أي تدريب دولي مكافئ يتيح الحصول على رقم INAMI بلجيكي",
      "معرفة الألمانية والفرنسية",
    ],
    offerTitle: "نقدم لك",
    offer: [
      "بيئة عمل ممتعة مع مرضى ودودين وزملاء متعاونين",
      "عيادة مجهزة بالكامل — من أبسط آلام العنق إلى أعقد برامج إعادة التأهيل الرياضي",
      "إطار مهني راقٍ وظروف مواتية للتطوير الشخصي (تدريبات وغيرها)",
      "قرب من مختلف الأطباء المتخصصين والمرافق الصحية",
      "موقع مركزي في مدينة يوبن",
      "شروط في غاية الأفضلية لتطوير تعاون طويل الأمد",
    ],
    hoursTitle: "ساعات العمل",
    hoursText: "ساعات مرنة مع مرافق متاحة على مدار الساعة، باستثناء: الاثنين 14–16h، الثلاثاء 15–16h، الخميس 15–15:30h.",
    applyTitle: "قدّم طلبك",
  },
  pl: {
    badge: "Work with us!",
    h1a: "Praca w", h1b: "Praxis Loten",
    subtitle: "Szukamy zaangażowanych fizjoterapeutów do naszego dynamicznego zespołu w Eupen.",
    offerBadge: "OFERTA PRACY",
    jobTitle: "Fizjoterapeuta / Terapeuta Manualny / Osteopata",
    flexible: "Elastyczne godziny pracy",
    status: "Samozatrudnienie / Etat",
    descTitle: "Opis stanowiska",
    desc: "Idealny kandydat prowadzi pacjentów ku ich celom zdrowotnym — dobrostanowi, funkcjonalności i uczestnictwu — wykorzystując swoje kwalifikacje, umiejętności, czas i energię.",
    qualTitle: "Wymagane kwalifikacje",
    qual: [
      "Magisterium z fizjoterapii i rehabilitacji (uczelnia wyższa lub akademia)",
      "Lub równoważne wykształcenie zagraniczne umożliwiające uzyskanie belgijskiego numeru INAMI",
      "Znajomość języka niemieckiego i francuskiego",
    ],
    offerTitle: "Oferujemy",
    offer: [
      "Przyjemne środowisko pracy z życzliwymi pacjentami i koleżeńskim zespołem",
      "W pełni wyposażona przychodnia — od prostego bólu szyjnego do złożonej re-atletyzacji",
      "Profesjonalne ramy i warunki sprzyjające rozwojowi osobistemu (szkolenia itp.)",
      "Bliskość różnych specjalistów i placówek opieki zdrowotnej",
      "Centralna lokalizacja w mieście Eupen",
      "Bardzo korzystne warunki do nawiązania długotrwałej współpracy",
    ],
    hoursTitle: "Godziny pracy",
    hoursText: "Elastyczne godziny, lokale dostępne 24/7, z wyjątkiem: Pon 14–16h, Wt 15–16h, Czw 15–15:30h.",
    applyTitle: "Aplikuj teraz",
  },
};

export function JobsPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.h1a}{" "}<span style={{ color: "#76b82a" }}>{ui.h1b}</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-neutral-500">{ui.subtitle}</p>
        </AnimatedSection>

        {/* Job offer card */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl border-2 border-[#76b82a]/20 overflow-hidden shadow-lg">

            {/* Header card */}
            <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-3 inline-block">
                    {ui.offerBadge}
                  </span>
                  <h2 className="text-2xl font-extrabold mb-1">{ui.jobTitle}</h2>
                  <div className="flex flex-wrap gap-4 text-white/70 text-sm mt-2">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Eupen, Belgique</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{ui.flexible}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />{ui.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">

              {/* Description */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">{ui.descTitle}</h3>
                <p className="text-neutral-600 leading-relaxed">{ui.desc}</p>
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">{ui.qualTitle}</h3>
                <ul className="space-y-2.5">
                  {ui.qual.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* We offer */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3">{ui.offerTitle}</h3>
                <ul className="space-y-2.5">
                  {ui.offer.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hours */}
              <div className="bg-neutral-50 rounded-2xl p-5">
                <h3 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#76b82a]" />
                  {ui.hoursTitle}
                </h3>
                <p className="text-neutral-600 text-sm">{ui.hoursText}</p>
              </div>

              {/* Contact */}
              <div className="border-t border-neutral-100 pt-6">
                <h3 className="font-bold text-neutral-900 mb-4">{ui.applyTitle}</h3>
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
