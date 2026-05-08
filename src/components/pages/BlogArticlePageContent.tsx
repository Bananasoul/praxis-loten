"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, CalendarPlus, CheckCircle2, BookOpen, Info, ListOrdered } from "lucide-react";
import Image from "next/image";
import { InfographicSlot, type InfographicKind } from "@/components/blog/Infographics";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

interface ArticleContent {
  title: Record<LangKey, string>;
  category: Record<LangKey, string>;
  date: string;
  readMin: number;
  color: string;
  authorSlug: string;
  authorName: string;
  intro: Record<LangKey, string>;
  heroImage?: { src: string; alt: Record<LangKey, string> };
  sections: {
    heading: Record<LangKey, string>;
    body: Record<LangKey, string>;
    infographic?: InfographicKind;
    image?: { src: string; alt: Record<LangKey, string>; caption?: Record<LangKey, string> };
  }[];
  keyPoints: Record<LangKey, string[]>;
  ctaText: Record<LangKey, string>;
  bibliography?: string[];
  disclaimer?: Record<LangKey, string>;
}

const ARTICLES: Record<string, ArticleContent> = {
  "position-assise-mal-de-dos": {
    title: {
      de: "Schadet langes Sitzen wirklich Ihrem Rücken? Was die Wissenschaft 2026 sagt",
      fr: "La position assise abîme-t-elle vraiment votre dos ? Ce que dit la science en 2026",
      en: "Does sitting really damage your back? What the science says in 2026",
      nl: "Beschadigt zitten echt uw rug? Wat de wetenschap zegt in 2026",
      tr: "Oturmak gerçekten sırtınıza zarar verir mi? 2026 bilimi ne diyor",
      ar: "هل الجلوس يضر فعلاً بظهرك؟ ما يقوله العلم في 2026",
      pl: "Czy siedzenie naprawdę niszczy plecy? Co mówi nauka w 2026",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    date: "2026-05-03",
    readMin: 4,
    color: "from-[#0e7490] to-[#155e75]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "Sie haben es sicher schon gehört: „Sitzen ist das neue Rauchen.\" Wenn Sie stundenlang am Bildschirm arbeiten, jagt dieser Satz Angst ein. Und wenn sich Ihr Rücken langsam abnutzte, ohne dass Sie etwas täten? Gute Nachricht: Die Wissenschaft sagt etwas anderes.",
      fr: "Vous l'avez sûrement entendu : « rester assis, c'est le nouveau tabagisme. » Si vous travaillez des heures devant un écran, cette phrase fait peur. Et si votre dos s'usait lentement, sans que vous ne fassiez rien ? Bonne nouvelle : la science dit autre chose.",
      en: "You've probably heard it: \"sitting is the new smoking.\" If you work long hours at a screen, that phrase is scary. What if your back was slowly wearing down without you noticing? Good news: science says otherwise.",
      nl: "U hebt het vast gehoord: „zitten is het nieuwe roken.\" Als u uren achter een scherm werkt, is die zin angstaanjagend. En als uw rug langzaam zou slijten, zonder dat u iets doet? Goed nieuws: de wetenschap zegt iets anders.",
      tr: "Muhtemelen duymuşsunuzdur: „Oturmak yeni sigaradır.\" Saatlerce ekran başında çalışıyorsanız bu cümle korkutucudur. Ya sırtınız yavaşça aşınıyorsa, siz fark etmeden? İyi haber: bilim başka şey söylüyor.",
      ar: "ربما سمعتها: „الجلوس هو التدخين الجديد.\" إذا كنت تعمل ساعات أمام الشاشة، فهذه العبارة مخيفة. ماذا لو كان ظهرك يتآكل ببطء دون أن تلاحظ؟ خبر جيد: العلم يقول العكس.",
      pl: "Pewnie to słyszałeś: „Siedzenie to nowe palenie.\" Jeśli pracujesz godzinami przed ekranem, to zdanie przeraża. A gdyby Twoje plecy powoli się zużywały, a Ty byś nic nie robił? Dobra wiadomość: nauka mówi co innego.",
    },
    sections: [
      {
        heading: {
          de: "Der Mythos zum Vergessen",
          fr: "Le mythe à oublier",
          en: "The myth to forget",
          nl: "De mythe om te vergeten",
          tr: "Unutulması gereken mit",
          ar: "الأسطورة التي يجب نسيانها",
          pl: "Mit do zapomnienia",
        },
        body: {
          de: "Lange Zeit glaubte man, das Sitzen drücke die Bandscheiben zusammen und verursache direkt Rückenschmerzen. Diese Idee ist heute durch große aktuelle Studien stark relativiert. Das Urteil ist klar: Sitzen verursacht an sich keinen Rückenschmerz. Es kann ein vorübergehendes Unbehagen erzeugen, aber es zerstört nichts. Ihre Wirbelsäule ist robust. Ihre Bandscheiben sind intelligente Stoßdämpfer, gebaut, um die Lasten des Alltags zu absorbieren. Ein Bürotag schadet ihnen nicht.",
          fr: "Pendant longtemps, on a cru que la position assise écrasait les disques de la colonne et causait directement le mal de dos. Cette idée est aujourd'hui largement nuancée par les grandes études récentes. Le verdict est clair : la position assise, en elle-même, ne cause pas le mal de dos. Elle peut générer un inconfort temporaire, mais elle ne « casse » rien. Votre colonne est solide. Vos disques sont des amortisseurs intelligents, conçus pour encaisser les charges du quotidien. Une journée au bureau ne les abîme pas.",
          en: "For a long time, people believed sitting crushed the spinal discs and directly caused back pain. That idea is now heavily nuanced by large recent studies. The verdict is clear: sitting itself does not cause back pain. It can produce temporary discomfort, but it doesn't \"break\" anything. Your spine is strong. Your discs are intelligent shock absorbers, designed to handle daily loads. A day at the office doesn't damage them.",
          nl: "Lang dacht men dat zitten de tussenwervelschijven verpletterde en rechtstreeks rugpijn veroorzaakte. Dat idee wordt vandaag sterk genuanceerd door recente grote studies. Het oordeel is duidelijk: zitten op zich veroorzaakt geen rugpijn. Het kan tijdelijk ongemak geven, maar breekt niets. Uw wervelkolom is sterk. Uw discussen zijn intelligente schokdempers.",
          tr: "Uzun süre, oturmanın omurga disklerini ezdiği ve doğrudan sırt ağrısına neden olduğu sanıldı. Bu fikir bugün son büyük çalışmalarla büyük ölçüde nüanslanmıştır. Karar açık: oturmak başlı başına sırt ağrısına neden olmaz. Geçici rahatsızlık yaratabilir, ama hiçbir şeyi „kırmaz\". Omurganız sağlamdır. Diskleriniz akıllı amortisörlerdir.",
          ar: "لفترة طويلة، كان يُعتقد أن الجلوس يضغط على أقراص العمود الفقري ويسبب آلام الظهر مباشرة. هذه الفكرة تم تخفيفها كثيرًا بدراسات حديثة كبيرة. الحكم واضح: الجلوس بحد ذاته لا يسبب ألم الظهر. قد يسبب انزعاجًا مؤقتًا، لكنه لا „يكسر\" شيئًا. عمودك الفقري قوي. أقراصك ممتصات صدمات ذكية.",
          pl: "Przez długi czas wierzono, że siedzenie zgniata krążki kręgosłupa i bezpośrednio powoduje ból pleców. Ten pogląd jest dziś mocno niuansowany przez duże, niedawne badania. Werdykt jest jasny: siedzenie samo w sobie nie powoduje bólu pleców. Może wywołać chwilowy dyskomfort, ale niczego nie „łamie\". Twój kręgosłup jest mocny. Twoje krążki to inteligentne amortyzatory.",
        },
        infographic: "spine",
      },
      {
        heading: {
          de: "Was wirklich zählt: Bewegen",
          fr: "Ce qui compte vraiment : bouger",
          en: "What really matters: moving",
          nl: "Wat echt telt: bewegen",
          tr: "Asıl önemli olan: hareket etmek",
          ar: "ما يهم حقًا: الحركة",
          pl: "Co naprawdę się liczy: ruch",
        },
        body: {
          de: "Das eigentliche Problem ist nicht der Stuhl, sondern die anhaltende Unbeweglichkeit. Der menschliche Körper liebt Bewegung. Er braucht sie, um das Blut zirkulieren zu lassen, die Gelenke zu mobilisieren, die Muskeln wach zu halten. Wenn man stundenlang erstarrt bleibt — sitzend, stehend, egal — protestiert er. Die Wissenschaft ist sehr beruhigend: 30 bis 60 Minuten Bewegung pro Tag reichen weitgehend, um die Stunden im Büro auszugleichen. Schnelles Gehen, Rad, Treppen, Garten, Schwimmen — alles zählt. Kein Fitnessstudio nötig.",
          fr: "Le vrai problème n'est pas la chaise. C'est l'immobilité prolongée. Le corps humain adore le mouvement. Il en a besoin pour faire circuler le sang, mobiliser les articulations, garder les muscles éveillés. Quand on reste figé pendant des heures — assis, debout, peu importe — il proteste. La science est très rassurante sur ce point : 30 à 60 minutes de mouvement par jour suffisent largement à compenser les heures passées au bureau. Marche rapide, vélo, escaliers, jardinage, natation : tout compte. Pas besoin de salle de sport.",
          en: "The real problem isn't the chair. It's prolonged immobility. The human body loves movement. It needs it to circulate blood, mobilise joints, keep muscles awake. When we stay frozen for hours — sitting, standing, whatever — it protests. Science is very reassuring here: 30 to 60 minutes of movement a day is largely enough to offset hours spent at the desk. Brisk walking, cycling, stairs, gardening, swimming — it all counts. No gym required.",
          nl: "Het echte probleem is niet de stoel. Het is langdurige onbeweeglijkheid. Het lichaam houdt van beweging. Het heeft het nodig om bloed te laten circuleren, gewrichten te mobiliseren, spieren wakker te houden. Als we uren stilzitten of staan — protesteert het. De wetenschap is hier heel geruststellend: 30 tot 60 minuten beweging per dag volstaan ruimschoots om bureau-uren te compenseren.",
          tr: "Asıl sorun sandalye değil, uzun süreli hareketsizliktir. İnsan vücudu hareketi sever. Kanın dolaşması, eklemlerin hareket etmesi, kasların uyanık kalması için ona ihtiyacı vardır. Saatlerce donmuş kaldığımızda — oturarak, ayakta, fark etmez — protesto eder. Bilim çok güven verici: günde 30-60 dakika hareket masada geçirilen saatleri telafi etmeye fazlasıyla yeter.",
          ar: "المشكلة الحقيقية ليست الكرسي، بل الجمود المطوّل. الجسم البشري يحب الحركة. يحتاجها لتدوير الدم وتحريك المفاصل وإبقاء العضلات يقظة. عندما نبقى متجمدين لساعات — يحتج. العلم مطمئن جدًا: 30 إلى 60 دقيقة حركة يوميًا تكفي على نطاق واسع لتعويض ساعات المكتب.",
          pl: "Prawdziwym problemem nie jest krzesło, lecz długotrwały bezruch. Ludzkie ciało kocha ruch. Potrzebuje go, by krążyła krew, by stawy się ruszały, mięśnie były aktywne. Gdy stoimy lub siedzimy bez ruchu godzinami — protestuje. Nauka uspokaja: 30 do 60 minut ruchu dziennie wystarczy z naddatkiem, by zrekompensować godziny przy biurku.",
        },
        infographic: "movement",
      },
      {
        heading: {
          de: "Die goldene Regel: Wechseln Sie oft die Position",
          fr: "La règle d'or : changez de position souvent",
          en: "The golden rule: change position often",
          nl: "De gouden regel: verander vaak van positie",
          tr: "Altın kural: sık sık pozisyon değiştirin",
          ar: "القاعدة الذهبية: غيّر وضعيتك كثيرًا",
          pl: "Złota zasada: często zmieniaj pozycję",
        },
        body: {
          de: "In der modernen Physiotherapie lieben wir diesen Satz: „Die beste Haltung ist die nächste.\" Anders gesagt: Es gibt keine „perfekte\" Haltung, die man stundenlang halten müsste. Ihr Rücken braucht Vielfalt, nicht Steifheit. Lümmelnd, gerade, Beine übergeschlagen, stehend — wechseln Sie ohne Schuldgefühle. Sich alle 20-30 Minuten zu bewegen ist viel nützlicher, als die „ideale\" Haltung zu suchen.",
          fr: "En kinésithérapie moderne, on aime cette phrase : « La meilleure posture, c'est la prochaine. » Autrement dit : il n'existe pas de position « parfaite » à maintenir pendant des heures. Votre dos a besoin de variété, pas de raideur. Avachi, droit, jambes croisées, debout — alternez sans culpabilité. Bouger toutes les 20 à 30 minutes est bien plus utile que de chercher la posture « idéale ».",
          en: "In modern physiotherapy we love this saying: \"Your best posture is your next one.\" In other words, there is no \"perfect\" position to hold for hours. Your back needs variety, not rigidity. Slouched, upright, legs crossed, standing — alternate without guilt. Moving every 20-30 minutes is much more useful than searching for the \"ideal\" posture.",
          nl: "In de moderne fysiotherapie houden we van deze zin: „De beste houding is de volgende.\" Met andere woorden: er bestaat geen „perfecte\" houding die u uren moet aanhouden. Uw rug heeft variatie nodig, geen stijfheid. Onderuitgezakt, rechtop, gekruist, staand — wissel zonder schuldgevoel.",
          tr: "Modern fizyoterapide bu cümleyi seviyoruz: „En iyi duruşunuz bir sonrakidir.\" Başka deyişle: saatlerce sürdürülecek „mükemmel\" bir pozisyon yoktur. Sırtınızın çeşitliliğe ihtiyacı vardır, katılığa değil. Çökmüş, dik, bacak bacak üstüne, ayakta — suçluluk duymadan değiştirin.",
          ar: "في العلاج الطبيعي الحديث، نحب هذه العبارة: „أفضل وضعية هي التالية.\" بكلمات أخرى: لا توجد وضعية „مثالية\" يجب الحفاظ عليها لساعات. ظهرك يحتاج إلى التنوع، لا إلى الصلابة. منحنيًا، مستقيمًا، أرجل متقاطعة، واقفًا — تناوب دون شعور بالذنب.",
          pl: "W nowoczesnej fizjoterapii uwielbiamy to zdanie: „Najlepsza postawa to ta następna.\" Innymi słowy: nie istnieje „idealna\" pozycja, którą należy utrzymywać godzinami. Twoje plecy potrzebują różnorodności, nie sztywności. Rozwalony, wyprostowany, nogi skrzyżowane, na stojąco — zmieniaj bez wyrzutów sumienia.",
        },
      },
      {
        heading: {
          de: "3 einfache Reflexe für Ihren Alltag",
          fr: "3 réflexes simples pour votre quotidien",
          en: "3 simple reflexes for your daily life",
          nl: "3 eenvoudige reflexen voor uw dagelijks leven",
          tr: "Günlük yaşam için 3 basit refleks",
          ar: "3 ردود فعل بسيطة لحياتك اليومية",
          pl: "3 proste odruchy na co dzień",
        },
        body: {
          de: "1. Stehen Sie alle 30 Minuten auf. Eine Minute stehen, ein paar Schritte, ein freies Strecken. 2. Bewegen Sie sich 30 Minuten am Tag. Die Aktivität, die Ihnen gefällt, ist die beste — Regelmäßigkeit zählt mehr als Intensität. 3. Vertrauen Sie Ihrem Rücken. Er ist robuster, als man Ihnen erzählt hat.",
          fr: "1. Levez-vous toutes les 30 minutes. Une minute debout, quelques pas, un étirement libre. 2. Bougez 30 minutes par jour. L'activité qui vous plaît, c'est la meilleure. La régularité compte plus que l'intensité. 3. Faites confiance à votre dos. Il est plus solide que ce qu'on vous a fait croire.",
          en: "1. Stand up every 30 minutes. One minute standing, a few steps, a free stretch. 2. Move 30 minutes a day. The activity you enjoy is the best one. Consistency matters more than intensity. 3. Trust your back. It is stronger than you've been told.",
          nl: "1. Sta elke 30 minuten op. Een minuut staan, paar stappen, vrij rekken. 2. Beweeg 30 minuten per dag. Wat u leuk vindt is het beste. Regelmaat telt meer dan intensiteit. 3. Vertrouw uw rug. Hij is sterker dan u is wijsgemaakt.",
          tr: "1. Her 30 dakikada ayağa kalkın. Bir dakika ayakta, birkaç adım, serbest esneme. 2. Günde 30 dakika hareket edin. Hoşunuza giden aktivite en iyisidir. 3. Sırtınıza güvenin. Size söylenenden çok daha sağlam.",
          ar: "1. انهض كل 30 دقيقة. دقيقة وقوف، بضع خطوات، تمدد حر. 2. تحرك 30 دقيقة يوميًا. النشاط الذي تحبه هو الأفضل. الانتظام أهم من الشدة. 3. ثق بظهرك. إنه أقوى مما قيل لك.",
          pl: "1. Wstawaj co 30 minut. Minuta stania, kilka kroków, swobodne rozciągnięcie. 2. Ruszaj się 30 minut dziennie. Aktywność, którą lubisz, jest najlepsza. 3. Zaufaj swoim plecom. Są mocniejsze niż Ci powiedziano.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "Wann sollten Sie konsultieren?",
          fr: "Quand consulter ?",
          en: "When should you consult?",
          nl: "Wanneer een afspraak maken?",
          tr: "Ne zaman başvurmalısınız?",
          ar: "متى تستشير؟",
          pl: "Kiedy się skonsultować?",
        },
        body: {
          de: "Wenn ein Schmerz mehrere Wochen anhält, Sie in Ihren täglichen Aktivitäten stört oder von Kribbeln, Schwäche oder anderen ungewöhnlichen Zeichen begleitet wird — warten Sie nicht. Eine Bewertung durch eine ausgebildete Fachperson erlaubt, das auszuschließen, was Aufmerksamkeit verdient, und Sie schnell wieder in Bewegung zu bringen.",
          fr: "Si une douleur dure plusieurs semaines, vous gêne dans vos activités quotidiennes, ou s'accompagne de fourmillements, faiblesses ou autres signes inhabituels — n'attendez pas. Une évaluation par un professionnel formé permet d'écarter ce qui mérite attention et de vous remettre en mouvement rapidement.",
          en: "If pain lasts several weeks, hampers your daily activities, or comes with tingling, weakness or other unusual signs — don't wait. An assessment by a trained professional helps rule out what deserves attention and get you moving again quickly.",
          nl: "Als pijn weken aanhoudt, uw dagelijkse activiteiten hindert of gepaard gaat met tintelingen, zwakte of andere ongewone tekenen — wacht niet. Een evaluatie door een opgeleide professional helpt uit te sluiten wat aandacht verdient en u snel weer in beweging te brengen.",
          tr: "Bir ağrı haftalarca sürerse, günlük aktivitelerinizi engelliyorsa veya karıncalanma, halsizlik ya da diğer olağandışı belirtilerle birlikte geliyorsa — beklemeyin. Eğitimli bir uzmanın değerlendirmesi, dikkat gerektireni saf dışı bırakıp sizi hızla harekete geçirmeyi sağlar.",
          ar: "إذا استمر الألم عدة أسابيع، أو أعاق أنشطتك اليومية، أو رافقه تنميل أو ضعف أو علامات غير عادية — لا تنتظر. تقييم من قبل أخصائي مدرب يسمح باستبعاد ما يستحق الانتباه وإعادتك إلى الحركة بسرعة.",
          pl: "Jeśli ból trwa kilka tygodni, utrudnia codzienne czynności lub towarzyszą mu mrowienie, osłabienie lub inne nietypowe objawy — nie czekaj. Ocena przez wyszkolonego specjalistę pozwala wykluczyć to, co wymaga uwagi, i szybko przywrócić Ci ruch.",
        },
      },
      {
        heading: {
          de: "In der Praxis Loten in Eupen",
          fr: "Au cabinet Praxis Loten, à Eupen",
          en: "At Praxis Loten, in Eupen",
          nl: "Bij Praxis Loten, in Eupen",
          tr: "Eupen'deki Praxis Loten kliniğinde",
          ar: "في عيادة Praxis Loten بأوبن",
          pl: "W gabinecie Praxis Loten w Eupen",
        },
        body: {
          de: "Unser Team — Physiotherapeuten, Manualtherapeuten und Osteopathen — begleitet jeden Tag Patienten, die glauben, ihr Rücken sei „zerbrechlich\" oder „abgenutzt\". Unser Ansatz hält in vier Wörtern: Zuhören (Ihren Schmerz im Gesamtkontext: Schlaf, Stress, Lebensstil), Erleichtern (durch angepasste Manuelle Therapie), Stärken (durch progressive personalisierte Übungen), Erklären (wie Ihr Rücken wirklich funktioniert). Unser Ziel: dass Sie kräftiger und gelassener gehen — nicht besorgter.",
          fr: "Notre équipe — kinésithérapeutes, thérapeutes manuels et ostéopathes — accompagne chaque jour des patients qui pensent que leur dos est « fragile » ou « usé ». Notre approche tient en quatre mots : Écouter votre douleur dans son contexte global (sommeil, stress, mode de vie). Soulager par la thérapie manuelle adaptée. Renforcer par des exercices progressifs et personnalisés. Expliquer comment fonctionne réellement votre dos. Notre objectif : que vous repartiez plus solide et plus serein — pas plus inquiet.",
          en: "Our team — physiotherapists, manual therapists and osteopaths — supports patients every day who believe their back is \"fragile\" or \"worn out.\" Our approach holds in four words: Listen to your pain in its global context (sleep, stress, lifestyle). Relieve through adapted manual therapy. Strengthen through progressive personalised exercises. Explain how your back actually works. Our aim: that you leave stronger and calmer — not more worried.",
          nl: "Ons team — fysiotherapeuten, manuele therapeuten en osteopaten — begeleidt dagelijks patiënten die denken dat hun rug „kwetsbaar\" of „versleten\" is. Onze aanpak vat samen in vier woorden: Luisteren naar uw pijn in globale context. Verlichten door aangepaste manuele therapie. Versterken door progressieve oefeningen. Uitleggen hoe uw rug werkelijk werkt.",
          tr: "Ekibimiz — fizyoterapistler, manuel terapistler ve osteopatlar — sırtının „kırılgan\" veya „eski\" olduğunu düşünen hastalara her gün eşlik eder. Yaklaşımımız dört kelimede özetlenir: Dinlemek (yaşam bağlamında ağrı), Rahatlatmak (uyarlanmış manuel terapi), Güçlendirmek (kademeli kişisel egzersizler), Açıklamak (sırtın gerçekte nasıl çalıştığı).",
          ar: "فريقنا — أخصائيو علاج طبيعي، معالجون يدويون وأخصائيو هشاشة العظام — يرافق يوميًا مرضى يعتقدون أن ظهرهم „هش\" أو „متآكل\". نهجنا يلخص في أربع كلمات: الإصغاء إلى ألمك في سياقه الشامل، التخفيف بالعلاج اليدوي المكيف، التقوية بتمارين تدريجية، الشرح كيف يعمل ظهرك حقًا.",
          pl: "Nasz zespół — fizjoterapeuci, terapeuci manualni i osteopaci — codziennie wspiera pacjentów, którzy uważają swoje plecy za „kruche\" lub „zużyte\". Nasze podejście to cztery słowa: Słuchać (Twojego bólu w globalnym kontekście), Ulżyć (dostosowaną terapią manualną), Wzmocnić (progresywnymi ćwiczeniami), Wyjaśnić (jak naprawdę działają plecy).",
        },
      },
    ],
    keyPoints: {
      de: ["Sitzen verursacht keinen Rückenschmerz", "Das Problem ist Unbeweglichkeit, nicht der Stuhl", "30-60 Min Bewegung/Tag gleichen das Sitzen aus", "Beste Haltung = die nächste (Vielfalt > Steifheit)", "Bei Praxis Loten: Manuelle Therapie + Edukation"],
      fr: ["La position assise ne cause pas le mal de dos", "Le problème, c'est l'immobilité, pas la chaise", "30-60 min de mouvement/jour compensent l'assise", "Meilleure posture = la prochaine (variété > rigidité)", "Chez Praxis Loten : thérapie manuelle + éducation"],
      en: ["Sitting does not cause back pain", "The problem is immobility, not the chair", "30-60 min of movement/day offsets sitting", "Best posture = the next one (variety > rigidity)", "At Praxis Loten: manual therapy + education"],
      nl: ["Zitten veroorzaakt geen rugpijn", "Het probleem is onbeweeglijkheid, niet de stoel", "30-60 min beweging/dag compenseert zitten", "Beste houding = de volgende (variatie > stijfheid)", "Bij Praxis Loten: manuele therapie + educatie"],
      tr: ["Oturmak sırt ağrısına neden olmaz", "Sorun hareketsizliktir, sandalye değil", "Günde 30-60 dk hareket oturmayı dengeler", "En iyi duruş = bir sonraki (çeşitlilik > katılık)", "Praxis Loten'de: manuel terapi + eğitim"],
      ar: ["الجلوس لا يسبب ألم الظهر", "المشكلة هي الجمود، لا الكرسي", "30-60 دقيقة حركة/يوم تعوض الجلوس", "أفضل وضعية = التالية (تنوع > جمود)", "في Praxis Loten: علاج يدوي + تثقيف"],
      pl: ["Siedzenie nie powoduje bólu pleców", "Problemem jest bezruch, nie krzesło", "30-60 min ruchu/dzień rekompensuje siedzenie", "Najlepsza postawa = następna (różnorodność > sztywność)", "W Praxis Loten: terapia manualna + edukacja"],
    },
    ctaText: {
      de: "Anhaltender Rückenschmerz? Lassen Sie sich in Eupen umfassend untersuchen.",
      fr: "Mal de dos qui s'installe ? Faites un bilan complet chez nous à Eupen.",
      en: "Back pain that lingers? Get a full assessment with us in Eupen.",
      nl: "Aanhoudende rugpijn? Maak een volledig bilan bij ons in Eupen.",
      tr: "Geçmeyen sırt ağrısı? Eupen'deki kliniğimizde tam değerlendirme yaptırın.",
      ar: "ألم ظهر مستمر؟ احصل على تقييم كامل لدينا في أوبن.",
      pl: "Uporczywy ból pleców? Umów się na pełną ocenę u nas w Eupen.",
    },
    bibliography: [
      "Ekelund U, et al. Does physical activity attenuate, or even eliminate, the detrimental association of sitting time with mortality? The Lancet. 2016;388:1302-1310.",
      "Swain CTV, et al. No consensus on causality of spine postures or physical exposure and low back pain: A systematic review of systematic reviews. Scand J Med Sci Sports. 2020.",
      "Foster NE, Anema JR, Cherkin D, et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. The Lancet. 2018;391:2368-2383.",
      "Wilke HJ, et al. New in vivo measurements of pressures in the intervertebral disc in daily life. Spine. 1999;24:755-762.",
      "GBD 2021 Low Back Pain Collaborators. Global burden of low back pain. Lancet Rheumatol. 2023.",
    ],
    disclaimer: {
      de: "Dieser Artikel hat informativen Charakter und ersetzt keine Konsultation. Bei anhaltenden Schmerzen vereinbaren Sie einen Termin bei einem unserer Praktiker.",
      fr: "Cet article a une vocation informative et ne remplace pas une consultation. En cas de douleur persistante, prenez rendez-vous avec l'un de nos praticiens.",
      en: "This article is for information only and does not replace a consultation. In case of persistent pain, book an appointment with one of our practitioners.",
      nl: "Dit artikel is informatief en vervangt geen consultatie. Bij aanhoudende pijn maakt u een afspraak met een van onze praktijkhouders.",
      tr: "Bu makale bilgilendirme amaçlıdır ve konsültasyonun yerini tutmaz. Kalıcı ağrı durumunda uzmanlarımızdan biriyle randevu alın.",
      ar: "هذه المقالة لأغراض إعلامية فقط ولا تحل محل الاستشارة. في حالة الألم المستمر، احجز موعدًا مع أحد ممارسينا.",
      pl: "Ten artykuł ma charakter informacyjny i nie zastępuje konsultacji. W przypadku uporczywego bólu umów się na wizytę u jednego z naszych specjalistów.",
    },
  },

  "douleurs-cervicales-mobilite-eupen": {
    title: {
      de: "Nackenschmerzen — warum Ihr Hals weh tut und wie Sie in Eupen wieder beweglich werden",
      fr: "Douleurs aux cervicales — pourquoi votre cou vous fait mal et comment retrouver de la mobilité à Eupen",
      en: "Neck pain — why your neck hurts and how to regain mobility in Eupen",
      nl: "Nekpijn — waarom uw nek pijn doet en hoe u in Eupen weer mobiel wordt",
      tr: "Boyun ağrısı — boynunuzun neden ağrıdığı ve Eupen'de hareketliliği nasıl geri kazanacağınız",
      ar: "آلام الرقبة — لماذا تؤلمك رقبتك وكيف تستعيد الحركة في أوبن",
      pl: "Ból szyi — dlaczego boli Cię szyja i jak odzyskać mobilność w Eupen",
    },
    category: {
      de: "Nackenschmerzen", fr: "Cervicales", en: "Neck pain",
      nl: "Nekpijn", tr: "Boyun Ağrısı", ar: "آلام الرقبة", pl: "Ból szyi",
    },
    date: "2026-05-03",
    readMin: 6,
    color: "from-[#0e7490] to-[#155e75]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "Kennen Sie diese hartnäckige Steifheit am Schädelansatz oder zwischen den Schulterblättern nach einem Arbeitstag? Während die erste Reaktion oft die Sorge um „Verschleiß\" oder eine „Blockade\" ist, bringt uns die moderne Wissenschaft eine weitaus beruhigendere Nachricht: Ihr Nacken ist solide, widerstandsfähig und anpassungsfähig.",
      fr: "Vous arrive-t-il de ressentir cette raideur persistante à la base du crâne ou entre les omoplates après une journée de travail ? Si la première réaction est souvent de s'inquiéter d'une « usure » ou d'un « blocage », la science moderne nous apporte une nouvelle bien plus rassurante : votre cou est solide, résistant et capable de s'adapter.",
      en: "Do you sometimes feel that persistent stiffness at the base of your skull or between your shoulder blades after a long day at work? While the first reaction is often to worry about \"wear and tear\" or a \"blockage,\" modern science brings far more reassuring news: your neck is strong, resilient and capable of adaptation.",
      nl: "Voelt u soms die hardnekkige stijfheid onderaan de schedel of tussen de schouderbladen na een werkdag? Terwijl de eerste reactie vaak bezorgdheid om „slijtage\" of een „blokkade\" is, brengt de moderne wetenschap ons een veel geruststellender bericht: uw nek is sterk, weerbaar en in staat zich aan te passen.",
      tr: "Bir iş gününün ardından kafatasınızın altında veya kürek kemikleriniz arasında bu kalıcı sertliği hissediyor musunuz? İlk tepki genellikle „aşınma\" veya „blokaj\" endişesi olsa da, modern bilim çok daha güven verici bir haber getiriyor: boynunuz sağlam, dayanıklı ve uyum sağlayabilen bir yapıdadır.",
      ar: "هل تشعر أحيانًا بهذا التيبس المستمر عند قاعدة الجمجمة أو بين لوحي الكتف بعد يوم عمل؟ في حين أن رد الفعل الأول غالبًا ما يكون القلق من „تآكل\" أو „انسداد\"، يقدم لنا العلم الحديث خبرًا أكثر طمأنة: رقبتك قوية ومرنة وقادرة على التكيف.",
      pl: "Czy zdarza Ci się odczuwać tę uporczywą sztywność u podstawy czaszki lub między łopatkami po dniu pracy? Choć pierwszą reakcją jest często obawa o „zużycie\" lub „blokadę\", współczesna nauka przynosi nam znacznie bardziej uspokajającą wiadomość: Twoja szyja jest mocna, odporna i zdolna do adaptacji.",
    },
    sections: [
      {
        heading: {
          de: "Der Schmerz: Ein Alarm, nicht zwingend eine Verletzung",
          fr: "La douleur cervicale : une alarme, pas forcément une lésion",
          en: "Neck pain: an alarm, not necessarily an injury",
          nl: "Nekpijn: een alarm, niet noodzakelijk een letsel",
          tr: "Ağrı: bir alarm, mutlaka bir yaralanma değil",
          ar: "الألم: إنذار، وليس بالضرورة إصابة",
          pl: "Ból: alarm, niekoniecznie uszkodzenie",
        },
        body: {
          de: "Stellen Sie sich Schmerz wie ein hochempfindliches Alarmsystem vor. Manchmal löst der Alarm aus, weil tatsächlich Rauch aufsteigt — oft jedoch klingelt er einfach, weil er zu empfindlich geworden ist. Nackenschmerzen bedeuten nicht, dass Ihre Wirbel „beschädigt\" sind. Es ist meist ein Signal Ihres Gehirns, dass die Gewebe in dieser Zone an ihrer aktuellen Toleranzgrenze angekommen sind — häufig durch fehlende Bewegungsvielfalt.",
          fr: "Imaginez la douleur comme un système d'alarme ultra-sensible. Parfois, l'alarme se déclenche parce que la fumée monte, mais souvent, elle sonne simplement parce qu'elle est devenue trop sensible. Une douleur au cou ne signifie pas que vos vertèbres sont « abîmées ». C'est souvent un signal envoyé par votre cerveau pour vous dire que les tissus de cette zone ont atteint leur limite de tolérance actuelle, souvent par manque de variété de mouvement.",
          en: "Think of pain as a highly sensitive alarm system. Sometimes the alarm is triggered because smoke really is rising — but often it rings simply because it has become too sensitive. Neck pain does not mean your vertebrae are \"damaged.\" It is usually a signal from your brain that the tissues in this area have reached their current tolerance limit, often through lack of movement variety.",
          nl: "Stel u pijn voor als een uiterst gevoelig alarmsysteem. Soms gaat het alarm af omdat er echt rook opstijgt — maar vaak klinkt het simpelweg omdat het te gevoelig is geworden. Nekpijn betekent niet dat uw wervels „beschadigd\" zijn. Het is meestal een signaal van uw brein dat de weefsels hun huidige tolerantielimiet hebben bereikt, vaak door gebrek aan bewegingsvariatie.",
          tr: "Ağrıyı son derece hassas bir alarm sistemi olarak düşünün. Bazen alarm gerçekten duman çıktığı için çalar — ama çoğu zaman aşırı hassaslaştığı için çalar. Boyun ağrısı omurlarınızın „hasar gördüğü\" anlamına gelmez. Genellikle beyninizin, bu bölgedeki dokuların mevcut tolerans sınırlarına ulaştığını söyleyen bir sinyaldir — sıklıkla hareket çeşitliliği eksikliğinden.",
          ar: "تخيل الألم كنظام إنذار حساس للغاية. أحيانًا ينطلق الإنذار لأن الدخان يتصاعد فعلًا، لكنه غالبًا ما يرن لأنه أصبح حساسًا للغاية. ألم الرقبة لا يعني أن فقراتك „تالفة\". إنه عادةً إشارة من دماغك بأن أنسجة هذه المنطقة وصلت إلى حد تحملها الحالي، غالبًا بسبب نقص تنوع الحركة.",
          pl: "Wyobraź sobie ból jako bardzo czuły system alarmowy. Czasem alarm uruchamia się, bo rzeczywiście unosi się dym — ale często dzwoni po prostu dlatego, że stał się zbyt czuły. Ból szyi nie oznacza, że Twoje kręgi są „uszkodzone\". To zazwyczaj sygnał z mózgu, że tkanki w tym obszarze osiągnęły aktualny limit tolerancji, często z powodu braku różnorodności ruchu.",
        },
        infographic: "pain-alarm",
      },
      {
        heading: {
          de: "Der Mythos der perfekten Haltung",
          fr: "Le mythe de la posture parfaite",
          en: "The myth of perfect posture",
          nl: "De mythe van de perfecte houding",
          tr: "Mükemmel duruş miti",
          ar: "أسطورة الوضعية المثالية",
          pl: "Mit idealnej postawy",
        },
        body: {
          de: "Man hat uns oft gesagt, „gerade zu sitzen\". Doch die Forschung in der Manuellen Therapie ist eindeutig: Es gibt keine einzige Haltung, die Schmerzen verhindern würde. Der wahre Übeltäter ist die Unbeweglichkeit. Wie das Sprichwort sagt: „Ihre beste Haltung ist die nächste.\" Regelmäßig die Position zu wechseln ist weitaus vorteilhafter, als sich den ganzen Tag lang künstlich steif zu halten.",
          fr: "On nous a souvent répété de « se tenir droit ». Pourtant, la recherche en thérapie manuelle est claire : il n'existe pas de posture unique qui préviendrait la douleur. Le véritable coupable, c'est l'immobilité. Comme le dit l'adage : « Votre meilleure posture, c'est la prochaine ». Changer de position régulièrement est bien plus bénéfique que d'essayer de maintenir une rigidité artificielle toute la journée.",
          en: "We've often been told to \"sit up straight.\" Yet research in manual therapy is clear: there is no single posture that prevents pain. The real culprit is immobility. As the saying goes: \"Your best posture is your next one.\" Changing position regularly is far more beneficial than trying to maintain artificial rigidity all day long.",
          nl: "Ons is vaak gezegd „rechtop te zitten\". Toch is het onderzoek in de manuele therapie duidelijk: er bestaat geen enkele houding die pijn zou voorkomen. De echte boosdoener is onbeweeglijkheid. Zoals het gezegde luidt: „Uw beste houding is de volgende.\" Regelmatig van positie veranderen is veel gunstiger dan de hele dag kunstmatige stijfheid proberen aan te houden.",
          tr: "Bize sık sık „dik oturun\" denildi. Ancak manuel terapi araştırması açık: ağrıyı önleyecek tek bir duruş yoktur. Gerçek suçlu hareketsizliktir. Atasözünün dediği gibi: „En iyi duruşunuz bir sonrakidir.\" Düzenli olarak pozisyon değiştirmek, gün boyu yapay bir katılığı sürdürmeye çalışmaktan çok daha faydalıdır.",
          ar: "كثيرًا ما قيل لنا أن „نجلس باستقامة\". ومع ذلك، فإن البحث في العلاج اليدوي واضح: لا توجد وضعية واحدة تمنع الألم. الجاني الحقيقي هو الجمود. كما يقول المثل: „أفضل وضعية لديك هي التالية\". تغيير الوضعية بانتظام أكثر فائدة بكثير من محاولة الحفاظ على صلابة مصطنعة طوال اليوم.",
          pl: "Często powtarzano nam, by „siedzieć prosto\". Jednak badania w terapii manualnej są jasne: nie istnieje jedna postawa, która zapobiegałaby bólowi. Prawdziwym winowajcą jest bezruch. Jak mówi przysłowie: „Najlepsza postawa to ta następna\". Regularna zmiana pozycji jest znacznie korzystniejsza niż próba utrzymania sztucznej sztywności przez cały dzień.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "Die Bildgebung: innere „Falten\"",
          fr: "L'imagerie médicale : des « rides » intérieures",
          en: "Medical imaging: inner \"wrinkles\"",
          nl: "Medische beeldvorming: innerlijke „rimpels\"",
          tr: "Tıbbi görüntüleme: içeriden „kırışıklıklar\"",
          ar: "التصوير الطبي: „تجاعيد\" داخلية",
          pl: "Obrazowanie medyczne: wewnętrzne „zmarszczki\"",
        },
        body: {
          de: "Wenn Ihr Röntgenbild Arthrose oder eine leichte Bandscheibenvorwölbung erwähnt, kein Grund zur Panik! Bei einer überwältigenden Mehrheit von Menschen ohne jegliche Schmerzen finden sich genau dieselben Zeichen. Es sind keine Krankheiten, sondern normale Reifungsprozesse des Körpers, ähnlich wie Falten auf der Haut oder graue Haare. Sie sind kein Hindernis für ein aktives, schmerzfreies Leben.",
          fr: "Si votre radio mentionne de l'arthrose ou une légère saillie discale, pas de panique ! Chez une immense majorité de personnes sans aucune douleur, on retrouve ces mêmes signes. Ce ne sont pas des maladies, mais des processus normaux de maturation du corps, semblables aux rides sur la peau ou aux cheveux blancs. Ils ne sont pas une barrière à une vie active et sans douleur.",
          en: "If your X-ray mentions arthritis or a slight disc bulge, don't panic! In an overwhelming majority of people with no pain at all, we find these very same signs. They are not diseases, but normal maturation processes of the body, similar to wrinkles on the skin or grey hair. They are no barrier to an active, pain-free life.",
          nl: "Als uw röntgenfoto artrose of een lichte discusbulging vermeldt, geen paniek! Bij een overgrote meerderheid van mensen zonder pijn vinden we precies dezelfde tekenen. Het zijn geen ziektes, maar normale rijpingsprocessen van het lichaam, vergelijkbaar met rimpels op de huid of grijs haar. Ze zijn geen belemmering voor een actief, pijnvrij leven.",
          tr: "Röntgeniniz artrit veya hafif bir disk çıkıntısından bahsediyorsa, paniğe gerek yok! Hiçbir ağrısı olmayan insanların büyük çoğunluğunda da aynı işaretler bulunur. Bunlar hastalık değil, vücudun normal olgunlaşma süreçleridir — cilt kırışıkları veya gri saçlar gibi. Aktif ve ağrısız bir hayata engel değildirler.",
          ar: "إذا ذكرت أشعتك السينية وجود التهاب مفاصل أو انتفاخ خفيف في القرص، فلا داعي للذعر! نجد نفس هذه العلامات لدى الغالبية العظمى من الأشخاص الذين لا يعانون من أي ألم. هذه ليست أمراضًا، بل عمليات نضج طبيعية للجسم، مشابهة للتجاعيد على الجلد أو الشعر الرمادي. ليست حاجزًا أمام حياة نشطة وخالية من الألم.",
          pl: "Jeśli Twoje zdjęcie RTG wspomina o zwyrodnieniu lub niewielkiej wypuklinie dyskowej, bez paniki! U przytłaczającej większości osób bez żadnego bólu znajdujemy te same oznaki. To nie choroby, lecz normalne procesy dojrzewania ciała, podobne do zmarszczek na skórze czy siwych włosów. Nie są przeszkodą w aktywnym, bezbolesnym życiu.",
        },
        infographic: "imaging-myth",
      },
      {
        heading: {
          de: "Die Kontrolle zurückgewinnen: Bewegung als Medizin",
          fr: "Reprendre le contrôle : le mouvement comme médicament",
          en: "Taking back control: movement as medicine",
          nl: "De controle terugnemen: beweging als medicijn",
          tr: "Kontrolü geri almak: ilaç olarak hareket",
          ar: "استعادة السيطرة: الحركة كدواء",
          pl: "Odzyskać kontrolę: ruch jako lekarstwo",
        },
        body: {
          de: "Der menschliche Körper nutzt sich nur dann ab, wenn man ihn nicht benutzt. Um einen empfindlichen Nacken zu beruhigen, ist die Lösung nicht völlige Ruhe, sondern progressive und wohlwollende Bewegung. Indem Sie Ihrem Nervensystem durch angepasste Übungen Vertrauen zurückgeben, erhöhen Sie die Kapazität Ihres Körpers, mit den Belastungen des Alltags umzugehen.",
          fr: "Le corps humain ne s'use que si l'on ne s'en sert pas. Pour apaiser un cou sensible, la solution n'est pas le repos total, mais le mouvement progressif et bienveillant. En redonnant de la confiance à votre système nerveux par des exercices adaptés, vous augmentez la capacité de votre corps à supporter les contraintes du quotidien.",
          en: "The human body only wears out if you don't use it. To soothe a sensitive neck, the solution is not complete rest, but progressive and benevolent movement. By giving your nervous system back its confidence through adapted exercises, you increase your body's capacity to handle daily-life loads.",
          nl: "Het menselijk lichaam slijt alleen als u het niet gebruikt. Om een gevoelige nek te kalmeren is de oplossing niet volledige rust, maar progressieve en welwillende beweging. Door uw zenuwstelsel via aangepaste oefeningen vertrouwen terug te geven, vergroot u het vermogen van uw lichaam om de dagelijkse belasting aan te kunnen.",
          tr: "İnsan vücudu yalnızca kullanılmadığında aşınır. Hassas bir boynu yatıştırmak için çözüm tam dinlenme değil, kademeli ve nazik harekettir. Sinir sisteminize uyarlanmış egzersizlerle güveni geri kazandırarak, vücudunuzun günlük yaşam yüklerini kaldırma kapasitesini artırırsınız.",
          ar: "الجسم البشري يبلى فقط إذا لم تستخدمه. لتهدئة رقبة حساسة، الحل ليس الراحة الكاملة، بل الحركة التدريجية والرحيمة. من خلال إعادة الثقة إلى جهازك العصبي عبر تمارين مكيّفة، تزيد من قدرة جسمك على تحمّل ضغوط الحياة اليومية.",
          pl: "Ciało ludzkie zużywa się tylko wtedy, gdy się go nie używa. Aby uspokoić wrażliwą szyję, rozwiązaniem nie jest całkowity odpoczynek, ale stopniowy i łagodny ruch. Przywracając pewność swojemu układowi nerwowemu poprzez dostosowane ćwiczenia, zwiększasz zdolność ciała do radzenia sobie z codziennymi obciążeniami.",
        },
        infographic: "spine",
      },
      {
        heading: {
          de: "Was wir in der Praxis Loten tun",
          fr: "Ce que nous faisons au cabinet Praxis Loten",
          en: "What we do at Praxis Loten",
          nl: "Wat we doen bij Praxis Loten",
          tr: "Praxis Loten'de neler yapıyoruz",
          ar: "ما نقوم به في عيادة Praxis Loten",
          pl: "Co robimy w gabinecie Praxis Loten",
        },
        body: {
          de: "In unserer Praxis in Eupen begleiten wir Sie dabei, Ihre Sorge in Handlung zu verwandeln. Ob mit dem Inhaber, unseren Partnern oder Mitarbeitern — unser Ansatz beruht auf vier Säulen: aktivem Zuhören, um Ihren Lebenskontext und Ihre Ziele zu verstehen; Orthopädischer Manueller Therapie mit sanften Techniken zur Schmerzmodulation; Edukation in Schmerz-Neurowissenschaft, damit Sie genau verstehen, was in Ihrem Körper passiert; und personalisierter Bewegung mit einfachen, wirksamen Übungen für Ihre Routine.",
          fr: "Au sein de notre cabinet à Eupen, nous vous accompagnons pour transformer cette appréhension en action. Que ce soit avec le gérant, nos associés ou nos collaborateurs, notre approche repose sur quatre piliers : une écoute active pour comprendre votre contexte de vie et vos objectifs ; la thérapie manuelle orthopédique avec des techniques douces pour moduler la douleur ; l'éducation aux neurosciences de la douleur, pour que vous compreniez précisément ce qui se passe dans votre corps ; et le mouvement personnalisé, avec des exercices simples et efficaces à intégrer dans votre routine pour devenir autonome.",
          en: "At our practice in Eupen, we help you turn that apprehension into action. Whether with the manager, our partners or our collaborators, our approach rests on four pillars: active listening to understand your life context and goals; Orthopaedic Manual Therapy with gentle techniques to modulate pain; pain neuroscience education so you understand exactly what is happening in your body; and personalised movement, with simple and effective exercises to fold into your routine and become autonomous.",
          nl: "In onze praktijk in Eupen begeleiden we u om die ongerustheid om te zetten in actie. Of het nu met de zaakvoerder, onze partners of medewerkers is — onze aanpak rust op vier pijlers: actief luisteren om uw levenscontext en doelen te begrijpen; orthopedische manuele therapie met zachte technieken om pijn te moduleren; pijnneurowetenschap-educatie zodat u precies begrijpt wat er in uw lichaam gebeurt; en gepersonaliseerde beweging met eenvoudige, effectieve oefeningen voor uw routine.",
          tr: "Eupen'deki kliniğimizde, bu endişeyi eyleme dönüştürmenize yardımcı oluyoruz. Yöneticimizle, ortaklarımızla veya çalışanlarımızla olsun, yaklaşımımız dört temele dayanır: yaşam bağlamınızı ve hedeflerinizi anlamak için aktif dinleme; ağrıyı modüle etmek için nazik tekniklerle Ortopedik Manuel Terapi; vücudunuzda neler olduğunu tam olarak anlamanız için ağrı nörobilim eğitimi; ve rutininize entegre edebileceğiniz basit ve etkili egzersizlerle kişiselleştirilmiş hareket.",
          ar: "في عيادتنا في أوبن، نرافقك لتحويل هذا القلق إلى عمل. سواء مع المدير أو شركائنا أو متعاوننا، يرتكز نهجنا على أربعة أركان: الإصغاء النشط لفهم سياق حياتك وأهدافك؛ العلاج اليدوي العظمي بتقنيات لطيفة لتعديل الألم؛ تثقيف علم الأعصاب للألم لتفهم بدقة ما يحدث في جسمك؛ والحركة المخصصة بتمارين بسيطة وفعّالة لدمجها في روتينك واستعادة استقلاليتك.",
          pl: "W naszym gabinecie w Eupen pomagamy przekształcić tę obawę w działanie. Czy to z kierownikiem, naszymi partnerami czy współpracownikami, nasze podejście opiera się na czterech filarach: aktywnym słuchaniu, aby zrozumieć Twój kontekst życiowy i cele; ortopedycznej terapii manualnej z łagodnymi technikami modulującymi ból; edukacji w neuronaukach bólu, abyś dokładnie rozumiał, co dzieje się w Twoim ciele; i spersonalizowanym ruchu z prostymi, skutecznymi ćwiczeniami do Twojej rutyny.",
        },
        infographic: "manual-therapy-pillars",
      },
    ],
    keyPoints: {
      de: ["Schmerz = Alarm, nicht zwingend Schaden", "Beste Haltung = die nächste (Bewegung schlägt Statik)", "Bildgebungs-Befunde wie „Falten\" sind oft normal", "Schrittweise Bewegung beruhigt das Nervensystem", "Bei Praxis Loten: Manuelle Therapie + Schmerzedukation"],
      fr: ["Douleur = alarme, pas forcément lésion", "Meilleure posture = la prochaine (le mouvement bat la statique)", "Les signes radiologiques sont souvent comme des « rides »", "Le mouvement progressif apaise le système nerveux", "Chez Praxis Loten : thérapie manuelle + éducation à la douleur"],
      en: ["Pain = alarm, not necessarily damage", "Best posture = the next one (movement beats static)", "Imaging findings are often like 'wrinkles' — normal", "Progressive movement soothes the nervous system", "At Praxis Loten: manual therapy + pain education"],
      nl: ["Pijn = alarm, niet noodzakelijk schade", "Beste houding = de volgende (beweging verslaat statisch)", "Beeldvormingsbevindingen zijn vaak als „rimpels\" — normaal", "Progressieve beweging kalmeert het zenuwstelsel", "Bij Praxis Loten: manuele therapie + pijneducatie"],
      tr: ["Ağrı = alarm, mutlaka hasar değil", "En iyi duruş = bir sonraki (hareket statiği yener)", "Görüntüleme bulguları genellikle „kırışıklıklar\" gibi normal", "Kademeli hareket sinir sistemini sakinleştirir", "Praxis Loten'de: manuel terapi + ağrı eğitimi"],
      ar: ["الألم = إنذار، وليس بالضرورة ضررًا", "أفضل وضعية = التالية (الحركة تتفوق على السكون)", "نتائج التصوير غالبًا مثل „التجاعيد\" — طبيعية", "الحركة التدريجية تهدئ الجهاز العصبي", "في Praxis Loten: علاج يدوي + تثقيف الألم"],
      pl: ["Ból = alarm, niekoniecznie uszkodzenie", "Najlepsza postawa = następna (ruch pokonuje bezruch)", "Wyniki obrazowania często jak „zmarszczki\" — normalne", "Stopniowy ruch uspokaja układ nerwowy", "W Praxis Loten: terapia manualna + edukacja bólu"],
    },
    ctaText: {
      de: "Nackenschmerzen? Vereinbaren Sie eine Bestandsaufnahme bei uns in Eupen.",
      fr: "Douleurs aux cervicales ? Prenez rendez-vous pour un bilan personnalisé chez nous à Eupen.",
      en: "Neck pain? Book a personalised assessment with us in Eupen.",
      nl: "Nekpijn? Boek een persoonlijke evaluatie bij ons in Eupen.",
      tr: "Boyun ağrısı mı? Eupen'deki kliniğimizde kişisel bir değerlendirme için randevu alın.",
      ar: "آلام الرقبة؟ احجز تقييمًا شخصيًا لدينا في أوبن.",
      pl: "Ból szyi? Umów się na indywidualną ocenę u nas w Eupen.",
    },
    bibliography: [
      "Foster, N. E., et al. (2018). Prevention and treatment of low back pain: evidence, challenges, and promising directions. The Lancet.",
      "Brinjikji, W., et al. (2015). Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR.",
      "Cote, P., et al. (2016). Management of neck pain and associated disorders: A clinical practice guideline. JMPT.",
    ],
    disclaimer: {
      de: "Dieser Artikel hat informativen Charakter. Für eine genaue Bestandsaufnahme Ihrer Situation zögern Sie nicht, eine Fachperson aufzusuchen.",
      fr: "Cet article est informatif. Pour un bilan précis de votre situation, n'hésitez pas à consulter un professionnel de santé.",
      en: "This article is informative. For an accurate assessment of your situation, please consult a healthcare professional.",
      nl: "Dit artikel is informatief van aard. Voor een nauwkeurige beoordeling van uw situatie raadpleegt u een zorgprofessional.",
      tr: "Bu makale bilgilendirme amaçlıdır. Durumunuzun doğru değerlendirmesi için lütfen bir sağlık uzmanına başvurun.",
      ar: "هذه المقالة لأغراض إعلامية. للحصول على تقييم دقيق لحالتك، يرجى استشارة أخصائي رعاية صحية.",
      pl: "Ten artykuł ma charakter informacyjny. W celu dokładnej oceny swojej sytuacji skonsultuj się ze specjalistą.",
    },
  },

  "manuelle-therapie-rueckenschmerzen": {
    title: {
      de: "Rückenschmerzen — wann hilft Manuelle Therapie?",
      fr: "Douleurs dorsales — quand la thérapie manuelle aide-t-elle ?",
      en: "Back pain — when does manual therapy help?",
      nl: "Rugpijn — wanneer helpt manuele therapie?",
      tr: "Sırt ağrısı — manuel terapi ne zaman yardımcı olur?",
      ar: "آلام الظهر — متى تساعد العلاج اليدوي؟",
      pl: "Ból pleców — kiedy pomaga terapia manualna?",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    date: "2024-11-15",
    readMin: 5,
    color: "from-[#2b3186] to-[#1e2260]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "Rückenschmerzen betreffen fast jeden Menschen mindestens einmal im Leben. Die Ursachen sind vielfältig: Muskelverspannungen, Gelenksblockaden, Bandscheibenvorfälle oder postoperative Beschwerden. Die Manuelle Therapie bietet einen evidenzbasierten Ansatz, der auf den spezifischen Befund des Patienten abgestimmt wird.",
      fr: "Les douleurs dorsales touchent presque tout le monde au moins une fois dans sa vie. Les causes sont multiples : tensions musculaires, blocages articulaires, hernies discales ou douleurs post-opératoires. La thérapie manuelle offre une approche fondée sur les preuves, adaptée aux besoins spécifiques du patient.",
      en: "Back pain affects almost everyone at least once in their lifetime. The causes are varied: muscle tension, joint blockages, herniated discs or post-operative complaints. Manual therapy provides an evidence-based approach tailored to the specific findings of each patient.",
      nl: "Rugpijn treft bijna iedereen minstens één keer in hun leven. De oorzaken zijn divers: spierspanning, gewrichtsblokkades, hernia's of postoperatieve klachten. Manuele therapie biedt een evidence-based aanpak die is afgestemd op de specifieke bevindingen van de patiënt.",
      tr: "Sırt ağrısı neredeyse herkesi hayatının en az bir döneminde etkiler. Nedenler çeşitlidir: kas gerginliği, eklem blokajları, fıtıklar veya ameliyat sonrası şikayetler. Manuel terapi, hastanın spesifik bulgularına göre uyarlanan kanıta dayalı bir yaklaşım sunar.",
      ar: "يعاني تقريبًا الجميع من آلام الظهر مرة واحدة على الأقل في حياتهم. الأسباب متعددة: توترات عضلية، انسدادات مفصلية، انزلاقات غضروفية أو آلام ما بعد العملية. يوفر العلاج اليدوي نهجًا قائمًا على الأدلة مصممًا وفقًا لاحتياجات كل مريض.",
      pl: "Ból pleców dotyka prawie każdego przynajmniej raz w życiu. Przyczyny są różnorodne: napięcia mięśniowe, blokady stawów, przepukliny dyskowe lub dolegliwości pooperacyjne. Terapia manualna oferuje podejście oparte na dowodach, dostosowane do specyficznych wyników każdego pacjenta.",
    },
    sections: [
      {
        heading: {
          de: "Was ist Manuelle Therapie genau?",
          fr: "Qu'est-ce que la thérapie manuelle exactement ?",
          en: "What exactly is manual therapy?",
          nl: "Wat is manuele therapie precies?",
          tr: "Manuel terapi tam olarak nedir?",
          ar: "ما هو العلاج اليدوي بالضبط؟",
          pl: "Czym dokładnie jest terapia manualna?",
        },
        body: {
          de: "Manuelle Therapie (MT) ist eine klinische Spezialisierung der Physiotherapie, bei der die Hände des Therapeuten gezielt zur Diagnose und Behandlung von Schmerzen und Funktionsstörungen des Bewegungsapparats eingesetzt werden. An der Praxis Loten sind unsere Manualtherapeuten nach den Standards der IFOMPT (Internationale Vereinigung der orthopädischen Manualtherapeuten) ausgebildet — dem weltweit anerkannten Goldstandard.",
          fr: "La thérapie manuelle (TM) est une spécialisation clinique de la kinésithérapie dans laquelle les mains du thérapeute sont utilisées de manière ciblée pour diagnostiquer et traiter les douleurs et dysfonctions de l'appareil locomoteur. À Praxis Loten, nos thérapeutes manuels sont formés selon les normes de l'IFOMPT (Fédération internationale des thérapeutes manuels orthopédiques) — l'étalon-or reconnu mondialement.",
          en: "Manual therapy (MT) is a clinical specialisation of physiotherapy in which the therapist's hands are used purposefully to diagnose and treat pain and dysfunction of the musculoskeletal system. At Praxis Loten, our manual therapists are trained to the standards of the IFOMPT (International Federation of Orthopaedic Manipulative Physical Therapists) — the globally recognised gold standard.",
          nl: "Manuele therapie (MT) is een klinische specialisatie van fysiotherapie waarbij de handen van de therapeut gericht worden gebruikt om pijn en disfunctie van het bewegingsapparaat te diagnosticeren en behandelen. Bij Praxis Loten zijn onze manuele therapeuten opgeleid volgens de normen van de IFOMPT — de wereldwijd erkende gouden standaard.",
          tr: "Manuel terapi (MT), terapistin ellerinin kas-iskelet sistemi ağrısını ve disfonksiyonunu teşhis etmek ve tedavi etmek için amaca yönelik kullanıldığı, fizyoterapinin klinik bir uzmanlık alanıdır. Praxis Loten'de manuel terapistlerimiz, küresel olarak tanınan altın standart olan IFOMPT standartlarına göre eğitilmektedir.",
          ar: "العلاج اليدوي (MT) هو تخصص سريري في العلاج الطبيعي يستخدم فيه المعالج يديه بشكل هادف لتشخيص وعلاج الألم والخلل الوظيفي في الجهاز العضلي الهيكلي. في Praxis Loten، تدرب معالجونا اليدويون وفق معايير IFOMPT — المعيار الذهبي المعترف به عالميًا.",
          pl: "Terapia manualna (MT) to klinична specjalizacja fizjoterapii, w której ręce terapeuty są celowo używane do diagnozowania i leczenia bólu i dysfunkcji układu mięśniowo-szkieletowego. W Praxis Loten nasi terapeuci manualni są szkoleni zgodnie ze standardami IFOMPT — uznanym na całym świecie złotym standardem.",
        },
        infographic: "manual-therapy-pillars",
      },
      {
        heading: {
          de: "Für welche Beschwerden ist sie geeignet?",
          fr: "Pour quels troubles est-elle adaptée ?",
          en: "Which complaints is it suitable for?",
          nl: "Voor welke klachten is het geschikt?",
          tr: "Hangi şikayetler için uygundur?",
          ar: "لأي شكاوى هو مناسب؟",
          pl: "Na jakie dolegliwości jest odpowiednia?",
        },
        body: {
          de: "Manuelle Therapie zeigt besonders gute Ergebnisse bei: akuten und chronischen Nacken- und Rückenschmerzen, Bandscheibenvorfällen ohne neurologische Defizite, Blockaden der kleinen Wirbelgelenke, Schulter- und Hüftproblemen sowie postoperativer Rehabilitation nach Wirbelsäulenoperationen. Bei neurologischen Symptomen (Taubheit, Lähmung) erfolgt stets eine ärztliche Abklärung zuerst.",
          fr: "La thérapie manuelle donne de très bons résultats pour : les douleurs cervicales et lombaires aiguës et chroniques, les hernies discales sans déficit neurologique, les blocages des petites articulations vertébrales, les problèmes d'épaule et de hanche, ainsi que la rééducation post-opératoire après chirurgie du rachis. En cas de symptômes neurologiques (engourdissements, paralysie), une évaluation médicale préalable est toujours nécessaire.",
          en: "Manual therapy shows particularly good results for: acute and chronic neck and back pain, herniated discs without neurological deficits, blockages of the small vertebral joints, shoulder and hip problems, and post-operative rehabilitation after spinal surgery. In cases of neurological symptoms (numbness, paralysis), medical assessment is always carried out first.",
          nl: "Manuele therapie toont bijzonder goede resultaten bij: acute en chronische nek- en rugpijn, hernia's zonder neurologische tekorten, blokkades van de kleine wervelgewrichten, schouder- en heupproblemen, en postoperatieve revalidatie na wervelkolomoperaties. Bij neurologische symptomen (gevoelloosheid, verlamming) wordt altijd eerst een medische beoordeling uitgevoerd.",
          tr: "Manuel terapi özellikle şu durumlarda iyi sonuçlar verir: akut ve kronik boyun ve sırt ağrısı, nörolojik defisit olmayan fıtıklar, küçük omurga eklemlerinin blokajları, omuz ve kalça sorunları ve omurga ameliyatı sonrası rehabilitasyon. Nörolojik semptomlar (uyuşma, felç) durumunda her zaman önce tıbbi değerlendirme yapılır.",
          ar: "يُظهر العلاج اليدوي نتائج جيدة بشكل خاص لـ: آلام الرقبة والظهر الحادة والمزمنة، الانزلاقات الغضروفية بدون عجز عصبي، انسدادات مفاصل الفقرات الصغيرة، مشاكل الكتف والورك، وإعادة التأهيل بعد جراحة العمود الفقري. في حالة الأعراض العصبية (خدر، شلل) يتم دائمًا إجراء تقييم طبي أولًا.",
          pl: "Terapia manualna wykazuje szczególnie dobre wyniki przy: ostrym i przewlekłym bólu szyi i pleców, przepuklinach dyskowych bez deficytów neurologicznych, blokadach małych stawów kręgosłupa, problemach z barkiem i biodrem oraz rehabilitacji pooperacyjnej po operacjach kręgosłupa. W przypadku objawów neurologicznych (drętwienie, porażenie) zawsze najpierw przeprowadzana jest ocena lekarska.",
        },
        infographic: "imaging-myth",
      },
      {
        heading: {
          de: "Wie läuft eine Behandlung bei uns ab?",
          fr: "Comment se déroule une séance chez nous ?",
          en: "How does a session work at our practice?",
          nl: "Hoe verloopt een sessie bij ons?",
          tr: "Bizde bir seans nasıl işler?",
          ar: "كيف تسير الجلسة عندنا؟",
          pl: "Jak wygląda sesja u nas?",
        },
        body: {
          de: "Jede Behandlung beginnt mit einer ausführlichen Anamnese und einem funktionellen Assessment. Mithilfe unseres Manuthera 242 — einem hochmodernen finnischen Behandlungstisch — können wir präzise Mobilisations- und Manipulationstechniken in optimaler Position durchführen. Typischerweise umfasst eine Behandlung: spezifische Gelenkmobilisation, neuromuskuläre Techniken, gezielte Heimübungen sowie Aufklärung über Haltung und Belastung.",
          fr: "Chaque séance commence par un bilan approfondi et une évaluation fonctionnelle. Grâce à notre Manuthera 242 — une table de traitement finlandaise hautement sophistiquée — nous pouvons réaliser des techniques de mobilisation et de manipulation précises dans une position optimale. Une séance type comprend : mobilisation articulaire spécifique, techniques neuromusculaires, exercices personnalisés à domicile et éducation posturale.",
          en: "Every session begins with a thorough history-taking and functional assessment. Using our Manuthera 242 — a highly sophisticated Finnish treatment table — we can perform precise mobilisation and manipulation techniques in the optimal position. A typical session includes: specific joint mobilisation, neuromuscular techniques, targeted home exercises and education on posture and loading.",
          nl: "Elke sessie begint met een uitgebreide anamnese en functionele beoordeling. Met onze Manuthera 242 — een geavanceerde Finse behandeltafel — kunnen we nauwkeurige mobilisatie- en manipulatietechnieken in de optimale positie uitvoeren. Een typische sessie omvat: specifieke gewrichtsmobilisatie, neuromusculaire technieken, gerichte thuisoefeningen en educatie over houding en belasting.",
          tr: "Her seans kapsamlı bir anamnez ve fonksiyonel değerlendirmeyle başlar. Manuthera 242'mizi — son derece sofistike bir Fin tedavi masası — kullanarak optimal pozisyonda hassas mobilizasyon ve manipülasyon teknikleri uygulayabiliyoruz. Tipik bir seans şunları içerir: spesifik eklem mobilizasyonu, nöromüsküler teknikler, hedefli ev egzersizleri ve duruş ve yükleme hakkında eğitim.",
          ar: "تبدأ كل جلسة بأخذ تاريخ مفصل وتقييم وظيفي. باستخدام طاولة العلاج Manuthera 242 الفنلندية المتطورة، يمكننا إجراء تقنيات تحريك ومعالجة دقيقة في الوضع الأمثل. تتضمن الجلسة النموذجية: تحريك مفصلي محدد، تقنيات عصبية عضلية، تمارين منزلية موجهة وتثقيف حول الوضعية والحمل.",
          pl: "Każda sesja zaczyna się od szczegółowego wywiadu i oceny funkcjonalnej. Dzięki naszemu stołowi Manuthera 242 — zaawansowanemu fińskiemu stołowi terapeutycznemu — możemy wykonywać precyzyjne techniki mobilizacji i manipulacji w optymalnej pozycji. Typowa sesja obejmuje: specyficzną mobilizację stawów, techniki nerwowo-mięśniowe, ukierunkowane ćwiczenia domowe oraz edukację dotyczącą postawy i obciążeń.",
        },
        infographic: "spine",
      },
    ],
    keyPoints: {
      de: ["Evidenzbasierte Therapie nach IFOMPT-Standards", "Individuelle Diagnose vor jeder Behandlung", "Kombination aus manuellen Techniken + Heimübungen", "Auch nach Operationen an der Wirbelsäule geeignet", "Auf dem Manuthera 242 — präzise und schonend"],
      fr: ["Thérapie fondée sur les preuves selon les normes IFOMPT", "Diagnostic individuel avant chaque séance", "Combinaison de techniques manuelles + exercices à domicile", "Adaptée aussi après chirurgie du rachis", "Sur le Manuthera 242 — précis et doux"],
      en: ["Evidence-based therapy to IFOMPT standards", "Individual assessment before every session", "Combination of manual techniques + home exercises", "Also suitable after spinal surgery", "On the Manuthera 242 — precise and gentle"],
      nl: ["Evidence-based therapie volgens IFOMPT-normen", "Individuele diagnose vóór elke behandeling", "Combinatie van manuele technieken + thuisoefeningen", "Ook geschikt na rugoperaties", "Op de Manuthera 242 — nauwkeurig en zacht"],
      tr: ["IFOMPT standartlarına göre kanıta dayalı terapi", "Her seanstan önce bireysel değerlendirme", "Manuel teknikler + ev egzersizlerinin kombinasyonu", "Omurga ameliyatı sonrasında da uygun", "Manuthera 242'de — hassas ve nazik"],
      ar: ["علاج قائم على الأدلة وفق معايير IFOMPT", "تقييم فردي قبل كل جلسة", "مزيج من التقنيات اليدوية + التمارين المنزلية", "مناسب أيضًا بعد جراحة العمود الفقري", "على Manuthera 242 — دقيق وناعم"],
      pl: ["Terapia oparta na dowodach zgodna ze standardami IFOMPT", "Indywidualna diagnoza przed każdą sesją", "Połączenie technik manualnych + ćwiczeń domowych", "Odpowiednia również po operacjach kręgosłupa", "Na stole Manuthera 242 — precyzyjnie i delikatnie"],
    },
    ctaText: {
      de: "Leiden Sie unter Rückenschmerzen? Vereinbaren Sie jetzt einen Termin bei Philippe Banaszak.",
      fr: "Vous souffrez de douleurs dorsales ? Prenez rendez-vous maintenant avec Philippe Banaszak.",
      en: "Suffering from back pain? Book an appointment with Philippe Banaszak now.",
      nl: "Last van rugpijn? Boek nu een afspraak bij Philippe Banaszak.",
      tr: "Sırt ağrısından mı muzdaripsiniz? Philippe Banaszak ile şimdi randevu alın.",
      ar: "هل تعاني من آلام الظهر؟ احجز موعدًا مع Philippe Banaszak الآن.",
      pl: "Cierpisz na ból pleców? Zarezerwuj wizytę u Philippe Banaszak.",
    },
  },

  "laufen-verletzungspraevention": {
    title: {
      de: "Laufen ohne Schmerzen — 5 Tipps zur Verletzungsprävention",
      fr: "Courir sans douleur — 5 conseils pour prévenir les blessures",
      en: "Running without pain — 5 injury prevention tips",
      nl: "Lopen zonder pijn — 5 tips voor blessurepreventie",
      tr: "Ağrısız koşu — yaralanma önleme için 5 ipucu",
      ar: "الجري بدون ألم — 5 نصائح للوقاية من الإصابات",
      pl: "Bieganie bez bólu — 5 wskazówek dotyczących prewencji urazów",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "فيزيوتيرابيا الرياضة", pl: "Fizjoterapia Sportowa",
    },
    date: "2024-10-03",
    readMin: 7,
    color: "from-[#76b82a] to-[#5c9120]",
    authorSlug: "thom-petit",
    authorName: "Thom Petit",
    intro: {
      de: "Laufen ist eine der zugänglichsten Sportarten der Welt — aber auch eine der verletzungsreichsten. Studien zeigen, dass 50–80 % aller Läufer sich pro Jahr mindestens einmal verletzen. Als Spezialist der Running Clinic bei Praxis Loten analysiert Thom Petit täglich Laufmuster und erklärt, wie Sie Verletzungen effektiv vorbeugen.",
      fr: "La course à pied est l'un des sports les plus accessibles au monde — mais aussi l'un des plus pourvoyeurs de blessures. Des études montrent que 50 à 80 % de tous les coureurs se blessent au moins une fois par an. En tant que spécialiste de la Running Clinic chez Praxis Loten, Thom Petit analyse les patterns de course quotidiennement et explique comment prévenir efficacement les blessures.",
      en: "Running is one of the most accessible sports in the world — but also one of the most injury-prone. Studies show that 50–80% of all runners get injured at least once per year. As the Running Clinic specialist at Praxis Loten, Thom Petit analyses running patterns daily and explains how to prevent injuries effectively.",
      nl: "Hardlopen is een van de meest toegankelijke sporten ter wereld — maar ook een van de meest blessuregevaarlijke. Studies tonen aan dat 50–80% van alle lopers minstens één keer per jaar geblesseerd raakt. Als specialist van de Running Clinic bij Praxis Loten analyseert Thom Petit dagelijks looppatronen.",
      tr: "Koşu, dünyanın en erişilebilir sporlarından biridir — ama aynı zamanda en fazla yaralanmaya yol açanlardan da biridir. Araştırmalar, tüm koşucuların %50–80'inin yılda en az bir kez yaralandığını gösteriyor. Praxis Loten Running Clinic uzmanı olarak Thom Petit, koşu modellerini günlük olarak analiz eder.",
      ar: "الجري هو أحد أكثر الرياضات في متناول الجميع في العالم — لكنه أيضًا من بين أكثرها إصابةً. تُظهر الدراسات أن 50-80٪ من جميع العدائين يُصابون مرة واحدة على الأقل في السنة. بصفته متخصص عيادة الجري في Praxis Loten، يحلل ثوم بيتي أنماط الجري يوميًا.",
      pl: "Bieganie jest jednym z najbardziej dostępnych sportów na świecie — ale też jednym z najbardziej narażonych na urazy. Badania pokazują, że 50–80% wszystkich biegaczy doznaje urazu przynajmniej raz w roku. Jako specjalista Running Clinic w Praxis Loten, Thom Petit analizuje wzorce biegania na co dzień.",
    },
    sections: [
      {
        heading: {
          de: "Tipp 1 & 2 — Belastungsaufbau und Schuhe",
          fr: "Conseils 1 & 2 — Progression de charge et chaussures",
          en: "Tips 1 & 2 — Load progression and footwear",
          nl: "Tips 1 & 2 — Belastingsopbouw en schoenen",
          tr: "İpucu 1 & 2 — Yük ilerlemesi ve ayakkabı",
          ar: "نصائح 1 و2 — تزايد الحمل والأحذية",
          pl: "Wskazówki 1 i 2 — Progresja obciążeń i obuwie",
        },
        body: {
          de: "Die häufigste Ursache für Laufverletzungen ist zu schnelle Steigerung der Trainingsbelastung. Die 10%-Regel besagt: erhöhen Sie Ihr Wochenvolumen nie um mehr als 10 % pro Woche. Gut sitzende Laufschuhe, die Ihrem Fußtyp entsprechen, sind die zweite Säule. Eine professionelle Laufanalyse in unserer Running Clinic zeigt Ihnen, welcher Schuh zu Ihrem Gangbild passt.",
          fr: "La cause la plus fréquente des blessures de running est une augmentation trop rapide de la charge d'entraînement. La règle des 10% stipule : n'augmentez jamais votre volume hebdomadaire de plus de 10% par semaine. Des chaussures bien adaptées à votre type de pied constituent le deuxième pilier. Une analyse de course professionnelle dans notre Running Clinic vous indiquera quelle chaussure correspond à votre foulée.",
          en: "The most common cause of running injuries is too rapid an increase in training load. The 10% rule states: never increase your weekly volume by more than 10% per week. Well-fitting running shoes suited to your foot type are the second pillar. A professional gait analysis at our Running Clinic will show you which shoe matches your running pattern.",
          nl: "De meest voorkomende oorzaak van loopblessures is een te snelle toename van de trainingsbelasting. De 10%-regel stelt: verhoog uw wekelijks volume nooit met meer dan 10% per week. Goed passende loopschoenen die bij uw voettype passen vormen de tweede pijler.",
          tr: "Koşu yaralanmalarının en yaygın nedeni, antrenman yükünün çok hızlı artırılmasıdır. %10 kuralı şunu söyler: haftalık hacminizi hiçbir zaman haftada %10'dan fazla artırmayın. Ayak tipinize uygun iyi oturan koşu ayakkabıları ikinci unsurdur.",
          ar: "السبب الأكثر شيوعًا لإصابات الجري هو الزيادة السريعة جدًا في حمل التدريب. تنص قاعدة 10٪ على: لا تزيد حجمك الأسبوعي بأكثر من 10٪ أسبوعيًا. الأحذية المناسبة لنوع قدمك هي الركيزة الثانية.",
          pl: "Najczęstszą przyczyną urazów biegowych jest zbyt szybkie zwiększenie obciążeń treningowych. Zasada 10% mówi: nigdy nie zwiększaj tygodniowego wolumenu o więcej niż 10% tygodniowo. Dobrze dopasowane buty do biegania odpowiadające Twojemu typowi stopy to drugi filar.",
        },
        infographic: "progression-rule",
      },
      {
        heading: {
          de: "Tipp 3, 4 & 5 — Technik, Kraft und Erholung",
          fr: "Conseils 3, 4 & 5 — Technique, renforcement et récupération",
          en: "Tips 3, 4 & 5 — Technique, strength and recovery",
          nl: "Tips 3, 4 & 5 — Techniek, kracht en herstel",
          tr: "İpucu 3, 4 & 5 — Teknik, güç ve toparlanma",
          ar: "نصائح 3، 4 و5 — التقنية والقوة والتعافي",
          pl: "Wskazówki 3, 4 i 5 — Technika, siła i regeneracja",
        },
        body: {
          de: "Tipp 3: Lauftechnik. Ein zu langer Schritt (Overstriding) erhöht die Aufprallkräfte erheblich. Ziel ist eine Kadenz von 170–180 Schritten/Minute. Tipp 4: Krafttraining. Regelmäßiges Kräftigen der Hüftabduktoren und Waden reduziert das Verletzungsrisiko um bis zu 50 %. Tipp 5: Erholung. Ausreichend Schlaf und mindestens ein kompletter Ruhetag pro Woche sind keine Optionen — sie sind Pflicht für Ihren Fortschritt.",
          fr: "Conseil 3 : Technique. Une foulée trop longue (overstriding) augmente considérablement les forces d'impact. L'objectif est une cadence de 170–180 pas/minute. Conseil 4 : Renforcement musculaire. Un renforcement régulier des abducteurs de hanche et des mollets réduit le risque de blessure jusqu'à 50 %. Conseil 5 : Récupération. Un sommeil suffisant et au moins un jour de repos complet par semaine ne sont pas des options — ils sont indispensables à votre progression.",
          en: "Tip 3: Running technique. Too long a stride (overstriding) significantly increases impact forces. The target is a cadence of 170–180 steps/minute. Tip 4: Strength training. Regular strengthening of the hip abductors and calves reduces the injury risk by up to 50%. Tip 5: Recovery. Adequate sleep and at least one complete rest day per week are not optional — they are mandatory for your progress.",
          nl: "Tip 3: Looptechniek. Een te lange pas (overstriding) verhoogt de impact krachten aanzienlijk. Het doel is een cadans van 170–180 stappen/minuut. Tip 4: Krachttraining. Regelmatig versterken van de heupabductoren en kuiten vermindert het blessurerisico met tot 50%. Tip 5: Herstel. Voldoende slaap en minstens één complete rustdag per week zijn verplicht.",
          tr: "İpucu 3: Koşu tekniği. Çok uzun bir adım (overstriding) etki kuvvetlerini önemli ölçüde artırır. Hedef, 170–180 adım/dakika kadanstır. İpucu 4: Güç antrenmanı. Kalça abduktörlerini ve baldırları düzenli olarak güçlendirmek yaralanma riskini %50'ye kadar azaltır. İpucu 5: Toparlanma. Yeterli uyku ve haftada en az bir tam dinlenme günü isteğe bağlı değil — zorunlu.",
          ar: "نصيحة 3: تقنية الجري. الخطوة الطويلة جدًا تزيد قوى الارتطام بشكل كبير. الهدف هو إيقاع 170-180 خطوة/دقيقة. نصيحة 4: تدريب القوة. تقوية منتظمة لمبعدات الورك والساق تقلل خطر الإصابة بنسبة 50٪. نصيحة 5: التعافي. النوم الكافي ويوم راحة كامل واحد على الأقل أسبوعيًا ضرورة.",
          pl: "Wskazówka 3: Technika biegu. Zbyt długi krok (overstriding) znacznie zwiększa siły uderzenia. Celem jest kadencja 170–180 kroków/minutę. Wskazówka 4: Trening siłowy. Regularne wzmacnianie odwodzicieli bioder i łydek zmniejsza ryzyko urazów o 50%. Wskazówka 5: Regeneracja. Wystarczający sen i co najmniej jeden pełny dzień odpoczynku tygodniowo są obowiązkowe.",
        },
        infographic: "reflexes",
      },
    ],
    keyPoints: {
      de: ["Nie mehr als 10% Steigerung pro Woche", "Laufanalyse für die richtigen Schuhe", "Zielkadenz: 170–180 Schritte/Minute", "Hüft- und Wadentraining als Schutzfaktor", "Mindestens 1 Ruhetag pro Woche"],
      fr: ["Jamais plus de 10% d'augmentation par semaine", "Analyse de course pour les bonnes chaussures", "Cadence cible : 170–180 pas/minute", "Renforcement hanche et mollet comme facteur protecteur", "Au moins 1 jour de repos par semaine"],
      en: ["Never more than 10% increase per week", "Gait analysis for the right shoes", "Target cadence: 170–180 steps/minute", "Hip and calf training as a protective factor", "At least 1 rest day per week"],
      nl: ["Nooit meer dan 10% stijging per week", "Loopanalyse voor de juiste schoenen", "Doelkadans: 170–180 stappen/minuut", "Heup- en kuittraining als beschermende factor", "Minimaal 1 rustdag per week"],
      tr: ["Haftada hiçbir zaman %10'dan fazla artırma", "Doğru ayakkabılar için koşu analizi", "Hedef kadans: 170–180 adım/dakika", "Koruyucu faktör olarak kalça ve baldır antrenmanı", "Haftada en az 1 dinlenme günü"],
      ar: ["لا تزيد أكثر من 10٪ في الأسبوع", "تحليل الجري للحذاء المناسب", "إيقاع مستهدف: 170-180 خطوة/دقيقة", "تمرين الورك والساق كعامل وقائي", "يوم راحة كامل واحد على الأقل في الأسبوع"],
      pl: ["Nigdy więcej niż 10% wzrostu tygodniowo", "Analiza chodu dla właściwego obuwia", "Docelowa kadencja: 170–180 kroków/minutę", "Trening bioder i łydek jako czynnik ochronny", "Co najmniej 1 dzień odpoczynku w tygodniu"],
    },
    ctaText: {
      de: "Probleme beim Laufen? Unsere Running Clinic mit Thom Petit analysiert Ihr Laufmuster.",
      fr: "Des problèmes en courant ? Notre Running Clinic avec Thom Petit analyse votre foulée.",
      en: "Problems running? Our Running Clinic with Thom Petit will analyse your gait.",
      nl: "Problemen met lopen? Onze Running Clinic met Thom Petit analyseert uw looppatroon.",
      tr: "Koşarken sorun mu yaşıyorsunuz? Thom Petit ile Running Clinic'imiz koşu modelinizi analiz eder.",
      ar: "هل تواجه مشاكل في الجري؟ عيادة الجري مع ثوم بيتي تحلل نمط جريك.",
      pl: "Problemy podczas biegania? Nasza Running Clinic z Thomem Petit analizuje Twój wzorzec biegu.",
    },
  },

  "lymphdrainage-wann-wie": {
    title: {
      de: "Manuelle Lymphdrainage — für wen und wann?",
      fr: "Drainage lymphatique manuel — pour qui et quand ?",
      en: "Manual lymphatic drainage — for whom and when?",
      nl: "Manuele lymfedrainage — voor wie en wanneer?",
      tr: "Manuel lenf drenajı — kim için ve ne zaman?",
      ar: "الصرف اللمفاوي اليدوي — لمن ومتى؟",
      pl: "Ręczny drenaż limfatyczny — dla kogo i kiedy?",
    },
    category: {
      de: "Lymphdrainage", fr: "Drainage Lymphatique", en: "Lymphatic Drainage",
      nl: "Lymfedrainage", tr: "Lenf Drenajı", ar: "الصرف اللمفاوي", pl: "Drenaż Limfatyczny",
    },
    date: "2024-09-10",
    readMin: 4,
    color: "from-teal-600 to-teal-800",
    authorSlug: "fabienne-dormann",
    authorName: "Fabienne Dormann",
    intro: {
      de: "Die manuelle Lymphdrainage ist eine sanfte, rhythmische Massagetechnik, die das Lymphsystem aktiviert und die Flüssigkeitsdrainage aus dem Gewebe verbessert. Sie ist weit mehr als eine Entspannungstherapie — sie ist eine medizinisch anerkannte Behandlung für Ödeme, chronische Schwellungen und postoperative Zustände.",
      fr: "Le drainage lymphatique manuel est une technique de massage douce et rythmique qui active le système lymphatique et améliore le drainage des liquides des tissus. C'est bien plus qu'une thérapie de relaxation — c'est un traitement médicalement reconnu pour les œdèmes, les gonflements chroniques et les états post-opératoires.",
      en: "Manual lymphatic drainage is a gentle, rhythmic massage technique that activates the lymphatic system and improves the drainage of fluid from tissues. It is far more than a relaxation therapy — it is a medically recognised treatment for oedema, chronic swelling and post-operative conditions.",
      nl: "Manuele lymfedrainage is een zachte, ritmische massagetechniek die het lymfesysteem activeert en de afvoer van vocht uit weefsels verbetert. Het is veel meer dan een ontspanningstherapie — het is een medisch erkende behandeling voor oedeem, chronische zwellingen en postoperatieve toestanden.",
      tr: "Manuel lenf drenajı, lenf sistemini aktive eden ve dokulardan sıvı drenajını iyileştiren nazik, ritmik bir masaj tekniğidir. Bir gevşeme terapisinden çok daha fazlasıdır — ödem, kronik şişme ve ameliyat sonrası durumlar için tıbbi olarak tanınmış bir tedavidir.",
      ar: "الصرف اللمفاوي اليدوي هو تقنية تدليك ناعمة وإيقاعية تنشط الجهاز اللمفاوي وتحسن تصريف السوائل من الأنسجة. إنها أكثر بكثير من مجرد علاج للاسترخاء — إنها علاج معترف به طبيًا للوذمة والتورمات المزمنة والحالات بعد العمليات.",
      pl: "Ręczny drenaż limfatyczny to delikatna, rytmiczna technika masażu, która aktywuje układ limfatyczny i poprawia odpływ płynów z tkanek. Jest to znacznie więcej niż terapia relaksacyjna — jest to uznana medycznie metoda leczenia obrzęków, przewlekłych obrzęków i stanów pooperacyjnych.",
    },
    sections: [
      {
        heading: {
          de: "Wer profitiert von der Lymphdrainage?",
          fr: "Qui bénéficie du drainage lymphatique ?",
          en: "Who benefits from lymphatic drainage?",
          nl: "Wie profiteert van lymfedrainage?",
          tr: "Kim lenf drenajından faydalanır?",
          ar: "من يستفيد من الصرف اللمفاوي؟",
          pl: "Kto korzysta z drenażu limfatycznego?",
        },
        body: {
          de: "Lymphdrainage ist besonders wertvoll für: Patienten mit primärem oder sekundärem Lymphödem, Personen nach Brustkrebs-OP und Axilla-Dissektion, postoperative Ödeme nach Knie- oder Hüftprothesen, chronische venöse Insuffizienz sowie Schwangere mit Beinödemen. Kontraindikationen umfassen aktive Infektionen, Thrombosen und bestimmte Herzerkrankungen — eine ärztliche Abklärung ist stets empfehlenswert.",
          fr: "Le drainage lymphatique est particulièrement précieux pour : les patients atteints de lymphœdème primaire ou secondaire, les personnes après une opération du cancer du sein avec dissection axillaire, les œdèmes post-opératoires après prothèse de genou ou de hanche, l'insuffisance veineuse chronique ainsi que les femmes enceintes présentant des œdèmes des membres inférieurs. Les contre-indications comprennent les infections actives, les thromboses et certaines maladies cardiaques.",
          en: "Lymphatic drainage is particularly valuable for: patients with primary or secondary lymphoedema, people following breast cancer surgery with axillary dissection, post-operative oedema after knee or hip prosthesis, chronic venous insufficiency and pregnant women with leg oedema. Contraindications include active infections, thrombosis and certain heart conditions.",
          nl: "Lymfedrainage is bijzonder waardevol voor: patiënten met primair of secundair lymfoedeem, mensen na borstkankeroperatie met okselklierverwijdering, postoperatieve oedemen na knie- of heupprothese, chronische veneuze insufficiëntie en zwangere vrouwen met beenoedeeem.",
          tr: "Lenf drenajı özellikle şunlar için değerlidir: primer veya sekonder lenfödemli hastalar, aksiller diseksiyonlu meme kanseri ameliyatı sonrası kişiler, diz veya kalça protezi sonrası ameliyat sonrası ödemler, kronik venöz yetmezlik ve bacak ödemi olan hamile kadınlar.",
          ar: "الصرف اللمفاوي ذو قيمة خاصة لـ: المرضى الذين يعانون من وذمة لمفية أولية أو ثانوية، الأشخاص بعد عمليات سرطان الثدي مع استئصال العقد الإبطية، الوذمة بعد العملية لأطراف صناعية للركبة أو الورك، القصور الوريدي المزمن والنساء الحوامل ذوات الوذمة.",
          pl: "Drenaż limfatyczny jest szczególnie wartościowy dla: pacjentów z pierwotnym lub wtórnym obrzękiem limfatycznym, osób po operacji raka piersi z dyssekcją pachową, obrzęków pooperacyjnych po protezach kolana lub biodra, przewlekłej niewydolności żylnej i kobiet w ciąży z obrzękami nóg.",
        },
        infographic: "lymph-flow",
      },
      {
        heading: {
          de: "Wie viele Sitzungen sind nötig?",
          fr: "Combien de séances sont nécessaires ?",
          en: "How many sessions are needed?",
          nl: "Hoeveel sessies zijn er nodig?",
          tr: "Kaç seans gereklidir?",
          ar: "كم عدد الجلسات اللازمة؟",
          pl: "Ile sesji jest potrzebnych?",
        },
        body: {
          de: "Die Anzahl der Sitzungen hängt stark von der Indikation ab. Bei akuten postoperativen Ödemen (z.B. nach Knieprothese) reichen oft 5–10 Sitzungen. Bei chronischem Lymphödem ist die Therapie langfristiger: Eine intensive Phase (täglich über 2–4 Wochen) gefolgt von einer Erhaltungsphase mit regelmäßigen Sitzungen und Kompressionsversorgung. Fabienne Dormann erstellt für jeden Patienten einen individuellen Behandlungsplan.",
          fr: "Le nombre de séances dépend fortement de l'indication. Pour les œdèmes post-opératoires aigus (par exemple après prothèse de genou), 5 à 10 séances suffisent souvent. Pour le lymphœdème chronique, la thérapie est plus longue : une phase intensive (quotidiennement pendant 2 à 4 semaines) suivie d'une phase d'entretien avec des séances régulières et une compression. Fabienne Dormann établit un plan de traitement individuel pour chaque patient.",
          en: "The number of sessions depends strongly on the indication. For acute post-operative oedema (e.g. after knee prosthesis), 5–10 sessions are often sufficient. For chronic lymphoedema, therapy is longer-term: an intensive phase (daily over 2–4 weeks) followed by a maintenance phase with regular sessions and compression therapy. Fabienne Dormann creates an individual treatment plan for each patient.",
          nl: "Het aantal sessies hangt sterk af van de indicatie. Bij acute postoperatieve oedemen (bijv. na knieprothese) zijn vaak 5–10 sessies voldoende. Bij chronisch lymfoedeem is de therapie langduriger: een intensieve fase (dagelijks gedurende 2–4 weken) gevolgd door een onderhoudsfase met reguliere sessies en compressietherapie.",
          tr: "Seans sayısı büyük ölçüde endikasyona bağlıdır. Akut ameliyat sonrası ödemler için (örn. diz protezi sonrası) genellikle 5–10 seans yeterlidir. Kronik lenfödem için terapi daha uzun vadelidir: yoğun bir faz (2–4 hafta boyunca günlük) ardından düzenli seanslar ve kompresyon terapisiyle idame fazı.",
          ar: "يعتمد عدد الجلسات بشكل كبير على المؤشر. بالنسبة للوذمة الحادة بعد العملية (مثل بعد أطراف الركبة)، غالبًا ما تكفي 5-10 جلسات. بالنسبة للوذمة اللمفية المزمنة، العلاج أطول أمدًا: مرحلة مكثفة (يوميًا لمدة 2-4 أسابيع) تليها مرحلة صيانة.",
          pl: "Liczba sesji zależy silnie od wskazania. W przypadku ostrych obrzęków pooperacyjnych (np. po protezie kolana) często wystarczy 5–10 sesji. W przypadku przewlekłego obrzęku limfatycznego terapia jest długoterminowa: intensywna faza (codziennie przez 2–4 tygodnie) następnie faza podtrzymująca z regularnymi sesjami i terapią kompresyjną.",
        },
      },
    ],
    keyPoints: {
      de: ["Medizinisch anerkannte Behandlung für Ödeme", "Besonders wirksam nach onkologischen Eingriffen", "Auch bei postoperativen Schwellungen (Knie/Hüfte)", "Individuelle Therapieplanung durch Fabienne Dormann", "Kombination mit Kompressionsversorgung möglich"],
      fr: ["Traitement médicalement reconnu pour les œdèmes", "Particulièrement efficace après interventions oncologiques", "Aussi pour les gonflements post-opératoires (genou/hanche)", "Planification thérapeutique individuelle par Fabienne Dormann", "Combinaison possible avec compression"],
      en: ["Medically recognised treatment for oedema", "Particularly effective after oncological interventions", "Also for post-operative swelling (knee/hip)", "Individual therapy planning by Fabienne Dormann", "Can be combined with compression therapy"],
      nl: ["Medisch erkende behandeling voor oedeem", "Bijzonder effectief na oncologische ingrepen", "Ook voor postoperatieve zwellingen (knie/heup)", "Individuele therapieplanning door Fabienne Dormann", "Combinatie met compressietherapie mogelijk"],
      tr: ["Ödem için tıbbi olarak tanınmış tedavi", "Onkolojik müdahaleler sonrası özellikle etkili", "Ameliyat sonrası şişmeler için de (diz/kalça)", "Fabienne Dormann tarafından bireysel terapi planlaması", "Kompresyon terapisiyle kombinasyon mümkün"],
      ar: ["علاج معترف به طبيًا للوذمة", "فعال بشكل خاص بعد التدخلات الأورامية", "أيضًا للتورمات بعد العمليات (الركبة/الورك)", "تخطيط علاجي فردي بواسطة فابيان دورمان", "يمكن الجمع مع العلاج بالضغط"],
      pl: ["Uznana medycznie metoda leczenia obrzęków", "Szczególnie skuteczna po interwencjach onkologicznych", "Również przy obrzękach pooperacyjnych (kolano/biodro)", "Indywidualne planowanie terapii przez Fabienne Dormann", "Możliwość połączenia z terapią kompresyjną"],
    },
    ctaText: {
      de: "Leiden Sie unter Schwellungen oder Lymphödemen? Fabienne Dormann begleitet Sie.",
      fr: "Vous souffrez de gonflements ou de lymphœdèmes ? Fabienne Dormann vous accompagne.",
      en: "Suffering from swelling or lymphoedema? Fabienne Dormann will guide you.",
      nl: "Last van zwellingen of lymfoedeem? Fabienne Dormann begeleidt u.",
      tr: "Şişme veya lenfödemden mi muzdaripsiniz? Fabienne Dormann size rehberlik eder.",
      ar: "هل تعاني من التورمات أو الوذمة اللمفية؟ فابيان دورمان تصاحبك.",
      pl: "Cierpisz na obrzęki lub obrzęk limfatyczny? Fabienne Dormann poprowadzi Cię.",
    },
  },

  "kiefergelenk-cmd-symptome": {
    title: {
      de: "Kiefergelenk-Schmerzen (CMD) — Symptome erkennen und behandeln",
      fr: "Douleurs de l'articulation temporo-mandibulaire (DTM) — reconnaître et traiter",
      en: "Jaw joint pain (TMD) — recognise and treat the symptoms",
      nl: "Kaakgewrichtspijn (CMD) — symptomen herkennen en behandelen",
      tr: "Çene eklemi ağrısı (CMD) — belirtileri tanımak ve tedavi etmek",
      ar: "ألم مفصل الفك (CMD) — التعرف على الأعراض وعلاجها",
      pl: "Ból stawu skroniowo-żuchwowego (CMD) — rozpoznawanie i leczenie objawów",
    },
    category: {
      de: "Kiefergelenk / ATM", fr: "Articulation Temporo-Mandibulaire", en: "TMJ / Jaw",
      nl: "Kaakgewricht", tr: "Çene Eklemi", ar: "مفصل الفك", pl: "Staw Żuchwowy",
    },
    date: "2024-08-20",
    readMin: 6,
    color: "from-purple-600 to-purple-800",
    authorSlug: "fabienne-dormann",
    authorName: "Fabienne Dormann",
    intro: {
      de: "Craniomandibuläre Dysfunktion (CMD) betrifft schätzungsweise 10–15 % der Bevölkerung und wird häufig falsch diagnostiziert. Die Beschwerden können von Kieferschmerzen über Kopfschmerzen bis hin zu Schwindel und Tinnitus reichen. Als spezialisierte Therapeutin für ATM-Dysfunktionen erklärt Fabienne Dormann die Zusammenhänge.",
      fr: "La dysfonction cranio-mandibulaire (DCM) touche environ 10 à 15 % de la population et est souvent mal diagnostiquée. Les plaintes peuvent aller des douleurs de mâchoire aux maux de tête, en passant par les vertiges et les acouphènes. En tant que thérapeute spécialisée dans les dysfonctions de l'ATM, Fabienne Dormann explique les liens.",
      en: "Craniomandibular dysfunction (CMD) affects an estimated 10–15% of the population and is frequently misdiagnosed. Symptoms can range from jaw pain to headaches, dizziness and tinnitus. As a specialist therapist in TMJ dysfunction, Fabienne Dormann explains the connections.",
      nl: "Craniomandibulaire dysfunctie (CMD) treft naar schatting 10–15% van de bevolking en wordt vaak verkeerd gediagnosticeerd. De klachten kunnen variëren van kaakpijn tot hoofdpijn, duizeligheid en tinnitus. Als gespecialiseerde therapeute in ATM-dysfuncties legt Fabienne Dormann de verbanden uit.",
      tr: "Kraniomandibüler disfonksiyon (CMD), nüfusun tahminen %10–15'ini etkiler ve sıkça yanlış teşhis edilir. Belirtiler çene ağrısından baş ağrısına, baş dönmesine ve kulak çınlamasına kadar uzanabilir. Çene eklemi disfonksiyonunda uzman terapist olarak Fabienne Dormann bağlantıları açıklıyor.",
      ar: "تؤثر خلل الوظيفة القحفية الفكية (CMD) على ما يُقدَّر بـ 10-15٪ من السكان وكثيرًا ما يُشخَّص بشكل خاطئ. يمكن أن تتراوح الأعراض من آلام الفك إلى الصداع والدوار وطنين الأذن. بصفتها معالجة متخصصة في خلل وظيفة مفصل الفك، تشرح فابيان دورمان الروابط.",
      pl: "Dysfunkcja czaszkowo-żuchwowa (CMD) dotyka szacunkowo 10–15% populacji i jest często błędnie diagnozowana. Objawy mogą wahać się od bólu żuchwy po bóle głowy, zawroty głowy i szumy uszne. Jako wyspecjalizowana terapeutka w dysfunkcjach stawu skroniowo-żuchwowego, Fabienne Dormann wyjaśnia powiązania.",
    },
    sections: [
      {
        heading: {
          de: "Welche Symptome deuten auf CMD hin?",
          fr: "Quels symptômes indiquent une DCM ?",
          en: "Which symptoms indicate CMD?",
          nl: "Welke symptomen wijzen op CMD?",
          tr: "Hangi belirtiler CMD'ye işaret eder?",
          ar: "ما هي الأعراض التي تشير إلى CMD؟",
          pl: "Jakie objawy wskazują na CMD?",
        },
        body: {
          de: "CMD kann sich sehr unterschiedlich manifestieren: Schmerzen oder Steifheit des Kiefers beim Kauen oder Gähnen, Knacken oder Reiben im Kiefergelenk, Kopfschmerzen (besonders temporal), Ohrenschmerzen oder Tinnitus ohne Ohrenerkrankung, Schwindel und Nackenschmerzen. Das macht die Diagnose so schwierig: CMD imitiert andere Erkrankungen. Ein erfahrener Therapeut erkennt jedoch die typischen Muster.",
          fr: "La DCM peut se manifester de manière très diverse : douleurs ou raideur de la mâchoire en mangeant ou en bâillant, claquements ou crépitations de l'articulation, maux de tête (surtout temporaux), douleurs d'oreille ou acouphènes sans pathologie auriculaire, vertiges et cervicalgies. C'est ce qui rend le diagnostic si difficile : la DCM imite d'autres maladies. Mais un thérapeute expérimenté reconnaît les schémas typiques.",
          en: "CMD can manifest very differently: pain or stiffness in the jaw when chewing or yawning, clicking or grinding in the joint, headaches (especially temporal), ear pain or tinnitus without ear disease, dizziness and neck pain. This is what makes diagnosis so difficult: CMD mimics other conditions. An experienced therapist, however, recognises the typical patterns.",
          nl: "CMD kan zich heel anders manifesteren: pijn of stijfheid in de kaak bij kauwen of gapen, klikken of wrijven in het gewricht, hoofdpijn (vooral temporaal), oorpijn of tinnitus zonder ooraandoening, duizeligheid en nekpijn. Dit maakt de diagnose zo moeilijk: CMD imiteert andere aandoeningen.",
          tr: "CMD çok farklı şekillerde kendini gösterebilir: çiğneme veya esnerken çenede ağrı veya sertlik, eklemde tıklama veya gıcırtı, baş ağrıları (özellikle temporal), kulak hastalığı olmaksızın kulak ağrısı veya kulak çınlaması, baş dönmesi ve boyun ağrısı.",
          ar: "يمكن أن يتجلى CMD بطرق مختلفة جدًا: ألم أو تيبس في الفك عند المضغ أو التثاؤب، نقر أو احتكاك في المفصل، صداع (خاصة صدغي)، آلام الأذن أو طنين بدون مرض أذن، دوار وآلام الرقبة.",
          pl: "CMD może manifestować się bardzo różnie: ból lub sztywność żuchwy przy żuciu lub ziewaniu, trzaskanie lub zgrzytanie w stawie, bóle głowy (zwłaszcza skroniowe), ból ucha lub szumy uszne bez choroby ucha, zawroty głowy i ból szyi.",
        },
        infographic: "cmd-checklist",
      },
      {
        heading: {
          de: "Wie wird CMD bei Praxis Loten behandelt?",
          fr: "Comment la DCM est-elle traitée à Praxis Loten ?",
          en: "How is CMD treated at Praxis Loten?",
          nl: "Hoe wordt CMD behandeld bij Praxis Loten?",
          tr: "Praxis Loten'de CMD nasıl tedavi edilir?",
          ar: "كيف يُعالَج CMD في Praxis Loten؟",
          pl: "Jak leczy się CMD w Praxis Loten?",
        },
        body: {
          de: "Die Behandlung ist multimodal: Manuelle Techniken am Kiefergelenk (intra- und extraoraler Ansatz), Weichteiltechniken der Kaumuskulatur (Masseter, Temporalis, pterygoidale Muskeln), Haltungskorrektur der Halswirbelsäule, Entspannungsübungen und patientenspezifische Heimübungen. Die Zusammenarbeit mit dem Zahnarzt (für Schienen) ist oft Teil des Gesamtkonzepts. Bei Praxis Loten arbeiten wir interdisziplinär.",
          fr: "Le traitement est multimodal : techniques manuelles sur l'articulation temporo-mandibulaire (approche intra- et extraorale), techniques sur les tissus mous des muscles masticateurs (masséter, temporal, muscles ptérygoïdiens), correction posturale de la colonne cervicale, exercices de relaxation et exercices personnalisés à domicile. La collaboration avec le dentiste (pour les gouttières) fait souvent partie du concept global.",
          en: "Treatment is multimodal: manual techniques on the jaw joint (intra- and extra-oral approach), soft tissue techniques of the chewing muscles (masseter, temporalis, pterygoid muscles), cervical spine postural correction, relaxation exercises and patient-specific home exercises. Collaboration with the dentist (for splints) is often part of the overall concept.",
          nl: "De behandeling is multimodaal: manuele technieken op het kaakgewricht (intra- en extraoraal), weefseltechnieken van de kauwspieren (masseter, temporalis, pterygoidale spieren), houdingscorrectie van de cervicale wervelkolom, ontspanningsoefeningen en patiëntspecifieke thuisoefeningen.",
          tr: "Tedavi multimodaldır: çene ekleminde manuel teknikler (intra ve ekstraoral yaklaşım), çiğneme kaslarının yumuşak doku teknikleri (masseter, temporalis, pterigoid kaslar), servikal omurganın postüral düzeltmesi, gevşeme egzersizleri ve hastaya özel ev egzersizleri.",
          ar: "العلاج متعدد الأوجه: تقنيات يدوية على مفصل الفك (نهج داخل وخارج الفم)، تقنيات الأنسجة الرخوة لعضلات المضغ، تصحيح وضعية العمود الفقري العنقي، تمارين الاسترخاء وتمارين منزلية خاصة بالمريض.",
          pl: "Leczenie jest multimodalne: techniki manualne na stawie skroniowo-żuchwowym (podejście wewnątrz- i zewnątrzustne), techniki tkanek miękkich mięśni żucia (masseter, temporalis, mięśnie skrzydłowe), korekcja postawy kręgosłupa szyjnego, ćwiczenia relaksacyjne i ćwiczenia domowe specyficzne dla pacjenta.",
        },
        infographic: "manual-therapy-pillars",
      },
    ],
    keyPoints: {
      de: ["CMD betrifft 10–15% der Bevölkerung", "Symptome oft weit entfernt vom Kiefer (Kopf, Ohren, Nacken)", "Spezialisierte Therapeutin: Fabienne Dormann", "Multimodaler Behandlungsansatz", "Interdisziplinäre Zusammenarbeit mit Zahnarzt"],
      fr: ["La DCM touche 10–15 % de la population", "Symptômes souvent éloignés de la mâchoire (tête, oreilles, nuque)", "Thérapeute spécialisée : Fabienne Dormann", "Approche thérapeutique multimodale", "Collaboration interdisciplinaire avec le dentiste"],
      en: ["CMD affects 10–15% of the population", "Symptoms often far from the jaw (head, ears, neck)", "Specialist therapist: Fabienne Dormann", "Multimodal treatment approach", "Interdisciplinary collaboration with dentist"],
      nl: ["CMD treft 10–15% van de bevolking", "Symptomen vaak ver van de kaak (hoofd, oren, nek)", "Gespecialiseerde therapeute: Fabienne Dormann", "Multimodale behandelaanpak", "Interdisciplinaire samenwerking met tandarts"],
      tr: ["CMD, nüfusun %10–15'ini etkiler", "Belirtiler genellikle çeneden uzakta (baş, kulaklar, boyun)", "Uzman terapist: Fabienne Dormann", "Multimodal tedavi yaklaşımı", "Diş hekimiyle interdisipliner işbirliği"],
      ar: ["يؤثر CMD على 10-15٪ من السكان", "الأعراض غالبًا بعيدة عن الفك (الرأس، الأذنان، الرقبة)", "المعالجة المتخصصة: فابيان دورمان", "نهج علاجي متعدد الأوجه", "تعاون متعدد التخصصات مع طبيب الأسنان"],
      pl: ["CMD dotyka 10–15% populacji", "Objawy często daleko od żuchwy (głowa, uszy, kark)", "Specjalistyczna terapeutka: Fabienne Dormann", "Multimodalne podejście terapeutyczne", "Interdyscyplinarna współpraca z dentystą"],
    },
    ctaText: {
      de: "Leiden Sie unter Kiefergelenksschmerzen? Vereinbaren Sie einen Termin bei Fabienne Dormann.",
      fr: "Vous souffrez de douleurs à l'ATM ? Prenez rendez-vous avec Fabienne Dormann.",
      en: "Suffering from jaw joint pain? Book an appointment with Fabienne Dormann.",
      nl: "Last van kaakgewrichtspijn? Boek een afspraak bij Fabienne Dormann.",
      tr: "Çene eklemi ağrısından mı muzdaripsiniz? Fabienne Dormann ile randevu alın.",
      ar: "هل تعاني من آلام مفصل الفك؟ احجز موعدًا مع فابيان دورمان.",
      pl: "Cierpisz na ból stawu skroniowo-żuchwowego? Zarezerwuj wizytę u Fabienne Dormann.",
    },
  },

  "osteopathie-kinesitherapie-unterschied": {
    title: {
      de: "Osteopathie vs. Physiotherapie — was ist der Unterschied?",
      fr: "Ostéopathie vs. kinésithérapie — quelle est la différence ?",
      en: "Osteopathy vs. physiotherapy — what is the difference?",
      nl: "Osteopathie vs. fysiotherapie — wat is het verschil?",
      tr: "Osteopati vs. fizyoterapi — fark nedir?",
      ar: "الهشاشة مقابل العلاج الطبيعي — ما الفرق؟",
      pl: "Osteopatia a fizjoterapia — jaka jest różnica?",
    },
    category: {
      de: "Osteopathie", fr: "Ostéopathie", en: "Osteopathy",
      nl: "Osteopathie", tr: "Osteopati", ar: "هشاشة العظام", pl: "Osteopatia",
    },
    date: "2024-07-05",
    readMin: 5,
    color: "from-indigo-600 to-indigo-800",
    authorSlug: "felix-esser",
    authorName: "Félix Esser",
    intro: {
      de: "Viele Patienten fragen sich, ob sie einen Physiotherapeuten oder einen Osteopathen aufsuchen sollen. Die Antwort ist komplex — denn heute sind viele Therapeuten in beiden Disziplinen ausgebildet. Félix Esser, bei Praxis Loten in Osteopathie-Ausbildung, erklärt die Gemeinsamkeiten und Unterschiede.",
      fr: "De nombreux patients se demandent s'ils doivent consulter un kinésithérapeute ou un ostéopathe. La réponse est complexe — car aujourd'hui, de nombreux thérapeutes sont formés dans les deux disciplines. Félix Esser, formé en ostéopathie chez Praxis Loten, explique les similitudes et les différences.",
      en: "Many patients wonder whether they should see a physiotherapist or an osteopath. The answer is complex — because today many therapists are trained in both disciplines. Félix Esser, trained in osteopathy at Praxis Loten, explains the similarities and differences.",
      nl: "Veel patiënten vragen zich af of ze een fysiotherapeut of een osteopaat moeten raadplegen. Het antwoord is complex — want tegenwoordig zijn veel therapeuten opgeleid in beide disciplines. Félix Esser, met osteopathie-opleiding bij Praxis Loten, legt de overeenkomsten en verschillen uit.",
      tr: "Pek çok hasta fizyoterapist mi yoksa osteopat mı görmeleri gerektiğini merak eder. Yanıt karmaşıktır — çünkü bugün pek çok terapist her iki disiplinde de eğitim almıştır. Praxis Loten'de osteopati eğitimi alan Félix Esser benzerlikleri ve farklılıkları açıklıyor.",
      ar: "يتساءل كثير من المرضى عما إذا كانوا يجب أن يرى معالجًا طبيعيًا أم أخصائي هشاشة. الإجابة معقدة — لأن كثيرًا من المعالجين اليوم مدربون في كلا التخصصين. يشرح فيليكس إيسر التشابهات والاختلافات.",
      pl: "Wielu pacjentów zastanawia się, czy powinni odwiedzić fizjoterapeutę czy osteopatę. Odpowiedź jest złożona — bo dziś wielu terapeutów jest szkolonych w obu dyscyplinach. Félix Esser, z wykształceniem osteopatycznym w Praxis Loten, wyjaśnia podobieństwa i różnice.",
    },
    sections: [
      {
        heading: {
          de: "Was unterscheidet die beiden Ansätze?",
          fr: "Qu'est-ce qui différencie les deux approches ?",
          en: "What distinguishes the two approaches?",
          nl: "Wat onderscheidt de twee benaderingen?",
          tr: "İki yaklaşımı ayırt eden nedir?",
          ar: "ما الذي يميز النهجين؟",
          pl: "Co odróżnia oba podejścia?",
        },
        body: {
          de: "Physiotherapie ist eine medizinisch reglementierte Disziplin mit starkem Fokus auf evidenzbasierte Techniken, Bewegungstherapie und funktionelle Rehabilitation. Osteopathie betrachtet den Körper als Einheit und arbeitet mit ganzheitlicheren Techniken an Gelenken, Weichteilen, Faszien und viszeralen Strukturen. In Belgien ist Osteopathie kein gesetzlich anerkannter Gesundheitsberuf (Stand 2024) — weshalb unsere Therapeuten sie als Erweiterung ihrer physiotherapeutischen Kompetenz anwenden.",
          fr: "La kinésithérapie est une discipline médicalement réglementée avec un fort accent sur les techniques fondées sur les preuves, la thérapie par le mouvement et la rééducation fonctionnelle. L'ostéopathie considère le corps comme une unité et travaille avec des techniques plus globales sur les articulations, les tissus mous, les fascias et les structures viscérales. En Belgique, l'ostéopathie n'est pas une profession de santé légalement reconnue (en 2024) — c'est pourquoi nos thérapeutes l'appliquent comme une extension de leurs compétences kinésithérapeutiques.",
          en: "Physiotherapy is a medically regulated discipline with a strong focus on evidence-based techniques, movement therapy and functional rehabilitation. Osteopathy views the body as a unit and works with more holistic techniques on joints, soft tissues, fascia and visceral structures. In Belgium, osteopathy is not a legally recognised healthcare profession (as of 2024) — which is why our therapists apply it as an extension of their physiotherapeutic competence.",
          nl: "Fysiotherapie is een medisch gereglementeerde discipline met een sterke focus op evidence-based technieken, bewegingstherapie en functionele revalidatie. Osteopathie beschouwt het lichaam als een eenheid en werkt met meer holistische technieken op gewrichten, weke delen, fascia en viscerale structuren. In België is osteopathie geen wettelijk erkend zorgberoep (stand 2024).",
          tr: "Fizyoterapi, kanıta dayalı tekniklere, hareket terapisine ve fonksiyonel rehabilitasyona güçlü bir odaklanma ile tıbbi olarak düzenlenen bir disiplindir. Osteopati, vücudu bir bütün olarak görür ve eklemler, yumuşak dokular, fasya ve viseral yapılar üzerinde daha bütünsel tekniklerle çalışır. Belçika'da osteopati yasal olarak tanınmış bir sağlık mesleği değildir (2024 itibarıyla).",
          ar: "العلاج الطبيعي تخصص منظم طبيًا مع تركيز قوي على التقنيات القائمة على الأدلة وعلاج الحركة وإعادة التأهيل الوظيفي. تنظر هشاشة العظام إلى الجسم كوحدة وتعمل بتقنيات أكثر شمولية على المفاصل والأنسجة الرخوة واللفافة والهياكل الحشوية. في بلجيكا، هشاشة العظام ليست مهنة صحية معترف بها قانونًا (حتى عام 2024).",
          pl: "Fizjoterapia to medycznie regulowana dyscyplina z silnym naciskiem na techniki oparte na dowodach, terapię ruchem i rehabilitację funkcjonalną. Osteopatia postrzega ciało jako całość i pracuje z bardziej holistycznymi technikami na stawach, tkankach miękkich, powięziach i strukturach trzewnych. W Belgii osteopatia nie jest prawnie uznanym zawodem medycznym (stan na 2024).",
        },
        infographic: "kine-vs-osteo",
      },
      {
        heading: {
          de: "Wann welche Therapieform?",
          fr: "Quelle thérapie choisir et quand ?",
          en: "When which form of therapy?",
          nl: "Wanneer welke therapievorm?",
          tr: "Ne zaman hangi terapi şekli?",
          ar: "متى أي شكل من أشكال العلاج؟",
          pl: "Kiedy jaka forma terapii?",
        },
        body: {
          de: "Physiotherapie ist die erste Wahl bei: akuten Verletzungen, postoperativer Rehabilitation, chronischen Schmerzen mit klarer struktureller Ursache, neurologischen Erkrankungen. Osteopathische Techniken ergänzen die Behandlung sinnvoll bei: diffusen Beschwerden ohne klaren Befund, Verdauungsproblemen mit muskuloskelettaler Komponente, chronischen Spannungskopfschmerzen, Beckenbodendysfunktionen. Bei Praxis Loten integriert Félix Esser beide Ansätze in eine ganzheitliche Behandlung.",
          fr: "La kinésithérapie est le premier choix pour : les blessures aiguës, la rééducation post-opératoire, les douleurs chroniques avec une cause structurelle claire, les maladies neurologiques. Les techniques ostéopathiques complètent utilement le traitement pour : les plaintes diffuses sans diagnostic clair, les problèmes digestifs avec composante musculosquelettique, les céphalées de tension chroniques, les dysfonctions du plancher pelvien. Chez Praxis Loten, Félix Esser intègre les deux approches dans un traitement global.",
          en: "Physiotherapy is the first choice for: acute injuries, post-operative rehabilitation, chronic pain with a clear structural cause, neurological conditions. Osteopathic techniques usefully complement treatment for: diffuse complaints without a clear diagnosis, digestive problems with a musculoskeletal component, chronic tension headaches, pelvic floor dysfunction. At Praxis Loten, Félix Esser integrates both approaches into a holistic treatment.",
          nl: "Fysiotherapie is de eerste keuze bij: acute letsels, postoperatieve revalidatie, chronische pijn met een duidelijke structurele oorzaak, neurologische aandoeningen. Osteopathische technieken vullen de behandeling zinvol aan bij: diffuse klachten zonder duidelijke diagnose, spijsverteringsproblemen met musculoskeletale component, chronische spanningshoofdpijn, bekkenbodemdysfunctie.",
          tr: "Fizyoterapi şunlar için ilk tercihtir: akut yaralanmalar, ameliyat sonrası rehabilitasyon, net yapısal nedeni olan kronik ağrı, nörolojik durumlar. Osteopatik teknikler şunlar için tedaviyi faydalı şekilde tamamlar: net teşhis olmaksızın yaygın şikayetler, kas-iskelet bileşenli sindirim sorunları, kronik gerilim baş ağrıları, pelvik taban disfonksiyonu.",
          ar: "العلاج الطبيعي هو الخيار الأول لـ: الإصابات الحادة، إعادة التأهيل بعد العملية، الألم المزمن ذو السبب البنيوي الواضح، الحالات العصبية. تكمل تقنيات هشاشة العظام العلاج بشكل مفيد لـ: الشكاوى المنتشرة بدون تشخيص واضح، مشاكل الهضم ذات المكون العضلي الهيكلي، الصداع التوتري المزمن، خلل وظيفة قاع الحوض.",
          pl: "Fizjoterapia jest pierwszym wyborem w przypadku: ostrych urazów, rehabilitacji pooperacyjnej, przewlekłego bólu z wyraźną przyczyną strukturalną, chorób neurologicznych. Techniki osteopatyczne pożytecznie uzupełniają leczenie w przypadku: rozlanych dolegliwości bez wyraźnej diagnozy, problemów trawiennych z komponentą mięśniowo-szkieletową, przewlekłych bólów napięciowych głowy, dysfunkcji dna miednicy.",
        },
        infographic: "manual-therapy-pillars",
      },
    ],
    keyPoints: {
      de: ["Physiotherapie: evidenzbasiert, reglementiert", "Osteopathie: ganzheitlich, komplementär", "Félix Esser: ausgebildet in beiden Disziplinen", "Integration beider Ansätze für optimale Ergebnisse", "In Belgien: Osteopathie als Erweiterung der Kinesitherapie"],
      fr: ["Kinésithérapie : fondée sur les preuves, réglementée", "Ostéopathie : holistique, complémentaire", "Félix Esser : formé dans les deux disciplines", "Intégration des deux approches pour des résultats optimaux", "En Belgique : l'ostéopathie comme extension de la kiné"],
      en: ["Physiotherapy: evidence-based, regulated", "Osteopathy: holistic, complementary", "Félix Esser: trained in both disciplines", "Integration of both approaches for optimal results", "In Belgium: osteopathy as an extension of physiotherapy"],
      nl: ["Fysiotherapie: evidence-based, gereglementeerd", "Osteopathie: holistisch, complementair", "Félix Esser: opgeleid in beide disciplines", "Integratie van beide benaderingen voor optimale resultaten", "In België: osteopathie als uitbreiding van kinesitherapie"],
      tr: ["Fizyoterapi: kanıta dayalı, düzenlenmiş", "Osteopati: bütünsel, tamamlayıcı", "Félix Esser: her iki disiplinde eğitimli", "Optimal sonuçlar için her iki yaklaşımın entegrasyonu", "Belçika'da: fizyoterapinin uzantısı olarak osteopati"],
      ar: ["العلاج الطبيعي: قائم على الأدلة، منظم", "هشاشة العظام: شاملة، تكميلية", "Félix Esser: مدرب في كلا التخصصين", "دمج النهجين للحصول على نتائج مثلى", "في بلجيكا: هشاشة العظام كامتداد للعلاج الطبيعي"],
      pl: ["Fizjoterapia: oparta na dowodach, uregulowana", "Osteopatia: holistyczna, komplementarna", "Félix Esser: wyszkolony w obu dyscyplinach", "Integracja obu podejść dla optymalnych wyników", "W Belgii: osteopatia jako rozszerzenie fizjoterapii"],
    },
    ctaText: {
      de: "Unsicher welche Therapie passt? Félix Esser berät Sie gerne.",
      fr: "Vous hésitez entre les deux ? Félix Esser vous conseille.",
      en: "Unsure which therapy fits? Félix Esser is happy to advise you.",
      nl: "Onzeker welke therapie past? Félix Esser adviseert u graag.",
      tr: "Hangi terapinin uygun olduğundan emin değil misiniz? Félix Esser size yardımcı olmaktan memnuniyet duyar.",
      ar: "غير متأكد من العلاج المناسب؟ Félix Esser سعيد بتقديم النصيحة.",
      pl: "Nie jesteś pewien, która terapia pasuje? Félix Esser chętnie doradzi.",
    },
  },

  "bfr-training-rehabilitation": {
    title: {
      de: "Blood Flow Restriction (BFR) Training — Revolution in der Rehabilitation",
      fr: "Blood Flow Restriction (BFR) — une révolution dans la rééducation",
      en: "Blood Flow Restriction (BFR) training — a revolution in rehabilitation",
      nl: "Blood Flow Restriction (BFR) training — een revolutie in revalidatie",
      tr: "Kan Akışı Kısıtlama (BFR) antrenmanı — rehabilitasyonda bir devrim",
      ar: "تدريب تقييد تدفق الدم (BFR) — ثورة في إعادة التأهيل",
      pl: "Trening BFR (ograniczenie przepływu krwi) — rewolucja w rehabilitacji",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "فيزيوتيرابيا الرياضة", pl: "Fizjoterapia Sportowa",
    },
    date: "2024-06-18",
    readMin: 6,
    color: "from-orange-500 to-orange-700",
    authorSlug: "thom-petit",
    authorName: "Thom Petit",
    intro: {
      de: "BFR-Training (Blood Flow Restriction) ist eine Trainingsmethode, bei der eine pneumatische Manschette den venösen Rückfluss während des Trainings partiell einschränkt. Das Ergebnis: signifikante Muskelzuwächse bei nur 20–30 % der Maximallast. Dies macht die Methode revolutionär für die frühe postoperative Rehabilitation.",
      fr: "L'entraînement BFR (Blood Flow Restriction) est une méthode d'entraînement dans laquelle un brassard pneumatique restreint partiellement le retour veineux pendant l'exercice. Le résultat : des gains musculaires significatifs à seulement 20–30 % de la charge maximale. Cela rend la méthode révolutionnaire pour la rééducation post-opératoire précoce.",
      en: "BFR (Blood Flow Restriction) training is a training method in which a pneumatic cuff partially restricts venous return during exercise. The result: significant muscle gains at only 20–30% of the maximum load. This makes the method revolutionary for early post-operative rehabilitation.",
      nl: "BFR-training (Blood Flow Restriction) is een trainingsmethode waarbij een pneumatische manchet de veneuze terugstroom tijdens de training gedeeltelijk beperkt. Het resultaat: significante spiergroei bij slechts 20–30% van de maximale belasting. Dit maakt de methode revolutionair voor vroege postoperatieve revalidatie.",
      tr: "BFR (Kan Akışı Kısıtlama) antrenmanı, egzersiz sırasında pnömatik bir manşonun venöz dönüşü kısmen kısıtladığı bir antrenman yöntemidir. Sonuç: maksimum yükün yalnızca %20–30'unda önemli kas kazanımları. Bu, yöntemi erken ameliyat sonrası rehabilitasyon için devrimci kılmaktadır.",
      ar: "تدريب BFR (تقييد تدفق الدم) هو طريقة تدريب يقيد فيها كُفة هوائية الجريان الوريدي جزئيًا أثناء التمرين. النتيجة: مكاسب عضلية كبيرة عند 20-30٪ فقط من الحمل الأقصى. هذا يجعل الطريقة ثورية للتأهيل المبكر بعد العملية.",
      pl: "Trening BFR (Blood Flow Restriction) to metoda treningowa, w której pneumatyczny mankiet częściowo ogranicza powrót żylny podczas ćwiczeń. Wynik: znaczny przyrost mięśni przy zaledwie 20–30% obciążenia maksymalnego. Sprawia to, że metoda jest rewolucyjna dla wczesnej rehabilitacji pooperacyjnej.",
    },
    sections: [
      {
        heading: {
          de: "Wie funktioniert BFR wissenschaftlich?",
          fr: "Comment fonctionne le BFR scientifiquement ?",
          en: "How does BFR work scientifically?",
          nl: "Hoe werkt BFR wetenschappelijk?",
          tr: "BFR bilimsel olarak nasıl çalışır?",
          ar: "كيف يعمل BFR علميًا؟",
          pl: "Jak BFR działa naukowo?",
        },
        body: {
          de: "Der venöse Stau durch die Manschette führt zu lokaler Hypoxie im Muskelgewebe und erhöht den metabolischen Stress. Dies aktiviert Satellitenzellen und stimuliert die Muskelproteinsynthese — ähnlich wie schweres Krafttraining, aber bei einem Bruchteil der Last. Zusätzlich werden lokale anabole Hormone (IGF-1, HGH) ausgeschüttet. Die Methode ist durch über 300 klinische Studien gut belegt.",
          fr: "La stase veineuse due au brassard crée une hypoxie locale dans le tissu musculaire et augmente le stress métabolique. Cela active les cellules satellites et stimule la synthèse protéique musculaire — similaire à l'entraînement de force intense, mais à une fraction de la charge. De plus, des hormones anabolisantes locales (IGF-1, HGH) sont libérées. La méthode est bien documentée par plus de 300 études cliniques.",
          en: "The venous stasis caused by the cuff creates local hypoxia in the muscle tissue and increases metabolic stress. This activates satellite cells and stimulates muscle protein synthesis — similar to heavy strength training, but at a fraction of the load. Additionally, local anabolic hormones (IGF-1, HGH) are released. The method is well documented by over 300 clinical studies.",
          nl: "De veneuze stase door de manchet creëert lokale hypoxie in het spierweefsel en verhoogt metabolische stress. Dit activeert satellietcellen en stimuleert spierproteïnesynthese — vergelijkbaar met zwaar krachttraining, maar bij een fractie van de belasting. Bovendien worden lokale anabole hormonen (IGF-1, HGH) vrijgemaakt.",
          tr: "Manşonun neden olduğu venöz staz, kas dokusunda lokal hipoksi oluşturur ve metabolik stresi artırır. Bu, uydu hücrelerini aktive eder ve kas protein sentezini uyarır — ağır kuvvet antrenmanına benzer, ancak yükün bir kısmında. Ayrıca lokal anabolik hormonlar (IGF-1, HGH) salınır.",
          ar: "الركود الوريدي الناجم عن الكفة يخلق نقصًا موضعيًا في الأوكسجين في نسيج العضلات ويزيد من الضغط الأيضي. هذا يُنشط الخلايا الساتلية ويحفز تخليق بروتين العضلات — مشابه لتدريب القوة الثقيل، ولكن بجزء من الحمل. بالإضافة إلى ذلك، يتم إطلاق الهرمونات الابتنائية المحلية (IGF-1، HGH).",
          pl: "Zastój żylny spowodowany mankietem tworzy miejscową hipoksję w tkance mięśniowej i zwiększa stres metaboliczny. Aktywuje to komórki satelitarne i stymuluje syntezę białek mięśniowych — podobnie jak ciężki trening siłowy, ale przy ułamku obciążenia. Dodatkowo uwalniane są lokalne hormony anaboliczne (IGF-1, HGH).",
        },
        infographic: "bfr-zone",
      },
      {
        heading: {
          de: "Für welche Patienten ist BFR ideal?",
          fr: "Pour quels patients le BFR est-il idéal ?",
          en: "Which patients is BFR ideal for?",
          nl: "Voor welke patiënten is BFR ideaal?",
          tr: "BFR hangi hastalar için idealdir?",
          ar: "أي المرضى يُعدّ BFR مثاليًا لهم؟",
          pl: "Dla których pacjentów BFR jest idealne?",
        },
        body: {
          de: "BFR ist besonders wertvoll für: frühe postoperative Rehabilitation nach VKB-Rekonstruktion, Knie- oder Hüftprothese, wenn schweres Training noch nicht erlaubt ist; ältere Patienten mit Sarkopenie-Risiko, die schweres Gewichtstraining nicht vertragen; Sportler in der Rückkehr zum Sport nach Verletzung sowie zur Prävention von Muskelschwund bei Immobilisierung. Kontraindikationen: aktive Thrombose, Bluthochdruck ≥180/110, Lymphödem der betroffenen Extremität.",
          fr: "Le BFR est particulièrement précieux pour : la rééducation post-opératoire précoce après reconstruction du LCA, prothèse de genou ou de hanche, lorsque l'entraînement lourd n'est pas encore autorisé ; les patients âgés à risque de sarcopénie qui ne tolèrent pas l'entraînement lourd ; les sportifs en retour au sport après blessure, ainsi que pour prévenir l'atrophie musculaire lors d'une immobilisation.",
          en: "BFR is particularly valuable for: early post-operative rehabilitation after ACL reconstruction, knee or hip prosthesis, when heavy training is not yet permitted; elderly patients at risk of sarcopenia who cannot tolerate heavy weight training; athletes returning to sport after injury, and for preventing muscle wasting during immobilisation. Contraindications: active thrombosis, blood pressure ≥180/110, lymphoedema of the affected limb.",
          nl: "BFR is bijzonder waardevol voor: vroege postoperatieve revalidatie na VKB-reconstructie, knie- of heupprothese, wanneer zwaar trainen nog niet toegestaan is; oudere patiënten met sarcopenie-risico die zwaar gewichtstraining niet verdragen; sporters die terugkeren na blessure, en ter preventie van spieratrofie bij immobilisatie.",
          tr: "BFR özellikle şunlar için değerlidir: ön çapraz bağ rekonstrüksiyonu, diz veya kalça protezi sonrası erken ameliyat sonrası rehabilitasyon (ağır antrenman henüz izin verilmediğinde); ağır ağırlık antrenmanını tolere edemeyen sarkopeni riski taşıyan yaşlı hastalar; yaralanma sonrası spora dönüş yapan sporcular ve immobilizasyon sırasında kas erimesini önlemek.",
          ar: "BFR ذو قيمة خاصة لـ: إعادة التأهيل المبكرة بعد إعادة بناء الرباط الصليبي الأمامي، أطراف الركبة أو الورك، عندما لا يُسمح بعد بالتدريب الثقيل؛ المرضى المسنين المعرضين لخطر الضمور العضلي الذين لا يتحملون التدريب بالأثقال الثقيلة؛ الرياضيين العائدين إلى الرياضة بعد الإصابة، ولمنع هزال العضلات أثناء التثبيت.",
          pl: "BFR jest szczególnie wartościowe dla: wczesnej rehabilitacji pooperacyjnej po rekonstrukcji ACL, protezy kolana lub biodra, gdy ciężki trening nie jest jeszcze dozwolony; starszych pacjentów z ryzykiem sarkopenii, którzy nie tolerują ciężkiego treningu siłowego; sportowców powracających do sportu po urazie oraz zapobiegania zaniku mięśni podczas unieruchomienia.",
        },
        infographic: "progression-rule",
      },
    ],
    keyPoints: {
      de: ["Muskelzuwachs bei nur 20–30 % der Maximallast", "Ideal in der frühen postoperativen Rehabilitation", "Über 300 klinische Studien als Beleg", "Spezialist bei Praxis Loten: Thom Petit", "Sicher bei korrekter Anwendung durch ausgebildete Therapeuten"],
      fr: ["Gain musculaire à seulement 20–30 % de la charge max", "Idéal en rééducation post-opératoire précoce", "Plus de 300 études cliniques comme preuve", "Spécialiste chez Praxis Loten : Thom Petit", "Sûr avec une application correcte par des thérapeutes formés"],
      en: ["Muscle gain at only 20–30% of maximum load", "Ideal in early post-operative rehabilitation", "Over 300 clinical studies as evidence", "Specialist at Praxis Loten: Thom Petit", "Safe with correct application by trained therapists"],
      nl: ["Spiergroei bij slechts 20–30% van de maximale belasting", "Ideaal in vroege postoperatieve revalidatie", "Meer dan 300 klinische studies als bewijs", "Specialist bij Praxis Loten: Thom Petit", "Veilig bij correcte toepassing door getrainde therapeuten"],
      tr: ["Maksimum yükün yalnızca %20–30'unda kas kazanımı", "Erken ameliyat sonrası rehabilitasyonda ideal", "Kanıt olarak 300'den fazla klinik çalışma", "Praxis Loten'de uzman: Thom Petit", "Eğitimli terapistler tarafından doğru uygulandığında güvenli"],
      ar: ["اكتساب عضلي عند 20-30٪ فقط من الحمل الأقصى", "مثالي في إعادة التأهيل المبكرة بعد العملية", "أكثر من 300 دراسة سريرية كدليل", "المتخصص في Praxis Loten: ثوم بيتي", "آمن مع التطبيق الصحيح من قبل المعالجين المدربين"],
      pl: ["Przyrost mięśni przy zaledwie 20–30% obciążenia maksymalnego", "Idealne we wczesnej rehabilitacji pooperacyjnej", "Ponad 300 badań klinicznych jako dowód", "Specjalista w Praxis Loten: Thom Petit", "Bezpieczne przy prawidłowym stosowaniu przez wykwalifikowanych terapeutów"],
    },
    ctaText: {
      de: "BFR-Training interessiert Sie? Thom Petit erklärt Ihnen, ob es für Ihre Situation geeignet ist.",
      fr: "L'entraînement BFR vous intéresse ? Thom Petit vous explique si c'est adapté à votre situation.",
      en: "Interested in BFR training? Thom Petit will explain whether it is suitable for your situation.",
      nl: "Geïnteresseerd in BFR-training? Thom Petit legt u uit of het geschikt is voor uw situatie.",
      tr: "BFR antrenmanıyla ilgileniyor musunuz? Thom Petit, bunun durumunuza uygun olup olmadığını açıklayacak.",
      ar: "هل تهتم بتدريب BFR؟ ثوم بيتي يشرح لك ما إذا كان مناسبًا لوضعك.",
      pl: "Interesujesz się treningiem BFR? Thom Petit wyjaśni, czy jest odpowiedni dla Twojej sytuacji.",
    },
  },
};

const UI: Record<LangKey, {
  backBlog: string; readMin: string; keyPoints: string; bookCta: string; authorBy: string;
  bibliography: string; onThisPage: string;
}> = {
  de: { backBlog: "← Zurück zum Blog", readMin: "min Lesezeit", keyPoints: "Das Wichtigste auf einen Blick", bookCta: "Termin buchen", authorBy: "Geschrieben von", bibliography: "Bibliographie", onThisPage: "Auf dieser Seite" },
  fr: { backBlog: "← Retour au blog", readMin: "min de lecture", keyPoints: "L'essentiel en un coup d'œil", bookCta: "Prendre RDV", authorBy: "Écrit par", bibliography: "Bibliographie", onThisPage: "Sur cette page" },
  en: { backBlog: "← Back to blog", readMin: "min read", keyPoints: "Key takeaways", bookCta: "Book appointment", authorBy: "Written by", bibliography: "References", onThisPage: "On this page" },
  nl: { backBlog: "← Terug naar blog", readMin: "min leestijd", keyPoints: "De belangrijkste punten", bookCta: "Afspraak boeken", authorBy: "Geschreven door", bibliography: "Bibliografie", onThisPage: "Op deze pagina" },
  tr: { backBlog: "← Bloga dön", readMin: "dk okuma", keyPoints: "Temel çıkarımlar", bookCta: "Randevu al", authorBy: "Yazan", bibliography: "Kaynakça", onThisPage: "Bu sayfada" },
  ar: { backBlog: "← العودة إلى المدونة", readMin: "دقيقة قراءة", keyPoints: "النقاط الرئيسية", bookCta: "احجز موعدًا", authorBy: "كتبه", bibliography: "المراجع", onThisPage: "في هذه الصفحة" },
  pl: { backBlog: "← Powrót do bloga", readMin: "min czytania", keyPoints: "Najważniejsze punkty", bookCta: "Zarezerwuj wizytę", authorBy: "Napisane przez", bibliography: "Bibliografia", onThisPage: "Na tej stronie" },
};

function formatDate(dateStr: string, lang: LangKey) {
  const d = new Date(dateStr);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  const localeMap: Record<LangKey, string> = { de: "de-DE", fr: "fr-FR", en: "en-GB", nl: "nl-NL", tr: "tr-TR", ar: "ar-EG", pl: "pl-PL" };
  return d.toLocaleDateString(localeMap[lang], opts);
}

export function BlogArticlePageContent({ slug }: { slug: string }) {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const article = ARTICLES[slug];

  if (!article) return null;

  const isRtl = lang === "ar";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <AnimatedSection className="mb-8">
          <Link href="/blog" className="text-sm text-neutral-500 hover:text-[#2b3186] transition-colors font-medium">
            {ui.backBlog}
          </Link>
        </AnimatedSection>

        {/* Hero image (optional, above banner) */}
        {article.heroImage && (
          <AnimatedSection className="mb-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt[lang] ?? article.heroImage.alt.fr ?? ""}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        )}

        {/* Header banner */}
        <AnimatedSection className="mb-10">
          <div className={`relative overflow-hidden bg-gradient-to-br ${article.color} rounded-3xl p-8 sm:p-12 text-white shadow-xl`}>
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                {article.category[lang]}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-5 max-w-4xl">
                {article.title[lang]}
              </h1>
              <div className="flex items-center gap-5 text-white/80 text-sm">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {article.readMin} {ui.readMin}
                </span>
                <span className="opacity-50">•</span>
                <time>{formatDate(article.date, lang)}</time>
                <span className="opacity-50">•</span>
                <span>{article.authorName}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <article className="lg:col-span-2 space-y-6">

            {/* Intro with drop cap */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
                <p className={`text-neutral-700 leading-relaxed text-lg ${!isRtl ? "first-letter:text-6xl first-letter:font-extrabold first-letter:text-[#2b3186] first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1" : ""}`}>
                  {article.intro[lang]}
                </p>
              </div>
            </AnimatedSection>

            {/* Sections */}
            {article.sections.map((section, i) => (
              <AnimatedSection key={i} delay={0.05 * (i + 1)}>
                <div id={`section-${i}`} className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm scroll-mt-32">
                  <h2 className="text-2xl font-extrabold text-neutral-900 mb-5 leading-tight tracking-tight">
                    <span className={`inline-block w-1 h-6 align-middle bg-gradient-to-b ${article.color} rounded-full ${isRtl ? "ml-3" : "mr-3"}`} />
                    {section.heading[lang]}
                  </h2>
                  <p className="text-neutral-700 leading-[1.75] text-base whitespace-pre-line">
                    {section.body[lang]}
                  </p>
                  {section.image && (
                    <figure className="mt-6 -mx-2">
                      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt[lang] ?? section.image.alt.fr ?? ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 768px"
                          className="object-cover"
                        />
                      </div>
                      {section.image.caption?.[lang] && (
                        <figcaption className="mt-2 text-xs italic text-neutral-500 text-center">
                          {section.image.caption[lang]}
                        </figcaption>
                      )}
                    </figure>
                  )}
                  {section.infographic && (
                    <div className="mt-2 -mx-2">
                      <InfographicSlot kind={section.infographic} lang={lang} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}

            {/* Disclaimer */}
            {article.disclaimer && (
              <AnimatedSection delay={0.3}>
                <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-amber-50/70 border border-amber-200/70">
                  <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed italic">
                    {article.disclaimer[lang]}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Bibliography */}
            {article.bibliography && article.bibliography.length > 0 && (
              <AnimatedSection delay={0.35}>
                <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-5 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {ui.bibliography}
                  </h3>
                  <ol className="space-y-3 list-none">
                    {article.bibliography.map((ref, i) => (
                      <li key={i} className="flex gap-3 text-sm text-neutral-600 leading-relaxed">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 text-neutral-500 text-xs font-bold flex items-center justify-center">
                          {i + 1}
                        </span>
                        <span className="flex-1 italic">{ref}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">

            <div className="sticky top-28 space-y-6">

              {/* Table of contents */}
              {article.sections.length > 1 && (
                <AnimatedSection delay={0.1}>
                  <nav className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-sm">
                      <ListOrdered className="w-4 h-4 text-[#76b82a]" />
                      {ui.onThisPage}
                    </h3>
                    <ul className="space-y-2.5">
                      {article.sections.map((section, i) => (
                        <li key={i}>
                          <a
                            href={`#section-${i}`}
                            className="flex items-start gap-2 text-sm text-neutral-600 hover:text-[#2b3186] transition-colors group"
                          >
                            <span className="text-xs font-mono text-neutral-400 group-hover:text-[#76b82a] mt-0.5 flex-shrink-0">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="leading-snug">{section.heading[lang]}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </AnimatedSection>
              )}

              {/* Key points */}
              <AnimatedSection delay={0.15}>
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                  <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#76b82a]" />
                    {ui.keyPoints}
                  </h3>
                  <ul className="space-y-3">
                    {article.keyPoints[lang].map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#76b82a] mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Author + CTA */}
              <AnimatedSection delay={0.25}>
                <div className="relative overflow-hidden bg-gradient-to-br from-[#2b3186] to-[#1e2260] rounded-2xl p-6 text-white shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#76b82a]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 rounded-full bg-white/10 overflow-hidden flex-shrink-0 border-2 border-white/20">
                        <Image
                          src={`/avatars/${article.authorSlug}.jpg`}
                          alt={article.authorName}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">{ui.authorBy}</p>
                        <Link
                          href={`/team/${article.authorSlug}`}
                          className="text-sm font-bold text-white hover:text-[#76b82a] transition-colors"
                        >
                          {article.authorName}
                        </Link>
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-5 leading-relaxed">
                      {article.ctaText[lang]}
                    </p>
                    <Link
                      href="/termin"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-xl font-semibold transition-colors text-sm shadow-lg shadow-[#76b82a]/20"
                    >
                      <CalendarPlus className="w-4 h-4" />
                      {ui.bookCta}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
