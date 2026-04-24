"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Hand, Dumbbell, Smile, Droplets, CheckCircle2, ArrowLeft, CalendarPlus, ArrowRight, Clock, Users } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

interface ServiceDetail {
  icon: React.ElementType;
  color: string;
  badge: string;
  title: Record<LangKey, string>;
  subtitle: Record<LangKey, string>;
  description: Record<LangKey, string>;
  longDesc: Record<LangKey, string[]>;
  points: Record<LangKey, string[]>;
  indications: Record<LangKey, string[]>;
  contraindications: Record<LangKey, string[]>;
  duration: Record<LangKey, string>;
  teamSlugs: string[];
  teamNames: string[];
  faq: { q: Record<LangKey, string>; a: Record<LangKey, string> }[];
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
    },
    subtitle: {
      de: "Orthopädische Spezialisierung nach IFOMPT-Standard",
      fr: "Spécialisation orthopédique selon le standard IFOMPT",
      en: "Orthopaedic specialisation to IFOMPT standard",
      nl: "Orthopedische specialisatie volgens IFOMPT-norm",
      tr: "IFOMPT standardına göre ortopedik uzmanlık",
      ar: "تخصص عظمي وفق معيار IFOMPT",
      pl: "Specjalizacja ortopedyczna zgodna ze standardem IFOMPT",
    },
    description: {
      de: "Orthopädische Manualtherapie ist eine weltweit anerkannte Spezialisierung der Physiotherapie. Unsere Therapeuten suchen die Ursache Ihrer Schmerzen und bieten eine individuell angepasste Behandlung für dauerhafte Genesung.",
      fr: "La thérapie manuelle orthopédique est une spécialisation mondialement reconnue de la kinésithérapie. Nos thérapeutes recherchent la cause de vos douleurs et proposent un traitement personnalisé pour une guérison durable.",
      en: "Orthopaedic manual therapy is a globally recognised specialisation of physiotherapy. Our therapists seek the root cause of your pain and provide individually tailored treatment for lasting recovery.",
      nl: "Orthopedische manuele therapie is een wereldwijd erkende specialisatie van fysiotherapie. Onze therapeuten zoeken de oorzaak van uw pijn en bieden een op maat gemaakte behandeling voor blijvend herstel.",
      tr: "Ortopedik manuel terapi, fizyoterapinin dünya genelinde tanınan bir uzmanlık alanıdır. Terapistlerimiz ağrınızın kökenini arar ve kalıcı iyileşme için bireysel tedavi sunar.",
      ar: "العلاج اليدوي الجراحي العظمي هو تخصص معترف به عالميًا في العلاج الطبيعي. يبحث معالجونا عن سبب آلامك ويقدمون علاجًا مخصصًا للشفاء الدائم.",
      pl: "Ortopedyczna terapia manualna jest uznaną na całym świecie specjalizacją fizjoterapii. Nasi terapeuci szukają przyczyny bólu i oferują indywidualnie dostosowane leczenie dla trwałego zdrowienia.",
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
    },
    points: {
      de: ["Erweiterte physiotherapeutische Anamnese", "Biopsychosozialer Ansatz", "Ziel: Autonomer Patient", "Wissenschaftlich fundierte Techniken", "Manuthera 242 Behandlungstisch"],
      fr: ["Anamnèse kinésithérapeutique avancée", "Approche biopsychosociale", "Objectif : Patient autonome", "Techniques scientifiquement validées", "Table de traitement Manuthera 242"],
      en: ["Advanced physiotherapy assessment", "Biopsychosocial approach", "Goal: autonomous patient", "Scientifically validated techniques", "Manuthera 242 treatment table"],
      nl: ["Uitgebreide fysiotherapeutische anamnese", "Biopsychosociale aanpak", "Doel: autonome patiënt", "Wetenschappelijk onderbouwde technieken", "Manuthera 242 behandeltafel"],
      tr: ["Gelişmiş fizyoterapi değerlendirmesi", "Biyopsikososyal yaklaşım", "Hedef: özerk hasta", "Bilimsel olarak doğrulanmış teknikler", "Manuthera 242 tedavi masası"],
      ar: ["تقييم فيزيوتيرابيا متقدم", "النهج البيولوجي النفسي الاجتماعي", "الهدف: مريض مستقل", "تقنيات مُثبتة علميًا", "طاولة علاج Manuthera 242"],
      pl: ["Zaawansowana ocena fizjoterapeutyczna", "Podejście biopsychospołeczne", "Cel: autonomiczny pacjent", "Techniki naukowo zwalidowane", "Stół terapeutyczny Manuthera 242"],
    },
    indications: {
      de: ["Rückenschmerzen / Lumbago", "Nackenschmerzen / HWS", "Knieschmerzen & Gonarthrose", "Hüftschmerzen & Koxarthrose", "Schulterschmerzen / Frozen Shoulder", "Ellbogen / Tennisarm", "Kopfschmerzen / Migräne", "Post-operative Rehabilitation", "Bandscheibenvorfälle", "Ischialgie"],
      fr: ["Douleurs lombaires / lumbago", "Cervicalgies / rachis cervical", "Douleurs du genou & gonarthrose", "Douleurs de hanche & coxarthrose", "Épaule douloureuse / Frozen Shoulder", "Épicondylite / Tennis elbow", "Céphalées / Migraine", "Rééducation post-opératoire", "Hernies discales", "Sciatique"],
      en: ["Back pain / lumbago", "Neck pain / cervical spine", "Knee pain & osteoarthritis", "Hip pain & coxarthrosis", "Shoulder pain / frozen shoulder", "Elbow / tennis elbow", "Headaches / migraine", "Post-operative rehabilitation", "Herniated discs", "Sciatica"],
      nl: ["Rugpijn / lumbago", "Nekpijn / cervicale wervelkolom", "Kniepijn & gonartrose", "Heuppijn & coxartrose", "Schouderpijn / Frozen Shoulder", "Elleboog / tenniselleboog", "Hoofdpijn / migraine", "Postoperatieve revalidatie", "Hernia's", "Ischias"],
      tr: ["Bel ağrısı / lumbago", "Boyun ağrısı / servikal omurga", "Diz ağrısı & osteoartrit", "Kalça ağrısı & koksartroz", "Omuz ağrısı / donuk omuz", "Dirsek / tenis dirseği", "Baş ağrısı / migren", "Ameliyat sonrası rehabilitasyon", "Fıtıklar", "Siyatik"],
      ar: ["آلام الظهر / ألم الخصر", "آلام الرقبة / العمود الفقري العنقي", "آلام الركبة والفصال العظمي", "آلام الورك", "آلام الكتف / التهاب الكبسولة", "مرفق التنس", "صداع / صداع نصفي", "إعادة تأهيل ما بعد العملية", "انزلاق غضروفي", "عرق النسا"],
      pl: ["Ból pleców / lumbago", "Ból szyi / odcinek szyjny", "Ból kolana & gonartoza", "Ból biodra & koksartoza", "Ból barku / zamrożony bark", "Łokieć / łokieć tenisisty", "Bóle głowy / migrena", "Rehabilitacja pooperacyjna", "Przepukliny dyskowe", "Rwa kulszowa"],
    },
    contraindications: {
      de: ["Frakturen oder Tumore der Wirbelsäule", "Entzündliche Arthritis im Schub", "Neurologische Defizite (Lähmung)", "Schwere Osteoporose"],
      fr: ["Fractures ou tumeurs du rachis", "Arthrite inflammatoire en poussée", "Déficits neurologiques (paralysie)", "Ostéoporose sévère"],
      en: ["Spinal fractures or tumours", "Inflammatory arthritis flare", "Neurological deficits (paralysis)", "Severe osteoporosis"],
      nl: ["Fracturen of tumoren van de wervelkolom", "Inflammatoire artritis in opvlammingsfase", "Neurologische deficiënties (verlamming)", "Ernstige osteoporose"],
      tr: ["Omurga kırıkları veya tümörleri", "İnflamatuvar artrit atağı", "Nörolojik defisitler (felç)", "Şiddetli osteoporoz"],
      ar: ["كسور أو أورام العمود الفقري", "التهاب مفاصل التهابي في مرحلة النوبة", "عجز عصبي (شلل)", "هشاشة عظام شديدة"],
      pl: ["Złamania lub nowotwory kręgosłupa", "Zapalenie stawów w fazie zaostrzenia", "Deficyty neurologiczne (porażenie)", "Ciężka osteoporoza"],
    },
    duration: {
      de: "30–60 Minuten pro Sitzung, je nach Befund",
      fr: "30–60 minutes par séance, selon le bilan",
      en: "30–60 minutes per session, depending on findings",
      nl: "30–60 minuten per sessie, afhankelijk van de bevindingen",
      tr: "Bulgulara bağlı olarak seans başına 30–60 dakika",
      ar: "30-60 دقيقة لكل جلسة، حسب النتائج",
      pl: "30–60 minut na sesję, w zależności od wyników",
    },
    teamSlugs: ["philippe-banaszak", "thom-petit", "felix-esser"],
    teamNames: ["Philippe Banaszak", "Thom Petit", "Félix Esser"],
    faq: [
      {
        q: { de: "Brauche ich eine ärztliche Überweisung?", fr: "Ai-je besoin d'une prescription médicale ?", en: "Do I need a medical referral?", nl: "Heb ik een medische verwijzing nodig?", tr: "Tıbbi sevk gerekli mi?", ar: "هل أحتاج إلى إحالة طبية؟", pl: "Czy potrzebuję skierowania lekarskiego?" },
        a: { de: "In Belgien benötigen Sie für die Erstattung durch die Krankenkasse in der Regel eine ärztliche Verschreibung. Ohne Verschreibung können Sie uns trotzdem konsultieren — die Kosten werden dann privat getragen.", fr: "En Belgique, une prescription médicale est généralement nécessaire pour le remboursement par la mutuelle. Sans prescription, vous pouvez tout de même nous consulter — les frais seront alors à votre charge.", en: "In Belgium, a medical prescription is generally required for health insurance reimbursement. Without a prescription you can still consult us — costs will then be borne privately.", nl: "In België is doorgaans een medisch voorschrift nodig voor terugbetaling door de mutualiteit. Zonder voorschrift kunt u ons toch raadplegen — de kosten zijn dan privé.", tr: "Belçika'da sağlık sigortası geri ödemesi için genellikle tıbbi reçete gereklidir. Reçete olmadan da bize danışabilirsiniz — masraflar o zaman özel olarak karşılanır.", ar: "في بلجيكا، يلزم عادةً وصفة طبية للتعويض من قِبل صندوق التأمين الصحي. بدون وصفة، يمكنك استشارتنا على أي حال — التكاليف ستكون حينئذٍ على نفقتك الخاصة.", pl: "W Belgii do refundacji przez kasę chorych zazwyczaj potrzebna jest recepta lekarska. Bez recepty możesz się z nami skonsultować — koszty będą wtedy pokrywane prywatnie." },
      },
      {
        q: { de: "Wie viele Sitzungen sind nötig?", fr: "Combien de séances sont nécessaires ?", en: "How many sessions are needed?", nl: "Hoeveel sessies zijn nodig?", tr: "Kaç seans gereklidir?", ar: "كم عدد الجلسات اللازمة؟", pl: "Ile sesji jest potrzebnych?" },
        a: { de: "Das hängt stark von der Diagnose ab. Akute Beschwerden (z.B. Hexenschuss) können oft in 3–5 Sitzungen deutlich verbessert werden. Chronische Erkrankungen benötigen mehr Sitzungen — und vor allem regelmäßige Eigenübungen.", fr: "Cela dépend fortement du diagnostic. Les douleurs aiguës (ex. lumbago) peuvent souvent être nettement améliorées en 3 à 5 séances. Les pathologies chroniques nécessitent davantage de séances — et surtout des exercices réguliers à domicile.", en: "This depends greatly on the diagnosis. Acute complaints (e.g. lumbago) can often be significantly improved in 3–5 sessions. Chronic conditions require more sessions — and above all regular home exercises.", nl: "Dit hangt sterk af van de diagnose. Acute klachten (bijv. spit) kunnen vaak in 3–5 sessies aanzienlijk verbeteren. Chronische aandoeningen vereisen meer sessies — en vooral regelmatige thuisoefeningen.", tr: "Bu büyük ölçüde tanıya bağlıdır. Akut şikayetler (örn. bel tutulması) genellikle 3–5 seansta önemli ölçüde iyileşebilir. Kronik durumlar daha fazla seans gerektirir — ve her şeyden önce düzenli ev egzersizleri.", ar: "يعتمد هذا بشكل كبير على التشخيص. يمكن في كثير من الأحيان تحسين الشكاوى الحادة (مثل ألم الظهر الحاد) بشكل ملحوظ في 3-5 جلسات. تتطلب الحالات المزمنة جلسات أكثر — وقبل كل شيء تمارين منتظمة في المنزل.", pl: "To zależy w dużej mierze od diagnozy. Ostre dolegliwości (np. lumbago) mogą często ulec znacznej poprawie w 3–5 sesjach. Stany przewlekłe wymagają więcej sesji — i przede wszystkim regularnych ćwiczeń domowych." },
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
    },
    subtitle: {
      de: "Running Clinic · BFR Training · Kinesport",
      fr: "Running Clinic · Entraînement BFR · Kinesport",
      en: "Running Clinic · BFR Training · Kinesport",
      nl: "Running Clinic · BFR Training · Kinesport",
      tr: "Koşu Kliniği · BFR Antrenmanı · Kinesport",
      ar: "عيادة الجري · تدريب BFR · Kinesport",
      pl: "Klinika Biegania · Trening BFR · Kinesport",
    },
    description: {
      de: "Rehabilitation, Verletzungsprävention und Leistungssteigerung für Athleten aller Niveaus. Von der Running Clinic bis zum Blood Flow Restriction Training — wir begleiten Sie von der Verletzung zurück zur vollen Leistung.",
      fr: "Rééducation, prévention des blessures et optimisation des performances pour sportifs de tous niveaux. De la Running Clinic à l'entraînement BFR — nous vous accompagnons de la blessure au retour à pleine performance.",
      en: "Rehabilitation, injury prevention and performance optimisation for athletes of all levels. From the Running Clinic to Blood Flow Restriction training — we guide you from injury back to full performance.",
      nl: "Revalidatie, blessurepreventie en prestatieoptimalisatie voor atleten op alle niveaus. Van de Running Clinic tot BFR-training — wij begeleiden u van blessure naar volledige prestatie.",
      tr: "Her seviyedeki sporcular için rehabilitasyon, yaralanma önleme ve performans optimizasyonu. Koşu Kliniği'nden Kan Akışı Kısıtlama antrenmanına — yaralanmadan tam performansa giden yolda yanınızdayız.",
      ar: "إعادة تأهيل ووقاية من الإصابات وتحسين الأداء للرياضيين على جميع المستويات. من عيادة الجري إلى تدريب BFR — نرافقك من الإصابة إلى الأداء الكامل.",
      pl: "Rehabilitacja, prewencja urazów i optymalizacja wyników dla sportowców na wszystkich poziomach. Od Running Clinic do treningu BFR — towarzyszymy Ci od urazu do pełnej sprawności.",
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
    },
    points: {
      de: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspezifische Rehabilitation", "Kinesport — Vereinsprogramm", "Biomechanische Laufanalyse"],
      fr: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Réhabilitation spécifique au sport", "Kinesport — programme club", "Analyse biomécanique de la foulée"],
      en: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sport-specific rehabilitation", "Kinesport — club programme", "Biomechanical gait analysis"],
      nl: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspecifieke rehabilitatie", "Kinesport — clubprogramma", "Biomechanische loopanalyse"],
      tr: ["Koşu Kliniği (La Clinique du Coureur)", "Kan Akışı Kısıtlama Antrenmanı (BFR)", "Spora özgü rehabilitasyon", "Kinesport — kulüp programı", "Biyomekanik koşu analizi"],
      ar: ["عيادة الجري (La Clinique du Coureur)", "تدريب تقييد تدفق الدم (BFR)", "إعادة تأهيل رياضي محدد", "Kinesport — برنامج النادي", "تحليل حيوي للجري"],
      pl: ["Running Clinic (La Clinique du Coureur)", "Trening BFR (Blood Flow Restriction)", "Rehabilitacja specyficzna dla sportu", "Kinesport — program klubowy", "Biomechaniczna analiza biegu"],
    },
    indications: {
      de: ["Laufsportverletzungen (Shin Splints, IT-Band)", "Muskelrisse & Zerrungen", "VKB-Rekonstruktion (post-op)", "Knie- / Hüftprothese (post-op)", "Bandverletzungen Sprunggelenk", "Schulter-OP (Rotatorenmanschette)", "Stressfrakturen", "Leistungsoptimierung im Ausdauersport"],
      fr: ["Blessures de running (Shin Splints, bandelette IT)", "Déchirures & élongations musculaires", "Reconstruction du LCA (post-op)", "Prothèse genou/hanche (post-op)", "Entorse de cheville", "Chirurgie de l'épaule (coiffe des rotateurs)", "Fractures de stress", "Optimisation des performances en endurance"],
      en: ["Running injuries (shin splints, IT band)", "Muscle tears & strains", "ACL reconstruction (post-op)", "Knee/hip prosthesis (post-op)", "Ankle ligament injuries", "Shoulder surgery (rotator cuff)", "Stress fractures", "Endurance performance optimisation"],
      nl: ["Loopblessures (shin splints, IT-band)", "Spierscheuren & verstuikingen", "VKB-reconstructie (post-op)", "Knie-/heupprothese (post-op)", "Enkelbandletsel", "Schouderoperatie (rotatorenmanchet)", "Stressfracturen", "Prestatieoptimalisatie duursporten"],
      tr: ["Koşu yaralanmaları (shin splints, IT bandı)", "Kas yırtıkları & germeleri", "Ön çapraz bağ rekonstrüksiyonu (ameliyat sonrası)", "Diz/kalça protezi (ameliyat sonrası)", "Ayak bileği bağ yaralanmaları", "Omuz ameliyatı (rotator manşon)", "Stres kırıkları", "Dayanıklılık sporlarında performans optimizasyonu"],
      ar: ["إصابات الجري (shin splints، رباط IT)", "تمزقات العضلات وتوتراتها", "إعادة بناء الرباط الصليبي الأمامي (بعد العملية)", "طرف صناعي للركبة/الورك (بعد العملية)", "إصابات أربطة الكاحل", "جراحة الكتف (الكفة المدورة)", "كسور الإجهاد", "تحسين أداء رياضة التحمل"],
      pl: ["Urazy biegowe (shin splints, pasmo IT)", "Zerwania i naciągnięcia mięśni", "Rekonstrukcja ACL (po operacji)", "Proteza kolana/biodra (po operacji)", "Urazy więzadeł stawu skokowego", "Operacja barku (stożek rotatorów)", "Złamania zmęczeniowe", "Optymalizacja wyników w sportach wytrzymałościowych"],
    },
    contraindications: {
      de: ["Akute Entzündung oder Infektion am Trainingsort", "Thrombose (für BFR)", "Bluthochdruck ≥ 180/110 mmHg (für BFR)", "Offene Wunden"],
      fr: ["Inflammation ou infection aiguë sur le site d'entraînement", "Thrombose (pour le BFR)", "Hypertension ≥ 180/110 mmHg (pour le BFR)", "Plaies ouvertes"],
      en: ["Acute inflammation or infection at training site", "Thrombosis (for BFR)", "Blood pressure ≥ 180/110 mmHg (for BFR)", "Open wounds"],
      nl: ["Acute ontsteking of infectie op de trainingslocatie", "Trombose (voor BFR)", "Bloeddruk ≥ 180/110 mmHg (voor BFR)", "Open wonden"],
      tr: ["Antrenman bölgesinde akut iltihap veya enfeksiyon", "Tromboz (BFR için)", "Kan basıncı ≥ 180/110 mmHg (BFR için)", "Açık yaralar"],
      ar: ["التهاب حاد أو عدوى في موقع التدريب", "تجلط الدم (لـ BFR)", "ضغط الدم ≥ 180/110 ملم زئبق (لـ BFR)", "جروح مفتوحة"],
      pl: ["Ostre zapalenie lub infekcja w miejscu treningu", "Zakrzepica (dla BFR)", "Ciśnienie krwi ≥ 180/110 mmHg (dla BFR)", "Otwarte rany"],
    },
    duration: {
      de: "45–60 Minuten pro Sitzung",
      fr: "45–60 minutes par séance",
      en: "45–60 minutes per session",
      nl: "45–60 minuten per sessie",
      tr: "Seans başına 45–60 dakika",
      ar: "45-60 دقيقة لكل جلسة",
      pl: "45–60 minut na sesję",
    },
    teamSlugs: ["thom-petit"],
    teamNames: ["Thom Petit"],
    faq: [
      {
        q: { de: "Was ist die Running Clinic genau?", fr: "Qu'est-ce que la Running Clinic exactement ?", en: "What exactly is the Running Clinic?", nl: "Wat is de Running Clinic precies?", tr: "Running Clinic tam olarak nedir?", ar: "ما هي عيادة الجري بالضبط؟", pl: "Czym dokładnie jest Running Clinic?" },
        a: { de: "Die Running Clinic basiert auf dem wissenschaftlichen Programm 'La Clinique du Coureur'. Wir analysieren Ihre Lauftechnik (Kadenz, Schrittlänge, Fußaufsatz), identifizieren Risikofaktoren und erstellen einen personalisierten Plan — egal ob Sie für einen Marathon trainieren oder Freizeitläufer sind.", fr: "La Running Clinic est basée sur le programme scientifique 'La Clinique du Coureur'. Nous analysons votre technique de course (cadence, longueur de foulée, attaque du pied), identifions les facteurs de risque et élaborons un plan personnalisé — que vous vous entraîniez pour un marathon ou que vous couriez en loisir.", en: "The Running Clinic is based on the scientific programme 'La Clinique du Coureur'. We analyse your running technique (cadence, stride length, foot strike), identify risk factors and create a personalised plan — whether you are training for a marathon or running recreationally.", nl: "De Running Clinic is gebaseerd op het wetenschappelijke programma 'La Clinique du Coureur'. We analyseren uw looptechniek (cadans, paslengte, voetlanding), identificeren risicofactoren en maken een gepersonaliseerd plan — of u nu traint voor een marathon of recreatief loopt.", tr: "Koşu Kliniği, bilimsel program 'La Clinique du Coureur'a dayanmaktadır. Koşu tekniğinizi (kadans, adım uzunluğu, ayak vuruşu) analiz ediyor, risk faktörlerini belirliyoruz ve kişiselleştirilmiş bir plan oluşturuyoruz — maraton için antrenman yapıyor olsanız da rekreasyonel koşuyor olsanız da.", ar: "تعتمد عيادة الجري على البرنامج العلمي 'La Clinique du Coureur'. نحلل تقنية جريك (الإيقاع، طول الخطوة، ضربة القدم)، ونحدد عوامل الخطر ونضع خطة مخصصة — سواء كنت تتدرب لماراثون أو تجري ترفيهيًا.", pl: "Running Clinic jest oparta na naukowym programie 'La Clinique du Coureur'. Analizujemy Twoją technikę biegu (kadencja, długość kroku, lądowanie stopy), identyfikujemy czynniki ryzyka i tworzymy spersonalizowany plan — niezależnie od tego, czy trenujesz do maratonu, czy biegasz rekreacyjnie." },
      },
      {
        q: { de: "Für wen ist BFR-Training geeignet?", fr: "Pour qui l'entraînement BFR est-il adapté ?", en: "Who is BFR training suitable for?", nl: "Voor wie is BFR-training geschikt?", tr: "BFR antrenmanı kim için uygundur?", ar: "لمن يصلح تدريب BFR؟", pl: "Dla kogo nadaje się trening BFR?" },
        a: { de: "BFR eignet sich besonders für Patienten nach Knie- oder Hüftprothese, nach VKB-Rekonstruktion sowie ältere Patienten, die normales Krafttraining nicht vertragen. Auch gesunde Sportler können von der Methode profitieren. Wir führen vorher eine Sicherheitsbeurteilung durch.", fr: "Le BFR est particulièrement adapté aux patients après prothèse de genou ou de hanche, après reconstruction du LCA, ainsi qu'aux patients âgés qui ne supportent pas l'entraînement de force normal. Les sportifs sains peuvent également bénéficier de la méthode. Nous effectuons au préalable une évaluation de sécurité.", en: "BFR is particularly suitable for patients after knee or hip prosthesis, after ACL reconstruction, and older patients who cannot tolerate normal strength training. Healthy athletes can also benefit from the method. We conduct a safety assessment beforehand.", nl: "BFR is bijzonder geschikt voor patiënten na knie- of heupprothese, na VKB-reconstructie en oudere patiënten die normale krachttraining niet verdragen. Ook gezonde sporters kunnen baat hebben bij de methode. We voeren vooraf een veiligheidsbeoordeling uit.", tr: "BFR, diz veya kalça protezi sonrası hastalar, ön çapraz bağ rekonstrüksiyonu sonrası ve normal kuvvet antrenmanını tolere edemeyen yaşlı hastalar için özellikle uygundur. Sağlıklı sporcular da yöntemden yararlanabilir. Öncesinde bir güvenlik değerlendirmesi yapıyoruz.", ar: "BFR مناسب بشكل خاص للمرضى بعد أطراف الركبة أو الورك، بعد إعادة بناء الرباط الصليبي الأمامي، وكبار السن الذين لا يتحملون التدريب العادي للقوة. يمكن للرياضيين الأصحاء أيضًا الاستفادة من الطريقة. نقوم بتقييم السلامة مسبقًا.", pl: "BFR jest szczególnie odpowiedni dla pacjentów po protezie kolana lub biodra, po rekonstrukcji ACL i starszych pacjentów, którzy nie tolerują normalnego treningu siłowego. Zdrowi sportowcy również mogą skorzystać z tej metody. Wcześniej przeprowadzamy ocenę bezpieczeństwa." },
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
    },
    subtitle: {
      de: "Spezialisierte Therapie bei craniomandibulärer Dysfunktion (CMD)",
      fr: "Thérapie spécialisée des dysfonctions cranio-mandibulaires (DCM)",
      en: "Specialised therapy for craniomandibular dysfunction (CMD)",
      nl: "Gespecialiseerde therapie bij craniomandibulaire dysfunctie (CMD)",
      tr: "Kraniomandibüler disfonksiyon (CMD) için özel tedavi",
      ar: "علاج متخصص لخلل الوظيفة القحفية الفكية (CMD)",
      pl: "Specjalistyczna terapia dysfunkcji czaszkowo-żuchwowej (CMD)",
    },
    description: {
      de: "Spezialisierte Therapie bei craniomandibulärer Dysfunktion (CMD). Behandlung von Kieferschmerzen, Kopfschmerzen, Schwindel und Nackenverspannungen durch myotensive und manipulative Techniken.",
      fr: "Thérapie spécialisée des dysfonctions cranio-mandibulaires (DCM/ATM). Traitement des douleurs de mâchoire, maux de tête, vertiges et tensions cervicales par techniques myotensives et articulaires.",
      en: "Specialised therapy for craniomandibular dysfunction (CMD). Treatment of jaw pain, headaches, dizziness and neck tension through myotensive and manipulative techniques.",
      nl: "Gespecialiseerde therapie bij craniomandibulaire dysfunctie (CMD). Behandeling van kaakpijn, hoofdpijn, duizeligheid en nekspanning door myotensieve en manipulatieve technieken.",
      tr: "Kraniomandibüler disfonksiyon (CMD) için özel tedavi. Miyotensif ve manipülatif tekniklerle çene ağrısı, baş ağrısı, baş dönmesi ve boyun gerginliğinin tedavisi.",
      ar: "علاج متخصص لخلل الوظيفة القحفية الفكية (CMD). علاج آلام الفك والصداع والدوار وتوترات الرقبة من خلال تقنيات مايوتنسيف ومعالجة.",
      pl: "Specjalistyczna terapia dysfunkcji czaszkowo-żuchwowej (CMD). Leczenie bólu żuchwy, bólów głowy, zawrotów głowy i napięcia szyi technikami miotensywnymi i manipulacyjnymi.",
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
    },
    points: {
      de: ["Myotensive und manipulative Techniken", "Intra- und extraorale Behandlung", "Entspannung der Kaumuskulatur", "Behandlung von Knacken/Blockaden", "Koordination mit Kieferorthopäden"],
      fr: ["Techniques myotensives et manipulatives", "Traitement intra- et extra-oral", "Relaxation des muscles masticateurs", "Traitement du claquement/blocage", "Coordination avec l'orthodontiste"],
      en: ["Myotensive and manipulative techniques", "Intra- and extra-oral treatment", "Chewing muscle relaxation", "Treatment of clicking/blocking", "Coordination with orthodontist"],
      nl: ["Myotensieve en manipulatieve technieken", "Intra- en extra-orale behandeling", "Ontspanning van de kauwspieren", "Behandeling van klikken/blokkades", "Coördinatie met orthodontist"],
      tr: ["Miyotensif ve manipülatif teknikler", "İntra ve ekstraoral tedavi", "Çiğneme kası gevşemesi", "Tıklama/blokaj tedavisi", "Ortodontistle koordinasyon"],
      ar: ["تقنيات مايوتنسيف ومعالجة", "علاج داخل وخارج الفم", "استرخاء عضلات المضغ", "علاج الطقطقة/الانسداد", "التنسيق مع طبيب تقويم الأسنان"],
      pl: ["Techniki miotensywne i manipulacyjne", "Leczenie wewnątrz- i zewnątrzustne", "Rozluźnienie mięśni żucia", "Leczenie trzaskania/blokad", "Koordynacja z ortodontą"],
    },
    indications: {
      de: ["Kieferschmerzen & CMD / DCM", "Kopfschmerzen & Migräne", "Schwindel (von HWS / Kiefer)", "Tinnitus (Ohrgeräusche)", "Nacken-/Schulterverspannung", "Kieferöffnungseinschränkung", "Bruxismus (Zähneknirschen)", "Ohrenschmerzen ohne Ohrenerkrankung"],
      fr: ["Douleurs de mâchoire & DCM/ATM", "Maux de tête & migraines", "Vertiges (cervical / mâchoire)", "Acouphènes", "Tensions cervico-scapulaires", "Limitation d'ouverture buccale", "Bruxisme (grincement de dents)", "Douleurs auriculaires sans pathologie"],
      en: ["Jaw pain & CMD/TMD", "Headaches & migraines", "Dizziness (cervical/jaw)", "Tinnitus", "Neck/shoulder tension", "Limited mouth opening", "Bruxism (teeth grinding)", "Ear pain without ear disease"],
      nl: ["Kaakpijn & CMD", "Hoofdpijn & migraines", "Duizeligheid (cervicaal/kaak)", "Tinnitus", "Nek-/schouderspanning", "Beperkte mondopening", "Bruxisme (tandenknarsen)", "Oorpijn zonder ooraandoening"],
      tr: ["Çene ağrısı & CMD", "Baş ağrısı & migren", "Baş dönmesi (servikal/çene)", "Tinnitus (kulak çınlaması)", "Boyun/omuz gerginliği", "Kısıtlı ağız açılması", "Bruksizm (diş gıcırdatma)", "Kulak hastalığı olmaksızın kulak ağrısı"],
      ar: ["آلام الفك وCMD", "صداع وصداع نصفي", "دوار (عنقي/فك)", "طنين الأذن", "توتر الرقبة/الكتف", "محدودية فتح الفم", "الصرير (صرير الأسنان)", "آلام الأذن بدون مرض"],
      pl: ["Ból żuchwy i CMD", "Bóle głowy i migreny", "Zawroty głowy (szyjne/żuchwowe)", "Szumy uszne", "Napięcie szyi/barku", "Ograniczone otwieranie ust", "Bruksizm (zgrzytanie zębami)", "Ból ucha bez choroby ucha"],
    },
    contraindications: {
      de: ["Aktive Infektion im Kieferbereich", "Fraktur des Unterkiefers", "Tumore im Kopf-/Halsbereich", "Akute entzündliche Arthritis des Kiefergelenks"],
      fr: ["Infection active dans la région de la mâchoire", "Fracture de la mandibule", "Tumeurs de la région tête/cou", "Arthrite inflammatoire aiguë de l'ATM"],
      en: ["Active infection in the jaw area", "Mandibular fracture", "Head/neck tumours", "Acute inflammatory arthritis of the TMJ"],
      nl: ["Actieve infectie in het kaakgebied", "Onderkaakfractuur", "Tumoren in het hoofd-/halsgebied", "Acute inflammatoire artritis van het kaakgewricht"],
      tr: ["Çene bölgesinde aktif enfeksiyon", "Mandibula kırığı", "Baş/boyun bölgesindeki tümörler", "ATM'nin akut inflamatuvar artriti"],
      ar: ["عدوى نشطة في منطقة الفك", "كسر الفك السفلي", "أورام منطقة الرأس والرقبة", "التهاب مفصل التهابي حاد للمفصل ATM"],
      pl: ["Aktywna infekcja w okolicy żuchwy", "Złamanie żuchwy", "Nowotwory okolicy głowy/szyi", "Ostre zapalenie stawowe ATM"],
    },
    duration: {
      de: "30–45 Minuten pro Sitzung",
      fr: "30–45 minutes par séance",
      en: "30–45 minutes per session",
      nl: "30–45 minuten per sessie",
      tr: "Seans başına 30–45 dakika",
      ar: "30-45 دقيقة لكل جلسة",
      pl: "30–45 minut na sesję",
    },
    teamSlugs: ["fabienne-dormann"],
    teamNames: ["Fabienne Dormann"],
    faq: [
      {
        q: { de: "Wer überweist mich für eine ATM-Therapie?", fr: "Qui m'adresse pour une thérapie ATM ?", en: "Who refers me for TMJ therapy?", nl: "Wie verwijst mij door voor ATM-therapie?", tr: "ATM terapisi için beni kim yönlendirir?", ar: "من يحيلني لعلاج ATM؟", pl: "Kto kieruje mnie na terapię ATM?" },
        a: { de: "Überweisungen kommen häufig von Zahnärzten, Kieferorthopäden oder HNO-Ärzten. Sie können uns aber auch direkt kontaktieren — wir beurteilen, ob eine ATM-Therapie für Sie geeignet ist, und koordinieren bei Bedarf mit Ihrem Zahnarzt.", fr: "Les adressages viennent souvent des dentistes, orthodontistes ou ORL. Vous pouvez cependant nous contacter directement — nous évaluons si une thérapie ATM est adaptée à votre situation et coordonnons si nécessaire avec votre dentiste.", en: "Referrals often come from dentists, orthodontists or ENT specialists. However, you can contact us directly — we assess whether TMJ therapy is suitable for you and coordinate with your dentist if necessary.", nl: "Doorverwijzingen komen vaak van tandartsen, orthodontisten of KNO-artsen. U kunt ons echter ook rechtstreeks contacteren — wij beoordelen of ATM-therapie geschikt voor u is en coördineren indien nodig met uw tandarts.", tr: "Sevkler genellikle diş hekimleri, ortodontistler veya KBB uzmanlarından gelir. Ancak doğrudan bize ulaşabilirsiniz — ATM terapisinin sizin için uygun olup olmadığını değerlendiriyoruz ve gerekirse diş hekiminizle koordinasyon sağlıyoruz.", ar: "كثيرًا ما تأتي الإحالات من أطباء الأسنان أو أطباء تقويم الأسنان أو أطباء الأنف والأذن والحنجرة. ومع ذلك يمكنك الاتصال بنا مباشرة — نقيّم ما إذا كان علاج ATM مناسبًا لك وننسق مع طبيب أسنانك إذا لزم الأمر.", pl: "Skierowania często pochodzą od dentystów, ortodontów lub laryngologów. Możesz jednak skontaktować się z nami bezpośrednio — oceniamy, czy terapia ATM jest dla Ciebie odpowiednia i w razie potrzeby koordynujemy z Twoim dentystą." },
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
    },
    subtitle: {
      de: "Manuelle Lymphdrainage nach der Methode O. Leduc",
      fr: "Drainage lymphatique manuel selon la méthode O. Leduc",
      en: "Manual lymphatic drainage by the O. Leduc method",
      nl: "Manuele lymfedrainage volgens de methode O. Leduc",
      tr: "O. Leduc yöntemine göre manuel lenf drenajı",
      ar: "الصرف اللمفاوي اليدوي وفق طريقة O. Leduc",
      pl: "Ręczny drenaż limfatyczny metodą O. Leduc",
    },
    description: {
      de: "Manuelle Lymphdrainage nach der anerkannten Methode von O. Leduc. Sanfte Spezialmassage zur Reduzierung von Ödemen, Stimulation des Lymphsystems und Verbesserung des Lymphflusses.",
      fr: "Drainage lymphatique manuel selon la méthode reconnue d'O. Leduc. Massage spécial et doux pour réduire les œdèmes, stimuler le système lymphatique et améliorer la circulation lymphatique.",
      en: "Manual lymphatic drainage by the recognised O. Leduc method. Gentle specialist massage to reduce oedema, stimulate the lymphatic system and improve lymph flow.",
      nl: "Manuele lymfedrainage volgens de erkende methode van O. Leduc. Zachte specialistische massage om oedeem te verminderen, het lymfesysteem te stimuleren en de lymfestroom te verbeteren.",
      tr: "Tanınan O. Leduc yöntemine göre manuel lenf drenajı. Ödemi azaltmak, lenf sistemini uyarmak ve lenf akışını iyileştirmek için nazik uzman masajı.",
      ar: "الصرف اللمفاوي اليدوي وفق طريقة O. Leduc المعترف بها. تدليك متخصص وناعم لتقليل الوذمة وتحفيز الجهاز اللمفاوي وتحسين تدفق اللمف.",
      pl: "Ręczny drenaż limfatyczny uznaną metodą O. Leduc. Delikatny specjalistyczny masaż w celu zmniejszenia obrzęków, stymulacji układu limfatycznego i poprawy przepływu limfy.",
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
    },
    points: {
      de: ["Methode nach O. Leduc (Belgien)", "Sanfte, rhythmische Technik", "Aktivierung des Lymphsystems", "Reduzierung von Ödemen", "Komplexe Physikalische Entstauungstherapie (KPE)"],
      fr: ["Méthode selon O. Leduc (Belgique)", "Technique douce et rythmique", "Activation du système lymphatique", "Réduction des œdèmes", "Thérapie Décongestive Complexe (TDC)"],
      en: ["O. Leduc method (Belgium)", "Gentle, rhythmic technique", "Lymphatic system activation", "Oedema reduction", "Complex Decongestive Therapy (CDT)"],
      nl: ["Methode volgens O. Leduc (België)", "Zachte, ritmische techniek", "Activering van het lymfesysteem", "Vermindering van oedeem", "Complexe Fysiotherapeutische Entstauingstherapie (CFT)"],
      tr: ["O. Leduc yöntemi (Belçika)", "Nazik, ritmik teknik", "Lenf sisteminin aktivasyonu", "Ödem azaltma", "Kompleks Dekongestif Terapi (CDT)"],
      ar: ["طريقة O. Leduc (بلجيكا)", "تقنية ناعمة وإيقاعية", "تنشيط الجهاز اللمفاوي", "تقليل الوذمة", "العلاج الفيزيائي الاحتقاني المعقد"],
      pl: ["Metoda O. Leduc (Belgia)", "Delikatna, rytmiczna technika", "Aktywacja układu limfatycznego", "Redukcja obrzęków", "Kompleksowa Terapia Decongencyjna (CDT)"],
    },
    indications: {
      de: ["Post-operative Ödeme (Knie-/Hüftprothese)", "Lymphödem nach Tumoroperation", "Primäres Lymphödem", "Schwere Beine / Venöse Insuffizienz", "Sportverletzungen mit Schwellung", "Narbenmassage (post-op)", "Schwangerschaftsödeme", "Lipödem"],
      fr: ["Œdèmes post-op (prothèse genou/hanche)", "Lymphœdème post-cancer", "Lymphœdème primaire", "Jambes lourdes / insuffisance veineuse", "Blessures sportives avec gonflement", "Massage cicatriciel (post-op)", "Œdèmes de grossesse", "Lipoedème"],
      en: ["Post-op oedema (knee/hip prosthesis)", "Post-cancer lymphoedema", "Primary lymphoedema", "Heavy legs / venous insufficiency", "Sports injuries with swelling", "Scar massage (post-op)", "Pregnancy oedema", "Lipoedema"],
      nl: ["Post-op oedeem (knie-/heupprothese)", "Lymfoedeem na kankeroperatie", "Primair lymfoedeem", "Zware benen / veneuze insufficiëntie", "Sportblessures met zwelling", "Littekenmassage (post-op)", "Zwangerschapsoedeeem", "Lipoedeem"],
      tr: ["Ameliyat sonrası ödem (diz/kalça protezi)", "Kanser sonrası lenfödem", "Primer lenfödem", "Ağır bacaklar / venöz yetmezlik", "Şişme ile birlikte spor yaralanmaları", "Skar masajı (ameliyat sonrası)", "Gebelik ödemi", "Lipödem"],
      ar: ["وذمة ما بعد العملية (طرف صناعي للركبة/الورك)", "وذمة لمفية ما بعد السرطان", "وذمة لمفية أولية", "أرجل ثقيلة / قصور وريدي", "إصابات رياضية مع تورم", "تدليك الندبات (بعد العملية)", "وذمة الحمل", "شحم الوذمة"],
      pl: ["Obrzęk pooperacyjny (proteza kolana/biodra)", "Obrzęk limfatyczny po nowotworze", "Pierwotny obrzęk limfatyczny", "Ciężkie nogi / niewydolność żylna", "Urazy sportowe z obrzękiem", "Masaż blizn (po operacji)", "Obrzęki ciążowe", "Lipobrzęk"],
    },
    contraindications: {
      de: ["Akute Infektion / Entzündung (Erysipel)", "Aktive Thrombose oder Lungenembolie", "Dekompensierte Herzinsuffizienz", "Aktiver Krebs (ohne ärztliche Freigabe)"],
      fr: ["Infection / inflammation aiguë (érysipèle)", "Thrombose active ou embolie pulmonaire", "Insuffisance cardiaque décompensée", "Cancer actif (sans aval médical)"],
      en: ["Acute infection/inflammation (erysipelas)", "Active thrombosis or pulmonary embolism", "Decompensated heart failure", "Active cancer (without medical clearance)"],
      nl: ["Acute infectie/ontsteking (erysipelas)", "Actieve trombose of longembolie", "Gedecompenseerde hartfalen", "Actieve kanker (zonder medische toestemming)"],
      tr: ["Akut enfeksiyon/iltihap (erizipel)", "Aktif tromboz veya pulmoner emboli", "Dekompanse kalp yetmezliği", "Aktif kanser (tıbbi onay olmadan)"],
      ar: ["عدوى/التهاب حاد (حمرة جلدية)", "تجلط الدم النشط أو الانصمام الرئوي", "فشل قلبي معاوض", "سرطان نشط (بدون موافقة طبية)"],
      pl: ["Ostra infekcja/zapalenie (róża)", "Aktywna zakrzepica lub zatorowość płucna", "Zdekompensowana niewydolność serca", "Aktywny nowotwór (bez zgody lekarskiej)"],
    },
    duration: {
      de: "30–60 Minuten pro Sitzung, je nach Bereich",
      fr: "30–60 minutes par séance, selon la zone traitée",
      en: "30–60 minutes per session, depending on the area",
      nl: "30–60 minuten per sessie, afhankelijk van het gebied",
      tr: "Bölgeye göre seans başına 30–60 dakika",
      ar: "30-60 دقيقة لكل جلسة، حسب المنطقة",
      pl: "30–60 minut na sesję, w zależności od obszaru",
    },
    teamSlugs: ["fabienne-dormann"],
    teamNames: ["Fabienne Dormann"],
    faq: [
      {
        q: { de: "Ist Lymphdrainage schmerzhaft?", fr: "Le drainage lymphatique est-il douloureux ?", en: "Is lymphatic drainage painful?", nl: "Is lymfedrainage pijnlijk?", tr: "Lenf drenajı ağrılı mı?", ar: "هل الصرف اللمفاوي مؤلم؟", pl: "Czy drenaż limfatyczny jest bolesny?" },
        a: { de: "Nein — die Lymphdrainage ist eine der sanftesten physiotherapeutischen Techniken. Der Druck ist sehr gering (ca. 30–40 mmHg) und die Bewegungen sind langsam und rhythmisch. Die meisten Patienten empfinden die Behandlung als sehr entspannend.", fr: "Non — le drainage lymphatique est l'une des techniques kinésithérapeutiques les plus douces. La pression est très légère (environ 30 à 40 mmHg) et les mouvements sont lents et rythmiques. La plupart des patients trouvent le traitement très relaxant.", en: "No — lymphatic drainage is one of the gentlest physiotherapy techniques. The pressure is very low (approximately 30–40 mmHg) and the movements are slow and rhythmic. Most patients find the treatment very relaxing.", nl: "Nee — lymfedrainage is een van de zachtste fysiotherapeutische technieken. De druk is zeer gering (ca. 30–40 mmHg) en de bewegingen zijn langzaam en ritmisch. De meeste patiënten vinden de behandeling zeer ontspannend.", tr: "Hayır — lenf drenajı, en nazik fizyoterapi tekniklerinden biridir. Basınç çok düşüktür (yaklaşık 30–40 mmHg) ve hareketler yavaş ve ritmiktir. Hastaların büyük çoğunluğu tedaviyi çok rahatlatıcı buluyor.", ar: "لا — الصرف اللمفاوي هو أحد أناعم تقنيات العلاج الطبيعي. الضغط منخفض جدًا (حوالي 30-40 ملم زئبق) والحركات بطيئة وإيقاعية. معظم المرضى يجدون العلاج مريحًا للغاية.", pl: "Nie — drenaż limfatyczny jest jedną z najdelikatniejszych technik fizjoterapeutycznych. Ciśnienie jest bardzo małe (około 30–40 mmHg), a ruchy są powolne i rytmiczne. Większość pacjentów uważa leczenie za bardzo relaksujące." },
      },
      {
        q: { de: "Wird Lymphdrainage von der Krankenkasse erstattet?", fr: "Le drainage lymphatique est-il remboursé par la mutuelle ?", en: "Is lymphatic drainage reimbursed by health insurance?", nl: "Wordt lymfedrainage vergoed door de mutualiteit?", tr: "Lenf drenajı sağlık sigortası tarafından karşılanıyor mu?", ar: "هل يُغطى الصرف اللمفاوي من قِبل التأمين الصحي؟", pl: "Czy drenaż limfatyczny jest refundowany przez kasę chorych?" },
        a: { de: "In Belgien wird die Lymphdrainage bei bestimmten Diagnosen (z.B. Lymphödem nach Tumoroperation, postoperative Ödeme) von der Krankenkasse erstattet — mit ärztlicher Verschreibung. Wir helfen Ihnen, die Formalitäten zu klären.", fr: "En Belgique, le drainage lymphatique est remboursé par la mutuelle pour certains diagnostics (ex. lymphœdème après opération tumorale, œdèmes post-opératoires) — avec prescription médicale. Nous vous aidons à clarifier les formalités.", en: "In Belgium, lymphatic drainage is reimbursed by health insurance for certain diagnoses (e.g. lymphoedema after tumour surgery, post-operative oedema) — with a medical prescription. We help you clarify the formalities.", nl: "In België wordt lymfedrainage vergoed door de mutualiteit voor bepaalde diagnosen (bijv. lymfoedeem na tumoroperatie, postoperatief oedeem) — met een medisch voorschrift. Wij helpen u bij het uitklaren van de formaliteiten.", tr: "Belçika'da lenf drenajı, belirli tanılar için (örn. tümör ameliyatı sonrası lenfödem, ameliyat sonrası ödem) tıbbi reçeteyle sağlık sigortası tarafından karşılanır. Formaliteleri netleştirmenize yardımcı oluyoruz.", ar: "في بلجيكا، يتم تعويض الصرف اللمفاوي من قِبل التأمين الصحي لتشخيصات معينة (مثل الوذمة اللمفية بعد الجراحة الورمية، الوذمة بعد العملية) — بوصفة طبية. نساعدك في توضيح الإجراءات الرسمية.", pl: "W Belgii drenaż limfatyczny jest refundowany przez kasę chorych przy określonych diagnozach (np. obrzęk limfatyczny po operacji guza, obrzęk pooperacyjny) — z receptą lekarską. Pomagamy wyjaśnić formalności." },
      },
    ],
    relatedSlugs: ["manuelle-therapie", "sport-kinesitherapie"],
  },
};

const UI: Record<LangKey, {
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
};

export function ServiceDetailPageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const service = SERVICES[slug];

  if (!service) return null;

  const isRtl = lang === "ar";
  const Icon = service.icon;

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
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
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">{service.title[lang]}</h1>
                <p className="text-white/80 text-lg">{service.subtitle[lang]}</p>
              </div>
            </div>
            <p className="mt-6 text-white/90 leading-relaxed max-w-3xl">{service.description[lang]}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Long description paragraphs */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200 space-y-4">
                {service.longDesc[lang].map((para, i) => (
                  <p key={i} className="text-neutral-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </AnimatedSection>

            {/* Indications */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-neutral-200">
                <h2 className="font-bold text-neutral-900 text-lg mb-5">{ui.indications}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.indications[lang].map((ind, i) => (
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
                      <p className="font-semibold text-neutral-900 mb-2">{item.q[lang]}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{item.a[lang]}</p>
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
                  {service.points[lang].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] mt-2 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-neutral-100 mt-5 pt-5 flex items-start gap-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4 text-[#76b82a] flex-shrink-0 mt-0.5" />
                  <span>{service.duration[lang]}</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Contraindications */}
            <AnimatedSection delay={0.2}>
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="font-bold text-amber-800 mb-4 text-sm">{ui.contraindications}</h3>
                <ul className="space-y-2">
                  {service.contraindications[lang].map((c, i) => (
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
                            {related.title[lang]}
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
