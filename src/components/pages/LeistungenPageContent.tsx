"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Hand, Dumbbell, Smile, Droplets, ArrowRight, CheckCircle2 } from "lucide-react";


// uk/es/ku — kurmandji à faire relire par un natif
const SERVICE_EXTRA: Record<string, { title?: Record<string,string>; description?: Record<string,string>; points?: Record<string,string[]>; indications?: Record<string,string[]> }> = {
  "manuelle-therapie": {
    title: { uk: "Мануальна терапія", es: "Terapia Manual", ku: "Terapiya Destî" },
    description: {
      uk: "Ортопедична мануальна терапія — всесвітньо визнана спеціалізація. Ми шукаємо причину вашого болю та пропонуємо індивідуально підібране лікування для тривалого відновлення.",
      es: "Terapia manual ortopédica — una especialización reconocida mundialmente. Buscamos la causa de su dolor y ofrecemos un tratamiento personalizado para una recuperación duradera.",
      ku: "Terapiya destî ya ortopedîk — pisporiyek li cîhanê naskirî. Em sedema êşa we digerin û dermankirineke kesane ji bo başbûneke berdewam pêşkêş dikin." },
    points: {
      uk: ["Поглиблена фізіотерапевтична оцінка","Біопсихосоціальний підхід","Мета: автономний пацієнт","Методики, засновані на доказах"],
      es: ["Evaluación fisioterapéutica avanzada","Enfoque biopsicosocial","Objetivo: paciente autónomo","Técnicas basadas en la evidencia"],
      ku: ["Nirxandina fizyoterapî ya pêşketî","Nêzîkatiya biyopsîkososyal","Armanc: nexweşê serbixwe","Teknîkên li ser bingeha delîlan"] },
    indications: {
      uk: ["Біль у спині / шиї","Коліно та стегно","Плече та рука","Післяопераційна реабілітація","Головний біль"],
      es: ["Dolor de espalda / cuello","Rodilla y cadera","Hombro y brazo","Rehabilitación postoperatoria","Dolores de cabeza"],
      ku: ["Êşa pişt / situ","Çok û kalç","Mil û bask","Rehabîlîtasyona piştî emeliyatê","Serêş"] },
  },
  "sport-kinesitherapie": {
    title: { uk: "Спортивна фізіотерапія", es: "Fisioterapia Deportiva", ku: "Fizyoterapiya Werzîşê" },
    description: {
      uk: "Реабілітація, профілактика травм та оптимізація результатів для професійних і аматорських спортсменів. Наш досвід в анатомії та біомеханіці допоможе швидко й надовго повернути найкращу форму.",
      es: "Rehabilitación, prevención de lesiones y optimización del rendimiento para deportistas de élite y amateurs. Nuestra experiencia en anatomía y biomecánica le ayuda a recuperar su mejor forma de forma rápida y duradera.",
      ku: "Rehabîlîtasyon, pêşîlêgirtina birînan û başkirina performansê ji bo werzîşvanên pispor û amator. Pisporiya me di anatomî û biyomekanîkê de alîkariya we dike ku bi lez û berdewam vegerin forma xwe ya çêtirîn." },
    points: {
      uk: ["Running Clinic (La Clinique du Coureur)","Тренування з обмеженням кровотоку (BFR)","Спеціалізована спортивна реабілітація","Профілактика травм у клубі"],
      es: ["Running Clinic (La Clinique du Coureur)","Entrenamiento con restricción del flujo sanguíneo (BFR)","Rehabilitación específica del deporte","Prevención de lesiones en el club"],
      ku: ["Running Clinic (La Clinique du Coureur)","Perwerdeya bi sînorkirina herikîna xwînê (BFR)","Rehabîlîtasyona taybet a werzîşê","Pêşîlêgirtina birînan li klûbê"] },
    indications: {
      uk: ["Бігові травми","Розриви та розтягнення м'язів","Травми зв'язок","Спортивна реабілітація після операції","Оптимізація результатів"],
      es: ["Lesiones de carrera","Roturas y distensiones musculares","Lesiones de ligamentos","Rehabilitación deportiva postoperatoria","Optimización del rendimiento"],
      ku: ["Birînên bazdanê","Çirîn û dirêjbûna masûlkan","Birînên lîgaman","Rehabîlîtasyona werzîşê ya piştî emeliyatê","Başkirina performansê"] },
  },
  "kiefergelenk": {
    title: { uk: "Скронево-нижньощелепний суглоб (СНЩС)", es: "Articulación Temporomandibular (ATM)", ku: "Girêka Çenê (TMJ)" },
    description: {
      uk: "Спеціалізована терапія краніомандибулярної дисфункції (CMD/СНЩС). Лікування болю щелепи, головного болю, запаморочення та напруження шиї за допомогою міотензивних технік.",
      es: "Terapia especializada para la disfunción craneomandibular (DCM/ATM). Tratamiento del dolor de mandíbula, dolores de cabeza, mareos y tensión cervical mediante técnicas miotensivas.",
      ku: "Terapiya pispor a disfonksiyona kranomandîbular (CMD/TMJ). Dermankirina êşa çenê, serêş, gêjbûn û tengezariya situ bi teknîkên miyotensîf." },
    points: {
      uk: ["Міотензивні техніки","Розслаблення жувальних м'язів","Лікування клацання щелепи","Координація з ортодонтом"],
      es: ["Técnicas miotensivas","Relajación de los músculos masticadores","Tratamiento del chasquido","Coordinación con el ortodoncista"],
      ku: ["Teknîkên miyotensîf","Rehetkirina masûlkeyên çenê","Dermankirina teqînê","Hevrêzî bi ortodontîstan re"] },
    indications: {
      uk: ["Біль щелепи та CMD","Головний біль / Мігрень","Запаморочення та шум у вухах","Напруження шиї/плеча","Обмежене відкривання рота"],
      es: ["Dolor de mandíbula y DCM","Dolores de cabeza / Migraña","Mareos y tinnitus","Tensión cervical/escapular","Apertura bucal limitada"],
      ku: ["Êşa çenê & CMD","Serêş / Mîgren","Gêjbûn & zingîna guh","Tengezariya situ/milî","Vekirina çenê ya sînorkirî"] },
  },
  "lymphdrainage": {
    title: { uk: "Лімфодренаж", es: "Drenaje Linfático", ku: "Drenaja Lîmfatîk" },
    description: {
      uk: "Ручний лімфодренаж за визнаним методом O. Leduc. М'який спеціалізований масаж для зменшення набряків і стимуляції лімфатичної системи.",
      es: "Drenaje linfático manual según el reconocido método de O. Leduc. Un masaje especializado y suave para reducir el edema y estimular el sistema linfático.",
      ku: "Drenaja lîmfatîk a destî li gorî rêbaza naskirî ya O. Leduc. Masajeke nerm û pispor ji bo kêmkirina werimê û handana pergala lîmfatîk." },
    points: {
      uk: ["Метод O. Leduc","М'яка, неінвазивна техніка","Активація лімфатичної системи","Зменшення набряків"],
      es: ["Método O. Leduc","Técnica suave y no invasiva","Activación del sistema linfático","Reducción de la hinchazón"],
      ku: ["Rêbaza O. Leduc","Teknîka nerm û ne-invazîv","Handana pergala lîmfatîk","Kêmkirina werimê"] },
    indications: {
      uk: ["Післяопераційний набряк (коліно/стегно)","Лімфедема після онкооперації","Важкі ноги (вени/лімфа)","Спортивні травми"],
      es: ["Edema postoperatorio (rodilla/cadera)","Linfedema tras cirugía oncológica","Piernas pesadas (venas/linfa)","Lesiones deportivas"],
      ku: ["Werima piştî emeliyatê (çok/kalç)","Lîmfodema piştî emeliyata penceşêrê","Lingên giran (damar/lîmf)","Birînên werzîşê"] },
  },
};

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

const SERVICES = [
  {
    slug: "manuelle-therapie",
    icon: Hand,
    color: "from-[#2b3186] to-[#1e2260]",
    iconBg: "bg-[#2b3186]/10",
    iconColor: "text-[#2b3186]",
    borderHover: "hover:border-[#2b3186]/30",
    title: { de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy", nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna" },
    badge: "CUTM IFOMPT · QPP",
    description: {
      de: "Orthopädische Manualtherapie — weltweit anerkannte Spezialisierung. Wir suchen die Ursache Ihrer Schmerzen und bieten eine individuell angepasste Behandlung für dauerhafte Genesung.",
      fr: "Thérapie manuelle orthopédique — spécialisation mondialement reconnue. Nous cherchons la cause de vos douleurs et proposons un traitement personnalisé pour une guérison durable.",
      en: "Orthopaedic manual therapy — a globally recognised specialisation. We look for the root cause of your pain and offer an individually tailored treatment for lasting recovery.",
      nl: "Orthopedische manuele therapie — wereldwijd erkende specialisatie. Wij zoeken de oorzaak van uw pijn en bieden een op maat gemaakte behandeling voor blijvend herstel.",
      tr: "Ortopedik manuel terapi — dünya çapında tanınan bir uzmanlık. Ağrınızın kaynağını araştırıyor ve kalıcı iyileşme için bireysel bir tedavi sunuyoruz.",
      ar: "العلاج اليدوي التقويمي — تخصص معترف به عالميًا. نبحث عن سبب آلامك ونقدم علاجًا مخصصًا للتعافي الدائم.",
      pl: "Ortopedyczna terapia manualna — specjalizacja uznana na całym świecie. Szukamy przyczyny Twojego bólu i oferujemy indywidualnie dopasowane leczenie dla trwałego wyzdrowienia.",
    },
    points: {
      de: ["Erweiterte physiotherapeutische Anamnese", "Biopsychosozialer Ansatz", "Ziel: Autonomer Patient", "Wissenschaftlich fundierte Techniken"],
      fr: ["Anamnèse kinésithérapeutique avancée", "Approche biopsychosociale", "Objectif : Patient autonome", "Techniques scientifiquement validées"],
      en: ["Advanced physiotherapy assessment", "Biopsychosocial approach", "Goal: autonomous patient", "Evidence-based techniques"],
      nl: ["Uitgebreide fysiotherapeutische anamnese", "Biopsychosociaal benadering", "Doel: autonome patiënt", "Wetenschappelijk onderbouwde technieken"],
      tr: ["Gelişmiş fizyoterapi değerlendirmesi", "Biopsikososyal yaklaşım", "Hedef: bağımsız hasta", "Kanıta dayalı teknikler"],
      ar: ["تقييم فيزيوتيرابيا متقدم", "نهج بيو-نفسي-اجتماعي", "الهدف: مريض مستقل", "تقنيات قائمة على الأدلة"],
      pl: ["Zaawansowany wywiad fizjoterapeutyczny", "Podejście biopsychospołeczne", "Cel: autonomiczny pacjent", "Techniki oparte na dowodach"],
    },
    indications: {
      de: ["Rückenschmerzen / Nacken", "Knie & Hüfte", "Schulter & Arm", "Post-operative Rehabilitation", "Kopfschmerzen"],
      fr: ["Douleurs lombaires / cervicales", "Genou & hanche", "Épaule & bras", "Réhabilitation post-opératoire", "Maux de tête"],
      en: ["Back pain / neck pain", "Knee & hip", "Shoulder & arm", "Post-operative rehabilitation", "Headaches"],
      nl: ["Rugpijn / nekpijn", "Knie & heup", "Schouder & arm", "Postoperatieve revalidatie", "Hoofdpijn"],
      tr: ["Sırt ağrısı / boyun ağrısı", "Diz & kalça", "Omuz & kol", "Ameliyat sonrası rehabilitasyon", "Baş ağrısı"],
      ar: ["آلام الظهر / الرقبة", "الركبة والورك", "الكتف والذراع", "إعادة التأهيل بعد الجراحة", "الصداع"],
      pl: ["Ból pleców / karku", "Kolano i biodro", "Bark i ramię", "Rehabilitacja pooperacyjna", "Bóle głowy"],
    },
  },
  {
    slug: "sport-kinesitherapie",
    icon: Dumbbell,
    color: "from-[#76b82a] to-[#5c9120]",
    iconBg: "bg-[#76b82a]/10",
    iconColor: "text-[#76b82a]",
    borderHover: "hover:border-[#76b82a]/30",
    title: { de: "Sport Physiotherapie", fr: "Kinésithérapie du Sport", en: "Sports Physiotherapy", nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "العلاج الطبيعي الرياضي", pl: "Fizjoterapia Sportowa" },
    badge: "Running Clinic · BFR · Kinesport",
    description: {
      de: "Rehabilitation, Verletzungsprävention und Leistungssteigerung für Athleten und Hobbysportler. Unsere Kenntnisse in Anatomie und Biomechanik helfen Ihnen, schnell und dauerhaft in Topform zu kommen.",
      fr: "Rééducation, prévention des blessures et optimisation des performances pour sportifs de haut niveau et amateurs. Notre expertise en anatomie et biomécanique vous aide à retrouver votre meilleure forme.",
      en: "Rehabilitation, injury prevention and performance optimisation for elite and recreational athletes. Our expertise in anatomy and biomechanics helps you get back to top form quickly and lastingly.",
      nl: "Revalidatie, blessurepreventie en prestatieoptimalisatie voor topsporters en recreatieve sporters. Onze expertise in anatomie en biomechanica helpt u snel en duurzaam in topvorm te geraken.",
      tr: "Elit ve amatör sporcular için rehabilitasyon, sakatlık önleme ve performans optimizasyonu. Anatomi ve biyomekanik alanındaki uzmanlığımız, hızlı ve kalıcı biçimde en iyi forma ulaşmanıza yardımcı olur.",
      ar: "إعادة التأهيل والوقاية من الإصابات وتحسين الأداء للرياضيين المحترفين والهواة. تساعدك خبرتنا في التشريح وعلم الحركة على العودة لأفضل حالاتك بسرعة ودوام.",
      pl: "Rehabilitacja, profilaktyka urazów i optymalizacja wydajności dla sportowców wyczynowych i rekreacyjnych. Nasza wiedza z zakresu anatomii i biomechaniki pomaga szybko i trwale wrócić do formy.",
    },
    points: {
      de: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspezifische Rehabilitation", "Verletzungsprävention im Verein"],
      fr: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Réhabilitation spécifique au sport", "Prévention des blessures en club"],
      en: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sport-specific rehabilitation", "Injury prevention in clubs"],
      nl: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Sportspecifieke revalidatie", "Blessurepreventie in clubs"],
      tr: ["Running Clinic (La Clinique du Coureur)", "Kan Akışı Kısıtlama Antrenmanı (BFR)", "Spora özgü rehabilitasyon", "Kulüplerde sakatlık önleme"],
      ar: ["Running Clinic (La Clinique du Coureur)", "تدريب BFR (تقييد تدفق الدم)", "إعادة التأهيل الرياضي المتخصص", "الوقاية من الإصابات في النوادي"],
      pl: ["Running Clinic (La Clinique du Coureur)", "Blood Flow Restriction Training (BFR)", "Rehabilitacja sportowa", "Profilaktyka urazów w klubach"],
    },
    indications: {
      de: ["Laufsportverletzungen", "Muskelrisse & Zerrungen", "Bandverletzungen", "Post-op Sportrehabilitation", "Leistungsoptimierung"],
      fr: ["Blessures de running", "Déchirures & élongations", "Lésions ligamentaires", "Rééducation post-op sportive", "Optimisation des performances"],
      en: ["Running injuries", "Muscle tears & strains", "Ligament injuries", "Post-op sports rehab", "Performance optimisation"],
      nl: ["Loopblessures", "Spierscheuren & verrekkingen", "Banden letsels", "Post-op sportrevalidatie", "Prestatieoptimalisatie"],
      tr: ["Koşu sakatlıkları", "Kas yırtıkları & burkulmalar", "Bağ sakatlıkları", "Ameliyat sonrası spor rehabilitasyonu", "Performans optimizasyonu"],
      ar: ["إصابات الجري", "تمزقات وشدود العضلات", "إصابات الأربطة", "إعادة التأهيل الرياضي بعد الجراحة", "تحسين الأداء"],
      pl: ["Urazy biegowe", "Naderwania i naciągnięcia mięśni", "Urazy więzadeł", "Sportowa rehabilitacja pooperacyjna", "Optymalizacja wyników"],
    },
  },
  {
    slug: "kiefergelenk",
    icon: Smile,
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderHover: "hover:border-purple-200",
    title: { de: "Kiefergelenk / ATM", fr: "Articulation Temporo-Mandibulaire", en: "Jaw Joint / TMJ", nl: "Kaakgewricht / ATM", tr: "Çene Eklemi / ATM", ar: "المفصل الصدغي الفكي", pl: "Staw Skroniowo-Żuchwowy" },
    badge: "Pitance · Giop · Gouzland 2025",
    description: {
      de: "Spezialisierte Therapie bei craniomandibulärer Dysfunktion (CMD). Behandlung von Kieferschmerzen, Kopfschmerzen, Schwindel und Nackenverspannungen durch myotensive Techniken.",
      fr: "Thérapie spécialisée des dysfonctions cranio-mandibulaires (DCM/ATM). Traitement des douleurs de mâchoire, maux de tête, vertiges et tensions cervicales par techniques myotensives et articulaires.",
      en: "Specialised therapy for craniomandibular dysfunction (CMD/TMJ). Treatment of jaw pain, headaches, dizziness and neck tension using myotensive techniques.",
      nl: "Gespecialiseerde therapie bij craniomandibuläre dysfunctie (CMD/ATM). Behandeling van kaakpijn, hoofdpijn, duizeligheid en nekspanning via myotensieve technieken.",
      tr: "Kraniyomandibüler disfonksiyon (KMD/ATM) için uzmanlaşmış terapi. Miyotensif tekniklerle çene ağrısı, baş ağrısı, baş dönmesi ve boyun gerginliğinin tedavisi.",
      ar: "علاج متخصص للخلل الوظيفي الصدغي الفكي (ATM). معالجة آلام الفك والصداع والدوخة وتوتر الرقبة بتقنيات عضلية.",
      pl: "Specjalistyczna terapia dysfunkcji czaszkowo-żuchwowej (CMD/TMJ). Leczenie bólu szczęki, bólów głowy, zawrotów i napięcia szyi technikami miotensywnymi.",
    },
    points: {
      de: ["Myotensive Techniken", "Entspannung der Kiefermuskeln", "Behandlung des Knackens", "Koordination mit Kieferorthopäden"],
      fr: ["Techniques myotensives", "Relaxation des muscles masticateurs", "Traitement du claquement", "Coordination avec l'orthodontiste"],
      en: ["Myotensive techniques", "Relaxation of jaw muscles", "Treatment of jaw clicking", "Coordination with orthodontists"],
      nl: ["Myotensieve technieken", "Ontspanning van kaakspieren", "Behandeling van klikgeluid", "Coördinatie met orthodontist"],
      tr: ["Miyotensif teknikler", "Çene kaslarının gevşetilmesi", "Klik sesinin tedavisi", "Ortodontistlerle koordinasyon"],
      ar: ["تقنيات عضلية", "إرخاء عضلات الفك", "علاج الطقطقة", "التنسيق مع طبيب التقويم"],
      pl: ["Techniki miotensywne", "Rozluźnienie mięśni żuchwy", "Leczenie trzaskania stawu", "Koordynacja z ortodontą"],
    },
    indications: {
      de: ["Kieferschmerzen & CMD", "Kopfschmerzen / Migräne", "Schwindel & Tinnitus", "Nacken-/Schulterverspannung", "Kieferöffnungseinschränkung"],
      fr: ["Douleurs de mâchoire & DCM", "Maux de tête / Migraine", "Vertiges & acouphènes", "Tensions cervico-scapulaires", "Limitation d'ouverture buccale"],
      en: ["Jaw pain & CMD", "Headaches / Migraine", "Dizziness & tinnitus", "Neck/shoulder tension", "Limited jaw opening"],
      nl: ["Kaakpijn & CMD", "Hoofdpijn / Migraine", "Duizeligheid & tinnitus", "Nek-/schouderspanning", "Beperkte kaakopening"],
      tr: ["Çene ağrısı & KMD", "Baş ağrısı / Migren", "Baş dönmesi & kulak çınlaması", "Boyun/omuz gerginliği", "Sınırlı çene açılımı"],
      ar: ["آلام الفك وATM", "الصداع / الشقيقة", "الدوخة وطنين الأذن", "توتر الرقبة/الكتف", "تقييد فتح الفم"],
      pl: ["Ból szczęki i CMD", "Bóle głowy / Migrena", "Zawroty głowy i szumy uszne", "Napięcie karku/barku", "Ograniczone otwieranie ust"],
    },
  },
  {
    slug: "lymphdrainage",
    icon: Droplets,
    color: "from-teal-600 to-teal-800",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    borderHover: "hover:border-teal-200",
    title: { de: "Lymphdrainage", fr: "Drainage Lymphatique", en: "Lymphatic Drainage", nl: "Lymfedrainage", tr: "Lenf Drenajı", ar: "التصريف اللمفاوي", pl: "Drenaż Limfatyczny" },
    badge: "Méthode O. Leduc",
    description: {
      de: "Manuelle Lymphdrainage nach der anerkannten Methode von O. Leduc. Sanfte Spezialmassage zur Reduzierung von Ödemen und Stimulation des Lymphsystems.",
      fr: "Drainage lymphatique manuel selon la méthode reconnue d'O. Leduc. Massage spécial et doux pour réduire les œdèmes et stimuler le système lymphatique.",
      en: "Manual lymphatic drainage using the recognised O. Leduc method. A gentle specialist massage to reduce oedema and stimulate the lymphatic system.",
      nl: "Manuele lymfedrainage volgens de erkende methode van O. Leduc. Zachte specialistenmassage om oedeem te verminderen en het lymfestelsel te stimuleren.",
      tr: "Tanınan O. Leduc yöntemiyle manuel lenf drenajı. Ödem azaltmak ve lenf sistemini uyarmak için nazik bir uzman masajı.",
      ar: "تصريف لمفاوي يدوي بحسب طريقة O. Leduc المعترف بها. تدليك متخصص لطيف لتقليل الوذمة وتحفيز الجهاز اللمفاوي.",
      pl: "Manualny drenaż limfatyczny metodą O. Leduca. Delikatny specjalistyczny masaż redukujący obrzęki i stymulujący układ limfatyczny.",
    },
    points: {
      de: ["Methode nach O. Leduc", "Sanfte, schonende Technik", "Aktivierung des Lymphsystems", "Reduzierung von Schwellungen"],
      fr: ["Méthode selon O. Leduc", "Technique douce et non invasive", "Activation du système lymphatique", "Réduction des œdèmes"],
      en: ["O. Leduc method", "Gentle, non-invasive technique", "Lymphatic system activation", "Reduction of swelling"],
      nl: ["Methode van O. Leduc", "Zachte, niet-invasieve techniek", "Activering van het lymfestelsel", "Vermindering van zwelling"],
      tr: ["O. Leduc yöntemi", "Nazik, invazif olmayan teknik", "Lenf sistemi aktivasyonu", "Şişliğin azaltılması"],
      ar: ["طريقة O. Leduc", "تقنية لطيفة وغير جراحية", "تنشيط الجهاز اللمفاوي", "تقليل الانتفاخ"],
      pl: ["Metoda O. Leduca", "Delikatna, nieinwazyjna technika", "Aktywacja układu limfatycznego", "Redukcja obrzęków"],
    },
    indications: {
      de: ["Post-operative Ödeme (Knie/Hüfte)", "Lymphödem nach Tumoroperation", "Schwere Beine (Venen/Lymphe)", "Sportverletzungen"],
      fr: ["Œdèmes post-op (genou/hanche)", "Lymphœdème post-cancer", "Jambes lourdes (veines/lymphe)", "Blessures sportives"],
      en: ["Post-op oedema (knee/hip)", "Lymphoedema after cancer surgery", "Heavy legs (veins/lymph)", "Sports injuries"],
      nl: ["Post-op oedeem (knie/heup)", "Lymfoedeem na kankeroperatie", "Zware benen (aderen/lymfe)", "Sportblessures"],
      tr: ["Ameliyat sonrası ödem (diz/kalça)", "Kanser ameliyatı sonrası lenfödem", "Ağır bacaklar (damarlar/lenf)", "Spor sakatlıkları"],
      ar: ["وذمة ما بعد الجراحة (الركبة/الورك)", "وذمة لمفاوية بعد جراحة السرطان", "ثقل الساقين (الأوردة/اللمف)", "إصابات رياضية"],
      pl: ["Obrzęk pooperacyjny (kolano/biodro)", "Obrzęk limfatyczny po operacji onkologicznej", "Ciężkie nogi (żylne/limfatyczne)", "Urazy sportowe"],
    },
  },
];

export function LeistungenPageContent() {
  const locale = useLocale() as LangKey;
  const t = useTranslations("services");
  const tNav = useTranslations("nav");
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;

  const learnMore: Record<LangKey, string> = { de: "Mehr erfahren", fr: "En savoir plus", en: "Learn more", nl: "Meer info", tr: "Daha fazla", ar: "المزيد", pl: "Więcej", uk: "Дізнатися більше", es: "Saber más", ku: "Bêtir fêr bibe" };
  const characteristics: Record<LangKey, string> = { de: "Merkmale", fr: "Caractéristiques", en: "Features", nl: "Kenmerken", tr: "Özellikler", ar: "المميزات", pl: "Cechy", uk: "Особливості", es: "Características", ku: "Taybetmendî" };
  const indications: Record<LangKey, string> = { de: "Indikationen", fr: "Indications", en: "Indications", nl: "Indicaties", tr: "Endikasyonlar", ar: "المؤشرات", pl: "Wskazania", uk: "Показання", es: "Indicaciones", ku: "Nîşan" };
  const unsureTitle: Record<LangKey, string> = { de: "Unsicher welche Therapie passt?", fr: "Vous ne savez pas quelle thérapie choisir ?", en: "Not sure which therapy is right?", nl: "Niet zeker welke therapie past?", tr: "Hangi terapi uygun olduğundan emin değil misiniz?", ar: "هل أنت غير متأكد من أي علاج يناسبك؟", pl: "Nie wiesz, która terapia jest odpowiednia?", uk: "Не знаєте, яка терапія підходить?", es: "¿No sabe qué terapia elegir?", ku: "Ne piştrast in kîjan terapî guncan e?" };
  const unsureSub: Record<LangKey, string> = { de: "Nehmen Sie Kontakt auf — wir beraten Sie kostenlos.", fr: "Contactez-nous — nous vous conseillons gratuitement.", en: "Contact us — we advise you free of charge.", nl: "Neem contact op — wij adviseren u gratis.", tr: "Bize ulaşın — ücretsiz danışmanlık.", ar: "تواصل معنا — ننصحك مجانا.", pl: "Skontaktuj się z nami — doradzamy bezpłatnie.", uk: "Зв\u0027яжіться з нами — консультуємо безкоштовно.", es: "Contáctenos — le asesoramos gratuitamente.", ku: "Bi me re têkilî daynin — em belaş şîretan dikin." };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            <span style={{ color: "#76b82a" }}>{t("sectionTitle")}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </AnimatedSection>

        {/* Services */}
        <StaggerContainer className="space-y-8" staggerDelay={0.12}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.slug}>
              <div className={`group bg-white border-2 border-neutral-100 ${service.borderHover} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Left: Icon + title + desc */}
                  <div className="lg:col-span-1">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-2xl mb-5`}>
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-bold px-3 py-1 bg-neutral-100 text-neutral-500 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-neutral-900 mb-3">
                      {SERVICE_EXTRA[service.slug]?.title?.[lang] ?? (service.title as Record<string,string>)[lang] ?? service.title.de}
                    </h2>
                    <p className="text-neutral-500 leading-relaxed text-sm mb-5">
                      {SERVICE_EXTRA[service.slug]?.description?.[lang] ?? (service.description as Record<string,string>)[lang] ?? service.description.de}
                    </p>
                    <Link
                      href={`/leistungen/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors"
                    >
                      {learnMore[lang]}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Middle: Points clés */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      {characteristics[lang]}
                    </h3>
                    <ul className="space-y-2.5">
                      {(SERVICE_EXTRA[service.slug]?.points?.[lang] ?? (service.points as Record<string,string[]>)[lang] ?? service.points.de).map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#76b82a] flex-shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Indications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                      {indications[lang]}
                    </h3>
                    <ul className="space-y-2">
                      {(SERVICE_EXTRA[service.slug]?.indications?.[lang] ?? (service.indications as Record<string,string[]>)[lang] ?? service.indications.de).map((ind, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] flex-shrink-0" />
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-16">
          <motion.div
            className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center"
          >
            <h2 className="text-2xl font-extrabold mb-3">{unsureTitle[lang]}</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">{unsureSub[lang]}</p>
            <Link
              href="/termin"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
            >
              {tNav("appointment")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
