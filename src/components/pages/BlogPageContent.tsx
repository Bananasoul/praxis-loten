"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const ARTICLES = [
  {
    slug: "manuelle-therapie-rueckenschmerzen",
    date: "2024-11-15",
    readMin: 5,
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    color: "from-[#2b3186] to-[#1e2260]",
    title: {
      de: "Rückenschmerzen — wann hilft Manuelle Therapie?",
      fr: "Douleurs dorsales — quand la thérapie manuelle aide-t-elle ?",
      en: "Back pain — when does manual therapy help?",
      nl: "Rugpijn — wanneer helpt manuele therapie?",
      tr: "Sırt ağrısı — manuel terapi ne zaman yardımcı olur?",
      ar: "آلام الظهر — متى تساعد العلاج اليدوي؟",
      pl: "Ból pleców — kiedy pomaga terapia manualna?",
    },
    excerpt: {
      de: "Rückenschmerzen sind die häufigste Ursache für Arbeitsunfähigkeit weltweit. Doch nicht bei jedem Schmerz hilft die gleiche Therapie. Wir erklären, wann die Manuelle Therapie die richtige Wahl ist und was Sie von einer Behandlung erwarten können.",
      fr: "Les douleurs dorsales sont la première cause d'incapacité de travail dans le monde. Mais toutes les douleurs ne répondent pas au même traitement. Nous expliquons quand la thérapie manuelle est le bon choix et ce que vous pouvez attendre d'une prise en charge.",
      en: "Back pain is the leading cause of work disability worldwide. But not every pain responds to the same treatment. We explain when manual therapy is the right choice and what you can expect from treatment.",
      nl: "Rugpijn is wereldwijd de meest voorkomende oorzaak van arbeidsongeschiktheid. Maar niet elke pijn reageert op dezelfde behandeling. We leggen uit wanneer manuele therapie de juiste keuze is.",
      tr: "Sırt ağrısı, dünya çapında iş göremezliğin önde gelen nedenidir. Ancak her ağrı aynı tedaviye yanıt vermez. Manuel terapinin ne zaman doğru seçim olduğunu açıklıyoruz.",
      ar: "آلام الظهر هي السبب الرئيسي للعجز عن العمل في جميع أنحاء العالم. لكن ليس كل ألم يستجيب لنفس العلاج. نشرح متى يكون العلاج اليدوي هو الخيار الصحيح.",
      pl: "Ból pleców jest główną przyczyną niepełnosprawności zawodowej na świecie. Jednak nie każdy ból reaguje na takie samo leczenie. Wyjaśniamy, kiedy terapia manualna jest właściwym wyborem.",
    },
    tags: { de: ["Rückenschmerz", "Manuelle Therapie", "IFOMPT"], fr: ["Douleur dorsale", "Thérapie Manuelle", "IFOMPT"], en: ["Back pain", "Manual Therapy", "IFOMPT"], nl: ["Rugpijn", "Manuele Therapie", "IFOMPT"], tr: ["Sırt Ağrısı", "Manuel Terapi", "IFOMPT"], ar: ["ألم الظهر", "علاج يدوي", "IFOMPT"], pl: ["Ból pleców", "Terapia Manualna", "IFOMPT"] },
  },
  {
    slug: "laufen-verletzungspraevention",
    date: "2024-10-03",
    readMin: 7,
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "فيزيوتيرابيا الرياضة", pl: "Fizjoterapia Sportowa",
    },
    color: "from-[#76b82a] to-[#5c9120]",
    title: {
      de: "Laufen ohne Schmerzen — 5 Tipps zur Verletzungsprävention",
      fr: "Courir sans douleur — 5 conseils pour prévenir les blessures",
      en: "Running without pain — 5 injury prevention tips",
      nl: "Lopen zonder pijn — 5 tips voor blessurepreventie",
      tr: "Ağrısız koşu — yaralanma önleme için 5 ipucu",
      ar: "الجري بدون ألم — 5 نصائح للوقاية من الإصابات",
      pl: "Bieganie bez bólu — 5 wskazówek dotyczących prewencji urazów",
    },
    excerpt: {
      de: "Jeder zweite Läufer verletzt sich mindestens einmal pro Jahr. Das Gute: Die meisten Laufverletzungen sind vermeidbar. Thom Petit, unser Sportphysiotherapeut und Spezialist der Running Clinic, teilt seine 5 wichtigsten Tipps zur Prävention.",
      fr: "Un coureur sur deux se blesse au moins une fois par an. La bonne nouvelle : la plupart des blessures de running sont évitables. Thom Petit, notre kinésithérapeute sportif et spécialiste de la Running Clinic, partage ses 5 conseils essentiels.",
      en: "One in two runners gets injured at least once a year. The good news: most running injuries are preventable. Thom Petit, our sports physiotherapist and Running Clinic specialist, shares his 5 essential prevention tips.",
      nl: "Een op de twee lopers raakt minstens één keer per jaar geblesseerd. Het goede nieuws: de meeste loopblessures zijn vermijdbaar. Thom Petit deelt zijn 5 belangrijkste preventiestips.",
      tr: "İki koşucudan biri yılda en az bir kez yaralanır. İyi haber: çoğu koşu yaralanması önlenebilir. Spor fizyoterapistimiz Thom Petit, 5 temel önleme ipucunu paylaşıyor.",
      ar: "يُصاب عداء من كل اثنين مرة واحدة على الأقل في السنة. الخبر الجيد: معظم إصابات الجري قابلة للوقاية. يشارك ثوم بيتي، أخصائي فيزيوتيرابيا الرياضة، نصائحه الخمس الأساسية.",
      pl: "Co drugi biegacz doznaje urazu przynajmniej raz w roku. Dobra wiadomość: większość urazów biegowych można zapobiec. Thom Petit dzieli się swoimi 5 najważniejszymi wskazówkami prewencyjnymi.",
    },
    tags: { de: ["Running", "Sport", "Verletzungsprävention", "Running Clinic"], fr: ["Running", "Sport", "Prévention", "Running Clinic"], en: ["Running", "Sport", "Injury Prevention", "Running Clinic"], nl: ["Running", "Sport", "Blessurepreventie", "Running Clinic"], tr: ["Koşu", "Spor", "Yaralanma Önleme", "Running Clinic"], ar: ["جري", "رياضة", "الوقاية", "Running Clinic"], pl: ["Bieganie", "Sport", "Prewencja", "Running Clinic"] },
  },
  {
    slug: "lymphdrainage-wann-wie",
    date: "2024-09-10",
    readMin: 4,
    category: {
      de: "Lymphdrainage", fr: "Drainage Lymphatique", en: "Lymphatic Drainage",
      nl: "Lymfedrainage", tr: "Lenf Drenajı", ar: "الصرف اللمفاوي", pl: "Drenaż Limfatyczny",
    },
    color: "from-teal-600 to-teal-800",
    title: {
      de: "Manuelle Lymphdrainage — für wen und wann?",
      fr: "Drainage lymphatique manuel — pour qui et quand ?",
      en: "Manual lymphatic drainage — for whom and when?",
      nl: "Manuele lymfedrainage — voor wie en wanneer?",
      tr: "Manuel lenf drenajı — kim için ve ne zaman?",
      ar: "الصرف اللمفاوي اليدوي — لمن ومتى؟",
      pl: "Ręczny drenaż limfatyczny — dla kogo i kiedy?",
    },
    excerpt: {
      de: "Die Lymphdrainage ist mehr als eine entspannende Massage. Sie ist eine medizinisch anerkannte Technik zur Behandlung von Ödemen und Lymphödemen. Fabienne Dormann erklärt, für welche Patienten die Therapie geeignet ist.",
      fr: "Le drainage lymphatique est bien plus qu'un massage relaxant. C'est une technique médicalement reconnue pour traiter les œdèmes et lymphœdèmes. Fabienne Dormann explique pour quels patients cette thérapie est adaptée.",
      en: "Lymphatic drainage is much more than a relaxing massage. It is a medically recognised technique for treating oedema and lymphoedema. Fabienne Dormann explains which patients benefit most.",
      nl: "Lymfedrainage is veel meer dan een ontspannende massage. Het is een medisch erkende techniek voor de behandeling van oedeem en lymfoedeem. Fabienne Dormann legt uit voor welke patiënten deze therapie geschikt is.",
      tr: "Lenf drenajı, rahatlatıcı bir masajdan çok daha fazlasıdır. Ödem ve lenfödem tedavisinde tıbbi olarak tanınmış bir tekniktir. Fabienne Dormann, hangi hastaların en çok yararlandığını açıklıyor.",
      ar: "الصرف اللمفاوي أكثر بكثير من مجرد تدليك مريح. إنها تقنية معترف بها طبيًا لعلاج الوذمة والوذمة اللمفية. تشرح فابيان دورمان الفئات التي تستفيد أكثر من هذا العلاج.",
      pl: "Drenaż limfatyczny to znacznie więcej niż relaksujący masaż. Jest to uznana medycznie technika leczenia obrzęków i obrzęku limfatycznego. Fabienne Dormann wyjaśnia, którzy pacjenci korzystają najbardziej.",
    },
    tags: { de: ["Lymphdrainage", "Ödem", "Post-op"], fr: ["Drainage Lymphatique", "Œdème", "Post-op"], en: ["Lymphatic Drainage", "Oedema", "Post-op"], nl: ["Lymfedrainage", "Oedeem", "Post-op"], tr: ["Lenf Drenajı", "Ödem", "Post-op"], ar: ["صرف لمفاوي", "وذمة", "Post-op"], pl: ["Drenaż Limfatyczny", "Obrzęk", "Post-op"] },
  },
  {
    slug: "kiefergelenk-cmd-symptome",
    date: "2024-08-20",
    readMin: 6,
    category: {
      de: "Kiefergelenk / ATM", fr: "Articulation Temporo-Mandibulaire", en: "TMJ / Jaw",
      nl: "Kaakgewricht", tr: "Çene Eklemi", ar: "مفصل الفك", pl: "Staw Żuchwowy",
    },
    color: "from-purple-600 to-purple-800",
    title: {
      de: "Kiefergelenk-Schmerzen (CMD) — Symptome erkennen und behandeln",
      fr: "Douleurs de l'articulation temporo-mandibulaire (DTM) — reconnaître et traiter",
      en: "Jaw joint pain (TMD) — recognise and treat the symptoms",
      nl: "Kaakgewrichtspijn (CMD) — symptomen herkennen en behandelen",
      tr: "Çene eklemi ağrısı (CMD) — belirtileri tanımak ve tedavi etmek",
      ar: "ألم مفصل الفك (CMD) — التعرف على الأعراض وعلاجها",
      pl: "Ból stawu skroniowo-żuchwowego (CMD) — rozpoznawanie i leczenie objawów",
    },
    excerpt: {
      de: "Kopfschmerzen, Schwindel, Kieferschmerzen oder ein Knacken beim Gähnen — all das können Zeichen einer craniomandibulären Dysfunktion (CMD) sein. Fabienne Dormann, unsere Spezialistin für Kiefergelenktherapie, klärt auf.",
      fr: "Maux de tête, vertiges, douleurs de mâchoire ou claquement à l'ouverture — tout cela peut être le signe d'une dysfonction temporo-mandibulaire (DTM). Fabienne Dormann, notre spécialiste ATM, fait le point.",
      en: "Headaches, dizziness, jaw pain or clicking when opening — all of these can be signs of temporomandibular dysfunction (TMD). Fabienne Dormann, our TMJ specialist, explains.",
      nl: "Hoofdpijn, duizeligheid, kaakpijn of klikgeluid bij het openen — dit alles kan een teken zijn van craniomandibulaire dysfunctie (CMD). Fabienne Dormann, onze kaakgewrichtspecialist, legt het uit.",
      tr: "Baş ağrısı, baş dönmesi, çene ağrısı veya ağız açarken klik sesi — bunların hepsi temporomandibüler disfonksiyonun (CMD) belirtisi olabilir. Çene eklemi uzmanımız Fabienne Dormann açıklıyor.",
      ar: "صداع، دوخة، آلام الفك أو صوت طقطقة عند الفتح — كل هذه يمكن أن تكون علامات على خلل مفصل الفك (CMD). تشرح متخصصتنا فابيان دورمان.",
      pl: "Bóle głowy, zawroty, ból żuchwy lub trzaskanie przy otwieraniu — to wszystko może być oznaką dysfunkcji skroniowo-żuchwowej (CMD). Wyjaśnia nasza specjalistka Fabienne Dormann.",
    },
    tags: { de: ["CMD", "ATM", "Kiefergelenk", "Kopfschmerz"], fr: ["CMD", "ATM", "Mâchoire", "Maux de tête"], en: ["TMD", "TMJ", "Jaw", "Headache"], nl: ["CMD", "Kaakgewricht", "Hoofdpijn"], tr: ["CMD", "Çene Eklemi", "Baş Ağrısı"], ar: ["CMD", "مفصل الفك", "صداع"], pl: ["CMD", "Staw Żuchwowy", "Ból głowy"] },
  },
  {
    slug: "osteopathie-kinesitherapie-unterschied",
    date: "2024-07-05",
    readMin: 5,
    category: {
      de: "Ostéopathie", fr: "Ostéopathie", en: "Osteopathy",
      nl: "Osteopathie", tr: "Osteopati", ar: "هشاشة العظام", pl: "Osteopatia",
    },
    color: "from-indigo-600 to-indigo-800",
    title: {
      de: "Osteopathie vs. Physiotherapie — was ist der Unterschied?",
      fr: "Ostéopathie vs. kinésithérapie — quelle est la différence ?",
      en: "Osteopathy vs. physiotherapy — what is the difference?",
      nl: "Osteopathie vs. fysiotherapie — wat is het verschil?",
      tr: "Osteopati vs. fizyoterapi — fark nedir?",
      ar: "هشاشة العظام مقابل العلاج الطبيعي — ما الفرق؟",
      pl: "Osteopatia a fizjoterapia — jaka jest różnica?",
    },
    excerpt: {
      de: "Was ist genau der Unterschied zwischen Physiotherapie und Osteopathie? Félix Esser, in beiden Disziplinen ausgebildet, erklärt, wie sich die beiden Ansätze ergänzen.",
      fr: "Quelle est exactement la différence entre la kinésithérapie et l'ostéopathie ? Félix Esser, formé dans les deux disciplines, explique comment les deux approches se complètent.",
      en: "What exactly is the difference between physiotherapy and osteopathy? Félix Esser, trained in both disciplines, explains how the two approaches complement each other.",
      nl: "Wat is precies het verschil tussen fysiotherapie en osteopathie? Félix Esser, opgeleid in beide disciplines, legt uit hoe de twee benaderingen elkaar aanvullen.",
      tr: "Fizyoterapi ve osteopati arasındaki fark tam olarak nedir? Her iki disiplinde de eğitim alan Félix Esser, iki yaklaşımın nasıl birbirini tamamladığını açıklıyor.",
      ar: "ما الفرق بالضبط بين العلاج الطبيعي وهشاشة العظام؟ يشرح Félix Esser، المدرب في كلا التخصصين، كيف يكمل النهجان بعضهما.",
      pl: "Jaka jest dokładnie różnica między fizjoterapią a osteopatią? Félix Esser, wyszkolony w obu dyscyplinach, wyjaśnia, jak oba podejścia się uzupełniają.",
    },
    tags: { de: ["Osteopathie", "Physiotherapie", "Unterschied"], fr: ["Ostéopathie", "Kinésithérapie", "Différence"], en: ["Osteopathy", "Physiotherapy", "Difference"], nl: ["Osteopathie", "Fysiotherapie", "Verschil"], tr: ["Osteopati", "Fizyoterapi", "Fark"], ar: ["هشاشة العظام", "علاج طبيعي", "فرق"], pl: ["Osteopatia", "Fizjoterapia", "Różnica"] },
  },
  {
    slug: "bfr-training-rehabilitation",
    date: "2024-06-18",
    readMin: 6,
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "فيزيوتيرابيا الرياضة", pl: "Fizjoterapia Sportowa",
    },
    color: "from-orange-500 to-orange-700",
    title: {
      de: "Blood Flow Restriction (BFR) Training — Revolution in der Rehabilitation",
      fr: "Blood Flow Restriction (BFR) — une révolution dans la rééducation",
      en: "Blood Flow Restriction (BFR) training — a revolution in rehabilitation",
      nl: "Blood Flow Restriction (BFR) training — een revolutie in revalidatie",
      tr: "Kan Akışı Kısıtlama (BFR) antrenmanı — rehabilitasyonda bir devrim",
      ar: "تدريب تقييد تدفق الدم (BFR) — ثورة في إعادة التأهيل",
      pl: "Trening BFR (ograniczenie przepływu krwi) — rewolucja w rehabilitacji",
    },
    excerpt: {
      de: "BFR-Training ermöglicht signifikante Muskelzuwächse bei sehr niedrigen Lasten (20–30% des Maximalgewichts). Besonders wertvoll in der frühen postoperativen Rehabilitation. Thom Petit erklärt die Wissenschaft und die Anwendung bei Praxis Loten.",
      fr: "L'entraînement BFR permet des gains musculaires significatifs avec des charges très légères (20–30% du maximum). Particulièrement précieux en rééducation post-opératoire précoce. Thom Petit explique la science et l'application chez Praxis Loten.",
      en: "BFR training enables significant muscle gains at very low loads (20–30% of maximum). Particularly valuable in early post-operative rehabilitation. Thom Petit explains the science and its application at Praxis Loten.",
      nl: "BFR-training maakt significante spiergroei mogelijk bij zeer lage belastingen (20–30% van het maximum). Bijzonder waardevol in vroege postoperatieve revalidatie. Thom Petit legt de wetenschap en toepassing uit.",
      tr: "BFR antrenmanı, çok düşük yüklerde (maksimumun %20–30'u) önemli kas artışına olanak tanır. Erken ameliyat sonrası rehabilitasyonda özellikle değerlidir. Thom Petit bilimi ve uygulamayı açıklıyor.",
      ar: "يتيح تدريب BFR مكاسب عضلية كبيرة عند أحمال منخفضة جدًا (20-30٪ من الحد الأقصى). قيّم بشكل خاص في التأهيل المبكر بعد الجراحة. يشرح ثوم بيتي العلم والتطبيق.",
      pl: "Trening BFR umożliwia znaczny przyrost mięśni przy bardzo niskich obciążeniach (20–30% maksimum). Szczególnie cenny we wczesnej rehabilitacji pooperacyjnej. Thom Petit wyjaśnia naukę i zastosowanie.",
    },
    tags: { de: ["BFR", "Sport", "Rehabilitation", "Kinesport"], fr: ["BFR", "Sport", "Rééducation", "Kinesport"], en: ["BFR", "Sport", "Rehabilitation", "Kinesport"], nl: ["BFR", "Sport", "Revalidatie", "Kinesport"], tr: ["BFR", "Spor", "Rehabilitasyon", "Kinesport"], ar: ["BFR", "رياضة", "تأهيل", "Kinesport"], pl: ["BFR", "Sport", "Rehabilitacja", "Kinesport"] },
  },
];

const UI_BLOG: Record<LangKey, { title: string; subtitle: string; readMin: string; readMore: string }> = {
  de: { title: "Blog & Ratgeber", subtitle: "Fachartikel unserer Therapeuten zu Physiotherapie, Rehabilitation und Gesundheit.", readMin: "min Lesezeit", readMore: "Artikel lesen" },
  fr: { title: "Blog & Conseils", subtitle: "Articles de fond rédigés par nos thérapeutes sur la kinésithérapie, la rééducation et la santé.", readMin: "min de lecture", readMore: "Lire l'article" },
  en: { title: "Blog & Advice", subtitle: "In-depth articles by our therapists on physiotherapy, rehabilitation and health.", readMin: "min read", readMore: "Read article" },
  nl: { title: "Blog & Advies", subtitle: "Diepgaande artikelen van onze therapeuten over fysiotherapie, revalidatie en gezondheid.", readMin: "min leestijd", readMore: "Artikel lezen" },
  tr: { title: "Blog & Tavsiyeler", subtitle: "Terapistlerimizin fizyoterapi, rehabilitasyon ve sağlık hakkında derinlemesine makaleleri.", readMin: "dk okuma", readMore: "Makaleyi oku" },
  ar: { title: "المدونة والنصائح", subtitle: "مقالات متعمقة يكتبها معالجونا حول العلاج الطبيعي وإعادة التأهيل والصحة.", readMin: "دقيقة قراءة", readMore: "اقرأ المقال" },
  pl: { title: "Blog i Porady", subtitle: "Dogłębne artykuły naszych terapeutów o fizjoterapii, rehabilitacji i zdrowiu.", readMin: "min czytania", readMore: "Przeczytaj artykuł" },
};

function formatDate(dateStr: string, lang: LangKey) {
  const d = new Date(dateStr);
  const locales: Record<LangKey, string> = { de: "de-DE", fr: "fr-FR", en: "en-GB", nl: "nl-NL", tr: "tr-TR", ar: "ar-SA", pl: "pl-PL" };
  return d.toLocaleDateString(locales[lang], { year: "numeric", month: "long", day: "numeric" });
}

export function BlogPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI_BLOG[lang];
  const isRtl = lang === "ar";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            {ui.title}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            <span style={{ color: "#76b82a" }}>{ui.title}</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-neutral-500">{ui.subtitle}</p>
        </AnimatedSection>

        {/* Articles grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
          {ARTICLES.map((article) => {
            const title = (article.title as Record<LangKey, string>)[lang] ?? article.title.de;
            const excerpt = (article.excerpt as Record<LangKey, string>)[lang] ?? article.excerpt.de;
            const category = (article.category as Record<LangKey, string>)[lang] ?? article.category.de;

            return (
              <StaggerItem key={article.slug}>
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col h-full"
                >
                  {/* Color banner */}
                  <div className={`h-3 bg-gradient-to-r ${article.color}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${article.color} text-white`}>
                        {category}
                      </span>
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readMin} {ui.readMin}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-extrabold text-neutral-900 mb-3 leading-snug flex-1">
                      {title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {((article.tags as Record<LangKey, string[]>)[lang] ?? (article.tags as Record<LangKey, string[]>).de).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full">
                          <Tag className="w-2.5 h-2.5" /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                      <time className="text-xs text-neutral-400">
                        {formatDate(article.date, lang)}
                      </time>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="flex items-center gap-1.5 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors"
                      >
                        {ui.readMore}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
