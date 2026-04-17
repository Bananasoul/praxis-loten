"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import {
  CalendarPlus, CheckCircle2, Clock, ArrowRight, ArrowLeft,
  Activity, Bone, Zap, Shield, Target, AlertTriangle, Star, ChevronRight,
} from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";
type Slug = "hip" | "knee" | "acl" | "shoulder";

/* ─────────────────────────────── DATA ─────────────────────────────── */

const SURGERY_DATA: Record<Slug, {
  icon: React.ElementType;
  color: string;
  iconBg: string;
  iconColor: string;
  weeks: string;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  surgeryExplain: Record<LangKey, string>;
  whyRehab: Record<LangKey, string[]>;
  objectives: Record<LangKey, string[]>;
  whatToExpect: Record<LangKey, { heading: string; text: string }[]>;
  phases: Record<LangKey, { label: string; items: string[] }[]>;
  risks: Record<LangKey, string[]>;
}> = {
  hip: {
    icon: Bone,
    color: "from-[#2b3186] to-[#1e2260]",
    iconBg: "bg-[#2b3186]/10",
    iconColor: "text-[#2b3186]",
    weeks: "6–12",
    title: {
      de: "Hüftprothese (TEP)", fr: "Prothèse de Hanche (PTH)", en: "Hip Replacement",
      nl: "Heupprothese", tr: "Kalça Protezi", ar: "بدلة الورك", pl: "Endoproteza biodra",
    },
    subtitle: {
      de: "Vollständige Genesung nach Hüfttotalendoprothese", fr: "Récupération complète après prothèse totale de hanche",
      en: "Full recovery after total hip replacement", nl: "Volledig herstel na totale heupprothese",
      tr: "Toplam kalça protezi sonrası tam iyileşme", ar: "التعافي الكامل بعد بدلة الورك الكلية", pl: "Pełny powrót do zdrowia po endoprotezie biodra",
    },
    surgeryExplain: {
      de: "Bei einer Hüfttotalendoprothese (TEP) wird das beschädigte Hüftgelenk durch eine künstliche Prothese aus Metall, Keramik oder Kunststoff ersetzt. Der Eingriff wird bei fortgeschrittener Arthrose, Hüftfrakturen oder anderen schwerwiegenden Gelenkerkrankungen durchgeführt. Ziel ist die Wiederherstellung der Schmerzfreiheit und der vollen Beweglichkeit. In Belgien werden jährlich über 25 000 Hüftprothesen implantiert — ein routinemäßiger, aber bedeutsamer Eingriff, der eine gezielte Nachsorge erfordert.",
      fr: "Dans une prothèse totale de hanche (PTH), l'articulation endommagée est remplacée par une prothèse artificielle en métal, céramique ou plastique. L'intervention est réalisée en cas d'arthrose avancée, de fractures de hanche ou d'autres affections articulaires graves. L'objectif est de restaurer l'absence de douleur et la pleine mobilité. En Belgique, plus de 25 000 prothèses de hanche sont implantées chaque année — une intervention de routine mais significative, qui nécessite un suivi ciblé.",
      en: "In a total hip replacement (THR), the damaged hip joint is replaced by an artificial prosthesis made of metal, ceramic, or plastic. The procedure is performed for advanced arthritis, hip fractures, or other serious joint conditions. The goal is to restore pain-free movement and full mobility. In Belgium, over 25,000 hip prostheses are implanted each year — a routine yet significant procedure that requires targeted aftercare.",
      nl: "Bij een totale heupprothese wordt het beschadigde heupgewricht vervangen door een kunstmatige prothese van metaal, keramiek of kunststof. De ingreep wordt uitgevoerd bij gevorderde artrose, heupfracturen of andere ernstige gewrichtsaandoeningen. Het doel is het herstel van pijnvrije beweging en volledige mobiliteit. In België worden jaarlijks meer dan 25 000 heupprothesen geïmplanteerd — een routinematige maar significante ingreep die gerichte nazorg vereist.",
      tr: "Toplam kalça protezi ameliyatında, hasarlı kalça eklemi metal, seramik veya plastikten yapılmış yapay bir protez ile değiştirilir. Prosedür, ilerlemiş artrit, kalça kırıkları veya diğer ciddi eklem hastalıkları için yapılır. Amaç, ağrısız hareketi ve tam hareketliliği yeniden kazanmaktır. Belçika'da her yıl 25.000'den fazla kalça protezi implante edilmektedir.",
      ar: "في عملية استبدال مفصل الورك الكلي، يُستبدل مفصل الورك التالف ببدلة اصطناعية مصنوعة من المعدن أو الخزف أو البلاستيك. تُجرى العملية في حالات التهاب المفاصل المتقدم أو كسور الورك أو أمراض المفاصل الخطيرة الأخرى. الهدف هو استعادة الحركة بدون ألم والتنقل الكامل. في بلجيكا، يتم زرع أكثر من 25,000 بدلة ورك سنوياً.",
      pl: "W całkowitej endoprotezie biodra uszkodzony staw biodrowy jest zastępowany sztuczną protezą wykonaną z metalu, ceramiki lub tworzywa sztucznego. Zabieg przeprowadza się w zaawansowanej artozie, złamaniach biodra lub innych poważnych schorzeniach stawowych. Celem jest przywrócenie bezbolesnego ruchu i pełnej mobilności. W Belgii rocznie implantuje się ponad 25 000 protez biodra.",
    },
    whyRehab: {
      de: ["Muskelkraft nach der Immobilisierung wiederherstellen", "Sichere Gangschulung und Sturzvermeidung", "Narbenmobilisation und Ödemreduktion", "Rückkehr zu Alltag, Beruf und Sport beschleunigen", "Komplikationen (Thrombose, Luxation) vorbeugen"],
      fr: ["Restaurer la force musculaire après immobilisation", "Rééducation sécurisée de la marche et prévention des chutes", "Mobilisation cicatricielle et réduction de l'œdème", "Accélérer le retour aux activités quotidiennes, professionnelles et sportives", "Prévenir les complications (thrombose, luxation)"],
      en: ["Restore muscle strength after immobilisation", "Safe gait training and fall prevention", "Scar mobilisation and oedema reduction", "Accelerate return to daily life, work, and sport", "Prevent complications (thrombosis, dislocation)"],
      nl: ["Spierkracht herstellen na immobilisatie", "Veilige looptraining en valpreventie", "Littekenmobilisatie en oedeemreductie", "Terugkeer naar dagelijks leven, werk en sport versnellen", "Complicaties voorkomen (trombose, luxatie)"],
      tr: ["İmmobilizasyon sonrası kas gücünü geri kazanma", "Güvenli yürüme eğitimi ve düşme önleme", "Skar mobilizasyonu ve ödem azaltma", "Günlük yaşama, işe ve spora dönüşü hızlandırma", "Komplikasyonları önleme (tromboz, luksasyon)"],
      ar: ["استعادة قوة العضلات بعد التثبيت", "تدريب المشي الآمن والوقاية من السقوط", "تعبئة الندبة وتقليل الوذمة", "تسريع العودة إلى الحياة اليومية والعمل والرياضة", "الوقاية من المضاعفات (الجلطة، الخلع)"],
      pl: ["Przywrócenie siły mięśniowej po unieruchomieniu", "Bezpieczny trening chodu i profilaktyka upadków", "Mobilizacja blizny i redukcja obrzęku", "Przyspieszenie powrotu do życia codziennego, pracy i sportu", "Zapobieganie powikłaniom (zakrzepica, zwichnięcie)"],
    },
    objectives: {
      de: ["Vollständige Schmerzfreiheit im Alltag", "Selbstständiges Gehen ohne Gehhilfen", "Treppensteigen sicher beherrschen", "90°+ Hüftflexion für Sitzen und Autofahren", "Rückkehr zu leichten Sportarten (Schwimmen, Radfahren)"],
      fr: ["Absence totale de douleur au quotidien", "Marche autonome sans aides techniques", "Monter/descendre les escaliers en sécurité", "90°+ de flexion de hanche pour s'asseoir et conduire", "Reprise des sports légers (natation, vélo)"],
      en: ["Complete pain-free daily life", "Independent walking without aids", "Safe stair use", "90°+ hip flexion for sitting and driving", "Return to light sports (swimming, cycling)"],
      nl: ["Volledig pijnvrij dagelijks leven", "Zelfstandig lopen zonder hulpmiddelen", "Veilig traplopen", "90°+ heupflexie voor zitten en rijden", "Terugkeer naar lichte sporten (zwemmen, fietsen)"],
      tr: ["Günlük yaşamda tam ağrısızlık", "Yardımcı cihaz olmadan bağımsız yürüme", "Güvenli merdiven kullanımı", "Oturma ve araba kullanımı için 90°+ kalça fleksiyonu", "Hafif sporlara dönüş (yüzme, bisiklet)"],
      ar: ["حياة يومية كاملة بدون ألم", "المشي المستقل بدون مساعدات", "استخدام الدرج بأمان", "انثناء الورك 90°+ للجلوس والقيادة", "العودة للرياضات الخفيفة (السباحة، الدراجة)"],
      pl: ["Pełne bezbolesne życie codzienne", "Samodzielny chód bez pomocy ortopedycznych", "Bezpieczne używanie schodów", "Zgięcie biodra 90°+ do siedzenia i jazdy samochodem", "Powrót do lekkich sportów (pływanie, rower)"],
    },
    whatToExpect: {
      de: [
        { heading: "Woche 1–2: Im Krankenhaus & Zuhause", text: "Sie verlassen das Krankenhaus nach 3–5 Tagen mit Gehhilfen. Erste Schritte sind schmerzhaft aber normal. Lagerungsregeln müssen strikt eingehalten werden (keine Überkreuzung der Beine). Die Physiotherapie beginnt bereits am Tag nach der Operation." },
        { heading: "Woche 3–6: Ambulante Rehabilitation", text: "Regelmäßige Sitzungen in unserer Praxis. Sie werden zunehmend eigenständiger und benötigen weniger Schmerzmittel. Die Narbe heilt und die Schwellung nimmt ab. Viele Patienten gehen in dieser Phase bereits ohne Gehhilfen." },
        { heading: "Woche 7–12: Rückkehr zur Normalität", text: "Die meisten täglichen Aktivitäten sind wieder möglich: Autofahren, leichte Hausarbeit, kurze Spaziergänge. Das Trainingsprogramm wird intensiver. Schwimmen und Radfahren sind in der Regel freigegeben." },
      ],
      fr: [
        { heading: "Semaines 1–2 : À l'hôpital & à domicile", text: "Vous quittez l'hôpital après 3–5 jours avec des cannes. Les premiers pas sont douloureux mais normaux. Les règles de positionnement doivent être strictement respectées (ne pas croiser les jambes). La kiné commence dès le lendemain de l'opération." },
        { heading: "Semaines 3–6 : Rééducation ambulatoire", text: "Séances régulières dans notre cabinet. Vous devenez de plus en plus autonome et avez moins besoin d'antidouleurs. La cicatrice guérit et le gonflement diminue. De nombreux patients marchent déjà sans cannes à ce stade." },
        { heading: "Semaines 7–12 : Retour à la normalité", text: "La plupart des activités quotidiennes sont à nouveau possibles : conduire, légères tâches ménagères, courtes promenades. Le programme d'entraînement devient plus intense. La natation et le vélo sont généralement autorisés." },
      ],
      en: [
        { heading: "Weeks 1–2: In Hospital & at Home", text: "You leave hospital after 3–5 days with walking aids. First steps are painful but normal. Positioning rules must be strictly followed (no leg crossing). Physiotherapy begins the day after surgery." },
        { heading: "Weeks 3–6: Outpatient Rehabilitation", text: "Regular sessions at our practice. You become increasingly independent and need fewer painkillers. The scar heals and swelling decreases. Many patients walk without aids during this phase." },
        { heading: "Weeks 7–12: Return to Normality", text: "Most daily activities are possible again: driving, light housework, short walks. The training programme becomes more intensive. Swimming and cycling are generally cleared." },
      ],
      nl: [
        { heading: "Weken 1–2: In het Ziekenhuis & Thuis", text: "U verlaat het ziekenhuis na 3–5 dagen met loophulpmiddelen. Eerste stappen zijn pijnlijk maar normaal. Houdingsregels moeten strikt worden gevolgd (geen been over been). Fysiotherapie begint al de dag na de operatie." },
        { heading: "Weken 3–6: Ambulante Revalidatie", text: "Regelmatige sessies in onze praktijk. U wordt steeds zelfstandiger en heeft minder pijnstillers nodig. Het litteken geneest en de zwelling neemt af. Veel patiënten lopen in deze fase al zonder hulpmiddelen." },
        { heading: "Weken 7–12: Terugkeer naar Normaliteit", text: "De meeste dagelijkse activiteiten zijn weer mogelijk: rijden, licht huishoudelijk werk, korte wandelingen. Het trainingsprogramma wordt intensiever. Zwemmen en fietsen zijn doorgaans vrijgegeven." },
      ],
      tr: [
        { heading: "Haftalar 1–2: Hastanede & Evde", text: "3–5 gün sonra yürüme yardımcıları ile hastaneden ayrılırsınız. İlk adımlar ağrılı ama normaldir. Pozisyon kurallarına kesinlikle uyulmalıdır (bacakları çaprazlamamak). Fizyoterapi ameliyattan ertesi gün başlar." },
        { heading: "Haftalar 3–6: Ayakta Tedavi Rehabilitasyonu", text: "Kliniğimizde düzenli seanslar. Giderek daha bağımsız hale gelirsiniz ve daha az ağrı kesiciye ihtiyaç duyarsınız. Yara izi iyileşir ve şişlik azalır. Pek çok hasta bu aşamada yardımcı cihaz olmadan yürür." },
        { heading: "Haftalar 7–12: Normalliğe Dönüş", text: "Çoğu günlük aktivite tekrar mümkündür: araba kullanmak, hafif ev işleri, kısa yürüyüşler. Antrenman programı daha yoğun hale gelir. Yüzme ve bisiklet genellikle serbest bırakılır." },
      ],
      ar: [
        { heading: "الأسابيع 1–2: في المستشفى والمنزل", text: "تغادر المستشفى بعد 3–5 أيام بمساعدات للمشي. الخطوات الأولى مؤلمة لكنها طبيعية. يجب اتباع قواعد الوضع بصرامة (لا تشابك الأرجل). يبدأ العلاج الطبيعي في اليوم التالي للعملية." },
        { heading: "الأسابيع 3–6: إعادة التأهيل الخارجي", text: "جلسات منتظمة في عيادتنا. تصبح أكثر استقلالية وتحتاج إلى مسكنات ألم أقل. يلتئم الجرح وتنقص التورم. كثير من المرضى يمشون بدون مساعدات في هذه المرحلة." },
        { heading: "الأسابيع 7–12: العودة إلى الحياة الطبيعية", text: "معظم الأنشطة اليومية ممكنة مجدداً: القيادة، الأعمال المنزلية الخفيفة، المشي القصير. يصبح برنامج التدريب أكثر كثافة. السباحة وركوب الدراجة مسموح بهما عادةً." },
      ],
      pl: [
        { heading: "Tygodnie 1–2: W Szpitalu i w Domu", text: "Opuszczasz szpital po 3–5 dniach z pomocami ortopedycznymi. Pierwsze kroki są bolesne, ale normalne. Zasady pozycjonowania muszą być ściśle przestrzegane (bez krzyżowania nóg). Fizjoterapia zaczyna się już dzień po operacji." },
        { heading: "Tygodnie 3–6: Rehabilitacja Ambulatoryjna", text: "Regularne sesje w naszej praktyce. Stajesz się coraz bardziej samodzielny i potrzebujesz mniej leków przeciwbólowych. Blizna się goi, obrzęk ustępuje. Wielu pacjentów chodzi bez pomocy ortopedycznych w tej fazie." },
        { heading: "Tygodnie 7–12: Powrót do Normalności", text: "Większość codziennych czynności jest znów możliwa: jazda samochodem, lekkie prace domowe, krótkie spacery. Program treningowy staje się bardziej intensywny. Pływanie i jazda na rowerze są zazwyczaj dozwolone." },
      ],
    },
    risks: {
      de: ["Ohne Rehabilitation erhöhtes Luxationsrisiko", "Muskelschwund und Gangabweichungen", "Langanhaltende Schmerzen durch Vernarbungen", "Verzögerte Rückkehr zum Alltag (bis zu 6 Monate länger)"],
      fr: ["Risque accru de luxation sans rééducation", "Atrophie musculaire et déviations de la marche", "Douleurs persistantes dues aux cicatrices", "Retour aux activités quotidiennes retardé (jusqu'à 6 mois de plus)"],
      en: ["Increased dislocation risk without rehab", "Muscle atrophy and gait deviations", "Persistent pain from scar tissue", "Delayed return to daily activities (up to 6 months longer)"],
      nl: ["Verhoogd luxatierisico zonder revalidatie", "Spieratrofie en loopafwijkingen", "Aanhoudende pijn door littekenweefsel", "Vertraagde terugkeer naar dagelijkse activiteiten (tot 6 maanden langer)"],
      tr: ["Rehabilitasyon olmadan artan luksasyon riski", "Kas atrofisi ve yürüyüş sapmaları", "Skar dokusundan kaynaklanan kalıcı ağrı", "Günlük aktivitelere geç dönüş (6 aya kadar daha uzun)"],
      ar: ["زيادة خطر الخلع بدون إعادة التأهيل", "ضمور العضلات وانحرافات المشي", "ألم مستمر من الأنسجة الندبية", "تأخر العودة إلى الأنشطة اليومية (حتى 6 أشهر إضافية)"],
      pl: ["Zwiększone ryzyko zwichnięcia bez rehabilitacji", "Zanik mięśni i odchylenia chodu", "Utrzymujący się ból z powodu tkanki bliznowatej", "Opóźniony powrót do codziennych czynności (do 6 miesięcy dłużej)"],
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–3", items: ["Schmerzreduktion & Ödembehandlung", "Passive & aktiv-assistierte Mobilisation", "Gangschule mit Gehhilfen", "Lymphdrainage bei Bedarf"] },
        { label: "Phase 2 — Woche 4–6", items: ["Muskelkräftigung (Hüftabduktoren, Gluteus)", "Koordination & Gleichgewicht", "Gangschulung ohne Hilfsmittel", "Treppensteigen"] },
        { label: "Phase 3 — Woche 7–12", items: ["Rückkehr zu Alltagsaktivitäten", "Sportspezifisches Training", "Sturzpräventionstraining", "Abschlussbeurteilung"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–3", items: ["Réduction de la douleur & drainage de l'œdème", "Mobilisation passive & activo-assistée", "Rééducation à la marche avec aides techniques", "Drainage lymphatique si nécessaire"] },
        { label: "Phase 2 — Semaines 4–6", items: ["Renforcement musculaire (abducteurs, fessiers)", "Coordination & équilibre", "Marche sans aide technique", "Montée/descente des escaliers"] },
        { label: "Phase 3 — Semaines 7–12", items: ["Reprise des activités quotidiennes", "Entraînement spécifique au sport", "Prévention des chutes", "Bilan de fin de rééducation"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–3", items: ["Pain reduction & oedema management", "Passive & active-assisted mobilisation", "Gait training with walking aids", "Lymphatic drainage if needed"] },
        { label: "Phase 2 — Weeks 4–6", items: ["Muscle strengthening (hip abductors, gluteus)", "Coordination & balance", "Walking without aids", "Stair climbing"] },
        { label: "Phase 3 — Weeks 7–12", items: ["Return to daily activities", "Sport-specific training", "Fall prevention training", "Final assessment"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–3", items: ["Pijnreductie & oedeembehandeling", "Passieve & actief-geassisteerde mobilisatie", "Looptraining met loophulpmiddelen", "Lymfedrainage indien nodig"] },
        { label: "Fase 2 — Weken 4–6", items: ["Spierversterking (heupabductoren, gluteus)", "Coördinatie & evenwicht", "Stappen zonder hulpmiddelen", "Traplopen"] },
        { label: "Fase 3 — Weken 7–12", items: ["Terugkeer naar dagelijkse activiteiten", "Sportspecifieke training", "Valpreventietraining", "Eindbeoordeling"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–3", items: ["Ağrı azaltma & ödem tedavisi", "Pasif & aktif-yardımlı mobilizasyon", "Yürüme eğitimi (yardımcı cihazlarla)", "Gerekirse lenf drenajı"] },
        { label: "Faz 2 — Haftalar 4–6", items: ["Kas güçlendirme (kalça abduktörleri, gluteus)", "Koordinasyon & denge", "Yardımcı cihaz olmadan yürüme", "Merdiven çıkma"] },
        { label: "Faz 3 — Haftalar 7–12", items: ["Günlük aktivitelere dönüş", "Spora özgü egzersiz", "Düşme önleme eğitimi", "Son değerlendirme"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–3", items: ["تخفيف الألم وعلاج الوذمة", "تعبئة سلبية ومساعدة نشطة", "تدريب المشي بمساعدات", "الصرف اللمفاوي عند الحاجة"] },
        { label: "المرحلة 2 — الأسابيع 4–6", items: ["تقوية العضلات (مبعدات الورك، الألوية)", "التنسيق والتوازن", "المشي بدون مساعدات", "صعود السلالم"] },
        { label: "المرحلة 3 — الأسابيع 7–12", items: ["العودة إلى الأنشطة اليومية", "تدريب رياضي محدد", "الوقاية من السقوط", "التقييم النهائي"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–3", items: ["Redukcja bólu i leczenie obrzęku", "Mobilizacja bierna i czynna-wspomagana", "Trening chodu z pomocami ortopedycznymi", "Drenaż limfatyczny w razie potrzeby"] },
        { label: "Faza 2 — Tygodnie 4–6", items: ["Wzmacnianie mięśni (odwodziciele biodra, pośladkowe)", "Koordynacja i równowaga", "Chód bez pomocy", "Wchodzenie po schodach"] },
        { label: "Faza 3 — Tygodnie 7–12", items: ["Powrót do codziennych aktywności", "Trening sportowy", "Profilaktyka upadków", "Ocena końcowa"] },
      ],
    },
  },

  knee: {
    icon: Activity,
    color: "from-[#76b82a] to-[#5c9120]",
    iconBg: "bg-[#76b82a]/10",
    iconColor: "text-[#76b82a]",
    weeks: "8–14",
    title: {
      de: "Knieprothese (TEP)", fr: "Prothèse de Genou (PTG)", en: "Knee Replacement",
      nl: "Knieprothese", tr: "Diz Protezi", ar: "بدلة الركبة", pl: "Endoproteza kolana",
    },
    subtitle: {
      de: "Mobilität und Schmerzfreiheit nach Knie-TEP", fr: "Mobilité et absence de douleur après PTG",
      en: "Mobility and pain relief after knee replacement", nl: "Mobiliteit en pijnverlichting na knieprothese",
      tr: "Diz protezi sonrası hareketlilik ve ağrı giderme", ar: "الحركة وتخفيف الألم بعد بدلة الركبة", pl: "Mobilność i ulga w bólu po endoprotezie kolana",
    },
    surgeryExplain: {
      de: "Bei einer Knie-Totalendoprothese wird das abgenutzte Kniegelenk durch eine Metalllegierung und Polyethylen ersetzt, die die natürliche Gelenkfläche nachahmen. Der Eingriff dauert etwa 1–2 Stunden und wird meistens bei schwerer Gonarthrose durchgeführt. Das neue Gelenk kann bei guter Nachsorge 15–25 Jahre halten. Eine strukturierte Rehabilitation ist entscheidend: Das Kniegelenk muss nach dem Eingriff aktiv 'umprogrammiert' werden, damit Muskeln und Nervensystem wieder harmonisch zusammenarbeiten.",
      fr: "Dans une prothèse totale de genou, l'articulation usée est remplacée par un alliage métallique et du polyéthylène qui imitent la surface articulaire naturelle. L'intervention dure environ 1–2 heures et est le plus souvent réalisée en cas de gonarthrose sévère. Avec de bons soins, la nouvelle articulation peut durer 15–25 ans. Une rééducation structurée est essentielle : le genou doit être activement « reprogrammé » après l'intervention pour que les muscles et le système nerveux travaillent à nouveau en harmonie.",
      en: "In a total knee replacement, the worn joint is replaced with a metal alloy and polyethylene that mimic the natural joint surface. The procedure lasts about 1–2 hours and is most often performed for severe knee arthritis. With good aftercare, the new joint can last 15–25 years. Structured rehabilitation is crucial: the knee must be actively 're-programmed' after surgery so that muscles and the nervous system work harmoniously again.",
      nl: "Bij een totale knieprothese wordt het versleten gewricht vervangen door een metaallegering en polyethyleen die het natuurlijke gewrichtsoppervlak nabootsen. De ingreep duurt ongeveer 1–2 uur en wordt het vaakst uitgevoerd bij ernstige gonartrose. Met goede nazorg kan het nieuwe gewricht 15–25 jaar meegaan. Gestructureerde revalidatie is cruciaal: de knie moet na de ingreep actief worden 'herprogrammeerd' zodat spieren en zenuwstelsel weer harmonieus samenwerken.",
      tr: "Toplam diz protezinde, aşınmış eklem, doğal eklem yüzeyini taklit eden metal alaşım ve polietilen ile değiştirilir. Prosedür yaklaşık 1–2 saat sürer ve çoğunlukla şiddetli diz artriti için yapılır. İyi bakımla yeni eklem 15–25 yıl dayanabilir. Yapılandırılmış rehabilitasyon çok önemlidir: ameliyat sonrası kas ve sinir sisteminin yeniden uyum içinde çalışması için diz aktif olarak 'yeniden programlanmalıdır'.",
      ar: "في بدلة الركبة الكلية، يُستبدل المفصل البالي بسبيكة معدنية وبولي إيثيلين تحاكي سطح المفصل الطبيعي. تستغرق العملية حوالي 1–2 ساعة وتُجرى في الغالب لالتهاب الركبة الشديد. مع الرعاية الجيدة، يمكن للمفصل الجديد أن يدوم 15–25 سنة. إعادة التأهيل المنظمة أمر بالغ الأهمية: يجب إعادة 'برمجة' الركبة بنشاط بعد الجراحة.",
      pl: "W całkowitej endoprotezie kolana zużyty staw jest zastępowany stopem metalu i polietylenem naśladującym naturalną powierzchnię stawową. Zabieg trwa około 1–2 godziny i najczęściej przeprowadzany jest przy ciężkiej gonartrozie. Przy dobrej opiece nowy staw może wytrzymać 15–25 lat. Ustrukturyzowana rehabilitacja jest kluczowa: kolano musi być aktywnie 'przeprogramowane' po zabiegu.",
    },
    whyRehab: {
      de: ["Schnellere Wiederherstellung der Knieflexion (Ziel: 90°+)", "Quadrizeps-Atrophie verhindern und umkehren", "Schmerzkontrolle ohne exzessive Medikation", "Gangbild normalisieren", "Sturzrisiko minimieren"],
      fr: ["Restaurer plus rapidement la flexion du genou (objectif : 90°+)", "Prévenir et inverser l'atrophie du quadriceps", "Contrôle de la douleur sans médication excessive", "Normaliser le schéma de marche", "Minimiser le risque de chute"],
      en: ["Faster restoration of knee flexion (goal: 90°+)", "Prevent and reverse quadriceps atrophy", "Pain control without excessive medication", "Normalise gait pattern", "Minimise fall risk"],
      nl: ["Snellere herstel van knieflexie (doel: 90°+)", "Quadricepsatrofie voorkomen en omkeren", "Pijncontrole zonder overmatige medicatie", "Looppatroon normaliseren", "Valrisico minimaliseren"],
      tr: ["Diz fleksiyonunun daha hızlı geri kazanılması (hedef: 90°+)", "Quadriseps atrofisini önleme ve tersine çevirme", "Aşırı ilaç kullanmadan ağrı kontrolü", "Yürüyüş düzenini normalleştirme", "Düşme riskini en aza indirme"],
      ar: ["استعادة أسرع لثني الركبة (الهدف: 90°+)", "منع وعكس ضمور عضلة الرباعية", "التحكم في الألم دون أدوية مفرطة", "تطبيع نمط المشي", "تقليل خطر السقوط"],
      pl: ["Szybsze przywrócenie zgięcia kolana (cel: 90°+)", "Zapobieganie i odwracanie zaniku czworogłowego", "Kontrola bólu bez nadmiernego leczenia", "Normalizacja wzorca chodu", "Minimalizacja ryzyka upadku"],
    },
    objectives: {
      de: ["120°+ Knieflexion für normales Sitzen", "Vollständige Knieextension", "Schmerzfreies Gehen auf flachem Untergrund", "Treppensteigen beidbeinig", "Leichte Sportarten (Schwimmen, Aqua-Jogging, Rad)"],
      fr: ["120°+ de flexion du genou pour une assise normale", "Extension complète du genou", "Marche sans douleur sur surface plane", "Montée d'escaliers à deux jambes", "Sports légers (natation, aqua-jogging, vélo)"],
      en: ["120°+ knee flexion for normal sitting", "Full knee extension", "Pain-free walking on flat ground", "Two-legged stair climbing", "Light sport (swimming, aqua-jogging, cycling)"],
      nl: ["120°+ knieflexie voor normaal zitten", "Volledige knie-extensie", "Pijnvrij lopen op vlakke ondergrond", "Traplopen met twee benen", "Lichte sporten (zwemmen, aquajogging, fietsen)"],
      tr: ["Normal oturma için 120°+ diz fleksiyonu", "Tam diz ekstansiyonu", "Düz zeminde ağrısız yürüme", "İki bacakla merdiven çıkma", "Hafif spor (yüzme, aqua-jogging, bisiklet)"],
      ar: ["ثني الركبة 120°+ للجلوس الطبيعي", "امتداد الركبة الكامل", "المشي بدون ألم على أرض مستوية", "صعود السلالم بساقين", "الرياضة الخفيفة (سباحة، ركوب دراجة)"],
      pl: ["Zgięcie kolana 120°+ do normalnego siedzenia", "Pełny wyprost kolana", "Bezbolesny chód po płaskiej nawierzchni", "Wchodzenie po schodach obunóż", "Lekki sport (pływanie, aqua-jogging, rower)"],
    },
    whatToExpect: {
      de: [
        { heading: "Woche 1–2: Frühe Erholung", text: "Schmerzen und Schwellungen sind in dieser Phase am stärksten. Die Kniebeugung ist auf 40–60° begrenzt. Gehhilfen sind notwendig. Die Physiotherapie beginnt sofort nach der Operation mit passiver Mobilisation." },
        { heading: "Woche 3–8: Aufbau der Beweglichkeit", text: "Die Kniebeugung verbessert sich schrittweise. Ziel: 90° bis Woche 6. Kräftigungsübungen beginnen. Die meisten Patienten können mit einem Stock oder ohne Hilfsmittel gehen. Das Fahrradergometer ist freigegeben." },
        { heading: "Woche 9–14: Funktionelle Rehabilitation", text: "Treppensteigen, Kniebeugen, Sport-spezifisches Training. Das Ziel sind 120° Kniebeugung. Die Schmerzen sind im Alltag minimal. Schwimmen und Radfahren zur Stärkung des Herzkreislaufsystems." },
      ],
      fr: [
        { heading: "Semaines 1–2 : Récupération précoce", text: "Les douleurs et gonflements sont les plus intenses à ce stade. La flexion du genou est limitée à 40–60°. Des cannes sont nécessaires. La kiné commence immédiatement après l'opération avec une mobilisation passive." },
        { heading: "Semaines 3–8 : Restauration de la mobilité", text: "La flexion du genou s'améliore progressivement. Objectif : 90° à la semaine 6. Les exercices de renforcement commencent. La plupart des patients peuvent marcher avec une canne ou sans aide. Le vélo ergomètre est autorisé." },
        { heading: "Semaines 9–14 : Rééducation fonctionnelle", text: "Escaliers, demi-squats, entraînement sport-spécifique. L'objectif est une flexion de 120°. Les douleurs sont minimes au quotidien. Natation et vélo pour renforcer le système cardiovasculaire." },
      ],
      en: [
        { heading: "Weeks 1–2: Early Recovery", text: "Pain and swelling are strongest at this stage. Knee flexion is limited to 40–60°. Walking aids are necessary. Physiotherapy starts immediately after surgery with passive mobilisation." },
        { heading: "Weeks 3–8: Restoring Mobility", text: "Knee flexion improves gradually. Goal: 90° by week 6. Strengthening exercises begin. Most patients can walk with one stick or without aids. Cycling ergometer is cleared." },
        { heading: "Weeks 9–14: Functional Rehabilitation", text: "Stair climbing, squats, sport-specific training. Target: 120° knee flexion. Pain is minimal in daily life. Swimming and cycling to strengthen the cardiovascular system." },
      ],
      nl: [
        { heading: "Weken 1–2: Vroeg Herstel", text: "Pijn en zwelling zijn in dit stadium het sterkst. Knieflexie is beperkt tot 40–60°. Loophulpmiddelen zijn noodzakelijk. Fysiotherapie begint onmiddellijk na de operatie met passieve mobilisatie." },
        { heading: "Weken 3–8: Mobiliteit Herstellen", text: "Knieflexie verbetert geleidelijk. Doel: 90° tegen week 6. Versterkingsoefeningen beginnen. De meeste patiënten kunnen lopen met een wandelstok of zonder hulpmiddelen. Fietsergometer is vrijgegeven." },
        { heading: "Weken 9–14: Functionele Revalidatie", text: "Traplopen, squats, sportspecifieke training. Doel: 120° knieflexie. Pijn is minimaal in het dagelijks leven. Zwemmen en fietsen om het cardiovasculaire systeem te versterken." },
      ],
      tr: [
        { heading: "Haftalar 1–2: Erken İyileşme", text: "Bu aşamada ağrı ve şişlik en şiddetlidir. Diz fleksiyonu 40–60° ile sınırlıdır. Yürüme yardımcıları gereklidir. Fizyoterapi, pasif mobilizasyon ile ameliyattan hemen sonra başlar." },
        { heading: "Haftalar 3–8: Hareketliliği Yeniden Kazanma", text: "Diz fleksiyonu kademeli olarak iyileşir. Hedef: Hafta 6'ya kadar 90°. Güçlendirme egzersizleri başlar. Çoğu hasta bir baston veya yardımcı cihaz olmadan yürüyebilir. Bisiklet ergometresi serbest bırakılır." },
        { heading: "Haftalar 9–14: Fonksiyonel Rehabilitasyon", text: "Merdiven çıkma, çömelme, spora özgü antrenman. Hedef: 120° diz fleksiyonu. Günlük yaşamda ağrı minimumdur. Kardiyovasküler sistemi güçlendirmek için yüzme ve bisiklet." },
      ],
      ar: [
        { heading: "الأسابيع 1–2: التعافي المبكر", text: "الألم والتورم في أشد مراحلهما. يقتصر ثني الركبة على 40–60°. المساعدات ضرورية. يبدأ العلاج الطبيعي مباشرة بعد الجراحة بالتعبئة السلبية." },
        { heading: "الأسابيع 3–8: استعادة الحركة", text: "يتحسن ثني الركبة تدريجياً. الهدف: 90° بحلول الأسبوع 6. تبدأ تمارين التقوية. معظم المرضى يمشون بعصا أو بدون مساعدات. الدراجة الارغومترية مسموح بها." },
        { heading: "الأسابيع 9–14: إعادة التأهيل الوظيفي", text: "صعود السلالم، القرفصاء، تدريب رياضي محدد. الهدف: ثني الركبة 120°. الألم ضئيل في الحياة اليومية. السباحة وركوب الدراجة لتقوية الجهاز القلبي الوعائي." },
      ],
      pl: [
        { heading: "Tygodnie 1–2: Wczesne Wyzdrowienie", text: "Ból i obrzęk są najsilniejsze na tym etapie. Zgięcie kolana jest ograniczone do 40–60°. Pomoce ortopedyczne są konieczne. Fizjoterapia zaczyna się bezpośrednio po operacji z bierną mobilizacją." },
        { heading: "Tygodnie 3–8: Przywracanie Mobilności", text: "Zgięcie kolana poprawia się stopniowo. Cel: 90° do tygodnia 6. Rozpoczynają się ćwiczenia wzmacniające. Większość pacjentów chodzi z laską lub bez pomocy. Ergometr rowerowy jest dozwolony." },
        { heading: "Tygodnie 9–14: Funkcjonalna Rehabilitacja", text: "Wchodzenie po schodach, przysiady, trening sportowy. Cel: 120° zgięcia kolana. Ból jest minimalny w życiu codziennym. Pływanie i jazda na rowerze dla układu krążenia." },
      ],
    },
    risks: {
      de: ["Dauerhafter Kraftverlust im Quadrizeps", "Kontraktur und Bewegungseinschränkung", "Erhöhtes Thromboserisiko bei Immobilität", "Längere Schmerzdauer und Abhängigkeit von Schmerzmitteln"],
      fr: ["Perte de force permanente dans le quadriceps", "Contracture et limitation des mouvements", "Risque accru de thrombose en cas d'immobilité", "Douleur prolongée et dépendance aux antidouleurs"],
      en: ["Permanent quadriceps strength loss", "Contracture and range of motion restriction", "Increased thrombosis risk with immobility", "Prolonged pain and painkiller dependency"],
      nl: ["Permanent krachtverlies in de quadriceps", "Contractuur en bewegingsbeperking", "Verhoogd tromboserisico bij immobiliteit", "Langdurige pijn en afhankelijkheid van pijnstillers"],
      tr: ["Quadrisepste kalıcı güç kaybı", "Kontraktür ve hareket kısıtlılığı", "Hareketsizlikte artan tromboz riski", "Uzun süreli ağrı ve ağrı kesici bağımlılığı"],
      ar: ["فقدان دائم لقوة عضلة الرباعية", "تقلص وتقييد الحركة", "زيادة خطر الجلطة مع قلة الحركة", "ألم مطول والاعتماد على مسكنات الألم"],
      pl: ["Trwała utrata siły czworogłowego", "Przykurcz i ograniczenie zakresu ruchu", "Zwiększone ryzyko zakrzepicy przy unieruchomieniu", "Przedłużony ból i uzależnienie od leków przeciwbólowych"],
    },
  },

  acl: {
    icon: Zap,
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    weeks: "9–12",
    title: {
      de: "Kreuzband (VKB)", fr: "Ligament Croisé (LCA)", en: "ACL Reconstruction",
      nl: "Voorste Kruisband", tr: "Ön Çapraz Bağ", ar: "الرباط الصليبي الأمامي", pl: "Więzadło Krzyżowe Przednie",
    },
    subtitle: {
      de: "Sicherer Return-to-Sport nach VKB-Rekonstruktion", fr: "Retour au sport sécurisé après reconstruction du LCA",
      en: "Safe return to sport after ACL reconstruction", nl: "Veilige terugkeer naar sport na VKB-reconstructie",
      tr: "ÖÇB rekonstrüksiyonu sonrası güvenli spora dönüş", ar: "العودة الآمنة للرياضة بعد إعادة بناء الرباط الصليبي", pl: "Bezpieczny powrót do sportu po rekonstrukcji ACL",
    },
    surgeryExplain: {
      de: "Das vordere Kreuzband (VKB) ist eines der wichtigsten Stabilisatoren des Kniegelenks. Bei einer Ruptur — häufig bei Richtungswechseln, Sprüngen oder Kontaktsport — wird das Band operativ mit einem Transplantat (Hamstrings oder Patellasehne) rekonstruiert. Die VKB-Rekonstruktion ist ein anspruchsvoller Eingriff, der 6–9 Monate Rehabilitation erfordert. Statistisch verletzt 1 von 3 Patienten ohne adäquate Rehabilitation das andere Knie innerhalb von 5 Jahren.",
      fr: "Le ligament croisé antérieur (LCA) est l'un des principaux stabilisateurs du genou. En cas de rupture — souvent lors de changements de direction, de sauts ou de sports de contact — le ligament est reconstruit chirurgicalement avec un greffon (ischio-jambiers ou tendon rotulien). La reconstruction du LCA est une intervention exigeante qui nécessite 6–9 mois de rééducation. Statistiquement, 1 patient sur 3 sans rééducation adéquate se blesse à l'autre genou dans les 5 ans.",
      en: "The anterior cruciate ligament (ACL) is one of the knee's main stabilisers. When ruptured — often during direction changes, jumps, or contact sports — the ligament is surgically reconstructed using a graft (hamstrings or patellar tendon). ACL reconstruction is a demanding procedure requiring 6–9 months of rehabilitation. Statistically, 1 in 3 patients without adequate rehab injures the other knee within 5 years.",
      nl: "Het voorste kruisband (VKB) is een van de belangrijkste stabilisatoren van het kniegewricht. Bij een ruptuur — vaak bij richtingsveranderingen, sprongen of contactsporten — wordt het band operatief gereconstrueerd met een transplantaat (hamstrings of patellapeesje). VKB-reconstructie is een veeleisende ingreep die 6–9 maanden revalidatie vereist. Statistisch gezien verwondt 1 op de 3 patiënten zonder adequate revalidatie de andere knie binnen 5 jaar.",
      tr: "Ön çapraz bağ (ÖÇB), dizin ana stabilizatörlerinden biridir. Yırtıldığında — genellikle yön değiştirme, sıçrama veya temaslı sporlarda — bağ, bir greft (hamstring veya patella tendonu) kullanılarak cerrahi olarak yeniden yapılandırılır. ÖÇB rekonstrüksiyonu, 6–9 ay rehabilitasyon gerektiren zorlu bir prosedürdür.",
      ar: "الرباط الصليبي الأمامي هو أحد أهم مثبتات مفصل الركبة. عند تمزقه — غالباً أثناء تغيير الاتجاه أو القفز أو الرياضات التلاملسية — يُعاد بناء الرباط جراحياً باستخدام طعم. إعادة بناء الرباط الصليبي إجراء صعب يتطلب 6–9 أشهر من إعادة التأهيل.",
      pl: "Więzadło krzyżowe przednie (ACL) jest jednym z głównych stabilizatorów stawu kolanowego. Przy zerwaniu — często podczas zmian kierunku, skoków lub sportów kontaktowych — więzadło jest chirurgicznie rekonstruowane przy użyciu przeszczepu (mięśnie kulszowo-goleniowe lub więzadło rzepki). Rekonstrukcja ACL to wymagający zabieg wymagający 6–9 miesięcy rehabilitacji.",
    },
    whyRehab: {
      de: ["Repariertes Transplantat braucht Zeit zum Einwachsen (Ligamentisierung 9–12 Monate)", "Neuromuskuläre Kontrolle und Propriozeption wiederherstellen", "Muskelungleichgewichte korrigieren (Hamstrings/Quadrizeps-Verhältnis)", "Return-to-Sport-Kriterien validieren (Kraft, Stabilität, Psychologie)", "Re-Ruptur-Risiko von 25% ohne Protokoll auf unter 5% senken"],
      fr: ["Le greffon réparé a besoin de temps pour s'intégrer (ligamentisation 9–12 mois)", "Restaurer le contrôle neuromusculaire et la proprioception", "Corriger les déséquilibres musculaires (ratio ischio-jambiers/quadriceps)", "Valider les critères de retour au sport (force, stabilité, psychologie)", "Réduire le risque de re-rupture de 25% sans protocole à moins de 5%"],
      en: ["Repaired graft needs time to integrate (ligamentisation 9–12 months)", "Restore neuromuscular control and proprioception", "Correct muscle imbalances (hamstrings/quadriceps ratio)", "Validate return-to-sport criteria (strength, stability, psychology)", "Reduce re-rupture risk from 25% without protocol to under 5%"],
      nl: ["Gerepareerd transplantaat heeft tijd nodig om in te groeien (ligamentisatie 9–12 maanden)", "Neuromusculaire controle en proprioceptie herstellen", "Spieronbalansen corrigeren (hamstrings/quadriceps verhouding)", "Return-to-sport criteria valideren (kracht, stabiliteit, psychologie)", "Re-ruptuurrisico verlagen van 25% zonder protocol naar onder 5%"],
      tr: ["Onarılmış greft entegrasyon için zamana ihtiyaç duyar (ligamentizasyon 9–12 ay)", "Nöromüsküler kontrol ve propriosepsiyonu yeniden kazanma", "Kas dengesizliklerini düzeltme (hamstring/quadriseps oranı)", "Spora dönüş kriterlerini doğrulama (güç, stabilite, psikoloji)", "Protokol olmadan %25 olan yeniden yırtılma riskini %5'in altına indirme"],
      ar: ["الطعم المُرمَّم يحتاج وقتاً للتكامل (الترباط 9–12 شهراً)", "استعادة التحكم العصبي العضلي والإحساس العميق", "تصحيح الاختلالات العضلية (نسبة الوتر المأبضي/الرباعية)", "التحقق من معايير العودة للرياضة (القوة، الاستقرار، النفسية)", "تقليل خطر إعادة التمزق من 25% بدون بروتوكول إلى أقل من 5%"],
      pl: ["Naprawiony przeszczep potrzebuje czasu na integrację (ligamentyzacja 9–12 miesięcy)", "Przywrócenie kontroli nerwowo-mięśniowej i propriocepcji", "Korekcja nierównowagi mięśniowej (stosunek kulszowo-goleniowy/czworogłowy)", "Walidacja kryteriów powrotu do sportu (siła, stabilność, psychologia)", "Redukcja ryzyka ponownego zerwania z 25% bez protokołu do poniżej 5%"],
    },
    objectives: {
      de: ["Gleiche Muskelkraft beider Beine (>90% Symmetrie)", "Volle Kniestabilität bei Richtungswechseln", "Single-Leg-Hop-Test: >90% Symmetrie", "Schmerzfreies Laufen und Springen", "Psychologische Bereitschaft zur Sportrückkehr"],
      fr: ["Force musculaire symétrique des deux jambes (>90% de symétrie)", "Pleine stabilité du genou lors des changements de direction", "Test de saut unipodal : >90% de symétrie", "Course et sauts sans douleur", "Préparation psychologique au retour sportif"],
      en: ["Symmetrical muscle strength in both legs (>90% symmetry)", "Full knee stability during direction changes", "Single-leg hop test: >90% symmetry", "Pain-free running and jumping", "Psychological readiness for return to sport"],
      nl: ["Symmetrische spierkracht in beide benen (>90% symmetrie)", "Volledige kniestabiliteit bij richtingsveranderingen", "Single-leg hop test: >90% symmetrie", "Pijnvrij lopen en springen", "Psychologische bereidheid voor terugkeer naar sport"],
      tr: ["Her iki bacakta simetrik kas gücü (>%90 simetri)", "Yön değiştirmede tam diz stabilitesi", "Tek bacak hop testi: >%90 simetri", "Ağrısız koşu ve sıçrama", "Spora dönüş için psikolojik hazırlık"],
      ar: ["قوة عضلية متماثلة في كلا الساقين (>90% تماثل)", "استقرار الركبة الكامل عند تغيير الاتجاه", "اختبار القفز بساق واحدة: >90% تماثل", "الجري والقفز بدون ألم", "الاستعداد النفسي للعودة للرياضة"],
      pl: ["Symetryczna siła mięśniowa obu nóg (>90% symetrii)", "Pełna stabilność kolana podczas zmian kierunku", "Test skoku jednonożnego: >90% symetrii", "Bezbolesny bieg i skoki", "Gotowość psychologiczna do powrotu do sportu"],
    },
    whatToExpect: {
      de: [
        { heading: "Woche 1–3: Entzündungsphase", text: "Schwellung und Schmerzen sind normal. Ziel ist die vollständige Streckung des Knies (0°) und die Aktivierung des Quadrizeps. Sie werden mit Krücken oder ohne laufen, je nach Protokoll des Chirurgen. Die Physiotherapie beginnt sofort." },
        { heading: "Woche 4–12: Aufbauphase", text: "Das Transplantat ist in seiner schwächsten Phase (Ligamentisierungsprozess). Kräftigung, Propriozeption und kontrollierte Belastung sind die Schwerpunkte. Laufen ist ab Woche 12 möglich (gerade Strecken). BFR-Training wird eingesetzt, um den Muskelaufbau zu beschleunigen." },
        { heading: "Monat 4–9: Return-to-Sport-Phase", text: "Richtungswechsel, Springen, und sportspezifisches Training. Regelmäßige Tests (Kraft, Hop-Tests) bestimmen die Freigabe. Die psychologische Vorbereitung ist in dieser Phase genauso wichtig wie die körperliche." },
      ],
      fr: [
        { heading: "Semaines 1–3 : Phase inflammatoire", text: "Gonflement et douleurs sont normaux. L'objectif est la pleine extension du genou (0°) et l'activation du quadriceps. Vous marcherez avec ou sans cannes selon le protocole du chirurgien. La kiné commence immédiatement." },
        { heading: "Semaines 4–12 : Phase de consolidation", text: "Le greffon est à sa phase la plus fragile (processus de ligamentisation). Renforcement, proprioception et mise en charge contrôlée sont les points clés. La course est possible à partir de la semaine 12 (lignes droites). La BFR est utilisée pour accélérer le développement musculaire." },
        { heading: "Mois 4–9 : Phase de retour au sport", text: "Changements de direction, sauts, et entraînement sport-spécifique. Des tests réguliers (force, hop-tests) déterminent l'autorisation. La préparation psychologique est aussi importante que la préparation physique à ce stade." },
      ],
      en: [
        { heading: "Weeks 1–3: Inflammatory Phase", text: "Swelling and pain are normal. The goal is full knee extension (0°) and quadriceps activation. You'll walk with or without crutches depending on the surgeon's protocol. Physiotherapy begins immediately." },
        { heading: "Weeks 4–12: Building Phase", text: "The graft is in its weakest phase (ligamentisation process). Strengthening, proprioception and controlled loading are the focus. Running is possible from week 12 (straight lines). BFR training is used to accelerate muscle development." },
        { heading: "Months 4–9: Return-to-Sport Phase", text: "Direction changes, jumping, and sport-specific training. Regular tests (strength, hop-tests) determine clearance. Psychological preparation is as important as physical at this stage." },
      ],
      nl: [
        { heading: "Weken 1–3: Ontstekingsfase", text: "Zwelling en pijn zijn normaal. Het doel is volledige knie-extensie (0°) en quadricepsactivering. U loopt met of zonder krukken afhankelijk van het protocol van de chirurg. Fysiotherapie begint onmiddellijk." },
        { heading: "Weken 4–12: Opbouwfase", text: "Het transplantaat bevindt zich in de zwakste fase (ligamentisatieproces). Versterking, proprioceptie en gecontroleerde belasting zijn de focus. Lopen is mogelijk vanaf week 12 (rechte lijnen). BFR-training wordt gebruikt om spierkracht te versnellen." },
        { heading: "Maanden 4–9: Return-to-Sport Fase", text: "Richtingsveranderingen, springen en sportspecifieke training. Regelmatige tests (kracht, hop-tests) bepalen de vrijgave. Psychologische voorbereiding is in dit stadium even belangrijk als fysieke." },
      ],
      tr: [
        { heading: "Haftalar 1–3: Enflamasyon Fazı", text: "Şişlik ve ağrı normaldir. Hedef, tam diz ekstansiyonu (0°) ve quadriseps aktivasyonudur. Cerrahın protokolüne bağlı olarak koltuk değneği ile veya olmadan yürüyeceksiniz. Fizyoterapi hemen başlar." },
        { heading: "Haftalar 4–12: İnşa Fazı", text: "Greft en zayıf fazındadır (ligamentizasyon süreci). Güçlendirme, propriosepsiyon ve kontrollü yükleme odak noktalarıdır. Koşu, hafta 12'den itibaren mümkündür (düz hatlar). Kas gelişimini hızlandırmak için BFR eğitimi kullanılır." },
        { heading: "Aylar 4–9: Spora Dönüş Fazı", text: "Yön değiştirme, sıçrama ve spora özgü antrenman. Düzenli testler (güç, hop testleri) onayı belirler. Bu aşamada psikolojik hazırlık fiziksel kadar önemlidir." },
      ],
      ar: [
        { heading: "الأسابيع 1–3: مرحلة الالتهاب", text: "التورم والألم طبيعيان. الهدف هو امتداد الركبة الكامل (0°) وتنشيط الرباعية. ستمشي مع أو بدون عكازات حسب بروتوكول الجراح. يبدأ العلاج الطبيعي فوراً." },
        { heading: "الأسابيع 4–12: مرحلة البناء", text: "الطعم في أضعف مراحله (عملية الترباط). التقوية والإحساس العميق والتحميل الخاضع للرقابة هي المحاور. الجري ممكن من الأسبوع 12 (خطوط مستقيمة). يُستخدم تدريب BFR لتسريع نمو العضلات." },
        { heading: "الأشهر 4–9: مرحلة العودة للرياضة", text: "تغيير الاتجاه، القفز، والتدريب الرياضي المحدد. تحدد الاختبارات المنتظمة (القوة، اختبارات القفز) الإذن بالعودة. الاستعداد النفسي مهم بنفس القدر الجسدي في هذه المرحلة." },
      ],
      pl: [
        { heading: "Tygodnie 1–3: Faza Zapalna", text: "Obrzęk i ból są normalne. Celem jest pełny wyprost kolana (0°) i aktywacja czworogłowego. Będziesz chodził z kulami lub bez, zależnie od protokołu chirurga. Fizjoterapia zaczyna się natychmiast." },
        { heading: "Tygodnie 4–12: Faza Budowania", text: "Przeszczep jest w najsłabszej fazie (proces ligamentyzacji). Wzmacnianie, propriocepcja i kontrolowane obciążenie są w centrum uwagi. Bieg jest możliwy od tygodnia 12 (proste linie). Trening BFR przyspiesza rozwój mięśni." },
        { heading: "Miesiące 4–9: Faza Powrotu do Sportu", text: "Zmiany kierunku, skoki i trening sportowy. Regularne testy (siła, hop-testy) określają dopuszczenie. Przygotowanie psychologiczne jest równie ważne jak fizyczne na tym etapie." },
      ],
    },
    risks: {
      de: ["Re-Ruptur-Risiko bis zu 25% ohne strukturiertes Protokoll", "Chronische Instabilität und frühzeitige Arthrose", "Kompensationsverletzungen am anderen Knie oder der Hüfte", "Psychologische Barrieren ('Angst vor dem Wiederspielen')"],
      fr: ["Risque de re-rupture jusqu'à 25% sans protocole structuré", "Instabilité chronique et arthrose précoce", "Blessures compensatoires à l'autre genou ou la hanche", "Barrières psychologiques ('fear of re-injury')"],
      en: ["Re-rupture risk up to 25% without structured protocol", "Chronic instability and early arthritis", "Compensatory injuries to the other knee or hip", "Psychological barriers ('fear of re-injury')"],
      nl: ["Re-ruptuurrisico tot 25% zonder gestructureerd protocol", "Chronische instabiliteit en vroege artrose", "Compensatieblessures aan de andere knie of heup", "Psychologische barrières ('fear of re-injury')"],
      tr: ["Yapılandırılmış protokol olmadan %25'e kadar yeniden yırtılma riski", "Kronik instabilite ve erken artrit", "Diğer diz veya kalçada kompansatuar yaralanmalar", "Psikolojik engeller ('yeniden sakatlanma korkusu')"],
      ar: ["خطر إعادة التمزق حتى 25% بدون بروتوكول منظم", "عدم الاستقرار المزمن والتهاب المفاصل المبكر", "إصابات تعويضية في الركبة أو الورك الأخرى", "العوائق النفسية ('الخوف من إعادة الإصابة')"],
      pl: ["Ryzyko ponownego zerwania do 25% bez ustrukturyzowanego protokołu", "Przewlekła niestabilność i wczesna artoza", "Urazy kompensacyjne w drugim kolanie lub biodrze", "Bariery psychologiczne ('strach przed ponownym urazem')"],
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–3", items: ["Schmerz- & Schwellungsmanagement", "Volle Knieextension wiederherstellen", "Quadrizepsaktivierung (EMS optional)", "Gangschule ohne Gehhilfen"] },
        { label: "Phase 2 — Woche 4–9", items: ["Kräftigung: Squat, Leg Press, Step-up", "Neuromuskuläres Training & Propriozeption", "Laufen (gerades Laufen ab Wk. 12)", "Blood Flow Restriction (BFR) Training"] },
        { label: "Phase 3 — Woche 10+", items: ["Richtungswechsel & Sprünge", "Sport-spezifische Übungen", "Return-to-Sport-Tests (Einbeinsprünge, KTS)", "Psychologische Vorbereitung auf Return"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–3", items: ["Gestion de la douleur & de l'œdème", "Restauration de la pleine extension", "Activation du quadriceps (EMS optionnel)", "Marche sans cannes"] },
        { label: "Phase 2 — Semaines 4–9", items: ["Renforcement : squat, presse, step-up", "Travail neuromusculaire & proprioception", "Course (ligne droite dès sem. 12)", "Blood Flow Restriction (BFR)"] },
        { label: "Phase 3 — Semaine 10+", items: ["Changements de direction & sauts", "Exercices sport-spécifiques", "Tests de retour au sport (saut unipodal, KTS)", "Préparation psychologique au retour"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–3", items: ["Pain & swelling management", "Restore full knee extension", "Quadriceps activation (EMS optional)", "Walking without aids"] },
        { label: "Phase 2 — Weeks 4–9", items: ["Strengthening: squat, leg press, step-up", "Neuromuscular training & proprioception", "Running (straight line from week 12)", "Blood Flow Restriction (BFR) training"] },
        { label: "Phase 3 — Week 10+", items: ["Direction changes & jumps", "Sport-specific exercises", "Return-to-sport tests (single-leg hop, KTS)", "Psychological return-to-sport preparation"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–3", items: ["Pijn- & zwellingsmanagement", "Volledig knie-extensie herstellen", "Quadricepsactivering (EMS optioneel)", "Lopen zonder hulpmiddelen"] },
        { label: "Fase 2 — Weken 4–9", items: ["Versterking: squat, beenpers, step-up", "Neuromusculaire training & proprioceptie", "Lopen (rechte lijn vanaf week 12)", "Blood Flow Restriction (BFR) training"] },
        { label: "Fase 3 — Week 10+", items: ["Richtingsveranderingen & sprongen", "Sportspecifieke oefeningen", "Return-to-sport tests (éénbenige sprong, KTS)", "Psychologische voorbereiding"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–3", items: ["Ağrı & şişlik yönetimi", "Tam diz ekstansiyonunu geri kazanma", "Quadriseps aktivasyonu (EMS opsiyonel)", "Yardımcı cihaz olmadan yürüme"] },
        { label: "Faz 2 — Haftalar 4–9", items: ["Güçlendirme: squat, bacak presi, step-up", "Nöromüsküler antrenman & propriosepsiyon", "Koşu (hafta 12'den itibaren düz hat)", "Kan Akışı Kısıtlama (BFR) antrenmanı"] },
        { label: "Faz 3 — Hafta 10+", items: ["Yön değiştirme & sıçramalar", "Spora özgü egzersizler", "Spora dönüş testleri (tek bacak sıçrama, KTS)", "Psikolojik hazırlık"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–3", items: ["إدارة الألم والتورم", "استعادة امتداد الركبة الكامل", "تنشيط عضلة الرباعية (EMS اختياري)", "المشي بدون مساعدات"] },
        { label: "المرحلة 2 — الأسابيع 4–9", items: ["التقوية: قرفصاء، ضغط الساق، step-up", "تدريب عصبي عضلي وإحساس عميق", "الجري (خط مستقيم من الأسبوع 12)", "تدريب BFR"] },
        { label: "المرحلة 3 — الأسبوع 10+", items: ["تغيير الاتجاه والقفز", "تمارين رياضية محددة", "اختبارات العودة للرياضة", "التحضير النفسي للعودة"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–3", items: ["Zarządzanie bólem i obrzękiem", "Przywrócenie pełnego wyprostu kolana", "Aktywacja czworogłowego (EMS opcjonalnie)", "Chód bez pomocy"] },
        { label: "Faza 2 — Tygodnie 4–9", items: ["Wzmacnianie: przysiad, prasa nożna, step-up", "Trening nerwowo-mięśniowy i propriocepcja", "Bieg (linia prosta od tygodnia 12)", "Trening BFR"] },
        { label: "Faza 3 — Tydzień 10+", items: ["Zmiany kierunku i skoki", "Ćwiczenia sportowe", "Testy powrotu do sportu (skok jednonożny, KTS)", "Psychologiczne przygotowanie do powrotu"] },
      ],
    },
  },

  shoulder: {
    icon: Shield,
    color: "from-teal-600 to-teal-800",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    weeks: "8–16",
    title: {
      de: "Schulteroperation", fr: "Chirurgie de l'Épaule", en: "Shoulder Surgery",
      nl: "Schouderoperatie", tr: "Omuz Ameliyatı", ar: "جراحة الكتف", pl: "Operacja barku",
    },
    subtitle: {
      de: "Volle Schulterfunktion nach Operation", fr: "Pleine fonction de l'épaule après chirurgie",
      en: "Full shoulder function after surgery", nl: "Volledige schouderfunctie na operatie",
      tr: "Ameliyat sonrası tam omuz fonksiyonu", ar: "وظيفة الكتف الكاملة بعد الجراحة", pl: "Pełna funkcja barku po operacji",
    },
    surgeryExplain: {
      de: "Schulteroperationen umfassen verschiedene Eingriffe: die Rekonstruktion der Rotatorenmanschette (bei Rissen der Supraspinatussehne), die Bankart-Reparatur (bei Schulterinstabilität und -luxation) sowie die Schulterendoprothese (bei fortgeschrittener Arthrose oder komplexen Frakturen). Das Schultergelenk ist das beweglichste Gelenk des menschlichen Körpers, was die Rehabilitation besonders anspruchsvoll macht: Die richtige Balance zwischen Schutz und Mobilisation muss stets gewahrt werden.",
      fr: "Les chirurgies de l'épaule comprennent diverses interventions : la reconstruction de la coiffe des rotateurs (en cas de déchirures du sus-épineux), la réparation de Bankart (pour l'instabilité et la luxation de l'épaule), ainsi que la prothèse d'épaule (en cas d'arthrose avancée ou de fractures complexes). L'épaule est l'articulation la plus mobile du corps humain, ce qui rend la rééducation particulièrement exigeante : le bon équilibre entre protection et mobilisation doit toujours être maintenu.",
      en: "Shoulder surgeries include various procedures: rotator cuff reconstruction (for supraspinatus tears), Bankart repair (for shoulder instability and dislocation), and shoulder replacement (for advanced arthritis or complex fractures). The shoulder is the most mobile joint in the human body, making rehabilitation particularly demanding: the right balance between protection and mobilisation must always be maintained.",
      nl: "Schouderoperaties omvatten verschillende ingrepen: rotatorenmanchetreconstructie (bij scheuren van de supraspinatus), Bankart-reparatie (bij schouderinstabiliteit en -luxatie), en schouderprothese (bij gevorderde artrose of complexe breuken). De schouder is het meest bewegelijke gewricht in het menselijk lichaam, wat revalidatie bijzonder veeleisend maakt: de juiste balans tussen bescherming en mobilisatie moet altijd bewaard blijven.",
      tr: "Omuz ameliyatları çeşitli prosedürleri kapsar: rotator kaf rekonstrüksiyonu (supraspinatus yırtıkları için), Bankart onarımı (omuz instabilitesi ve luksasyonu için) ve omuz protezi (ilerlemiş artrit veya karmaşık kırıklar için). Omuz, insan vücudunun en hareketli eklemdir; bu da rehabilitasyonu özellikle zorlu kılar.",
      ar: "تشمل عمليات الكتف إجراءات متنوعة: إعادة بناء كفة المدورين (لتمزقات فوق الشوكة)، إصلاح بانكارت (لعدم استقرار الكتف وخلعه)، وبدلة الكتف (لالتهاب المفاصل المتقدم أو الكسور المعقدة). الكتف هو المفصل الأكثر حركة في جسم الإنسان، مما يجعل إعادة التأهيل صعبة بشكل خاص.",
      pl: "Operacje barku obejmują różne zabiegi: rekonstrukcję stożka rotatorów (przy zerwaniach nadgrzebieniowego), naprawę Bankarta (przy niestabilności barku i zwichnięciach) oraz endoprotezę barku (przy zaawansowanej artozie lub złożonych złamaniach). Bark jest najbardziej ruchomym stawem w ludzkim ciele, co sprawia, że rehabilitacja jest szczególnie wymagająca.",
    },
    whyRehab: {
      de: ["Immobilisierungsphase strikt respektieren (Transplantat-Schutz)", "Schulterkapsel-Mobilisation ohne Kompromittierung der Reparatur", "Rotatorenmanschette schrittweise kräftigen", "Skapulatraining für Schulterstabilität", "Vollständige Elevation für Alltagsaktivitäten (Heben, Tragen) wiederherstellen"],
      fr: ["Respecter strictement la phase d'immobilisation (protection du greffon)", "Mobilisation de la capsule sans compromettre la réparation", "Renforcement progressif de la coiffe des rotateurs", "Travail scapulaire pour la stabilité de l'épaule", "Restaurer la pleine élévation pour les activités quotidiennes (lever, porter)"],
      en: ["Strictly respect the immobilisation phase (graft protection)", "Shoulder capsule mobilisation without compromising the repair", "Progressive rotator cuff strengthening", "Scapular training for shoulder stability", "Restore full elevation for daily activities (lifting, carrying)"],
      nl: ["Immobilisatiefase strikt respecteren (transplantaatbescherming)", "Schouderkapsel mobiliseren zonder de reparatie te compromitteren", "Progressieve rotatorenmanchetversterking", "Scapulaire training voor schouderstabiliteit", "Volledige elevatie herstellen voor dagelijkse activiteiten (tillen, dragen)"],
      tr: ["İmmobilizasyon fazına kesinlikle uymak (greft koruması)", "Tamiratı tehlikeye atmadan omuz kapsülü mobilizasyonu", "Rotator kafın aşamalı güçlendirilmesi", "Omuz stabilitesi için skapula eğitimi", "Günlük aktiviteler için tam elevasyonu geri kazanma (kaldırma, taşıma)"],
      ar: ["احترام مرحلة التثبيت بدقة (حماية الطعم)", "تعبئة كبسولة الكتف دون المساس بالإصلاح", "تقوية تدريجية لكفة المدورين", "تدريب لوح الكتف لاستقرار الكتف", "استعادة الرفع الكامل للأنشطة اليومية (رفع، حمل)"],
      pl: ["Ścisłe przestrzeganie fazy unieruchomienia (ochrona przeszczepu)", "Mobilizacja torebki stawowej bez naruszania naprawy", "Stopniowe wzmacnianie stożka rotatorów", "Trening łopatkowy dla stabilności barku", "Przywrócenie pełnej elewacji dla codziennych czynności (podnoszenie, noszenie)"],
    },
    objectives: {
      de: ["Volle aktive Beweglichkeit (180° Elevation)", "Kraft der Rotatorenmanschette ≥ Gegenseite", "Schmerzfreies Tragen von Gegenständen", "Autofahren und Überkopfarbeiten möglich", "Rückkehr zum Sport (nach Chirurgen-Freigabe)"],
      fr: ["Pleine mobilité active (180° d'élévation)", "Force de la coiffe des rotateurs ≥ côté sain", "Porter des objets sans douleur", "Conduire et travailler au-dessus de la tête possible", "Reprise du sport (après accord du chirurgien)"],
      en: ["Full active range of motion (180° elevation)", "Rotator cuff strength ≥ opposite side", "Pain-free carrying of objects", "Driving and overhead work possible", "Return to sport (with surgeon's clearance)"],
      nl: ["Volledige actieve bewegingsvrijheid (180° elevatie)", "Rotatorenmanchetkracht ≥ andere zijde", "Pijnvrij objecten dragen", "Rijden en bovenhoofds werk mogelijk", "Terugkeer naar sport (na goedkeuring chirurg)"],
      tr: ["Tam aktif hareket açıklığı (180° elevasyon)", "Rotator kaf gücü ≥ karşı taraf", "Nesneleri ağrısız taşıma", "Araba kullanma ve baş üstü çalışma mümkün", "Spora dönüş (cerrah onayıyla)"],
      ar: ["مدى حركة نشط كامل (180° رفع)", "قوة كفة المدورين ≥ الجانب الآخر", "حمل الأشياء بدون ألم", "القيادة والعمل فوق الرأس ممكن", "العودة للرياضة (بموافقة الجراح)"],
      pl: ["Pełny aktywny zakres ruchu (180° elewacji)", "Siła stożka rotatorów ≥ strona przeciwna", "Noszenie przedmiotów bez bólu", "Jazda samochodem i praca nad głową możliwa", "Powrót do sportu (za zgodą chirurga)"],
    },
    whatToExpect: {
      de: [
        { heading: "Woche 1–4: Immobilisierungsphase", text: "Die Schulter ist in einer Schlinge fixiert. Ziel ist ausschließlich Schmerzreduktion und Vermeidung von Muskelabbau. Pendel-Übungen und Fingerübungen sind möglich. Der Therapeut arbeitet im Rahmen der chirurgischen Protokolls." },
        { heading: "Woche 5–8: Passive Mobilisation", text: "Der Therapeut mobilisiert die Schulter passiv. Sie nehmen zunehmend aktiv teil. Die Schulterschlinge wird in der Regel nach 4–6 Wochen abgenommen. Schmerzmanagement und Narbenmobilisation sind wichtig." },
        { heading: "Woche 9–16: Kräftigung und Rückkehr", text: "Aktive Mobilisation und gezielte Kräftigung der Rotatorenmanschette. Schulter-spezifische Übungen (Rudern, Schulterdrücken mit leichtem Gewicht). Rückkehr zum Sport erfolgt individuell nach Chirurgen-Freigabe und Test-Kriterien." },
      ],
      fr: [
        { heading: "Semaines 1–4 : Phase d'immobilisation", text: "L'épaule est fixée dans une écharpe. L'objectif est uniquement de réduire la douleur et d'éviter la perte musculaire. Les exercices de pendule et les exercices des doigts sont possibles. Le thérapeute travaille dans le cadre du protocole chirurgical." },
        { heading: "Semaines 5–8 : Mobilisation passive", text: "Le thérapeute mobilise l'épaule passivement. Vous participez de plus en plus activement. L'écharpe est généralement retirée après 4–6 semaines. La gestion de la douleur et la mobilisation cicatricielle sont importantes." },
        { heading: "Semaines 9–16 : Renforcement et retour", text: "Mobilisation active et renforcement ciblé de la coiffe des rotateurs. Exercices spécifiques à l'épaule (rowing, développé épaule avec faible charge). Le retour au sport se fait individuellement selon l'accord du chirurgien et les critères de test." },
      ],
      en: [
        { heading: "Weeks 1–4: Immobilisation Phase", text: "The shoulder is fixed in a sling. The aim is purely pain reduction and preventing muscle loss. Pendulum exercises and finger exercises are possible. The therapist works within the surgical protocol." },
        { heading: "Weeks 5–8: Passive Mobilisation", text: "The therapist mobilises the shoulder passively. You become increasingly active. The sling is usually removed after 4–6 weeks. Pain management and scar mobilisation are important." },
        { heading: "Weeks 9–16: Strengthening and Return", text: "Active mobilisation and targeted rotator cuff strengthening. Shoulder-specific exercises (rowing, shoulder press with light load). Return to sport is individual based on surgeon's clearance and test criteria." },
      ],
      nl: [
        { heading: "Weken 1–4: Immobilisatiefase", text: "De schouder is gefixeerd in een mitella. Het doel is pijnreductie en spierafbraak voorkomen. Pendeloefeningen en vingeroefeningen zijn mogelijk. De therapeut werkt binnen het chirurgisch protocol." },
        { heading: "Weken 5–8: Passieve Mobilisatie", text: "De therapeut mobiliseert de schouder passief. U wordt steeds actiever. De mitella wordt doorgaans na 4–6 weken verwijderd. Pijnmanagement en littekenmobilisatie zijn belangrijk." },
        { heading: "Weken 9–16: Versterking en Terugkeer", text: "Actieve mobilisatie en gerichte rotatorenmanchetversterking. Schouderspecifieke oefeningen (roeien, schouderpersen met licht gewicht). Terugkeer naar sport is individueel op basis van goedkeuring chirurg en testcriteria." },
      ],
      tr: [
        { heading: "Haftalar 1–4: İmmobilizasyon Fazı", text: "Omuz bir askıya sabitlenir. Amaç yalnızca ağrı azaltma ve kas kaybını önlemektir. Sarkaç egzersizleri ve parmak egzersizleri mümkündür. Terapist cerrahi protokol çerçevesinde çalışır." },
        { heading: "Haftalar 5–8: Pasif Mobilizasyon", text: "Terapist omuzu pasif olarak mobilize eder. Giderek daha aktif katılım sağlarsınız. Askı genellikle 4–6 hafta sonra çıkarılır. Ağrı yönetimi ve skar mobilizasyonu önemlidir." },
        { heading: "Haftalar 9–16: Güçlendirme ve Dönüş", text: "Aktif mobilizasyon ve rotator kafın hedefli güçlendirilmesi. Omuz spesifik egzersizler (kürek çekme, hafif yüklü omuz presi). Spora dönüş, cerrahın onayı ve test kriterleri bazında bireyseldir." },
      ],
      ar: [
        { heading: "الأسابيع 1–4: مرحلة التثبيت", text: "الكتف مثبت في حمالة. الهدف هو تخفيف الألم ومنع فقدان العضلات فقط. تمارين البندول وتمارين الأصابع ممكنة. يعمل المعالج ضمن البروتوكول الجراحي." },
        { heading: "الأسابيع 5–8: التعبئة السلبية", text: "المعالج يعبئ الكتف بشكل سلبي. تصبح أكثر نشاطاً تدريجياً. تُزال الحمالة عادةً بعد 4–6 أسابيع. إدارة الألم وتعبئة الندبة مهمان." },
        { heading: "الأسابيع 9–16: التقوية والعودة", text: "التعبئة النشطة وتقوية كفة المدورين المستهدفة. تمارين خاصة بالكتف (تجديف، ضغط الكتف بحمل خفيف). العودة للرياضة فردية بناءً على موافقة الجراح ومعايير الاختبار." },
      ],
      pl: [
        { heading: "Tygodnie 1–4: Faza Unieruchomienia", text: "Bark jest unieruchomiony w temblaku. Celem jest wyłącznie redukcja bólu i zapobieganie utracie mięśni. Ćwiczenia wahadłowe i palców są możliwe. Terapeuta pracuje w ramach protokołu chirurgicznego." },
        { heading: "Tygodnie 5–8: Bierna Mobilizacja", text: "Terapeuta mobilizuje bark biernie. Stajesz się coraz bardziej aktywny. Temblak jest zazwyczaj zdejmowany po 4–6 tygodniach. Zarządzanie bólem i mobilizacja blizny są ważne." },
        { heading: "Tygodnie 9–16: Wzmacnianie i Powrót", text: "Aktywna mobilizacja i ukierunkowane wzmacnianie stożka rotatorów. Ćwiczenia specyficzne dla barku (wiosłowanie, wyciskanie z małym obciążeniem). Powrót do sportu jest indywidualny na podstawie zgody chirurga i kryteriów testowych." },
      ],
    },
    risks: {
      de: ["Re-Ruptur der Rotatorenmanschette (bis 40% ohne Protokoll)", "Schultersteife (frozen shoulder) durch übermäßige Immobilisierung", "Chronische Instabilität bei zu früher Belastung", "Verlust der Überkopf-Funktion für den Alltag"],
      fr: ["Re-rupture de la coiffe des rotateurs (jusqu'à 40% sans protocole)", "Épaule gelée par immobilisation excessive", "Instabilité chronique par mobilisation trop précoce", "Perte de la fonction au-dessus de la tête pour le quotidien"],
      en: ["Rotator cuff re-rupture (up to 40% without protocol)", "Frozen shoulder from excessive immobilisation", "Chronic instability from premature loading", "Loss of overhead function for daily life"],
      nl: ["Rotatorenmanchet-re-ruptuur (tot 40% zonder protocol)", "Frozen shoulder door overmatige immobilisatie", "Chronische instabiliteit door te vroege belasting", "Verlies van bovenhoofds functie voor het dagelijks leven"],
      tr: ["Rotator kaf yeniden yırtılması (protokol olmadan %40'a kadar)", "Aşırı immobilizasyondan donmuş omuz", "Erken yüklemeden kronik instabilite", "Günlük yaşam için baş üstü fonksiyon kaybı"],
      ar: ["إعادة تمزق كفة المدورين (حتى 40% بدون بروتوكول)", "الكتف المتجمد من التثبيت المفرط", "عدم الاستقرار المزمن من التحميل المبكر", "فقدان وظيفة الرفع فوق الرأس للحياة اليومية"],
      pl: ["Ponowne zerwanie stożka rotatorów (do 40% bez protokołu)", "Zamrożony bark od nadmiernego unieruchomienia", "Przewlekła niestabilność od przedwczesnego obciążenia", "Utrata funkcji nad głową w życiu codziennym"],
    },
  },
};

/* ─────────────────────────────── UI STRINGS ─────────────────────────────── */

const UI: Record<LangKey, {
  badge: string; backBtn: string; weeksLabel: string;
  whatIsTitle: string; whyRehabTitle: string; objectivesTitle: string;
  expectTitle: string; riskTitle: string; phasesTitle: string;
  cta: string; ctaSub: string; bookBtn: string; allPrograms: string;
}> = {
  de: {
    badge: "Post-Op Rehabilitation", backBtn: "Alle Programme", weeksLabel: "Wochen Rehabilitation",
    whatIsTitle: "Was ist diese Operation?", whyRehabTitle: "Warum ist Rehabilitation unerlässlich?",
    objectivesTitle: "Therapieziele", expectTitle: "Was erwartet Sie?",
    riskTitle: "Risiken ohne strukturierte Rehabilitation", phasesTitle: "Unser Behandlungsprogramm",
    cta: "Bereit für Ihre Rehabilitation?", ctaSub: "Vereinbaren Sie einen Ersttermin — wir erstellen Ihr individuelles Programm.",
    bookBtn: "Termin vereinbaren", allPrograms: "Alle Rehabilitationsprogramme",
  },
  fr: {
    badge: "Rééducation Post-Op", backBtn: "Tous les programmes", weeksLabel: "semaines de rééducation",
    whatIsTitle: "Qu'est-ce que cette opération ?", whyRehabTitle: "Pourquoi la rééducation est-elle indispensable ?",
    objectivesTitle: "Objectifs thérapeutiques", expectTitle: "À quoi vous attendre ?",
    riskTitle: "Risques sans rééducation structurée", phasesTitle: "Notre programme de traitement",
    cta: "Prêt pour votre rééducation ?", ctaSub: "Prenez rendez-vous pour un bilan initial — nous créons votre programme personnalisé.",
    bookBtn: "Prendre rendez-vous", allPrograms: "Tous les programmes de rééducation",
  },
  en: {
    badge: "Post-Op Rehabilitation", backBtn: "All programmes", weeksLabel: "weeks rehabilitation",
    whatIsTitle: "What is this surgery?", whyRehabTitle: "Why is rehabilitation essential?",
    objectivesTitle: "Treatment objectives", expectTitle: "What to expect?",
    riskTitle: "Risks without structured rehabilitation", phasesTitle: "Our treatment programme",
    cta: "Ready for your rehabilitation?", ctaSub: "Book an initial assessment — we create your personalised programme.",
    bookBtn: "Book appointment", allPrograms: "All rehabilitation programmes",
  },
  nl: {
    badge: "Post-Op Revalidatie", backBtn: "Alle programma's", weeksLabel: "weken revalidatie",
    whatIsTitle: "Wat is deze operatie?", whyRehabTitle: "Waarom is revalidatie essentieel?",
    objectivesTitle: "Behandeldoelen", expectTitle: "Wat kunt u verwachten?",
    riskTitle: "Risico's zonder gestructureerde revalidatie", phasesTitle: "Ons behandelprogramma",
    cta: "Klaar voor uw revalidatie?", ctaSub: "Maak een eerste afspraak — wij stellen uw gepersonaliseerd programma op.",
    bookBtn: "Afspraak maken", allPrograms: "Alle revalidatieprogramma's",
  },
  tr: {
    badge: "Ameliyat Sonrası Rehabilitasyon", backBtn: "Tüm programlar", weeksLabel: "hafta rehabilitasyon",
    whatIsTitle: "Bu ameliyat nedir?", whyRehabTitle: "Rehabilitasyon neden zorunludur?",
    objectivesTitle: "Tedavi hedefleri", expectTitle: "Ne bekleyebilirsiniz?",
    riskTitle: "Yapılandırılmış rehabilitasyon olmadan riskler", phasesTitle: "Tedavi programımız",
    cta: "Rehabilitasyonunuza hazır mısınız?", ctaSub: "Başlangıç değerlendirmesi için randevu alın — kişisel programınızı oluşturuyoruz.",
    bookBtn: "Randevu al", allPrograms: "Tüm rehabilitasyon programları",
  },
  ar: {
    badge: "تأهيل ما بعد الجراحة", backBtn: "جميع البرامج", weeksLabel: "أسابيع إعادة التأهيل",
    whatIsTitle: "ما هي هذه العملية؟", whyRehabTitle: "لماذا إعادة التأهيل ضرورية؟",
    objectivesTitle: "أهداف العلاج", expectTitle: "ماذا تتوقع؟",
    riskTitle: "مخاطر بدون إعادة تأهيل منظمة", phasesTitle: "برنامج علاجنا",
    cta: "هل أنت مستعد لإعادة التأهيل؟", ctaSub: "احجز تقييمًا أوليًا — نضع برنامجك الشخصي.",
    bookBtn: "حجز موعد", allPrograms: "جميع برامج إعادة التأهيل",
  },
  pl: {
    badge: "Rehabilitacja pooperacyjna", backBtn: "Wszystkie programy", weeksLabel: "tygodni rehabilitacji",
    whatIsTitle: "Czym jest ta operacja?", whyRehabTitle: "Dlaczego rehabilitacja jest niezbędna?",
    objectivesTitle: "Cele leczenia", expectTitle: "Czego się spodziewać?",
    riskTitle: "Ryzyko bez ustrukturyzowanej rehabilitacji", phasesTitle: "Nasz program leczenia",
    cta: "Gotowy na rehabilitację?", ctaSub: "Umów wizytę wstępną — tworzymy Twój spersonalizowany program.",
    bookBtn: "Umów wizytę", allPrograms: "Wszystkie programy rehabilitacji",
  },
};

/* ─────────────────────────────── COMPONENT ─────────────────────────────── */

export function RehabDetailPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";
  const data = SURGERY_DATA[slug as Slug];

  if (!data) return null;

  const title = (data.title as Record<LangKey, string>)[lang] ?? data.title.de;
  const subtitle = (data.subtitle as Record<LangKey, string>)[lang] ?? data.subtitle.de;
  const surgeryExplain = (data.surgeryExplain as Record<LangKey, string>)[lang] ?? data.surgeryExplain.de;
  const whyRehab = (data.whyRehab as Record<LangKey, string[]>)[lang] ?? data.whyRehab.de;
  const objectives = (data.objectives as Record<LangKey, string[]>)[lang] ?? data.objectives.de;
  const whatToExpect = (data.whatToExpect as Record<LangKey, { heading: string; text: string }[]>)[lang] ?? data.whatToExpect.de;
  const risks = (data.risks as Record<LangKey, string[]>)[lang] ?? data.risks.de;
  const phases = (data.phases as Record<LangKey, { label: string; items: string[] }[]>)[lang] ?? data.phases.de;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <AnimatedSection className="mb-8">
          <Link
            href="/rehabilitation"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {ui.allPrograms}
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection className="mb-14">
          <div className={`bg-gradient-to-br ${data.color} rounded-3xl p-10 text-white`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold mb-5">
              <Activity className="w-3.5 h-3.5" />
              {ui.badge}
            </div>
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <data.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold">{title}</h1>
                  <p className="text-white/70 mt-1 text-lg">{subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-extrabold">{data.weeks}</div>
                <div className="text-white/60 text-sm">{ui.weeksLabel}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* What is this surgery */}
        <AnimatedSection className="mb-12">
          <div className="bg-white rounded-3xl border border-neutral-200 p-8">
            <h2 className="text-xl font-extrabold text-neutral-900 mb-4 flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br ${data.color}`}>
                <data.icon className="w-4.5 h-4.5 text-white w-5 h-5" />
              </div>
              {ui.whatIsTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base">{surgeryExplain}</p>
          </div>
        </AnimatedSection>

        {/* Why rehab + Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.05}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8 h-full">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-5 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#76b82a]" />
                {ui.whyRehabTitle}
              </h2>
              <ul className="space-y-3">
                {whyRehab.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#76b82a] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8 h-full">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-5 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#2b3186]" />
                {ui.objectivesTitle}
              </h2>
              <ul className="space-y-3">
                {objectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <ChevronRight className="w-4 h-4 text-[#2b3186] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* What to expect */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#2b3186]" />
            {ui.expectTitle}
          </h2>
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {whatToExpect.map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex gap-5">
                  <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${data.color}`}>
                    <span className="text-white font-extrabold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{step.heading}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>

        {/* Treatment phases */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-extrabold text-neutral-900 mb-6 flex items-center gap-3">
            <Activity className="w-5 h-5 text-[#76b82a]" />
            {ui.phasesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {phases.map((phase, pi) => (
              <motion.div
                key={pi}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.1 }}
                className="bg-white rounded-2xl border border-neutral-200 p-6"
              >
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4 bg-gradient-to-br ${data.color}`}>
                  <span className="text-white text-xs font-bold">{pi + 1}</span>
                </div>
                <h3 className="font-bold text-neutral-900 text-sm mb-3">{phase.label}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-xs text-neutral-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Risks without rehab */}
        <AnimatedSection className="mb-14">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8">
            <h2 className="text-lg font-extrabold text-red-800 mb-5 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              {ui.riskTitle}
            </h2>
            <ul className="space-y-2">
              {risks.map((risk, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-red-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">{ui.cta}</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">{ui.ctaSub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/termin"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
              >
                <CalendarPlus className="w-5 h-5" />
                {ui.bookBtn}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/rehabilitation"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-semibold transition-all"
              >
                {ui.allPrograms}
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
