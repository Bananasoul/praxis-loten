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
  "doser-activite-douleur": {
    title: {
      de: "Bewegen trotz Schmerzen — wie Sie die richtige Dosis finden",
      fr: "Bouger malgré la douleur — comment trouver la bonne dose",
      en: "Moving with Pain — How to Find the Right Dose",
      nl: "Bewegen met pijn — hoe vindt u de juiste dosis?",
      tr: "Ağrıyla hareket etmek — doğru dozu nasıl bulursunuz?",
      ar: "الحركة مع الألم — كيف تجد الجرعة المناسبة؟",
      pl: "Ruch mimo bólu — jak znaleźć odpowiednią dawkę?",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    date: "2026-05-07",
    readMin: 6,
    color: "from-[#0e7490] to-[#155e75]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "« Ich habe Schmerzen — soll ich aufhören oder weitermachen? » Diese Frage haben Sie sich wahrscheinlich schon gestellt. Lange Zeit war die medizinische Antwort einfach: Wenn es weh tut, hört man auf. Die Wissenschaft hat dieses Dogma völlig auf den Kopf gestellt. Forschung in Physiotherapie und Schmerzwissenschaft zeigt heute, dass Bewegung — selbst mit etwas Schmerz — oft die beste Behandlung ist. Vorausgesetzt, man kennt die richtige Dosis. In der Praxis Loten in Eupen erklären wir Ihnen, wie Sie das richtige Maß finden — mit einfachen, konkreten Werkzeugen.",
      fr: "« J'ai mal — est-ce que je dois m'arrêter ou continuer à bouger ? » Cette question, vous vous l'êtes probablement déjà posée. Pendant longtemps, la réponse médicale a été simple : si ça fait mal, on arrête. La science a complètement bousculé ce dogme. La recherche en kinésithérapie et en sciences de la douleur montre aujourd'hui que bouger — même avec un peu de douleur — est souvent le meilleur traitement. Encore faut-il connaître la bonne dose. Au cabinet Praxis Loten à Eupen, nous vous expliquons comment trouver le juste équilibre, avec des outils simples et concrets.",
      en: "« I'm in pain — should I stop or keep moving? » You've probably asked yourself this question before. For a long time, the medical answer was simple: if it hurts, stop. Science has completely overturned this dogma. Research in physiotherapy and pain science now shows that moving — even with some pain — is often the best treatment. The key is knowing the right dose. At Praxis Loten in Eupen, we'll explain how to find the right balance with simple, practical tools.",
      nl: "« Ik heb pijn — moet ik stoppen of blijven bewegen? » Deze vraag heeft u zich waarschijnlijk al eens gesteld. Lange tijd was het medische antwoord eenvoudig: als het pijn doet, stopt u. De wetenschap heeft dit dogma volledig op zijn kop gezet. Onderzoek in fysiotherapie en pijnwetenschap toont vandaag aan dat bewegen — zelfs met wat pijn — vaak de beste behandeling is. Op voorwaarde dat u de juiste dosering kent. Bij Praxis Loten in Eupen leggen we u uit hoe u het juiste evenwicht vindt, met eenvoudige en concrete hulpmiddelen.",
      tr: "« Ağrım var — durmalı mıyım yoksa hareket etmeye devam mı etmeliyim? » Bu soruyu muhtemelen kendinize daha önce sormuşsunuzdur. Uzun süre boyunca tıbbi cevap basitti: ağrıyorsa, durun. Bilim bu dogmayı tamamen tersine çevirdi. Fizyoterapi ve ağrı bilimindeki araştırmalar bugün gösteriyor ki — biraz ağrıyla bile — hareket etmek çoğu zaman en iyi tedavidir. Yeter ki doğru dozu bilelim. Eupen'deki Praxis Loten kliniğinde, basit ve somut araçlarla doğru dengeyi nasıl bulacağınızı anlatıyoruz.",
      ar: "«أشعر بالألم — هل عليّ أن أتوقف أم أستمرّ في الحركة؟» ربما طرحتَ هذا السؤال على نفسك مسبقًا. لفترة طويلة، كان الجواب الطبي بسيطًا: إذا آلمك الأمر، توقّف. لقد قلب العلم هذا المفهوم رأسًا على عقب. تُظهر أبحاث العلاج الطبيعي وعلوم الألم اليوم أن الحركة — حتى مع بعض الألم — هي غالبًا أفضل علاج. شرط أن نعرف الجرعة المناسبة. في عيادة براكسيس لوتن في أوبن، نوضّح لك كيف تجد التوازن السليم بأدوات بسيطة وعملية.",
      pl: "« Boli mnie — mam przestać czy nadal się ruszać? » Pewnie zadawałeś już sobie to pytanie. Przez długi czas odpowiedź medyczna była prosta: jeśli boli, przestań. Nauka całkowicie odwróciła ten dogmat. Badania w fizjoterapii i nauce o bólu pokazują dziś, że ruch — nawet z odrobiną bólu — jest często najlepszym lekarstwem. Pod warunkiem, że znamy właściwą dawkę. W Praxis Loten w Eupen wyjaśniamy, jak znaleźć właściwą równowagę za pomocą prostych, konkretnych narzędzi.",
    },
    heroImage: {
      src: "/blog/doser-activite-douleur/hero.jpg",
      alt: {
        de: "Frau spaziert friedlich durch einen grünen Waldweg in der Natur",
        fr: "Femme marchant paisiblement sur un sentier forestier vert dans la nature",
        en: "Woman walking peacefully along a green forest path in nature",
        nl: "Vrouw die vreedzaam langs een groen bospad in de natuur loopt",
        tr: "Kadın doğada yeşil bir orman yolu boyunca huzur içinde yürüyor",
        ar: "امرأة تمشي بسلام على طريق غابة خضراء في الطبيعة",
        pl: "Kobieta idąca spokojnie zieloną ścieżką leśną w naturze",
      },
    },
    sections: [
      {
        heading: {
          de: "Der Mythos zum Aufräumen", fr: "Le mythe à déconstruire", en: "The myth to dismantle",
          nl: "De mythe ontkracht", tr: "Çürütülecek mit", ar: "الخرافة التي يجب تفكيكها", pl: "Mit do obalenia",
        },
        body: {
          de: "Jahrzehntelang war der medizinische Reflex bei Schmerzen derselbe: ausruhen, ruhigstellen, abwarten. Diese Sicht beruht auf einer logischen, aber unvollständigen Idee — Schmerz wäre immer das Spiegelbild einer Schädigung, die geschützt werden muss.\n\nDie moderne Wissenschaft erzählt eine andere Geschichte. Bei anhaltenden muskuloskelettalen Schmerzen schadet absolute Ruhe mehr, als sie nützt. Die Muskeln werden schwächer, die Gelenke verlieren an Beweglichkeit, das Nervensystem wird empfindlicher. Folge: Der Schmerz verstärkt sich, und die Bewegungsangst nistet sich ein.\n\nIm Gegenteil zeigen Studien, dass Bewegung — auch mit etwas Unbehagen — Schmerzen reduziert, die Funktion wiederherstellt und das Vertrauen in den eigenen Körper stärkt. Die Herausforderung besteht also nicht darin, zwischen Ruhe und Aktivität zu wählen, sondern die richtige Bewegungsdosis zu finden: weder zu viel noch zu wenig. Was wir manchmal mit dem Satz zusammenfassen: « Mehr ist nicht immer besser. »",
          fr: "Pendant des décennies, le réflexe médical face à une douleur a été le même : reposer, immobiliser, attendre que ça passe. Cette vision repose sur une idée logique mais incomplète — la douleur serait toujours le reflet d'un dommage qu'il faudrait protéger.\n\nLa science moderne raconte une autre histoire. Pour les douleurs musculo-squelettiques persistantes, le repos absolu fait plus de mal que de bien. Les muscles s'affaiblissent, les articulations perdent en mobilité, le système nerveux devient plus sensible. Résultat : la douleur s'aggrave, et la peur de bouger s'installe.\n\nÀ l'inverse, les études montrent que bouger — y compris avec un peu d'inconfort — réduit la douleur, restaure la fonction et renforce la confiance en son corps. Le défi n'est donc pas de choisir entre repos et activité, mais de trouver la bonne dose de mouvement : ni trop, ni trop peu. Ce que l'on résume parfois par : « plus n'est pas toujours mieux ».",
          en: "For decades, the medical reflex when facing pain was the same: rest, immobilise, wait for it to pass. This view rests on a logical but incomplete idea — pain would always reflect damage that needs to be protected.\n\nModern science tells a different story. For persistent musculoskeletal pain, absolute rest does more harm than good. Muscles weaken, joints lose mobility, the nervous system becomes more sensitive. Result: pain worsens, and fear of movement sets in.\n\nConversely, studies show that moving — even with some discomfort — reduces pain, restores function and rebuilds trust in your body. The challenge is therefore not to choose between rest and activity, but to find the right dose of movement: not too much, not too little. As we sometimes put it: « more is not always better ».",
          nl: "Decennialang was de medische reflex bij pijn dezelfde: rusten, immobiliseren, wachten tot het overgaat. Deze visie berust op een logisch maar onvolledig idee — pijn zou altijd een weerspiegeling zijn van schade die beschermd moet worden.\n\nDe moderne wetenschap vertelt een ander verhaal. Bij aanhoudende musculoskeletale pijn doet absolute rust meer kwaad dan goed. Spieren verzwakken, gewrichten verliezen mobiliteit, het zenuwstelsel wordt gevoeliger. Resultaat: de pijn verergert, en bewegingsangst nestelt zich in.\n\nOmgekeerd tonen studies aan dat bewegen — zelfs met wat ongemak — pijn vermindert, de functie herstelt en het vertrouwen in het eigen lichaam versterkt. De uitdaging is dus niet kiezen tussen rust en activiteit, maar de juiste dosis beweging vinden: niet te veel, niet te weinig.",
          tr: "On yıllar boyunca ağrı karşısındaki tıbbi refleks aynıydı: dinlen, hareketsiz kal, geçmesini bekle. Bu bakış mantıklı ama eksik bir fikre dayanır — ağrı her zaman korunması gereken bir hasarın yansıması olurdu.\n\nModern bilim farklı bir hikâye anlatıyor. Kalıcı kas-iskelet ağrılarında mutlak dinlenme iyiden çok zarar verir. Kaslar zayıflar, eklemler hareketliliğini kaybeder, sinir sistemi daha hassas hale gelir. Sonuç: ağrı kötüleşir ve hareket korkusu yerleşir.\n\nTersine, çalışmalar gösteriyor ki — biraz rahatsızlıkla bile — hareket etmek ağrıyı azaltır, işlevi geri kazandırır ve bedeninize olan güveni güçlendirir. O halde zorluk dinlenme ile aktivite arasında seçim yapmak değil, doğru hareket dozunu bulmaktır.",
          ar: "لعقود طويلة، كان رد الفعل الطبي تجاه الألم واحدًا: الراحة، التثبيت، انتظار زواله. تستند هذه النظرة إلى فكرة منطقية لكن غير كاملة — أن يكون الألم دائمًا انعكاسًا لضرر يجب حمايته.\n\nيروي العلم الحديث قصة مختلفة. في الألم العضلي الهيكلي المستمر، الراحة المطلقة تضرّ أكثر مما تنفع. تضعف العضلات، تفقد المفاصل مرونتها، ويصبح الجهاز العصبي أكثر حساسية. النتيجة: يتفاقم الألم، ويترسّخ الخوف من الحركة.\n\nعلى العكس، تُظهر الدراسات أن الحركة — حتى مع بعض الانزعاج — تُقلّل الألم وتُعيد الوظيفة وتُعزّز الثقة بالجسم. التحدي إذن ليس الاختيار بين الراحة والنشاط، بل العثور على الجرعة المناسبة من الحركة: لا كثيرة ولا قليلة.",
          pl: "Przez dziesięciolecia odruch medyczny w obliczu bólu był ten sam: odpoczywać, unieruchomić, czekać aż przejdzie. To spojrzenie opiera się na logicznej, ale niekompletnej idei — ból zawsze odzwierciedlałby uszkodzenie, które trzeba chronić.\n\nWspółczesna nauka opowiada inną historię. W przewlekłym bólu mięśniowo-szkieletowym całkowity odpoczynek bardziej szkodzi niż pomaga. Mięśnie słabną, stawy tracą ruchomość, układ nerwowy staje się bardziej wrażliwy. Skutek: ból się nasila, a lęk przed ruchem się utrwala.\n\nZ drugiej strony badania pokazują, że ruch — nawet z odrobiną dyskomfortu — zmniejsza ból, przywraca funkcję i wzmacnia zaufanie do własnego ciała. Wyzwanie nie polega więc na wyborze między odpoczynkiem a aktywnością, ale na znalezieniu właściwej dawki ruchu: ani za dużo, ani za mało.",
        },
      },
      {
        heading: {
          de: "Bewegung als Medizin", fr: "Le mouvement comme médicament", en: "Movement as medicine",
          nl: "Beweging als medicijn", tr: "İlaç olarak hareket", ar: "الحركة كدواء", pl: "Ruch jako lekarstwo",
        },
        body: {
          de: "Ihre Gewebe — Muskeln, Sehnen, Knorpel, Knochen — sind keine starren Strukturen. Sie sind lebendig und brauchen Stimulation, um gesund zu bleiben. Ohne regelmäßige mechanische Belastung werden sie schwächer. Mit einer angepassten Dosis stärken und reparieren sie sich selbst.\n\nDieses Phänomen nennt man Mechanotransduktion: Bewegung und moderate Belastungen senden Ihren Zellen das Signal « bleib stark, passe dich an ». Genau das passiert, wenn Sie spazieren gehen, eine Einkaufstasche tragen oder Rad fahren.\n\nNoch beeindruckender: Bewegung wirkt als natürliches Schmerzmittel. Beim Bewegen setzt Ihr Körper Substanzen frei, die das Nervensystem beruhigen und die Schmerzempfindlichkeit verringern. Deshalb spüren viele Patienten, wie ihr Schmerz während oder nach einer gut dosierten Trainingseinheit nachlässt — und nicht umgekehrt.",
          fr: "Vos tissus — muscles, tendons, cartilages, os — ne sont pas des structures inertes. Ils sont vivants, et ils ont besoin de stimulation pour rester en bonne santé. Sans contrainte mécanique régulière, ils s'affaiblissent. Avec une dose adaptée, ils se renforcent et se réparent.\n\nC'est ce qu'on appelle la mécanotransduction : le mouvement et les charges modérées envoient à vos cellules un signal qui dit « reste solide, adapte-toi ». C'est exactement ce qui se produit lorsque vous marchez, soulevez un sac de courses ou faites du vélo.\n\nPlus impressionnant encore : l'exercice a un effet antidouleur naturel. En bougeant, votre corps libère des substances qui calment le système nerveux et diminuent la sensibilité à la douleur. C'est pour cela que beaucoup de patients sentent leur douleur diminuer pendant ou après une séance bien dosée — et non l'inverse.",
          en: "Your tissues — muscles, tendons, cartilage, bones — are not inert structures. They are alive, and they need stimulation to stay healthy. Without regular mechanical load, they weaken. With the right dose, they strengthen and repair themselves.\n\nThis is called mechanotransduction: movement and moderate loads send your cells a signal that says « stay strong, adapt ». This is exactly what happens when you walk, carry a grocery bag or cycle.\n\nEven more remarkable: exercise has a natural painkilling effect. When you move, your body releases substances that calm the nervous system and reduce pain sensitivity. That's why many patients feel their pain decrease during or after a well-dosed session — not the other way around.",
          nl: "Uw weefsels — spieren, pezen, kraakbeen, botten — zijn geen inerte structuren. Ze zijn levend en hebben stimulatie nodig om gezond te blijven. Zonder regelmatige mechanische belasting worden ze zwakker. Met een aangepaste dosis versterken en herstellen ze zich.\n\nDat wordt mechanotransductie genoemd: beweging en gematigde belastingen sturen uw cellen een signaal dat zegt « blijf sterk, pas u aan ». Dat gebeurt precies wanneer u wandelt, een boodschappentas tilt of fietst.\n\nNog indrukwekkender: bewegen heeft een natuurlijk pijnstillend effect. Door te bewegen geeft uw lichaam stoffen vrij die het zenuwstelsel kalmeren en de pijngevoeligheid verminderen. Daarom voelen veel patiënten hun pijn afnemen tijdens of na een goed gedoseerde sessie — niet andersom.",
          tr: "Dokularınız — kaslar, tendonlar, kıkırdak, kemikler — atıl yapılar değildir. Canlıdırlar ve sağlıklı kalmak için uyarıma ihtiyaç duyarlar. Düzenli mekanik yüklenme olmadan zayıflarlar. Uygun bir dozla güçlenir ve kendilerini onarırlar.\n\nBuna mekanotransdüksiyon denir: hareket ve orta düzey yükler hücrelerinize « güçlü kal, uyum sağla » mesajını gönderir. Yürüdüğünüzde, bir alışveriş çantası kaldırdığınızda ya da bisiklete bindiğinizde tam olarak bu olur.\n\nDahası: egzersizin doğal bir ağrı kesici etkisi vardır. Hareket ederken vücudunuz, sinir sistemini sakinleştiren ve ağrı duyarlılığını azaltan maddeler salgılar. Bu yüzden birçok hasta, iyi doz ayarlanmış bir seans sırasında veya sonrasında ağrılarının azaldığını hisseder — tersini değil.",
          ar: "أنسجتك — العضلات والأوتار والغضاريف والعظام — ليست هياكل خاملة. إنها حيّة، وتحتاج إلى التحفيز لتبقى بصحة جيدة. بدون تحميل ميكانيكي منتظم، تضعف. وبجرعة مناسبة، تقوى وتُصلح نفسها.\n\nهذا ما يُسمّى النقل الميكانيكي: تُرسل الحركة والأحمال المعتدلة إلى خلاياك إشارة تقول « ابقَ قويًا، تكيّف ». وهذا تحديدًا ما يحدث عندما تمشي، أو تحمل كيس تسوق، أو تركب الدراجة.\n\nوأكثر إثارة للإعجاب: للتمارين تأثير مُسكّن طبيعي للألم. عندما تتحرك، يُطلق جسمك مواد تُهدّئ الجهاز العصبي وتُقلّل من الحساسية للألم. لهذا يشعر كثير من المرضى بانخفاض الألم خلال أو بعد جلسة بجرعة مناسبة — وليس العكس.",
          pl: "Twoje tkanki — mięśnie, ścięgna, chrząstka, kości — nie są bezwładnymi strukturami. Są żywe i potrzebują stymulacji, by pozostać zdrowe. Bez regularnego obciążenia mechanicznego słabną. Przy odpowiedniej dawce wzmacniają się i regenerują.\n\nNazywa się to mechanotransdukcją: ruch i umiarkowane obciążenia wysyłają Twoim komórkom sygnał « pozostań silny, adaptuj się ». Dokładnie to dzieje się, gdy spacerujesz, niesiesz torbę zakupów lub jeździsz na rowerze.\n\nJeszcze bardziej imponujące: ćwiczenia mają naturalne działanie przeciwbólowe. Podczas ruchu organizm uwalnia substancje, które uspokajają układ nerwowy i zmniejszają wrażliwość na ból. Dlatego wielu pacjentów odczuwa, że ich ból maleje podczas lub po dobrze dawkowanej sesji — a nie odwrotnie.",
        },
        infographic: "movement",
      },
      {
        heading: {
          de: "Die 24-Stunden-Regel", fr: "La règle des 24 heures", en: "The 24-hour rule",
          nl: "De 24-uursregel", tr: "24 saat kuralı", ar: "قاعدة الـ 24 ساعة", pl: "Zasada 24 godzin",
        },
        body: {
          de: "Wie wissen Sie, ob Ihre Bewegungsdosis stimmt? Eine einfache, wissenschaftlich validierte Regel kann Ihnen helfen:\n\n« Ein Schmerz während oder direkt nach der Anstrengung ist akzeptabel — vorausgesetzt, er kehrt innerhalb von 24 Stunden auf sein gewohntes Niveau zurück. »\n\nKonkret: Wenn Sie 30 Minuten spazieren gehen und etwas Unbehagen spüren, ist das kein schlechtes Zeichen. Am nächsten Morgen sollte Ihr Schmerz wieder auf dem Niveau des Vortags sein (oder besser). In diesem Fall sind Sie in der richtigen Zone — und Sie können fortfahren.\n\nWenn der Schmerz am nächsten Tag jedoch stärker ist, mehrere Tage anhält oder Sie zum Hinken bringt, war die Dosis zu hoch. Keine Panik: Es genügt, in der nächsten Sitzung etwas zu reduzieren (Dauer, Intensität oder Widerstand) und langsamer fortzuschreiten. Unter vielen Strategien, die wir individuell anpassen, bleibt diese Regel eine der einfachsten und nützlichsten im Alltag.",
          fr: "Comment savoir si votre dose de mouvement est correcte ? Une règle simple, validée par la recherche, peut vous guider :\n\n« Une douleur pendant ou juste après l'effort est acceptable, à condition qu'elle revienne à son niveau habituel dans les 24 heures. »\n\nConcrètement : si vous marchez 30 minutes et que vous ressentez un peu de gêne, ce n'est pas un mauvais signe. Le lendemain matin, votre douleur doit être revenue à ce qu'elle était la veille (ou mieux). Dans ce cas, vous êtes dans la bonne zone — et vous pouvez continuer.\n\nSi en revanche la douleur est encore plus forte le lendemain, qu'elle persiste plusieurs jours, ou qu'elle vous fait boiter, c'est que la dose était trop importante. Pas de panique : il suffit de réduire un peu (durée, intensité ou résistance) lors de la prochaine séance, et de progresser plus doucement. Parmi de nombreuses stratégies que nous adaptons à chacun, cette règle reste l'une des plus simples et des plus utiles au quotidien.",
          en: "How do you know if your movement dose is right? A simple, research-validated rule can guide you:\n\n« Pain during or right after the effort is acceptable, as long as it returns to its usual level within 24 hours. »\n\nIn practice: if you walk for 30 minutes and feel some discomfort, it's not a bad sign. The next morning, your pain should be back to what it was the day before (or better). In that case, you're in the right zone — and you can continue.\n\nHowever, if the pain is even stronger the next day, persists for several days, or makes you limp, the dose was too high. No need to panic: simply reduce a little (duration, intensity or resistance) at the next session and progress more gradually. Among many strategies we tailor to each person, this rule remains one of the simplest and most useful in daily life.",
          nl: "Hoe weet u of uw bewegingsdosis juist is? Een eenvoudige, wetenschappelijk gevalideerde regel kan u leiden:\n\n« Pijn tijdens of vlak na de inspanning is aanvaardbaar, op voorwaarde dat ze binnen 24 uur naar haar gewone niveau terugkeert. »\n\nConcreet: als u 30 minuten wandelt en wat ongemak voelt, is dat geen slecht teken. De volgende ochtend zou uw pijn op het niveau van de vorige dag moeten zijn (of beter). In dat geval zit u in de juiste zone — en kunt u doorgaan.\n\nAls de pijn de volgende dag echter erger is, meerdere dagen aanhoudt of u doet hinken, was de dosis te hoog. Geen paniek: het volstaat om bij de volgende sessie iets te verminderen (duur, intensiteit of weerstand) en wat rustiger op te bouwen. Onder vele strategieën die we voor elke persoon afstemmen, blijft deze regel een van de eenvoudigste en nuttigste in het dagelijks leven.",
          tr: "Hareket dozunuzun doğru olup olmadığını nasıl anlarsınız? Araştırmalarla doğrulanmış basit bir kural size yol gösterebilir:\n\n« Eforun sırasında veya hemen sonrasında bir ağrı kabul edilebilir — yeter ki 24 saat içinde alışılmış seviyesine geri dönsün. »\n\nSomut olarak: 30 dakika yürür ve biraz rahatsızlık hissederseniz, bu kötü bir işaret değildir. Ertesi sabah ağrınız bir önceki günün seviyesine (veya daha iyiye) dönmüş olmalıdır. Bu durumda, doğru bölgedesiniz — ve devam edebilirsiniz.\n\nAma ağrı ertesi gün daha şiddetliyse, birkaç gün sürüyorsa veya sizi topallatıyorsa, doz çok yüksekti. Panik yok: bir sonraki seansta biraz azaltmak (süre, yoğunluk veya direnç) ve daha yavaş ilerlemek yeterlidir. Her kişiye uyarladığımız pek çok stratejiden biri olarak, bu kural günlük yaşamda en basit ve en yararlı olanlardan biri olmaya devam ediyor.",
          ar: "كيف تعرف ما إذا كانت جرعة الحركة لديك مناسبة؟ قاعدة بسيطة، أكدّتها الأبحاث، يمكن أن ترشدك:\n\n« الألم أثناء المجهود أو بعده مباشرة مقبول، شرط أن يعود إلى مستواه المعتاد خلال 24 ساعة. »\n\nبشكل ملموس: إذا مشيتَ 30 دقيقة وشعرتَ ببعض الانزعاج، فهذا ليس علامة سيئة. في صباح اليوم التالي، يجب أن يكون ألمك قد عاد إلى ما كان عليه في اليوم السابق (أو أفضل). في هذه الحالة، أنت في المنطقة الصحيحة — ويمكنك الاستمرار.\n\nأما إذا كان الألم أشد في اليوم التالي، أو استمر عدة أيام، أو جعلك تعرج، فإن الجرعة كانت كبيرة. لا داعي للقلق: يكفي أن تُخفّض قليلًا (المدة أو الشدة أو المقاومة) في الجلسة التالية، وأن تتقدم بشكل أكثر هدوءًا. ضمن أساليب عديدة نُكيّفها مع كل شخص، تظل هذه القاعدة واحدة من أبسطها وأكثرها فائدة في الحياة اليومية.",
          pl: "Skąd wiadomo, czy Twoja dawka ruchu jest właściwa? Prosta, naukowo potwierdzona zasada może Cię prowadzić:\n\n« Ból podczas lub bezpośrednio po wysiłku jest akceptowalny — pod warunkiem, że w ciągu 24 godzin wróci do swojego zwykłego poziomu. »\n\nW praktyce: jeśli idziesz na 30-minutowy spacer i czujesz lekki dyskomfort, to nie jest zły znak. Następnego ranka Twój ból powinien wrócić do poziomu z poprzedniego dnia (lub być mniejszy). W takim razie jesteś we właściwej strefie — i możesz kontynuować.\n\nJeśli jednak następnego dnia ból jest jeszcze silniejszy, utrzymuje się przez kilka dni lub powoduje, że kulejesz, to dawka była za duża. Bez paniki: wystarczy zmniejszyć trochę (czas trwania, intensywność lub opór) podczas kolejnej sesji i postępować łagodniej. Wśród wielu strategii, które dostosowujemy do każdej osoby, ta zasada pozostaje jedną z najprostszych i najbardziej użytecznych w codziennym życiu.",
        },
        image: {
          src: "/blog/doser-activite-douleur/section-3.jpg",
          alt: {
            de: "Frau wacht friedlich in einem hellen Schlafzimmer auf und beginnt ihren Tag mit Vitalität",
            fr: "Femme se réveillant paisiblement dans une chambre lumineuse et commençant sa journée avec vitalité",
            en: "Woman waking up peacefully in a bright bedroom and starting her day with vitality",
            nl: "Vrouw die vreedzaam in een helder slaapkamer wakker wordt en met vitaliteit aan haar dag begint",
            tr: "Kadın aydınlık bir yatak odasında huzur içinde uyanıyor ve gücü ile günü başlatıyor",
            ar: "امرأة تستيقظ بسلام في غرفة نوم مضاءة وتبدأ يومها بحيوية",
            pl: "Kobieta budząca się spokojnie w jasnej sypialni i rozpoczynająca dzień z witalnością",
          },
          caption: {
            de: "Die 24-Stunden-Regel: Schmerzen am nächsten Morgen sollten auf ihr gewohntes Niveau zurückgekehrt sein",
            fr: "La règle des 24 heures : les douleurs devraient être revenues à leur niveau habituel le lendemain matin",
            en: "The 24-hour rule: pain should return to its usual level the next morning",
            nl: "De 24-uursregel: pijn zou de volgende ochtend naar haar gewone niveau moeten zijn teruggekeerd",
            tr: "24 saat kuralı: ertesi sabah ağrı alışılmış seviyesine dönmüş olmalıdır",
            ar: "قاعدة الـ 24 ساعة: يجب أن تعود الآلام إلى مستواها المعتاد صباح اليوم التالي",
            pl: "Zasada 24 godzin: ból powinien wrócić do normalnego poziomu następnego ranka",
          },
        },
      },
      {
        heading: {
          de: "Das Ampelsystem", fr: "Le système des feux tricolores", en: "The traffic light system",
          nl: "Het stoplichtsysteem", tr: "Trafik ışığı sistemi", ar: "نظام إشارات المرور", pl: "System świateł drogowych",
        },
        body: {
          de: "Um in Echtzeit während des Trainings zu entscheiden, haben Forscher ein sehr intuitives Werkzeug validiert: das Ampelsystem, basierend auf einer einfachen Schmerzskala von 0 (kein Schmerz) bis 10 (der schlimmste vorstellbare).\n\nGrünes Licht (0-2/10): kein oder minimaler Schmerz. Machen Sie unbesorgt weiter, Sie können sogar ruhig steigern.\n\nGelbes Licht (3-5/10): spürbarer, aber erträglicher Schmerz. Sie können fortfahren — es ist sogar förderlich. Diese Zone verschlimmert Ihr Problem nicht, anders als viele glauben.\n\nRotes Licht (6/10 oder mehr): Der Schmerz ist stark, Sie kompensieren oder hinken. Stopp: Die Dosis muss in der nächsten Sitzung reduziert werden.\n\nDieses einfache System verändert alles. Es gibt Ihnen einen objektiven Rahmen für Entscheidungen, ohne zwischen « alles abbrechen » und « blind durchziehen » wählen zu müssen. Sie übernehmen die Kontrolle, Schritt für Schritt, in voller Sicherheit.",
          fr: "Pour décider en temps réel pendant l'exercice, les chercheurs ont validé un outil très intuitif : le système des feux tricolores, basé sur une échelle de douleur simple de 0 (aucune douleur) à 10 (la pire imaginable).\n\nFeu vert (0-2/10) : douleur absente ou minime. Continuez sans souci, vous pouvez même progresser tranquillement.\n\nFeu orange (3-5/10) : douleur perceptible, mais supportable. Vous pouvez continuer — c'est même bénéfique. Cette zone n'aggrave pas votre problème, contrairement à ce que beaucoup croient.\n\nFeu rouge (6/10 et plus) : la douleur est forte, vous compensez ou vous boitez. Stop : il faut réduire la dose pour la prochaine séance.\n\nCe système simple change tout. Il vous donne un cadre objectif pour décider, sans avoir à choisir entre tout arrêter ou pousser à l'aveugle. Vous reprenez le contrôle, étape par étape, en toute sécurité.",
          en: "To decide in real time during exercise, researchers have validated a very intuitive tool: the traffic light system, based on a simple pain scale from 0 (no pain) to 10 (the worst imaginable).\n\nGreen light (0-2/10): no or minimal pain. Carry on without worry — you can even progress steadily.\n\nAmber light (3-5/10): noticeable but bearable pain. You can keep going — it's even beneficial. This zone does not worsen your condition, contrary to common belief.\n\nRed light (6/10 and above): pain is strong, you're compensating or limping. Stop: reduce the dose for the next session.\n\nThis simple system changes everything. It gives you an objective framework to decide, without having to choose between stopping everything or pushing blindly. You regain control, step by step, in full safety.",
          nl: "Om tijdens de oefening in real time te beslissen, hebben onderzoekers een zeer intuïtief hulpmiddel gevalideerd: het stoplichtsysteem, gebaseerd op een eenvoudige pijnschaal van 0 (geen pijn) tot 10 (de ergst voorstelbare).\n\nGroen licht (0-2/10): geen of minimale pijn. Ga zonder zorgen door, u kunt zelfs rustig progressie maken.\n\nOranje licht (3-5/10): merkbare maar verdraagbare pijn. U kunt doorgaan — het is zelfs gunstig. Deze zone verergert uw probleem niet, in tegenstelling tot wat velen denken.\n\nRood licht (6/10 en meer): de pijn is sterk, u compenseert of hinkt. Stop: bij de volgende sessie moet de dosis worden verlaagd.\n\nDit eenvoudige systeem verandert alles. Het geeft u een objectief kader om te beslissen, zonder te hoeven kiezen tussen alles stoppen of blind doorduwen. U krijgt opnieuw controle, stap voor stap, in alle veiligheid.",
          tr: "Egzersiz sırasında gerçek zamanlı karar vermek için araştırmacılar çok sezgisel bir araç doğruladılar: trafik ışığı sistemi, 0 (ağrı yok) ile 10 (hayal edilebilecek en kötü) arasında değişen basit bir ağrı skalasına dayanır.\n\nYeşil ışık (0-2/10): ağrı yok veya minimal. Endişe etmeden devam edin, hatta sakin bir şekilde ilerleyebilirsiniz.\n\nSarı ışık (3-5/10): hissedilebilir ama dayanılabilir ağrı. Devam edebilirsiniz — hatta yararlıdır. Bu bölge, birçok kişinin sandığının aksine, sorununuzu kötüleştirmez.\n\nKırmızı ışık (6/10 ve üzeri): ağrı güçlü, kompanze ediyor ya da topallıyorsunuz. Dur: bir sonraki seans için doz azaltılmalı.\n\nBu basit sistem her şeyi değiştirir. Her şeyi durdurmak ya da körü körüne zorlamak arasında seçim yapmak zorunda kalmadan karar vermek için size objektif bir çerçeve sunar. Adım adım, tam bir güvenlik içinde kontrolü yeniden ele alırsınız.",
          ar: "لاتخاذ القرار في الوقت الفعلي أثناء التمرين، أكّد الباحثون أداة بديهية للغاية: نظام إشارات المرور، المبني على مقياس بسيط للألم من 0 (لا ألم) إلى 10 (الأسوأ قابل للتخيّل).\n\nالضوء الأخضر (0-2/10): لا ألم أو ألم خفيف جدًا. تابع دون قلق، يمكنك حتى التقدّم بهدوء.\n\nالضوء البرتقالي (3-5/10): ألم محسوس لكن محتمل. يمكنك الاستمرار — بل هو مفيد. هذه المنطقة لا تُفاقم مشكلتك، عكس ما يعتقده كثيرون.\n\nالضوء الأحمر (6/10 فأكثر): الألم قوي، أنت تتعويض أو تعرج. توقّف: يجب خفض الجرعة في الجلسة التالية.\n\nهذا النظام البسيط يُغيّر كل شيء. يمنحك إطارًا موضوعيًا لاتخاذ القرار، دون الحاجة إلى الاختيار بين التوقف الكامل والاستمرار العشوائي. تستعيد زمام الأمور، خطوة بخطوة، بأمان تام.",
          pl: "Aby podejmować decyzje w czasie rzeczywistym podczas ćwiczeń, badacze potwierdzili bardzo intuicyjne narzędzie: system świateł drogowych, oparty na prostej skali bólu od 0 (brak bólu) do 10 (najgorszy wyobrażalny).\n\nZielone światło (0-2/10): brak bólu lub minimalny. Kontynuuj bez obaw, możesz nawet spokojnie zwiększać obciążenie.\n\nPomarańczowe światło (3-5/10): zauważalny, ale znośny ból. Możesz kontynuować — jest to nawet korzystne. Ta strefa nie pogarsza Twojego problemu, wbrew temu, co wielu sądzi.\n\nCzerwone światło (6/10 i więcej): ból jest silny, kompensujesz lub kulejesz. Stop: w następnej sesji trzeba zmniejszyć dawkę.\n\nTen prosty system zmienia wszystko. Daje obiektywne ramy do podejmowania decyzji, bez konieczności wybierania między całkowitym zatrzymaniem a forsowaniem na ślepo. Odzyskujesz kontrolę, krok po kroku, w pełnym bezpieczeństwie.",
        },
        infographic: "traffic-light",
      },
      {
        heading: {
          de: "Wann sollten Sie kommen?", fr: "Quand consulter ?", en: "When to consult?",
          nl: "Wanneer raadplegen?", tr: "Ne zaman başvurmalı?", ar: "متى يجب استشارة الطبيب؟", pl: "Kiedy się zgłosić?",
        },
        body: {
          de: "Diese Werkzeuge sind wertvoll, ersetzen aber keine professionelle Beurteilung. Bitte wenden Sie sich an einen Physiotherapeuten oder Ihren Arzt, wenn:\n\n• der Schmerz länger als einige Wochen anhält und sich nicht bessert;\n• er von ungewöhnlichen Zeichen begleitet wird: Kribbeln, Kraftverlust, Fieber, unerklärlicher Gewichtsverlust, Probleme beim Wasserlassen;\n• er nach einem bedeutenden Trauma auftritt;\n• er Sie am Schlafen oder an wichtigen Aktivitäten hindert;\n• Sie schlicht nicht wissen, wo Sie anfangen sollen.\n\nEine Beurteilung durch eine geschulte Fachperson hilft, Ursachen zu erkennen, die besondere Aufmerksamkeit verdienen, und vor allem mit Ihnen ein passendes Programm aufzubauen. Die richtige Dosis ist nicht universell: Sie hängt von Ihrer Geschichte, Ihrem aktuellen Niveau und Ihren Zielen ab. In Eupen ist unser Team genau dafür da: einen klaren Rahmen schaffen und Sie Schritt für Schritt begleiten.",
          fr: "Ces outils sont précieux, mais ils ne remplacent pas une évaluation professionnelle. Consultez un kinésithérapeute ou votre médecin si :\n\n• la douleur persiste plus de quelques semaines sans amélioration ;\n• elle s'accompagne de signes inhabituels : fourmillements, perte de force, fièvre, perte de poids inexpliquée, troubles urinaires ;\n• elle survient après un traumatisme important ;\n• elle vous empêche de dormir ou de pratiquer vos activités essentielles ;\n• vous ne savez tout simplement pas par où commencer.\n\nUne évaluation par un professionnel formé permet d'écarter les causes qui méritent une attention particulière et, surtout, de construire avec vous un programme adapté. Le bon dosage n'est pas universel : il dépend de votre histoire, de votre niveau actuel, de vos objectifs. À Eupen, notre équipe est là pour ça : poser un cadre clair et vous accompagner pas à pas.",
          en: "These tools are valuable but don't replace a professional assessment. Consult a physiotherapist or your doctor if:\n\n• the pain persists for more than a few weeks with no improvement;\n• it is accompanied by unusual signs: tingling, loss of strength, fever, unexplained weight loss, urinary problems;\n• it appears after a significant injury;\n• it prevents you from sleeping or doing essential activities;\n• you simply don't know where to start.\n\nAn assessment by a trained professional helps identify causes that deserve special attention and, above all, build a tailored programme with you. The right dose is not universal: it depends on your history, your current level, your goals. In Eupen, our team is here for exactly that: to set a clear framework and support you step by step.",
          nl: "Deze hulpmiddelen zijn waardevol, maar vervangen geen professionele evaluatie. Raadpleeg een fysiotherapeut of uw arts als:\n\n• de pijn meer dan enkele weken aanhoudt zonder verbetering;\n• ze gepaard gaat met ongewone signalen: tintelingen, krachtverlies, koorts, onverklaarbaar gewichtsverlies, plasproblemen;\n• ze optreedt na een belangrijk letsel;\n• ze u belet te slapen of essentiële activiteiten uit te voeren;\n• u gewoonweg niet weet waar te beginnen.\n\nEen evaluatie door een opgeleide professional helpt oorzaken op te sporen die bijzondere aandacht verdienen en vooral samen met u een aangepast programma op te stellen. De juiste dosering is niet universeel: ze hangt af van uw verhaal, uw huidige niveau, uw doelen. In Eupen is ons team daar precies voor: een helder kader bieden en u stap voor stap begeleiden.",
          tr: "Bu araçlar değerlidir, ancak profesyonel bir değerlendirmenin yerine geçmez. Aşağıdaki durumlarda bir fizyoterapiste veya doktorunuza başvurun:\n\n• ağrı birkaç haftadan fazla sürüyor ve düzelmiyorsa;\n• olağandışı belirtilere eşlik ediyorsa: karıncalanma, güç kaybı, ateş, açıklanamayan kilo kaybı, idrar sorunları;\n• önemli bir yaralanma sonrasında ortaya çıkıyorsa;\n• uyumanızı veya temel aktivitelerinizi yapmanızı engelliyorsa;\n• sadece nereden başlayacağınızı bilmiyorsanız.\n\nEğitimli bir profesyonel tarafından yapılan değerlendirme, özel ilgiyi hak eden nedenleri belirlemeye ve en önemlisi sizinle birlikte size uygun bir program oluşturmaya yardımcı olur. Doğru doz evrensel değildir: hikayenize, mevcut seviyenize, hedeflerinize bağlıdır. Eupen'deki ekibimiz tam da bunun için burada: net bir çerçeve çizmek ve adım adım size eşlik etmek.",
          ar: "هذه الأدوات قيّمة، لكنها لا تُغني عن التقييم المهني. استشر أخصائي علاج طبيعي أو طبيبك في الحالات التالية:\n\n• إذا استمر الألم لأكثر من بضعة أسابيع دون أي تحسن؛\n• إذا رافقته علامات غير معتادة: تنميل، فقدان قوة، حمى، فقدان وزن غير مُفسَّر، مشاكل بولية؛\n• إذا ظهر بعد إصابة مهمّة؛\n• إذا منعك من النوم أو من ممارسة نشاطاتك الأساسية؛\n• إذا كنت ببساطة لا تعرف من أين تبدأ.\n\nإن التقييم من قِبل مهني مُدرَّب يُساعد على رصد الأسباب التي تستحق اهتمامًا خاصًا، والأهم من ذلك بناء برنامج مُناسب معك. الجرعة المناسبة ليست عالمية: تعتمد على تاريخك ومستواك الحالي وأهدافك. في أوبن، فريقنا موجود لهذا تحديدًا: تقديم إطار واضح ومرافقتك خطوة بخطوة.",
          pl: "Te narzędzia są cenne, ale nie zastępują profesjonalnej oceny. Skonsultuj się z fizjoterapeutą lub lekarzem, jeśli:\n\n• ból utrzymuje się dłużej niż kilka tygodni bez poprawy;\n• towarzyszą mu nietypowe objawy: mrowienie, utrata siły, gorączka, niewyjaśniona utrata wagi, problemy z oddawaniem moczu;\n• pojawia się po znaczącym urazie;\n• uniemożliwia Ci spanie lub wykonywanie codziennych aktywności;\n• po prostu nie wiesz, od czego zacząć.\n\nOcena przez przeszkolonego specjalistę pomaga zidentyfikować przyczyny wymagające szczególnej uwagi i, co najważniejsze, wspólnie z Tobą zbudować dostosowany program. Właściwa dawka nie jest uniwersalna: zależy od Twojej historii, obecnego poziomu, Twoich celów. W Eupen nasz zespół jest właśnie po to: zaproponować jasne ramy i towarzyszyć Ci krok po kroku.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "In der Praxis Loten", fr: "Au cabinet Praxis Loten", en: "At Praxis Loten",
          nl: "Bij Praxis Loten", tr: "Praxis Loten kliniğinde", ar: "في عيادة براكسيس لوتن", pl: "W gabinecie Praxis Loten",
        },
        body: {
          de: "In Eupen begleitet unser Team — Physiotherapeuten, Manualtherapeuten und Osteopathen — täglich Patientinnen und Patienten auf der Suche nach der richtigen Dosis. Unser Ansatz beruht auf vier Säulen:\n\n1. Beurteilen — Ihre aktuelle Bewegungstoleranz, ohne Wertung, ausgehend von Ihrem realen Alltag.\n2. Aufbauen — ein Programm in Ihrer Dosis: stimulierend genug, damit Ihre Gewebe sich anpassen, leicht genug, um Ihre derzeitige Kapazität nicht zu überschreiten.\n3. Lehren — wir vermitteln Ihnen die Werkzeuge: 24-Stunden-Regel, Ampelsystem, Warnsignale, damit Sie Schritt für Schritt selbständig werden.\n4. Vorankommen — gemeinsam und stufenweise, indem wir die Belastung an Ihre Rückmeldungen und Ziele anpassen, als eine von vielen Methoden, die wir je nach Ihren Bedürfnissen kombinieren.\n\nUnser Ziel: dass Sie stärker, selbstsicherer und in der Lage werden, Ihre Aktivität selbst zu dosieren. Schritt für Schritt, gemeinsam.",
          fr: "À Eupen, notre équipe — kinésithérapeutes, thérapeutes manuels et ostéopathes — accompagne chaque jour des patients à la recherche du juste dosage. Notre approche tient en quatre piliers :\n\n1. Évaluer votre tolérance actuelle au mouvement, sans jugement, à partir de votre quotidien réel.\n2. Construire un programme à votre dose : assez stimulant pour faire progresser vos tissus, assez léger pour ne pas dépasser votre capacité du moment.\n3. Éduquer : vous transmettre les outils — règle des 24 heures, feux tricolores, signaux d'alarme — pour que vous deveniez progressivement autonome.\n4. Progresser ensemble par paliers, en ajustant la charge selon vos retours et vos objectifs, parmi de nombreuses approches que nous combinons selon vos besoins.\n\nNotre objectif : que vous repartiez plus solide, plus confiant, et capable de doser votre activité par vous-même. Étape par étape, ensemble.",
          en: "In Eupen, our team — physiotherapists, manual therapists and osteopaths — supports patients every day in finding the right dose. Our approach is built on four pillars:\n\n1. Assess your current movement tolerance, without judgement, starting from your real daily life.\n2. Build a programme at your dose: stimulating enough for your tissues to progress, light enough not to exceed your current capacity.\n3. Educate — we share the tools with you: the 24-hour rule, the traffic light system, warning signs, so you gradually become autonomous.\n4. Progress together step by step, adjusting the load based on your feedback and goals, among many approaches we combine according to your needs.\n\nOur goal: that you leave stronger, more confident, and able to dose your activity yourself. Step by step, together.",
          nl: "In Eupen begeleidt ons team — fysiotherapeuten, manueel therapeuten en osteopaten — dagelijks patiënten op zoek naar de juiste dosering. Onze benadering rust op vier pijlers:\n\n1. Evalueren — uw huidige bewegingstolerantie, zonder oordeel, vanuit uw werkelijke dagelijkse leven.\n2. Opbouwen — een programma op uw maat: stimulerend genoeg om uw weefsels te laten progresseren, licht genoeg om uw huidige capaciteit niet te overschrijden.\n3. Onderwijzen — we geven u de hulpmiddelen mee: 24-uursregel, stoplichtsysteem, alarmsignalen, zodat u geleidelijk autonoom wordt.\n4. Vooruitgaan — samen, stap voor stap, door de belasting aan te passen aan uw feedback en doelen, als een van vele benaderingen die we afstemmen op uw behoeften.\n\nOns doel: dat u sterker, zelfverzekerder en in staat bent om zelf uw activiteit te doseren. Stap voor stap, samen.",
          tr: "Eupen'de fizyoterapistler, manuel terapistler ve osteopatlardan oluşan ekibimiz, doğru dozu arayan hastalara her gün eşlik ediyor. Yaklaşımımız dört temel sütun üzerine kurulu:\n\n1. Değerlendirme — yargılamadan, gerçek günlük yaşamınızdan yola çıkarak mevcut hareket toleransınızı belirliyoruz.\n2. İnşa etme — size özel bir program: dokularınızın ilerlemesi için yeterince uyarıcı, mevcut kapasitenizi aşmayacak kadar hafif.\n3. Eğitme — araçları sizinle paylaşıyoruz: 24 saat kuralı, trafik ışığı sistemi, uyarı sinyalleri — kademeli olarak özerk olmanız için.\n4. İlerleme — birlikte, adım adım, geri bildirimlerinize ve hedeflerinize göre yükü ayarlayarak, ihtiyaçlarınıza göre birleştirdiğimiz pek çok yaklaşımdan biri.\n\nAmacımız: daha güçlü, daha kendine güvenen ve aktivitenizi kendi başınıza dozajlayabilecek şekilde ayrılmanız. Adım adım, birlikte.",
          ar: "في أوبن، يُرافق فريقنا — أخصائيو علاج طبيعي، معالجون يدويون، وأطباء عظام — يوميًا مرضى يبحثون عن الجرعة المناسبة. يقوم نهجنا على أربع ركائز:\n\n1. التقييم — تحمّلك الحالي للحركة، دون حكم، انطلاقًا من واقعك اليومي.\n2. البناء — برنامج بجرعتك: مُحفّز بما يكفي ليتقدّم أنسجتك، خفيف بما يكفي لئلا يتجاوز قدرتك الحالية.\n3. التعليم — نُشاركك الأدوات: قاعدة الـ 24 ساعة، نظام إشارات المرور، علامات الإنذار — لتصبح مستقلًا تدريجيًا.\n4. التقدّم — معًا، خطوة بخطوة، بتعديل الحمل وفق ملاحظاتك وأهدافك، كأحد الأساليب العديدة التي نُكيّفها حسب احتياجاتك.\n\nهدفنا: أن تخرج أقوى، أكثر ثقة، وقادرًا على تعديل جرعة نشاطك بنفسك. خطوة بخطوة، معًا.",
          pl: "W Eupen nasz zespół — fizjoterapeuci, terapeuci manualni i osteopaci — codziennie towarzyszy pacjentom szukającym właściwej dawki. Nasze podejście opiera się na czterech filarach:\n\n1. Ocena — Twojej obecnej tolerancji ruchu, bez osądzania, wychodząc od Twojej rzeczywistej codzienności.\n2. Budowanie — programu na Twoją miarę: wystarczająco stymulującego, by tkanki postępowały, wystarczająco lekkiego, by nie przekroczyć obecnej zdolności.\n3. Edukacja — przekazujemy Ci narzędzia: zasadę 24 godzin, system świateł drogowych, sygnały alarmowe, byś stopniowo stawał się samodzielny.\n4. Postępy — wspólnie, krok po kroku, dostosowując obciążenie do Twoich informacji zwrotnych i celów, jedno z wielu podejść, które łączymy zgodnie z Twoimi potrzebami.\n\nNasz cel: byś wyszedł silniejszy, pewniejszy siebie i zdolny do samodzielnego dawkowania aktywności. Krok po kroku, razem.",
        },
        infographic: "manual-therapy-pillars",
      },
    ],
    keyPoints: {
      de: ["Schmerz ist nicht immer ein Stoppsignal — besonders bei anhaltenden Schmerzen.", "Ihre Gewebe brauchen Bewegung: « mehr ist nicht immer besser, weniger aber niemals ».", "24-Stunden-Regel: Ein akzeptabler Schmerz kehrt am nächsten Morgen auf sein Niveau zurück.", "Ampelsystem: grün (0-2) und gelb (3-5) = OK; rot (6+) = stopp und Dosis reduzieren.", "Die richtige Dosis ist individuell — sie wird Schritt für Schritt mit professioneller Hilfe aufgebaut."],
      fr: ["La douleur n'est pas toujours un signal d'arrêt — surtout pour les douleurs persistantes.", "Vos tissus ont besoin de mouvement : « plus n'est pas toujours mieux, mais moins ne l'est jamais ».", "Règle des 24 heures : une douleur acceptable revient à son niveau habituel le lendemain matin.", "Système des feux tricolores : vert (0-2) et orange (3-5) = OK ; rouge (6+) = stop et on réduit la dose.", "Le bon dosage est individuel — il s'apprend et se construit progressivement, idéalement avec l'aide d'un professionnel."],
      en: ["Pain is not always a stop signal — especially for persistent pain.", "Your tissues need movement: « more is not always better, but less is never better ».", "24-hour rule: acceptable pain returns to its usual level the next morning.", "Traffic light system: green (0-2) and amber (3-5) = OK; red (6+) = stop and reduce the dose.", "The right dose is individual — it is learned and built progressively, ideally with professional support."],
      nl: ["Pijn is niet altijd een stopsignaal — zeker niet bij aanhoudende pijn.", "Uw weefsels hebben beweging nodig: « meer is niet altijd beter, minder is het nooit ».", "24-uursregel: aanvaardbare pijn keert de volgende ochtend terug naar haar gewone niveau.", "Stoplichtsysteem: groen (0-2) en oranje (3-5) = OK; rood (6+) = stop en verlaag de dosis.", "De juiste dosering is individueel — ze wordt geleidelijk geleerd, idealiter met professionele begeleiding."],
      tr: ["Ağrı her zaman bir dur işareti değildir — özellikle kalıcı ağrılarda.", "Dokularınız hareket ister: « çoğu her zaman iyi değildir, ama az asla yeterli değildir ».", "24 saat kuralı: kabul edilebilir ağrı ertesi sabah alışılmış seviyesine döner.", "Trafik ışığı sistemi: yeşil (0-2) ve sarı (3-5) = TAMAM; kırmızı (6+) = dur ve dozu azalt.", "Doğru doz kişiseldir — kademeli olarak öğrenilir, ideal olarak profesyonel destekle."],
      ar: ["الألم ليس دائمًا إشارة توقّف — خاصة في الألم المستمر.", "أنسجتك تحتاج إلى الحركة: «الأكثر ليس دائمًا الأفضل، لكن الأقل ليس كافيًا أبدًا».", "قاعدة الـ 24 ساعة: الألم المقبول يعود إلى مستواه المعتاد في صباح اليوم التالي.", "نظام إشارات المرور: الأخضر (0-2) والبرتقالي (3-5) = موافق؛ الأحمر (6+) = توقّف وخفّض الجرعة.", "الجرعة المناسبة فردية — تُتعلَّم وتُبنى تدريجيًا، يفضّل بمرافقة مهنية."],
      pl: ["Ból nie zawsze jest sygnałem do zatrzymania — zwłaszcza w bólu przewlekłym.", "Twoje tkanki potrzebują ruchu: « więcej nie zawsze znaczy lepiej, ale mniej nigdy ».", "Zasada 24 godzin: akceptowalny ból wraca do zwykłego poziomu następnego ranka.", "System świateł: zielone (0-2) i pomarańczowe (3-5) = OK; czerwone (6+) = stop i zmniejsz dawkę.", "Właściwa dawka jest indywidualna — uczy się jej stopniowo, najlepiej pod okiem specjalisty."],
    },
    ctaText: {
      de: "Suchen Sie die richtige Dosis, um wieder aktiv zu werden, ohne Ihre Schmerzen zu verschlimmern? Vereinbaren Sie einen Termin in der Praxis Loten in Eupen für ein individuelles Programm.",
      fr: "Vous cherchez le bon dosage pour reprendre l'activité physique sans aggraver votre douleur ? Prenez rendez-vous au cabinet Praxis Loten à Eupen pour un programme adapté à vous.",
      en: "Looking for the right dose to get active again without worsening your pain? Book an appointment at Praxis Loten in Eupen for a programme tailored to you.",
      nl: "Zoekt u de juiste dosering om opnieuw te bewegen zonder uw pijn te verergeren? Maak een afspraak bij Praxis Loten in Eupen voor een programma op uw maat.",
      tr: "Ağrınızı kötüleştirmeden tekrar aktif olmak için doğru dozu mu arıyorsunuz? Size özel bir program için Eupen'deki Praxis Loten kliniğinden randevu alın.",
      ar: "هل تبحث عن الجرعة المناسبة لاستئناف النشاط البدني دون تفاقم الألم؟ احجز موعدًا في عيادة براكسيس لوتن في أوبن للحصول على برنامج مُكيَّف لك.",
      pl: "Szukasz właściwej dawki, by wrócić do aktywności bez nasilenia bólu? Umów wizytę w Praxis Loten w Eupen, aby otrzymać dopasowany program.",
    },
    bibliography: [
      "Smith BE, Hendrick P, Smith TO, et al. Should exercises be painful in the management of chronic musculoskeletal pain? A systematic review and meta-analysis. Br J Sports Med. 2017;51:1679-1687.",
      "Gabbett TJ. The training-injury prevention paradox: should athletes be training smarter and harder? Br J Sports Med. 2016;50:273-280.",
      "Lin I, Wiles L, Waller R, et al. What does best practice care for the musculoskeletal pain look like? Eleven consistent recommendations from high-quality clinical practice guidelines. Br J Sports Med. 2020;54:79-86.",
      "Dye SF. The knee as a biologic transmission with an envelope of function: a theory. Clin Orthop Relat Res. 1996;325:10-18.",
      "Rice D, Nijs J, Kosek E, et al. Exercise-induced hypoalgesia in pain-free and chronic pain populations. J Pain. 2019;20:1249-1266.",
      "Nielsen RØ, et al. How much running is too much? Identifying high-risk running sessions in a 5200-person cohort study. Br J Sports Med. 2025;59:1203-1210.",
    ],
    disclaimer: {
      de: "Dieser Artikel hat informativen Charakter und ersetzt keine ärztliche oder therapeutische Beratung. Bei anhaltenden oder beunruhigenden Schmerzen wenden Sie sich bitte an eine medizinische Fachperson.",
      fr: "Cet article a une vocation informative et ne remplace pas une consultation médicale ou paramédicale. En cas de douleur persistante ou inquiétante, prenez rendez-vous avec un professionnel de santé.",
      en: "This article is for informational purposes only and does not replace a medical or paramedical consultation. If your pain persists or worries you, please consult a healthcare professional.",
      nl: "Dit artikel is informatief en vervangt geen medisch of paramedisch advies. Bij aanhoudende of zorgwekkende pijn raadpleeg een zorgverlener.",
      tr: "Bu makale yalnızca bilgi amaçlıdır ve tıbbi veya paramedikal bir konsültasyonun yerini almaz. Ağrınız kalıcıysa veya sizi endişelendiriyorsa, lütfen bir sağlık uzmanına başvurun.",
      ar: "هذه المقالة لأغراض إعلامية فقط ولا تحلّ محل الاستشارة الطبية أو شبه الطبية. إذا استمر الألم أو سبّب لك القلق، يُرجى استشارة أخصائي رعاية صحية.",
      pl: "Ten artykuł ma charakter informacyjny i nie zastępuje konsultacji medycznej ani paramedycznej. Przy utrzymującym się lub niepokojącym bólu skonsultuj się z pracownikiem ochrony zdrowia.",
    },
  },

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
      de: "Rückenschmerzen in Eupen — wann hilft Manuelle Therapie?",
      fr: "Douleurs dorsales à Eupen — quand la thérapie manuelle aide-t-elle ?",
      en: "Back pain in Eupen — when does manual therapy help?",
      nl: "Rugpijn in Eupen — wanneer helpt manuele therapie?",
      tr: "Eupen'de sırt ağrısı — manuel terapi ne zaman yardımcı olur?",
      ar: "آلام الظهر في Eupen — متى يساعد العلاج اليدوي؟",
      pl: "Ból pleców w Eupen — kiedy pomaga terapia manualna?",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
    },
    date: "2024-11-15",
    readMin: 6,
    color: "from-[#2b3186] to-[#1e2260]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "Rückenschmerzen betreffen fast jeden Menschen mindestens einmal im Leben. Die gute Nachricht: Ihr Rücken ist **stark, anpassungsfähig und belastbar**. In den meisten Fällen ist keine ernste Schädigung vorhanden. Die Manuelle Therapie — kombiniert mit Bewegung und Aufklärung — bietet einen evidenzbasierten Ansatz, der Ihnen hilft, Vertrauen in Ihren Körper zurückzugewinnen. In unserer Praxis in Eupen begleiten wir Sie auf diesem Weg.",
      fr: "Les douleurs dorsales touchent presque tout le monde au moins une fois dans sa vie. La bonne nouvelle : votre dos est **solide, adaptable et résistant**. Dans la majorité des cas, aucune lésion grave n'est en cause. La thérapie manuelle — combinée au mouvement et à l'éducation — offre une approche fondée sur les preuves qui vous aide à retrouver confiance en votre corps. Dans notre cabinet à Eupen, nous vous accompagnons sur ce chemin.",
      en: "Back pain affects almost everyone at least once in their lifetime. The good news: your back is **strong, adaptable and resilient**. In most cases, no serious damage is involved. Manual therapy — combined with movement and education — offers an evidence-based approach that helps you regain confidence in your body. At our practice in Eupen, we guide you on this journey.",
      nl: "Rugpijn treft bijna iedereen minstens één keer in hun leven. Het goede nieuws: uw rug is **sterk, aanpasbaar en veerkrachtig**. In de meeste gevallen is er geen ernstige schade. Manuele therapie — gecombineerd met beweging en voorlichting — biedt een evidence-based aanpak die u helpt het vertrouwen in uw lichaam te herwinnen. In onze praktijk in Eupen begeleiden wij u op dit pad.",
      tr: "Sırt ağrısı neredeyse herkesi hayatının en az bir döneminde etkiler. İyi haber: sırtınız **güçlü, uyumlu ve dayanıklıdır**. Çoğu durumda ciddi bir hasar söz konusu değildir. Manuel terapi — hareket ve eğitimle birleştirildiğinde — vücudunuza olan güveninizi yeniden kazanmanıza yardımcı olan kanıta dayalı bir yaklaşım sunar. Eupen'deki kliniğimizde size bu yolda eşlik ediyoruz.",
      ar: "يعاني تقريبًا الجميع من آلام الظهر مرة واحدة على الأقل في حياتهم. الخبر السار: ظهرك **قوي وقابل للتكيف ومرن**. في معظم الحالات، لا يوجد ضرر خطير. العلاج اليدوي — مع الحركة والتثقيف — يوفر نهجًا قائمًا على الأدلة يساعدك على استعادة الثقة بجسمك. في عيادتنا في Eupen، نرافقك في هذا المسار.",
      pl: "Ból pleców dotyka prawie każdego przynajmniej raz w życiu. Dobra wiadomość: Twoje plecy są **silne, adaptacyjne i wytrzymałe**. W większości przypadków nie ma poważnego uszkodzenia. Terapia manualna — w połączeniu z ruchem i edukacją — oferuje podejście oparte na dowodach, które pomaga odzyskać zaufanie do własnego ciała. W naszej praktyce w Eupen towarzyszymy Ci na tej drodze.",
    },
    sections: [
      {
        heading: {
          de: "« Mein Rücken ist kaputt » — ein Mythos",
          fr: "« Mon dos est abîmé » — un mythe",
          en: "\"My back is damaged\" — a myth",
          nl: "« Mijn rug is kapot » — een mythe",
          tr: "« Sırtım hasar görmüş » — bir efsane",
          ar: "«ظهري تالف» — خرافة",
          pl: "« Moje plecy są zniszczone » — mit",
        },
        body: {
          de: "Viele Menschen glauben, dass Rückenschmerzen zwangsläufig auf eine « Abnutzung » oder eine strukturelle Schädigung hinweisen. Die Wissenschaft zeigt ein anderes Bild: bildgebende Veränderungen wie Bandscheibenwölbungen finden sich auch bei **schmerzfreien** Personen. Ihre Wirbelsäule ist eine robuste, anpassungsfähige Struktur — wie ein Baum, der sich im Wind biegt, ohne zu brechen. Schmerz ist ein Schutzsignal Ihres Nervensystems, keine Schadensanzeige. Faktoren wie Schlafqualität, Stress, Überzeugungen und Bewegungsmangel beeinflussen Ihren Schmerz oft stärker als das, was auf einem MRT zu sehen ist.",
          fr: "Beaucoup de personnes croient que les douleurs dorsales signifient forcément une « usure » ou un dommage structurel. La science montre un autre tableau : des modifications à l'imagerie comme les protrusions discales se retrouvent aussi chez des personnes **sans douleur**. Votre colonne vertébrale est une structure robuste et adaptable — comme un arbre qui ploie sous le vent sans se rompre. La douleur est un signal de protection de votre système nerveux, pas un indicateur de dégât. Des facteurs comme la qualité du sommeil, le stress, les croyances et le manque de mouvement influencent souvent votre douleur davantage que ce qu'un IRM peut montrer.",
          en: "Many people believe that back pain inevitably means \"wear and tear\" or structural damage. Science tells a different story: imaging changes like disc bulges are also found in **pain-free** individuals. Your spine is a robust, adaptable structure — like a tree that bends in the wind without breaking. Pain is a protective signal from your nervous system, not a damage report. Factors like sleep quality, stress, beliefs and lack of movement often influence your pain more than what an MRI shows.",
          nl: "Veel mensen geloven dat rugpijn automatisch « slijtage » of structurele schade betekent. De wetenschap toont een ander beeld: beeldvormende veranderingen zoals uitpuilende schijven komen ook voor bij **pijnvrije** personen. Uw wervelkolom is een robuuste, aanpasbare structuur — als een boom die buigt in de wind zonder te breken. Pijn is een beschermend signaal van uw zenuwstelsel, geen schademeter. Factoren als slaapkwaliteit, stress, overtuigingen en bewegingsgebrek beïnvloeden uw pijn vaak sterker dan wat een MRI laat zien.",
          tr: "Birçok kişi sırt ağrısının mutlaka « aşınma » veya yapısal hasar anlamına geldiğine inanır. Bilim farklı bir tablo sunar: disk çıkıntıları gibi görüntüleme bulguları **ağrısız** bireylerde de bulunur. Omurganız sağlam ve uyumlu bir yapıdır — rüzgarda kırılmadan eğilen bir ağaç gibi. Ağrı, sinir sisteminizden gelen koruyucu bir sinyaldir, hasar raporu değildir. Uyku kalitesi, stres, inançlar ve hareketsizlik gibi faktörler ağrınızı genellikle MR'ın gösterdiğinden daha fazla etkiler.",
          ar: "يعتقد كثيرون أن آلام الظهر تعني حتمًا «تآكلاً» أو ضررًا هيكليًا. العلم يُظهر صورة مختلفة: تغييرات التصوير مثل بروز الأقراص توجد أيضًا عند أشخاص **بدون ألم**. عمودك الفقري بنية متينة وقابلة للتكيف — كشجرة تنحني في الريح دون أن تنكسر. الألم إشارة حماية من جهازك العصبي، وليس تقرير ضرر. عوامل مثل جودة النوم والتوتر والمعتقدات وقلة الحركة تؤثر غالبًا على ألمك أكثر مما يظهره التصوير بالرنين المغناطيسي.",
          pl: "Wiele osób wierzy, że ból pleców oznacza « zużycie » lub uszkodzenie strukturalne. Nauka pokazuje inny obraz: zmiany w obrazowaniu, takie jak wypukliny dyskowe, występują również u osób **bez bólu**. Twój kręgosłup to solidna, adaptacyjna struktura — jak drzewo, które ugina się na wietrze, nie łamiąc się. Ból to sygnał ochronny układu nerwowego, nie raport o uszkodzeniach. Czynniki takie jak jakość snu, stres, przekonania i brak ruchu często wpływają na ból bardziej niż to, co pokazuje MRI.",
        },
      },
      {
        heading: {
          de: "Was wirklich zählt: Bewegung und Verständnis",
          fr: "Ce qui compte vraiment : mouvement et compréhension",
          en: "What really matters: movement and understanding",
          nl: "Wat echt telt: beweging en begrip",
          tr: "Gerçekten önemli olan: hareket ve anlayış",
          ar: "ما يهم حقًا: الحركة والفهم",
          pl: "Co naprawdę się liczy: ruch i zrozumienie",
        },
        body: {
          de: "Die internationale Forschung ist eindeutig: die Kombination aus **manueller Therapie, aktiver Bewegung und Patientenedukation** erzielt die besten Ergebnisse bei Rückenschmerzen. Manuelle Therapie allein ist wirksam zur kurzfristigen Schmerzlinderung — aber ihr größter Wert liegt darin, ein « Fenster der Möglichkeit » zu öffnen, in dem Sie sich wieder bewegen können. Mobilisationstechniken beruhigen Ihr Nervensystem, verbessern die Beweglichkeit und reduzieren die Muskelspannung. Dieser Effekt ermöglicht es Ihnen, aktive Übungen durchzuführen, die langfristig den Unterschied machen. Der Schlüssel liegt in der Kombination: Hände des Therapeuten + Ihre eigene Bewegung + Verständnis Ihrer Situation.",
          fr: "La recherche internationale est claire : la combinaison de **thérapie manuelle, mouvement actif et éducation du patient** obtient les meilleurs résultats pour les douleurs dorsales. La thérapie manuelle seule est efficace pour soulager à court terme — mais sa plus grande valeur est d'ouvrir une « fenêtre d'opportunité » dans laquelle vous pouvez recommencer à bouger. Les techniques de mobilisation calment votre système nerveux, améliorent la mobilité et réduisent les tensions musculaires. Cet effet vous permet de réaliser des exercices actifs qui font la différence à long terme. La clé réside dans la combinaison : les mains du thérapeute + votre propre mouvement + la compréhension de votre situation.",
          en: "International research is clear: the combination of **manual therapy, active movement and patient education** achieves the best results for back pain. Manual therapy alone is effective for short-term relief — but its greatest value lies in opening a \"window of opportunity\" in which you can start moving again. Mobilisation techniques calm your nervous system, improve mobility and reduce muscle tension. This effect allows you to perform active exercises that make the long-term difference. The key lies in the combination: the therapist's hands + your own movement + understanding your situation.",
          nl: "Internationaal onderzoek is duidelijk: de combinatie van **manuele therapie, actieve beweging en patiënteducatie** behaalt de beste resultaten bij rugpijn. Manuele therapie alleen is effectief voor kortdurende verlichting — maar de grootste waarde ligt in het openen van een « venster van mogelijkheid » waarin u weer kunt bewegen. Mobilisatietechnieken kalmeren uw zenuwstelsel, verbeteren de beweeglijkheid en verminderen spierspanning. Dit effect stelt u in staat actieve oefeningen uit te voeren die op lange termijn het verschil maken. De sleutel ligt in de combinatie: de handen van de therapeut + uw eigen beweging + begrip van uw situatie.",
          tr: "Uluslararası araştırma açıktır: **manuel terapi, aktif hareket ve hasta eğitiminin** kombinasyonu sırt ağrısı için en iyi sonuçları elde eder. Manuel terapi tek başına kısa vadeli rahatlama için etkilidir — ancak en büyük değeri, tekrar hareket edebileceğiniz bir « fırsat penceresi » açmasıdır. Mobilizasyon teknikleri sinir sisteminizi sakinleştirir, hareketliliği artırır ve kas gerginliğini azaltır. Bu etki, uzun vadede fark yaratan aktif egzersizleri yapmanızı sağlar. Anahtar kombinasyondadır: terapistin elleri + kendi hareketiniz + durumunuzu anlama.",
          ar: "البحث الدولي واضح: الجمع بين **العلاج اليدوي والحركة النشطة وتثقيف المريض** يحقق أفضل النتائج لآلام الظهر. العلاج اليدوي وحده فعال للتخفيف قصير المدى — لكن قيمته الأكبر تكمن في فتح «نافذة فرصة» يمكنك فيها البدء بالحركة مجددًا. تقنيات التحريك تهدئ جهازك العصبي وتحسن الحركة وتقلل التوتر العضلي. هذا التأثير يتيح لك أداء تمارين نشطة تصنع الفرق على المدى الطويل. المفتاح في الجمع: يدا المعالج + حركتك الخاصة + فهم وضعك.",
          pl: "Badania międzynarodowe są jasne: połączenie **terapii manualnej, aktywnego ruchu i edukacji pacjenta** osiąga najlepsze wyniki w bólu pleców. Terapia manualna sama w sobie jest skuteczna w krótkotrwałym łagodzeniu bólu — ale jej największa wartość polega na otwarciu «okna możliwości», w którym możesz znów zacząć się ruszać. Techniki mobilizacji uspokajają układ nerwowy, poprawiają ruchomość i zmniejszają napięcie mięśniowe. Ten efekt pozwala wykonywać aktywne ćwiczenia, które robią różnicę w dłuższej perspektywie. Klucz leży w kombinacji: ręce terapeuty + Twój własny ruch + zrozumienie Twojej sytuacji.",
        },
        infographic: "spine",
      },
      {
        heading: {
          de: "Die goldene Regel unserer Praxis",
          fr: "La règle d'or de notre cabinet",
          en: "Our practice's golden rule",
          nl: "De gouden regel van onze praktijk",
          tr: "Kliniğimizin altın kuralı",
          ar: "القاعدة الذهبية لعيادتنا",
          pl: "Złota zasada naszej praktyki",
        },
        body: {
          de: "> *« Manuelle Therapie öffnet die Tür — Ihre Bewegung geht hindurch. »*\n\nDieser Satz fasst unsere Philosophie zusammen. Die Hände des Therapeuten helfen, Schmerzen zu modulieren und Vertrauen in die Bewegung zurückzugeben. Aber es sind **Ihre** täglichen Übungen und **Ihr** Verständnis, die den nachhaltigen Erfolg sichern. Wir sehen unsere Rolle nicht als « Reparateure », sondern als Coaches, die Sie befähigen, Ihren Alltag schmerzfrei zu meistern. Die wissenschaftliche Evidenz zeigt: Patienten, die ihre Situation verstehen und aktiv mitwirken, erholen sich schneller und bleiben langfristig beschwerdefrei.",
          fr: "> *« La thérapie manuelle ouvre la porte — c'est votre mouvement qui la franchit. »*\n\nCette phrase résume notre philosophie. Les mains du thérapeute aident à moduler la douleur et à redonner confiance dans le mouvement. Mais ce sont **vos** exercices quotidiens et **votre** compréhension qui assurent le succès durable. Nous ne nous voyons pas comme des « réparateurs », mais comme des coaches qui vous aident à retrouver un quotidien sans douleur. L'évidence scientifique montre que les patients qui comprennent leur situation et participent activement se rétablissent plus vite et restent sans douleur à long terme.",
          en: "> *\"Manual therapy opens the door — your movement walks through it.\"*\n\nThis sentence captures our philosophy. The therapist's hands help modulate pain and restore confidence in movement. But it is **your** daily exercises and **your** understanding that ensure lasting success. We don't see ourselves as \"fixers\" but as coaches who empower you to master your daily life pain-free. Scientific evidence shows that patients who understand their situation and actively participate recover faster and remain pain-free long-term.",
          nl: "> *« Manuele therapie opent de deur — uw beweging gaat erdoor. »*\n\nDeze zin vat onze filosofie samen. De handen van de therapeut helpen pijn te moduleren en vertrouwen in beweging te herstellen. Maar het zijn **uw** dagelijkse oefeningen en **uw** begrip die duurzaam succes garanderen. Wij zien onszelf niet als « reparateurs » maar als coaches die u in staat stellen uw dagelijks leven pijnvrij te leven. Wetenschappelijk bewijs toont dat patiënten die hun situatie begrijpen en actief meewerken sneller herstellen en langdurig pijnvrij blijven.",
          tr: "> *« Manuel terapi kapıyı açar — hareketiniz içeri girer. »*\n\nBu cümle felsefemizi özetler. Terapistin elleri ağrıyı modüle etmeye ve harekete güveni yeniden kazandırmaya yardımcı olur. Ancak kalıcı başarıyı sağlayan **sizin** günlük egzersizleriniz ve **sizin** anlayışınızdır. Kendimizi « tamirciler » olarak değil, günlük yaşamınızı ağrısız sürdürmenizi sağlayan koçlar olarak görüyoruz. Bilimsel kanıtlar, durumlarını anlayan ve aktif katılan hastaların daha hızlı iyileştiğini ve uzun vadede ağrısız kaldığını göstermektedir.",
          ar: "> *«العلاج اليدوي يفتح الباب — حركتك تعبر منه.»*\n\nهذه الجملة تلخص فلسفتنا. يدا المعالج تساعدان في تعديل الألم واستعادة الثقة في الحركة. لكن **تمارينك** اليومية و**فهمك** هما ما يضمنان النجاح المستدام. لا نرى أنفسنا كـ«مصلحين» بل كمدربين يمكّنونك من عيش حياتك اليومية بدون ألم. الأدلة العلمية تظهر أن المرضى الذين يفهمون وضعهم ويشاركون بنشاط يتعافون أسرع ويبقون بدون ألم على المدى الطويل.",
          pl: "> *« Terapia manualna otwiera drzwi — Twój ruch przez nie przechodzi. »*\n\nTo zdanie podsumowuje naszą filozofię. Ręce terapeuty pomagają modulować ból i przywrócić zaufanie do ruchu. Ale to **Twoje** codzienne ćwiczenia i **Twoje** zrozumienie zapewniają trwały sukces. Nie widzimy siebie jako «naprawiaczy», ale jako trenerów, którzy pomagają Ci opanować codzienne życie bez bólu. Dowody naukowe pokazują, że pacjenci rozumiejący swoją sytuację i aktywnie uczestniczący dochodzą do zdrowia szybciej i pozostają bez bólu długoterminowo.",
        },
      },
      {
        heading: {
          de: "3 Reflexe bei Rückenschmerzen",
          fr: "3 réflexes en cas de douleurs dorsales",
          en: "3 reflexes for back pain",
          nl: "3 reflexen bij rugpijn",
          tr: "Sırt ağrısı için 3 refleks",
          ar: "3 ردود فعل لآلام الظهر",
          pl: "3 odruchy przy bólu pleców",
        },
        body: {
          de: "**1. Bleiben Sie in Bewegung** — Bettruhe ist überholt. Leichte Aktivität (Spazierengehen, sanftes Dehnen) fördert die Heilung besser als Stillliegen. Beginnen Sie mit dem, was Ihnen möglich ist.\n\n**2. Beruhigen Sie Ihren Geist** — Sorgen und Katastrophengedanken verstärken den Schmerz nachweislich. Erinnern Sie sich: Rückenschmerzen sind meist gutartig und vorübergehend. Ihr Körper ist auf Heilung programmiert.\n\n**3. Suchen Sie qualifizierte Begleitung** — Ein Manualtherapeut kann Ihnen helfen, Ihre Beweglichkeit zurückzugewinnen und Ihnen einen individuellen Übungsplan geben. In Eupen stehen wir Ihnen zur Verfügung.",
          fr: "**1. Restez en mouvement** — Le repos au lit est dépassé. Une activité légère (marche, étirements doux) favorise la guérison mieux que l'immobilité. Commencez par ce qui vous est possible.\n\n**2. Rassurez votre esprit** — Les inquiétudes et pensées catastrophiques amplifient la douleur de manière prouvée. Rappelez-vous : les douleurs dorsales sont généralement bénignes et temporaires. Votre corps est programmé pour guérir.\n\n**3. Consultez un professionnel qualifié** — Un thérapeute manuel peut vous aider à retrouver votre mobilité et vous donner un plan d'exercices personnalisé. À Eupen, nous sommes à votre disposition.",
          en: "**1. Keep moving** — Bed rest is outdated. Light activity (walking, gentle stretching) promotes healing better than lying still. Start with what you can manage.\n\n**2. Calm your mind** — Worries and catastrophic thoughts have been proven to amplify pain. Remember: back pain is usually benign and temporary. Your body is programmed to heal.\n\n**3. Seek qualified guidance** — A manual therapist can help you regain mobility and provide a personalised exercise plan. In Eupen, we are at your service.",
          nl: "**1. Blijf bewegen** — Bedrust is achterhaald. Lichte activiteit (wandelen, zacht stretchen) bevordert herstel beter dan stilliggen. Begin met wat u aankunt.\n\n**2. Stel uw geest gerust** — Zorgen en rampdenken versterken pijn aantoonbaar. Onthoud: rugpijn is meestal goedaardig en tijdelijk. Uw lichaam is geprogrammeerd om te herstellen.\n\n**3. Zoek gekwalificeerde begeleiding** — Een manuele therapeut kan u helpen uw mobiliteit te herwinnen en een persoonlijk oefenplan geven. In Eupen staan wij voor u klaar.",
          tr: "**1. Hareket etmeye devam edin** — Yatak istirahati modası geçmiştir. Hafif aktivite (yürüyüş, nazik germe) iyileşmeyi hareketsiz yatmaktan daha iyi destekler. Yapabildiğinizle başlayın.\n\n**2. Zihninizi sakinleştirin** — Endişeler ve felaket düşünceleri ağrıyı kanıtlanmış şekilde artırır. Unutmayın: sırt ağrısı genellikle iyi huylu ve geçicidir. Vücudunuz iyileşmek için programlanmıştır.\n\n**3. Nitelikli rehberlik arayın** — Bir manuel terapist hareketliliğinizi yeniden kazanmanıza ve kişiselleştirilmiş egzersiz planı sunmanıza yardımcı olabilir. Eupen'de hizmetinizdeyiz.",
          ar: "**1. ابقَ في حركة** — الراحة في السرير عفا عليها الزمن. النشاط الخفيف (المشي، التمدد اللطيف) يعزز الشفاء أفضل من الاستلقاء. ابدأ بما تستطيع.\n\n**2. طمئن ذهنك** — القلق والأفكار الكارثية تضخم الألم بشكل مثبت. تذكر: آلام الظهر عادةً حميدة ومؤقتة. جسمك مبرمج للشفاء.\n\n**3. اطلب التوجيه المؤهل** — يمكن لمعالج يدوي مساعدتك في استعادة حركتك وتقديم خطة تمارين مخصصة. في Eupen، نحن في خدمتك.",
          pl: "**1. Pozostań w ruchu** — Leżenie w łóżku jest przestarzałe. Lekka aktywność (spacer, delikatne rozciąganie) wspiera gojenie lepiej niż leżenie. Zacznij od tego, co możesz.\n\n**2. Uspokój swój umysł** — Obawy i katastroficzne myśli udowodniono, że nasilają ból. Pamiętaj: ból pleców jest zwykle łagodny i tymczasowy. Twoje ciało jest zaprogramowane do gojenia.\n\n**3. Szukaj kwalifikowanego wsparcia** — Terapeuta manualny może pomóc Ci odzyskać ruchomość i zapewnić spersonalizowany plan ćwiczeń. W Eupen jesteśmy do Twojej dyspozycji.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "Wann sollten Sie einen Arzt aufsuchen?",
          fr: "Quand consulter un médecin ?",
          en: "When should you see a doctor?",
          nl: "Wanneer moet u een arts raadplegen?",
          tr: "Ne zaman doktora gitmelisiniz?",
          ar: "متى يجب استشارة الطبيب؟",
          pl: "Kiedy udać się do lekarza?",
        },
        body: {
          de: "Die allermeisten Rückenschmerzen sind harmlos. Selten können jedoch Warnsignale auf eine ernstere Ursache hinweisen. Suchen Sie zeitnah einen Arzt auf bei: anhaltendem **Taubheitsgefühl oder Kraftverlust** in den Beinen, Problemen mit der **Blasen- oder Darmkontrolle**, Schmerzen nach einem **schweren Unfall**, unerklärlichem **Gewichtsverlust** oder **Fieber** in Kombination mit Rückenschmerzen, oder Schmerzen, die sich **nachts in Ruhe** verschlimmern. Diese Signale betreffen weniger als 1 % aller Rückenschmerzpatienten — aber sie erfordern eine ärztliche Abklärung. Bei allen anderen Formen von Rückenschmerzen können wir Ihnen in der Praxis Loten direkt helfen.",
          fr: "La très grande majorité des douleurs dorsales est bénigne. Rarement, certains signaux d'alerte peuvent indiquer une cause plus sérieuse. Consultez rapidement un médecin en cas de : **engourdissements ou perte de force** persistants dans les jambes, problèmes de **contrôle de la vessie ou de l'intestin**, douleur après un **accident grave**, **perte de poids inexpliquée** ou **fièvre** associée à des douleurs dorsales, ou douleur qui **s'aggrave la nuit au repos**. Ces signaux concernent moins de 1 % des patients souffrant du dos — mais ils nécessitent un avis médical. Pour toutes les autres formes de douleurs dorsales, nous pouvons vous aider directement au cabinet Praxis Loten.",
          en: "The vast majority of back pain is harmless. Rarely, warning signs may point to a more serious cause. Seek medical attention promptly for: persistent **numbness or loss of strength** in the legs, problems with **bladder or bowel control**, pain following a **serious accident**, unexplained **weight loss** or **fever** combined with back pain, or pain that **worsens at night at rest**. These signs affect less than 1% of all back pain patients — but they require medical assessment. For all other forms of back pain, we can help you directly at Praxis Loten.",
          nl: "De overgrote meerderheid van rugpijn is onschuldig. Zelden kunnen waarschuwingssignalen op een ernstiger oorzaak wijzen. Raadpleeg snel een arts bij: aanhoudend **gevoelloosheid of krachtverlies** in de benen, problemen met de **blaas- of darmcontrole**, pijn na een **ernstig ongeval**, onverklaarbaar **gewichtsverlies** of **koorts** in combinatie met rugpijn, of pijn die **'s nachts in rust** verergert. Deze signalen betreffen minder dan 1 % van alle rugpijnpatiënten — maar ze vereisen medische beoordeling. Voor alle andere vormen van rugpijn kunnen wij u direct helpen bij Praxis Loten.",
          tr: "Sırt ağrısının büyük çoğunluğu zararsızdır. Nadiren, uyarı işaretleri daha ciddi bir nedene işaret edebilir. Şu durumlarda derhal bir doktora başvurun: bacaklarda kalıcı **uyuşma veya güç kaybı**, **mesane veya bağırsak kontrolü** sorunları, **ciddi bir kaza** sonrası ağrı, açıklanamayan **kilo kaybı** veya sırt ağrısıyla birlikte **ateş**, ya da **geceleri istirahatte** kötüleşen ağrı. Bu işaretler tüm sırt ağrısı hastalarının %1'inden azını etkiler — ancak tıbbi değerlendirme gerektirir. Diğer tüm sırt ağrısı formları için Eupen'deki kliniğimizde size doğrudan yardımcı olabiliriz.",
          ar: "الغالبية العظمى من آلام الظهر غير ضارة. نادرًا، قد تشير إشارات تحذيرية إلى سبب أكثر خطورة. استشر طبيبًا بسرعة في حالة: **خدر أو فقدان قوة** مستمر في الساقين، مشاكل في **التحكم بالمثانة أو الأمعاء**، ألم بعد **حادث خطير**، **فقدان وزن غير مبرر** أو **حمى** مع آلام الظهر، أو ألم **يتفاقم ليلاً أثناء الراحة**. هذه الإشارات تصيب أقل من 1% من مرضى آلام الظهر — لكنها تتطلب تقييمًا طبيًا. لجميع أشكال آلام الظهر الأخرى، يمكننا مساعدتك مباشرة في Praxis Loten.",
          pl: "Zdecydowana większość bólów pleców jest nieszkodliwa. Rzadko sygnały ostrzegawcze mogą wskazywać na poważniejszą przyczynę. Szukaj pilnie pomocy lekarskiej przy: utrzymującym się **drętwieniu lub utracie siły** w nogach, problemach z **kontrolą pęcherza lub jelit**, bólu po **poważnym wypadku**, niewyjaśnionej **utracie wagi** lub **gorączce** w połączeniu z bólem pleców, lub bólu, który **nasila się w nocy w spoczynku**. Te sygnały dotyczą mniej niż 1% pacjentów z bólem pleców — ale wymagają oceny lekarskiej. W przypadku wszystkich innych form bólu pleców możemy pomóc bezpośrednio w Praxis Loten w Eupen.",
        },
      },
      {
        heading: {
          de: "Bei Praxis Loten in Eupen: unsere 4 Säulen",
          fr: "Au cabinet Praxis Loten à Eupen : nos 4 piliers",
          en: "At Praxis Loten in Eupen: our 4 pillars",
          nl: "Bij Praxis Loten in Eupen: onze 4 pijlers",
          tr: "Eupen'de Praxis Loten'de: 4 temel ilkemiz",
          ar: "في Praxis Loten في Eupen: ركائزنا الأربع",
          pl: "W Praxis Loten w Eupen: nasze 4 filary",
        },
        body: {
          de: "**1. Gründliches Assessment** — Jede Behandlung beginnt mit einem ausführlichen Gespräch und einer funktionellen Untersuchung. Wir hören zu, analysieren und erklären.\n\n**2. Manuelle Therapie nach IFOMPT-Standards** — Gezielte Mobilisationen und Manipulationen auf unserem Manuthera 242 — präzise, sanft und individuell angepasst.\n\n**3. Aktives Übungsprogramm** — Sie erhalten personalisierte Heimübungen, die Sie Schritt für Schritt selbstständiger machen.\n\n**4. Aufklärung und Empowerment** — Wir erklären Ihnen verständlich, was in Ihrem Körper vorgeht. Denn wer versteht, hat weniger Angst — und wer weniger Angst hat, erholt sich schneller.",
          fr: "**1. Bilan approfondi** — Chaque séance commence par un entretien détaillé et un examen fonctionnel. Nous écoutons, analysons et expliquons.\n\n**2. Thérapie manuelle aux normes IFOMPT** — Mobilisations et manipulations ciblées sur notre Manuthera 242 — précises, douces et adaptées à chaque patient.\n\n**3. Programme d'exercices actifs** — Vous recevez des exercices personnalisés à domicile qui vous rendent progressivement plus autonome.\n\n**4. Éducation et empowerment** — Nous vous expliquons de manière compréhensible ce qui se passe dans votre corps. Car celui qui comprend a moins peur — et celui qui a moins peur se rétablit plus vite.",
          en: "**1. Thorough assessment** — Every session starts with a detailed conversation and functional examination. We listen, analyse and explain.\n\n**2. Manual therapy to IFOMPT standards** — Targeted mobilisations and manipulations on our Manuthera 242 — precise, gentle and individually adapted.\n\n**3. Active exercise programme** — You receive personalised home exercises that progressively make you more independent.\n\n**4. Education and empowerment** — We explain in understandable terms what's happening in your body. Because understanding reduces fear — and less fear means faster recovery.",
          nl: "**1. Grondig assessment** — Elke sessie begint met een uitgebreid gesprek en functioneel onderzoek. We luisteren, analyseren en leggen uit.\n\n**2. Manuele therapie volgens IFOMPT-normen** — Gerichte mobilisaties en manipulaties op onze Manuthera 242 — nauwkeurig, zacht en individueel aangepast.\n\n**3. Actief oefenprogramma** — U krijgt gepersonaliseerde thuisoefeningen die u stap voor stap zelfstandiger maken.\n\n**4. Voorlichting en empowerment** — We leggen begrijpelijk uit wat er in uw lichaam gebeurt. Want wie begrijpt, heeft minder angst — en wie minder angst heeft, herstelt sneller.",
          tr: "**1. Kapsamlı değerlendirme** — Her seans detaylı bir görüşme ve fonksiyonel muayene ile başlar. Dinliyoruz, analiz ediyoruz ve açıklıyoruz.\n\n**2. IFOMPT standartlarında manuel terapi** — Manuthera 242'mizde hedefli mobilizasyonlar ve manipülasyonlar — hassas, nazik ve bireysel olarak uyarlanmış.\n\n**3. Aktif egzersiz programı** — Sizi adım adım daha bağımsız hale getiren kişiselleştirilmiş ev egzersizleri alırsınız.\n\n**4. Eğitim ve güçlendirme** — Vücudunuzda neler olduğunu anlaşılır şekilde açıklıyoruz. Çünkü anlayan daha az korkar — ve daha az korkan daha hızlı iyileşir.",
          ar: "**1. تقييم شامل** — كل جلسة تبدأ بمحادثة مفصلة وفحص وظيفي. نستمع ونحلل ونشرح.\n\n**2. علاج يدوي وفق معايير IFOMPT** — تحريكات ومعالجات موجهة على طاولتنا Manuthera 242 — دقيقة ولطيفة ومكيفة فرديًا.\n\n**3. برنامج تمارين نشط** — تتلقى تمارين منزلية مخصصة تجعلك تدريجيًا أكثر استقلالية.\n\n**4. تثقيف وتمكين** — نشرح لك بشكل مفهوم ما يحدث في جسمك. لأن من يفهم يخاف أقل — ومن يخاف أقل يتعافى أسرع.",
          pl: "**1. Dokładna ocena** — Każda sesja zaczyna się od szczegółowej rozmowy i badania funkcjonalnego. Słuchamy, analizujemy i wyjaśniamy.\n\n**2. Terapia manualna według standardów IFOMPT** — Ukierunkowane mobilizacje i manipulacje na naszym stole Manuthera 242 — precyzyjne, delikatne i indywidualnie dostosowane.\n\n**3. Aktywny program ćwiczeń** — Otrzymujesz spersonalizowane ćwiczenia domowe, które krok po kroku czynią Cię bardziej samodzielnym.\n\n**4. Edukacja i wzmocnienie** — Wyjaśniamy zrozumiale, co dzieje się w Twoim ciele. Bo kto rozumie, mniej się boi — a kto mniej się boi, szybciej wraca do zdrowia.",
        },
      },
    ],
    keyPoints: {
      de: ["Ihr Rücken ist stark und anpassungsfähig — kein fragiles Gebilde", "Manuelle Therapie + Bewegung + Verständnis = beste Ergebnisse", "Schmerz ≠ Schaden: Faktoren wie Schlaf und Stress spielen eine zentrale Rolle", "Weniger als 1 % der Rückenschmerzen haben eine ernste Ursache", "IFOMPT-zertifizierte Behandlung in Eupen auf dem Manuthera 242"],
      fr: ["Votre dos est solide et adaptable — pas une structure fragile", "Thérapie manuelle + mouvement + compréhension = meilleurs résultats", "Douleur ≠ dommage : le sommeil et le stress jouent un rôle central", "Moins de 1 % des douleurs dorsales ont une cause grave", "Traitement certifié IFOMPT à Eupen sur le Manuthera 242"],
      en: ["Your back is strong and adaptable — not a fragile structure", "Manual therapy + movement + understanding = best results", "Pain ≠ damage: sleep and stress play a central role", "Less than 1% of back pain has a serious cause", "IFOMPT-certified treatment in Eupen on the Manuthera 242"],
      nl: ["Uw rug is sterk en aanpasbaar — geen kwetsbaar bouwwerk", "Manuele therapie + beweging + begrip = beste resultaten", "Pijn ≠ schade: slaap en stress spelen een centrale rol", "Minder dan 1% van rugpijn heeft een ernstige oorzaak", "IFOMPT-gecertificeerde behandeling in Eupen op de Manuthera 242"],
      tr: ["Sırtınız güçlü ve uyumlu — kırılgan bir yapı değil", "Manuel terapi + hareket + anlayış = en iyi sonuçlar", "Ağrı ≠ hasar: uyku ve stres merkezi bir rol oynar", "Sırt ağrısının %1'inden azının ciddi bir nedeni var", "Eupen'de Manuthera 242'de IFOMPT sertifikalı tedavi"],
      ar: ["ظهرك قوي وقابل للتكيف — ليس بنية هشة", "علاج يدوي + حركة + فهم = أفضل النتائج", "الألم ≠ ضرر: النوم والتوتر يلعبان دورًا محوريًا", "أقل من 1% من آلام الظهر لها سبب خطير", "علاج معتمد IFOMPT في Eupen على Manuthera 242"],
      pl: ["Twoje plecy są silne i adaptacyjne — nie krucha konstrukcja", "Terapia manualna + ruch + zrozumienie = najlepsze wyniki", "Ból ≠ uszkodzenie: sen i stres odgrywają kluczową rolę", "Mniej niż 1% bólów pleców ma poważną przyczynę", "Certyfikowane leczenie IFOMPT w Eupen na Manuthera 242"],
    },
    ctaText: {
      de: "Rückenschmerzen? Vereinbaren Sie jetzt einen Termin bei Philippe Banaszak in Eupen.",
      fr: "Douleurs dorsales ? Prenez rendez-vous avec Philippe Banaszak à Eupen.",
      en: "Back pain? Book an appointment with Philippe Banaszak in Eupen.",
      nl: "Rugpijn? Boek nu een afspraak bij Philippe Banaszak in Eupen.",
      tr: "Sırt ağrısı mı? Eupen'de Philippe Banaszak ile randevu alın.",
      ar: "آلام الظهر؟ احجز موعدًا مع Philippe Banaszak في Eupen.",
      pl: "Ból pleców? Zarezerwuj wizytę u Philippe Banaszak w Eupen.",
    },
    bibliography: [
      "Oliveira CB et al. Clinical practice guidelines for the management of non-specific low back pain in primary care: an updated overview. Eur Spine J. 2018;27(11):2791-2803.",
      "Coulter ID et al. Manipulation and Mobilization for Treating Chronic Low Back Pain: A Systematic Review and Meta-Analysis. Spine J. 2018;18(5):866-879.",
      "NICE. Low back pain and sciatica in over 16s: assessment and management (NG59). National Institute for Health and Care Excellence. 2016 (updated 2020).",
      "Kongsted A et al. What have we learned from ten years of trajectory research in low back pain? BMC Musculoskelet Disord. 2016;17:220.",
      "Brinjikji W et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR Am J Neuroradiol. 2015;36(4):811-816.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine ärztliche oder physiotherapeutische Konsultation. Bei anhaltenden oder schweren Beschwerden wenden Sie sich bitte an einen Gesundheitsdienstleister.",
      fr: "Cet article a une vocation purement informative et ne remplace en aucun cas une consultation médicale ou kinésithérapeutique. En cas de symptômes persistants ou sévères, consultez un professionnel de santé.",
      en: "This article is for informational purposes only and does not replace a medical or physiotherapy consultation. If you experience persistent or severe symptoms, please consult a healthcare professional.",
      nl: "Dit artikel is uitsluitend bedoeld ter informatie en vervangt geen medisch of fysiotherapeutisch consult. Raadpleeg bij aanhoudende of ernstige klachten een zorgverlener.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır ve tıbbi veya fizyoterapi konsültasyonunun yerini almaz. Kalıcı veya şiddetli semptomlar durumunda bir sağlık uzmanına danışın.",
      ar: "هذا المقال لأغراض إعلامية فقط ولا يحل محل الاستشارة الطبية أو العلاجية. في حالة الأعراض المستمرة أو الشديدة، يرجى استشارة أخصائي صحي.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny i nie zastępuje konsultacji lekarskiej lub fizjoterapeutycznej. W przypadku utrzymujących się lub nasilonych objawów skonsultuj się ze specjalistą.",
    },
  },

  "laufen-verletzungspraevention": {
    title: {
      de: "Laufen ohne Verletzung in Eupen — so schützen Sie sich",
      fr: "Courir sans blessure à Eupen — comment vous protéger",
      en: "Running injury-free in Eupen — how to protect yourself",
      nl: "Blessurevrij lopen in Eupen — zo beschermt u zich",
      tr: "Eupen'de sakatlıksız koşu — kendinizi nasıl korursunuz",
      ar: "الجري بدون إصابة في Eupen — كيف تحمي نفسك",
      pl: "Bieganie bez kontuzji w Eupen — jak się chronić",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "العلاج الطبيعي الرياضي", pl: "Fizjoterapia Sportowa",
    },
    date: "2024-10-03",
    readMin: 6,
    color: "from-[#76b82a] to-[#5c9120]",
    authorSlug: "thom-petit",
    authorName: "Thom Petit",
    intro: {
      de: "Laufen ist eine der zugänglichsten und gesündesten Sportarten der Welt. Ihr Körper ist **dafür gebaut, zu laufen** — Ihre Sehnen, Muskeln und Gelenke passen sich mit der richtigen Belastung an und werden stärker. Dennoch erleben viele Läufer irgendwann Beschwerden. Die gute Nachricht: die meisten Verletzungen sind vermeidbar. In unserer Running Clinic in Eupen begleitet Thom Petit Läufer aller Niveaus mit einem evidenzbasierten Ansatz.",
      fr: "La course à pied est l'un des sports les plus accessibles et les plus sains au monde. Votre corps est **fait pour courir** — vos tendons, muscles et articulations s'adaptent à la charge et deviennent plus forts. Pourtant, beaucoup de coureurs connaissent un jour des douleurs. La bonne nouvelle : la plupart des blessures sont évitables. Dans notre Running Clinic à Eupen, Thom Petit accompagne les coureurs de tous niveaux avec une approche fondée sur les preuves.",
      en: "Running is one of the most accessible and healthiest sports in the world. Your body is **built to run** — your tendons, muscles and joints adapt to load and grow stronger. Yet many runners experience pain at some point. The good news: most injuries are preventable. At our Running Clinic in Eupen, Thom Petit supports runners of all levels with an evidence-based approach.",
      nl: "Hardlopen is een van de meest toegankelijke en gezondste sporten ter wereld. Uw lichaam is **gemaakt om te lopen** — uw pezen, spieren en gewrichten passen zich aan belasting aan en worden sterker. Toch ervaren veel lopers op een gegeven moment klachten. Het goede nieuws: de meeste blessures zijn te voorkomen. In onze Running Clinic in Eupen begeleidt Thom Petit lopers van alle niveaus met een evidence-based aanpak.",
      tr: "Koşu, dünyanın en erişilebilir ve sağlıklı sporlarından biridir. Vücudunuz **koşmak için yapılmıştır** — tendonlarınız, kaslarınız ve eklemleriniz yüke uyum sağlar ve güçlenir. Yine de birçok koşucu bir noktada ağrı yaşar. İyi haber: çoğu yaralanma önlenebilir. Eupen'deki Running Clinic'imizde Thom Petit, kanıta dayalı bir yaklaşımla her seviyeden koşucuya eşlik eder.",
      ar: "الجري هو أحد أكثر الرياضات صحةً وسهولةً في العالم. جسمك **مصمم للجري** — أوتارك وعضلاتك ومفاصلك تتكيف مع الحمل وتصبح أقوى. ومع ذلك، يعاني كثير من العدائين من آلام في مرحلة ما. الخبر السار: معظم الإصابات يمكن تجنبها. في عيادة الجري في Eupen، يرافق ثوم بيتي العدائين من جميع المستويات بنهج قائم على الأدلة.",
      pl: "Bieganie jest jednym z najbardziej dostępnych i zdrowych sportów na świecie. Twoje ciało jest **stworzone do biegania** — ścięgna, mięśnie i stawy adaptują się do obciążeń i stają się silniejsze. Mimo to wielu biegaczy doświadcza bólu. Dobra wiadomość: większość kontuzji można zapobiec. W naszej Running Clinic w Eupen, Thom Petit wspiera biegaczy na każdym poziomie podejściem opartym na dowodach.",
    },
    sections: [
      {
        heading: {
          de: "« Laufen ruiniert die Gelenke » — falsch",
          fr: "« Courir détruit les articulations » — faux",
          en: "\"Running ruins your joints\" — wrong",
          nl: "« Lopen vernielt je gewrichten » — fout",
          tr: "« Koşu eklemleri mahveder » — yanlış",
          ar: "«الجري يدمر المفاصل» — خطأ",
          pl: "« Bieganie niszczy stawy » — nieprawda",
        },
        body: {
          de: "Eines der hartnäckigsten Mythen im Laufsport: « Laufen ist schlecht für die Knie ». Die Forschung zeigt das Gegenteil. Regelmäßige Läufer haben **kein erhöhtes Arthroserisiko** — im Gegenteil, moderate Belastung nährt den Knorpel und hält ihn gesund. Ihre Gelenke sind keine Maschinen, die sich abnutzen, sondern lebendige Strukturen, die sich an Belastung anpassen. Der häufigste Grund für Laufverletzungen ist nicht das Laufen selbst, sondern **plötzliche Belastungsspitzen** — wenn Sie zu viel, zu schnell, zu früh tun. Eine aktuelle Studie mit über 5.200 Läufern zeigt: ein einzelner Lauf, der 10 % länger als Ihr längster Lauf des Vormonats ist, erhöht das Verletzungsrisiko um 64 %.",
          fr: "L'un des mythes les plus tenaces de la course à pied : « courir abîme les genoux ». La recherche montre le contraire. Les coureurs réguliers n'ont **pas un risque accru d'arthrose** — au contraire, une charge modérée nourrit le cartilage et le maintient en bonne santé. Vos articulations ne sont pas des machines qui s'usent, mais des structures vivantes qui s'adaptent à la charge. La cause la plus fréquente de blessures n'est pas la course elle-même, mais les **pics de charge soudains** — quand vous en faites trop, trop vite, trop tôt. Une étude récente sur plus de 5 200 coureurs montre qu'un seul run dépassant de 10 % votre plus longue sortie du mois précédent augmente le risque de blessure de 64 %.",
          en: "One of the most persistent myths in running: \"running is bad for your knees\". Research shows the opposite. Regular runners have **no increased risk of osteoarthritis** — on the contrary, moderate loading nourishes cartilage and keeps it healthy. Your joints are not machines that wear out, but living structures that adapt to load. The most common reason for running injuries is not running itself, but **sudden load spikes** — when you do too much, too fast, too soon. A recent study of over 5,200 runners shows that a single run exceeding your longest run of the previous month by 10% increases injury risk by 64%.",
          nl: "Een van de hardnekkigste mythes in de loopsport: « lopen is slecht voor je knieën ». Onderzoek toont het tegendeel. Regelmatige lopers hebben **geen verhoogd risico op artrose** — integendeel, matige belasting voedt het kraakbeen en houdt het gezond. Uw gewrichten zijn geen machines die slijten, maar levende structuren die zich aanpassen aan belasting. De meest voorkomende oorzaak van loopblessures is niet het lopen zelf, maar **plotselinge belastingspieken** — wanneer u te veel, te snel, te vroeg doet. Een recente studie met meer dan 5.200 lopers toont: één enkele run die 10% langer is dan uw langste loop van de vorige maand verhoogt het blessurerisico met 64%.",
          tr: "Koşu sporundaki en inatçı mitlerden biri: « koşu dizleri mahveder ». Araştırma aksini gösteriyor. Düzenli koşucuların **artrit riski artmaz** — aksine, ılımlı yükleme kıkırdağı besler ve sağlıklı tutar. Eklemleriniz aşınan makineler değil, yüke adapte olan canlı yapılardır. Koşu yaralanmalarının en yaygın nedeni koşunun kendisi değil, **ani yük artışlarıdır** — çok fazla, çok hızlı, çok erken. 5.200'den fazla koşucuyu içeren güncel bir çalışma, önceki ayın en uzun koşunuzu %10 aşan tek bir koşunun yaralanma riskini %64 artırdığını göstermektedir.",
          ar: "من أكثر الخرافات عنادًا في رياضة الجري: «الجري يضر بالركبتين». البحث يظهر العكس. العداؤون المنتظمون ليس لديهم **خطر متزايد لالتهاب المفاصل** — بل العكس، الحمل المعتدل يغذي الغضروف ويحافظ على صحته. مفاصلك ليست آلات تبلى، بل هياكل حية تتكيف مع الحمل. السبب الأكثر شيوعًا لإصابات الجري ليس الجري نفسه، بل **القفزات المفاجئة في الحمل** — عندما تفعل الكثير، بسرعة كبيرة، مبكرًا جدًا. دراسة حديثة على أكثر من 5200 عداء تظهر أن جرية واحدة تتجاوز أطول جرية في الشهر السابق بنسبة 10% تزيد خطر الإصابة بنسبة 64%.",
          pl: "Jeden z najbardziej uporczywych mitów biegowych: «bieganie niszczy kolana». Badania pokazują coś odwrotnego. Regularni biegacze **nie mają zwiększonego ryzyka artrozy** — wręcz przeciwnie, umiarkowane obciążenie odżywia chrząstkę i utrzymuje ją w zdrowiu. Twoje stawy to nie maszyny, które się zużywają, ale żywe struktury adaptujące się do obciążeń. Najczęstszą przyczyną kontuzji biegowych nie jest samo bieganie, ale **nagłe skoki obciążenia** — gdy robisz za dużo, za szybko, za wcześnie. Najnowsze badanie na ponad 5200 biegaczach pokazuje, że pojedynczy bieg przekraczający o 10% najdłuższy bieg poprzedniego miesiąca zwiększa ryzyko kontuzji o 64%.",
        },
      },
      {
        heading: {
          de: "Gestion intelligente de la charge",
          fr: "La gestion intelligente de la charge",
          en: "Smart load management",
          nl: "Slim belastingsmanagement",
          tr: "Akıllı yük yönetimi",
          ar: "إدارة الحمل الذكية",
          pl: "Inteligentne zarządzanie obciążeniem",
        },
        body: {
          de: "Die alte « 10%-Regel » (nie mehr als 10 % Wochenvolumen steigern) wird durch neue Daten nuanciert. Entscheidend ist nicht nur das Wochenvolumen, sondern vor allem: **vermeiden Sie plötzliche Spitzen in einzelnen Läufen**. Ihr Körper braucht Zeit, sich anzupassen. Sehnen und Knochen reagieren langsamer als Muskeln — sie brauchen 8 bis 12 Wochen, um sich einer neuen Belastung anzupassen. Praktisch bedeutet das: steigern Sie Dauer **oder** Intensität — nie beides gleichzeitig. Wechseln Sie leichte und intensive Tage ab. Und nach einer Pause (Urlaub, Krankheit): starten Sie bei 50 % Ihres vorherigen Niveaus. Geduld ist keine Schwäche — sie ist Ihr bester Schutzfaktor.",
          fr: "L'ancienne « règle des 10 % » (ne jamais augmenter le volume hebdomadaire de plus de 10 %) est nuancée par les données récentes. Ce qui compte n'est pas seulement le volume hebdomadaire, mais surtout : **évitez les pics soudains lors de sorties individuelles**. Votre corps a besoin de temps pour s'adapter. Les tendons et les os réagissent plus lentement que les muscles — ils nécessitent 8 à 12 semaines pour s'adapter à une nouvelle charge. En pratique : augmentez la durée **ou** l'intensité — jamais les deux en même temps. Alternez jours légers et jours intenses. Et après une pause (vacances, maladie) : reprenez à 50 % de votre niveau antérieur. La patience n'est pas une faiblesse — c'est votre meilleur facteur de protection.",
          en: "The old \"10% rule\" (never increase weekly volume by more than 10%) is being nuanced by new data. What matters is not just weekly volume, but above all: **avoid sudden spikes in individual runs**. Your body needs time to adapt. Tendons and bones respond more slowly than muscles — they need 8 to 12 weeks to adapt to new loads. In practice: increase duration **or** intensity — never both at once. Alternate light and hard days. And after a break (holiday, illness): restart at 50% of your previous level. Patience is not weakness — it's your best protective factor.",
          nl: "De oude « 10%-regel » (nooit meer dan 10% wekelijks volume verhogen) wordt genuanceerd door nieuwe data. Wat telt is niet alleen het wekelijks volume, maar vooral: **vermijd plotselinge pieken in individuele runs**. Uw lichaam heeft tijd nodig om zich aan te passen. Pezen en botten reageren langzamer dan spieren — ze hebben 8 tot 12 weken nodig om zich aan nieuwe belasting aan te passen. In de praktijk: verhoog duur **of** intensiteit — nooit beide tegelijk. Wissel lichte en zware dagen af. En na een pauze: herstart op 50% van uw vorige niveau. Geduld is geen zwakte — het is uw beste beschermende factor.",
          tr: "Eski «%10 kuralı» (haftalık hacmi hiçbir zaman %10'dan fazla artırmayın) yeni verilerle nüanslandırılmaktadır. Önemli olan sadece haftalık hacim değil, özellikle: **bireysel koşularda ani artışlardan kaçının**. Vücudunuzun adapte olması için zamana ihtiyacı var. Tendonlar ve kemikler kaslardan daha yavaş tepki verir — yeni yüklere adapte olmak için 8-12 haftaya ihtiyaç duyarlar. Pratikte: süreyi **veya** yoğunluğu artırın — ikisini aynı anda asla. Hafif ve yoğun günleri değiştirin. Bir aradan sonra: önceki seviyenizin %50'sinden başlayın. Sabır zayıflık değil — en iyi koruyucu faktörünüzdür.",
          ar: "«قاعدة 10%» القديمة (لا تزيد الحجم الأسبوعي بأكثر من 10%) يتم تدقيقها بالبيانات الحديثة. المهم ليس فقط الحجم الأسبوعي، بل بالأخص: **تجنب القفزات المفاجئة في الجريات الفردية**. جسمك يحتاج وقتًا للتكيف. الأوتار والعظام تستجيب أبطأ من العضلات — تحتاج 8 إلى 12 أسبوعًا للتكيف مع أحمال جديدة. عمليًا: زِد المدة **أو** الشدة — لا الاثنين معًا. بدّل بين أيام خفيفة وأيام مكثفة. وبعد استراحة: ابدأ بـ50% من مستواك السابق. الصبر ليس ضعفًا — إنه أفضل عامل حماية لك.",
          pl: "Stara «zasada 10%» (nigdy nie zwiększaj tygodniowego wolumenu o więcej niż 10%) jest udoskonalana przez nowe dane. Ważny jest nie tylko wolumen tygodniowy, ale przede wszystkim: **unikaj nagłych skoków w pojedynczych biegach**. Twoje ciało potrzebuje czasu na adaptację. Ścięgna i kości reagują wolniej niż mięśnie — potrzebują 8-12 tygodni na adaptację do nowych obciążeń. W praktyce: zwiększaj czas trwania **lub** intensywność — nigdy obu naraz. Zmieniaj dni lekkie i ciężkie. A po przerwie: zacznij od 50% poprzedniego poziomu. Cierpliwość to nie słabość — to Twój najlepszy czynnik ochronny.",
        },
        infographic: "movement",
      },
      {
        heading: {
          de: "Die goldene Regel unserer Running Clinic",
          fr: "La règle d'or de notre Running Clinic",
          en: "Our Running Clinic's golden rule",
          nl: "De gouden regel van onze Running Clinic",
          tr: "Running Clinic'imizin altın kuralı",
          ar: "القاعدة الذهبية لعيادة الجري",
          pl: "Złota zasada naszej Running Clinic",
        },
        body: {
          de: "> *« Ihr Körper verträgt fast alles — wenn Sie ihm die Zeit geben, sich anzupassen. »*\n\nDiese Philosophie leitet uns in der Running Clinic. Verletzungen entstehen selten durch « zu viel Laufen », sondern durch **zu schnelle Veränderungen**. Ihr Körper ist ein Meister der Anpassung: Knochen werden dichter, Sehnen widerstandsfähiger, Muskeln kräftiger — wenn die Belastung progressiv gesteigert wird. Das Ziel ist nicht weniger Laufen, sondern **klügeres** Laufen. Und das beginnt damit, auf die Signale Ihres Körpers zu hören: leichte Steifheit nach einem langen Lauf ist normal; Schmerz, der von Lauf zu Lauf schlimmer wird, ist ein Signal zum Anpassen — nicht zum Aufhören.",
          fr: "> *« Votre corps supporte presque tout — si vous lui donnez le temps de s'adapter. »*\n\nCette philosophie guide notre Running Clinic. Les blessures surviennent rarement à cause de « trop de course », mais à cause de **changements trop rapides**. Votre corps est un maître de l'adaptation : les os deviennent plus denses, les tendons plus résistants, les muscles plus forts — si la charge est augmentée progressivement. L'objectif n'est pas de courir moins, mais de courir **plus intelligemment**. Et cela commence par écouter les signaux de votre corps : une légère raideur après une longue sortie est normale ; une douleur qui s'aggrave de course en course est un signal pour s'adapter — pas pour s'arrêter.",
          en: "> *\"Your body can handle almost anything — if you give it time to adapt.\"*\n\nThis philosophy guides our Running Clinic. Injuries rarely happen because of \"too much running\", but because of **too-rapid changes**. Your body is a master of adaptation: bones become denser, tendons more resilient, muscles stronger — if load is increased progressively. The goal is not to run less, but to run **smarter**. And that starts with listening to your body's signals: mild stiffness after a long run is normal; pain that worsens from run to run is a signal to adapt — not to stop.",
          nl: "> *« Uw lichaam kan bijna alles aan — als u het de tijd geeft om zich aan te passen. »*\n\nDeze filosofie leidt onze Running Clinic. Blessures ontstaan zelden door « te veel lopen », maar door **te snelle veranderingen**. Uw lichaam is een meester in aanpassing: botten worden dichter, pezen veerkrachtiger, spieren sterker — als de belasting progressief wordt verhoogd. Het doel is niet minder lopen, maar **slimmer** lopen. En dat begint met luisteren naar de signalen van uw lichaam: lichte stijfheid na een lange loop is normaal; pijn die van loop tot loop verergert is een signaal om aan te passen — niet om te stoppen.",
          tr: "> *« Vücudunuz neredeyse her şeyi kaldırabilir — eğer ona adapte olması için zaman verirseniz. »*\n\nBu felsefe Running Clinic'imize yön verir. Yaralanmalar nadiren «çok fazla koşu» yüzünden, **çok hızlı değişiklikler** yüzünden olur. Vücudunuz bir adaptasyon ustasıdır: kemikler daha yoğun, tendonlar daha dirençli, kaslar daha güçlü olur — yük kademeli olarak artırılırsa. Amaç daha az koşmak değil, **daha akıllı** koşmaktır. Ve bu, vücudunuzun sinyallerini dinlemekle başlar.",
          ar: "> *«جسمك يتحمل كل شيء تقريبًا — إذا أعطيته الوقت للتكيف.»*\n\nهذه الفلسفة توجه عيادة الجري لدينا. الإصابات نادرًا ما تحدث بسبب «الجري الكثير»، بل بسبب **التغييرات السريعة جدًا**. جسمك سيد التكيف: العظام تصبح أكثر كثافة، الأوتار أكثر مرونة، العضلات أقوى — إذا زادت الأحمال تدريجيًا. الهدف ليس الجري أقل، بل الجري **بذكاء أكبر**. وهذا يبدأ بالاستماع لإشارات جسمك: التيبس الخفيف بعد جرية طويلة طبيعي؛ الألم الذي يسوء من جرية لأخرى إشارة للتكيف — لا للتوقف.",
          pl: "> *« Twoje ciało zniesie prawie wszystko — jeśli dasz mu czas na adaptację. »*\n\nTa filozofia kieruje naszą Running Clinic. Kontuzje rzadko powstają z powodu «zbyt dużo biegania», ale z powodu **zbyt szybkich zmian**. Twoje ciało jest mistrzem adaptacji: kości stają się gęstsze, ścięgna bardziej odporne, mięśnie silniejsze — jeśli obciążenie zwiększa się stopniowo. Celem nie jest bieganie mniej, ale bieganie **mądrzej**. A to zaczyna się od słuchania sygnałów ciała: lekka sztywność po długim biegu jest normalna; ból narastający z biegu na bieg to sygnał do dostosowania — nie do rezygnacji.",
        },
      },
      {
        heading: {
          de: "3 Reflexe für verletzungsfreies Laufen",
          fr: "3 réflexes pour courir sans blessure",
          en: "3 reflexes for injury-free running",
          nl: "3 reflexen voor blessurevrij lopen",
          tr: "Sakatlıksız koşu için 3 refleks",
          ar: "3 ردود فعل للجري بدون إصابة",
          pl: "3 odruchy dla biegania bez kontuzji",
        },
        body: {
          de: "**1. Renforcement musculaire** — Hüftabduktoren, Waden und ischiocrurale Muskulatur 2× pro Woche gezielt kräftigen. Das reduziert nachweislich das Verletzungsrisiko bei Läufern und verbessert die Laufökonomie.\n\n**2. Schlaf und Erholung** — Mindestens 7–8 Stunden Schlaf und 1–2 Ruhetage pro Woche sind nicht optional — sie sind Teil Ihres Trainings. Während der Ruhe adaptiert sich Ihr Gewebe.\n\n**3. Professionelle Laufanalyse** — Kadenz, Schrittlänge, Fußaufsatz: kleine technische Anpassungen können große Wirkung haben. In unserer Running Clinic in Eupen analysieren wir Ihren individuellen Laufstil und geben Ihnen konkrete Tipps.",
          fr: "**1. Renforcement musculaire** — Renforcez abducteurs de hanche, mollets et ischio-jambiers 2× par semaine. Cela réduit de manière prouvée le risque de blessure chez les coureurs et améliore l'économie de course.\n\n**2. Sommeil et récupération** — Minimum 7–8 heures de sommeil et 1–2 jours de repos par semaine ne sont pas optionnels — ils font partie de votre entraînement. C'est au repos que vos tissus s'adaptent.\n\n**3. Analyse de course professionnelle** — Cadence, longueur de foulée, attaque du pied : de petits ajustements techniques peuvent avoir un grand impact. Dans notre Running Clinic à Eupen, nous analysons votre style de course et vous donnons des conseils concrets.",
          en: "**1. Strength training** — Strengthen hip abductors, calves and hamstrings 2× per week. This is proven to reduce injury risk in runners and improves running economy.\n\n**2. Sleep and recovery** — Minimum 7–8 hours of sleep and 1–2 rest days per week are not optional — they are part of your training. Tissue adaptation happens during rest.\n\n**3. Professional gait analysis** — Cadence, stride length, foot strike: small technical adjustments can have a big impact. At our Running Clinic in Eupen, we analyse your individual running style and give you concrete tips.",
          nl: "**1. Krachttraining** — Versterk heupabductoren, kuiten en hamstrings 2× per week. Dit vermindert aantoonbaar het blessurerisico bij lopers en verbetert de loopeconomie.\n\n**2. Slaap en herstel** — Minimaal 7–8 uur slaap en 1–2 rustdagen per week zijn niet optioneel — ze maken deel uit van uw training. Weefselaanpassing gebeurt tijdens rust.\n\n**3. Professionele loopanalyse** — Cadans, paslengte, voetlanding: kleine technische aanpassingen kunnen een groot effect hebben. In onze Running Clinic in Eupen analyseren we uw individuele loopstijl en geven concrete tips.",
          tr: "**1. Güç antrenmanı** — Kalça abduktörlerini, baldırları ve hamstringleri haftada 2× güçlendirin. Bu, koşucularda yaralanma riskini kanıtlanmış şekilde azaltır ve koşu ekonomisini iyileştirir.\n\n**2. Uyku ve toparlanma** — Minimum 7–8 saat uyku ve haftada 1–2 dinlenme günü isteğe bağlı değildir — antrenmanınızın parçasıdır. Doku adaptasyonu dinlenme sırasında gerçekleşir.\n\n**3. Profesyonel koşu analizi** — Kadans, adım uzunluğu, ayak vuruşu: küçük teknik ayarlamalar büyük etki yaratabilir. Eupen'deki Running Clinic'imizde bireysel koşu stilinizi analiz eder ve somut ipuçları veririz.",
          ar: "**1. تدريب القوة** — قوّ مبعدات الورك والساق وأوتار الركبة مرتين أسبوعيًا. هذا يقلل بشكل مثبت خطر الإصابة عند العدائين ويحسن اقتصاد الجري.\n\n**2. النوم والتعافي** — 7-8 ساعات نوم كحد أدنى و1-2 يوم راحة أسبوعيًا ليست اختيارية — إنها جزء من تدريبك. تكيف الأنسجة يحدث أثناء الراحة.\n\n**3. تحليل جري مهني** — الإيقاع، طول الخطوة، ملامسة القدم: تعديلات تقنية صغيرة يمكن أن يكون لها تأثير كبير. في عيادة الجري في Eupen، نحلل أسلوب جريك ونقدم نصائح عملية.",
          pl: "**1. Trening siłowy** — Wzmacniaj odwodziciele bioder, łydki i mięśnie dwugłowe uda 2× w tygodniu. To udowodniono, że zmniejsza ryzyko kontuzji u biegaczy i poprawia ekonomię biegu.\n\n**2. Sen i regeneracja** — Minimum 7–8 godzin snu i 1–2 dni odpoczynku w tygodniu nie są opcjonalne — są częścią Twojego treningu. Adaptacja tkanek zachodzi podczas odpoczynku.\n\n**3. Profesjonalna analiza chodu** — Kadencja, długość kroku, sposób stawiania stopy: małe techniczne korekty mogą mieć duży wpływ. W naszej Running Clinic w Eupen analizujemy Twój indywidualny styl biegu i dajemy konkretne wskazówki.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "Wann zum Spezialisten?",
          fr: "Quand consulter un spécialiste ?",
          en: "When to see a specialist?",
          nl: "Wanneer naar een specialist?",
          tr: "Ne zaman bir uzmana gitmeli?",
          ar: "متى تستشير متخصصًا؟",
          pl: "Kiedy udać się do specjalisty?",
        },
        body: {
          de: "Die meisten Laufbeschwerden sind vorübergehend und klingen mit Anpassung der Belastung ab. Suchen Sie jedoch professionelle Hilfe wenn: der **Schmerz seit mehr als 2 Wochen** besteht und sich nicht bessert, der Schmerz **während des Laufens zunimmt** (nicht nur danach), Sie eine **Schwellung oder Morgensteifigkeit** bemerken, die nicht nachlässt, oder wenn Sie Ihren **Laufstil verändert** haben, um den Schmerz zu kompensieren. Früh handeln bedeutet schneller zurückkehren. In der Praxis Loten in Eupen analysiert Thom Petit Ihren Laufstil, identifiziert die Ursache und erstellt mit Ihnen einen Plan für die Rückkehr zum schmerzfreien Laufen.",
          fr: "La plupart des douleurs liées à la course sont temporaires et s'atténuent avec l'adaptation de la charge. Consultez cependant un professionnel si : la **douleur persiste depuis plus de 2 semaines** sans amélioration, la douleur **augmente pendant la course** (pas seulement après), vous remarquez un **gonflement ou une raideur matinale** persistante, ou si vous avez **modifié votre foulée** pour compenser la douleur. Agir tôt, c'est revenir plus vite. Au cabinet Praxis Loten à Eupen, Thom Petit analyse votre foulée, identifie la cause et établit avec vous un plan de retour à la course sans douleur.",
          en: "Most running-related complaints are temporary and resolve with load adjustment. However, seek professional help if: **pain persists for more than 2 weeks** without improvement, pain **increases during running** (not just after), you notice **swelling or morning stiffness** that doesn't subside, or if you've **changed your running form** to compensate for pain. Acting early means returning sooner. At Praxis Loten in Eupen, Thom Petit analyses your gait, identifies the cause and creates a plan with you for pain-free return to running.",
          nl: "De meeste loopklachten zijn tijdelijk en verminderen met aanpassing van de belasting. Zoek echter professionele hulp als: de **pijn langer dan 2 weken** aanhoudt zonder verbetering, de pijn **toeneemt tijdens het lopen** (niet alleen erna), u **zwelling of ochtendstijfheid** opmerkt die niet afneemt, of als u uw **loopstijl hebt aangepast** om de pijn te compenseren. Vroeg handelen betekent sneller terugkeren. Bij Praxis Loten in Eupen analyseert Thom Petit uw loopstijl en maakt een plan voor pijnvrij terugkeren.",
          tr: "Koşuyla ilgili şikayetlerin çoğu geçicidir ve yük ayarlamasıyla düzelir. Ancak şu durumlarda profesyonel yardım arayın: **ağrı 2 haftadan fazla** iyileşmeden devam ediyorsa, ağrı **koşu sırasında artıyorsa** (sadece sonra değil), azalmayan **şişlik veya sabah sertliği** fark ediyorsanız, veya ağrıyı telafi etmek için **koşu formunuzu değiştirdiyseniz**. Erken davranmak daha hızlı dönmek demektir. Eupen'de Praxis Loten'de Thom Petit koşu stilinizi analiz eder ve ağrısız koşuya dönüş planı oluşturur.",
          ar: "معظم آلام الجري مؤقتة وتتحسن مع تعديل الحمل. لكن اطلب المساعدة المهنية إذا: **استمر الألم أكثر من أسبوعين** دون تحسن، الألم **يزداد أثناء الجري** (ليس فقط بعده)، لاحظت **تورمًا أو تيبسًا صباحيًا** لا يزول، أو إذا **غيرت أسلوب جريك** لتعويض الألم. التصرف مبكرًا يعني العودة أسرع. في Praxis Loten في Eupen، يحلل ثوم بيتي أسلوب جريك ويضع خطة للعودة بدون ألم.",
          pl: "Większość dolegliwości biegowych jest tymczasowa i ustępuje z dostosowaniem obciążeń. Szukaj jednak profesjonalnej pomocy jeśli: **ból utrzymuje się ponad 2 tygodnie** bez poprawy, ból **narasta podczas biegu** (nie tylko po), zauważasz **obrzęk lub poranną sztywność** która nie ustępuje, lub **zmieniłeś technikę biegu** by kompensować ból. Działanie wcześnie to szybszy powrót. W Praxis Loten w Eupen, Thom Petit analizuje Twój styl biegu i tworzy plan powrotu do biegania bez bólu.",
        },
      },
      {
        heading: {
          de: "Bei Praxis Loten in Eupen: unsere Running Clinic",
          fr: "Au cabinet Praxis Loten à Eupen : notre Running Clinic",
          en: "At Praxis Loten in Eupen: our Running Clinic",
          nl: "Bij Praxis Loten in Eupen: onze Running Clinic",
          tr: "Eupen'de Praxis Loten'de: Running Clinic'imiz",
          ar: "في Praxis Loten في Eupen: عيادة الجري لدينا",
          pl: "W Praxis Loten w Eupen: nasza Running Clinic",
        },
        body: {
          de: "**1. Videogestützte Laufanalyse** — Wir filmen Ihren Laufstil auf dem Laufband und analysieren Kadenz, Fußaufsatz, Knieachse und Beckenrotation in Echtzeit.\n\n**2. Individueller Trainingsplan** — Basierend auf Ihrer Analyse erhalten Sie einen progressiven Belastungsplan, der Ihre Ziele respektiert und Verletzungen vorbeugt.\n\n**3. Gezieltes Kräftigungsprogramm** — Spezifische Übungen für die läufertypischen Schwachstellen: Hüfte, Waden, Rumpfstabilität — mit BFR-Training (Blutflussrestriktionstraining) als Option bei Sehnenproblemen.\n\n**4. Beratung zu Schuhen und Ausrüstung** — Keine pauschale Empfehlung, sondern individuelle Beratung auf Basis Ihrer Fußform, Ihres Laufstils und Ihrer Ziele.",
          fr: "**1. Analyse de course vidéo** — Nous filmons votre foulée sur tapis roulant et analysons cadence, attaque du pied, axe du genou et rotation du bassin en temps réel.\n\n**2. Plan d'entraînement individuel** — Sur base de votre analyse, vous recevez un plan de charge progressif qui respecte vos objectifs et prévient les blessures.\n\n**3. Programme de renforcement ciblé** — Exercices spécifiques pour les faiblesses typiques du coureur : hanche, mollets, stabilité du tronc — avec l'entraînement BFR (restriction du flux sanguin) comme option pour les problèmes tendineux.\n\n**4. Conseil en chaussures et équipement** — Pas de recommandation générique, mais un conseil individuel basé sur votre morphologie, votre foulée et vos objectifs.",
          en: "**1. Video-based gait analysis** — We film your running style on the treadmill and analyse cadence, foot strike, knee alignment and pelvic rotation in real time.\n\n**2. Individual training plan** — Based on your analysis, you receive a progressive loading plan that respects your goals and prevents injuries.\n\n**3. Targeted strengthening programme** — Specific exercises for typical runner weaknesses: hips, calves, core stability — with BFR training (blood flow restriction) as an option for tendon issues.\n\n**4. Footwear and equipment advice** — No generic recommendations, but individual advice based on your foot shape, running style and goals.",
          nl: "**1. Videogestuurde loopanalyse** — We filmen uw loopstijl op de loopband en analyseren cadans, voetlanding, knie-as en bekkenrotatie in real time.\n\n**2. Individueel trainingsplan** — Op basis van uw analyse krijgt u een progressief belastingsplan dat uw doelen respecteert en blessures voorkomt.\n\n**3. Gericht versterkingsprogramma** — Specifieke oefeningen voor typische loperzwaktes: heup, kuiten, rompstabiliteit — met BFR-training als optie bij peesproblemen.\n\n**4. Schoen- en uitrustingsadvies** — Geen generieke aanbeveling, maar individueel advies op basis van uw voettype, loopstijl en doelen.",
          tr: "**1. Video destekli koşu analizi** — Koşu bandında koşu stilinizi filme alır ve kadans, ayak vuruşu, diz hizası ve pelvis rotasyonunu gerçek zamanlı analiz ederiz.\n\n**2. Bireysel antrenman planı** — Analizinize dayanarak, hedeflerinize saygı duyan ve yaralanmaları önleyen kademeli bir yükleme planı alırsınız.\n\n**3. Hedefli güçlendirme programı** — Tipik koşucu zayıflıkları için spesifik egzersizler: kalça, baldırlar, gövde stabilitesi — tendon sorunları için BFR antrenmanı seçeneğiyle.\n\n**4. Ayakkabı ve ekipman danışmanlığı** — Genel tavsiye değil, ayak şeklinize, koşu stilinize ve hedeflerinize dayalı bireysel danışmanlık.",
          ar: "**1. تحليل جري بالفيديو** — نصور أسلوب جريك على جهاز المشي ونحلل الإيقاع وملامسة القدم ومحور الركبة ودوران الحوض في الوقت الفعلي.\n\n**2. خطة تدريب فردية** — بناءً على تحليلك، تتلقى خطة حمل تدريجية تحترم أهدافك وتمنع الإصابات.\n\n**3. برنامج تقوية مستهدف** — تمارين محددة لنقاط الضعف النموذجية للعداء: الورك، الساق، استقرار الجذع — مع تدريب BFR كخيار لمشاكل الأوتار.\n\n**4. نصائح الأحذية والمعدات** — ليس توصية عامة، بل نصيحة فردية بناءً على شكل قدمك وأسلوب جريك وأهدافك.",
          pl: "**1. Analiza biegu wideo** — Filmujemy Twój styl biegu na bieżni i analizujemy kadencję, kontakt stopy, oś kolana i rotację miednicy w czasie rzeczywistym.\n\n**2. Indywidualny plan treningowy** — Na podstawie analizy otrzymujesz progresywny plan obciążeń respektujący Twoje cele i zapobiegający kontuzjom.\n\n**3. Ukierunkowany program wzmacniający** — Specyficzne ćwiczenia dla typowych słabości biegacza: biodra, łydki, stabilność tułowia — z treningiem BFR jako opcją przy problemach ze ścięgnami.\n\n**4. Doradztwo ws. obuwia i sprzętu** — Nie ogólne zalecenie, lecz indywidualna porada oparta na kształcie stopy, stylu biegu i celach.",
        },
      },
    ],
    keyPoints: {
      de: ["Laufen stärkt Ihre Gelenke — es nutzt sie nicht ab", "Plötzliche Belastungsspitzen sind der Hauptrisikofaktor, nicht das Laufen selbst", "Krafttraining 2×/Woche schützt Sehnen und Gelenke nachweislich", "Schlaf und Erholung sind Teil des Trainings, nicht sein Gegenteil", "Videogestützte Laufanalyse in Eupen bei Praxis Loten"],
      fr: ["Courir renforce vos articulations — ça ne les use pas", "Les pics de charge soudains sont le facteur de risque principal, pas la course", "Renforcement 2×/semaine protège tendons et articulations", "Sommeil et récupération font partie de l'entraînement", "Analyse de course vidéo à Eupen chez Praxis Loten"],
      en: ["Running strengthens your joints — it doesn't wear them out", "Sudden load spikes are the main risk factor, not running itself", "Strength training 2×/week protects tendons and joints", "Sleep and recovery are part of training, not its opposite", "Video gait analysis in Eupen at Praxis Loten"],
      nl: ["Lopen versterkt uw gewrichten — het slijt ze niet", "Plotselinge belastingspieken zijn de hoofdrisicofactor, niet het lopen zelf", "Krachttraining 2×/week beschermt pezen en gewrichten", "Slaap en herstel maken deel uit van training", "Videoloopanalyse in Eupen bij Praxis Loten"],
      tr: ["Koşu eklemlerinizi güçlendirir — onları yıpratmaz", "Ani yük artışları ana risk faktörüdür, koşunun kendisi değil", "Haftada 2× güç antrenmanı tendonları ve eklemleri korur", "Uyku ve toparlanma antrenmanın parçasıdır", "Eupen'de Praxis Loten'de video koşu analizi"],
      ar: ["الجري يقوي مفاصلك — لا يبليها", "القفزات المفاجئة في الحمل هي عامل الخطر الرئيسي، وليس الجري نفسه", "تدريب القوة مرتين/أسبوع يحمي الأوتار والمفاصل", "النوم والتعافي جزء من التدريب", "تحليل جري بالفيديو في Eupen في Praxis Loten"],
      pl: ["Bieganie wzmacnia stawy — nie niszczy ich", "Nagłe skoki obciążenia to główny czynnik ryzyka, nie samo bieganie", "Trening siłowy 2×/tydzień chroni ścięgna i stawy", "Sen i regeneracja są częścią treningu", "Analiza biegu wideo w Eupen w Praxis Loten"],
    },
    ctaText: {
      de: "Laufbeschwerden oder Laufziel? Vereinbaren Sie eine Analyse bei Thom Petit in Eupen.",
      fr: "Douleurs de course ou objectif sportif ? Prenez rendez-vous avec Thom Petit à Eupen.",
      en: "Running complaints or running goal? Book an analysis with Thom Petit in Eupen.",
      nl: "Loopklachten of loopdoel? Maak een afspraak bij Thom Petit in Eupen.",
      tr: "Koşu şikayetleri veya hedefi mi? Eupen'de Thom Petit ile analiz randevusu alın.",
      ar: "شكاوى جري أو هدف رياضي؟ احجز تحليلاً مع ثوم بيتي في Eupen.",
      pl: "Dolegliwości biegowe lub cel sportowy? Zarezerwuj analizę u Thom Petit w Eupen.",
    },
    bibliography: [
      "Nielsen RØ et al. How much running is too much? Identifying high-risk running sessions in a 5200-person cohort study. Br J Sports Med. 2025;59:1203-1210.",
      "Videbæk S et al. Incidence of Running-Related Injuries Per 1000 h of Running in Different Types of Runners: A Systematic Review and Meta-Analysis. Sports Med. 2015;45(7):1017-1026.",
      "Lauersen JB et al. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-877.",
      "Bramah C et al. Is There a Pathological Gait Associated With Common Soft Tissue Running Injuries? Am J Sports Med. 2018;46(12):3023-3031.",
      "Alentorn-Geli E et al. Prevention of non-contact anterior cruciate ligament injuries in soccer players. Part 2: A review of prevention programs aimed to modify risk factors and to reduce injury rates. Knee Surg Sports Traumatol Arthrosc. 2009;17(8):859-879.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine ärztliche oder physiotherapeutische Konsultation. Bei anhaltenden oder schweren Beschwerden wenden Sie sich bitte an einen Gesundheitsdienstleister.",
      fr: "Cet article a une vocation purement informative et ne remplace en aucun cas une consultation médicale ou kinésithérapeutique. En cas de symptômes persistants ou sévères, consultez un professionnel de santé.",
      en: "This article is for informational purposes only and does not replace a medical or physiotherapy consultation. If you experience persistent or severe symptoms, please consult a healthcare professional.",
      nl: "Dit artikel is uitsluitend bedoeld ter informatie en vervangt geen medisch of fysiotherapeutisch consult. Raadpleeg bij aanhoudende of ernstige klachten een zorgverlener.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır ve tıbbi veya fizyoterapi konsültasyonunun yerini almaz. Kalıcı veya şiddetli semptomlar durumunda bir sağlık uzmanına danışın.",
      ar: "هذا المقال لأغراض إعلامية فقط ولا يحل محل الاستشارة الطبية أو العلاجية. في حالة الأعراض المستمرة أو الشديدة، يرجى استشارة أخصائي صحي.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny i nie zastępuje konsultacji lekarskiej lub fizjoterapeutycznej. W przypadku utrzymujących się lub nasilonych objawów skonsultuj się ze specjalistą.",
    },
  },

  "lymphdrainage-wann-wie": {
    title: {
      de: "Lymphdrainage in Eupen — für wen und wann?",
      fr: "Drainage lymphatique à Eupen — pour qui et quand ?",
      en: "Lymphatic drainage in Eupen — for whom and when?",
      nl: "Lymfedrainage in Eupen — voor wie en wanneer?",
      tr: "Eupen'de lenf drenajı — kim için ve ne zaman?",
      ar: "الصرف اللمفاوي في Eupen — لمن ومتى؟",
      pl: "Drenaż limfatyczny w Eupen — dla kogo i kiedy?",
    },
    category: {
      de: "Lymphdrainage", fr: "Drainage Lymphatique", en: "Lymphatic Drainage",
      nl: "Lymfedrainage", tr: "Lenf Drenajı", ar: "الصرف اللمفاوي", pl: "Drenaż Limfatyczny",
    },
    date: "2024-09-10",
    readMin: 6,
    color: "from-teal-600 to-teal-800",
    authorSlug: "fabienne-dormann",
    authorName: "Fabienne Dormann",
    intro: {
      de: "Schwellungen und Schweregefühl in den Gliedmaßen können den Alltag stark beeinträchtigen. Die manuelle Lymphdrainage nach der Methode Leduc ist eine **spezialisierte medizinische Behandlung**, die weit über eine einfache Massage hinausgeht. Sie aktiviert gezielt das Lymphsystem und hilft Ihrem Körper, überschüssige Flüssigkeit abzutransportieren. In unserer Praxis in Eupen begleitet Fabienne Dormann seit Jahren Patienten mit Ödemen und Lymphödemen — mit einem individuellen, evidenzbasierten Ansatz.",
      fr: "Les gonflements et la sensation de lourdeur dans les membres peuvent fortement affecter le quotidien. Le drainage lymphatique manuel selon la méthode Leduc est un **traitement médical spécialisé** qui va bien au-delà d'un simple massage. Il active de manière ciblée le système lymphatique et aide votre corps à évacuer l'excès de liquide. Dans notre cabinet à Eupen, Fabienne Dormann accompagne depuis des années les patients souffrant d'œdèmes et de lymphœdèmes — avec une approche individuelle et fondée sur les preuves.",
      en: "Swelling and heaviness in the limbs can significantly impact daily life. Manual lymphatic drainage using the Leduc method is a **specialised medical treatment** that goes far beyond a simple massage. It specifically activates the lymphatic system and helps your body remove excess fluid. At our practice in Eupen, Fabienne Dormann has been supporting patients with oedema and lymphoedema for years — with an individual, evidence-based approach.",
      nl: "Zwellingen en een zwaar gevoel in de ledematen kunnen het dagelijks leven sterk beïnvloeden. Manuele lymfedrainage volgens de Leduc-methode is een **gespecialiseerde medische behandeling** die veel verder gaat dan een eenvoudige massage. Het activeert gericht het lymfesysteem en helpt uw lichaam overtollig vocht af te voeren. In onze praktijk in Eupen begeleidt Fabienne Dormann al jaren patiënten met oedeem en lymfoedeem — met een individuele, evidence-based aanpak.",
      tr: "Uzuvlarda şişlik ve ağırlık hissi günlük yaşamı önemli ölçüde etkileyebilir. Leduc yöntemine göre manuel lenf drenajı, basit bir masajın çok ötesine geçen **uzmanlaşmış bir tıbbi tedavidir**. Lenf sistemini hedefli olarak aktive eder ve vücudunuzun fazla sıvıyı uzaklaştırmasına yardımcı olur. Eupen'deki kliniğimizde Fabienne Dormann, ödem ve lenfödem hastalarına yıllardır bireysel, kanıta dayalı bir yaklaşımla eşlik etmektedir.",
      ar: "التورمات والشعور بالثقل في الأطراف يمكن أن تؤثر بشكل كبير على الحياة اليومية. الصرف اللمفاوي اليدوي وفق طريقة Leduc هو **علاج طبي متخصص** يتجاوز بكثير مجرد التدليك. ينشط الجهاز اللمفاوي بشكل مستهدف ويساعد جسمك على إزالة السوائل الزائدة. في عيادتنا في Eupen، ترافق فابيان دورمان المرضى الذين يعانون من الوذمة والوذمة اللمفية منذ سنوات — بنهج فردي قائم على الأدلة.",
      pl: "Obrzęki i uczucie ciężkości w kończynach mogą znacząco wpływać na codzienne życie. Ręczny drenaż limfatyczny metodą Leduc to **specjalistyczne leczenie medyczne**, które wykracza daleko poza zwykły masaż. Celowo aktywuje układ limfatyczny i pomaga ciału usuwać nadmiar płynów. W naszej praktyce w Eupen, Fabienne Dormann od lat wspiera pacjentów z obrzękami i obrzękiem limfatycznym — z indywidualnym podejściem opartym na dowodach.",
    },
    sections: [
      {
        heading: {
          de: "« Drainage ist nur ein Wellness-Massage » — falsch",
          fr: "« Le drainage, c'est juste un massage » — faux",
          en: "\"Drainage is just a massage\" — wrong",
          nl: "« Drainage is gewoon een massage » — fout",
          tr: "« Drenaj sadece bir masajdır » — yanlış",
          ar: "«الدرينج مجرد تدليك» — خطأ",
          pl: "« Drenaż to tylko masaż » — nieprawda",
        },
        body: {
          de: "Ein häufiges Missverständnis: die manuelle Lymphdrainage (MLD) wäre eine einfache Entspannungsmassage. In Wirklichkeit ist sie eine **präzise medizinische Technik** mit spezifischem Druck, Rhythmus und Richtung — entwickelt, um das Lymphsystem physiologisch zu aktivieren. Die Griffe sind sanft (unter 40 mmHg Druck), aber ihre Wirkung ist messbar: Reduktion von Schwellung, Schmerzlinderung und Verbesserung der Gewebemobilität. Der Beweis: Studien zeigen eine signifikante Schmerzreduktion und eine verbesserte Lebensqualität bei Patienten mit Lymphödem nach Brustkrebsbehandlung. Die MLD nach Leduc — die Methode, die wir in Eupen anwenden — folgt dem natürlichen anatomischen Verlauf der Lymphbahnen.",
          fr: "Un malentendu fréquent : le drainage lymphatique manuel (DLM) serait un simple massage relaxant. En réalité, c'est une **technique médicale précise** avec une pression, un rythme et une direction spécifiques — conçue pour activer physiologiquement le système lymphatique. Les manœuvres sont douces (moins de 40 mmHg de pression), mais leur effet est mesurable : réduction du gonflement, soulagement de la douleur et amélioration de la mobilité tissulaire. La preuve : les études montrent une réduction significative de la douleur et une meilleure qualité de vie chez les patients avec lymphœdème après cancer du sein. Le DLM selon Leduc — la méthode que nous utilisons à Eupen — suit le trajet anatomique naturel des voies lymphatiques.",
          en: "A common misconception: manual lymphatic drainage (MLD) is just a relaxation massage. In reality, it is a **precise medical technique** with specific pressure, rhythm and direction — designed to physiologically activate the lymphatic system. The manoeuvres are gentle (under 40 mmHg pressure), but their effect is measurable: reduction of swelling, pain relief and improvement of tissue mobility. The evidence: studies show significant pain reduction and improved quality of life in patients with lymphoedema after breast cancer treatment. The Leduc method MLD — used at our practice in Eupen — follows the natural anatomical pathway of lymphatic vessels.",
          nl: "Een veelvoorkomend misverstand: manuele lymfedrainage (MLD) zou gewoon een ontspanningsmassage zijn. In werkelijkheid is het een **nauwkeurige medische techniek** met specifieke druk, ritme en richting — ontworpen om het lymfesysteem fysiologisch te activeren. De grepen zijn zacht (onder 40 mmHg druk), maar hun effect is meetbaar: vermindering van zwelling, pijnverlichting en verbetering van weefselmobiliteit. Het bewijs: studies tonen significante pijnreductie en verbeterde levenskwaliteit bij patiënten met lymfoedeem na borstkankerbehandeling. De Leduc-methode MLD — die we in Eupen toepassen — volgt het natuurlijke anatomische verloop van lymfevaten.",
          tr: "Yaygın bir yanlış anlama: manuel lenf drenajı (MLD) sadece bir gevşeme masajıdır. Gerçekte, lenf sistemini fizyolojik olarak aktive etmek için tasarlanmış, belirli basınç, ritim ve yöne sahip **hassas bir tıbbi tekniktir**. Hareketler naziktir (40 mmHg altında basınç), ancak etkileri ölçülebilir: şişlik azalması, ağrı rahatlaması ve doku hareketliliğinde iyileşme. Kanıt: çalışmalar, meme kanseri tedavisi sonrası lenfödemli hastalarda önemli ağrı azalması ve yaşam kalitesinde iyileşme göstermektedir. Eupen'de uyguladığımız Leduc yöntemi MLD, lenf damarlarının doğal anatomik yolunu takip eder.",
          ar: "سوء فهم شائع: الصرف اللمفاوي اليدوي (MLD) مجرد تدليك للاسترخاء. في الواقع، هو **تقنية طبية دقيقة** بضغط وإيقاع واتجاه محددين — مصممة لتنشيط الجهاز اللمفاوي فسيولوجيًا. الحركات لطيفة (أقل من 40 ملم زئبق ضغط)، لكن تأثيرها قابل للقياس: تقليل التورم وتخفيف الألم وتحسين حركية الأنسجة. الدليل: تظهر الدراسات انخفاضًا كبيرًا في الألم وتحسن نوعية الحياة لدى مرضى الوذمة اللمفية بعد علاج سرطان الثدي. طريقة Leduc التي نطبقها في Eupen تتبع المسار التشريحي الطبيعي للأوعية اللمفاوية.",
          pl: "Częste nieporozumienie: ręczny drenaż limfatyczny (MLD) to tylko masaż relaksacyjny. W rzeczywistości jest to **precyzyjna technika medyczna** o specyficznym ciśnieniu, rytmie i kierunku — zaprojektowana do fizjologicznej aktywacji układu limfatycznego. Chwyty są delikatne (poniżej 40 mmHg ciśnienia), ale ich efekt jest mierzalny: redukcja obrzęku, ulga w bólu i poprawa mobilności tkanek. Dowód: badania pokazują znaczną redukcję bólu i poprawę jakości życia u pacjentów z obrzękiem limfatycznym po leczeniu raka piersi. Metoda Leduc MLD — stosowana w naszej praktyce w Eupen — podąża za naturalnym anatomicznym przebiegiem naczyń limfatycznych.",
        },
      },
      {
        heading: {
          de: "Für wen ist die Lymphdrainage geeignet?",
          fr: "Pour qui le drainage est-il adapté ?",
          en: "Who is lymphatic drainage suitable for?",
          nl: "Voor wie is lymfedrainage geschikt?",
          tr: "Lenf drenajı kimin için uygundur?",
          ar: "لمن يناسب الصرف اللمفاوي؟",
          pl: "Dla kogo jest drenaż limfatyczny?",
        },
        body: {
          de: "Die Lymphdrainage ist, parmi de nombreuses indications, besonders wertvoll für : Patienten mit **Lymphödem nach Krebsbehandlung** (insbesondere nach Brustkrebs mit Lymphknotenentfernung), **postoperative Schwellungen** nach Knie- oder Hüftprothese, **chronische venöse Insuffizienz** mit Beinödemen, **Schwangere** mit geschwollenen Beinen, und Patienten nach **plastischen Eingriffen** oder Verletzungen mit anhaltender Schwellung. Die Technik wirkt nicht nur auf das Volumen, sondern auch auf die Schmerzwahrnehmung — durch eine beruhigende Wirkung auf das Nervensystem.",
          fr: "Le drainage lymphatique est, parmi de nombreuses indications, particulièrement précieux pour : les patients avec un **lymphœdème post-cancer** (notamment après cancer du sein avec ablation des ganglions), les **œdèmes post-opératoires** après prothèse de genou ou hanche, l'**insuffisance veineuse chronique** avec œdèmes des jambes, les **femmes enceintes** avec jambes gonflées, et les patients après **chirurgie esthétique** ou traumatismes avec gonflement persistant. La technique agit non seulement sur le volume, mais aussi sur la perception de la douleur — par un effet apaisant sur le système nerveux.",
          en: "Lymphatic drainage is, among many indications, particularly valuable for: patients with **post-cancer lymphoedema** (especially after breast cancer with lymph node removal), **post-operative swelling** after knee or hip replacement, **chronic venous insufficiency** with leg oedema, **pregnant women** with swollen legs, and patients after **cosmetic surgery** or injuries with persistent swelling. The technique acts not only on volume, but also on pain perception — through a calming effect on the nervous system.",
          nl: "Lymfedrainage is, onder vele indicaties, bijzonder waardevol voor: patiënten met **lymfoedeem na kankerbehandeling** (vooral na borstkanker met lymfeklierverwijdering), **postoperatieve zwellingen** na knie- of heupprothese, **chronische veneuze insufficiëntie** met beenoedeem, **zwangere vrouwen** met gezwollen benen, en patiënten na **cosmetische chirurgie** of verwondingen met aanhoudende zwelling. De techniek werkt niet alleen op volume, maar ook op pijnperceptie — door een kalmerend effect op het zenuwstelsel.",
          tr: "Lenf drenajı, birçok endikasyon arasında, özellikle şunlar için değerlidir: **kanser sonrası lenfödemli** hastalar (özellikle lenf düğümü çıkarılan meme kanseri sonrası), diz veya kalça protezi sonrası **ameliyat sonrası şişlik**, **kronik venöz yetmezlik** ile bacak ödemi, şişmiş bacaklı **hamileler**, ve kalıcı şişlik ile **estetik cerrahi** veya yaralanma sonrası hastalar. Teknik sadece hacme değil, ağrı algısına da etki eder — sinir sistemi üzerinde sakinleştirici bir etkiyle.",
          ar: "الصرف اللمفاوي، من بين العديد من المؤشرات، ذو قيمة خاصة لـ: المرضى الذين يعانون من **وذمة لمفية بعد السرطان** (خاصة بعد سرطان الثدي مع إزالة العقد اللمفاوية)، **التورمات بعد العملية** بعد استبدال الركبة أو الورك، **القصور الوريدي المزمن** مع وذمة الساق، **النساء الحوامل** ذوات الأرجل المتورمة، والمرضى بعد **الجراحة التجميلية** أو الإصابات مع تورم مستمر. التقنية لا تعمل فقط على الحجم، بل أيضًا على إدراك الألم — من خلال تأثير مهدئ على الجهاز العصبي.",
          pl: "Drenaż limfatyczny jest, wśród wielu wskazań, szczególnie wartościowy dla: pacjentów z **obrzękiem limfatycznym po leczeniu raka** (zwłaszcza po raku piersi z usunięciem węzłów chłonnych), **obrzęków pooperacyjnych** po protezie kolana lub biodra, **przewlekłej niewydolności żylnej** z obrzękiem nóg, **kobiet w ciąży** z opuchniętymi nogami, i pacjentów po **chirurgii estetycznej** lub urazach z utrzymującym się obrzękiem. Technika działa nie tylko na objętość, ale również na percepcję bólu — przez uspokajający wpływ na układ nerwowy.",
        },
      },
      {
        heading: {
          de: "Die goldene Regel der Lymphdrainage",
          fr: "La règle d'or du drainage lymphatique",
          en: "The golden rule of lymphatic drainage",
          nl: "De gouden regel van lymfedrainage",
          tr: "Lenf drenajının altın kuralı",
          ar: "القاعدة الذهبية للصرف اللمفاوي",
          pl: "Złota zasada drenażu limfatycznego",
        },
        body: {
          de: "> *« Die Drainage arbeitet nicht allein — es ist Teamarbeit zwischen Ihnen und Ihrer Therapeutin. »*\n\nLymphdrainage ist besonders wirksam, wenn sie Teil einer **kombinierten Entstauungstherapie** (KPE) ist. Die Hände der Therapeutin reaktivieren den Lymphfluss, aber um die Ergebnisse zu halten, ist Ihre Mitarbeit entscheidend: Kompressionsbandagen, Entstauungsübungen, Hautpflege und Selbstdrainage. Dieser ganzheitliche Ansatz — empfohlen von internationalen Leitlinien — maximiert den langfristigen Nutzen.",
          fr: "> *« Le drainage ne travaille pas seul — c'est une équipe entre vous et votre thérapeute. »*\n\nLe drainage lymphatique est d'autant plus efficace qu'il s'inscrit dans une **thérapie décongestive combinée** (TDC). Les mains de la thérapeute réactivent le flux lymphatique, mais pour maintenir les résultats, votre implication est essentielle : bandages de compression, exercices décongestifs, soins de la peau et auto-drainage. Cette approche globale — recommandée par les guidelines internationales — maximise les bénéfices à long terme.",
          en: "> *\"Drainage doesn't work alone — it's a team effort between you and your therapist.\"*\n\nLymphatic drainage is most effective when part of **combined decongestive therapy** (CDT). The therapist's hands reactivate lymphatic flow, but to maintain results, your involvement is essential: compression bandaging, decongestive exercises, skin care and self-drainage. This comprehensive approach — recommended by international guidelines — maximises long-term benefits.",
          nl: "> *« Drainage werkt niet alleen — het is teamwerk tussen u en uw therapeut. »*\n\nLymfedrainage is het meest effectief als onderdeel van **gecombineerde decongestieve therapie** (CDT). De handen van de therapeut reactiveren de lymfestroom, maar om resultaten te behouden is uw betrokkenheid essentieel: compressiebandages, decongestieve oefeningen, huidverzorging en zelfdrainage. Deze alomvattende aanpak — aanbevolen door internationale richtlijnen — maximaliseert de langetermijnvoordelen.",
          tr: "> *« Drenaj tek başına çalışmaz — siz ve terapistiniz arasında bir ekip çalışmasıdır. »*\n\nLenf drenajı, **kombine dekongestif tedavinin** (KDT) bir parçası olduğunda en etkilidir. Terapistin elleri lenf akışını yeniden aktive eder, ancak sonuçları sürdürmek için sizin katılımınız gereklidir: kompresyon bandajlama, dekongestif egzersizler, cilt bakımı ve kendi kendine drenaj.",
          ar: "> *«الدرينج لا يعمل وحده — إنه عمل جماعي بينك وبين معالجك.»*\n\nالصرف اللمفاوي يكون أكثر فعالية عندما يكون جزءًا من **العلاج الاحتقاني المشترك** (CDT). يدا المعالجة تعيدان تنشيط التدفق اللمفاوي، ولكن للحفاظ على النتائج، مشاركتك ضرورية: ضمادات ضغط، تمارين احتقانية، العناية بالبشرة والتصريف الذاتي. هذا النهج الشامل — الموصى به من المبادئ التوجيهية الدولية — يزيد الفوائد طويلة المدى.",
          pl: "> *« Drenaż nie działa sam — to praca zespołowa między Tobą a Twoim terapeutą. »*\n\nDrenaż limfatyczny jest najskuteczniejszy jako część **połączonej terapii odblokującej** (CDT). Ręce terapeutki reaktywują przepływ limfy, ale aby utrzymać wyniki, Twoje zaangażowanie jest niezbędne: bandażowanie kompresyjne, ćwiczenia odblokujące, pielęgnacja skóry i samodrenowanie. To kompleksowe podejście — zalecane przez międzynarodowe wytyczne — maksymalizuje korzyści długoterminowe.",
        },
      },
      {
        heading: {
          de: "3 Reflexe bei Schwellungen",
          fr: "3 réflexes en cas de gonflement",
          en: "3 reflexes for swelling",
          nl: "3 reflexen bij zwelling",
          tr: "Şişlik için 3 refleks",
          ar: "3 ردود فعل للتورم",
          pl: "3 odruchy przy obrzękach",
        },
        body: {
          de: "**1. Bewegen Sie sich regelmäßig** — Schon leichte Bewegung (Gehen, Radfahren, Schwimmen) aktiviert die Muskulatur und fördert den Lymphfluss. Ihre Muskeln sind eine natürliche « Pumpe » für die Lymphe.\n\n**2. Hochlagern und Kompression** — Bei Beinödemen: Beine regelmäßig hochlegen und ärztlich verordnete Kompressionsstrümpfe tragen. Die Kombination ist wirksamer als jedes Element allein.\n\n**3. Frühzeitig handeln** — Je schneller ein Ödem behandelt wird, desto besser die Prognose. Warten Sie nicht, bis die Schwellung chronisch wird. In Eupen stehen wir Ihnen kurzfristig zur Verfügung.",
          fr: "**1. Bougez régulièrement** — Même une activité légère (marche, vélo, natation) active la musculature et favorise le flux lymphatique. Vos muscles sont une « pompe » naturelle pour la lymphe.\n\n**2. Surélévation et compression** — En cas d'œdème des jambes : surélevez-les régulièrement et portez les bas de compression prescrits. La combinaison est plus efficace que chaque élément seul.\n\n**3. Agissez tôt** — Plus un œdème est traité rapidement, meilleur est le pronostic. N'attendez pas que le gonflement devienne chronique. À Eupen, nous pouvons vous recevoir rapidement.",
          en: "**1. Move regularly** — Even light activity (walking, cycling, swimming) activates muscles and promotes lymph flow. Your muscles are a natural \"pump\" for lymph.\n\n**2. Elevation and compression** — For leg oedema: elevate legs regularly and wear prescribed compression stockings. The combination is more effective than either alone.\n\n**3. Act early** — The sooner an oedema is treated, the better the prognosis. Don't wait until swelling becomes chronic. In Eupen, we can see you at short notice.",
          nl: "**1. Beweeg regelmatig** — Zelfs lichte activiteit (wandelen, fietsen, zwemmen) activeert de spieren en bevordert de lymfestroom. Uw spieren zijn een natuurlijke « pomp » voor lymfe.\n\n**2. Hoogleggen en compressie** — Bij beenoedeem: benen regelmatig hoogleggen en voorgeschreven compressiekousen dragen. De combinatie is effectiever dan elk element apart.\n\n**3. Handel vroeg** — Hoe sneller een oedeem behandeld wordt, hoe beter de prognose. Wacht niet tot de zwelling chronisch wordt. In Eupen kunnen wij u snel ontvangen.",
          tr: "**1. Düzenli hareket edin** — Hafif aktivite bile (yürüyüş, bisiklet, yüzme) kasları aktive eder ve lenf akışını destekler. Kaslarınız lenf için doğal bir « pompadır ».\n\n**2. Yükseltme ve kompresyon** — Bacak ödemi için: bacakları düzenli olarak yükseltin ve reçeteli kompresyon çorapları giyin. Kombinasyon, her birinden tek başına daha etkilidir.\n\n**3. Erken davranın** — Bir ödem ne kadar erken tedavi edilirse, prognoz o kadar iyi olur. Şişliğin kronikleşmesini beklemeyin. Eupen'de sizi kısa sürede görebiliriz.",
          ar: "**1. تحرك بانتظام** — حتى النشاط الخفيف (المشي، ركوب الدراجة، السباحة) ينشط العضلات ويعزز تدفق اللمف. عضلاتك هي «مضخة» طبيعية للمف.\n\n**2. الرفع والضغط** — لوذمة الساق: ارفع ساقيك بانتظام وارتدِ جوارب الضغط الموصوفة. الجمع أكثر فعالية من أي عنصر وحده.\n\n**3. تصرف مبكرًا** — كلما عولجت الوذمة أسرع، كان التشخيص أفضل. لا تنتظر حتى يصبح التورم مزمنًا. في Eupen، يمكننا استقبالك بسرعة.",
          pl: "**1. Ruszaj się regularnie** — Nawet lekka aktywność (spacer, jazda na rowerze, pływanie) aktywuje mięśnie i wspiera przepływ limfy. Twoje mięśnie to naturalna «pompa» dla limfy.\n\n**2. Unoszenie i kompresja** — Przy obrzęku nóg: regularnie unoś nogi i noś przepisane pończochy kompresyjne. Kombinacja jest skuteczniejsza niż każdy element z osobna.\n\n**3. Działaj wcześnie** — Im szybciej obrzęk jest leczony, tym lepsza prognoza. Nie czekaj, aż obrzęk stanie się przewlekły. W Eupen możemy przyjąć Cię w krótkim terminie.",
        },
        infographic: "reflexes",
      },
      {
        heading: {
          de: "Wann ist Lymphdrainage kontraindiziert?",
          fr: "Quand le drainage est-il contre-indiqué ?",
          en: "When is lymphatic drainage contraindicated?",
          nl: "Wanneer is lymfedrainage gecontra-indiceerd?",
          tr: "Lenf drenajı ne zaman kontrendikedir?",
          ar: "متى يكون الصرف اللمفاوي ممنوعًا؟",
          pl: "Kiedy drenaż limfatyczny jest przeciwwskazany?",
        },
        body: {
          de: "Die Sicherheit unserer Patienten hat absolute Priorität. Lymphdrainage darf **nicht** durchgeführt werden bei: **aktiver Infektion** (Erysipel, Cellulitis) im Behandlungsgebiet, Verdacht auf oder bestätigter **tiefer Venenthrombose**, **dekompensierter Herzinsuffizienz**, oder **unbehandeltem aktivem Krebs** im Drainagegebiet. Im Zweifelsfall arbeiten wir eng mit Ihrem behandelnden Arzt zusammen, um eine sichere Versorgung zu gewährleisten. Falls Sie ein ärztliches Rezept haben, teilen Sie es uns gerne mit — es hilft uns bei der Anpassung der Behandlung.",
          fr: "La sécurité de nos patients est notre priorité absolue. Le drainage lymphatique ne doit **pas** être réalisé en cas de : **infection active** (cellulite, érysipèle) dans la zone à traiter, **thrombose veineuse profonde** suspectée ou confirmée, **insuffisance cardiaque décompensée**, ou **cancer actif non traité** dans le territoire de drainage. En cas de doute, nous collaborons étroitement avec votre médecin traitant pour garantir une prise en charge sûre. Si vous avez une prescription médicale, n'hésitez pas à nous la transmettre — elle nous guide dans l'adaptation du traitement.",
          en: "Patient safety is our absolute priority. Lymphatic drainage must **not** be performed in cases of: **active infection** (cellulitis, erysipelas) in the treatment area, suspected or confirmed **deep vein thrombosis**, **decompensated heart failure**, or **untreated active cancer** in the drainage territory. When in doubt, we collaborate closely with your physician to ensure safe care. If you have a medical prescription, please share it with us — it guides our treatment adaptation.",
          nl: "De veiligheid van onze patiënten is onze absolute prioriteit. Lymfedrainage mag **niet** worden uitgevoerd bij: **actieve infectie** (cellulitis, erysipelas) in het behandelgebied, vermoede of bevestigde **diepe veneuze trombose**, **gedecompenseerd hartfalen**, of **onbehandelde actieve kanker** in het drainagegebied. Bij twijfel werken we nauw samen met uw arts om veilige zorg te garanderen.",
          tr: "Hasta güvenliği mutlak önceliğimizdir. Lenf drenajı şu durumlarda **yapılmamalıdır**: tedavi bölgesinde **aktif enfeksiyon** (selülit, erizipel), şüpheli veya doğrulanmış **derin ven trombozu**, **dekompanse kalp yetmezliği**, veya drenaj bölgesinde **tedavi edilmemiş aktif kanser**. Şüphe durumunda, güvenli bakım sağlamak için doktorunuzla yakın işbirliği yapıyoruz.",
          ar: "سلامة مرضانا هي أولويتنا المطلقة. لا يجب إجراء الصرف اللمفاوي في حالات: **عدوى نشطة** (التهاب النسيج الخلوي) في منطقة العلاج، **تخثر وريدي عميق** مشتبه أو مؤكد، **فشل قلبي غير معوض**، أو **سرطان نشط غير معالج** في منطقة الصرف. في حالة الشك، نتعاون بشكل وثيق مع طبيبك لضمان رعاية آمنة.",
          pl: "Bezpieczeństwo naszych pacjentów jest naszym absolutnym priorytetem. Drenaż limfatyczny **nie może** być wykonywany w przypadku: **aktywnej infekcji** (zapalenie tkanki łącznej) w obszarze leczenia, podejrzewanej lub potwierdzonej **zakrzepicy żył głębokich**, **niewyrównanej niewydolności serca**, lub **nieleczonego aktywnego nowotworu** w terenie drenażu. W razie wątpliwości ściśle współpracujemy z Twoim lekarzem, aby zapewnić bezpieczną opiekę.",
        },
      },
      {
        heading: {
          de: "Bei Praxis Loten in Eupen: Lymphdrainage nach Leduc",
          fr: "Au cabinet Praxis Loten à Eupen : drainage selon Leduc",
          en: "At Praxis Loten in Eupen: Leduc method drainage",
          nl: "Bij Praxis Loten in Eupen: Leduc-methode drainage",
          tr: "Eupen'de Praxis Loten'de: Leduc yöntemi drenaj",
          ar: "في Praxis Loten في Eupen: الصرف وفق طريقة Leduc",
          pl: "W Praxis Loten w Eupen: drenaż metodą Leduc",
        },
        body: {
          de: "**1. Individuelle Befunderhebung** — Fabienne Dormann beurteilt das Ausmaß des Ödems, seinen Ursprung und seine Auswirkung auf Ihren Alltag. Jeder Plan ist einzigartig.\n\n**2. Zertifizierte Leduc-Technik** — Ausgebildet an der Schule von Professor Leduc (UCL Brüssel) wendet Fabienne eine international anerkannte Technik mit spezifischen Ruf- und Resorptionsmanövern an.\n\n**3. Schulung zur Selbstbehandlung** — Sie erlernen Selbstdrainage-Techniken, Entstauungsübungen und Kompressionsprinzipien, um die Ergebnisse zwischen den Sitzungen zu erhalten.\n\n**4. Medizinische Zusammenarbeit** — In enger Abstimmung mit Ihrem Arzt, Onkologen oder Chirurgen gewährleisten wir eine koordinierte und sichere Versorgung.",
          fr: "**1. Bilan individualisé** — Fabienne Dormann évalue l'étendue de l'œdème, son origine et son impact sur votre quotidien. Chaque plan est unique.\n\n**2. Technique Leduc certifiée** — Formée à l'école du Professeur Leduc (UCL Bruxelles), Fabienne applique une technique reconnue internationalement, avec des manœuvres d'appel et de résorption spécifiques.\n\n**3. Éducation à l'auto-gestion** — Vous apprenez les gestes d'auto-drainage, les exercices décongestifs et les principes de compression pour maintenir les résultats entre les séances.\n\n**4. Collaboration médicale** — En lien étroit avec votre médecin, oncologue ou chirurgien, nous assurons une prise en charge coordonnée et sûre.",
          en: "**1. Individualised assessment** — Fabienne Dormann evaluates the extent of oedema, its origin and its impact on your daily life. Every plan is unique.\n\n**2. Certified Leduc technique** — Trained at the school of Professor Leduc (UCL Brussels), Fabienne applies an internationally recognised technique with specific call and resorption manoeuvres.\n\n**3. Self-management education** — You learn self-drainage techniques, decongestive exercises and compression principles to maintain results between sessions.\n\n**4. Medical collaboration** — Working closely with your doctor, oncologist or surgeon, we ensure coordinated and safe care.",
          nl: "**1. Geïndividualiseerde beoordeling** — Fabienne Dormann evalueert de omvang van het oedeem, de oorsprong en de impact op uw dagelijks leven. Elk plan is uniek.\n\n**2. Gecertificeerde Leduc-techniek** — Opgeleid aan de school van Professor Leduc (UCL Brussel) past Fabienne een internationaal erkende techniek toe met specifieke oproep- en resorptiebewegingen.\n\n**3. Educatie in zelfmanagement** — U leert zelfdrainagetechnieken, decongestieve oefeningen en compressieprincipes om resultaten tussen sessies te behouden.\n\n**4. Medische samenwerking** — In nauw contact met uw arts, oncoloog of chirurg zorgen wij voor gecoördineerde en veilige zorg.",
          tr: "**1. Bireyselleştirilmiş değerlendirme** — Fabienne Dormann ödemin boyutunu, kökenini ve günlük yaşamınıza etkisini değerlendirir. Her plan benzersizdir.\n\n**2. Sertifikalı Leduc tekniği** — Profesör Leduc okulunda (UCL Brüksel) eğitim almış Fabienne, uluslararası olarak tanınan bir tekniği spesifik çağrı ve rezorpsiyon manevraları ile uygular.\n\n**3. Öz-yönetim eğitimi** — Seanslar arasında sonuçları korumak için kendi kendine drenaj tekniklerini, dekongestif egzersizleri ve kompresyon prensiplerini öğrenirsiniz.\n\n**4. Tıbbi işbirliği** — Doktorunuz, onkologunuz veya cerrahınızla yakın çalışarak koordineli ve güvenli bakım sağlıyoruz.",
          ar: "**1. تقييم فردي** — تقيم فابيان دورمان مدى الوذمة ومنشأها وتأثيرها على حياتك اليومية. كل خطة فريدة.\n\n**2. تقنية Leduc المعتمدة** — تدربت في مدرسة البروفيسور Leduc (UCL بروكسل)، تطبق فابيان تقنية معترف بها دوليًا مع مناورات استدعاء وامتصاص محددة.\n\n**3. تثقيف الإدارة الذاتية** — تتعلم تقنيات التصريف الذاتي والتمارين الاحتقانية ومبادئ الضغط للحفاظ على النتائج بين الجلسات.\n\n**4. تعاون طبي** — بالتنسيق الوثيق مع طبيبك أو أخصائي الأورام أو الجراح، نضمن رعاية منسقة وآمنة.",
          pl: "**1. Zindywidualizowana ocena** — Fabienne Dormann ocenia rozległość obrzęku, jego pochodzenie i wpływ na Twoje codzienne życie. Każdy plan jest unikalny.\n\n**2. Certyfikowana technika Leduc** — Wykształcona w szkole Profesora Leduc (UCL Bruksela), Fabienne stosuje międzynarodowo uznaną technikę ze specyficznymi manewrami wezwania i resorpcji.\n\n**3. Edukacja w samodzielnym zarządzaniu** — Uczysz się technik samodrenowania, ćwiczeń odblokujących i zasad kompresji, aby utrzymać wyniki między sesjami.\n\n**4. Współpraca medyczna** — W ścisłym kontakcie z Twoim lekarzem, onkologiem lub chirurgiem zapewniamy skoordynowaną i bezpieczną opiekę.",
        },
      },
    ],
    keyPoints: {
      de: ["Medizinische Technik nach Leduc — weit mehr als eine Massage", "Nachweislich wirksam bei Schmerz und Schwellung nach Krebsbehandlung", "Teil einer ganzheitlichen Therapie: Drainage + Kompression + Bewegung", "Individueller Plan durch Fabienne Dormann in Eupen", "Zusammenarbeit mit Ihrem Arzt für optimale Sicherheit"],
      fr: ["Technique médicale selon Leduc — bien plus qu'un massage", "Efficacité prouvée sur la douleur et le gonflement post-cancer", "Partie d'une thérapie globale : drainage + compression + mouvement", "Plan individuel par Fabienne Dormann à Eupen", "Collaboration avec votre médecin pour une sécurité optimale"],
      en: ["Medical technique following Leduc — far more than a massage", "Proven effectiveness on pain and swelling after cancer treatment", "Part of comprehensive therapy: drainage + compression + movement", "Individual plan by Fabienne Dormann in Eupen", "Collaboration with your doctor for optimal safety"],
      nl: ["Medische techniek volgens Leduc — veel meer dan een massage", "Bewezen effectief bij pijn en zwelling na kankerbehandeling", "Onderdeel van holistische therapie: drainage + compressie + beweging", "Individueel plan door Fabienne Dormann in Eupen", "Samenwerking met uw arts voor optimale veiligheid"],
      tr: ["Leduc'a göre tıbbi teknik — bir masajdan çok daha fazlası", "Kanser tedavisi sonrası ağrı ve şişlikte kanıtlanmış etkinlik", "Kapsamlı terapinin parçası: drenaj + kompresyon + hareket", "Eupen'de Fabienne Dormann tarafından bireysel plan", "Optimal güvenlik için doktorunuzla işbirliği"],
      ar: ["تقنية طبية وفق Leduc — أكثر بكثير من مجرد تدليك", "فعالية مثبتة في الألم والتورم بعد علاج السرطان", "جزء من علاج شامل: صرف + ضغط + حركة", "خطة فردية من فابيان دورمان في Eupen", "تعاون مع طبيبك لسلامة مثلى"],
      pl: ["Technika medyczna wg Leduc — znacznie więcej niż masaż", "Udowodniona skuteczność w bólu i obrzęku po leczeniu raka", "Część kompleksowej terapii: drenaż + kompresja + ruch", "Indywidualny plan przez Fabienne Dormann w Eupen", "Współpraca z lekarzem dla optymalnego bezpieczeństwa"],
    },
    ctaText: {
      de: "Schwellungen oder Lymphödem? Vereinbaren Sie einen Termin bei Fabienne Dormann in Eupen.",
      fr: "Gonflements ou lymphœdème ? Prenez rendez-vous avec Fabienne Dormann à Eupen.",
      en: "Swelling or lymphoedema? Book an appointment with Fabienne Dormann in Eupen.",
      nl: "Zwellingen of lymfoedeem? Maak een afspraak bij Fabienne Dormann in Eupen.",
      tr: "Şişlik veya lenfödem mi? Eupen'de Fabienne Dormann ile randevu alın.",
      ar: "تورمات أو وذمة لمفية؟ احجز موعدًا مع فابيان دورمان في Eupen.",
      pl: "Obrzęki lub obrzęk limfatyczny? Zarezerwuj wizytę u Fabienne Dormann w Eupen.",
    },
    bibliography: [
      "Huang TW et al. Manual Lymphatic Drainage for Breast Cancer-related Lymphedema: A Systematic Review and Meta-analysis of Randomized Controlled Trials. Ann Phys Rehabil Med. 2022;65(5):101650.",
      "Ezzo J et al. Manual lymphatic drainage for lymphedema following breast cancer treatment. Cochrane Database Syst Rev. 2015;(5):CD003475.",
      "Müller M et al. Effectiveness of manual lymphatic drainage in intensive phase I therapy of breast cancer-related lymphedema. Support Care Cancer. 2024;32(1):56.",
      "Thompson B et al. Manual lymphatic drainage: the evidence behind the efficacy. J Lymphoedema. 2024;19(1):12-18.",
      "International Lymphoedema Framework. Best Practice for the Management of Lymphoedema. 2nd ed. MEP Ltd; 2012.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine ärztliche oder physiotherapeutische Konsultation. Bei anhaltenden oder schweren Beschwerden wenden Sie sich bitte an einen Gesundheitsdienstleister.",
      fr: "Cet article a une vocation purement informative et ne remplace en aucun cas une consultation médicale ou kinésithérapeutique. En cas de symptômes persistants ou sévères, consultez un professionnel de santé.",
      en: "This article is for informational purposes only and does not replace a medical or physiotherapy consultation. If you experience persistent or severe symptoms, please consult a healthcare professional.",
      nl: "Dit artikel is uitsluitend bedoeld ter informatie en vervangt geen medisch of fysiotherapeutisch consult. Raadpleeg bij aanhoudende of ernstige klachten een zorgverlener.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır ve tıbbi veya fizyoterapi konsültasyonunun yerini almaz. Kalıcı veya şiddetli semptomlar durumunda bir sağlık uzmanına danışın.",
      ar: "هذا المقال لأغراض إعلامية فقط ولا يحل محل الاستشارة الطبية أو العلاجية. في حالة الأعراض المستمرة أو الشديدة، يرجى استشارة أخصائي صحي.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny i nie zastępuje konsultacji lekarskiej lub fizjoterapeutycznej. W przypadku utrzymujących się lub nasilonych objawów skonsultuj się ze specjalistą.",
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

/** Lightweight inline markdown renderer: **bold**, *italic*, > blockquote, \n\n paragraphs */
function renderMarkdown(text: string): React.ReactNode {
  const paragraphs = text.split("\n\n");
  return paragraphs.map((para, pIdx) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    // Blockquote: lines starting with >
    if (trimmed.startsWith(">")) {
      const quoteContent = trimmed
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      return (
        <blockquote
          key={pIdx}
          className="border-l-4 border-[#76b82a] pl-4 my-4 italic text-neutral-600"
        >
          {renderInline(quoteContent)}
        </blockquote>
      );
    }

    return (
      <span key={pIdx} className="block mb-3 last:mb-0">
        {renderInline(trimmed)}
      </span>
    );
  });
}

/** Parse inline markdown: **bold** and *italic* */
function renderInline(text: string): React.ReactNode {
  // Split by **bold** and *italic* patterns
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|«(.+?)»)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      // **bold**
      parts.push(<strong key={match.index} className="font-semibold text-neutral-900">{match[2]}</strong>);
    } else if (match[3]) {
      // *italic*
      parts.push(<em key={match.index}>{match[3]}</em>);
    } else if (match[4]) {
      // «guillemets» — render as styled quote
      parts.push(<span key={match.index} className="text-neutral-800">« {match[4]} »</span>);
    }
    lastIndex = match.index + match[0].length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : text;
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
                <div className={`text-neutral-700 leading-relaxed text-lg ${!isRtl ? "[&>span:first-child]:first-letter:text-6xl [&>span:first-child]:first-letter:font-extrabold [&>span:first-child]:first-letter:text-[#2b3186] [&>span:first-child]:first-letter:mr-2 [&>span:first-child]:first-letter:float-left [&>span:first-child]:first-letter:leading-none [&>span:first-child]:first-letter:mt-1" : ""}`}>
                  {renderMarkdown(article.intro[lang])}
                </div>
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
                  <div className="text-neutral-700 leading-[1.75] text-base">
                    {renderMarkdown(section.body[lang])}
                  </div>
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
