"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Hand, Dumbbell, Smile, Droplets, CheckCircle2, CalendarPlus, ArrowRight, Clock, Users } from "lucide-react";

const SD_EXTRA: Record<string, { title?: Record<string,string>; subtitle?: Record<string,string>; description?: Record<string,string> }> = {
  "manuelle-therapie": {
    title: { uk: "Мануальна терапія", es: "Terapia Manual", ku: "Terapiya Destî" },
    subtitle: { uk: "Ортопедична спеціалізація за стандартом IFOMPT", es: "Especialización ortopédica según el estándar IFOMPT", ku: "Pisporiya ortopedîk li gorî standarda IFOMPT" },
    description: { uk: "Ортопедична мануальна терапія — всесвітньо визнана спеціалізація фізіотерапії. Наші терапевти шукають першопричину вашого болю та пропонують індивідуальне лікування для тривалого відновлення.", es: "La terapia manual ortopédica es una especialización de la fisioterapia reconocida mundialmente. Nuestros terapeutas buscan la causa de su dolor y ofrecen un tratamiento personalizado para una recuperación duradera.", ku: "Terapiya destî ya ortopedîk pisporiyeke fizyoterapiyê ya li cîhanê naskirî ye. Terapîstên me sedema êşa we digerin û dermankirineke kesane ji bo başbûneke berdewam pêşkêş dikin." },
  },
  "sport-kinesitherapie": {
    title: { uk: "Спортивна фізіотерапія", es: "Fisioterapia Deportiva", ku: "Fizyoterapiya Werzîşê" },
    subtitle: { uk: "Running Clinic · Тренування BFR · Kinesport", es: "Running Clinic · Entrenamiento BFR · Kinesport", ku: "Running Clinic · Perwerdeya BFR · Kinesport" },
    description: { uk: "Реабілітація, профілактика травм та оптимізація результатів для спортсменів усіх рівнів — від Running Clinic до тренувань BFR.", es: "Rehabilitación, prevención de lesiones y optimización del rendimiento para deportistas de todos los niveles, desde la Running Clinic hasta el entrenamiento BFR.", ku: "Rehabîlîtasyon, pêşîlêgirtina birînan û başkirina performansê ji bo werzîşvanên hemû astan, ji Running Clinic heta perwerdeya BFR." },
  },
  "kiefergelenk": {
    title: { uk: "Скронево-нижньощелепний суглоб (СНЩС)", es: "Articulación Temporomandibular (ATM)", ku: "Girêka Çenê (TMJ)" },
    subtitle: { uk: "Спеціалізована терапія краніомандибулярної дисфункції (CMD)", es: "Terapia especializada para la disfunción craneomandibular (DCM)", ku: "Terapiya pispor a disfonksiyona kranomandîbular (CMD)" },
    description: { uk: "Спеціалізована терапія краніомандибулярної дисфункції (CMD). Лікування болю щелепи, головного болю, запаморочення та напруження шиї.", es: "Terapia especializada para la disfunción craneomandibular (DCM). Tratamiento del dolor de mandíbula, dolores de cabeza, mareos y tensión cervical.", ku: "Terapiya pispor a disfonksiyona kranomandîbular (CMD). Dermankirina êşa çenê, serêş, gêjbûn û tengezariya situ." },
  },
  "lymphdrainage": {
    title: { uk: "Лімфодренаж", es: "Drenaje Linfático", ku: "Drenaja Lîmfatîk" },
    subtitle: { uk: "Ручний лімфодренаж за методом O. Leduc", es: "Drenaje linfático manual según el método O. Leduc", ku: "Drenaja lîmfatîk a destî bi rêbaza O. Leduc" },
    description: { uk: "Ручний лімфодренаж за визнаним методом O. Leduc. М'який спеціалізований масаж для зменшення набряків і стимуляції лімфатичної системи.", es: "Drenaje linfático manual según el reconocido método de O. Leduc. Masaje especializado y suave para reducir el edema y estimular el sistema linfático.", ku: "Drenaja lîmfatîk a destî li gorî rêbaza naskirî ya O. Leduc. Masajeke nerm û pispor ji bo kêmkirina werimê û handana pergala lîmfatîk." },
  },
};

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

interface ServiceDetail {
  icon: React.ElementType;
  color: string;
  badge: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  longDesc: Record<string, string[]>;
  points: Record<string, string[]>;
  indications: Record<string, string[]>;
  contraindications: Record<string, string[]>;
  duration: Record<string, string>;
  teamSlugs: string[];
  teamNames: string[];
  faq: { q: Record<string, string>; a: Record<string, string> }[];
  relatedSlugs: string[];
}

const SERVICES: Record<string, ServiceDetail> = {
  "manuelle-therapie": {
    icon: Hand,
    color: "from-[#2b3186] to-[#1e2260]",
    badge: "CUTM IFOMPT · QPP",
    title: {
      de: "Manuelle Therapie",
      fr: "Thérapie Manuelle",
      en: "Manual Therapy",
      nl: "Manuele Therapie",
      tr: "Manuel Terapi",
      ar: "العلاج اليدوي",
      pl: "Terapia Manualna",
      "uk": "Мануальна терапія",
      "es": "Terapia manual",
      "ku": "Terapiya destî",
    },
    subtitle: {
      de: "Orthopädische Spezialisierung nach IFOMPT-Standard",
      fr: "Spécialisation orthopédique selon le standard IFOMPT",
      en: "Orthopaedic specialisation to IFOMPT standard",
      nl: "Orthopedische specialisatie volgens IFOMPT-norm",
      tr: "IFOMPT standardına göre ortopedik uzmanlık",
      ar: "تخصص عظمي وفق معيار IFOMPT",
      pl: "Specjalizacja ortopedyczna zgodna ze standardem IFOMPT",
      "uk": "Ортопедична спеціалізація за стандартом IFOMPT",
      "es": "Especialización ortopédica según el estándar IFOMPT",
      "ku": "Pisporiya ortopedîk li gorî standarda IFOMPT",
    },
    description: {
      de: "Orthopädische Manualtherapie ist eine weltweit anerkannte Spezialisierung der Physiotherapie (IFOMPT-Standard). Mit gezielten Handgriffen lindern wir Schmerzen und geben Beweglichkeit zurück — nicht, um etwas « einzurenken », sondern um Sie wieder sicher in Bewegung zu bringen. Ihre besten Ergebnisse erzielt die manuelle Therapie in Kombination mit aktiven Übungen, individuell auf Sie abgestimmt.",
      fr: "La thérapie manuelle orthopédique est une spécialisation de la kinésithérapie reconnue mondialement (standard IFOMPT). Par des techniques précises, nous apaisons la douleur et redonnons de la mobilité — non pour « remettre en place », mais pour vous remettre en mouvement en confiance. Ses meilleurs résultats, la thérapie manuelle les obtient associée à des exercices actifs, adaptés à vous.",
      en: "Orthopaedic manual therapy is a globally recognised specialisation of physiotherapy (IFOMPT standard). With precise techniques we ease pain and restore mobility — not to « put things back », but to get you moving again with confidence. Manual therapy delivers its best results combined with active exercises, tailored to you.",
      nl: "Orthopedische manuele therapie is een wereldwijd erkende specialisatie van de kinesitherapie (IFOMPT-norm). Met precieze technieken verzachten we pijn en geven we mobiliteit terug — niet om iets « recht te zetten », maar om u weer met vertrouwen in beweging te brengen. Haar beste resultaten haalt manuele therapie in combinatie met actieve oefeningen, op u afgestemd.",
      tr: "Ortopedik manuel terapi, fizyoterapinin dünya çapında tanınan bir uzmanlık alanıdır (IFOMPT standardı). Hassas tekniklerle ağrıyı dindirir ve hareketliliği geri veririz — bir şeyi « yerine oturtmak » için değil, sizi yeniden güvenle harekete geçirmek için. Manuel terapi en iyi sonuçlarını, size uyarlanmış aktif egzersizlerle birlikte verir.",
      ar: "العلاج اليدوي العظمي تخصص معترف به عالميًا ضمن العلاج الطبيعي (معيار IFOMPT). بتقنيات دقيقة نخفّف الألم ونعيد الحركة — لا لـ « إعادة الأمور إلى مكانها »، بل لإعادتك إلى الحركة بثقة. ويحقّق العلاج اليدوي أفضل نتائجه مقترنًا بتمارين نشطة مصمّمة لك.",
      pl: "Ortopedyczna terapia manualna to uznana na całym świecie specjalizacja fizjoterapii (standard IFOMPT). Precyzyjnymi technikami łagodzimy ból i przywracamy ruchomość — nie po to, by coś « nastawić », lecz by z pewnością siebie znów wprawić Cię w ruch. Najlepsze efekty terapia manualna daje w połączeniu z aktywnymi ćwiczeniami, dopasowanymi do Ciebie.",
      "uk": "Ортопедична мануальна терапія — визнана в усьому світі спеціалізація фізіотерапії (стандарт IFOMPT). Точними техніками ми полегшуємо біль і відновлюємо рухливість — не для того, щоб «вправити щось на місце», а щоб Ви знову рухалися впевнено. Найкращих результатів мануальна терапія досягає в поєднанні з активними вправами, підібраними саме для Вас.",
      "es": "La terapia manual ortopédica es una especialización de la fisioterapia reconocida en todo el mundo (estándar IFOMPT). Con técnicas precisas aliviamos el dolor y devolvemos la movilidad — no para «volver a colocar» nada, sino para que usted vuelva a moverse con confianza. La terapia manual obtiene sus mejores resultados combinada con ejercicios activos, adaptados a usted.",
      "ku": "Terapiya destî ya ortopedîk pisporiyeke fizyoterapiyê ye ku li seranserê cîhanê tê naskirin (standarda IFOMPT). Bi teknîkên rast em êşê sivik dikin û tevgerê vedigerînin — ne ji bo ku tiştekî «li cihê wî vegerînin», lê ji bo ku hûn dîsa bi bawerî tevbigerin. Terapiya destî encamên xwe yên herî baş bi werzîşên çalak ên li gorî we hatine amadekirin re bi dest dixe.",
    },
    longDesc: {
      de: [
        "Die Manuelle Therapie basiert auf einem biopsychosozialen Modell: Schmerz ist nicht nur ein körperliches Phänomen, sondern auch von psychologischen und sozialen Faktoren beeinflusst. Unsere Therapeuten berücksichtigen den ganzen Menschen.",
        "Nach einer ausführlichen Anamnese und einem funktionellen Assessment werden gezielt manuelle Techniken eingesetzt: Mobilisation, Manipulation, neuromuskuläre Techniken und therapeutische Übungen. Der Patient wird aktiv in den Heilungsprozess einbezogen.",
        "Unser Behandlungstisch — der Manuthera 242 aus Finnland — ermöglicht präzise Positionierungen für optimale Technikanwendung. Das Ziel ist immer ein autonomer Patient, der seine Beschwerden langfristig selbst managen kann.",
      ],
      fr: [
        "La thérapie manuelle repose sur un modèle biopsychosocial : la douleur n'est pas uniquement un phénomène physique, mais aussi influencée par des facteurs psychologiques et sociaux. Nos thérapeutes considèrent la personne dans sa globalité.",
        "Après un bilan approfondi et une évaluation fonctionnelle, des techniques manuelles ciblées sont appliquées : mobilisation, manipulation, techniques neuromusculaires et exercices thérapeutiques. Le patient est activement impliqué dans le processus de guérison.",
        "Notre table de traitement — le Manuthera 242 de Finlande — permet des positionnements précis pour une application optimale des techniques. L'objectif est toujours un patient autonome, capable de gérer ses douleurs à long terme.",
      ],
      en: [
        "Manual therapy is based on a biopsychosocial model: pain is not purely a physical phenomenon, but is also influenced by psychological and social factors. Our therapists consider the whole person.",
        "Following a thorough history-taking and functional assessment, targeted manual techniques are applied: mobilisation, manipulation, neuromuscular techniques and therapeutic exercises. The patient is actively involved in the healing process.",
        "Our treatment table — the Manuthera 242 from Finland — allows precise positioning for optimal technique application. The goal is always an autonomous patient who can manage their complaints long-term.",
      ],
      nl: [
        "Manuele therapie is gebaseerd op een biopsychosociaal model: pijn is niet uitsluitend een fysiek fenomeen, maar wordt ook beïnvloed door psychologische en sociale factoren. Onze therapeuten beschouwen de hele persoon.",
        "Na een uitgebreide anamnese en functionele beoordeling worden gerichte manuele technieken toegepast: mobilisatie, manipulatie, neuromusculaire technieken en therapeutische oefeningen. De patiënt wordt actief betrokken bij het herstelproces.",
        "Onze behandeltafel — de Manuthera 242 uit Finland — maakt precieze positionering mogelijk voor optimale techniektoepassing. Het doel is altijd een autonome patiënt die zijn klachten op lange termijn zelf kan managen.",
      ],
      tr: [
        "Manuel terapi, biyopsikososyal bir modele dayanır: ağrı yalnızca fiziksel bir olgu değil, aynı zamanda psikolojik ve sosyal faktörlerden de etkilenir. Terapistlerimiz insanı bir bütün olarak değerlendirir.",
        "Kapsamlı bir anamnez ve fonksiyonel değerlendirmenin ardından hedefli manuel teknikler uygulanır: mobilizasyon, manipülasyon, nöromüsküler teknikler ve terapötik egzersizler. Hasta iyileşme sürecine aktif olarak dahil edilir.",
        "Tedavi masamız — Finlandiya'dan Manuthera 242 — optimal teknik uygulaması için hassas konumlandırmaya olanak tanır. Hedef her zaman şikayetlerini uzun vadede kendi başına yönetebilen özerk bir hastadır.",
      ],
      ar: [
        "يعتمد العلاج اليدوي على نموذج بيولوجي-نفسي-اجتماعي: الألم ليس ظاهرة جسدية فحسب، بل يتأثر أيضًا بعوامل نفسية واجتماعية. يأخذ معالجونا الشخص بأكمله بعين الاعتبار.",
        "بعد أخذ تاريخ مفصل وتقييم وظيفي، يتم تطبيق تقنيات يدوية مستهدفة: تحريك، معالجة، تقنيات عصبية عضلية وتمارين علاجية. يُشرك المريض بنشاط في عملية الشفاء.",
        "طاولة العلاج لدينا — Manuthera 242 من فنلندا — تتيح تحديد المواضع بدقة لتطبيق التقنيات على أكمل وجه. الهدف دائمًا مريض مستقل يستطيع إدارة شكاواه على المدى الطويل.",
      ],
      pl: [
        "Terapia manualna opiera się na modelu biopsychospołecznym: ból nie jest wyłącznie zjawiskiem fizycznym, lecz jest również pod wpływem czynników psychologicznych i społecznych. Nasi terapeuci traktują człowieka holistycznie.",
        "Po szczegółowym wywiadzie i ocenie funkcjonalnej stosowane są ukierunkowane techniki manualne: mobilizacja, manipulacja, techniki nerwowo-mięśniowe i ćwiczenia terapeutyczne. Pacjent jest aktywnie zaangażowany w proces leczenia.",
        "Nasz stół terapeutyczny — Manuthera 242 z Finlandii — umożliwia precyzyjne pozycjonowanie dla optymalnego stosowania technik. Celem jest zawsze samodzielny pacjent, który potrafi długoterminowo zarządzać swoimi dolegliwościami.",
      ],
      "uk": [
        "Мануальна терапія ґрунтується на біопсихосоціальній моделі: біль — це не лише фізичне явище, на нього також впливають психологічні та соціальні чинники. Наші терапевти розглядають людину в цілому.",
        "Після ретельного збору анамнезу та функціональної оцінки застосовуються цілеспрямовані мануальні техніки: мобілізація, маніпуляція, нейром'язові техніки та терапевтичні вправи. Пацієнт бере активну участь у процесі одужання.",
        "Наш процедурний стіл — Manuthera 242 з Фінляндії — дозволяє точно позиціонувати тіло для оптимального застосування технік. Мета завжди одна: самостійний пацієнт, здатний довгостроково справлятися зі своїми скаргами."
      ],
      "es": [
        "La terapia manual se basa en un modelo biopsicosocial: el dolor no es solo un fenómeno físico, sino que también está influido por factores psicológicos y sociales. Nuestros terapeutas consideran a la persona en su globalidad.",
        "Tras una anamnesis detallada y una evaluación funcional, se aplican técnicas manuales específicas: movilización, manipulación, técnicas neuromusculares y ejercicios terapéuticos. El paciente participa activamente en el proceso de recuperación.",
        "Nuestra camilla de tratamiento — la Manuthera 242, de Finlandia — permite posicionamientos precisos para una aplicación óptima de las técnicas. El objetivo es siempre un paciente autónomo, capaz de gestionar sus molestias a largo plazo."
      ],
      "ku": [
        "Terapiya destî li ser modeleke bîyopsîkososyal ava dibe: êş ne tenê diyardeyeke fizîkî ye, faktorên psîkolojîk û civakî jî bandorê lê dikin. Terapîstên me mirovî bi tevahî dinirxînin.",
        "Piştî anamnezeke berfireh û nirxandineke fonksiyonel, teknîkên destî yên armancdar tên bikaranîn: mobîlîzasyon, manîpulasyon, teknîkên nöromaskuler û werzîşên terapîk. Nexweş bi awayekî çalak beşdarî pêvajoya başbûnê dibe.",
        "Maseya me ya dermankirinê — Manuthera 242 ji Fînlandiyayê — rê dide pozîsyonên rast ji bo bikaranîna herî baş a teknîkan. Armanc her dem nexweşekî serbixwe ye, ku bikare demeke dirêj gilîyên xwe birêve bibe."
      ],
    },
    points: {
      de: ["Erweiterte physiotherapeutische Anamnese", "Biopsychosozialer Ansatz", "Ziel: Autonomer Patient", "Wissenschaftlich fundierte Techniken", "Manuthera 242 Behandlungstisch"],
      fr: ["Anamnèse kinésithérapeutique avancée", "Approche biopsychosociale", "Objectif : Patient autonome", "Techniques scientifiquement validées", "Table de traitement Manuthera 242"],
      en: ["Advanced physiotherapy assessment", "Biopsychosocial approach", "Goal: autonomous patient", "Scientifically validated techniques", "Manuthera 242 treatment table"],
      nl: ["Uitgebreide fysiotherapeutische anamnese", "Biopsychosociale aanpak", "Doel: autonome patiënt", "Wetenschappelijk onderbouwde technieken", "Manuthera 242 behandeltafel"],
      tr: ["Gelişmiş fizyoterapi değerlendirmesi", "Biyopsikososyal yaklaşım", "Hedef: özerk hasta", "Bilimsel olarak doğrulanmış teknikler", "Manuthera 242 tedavi masası"],
      ar: ["تقييم فيزيوتيرابيا متقدم", "النهج البيولوجي النفسي الاجتماعي", "الهدف: مريض مستقل", "تقنيات مُثبتة علميًا", "طاولة علاج Manuthera 242"],
      pl: ["Zaawansowana ocena fizjoterapeutyczna", "Podejście biopsychospołeczne", "Cel: autonomiczny pacjent", "Techniki naukowo zwalidowane", "Stół terapeutyczny Manuthera 242"],
      "uk": [
        "Поглиблене фізіотерапевтичне обстеження",
        "Біопсихосоціальний підхід",
        "Мета: самостійний пацієнт",
        "Науково обґрунтовані техніки",
        "Процедурний стіл Manuthera 242"
      ],
      "es": [
        "Anamnesis fisioterapéutica avanzada",
        "Enfoque biopsicosocial",
        "Objetivo: paciente autónomo",
        "Técnicas científicamente validadas",
        "Camilla de tratamiento Manuthera 242"
      ],
      "ku": [
        "Nirxandina fizyoterapiyê ya pêşketî",
        "Nêzîkatiya bîyopsîkososyal",
        "Armanc: nexweşê serbixwe",
        "Teknîkên bi zanistî pejirandî",
        "Maseya dermankirinê Manuthera 242"
      ],
    },
    indications: {
      de: ["Rückenschmerzen / Lumbago", "Nackenschmerzen / HWS", "Knieschmerzen & Gonarthrose", "Hüftschmerzen & Koxarthrose", "Schulterschmerzen / Frozen Shoulder", "Ellbogen / Tennisarm", "Kopfschmerzen / Migräne", "Post-operative Rehabilitation", "Bandscheibenvorfälle", "Ischialgie"],
      fr: ["Douleurs lombaires / lumbago", "Cervicalgies / rachis cervical", "Douleurs du genou & gonarthrose", "Douleurs de hanche & coxarthrose", "Épaule douloureuse / Frozen Shoulder", "Épicondylite / Tennis elbow", "Céphalées / Migraine", "Rééducation post-opératoire", "Hernies discales", "Sciatique"],
      en: ["Back pain / lumbago", "Neck pain / cervical spine", "Knee pain & osteoarthritis", "Hip pain & coxarthrosis", "Shoulder pain / frozen shoulder", "Elbow / tennis elbow", "Headaches / migraine", "Post-operative rehabilitation", "Herniated discs", "Sciatica"],
      nl: ["Rugpijn / lumbago", "Nekpijn / cervicale wervelkolom", "Kniepijn & gonartrose", "Heuppijn & coxartrose", "Schouderpijn / Frozen Shoulder", "Elleboog / tenniselleboog", "Hoofdpijn / migraine", "Postoperatieve revalidatie", "Hernia's", "Ischias"],
      tr: ["Bel ağrısı / lumbago", "Boyun ağrısı / servikal omurga", "Diz ağrısı & osteoartrit", "Kalça ağrısı & koksartroz", "Omuz ağrısı / donuk omuz", "Dirsek / tenis dirseği", "Baş ağrısı / migren", "Ameliyat sonrası rehabilitasyon", "Fıtıklar", "Siyatik"],
      ar: ["آلام الظهر / ألم الخصر", "آلام الرقبة / العمود الفقري العنقي", "آلام الركبة والفصال العظمي", "آلام الورك", "آلام الكتف / التهاب الكبسولة", "مرفق التنس", "صداع / صداع نصفي", "إعادة تأهيل ما بعد العملية", "انزلاق غضروفي", "عرق النسا"],
      pl: ["Ból pleców / lumbago", "Ból szyi / odcinek szyjny", "Ból kolana & gonartoza", "Ból biodra & koksartoza", "Ból barku / zamrożony bark", "Łokieć / łokieć tenisisty", "Bóle głowy / migrena", "Rehabilitacja pooperacyjna", "Przepukliny dyskowe", "Rwa kulszowa"],
      "uk": [
        "Біль у попереку / люмбаго",
        "Біль у шиї / шийний відділ хребта",
        "Біль у коліні та гонартроз",
        "Біль у кульшовому суглобі та коксартроз",
        "Біль у плечі / «заморожене плече»",
        "Епікондиліт / «лікоть тенісиста»",
        "Головний біль / мігрень",
        "Післяопераційна реабілітація",
        "Грижі міжхребцевих дисків",
        "Ішіас"
      ],
      "es": [
        "Dolor lumbar / lumbago",
        "Dolor cervical / columna cervical",
        "Dolor de rodilla y gonartrosis",
        "Dolor de cadera y coxartrosis",
        "Hombro doloroso / hombro congelado",
        "Epicondilitis / codo de tenista",
        "Cefaleas / migraña",
        "Rehabilitación postoperatoria",
        "Hernias discales",
        "Ciática"
      ],
      "ku": [
        "Êşa pişta jêrîn / lumbago",
        "Êşa stû / stûna stû",
        "Êşa çok û artroza çok",
        "Êşa ranê û koksartroz",
        "Êşa milê / milê cemidî (frozen shoulder)",
        "Epîkondîlît / enîşka tenîsê",
        "Serêş / mîgren",
        "Rehabîlîtasyona piştî emeliyatê",
        "Fitqên dîskê",
        "Siyatîk"
      ],
    },
    contraindications: {
      de: ["Frakturen oder Tumore der Wirbelsäule", "Entzündliche Arthritis im Schub", "Neurologische Defizite (Lähmung)", "Schwere Osteoporose"],
      fr: ["Fractures ou tumeurs du rachis", "Arthrite inflammatoire en poussée", "Déficits neurologiques (paralysie)", "Ostéoporose sévère"],
      en: ["Spinal fractures or tumours", "Inflammatory arthritis flare", "Neurological deficits (paralysis)", "Severe osteoporosis"],
      nl: ["Fracturen of tumoren van de wervelkolom", "Inflammatoire artritis in opvlammingsfase", "Neurologische deficiënties (verlamming)", "Ernstige osteoporose"],
      tr: ["Omurga kırıkları veya tümörleri", "İnflamatuvar artrit atağı", "Nörolojik defisitler (felç)", "Şiddetli osteoporoz"],
      ar: ["كسور أو أورام العمود الفقري", "التهاب مفاصل التهابي في مرحلة النوبة", "عجز عصبي (شلل)", "هشاشة عظام شديدة"],
      pl: ["Złamania lub nowotwory kręgosłupa", "Zapalenie stawów w fazie zaostrzenia", "Deficyty neurologiczne (porażenie)", "Ciężka osteoporoza"],
      "uk": [
        "Переломи або пухлини хребта",
        "Загострення запального артриту",
        "Неврологічний дефіцит (параліч)",
        "Тяжкий остеопороз"
      ],
      "es": [
        "Fracturas o tumores de la columna",
        "Brote de artritis inflamatoria",
        "Déficits neurológicos (parálisis)",
        "Osteoporosis grave"
      ],
      "ku": [
        "Şikestin an tumorên stûna piştê",
        "Artrîta înflamatuar di qonaxa tûj de",
        "Kêmasiyên nörolojîk (felc)",
        "Osteoporoza giran"
      ],
    },
    duration: {
      de: "30–60 Minuten pro Sitzung, je nach Befund",
      fr: "30–60 minutes par séance, selon le bilan",
      en: "30–60 minutes per session, depending on findings",
      nl: "30–60 minuten per sessie, afhankelijk van de bevindingen",
      tr: "Bulgulara bağlı olarak seans başına 30–60 dakika",
      ar: "30-60 دقيقة لكل جلسة، حسب النتائج",
      pl: "30–60 minut na sesję, w zależności od wyników",
      "uk": "30–60 хвилин за сеанс, залежно від обстеження",
      "es": "30–60 minutos por sesión, según la evaluación",
      "ku": "30–60 deqîqe her seans, li gorî nirxandinê",
    },
    teamSlugs: ["philippe-banaszak", "thom-petit", "felix-esser"],
    teamNames: ["Philippe Banaszak", "Thom Petit", "Félix Esser"],
    faq: [
      {
        q: { de: "Brauche ich eine ärztliche Verordnung?", fr: "Faut-il une prescription médicale ?", en: "Do I need a medical prescription?", nl: "Heb ik een medisch voorschrift nodig?", tr: "Tıbbi reçeteye ihtiyacım var mı?", ar: "هل أحتاج إلى وصفة طبية؟", pl: "Czy potrzebuję skierowania od lekarza?",
        "uk": "Чи потрібне лікарське направлення?",
        "es": "¿Hace falta una prescripción médica?",
        "ku": "Ma reçeteyeke bijîşkî pêwîst e?" },
        a: { de: "Für die Rückerstattung durch das INAMI/LIKIV ja: eine Verordnung Ihres Arztes ist nötig. Sie dürfen aber auch ohne Verordnung zu einer (nicht erstatteten) Erstuntersuchung kommen.", fr: "Pour le remboursement par l'INAMI, oui : une prescription de votre médecin est nécessaire. Vous pouvez néanmoins venir sans prescription pour un premier bilan (séance non remboursée).", en: "For reimbursement by the INAMI, yes: a prescription from your doctor is required. You may still come without one for an initial assessment (not reimbursed).", nl: "Voor terugbetaling door het RIZIV wel: een voorschrift van uw arts is nodig. U mag echter ook zonder voorschrift komen voor een eerste bilan (niet terugbetaald).", tr: "INAMI geri ödemesi için evet: doktorunuzdan bir reçete gereklidir. Yine de ilk değerlendirme için reçetesiz gelebilirsiniz (geri ödenmez).", ar: "للاسترداد من INAMI نعم: تلزم وصفة من طبيبك. ومع ذلك يمكنك الحضور دون وصفة لتقييم أولي (غير مُسترَد).", pl: "Do refundacji przez INAMI tak: potrzebne jest skierowanie od lekarza. Możesz jednak przyjść bez skierowania na pierwszą ocenę (bez refundacji).",
        "uk": "Для відшкодування з боку INAMI — так: потрібне направлення від Вашого лікаря. Втім, Ви можете прийти без направлення на перше обстеження (сеанс не відшкодовується).",
        "es": "Para el reembolso del INAMI, sí: se necesita una prescripción de su médico. No obstante, puede venir sin prescripción para una primera evaluación (sesión no reembolsada).",
        "ku": "Ji bo vegerandina pereyan ji aliyê INAMI ve, erê: reçeteyek ji bijîşkê we pêwîst e. Lê dîsa jî hûn dikarin bê reçete ji bo nirxandina yekem werin (seans nayê vegerandin)." },
      },
      {
        q: { de: "Wie viele Sitzungen sind nötig?", fr: "Combien de séances faut-il prévoir ?", en: "How many sessions will I need?", nl: "Hoeveel sessies heb ik nodig?", tr: "Kaç seans gerekir?", ar: "كم عدد الجلسات التي سأحتاجها؟", pl: "Ile sesji będę potrzebować?",
        "uk": "Скільки сеансів знадобиться?",
        "es": "¿Cuántas sesiones hay que prever?",
        "ku": "Çend seans pêwîst in?" },
        a: { de: "Das hängt von Ihrer Situation ab, doch viele Patienten spüren nach 3 bis 6 Sitzungen eine Besserung. Wir bewerten regelmäßig neu — Ziel ist Ihre Selbstständigkeit, nicht möglichst viele Termine.", fr: "Cela dépend de votre situation, mais beaucoup de patients ressentent une amélioration en 3 à 6 séances. Nous réévaluons régulièrement : l'objectif est de vous rendre autonome, pas de multiplier les rendez-vous.", en: "It depends on your situation, but many patients feel an improvement within 3 to 6 sessions. We reassess regularly — the goal is your autonomy, not more appointments.", nl: "Dat hangt af van uw situatie, maar veel patiënten voelen binnen 3 tot 6 sessies verbetering. We evalueren regelmatig — het doel is uw zelfstandigheid, niet meer afspraken.", tr: "Durumunuza bağlıdır, ancak birçok hasta 3 ila 6 seansta iyileşme hisseder. Düzenli olarak yeniden değerlendiririz — amaç bağımsızlığınız, daha fazla randevu değil.", ar: "يعتمد على حالتك، لكن كثيرًا من المرضى يشعرون بتحسّن خلال 3 إلى 6 جلسات. نعيد التقييم بانتظام — الهدف هو استقلاليتك لا زيادة المواعيد.", pl: "To zależy od Twojej sytuacji, ale wielu pacjentów odczuwa poprawę w ciągu 3 do 6 sesji. Regularnie oceniamy — celem jest Twoja samodzielność, a nie więcej wizyt.",
        "uk": "Це залежить від Вашої ситуації, але багато пацієнтів відчувають покращення за 3–6 сеансів. Ми регулярно проводимо повторну оцінку: мета — Ваша самостійність, а не збільшення кількості візитів.",
        "es": "Depende de su situación, pero muchos pacientes notan una mejoría en 3 a 6 sesiones. Reevaluamos con regularidad: el objetivo es que usted sea autónomo, no multiplicar las citas.",
        "ku": "Ev bi rewşa we ve girêdayî ye, lê gelek nexweş di 3 heta 6 seansan de başbûnekê hîs dikin. Em bi rêkûpêk ji nû ve dinirxînin: armanc ew e ku hûn serbixwe bibin, ne zêdekirina randevûyan." },
      },
      {
        q: { de: "Ist manuelle Therapie schmerzhaft oder riskant?", fr: "La thérapie manuelle, est-ce douloureux ou risqué ?", en: "Is manual therapy painful or risky?", nl: "Is manuele therapie pijnlijk of riskant?", tr: "Manuel terapi ağrılı veya riskli mi?", ar: "هل العلاج اليدوي مؤلم أو خطير؟", pl: "Czy terapia manualna jest bolesna lub ryzykowna?",
        "uk": "Чи болісна або ризикована мануальна терапія?",
        "es": "¿La terapia manual es dolorosa o arriesgada?",
        "ku": "Ma terapiya destî bi êş an bi xeter e?" },
        a: { de: "Nein. Die Techniken werden Ihrer Toleranz angepasst und bleiben angenehm; ein leichtes Nachziehen ist normal und harmlos. Nichts wird « eingerenkt » — Ihr Körper ist stabil, wir verbessern vor allem Beweglichkeit und Bewegungsvertrauen.", fr: "Non. Les techniques sont adaptées à votre tolérance et restent confortables ; un léger ressenti après la séance est normal et sans gravité. Rien n'est « remis en place » : votre corps est solide, on améliore surtout la mobilité et la confiance à bouger.", en: "No. Techniques are tailored to your tolerance and stay comfortable; mild soreness afterwards is normal and harmless. Nothing is « put back in place » — your body is robust, we mainly improve mobility and confidence to move.", nl: "Nee. Technieken worden aangepast aan uw tolerantie en blijven comfortabel; wat naspanning is normaal en onschuldig. Er wordt niets « teruggeplaatst » — uw lichaam is stevig, we verbeteren vooral mobiliteit en bewegingsvertrouwen.", tr: "Hayır. Teknikler toleransınıza göre uyarlanır ve rahat kalır; sonrasında hafif bir his normaldir ve zararsızdır. Hiçbir şey « yerine oturtulmaz » — vücudunuz sağlamdır, esas olarak hareketliliği ve harekete güveni artırırız.", ar: "لا. تُكيَّف التقنيات مع تحمّلك وتبقى مريحة؛ شعور خفيف بعد الجلسة أمر طبيعي وغير ضار. لا شيء « يُعاد إلى مكانه » — جسمك متين، ونحسّن بشكل أساسي الحركة والثقة في الحركة.", pl: "Nie. Techniki są dostosowane do Twojej tolerancji i pozostają komfortowe; lekka bolesność po zabiegu jest normalna i nieszkodliwa. Nic nie jest « nastawiane » — Twoje ciało jest solidne, poprawiamy głównie ruchomość i pewność ruchu.",
        "uk": "Ні. Техніки підбираються відповідно до Вашої переносимості й залишаються комфортними; легкі відчуття після сеансу — це нормально і не становить загрози. Ніщо не «вправляється на місце»: Ваше тіло міцне, ми передусім покращуємо рухливість і впевненість у русі.",
        "es": "No. Las técnicas se adaptan a su tolerancia y siguen siendo cómodas; una ligera sensación después de la sesión es normal y no tiene importancia. No se «vuelve a colocar» nada: su cuerpo es sólido; sobre todo mejoramos la movilidad y la confianza para moverse.",
        "ku": "Na. Teknîk li gorî tehemula we tên eyarkirin û rehet dimînin; hestek sivik piştî seansê normal e û ne giran e. Tiştek «li cihê xwe nayê vegerandin»: laşê we xurt e, em bi taybetî tevgerê û bawerîya tevgerînê baştir dikin." },
      },
      {
        q: { de: "Bedeutet ein « Knacken » im Gelenk, dass sich etwas einrenkt?", fr: "Le « craquement » articulaire, ça veut dire que quelque chose se remet en place ?", en: "Does a joint « crack » mean something is going back into place?", nl: "Betekent een « krak » in het gewricht dat er iets terugschiet?", tr: "Eklemdeki « çıtlama » bir şeyin yerine oturduğu anlamına mı gelir?", ar: "هل « الطقطقة » في المفصل تعني أن شيئًا يعود إلى مكانه؟", pl: "Czy « strzyknięcie » w stawie oznacza, że coś wraca na miejsce?",
        "uk": "Якщо суглоб «хрустить», це означає, що щось стає на місце?",
        "es": "Si una articulación «cruje», ¿significa que algo vuelve a su sitio?",
        "ku": "Ma «qirçîna» movikê tê wê wateyê ku tiştek li cihê xwe vedigere?" },
        a: { de: "Nein — dieses Geräusch ist nur eine Gasblase im Gelenk und sagt nichts über die Wirkung aus. Manuelle Therapie wirkt, indem sie Bewegung zurückgibt, nicht indem sie einen Knochen « zurücksetzt ».", fr: "Non — ce bruit est simplement une bulle de gaz dans l'articulation, sans lien avec l'efficacité. La thérapie manuelle agit en redonnant du mouvement, pas en « replaçant » un os ou une vertèbre.", en: "No — that sound is just a gas bubble in the joint, unrelated to effectiveness. Manual therapy works by restoring movement, not by « resetting » a bone or vertebra.", nl: "Nee — dat geluid is gewoon een gasbelletje in het gewricht, los van de werking. Manuele therapie werkt door beweging te herstellen, niet door een bot « terug te zetten ».", tr: "Hayır — bu ses eklemdeki bir gaz kabarcığından ibarettir, etkiyle ilgisi yoktur. Manuel terapi hareketi geri kazandırarak çalışır, bir kemiği « yerine koyarak » değil.", ar: "لا — هذا الصوت مجرد فقاعة غاز في المفصل، لا علاقة له بالفعالية. يعمل العلاج اليدوي باستعادة الحركة، لا بـ « إعادة » عظمة أو فقرة.", pl: "Nie — ten dźwięk to po prostu pęcherzyk gazu w stawie, bez związku ze skutecznością. Terapia manualna działa przez przywracanie ruchu, a nie « nastawianie » kości czy kręgu.",
        "uk": "Ні — цей звук є просто бульбашкою газу в суглобі й не пов'язаний з ефективністю. Мануальна терапія діє, відновлюючи рух, а не «вправляючи» кістку чи хребець.",
        "es": "No — ese ruido es simplemente una burbuja de gas en la articulación, sin relación con la eficacia. La terapia manual actúa devolviendo el movimiento, no «recolocando» un hueso o una vértebra.",
        "ku": "Na — ev deng tenê bilbilek gazê ye di movikê de, bi bandorbûnê ve ne girêdayî ye. Terapiya destî bi vegerandina tevgerê bandor dike, ne bi «vegerandina cih» a hestiyekî an movikeke piştê." },
      },
      {
        q: { de: "Bei welchen Beschwerden hilft manuelle Therapie?", fr: "Pour quels problèmes la thérapie manuelle est-elle indiquée ?", en: "What problems is manual therapy for?", nl: "Voor welke klachten is manuele therapie bedoeld?", tr: "Manuel terapi hangi sorunlar için uygundur?", ar: "لأي مشكلات يُستخدم العلاج اليدوي؟", pl: "Przy jakich problemach stosuje się terapię manualną?",
        "uk": "При яких проблемах показана мануальна терапія?",
        "es": "¿Para qué problemas está indicada la terapia manual?",
        "ku": "Terapiya destî ji bo kîjan pirsgirêkan guncav e?" },
        a: { de: "Nacken-, Rücken-, Schulter-, Hüft- oder Knieschmerzen, Kopfschmerzen zervikalen Ursprungs, Steifheit und Folgen von Verletzungen. Nach einer Untersuchung wählen wir gemeinsam den sinnvollsten Ansatz.", fr: "Douleurs de nuque, de dos, d'épaule, de hanche ou de genou, maux de tête d'origine cervicale, raideurs et suites de blessures. Après un bilan, nous choisissons ensemble l'approche la plus utile.", en: "Neck, back, shoulder, hip or knee pain, headaches of cervical origin, stiffness and after-effects of injuries. After an assessment, we choose the most useful approach together.", nl: "Nek-, rug-, schouder-, heup- of kniepijn, hoofdpijn van cervicale oorsprong, stijfheid en gevolgen van blessures. Na een bilan kiezen we samen de nuttigste aanpak.", tr: "Boyun, sırt, omuz, kalça veya diz ağrısı, servikal kaynaklı baş ağrıları, tutukluk ve yaralanma sonrası durumlar. Bir değerlendirmenin ardından en yararlı yaklaşımı birlikte seçeriz.", ar: "آلام الرقبة والظهر والكتف والورك أو الركبة، صداع من منشأ عنقي، تيبّس وآثار الإصابات. بعد التقييم نختار معًا النهج الأنسب.", pl: "Ból szyi, pleców, barku, biodra lub kolana, bóle głowy pochodzenia szyjnego, sztywność i następstwa urazów. Po ocenie wspólnie wybieramy najbardziej przydatne podejście.",
        "uk": "Біль у шиї, спині, плечі, кульшовому суглобі чи коліні, головний біль шийного походження, скутість і наслідки травм. Після обстеження ми разом обираємо найкорисніший підхід.",
        "es": "Dolores de cuello, espalda, hombro, cadera o rodilla, dolores de cabeza de origen cervical, rigidez y secuelas de lesiones. Tras una evaluación, elegimos juntos el enfoque más útil.",
        "ku": "Êşa stû, pişt, mil, ran an çokê, serêşa bi eslê xwe ji stû, hişkbûn û encamên birînan. Piştî nirxandinê, em bi hev re nêzîkatiya herî bikêr hildibijêrin." },
      },
      {
        q: { de: "Was soll ich zur ersten Sitzung mitbringen?", fr: "Que dois-je apporter à la première séance ?", en: "What should I bring to the first session?", nl: "Wat moet ik meenemen naar de eerste sessie?", tr: "İlk seansa ne getirmeliyim?", ar: "ماذا يجب أن أحضر إلى الجلسة الأولى؟", pl: "Co przynieść na pierwszą sesję?",
        "uk": "Що взяти з собою на перший сеанс?",
        "es": "¿Qué debo traer a la primera sesión?",
        "ku": "Ji bo seansa yekem divê ez çi bînim?" },
        a: { de: "Ihre Verordnung (falls vorhanden), Ihren Ausweis und eventuelle Untersuchungen (Bildgebung, Berichte). Tragen Sie bequeme Kleidung, in der Sie sich gut bewegen können.", fr: "Votre prescription (si vous en avez une), votre carte d'identité et vos éventuels examens (imagerie, rapports). Prévoyez une tenue confortable qui permet de bouger facilement.", en: "Your prescription (if you have one), your ID and any relevant exams (imaging, reports). Wear comfortable clothing that lets you move easily.", nl: "Uw voorschrift (indien u er een heeft), uw identiteitskaart en eventuele onderzoeken (beeldvorming, verslagen). Draag comfortabele kleding waarin u makkelijk beweegt.", tr: "Reçeteniz (varsa), kimliğiniz ve varsa ilgili tetkikleriniz (görüntüleme, raporlar). Rahatça hareket edebileceğiniz konforlu kıyafetler giyin.", ar: "وصفتك (إن وُجدت)، بطاقة هويتك وأي فحوصات ذات صلة (صور، تقارير). ارتدِ ملابس مريحة تسمح لك بالحركة بسهولة.", pl: "Skierowanie (jeśli masz), dowód tożsamości i ewentualne badania (obrazowanie, raporty). Załóż wygodne ubranie, w którym łatwo się poruszasz.",
        "uk": "Ваше направлення (якщо воно є), посвідчення особи та наявні результати обстежень (знімки, висновки). Одягніть зручний одяг, у якому легко рухатися.",
        "es": "Su prescripción (si tiene una), su documento de identidad y sus posibles pruebas (imágenes, informes). Lleve ropa cómoda que permita moverse con facilidad.",
        "ku": "Reçeteya xwe (eger hebe), karta nasnameyê û muayeneyên xwe yên heyî (wêneyên tibbî, rapor). Cilên rehet li xwe bikin ku bi hêsanî tevgerê bidin." },
      },
    ],
    relatedSlugs: ["sport-kinesitherapie", "kiefergelenk"],
  },

  "sport-kinesitherapie": {
    icon: Dumbbell,
    color: "from-[#76b82a] to-[#5c9120]",
    badge: "Running Clinic · BFR · Kinesport",
    title: {
      de: "Sport Physiotherapie",
      fr: "Kinésithérapie du Sport",
      en: "Sports Physiotherapy",
      nl: "Sportfysiotherapie",
      tr: "Spor Fizyoterapisi",
      ar: "فيزيوتيرابيا الرياضة",
      pl: "Fizjoterapia Sportowa",
      "uk": "Спортивна фізіотерапія",
      "es": "Fisioterapia deportiva",
      "ku": "Fizyoterapiya werzîşê",
    },
    subtitle: {
      de: "Running Clinic · BFR Training · Kinesport",
      fr: "Running Clinic · Entraînement BFR · Kinesport",
      en: "Running Clinic · BFR Training · Kinesport",
      nl: "Running Clinic · BFR Training · Kinesport",
      tr: "Koşu Kliniği · BFR Antrenmanı · Kinesport",
      ar: "عيادة الجري · تدريب BFR · Kinesport",
      pl: "Klinika Biegania · Trening BFR · Kinesport",
      "uk": "Running Clinic · Тренування BFR · Kinesport",
      "es": "Running Clinic · Entrenamiento BFR · Kinesport",
      "ku": "Running Clinic · Perwerdeya BFR · Kinesport",
    },
    description: {
      de: "Rehabilitation, Verletzungsprävention und Leistungssteigerung für Athleten aller Niveaus. Von der Running Clinic bis zum Blood Flow Restriction Training — wir begleiten Sie von der Verletzung zurück zur vollen Leistung.",
      fr: "Rééducation, prévention des blessures et optimisation des performances pour sportifs de tous niveaux. De la Running Clinic à l'entraînement BFR — nous vous accompagnons de la blessure au retour à pleine performance.",
      en: "Rehabilitation, injury prevention and performance optimisation for athletes of all levels. From the Running Clinic to Blood Flow Restriction training — we guide you from injury back to full performance.",
      nl: "Revalidatie, blessurepreventie en prestatieoptimalisatie voor atleten op alle niveaus. Van de Running Clinic tot BFR-training — wij begeleiden u van blessure naar volledige prestatie.",
      tr: "Her seviyedeki sporcular için rehabilitasyon, yaralanma önleme ve performans optimizasyonu. Koşu Kliniği'nden Kan Akışı Kısıtlama antrenmanına — yaralanmadan tam performansa giden yolda yanınızdayız.",
      ar: "إعادة تأهيل ووقاية من الإصابات وتحسين الأداء للرياضيين على جميع المستويات. من عيادة الجري إلى تدريب BFR — نرافقك من الإصابة إلى الأداء الكامل.",
      pl: "Rehabilitacja, prewencja urazów i optymalizacja wyników dla sportowców na wszystkich poziomach. Od Running Clinic do treningu BFR — towarzyszymy Ci od urazu do pełnej sprawności.",
      "uk": "Реабілітація, профілактика травм і підвищення результативності для спортсменів будь-якого рівня. Від Running Clinic до тренувань BFR — ми супроводжуємо Вас від травми до повернення до повної форми.",
      "es": "Rehabilitación, prevención de lesiones y optimización del rendimiento para deportistas de todos los niveles. De la Running Clinic al entrenamiento BFR — le acompañamos desde la lesión hasta la vuelta al pleno rendimiento.",
      "ku": "Rehabîlîtasyon, pêşîgirtina birînan û baştirkirina performansê ji bo werzîşvanên her astê. Ji Running Clinic heta perwerdeya BFR — em ji birînê heta vegera performansa tam bi we re ne.",
    },
    longDesc: {
      de: [
        "Die Running Clinic bei Praxis Loten basiert auf dem Programm 'La Clinique du Coureur' — dem weltweit führenden evidenzbasierten Ansatz zur Analyse und Behandlung von Laufverletzungen. Thom Petit analysiert Ihre Laufmechanik mit modernsten Methoden und erstellt einen personalisierten Behandlungsplan.",
        "Blood Flow Restriction (BFR) Training ermöglicht signifikante Muskelzuwächse bei nur 20–30 % der Maximallast — ein Durchbruch für die frühe postoperative Rehabilitation. Patienten nach VKB-Rekonstruktion oder Knieprothese können damit ihren Aufbau deutlich beschleunigen.",
        "Kinesport ist unser Programm für Sportvereine und Athleten: Verletzungsprävention, biomechanische Analyse, sportspezifische Kräftigung und mentale Vorbereitung auf die Wettkampfsaison.",
      ],
      fr: [
        "La Running Clinic chez Praxis Loten est basée sur le programme 'La Clinique du Coureur' — l'approche fondée sur les preuves la plus reconnue au monde pour l'analyse et le traitement des blessures de course. Thom Petit analyse votre mécanique de course avec des méthodes de pointe et établit un plan de traitement personnalisé.",
        "L'entraînement Blood Flow Restriction (BFR) permet des gains musculaires significatifs à seulement 20–30 % de la charge maximale — une avancée majeure pour la rééducation post-opératoire précoce. Les patients après reconstruction du LCA ou prothèse de genou peuvent ainsi accélérer considérablement leur progression.",
        "Kinesport est notre programme pour les clubs sportifs et les athlètes : prévention des blessures, analyse biomécanique, renforcement spécifique au sport et préparation mentale à la saison de compétition.",
      ],
      en: [
        "The Running Clinic at Praxis Loten is based on the 'La Clinique du Coureur' programme — the world's leading evidence-based approach to analysing and treating running injuries. Thom Petit analyses your running mechanics with cutting-edge methods and creates a personalised treatment plan.",
        "Blood Flow Restriction (BFR) training enables significant muscle gains at only 20–30% of maximum load — a major breakthrough for early post-operative rehabilitation. Patients following ACL reconstruction or knee prosthesis can significantly accelerate their progress.",
        "Kinesport is our programme for sports clubs and athletes: injury prevention, biomechanical analysis, sport-specific strengthening and mental preparation for the competition season.",
      ],
      nl: [
        "De Running Clinic bij Praxis Loten is gebaseerd op het programma 'La Clinique du Coureur' — de wereldwijd toonaangevende evidence-based aanpak voor het analyseren en behandelen van loopblessures. Thom Petit analyseert uw loopbewegingen met geavanceerde methoden en stelt een gepersonaliseerd behandelplan op.",
        "Blood Flow Restriction (BFR) training maakt significante spiergroei mogelijk bij slechts 20–30% van de maximale belasting — een grote doorbraak voor vroege postoperatieve revalidatie. Patiënten na VKB-reconstructie of knieprothese kunnen hiermee hun voortgang aanzienlijk versnellen.",
        "Kinesport is ons programma voor sportclubs en atleten: blessurepreventie, biomechanische analyse, sportspecifieke versterking en mentale voorbereiding op het competitieseizoen.",
      ],
      tr: [
        "Praxis Loten'deki Koşu Kliniği, 'La Clinique du Coureur' programına dayanmaktadır — koşu yaralanmalarını analiz etmek ve tedavi etmek için dünyanın önde gelen kanıta dayalı yaklaşımı. Thom Petit, son teknoloji yöntemlerle koşu mekaniğinizi analiz eder ve kişiselleştirilmiş bir tedavi planı oluşturur.",
        "Kan Akışı Kısıtlama (BFR) antrenmanı, maksimum yükün yalnızca %20–30'unda önemli kas kazanımlarına olanak tanır — erken ameliyat sonrası rehabilitasyon için büyük bir atılım. Ön çapraz bağ rekonstrüksiyonu veya diz protezi sonrası hastalar ilerlemeyi önemli ölçüde hızlandırabilir.",
        "Kinesport, spor kulüpleri ve sporcular için programımızdır: yaralanma önleme, biyomekanik analiz, spora özgü güçlendirme ve rekabet sezonuna zihinsel hazırlık.",
      ],
      ar: [
        "تعتمد عيادة الجري في Praxis Loten على برنامج 'La Clinique du Coureur' — النهج الأكثر اعترافًا في العالم المستند إلى الأدلة لتحليل وعلاج إصابات الجري. يحلل ثوم بيتي ميكانيكا جريك بأساليب متطورة ويضع خطة علاج مخصصة.",
        "يتيح تدريب تقييد تدفق الدم (BFR) مكاسب عضلية كبيرة عند 20-30٪ فقط من الحمل الأقصى — إنجاز كبير في إعادة التأهيل المبكرة بعد العملية. يستطيع المرضى بعد إعادة بناء الرباط الصليبي الأمامي أو أطراف الركبة تسريع تقدمهم بشكل ملحوظ.",
        "Kinesport هو برنامجنا للأندية الرياضية والرياضيين: الوقاية من الإصابات، التحليل الحيوي، التقوية الرياضية المحددة والتحضير الذهني لموسم المنافسة.",
      ],
      pl: [
        "Running Clinic w Praxis Loten jest oparta na programie 'La Clinique du Coureur' — wiodącym na świecie podejściu opartym na dowodach do analizy i leczenia urazów biegowych. Thom Petit analizuje Twoją mechanikę biegu najnowocześniejszymi metodami i tworzy spersonalizowany plan leczenia.",
        "Trening BFR (Blood Flow Restriction) umożliwia znaczny przyrost mięśni przy zaledwie 20–30% obciążenia maksymalnego — przełom w wczesnej rehabilitacji pooperacyjnej. Pacjenci po rekonstrukcji ACL lub protezie kolana mogą dzięki temu znacznie przyspieszyć swoje postępy.",
        "Kinesport to nasz program dla klubów sportowych i sportowców: prewencja urazów, analiza biomechaniczna, wzmacnianie specyficzne dla sportu i mentalne przygotowanie do sezonu startowego.",
      ],
      "uk": [
        "Running Clinic у Praxis Loten базується на програмі «La Clinique du Coureur» — найвідомішому у світі науково обґрунтованому підході до аналізу та лікування бігових травм. Thom Petit аналізує Вашу техніку бігу за допомогою сучасних методів і складає індивідуальний план лікування.",
        "Тренування з обмеженням кровотоку (Blood Flow Restriction, BFR) дає змогу суттєво наростити м'язи при навантаженні лише 20–30 % від максимального — це важливий крок уперед для ранньої післяопераційної реабілітації. Пацієнти після реконструкції ПХЗ або ендопротезування колінного суглоба можуть таким чином значно пришвидшити свій прогрес.",
        "Kinesport — наша програма для спортивних клубів і спортсменів: профілактика травм, біомеханічний аналіз, специфічне для виду спорту зміцнення та психологічна підготовка до змагального сезону."
      ],
      "es": [
        "La Running Clinic de Praxis Loten se basa en el programa «La Clinique du Coureur» — el enfoque basado en la evidencia más reconocido del mundo para el análisis y el tratamiento de las lesiones por carrera. Thom Petit analiza su mecánica de carrera con métodos de vanguardia y elabora un plan de tratamiento personalizado.",
        "El entrenamiento con restricción del flujo sanguíneo (Blood Flow Restriction, BFR) permite ganancias musculares significativas con solo el 20–30 % de la carga máxima — un avance importante para la rehabilitación postoperatoria precoz. Los pacientes tras una reconstrucción del LCA o una prótesis de rodilla pueden así acelerar considerablemente su progreso.",
        "Kinesport es nuestro programa para clubes deportivos y atletas: prevención de lesiones, análisis biomecánico, fortalecimiento específico del deporte y preparación mental para la temporada de competición."
      ],
      "ku": [
        "Running Clinic li Praxis Loten li ser bernameya «La Clinique du Coureur» ava dibe — nêzîkatiya li ser delîlan a herî naskirî ya cîhanê ji bo analîz û dermankirina birînên bezê. Thom Petit mekanîka bezê ya we bi rêbazên pêşketî analîz dike û planeke dermankirinê ya kesane amade dike.",
        "Perwerdeya bi sînordarkirina herikîna xwînê (Blood Flow Restriction, BFR) rê dide qezencên masûlkeyan ên girîng bi tenê 20–30 % ya barê herî zêde — pêşketineke mezin ji bo rehabîlîtasyona zû ya piştî emeliyatê. Nexweşên piştî ji nû ve avakirina ACL an protezeya çokê dikarin bi vî awayî pêşveçûna xwe gelek bilez bikin.",
        "Kinesport bernameya me ye ji bo klûbên werzîşê û werzîşvanan: pêşîgirtina birînan, analîza bîyomekanîk, xurtkirina taybet bi werzîşê û amadekariya derûnî ji bo demsala pêşbaziyê."
      ],
    },
    points: {
      de: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspezifische Rehabilitation", "Kinesport — Vereinsprogramm", "Biomechanische Laufanalyse"],
      fr: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Réhabilitation spécifique au sport", "Kinesport — programme club", "Analyse biomécanique de la foulée"],
      en: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sport-specific rehabilitation", "Kinesport — club programme", "Biomechanical gait analysis"],
      nl: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspecifieke rehabilitatie", "Kinesport — clubprogramma", "Biomechanische loopanalyse"],
      tr: ["Koşu Kliniği (La Clinique du Coureur)", "Kan Akışı Kısıtlama Antrenmanı (BFR)", "Spora özgü rehabilitasyon", "Kinesport — kulüp programı", "Biyomekanik koşu analizi"],
      ar: ["عيادة الجري (La Clinique du Coureur)", "تدريب تقييد تدفق الدم (BFR)", "إعادة تأهيل رياضي محدد", "Kinesport — برنامج النادي", "تحليل حيوي للجري"],
      pl: ["Running Clinic (La Clinique du Coureur)", "Trening BFR (Blood Flow Restriction)", "Rehabilitacja specyficzna dla sportu", "Kinesport — program klubowy", "Biomechaniczna analiza biegu"],
      "uk": [
        "Running Clinic (La Clinique du Coureur)",
        "Blood Flow Restriction Training (BFR)",
        "Реабілітація з урахуванням виду спорту",
        "Kinesport — програма для клубів",
        "Біомеханічний аналіз кроку"
      ],
      "es": [
        "Running Clinic (La Clinique du Coureur)",
        "Blood Flow Restriction Training (BFR)",
        "Rehabilitación específica del deporte",
        "Kinesport — programa para clubes",
        "Análisis biomecánico de la zancada"
      ],
      "ku": [
        "Running Clinic (La Clinique du Coureur)",
        "Blood Flow Restriction Training (BFR)",
        "Rehabîlîtasyona taybet bi werzîşê",
        "Kinesport — bernameya klûbê",
        "Analîza bîyomekanîk a gavê"
      ],
    },
    indications: {
      de: ["Laufsportverletzungen (Shin Splints, IT-Band)", "Muskelrisse & Zerrungen", "VKB-Rekonstruktion (post-op)", "Knie- / Hüftprothese (post-op)", "Bandverletzungen Sprunggelenk", "Schulter-OP (Rotatorenmanschette)", "Stressfrakturen", "Leistungsoptimierung im Ausdauersport"],
      fr: ["Blessures de running (Shin Splints, bandelette IT)", "Déchirures & élongations musculaires", "Reconstruction du LCA (post-op)", "Prothèse genou/hanche (post-op)", "Entorse de cheville", "Chirurgie de l'épaule (coiffe des rotateurs)", "Fractures de stress", "Optimisation des performances en endurance"],
      en: ["Running injuries (shin splints, IT band)", "Muscle tears & strains", "ACL reconstruction (post-op)", "Knee/hip prosthesis (post-op)", "Ankle ligament injuries", "Shoulder surgery (rotator cuff)", "Stress fractures", "Endurance performance optimisation"],
      nl: ["Loopblessures (shin splints, IT-band)", "Spierscheuren & verstuikingen", "VKB-reconstructie (post-op)", "Knie-/heupprothese (post-op)", "Enkelbandletsel", "Schouderoperatie (rotatorenmanchet)", "Stressfracturen", "Prestatieoptimalisatie duursporten"],
      tr: ["Koşu yaralanmaları (shin splints, IT bandı)", "Kas yırtıkları & germeleri", "Ön çapraz bağ rekonstrüksiyonu (ameliyat sonrası)", "Diz/kalça protezi (ameliyat sonrası)", "Ayak bileği bağ yaralanmaları", "Omuz ameliyatı (rotator manşon)", "Stres kırıkları", "Dayanıklılık sporlarında performans optimizasyonu"],
      ar: ["إصابات الجري (shin splints، رباط IT)", "تمزقات العضلات وتوتراتها", "إعادة بناء الرباط الصليبي الأمامي (بعد العملية)", "طرف صناعي للركبة/الورك (بعد العملية)", "إصابات أربطة الكاحل", "جراحة الكتف (الكفة المدورة)", "كسور الإجهاد", "تحسين أداء رياضة التحمل"],
      pl: ["Urazy biegowe (shin splints, pasmo IT)", "Zerwania i naciągnięcia mięśni", "Rekonstrukcja ACL (po operacji)", "Proteza kolana/biodra (po operacji)", "Urazy więzadeł stawu skokowego", "Operacja barku (stożek rotatorów)", "Złamania zmęczeniowe", "Optymalizacja wyników w sportach wytrzymałościowych"],
      "uk": [
        "Бігові травми (медіальний тибіальний стрес-синдром, синдром клубово-великогомілкового тракту)",
        "Розриви та розтягнення м'язів",
        "Реконструкція ПХЗ (після операції)",
        "Ендопротез коліна/кульшового суглоба (після операції)",
        "Розтягнення зв'язок гомілковостопного суглоба",
        "Операції на плечі (ротаторна манжета)",
        "Стресові переломи",
        "Підвищення результативності на витривалість"
      ],
      "es": [
        "Lesiones por carrera (periostitis tibial, cintilla iliotibial)",
        "Roturas y distensiones musculares",
        "Reconstrucción del LCA (postoperatorio)",
        "Prótesis de rodilla/cadera (postoperatorio)",
        "Esguince de tobillo",
        "Cirugía de hombro (manguito rotador)",
        "Fracturas por estrés",
        "Optimización del rendimiento en resistencia"
      ],
      "ku": [
        "Birînên bezê (shin splints, banda IT)",
        "Çirandin û kişandina masûlkeyan",
        "Ji nû ve avakirina ACL (piştî emeliyatê)",
        "Protezeya çok/ranê (piştî emeliyatê)",
        "Birîna lîgamentên gûzekê",
        "Emeliyata milê (rotator cuff)",
        "Şikestinên stresê",
        "Baştirkirina performansa berxwedanê"
      ],
    },
    contraindications: {
      de: ["Akute Entzündung oder Infektion am Trainingsort", "Thrombose (für BFR)", "Bluthochdruck ≥ 180/110 mmHg (für BFR)", "Offene Wunden"],
      fr: ["Inflammation ou infection aiguë sur le site d'entraînement", "Thrombose (pour le BFR)", "Hypertension ≥ 180/110 mmHg (pour le BFR)", "Plaies ouvertes"],
      en: ["Acute inflammation or infection at training site", "Thrombosis (for BFR)", "Blood pressure ≥ 180/110 mmHg (for BFR)", "Open wounds"],
      nl: ["Acute ontsteking of infectie op de trainingslocatie", "Trombose (voor BFR)", "Bloeddruk ≥ 180/110 mmHg (voor BFR)", "Open wonden"],
      tr: ["Antrenman bölgesinde akut iltihap veya enfeksiyon", "Tromboz (BFR için)", "Kan basıncı ≥ 180/110 mmHg (BFR için)", "Açık yaralar"],
      ar: ["التهاب حاد أو عدوى في موقع التدريب", "تجلط الدم (لـ BFR)", "ضغط الدم ≥ 180/110 ملم زئبق (لـ BFR)", "جروح مفتوحة"],
      pl: ["Ostre zapalenie lub infekcja w miejscu treningu", "Zakrzepica (dla BFR)", "Ciśnienie krwi ≥ 180/110 mmHg (dla BFR)", "Otwarte rany"],
      "uk": [
        "Гостре запалення або інфекція в зоні тренування",
        "Тромбоз (для BFR)",
        "Артеріальний тиск ≥ 180/110 мм рт. ст. (для BFR)",
        "Відкриті рани"
      ],
      "es": [
        "Inflamación o infección aguda en la zona de entrenamiento",
        "Trombosis (para el BFR)",
        "Hipertensión ≥ 180/110 mmHg (para el BFR)",
        "Heridas abiertas"
      ],
      "ku": [
        "Îltîhab an enfeksiyona akût li cihê perwerdeyê",
        "Tromboz (ji bo BFR)",
        "Tansiyon ≥ 180/110 mmHg (ji bo BFR)",
        "Birînên vekirî"
      ],
    },
    duration: {
      de: "45–60 Minuten pro Sitzung",
      fr: "45–60 minutes par séance",
      en: "45–60 minutes per session",
      nl: "45–60 minuten per sessie",
      tr: "Seans başına 45–60 dakika",
      ar: "45-60 دقيقة لكل جلسة",
      pl: "45–60 minut na sesję",
      "uk": "45–60 хвилин за сеанс",
      "es": "45–60 minutos por sesión",
      "ku": "45–60 deqîqe her seans",
    },
    teamSlugs: ["thom-petit"],
    teamNames: ["Thom Petit"],
    faq: [
      {
        q: { de: "Brauche ich eine ärztliche Verordnung?", fr: "Faut-il une prescription médicale ?", en: "Do I need a medical prescription?", nl: "Heb ik een medisch voorschrift nodig?", tr: "Tıbbi reçeteye ihtiyacım var mı?", ar: "هل أحتاج إلى وصفة طبية؟", pl: "Czy potrzebuję skierowania od lekarza?",
        "uk": "Чи потрібне лікарське направлення?",
        "es": "¿Hace falta una prescripción médica?",
        "ku": "Ma reçeteyeke bijîşkî pêwîst e?" },
        a: { de: "Für eine INAMI-Rückerstattung ja. Für reine Leistungs- oder Präventionsberatung (Running Clinic, Wiederaufbau) ist keine Verordnung nötig — diese Leistung wird dann nicht erstattet.", fr: "Pour un remboursement INAMI, oui. Pour du conseil purement performance ou prévention (Running Clinic, réathlétisation), aucune prescription n'est requise — cette prestation n'est alors pas remboursée.", en: "For INAMI reimbursement, yes. For pure performance or prevention work (Running Clinic, reconditioning), no prescription is needed — that service is then not reimbursed.", nl: "Voor RIZIV-terugbetaling wel. Voor puur prestatie- of preventiewerk (Running Clinic, reconditionering) is geen voorschrift nodig — die prestatie is dan niet terugbetaald.", tr: "INAMI geri ödemesi için evet. Salt performans veya önleme çalışması için (Running Clinic, yeniden kondisyon) reçete gerekmez — bu hizmet o zaman geri ödenmez.", ar: "لاسترداد INAMI نعم. للعمل على الأداء أو الوقاية فقط (Running Clinic، إعادة التأهيل البدني) لا تلزم وصفة — عندها لا تُسترَد هذه الخدمة.", pl: "Do refundacji INAMI tak. Do pracy czysto sprawnościowej lub prewencyjnej (Running Clinic, przygotowanie) skierowanie nie jest potrzebne — ta usługa nie jest wtedy refundowana.",
        "uk": "Для відшкодування INAMI — так. Для суто спортивних чи профілактичних консультацій (Running Clinic, атлетична реабілітація) направлення не потрібне — у такому разі послуга не відшкодовується.",
        "es": "Para el reembolso del INAMI, sí. Para un asesoramiento puramente de rendimiento o de prevención (Running Clinic, readaptación deportiva), no se necesita prescripción — en ese caso la prestación no se reembolsa.",
        "ku": "Ji bo vegerandina INAMI, erê. Ji bo şêwirdariya tenê ya performansê an pêşîgirtinê (Running Clinic, vegera werzîşê), reçete ne pêwîst e — wê demê ev xizmet nayê vegerandin." },
      },
      {
        q: { de: "Wie viele Sitzungen bis zur Rückkehr zum Sport?", fr: "Combien de séances avant le retour au sport ?", en: "How many sessions before returning to sport?", nl: "Hoeveel sessies voor terugkeer naar sport?", tr: "Spora dönüş için kaç seans gerekir?", ar: "كم جلسة قبل العودة إلى الرياضة؟", pl: "Ile sesji przed powrotem do sportu?",
        "uk": "Скільки сеансів до повернення в спорт?",
        "es": "¿Cuántas sesiones antes de volver al deporte?",
        "ku": "Berî vegera werzîşê çend seans?" },
        a: { de: "Das hängt von der Verletzung ab. Wir arbeiten mit klaren, messbaren Etappen (Rückkehr-zum-Sport-Kriterien) statt mit festen Fristen — Sie kehren zurück, wenn Ihr Körper bereit ist, nicht nach dem Kalender.", fr: "Cela dépend de la blessure. Nous travaillons par étapes claires et mesurables (critères de retour au sport) plutôt que par délais fixes — vous reprenez quand votre corps est prêt, pas selon le calendrier.", en: "It depends on the injury. We work with clear, measurable stages (return-to-sport criteria) rather than fixed deadlines — you return when your body is ready, not by the calendar.", nl: "Dat hangt af van de blessure. We werken met duidelijke, meetbare fasen (return-to-sport-criteria) in plaats van vaste termijnen — u keert terug wanneer uw lichaam klaar is, niet volgens de kalender.", tr: "Yaralanmaya bağlıdır. Sabit sürelerden çok net, ölçülebilir aşamalarla (spora dönüş kriterleri) çalışırız — takvime göre değil, vücudunuz hazır olduğunda dönersiniz.", ar: "يعتمد على الإصابة. نعمل بمراحل واضحة وقابلة للقياس (معايير العودة إلى الرياضة) بدل مواعيد ثابتة — تعود عندما يكون جسمك جاهزًا، لا حسب التقويم.", pl: "To zależy od urazu. Pracujemy według jasnych, mierzalnych etapów (kryteria powrotu do sportu), a nie sztywnych terminów — wracasz, gdy Twoje ciało jest gotowe, a nie według kalendarza.",
        "uk": "Це залежить від травми. Ми працюємо чіткими й вимірюваними етапами (критерії повернення в спорт), а не за фіксованими строками — Ви повертаєтеся, коли Ваше тіло готове, а не за календарем.",
        "es": "Depende de la lesión. Trabajamos por etapas claras y medibles (criterios de vuelta al deporte) en lugar de plazos fijos — usted retoma cuando su cuerpo está preparado, no según el calendario.",
        "ku": "Ev bi birînê ve girêdayî ye. Em bi qonaxên zelal û pîvanbar dixebitin (pîvanên vegera werzîşê), ne bi demên sabît — hûn dema ku laşê we amade be dest pê dikin, ne li gorî salnameyê." },
      },
      {
        q: { de: "Soll ich bei einer Verletzung völlig ausruhen?", fr: "Faut-il se reposer complètement quand on est blessé ?", en: "Should I rest completely when injured?", nl: "Moet ik volledig rusten bij een blessure?", tr: "Sakatlandığımda tamamen dinlenmeli miyim?", ar: "هل ينبغي أن أستريح تمامًا عند الإصابة؟", pl: "Czy przy kontuzji powinienem całkowicie odpoczywać?",
        "uk": "Чи потрібен повний спокій після травми?",
        "es": "¿Hay que hacer reposo absoluto cuando uno se lesiona?",
        "ku": "Ma dema birîndar bin divê hûn bi tevahî bêhna xwe vedin?" },
        a: { de: "Meist nicht. Vollständige Ruhe schwächt Muskeln und Sehnen; besser ist angepasste Belastung — Bewegung ist ein Teil der Heilung. Wir dosieren gemeinsam, was gut tut und was (noch) zu viel ist.", fr: "Le plus souvent, non. Le repos total affaiblit muscles et tendons ; mieux vaut une charge adaptée — le mouvement fait partie de la guérison. Nous dosons ensemble ce qui est bénéfique et ce qui est (encore) trop.", en: "Usually not. Complete rest weakens muscles and tendons; adapted loading is better — movement is part of healing. Together we dose what helps and what is (still) too much.", nl: "Meestal niet. Volledige rust verzwakt spieren en pezen; aangepaste belasting is beter — beweging hoort bij het herstel. Samen doseren we wat helpt en wat (nog) te veel is.", tr: "Genellikle hayır. Tam dinlenme kasları ve tendonları zayıflatır; uyarlanmış yüklenme daha iyidir — hareket iyileşmenin bir parçasıdır. Neyin iyi geldiğini, neyin (henüz) fazla olduğunu birlikte ayarlarız.", ar: "غالبًا لا. الراحة التامة تُضعف العضلات والأوتار؛ التحميل المتدرّج أفضل — الحركة جزء من الشفاء. نضبط معًا ما ينفع وما هو (بعد) كثير.", pl: "Zwykle nie. Całkowity odpoczynek osłabia mięśnie i ścięgna; lepsze jest dostosowane obciążenie — ruch jest częścią leczenia. Wspólnie dawkujemy to, co pomaga, i to, co (jeszcze) jest zbyt duże.",
        "uk": "Здебільшого ні. Повний спокій послаблює м'язи й сухожилля; краще адаптоване навантаження — рух є частиною одужання. Разом ми дозуємо, що корисно, а що (поки що) забагато.",
        "es": "La mayoría de las veces, no. El reposo total debilita músculos y tendones; es mejor una carga adaptada — el movimiento forma parte de la curación. Juntos dosificamos lo que es beneficioso y lo que (todavía) es demasiado.",
        "ku": "Bi piranî, na. Bêhnvedana tam masûlke û tendonan qels dike; barekî guncav çêtir e — tevger beşek ji başbûnê ye. Em bi hev re diyar dikin ka çi bi kêr tê û çi (hîn) zêde ye." },
      },
      {
        q: { de: "Was sind die Running Clinic und das BFR-Training?", fr: "Qu'est-ce que la Running Clinic et l'entraînement BFR ?", en: "What are the Running Clinic and BFR training?", nl: "Wat zijn de Running Clinic en BFR-training?", tr: "Running Clinic ve BFR antrenmanı nedir?", ar: "ما هي Running Clinic وتدريب BFR؟", pl: "Czym są Running Clinic i trening BFR?",
        "uk": "Що таке Running Clinic і тренування BFR?",
        "es": "¿Qué son la Running Clinic y el entrenamiento BFR?",
        "ku": "Running Clinic û perwerdeya BFR çi ne?" },
        a: { de: "Die Running Clinic ist eine Lauf-Analyse zur Vorbeugung von Verletzungen und zur Leistungsverbesserung. BFR (Blood Flow Restriction) erlaubt es, mit leichten Lasten Kraft aufzubauen — ideal in der frühen Reha nach Operation oder Verletzung.", fr: "La Running Clinic est une analyse de course pour prévenir les blessures et améliorer la performance. Le BFR (restriction du flux sanguin) permet de gagner de la force avec des charges légères — idéal en réhabilitation précoce après opération ou blessure.", en: "The Running Clinic is a running analysis to prevent injuries and improve performance. BFR (blood-flow restriction) lets you build strength with light loads — ideal in early rehab after surgery or injury.", nl: "De Running Clinic is een loopanalyse om blessures te voorkomen en prestaties te verbeteren. BFR (bloedstroomrestrictie) laat u kracht opbouwen met lichte belasting — ideaal in vroege revalidatie na operatie of blessure.", tr: "Running Clinic, sakatlıkları önlemek ve performansı artırmak için bir koşu analizidir. BFR (kan akışı kısıtlama) hafif yüklerle güç kazanmanızı sağlar — ameliyat veya yaralanma sonrası erken rehabilitasyon için idealdir.", ar: "Running Clinic هي تحليل للجري للوقاية من الإصابات وتحسين الأداء. أما BFR (تقييد تدفّق الدم) فيتيح بناء القوة بأحمال خفيفة — مثالي في التأهيل المبكر بعد الجراحة أو الإصابة.", pl: "Running Clinic to analiza biegu w celu zapobiegania kontuzjom i poprawy wyników. BFR (ograniczenie przepływu krwi) pozwala budować siłę przy lekkich obciążeniach — idealne we wczesnej rehabilitacji po operacji lub urazie.",
        "uk": "Running Clinic — це аналіз бігу для профілактики травм і покращення результатів. BFR (обмеження кровотоку) дає змогу набирати силу з легкими навантаженнями — ідеально для ранньої реабілітації після операції чи травми.",
        "es": "La Running Clinic es un análisis de la carrera para prevenir lesiones y mejorar el rendimiento. El BFR (restricción del flujo sanguíneo) permite ganar fuerza con cargas ligeras — ideal en la rehabilitación precoz tras una operación o una lesión.",
        "ku": "Running Clinic analîzeke bezê ye ji bo pêşîgirtina birînan û baştirkirina performansê. BFR (sînordarkirina herikîna xwînê) rê dide ku hûn bi barên sivik hêzê bi dest bixin — îdeal e ji bo rehabîlîtasyona zû piştî emeliyat an birînê." },
      },
      {
        q: { de: "Muss ich Leistungssportler sein?", fr: "Faut-il être sportif de compétition ?", en: "Do I need to be a competitive athlete?", nl: "Moet ik een competitiesporter zijn?", tr: "Rekabetçi bir sporcu olmam gerekir mi?", ar: "هل يجب أن أكون رياضيًا تنافسيًا؟", pl: "Czy muszę być sportowcem wyczynowym?",
        "uk": "Чи потрібно бути спортсменом-змагальником?",
        "es": "¿Hay que ser deportista de competición?",
        "ku": "Ma divê hûn werzîşvanekî pêşbaziyê bin?" },
        a: { de: "Nein. Wir begleiten alle Aktiven — vom Freizeitläufer bis zum Wiedereinsteiger nach langer Pause. Entscheidend ist Ihr Ziel, nicht Ihr Niveau.", fr: "Non. Nous accompagnons tous les actifs — du coureur loisir à celui qui reprend après une longue pause. Ce qui compte, c'est votre objectif, pas votre niveau.", en: "No. We support all active people — from recreational runners to those returning after a long break. What matters is your goal, not your level.", nl: "Nee. We begeleiden alle actieve mensen — van recreatieve loper tot wie na een lange pauze herbegint. Wat telt is uw doel, niet uw niveau.", tr: "Hayır. Tüm aktif kişilere eşlik ederiz — hobi koşucusundan uzun aradan sonra dönenlere kadar. Önemli olan seviyeniz değil, hedefinizdir.", ar: "لا. نرافق كل النشطين — من عدّاء الهواية إلى العائد بعد انقطاع طويل. المهم هو هدفك لا مستواك.", pl: "Nie. Wspieramy wszystkie aktywne osoby — od biegaczy rekreacyjnych po wracających po długiej przerwie. Liczy się Twój cel, a nie poziom.",
        "uk": "Ні. Ми супроводжуємо всіх активних людей — від бігуна-аматора до тих, хто повертається після тривалої перерви. Важлива Ваша мета, а не Ваш рівень.",
        "es": "No. Acompañamos a todas las personas activas — desde el corredor aficionado hasta quien retoma tras una larga pausa. Lo que cuenta es su objetivo, no su nivel.",
        "ku": "Na. Em bi hemû kesên çalak re ne — ji bezvanê amator heta yê ku piştî navberek dirêj dîsa dest pê dike. Ya girîng armanca we ye, ne asta we." },
      },
      {
        q: { de: "Was soll ich mitbringen oder anziehen?", fr: "Que faut-il apporter ou porter ?", en: "What should I bring or wear?", nl: "Wat moet ik meenemen of dragen?", tr: "Ne getirmeli veya giymeliyim?", ar: "ماذا أحضر أو ألبس؟", pl: "Co przynieść lub założyć?",
        "uk": "Що взяти з собою чи вдягнути?",
        "es": "¿Qué hay que traer o llevar puesto?",
        "ku": "Divê ez çi bînim an li xwe bikim?" },
        a: { de: "Sportkleidung und Ihre gewohnten Laufschuhe (bei Laufthemen). Bringen Sie Ihre Verordnung und eventuelle Untersuchungen mit; für die Running Clinic sind die üblichen Schuhe wichtig.", fr: "Une tenue de sport et vos chaussures de course habituelles (pour les sujets de course). Apportez votre prescription et vos éventuels examens ; pour la Running Clinic, vos chaussures habituelles sont importantes.", en: "Sportswear and your usual running shoes (for running topics). Bring your prescription and any exams; for the Running Clinic, your usual shoes matter.", nl: "Sportkleding en uw gebruikelijke loopschoenen (voor loopthema's). Neem uw voorschrift en eventuele onderzoeken mee; voor de Running Clinic zijn uw gewone schoenen belangrijk.", tr: "Spor kıyafeti ve her zamanki koşu ayakkabılarınız (koşu konuları için). Reçetenizi ve varsa tetkiklerinizi getirin; Running Clinic için her zamanki ayakkabılarınız önemlidir.", ar: "ملابس رياضية وحذاء الجري المعتاد (لمواضيع الجري). أحضر وصفتك وأي فحوصات؛ من أجل Running Clinic حذاؤك المعتاد مهم.", pl: "Strój sportowy i zwykłe buty do biegania (przy tematach biegowych). Przynieś skierowanie i ewentualne badania; do Running Clinic ważne są Twoje zwykłe buty.",
        "uk": "Спортивний одяг і Ваше звичне бігове взуття (для питань, пов'язаних із бігом). Візьміть направлення та наявні результати обстежень; для Running Clinic Ваше звичне взуття має значення.",
        "es": "Ropa deportiva y sus zapatillas de correr habituales (para temas de carrera). Traiga su prescripción y sus posibles pruebas; para la Running Clinic, sus zapatillas habituales son importantes.",
        "ku": "Cilên werzîşê û pêlavên we yên bezê yên asayî (ji bo mijarên bezê). Reçeteya xwe û muayeneyên xwe yên heyî bînin; ji bo Running Clinic, pêlavên we yên asayî girîng in." },
      },
    ],
    relatedSlugs: ["manuelle-therapie", "lymphdrainage"],
  },

  "kiefergelenk": {
    icon: Smile,
    color: "from-purple-600 to-purple-800",
    badge: "Pitance · Giop · Gouzland 2025",
    title: {
      de: "Kiefergelenk / ATM",
      fr: "Articulation Temporo-Mandibulaire",
      en: "Temporomandibular Joint (TMJ)",
      nl: "Kaakgewricht / ATM",
      tr: "Temporomandibüler Eklem (ATM)",
      ar: "المفصل الصدغي الفكي (ATM)",
      pl: "Staw Skroniowo-Żuchwowy (ATM)",
      "uk": "Скронево-нижньощелепний суглоб (СНЩС)",
      "es": "Articulación temporomandibular (ATM)",
      "ku": "Movika temporomandîbular (TMJ)",
    },
    subtitle: {
      de: "Spezialisierte Therapie bei craniomandibulärer Dysfunktion (CMD)",
      fr: "Thérapie spécialisée des dysfonctions cranio-mandibulaires (DCM)",
      en: "Specialised therapy for craniomandibular dysfunction (CMD)",
      nl: "Gespecialiseerde therapie bij craniomandibulaire dysfunctie (CMD)",
      tr: "Kraniomandibüler disfonksiyon (CMD) için özel tedavi",
      ar: "علاج متخصص لخلل الوظيفة القحفية الفكية (CMD)",
      pl: "Specjalistyczna terapia dysfunkcji czaszkowo-żuchwowej (CMD)",
      "uk": "Спеціалізована терапія краніомандибулярної дисфункції (КМД)",
      "es": "Terapia especializada de la disfunción craneomandibular (DCM)",
      "ku": "Terapiya pispor a disfonksiyona kranomandîbular (CMD)",
    },
    description: {
      de: "Spezialisierte Therapie bei craniomandibulärer Dysfunktion (CMD). Behandlung von Kieferschmerzen, Kopfschmerzen, Schwindel und Nackenverspannungen durch myotensive Techniken.",
      fr: "Thérapie spécialisée des dysfonctions cranio-mandibulaires (DCM/ATM). Traitement des douleurs de mâchoire, maux de tête, vertiges et tensions cervicales par techniques myotensives et articulaires.",
      en: "Specialised therapy for craniomandibular dysfunction (CMD). Treatment of jaw pain, headaches, dizziness and neck tension through myotensive techniques.",
      nl: "Gespecialiseerde therapie bij craniomandibulaire dysfunctie (CMD). Behandeling van kaakpijn, hoofdpijn, duizeligheid en nekspanning door myotensieve technieken.",
      tr: "Kraniomandibüler disfonksiyon (CMD) için özel tedavi. Miyotensif tekniklerle çene ağrısı, baş ağrısı, baş dönmesi ve boyun gerginliğinin tedavisi.",
      ar: "علاج متخصص لخلل الوظيفة القحفية الفكية (CMD). علاج آلام الفك والصداع والدوار وتوترات الرقبة من خلال تقنيات عضلية.",
      pl: "Specjalistyczna terapia dysfunkcji czaszkowo-żuchwowej (CMD). Leczenie bólu żuchwy, bólów głowy, zawrotów głowy i napięcia szyi technikami miotensywnymi.",
      "uk": "Спеціалізована терапія краніомандибулярної дисфункції (КМД/СНЩС). Лікування болю в щелепі, головного болю, запаморочення та напруження в шиї за допомогою міотензивних і суглобових технік.",
      "es": "Terapia especializada de la disfunción craneomandibular (DCM/ATM). Tratamiento del dolor de mandíbula, dolores de cabeza, mareos y tensiones cervicales mediante técnicas miotensivas y articulares.",
      "ku": "Terapiya pispor a disfonksiyona kranomandîbular (CMD/TMJ). Dermankirina êşa çenê, serêş, gêjbûn û girjbûna stû bi teknîkên mîyotensîv û yên movikan.",
    },
    longDesc: {
      de: [
        "Die craniomandibuläre Dysfunktion (CMD) betrifft ca. 10–15 % der Bevölkerung und ist häufig die versteckte Ursache für Kopfschmerzen, Ohrenschmerzen oder chronische Nackenverspannungen. Die Therapie des Kiefergelenks ist eine hochspezialisierte Disziplin innerhalb der Physiotherapie.",
        "Unsere Spezialistin Fabienne Dormann wurde nach den aktuellsten Methoden (Pitance, GIOP, Gouzland 2025) ausgebildet. Die Behandlung kombiniert intra- und extraorale Techniken an den Kaumuskeln und dem Kiefergelenk selbst, ergänzt durch zervikale Behandlung und Heimübungen.",
        "Die enge Zusammenarbeit mit Kieferorthopäden und Zahnärzten ist oft Teil des Gesamtkonzepts — ein interdisziplinärer Ansatz, der die besten Ergebnisse liefert.",
      ],
      fr: [
        "La dysfonction cranio-mandibulaire (DCM) touche environ 10 à 15 % de la population et est souvent la cause cachée de maux de tête, douleurs auriculaires ou tensions cervicales chroniques. La thérapie de l'ATM est une discipline hautement spécialisée au sein de la kinésithérapie.",
        "Notre spécialiste Fabienne Dormann a été formée selon les méthodes les plus récentes (Pitance, GIOP, Gouzland 2025). Le traitement combine des techniques intra- et extra-orales sur les muscles masticateurs et l'articulation temporo-mandibulaire elle-même, complétées par un traitement cervical et des exercices à domicile.",
        "La collaboration étroite avec les orthodontistes et les dentistes fait souvent partie du concept global — une approche interdisciplinaire qui donne les meilleurs résultats.",
      ],
      en: [
        "Craniomandibular dysfunction (CMD) affects approximately 10–15% of the population and is often the hidden cause of headaches, ear pain or chronic neck tension. TMJ therapy is a highly specialised discipline within physiotherapy.",
        "Our specialist Fabienne Dormann has been trained in the most current methods (Pitance, GIOP, Gouzland 2025). Treatment combines intra- and extra-oral techniques on the chewing muscles and the TMJ itself, complemented by cervical treatment and home exercises.",
        "Close collaboration with orthodontists and dentists is often part of the overall concept — an interdisciplinary approach that delivers the best results.",
      ],
      nl: [
        "Craniomandibulaire dysfunctie (CMD) treft ongeveer 10–15% van de bevolking en is vaak de verborgen oorzaak van hoofdpijn, oorpijn of chronische nekspanning. ATM-therapie is een sterk gespecialiseerde discipline binnen de kinesitherapie.",
        "Onze specialist Fabienne Dormann is opgeleid in de meest actuele methoden (Pitance, GIOP, Gouzland 2025). De behandeling combineert intra- en extra-orale technieken op de kauwspieren en het kaakgewricht zelf, aangevuld met cervicale behandeling en thuisoefeningen.",
        "Nauwe samenwerking met orthodontisten en tandartsen maakt vaak deel uit van het totaalconcept — een interdisciplinaire aanpak die de beste resultaten oplevert.",
      ],
      tr: [
        "Kraniomandibüler disfonksiyon (CMD), nüfusun yaklaşık %10–15'ini etkiler ve genellikle baş ağrısı, kulak ağrısı veya kronik boyun gerginliğinin gizli nedenidir. ATM terapisi, fizyoterapi içinde oldukça uzmanlaşmış bir disiplindir.",
        "Uzmanımız Fabienne Dormann, en güncel yöntemlerde (Pitance, GIOP, Gouzland 2025) eğitim almıştır. Tedavi, çiğneme kasları ve ATM'nin kendisi üzerindeki intra ve ekstraoral teknikleri, servikal tedavi ve ev egzersizleriyle birleştirir.",
        "Ortodontistler ve diş hekimleriyle yakın işbirliği genellikle genel konseptin bir parçasıdır — en iyi sonuçları veren interdisipliner bir yaklaşım.",
      ],
      ar: [
        "يؤثر خلل الوظيفة القحفية الفكية (CMD) على حوالي 10-15٪ من السكان وكثيرًا ما يكون السبب الخفي للصداع وآلام الأذن أو توترات الرقبة المزمنة. علاج ATM تخصص عالي الدقة داخل العلاج الطبيعي.",
        "تلقت متخصصتنا فابيان دورمان تدريبًا على أحدث الأساليب (Pitance وGIOP وGouzland 2025). يجمع العلاج بين تقنيات داخل الفم وخارجه على عضلات المضغ والمفصل الصدغي الفكي نفسه، مع علاج عنقي وتمارين منزلية.",
        "كثيرًا ما يكون التعاون الوثيق مع أطباء الأسنان وتقويم الأسنان جزءًا من المفهوم الشامل — نهج متعدد التخصصات يعطي أفضل النتائج.",
      ],
      pl: [
        "Dysfunkcja czaszkowo-żuchwowa (CMD) dotyka około 10–15% populacji i jest często ukrytą przyczyną bólów głowy, bólu ucha lub przewlekłych napięć szyi. Terapia stawu skroniowo-żuchwowego to wysoce wyspecjalizowana dyscyplina w fizjoterapii.",
        "Nasza specjalistka Fabienne Dormann przeszkolona jest w najnowszych metodach (Pitance, GIOP, Gouzland 2025). Leczenie łączy techniki wewnątrz- i zewnątrzustne na mięśniach żucia i samym stawie, uzupełnione leczeniem szyjnym i ćwiczeniami domowymi.",
        "Ścisła współpraca z ortodontami i dentystami jest często częścią ogólnej koncepcji — interdyscyplinarne podejście dające najlepsze wyniki.",
      ],
      "uk": [
        "Краніомандибулярна дисфункція (КМД) трапляється приблизно в 10–15 % населення і часто є прихованою причиною головного болю, болю у вухах або хронічного напруження в шиї. Терапія СНЩС — вузькоспеціалізована дисципліна в межах фізіотерапії.",
        "Наш фахівець Fabienne Dormann пройшла навчання за найсучаснішими методиками (Pitance, GIOP, Gouzland 2025). Лікування поєднує внутрішньоротові та зовнішньоротові техніки на жувальних м'язах і на самому скронево-нижньощелепному суглобі, доповнені лікуванням шийного відділу та вправами вдома.",
        "Тісна співпраця з ортодонтами та стоматологами часто є частиною загальної концепції — міждисциплінарного підходу, що дає найкращі результати."
      ],
      "es": [
        "La disfunción craneomandibular (DCM) afecta a aproximadamente el 10–15 % de la población y a menudo es la causa oculta de dolores de cabeza, dolores de oído o tensiones cervicales crónicas. La terapia de la ATM es una disciplina altamente especializada dentro de la fisioterapia.",
        "Nuestra especialista Fabienne Dormann se ha formado en los métodos más recientes (Pitance, GIOP, Gouzland 2025). El tratamiento combina técnicas intraorales y extraorales sobre los músculos masticadores y la propia articulación temporomandibular, completadas con un tratamiento cervical y ejercicios en casa.",
        "La estrecha colaboración con ortodoncistas y dentistas forma parte a menudo del concepto global — un enfoque interdisciplinario que ofrece los mejores resultados."
      ],
      "ku": [
        "Disfonksiyona kranomandîbular (CMD) bandorê li nêzîkî 10–15 % ya nifûsê dike û gelek caran sedema veşartî ya serêş, êşa guh an girjbûna kronîk a stû ye. Terapiya TMJ di nav fizyoterapiyê de dîsîplîneke gelek pispor e.",
        "Pispora me Fabienne Dormann li gorî rêbazên herî nû hatiye perwerdekirin (Pitance, GIOP, Gouzland 2025). Dermankirin teknîkên hundirê dev û derveyî dev li ser masûlkeyên cûtinê û li ser movika temporomandîbular bixwe dike yek, bi dermankirina stû û werzîşên li malê tê temamkirin.",
        "Hevkariya nêzîk bi ortodontîst û diranbijîşkan re gelek caran beşek ji têgeha giştî ye — nêzîkatiyeke navdîsîplînî ku encamên herî baş dide."
      ],
    },
    points: {
      de: ["Myotensive Techniken", "Intra- und extraorale Behandlung", "Entspannung der Kaumuskulatur", "Behandlung von Knacken/Blockaden", "Koordination mit Kieferorthopäden"],
      fr: ["Techniques myotensives", "Traitement intra- et extra-oral", "Relaxation des muscles masticateurs", "Traitement du claquement/blocage", "Coordination avec l'orthodontiste"],
      en: ["Myotensive techniques", "Intra- and extra-oral treatment", "Chewing muscle relaxation", "Treatment of clicking/blocking", "Coordination with orthodontist"],
      nl: ["Myotensieve technieken", "Intra- en extra-orale behandeling", "Ontspanning van de kauwspieren", "Behandeling van klikken/blokkades", "Coördinatie met orthodontist"],
      tr: ["Miyotensif teknikler", "İntra ve ekstraoral tedavi", "Çiğneme kası gevşemesi", "Tıklama/blokaj tedavisi", "Ortodontistle koordinasyon"],
      ar: ["تقنيات عضلية", "علاج داخل وخارج الفم", "استرخاء عضلات المضغ", "علاج الطقطقة/الانسداد", "التنسيق مع طبيب تقويم الأسنان"],
      pl: ["Techniki miotensywne", "Leczenie wewnątrz- i zewnątrzustne", "Rozluźnienie mięśni żucia", "Leczenie trzaskania/blokad", "Koordynacja z ortodontą"],
      "uk": [
        "Міотензивні техніки",
        "Внутрішньоротове та зовнішньоротове лікування",
        "Розслаблення жувальних м'язів",
        "Лікування клацання/блокування",
        "Координація з ортодонтом"
      ],
      "es": [
        "Técnicas miotensivas",
        "Tratamiento intraoral y extraoral",
        "Relajación de los músculos masticadores",
        "Tratamiento del chasquido/bloqueo",
        "Coordinación con el ortodoncista"
      ],
      "ku": [
        "Teknîkên mîyotensîv",
        "Dermankirina hundirê dev û derveyî dev",
        "Sistkirina masûlkeyên cûtinê",
        "Dermankirina qirçîn/girtinê",
        "Hevrêziya bi ortodontîst re"
      ],
    },
    indications: {
      de: ["Kieferschmerzen & CMD / DCM", "Kopfschmerzen & Migräne", "Schwindel (von HWS / Kiefer)", "Tinnitus (Ohrgeräusche)", "Nacken-/Schulterverspannung", "Kieferöffnungseinschränkung", "Bruxismus (Zähneknirschen)", "Ohrenschmerzen ohne Ohrenerkrankung"],
      fr: ["Douleurs de mâchoire & DCM/ATM", "Maux de tête & migraines", "Vertiges (cervical / mâchoire)", "Acouphènes", "Tensions cervico-scapulaires", "Limitation d'ouverture buccale", "Bruxisme (grincement de dents)", "Douleurs auriculaires sans pathologie"],
      en: ["Jaw pain & CMD/TMD", "Headaches & migraines", "Dizziness (cervical/jaw)", "Tinnitus", "Neck/shoulder tension", "Limited mouth opening", "Bruxism (teeth grinding)", "Ear pain without ear disease"],
      nl: ["Kaakpijn & CMD", "Hoofdpijn & migraines", "Duizeligheid (cervicaal/kaak)", "Tinnitus", "Nek-/schouderspanning", "Beperkte mondopening", "Bruxisme (tandenknarsen)", "Oorpijn zonder ooraandoening"],
      tr: ["Çene ağrısı & CMD", "Baş ağrısı & migren", "Baş dönmesi (servikal/çene)", "Tinnitus (kulak çınlaması)", "Boyun/omuz gerginliği", "Kısıtlı ağız açılması", "Bruksizm (diş gıcırdatma)", "Kulak hastalığı olmaksızın kulak ağrısı"],
      ar: ["آلام الفك وCMD", "صداع وصداع نصفي", "دوار (عنقي/فك)", "طنين الأذن", "توتر الرقبة/الكتف", "محدودية فتح الفم", "الصرير (صرير الأسنان)", "آلام الأذن بدون مرض"],
      pl: ["Ból żuchwy i CMD", "Bóle głowy i migreny", "Zawroty głowy (szyjne/żuchwowe)", "Szumy uszne", "Napięcie szyi/barku", "Ograniczone otwieranie ust", "Bruksizm (zgrzytanie zębami)", "Ból ucha bez choroby ucha"],
      "uk": [
        "Біль у щелепі та КМД/СНЩС",
        "Головний біль і мігрень",
        "Запаморочення (шийне / щелепне)",
        "Шум у вухах (тинітус)",
        "Напруження в ділянці шиї та лопаток",
        "Обмежене відкривання рота",
        "Бруксизм (скрегіт зубами)",
        "Біль у вухах без патології вуха"
      ],
      "es": [
        "Dolor de mandíbula y DCM/ATM",
        "Dolores de cabeza y migrañas",
        "Mareos (cervicales / mandibulares)",
        "Acúfenos",
        "Tensiones cervicoescapulares",
        "Limitación de la apertura bucal",
        "Bruxismo (rechinar de dientes)",
        "Dolor de oído sin patología auditiva"
      ],
      "ku": [
        "Êşa çenê û CMD/TMJ",
        "Serêş û mîgren",
        "Gêjbûn (ji stû / ji çenê)",
        "Zingîna guh (tinnitus)",
        "Girjbûna stû û milan",
        "Sînordarbûna vekirina dev",
        "Bruksîzm (qirçandina diranan)",
        "Êşa guh bêyî nexweşiya guh"
      ],
    },
    contraindications: {
      de: ["Aktive Infektion im Kieferbereich", "Fraktur des Unterkiefers", "Tumore im Kopf-/Halsbereich", "Akute entzündliche Arthritis des Kiefergelenks"],
      fr: ["Infection active dans la région de la mâchoire", "Fracture de la mandibule", "Tumeurs de la région tête/cou", "Arthrite inflammatoire aiguë de l'ATM"],
      en: ["Active infection in the jaw area", "Mandibular fracture", "Head/neck tumours", "Acute inflammatory arthritis of the TMJ"],
      nl: ["Actieve infectie in het kaakgebied", "Onderkaakfractuur", "Tumoren in het hoofd-/halsgebied", "Acute inflammatoire artritis van het kaakgewricht"],
      tr: ["Çene bölgesinde aktif enfeksiyon", "Mandibula kırığı", "Baş/boyun bölgesindeki tümörler", "ATM'nin akut inflamatuvar artriti"],
      ar: ["عدوى نشطة في منطقة الفك", "كسر الفك السفلي", "أورام منطقة الرأس والرقبة", "التهاب مفصل التهابي حاد للمفصل ATM"],
      pl: ["Aktywna infekcja w okolicy żuchwy", "Złamanie żuchwy", "Nowotwory okolicy głowy/szyi", "Ostre zapalenie stawowe ATM"],
      "uk": [
        "Активна інфекція в ділянці щелепи",
        "Перелом нижньої щелепи",
        "Пухлини ділянки голови/шиї",
        "Гострий запальний артрит СНЩС"
      ],
      "es": [
        "Infección activa en la zona de la mandíbula",
        "Fractura de la mandíbula",
        "Tumores de la región de cabeza/cuello",
        "Artritis inflamatoria aguda de la ATM"
      ],
      "ku": [
        "Enfeksiyona çalak li herêma çenê",
        "Şikestina çena jêrîn",
        "Tumorên herêma ser/stû",
        "Artrîta înflamatuar a akût a TMJ"
      ],
    },
    duration: {
      de: "30–45 Minuten pro Sitzung",
      fr: "30–45 minutes par séance",
      en: "30–45 minutes per session",
      nl: "30–45 minuten per sessie",
      tr: "Seans başına 30–45 dakika",
      ar: "30-45 دقيقة لكل جلسة",
      pl: "30–45 minut na sesję",
      "uk": "30–45 хвилин за сеанс",
      "es": "30–45 minutos por sesión",
      "ku": "30–45 deqîqe her seans",
    },
    teamSlugs: ["fabienne-dormann"],
    teamNames: ["Fabienne Dormann"],
    faq: [
      {
        q: { de: "Wer überweist mich für eine ATM-Therapie?", fr: "Qui m'adresse pour une thérapie ATM ?", en: "Who refers me for TMJ therapy?", nl: "Wie verwijst mij door voor ATM-therapie?", tr: "ATM terapisi için beni kim yönlendirir?", ar: "من يحيلني لعلاج مفصل الفك؟", pl: "Kto kieruje mnie na terapię stawu skroniowo-żuchwowego?",
        "uk": "Хто направляє мене на терапію СНЩС?",
        "es": "¿Quién me deriva para una terapia de la ATM?",
        "ku": "Kî min ji bo terapiya TMJ dişîne?" },
        a: { de: "Überweisungen kommen oft von Zahnärzten, Kieferorthopäden oder HNO-Ärzten. Sie können uns aber direkt kontaktieren — wir prüfen, ob eine ATM-Therapie passt, und koordinieren bei Bedarf mit Ihrem Zahnarzt. Für die INAMI-Rückerstattung bleibt eine ärztliche Verordnung nötig.", fr: "Les adressages viennent souvent des dentistes, orthodontistes ou ORL. Vous pouvez cependant nous contacter directement — nous évaluons si une thérapie ATM est adaptée et coordonnons au besoin avec votre dentiste. Pour le remboursement INAMI, une prescription reste nécessaire.", en: "Referrals often come from dentists, orthodontists or ENT specialists. You can also contact us directly — we assess whether TMJ therapy fits and coordinate with your dentist if needed. A prescription is still required for INAMI reimbursement.", nl: "Doorverwijzingen komen vaak van tandartsen, orthodontisten of KNO-artsen. U kunt ons ook rechtstreeks contacteren — wij beoordelen of ATM-therapie past en coördineren indien nodig met uw tandarts. Voor RIZIV-terugbetaling blijft een voorschrift nodig.", tr: "Sevkler genellikle diş hekimleri, ortodontistler veya KBB uzmanlarından gelir. Doğrudan da bize ulaşabilirsiniz — ATM terapisinin uygun olup olmadığını değerlendirir, gerekirse diş hekiminizle koordine oluruz. INAMI geri ödemesi için reçete yine de gereklidir.", ar: "كثيرًا ما تأتي الإحالات من أطباء الأسنان أو تقويم الأسنان أو الأنف والأذن والحنجرة. يمكنك أيضًا الاتصال بنا مباشرة — نقيّم مدى ملاءمة علاج مفصل الفك وننسّق مع طبيب أسنانك عند الحاجة. تبقى الوصفة لازمة لاسترداد INAMI.", pl: "Skierowania często pochodzą od dentystów, ortodontów lub laryngologów. Możesz też skontaktować się z nami bezpośrednio — oceniamy, czy terapia jest odpowiednia, i w razie potrzeby współpracujemy z Twoim dentystą. Do refundacji INAMI skierowanie jest nadal wymagane.",
        "uk": "Направлення часто надходять від стоматологів, ортодонтів або ЛОР-лікарів. Втім, Ви можете звернутися до нас напряму — ми оцінимо, чи підходить Вам терапія СНЩС, і за потреби скоординуємося з Вашим стоматологом. Для відшкодування INAMI направлення все одно потрібне.",
        "es": "Las derivaciones suelen venir de dentistas, ortodoncistas u otorrinolaringólogos. No obstante, puede contactarnos directamente — evaluamos si la terapia de la ATM es adecuada y, si es necesario, nos coordinamos con su dentista. Para el reembolso del INAMI sigue siendo necesaria una prescripción.",
        "ku": "Şandin gelek caran ji diranbijîşk, ortodontîst an bijîşkên guh-poz-gewrî (KBB) tên. Lê hûn dikarin rasterast bi me re têkilî daynin — em dinirxînin ka terapiya TMJ guncav e û heke pêwîst be bi diranbijîşkê we re hevrêz dikin. Ji bo vegerandina INAMI, reçeteyek hîn jî pêwîst e." },
      },
      {
        q: { de: "Wie viele Sitzungen sind nötig?", fr: "Combien de séances faut-il prévoir ?", en: "How many sessions will I need?", nl: "Hoeveel sessies heb ik nodig?", tr: "Kaç seans gerekir?", ar: "كم عدد الجلسات التي سأحتاجها؟", pl: "Ile sesji będę potrzebować?",
        "uk": "Скільки сеансів знадобиться?",
        "es": "¿Cuántas sesiones hay que prever?",
        "ku": "Çend seans pêwîst in?" },
        a: { de: "Viele CMD-Beschwerden bessern sich innerhalb einiger Sitzungen, kombiniert mit einfachen Übungen für zu Hause. Wir bewerten regelmäßig neu und passen an — Ziel ist Ihre Selbstständigkeit.", fr: "Beaucoup de troubles de l'ATM (CMD) s'améliorent en quelques séances, associées à des exercices simples à la maison. Nous réévaluons régulièrement et adaptons — l'objectif est votre autonomie.", en: "Many TMJ (CMD) problems improve within a few sessions, combined with simple home exercises. We reassess regularly and adapt — the goal is your autonomy.", nl: "Veel ATM-klachten (CMD) verbeteren binnen enkele sessies, in combinatie met eenvoudige oefeningen thuis. We evalueren regelmatig en passen aan — het doel is uw zelfstandigheid.", tr: "Birçok ATM (CMD) sorunu, basit ev egzersizleriyle birlikte birkaç seansta iyileşir. Düzenli olarak yeniden değerlendirir ve uyarlarız — amaç bağımsızlığınızdır.", ar: "تتحسّن كثير من مشكلات مفصل الفك (CMD) خلال بضع جلسات مع تمارين منزلية بسيطة. نعيد التقييم بانتظام ونكيّف — الهدف استقلاليتك.", pl: "Wiele problemów ze stawem żuchwowym (CMD) poprawia się w ciągu kilku sesji, w połączeniu z prostymi ćwiczeniami w domu. Regularnie oceniamy i dostosowujemy — celem jest Twoja samodzielność.",
        "uk": "Багато розладів СНЩС (КМД) покращуються за кілька сеансів у поєднанні з простими вправами вдома. Ми регулярно проводимо повторну оцінку й адаптуємо лікування — мета полягає у Вашій самостійності.",
        "es": "Muchos trastornos de la ATM (DCM) mejoran en pocas sesiones, combinadas con ejercicios sencillos en casa. Reevaluamos con regularidad y adaptamos — el objetivo es su autonomía.",
        "ku": "Gelek aloziyên TMJ (CMD) di çend seansan de baştir dibin, bi werzîşên hêsan ên li malê re. Em bi rêkûpêk ji nû ve dinirxînin û eyar dikin — armanc serbixwebûna we ye." },
      },
      {
        q: { de: "Kann Physiotherapie bei Kieferschmerzen und Knacken wirklich helfen?", fr: "La kiné peut-elle vraiment aider les douleurs de mâchoire et les craquements ?", en: "Can physiotherapy really help jaw pain and clicking?", nl: "Kan kinesitherapie echt helpen bij kaakpijn en klikken?", tr: "Fizyoterapi çene ağrısına ve çıtlamaya gerçekten yardımcı olur mu?", ar: "هل يمكن للعلاج الطبيعي أن يساعد فعلًا في ألم الفك والطقطقة؟", pl: "Czy fizjoterapia naprawdę pomaga w bólu żuchwy i klikaniu?",
        "uk": "Чи справді фізіотерапія може допомогти при болю в щелепі та клацанні?",
        "es": "¿Puede la fisioterapia ayudar realmente con el dolor de mandíbula y los chasquidos?",
        "ku": "Ma fizyoterapî bi rastî dikare ji êşa çenê û qirçînan re bibe alîkar?" },
        a: { de: "Ja, oft. Ein Knacken allein ist häufig und meist harmlos — es muss nicht « repariert » werden. Bei Schmerzen, Verspannung oder eingeschränkter Öffnung helfen gezielte Techniken und Übungen zuverlässig.", fr: "Oui, souvent. Un craquement isolé est fréquent et le plus souvent bénin — il n'y a rien à « réparer ». En cas de douleur, de tension ou d'ouverture limitée, des techniques ciblées et des exercices aident efficacement.", en: "Yes, often. Clicking on its own is common and usually harmless — nothing to « fix ». When there is pain, tension or limited opening, targeted techniques and exercises help reliably.", nl: "Ja, vaak. Klikken op zich is frequent en meestal onschuldig — er valt niets te « repareren ». Bij pijn, spanning of beperkte opening helpen gerichte technieken en oefeningen betrouwbaar.", tr: "Evet, sıklıkla. Tek başına çıtlama yaygındır ve genellikle zararsızdır — « onarılacak » bir şey yoktur. Ağrı, gerginlik veya kısıtlı açılma varsa hedefli teknikler ve egzersizler güvenilir şekilde yardımcı olur.", ar: "نعم، غالبًا. الطقطقة وحدها شائعة وعادةً غير ضارّة — لا شيء « لإصلاحه ». عند وجود ألم أو تشنّج أو محدودية في الفتح، تساعد التقنيات والتمارين الموجّهة بفعالية.", pl: "Tak, często. Samo klikanie jest częste i zwykle nieszkodliwe — nie ma czego « naprawiać ». Gdy występuje ból, napięcie lub ograniczone otwieranie, ukierunkowane techniki i ćwiczenia pomagają skutecznie.",
        "uk": "Так, часто. Поодиноке клацання трапляється часто і здебільшого є доброякісним — тут нічого не потрібно «лагодити». Якщо є біль, напруження чи обмежене відкривання рота, цілеспрямовані техніки та вправи ефективно допомагають.",
        "es": "Sí, a menudo. Un chasquido aislado es frecuente y casi siempre benigno — no hay nada que «reparar». En caso de dolor, tensión o apertura limitada, las técnicas específicas y los ejercicios ayudan de forma eficaz.",
        "ku": "Erê, gelek caran. Qirçîneke tenê gelemper e û bi piranî bê zirar e — tiştek tune ku were «tamîrkirin». Heke êş, girjbûn an vekirina sînordar hebe, teknîkên armancdar û werzîş bi bandor dibin alîkar." },
      },
      {
        q: { de: "Welche Beschwerden gehören zu einer CMD?", fr: "Quels symptômes relèvent d'un trouble de l'ATM (CMD) ?", en: "Which symptoms belong to a TMJ disorder (CMD)?", nl: "Welke symptomen horen bij een ATM-stoornis (CMD)?", tr: "Hangi belirtiler bir ATM bozukluğuna (CMD) aittir?", ar: "ما الأعراض التي تدل على اضطراب مفصل الفك (CMD)؟", pl: "Które objawy należą do zaburzeń stawu żuchwowego (CMD)?",
        "uk": "Які симптоми вказують на розлад СНЩС (КМД)?",
        "es": "¿Qué síntomas corresponden a un trastorno de la ATM (DCM)?",
        "ku": "Kîjan nîşan girêdayî aloziya TMJ (CMD) ne?" },
        a: { de: "Kieferschmerzen, Knacken oder Blockieren, Kopfschmerzen, Ohr- oder Gesichtsdruck, Nackenverspannung und manchmal Schwindel. Diese Beschwerden hängen oft zusammen und lassen sich gemeinsam angehen.", fr: "Douleurs de mâchoire, craquements ou blocages, maux de tête, pression à l'oreille ou au visage, tensions de nuque et parfois vertiges. Ces symptômes sont souvent liés et se traitent conjointement.", en: "Jaw pain, clicking or locking, headaches, ear or facial pressure, neck tension and sometimes dizziness. These symptoms are often linked and can be addressed together.", nl: "Kaakpijn, klikken of blokkeren, hoofdpijn, oor- of aangezichtsdruk, nekspanning en soms duizeligheid. Deze symptomen hangen vaak samen en worden samen aangepakt.", tr: "Çene ağrısı, çıtlama veya kilitlenme, baş ağrısı, kulak veya yüz basıncı, boyun gerginliği ve bazen baş dönmesi. Bu belirtiler çoğu zaman bağlantılıdır ve birlikte ele alınabilir.", ar: "ألم الفك، طقطقة أو انغلاق، صداع، ضغط في الأذن أو الوجه، تشنّج الرقبة وأحيانًا دوخة. غالبًا ما ترتبط هذه الأعراض ويمكن معالجتها معًا.", pl: "Ból żuchwy, klikanie lub blokowanie, bóle głowy, ucisk w uchu lub twarzy, napięcie szyi i czasem zawroty głowy. Objawy te są często powiązane i można je leczyć razem.",
        "uk": "Біль у щелепі, клацання чи блокування, головний біль, тиск у вусі чи на обличчі, напруження в шиї та іноді запаморочення. Ці симптоми часто пов'язані між собою і лікуються разом.",
        "es": "Dolor de mandíbula, chasquidos o bloqueos, dolores de cabeza, presión en el oído o en la cara, tensiones en la nuca y a veces mareos. Estos síntomas suelen estar relacionados y se tratan conjuntamente.",
        "ku": "Êşa çenê, qirçîn an girtin, serêş, zext li guh an rû, girjbûna stû û carinan gêjbûn. Ev nîşan gelek caran bi hev ve girêdayî ne û bi hev re tên dermankirin." },
      },
      {
        q: { de: "Muss ich meinen Zahnarzt weiter aufsuchen?", fr: "Dois-je continuer à voir mon dentiste ?", en: "Should I keep seeing my dentist?", nl: "Moet ik mijn tandarts blijven zien?", tr: "Diş hekimimi görmeye devam etmeli miyim?", ar: "هل يجب أن أستمر في زيارة طبيب أسناني؟", pl: "Czy powinienem nadal chodzić do dentysty?",
        "uk": "Чи потрібно й надалі відвідувати стоматолога?",
        "es": "¿Debo seguir yendo a mi dentista?",
        "ku": "Ma divê ez serdana diranbijîşkê xwe bidomînim?" },
        a: { de: "Ja. Physiotherapie ersetzt Ihren Zahnarzt nicht, sondern ergänzt ihn — etwa neben einer Aufbissschiene. Wir stimmen uns bei Bedarf gerne mit ihm ab.", fr: "Oui. La kiné ne remplace pas votre dentiste, elle le complète — par exemple en parallèle d'une gouttière. Nous nous coordonnons volontiers avec lui si nécessaire.", en: "Yes. Physiotherapy doesn't replace your dentist, it complements them — for example alongside a bite splint. We're happy to coordinate with them if needed.", nl: "Ja. Kinesitherapie vervangt uw tandarts niet, ze vult aan — bijvoorbeeld naast een beetplaatje. We coördineren graag met hem indien nodig.", tr: "Evet. Fizyoterapi diş hekiminizin yerini almaz, onu tamamlar — örneğin bir gece plağının yanında. Gerekirse onunla memnuniyetle koordine oluruz.", ar: "نعم. لا يحلّ العلاج الطبيعي محلّ طبيب أسنانك بل يكمّله — مثلًا إلى جانب جبيرة إطباق. يسعدنا التنسيق معه عند الحاجة.", pl: "Tak. Fizjoterapia nie zastępuje dentysty, lecz go uzupełnia — np. obok szyny nagryzowej. Chętnie współpracujemy z nim w razie potrzeby.",
        "uk": "Так. Фізіотерапія не замінює Вашого стоматолога, а доповнює його роботу — наприклад, паралельно з використанням капи. За потреби ми охоче координуємося з ним.",
        "es": "Sí. La fisioterapia no sustituye a su dentista, lo complementa — por ejemplo, en paralelo a una férula. Con gusto nos coordinamos con él si es necesario.",
        "ku": "Erê. Fizyoterapî şûna diranbijîşkê we nagire, wî temam dike — bo nimûne li kêleka şînaya diranan (splint). Heke pêwîst be em bi dilxwazî bi wî re hevrêz dikin." },
      },
      {
        q: { de: "Ist die Behandlung schmerzhaft?", fr: "Le traitement est-il douloureux ?", en: "Is the treatment painful?", nl: "Is de behandeling pijnlijk?", tr: "Tedavi ağrılı mı?", ar: "هل العلاج مؤلم؟", pl: "Czy leczenie jest bolesne?",
        "uk": "Чи болісне лікування?",
        "es": "¿El tratamiento es doloroso?",
        "ku": "Ma dermankirin bi êş e?" },
        a: { de: "Nein. Die Techniken sind sanft und werden Ihrer Empfindlichkeit angepasst, auch bei Arbeit im Mundinneren. Sie behalten stets die Kontrolle und sagen uns, was angenehm ist.", fr: "Non. Les techniques sont douces et adaptées à votre sensibilité, y compris pour le travail à l'intérieur de la bouche. Vous gardez le contrôle et nous indiquez ce qui est confortable.", en: "No. The techniques are gentle and adapted to your sensitivity, including intra-oral work. You stay in control and tell us what feels comfortable.", nl: "Nee. De technieken zijn zacht en aangepast aan uw gevoeligheid, ook bij werk binnen in de mond. U houdt de controle en geeft aan wat comfortabel is.", tr: "Hayır. Teknikler naziktir ve ağız içi çalışma dahil hassasiyetinize göre uyarlanır. Kontrol sizde kalır ve neyin rahat olduğunu bize söylersiniz.", ar: "لا. التقنيات لطيفة وتُكيَّف مع حساسيتك، بما في ذلك العمل داخل الفم. تبقى المتحكّم وتخبرنا بما هو مريح.", pl: "Nie. Techniki są delikatne i dostosowane do Twojej wrażliwości, także przy pracy wewnątrz jamy ustnej. Zachowujesz kontrolę i mówisz nam, co jest komfortowe.",
        "uk": "Ні. Техніки м'які й адаптовані до Вашої чутливості, зокрема під час роботи всередині ротової порожнини. Ви зберігаєте контроль і самі кажете нам, що для Вас комфортно.",
        "es": "No. Las técnicas son suaves y se adaptan a su sensibilidad, también en el trabajo dentro de la boca. Usted mantiene el control y nos indica lo que le resulta cómodo.",
        "ku": "Na. Teknîk nerm in û li gorî hestiyariya we tên eyarkirin, di nav de xebata hundirê dev jî. Kontrol di destê we de dimîne û hûn ji me re dibêjin ka çi ji we re rehet e." },
      },
    ],
    relatedSlugs: ["manuelle-therapie"],
  },

  "lymphdrainage": {
    icon: Droplets,
    color: "from-teal-600 to-teal-800",
    badge: "Méthode O. Leduc",
    title: {
      de: "Lymphdrainage",
      fr: "Drainage Lymphatique",
      en: "Lymphatic Drainage",
      nl: "Lymfedrainage",
      tr: "Lenf Drenajı",
      ar: "الصرف اللمفاوي",
      pl: "Drenaż Limfatyczny",
      "uk": "Лімфодренаж",
      "es": "Drenaje linfático",
      "ku": "Drenaja lîmfatîk",
    },
    subtitle: {
      de: "Manuelle Lymphdrainage nach der Methode O. Leduc",
      fr: "Drainage lymphatique manuel selon la méthode O. Leduc",
      en: "Manual lymphatic drainage by the O. Leduc method",
      nl: "Manuele lymfedrainage volgens de methode O. Leduc",
      tr: "O. Leduc yöntemine göre manuel lenf drenajı",
      ar: "الصرف اللمفاوي اليدوي وفق طريقة O. Leduc",
      pl: "Ręczny drenaż limfatyczny metodą O. Leduc",
      "uk": "Мануальний лімфодренаж за методом O. Leduc",
      "es": "Drenaje linfático manual según el método O. Leduc",
      "ku": "Drenaja lîmfatîk a destî li gorî rêbaza O. Leduc",
    },
    description: {
      de: "Manuelle Lymphdrainage nach der anerkannten Methode von O. Leduc. Sanfte Spezialmassage zur Reduzierung von Ödemen, Stimulation des Lymphsystems und Verbesserung des Lymphflusses.",
      fr: "Drainage lymphatique manuel selon la méthode reconnue d'O. Leduc. Massage spécial et doux pour réduire les œdèmes, stimuler le système lymphatique et améliorer la circulation lymphatique.",
      en: "Manual lymphatic drainage by the recognised O. Leduc method. Gentle specialist massage to reduce oedema, stimulate the lymphatic system and improve lymph flow.",
      nl: "Manuele lymfedrainage volgens de erkende methode van O. Leduc. Zachte specialistische massage om oedeem te verminderen, het lymfesysteem te stimuleren en de lymfestroom te verbeteren.",
      tr: "Tanınan O. Leduc yöntemine göre manuel lenf drenajı. Ödemi azaltmak, lenf sistemini uyarmak ve lenf akışını iyileştirmek için nazik uzman masajı.",
      ar: "الصرف اللمفاوي اليدوي وفق طريقة O. Leduc المعترف بها. تدليك متخصص وناعم لتقليل الوذمة وتحفيز الجهاز اللمفاوي وتحسين تدفق اللمف.",
      pl: "Ręczny drenaż limfatyczny uznaną metodą O. Leduc. Delikatny specjalistyczny masaż w celu zmniejszenia obrzęków, stymulacji układu limfatycznego i poprawy przepływu limfy.",
      "uk": "Мануальний лімфодренаж за визнаним методом O. Leduc. Спеціальний м'який масаж для зменшення набряків, стимуляції лімфатичної системи та покращення лімфообігу.",
      "es": "Drenaje linfático manual según el reconocido método de O. Leduc. Masaje especial y suave para reducir los edemas, estimular el sistema linfático y mejorar la circulación linfática.",
      "ku": "Drenaja lîmfatîk a destî li gorî rêbaza naskirî ya O. Leduc. Masajeke taybet û nerm ji bo kêmkirina edeman, teşwîqkirina sîstema lîmfatîk û baştirkirina herikîna lîmfê.",
    },
    longDesc: {
      de: [
        "Die manuelle Lymphdrainage (MLD) ist eine sanfte, rhythmische Massagetechnik, die gezielt das Lymphsystem aktiviert. Anders als die klassische Massage arbeitet die MLD mit sehr leichtem Druck und kreisenden Bewegungen, die dem natürlichen Lymphfluss folgen.",
        "Die Methode nach Olivier Leduc — einem belgischen Pionier der Lymphologie — ist wissenschaftlich fundiert und wird weltweit in der klinischen Praxis eingesetzt. Sie eignet sich besonders für die Behandlung von primären und sekundären Lymphödemen sowie postoperativen Schwellungen.",
        "In Kombination mit Kompressionsverbänden oder -strümpfen (Komplexe Physikalische Entstauungstherapie, KPE) können auch chronische Lymphödeme langfristig erfolgreich behandelt werden.",
      ],
      fr: [
        "Le drainage lymphatique manuel (DLM) est une technique de massage douce et rythmique qui active ciblément le système lymphatique. Contrairement au massage classique, le DLM utilise une pression très légère et des mouvements circulaires qui suivent le flux lymphatique naturel.",
        "La méthode d'Olivier Leduc — un pionnier belge de la lymphologie — est scientifiquement fondée et utilisée dans la pratique clinique dans le monde entier. Elle convient particulièrement au traitement des lymphœdèmes primaires et secondaires ainsi que des gonflements post-opératoires.",
        "En combinaison avec des bandages ou bas de compression (Thérapie Décongestive Complexe, TDC), même les lymphœdèmes chroniques peuvent être traités avec succès à long terme.",
      ],
      en: [
        "Manual lymphatic drainage (MLD) is a gentle, rhythmic massage technique that specifically activates the lymphatic system. Unlike classical massage, MLD uses very light pressure and circular movements that follow the natural lymph flow.",
        "The method of Olivier Leduc — a Belgian pioneer of lymphology — is scientifically grounded and used in clinical practice worldwide. It is particularly suited to treating primary and secondary lymphoedema and post-operative swelling.",
        "In combination with compression bandages or stockings (Complex Decongestive Therapy, CDT), even chronic lymphoedema can be successfully treated long-term.",
      ],
      nl: [
        "Manuele lymfedrainage (MLD) is een zachte, ritmische massagetechniek die het lymfesysteem gericht activeert. In tegenstelling tot klassieke massage gebruikt MLD zeer lichte druk en cirkelvormige bewegingen die de natuurlijke lymfestroom volgen.",
        "De methode van Olivier Leduc — een Belgisch pionier van de lymfologie — is wetenschappelijk onderbouwd en wordt wereldwijd in de klinische praktijk gebruikt. Ze is bijzonder geschikt voor de behandeling van primair en secundair lymfoedeem en postoperatieve zwellingen.",
        "In combinatie met compressieverband of -kousen (Complexe Fysiotherapeutische Entstauingstherapie, CFT) kunnen zelfs chronische lymfoedemen op lange termijn succesvol worden behandeld.",
      ],
      tr: [
        "Manuel lenf drenajı (MLD), lenf sistemini özellikle aktive eden nazik, ritmik bir masaj tekniğidir. Klasik masajın aksine, MLD doğal lenf akışını izleyen çok hafif baskı ve dairesel hareketler kullanır.",
        "Belçikalı bir lenfoloji öncüsü olan Olivier Leduc'un yöntemi bilimsel temellere dayanır ve dünya genelinde klinik pratikte kullanılmaktadır. Primer ve sekonder lenfödem ile ameliyat sonrası şişmelerin tedavisine özellikle uygundur.",
        "Kompresyon bandajları veya çoraplarıyla kombinasyon halinde (Kompleks Dekongestif Terapi, CDT), kronik lenfödem bile uzun vadede başarıyla tedavi edilebilir.",
      ],
      ar: [
        "الصرف اللمفاوي اليدوي (MLD) هو تقنية تدليك ناعمة وإيقاعية تنشط الجهاز اللمفاوي بشكل محدد. على عكس التدليك الكلاسيكي، يستخدم MLD ضغطًا خفيفًا جدًا وحركات دائرية تتبع تدفق اللمف الطبيعي.",
        "طريقة أوليفييه لودك — رائد بلجيكي في علم اللمف — مؤسسة علميًا وتُستخدم في الممارسة السريرية في جميع أنحاء العالم. وهي مناسبة بشكل خاص لعلاج الوذمة اللمفية الأولية والثانوية والتورمات بعد العملية.",
        "بالتزامن مع ضمادات أو جوارب الضغط (العلاج الفيزيائي الاحتقاني المعقد)، يمكن علاج حتى الوذمة اللمفية المزمنة بنجاح على المدى الطويل.",
      ],
      pl: [
        "Ręczny drenaż limfatyczny (MLD) to delikatna, rytmiczna technika masażu, która celowo aktywuje układ limfatyczny. W przeciwieństwie do klasycznego masażu MLD używa bardzo lekkiego ucisku i ruchów okrężnych podążających za naturalnym przepływem limfy.",
        "Metoda Oliviera Leduca — belgijskiego pioniera limfologii — jest naukowo ugruntowana i stosowana w praktyce klinicznej na całym świecie. Jest szczególnie odpowiednia do leczenia pierwotnego i wtórnego obrzęku limfatycznego oraz obrzęków pooperacyjnych.",
        "W połączeniu z bandażami lub pończochami uciskowymi (Kompleksowa Terapia Decongencyjna, CDT) nawet przewlekły obrzęk limfatyczny może być z powodzeniem leczony długoterminowo.",
      ],
      "uk": [
        "Мануальний лімфодренаж (МЛД) — це м'яка ритмічна масажна техніка, яка цілеспрямовано активує лімфатичну систему. На відміну від класичного масажу, МЛД використовує дуже легкий тиск і кругові рухи, що повторюють природний напрямок лімфотоку.",
        "Метод Olivier Leduc — бельгійського піонера лімфології — науково обґрунтований і застосовується в клінічній практиці в усьому світі. Він особливо підходить для лікування первинної та вторинної лімфедеми, а також післяопераційних набряків.",
        "У поєднанні з компресійними бинтами чи панчохами (комплексна протинабрякова терапія, КПТ) навіть хронічну лімфедему можна успішно лікувати в довгостроковій перспективі."
      ],
      "es": [
        "El drenaje linfático manual (DLM) es una técnica de masaje suave y rítmica que activa de forma específica el sistema linfático. A diferencia del masaje clásico, el DLM utiliza una presión muy ligera y movimientos circulares que siguen el flujo linfático natural.",
        "El método de Olivier Leduc — un pionero belga de la linfología — tiene una base científica y se utiliza en la práctica clínica en todo el mundo. Es especialmente adecuado para el tratamiento de los linfedemas primarios y secundarios, así como de las hinchazones postoperatorias.",
        "En combinación con vendajes o medias de compresión (Terapia Descongestiva Compleja, TDC), incluso los linfedemas crónicos pueden tratarse con éxito a largo plazo."
      ],
      "ku": [
        "Drenaja lîmfatîk a destî (MLD) teknîkeke masajê ya nerm û rîtmîk e ku sîstema lîmfatîk bi awayekî armancdar çalak dike. Berevajî masaja klasîk, MLD zexteke gelek sivik û tevgerên dorvegêr bi kar tîne ku li pey herikîna xwezayî ya lîmfê diçin.",
        "Rêbaza Olivier Leduc — pêşengekî Belçîkî yê lîmfolojiyê — bingeheke zanistî heye û li seranserê cîhanê di pratîka klînîk de tê bikaranîn. Ew bi taybetî ji bo dermankirina lîmfedemên seretayî û duyemîn û her weha werimînên piştî emeliyatê guncav e.",
        "Bi bandaj an çorapên kompresyonê re (Terapiya Dekonjestîf a Tevlihev, CDT), heta lîmfedemên kronîk jî dikarin demeke dirêj bi serkeftî werin dermankirin."
      ],
    },
    points: {
      de: ["Methode nach O. Leduc (Belgien)", "Sanfte, rhythmische Technik", "Aktivierung des Lymphsystems", "Reduzierung von Ödemen", "Komplexe Physikalische Entstauungstherapie (KPE)"],
      fr: ["Méthode selon O. Leduc (Belgique)", "Technique douce et rythmique", "Activation du système lymphatique", "Réduction des œdèmes", "Thérapie Décongestive Complexe (TDC)"],
      en: ["O. Leduc method (Belgium)", "Gentle, rhythmic technique", "Lymphatic system activation", "Oedema reduction", "Complex Decongestive Therapy (CDT)"],
      nl: ["Methode volgens O. Leduc (België)", "Zachte, ritmische techniek", "Activering van het lymfesysteem", "Vermindering van oedeem", "Complexe Fysiotherapeutische Entstauingstherapie (CFT)"],
      tr: ["O. Leduc yöntemi (Belçika)", "Nazik, ritmik teknik", "Lenf sisteminin aktivasyonu", "Ödem azaltma", "Kompleks Dekongestif Terapi (CDT)"],
      ar: ["طريقة O. Leduc (بلجيكا)", "تقنية ناعمة وإيقاعية", "تنشيط الجهاز اللمفاوي", "تقليل الوذمة", "العلاج الفيزيائي الاحتقاني المعقد"],
      pl: ["Metoda O. Leduc (Belgia)", "Delikatna, rytmiczna technika", "Aktywacja układu limfatycznego", "Redukcja obrzęków", "Kompleksowa Terapia Decongencyjna (CDT)"],
      "uk": [
        "Метод O. Leduc (Бельгія)",
        "М'яка ритмічна техніка",
        "Активація лімфатичної системи",
        "Зменшення набряків",
        "Комплексна протинабрякова терапія (КПТ)"
      ],
      "es": [
        "Método de O. Leduc (Bélgica)",
        "Técnica suave y rítmica",
        "Activación del sistema linfático",
        "Reducción de edemas",
        "Terapia Descongestiva Compleja (TDC)"
      ],
      "ku": [
        "Rêbaza O. Leduc (Belçîka)",
        "Teknîka nerm û rîtmîk",
        "Çalakkirina sîstema lîmfatîk",
        "Kêmkirina edeman",
        "Terapiya Dekonjestîf a Tevlihev (CDT)"
      ],
    },
    indications: {
      de: ["Post-operative Ödeme (Knie-/Hüftprothese)", "Lymphödem nach Tumoroperation", "Primäres Lymphödem", "Schwere Beine / Venöse Insuffizienz", "Sportverletzungen mit Schwellung", "Narbenmassage (post-op)", "Schwangerschaftsödeme", "Lipödem"],
      fr: ["Œdèmes post-op (prothèse genou/hanche)", "Lymphœdème post-cancer", "Lymphœdème primaire", "Jambes lourdes / insuffisance veineuse", "Blessures sportives avec gonflement", "Massage cicatriciel (post-op)", "Œdèmes de grossesse", "Lipoedème"],
      en: ["Post-op oedema (knee/hip prosthesis)", "Post-cancer lymphoedema", "Primary lymphoedema", "Heavy legs / venous insufficiency", "Sports injuries with swelling", "Scar massage (post-op)", "Pregnancy oedema", "Lipoedema"],
      nl: ["Post-op oedeem (knie-/heupprothese)", "Lymfoedeem na kankeroperatie", "Primair lymfoedeem", "Zware benen / veneuze insufficiëntie", "Sportblessures met zwelling", "Littekenmassage (post-op)", "Zwangerschapsoedeeem", "Lipoedeem"],
      tr: ["Ameliyat sonrası ödem (diz/kalça protezi)", "Kanser sonrası lenfödem", "Primer lenfödem", "Ağır bacaklar / venöz yetmezlik", "Şişme ile birlikte spor yaralanmaları", "Skar masajı (ameliyat sonrası)", "Gebelik ödemi", "Lipödem"],
      ar: ["وذمة ما بعد العملية (طرف صناعي للركبة/الورك)", "وذمة لمفية ما بعد السرطان", "وذمة لمفية أولية", "أرجل ثقيلة / قصور وريدي", "إصابات رياضية مع تورم", "تدليك الندبات (بعد العملية)", "وذمة الحمل", "شحم الوذمة"],
      pl: ["Obrzęk pooperacyjny (proteza kolana/biodra)", "Obrzęk limfatyczny po nowotworze", "Pierwotny obrzęk limfatyczny", "Ciężkie nogi / niewydolność żylna", "Urazy sportowe z obrzękiem", "Masaż blizn (po operacji)", "Obrzęki ciążowe", "Lipobrzęk"],
      "uk": [
        "Післяопераційні набряки (ендопротез коліна/кульшового суглоба)",
        "Лімфедема після онкологічного лікування",
        "Первинна лімфедема",
        "Важкість у ногах / венозна недостатність",
        "Спортивні травми з набряком",
        "Масаж рубців (після операції)",
        "Набряки під час вагітності",
        "Ліпедема"
      ],
      "es": [
        "Edemas postoperatorios (prótesis de rodilla/cadera)",
        "Linfedema tras un cáncer",
        "Linfedema primario",
        "Piernas pesadas / insuficiencia venosa",
        "Lesiones deportivas con hinchazón",
        "Masaje de cicatrices (postoperatorio)",
        "Edemas del embarazo",
        "Lipedema"
      ],
      "ku": [
        "Edemên piştî emeliyatê (protezeya çok/ranê)",
        "Lîmfedema piştî penceşêrê",
        "Lîmfedema seretayî",
        "Lingên giran / kêmasiya damaran (venoz)",
        "Birînên werzîşê bi werimînê",
        "Masaja şopa birînê (piştî emeliyatê)",
        "Edemên ducaniyê",
        "Lîpedem"
      ],
    },
    contraindications: {
      de: ["Akute Infektion / Entzündung (Erysipel)", "Aktive Thrombose oder Lungenembolie", "Dekompensierte Herzinsuffizienz", "Aktiver Krebs (ohne ärztliche Freigabe)"],
      fr: ["Infection / inflammation aiguë (érysipèle)", "Thrombose active ou embolie pulmonaire", "Insuffisance cardiaque décompensée", "Cancer actif (sans aval médical)"],
      en: ["Acute infection/inflammation (erysipelas)", "Active thrombosis or pulmonary embolism", "Decompensated heart failure", "Active cancer (without medical clearance)"],
      nl: ["Acute infectie/ontsteking (erysipelas)", "Actieve trombose of longembolie", "Gedecompenseerde hartfalen", "Actieve kanker (zonder medische toestemming)"],
      tr: ["Akut enfeksiyon/iltihap (erizipel)", "Aktif tromboz veya pulmoner emboli", "Dekompanse kalp yetmezliği", "Aktif kanser (tıbbi onay olmadan)"],
      ar: ["عدوى/التهاب حاد (حمرة جلدية)", "تجلط الدم النشط أو الانصمام الرئوي", "فشل قلبي معاوض", "سرطان نشط (بدون موافقة طبية)"],
      pl: ["Ostra infekcja/zapalenie (róża)", "Aktywna zakrzepica lub zatorowość płucna", "Zdekompensowana niewydolność serca", "Aktywny nowotwór (bez zgody lekarskiej)"],
      "uk": [
        "Гостра інфекція / запалення (бешиха)",
        "Активний тромбоз або тромбоемболія легеневої артерії",
        "Декомпенсована серцева недостатність",
        "Активне онкологічне захворювання (без дозволу лікаря)"
      ],
      "es": [
        "Infección / inflamación aguda (erisipela)",
        "Trombosis activa o embolia pulmonar",
        "Insuficiencia cardíaca descompensada",
        "Cáncer activo (sin autorización médica)"
      ],
      "ku": [
        "Enfeksiyon / îltîhaba akût (erîsîpel)",
        "Tromboza çalak an embolîya pişikê",
        "Kêmasiya dil a dekompanse",
        "Penceşêra çalak (bêyî destûra bijîşkî)"
      ],
    },
    duration: {
      de: "30–60 Minuten pro Sitzung, je nach Bereich",
      fr: "30–60 minutes par séance, selon la zone traitée",
      en: "30–60 minutes per session, depending on the area",
      nl: "30–60 minuten per sessie, afhankelijk van het gebied",
      tr: "Bölgeye göre seans başına 30–60 dakika",
      ar: "30-60 دقيقة لكل جلسة، حسب المنطقة",
      pl: "30–60 minut na sesję, w zależności od obszaru",
      "uk": "30–60 хвилин за сеанс, залежно від ділянки, що лікується",
      "es": "30–60 minutos por sesión, según la zona tratada",
      "ku": "30–60 deqîqe her seans, li gorî herêma ku tê dermankirin",
    },
    teamSlugs: ["fabienne-dormann"],
    teamNames: ["Fabienne Dormann"],
    faq: [
      {
        q: { de: "Brauche ich eine ärztliche Verordnung?", fr: "Faut-il une prescription médicale ?", en: "Do I need a medical prescription?", nl: "Heb ik een medisch voorschrift nodig?", tr: "Tıbbi reçeteye ihtiyacım var mı?", ar: "هل أحتاج إلى وصفة طبية؟", pl: "Czy potrzebuję skierowania?",
        "uk": "Чи потрібне лікарське направлення?",
        "es": "¿Hace falta una prescripción médica?",
        "ku": "Ma reçeteyeke bijîşkî pêwîst e?" },
        a: { de: "Für die INAMI-Rückerstattung ja. Bei bestimmten Diagnosen (z. B. Lymphödem nach einer Operation) gilt eine spezifische Regelung mit besserer Erstattung — Ihr Arzt vermerkt dies auf der Verordnung.", fr: "Pour le remboursement INAMI, oui. Pour certaines situations (par ex. lymphœdème après une opération), une réglementation spécifique donne un meilleur remboursement — votre médecin l'indique sur la prescription.", en: "For INAMI reimbursement, yes. For certain conditions (e.g. lymphedema after surgery), a specific scheme gives better reimbursement — your doctor notes this on the prescription.", nl: "Voor RIZIV-terugbetaling wel. Bij bepaalde situaties (bv. lymfoedeem na een operatie) geeft een specifieke regeling een betere terugbetaling — uw arts vermeldt dit op het voorschrift.", tr: "INAMI geri ödemesi için evet. Bazı durumlarda (örn. ameliyat sonrası lenfödem) özel bir düzenleme daha iyi geri ödeme sağlar — doktorunuz bunu reçeteye yazar.", ar: "لاسترداد INAMI نعم. في بعض الحالات (مثل الوذمة اللمفية بعد الجراحة) ينطبق نظام خاص باسترداد أفضل — يدوّن طبيبك ذلك على الوصفة.", pl: "Do refundacji INAMI tak. W niektórych sytuacjach (np. obrzęk limfatyczny po operacji) obowiązuje szczególny system z lepszą refundacją — lekarz zaznacza to na skierowaniu.",
        "uk": "Для відшкодування INAMI — так. Для деяких ситуацій (наприклад, лімфедема після операції) діють спеціальні правила з кращим відшкодуванням — Ваш лікар зазначає це в направленні.",
        "es": "Para el reembolso del INAMI, sí. Para algunas situaciones (por ejemplo, un linfedema tras una operación), una normativa específica permite un mejor reembolso — su médico lo indica en la prescripción.",
        "ku": "Ji bo vegerandina INAMI, erê. Ji bo hin rewşan (bo nimûne lîmfedema piştî emeliyatê), rêziknameyeke taybet vegerandineke baştir dide — bijîşkê we vê li ser reçeteyê dinivîse." },
      },
      {
        q: { de: "Wie viele Sitzungen sind nötig?", fr: "Combien de séances faut-il prévoir ?", en: "How many sessions will I need?", nl: "Hoeveel sessies heb ik nodig?", tr: "Kaç seans gerekir?", ar: "كم عدد الجلسات التي سأحتاجها؟", pl: "Ile sesji będę potrzebować?",
        "uk": "Скільки сеансів знадобиться?",
        "es": "¿Cuántas sesiones hay que prever?",
        "ku": "Çend seans pêwîst in?" },
        a: { de: "Das hängt von der Indikation ab. Nach einer Operation genügen oft einige Sitzungen; bei einem chronischen Lymphödem ist eine regelmäßigere Begleitung sinnvoll, ergänzt durch Selbstmaßnahmen, die wir Ihnen beibringen.", fr: "Cela dépend de l'indication. Après une opération, quelques séances suffisent souvent ; pour un lymphœdème chronique, un suivi plus régulier est utile, complété par des gestes d'auto-prise en charge que nous vous apprenons.", en: "It depends on the indication. After surgery, a few sessions are often enough; for chronic lymphedema, more regular follow-up helps, combined with self-care we teach you.", nl: "Dat hangt af van de indicatie. Na een operatie volstaan vaak enkele sessies; bij chronisch lymfoedeem is regelmatiger opvolging nuttig, aangevuld met zelfzorg die we u aanleren.", tr: "Endikasyona bağlıdır. Ameliyat sonrası genellikle birkaç seans yeterlidir; kronik lenfödemde daha düzenli takip yararlıdır ve size öğrettiğimiz öz bakımla desteklenir.", ar: "يعتمد على الحالة. بعد الجراحة تكفي غالبًا بضع جلسات؛ في الوذمة اللمفية المزمنة تفيد متابعة أكثر انتظامًا مع إجراءات عناية ذاتية نعلّمك إياها.", pl: "To zależy od wskazania. Po operacji często wystarczy kilka sesji; przy przewlekłym obrzęku limfatycznym pomaga regularniejsza opieka, uzupełniona samodzielną pielęgnacją, której Cię uczymy.",
        "uk": "Це залежить від показання. Після операції часто достатньо кількох сеансів; при хронічній лімфедемі корисний регулярніший супровід, доповнений прийомами самодопомоги, яких ми Вас навчимо.",
        "es": "Depende de la indicación. Tras una operación, a menudo bastan unas pocas sesiones; en un linfedema crónico es útil un seguimiento más regular, completado con gestos de autocuidado que le enseñamos.",
        "ku": "Ev bi îndîkasyonê ve girêdayî ye. Piştî emeliyatê gelek caran çend seans bes in; ji bo lîmfedema kronîk, şopandineke birêkûpêktir bi kêr tê, bi xwe-lênêrîna ku em hînî we dikin re." },
      },
      {
        q: { de: "Ist das eine Wellness-Massage oder eine medizinische Behandlung?", fr: "Est-ce un massage détente ou un soin médical ?", en: "Is it a relaxing massage or a medical treatment?", nl: "Is het een ontspanningsmassage of een medische behandeling?", tr: "Bu rahatlatıcı bir masaj mı yoksa tıbbi bir tedavi mi?", ar: "هل هو تدليك استرخاء أم علاج طبي؟", pl: "Czy to masaż relaksacyjny czy leczenie medyczne?",
        "uk": "Це розслаблювальний масаж чи медична процедура?",
        "es": "¿Es un masaje relajante o un tratamiento médico?",
        "ku": "Ma ev masajeke rehetiyê ye an dermankirineke tibbî?" },
        a: { de: "Es ist eine medizinische Technik. Die manuelle Lymphdrainage nach der Methode O. Leduc ist sehr sanft, aber gezielt: Sie regt das Lymphsystem an, um Schwellungen zu verringern. Angenehm ist sie trotzdem oft.", fr: "C'est un soin médical. Le drainage lymphatique manuel selon la méthode O. Leduc est très doux mais ciblé : il stimule le système lymphatique pour réduire l'œdème. Il reste souvent agréable.", en: "It's a medical technique. Manual lymphatic drainage (O. Leduc method) is very gentle but targeted: it stimulates the lymphatic system to reduce swelling. It usually feels pleasant too.", nl: "Het is een medische techniek. Manuele lymfedrainage volgens de methode O. Leduc is heel zacht maar gericht: het stimuleert het lymfestelsel om zwelling te verminderen. Het voelt meestal ook aangenaam.", tr: "Bu tıbbi bir tekniktir. O. Leduc yöntemine göre manuel lenf drenajı çok nazik ama hedefe yöneliktir: şişliği azaltmak için lenf sistemini uyarır. Genellikle keyifli de hissettirir.", ar: "إنها تقنية طبية. التصريف اللمفي اليدوي بطريقة O. Leduc لطيف جدًا لكنه موجّه: يحفّز الجهاز اللمفي لتقليل التورّم. وغالبًا ما يكون مريحًا أيضًا.", pl: "To technika medyczna. Manualny drenaż limfatyczny metodą O. Leduc jest bardzo delikatny, ale ukierunkowany: pobudza układ limfatyczny, by zmniejszyć obrzęk. Zwykle jest też przyjemny.",
        "uk": "Це медична процедура. Мануальний лімфодренаж за методом O. Leduc дуже м'який, але цілеспрямований: він стимулює лімфатичну систему, щоб зменшити набряк. Здебільшого він також приємний.",
        "es": "Es un tratamiento médico. El drenaje linfático manual según el método O. Leduc es muy suave pero específico: estimula el sistema linfático para reducir el edema. Además, suele resultar agradable.",
        "ku": "Ew dermankirineke tibbî ye. Drenaja lîmfatîk a destî li gorî rêbaza O. Leduc gelek nerm lê armancdar e: ew sîstema lîmfatîk teşwîq dike da ku edemê kêm bike. Bi piranî xweş jî e." },
      },
      {
        q: { de: "Bei welchen Situationen ist die Lymphdrainage angezeigt?", fr: "Dans quelles situations le drainage lymphatique est-il indiqué ?", en: "When is lymphatic drainage indicated?", nl: "Bij welke situaties is lymfedrainage aangewezen?", tr: "Lenf drenajı hangi durumlarda endikedir?", ar: "في أي حالات يُنصح بالتصريف اللمفي؟", pl: "W jakich sytuacjach wskazany jest drenaż limfatyczny?",
        "uk": "У яких ситуаціях показаний лімфодренаж?",
        "es": "¿En qué situaciones está indicado el drenaje linfático?",
        "ku": "Drenaja lîmfatîk di kîjan rewşan de guncav e?" },
        a: { de: "Nach einer Operation (z. B. Brust- oder orthopädische Eingriffe), bei Lymphödem, schweren Beinen oder verzögerter Heilung. Wir prüfen im Bilan, ob es für Sie geeignet ist.", fr: "Après une opération (par ex. mammaire ou orthopédique), en cas de lymphœdème, de jambes lourdes ou de cicatrisation lente. Nous vérifions au bilan si c'est adapté à votre cas.", en: "After surgery (e.g. breast or orthopedic), for lymphedema, heavy legs or slow healing. We check at the assessment whether it suits your case.", nl: "Na een operatie (bv. borst- of orthopedisch), bij lymfoedeem, zware benen of trage wondheling. We controleren bij het bilan of het bij u past.", tr: "Ameliyat sonrası (örn. meme veya ortopedik), lenfödem, ağır bacaklar veya yavaş iyileşme durumunda. Sizin için uygun olup olmadığını değerlendirmede kontrol ederiz.", ar: "بعد الجراحة (مثل جراحة الثدي أو العظام)، وفي الوذمة اللمفية أو ثقل الساقين أو بطء الالتئام. نتحقّق في التقييم مما إذا كان مناسبًا لحالتك.", pl: "Po operacji (np. piersi lub ortopedycznej), przy obrzęku limfatycznym, ciężkich nogach lub wolnym gojeniu. Podczas oceny sprawdzamy, czy jest odpowiedni w Twoim przypadku.",
        "uk": "Після операції (наприклад, на молочній залозі чи ортопедичної), при лімфедемі, важкості в ногах або повільному загоєнні. Під час обстеження ми перевіряємо, чи підходить він саме Вам.",
        "es": "Tras una operación (por ejemplo, mamaria u ortopédica), en caso de linfedema, piernas pesadas o cicatrización lenta. En la evaluación comprobamos si es adecuado para su caso.",
        "ku": "Piştî emeliyatê (bo nimûne ya memikê an ortopedîk), di rewşa lîmfedemê, lingên giran an başbûna hêdî ya birînê de. Di nirxandinê de em kontrol dikin ka ew ji bo rewşa we guncav e." },
      },
      {
        q: { de: "Gibt es Fälle, in denen man es nicht anwenden sollte?", fr: "Y a-t-il des cas où il ne faut pas le pratiquer ?", en: "Are there cases where it should not be done?", nl: "Zijn er gevallen waarin het niet mag?", tr: "Uygulanmaması gereken durumlar var mı?", ar: "هل هناك حالات لا ينبغي فيها إجراؤه؟", pl: "Czy są sytuacje, w których nie należy go wykonywać?",
        "uk": "Чи є випадки, коли його не можна проводити?",
        "es": "¿Hay casos en los que no se debe practicar?",
        "ku": "Ma rewş hene ku divê neyê kirin?" },
        a: { de: "Ja — etwa bei akuter Infektion, unbehandelter Thrombose oder schwerer Herzschwäche. Deshalb machen wir vorab immer einen kurzen Check; im Zweifel stimmen wir uns mit Ihrem Arzt ab.", fr: "Oui — par exemple en cas d'infection aiguë, de thrombose non traitée ou d'insuffisance cardiaque sévère. C'est pourquoi nous faisons toujours un court contrôle préalable ; en cas de doute, nous consultons votre médecin.", en: "Yes — for example acute infection, untreated thrombosis or severe heart failure. That's why we always do a short check first; if in doubt, we consult your doctor.", nl: "Ja — bijvoorbeeld bij acute infectie, onbehandelde trombose of ernstig hartfalen. Daarom doen we vooraf altijd een korte controle; bij twijfel overleggen we met uw arts.", tr: "Evet — örneğin akut enfeksiyon, tedavi edilmemiş tromboz veya ciddi kalp yetmezliği. Bu yüzden önce daima kısa bir kontrol yaparız; şüphe halinde doktorunuza danışırız.", ar: "نعم — مثل العدوى الحادة أو الجلطة غير المعالجة أو قصور القلب الشديد. لذلك نجري دائمًا فحصًا قصيرًا مسبقًا؛ وعند الشك نستشير طبيبك.", pl: "Tak — na przykład ostra infekcja, nieleczona zakrzepica lub ciężka niewydolność serca. Dlatego zawsze najpierw robimy krótką kontrolę; w razie wątpliwości konsultujemy się z Twoim lekarzem.",
        "uk": "Так — наприклад, при гострій інфекції, нелікованому тромбозі або тяжкій серцевій недостатності. Саме тому ми завжди проводимо коротку попередню перевірку; у разі сумніву ми консультуємося з Вашим лікарем.",
        "es": "Sí — por ejemplo, en caso de infección aguda, trombosis no tratada o insuficiencia cardíaca grave. Por eso siempre hacemos un breve control previo; en caso de duda, consultamos a su médico.",
        "ku": "Erê — bo nimûne di rewşa enfeksiyona akût, tromboza dermannekirî an kêmasiya dil a giran de. Ji ber vê yekê em her dem pêşî kontroleke kurt dikin; heke guman hebe, em bi bijîşkê we re şêwir dikin." },
      },
      {
        q: { de: "Was soll ich anziehen oder mitbringen?", fr: "Que faut-il porter ou apporter ?", en: "What should I wear or bring?", nl: "Wat moet ik dragen of meenemen?", tr: "Ne giymeli veya getirmeliyim?", ar: "ماذا ألبس أو أحضر؟", pl: "Co założyć lub przynieść?",
        "uk": "Що вдягнути чи взяти з собою?",
        "es": "¿Qué hay que llevar puesto o traer?",
        "ku": "Divê ez çi li xwe bikim an bînim?" },
        a: { de: "Bequeme Kleidung, die den zu behandelnden Bereich leicht zugänglich macht. Bringen Sie Ihre Verordnung mit sowie eventuell verordnete Kompressionsstrümpfe.", fr: "Une tenue confortable qui donne facilement accès à la zone à traiter. Apportez votre prescription ainsi que vos éventuels bas de compression prescrits.", en: "Comfortable clothing that gives easy access to the area to treat. Bring your prescription and any prescribed compression garments.", nl: "Comfortabele kleding die de te behandelen zone makkelijk bereikbaar maakt. Neem uw voorschrift mee en eventueel voorgeschreven compressiekousen.", tr: "Tedavi edilecek bölgeye kolay erişim sağlayan konforlu kıyafet. Reçetenizi ve varsa önerilen kompresyon çoraplarınızı getirin.", ar: "ملابس مريحة تتيح الوصول بسهولة إلى المنطقة المراد علاجها. أحضر وصفتك وجوارب الضغط الموصوفة إن وُجدت.", pl: "Wygodne ubranie zapewniające łatwy dostęp do leczonego obszaru. Przynieś skierowanie oraz ewentualnie zalecone pończochy uciskowe.",
        "uk": "Зручний одяг, що забезпечує легкий доступ до ділянки, яку лікують. Візьміть направлення, а також призначені Вам компресійні панчохи, якщо вони є.",
        "es": "Ropa cómoda que permita acceder fácilmente a la zona a tratar. Traiga su prescripción y, si los tiene, sus medias de compresión prescritas.",
        "ku": "Cilên rehet ku bi hêsanî rê didin gihîştina herêma ku dê were dermankirin. Reçeteya xwe û çorapên kompresyonê yên ji we re hatine nivîsandin (eger hebin) bînin." },
      },
    ],
    relatedSlugs: ["manuelle-therapie", "sport-kinesitherapie"],
  },
};

const UI: Record<string, {
  back: string; indications: string; contraindications: string; duration: string;
  features: string; faq: string; team: string; bookCta: string; relatedTitle: string;
  learnMore: string; durationLabel: string;
}> = {
  de: { back: "← Zurück zu den Leistungen", indications: "Indikationen", contraindications: "Kontraindikationen", duration: "Sitzungsdauer", features: "Merkmale", faq: "Häufige Fragen", team: "Ihr Therapeut", bookCta: "Termin buchen", relatedTitle: "Weitere Leistungen", learnMore: "Mehr erfahren", durationLabel: "Dauer" },
  fr: { back: "← Retour aux prestations", indications: "Indications", contraindications: "Contre-indications", duration: "Durée de séance", features: "Caractéristiques", faq: "Questions fréquentes", team: "Votre thérapeute", bookCta: "Prendre RDV", relatedTitle: "Autres prestations", learnMore: "En savoir plus", durationLabel: "Durée" },
  en: { back: "← Back to services", indications: "Indications", contraindications: "Contraindications", duration: "Session duration", features: "Features", faq: "Frequently asked questions", team: "Your therapist", bookCta: "Book appointment", relatedTitle: "Other services", learnMore: "Learn more", durationLabel: "Duration" },
  nl: { back: "← Terug naar diensten", indications: "Indicaties", contraindications: "Contra-indicaties", duration: "Sessieduur", features: "Kenmerken", faq: "Veelgestelde vragen", team: "Uw therapeut", bookCta: "Afspraak boeken", relatedTitle: "Andere diensten", learnMore: "Meer info", durationLabel: "Duur" },
  tr: { back: "← Hizmetlere geri dön", indications: "Endikasyonlar", contraindications: "Kontrendikasyonlar", duration: "Seans süresi", features: "Özellikler", faq: "Sık sorulan sorular", team: "Terapistiniz", bookCta: "Randevu al", relatedTitle: "Diğer hizmetler", learnMore: "Daha fazla", durationLabel: "Süre" },
  ar: { back: "← العودة إلى الخدمات", indications: "المؤشرات", contraindications: "موانع الاستعمال", duration: "مدة الجلسة", features: "المميزات", faq: "الأسئلة الشائعة", team: "معالجك", bookCta: "احجز موعدًا", relatedTitle: "خدمات أخرى", learnMore: "المزيد", durationLabel: "المدة" },
  pl: { back: "← Powrót do usług", indications: "Wskazania", contraindications: "Przeciwwskazania", duration: "Czas trwania sesji", features: "Cechy", faq: "Często zadawane pytania", team: "Twój terapeuta", bookCta: "Zarezerwuj wizytę", relatedTitle: "Inne usługi", learnMore: "Więcej", durationLabel: "Czas trwania" },
  "uk": {
    "back": "← Назад до послуг",
    "indications": "Показання",
    "contraindications": "Протипоказання",
    "duration": "Тривалість сеансу",
    "features": "Особливості",
    "faq": "Поширені запитання",
    "team": "Ваш терапевт",
    "bookCta": "Записатися",
    "relatedTitle": "Інші послуги",
    "learnMore": "Дізнатися більше",
    "durationLabel": "Тривалість"
  },
  "es": {
    "back": "← Volver a los servicios",
    "indications": "Indicaciones",
    "contraindications": "Contraindicaciones",
    "duration": "Duración de la sesión",
    "features": "Características",
    "faq": "Preguntas frecuentes",
    "team": "Su terapeuta",
    "bookCta": "Pedir cita",
    "relatedTitle": "Otros servicios",
    "learnMore": "Más información",
    "durationLabel": "Duración"
  },
  "ku": {
    "back": "← Vegere xizmetan",
    "indications": "Îndîkasyon",
    "contraindications": "Kontraîndîkasyon",
    "duration": "Dirêjahiya seansê",
    "features": "Taybetmendî",
    "faq": "Pirsên pir tên pirsîn",
    "team": "Terapîstê we",
    "bookCta": "Randevû bigire",
    "relatedTitle": "Xizmetên din",
    "learnMore": "Bêtir bizanin",
    "durationLabel": "Dirêjahî"
  },
};

export function ServiceDetailPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang] ?? UI.en;
  const service = SERVICES[slug];

  if (!service) return null;

  const isRtl = lang === "ar";
  const Icon = service.icon;

  const pickStr = (r: Record<string, string>) => r[lang] ?? r.en ?? Object.values(r)[0] ?? "";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
      "@type": "Question",
      "name": pickStr(item.q),
      "acceptedAnswer": { "@type": "Answer", "text": pickStr(item.a) },
    })),
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <AnimatedSection className="mb-8">
          <Link href="/leistungen" className="text-sm text-neutral-500 hover:text-[#2b3186] transition-colors font-medium">
            {ui.back}
          </Link>
        </AnimatedSection>

        {/* Hero banner */}
        <AnimatedSection className="mb-10">
          <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 sm:p-12 text-white`}>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-4 inline-block">
                  {service.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-balance">{SD_EXTRA[slug]?.title?.[lang] ?? service.title[lang] ?? service.title.en}</h1>
                <p className="text-white/80 text-lg">{SD_EXTRA[slug]?.subtitle?.[lang] ?? service.subtitle[lang] ?? service.subtitle.en}</p>
              </div>
            </div>
            <p className="mt-6 text-white/90 leading-relaxed max-w-3xl">{SD_EXTRA[slug]?.description?.[lang] ?? service.description[lang] ?? service.description.en}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Long description paragraphs */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 space-y-4">
                {(service.longDesc[lang] ?? service.longDesc.en).map((para, i) => (
                  <p key={i} className="text-neutral-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimatedSection>

            {/* Indications */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-bold text-neutral-900 text-lg mb-5">{ui.indications}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(service.indications[lang] ?? service.indications.en).map((ind, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-[#76b82a] flex-shrink-0" />
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* FAQ */}
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-bold text-neutral-900 text-lg mb-6">{ui.faq}</h2>
                <div className="space-y-6">
                  {service.faq.map((item, i) => (
                    <div key={i}>
                      <p className="font-semibold text-neutral-900 mb-2">{item.q[lang] ?? item.q.en}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.a[lang] ?? item.a.en}</p>
                      {i < service.faq.length - 1 && <div className="border-t border-neutral-100 mt-6" />}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Features + duration */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-900 mb-4">{ui.features}</h3>
                <ul className="space-y-3">
                  {(service.points[lang] ?? service.points.en).map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] mt-2 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-neutral-100 mt-5 pt-5 flex items-start gap-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4 text-[#76b82a] flex-shrink-0 mt-0.5" />
                  <span>{service.duration[lang] ?? service.duration.en}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Contraindications */}
            <AnimatedSection delay={0.2}>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-amber-800 mb-4 text-sm">{ui.contraindications}</h3>
                <ul className="space-y-2">
                  {(service.contraindications[lang] ?? service.contraindications.en).map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-amber-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Team */}
            <AnimatedSection delay={0.25}>
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-[#76b82a]" />
                  <h3 className="font-bold text-sm">{ui.team}</h3>
                </div>
                <div className="space-y-3 mb-5">
                  {service.teamNames.map((name, i) => (
                    <Link key={i} href={`/team/${service.teamSlugs[i]}`}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                      <ArrowRight className="w-3.5 h-3.5 text-[#76b82a]" />
                      {name}
                    </Link>
                  ))}
                </div>
                <Link href="/termin"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl font-semibold transition-colors text-sm">
                  <CalendarPlus className="w-4 h-4" />
                  {ui.bookCta}
                </Link>
              </div>
            </AnimatedSection>

            {/* Related services */}
            {service.relatedSlugs.length > 0 && (
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-neutral-900 mb-4 text-sm">{ui.relatedTitle}</h3>
                  <div className="space-y-3">
                    {service.relatedSlugs.map((rSlug) => {
                      const related = SERVICES[rSlug];
                      if (!related) return null;
                      const RelIcon = related.icon;
                      return (
                        <Link key={rSlug} href={`/leistungen/${rSlug}`}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors group">
                          <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0">
                            <RelIcon className="w-4 h-4 text-neutral-600" />
                          </div>
                          <span className="text-sm font-medium text-neutral-700 group-hover:text-[#2b3186] transition-colors">
                            {related.title[lang] ?? related.title.en}
                          </span>
                          <ArrowRight className="w-4 h-4 text-neutral-400 ml-auto group-hover:text-[#76b82a] transition-colors" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
