"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { Clock, Tag, ArrowRight, BookOpen, Sparkles } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

export const ARTICLES = [
  {
  "slug": "sommeil-recuperation-douleur",
  "date": "2026-07-06",
  "readMin": 5,
  "category": {
    "de": "Gesundheit & Prävention",
    "fr": "Santé & Prévention",
    "en": "Health & Prevention",
    "nl": "Gezondheid & Preventie",
    "tr": "Sağlık & Önleme",
    "ar": "الصحة والوقاية",
    "pl": "Zdrowie i profilaktyka"
  },
  "color": "from-[#4f46e5] to-[#312e81]",
  "title": {
    "de": "Schlaf: Ihr am meisten unterschätzter Gesundheitspartner",
    "fr": "Le sommeil : votre allié santé le plus sous-estimé",
    "en": "Sleep: your most underrated health ally",
    "nl": "Slaap: uw meest onderschatte gezondheidsbondgenoot",
    "tr": "Uyku: en çok küçümsenen sağlık müttefikiniz",
    "ar": "النوم: حليف صحتك الأكثر استهانةً به",
    "pl": "Sen: twój najbardziej niedoceniany sprzymierzeniec zdrowia"
  },
  "excerpt": {
    "de": "Schmerz, Regeneration, Verletzungen: Schlaf wirkt auf alles. Mit Zahlen und einfachen Tipps für besseren Schlaf, von Ihrer Physiotherapie in Eupen.",
    "fr": "Douleur, récupération, blessures : le sommeil agit sur tout. Chiffres à l'appui et petits trucs faciles pour mieux dormir, par votre kiné à Eupen.",
    "en": "Pain, recovery, injuries: sleep affects it all. With the numbers and easy tips for better sleep, from your physio in Eupen.",
    "nl": "Pijn, herstel, blessures: slaap beïnvloedt alles. Met cijfers en makkelijke tips voor betere slaap, van uw kinesist in Eupen.",
    "tr": "Ağrı, toparlanma, sakatlık: uyku her şeyi etkiler. Rakamlar ve daha iyi uyku için kolay ipuçlarıyla, Eupen'deki fizyoterapistinizden.",
    "ar": "الألم والتعافي والإصابات: النوم يؤثّر في كل شيء. مع الأرقام ونصائح سهلة لنوم أفضل، من أخصائي العلاج الطبيعي في أوبن.",
    "pl": "Ból, regeneracja, kontuzje: sen wpływa na wszystko. Z liczbami i prostymi wskazówkami na lepszy sen, od Twojego fizjoterapeuty w Eupen."
  },
  "tags": {
    "de": [
      "Schlaf",
      "Regeneration",
      "Schmerz",
      "Prävention"
    ],
    "fr": [
      "Sommeil",
      "Récupération",
      "Douleur",
      "Prévention"
    ],
    "en": [
      "Sleep",
      "Recovery",
      "Pain",
      "Prevention"
    ],
    "nl": [
      "Slaap",
      "Herstel",
      "Pijn",
      "Preventie"
    ],
    "tr": [
      "Uyku",
      "Toparlanma",
      "Ağrı",
      "Önleme"
    ],
    "ar": [
      "النوم",
      "التعافي",
      "الألم",
      "الوقاية"
    ],
    "pl": [
      "Sen",
      "Regeneracja",
      "Ból",
      "Profilaktyka"
    ]
  }
},

  {
    "slug": "therapie-manuelle-mythes-mouvement",
    "date": "2026-06-21",
    "readMin": 6,
    "category": {
        "de": "Manuelle Therapie",
        "fr": "Thérapie Manuelle",
        "en": "Manual Therapy",
        "nl": "Manuele Therapie",
        "tr": "Manuel Terapi",
        "ar": "العلاج اليدوي",
        "pl": "Terapia Manualna"
    },
    "color": "from-[#2b3186] to-[#1e2260]",
    "title": {
        "de": "Manuelle Therapie in Eupen: Bewegung zurückgeben, nicht « einrenken »",
        "fr": "Thérapie manuelle à Eupen : remettre du mouvement, pas « remettre en place »",
        "en": "Manual therapy in Eupen: restoring movement, not « putting things back »",
        "nl": "Manuele therapie in Eupen: beweging teruggeven, niet « rechtzetten »",
        "tr": "Eupen'de manuel terapi: yerine oturtmak değil, hareketi geri vermek",
        "ar": "العلاج اليدوي في أوبن: إعادة الحركة، لا « إعادة الأمور إلى مكانها »",
        "pl": "Terapia manualna w Eupen: przywracanie ruchu, a nie « nastawianie »"
    },
    "excerpt": {
        "fr": "« On va vous remettre en place » : et si c'était faux ? La thérapie manuelle ne réaligne rien — elle calme la douleur et vous remet en mouvement. Le point, preuves à l'appui, au cabinet de kiné à Eupen.",
        "de": "« Wir renken das wieder ein » — und wenn das gar nicht stimmt? Manuelle Therapie richtet nichts aus, sie lindert Schmerzen und bringt Sie in Bewegung. Der Überblick, evidenzbasiert, in Eupen.",
        "en": "« We'll put it back in place » — what if that's wrong? Manual therapy realigns nothing; it eases pain and gets you moving. The evidence-based picture, at our physio clinic in Eupen.",
        "nl": "« We zetten het wel recht » — en als dat niet klopt? Manuele therapie zet niets recht; ze verzacht pijn en brengt u in beweging. Het overzicht, evidence-based, in Eupen.",
        "tr": "« Yerine oturturuz » — ya bu yanlışsa? Manuel terapi hiçbir şeyi hizalamaz; ağrıyı dindirir ve sizi harekete geçirir. Kanıta dayalı genel bakış, Eupen'deki fizyoterapi kliniğinde.",
        "ar": "« سنعيد الأمور إلى مكانها » — وماذا لو كان ذلك خطأً؟ العلاج اليدوي لا يعيد محاذاة شيء؛ بل يهدّئ الألم ويعيدك إلى الحركة. الصورة القائمة على الأدلة، في عيادتنا في أوبن.",
        "pl": "« Nastawimy to z powrotem » — a jeśli to nieprawda? Terapia manualna niczego nie nastawia; łagodzi ból i wprawia Cię w ruch. Obraz oparty na dowodach, w naszej poradni w Eupen."
    },
    "tags": {
        "fr": [
            "Thérapie manuelle",
            "Mouvement",
            "Mythes",
            "Mal de dos"
        ],
        "de": [
            "Manuelle Therapie",
            "Bewegung",
            "Mythen",
            "Rückenschmerz"
        ],
        "en": [
            "Manual therapy",
            "Movement",
            "Myths",
            "Back pain"
        ],
        "nl": [
            "Manuele therapie",
            "Beweging",
            "Mythes",
            "Rugpijn"
        ],
        "tr": [
            "Manuel terapi",
            "Hareket",
            "Mitler",
            "Bel ağrısı"
        ],
        "ar": [
            "العلاج اليدوي",
            "الحركة",
            "الخرافات",
            "آلام الظهر"
        ],
        "pl": [
            "Terapia manualna",
            "Ruch",
            "Mity",
            "Ból pleców"
        ]
    }
},
  {
    slug: "doser-activite-douleur",
    date: "2026-05-07",
    readMin: 6,
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    color: "from-[#0e7490] to-[#155e75]",
    title: {
      de: "Bewegen trotz Schmerzen — wie Sie die richtige Dosis finden",
      fr: "Bouger malgré la douleur — comment trouver la bonne dose",
      en: "Moving with Pain — How to Find the Right Dose",
      nl: "Bewegen met pijn — hoe vindt u de juiste dosis?",
      tr: "Ağrıyla hareket etmek — doğru dozu nasıl bulursunuz?",
      ar: "الحركة مع الألم — كيف تجد الجرعة المناسبة؟",
      pl: "Ruch mimo bólu — jak znaleźć odpowiednią dawkę?",
    },
    excerpt: {
      de: "Sollte man bei jedem Schmerz aufhören oder weiterbewegen? Die Wissenschaft hat entschieden: Alles ist eine Frage der Dosis. Entdecken Sie die 24-Stunden-Regel und das Ampelsystem, um wieder selbstsicher aktiv zu werden.",
      fr: "Faut-il s'arrêter à la moindre douleur ou continuer à bouger ? La science a tranché : tout est question de dose. Découvrez la règle des 24 heures et le système des feux tricolores pour reprendre l'activité en confiance.",
      en: "Should you stop at the slightest pain or keep moving? Science has decided: it's all about the dose. Discover the 24-hour rule and the traffic light system to get active again with confidence.",
      nl: "Moet u stoppen bij de minste pijn of blijven bewegen? De wetenschap heeft beslist: alles is een kwestie van dosering. Ontdek de 24-uursregel en het stoplichtsysteem om vol vertrouwen weer te bewegen.",
      tr: "En ufak ağrıda durmalı mı yoksa hareket etmeye devam mı etmeli? Bilim karar verdi: her şey dozda. 24 saat kuralı ve trafik ışığı sistemiyle güvenle yeniden aktif olun.",
      ar: "هل يجب أن تتوقف عند أدنى ألم أم تستمر في الحركة؟ حسم العلم الأمر: كل شيء مسألة جرعة. اكتشف قاعدة الـ 24 ساعة ونظام إشارات المرور لاستئناف النشاط بثقة.",
      pl: "Zatrzymać się przy najmniejszym bólu czy kontynuować ruch? Nauka zdecydowała: wszystko zależy od dawki. Odkryj zasadę 24 godzin i system świateł drogowych, by z pewnością siebie wrócić do aktywności.",
    },
    tags: {
      de: ["Chronischer Schmerz", "Körperliche Aktivität", "Rückenschmerz", "Tendinopathie"],
      fr: ["Douleur chronique", "Activité physique", "Lombalgie", "Tendinopathie"],
      en: ["Chronic pain", "Physical activity", "Low back pain", "Tendinopathy"],
      nl: ["Chronische pijn", "Lichaamsbeweging", "Lage rugpijn", "Tendinopathie"],
      tr: ["Kronik ağrı", "Fiziksel aktivite", "Bel ağrısı", "Tendinopati"],
      ar: ["الألم المزمن", "النشاط البدني", "آلام الظهر", "اعتلال الأوتار"],
      pl: ["Ból przewlekły", "Aktywność fizyczna", "Ból krzyża", "Tendinopatia"],
    },
  },
  {
    slug: "position-assise-mal-de-dos",
    date: "2026-05-03",
    readMin: 4,
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    color: "from-[#0e7490] to-[#155e75]",
    title: {
      de: "Schadet langes Sitzen wirklich Ihrem Rücken? Was die Wissenschaft 2026 sagt",
      fr: "La position assise abîme-t-elle vraiment votre dos ? Ce que dit la science en 2026",
      en: "Does sitting really damage your back? What the science says in 2026",
      nl: "Beschadigt zitten echt uw rug? Wat de wetenschap zegt in 2026",
      tr: "Oturmak gerçekten sırtınıza zarar verir mi? 2026 bilimi ne diyor",
      ar: "هل الجلوس يضر فعلاً بظهرك؟ ما يقوله العلم في 2026",
      pl: "Czy siedzenie naprawdę niszczy plecy? Co mówi nauka w 2026",
    },
    excerpt: {
      de: "„Sitzen ist das neue Rauchen.\" Eine beängstigende Phrase — aber stimmt sie? Die Wissenschaft entlastet die Bürotätigkeit: das Problem ist nicht der Stuhl, sondern die anhaltende Unbeweglichkeit. Die EBP-Analyse von Praxis Loten.",
      fr: "« Rester assis, c'est le nouveau tabagisme. » Une phrase qui fait peur — mais est-ce vrai ? La science dédouane la chaise de bureau : le problème n'est pas le siège, mais l'immobilité prolongée. L'analyse EBP de Praxis Loten.",
      en: "\"Sitting is the new smoking.\" A scary phrase — but is it true? Science exonerates the office chair: the problem isn't the seat, it's prolonged immobility. The EBP analysis from Praxis Loten.",
      nl: "„Zitten is het nieuwe roken.\" Een angstaanjagende zin — maar klopt het? De wetenschap pleit de bureaustoel vrij: het probleem is niet de stoel, maar langdurige onbeweeglijkheid.",
      tr: "„Oturmak yeni sigaradır.\" Korkutucu bir cümle — ama doğru mu? Bilim ofis sandalyesini akl​ıyor: sorun koltuk değil, uzun süreli hareketsizlik.",
      ar: "„الجلوس هو التدخين الجديد.\" عبارة مخيفة — لكن هل هي صحيحة؟ العلم يبرّئ كرسي المكتب: المشكلة ليست في المقعد، بل في الجمود المطوّل.",
      pl: "„Siedzenie to nowe palenie.\" Przerażające zdanie — ale czy prawdziwe? Nauka oczyszcza krzesło biurowe: problemem nie jest siedzisko, lecz długotrwały bezruch.",
    },
    tags: { de: ["Lumbalgie", "Sitzen", "Sedentarität", "Eupen"], fr: ["Lombalgie", "Position assise", "Sédentarité", "Eupen"], en: ["Low back pain", "Sitting", "Sedentary", "Eupen"], nl: ["Lage rugpijn", "Zitten", "Sedentair", "Eupen"], tr: ["Bel ağrısı", "Oturma", "Hareketsizlik", "Eupen"], ar: ["ألم أسفل الظهر", "جلوس", "خمول", "أوبن"], pl: ["Ból krzyża", "Siedzenie", "Siedzący tryb", "Eupen"] },
  },
  {
    slug: "douleurs-cervicales-mobilite-eupen",
    date: "2026-05-03",
    readMin: 6,
    category: {
      de: "Nackenschmerzen", fr: "Cervicales", en: "Neck pain",
      nl: "Nekpijn", tr: "Boyun Ağrısı", ar: "آلام الرقبة", pl: "Ból szyi",
    },
    color: "from-[#0e7490] to-[#155e75]",
    title: {
      de: "Nackenschmerzen — warum Ihr Hals weh tut und wie Sie in Eupen wieder beweglich werden",
      fr: "Douleurs aux cervicales — pourquoi votre cou vous fait mal et comment retrouver de la mobilité à Eupen",
      en: "Neck pain — why your neck hurts and how to regain mobility in Eupen",
      nl: "Nekpijn — waarom uw nek pijn doet en hoe u in Eupen weer mobiel wordt",
      tr: "Boyun ağrısı — boynunuzun neden ağrıdığı ve Eupen'de hareketliliği nasıl geri kazanacağınız",
      ar: "آلام الرقبة — لماذا تؤلمك رقبتك وكيف تستعيد الحركة في أوبن",
      pl: "Ból szyi — dlaczego boli Cię szyja i jak odzyskać mobilność w Eupen",
    },
    excerpt: {
      de: "Steifheit am Schädelansatz oder zwischen den Schulterblättern? Die moderne Wissenschaft beruhigt: Ihr Nacken ist robust und anpassungsfähig. Wir erklären, warum Schmerz nicht gleich Schaden ist und wie Sie wieder Vertrauen in Ihre Bewegung gewinnen.",
      fr: "Cette raideur persistante à la base du crâne ou entre les omoplates ? La science moderne nous apporte une nouvelle bien plus rassurante : votre cou est solide, résistant et capable de s'adapter. On vous explique pourquoi la douleur n'est pas synonyme de lésion.",
      en: "That persistent stiffness at the base of the skull or between the shoulder blades? Modern science brings reassuring news: your neck is strong, resilient and adaptable. We explain why pain doesn't equal damage and how to rebuild trust in your movement.",
      nl: "Die hardnekkige stijfheid onderaan de schedel of tussen de schouderbladen? De moderne wetenschap brengt geruststellend nieuws: uw nek is sterk en aanpasbaar. We leggen uit waarom pijn geen schade betekent.",
      tr: "Kafatasının altında veya kürek kemikleri arasında kalıcı sertlik mi? Modern bilim güven verici haberler getiriyor: boynunuz güçlü ve uyum sağlayabilir. Ağrının neden hasar anlamına gelmediğini açıklıyoruz.",
      ar: "هل تشعر بتيبس مستمر عند قاعدة الجمجمة أو بين الكتفين؟ يقدم لنا العلم الحديث خبرًا مطمئنًا: رقبتك قوية وقادرة على التكيف. نشرح لماذا الألم لا يعني الإصابة.",
      pl: "Ta uporczywa sztywność u podstawy czaszki lub między łopatkami? Współczesna nauka przynosi uspokajającą wiadomość: Twoja szyja jest silna i zdolna do adaptacji. Wyjaśniamy, dlaczego ból nie oznacza uszkodzenia.",
    },
    tags: { de: ["Nacken", "Manuelle Therapie", "Mobilität", "Eupen"], fr: ["Cervicales", "Thérapie Manuelle", "Mobilité", "Eupen"], en: ["Neck", "Manual Therapy", "Mobility", "Eupen"], nl: ["Nek", "Manuele Therapie", "Mobiliteit", "Eupen"], tr: ["Boyun", "Manuel Terapi", "Hareket", "Eupen"], ar: ["رقبة", "علاج يدوي", "حركة", "أوبن"], pl: ["Szyja", "Terapia Manualna", "Mobilność", "Eupen"] },
  },
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
  {
  slug: "montre-connectee-douleur",
  date: "2026-05-23",
  readMin: 6,
  category: {
    de: "Therapie & Technologie",
    fr: "Th\u00e9rapie & Technologie",
    en: "Therapy & Technology",
    nl: "Therapie & Technologie",
    tr: "Terapi & Teknoloji",
    ar: "\u0627\u0644\u0639\u0644\u0627\u062c \u0648\u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627",
    pl: "Terapia & Technologia",
  },
  color: "from-[#0e7490] to-[#155e75]",
  title: {
    de: "Smartwatch und Schmerz \u2014 Was Ihre Uhr wirklich f\u00fcr Sie tun kann",
    fr: "Montre connect\u00e9e et douleur \u2014 Ce que votre montre peut vraiment faire pour vous",
    en: "Smartwatch and Pain \u2014 What Your Watch Can Really Do for You",
    nl: "Smartwatch en pijn \u2014 Wat uw horloge echt voor u kan doen",
    tr: "Ak\u0131ll\u0131 saat ve a\u011fr\u0131 \u2014 Saatiniz sizin i\u00e7in ger\u00e7ekten ne yapabilir?",
    ar: "\u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u0630\u0643\u064a\u0629 \u0648\u0627\u0644\u0623\u0644\u0645 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0645\u0643\u0646 \u0623\u0646 \u062a\u0641\u0639\u0644\u0647 \u0633\u0627\u0639\u062a\u0643 \u062d\u0642\u0627\u064b \u0645\u0646 \u0623\u062c\u0644\u0643",
    pl: "Smartwatch a b\u00f3l \u2014 Co zegarek naprawd\u0119 mo\u017ce dla Ciebie zrobi\u0107",
  },
  excerpt: {
    de: "Kann Ihre Apple Watch oder Garmin bei chronischen Schmerzen helfen? Die Wissenschaft sagt: Ja \u2014 aber nicht so, wie Sie denken. Erfahren Sie, wie Sie Ihre Smartwatch-Daten richtig nutzen.",
    fr: "Votre Apple Watch ou Garmin peut-elle aider en cas de douleurs chroniques ? La science dit : oui \u2014 mais pas comme vous le pensez. D\u00e9couvrez comment bien utiliser les donn\u00e9es de votre montre.",
    en: "Can your Apple Watch or Garmin help with chronic pain? Science says yes \u2014 but not how you think. Learn how to properly use your smartwatch data.",
    nl: "Kan uw Apple Watch of Garmin helpen bij chronische pijn? De wetenschap zegt: ja \u2014 maar niet zoals u denkt. Ontdek hoe u uw smartwatchgegevens goed benut.",
    tr: "Apple Watch veya Garmin'iniz kronik a\u011fr\u0131larda yard\u0131mc\u0131 olabilir mi? Bilim evet diyor \u2014 ama d\u00fc\u015f\u00fcnd\u00fc\u011f\u00fcn\u00fcz gibi de\u011fil. Ak\u0131ll\u0131 saat verilerinizi nas\u0131l do\u011fru kullanaca\u011f\u0131n\u0131z\u0131 \u00f6\u011frenin.",
    ar: "\u0647\u0644 \u064a\u0645\u0643\u0646 \u0644\u0633\u0627\u0639\u0629 Apple Watch \u0623\u0648 Garmin \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0641\u064a \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0645\u0632\u0645\u0646\u061f \u0627\u0644\u0639\u0644\u0645 \u064a\u0642\u0648\u0644 \u0646\u0639\u0645 \u2014 \u0644\u0643\u0646 \u0644\u064a\u0633 \u0643\u0645\u0627 \u062a\u0638\u0646\u0648\u0646. \u0627\u0643\u062a\u0634\u0641\u0648\u0627 \u0643\u064a\u0641 \u062a\u0633\u062a\u062e\u062f\u0645\u0648\u0646 \u0628\u064a\u0627\u0646\u0627\u062a \u0633\u0627\u0639\u062a\u0643\u0645 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.",
    pl: "Czy Apple Watch lub Garmin mo\u017ce pom\u00f3c przy b\u00f3lu przewlek\u0142ym? Nauka m\u00f3wi: tak \u2014 ale nie tak, jak my\u015blisz. Dowiedz si\u0119, jak prawid\u0142owo wykorzysta\u0107 dane ze smartwatcha.",
  },
  tags: {
    de: ["Smartwatch", "Chronische Schmerzen", "Bewegung", "Rehabilitation"],
    fr: ["Montre connect\u00e9e", "Douleurs chroniques", "Mouvement", "R\u00e9\u00e9ducation"],
    en: ["Smartwatch", "Chronic Pain", "Movement", "Rehabilitation"],
    nl: ["Smartwatch", "Chronische pijn", "Beweging", "Revalidatie"],
    tr: ["Ak\u0131ll\u0131 saat", "Kronik a\u011fr\u0131", "Hareket", "Rehabilitasyon"],
    ar: ["\u0633\u0627\u0639\u0629 \u0630\u0643\u064a\u0629", "\u0623\u0644\u0645 \u0645\u0632\u0645\u0646", "\u062d\u0631\u0643\u0629", "\u0625\u0639\u0627\u062f\u0629 \u062a\u0623\u0647\u064a\u0644"],
    pl: ["Smartwatch", "B\u00f3l przewlek\u0142y", "Ruch", "Rehabilitacja"],
  },
},
];

const UI_BLOG: Record<LangKey, { title: string; subtitle: string; readMin: string; readMore: string; featured: string; all: string; filterBy: string }> = {
  de: { title: "Blog & Ratgeber", subtitle: "Fachartikel unserer Therapeuten zu Physiotherapie, Rehabilitation und Gesundheit.", readMin: "min Lesezeit", readMore: "Artikel lesen", featured: "Neu", all: "Alle", filterBy: "Kategorie" },
  fr: { title: "Blog & Conseils", subtitle: "Articles de fond rédigés par nos thérapeutes sur la kinésithérapie, la rééducation et la santé.", readMin: "min de lecture", readMore: "Lire l'article", featured: "Nouveau", all: "Tous", filterBy: "Catégorie" },
  en: { title: "Blog & Advice", subtitle: "In-depth articles by our therapists on physiotherapy, rehabilitation and health.", readMin: "min read", readMore: "Read article", featured: "New", all: "All", filterBy: "Category" },
  nl: { title: "Blog & Advies", subtitle: "Diepgaande artikelen van onze therapeuten over fysiotherapie, revalidatie en gezondheid.", readMin: "min leestijd", readMore: "Artikel lezen", featured: "Nieuw", all: "Alle", filterBy: "Categorie" },
  tr: { title: "Blog & Tavsiyeler", subtitle: "Terapistlerimizin fizyoterapi, rehabilitasyon ve sağlık hakkında derinlemesine makaleleri.", readMin: "dk okuma", readMore: "Makaleyi oku", featured: "Yeni", all: "Tümü", filterBy: "Kategori" },
  ar: { title: "المدونة والنصائح", subtitle: "مقالات متعمقة يكتبها معالجونا حول العلاج الطبيعي وإعادة التأهيل والصحة.", readMin: "دقيقة قراءة", readMore: "اقرأ المقال", featured: "جديد", all: "الكل", filterBy: "الفئة" },
  pl: { title: "Blog i Porady", subtitle: "Dogłębne artykuły naszych terapeutów o fizjoterapii, rehabilitacji i zdrowiu.", readMin: "min czytania", readMore: "Przeczytaj artykuł", featured: "Nowość", all: "Wszystko", filterBy: "Kategoria" },
};

function formatDate(dateStr: string, lang: LangKey) {
  const d = new Date(dateStr);
  const locales: Record<LangKey, string> = { de: "de-DE", fr: "fr-FR", en: "en-GB", nl: "nl-NL", tr: "tr-TR", ar: "ar-SA", pl: "pl-PL" };
  return d.toLocaleDateString(locales[lang], { year: "numeric", month: "long", day: "numeric" });
}

export function BlogPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI_BLOG[lang];
  const isRtl = lang === "ar";

  // Sort by date desc
  const sorted = useMemo(
    () => [...ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  // Unique categories for the filter
  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    sorted.forEach((a) => {
      const cat = (a.category as Record<LangKey, string>)[lang];
      if (!seen.has(cat)) seen.set(cat, cat);
    });
    return Array.from(seen.values());
  }, [sorted, lang]);

  const [activeCat, setActiveCat] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (!activeCat) return sorted;
    return sorted.filter((a) => (a.category as Record<LangKey, string>)[lang] === activeCat);
  }, [sorted, activeCat, lang]);

  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-5">
            <BookOpen className="w-4 h-4" />
            {ui.title}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">{ui.subtitle}</p>
        </AnimatedSection>

        {/* Category filter */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCat(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCat === null
                  ? "bg-[#2b3186] text-white shadow-md"
                  : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#76b82a] hover:text-[#5c9120]"
              }`}
            >
              {ui.all}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCat === cat
                    ? "bg-[#2b3186] text-white shadow-md"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-[#76b82a] hover:text-[#5c9120]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Featured article */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={`featured-${featured.slug}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mb-12"
            >
              <Link href={`/blog/${featured.slug}`} className="block group">
                <article className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Visual side */}
                    <div className={`lg:col-span-2 relative bg-gradient-to-br ${featured.color} p-10 lg:p-14 flex flex-col justify-between min-h-[320px]`}>
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)",
                      }} />
                      <div className="relative">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                          <Sparkles className="w-3.5 h-3.5" /> {ui.featured}
                        </span>
                        <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                          {(featured.category as Record<LangKey, string>)[lang]}
                        </p>
                      </div>
                      <div className="relative flex items-center gap-3 text-white/80 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readMin} {ui.readMin}
                        <span className="opacity-50">•</span>
                        <time>{formatDate(featured.date, lang)}</time>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-4 leading-tight tracking-tight group-hover:text-[#2b3186] transition-colors">
                        {(featured.title as Record<LangKey, string>)[lang]}
                      </h2>
                      <p className="text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                        {(featured.excerpt as Record<LangKey, string>)[lang]}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#2b3186] group-hover:text-[#76b82a] transition-colors">
                        {ui.readMore}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Articles grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
          {rest.map((article) => {
            const title = (article.title as Record<LangKey, string>)[lang] ?? article.title.de;
            const excerpt = (article.excerpt as Record<LangKey, string>)[lang] ?? article.excerpt.de;
            const category = (article.category as Record<LangKey, string>)[lang] ?? article.category.de;

            return (
              <StaggerItem key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="block h-full group">
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl overflow-hidden border border-neutral-200 group-hover:shadow-xl group-hover:border-transparent transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Visual header */}
                    <div className={`relative h-32 bg-gradient-to-br ${article.color} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 50%)",
                      }} />
                      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                        <span className="text-white/95 text-xs font-bold uppercase tracking-wider">
                          {category}
                        </span>
                        <span className="text-white/80 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readMin}{" "}{ui.readMin}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-base font-extrabold text-neutral-900 mb-3 leading-snug group-hover:text-[#2b3186] transition-colors">
                        {title}
                      </h2>

                      <p className="text-neutral-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
                        {excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {((article.tags as Record<LangKey, string[]>)[lang] ?? (article.tags as Record<LangKey, string[]>).de).slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-[11px] px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full">
                            <Tag className="w-2.5 h-2.5" /> {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                        <time className="text-xs text-neutral-400">
                          {formatDate(article.date, lang)}
                        </time>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-[#2b3186] group-hover:text-[#76b82a] transition-colors">
                          {ui.readMore}
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </div>
  );
}
