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
        infographic: "pain-alarm",
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
      fr: "La position assise nuit-elle vraiment à votre dos ? Ce que dit la science en 2026",
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
      de: "Sie haben es sicher schon gehört: « Sitzen ist das neue Rauchen. » Wenn Sie stundenlang am Bildschirm arbeiten, jagt dieser Satz Angst ein. Und wenn Ihr Rücken still leidet? Gute Nachricht: Die Wissenschaft sagt etwas anderes. Philippe Banaszak, manueller Therapeut bei Praxis Loten in Eupen, klärt auf.",
      fr: "Vous l'avez sûrement entendu : « rester assis, c'est le nouveau tabagisme. » Si vous travaillez des heures devant un écran, cette phrase fait peur. Et si votre dos souffrait en silence ? Bonne nouvelle : la science dit autre chose. Philippe Banaszak, thérapeute manuel chez Praxis Loten à Eupen, fait le point.",
      en: "You've probably heard it: \"sitting is the new smoking.\" If you work long hours at a screen, that phrase is scary. What if your back was slowly changing without you noticing? Good news: science says otherwise.",
      nl: "U hebt het vast gehoord: „zitten is het nieuwe roken.\" Als u uren achter een scherm werkt, is die zin angstaanjagend. En als uw rug langzaam zou veranderen, zonder dat u iets doet? Goed nieuws: de wetenschap zegt iets anders.",
      tr: "Muhtemelen duymuşsunuzdur: „Oturmak yeni sigaradır.\" Saatlerce ekran başında çalışıyorsanız bu cümle korkutucudur. Ya sırtınız yavaşça değişiyorsa, siz fark etmeden? İyi haber: bilim başka şey söylüyor.",
      ar: "ربما سمعتها: „الجلوس هو التدخين الجديد.\" إذا كنت تعمل ساعات أمام الشاشة، فهذه العبارة مخيفة. ماذا لو كان ظهرك يتغير ببطء دون أن تلاحظ؟ خبر جيد: العلم يقول العكس.",
      pl: "Pewnie to słyszałeś: „Siedzenie to nowe palenie.\" Jeśli pracujesz godzinami przed ekranem, to zdanie przeraża. A gdyby Twoje plecy powoli się zmieniały, a Ty byś nic nie robił? Dobra wiadomość: nauka mówi co innego.",
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
          fr: "Pendant longtemps, on a cru que la position assise mettait les disques sous pression et causait directement le mal de dos. Cette idée est aujourd'hui largement nuancée par les grandes études récentes. Le verdict est clair : la position assise, en elle-même, ne cause pas le mal de dos. Elle peut générer un inconfort temporaire, mais elle ne « casse » rien. Votre colonne est solide. Vos disques sont des amortisseurs intelligents, conçus pour encaisser les charges du quotidien. Une journée au bureau ne leur nuit pas.",
          en: "For a long time, people believed sitting put excessive pressure on the spinal discs and directly caused back pain. That idea is now heavily nuanced by large recent studies. The verdict is clear: sitting itself does not cause back pain. It can produce temporary discomfort, but it doesn't harm anything. Your spine is strong. Your discs are intelligent shock absorbers, designed to handle daily loads. A day at the office doesn't hurt them.",
          nl: "Lang dacht men dat zitten overmatige druk op de tussenwervelschijven uitoefende en rechtstreeks rugpijn veroorzaakte. Dat idee wordt vandaag sterk genuanceerd door recente grote studies. Het oordeel is duidelijk: zitten op zich veroorzaakt geen rugpijn. Het kan tijdelijk ongemak geven, maar schaadt niets. Uw wervelkolom is sterk. Uw discussen zijn intelligente schokdempers.",
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
          de: "1. Stehen Sie alle 30 Minuten auf. Eine Minute stehen, ein paar Schritte, ein freies Strecken.\n\n2. Bewegen Sie sich 30 Minuten am Tag. Die Aktivität, die Ihnen gefällt, ist die beste — Regelmäßigkeit zählt mehr als Intensität.\n\n3. Vertrauen Sie Ihrem Rücken. Er ist robuster, als man Ihnen erzählt hat.",
          fr: "1. Levez-vous toutes les 30 minutes. Une minute debout, quelques pas, un étirement libre.\n\n2. Bougez 30 minutes par jour. L'activité qui vous plaît, c'est la meilleure. La régularité compte plus que l'intensité.\n\n3. Faites confiance à votre dos. Il est plus solide que ce qu'on vous a fait croire.",
          en: "1. Stand up every 30 minutes. One minute standing, a few steps, a free stretch.\n\n2. Move 30 minutes a day. The activity you enjoy is the best one. Consistency matters more than intensity.\n\n3. Trust your back. It is stronger than you've been told.",
          nl: "1. Sta elke 30 minuten op. Een minuut staan, paar stappen, vrij rekken.\n\n2. Beweeg 30 minuten per dag. Wat u leuk vindt is het beste. Regelmaat telt meer dan intensiteit.\n\n3. Vertrouw uw rug. Hij is sterker dan u is wijsgemaakt.",
          tr: "1. Her 30 dakikada ayağa kalkın. Bir dakika ayakta, birkaç adım, serbest esneme.\n\n2. Günde 30 dakika hareket edin. Hoşunuza giden aktivite en iyisidir.\n\n3. Sırtınıza güvenin. Size söylenenden çok daha sağlam.",
          ar: "1. انهض كل 30 دقيقة. دقيقة وقوف، بضع خطوات، تمدد حر.\n\n2. تحرك 30 دقيقة يوميًا. النشاط الذي تحبه هو الأفضل. الانتظام أهم من الشدة.\n\n3. ثق بظهرك. إنه أقوى مما قيل لك.",
          pl: "1. Wstawaj co 30 minut. Minuta stania, kilka kroków, swobodne rozciągnięcie.\n\n2. Ruszaj się 30 minut dziennie. Aktywność, którą lubisz, jest najlepsza.\n\n3. Zaufaj swoim plecom. Są mocniejsze niż Ci powiedziano.",
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
          de: "Unser Team — Physiotherapeuten, Manualtherapeuten und Osteopathen — begleitet jeden Tag Patienten, die glauben, ihr Rücken « mache nicht mehr mit » oder « lasse nach ». Unser Ansatz hält in vier Wörtern: Zuhören (Ihren Schmerz im Gesamtkontext: Schlaf, Stress, Lebensstil), Erleichtern (durch angepasste Manuelle Therapie), Stärken (durch progressive personalisierte Übungen), Erklären (wie Ihr Rücken wirklich funktioniert). Unser Ziel: dass Sie kräftiger und gelassener gehen — nicht besorgter.",
          fr: "Notre équipe — kinésithérapeutes, thérapeutes manuels et ostéopathes — accompagne chaque jour des patients qui pensent que leur dos « ne suit plus » ou « lâche ». Notre approche tient en quatre mots : Écouter votre douleur dans son contexte global (sommeil, stress, mode de vie). Soulager par la thérapie manuelle adaptée. Renforcer par des exercices progressifs et personnalisés. Expliquer comment fonctionne réellement votre dos. Notre objectif : que vous repartiez plus solide et plus serein — pas plus inquiet.",
          en: "Our team — physiotherapists, manual therapists and osteopaths — supports patients every day who believe their back \"can't keep up\" or \"is giving out.\" Our approach holds in four words: Listen to your pain in its global context (sleep, stress, lifestyle). Relieve through adapted manual therapy. Strengthen through progressive personalised exercises. Explain how your back actually works. Our aim: that you leave stronger and calmer — not more worried.",
          nl: "Ons team — fysiotherapeuten, manuele therapeuten en osteopaten — begeleidt dagelijks patiënten die denken dat hun rug « niet meer meewerkt » of « het laat afweten ». Onze aanpak vat samen in vier woorden: Luisteren naar uw pijn in globale context. Verlichten door aangepaste manuele therapie. Versterken door progressieve oefeningen. Uitleggen hoe uw rug werkelijk werkt.",
          tr: "Ekibimiz — fizyoterapistler, manuel terapistler ve osteopatlar — sırtının « artık dayanamadığını » veya « eskisi gibi olmadığını » düşünen hastalara her gün eşlik eder. Yaklaşımımız dört kelimede özetlenir: Dinlemek (yaşam bağlamında ağrı), Rahatlatmak (uyarlanmış manuel terapi), Güçlendirmek (kademeli kişisel egzersizler), Açıklamak (sırtın gerçekte nasıl çalıştığı).",
          ar: "فريقنا — أخصائيو علاج طبيعي، معالجون يدويون وأخصائيو عظام — يرافق يوميًا مرضى يعتقدون أن ظهرهم « لم يعد يتحمل » أو « لا يعمل كالسابق ». نهجنا يلخص في أربع كلمات: الإصغاء إلى ألمك في سياقه الشامل، التخفيف بالعلاج اليدوي المكيف، التقوية بتمارين تدريجية، الشرح كيف يعمل ظهرك حقًا.",
          pl: "Nasz zespół — fizjoterapeuci, terapeuci manualni i osteopaci — codziennie wspiera pacjentów, którzy uważają, że ich plecy « już nie dają rady » lub « nie działają jak kiedyś ». Nasze podejście to cztery słowa: Słuchać (Twojego bólu w globalnym kontekście), Ulżyć (dostosowaną terapią manualną), Wzmocnić (progresywnymi ćwiczeniami), Wyjaśnić (jak naprawdę działają plecy).",
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
      de: "Kennen Sie diese hartnäckige Steifheit am Schädelansatz oder zwischen den Schulterblättern nach einem Arbeitstag? Während die erste Reaktion oft die Sorge um « altersbedingte Veränderungen » oder eine « Steifheit » ist, bringt uns die moderne Wissenschaft eine weitaus beruhigendere Nachricht: Ihr Nacken ist solide, widerstandsfähig und anpassungsfähig.",
      fr: "Vous arrive-t-il de ressentir cette raideur persistante à la base du crâne ou entre les omoplates après une journée de travail ? Si la première réaction est souvent de s'inquiéter d'un « vieillissement » ou d'un « manque de mobilité », la science moderne nous apporte une nouvelle bien plus rassurante : votre cou est solide, résistant et capable de s'adapter.",
      en: "Do you sometimes feel that persistent stiffness at the base of your skull or between your shoulder blades after a long day at work? While the first reaction is often to worry about \"age-related changes\" or \"limited mobility,\" modern science brings far more reassuring news: your neck is strong, resilient and capable of adaptation.",
      nl: "Voelt u soms die hardnekkige stijfheid onderaan de schedel of tussen de schouderbladen na een werkdag? Terwijl de eerste reactie vaak bezorgdheid om « leeftijdsgebonden veranderingen » of « beperkte mobiliteit » is, brengt de moderne wetenschap ons een veel geruststellender bericht: uw nek is sterk, weerbaar en in staat zich aan te passen.",
      tr: "Bir iş gününün ardından kafatasınızın altında veya kürek kemikleriniz arasında bu kalıcı sertliği hissediyor musunuz? İlk tepki genellikle « yaşa bağlı değişiklikler » veya « sınırlı hareket » endişesi olsa da, modern bilim çok daha güven verici bir haber getiriyor: boynunuz sağlam, dayanıklı ve uyum sağlayabilen bir yapıdadır.",
      ar: "هل تشعر أحيانًا بهذا التيبس المستمر عند قاعدة الجمجمة أو بين لوحي الكتف بعد يوم عمل؟ في حين أن رد الفعل الأول غالبًا ما يكون القلق من « تغيرات مرتبطة بالعمر » أو « محدودية الحركة »، يقدم لنا العلم الحديث خبرًا أكثر طمأنة: رقبتك قوية ومرنة وقادرة على التكيف.",
      pl: "Czy zdarza Ci się odczuwać tę uporczywą sztywność u podstawy czaszki lub między łopatkami po dniu pracy? Choć pierwszą reakcją jest często obawa o « zmiany związane z wiekiem » lub « ograniczoną ruchomość », współczesna nauka przynosi nam znacznie bardziej uspokajającą wiadomość: Twoja szyja jest mocna, odporna i zdolna do adaptacji.",
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
          de: "Stellen Sie sich Schmerz wie ein hochempfindliches Alarmsystem vor. Manchmal löst der Alarm aus, weil tatsächlich Rauch aufsteigt — oft jedoch klingelt er einfach, weil er zu empfindlich geworden ist. Nackenschmerzen bedeuten nicht, dass Ihre Wirbel « in Gefahr » sind. Es ist meist ein Signal Ihres Gehirns, dass die Gewebe in dieser Zone an ihrer aktuellen Toleranzgrenze angekommen sind — häufig durch fehlende Bewegungsvielfalt.",
          fr: "Imaginez la douleur comme un système d'alarme ultra-sensible. Parfois, l'alarme se déclenche parce que la fumée monte, mais souvent, elle sonne simplement parce qu'elle est devenue trop sensible. Une douleur au cou ne signifie pas que vos vertèbres sont « en danger ». C'est souvent un signal envoyé par votre cerveau pour vous dire que les tissus de cette zone ont atteint leur limite de tolérance actuelle, souvent par manque de variété de mouvement.",
          en: "Think of pain as a highly sensitive alarm system. Sometimes the alarm is triggered because smoke really is rising — but often it rings simply because it has become too sensitive. Neck pain does not mean your vertebrae are \"at risk.\" It is usually a signal from your brain that the tissues in this area have reached their current tolerance limit, often through lack of movement variety.",
          nl: "Stel u pijn voor als een uiterst gevoelig alarmsysteem. Soms gaat het alarm af omdat er echt rook opstijgt — maar vaak klinkt het simpelweg omdat het te gevoelig is geworden. Nekpijn betekent niet dat uw wervels « in gevaar » zijn. Het is meestal een signaal van uw brein dat de weefsels hun huidige tolerantielimiet hebben bereikt, vaak door gebrek aan bewegingsvariatie.",
          tr: "Ağrıyı son derece hassas bir alarm sistemi olarak düşünün. Bazen alarm gerçekten duman çıktığı için çalar — ama çoğu zaman aşırı hassaslaştığı için çalar. Boyun ağrısı omurlarınızın « tehlikede olduğu » anlamına gelmez. Genellikle beyninizin, bu bölgedeki dokuların mevcut tolerans sınırlarına ulaştığını söyleyen bir sinyaldir — sıklıkla hareket çeşitliliği eksikliğinden.",
          ar: "تخيل الألم كنظام إنذار حساس للغاية. أحيانًا ينطلق الإنذار لأن الدخان يتصاعد فعلًا، لكنه غالبًا ما يرن لأنه أصبح حساسًا للغاية. ألم الرقبة لا يعني أن فقراتك « في خطر ». إنه عادةً إشارة من دماغك بأن أنسجة هذه المنطقة وصلت إلى حد تحملها الحالي، غالبًا بسبب نقص تنوع الحركة.",
          pl: "Wyobraź sobie ból jako bardzo czuły system alarmowy. Czasem alarm uruchamia się, bo rzeczywiście unosi się dym — ale często dzwoni po prostu dlatego, że stał się zbyt czuły. Ból szyi nie oznacza, że Twoje kręgi są « zagrożone ». To zazwyczaj sygnał z mózgu, że tkanki w tym obszarze osiągnęły aktualny limit tolerancji, często z powodu braku różnorodności ruchu.",
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
      tr: ["Ağrı = alarm, mutlaka sorun değil", "En iyi duruş = bir sonraki (hareket statiği yener)", "Görüntüleme bulguları genellikle „kırışıklıklar\" gibi normal", "Kademeli hareket sinir sistemini sakinleştirir", "Praxis Loten'de: manuel terapi + ağrı eğitimi"],
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
      tr: "Sırt ağrısı neredeyse herkesi hayatının en az bir döneminde etkiler. İyi haber: sırtınız **güçlü, uyumlu ve dayanıklıdır**. Çoğu durumda ciddi bir sorun söz konusu değildir. Manuel terapi — hareket ve eğitimle birleştirildiğinde — vücudunuza olan güveninizi yeniden kazanmanıza yardımcı olan kanıta dayalı bir yaklaşım sunar. Eupen'deki kliniğimizde size bu yolda eşlik ediyoruz.",
      ar: "يعاني تقريبًا الجميع من آلام الظهر مرة واحدة على الأقل في حياتهم. الخبر السار: ظهرك **قوي وقابل للتكيف ومرن**. في معظم الحالات، لا يوجد ضرر خطير. العلاج اليدوي — مع الحركة والتثقيف — يوفر نهجًا قائمًا على الأدلة يساعدك على استعادة الثقة بجسمك. في عيادتنا في Eupen، نرافقك في هذا المسار.",
      pl: "Ból pleców dotyka prawie każdego przynajmniej raz w życiu. Dobra wiadomość: Twoje plecy są **silne, adaptacyjne i wytrzymałe**. W większości przypadków nie ma poważnego uszkodzenia. Terapia manualna — w połączeniu z ruchem i edukacją — oferuje podejście oparte na dowodach, które pomaga odzyskać zaufanie do własnego ciała. W naszej praktyce w Eupen towarzyszymy Ci na tej drodze.",
    },
    sections: [
      {
        heading: {
          de: "« Mein Rücken macht nicht mehr mit » — ein Mythos",
          fr: "« Mon dos ne suit plus » — un mythe",
          en: "\"My back can't take it anymore\" — a myth",
          nl: "« Mijn rug doet niet meer mee » — een mythe",
          tr: "« Sırtım artık dayanamıyor » — bir efsane",
          ar: "«ظهري لم يعد يحتمل» — خرافة",
          pl: "« Moje plecy już nie dają rady » — mit",
        },
        body: {
          de: "Viele Menschen glauben, dass Rückenschmerzen zwangsläufig auf eine « altersbedingte Veränderung » oder eine strukturelle Schädigung hinweisen. Die Wissenschaft zeigt ein anderes Bild: bildgebende Veränderungen wie Bandscheibenwölbungen finden sich auch bei **schmerzfreien** Personen. Ihre Wirbelsäule ist eine robuste, anpassungsfähige Struktur — wie ein Baum, der sich im Wind biegt, ohne zu brechen. Schmerz ist ein Schutzsignal Ihres Nervensystems, keine Schadensanzeige. Faktoren wie Schlafqualität, Stress, Überzeugungen und Bewegungsmangel beeinflussen Ihren Schmerz oft stärker als das, was auf einem MRT zu sehen ist.",
          fr: "Beaucoup de personnes croient que les douleurs dorsales signifient forcément un « dommage » ou une détérioration structurelle. La science montre un autre tableau : des modifications à l'imagerie comme les protrusions discales se retrouvent aussi chez des personnes **sans douleur**. Votre colonne vertébrale est une structure robuste et adaptable — comme un arbre qui ploie sous le vent sans se rompre. La douleur est un signal de protection de votre système nerveux, pas un indicateur de dégât. Des facteurs comme la qualité du sommeil, le stress, les croyances et le manque de mouvement influencent souvent votre douleur davantage que ce qu'un IRM peut montrer.",
          en: "Many people believe that back pain inevitably means \"age-related changes\" or structural problems. Science tells a different story: imaging changes like disc bulges are also found in **pain-free** individuals. Your spine is a robust, adaptable structure — like a tree that bends in the wind without breaking. Pain is a protective signal from your nervous system, not a status report. Factors like sleep quality, stress, beliefs and lack of movement often influence your pain more than what an MRI shows.",
          nl: "Veel mensen geloven dat rugpijn automatisch « leeftijdsgebonden veranderingen » of structurele problemen betekent. De wetenschap toont een ander beeld: beeldvormende veranderingen zoals uitpuilende schijven komen ook voor bij **pijnvrije** personen. Uw wervelkolom is een robuuste, aanpasbare structuur — als een boom die buigt in de wind zonder te breken. Pijn is een beschermend signaal van uw zenuwstelsel, geen statusrapport. Factoren als slaapkwaliteit, stress, overtuigingen en bewegingsgebrek beïnvloeden uw pijn vaak sterker dan wat een MRI laat zien.",
          tr: "Birçok kişi sırt ağrısının mutlaka « yaşa bağlı değişiklikler » veya yapısal sorunlar anlamına geldiğine inanır. Bilim farklı bir tablo sunar: disk çıkıntıları gibi görüntüleme bulguları **ağrısız** bireylerde de bulunur. Omurganız sağlam ve uyumlu bir yapıdır — rüzgarda kırılmadan eğilen bir ağaç gibi. Ağrı, sinir sisteminizden gelen koruyucu bir sinyaldir, bir durum raporu değildir. Uyku kalitesi, stres, inançlar ve hareketsizlik gibi faktörler ağrınızı genellikle MR'ın gösterdiğinden daha fazla etkiler.",
          ar: "يعتقد كثيرون أن آلام الظهر تعني حتمًا « تغيرات مرتبطة بالعمر » أو مشاكل هيكلية. العلم يُظهر صورة مختلفة: تغييرات التصوير مثل بروز الأقراص توجد أيضًا عند أشخاص **بدون ألم**. عمودك الفقري بنية متينة وقابلة للتكيف — كشجرة تنحني في الريح دون أن تنكسر. الألم إشارة حماية من جهازك العصبي، وليس تقرير حالة. عوامل مثل جودة النوم والتوتر والمعتقدات وقلة الحركة تؤثر غالبًا على ألمك أكثر مما يظهره التصوير بالرنين المغناطيسي.",
          pl: "Wiele osób wierzy, że ból pleców oznacza « zmiany związane z wiekiem » lub problemy strukturalne. Nauka pokazuje inny obraz: zmiany w obrazowaniu, takie jak wypukliny dyskowe, występują również u osób **bez bólu**. Twój kręgosłup to solidna, adaptacyjna struktura — jak drzewo, które ugina się na wietrze, nie łamiąc się. Ból to sygnał ochronny układu nerwowego, nie raport o stanie. Czynniki takie jak jakość snu, stres, przekonania i brak ruchu często wpływają na ból bardziej niż to, co pokazuje MRI.",
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
      de: ["Ihr Rücken ist stark und anpassungsfähig — robuster als Sie denken", "Manuelle Therapie + Bewegung + Verständnis = beste Ergebnisse", "Schmerz ≠ Schaden: Faktoren wie Schlaf und Stress spielen eine zentrale Rolle", "Weniger als 1 % der Rückenschmerzen haben eine ernste Ursache", "IFOMPT-zertifizierte Behandlung in Eupen auf dem Manuthera 242"],
      fr: ["Votre dos est solide et adaptable — plus robuste que vous ne pensez", "Thérapie manuelle + mouvement + compréhension = meilleurs résultats", "Douleur ≠ dommage : le sommeil et le stress jouent un rôle central", "Moins de 1 % des douleurs dorsales ont une cause grave", "Traitement certifié IFOMPT à Eupen sur le Manuthera 242"],
      en: ["Your back is strong and adaptable — more robust than you think", "Manual therapy + movement + understanding = best results", "Pain ≠ damage: sleep and stress play a central role", "Less than 1% of back pain has a serious cause", "IFOMPT-certified treatment in Eupen on the Manuthera 242"],
      nl: ["Uw rug is sterk en aanpasbaar — robuuster dan u denkt", "Manuele therapie + beweging + begrip = beste resultaten", "Pijn ≠ schade: slaap en stress spelen een centrale rol", "Minder dan 1% van rugpijn heeft een ernstige oorzaak", "IFOMPT-gecertificeerde behandeling in Eupen op de Manuthera 242"],
      tr: ["Sırtınız güçlü ve uyumlu — düşündüğünüzden daha dayanıklı", "Manuel terapi + hareket + anlayış = en iyi sonuçlar", "Ağrı ≠ sorun: uyku ve stres merkezi bir rol oynar", "Sırt ağrısının %1'inden azının ciddi bir nedeni var", "Eupen'de Manuthera 242'de IFOMPT sertifikalı tedavi"],
      ar: ["ظهرك قوي وقابل للتكيف — أقوى مما تعتقد", "علاج يدوي + حركة + فهم = أفضل النتائج", "الألم ≠ مشكلة: النوم والتوتر يلعبان دورًا محوريًا", "أقل من 1% من آلام الظهر لها سبب خطير", "علاج معتمد IFOMPT في Eupen على Manuthera 242"],
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
          fr: "L'un des mythes les plus tenaces de la course à pied : « courir détruit les genoux ». La recherche montre le contraire. Les coureurs réguliers n'ont **pas un risque accru d'arthrose** — au contraire, une charge modérée nourrit le cartilage et le maintient en bonne santé. Vos articulations ne sont pas des pièces mécaniques, mais des structures vivantes qui s'adaptent à la charge. La cause la plus fréquente de blessures n'est pas la course elle-même, mais les **pics de charge soudains** — quand vous en faites trop, trop vite, trop tôt. Une étude récente sur plus de 5 200 coureurs montre qu'un seul run dépassant de 10 % votre plus longue sortie du mois précédent augmente le risque de blessure de 64 %.",
          en: "One of the most persistent myths in running: \"running is bad for your knees\". Research shows the opposite. Regular runners have **no increased risk of osteoarthritis** — on the contrary, moderate loading nourishes cartilage and keeps it healthy. Your joints are not machines that wear out, but living structures that adapt to load. The most common reason for running injuries is not running itself, but **sudden load spikes** — when you do too much, too fast, too soon. A recent study of over 5,200 runners shows that a single run exceeding your longest run of the previous month by 10% increases injury risk by 64%.",
          nl: "Een van de hardnekkigste mythes in de loopsport: « lopen is slecht voor je knieën ». Onderzoek toont het tegendeel. Regelmatige lopers hebben **geen verhoogd risico op artrose** — integendeel, matige belasting voedt het kraakbeen en houdt het gezond. Uw gewrichten zijn geen machines die slijten, maar levende structuren die zich aanpassen aan belasting. De meest voorkomende oorzaak van loopblessures is niet het lopen zelf, maar **plotselinge belastingspieken** — wanneer u te veel, te snel, te vroeg doet. Een recente studie met meer dan 5.200 lopers toont: één enkele run die 10% langer is dan uw langste loop van de vorige maand verhoogt het blessurerisico met 64%.",
          tr: "Koşu sporundaki en inatçı mitlerden biri: « koşu dizleri mahveder ». Araştırma aksini gösteriyor. Düzenli koşucuların **artrit riski artmaz** — aksine, ılımlı yükleme kıkırdağı besler ve sağlıklı tutar. Eklemleriniz aşınan makineler değil, yüke adapte olan canlı yapılardır. Koşu yaralanmalarının en yaygın nedeni koşunun kendisi değil, **ani yük artışlarıdır** — çok fazla, çok hızlı, çok erken. 5.200'den fazla koşucuyu içeren güncel bir çalışma, önceki ayın en uzun koşunuzu %10 aşan tek bir koşunun yaralanma riskini %64 artırdığını göstermektedir.",
          ar: "من أكثر الخرافات عنادًا في رياضة الجري: «الجري يضر بالركبتين». البحث يظهر العكس. العداؤون المنتظمون ليس لديهم **خطر متزايد لالتهاب المفاصل** — بل العكس، الحمل المعتدل يغذي الغضروف ويحافظ على صحته. مفاصلك ليست آلات تبلى، بل هياكل حية تتكيف مع الحمل. السبب الأكثر شيوعًا لإصابات الجري ليس الجري نفسه، بل **القفزات المفاجئة في الحمل** — عندما تفعل الكثير، بسرعة كبيرة، مبكرًا جدًا. دراسة حديثة على أكثر من 5200 عداء تظهر أن جرية واحدة تتجاوز أطول جرية في الشهر السابق بنسبة 10% تزيد خطر الإصابة بنسبة 64%.",
          pl: "Jeden z najbardziej uporczywych mitów biegowych: «bieganie niszczy kolana». Badania pokazują coś odwrotnego. Regularni biegacze **nie mają zwiększonego ryzyka artrozy** — wręcz przeciwnie, umiarkowane obciążenie odżywia chrząstkę i utrzymuje ją w zdrowiu. Twoje stawy to nie maszyny, które się zużywają, ale żywe struktury adaptujące się do obciążeń. Najczęstszą przyczyną kontuzji biegowych nie jest samo bieganie, ale **nagłe skoki obciążenia** — gdy robisz za dużo, za szybko, za wcześnie. Najnowsze badanie na ponad 5200 biegaczach pokazuje, że pojedynczy bieg przekraczający o 10% najdłuższy bieg poprzedniego miesiąca zwiększa ryzyko kontuzji o 64%.",
        },
      },
      {
        heading: {
          de: "Intelligentes Belastungsmanagement",
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
        infographic: "progression-rule",
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
        infographic: "lymph-flow",
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
      de: "Kieferschmerzen (CMD) — was wirklich hilft",
      fr: "Douleurs à la mâchoire (ATM) — ce qui aide vraiment",
      en: "Jaw pain (TMD) — what really helps",
      nl: "Kaakpijn (CMD) — wat echt helpt",
      tr: "Çene ağrısı (CMD) — gerçekten ne yardımcı olur",
      ar: "ألم الفك (CMD) — ما الذي يساعد حقًا",
      pl: "Ból żuchwy (CMD) — co naprawdę pomaga",
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
      de: "Ihr Kiefer knackt, Ihr Kopf schmerzt, Ihr Nacken ist verspannt — und niemand findet die Ursache? Die craniomandibuläre Dysfunktion (CMD) betrifft bis zu 10 % der Bevölkerung und bleibt oft lange unerkannt. Die gute Nachricht: Mit dem richtigen Ansatz lassen sich die Beschwerden in den meisten Fällen deutlich verbessern. Fabienne Dormann, spezialisiert auf Kiefergelenk-Therapie bei Praxis Loten in Eupen, erklärt, was dahintersteckt.",
      fr: "Votre mâchoire craque, votre tête fait mal, votre nuque est tendue — et personne ne trouve la cause ? La dysfonction cranio-mandibulaire (DCM) touche jusqu'à 10 % de la population et reste souvent longtemps méconnue. La bonne nouvelle : avec la bonne approche, les symptômes s'améliorent nettement dans la majorité des cas. Fabienne Dormann, spécialisée en thérapie de l'ATM chez Praxis Loten à Eupen, vous explique ce qui se cache derrière.",
      en: "Your jaw clicks, your head aches, your neck is tense — yet nobody finds the cause? Craniomandibular dysfunction (TMD) affects up to 10% of the population and often goes unrecognised for a long time. The good news: with the right approach, symptoms improve significantly in most cases. Fabienne Dormann, specialised in TMJ therapy at Praxis Loten in Eupen, explains what lies behind it.",
      nl: "Uw kaak kraakt, uw hoofd doet pijn, uw nek is gespannen — en niemand vindt de oorzaak? Craniomandibulaire dysfunctie (CMD) treft tot 10% van de bevolking en blijft vaak lang onopgemerkt. Het goede nieuws: met de juiste aanpak verbeteren de klachten in de meeste gevallen aanzienlijk. Fabienne Dormann, gespecialiseerd in kaakgewrichtstherapie bij Praxis Loten in Eupen, legt uit wat erachter zit.",
      tr: "Çeneniz tıklıyor, başınız ağrıyor, boyun kaslarınız gergin — ama kimse nedenini bulamıyor? Kraniomandibüler disfonksiyon (CMD) nüfusun %10'unu etkiler ve genellikle uzun süre fark edilmez. İyi haber: doğru yaklaşımla çoğu durumda belirtiler belirgin şekilde iyileşir. Eupen'deki Praxis Loten'de çene eklemi terapisi uzmanı Fabienne Dormann arkasında ne olduğunu açıklıyor.",
      ar: "فكك يصدر أصواتًا، رأسك يؤلمك، رقبتك متوترة — ولا أحد يجد السبب؟ الخلل الوظيفي القحفي الفكي (CMD) يصيب حتى 10٪ من السكان وغالبًا ما يبقى غير مكتشف لفترة طويلة. الخبر الجيد: مع النهج الصحيح، تتحسن الأعراض بشكل ملحوظ في معظم الحالات. فابيان دورمان، المتخصصة في علاج مفصل الفك في Praxis Loten في Eupen، تشرح ما وراء ذلك.",
      pl: "Twoja żuchwa trzaska, głowa boli, kark jest spięty — a nikt nie znajduje przyczyny? Dysfunkcja czaszkowo-żuchwowa (CMD) dotyka do 10% populacji i często pozostaje długo nierozpoznana. Dobra wiadomość: przy właściwym podejściu objawy znacząco się poprawiają w większości przypadków. Fabienne Dormann, specjalistka terapii stawu skroniowo-żuchwowego w Praxis Loten w Eupen, wyjaśnia co się za tym kryje.",
    },
    sections: [
      {
        heading: {
          de: "Mythos: Knacken bedeutet Schaden",
          fr: "Mythe : un craquement signifie un dommage",
          en: "Myth: clicking means damage",
          nl: "Mythe: klikken betekent schade",
          tr: "Mit: tıklama sorun demektir",
          ar: "خرافة: الطقطقة تعني ضررًا",
          pl: "Mit: trzaskanie oznacza uszkodzenie",
        },
        body: {
          de: "Viele Menschen hören ein Knacken im Kiefergelenk und denken sofort an eine schwere Schädigung. Die Realität ist beruhigender: **Gelenkgeräusche ohne Schmerz sind in den meisten Fällen harmlos.** Studien zeigen, dass bis zu 40 % der Bevölkerung Kiefergelenkgeräusche haben — ohne jede Behandlungsbedürftigkeit. Ein Knacken entsteht oft durch eine normale Variation der Diskusposition und ist kein Zeichen von Schädigung. Auch Zähneknirschen (Bruxismus) bedeutet nicht automatisch Schaden: Ihr Kiefer ist ein robustes, anpassungsfähiges Gelenk. Entscheidend ist nicht das Geräusch, sondern ob Schmerz oder Funktionseinschränkung vorliegen.",
          fr: "Beaucoup de personnes entendent un craquement dans la mâchoire et pensent immédiatement à un dommage grave. La réalité est rassurante : **les bruits articulaires sans douleur sont inoffensifs dans la plupart des cas.** Des études montrent que jusqu'à 40 % de la population présente des bruits de l'ATM — sans aucun besoin de traitement. Un craquement résulte souvent d'une variation normale de la position du disque et n'est pas un signe de détérioration. Le bruxisme (grincement des dents) ne signifie pas non plus automatiquement un dommage : votre mâchoire est une articulation robuste et adaptable. Ce qui compte, ce n'est pas le bruit, mais la présence de douleur ou de limitation fonctionnelle.",
          en: "Many people hear clicking in their jaw and immediately think of serious damage. The reality is reassuring: **joint sounds without pain are harmless in most cases.** Studies show that up to 40% of the population have TMJ sounds — without any need for treatment. Clicking often results from a normal variation in disc position and is not a sign of wear. Teeth grinding (bruxism) doesn't automatically mean damage either: your jaw is a robust, adaptable joint. What matters is not the sound, but whether pain or functional limitation is present.",
          nl: "Veel mensen horen een klik in hun kaak en denken meteen aan een ernstig probleem. De realiteit is geruststellend: **gewrichtsgeluiden zonder pijn zijn in de meeste gevallen onschuldig.** Studies tonen aan dat tot 40% van de bevolking kaakgewrichtsgeluiden heeft — zonder enige behandelbehoefte. Een klik ontstaat vaak door een normale variatie in de discuspositie en is geen teken van een probleem. Tandenknarsen (bruxisme) betekent ook niet automatisch schade: uw kaak is een robuust, aanpasbaar gewricht.",
          tr: "Birçok kişi çenesinde tıklama duyar ve hemen ciddi bir sorun olduğunu düşünür. Gerçek rahatlatıcıdır: **ağrısız eklem sesleri çoğu durumda zararsızdır.** Araştırmalar, nüfusun %40'ına kadarının çene eklemi sesleri olduğunu göstermektedir — herhangi bir tedavi ihtiyacı olmaksızın. Tıklama genellikle disk pozisyonundaki normal bir varyasyondan kaynaklanır.",
          ar: "كثير من الناس يسمعون طقطقة في فكهم ويفكرون فورًا في مشكلة خطيرة. الواقع مطمئن: **أصوات المفصل بدون ألم غير ضارة في معظم الحالات.** تظهر الدراسات أن ما يصل إلى 40٪ من السكان لديهم أصوات في مفصل الفك — دون أي حاجة للعلاج. الطقطقة غالبًا ما تنتج عن تغير طبيعي في وضع القرص وليست علامة على وجود مشكلة.",
          pl: "Wiele osób słyszy trzaskanie w żuchwie i natychmiast myśli o poważnym problemie. Rzeczywistość jest uspokajająca: **odgłosy stawowe bez bólu są w większości przypadków nieszkodliwe.** Badania pokazują, że do 40% populacji ma odgłosy stawu skroniowo-żuchwowego — bez jakiejkolwiek potrzeby leczenia. Trzaskanie często wynika z normalnej wariacji pozycji krążka i nie jest oznaką problemu.",
        },
      },
      {
        heading: {
          de: "CMD ist mehr als nur der Kiefer",
          fr: "La DCM, c'est bien plus que la mâchoire",
          en: "TMD is more than just the jaw",
          nl: "CMD is meer dan alleen de kaak",
          tr: "CMD sadece çeneden ibaret değil",
          ar: "CMD أكثر من مجرد الفك",
          pl: "CMD to więcej niż tylko żuchwa",
        },
        body: {
          de: "Die moderne Forschung zeigt: CMD ist eine **multifaktorielle Erkrankung**. Stress, Schlafqualität, Haltung der Halswirbelsäule und sogar emotionale Belastung spielen eine zentrale Rolle. Ihr Kiefer reagiert auf Ihren gesamten Lebenskontext. Wer nachts die Zähne zusammenpresst, tut das oft nicht wegen eines « Kieferproblems », sondern weil das Nervensystem überaktiv ist. Deshalb behandeln wir bei CMD nie isoliert das Gelenk. Ein ganzheitlicher Ansatz — der Nacken, Haltung, Stressmanagement und Schlafhygiene einschließt — zeigt die besten Ergebnisse. Die Wissenschaft bestätigt: **manuelle Therapie kombiniert mit Übungen und Patientenedukation ist wirksamer als jede Einzelmaßnahme.**",
          fr: "La recherche moderne montre : la DCM est une **affection multifactorielle**. Le stress, la qualité du sommeil, la posture cervicale et même la charge émotionnelle jouent un rôle central. Votre mâchoire réagit à l'ensemble de votre contexte de vie. Ceux qui serrent les dents la nuit ne le font souvent pas à cause d'un « problème de mâchoire », mais parce que le système nerveux est suractivé. C'est pourquoi nous ne traitons jamais l'articulation de façon isolée. Une approche globale — incluant la nuque, la posture, la gestion du stress et l'hygiène du sommeil — montre les meilleurs résultats. La science confirme : **la thérapie manuelle combinée aux exercices et à l'éducation du patient est plus efficace que toute mesure isolée.**",
          en: "Modern research shows: TMD is a **multifactorial condition**. Stress, sleep quality, cervical posture and even emotional burden play a central role. Your jaw reacts to your entire life context. Those who clench their teeth at night often do so not because of a \"jaw problem\", but because the nervous system is overactive. This is why we never treat the joint in isolation. A holistic approach — including neck, posture, stress management and sleep hygiene — shows the best results. Science confirms: **manual therapy combined with exercises and patient education is more effective than any single intervention.**",
          nl: "Modern onderzoek toont: CMD is een **multifactoriële aandoening**. Stress, slaapkwaliteit, cervicale houding en zelfs emotionele belasting spelen een centrale rol. Uw kaak reageert op uw hele levenscontext. Wie 's nachts de tanden op elkaar klemt, doet dat vaak niet vanwege een « kaakprobleem », maar omdat het zenuwstelsel overactief is. Daarom behandelen wij bij CMD nooit geïsoleerd het gewricht. Een holistische aanpak — inclusief nek, houding, stressmanagement en slaaphygiëne — toont de beste resultaten.",
          tr: "Modern araştırmalar gösteriyor: CMD **çok faktörlü bir durumdur**. Stres, uyku kalitesi, servikal postür ve duygusal yük merkezi rol oynar. Çeneniz tüm yaşam bağlamınıza tepki verir. Geceleri dişlerini sıkanlar bunu genellikle bir « çene sorunu » yüzünden değil, sinir sistemi aşırı aktif olduğu için yapar. Bu nedenle CMD'de eklemi asla izole tedavi etmiyoruz.",
          ar: "يُظهر البحث الحديث أن CMD هو **حالة متعددة العوامل**. الإجهاد وجودة النوم ووضعية الرقبة وحتى العبء العاطفي يلعبون دورًا محوريًا. فكك يتفاعل مع سياق حياتك بأكمله. من يضغط على أسنانه ليلاً غالبًا لا يفعل ذلك بسبب «مشكلة في الفك»، بل لأن الجهاز العصبي مفرط النشاط. لهذا لا نعالج المفصل بمعزل أبدًا.",
          pl: "Nowoczesne badania pokazują: CMD to **schorzenie wieloczynnikowe**. Stres, jakość snu, postawa odcinka szyjnego, a nawet obciążenie emocjonalne odgrywają centralną rolę. Twoja żuchwa reaguje na cały kontekst Twojego życia. Kto w nocy zaciska zęby, robi to często nie z powodu «problemu żuchwy», lecz dlatego, że układ nerwowy jest nadmiernie aktywny. Dlatego przy CMD nigdy nie leczymy stawu w izolacji.",
        },
        infographic: "cmd-checklist",
      },
      {
        heading: {
          de: "Die goldene Regel unserer ATM-Therapie",
          fr: "La règle d'or de notre thérapie ATM",
          en: "The golden rule of our TMJ therapy",
          nl: "De gouden regel van onze TMJ-therapie",
          tr: "ATM tedavimizin altın kuralı",
          ar: "القاعدة الذهبية لعلاج مفصل الفك لدينا",
          pl: "Złota zasada naszej terapii stawu żuchwowego",
        },
        body: {
          de: "> *« Votre mâchoire a besoin de calme, pas de force — détendre, c'est déjà guérir. »*\n\nDie meisten CMD-Beschwerden verbessern sich durch **Entspannung, nicht durch Korrektur**. Ihr Kiefergelenk braucht keine « Einrenkung » und keine invasiven Eingriffe. Die internationale Forschung ist eindeutig: konservative Therapie (manuelle Techniken + Übungen + Edukation) hilft bei über 85 % der Patienten. Nur in seltenen Ausnahmen ist eine chirurgische Intervention nötig. Ihr Körper verfügt über bemerkenswerte Selbstheilungskräfte — unsere Aufgabe ist es, die richtigen Bedingungen dafür zu schaffen.",
          fr: "> *« Votre mâchoire a besoin de calme, pas de force — détendre, c'est déjà guérir. »*\n\nLa plupart des troubles de l'ATM s'améliorent par la **détente, pas par la correction**. Votre articulation n'a pas besoin d'être « remise en place » ni d'intervention invasive. La recherche internationale est claire : la thérapie conservatrice (techniques manuelles + exercices + éducation) aide plus de 85 % des patients. Ce n'est que dans de rares exceptions qu'une intervention chirurgicale est nécessaire. Votre corps dispose de remarquables capacités d'auto-guérison — notre rôle est de créer les bonnes conditions.",
          en: "> *\"Your jaw needs calm, not force — relaxing is already healing.\"*\n\nMost TMD symptoms improve through **relaxation, not correction**. Your jaw joint doesn't need \"realignment\" or invasive procedures. International research is clear: conservative therapy (manual techniques + exercises + education) helps over 85% of patients. Surgical intervention is needed only in rare exceptions. Your body has remarkable self-healing capacities — our role is to create the right conditions.",
          nl: "> *« Uw kaak heeft rust nodig, geen kracht — ontspannen is al genezen. »*\n\nDe meeste CMD-klachten verbeteren door **ontspanning, niet door correctie**. Uw kaakgewricht hoeft niet « teruggezet » te worden en heeft geen invasieve ingrepen nodig. Internationaal onderzoek is duidelijk: conservatieve therapie (manuele technieken + oefeningen + educatie) helpt bij meer dan 85% van de patiënten. Alleen in zeldzame uitzonderingen is chirurgische interventie nodig.",
          tr: "> *« Çenenizin sakinliğe ihtiyacı var, güce değil — gevşemek zaten iyileşmektir. »*\n\nÇoğu CMD şikayeti **gevşeme ile iyileşir, düzeltme ile değil**. Çene ekleminizin « yerine oturtulmasına » veya invaziv prosedürlere ihtiyacı yoktur. Uluslararası araştırmalar açıktır: konservatif tedavi (manuel teknikler + egzersizler + eğitim) hastaların %85'inden fazlasına yardımcı olur.",
          ar: "> *«فكك يحتاج إلى هدوء، لا قوة — الاسترخاء هو بداية الشفاء.»*\n\nمعظم أعراض CMD تتحسن من خلال **الاسترخاء، وليس التصحيح**. مفصل فكك لا يحتاج إلى «إعادة ضبط» أو إجراءات جراحية. البحث الدولي واضح: العلاج المحافظ (تقنيات يدوية + تمارين + تثقيف) يساعد أكثر من 85٪ من المرضى.",
          pl: "> *« Twoja żuchwa potrzebuje spokoju, nie siły — rozluźnienie to już leczenie. »*\n\nWiększość dolegliwości CMD poprawia się przez **rozluźnienie, nie korektę**. Twój staw skroniowo-żuchwowy nie potrzebuje «nastawienia» ani inwazyjnych zabiegów. Międzynarodowe badania są jednoznaczne: terapia zachowawcza (techniki manualne + ćwiczenia + edukacja) pomaga ponad 85% pacjentów.",
        },
      },
      {
        heading: {
          de: "3 Reflexe bei Kieferspannung",
          fr: "3 réflexes en cas de tension de la mâchoire",
          en: "3 reflexes for jaw tension",
          nl: "3 reflexen bij kaakspanning",
          tr: "Çene gerginliğinde 3 refleks",
          ar: "3 ردود فعل لتوتر الفك",
          pl: "3 odruchy przy napięciu żuchwy",
        },
        body: {
          de: "**1. Position de repos linguistique** — Legen Sie Ihre Zungenspitze leicht hinter die oberen Schneidezähne, Lippen geschlossen, Zähne leicht getrennt. Diese « Ruheposition » entspannt die gesamte Kaumuskulatur und kann hundertmal am Tag angewendet werden.\n\n**2. Nacken-Kiefer-Verbindung pflegen** — Sanfte Nackenmobilisationen (Drehung, Seitneigung) entlasten den Kiefer mit. Studien zeigen: die Halswirbelsäule und das Kiefergelenk teilen sich neuronale Bahnen. Wer den Nacken entspannt, entspannt den Kiefer.\n\n**3. Stressventil einbauen** — Bewusste Atemübungen (4 Sek. ein, 6 Sek. aus) vor dem Schlafengehen reduzieren nächtliches Zähneknirschen nachweislich. Ihr Nervensystem braucht ein Signal zum Herunterfahren.",
          fr: "**1. Position de repos linguale** — Placez le bout de votre langue légèrement derrière les incisives supérieures, lèvres fermées, dents légèrement séparées. Cette « position de repos » détend toute la musculature masticatrice et peut être pratiquée cent fois par jour.\n\n**2. Soigner le lien nuque-mâchoire** — De douces mobilisations cervicales (rotation, inclinaison) soulagent aussi la mâchoire. Les études montrent que le rachis cervical et l'ATM partagent des voies neuronales. Détendre la nuque, c'est détendre la mâchoire.\n\n**3. Installer une soupape anti-stress** — Des exercices respiratoires conscients (4 sec. inspiration, 6 sec. expiration) avant le coucher réduisent le bruxisme nocturne de façon prouvée. Votre système nerveux a besoin d'un signal pour se calmer.",
          en: "**1. Tongue rest position** — Place your tongue tip lightly behind the upper front teeth, lips closed, teeth slightly apart. This \"rest position\" relaxes the entire chewing musculature and can be practised hundreds of times a day.\n\n**2. Care for the neck-jaw connection** — Gentle neck mobilisations (rotation, side bending) also relieve the jaw. Studies show the cervical spine and TMJ share neural pathways. Relaxing the neck relaxes the jaw.\n\n**3. Build in a stress valve** — Conscious breathing exercises (4 sec in, 6 sec out) before bed demonstrably reduce nocturnal teeth grinding. Your nervous system needs a signal to wind down.",
          nl: "**1. Tongrust positie** — Leg uw tongpunt licht achter de bovenste snijtanden, lippen gesloten, tanden licht van elkaar. Deze « rustpositie » ontspant de hele kauwmusculatuur en kan honderd keer per dag worden toegepast.\n\n**2. Nek-kaakverbinding verzorgen** — Zachte nekmobilisaties (rotatie, zijbuiging) ontlasten ook de kaak. Studies tonen: de cervicale wervelkolom en het kaakgewricht delen neurale banen. Nek ontspannen = kaak ontspannen.\n\n**3. Stressventiel inbouwen** — Bewuste ademhalingsoefeningen (4 sec in, 6 sec uit) voor het slapen verminderen aantoonbaar nachtelijk tandenknarsen.",
          tr: "**1. Dil dinlenme pozisyonu** — Dil ucunuzu hafifçe üst ön dişlerin arkasına koyun, dudaklar kapalı, dişler hafif ayrık. Bu «dinlenme pozisyonu» tüm çiğneme kaslarını gevşetir ve günde yüzlerce kez uygulanabilir.\n\n**2. Boyun-çene bağlantısına bakın** — Nazik boyun mobilizasyonları (rotasyon, lateral eğilme) çeneyi de rahatlatır. Çalışmalar, servikal omurga ve çene ekleminin sinir yollarını paylaştığını göstermektedir.\n\n**3. Stres vanası kurun** — Yatmadan önce bilinçli nefes egzersizleri (4 sn giriş, 6 sn çıkış) gece diş gıcırdatmasını kanıtlanmış şekilde azaltır.",
          ar: "**1. وضع راحة اللسان** — ضع طرف لسانك خلف الأسنان الأمامية العلوية بلطف، الشفاه مغلقة، الأسنان متباعدة قليلاً. هذا «وضع الراحة» يريح جميع عضلات المضغ ويمكن ممارسته مئات المرات يوميًا.\n\n**2. اعتنِ بالرابط بين الرقبة والفك** — التعبئة اللطيفة للرقبة (دوران، إمالة جانبية) تريح الفك أيضًا. تظهر الدراسات أن العمود الفقري العنقي ومفصل الفك يشتركان في مسارات عصبية.\n\n**3. ثبّت صمام أمان ضد الإجهاد** — تمارين التنفس الواعي (4 ثوانٍ شهيق، 6 ثوانٍ زفير) قبل النوم تقلل من صرير الأسنان الليلي بشكل مثبت.",
          pl: "**1. Pozycja spoczynkowa języka** — Umieść czubek języka lekko za górnymi siekaczami, usta zamknięte, zęby lekko rozdzielone. Ta «pozycja spoczynkowa» rozluźnia całą muskulaturę żucia i może być stosowana setki razy dziennie.\n\n**2. Dbaj o połączenie kark-żuchwa** — Delikatne mobilizacje karku (rotacja, przechył boczny) odciążają też żuchwę. Badania pokazują, że kręgosłup szyjny i staw żuchwowy dzielą szlaki nerwowe.\n\n**3. Wbuduj zawór antystresowy** — Świadome ćwiczenia oddechowe (4 sek wdech, 6 sek wydech) przed snem udowodnione zmniejszają nocne zgrzytanie zębami.",
        },
      },
      {
        heading: {
          de: "Wann sollten Sie konsultieren?",
          fr: "Quand faut-il consulter ?",
          en: "When should you consult?",
          nl: "Wanneer moet u raadplegen?",
          tr: "Ne zaman danışmalısınız?",
          ar: "متى يجب عليك الاستشارة؟",
          pl: "Kiedy powinniście się skonsultować?",
        },
        body: {
          de: "Kiefergelenkgeräusche allein sind **kein Grund zur Sorge**. Konsultieren Sie eine spezialisierte Therapeutin, wenn: **Schmerzen beim Kauen** länger als 2 Wochen anhalten, **Mundöffnung eingeschränkt** ist (weniger als 3 Finger breit), **Kopfschmerzen oder Ohrenschmerzen** regelmäßig auftreten und Ihr Arzt keine andere Ursache findet, oder **Kiefer sich nicht mehr normal öffnen** lässt. Je früher die Behandlung beginnt, desto schneller reagiert Ihr System. In Eupen bietet Fabienne Dormann kurzfristige Termine für Kiefergelenk-Problematiken an — auch ohne ärztliche Überweisung.",
          fr: "Les bruits articulaires seuls ne sont **pas un motif d'inquiétude**. Consultez une thérapeute spécialisée si : **des douleurs en mangeant** persistent plus de 2 semaines, **l'ouverture buccale est limitée** (moins de 3 doigts de large), **des maux de tête ou douleurs d'oreille** surviennent régulièrement sans autre cause identifiée par votre médecin, ou **la mâchoire se verrouille** et ne s'ouvre plus normalement. Plus le traitement commence tôt, plus votre système répond rapidement. À Eupen, Fabienne Dormann propose des rendez-vous rapides pour les problématiques ATM — même sans ordonnance médicale.",
          en: "Joint sounds alone are **no cause for concern**. Consult a specialist therapist if: **pain when chewing** persists for more than 2 weeks, **mouth opening is limited** (less than 3 fingers wide), **headaches or ear pain** occur regularly and your doctor finds no other cause, or **the jaw locks** and no longer opens normally. The earlier treatment begins, the faster your system responds. In Eupen, Fabienne Dormann offers short-notice appointments for TMJ issues — even without a medical referral.",
          nl: "Gewrichtsgeluiden alleen zijn **geen reden tot bezorgdheid**. Raadpleeg een gespecialiseerde therapeute als: **pijn bij kauwen** langer dan 2 weken aanhoudt, **mondopening beperkt** is (minder dan 3 vingers breed), **hoofdpijn of oorpijn** regelmatig optreedt en uw arts geen andere oorzaak vindt, of **de kaak blokkeert** en niet meer normaal opent. Hoe eerder de behandeling begint, hoe sneller uw systeem reageert. In Eupen biedt Fabienne Dormann snelle afspraken voor kaakgewrichtsproblemen.",
          tr: "Eklem sesleri tek başına **endişe nedeni değildir**. Uzman bir terapiste danışın: **çiğnerken ağrı** 2 haftadan uzun sürerse, **ağız açıklığı kısıtlıysa** (3 parmak genişliğinden az), **baş ağrısı veya kulak ağrısı** düzenli olarak ortaya çıkıyor ve doktorunuz başka bir neden bulamıyorsa, veya **çene kilitleniyorsa** ve artık normal açılmıyorsa. Eupen'de Fabienne Dormann çene eklemi sorunları için kısa vadeli randevular sunuyor.",
          ar: "أصوات المفصل وحدها **ليست سببًا للقلق**. استشر معالجة متخصصة إذا: **استمر الألم عند المضغ** لأكثر من أسبوعين، **كان فتح الفم محدودًا** (أقل من 3 أصابع عرضًا)، **الصداع أو ألم الأذن** يحدث بانتظام ولم يجد طبيبك سببًا آخر، أو **الفك ينغلق** ولا يفتح بشكل طبيعي. في Eupen، تقدم فابيان دورمان مواعيد سريعة لمشاكل مفصل الفك.",
          pl: "Odgłosy stawowe same w sobie **nie są powodem do niepokoju**. Skonsultuj się ze specjalistką, jeśli: **ból przy żuciu** utrzymuje się dłużej niż 2 tygodnie, **otwarcie ust jest ograniczone** (mniej niż 3 palce szerokości), **bóle głowy lub ucha** występują regularnie bez innej przyczyny, lub **żuchwa się blokuje** i nie otwiera normalnie. W Eupen Fabienne Dormann oferuje szybkie terminy dla problemów stawu żuchwowego.",
        },
        infographic: "traffic-light",
      },
      {
        heading: {
          de: "Bei Praxis Loten in Eupen: ATM-Therapie",
          fr: "Au cabinet Praxis Loten à Eupen : thérapie ATM",
          en: "At Praxis Loten in Eupen: TMJ therapy",
          nl: "Bij Praxis Loten in Eupen: TMJ-therapie",
          tr: "Eupen'de Praxis Loten'de: ATM tedavisi",
          ar: "في Praxis Loten في Eupen: علاج مفصل الفك",
          pl: "W Praxis Loten w Eupen: terapia stawu żuchwowego",
        },
        body: {
          de: "**1. Umfassende Befunderhebung** — Fabienne Dormann untersucht nicht nur Ihren Kiefer, sondern auch Nacken, Haltung und Stressfaktoren. Jede CMD ist individuell — Ihr Behandlungsplan auch.\n\n**2. Intra- und extraorale Techniken** — Sanfte manuelle Techniken an der Kaumuskulatur (von innen und außen), Mobilisation des Kiefergelenks und Weichteiltechniken lösen Spannungen ohne Kraft.\n\n**3. Übungen und Selbstmanagement** — Sie erlernen die Zungenruheposition, Entspannungsstrategien und gezielte Heimübungen, die Sie im Alltag einsetzen können.\n\n**4. Interdisziplinäre Zusammenarbeit** — In Abstimmung mit Ihrem Zahnarzt (Aufbissschiene), HNO-Arzt oder Psychologen bieten wir eine ganzheitliche Versorgung, die alle Faktoren berücksichtigt.",
          fr: "**1. Bilan complet** — Fabienne Dormann examine non seulement votre mâchoire, mais aussi la nuque, la posture et les facteurs de stress. Chaque DCM est individuelle — votre plan de traitement aussi.\n\n**2. Techniques intra- et extra-orales** — Des techniques manuelles douces sur la musculature masticatrice (par l'intérieur et l'extérieur), la mobilisation de l'ATM et des techniques des tissus mous libèrent les tensions sans force.\n\n**3. Exercices et autogestion** — Vous apprenez la position linguale de repos, des stratégies de relaxation et des exercices ciblés à faire chez vous au quotidien.\n\n**4. Collaboration interdisciplinaire** — En coordination avec votre dentiste (gouttière occlusale), ORL ou psychologue, nous offrons une prise en charge globale qui tient compte de tous les facteurs.",
          en: "**1. Comprehensive assessment** — Fabienne Dormann examines not just your jaw, but also your neck, posture and stress factors. Every TMD is individual — your treatment plan is too.\n\n**2. Intra- and extra-oral techniques** — Gentle manual techniques on the chewing muscles (from inside and outside), TMJ mobilisation and soft tissue techniques release tension without force.\n\n**3. Exercises and self-management** — You learn the tongue rest position, relaxation strategies and targeted home exercises you can use in daily life.\n\n**4. Interdisciplinary collaboration** — In coordination with your dentist (occlusal splint), ENT or psychologist, we offer holistic care that considers all factors.",
          nl: "**1. Uitgebreide beoordeling** — Fabienne Dormann onderzoekt niet alleen uw kaak, maar ook nek, houding en stressfactoren. Elke CMD is individueel — uw behandelplan ook.\n\n**2. Intra- en extra-orale technieken** — Zachte manuele technieken op de kauwmusculatuur (van binnen en buiten), mobilisatie van het kaakgewricht en weefseltechnieken lossen spanning op zonder kracht.\n\n**3. Oefeningen en zelfmanagement** — U leert de tongrust positie, ontspanningsstrategieën en gerichte thuisoefeningen die u dagelijks kunt gebruiken.\n\n**4. Interdisciplinaire samenwerking** — In afstemming met uw tandarts (opbeetplaat), KNO-arts of psycholoog bieden wij holistische zorg die alle factoren meeweegt.",
          tr: "**1. Kapsamlı değerlendirme** — Fabienne Dormann sadece çenenizi değil, aynı zamanda boyun, postür ve stres faktörlerini de inceler. Her CMD bireyseldir — tedavi planınız da öyle.\n\n**2. İntra ve ekstraoral teknikler** — Çiğneme kasları üzerinde nazik manuel teknikler (içten ve dıştan), çene eklemi mobilizasyonu ve yumuşak doku teknikleri gerginliği kuvvetsiz çözer.\n\n**3. Egzersizler ve öz-yönetim** — Dil dinlenme pozisyonunu, gevşeme stratejilerini ve günlük yaşamda kullanabileceğiniz hedefli ev egzersizlerini öğrenirsiniz.\n\n**4. Disiplinler arası işbirliği** — Diş hekiminiz (oklüzal atel), KBB uzmanı veya psikologla koordineli olarak tüm faktörleri dikkate alan bütünsel bakım sunuyoruz.",
          ar: "**1. تقييم شامل** — تفحص فابيان دورمان ليس فقط فكك، بل أيضًا الرقبة والوضعية وعوامل الإجهاد. كل CMD فردي — خطة علاجك أيضًا.\n\n**2. تقنيات داخل وخارج الفم** — تقنيات يدوية لطيفة على عضلات المضغ (من الداخل والخارج)، تعبئة مفصل الفك وتقنيات الأنسجة الرخوة تحرر التوتر بدون قوة.\n\n**3. تمارين وإدارة ذاتية** — تتعلم وضع راحة اللسان واستراتيجيات الاسترخاء وتمارين منزلية مستهدفة يمكنك استخدامها يوميًا.\n\n**4. تعاون متعدد التخصصات** — بالتنسيق مع طبيب أسنانك (جبيرة إطباقية)، أخصائي الأنف والأذن أو الأخصائي النفسي، نقدم رعاية شاملة تراعي جميع العوامل.",
          pl: "**1. Kompleksowa ocena** — Fabienne Dormann bada nie tylko żuchwę, ale też kark, postawę i czynniki stresowe. Każdy CMD jest indywidualny — Twój plan leczenia też.\n\n**2. Techniki wewnątrz- i zewnątrzustne** — Delikatne techniki manualne na muskulaturze żucia (od wewnątrz i zewnątrz), mobilizacja stawu żuchwowego i techniki tkanek miękkich uwalniają napięcie bez siły.\n\n**3. Ćwiczenia i samodzielne zarządzanie** — Uczysz się pozycji spoczynkowej języka, strategii relaksacji i celowanych ćwiczeń domowych do codziennego stosowania.\n\n**4. Współpraca interdyscyplinarna** — W koordynacji z Twoim dentystą (szyna okluzyjna), laryngologiem lub psychologiem oferujemy holistyczną opiekę uwzględniającą wszystkie czynniki.",
        },
      },
    ],
    keyPoints: {
      de: ["Kieferknacken ohne Schmerz ist meist harmlos", "CMD ist multifaktoriell: Stress, Schlaf, Nacken spielen eine Rolle", "Konservative Therapie hilft bei über 85 % der Fälle", "Zungenruheposition und Atemübungen als Sofort-Hilfe", "Spezialisierte ATM-Therapie bei Fabienne Dormann in Eupen"],
      fr: ["Le craquement sans douleur est généralement inoffensif", "La DCM est multifactorielle : stress, sommeil, nuque jouent un rôle", "La thérapie conservatrice aide dans plus de 85 % des cas", "Position linguale de repos et exercices respiratoires en aide immédiate", "Thérapie ATM spécialisée avec Fabienne Dormann à Eupen"],
      en: ["Painless clicking is usually harmless", "TMD is multifactorial: stress, sleep, neck all play a role", "Conservative therapy helps in over 85% of cases", "Tongue rest position and breathing exercises as immediate help", "Specialised TMJ therapy with Fabienne Dormann in Eupen"],
      nl: ["Pijnloos klikken is meestal onschuldig", "CMD is multifactorieel: stress, slaap, nek spelen een rol", "Conservatieve therapie helpt bij meer dan 85% van de gevallen", "Tongrust positie en ademhalingsoefeningen als directe hulp", "Gespecialiseerde TMJ-therapie bij Fabienne Dormann in Eupen"],
      tr: ["Ağrısız tıklama genellikle zararsızdır", "CMD çok faktörlüdür: stres, uyku, boyun rol oynar", "Konservatif tedavi vakaların %85'inden fazlasında yardımcı olur", "Dil dinlenme pozisyonu ve nefes egzersizleri anlık yardım olarak", "Eupen'de Fabienne Dormann ile uzman ATM tedavisi"],
      ar: ["الطقطقة بدون ألم عادة غير ضارة", "CMD متعدد العوامل: الإجهاد والنوم والرقبة تلعب دورًا", "العلاج المحافظ يساعد في أكثر من 85٪ من الحالات", "وضع راحة اللسان وتمارين التنفس كمساعدة فورية", "علاج متخصص لمفصل الفك مع فابيان دورمان في Eupen"],
      pl: ["Bezbolesne trzaskanie jest zwykle nieszkodliwe", "CMD jest wieloczynnikowe: stres, sen, kark odgrywają rolę", "Terapia zachowawcza pomaga w ponad 85% przypadków", "Pozycja spoczynkowa języka i ćwiczenia oddechowe jako natychmiastowa pomoc", "Specjalistyczna terapia stawu żuchwowego u Fabienne Dormann w Eupen"],
    },
    ctaText: {
      de: "Kieferschmerzen, Kopfschmerzen oder Zähneknirschen? Vereinbaren Sie einen Termin bei Fabienne Dormann in Eupen.",
      fr: "Douleurs à la mâchoire, maux de tête ou bruxisme ? Prenez rendez-vous avec Fabienne Dormann à Eupen.",
      en: "Jaw pain, headaches or teeth grinding? Book an appointment with Fabienne Dormann in Eupen.",
      nl: "Kaakpijn, hoofdpijn of tandenknarsen? Maak een afspraak bij Fabienne Dormann in Eupen.",
      tr: "Çene ağrısı, baş ağrısı veya diş gıcırdatması mı? Eupen'de Fabienne Dormann ile randevu alın.",
      ar: "ألم الفك أو الصداع أو صرير الأسنان؟ احجز موعدًا مع فابيان دورمان في Eupen.",
      pl: "Ból żuchwy, bóle głowy lub zgrzytanie zębami? Zarezerwuj wizytę u Fabienne Dormann w Eupen.",
    },
    bibliography: [
      "List T, Jensen RH. Temporomandibular disorders: Old ideas and new concepts. Cephalalgia. 2017;37(7):692-704.",
      "Armijo-Olivo S et al. Effectiveness of Manual Therapy and Therapeutic Exercise for Temporomandibular Disorders. Clin J Pain. 2016;32(3):260-278.",
      "Butts R et al. Conservative Management of Temporomandibular Dysfunction: A Literature Review. JOSPT. 2017;47(8):560-571.",
      "Schiffman E et al. Diagnostic Criteria for Temporomandibular Disorders (DC/TMD). J Oral Facial Pain Headache. 2014;28(1):6-27.",
      "De Leeuw R, Klasser GD. Orofacial Pain: Guidelines for Assessment, Diagnosis, and Management. 6th ed. Quintessence; 2018.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine individuelle Beratung durch eine qualifizierte Therapeutin. Bei anhaltenden Beschwerden konsultieren Sie bitte Ihre Therapeutin oder Ihren Arzt.",
      fr: "Cet article est à visée informative uniquement et ne remplace pas une consultation individuelle avec une thérapeute qualifiée. En cas de symptômes persistants, consultez votre thérapeute ou votre médecin.",
      en: "This article is for informational purposes only and does not replace individual advice from a qualified therapist. For persistent symptoms, please consult your therapist or doctor.",
      nl: "Dit artikel is alleen bedoeld ter informatie en vervangt geen individueel advies van een gekwalificeerde therapeute. Raadpleeg bij aanhoudende klachten uw therapeute of arts.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır ve nitelikli bir terapistten bireysel danışmanlığın yerini almaz. Kalıcı belirtilerde terapistinize veya doktorunuza danışın.",
      ar: "هذه المقالة لأغراض إعلامية فقط ولا تحل محل الاستشارة الفردية مع معالجة مؤهلة. في حالة الأعراض المستمرة، يرجى استشارة معالجتك أو طبيبك.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny i nie zastępuje indywidualnej porady wykwalifikowanej terapeutki. W przypadku utrzymujących się objawów skonsultuj się ze swoją terapeutką lub lekarzem.",
    },
  },

  "osteopathie-kinesitherapie-unterschied": {
    title: {
      de: "Osteopathie und Physiotherapie — zwei Wege, ein Ziel",
      fr: "Ostéopathie et kinésithérapie — deux voies, un objectif",
      en: "Osteopathy and physiotherapy — two paths, one goal",
      nl: "Osteopathie en fysiotherapie — twee wegen, één doel",
      tr: "Osteopati ve fizyoterapi — iki yol, bir hedef",
      ar: "العلاج اليدوي والعلاج الطبيعي — مساران، هدف واحد",
      pl: "Osteopatia i fizjoterapia — dwie drogi, jeden cel",
    },
    category: {
      de: "Osteopathie", fr: "Ostéopathie", en: "Osteopathy",
      nl: "Osteopathie", tr: "Osteopati", ar: "العلاج اليدوي", pl: "Osteopatia",
    },
    date: "2024-07-05",
    readMin: 6,
    color: "from-indigo-600 to-indigo-800",
    authorSlug: "felix-esser",
    authorName: "Félix Esser",
    intro: {
      de: "« Soll ich zum Osteopathen oder zum Physiotherapeuten? » Diese Frage hören wir bei Praxis Loten in Eupen mehrmals pro Woche. Die ehrliche Antwort: die Grenze zwischen beiden Disziplinen ist heute fließend. Viele Therapeuten — darunter Félix Esser und Loïc Meunier — sind in beiden ausgebildet. Was zählt, ist nicht das Etikett, sondern die Qualität der Beurteilung und die Evidenz hinter der Behandlung.",
      fr: "« Dois-je aller chez l'ostéopathe ou le kinésithérapeute ? » Cette question, nous l'entendons plusieurs fois par semaine chez Praxis Loten à Eupen. La réponse honnête : la frontière entre les deux disciplines est aujourd'hui floue. De nombreux thérapeutes — dont Félix Esser et Loïc Meunier — sont formés dans les deux. Ce qui compte, ce n'est pas l'étiquette, mais la qualité de l'évaluation et l'évidence derrière le traitement.",
      en: "\"Should I see an osteopath or a physiotherapist?\" We hear this question several times a week at Praxis Loten in Eupen. The honest answer: the boundary between both disciplines is fluid today. Many therapists — including Félix Esser and Loïc Meunier — are trained in both. What matters is not the label, but the quality of assessment and the evidence behind the treatment.",
      nl: "« Moet ik naar de osteopaat of de fysiotherapeut? » Deze vraag horen we meerdere keren per week bij Praxis Loten in Eupen. Het eerlijke antwoord: de grens tussen beide disciplines is vandaag vloeiend. Veel therapeuten — waaronder Félix Esser en Loïc Meunier — zijn in beide opgeleid. Wat telt is niet het etiket, maar de kwaliteit van de beoordeling en het bewijs achter de behandeling.",
      tr: "« Osteopata mı fizyoterapiste mi gitmeliyim? » Bu soruyu Eupen'deki Praxis Loten'de haftada birkaç kez duyuyoruz. Dürüst cevap: iki disiplin arasındaki sınır bugün akışkan. Félix Esser ve Loïc Meunier dahil birçok terapist her ikisinde de eğitimlidir. Önemli olan etiket değil, değerlendirme kalitesi ve tedavinin arkasındaki kanıttır.",
      ar: "«هل أذهب لأخصائي العلاج اليدوي أم المعالج الطبيعي؟» نسمع هذا السؤال عدة مرات أسبوعيًا في Praxis Loten في Eupen. الإجابة الصادقة: الحدود بين التخصصين أصبحت اليوم غير واضحة. كثير من المعالجين — بمن فيهم Félix Esser وLoïc Meunier — مدربون في كليهما. المهم ليس التسمية، بل جودة التقييم والدليل العلمي وراء العلاج.",
      pl: "« Czy iść do osteopaty czy fizjoterapeuty? » To pytanie słyszymy kilka razy w tygodniu w Praxis Loten w Eupen. Szczera odpowiedź: granica między obiema dyscyplinami jest dziś płynna. Wielu terapeutów — w tym Félix Esser i Loïc Meunier — jest szkolonych w obu. Liczy się nie etykieta, lecz jakość oceny i dowody stojące za leczeniem.",
    },
    sections: [
      {
        heading: {
          de: "Mythos: zwei getrennte Welten",
          fr: "Mythe : deux mondes séparés",
          en: "Myth: two separate worlds",
          nl: "Mythe: twee gescheiden werelden",
          tr: "Mit: iki ayrı dünya",
          ar: "خرافة: عالمان منفصلان",
          pl: "Mit: dwa oddzielne światy",
        },
        body: {
          de: "Viele glauben, Physiotherapie sei « nur Übungen » und Osteopathie « nur Knacken ». Beides ist falsch. Moderne Physiotherapie umfasst manuelle Techniken, und moderne Osteopathie integriert aktive Übungen. Die beiden Disziplinen haben sich in den letzten 20 Jahren stark angenähert. Was sie verbindet: beide arbeiten mit den Händen, beide zielen auf Funktionsverbesserung, beide sollten evidenzbasiert arbeiten. Was sie historisch unterscheidet: Physiotherapie wurde im medizinischen System geboren (Reha, Neurologie, Sport), Osteopathie in einer ganzheitlicheren Philosophie (Körper als Einheit, Selbstregulation). In der Praxis 2024? Ein guter Therapeut nutzt die besten Werkzeuge beider Welten.",
          fr: "Beaucoup croient que la kinésithérapie c'est « juste des exercices » et l'ostéopathie « juste craquer ». Les deux sont faux. La kinésithérapie moderne inclut des techniques manuelles, et l'ostéopathie moderne intègre des exercices actifs. Les deux disciplines se sont considérablement rapprochées ces 20 dernières années. Ce qui les unit : toutes deux travaillent avec les mains, visent l'amélioration fonctionnelle, et devraient s'appuyer sur les preuves. Ce qui les distingue historiquement : la kinésithérapie est née dans le système médical (réhabilitation, neurologie, sport), l'ostéopathie dans une philosophie plus globale (le corps comme unité, autorégulation). En pratique en 2024 ? Un bon thérapeute utilise les meilleurs outils des deux mondes.",
          en: "Many believe physiotherapy is \"just exercises\" and osteopathy is \"just cracking\". Both are wrong. Modern physiotherapy includes manual techniques, and modern osteopathy integrates active exercises. The two disciplines have converged significantly over the last 20 years. What unites them: both work with hands, both aim for functional improvement, both should be evidence-based. What historically distinguishes them: physiotherapy was born in the medical system (rehabilitation, neurology, sport), osteopathy in a more holistic philosophy (body as unit, self-regulation). In practice in 2024? A good therapist uses the best tools from both worlds.",
          nl: "Velen geloven dat fysiotherapie « alleen oefeningen » is en osteopathie « alleen kraken ». Beide zijn onjuist. Moderne fysiotherapie omvat manuele technieken, en moderne osteopathie integreert actieve oefeningen. De twee disciplines zijn de afgelopen 20 jaar sterk naar elkaar toegegroeid. Wat ze verbindt: beide werken met handen, beide richten zich op functionele verbetering. Wat ze historisch onderscheidt: fysiotherapie ontstond in het medisch systeem, osteopathie in een meer holistische filosofie. In de praktijk in 2024? Een goede therapeut gebruikt het beste van beide werelden.",
          tr: "Birçok kişi fizyoterapinin «sadece egzersiz» ve osteopatinin «sadece çıtlatma» olduğuna inanır. İkisi de yanlıştır. Modern fizyoterapi manuel teknikleri içerir ve modern osteopati aktif egzersizleri entegre eder. İki disiplin son 20 yılda önemli ölçüde yakınlaşmıştır. Onları birleştiren: ikisi de ellerle çalışır, ikisi de fonksiyonel iyileşmeyi hedefler. Pratikte 2024'te? İyi bir terapist her iki dünyanın en iyi araçlarını kullanır.",
          ar: "يعتقد كثيرون أن العلاج الطبيعي «مجرد تمارين» والعلاج اليدوي «مجرد طقطقة». كلاهما خاطئ. العلاج الطبيعي الحديث يشمل تقنيات يدوية، والعلاج اليدوي الحديث يدمج تمارين نشطة. التخصصان تقاربا بشكل كبير خلال الـ20 سنة الماضية. ما يوحدهما: كلاهما يعمل باليدين ويهدف للتحسين الوظيفي. ما يميزهما تاريخيًا: العلاج الطبيعي وُلد في النظام الطبي، والعلاج اليدوي في فلسفة أكثر شمولية. في الممارسة عام 2024؟ المعالج الجيد يستخدم أفضل أدوات العالمين.",
          pl: "Wielu wierzy, że fizjoterapia to «tylko ćwiczenia», a osteopatia to «tylko trzaskanie». Oba poglądy są błędne. Nowoczesna fizjoterapia obejmuje techniki manualne, a nowoczesna osteopatia integruje aktywne ćwiczenia. Obie dyscypliny znacząco zbliżyły się w ciągu ostatnich 20 lat. Co je łączy: obie pracują rękami, obie dążą do poprawy funkcji. Co je historycznie odróżnia: fizjoterapia narodziła się w systemie medycznym, osteopatia w bardziej holistycznej filozofii. W praktyce 2024? Dobry terapeuta korzysta z najlepszych narzędzi obu światów.",
        },
        infographic: "kine-vs-osteo",
      },
      {
        heading: {
          de: "Was sagt die Wissenschaft wirklich?",
          fr: "Que dit vraiment la science ?",
          en: "What does science really say?",
          nl: "Wat zegt de wetenschap echt?",
          tr: "Bilim gerçekten ne diyor?",
          ar: "ماذا يقول العلم حقًا؟",
          pl: "Co naprawdę mówi nauka?",
        },
        body: {
          de: "Die Evidenz zeigt: **manuelle Techniken** (Mobilisationen, Manipulationen, Weichteiltechniken) sind wirksam bei muskuloskelettalen Beschwerden — unabhängig davon, ob sie von einem Physiotherapeuten oder Osteopathen durchgeführt werden. Entscheidend ist die **Kombination** mit aktiver Übung und Patientenedukation. Meta-Analysen (Rubinstein 2019, Coulter 2018) belegen moderate Evidenz für manuelle Therapie bei Rückenschmerzen, Nackenschmerzen und bestimmten Kopfschmerzformen. Was keinen Unterschied macht: der Name auf dem Praxisschild. Was einen Unterschied macht: ob der Therapeut seine Techniken in ein **globales Behandlungskonzept** einbettet — mit klarem Ziel, messbaren Fortschritten und aktiver Mitarbeit des Patienten.",
          fr: "L'évidence montre : les **techniques manuelles** (mobilisations, manipulations, techniques des tissus mous) sont efficaces pour les troubles musculosquelettiques — peu importe qu'elles soient réalisées par un kinésithérapeute ou un ostéopathe. Ce qui est décisif, c'est la **combinaison** avec l'exercice actif et l'éducation du patient. Les méta-analyses (Rubinstein 2019, Coulter 2018) montrent une évidence modérée pour la thérapie manuelle dans les douleurs lombaires, cervicales et certaines céphalées. Ce qui ne fait pas de différence : le nom sur la plaque. Ce qui fait la différence : le thérapeute intègre-t-il ses techniques dans un **concept de traitement global** — avec un objectif clair, des progrès mesurables et la participation active du patient.",
          en: "Evidence shows: **manual techniques** (mobilisations, manipulations, soft tissue techniques) are effective for musculoskeletal complaints — regardless of whether performed by a physiotherapist or osteopath. What matters is the **combination** with active exercise and patient education. Meta-analyses (Rubinstein 2019, Coulter 2018) demonstrate moderate evidence for manual therapy in back pain, neck pain and certain headache types. What makes no difference: the name on the door. What makes a difference: whether the therapist integrates techniques into a **comprehensive treatment concept** — with clear goals, measurable progress and active patient participation.",
          nl: "Het bewijs toont: **manuele technieken** (mobilisaties, manipulaties, weke-delentechnieken) zijn effectief bij musculoskeletale klachten — ongeacht of ze door een fysiotherapeut of osteopaat worden uitgevoerd. Wat telt is de **combinatie** met actieve oefening en patiënteducatie. Meta-analyses (Rubinstein 2019, Coulter 2018) tonen matige evidentie voor manuele therapie bij rug-, nekpijn en bepaalde hoofdpijnvormen. Wat geen verschil maakt: de naam op het bord. Wat wel verschil maakt: integreert de therapeut zijn technieken in een **globaal behandelconcept**.",
          tr: "Kanıtlar gösteriyor: **manuel teknikler** (mobilizasyonlar, manipülasyonlar, yumuşak doku teknikleri) kas-iskelet sistemi şikayetlerinde etkilidir — fizyoterapist veya osteopat tarafından uygulanmasına bakılmaksızın. Belirleyici olan, aktif egzersiz ve hasta eğitimi ile **kombinasyondur**. Meta-analizler (Rubinstein 2019, Coulter 2018) bel ağrısı ve boyun ağrısında orta düzeyde kanıt göstermektedir. Fark yaratan: terapistin tekniklerini **kapsamlı bir tedavi konseptine** entegre edip etmediğidir.",
          ar: "تُظهر الأدلة: **التقنيات اليدوية** (التحريكات، المناورات، تقنيات الأنسجة الرخوة) فعالة للشكاوى العضلية الهيكلية — بغض النظر عمن يقوم بها. الحاسم هو **الجمع** مع التمارين النشطة وتثقيف المريض. تُظهر التحليلات الوصفية (Rubinstein 2019, Coulter 2018) دليلًا معتدلًا للعلاج اليدوي في آلام الظهر والرقبة. ما لا يصنع فرقًا: الاسم على اللوحة. ما يصنع الفرق: هل يدمج المعالج تقنياته في **مفهوم علاج شامل**.",
          pl: "Dowody pokazują: **techniki manualne** (mobilizacje, manipulacje, techniki tkanek miękkich) są skuteczne w dolegliwościach mięśniowo-szkieletowych — niezależnie od tego, czy wykonuje je fizjoterapeuta czy osteopata. Decydujące jest **połączenie** z aktywnymi ćwiczeniami i edukacją pacjenta. Meta-analizy (Rubinstein 2019, Coulter 2018) pokazują umiarkowane dowody na terapię manualną w bólach pleców, szyi i niektórych bólach głowy. Co nie robi różnicy: nazwa na tabliczce. Co robi różnicę: czy terapeuta integruje techniki w **całościową koncepcję leczenia**.",
        },
      },
      {
        heading: {
          de: "Die goldene Regel",
          fr: "La règle d'or",
          en: "The golden rule",
          nl: "De gouden regel",
          tr: "Altın kural",
          ar: "القاعدة الذهبية",
          pl: "Złota zasada",
        },
        body: {
          de: "> *« Gute Hände öffnen die Tür — aber Sie gehen selbst hindurch. »*\n\nManuelle Therapie (ob « osteopathisch » oder « physiotherapeutisch » genannt) ist ein hervorragendes Werkzeug, um Schmerz zu modulieren, Beweglichkeit zu verbessern und Vertrauen in den eigenen Körper aufzubauen. Aber sie ist **ein Teil** des Puzzles. Die Forschung ist eindeutig: die besten Langzeitergebnisse entstehen, wenn manuelle Behandlung mit **aktivem Training** kombiniert wird. Die Hände des Therapeuten bringen Erleichterung und schaffen ein Fenster — Ihre eigene Bewegung sorgt für die nachhaltige Veränderung. Das gilt für Rückenschmerzen, Nackenschmerzen, Kopfschmerzen und Gelenkbeschwerden gleichermaßen.",
          fr: "> *« De bonnes mains ouvrent la porte — mais c'est vous qui la franchissez. »*\n\nLa thérapie manuelle (qu'on l'appelle « ostéopathique » ou « kinésithérapeutique ») est un excellent outil pour moduler la douleur, améliorer la mobilité et reconstruire la confiance dans votre corps. Mais c'est **une partie** du puzzle. La recherche est claire : les meilleurs résultats à long terme naissent quand le traitement manuel est combiné avec un **entraînement actif**. Les mains du thérapeute apportent un soulagement et créent une fenêtre — votre propre mouvement assure le changement durable. Cela vaut pour les lombalgies, cervicalgies, céphalées et douleurs articulaires.",
          en: "> *\"Good hands open the door — but you walk through it yourself.\"*\n\nManual therapy (whether called \"osteopathic\" or \"physiotherapeutic\") is an excellent tool to modulate pain, improve mobility and rebuild confidence in your body. But it is **one part** of the puzzle. Research is clear: the best long-term outcomes come when manual treatment is combined with **active training**. The therapist's hands bring relief and create a window — your own movement ensures lasting change. This applies equally to back pain, neck pain, headaches and joint complaints.",
          nl: "> *« Goede handen openen de deur — maar u loopt er zelf doorheen. »*\n\nManuele therapie (of men het nu « osteopathisch » of « fysiotherapeutisch » noemt) is een uitstekend instrument om pijn te moduleren, mobiliteit te verbeteren en vertrouwen in uw lichaam op te bouwen. Maar het is **één deel** van de puzzel. Onderzoek is duidelijk: de beste langetermijnresultaten ontstaan wanneer manuele behandeling wordt gecombineerd met **actieve training**. De handen van de therapeut brengen verlichting — uw eigen beweging zorgt voor blijvende verandering.",
          tr: "> *« İyi eller kapıyı açar — ama içinden kendiniz geçersiniz. »*\n\nManuel terapi (« osteopatik » veya « fizyoterapötik » densin) ağrıyı modüle etmek, mobiliteyi artırmak ve vücudunuza güveni yeniden inşa etmek için mükemmel bir araçtır. Ama bulmacadanın **bir parçasıdır**. Araştırma açık: en iyi uzun vadeli sonuçlar manuel tedavi **aktif egzersizle** birleştirildiğinde ortaya çıkar. Terapistin elleri rahatlık sağlar — kendi hareketiniz kalıcı değişimi sağlar.",
          ar: "> *«الأيدي الجيدة تفتح الباب — لكنك أنت من يمر من خلاله.»*\n\nالعلاج اليدوي (سواء سُمي «استيوباثي» أو «علاج طبيعي») أداة ممتازة لتعديل الألم وتحسين الحركة وإعادة بناء الثقة بجسمك. لكنه **جزء واحد** من الأحجية. البحث واضح: أفضل النتائج طويلة المدى تأتي عندما يُدمج العلاج اليدوي مع **التدريب النشط**. أيدي المعالج تجلب الراحة — حركتك الخاصة تضمن التغيير الدائم.",
          pl: "> *« Dobre ręce otwierają drzwi — ale to Ty przez nie przechodzisz. »*\n\nTerapia manualna (czy nazywana «osteopatyczną» czy «fizjoterapeutyczną») to doskonałe narzędzie do modulowania bólu, poprawy ruchomości i odbudowy zaufania do ciała. Ale jest **jedną częścią** układanki. Badania są jasne: najlepsze długoterminowe wyniki powstają, gdy leczenie manualne łączy się z **aktywnym treningiem**. Ręce terapeuty przynoszą ulgę — Twój własny ruch zapewnia trwałą zmianę.",
        },
        infographic: "manual-therapy-pillars",
      },
      {
        heading: {
          de: "3 Fragen vor Ihrem Termin",
          fr: "3 questions avant votre rendez-vous",
          en: "3 questions before your appointment",
          nl: "3 vragen voor uw afspraak",
          tr: "Randevunuzdan önce 3 soru",
          ar: "3 أسئلة قبل موعدك",
          pl: "3 pytania przed wizytą",
        },
        body: {
          de: "**1. Hat mein Therapeut eine anerkannte Grundausbildung?** — In Belgien sollte Ihr Osteopath gleichzeitig diplomierter Physiotherapeut sein. Das garantiert eine solide medizinische Basis und Erstattung durch die Krankenkasse.\n\n**2. Arbeitet er/sie evidenzbasiert?** — Fragen Sie: « Warum diese Technik bei mir? » Ein guter Therapeut erklärt sein Vorgehen und passt es an Ihre Reaktion an — nicht an ein starres Protokoll.\n\n**3. Gibt es einen aktiven Teil?** — Wenn Sie nach 6 Sitzungen nur passive Behandlung erhalten haben, fehlt ein entscheidender Baustein. Fragen Sie nach Übungen für zu Hause.",
          fr: "**1. Mon thérapeute a-t-il une formation de base reconnue ?** — En Belgique, votre ostéopathe devrait être simultanément kinésithérapeute diplômé. Cela garantit une base médicale solide et le remboursement par la mutuelle.\n\n**2. Travaille-t-il/elle de manière fondée sur les preuves ?** — Demandez : « Pourquoi cette technique pour moi ? » Un bon thérapeute explique sa démarche et s'adapte à votre réaction — pas à un protocole rigide.\n\n**3. Y a-t-il une partie active ?** — Si après 6 séances vous n'avez reçu que du traitement passif, il manque une pièce essentielle. Demandez des exercices pour la maison.",
          en: "**1. Does my therapist have a recognised basic qualification?** — In Belgium, your osteopath should simultaneously be a qualified physiotherapist. This guarantees a solid medical foundation and health insurance reimbursement.\n\n**2. Do they work evidence-based?** — Ask: \"Why this technique for me?\" A good therapist explains their approach and adapts to your response — not to a rigid protocol.\n\n**3. Is there an active component?** — If after 6 sessions you've only received passive treatment, a crucial element is missing. Ask for home exercises.",
          nl: "**1. Heeft mijn therapeut een erkende basisopleiding?** — In België moet uw osteopaat tegelijk gediplomeerd fysiotherapeut zijn. Dit garandeert een solide medische basis en terugbetaling door de zorgverzekeraar.\n\n**2. Werkt hij/zij evidence-based?** — Vraag: «Waarom deze techniek bij mij?» Een goede therapeut legt zijn aanpak uit en past aan op uw reactie.\n\n**3. Is er een actief deel?** — Als u na 6 sessies alleen passieve behandeling heeft gehad, ontbreekt een cruciaal onderdeel. Vraag naar oefeningen voor thuis.",
          tr: "**1. Terapistimin tanınmış bir temel eğitimi var mı?** — Belçika'da osteopatınız aynı zamanda diplomalı fizyoterapist olmalıdır. Bu sağlam bir tıbbi temel ve sağlık sigortası geri ödemesini garanti eder.\n\n**2. Kanıta dayalı çalışıyor mu?** — Sorun: «Neden benim için bu teknik?» İyi bir terapist yaklaşımını açıklar ve tepkinize uyum sağlar.\n\n**3. Aktif bir bileşen var mı?** — 6 seans sonra sadece pasif tedavi aldıysanız, önemli bir unsur eksiktir. Ev egzersizleri isteyin.",
          ar: "**1. هل لدى معالجي مؤهل أساسي معترف به؟** — في بلجيكا، يجب أن يكون أخصائي العلاج اليدوي في نفس الوقت معالجًا طبيعيًا مؤهلاً. هذا يضمن أساسًا طبيًا متينًا وتعويض التأمين الصحي.\n\n**2. هل يعمل بناءً على الأدلة؟** — اسأل: «لماذا هذه التقنية لي؟» المعالج الجيد يشرح منهجه ويتكيف مع استجابتك.\n\n**3. هل هناك جزء نشط؟** — إذا بعد 6 جلسات لم تتلقَ سوى علاج سلبي، فهناك عنصر حاسم مفقود. اطلب تمارين منزلية.",
          pl: "**1. Czy mój terapeuta ma uznane wykształcenie podstawowe?** — W Belgii Twój osteopata powinien być jednocześnie dyplomowanym fizjoterapeutą. To gwarantuje solidną bazę medyczną i zwrot kosztów przez ubezpieczenie.\n\n**2. Czy pracuje w oparciu o dowody?** — Zapytaj: «Dlaczego ta technika u mnie?» Dobry terapeuta wyjaśnia swoje podejście i dostosowuje się do Twojej reakcji.\n\n**3. Czy jest część aktywna?** — Jeśli po 6 sesjach otrzymałeś tylko leczenie pasywne, brakuje kluczowego elementu. Poproś o ćwiczenia domowe.",
        },
      },
      {
        heading: {
          de: "Wann zum Arzt statt zum Therapeuten?",
          fr: "Quand consulter un médecin plutôt qu'un thérapeute ?",
          en: "When to see a doctor instead of a therapist?",
          nl: "Wanneer naar de arts in plaats van de therapeut?",
          tr: "Terapist yerine ne zaman doktora gitmeli?",
          ar: "متى تذهب للطبيب بدلاً من المعالج؟",
          pl: "Kiedy do lekarza zamiast do terapeuty?",
        },
        body: {
          de: "Manuelle Therapie — ob osteopathisch oder physiotherapeutisch — ist **nicht** die richtige Antwort bei: unerklärtem Gewichtsverlust, Fieber in Kombination mit Rücken-/Gelenkschmerzen, plötzlicher Schwäche in Armen oder Beinen, Blasen- oder Darmstörungen in Verbindung mit Rückenschmerzen, oder Schmerzen die nachts immer schlimmer werden und auf keine Position reagieren. Diese « Red Flags » erfordern eine ärztliche Abklärung. Ein verantwortungsvoller Therapeut — ob Osteopath oder Physiotherapeut — erkennt diese Zeichen und verweist Sie an den richtigen Ansprechpartner. Das ist kein Versagen, sondern professionelle Sorgfalt.",
          fr: "La thérapie manuelle — ostéopathique ou kinésithérapeutique — **n'est pas** la bonne réponse en cas de : perte de poids inexpliquée, fièvre associée à des douleurs rachidiennes/articulaires, faiblesse soudaine dans les bras ou jambes, troubles vésicaux ou intestinaux associés à des lombalgies, ou douleurs qui s'aggravent la nuit sans répondre à aucune position. Ces « drapeaux rouges » nécessitent un avis médical. Un thérapeute responsable — ostéopathe ou kinésithérapeute — reconnaît ces signes et vous oriente vers le bon interlocuteur. Ce n'est pas un échec, c'est du professionnalisme.",
          en: "Manual therapy — whether osteopathic or physiotherapeutic — is **not** the right answer for: unexplained weight loss, fever combined with back/joint pain, sudden weakness in arms or legs, bladder or bowel disturbances with back pain, or pain that worsens at night and doesn't respond to any position. These \"red flags\" require medical investigation. A responsible therapist — osteopath or physiotherapist — recognises these signs and refers you appropriately. That's not failure, it's professional care.",
          nl: "Manuele therapie — osteopathisch of fysiotherapeutisch — is **niet** het juiste antwoord bij: onverklaard gewichtsverlies, koorts gecombineerd met rug-/gewrichtspijn, plotselinge zwakte in armen of benen, blaas- of darmstoornissen bij rugpijn, of pijn die 's nachts erger wordt. Deze « rode vlaggen » vereisen medisch onderzoek. Een verantwoordelijke therapeut herkent deze tekenen en verwijst u door. Dat is geen falen, maar professionele zorg.",
          tr: "Manuel terapi — osteopatik veya fizyoterapötik — şunlar için doğru cevap **değildir**: açıklanamayan kilo kaybı, sırt/eklem ağrısıyla birlikte ateş, kol veya bacaklarda ani güçsüzlük, bel ağrısıyla birlikte mesane/bağırsak bozuklukları, veya geceleri kötüleşen ve hiçbir pozisyona yanıt vermeyen ağrı. Bu «kırmızı bayraklar» tıbbi değerlendirme gerektirir.",
          ar: "العلاج اليدوي — سواء كان استيوباثي أو علاج طبيعي — **ليس** الإجابة الصحيحة في حالة: فقدان وزن غير مبرر، حمى مع آلام ظهر/مفاصل، ضعف مفاجئ في الذراعين أو الساقين، اضطرابات المثانة أو الأمعاء مع آلام الظهر، أو ألم يزداد ليلاً. هذه «إشارات حمراء» تتطلب تقييمًا طبيًا. المعالج المسؤول يتعرف على هذه العلامات ويحيلك بشكل مناسب.",
          pl: "Terapia manualna — osteopatyczna czy fizjoterapeutyczna — **nie jest** właściwą odpowiedzią przy: niewyjaśnionej utracie wagi, gorączce połączonej z bólem pleców/stawów, nagłym osłabieniu rąk lub nóg, zaburzeniach pęcherza/jelit z bólem pleców, lub bólu nasilającym się nocą. Te «czerwone flagi» wymagają oceny lekarskiej. Odpowiedzialny terapeuta rozpoznaje te znaki i kieruje Cię odpowiednio.",
        },
        infographic: "traffic-light",
      },
      {
        heading: {
          de: "Bei Praxis Loten: das Beste aus beiden Welten",
          fr: "Chez Praxis Loten : le meilleur des deux mondes",
          en: "At Praxis Loten: the best of both worlds",
          nl: "Bij Praxis Loten: het beste van twee werelden",
          tr: "Praxis Loten'de: iki dünyanın en iyisi",
          ar: "في Praxis Loten: أفضل ما في العالمين",
          pl: "W Praxis Loten: najlepsze z obu światów",
        },
        body: {
          de: "**1. Umfassende Erstbeurteilung** — Félix Esser und Loïc Meunier evaluieren Ihre Beschwerden global: Gelenke, Muskeln, Faszien, aber auch Lebensstil, Stress und Erwartungen. Kein starres Schema.\n\n**2. Manuelle Techniken auf EBP-Basis** — Mobilisationen, Manipulationen, viszerale und kraniosakrale Techniken — aber nur dort, wo die Evidenz sie rechtfertigt und Ihre Reaktion positiv ist.\n\n**3. Aktives Programm integriert** — Jede Sitzung kombiniert passive Behandlung mit Übungen, die Sie selbstständig weiterführen. Denn Ihre Autonomie ist unser Ziel.\n\n**4. Transparente Kommunikation** — Wir erklären, was wir tun und warum. Keine mystischen Erklärungen, keine leeren Versprechen. Wenn eine andere Disziplin besser geeignet ist, sagen wir es Ihnen — bei Praxis Loten in Eupen arbeiten 5 Therapeuten mit komplementären Kompetenzen unter einem Dach.",
          fr: "**1. Bilan initial complet** — Félix Esser et Loïc Meunier évaluent vos plaintes globalement : articulations, muscles, fascias, mais aussi mode de vie, stress et attentes. Pas de schéma rigide.\n\n**2. Techniques manuelles sur base EBP** — Mobilisations, manipulations, techniques viscérales et crânio-sacrées — mais uniquement là où l'évidence les justifie et où votre réaction est positive.\n\n**3. Programme actif intégré** — Chaque séance combine traitement passif et exercices que vous poursuivez en autonomie. Car votre autonomie est notre objectif.\n\n**4. Communication transparente** — Nous expliquons ce que nous faisons et pourquoi. Pas d'explications mystiques, pas de promesses vides. Si une autre discipline convient mieux, nous vous le disons — chez Praxis Loten à Eupen, 5 thérapeutes aux compétences complémentaires travaillent sous un même toit.",
          en: "**1. Comprehensive initial assessment** — Félix Esser and Loïc Meunier evaluate your complaints globally: joints, muscles, fascia, but also lifestyle, stress and expectations. No rigid framework.\n\n**2. Manual techniques on EBP basis** — Mobilisations, manipulations, visceral and craniosacral techniques — but only where evidence justifies them and your response is positive.\n\n**3. Integrated active programme** — Each session combines passive treatment with exercises you continue independently. Because your autonomy is our goal.\n\n**4. Transparent communication** — We explain what we do and why. No mystical explanations, no empty promises. If another discipline is better suited, we tell you — at Praxis Loten in Eupen, 5 therapists with complementary skills work under one roof.",
          nl: "**1. Uitgebreide eerste beoordeling** — Félix Esser en Loïc Meunier evalueren uw klachten globaal: gewrichten, spieren, fascia, maar ook levensstijl, stress en verwachtingen.\n\n**2. Manuele technieken op EBP-basis** — Mobilisaties, manipulaties, viscerale en craniosacrrale technieken — maar alleen waar het bewijs dit rechtvaardigt.\n\n**3. Geïntegreerd actief programma** — Elke sessie combineert passieve behandeling met oefeningen die u zelfstandig voortzet.\n\n**4. Transparante communicatie** — We leggen uit wat we doen en waarom. Geen mystieke verklaringen. Bij Praxis Loten in Eupen werken 5 therapeuten met complementaire vaardigheden onder één dak.",
          tr: "**1. Kapsamlı ilk değerlendirme** — Félix Esser ve Loïc Meunier şikayetlerinizi global olarak değerlendirir: eklemler, kaslar, fasya, ama aynı zamanda yaşam tarzı ve stres.\n\n**2. EBP temelli manuel teknikler** — Mobilizasyonlar, manipülasyonlar, viseral ve kraniosakral teknikler — ama sadece kanıtın haklı kıldığı yerde.\n\n**3. Entegre aktif program** — Her seans pasif tedaviyi bağımsız olarak sürdürdüğünüz egzersizlerle birleştirir.\n\n**4. Şeffaf iletişim** — Ne yaptığımızı ve nedenini açıklarız. Eupen'deki Praxis Loten'de 5 terapist tamamlayıcı becerilerle tek çatı altında çalışır.",
          ar: "**1. تقييم أولي شامل** — Félix Esser وLoïc Meunier يقيمان شكاواك بشكل شامل: مفاصل، عضلات، لفافات، وأيضًا نمط الحياة والتوتر.\n\n**2. تقنيات يدوية على أساس EBP** — تحريكات، مناورات، تقنيات حشوية وقحفية عجزية — لكن فقط حيث يبررها الدليل.\n\n**3. برنامج نشط متكامل** — كل جلسة تجمع بين العلاج السلبي والتمارين التي تستمر بها بشكل مستقل.\n\n**4. تواصل شفاف** — نشرح ما نفعله ولماذا. في Praxis Loten في Eupen، 5 معالجين بمهارات تكاملية يعملون تحت سقف واحد.",
          pl: "**1. Kompleksowa ocena wstępna** — Félix Esser i Loïc Meunier oceniają Twoje dolegliwości globalnie: stawy, mięśnie, powięzi, ale też styl życia i stres.\n\n**2. Techniki manualne na bazie EBP** — Mobilizacje, manipulacje, techniki trzewne i czaszkowo-krzyżowe — ale tylko tam, gdzie dowody je uzasadniają.\n\n**3. Zintegrowany program aktywny** — Każda sesja łączy leczenie pasywne z ćwiczeniami, które kontynuujesz samodzielnie.\n\n**4. Przejrzysta komunikacja** — Wyjaśniamy co robimy i dlaczego. W Praxis Loten w Eupen 5 terapeutów z komplementarnymi umiejętnościami pracuje pod jednym dachem.",
        },
      },
    ],
    keyPoints: {
      de: ["Osteopathie und Physiotherapie sind heute eng verwandt", "Manuelle Techniken wirken — unabhängig vom Etikett", "Kombination mit aktiver Übung bringt die besten Ergebnisse", "In Belgien: Osteopathie als Erweiterung der Kinesitherapie", "5 Therapeuten mit komplementären Kompetenzen bei Praxis Loten"],
      fr: ["Ostéopathie et kinésithérapie sont aujourd'hui proches", "Les techniques manuelles fonctionnent — peu importe l'étiquette", "La combinaison avec l'exercice actif donne les meilleurs résultats", "En Belgique : l'ostéopathie comme extension de la kinésithérapie", "5 thérapeutes complémentaires chez Praxis Loten"],
      en: ["Osteopathy and physiotherapy are closely related today", "Manual techniques work — regardless of the label", "Combination with active exercise yields the best results", "In Belgium: osteopathy as an extension of physiotherapy", "5 therapists with complementary skills at Praxis Loten"],
      nl: ["Osteopathie en fysiotherapie zijn vandaag nauw verwant", "Manuele technieken werken — ongeacht het etiket", "Combinatie met actieve oefening geeft de beste resultaten", "In België: osteopathie als uitbreiding van kinesitherapie", "5 therapeuten met complementaire vaardigheden bij Praxis Loten"],
      tr: ["Osteopati ve fizyoterapi bugün yakın ilişkili", "Manuel teknikler işe yarıyor — etiketten bağımsız", "Aktif egzersizle kombinasyon en iyi sonuçları verir", "Belçika'da: fizyoterapinin uzantısı olarak osteopati", "Praxis Loten'de 5 tamamlayıcı terapist"],
      ar: ["العلاج اليدوي والعلاج الطبيعي مرتبطان اليوم ارتباطًا وثيقًا", "التقنيات اليدوية تعمل — بغض النظر عن التسمية", "الجمع مع التمارين النشطة يعطي أفضل النتائج", "في بلجيكا: العلاج اليدوي كامتداد للعلاج الطبيعي", "5 معالجين بمهارات تكاملية في Praxis Loten"],
      pl: ["Osteopatia i fizjoterapia są dziś blisko spokrewnione", "Techniki manualne działają — niezależnie od etykiety", "Połączenie z aktywnymi ćwiczeniami daje najlepsze wyniki", "W Belgii: osteopatia jako rozszerzenie fizjoterapii", "5 terapeutów z komplementarnymi umiejętnościami w Praxis Loten"],
    },
    ctaText: {
      de: "Unsicher welche Therapie passt? Félix Esser und Loïc Meunier beraten Sie gerne bei Praxis Loten in Eupen.",
      fr: "Vous hésitez entre les deux ? Félix Esser et Loïc Meunier vous conseillent chez Praxis Loten à Eupen.",
      en: "Unsure which therapy fits? Félix Esser and Loïc Meunier are happy to advise you at Praxis Loten in Eupen.",
      nl: "Onzeker welke therapie past? Félix Esser en Loïc Meunier adviseren u graag bij Praxis Loten in Eupen.",
      tr: "Hangi terapi uygun emin değil misiniz? Eupen'deki Praxis Loten'de Félix Esser ve Loïc Meunier size yardımcı olur.",
      ar: "غير متأكد أي علاج يناسبك؟ Félix Esser وLoïc Meunier ينصحانك في Praxis Loten في Eupen.",
      pl: "Nie wiesz, która terapia pasuje? Félix Esser i Loïc Meunier doradzą Ci w Praxis Loten w Eupen.",
    },
    bibliography: [
      "Rubinstein SM et al. Benefits and harms of spinal manipulative therapy for the treatment of chronic low back pain: systematic review and meta-analysis. BMJ. 2019;364:l689.",
      "Coulter ID et al. Manipulation and Mobilization for Treating Chronic Low Back Pain: A Systematic Review and Meta-Analysis. Spine J. 2018;18(5):866-879.",
      "Cerritelli F et al. Effect of Visceral Osteopathic Manipulative Treatment on Pain and Functional Outcomes: A Systematic Review. PLoS One. 2021;16(6):e0252539.",
      "Foster NE et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. Lancet. 2018;391(10137):2368-2383.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine individuelle Beratung. Konsultieren Sie Ihren Therapeuten oder Arzt bei anhaltenden Beschwerden.",
      fr: "Cet article est à visée informative uniquement et ne remplace pas une consultation individuelle. Consultez votre thérapeute ou médecin en cas de symptômes persistants.",
      en: "This article is for informational purposes only and does not replace individual advice. Consult your therapist or doctor for persistent symptoms.",
      nl: "Dit artikel is alleen bedoeld ter informatie. Raadpleeg uw therapeut of arts bij aanhoudende klachten.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır. Kalıcı belirtilerde terapistinize veya doktorunuza danışın.",
      ar: "هذه المقالة لأغراض إعلامية فقط. استشر معالجك أو طبيبك عند استمرار الأعراض.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny. Skonsultuj się z terapeutą lub lekarzem w przypadku utrzymujących się objawów.",
    },
  },

  "bfr-training-rehabilitation": {
    title: {
      de: "BFR-Training — Muskelaufbau mit wenig Gewicht",
      fr: "Entraînement BFR — se muscler avec peu de charge",
      en: "BFR training — building muscle with light loads",
      nl: "BFR-training — spieropbouw met licht gewicht",
      tr: "BFR antrenmanı — hafif yükle kas geliştirme",
      ar: "تدريب BFR — بناء العضلات بأحمال خفيفة",
      pl: "Trening BFR — budowanie mięśni przy niskim obciążeniu",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "العلاج الطبيعي الرياضي", pl: "Fizjoterapia Sportowa",
    },
    date: "2024-06-18",
    readMin: 6,
    color: "from-orange-500 to-orange-700",
    authorSlug: "thom-petit",
    authorName: "Thom Petit",
    intro: {
      fr: "Après une opération du genou, votre chirurgien vous dit « pas de charge lourde pendant 3 mois ». Pendant ce temps, le muscle fond. Et si on pouvait le reconstruire avec seulement 20 % du poids habituel ? C'est exactement ce que permet le BFR (Blood Flow Restriction). Thom Petit, certifié Kinesport BFR chez Praxis Loten à Eupen, vous explique cette méthode validée par plus de 300 études.",
      en: "After knee surgery, your surgeon says \"no heavy loads for 3 months\". Meanwhile, muscle wastes away. What if you could rebuild it with only 20% of the usual weight? That's exactly what BFR (Blood Flow Restriction) allows. Thom Petit, Kinesport BFR certified at Praxis Loten in Eupen, explains this method validated by over 300 studies.",
      de: "Nach einer Knieoperation sagt Ihr Chirurg « keine schwere Last für 3 Monate ». In dieser Zeit schwindet der Muskel. Was wäre, wenn man ihn mit nur 20 % des üblichen Gewichts wieder aufbauen könnte? Genau das ermöglicht BFR (Blood Flow Restriction). Thom Petit, Kinesport-BFR-zertifiziert bei Praxis Loten in Eupen, erklärt Ihnen diese durch über 300 Studien belegte Methode.",
      nl: "Na een knieoperatie zegt uw chirurg « geen zware belasting voor 3 maanden ». Ondertussen slinkt de spier. Wat als u die kon opbouwen met slechts 20% van het gebruikelijke gewicht? Dat is precies wat BFR (Blood Flow Restriction) mogelijk maakt. Thom Petit, Kinesport BFR-gecertificeerd bij Praxis Loten in Eupen, legt deze methode uit.",
      tr: "Diz ameliyatından sonra cerrahınız « 3 ay ağır yük yok » der. Bu sürede kas erir. Ya alışılmış ağırlığın sadece %20'siyle yeniden inşa edebilseydiniz? BFR (Kan Akışı Kısıtlama) tam olarak bunu sağlar. Eupen'deki Praxis Loten'de Kinesport BFR sertifikalı Thom Petit bu yöntemi açıklıyor.",
      ar: "بعد جراحة الركبة، يقول جراحك «لا أحمال ثقيلة لمدة 3 أشهر». في هذه الأثناء، تذوب العضلات. ماذا لو استطعت إعادة بنائها بـ20% فقط من الوزن المعتاد؟ هذا بالضبط ما يتيحه BFR. ثوم بيتي، المعتمد في Kinesport BFR في Praxis Loten في Eupen، يشرح هذه الطريقة.",
      pl: "Po operacji kolana chirurg mówi «żadnych ciężkich obciążeń przez 3 miesiące». W tym czasie mięsień zanika. A gdyby można go odbudować przy zaledwie 20% zwykłego ciężaru? Dokładnie to umożliwia BFR. Thom Petit, certyfikowany Kinesport BFR w Praxis Loten w Eupen, wyjaśnia tę metodę.",
    },
    sections: [
      {
        heading: {
          de: "Mythos: Ohne schwere Lasten kein Muskelaufbau",
          fr: "Mythe : pas de muscle sans charges lourdes",
          en: "Myth: no muscle without heavy loads",
          nl: "Mythe: geen spier zonder zware lasten",
          tr: "Mit: ağır yük olmadan kas olmaz",
          ar: "خرافة: لا عضلات بدون أحمال ثقيلة",
          pl: "Mit: bez ciężkich obciążeń nie ma mięśni",
        },
        body: {
          de: "Klassisch gilt: um Muskeln aufzubauen, braucht man mindestens 60–70 % der Maximalkraft. Das stimmt — **ohne BFR**. Mit einem pneumatischen Brassard, der den venösen Rückfluss kontrolliert einschränkt, reichen bereits **20–30 %** der Maximallast für vergleichbare Muskelzuwächse. Ihr Muskel « glaubt », er arbeite schwer, weil der lokale Stress (Sauerstoffmangel, metabolische Abfallprodukte) die gleichen Wachstumssignale auslöst. Das ist keine Theorie: über 300 klinische Studien belegen diesen Effekt. Für Patienten nach einer Operation oder mit Gelenkbeschwerden ist das ein entscheidender Vorteil — Muskelkraft aufbauen, ohne das Gelenk zu überlasten.",
          fr: "Classiquement, pour construire du muscle, il faut au moins 60–70 % de la force maximale. C'est vrai — **sans BFR**. Avec un brassard pneumatique qui restreint le retour veineux de manière contrôlée, **20–30 %** de la charge maximale suffisent pour des gains musculaires comparables. Votre muscle « croit » travailler lourd, car le stress local (manque d'oxygène, déchets métaboliques) déclenche les mêmes signaux de croissance. Ce n'est pas de la théorie : plus de 300 études cliniques documentent cet effet. Pour les patients après une opération ou avec des douleurs articulaires, c'est un avantage décisif — construire de la force sans surcharger l'articulation.",
          en: "Classically, building muscle requires at least 60–70% of maximum strength. That's true — **without BFR**. With a pneumatic cuff that restricts venous return in a controlled manner, just **20–30%** of maximum load is sufficient for comparable muscle gains. Your muscle \"believes\" it's working hard because local stress (oxygen deficit, metabolic waste) triggers the same growth signals. This isn't theory: over 300 clinical studies document this effect. For post-surgical patients or those with joint issues, this is a decisive advantage — building strength without overloading the joint.",
          nl: "Klassiek geldt: voor spieropbouw heb je minstens 60–70% van de maximale kracht nodig. Dat klopt — **zonder BFR**. Met een pneumatische manchet die de veneuze terugstroom gecontroleerd beperkt, volstaat **20–30%** van de maximale belasting voor vergelijkbare spiergroei. Uw spier « gelooft » dat hij zwaar werkt. Voor patiënten na een operatie is dit een doorslaggevend voordeel.",
          tr: "Klasik olarak, kas geliştirmek için maksimum gücün en az %60–70'i gerekir. Bu doğrudur — **BFR olmadan**. Venöz dönüşü kontrollü şekilde kısıtlayan pnömatik bir manşonla, karşılaştırılabilir kas kazanımları için maksimum yükün sadece **%20–30'u** yeterlidir. 300'den fazla klinik çalışma bu etkiyi belgeliyor.",
          ar: "تقليديًا، بناء العضلات يتطلب 60-70% على الأقل من القوة القصوى. هذا صحيح — **بدون BFR**. مع كُفة هوائية تقيد الجريان الوريدي بشكل مسيطر عليه، **20-30%** فقط من الحمل الأقصى تكفي لمكاسب عضلية مماثلة. أكثر من 300 دراسة سريرية توثق هذا التأثير.",
          pl: "Klasycznie, do budowy mięśni potrzeba co najmniej 60–70% siły maksymalnej. To prawda — **bez BFR**. Z pneumatycznym mankietem kontrolowanie ograniczającym powrót żylny, wystarczy **20–30%** obciążenia maksymalnego dla porównywalnych przyrostów mięśniowych. Ponad 300 badań klinicznych dokumentuje ten efekt.",
        },
        infographic: "bfr-zone",
      },
      {
        heading: {
          de: "Wie funktioniert BFR im Körper?",
          fr: "Comment le BFR agit-il dans le corps ?",
          en: "How does BFR work in the body?",
          nl: "Hoe werkt BFR in het lichaam?",
          tr: "BFR vücutta nasıl çalışır?",
          ar: "كيف يعمل BFR في الجسم؟",
          pl: "Jak BFR działa w organizmie?",
        },
        body: {
          fr: "Le brassard BFR crée un environnement métabolique unique dans votre muscle. En réduisant le retour veineux (sans couper le flux artériel), le muscle accumule des métabolites et fonctionne en **manque relatif d'oxygène**. Ce stress contrôlé déclenche trois réponses : activation des fibres musculaires rapides (normalement recrutées seulement sous charge lourde), libération d'hormones de croissance locales, et stimulation des cellules « réparatrices » du muscle. Concrètement : votre corps construit du muscle comme s'il soulevait lourd — mais vos articulations, tendons et os ne subissent que 20 % de la contrainte. C'est pourquoi le BFR est sûr dès les premières semaines après une opération.",
          en: "The BFR cuff creates a unique metabolic environment in your muscle. By reducing venous return (without cutting arterial flow), the muscle accumulates metabolites and works in **relative oxygen deficit**. This controlled stress triggers three responses: activation of fast-twitch muscle fibres (normally only recruited under heavy load), release of local growth hormones, and stimulation of muscle \"repair\" cells. In practice: your body builds muscle as if lifting heavy — but your joints, tendons and bones experience only 20% of the stress. This is why BFR is safe from the first weeks after surgery.",
          de: "Das BFR-Brassard schafft eine einzigartige Stoffwechselumgebung in Ihrem Muskel. Durch Reduktion des venösen Rückflusses (ohne den arteriellen Zufluss zu unterbrechen) sammelt der Muskel Stoffwechselprodukte an und arbeitet unter **relativem Sauerstoffmangel**. Dieser kontrollierte Stress löst drei Reaktionen aus: Aktivierung schneller Muskelfasern (normalerweise nur bei schwerer Last rekrutiert), Freisetzung lokaler Wachstumshormone und Stimulation der « Reparaturzellen » des Muskels. Konkret: Ihr Körper baut Muskeln auf, als ob er schwer heben würde — aber Ihre Gelenke, Sehnen und Knochen erfahren nur 20 % der Belastung.",
          nl: "De BFR-manchet creëert een uniek metabolisch milieu in uw spier. Door de veneuze terugstroom te verminderen (zonder de arteriële stroom te stoppen), accumuleert de spier metabolieten en werkt onder **relatief zuurstoftekort**. Deze gecontroleerde stress activeert snelle spiervezels, maakt lokale groeihormonen vrij en stimuleert « herstelcellen ». Uw lichaam bouwt spier op alsof het zwaar tilt — maar uw gewrichten ervaren slechts 20% belasting.",
          tr: "BFR manşonu kasınızda benzersiz bir metabolik ortam yaratır. Venöz dönüşü azaltarak (arteriyel akışı kesmeden), kas metabolitleri biriktirir ve **göreceli oksijen eksikliğinde** çalışır. Bu kontrollü stres hızlı kas liflerini aktive eder, lokal büyüme hormonları salar ve kas «onarım» hücrelerini uyarır.",
          ar: "تخلق كُفة BFR بيئة أيضية فريدة في عضلتك. بتقليل الجريان الوريدي (دون قطع التدفق الشرياني)، تتراكم المستقلبات ويعمل العضل في **نقص أوكسجين نسبي**. هذا الإجهاد المنضبط يُنشط الألياف العضلية السريعة، يُطلق هرمونات نمو محلية، ويُحفز خلايا «إصلاح» العضلات.",
          pl: "Mankiet BFR tworzy unikalne środowisko metaboliczne w mięśniu. Zmniejszając powrót żylny (bez odcinania przepływu tętniczego), mięsień gromadzi metabolity i pracuje w **względnym niedoborze tlenu**. Ten kontrolowany stres aktywuje szybkie włókna mięśniowe, uwalnia lokalne hormony wzrostu i stymuluje komórki «naprawcze» mięśnia.",
        },
      },
      {
        heading: {
          de: "Die goldene Regel des BFR-Trainings",
          fr: "La règle d'or de l'entraînement BFR",
          en: "The golden rule of BFR training",
          nl: "De gouden regel van BFR-training",
          tr: "BFR antrenmanının altın kuralı",
          ar: "القاعدة الذهبية لتدريب BFR",
          pl: "Złota zasada treningu BFR",
        },
        body: {
          de: "> *« Weniger Last, mehr Wirkung — das ist kein Widerspruch, das ist Wissenschaft. »*\n\nDas Protokoll ist standardisiert und sicher : 4 Serien (30-15-15-15 Wiederholungen), 20–30 % der Maximallast, 30 Sekunden Pause zwischen den Serien. Der Brassard bleibt während der gesamten Übung angelegt. Die Sitzung dauert nur **15–20 Minuten** — deutlich kürzer als klassisches Krafttraining. Der Schlüssel: die korrekte Einstellung des Brassard-Drucks. Zu viel Druck ist kontraproduktiv, zu wenig wirkungslos. Deshalb verwenden wir bei Praxis Loten in Eupen ein **kalibriertes Doppler-System**, das den optimalen Druck individuell bestimmt.",
          fr: "> *« Moins de charge, plus d'effet — ce n'est pas un paradoxe, c'est de la science. »*\n\nLe protocole est standardisé et sûr : 4 séries (30-15-15-15 répétitions), 20–30 % de la charge maximale, 30 secondes de repos entre les séries. Le brassard reste en place pendant toute l'exercice. La séance ne dure que **15–20 minutes** — nettement plus court qu'un entraînement classique. La clé : le réglage correct de la pression du brassard. Trop de pression est contre-productif, trop peu est inefficace. C'est pourquoi, chez Praxis Loten à Eupen, nous utilisons un **système Doppler calibré** qui détermine la pression optimale individuellement.",
          en: "> *\"Less load, more effect — that's not a contradiction, that's science.\"*\n\nThe protocol is standardised and safe: 4 sets (30-15-15-15 repetitions), 20–30% of maximum load, 30 seconds rest between sets. The cuff stays on throughout the exercise. The session lasts only **15–20 minutes** — significantly shorter than classical strength training. The key: correct cuff pressure setting. Too much is counterproductive, too little is ineffective. This is why at Praxis Loten in Eupen we use a **calibrated Doppler system** that determines optimal pressure individually.",
          nl: "> *« Minder belasting, meer effect — dat is geen tegenspraak, dat is wetenschap. »*\n\nHet protocol is gestandaardiseerd en veilig: 4 sets (30-15-15-15 herhalingen), 20–30% van de maximale belasting, 30 seconden rust tussen sets. De manchet blijft tijdens de hele oefening zitten. De sessie duurt slechts **15–20 minuten**. De sleutel: correcte drukinstelling. Daarom gebruiken wij bij Praxis Loten in Eupen een **gekalibreerd Doppler-systeem**.",
          tr: "> *« Daha az yük, daha fazla etki — bu bir çelişki değil, bilimdir. »*\n\nProtokol standartlaştırılmış ve güvenlidir: 4 set (30-15-15-15 tekrar), maksimum yükün %20–30'u, setler arasında 30 saniye dinlenme. Manşon egzersiz boyunca takılı kalır. Seans sadece **15–20 dakika** sürer. Anahtar: doğru manşon basıncı ayarı. Eupen'deki Praxis Loten'de **kalibre edilmiş bir Doppler sistemi** kullanıyoruz.",
          ar: "> *«حمل أقل، تأثير أكبر — هذا ليس تناقضًا، إنه علم.»*\n\nالبروتوكول موحد وآمن: 4 مجموعات (30-15-15-15 تكرار)، 20-30% من الحمل الأقصى، 30 ثانية راحة بين المجموعات. تبقى الكُفة في مكانها طوال التمرين. الجلسة تستغرق فقط **15-20 دقيقة**. المفتاح: ضبط ضغط الكُفة بشكل صحيح. في Praxis Loten في Eupen نستخدم **نظام دوبلر معاير** يحدد الضغط الأمثل فرديًا.",
          pl: "> *« Mniej obciążenia, więcej efektu — to nie sprzeczność, to nauka. »*\n\nProtokół jest standaryzowany i bezpieczny: 4 serie (30-15-15-15 powtórzeń), 20–30% obciążenia maksymalnego, 30 sekund przerwy między seriami. Mankiet pozostaje założony przez cały czas ćwiczenia. Sesja trwa zaledwie **15–20 minut**. Klucz: prawidłowe ustawienie ciśnienia mankietu. W Praxis Loten w Eupen używamy **kalibrowanego systemu Doppler**.",
        },
      },
      {
        heading: {
          de: "3 ideale Situationen für BFR",
          fr: "3 situations idéales pour le BFR",
          en: "3 ideal situations for BFR",
          nl: "3 ideale situaties voor BFR",
          tr: "BFR için 3 ideal durum",
          ar: "3 حالات مثالية لـ BFR",
          pl: "3 idealne sytuacje dla BFR",
        },
        body: {
          de: "**1. Frühe Post-OP-Phase** — Nach Kreuzband-, Meniskus- oder Prothesenoperation: Muskelaufbau ab der 2. Woche, ohne das Gelenk zu gefährden. Ihre Kniescheibe sagt « Danke ».\n\n**2. Senioren mit Sarkopenie-Risiko** — Muskelkraftverlust im Alter ist kein Schicksal. BFR ermöglicht effektives Training auch wenn schwere Gewichte nicht toleriert werden — aus Angst, Gelenkbeschwerden oder allgemeiner Dekonditionierung.\n\n**3. Sportler im Return-to-Sport** — Die Lücke zwischen « geheilt » und « wettkampffähig » schließen. BFR beschleunigt den Muskelwiederaufbau in der Phase, in der maximale Belastung noch nicht erlaubt ist.",
          fr: "**1. Phase post-opératoire précoce** — Après ligament croisé, ménisque ou prothèse : reconstruction musculaire dès la 2e semaine, sans mettre en danger l'articulation. Votre rotule dit « merci ».\n\n**2. Seniors à risque de sarcopénie** — La perte de force musculaire avec l'âge n'est pas une fatalité. Le BFR permet un entraînement efficace même quand les charges lourdes ne sont pas tolérées — par peur, douleurs articulaires ou déconditionnement.\n\n**3. Sportifs en retour au terrain** — Combler l'écart entre « guéri » et « apte à la compétition ». Le BFR accélère la reconstruction musculaire dans la phase où la charge maximale n'est pas encore autorisée.",
          en: "**1. Early post-op phase** — After cruciate ligament, meniscus or joint replacement surgery: muscle building from week 2, without endangering the joint. Your kneecap says \"thank you\".\n\n**2. Seniors at sarcopenia risk** — Age-related muscle loss is not inevitable. BFR enables effective training even when heavy weights aren't tolerated — due to fear, joint pain or general deconditioning.\n\n**3. Athletes in return-to-sport** — Bridging the gap between \"healed\" and \"competition-ready\". BFR accelerates muscle rebuilding in the phase where maximum load isn't yet permitted.",
          nl: "**1. Vroege post-op fase** — Na kruisband, meniscus of prothese: spieropbouw vanaf week 2, zonder het gewricht in gevaar te brengen.\n\n**2. Senioren met sarcopenie-risico** — Leeftijdsgerelateerd spierverlies is geen lot. BFR maakt effectieve training mogelijk zelfs als zware gewichten niet worden verdragen.\n\n**3. Sporters in return-to-sport** — De kloof tussen «genezen» en «wedstrijdklaar» overbruggen. BFR versnelt de spieropbouw in de fase waarin maximale belasting nog niet is toegestaan.",
          tr: "**1. Erken ameliyat sonrası faz** — Çapraz bağ, menisküs veya protez sonrası: 2. haftadan itibaren eklemi tehlikeye atmadan kas geliştirme.\n\n**2. Sarkopeni riski taşıyan yaşlılar** — Yaşa bağlı kas kaybı kaçınılmaz değildir. BFR, ağır ağırlıklar tolere edilmediğinde bile etkili antrenman sağlar.\n\n**3. Spora dönüş yapan sporcular** — «İyileşmiş» ile «yarışmaya hazır» arasındaki boşluğu kapatmak.",
          ar: "**1. المرحلة المبكرة بعد العملية** — بعد الرباط الصليبي أو الغضروف أو الاستبدال: بناء عضلي من الأسبوع الثاني دون تعريض المفصل للخطر.\n\n**2. كبار السن المعرضون للضمور العضلي** — فقدان العضلات المرتبط بالعمر ليس حتميًا. BFR يتيح تدريبًا فعالاً حتى عندما لا تُتحمل الأوزان الثقيلة.\n\n**3. الرياضيون في مرحلة العودة** — سد الفجوة بين «شُفيت» و«جاهز للمنافسة».",
          pl: "**1. Wczesna faza pooperacyjna** — Po więzadle krzyżowym, łąkotce lub protezie: budowa mięśni od 2. tygodnia, bez zagrożenia dla stawu.\n\n**2. Seniorzy z ryzykiem sarkopenii** — Utrata siły mięśniowej z wiekiem nie jest nieunikniona. BFR umożliwia skuteczny trening nawet gdy ciężkie obciążenia nie są tolerowane.\n\n**3. Sportowcy w powrocie do sportu** — Wypełnienie luki między «wyleczony» a «gotowy do rywalizacji».",
        },
      },
      {
        heading: {
          de: "Sicherheit und Kontraindikationen",
          fr: "Sécurité et contre-indications",
          en: "Safety and contraindications",
          nl: "Veiligheid en contra-indicaties",
          tr: "Güvenlik ve kontrendikasyonlar",
          ar: "السلامة وموانع الاستعمال",
          pl: "Bezpieczeństwo i przeciwwskazania",
        },
        body: {
          de: "BFR ist bei korrekter Anwendung **sicher** — das bestätigen die Meta-Analysen. Nebenwirkungen (leichte Rötung, vorübergehendes Taubheitsgefühl) sind mild und verschwinden nach dem Training. **Nicht geeignet** ist BFR bei: aktiver tiefer Venenthrombose, unkontrolliertem Bluthochdruck (≥180/110), Lymphödem der betroffenen Extremität, oder aktiver Krebserkrankung in der Region. **Wichtig**: BFR sollte immer von einem **ausgebildeten Therapeuten** mit kalibrierten Geräten durchgeführt werden. Elastische Bänder aus dem Internet sind kein Ersatz für ein medizinisches Doppler-System. Bei Praxis Loten in Eupen verwenden wir ausschließlich professionelle Systeme mit individueller Druckmessung.",
          fr: "Le BFR est **sûr** lorsqu'il est correctement appliqué — les méta-analyses le confirment. Les effets secondaires (légère rougeur, engourdissement temporaire) sont légers et disparaissent après l'entraînement. Le BFR **n'est pas adapté** en cas de : thrombose veineuse profonde active, hypertension non contrôlée (≥180/110), lymphœdème du membre concerné, ou cancer actif dans la région. **Important** : le BFR doit toujours être réalisé par un **thérapeute formé** avec du matériel calibré. Les bandes élastiques achetées sur internet ne remplacent pas un système Doppler médical. Chez Praxis Loten à Eupen, nous utilisons exclusivement des systèmes professionnels avec mesure de pression individualisée.",
          en: "BFR is **safe** when correctly applied — meta-analyses confirm this. Side effects (mild redness, temporary numbness) are minor and disappear after training. BFR is **not suitable** for: active deep vein thrombosis, uncontrolled hypertension (≥180/110), lymphoedema of the affected limb, or active cancer in the region. **Important**: BFR should always be performed by a **trained therapist** with calibrated equipment. Elastic bands from the internet are no substitute for a medical Doppler system. At Praxis Loten in Eupen, we exclusively use professional systems with individualised pressure measurement.",
          nl: "BFR is **veilig** bij correcte toepassing — meta-analyses bevestigen dit. Bijwerkingen (lichte roodheid, tijdelijke gevoelloosheid) zijn mild. BFR is **niet geschikt** bij: actieve diepe veneuze trombose, ongecontroleerde hypertensie (≥180/110), lymfoedeem van het aangedane ledemaat, of actieve kanker in de regio. **Belangrijk**: BFR moet altijd door een **getrainde therapeut** met gekalibreerde apparatuur worden uitgevoerd.",
          tr: "BFR doğru uygulandığında **güvenlidir** — meta-analizler bunu doğrulamaktadır. Yan etkiler (hafif kızarıklık, geçici uyuşukluk) hafiftir. BFR şu durumlarda **uygun değildir**: aktif derin ven trombozu, kontrol edilemeyen hipertansiyon (≥180/110), etkilenen ekstremitenin lenf ödemi, veya bölgede aktif kanser. **Önemli**: BFR her zaman kalibre edilmiş ekipmanla **eğitimli bir terapist** tarafından yapılmalıdır.",
          ar: "BFR **آمن** عند تطبيقه بشكل صحيح — التحليلات الوصفية تؤكد ذلك. BFR **غير مناسب** في حالة: تخثر وريدي عميق نشط، ارتفاع ضغط دم غير مسيطر عليه (≥180/110)، وذمة لمفاوية في الطرف المصاب، أو سرطان نشط في المنطقة. **مهم**: يجب دائمًا إجراء BFR بواسطة **معالج مدرب** بمعدات معايرة.",
          pl: "BFR jest **bezpieczny** przy prawidłowym stosowaniu — meta-analizy to potwierdzają. BFR **nie jest odpowiedni** w przypadku: aktywnej zakrzepicy żył głębokich, niekontrolowanego nadciśnienia (≥180/110), obrzęku limfatycznego zajętej kończyny, lub aktywnego nowotworu w regionie. **Ważne**: BFR powinien zawsze być wykonywany przez **wykwalifikowanego terapeutę** ze skalibrowanym sprzętem.",
        },
        infographic: "traffic-light",
      },
      {
        heading: {
          de: "Bei Praxis Loten in Eupen: BFR mit Thom Petit",
          fr: "Au cabinet Praxis Loten à Eupen : BFR avec Thom Petit",
          en: "At Praxis Loten in Eupen: BFR with Thom Petit",
          nl: "Bij Praxis Loten in Eupen: BFR met Thom Petit",
          tr: "Eupen'de Praxis Loten'de: Thom Petit ile BFR",
          ar: "في Praxis Loten في Eupen: BFR مع ثوم بيتي",
          pl: "W Praxis Loten w Eupen: BFR z Thom Petit",
        },
        body: {
          fr: "**1. Évaluation individualisée** — Thom Petit évalue votre situation (type d'opération, stade de cicatrisation, objectifs) et détermine si le BFR est adapté pour vous. Pas de recette unique.\n\n**2. Mesure Doppler personnalisée** — Le système calibré mesure votre pression d'occlusion artérielle individuelle pour calculer la pression de travail optimale (40–80 % selon la zone).\n\n**3. Protocole progressif** — Intégré dans votre programme de rééducation global, le BFR évolue avec vous : de la phase de protection vers le retour à la performance.\n\n**4. Formation Kinesport certifiée** — Thom est formé selon les standards internationaux Kinesport, garantissant une application sûre et fondée sur les dernières données scientifiques.",
          en: "**1. Individualised evaluation** — Thom Petit assesses your situation (surgery type, healing stage, goals) and determines whether BFR is right for you. No one-size-fits-all.\n\n**2. Personalised Doppler measurement** — The calibrated system measures your individual arterial occlusion pressure to calculate optimal working pressure (40–80% depending on the zone).\n\n**3. Progressive protocol** — Integrated into your overall rehabilitation programme, BFR evolves with you: from protection phase to return to performance.\n\n**4. Kinesport certified training** — Thom is trained according to international Kinesport standards, ensuring safe, evidence-based application.",
          de: "**1. Individuelle Evaluation** — Thom Petit beurteilt Ihre Situation (Operationstyp, Heilungsphase, Ziele) und bestimmt, ob BFR für Sie geeignet ist. Kein Einheitsrezept.\n\n**2. Personalisierte Doppler-Messung** — Das kalibrierte System misst Ihren individuellen arteriellen Okklusionsdruck und berechnet den optimalen Arbeitsdruck (40–80 % je nach Zone).\n\n**3. Progressives Protokoll** — Integriert in Ihr gesamtes Reha-Programm, entwickelt sich das BFR mit Ihnen: von der Schutzphase bis zur Rückkehr zur Leistung.\n\n**4. Kinesport-zertifizierte Ausbildung** — Thom ist nach internationalen Kinesport-Standards ausgebildet, was eine sichere und evidenzbasierte Anwendung garantiert.",
          nl: "**1. Geïndividualiseerde evaluatie** — Thom Petit beoordeelt uw situatie (type operatie, genezingsfase, doelen) en bepaalt of BFR geschikt is.\n\n**2. Gepersonaliseerde Doppler-meting** — Het gekalibreerde systeem meet uw individuele arteriële occlusiedruk.\n\n**3. Progressief protocol** — Geïntegreerd in uw totale revalidatieprogramma evolueert BFR met u mee.\n\n**4. Kinesport-gecertificeerde opleiding** — Thom is opgeleid volgens internationale Kinesport-standaarden.",
          tr: "**1. Bireyselleştirilmiş değerlendirme** — Thom Petit durumunuzu değerlendirir ve BFR'nin size uygun olup olmadığını belirler.\n\n**2. Kişiselleştirilmiş Doppler ölçümü** — Kalibre edilmiş sistem optimal çalışma basıncını hesaplar.\n\n**3. Progresif protokol** — Genel rehabilitasyon programınıza entegre edilmiştir.\n\n**4. Kinesport sertifikalı eğitim** — Thom uluslararası Kinesport standartlarına göre eğitilmiştir.",
          ar: "**1. تقييم فردي** — يقيم ثوم بيتي وضعك ويحدد ما إذا كان BFR مناسبًا لك.\n\n**2. قياس دوبلر شخصي** — النظام المعاير يقيس ضغط الانسداد الشرياني الفردي.\n\n**3. بروتوكول تقدمي** — مدمج في برنامج إعادة التأهيل الشامل.\n\n**4. تدريب معتمد من Kinesport** — ثوم مدرب وفق المعايير الدولية.",
          pl: "**1. Zindywidualizowana ocena** — Thom Petit ocenia Twoją sytuację i określa czy BFR jest dla Ciebie odpowiedni.\n\n**2. Spersonalizowany pomiar Doppler** — Skalibrowany system mierzy indywidualne ciśnienie okluzji tętniczej.\n\n**3. Progresywny protokół** — Zintegrowany z całościowym programem rehabilitacji.\n\n**4. Certyfikowane szkolenie Kinesport** — Thom jest szkolony według międzynarodowych standardów Kinesport.",
        },
      },
    ],
    keyPoints: {
      de: ["Muskelaufbau bei nur 20–30 % der Maximallast", "Sicher ab 2 Wochen post-OP (unter Anleitung)", "Über 300 Studien belegen die Wirksamkeit", "Doppler-kalibriertes System bei Praxis Loten in Eupen", "Kinesport-zertifiziert: Thom Petit"],
      fr: ["Gain musculaire à seulement 20–30 % de la charge max", "Sûr dès 2 semaines post-op (sous supervision)", "Plus de 300 études prouvent l'efficacité", "Système calibré Doppler chez Praxis Loten à Eupen", "Certifié Kinesport : Thom Petit"],
      en: ["Muscle building at only 20–30% of max load", "Safe from 2 weeks post-op (under supervision)", "Over 300 studies prove effectiveness", "Doppler-calibrated system at Praxis Loten in Eupen", "Kinesport certified: Thom Petit"],
      nl: ["Spieropbouw bij slechts 20–30% van max belasting", "Veilig vanaf 2 weken post-op (onder begeleiding)", "Meer dan 300 studies bewijzen effectiviteit", "Doppler-gekalibreerd systeem bij Praxis Loten in Eupen", "Kinesport gecertificeerd: Thom Petit"],
      tr: ["Maks yükün sadece %20–30'unda kas geliştirme", "Ameliyat sonrası 2. haftadan itibaren güvenli", "300'den fazla çalışma etkinliği kanıtlıyor", "Eupen'de Praxis Loten'de Doppler kalibreli sistem", "Kinesport sertifikalı: Thom Petit"],
      ar: ["بناء عضلي عند 20-30% فقط من الحمل الأقصى", "آمن من الأسبوع الثاني بعد العملية", "أكثر من 300 دراسة تثبت الفعالية", "نظام معاير بالدوبلر في Praxis Loten في Eupen", "معتمد من Kinesport: ثوم بيتي"],
      pl: ["Budowa mięśni przy 20–30% obciążenia maks", "Bezpieczne od 2. tygodnia po operacji", "Ponad 300 badań potwierdza skuteczność", "System kalibrowany Doppler w Praxis Loten w Eupen", "Certyfikat Kinesport: Thom Petit"],
    },
    ctaText: {
      de: "Nach einer OP oder Muskelschwund? Thom Petit bei Praxis Loten in Eupen berät Sie zum BFR-Training.",
      fr: "Après une opération ou perte musculaire ? Thom Petit chez Praxis Loten à Eupen vous conseille sur le BFR.",
      en: "After surgery or muscle loss? Thom Petit at Praxis Loten in Eupen advises you on BFR training.",
      nl: "Na een operatie of spierverlies? Thom Petit bij Praxis Loten in Eupen adviseert u over BFR-training.",
      tr: "Ameliyat sonrası veya kas kaybı mı? Eupen'deki Praxis Loten'de Thom Petit BFR antrenmanı konusunda sizi bilgilendirir.",
      ar: "بعد عملية أو فقدان عضلي؟ ثوم بيتي في Praxis Loten في Eupen ينصحك بشأن تدريب BFR.",
      pl: "Po operacji lub utrata mięśni? Thom Petit w Praxis Loten w Eupen doradzi Ci w sprawie treningu BFR.",
    },
    bibliography: [
      "Patterson SD et al. Blood Flow Restriction Exercise: Considerations of Methodology, Application, and Safety. Front Physiol. 2019;10:533.",
      "Hughes L et al. Blood flow restriction training in clinical musculoskeletal rehabilitation: a systematic review and meta-analysis. Br J Sports Med. 2017;51(13):1003-1011.",
      "Centner C et al. Effects of Blood Flow Restriction Training on Muscular Strength and Hypertrophy in Older Individuals: A Systematic Review and Meta-Analysis. Sports Med. 2019;49(1):95-108.",
      "Lixandrao ME et al. Magnitude of Muscle Strength and Mass Adaptations Between High-Load Resistance Training Versus Low-Load Resistance Training Associated with Blood-Flow Restriction. Sports Med. 2018;48(2):361-378.",
    ],
    disclaimer: {
      de: "Dieser Artikel dient ausschließlich der Information und ersetzt keine individuelle Beratung. BFR-Training sollte nur unter Anleitung eines ausgebildeten Therapeuten durchgeführt werden.",
      fr: "Cet article est à visée informative uniquement. L'entraînement BFR ne doit être pratiqué que sous la supervision d'un thérapeute formé.",
      en: "This article is for informational purposes only. BFR training should only be performed under supervision of a trained therapist.",
      nl: "Dit artikel is alleen bedoeld ter informatie. BFR-training mag alleen onder begeleiding van een getrainde therapeut worden uitgevoerd.",
      tr: "Bu makale yalnızca bilgilendirme amaçlıdır. BFR antrenmanı yalnızca eğitimli bir terapist gözetiminde yapılmalıdır.",
      ar: "هذه المقالة لأغراض إعلامية فقط. يجب إجراء تدريب BFR فقط تحت إشراف معالج مدرب.",
      pl: "Ten artykuł ma charakter wyłącznie informacyjny. Trening BFR powinien być wykonywany wyłącznie pod nadzorem wykwalifikowanego terapeuty.",
    },
  },
  "montre-connectee-douleur": {
  title: {
    de: "Smartwatch und Schmerz — Was Ihre Uhr wirklich für Sie tun kann",
    fr: "Montre connectée et douleur — Ce que votre montre peut vraiment faire pour vous",
    en: "Smartwatch and Pain — What Your Watch Can Really Do for You",
    nl: "Smartwatch en pijn — Wat uw horloge echt voor u kan doen",
    tr: "Akıllı saat ve ağrı — Saatiniz sizin için gerçekten ne yapabilir?",
    ar: "الساعة الذكية والألم — ما الذي يمكن أن تفعله ساعتك حقاً من أجلك",
    pl: "Smartwatch a ból — Co zegarek naprawdę może dla Ciebie zrobić",
  },
  category: {
    de: "Therapie & Technologie",
    fr: "Thérapie & Technologie",
    en: "Therapy & Technology",
    nl: "Therapie & Technologie",
    tr: "Terapi & Teknoloji",
    ar: "العلاج والتكنولوجيا",
    pl: "Terapia & Technologia",
  },
  date: "2026-05-23",
  readMin: 6,
  color: "from-[#0e7490] to-[#155e75]",
  authorSlug: "philippe-banaszak",
  authorName: "Philippe Banaszak",
  intro: {
    de: "Apple Watch, Garmin, Fitbit, Oura Ring — Millionen Menschen tragen heute Geräte, die ihren Schlaf, ihre Herzfrequenz und ihre Schritte messen. Aber können diese Daten wirklich bei chronischen Schmerzen helfen? Die wissenschaftliche Antwort ist faszinierend: **Nicht die Uhr lindert den Schmerz — sondern die Bewegung, die sie fördert.** In unserer Praxis in Eupen nutzen wir diese Technologien als Verbündete der Rehabilitation. Hier erfahren Sie, wie Sie das Beste aus Ihrer Smartwatch herausholen können.",
    fr: "Apple Watch, Garmin, Fitbit, Oura Ring — des millions de personnes portent aujourd'hui des dispositifs qui mesurent leur sommeil, leur fréquence cardiaque et leurs pas. Mais ces données peuvent-elles vraiment aider en cas de douleurs chroniques ? La réponse scientifique est fascinante : **ce n'est pas la montre qui soulage la douleur — c'est le mouvement qu'elle encourage.** Dans notre cabinet à Eupen, nous utilisons ces technologies comme des alliées de la rééducation. Voici comment tirer le meilleur de votre montre connectée.",
    en: "Apple Watch, Garmin, Fitbit, Oura Ring — millions of people now wear devices that track their sleep, heart rate and steps. But can this data really help with chronic pain? The scientific answer is fascinating: **it's not the watch that relieves pain — it's the movement it encourages.** At our practice in Eupen, we use these technologies as rehabilitation allies. Here's how to get the most out of your smartwatch.",
    nl: "Apple Watch, Garmin, Fitbit, Oura Ring — miljoenen mensen dragen vandaag apparaten die hun slaap, hartslag en stappen meten. Maar kunnen deze gegevens echt helpen bij chronische pijn? Het wetenschappelijke antwoord is fascinerend: **het is niet het horloge dat pijn verlicht — het is de beweging die het aanmoedigt.** In onze praktijk in Eupen gebruiken we deze technologieën als bondgenoten van de revalidatie. Hier leest u hoe u het beste uit uw smartwatch haalt.",
    tr: "Apple Watch, Garmin, Fitbit, Oura Ring — bugün milyonlarca insan uykusunu, kalp atış hızını ve adımlarını ölçen cihazlar takıyor. Peki bu veriler kronik ağrılarda gerçekten yardımcı olabilir mi? Bilimsel yanıt büyüleyicidir: **ağrıyı hafifleten saat değil — saatin teşvik ettiği harekettir.** Eupen'deki kliniğimizde bu teknolojileri rehabilitasyonun müttefikleri olarak kullanıyoruz. İşte akıllı saatinizden en iyi şekilde yararlanmanın yolu.",
    ar: "Apple Watch وGarmin وFitbit وOura Ring — يرتدي الملايين اليوم أجهزة تقيس نومهم ونبض قلبهم وخطواتهم. لكن هل يمكن لهذه البيانات أن تساعد حقاً في حالات الألم المزمن؟ الإجابة العلمية مذهلة: **ليست الساعة هي التي تخفف الألم — بل الحركة التي تشجعها.** في عيادتنا في أوبن، نستخدم هذه التقنيات كحليفة لإعادة التأهيل. إليكم كيفية الاستفادة القصوى من ساعتكم الذكية.",
    pl: "Apple Watch, Garmin, Fitbit, Oura Ring — miliony ludzi noszą dziś urządzenia mierzące sen, tętno i kroki. Ale czy te dane mogą naprawdę pomóc w przypadku bólu przewlekłego? Odpowiedź naukowa jest fascynująca: **to nie zegarek łagodzi ból — lecz ruch, do którego zachęca.** W naszym gabinecie w Eupen wykorzystujemy te technologie jako sojuszników rehabilitacji. Oto jak najlepiej wykorzystać swój smartwatch.",
  },
  sections: [
    {
      heading: {
        de: "Nein, Ihre Uhr heilt keinen Schmerz",
        fr: "Non, votre montre ne guérit pas la douleur",
        en: "No, your watch doesn't cure pain",
        nl: "Nee, uw horloge geneest geen pijn",
        tr: "Hayır, saatiniz ağrıyı tedavi etmez",
        ar: "لا، ساعتك لا تعالج الألم",
        pl: "Nie, zegarek nie leczy bólu",
      },
      body: {
        de: "Lassen Sie uns einen weit verbreiteten Mythos entlarven: **Kein tragbares Gerät hat eine direkte schmerzlindernde Wirkung.** Ihre Smartwatch ist kein Medikament. Die wissenschaftliche Literatur ist eindeutig: Die isolierte Nutzung eines Aktivitätstrackers hat keinen direkten und signifikanten Einfluss auf die Schmerzintensität.\n\nAber — und das ist die gute Nachricht — die Forschung zeigt ebenso deutlich, dass Aktivitätstracker eine **klinisch bedeutsame und dauerhafte Steigerung der körperlichen Aktivität** bewirken, über alle Altersgruppen hinweg. Und genau diese Steigerung der Bewegung löst tiefgreifende neurophysiologische Mechanismen der Schmerzmodulation aus.\n\nMit anderen Worten: Die Uhr ist nicht die Medizin. **Die Uhr ist der Kompass, der Sie zur Medizin führt — der Bewegung.**",
        fr: "Déconstruisons un mythe répandu : **aucun dispositif portable n'a d'effet antidouleur direct.** Votre montre connectée n'est pas un médicament. La littérature scientifique est formelle : l'utilisation isolée d'un traqueur d'activité n'a pas d'effet direct et significatif sur l'intensité de la douleur.\n\nMais — et c'est la bonne nouvelle — la recherche montre tout aussi clairement que les traqueurs d'activité induisent une **augmentation cliniquement importante et durable de l'activité physique**, dans tous les groupes d'âge. Et c'est précisément cette augmentation du mouvement qui déclenche des mécanismes neurophysiologiques profonds de modulation de la douleur.\n\nAutrement dit : la montre n'est pas le remède. **La montre est la boussole qui vous guide vers le remède — le mouvement.**",
        en: "Let's bust a widespread myth: **no wearable device has a direct pain-relieving effect.** Your smartwatch is not a medication. The scientific literature is clear: using an activity tracker alone has no direct, significant impact on pain intensity.\n\nBut — and this is the good news — research equally shows that activity trackers drive a **clinically meaningful and lasting increase in physical activity**, across all age groups. And it is precisely this increase in movement that triggers profound neurophysiological pain modulation mechanisms.\n\nIn other words: the watch is not the medicine. **The watch is the compass that guides you to the medicine — movement.**",
        nl: "Laten we een wijdverbreide mythe ontkrachten: **geen enkel draagbaar apparaat heeft een direct pijnstillend effect.** Uw smartwatch is geen medicijn. De wetenschappelijke literatuur is duidelijk: het geïsoleerde gebruik van een activiteitstracker heeft geen direct en significant effect op de pijnintensiteit.\n\nMaar — en dat is het goede nieuws — onderzoek toont even duidelijk aan dat activiteitstrackers een **klinisch betekenisvolle en duurzame toename van fysieke activiteit** bewerkstelligen, in alle leeftijdsgroepen. En het is precies deze toename in beweging die diepe neurofysiologische mechanismen van pijnmodulatie activeert.\n\nMet andere woorden: het horloge is niet het medicijn. **Het horloge is het kompas dat u naar het medicijn leidt — beweging.**",
        tr: "Yaygın bir efsaneyi çürütelim: **hiçbir giyilebilir cihazın doğrudan ağrı kesici etkisi yoktur.** Akıllı saatiniz bir ilaç değildir. Bilimsel literatür açıktır: bir aktivite takipçisinin tek başına kullanımının ağrı yoğunluğu üzerinde doğrudan ve anlamlı bir etkisi yoktur.\n\nAma — ve işte iyi haber — araştırmalar aktivite takipçilerinin tüm yaş gruplarında **klinik olarak anlamlı ve kalıcı bir fiziksel aktivite artışı** sağladığını da açıkça göstermektedir. Ve tam da bu hareket artışı, derin nörofizyolojik ağrı modülasyon mekanizmalarını tetikler.\n\nBaşka bir deyişle: saat ilaç değildir. **Saat, sizi ilaca — harekete — yönlendiren pusuladır.**",
        ar: "لنكشف أسطورة شائعة: **لا يوجد جهاز قابل للارتداء له تأثير مباشر في تخفيف الألم.** ساعتك الذكية ليست دواءً. الأدبيات العلمية واضحة: استخدام متتبع النشاط وحده ليس له تأثير مباشر وملموس على شدة الألم.\n\nلكن — وهنا الخبر السار — تُظهر الأبحاث بوضوح أيضاً أن متتبعات النشاط تُحدث **زيادة مهمة سريرياً ودائمة في النشاط البدني**، عبر جميع الفئات العمرية. وهذه الزيادة في الحركة بالتحديد هي التي تُطلق آليات عصبية فسيولوجية عميقة لتعديل الألم.\n\nبمعنى آخر: الساعة ليست العلاج. **الساعة هي البوصلة التي ترشدك إلى العلاج — الحركة.**",
        pl: "Obalmy powszechny mit: **żadne urządzenie noszone nie ma bezpośredniego działania przeciwbólowego.** Twój smartwatch nie jest lekiem. Literatura naukowa jest jednoznaczna: samo używanie trackera aktywności nie ma bezpośredniego, znaczącego wpływu na intensywność bólu.\n\nAle — i to dobra wiadomość — badania równie wyraźnie pokazują, że trackery aktywności powodują **klinicznie istotny i trwały wzrost aktywności fizycznej**, we wszystkich grupach wiekowych. I to właśnie ten wzrost ruchu uruchamia głębokie neurofizjologiczne mechanizmy modulacji bólu.\n\nInnymi słowy: zegarek nie jest lekarstwem. **Zegarek jest kompasem, który prowadzi do lekarstwa — ruchu.**",
      },
    },
    {
      heading: {
        de: "Bewegung — Ihr natürliches Schmerzmittel",
        fr: "Le mouvement — votre antidouleur naturel",
        en: "Movement — your natural painkiller",
        nl: "Beweging — uw natuurlijke pijnstiller",
        tr: "Hareket — doğal ağrı kesiceniz",
        ar: "الحركة — مسكن الألم الطبيعي",
        pl: "Ruch — Twój naturalny środek przeciwbólowy",
      },
      body: {
        de: "Wenn Sie sich regelmäßig bewegen, aktiviert Ihr Körper ein faszinierendes Schutzsystem: die **bewegungsinduzierte Schmerzlinderung**. Dieses wissenschaftlich dokumentierte Phänomen funktioniert über mehrere Wege gleichzeitig:\n\n**Natürliche Schmerzmittel** — Moderate Bewegung regt die Ausschüttung von Endorphinen und Endocannabinoiden an, körpereigene Substanzen, die Ihre Schmerzempfindlichkeit deutlich senken.\n\n**Anti-Angst-Effekt** — Bewegung aktiviert das Belohnungszentrum Ihres Gehirns und hemmt gleichzeitig Angstreaktionen. So hilft regelmäßige Bewegung, die Angst vor dem Bewegen zu überwinden.\n\n**Entzündungsbremse** — Körperliche Aktivität reduziert chronische Entzündungen auf zellulärer Ebene und stellt das Gleichgewicht des Nervensystems wieder her.\n\nEine große Studie mit über 11 000 Teilnehmern hat gezeigt: Bereits **80 Minuten Gehen pro Tag** senkt das Risiko für chronische Rückenschmerzen um 13 %. Ab 100 Minuten liegt die Reduktion bei 23 %.",
        fr: "Quand vous bougez régulièrement, votre corps active un système de protection fascinant : **l'hypoalgésie induite par l'exercice**. Ce phénomène scientifiquement documenté fonctionne par plusieurs voies simultanément :\n\n**Antidouleurs naturels** — L'exercice modéré stimule la libération d'endorphines et d'endocannabinoïdes, des substances produites par votre corps qui diminuent considérablement votre sensibilité à la douleur.\n\n**Effet anti-peur** — Le mouvement active le circuit de la récompense dans votre cerveau et inhibe simultanément les réactions de peur. Ainsi, bouger régulièrement aide à surmonter la peur du mouvement.\n\n**Frein anti-inflammatoire** — L'activité physique réduit l'inflammation chronique au niveau cellulaire et rétablit l'équilibre du système nerveux.\n\nUne vaste étude portant sur plus de 11 000 participants a montré que **80 minutes de marche par jour** réduisent le risque de lombalgie chronique de 13 %. À partir de 100 minutes, la réduction atteint 23 %.",
        en: "When you move regularly, your body activates a fascinating defence system: **exercise-induced hypoalgesia**. This scientifically documented phenomenon works through several pathways simultaneously:\n\n**Natural painkillers** — Moderate exercise stimulates the release of endorphins and endocannabinoids, substances produced by your body that significantly reduce your pain sensitivity.\n\n**Anti-fear effect** — Movement activates the reward circuit in your brain while simultaneously inhibiting fear responses. Regular movement thus helps overcome the fear of moving.\n\n**Anti-inflammatory brake** — Physical activity reduces chronic inflammation at the cellular level and restores nervous system balance.\n\nA large study of over 11,000 participants showed that just **80 minutes of walking per day** reduces the risk of chronic low back pain by 13%. From 100 minutes, the reduction reaches 23%.",
        nl: "Wanneer u regelmatig beweegt, activeert uw lichaam een fascinerend beschermingssysteem: **bewegingsgeïnduceerde pijnvermindering**. Dit wetenschappelijk gedocumenteerde fenomeen werkt via meerdere routes tegelijk:\n\n**Natuurlijke pijnstillers** — Matige beweging stimuleert de afgifte van endorfines en endocannabinoïden, stoffen die uw lichaam zelf aanmaakt en die uw pijngevoeligheid aanzienlijk verminderen.\n\n**Anti-angsteffect** — Beweging activeert het beloningscentrum in uw hersenen en remt tegelijkertijd angstreacties. Zo helpt regelmatig bewegen om de angst voor bewegen te overwinnen.\n\n**Ontstekingsrem** — Fysieke activiteit vermindert chronische ontsteking op cellulair niveau en herstelt het evenwicht van het zenuwstelsel.\n\nEen grote studie met meer dan 11.000 deelnemers toonde aan dat al **80 minuten wandelen per dag** het risico op chronische lage rugpijn met 13% verlaagt. Vanaf 100 minuten bereikt de vermindering 23%.",
        tr: "Düzenli hareket ettiğinizde, vücudunuz büyüleyici bir koruma sistemi devreye sokar: **egzersizle indüklenen ağrı azalması**. Bilimsel olarak belgelenmiş bu fenomen aynı anda birkaç yoldan çalışır:\n\n**Doğal ağrı kesiciler** — Orta düzey egzersiz, vücudunuzun ürettiği ve ağrı duyarlılığınızı önemli ölçüde azaltan endorfin ve endokannabinoidlerin salınımını uyarır.\n\n**Korku karşıtı etki** — Hareket beyninizdeki ödül devresini aktive ederken aynı anda korku tepkilerini baskılar. Böylece düzenli hareket, hareket korkusunun üstesinden gelmeye yardımcı olur.\n\n**İltihaplanma freni** — Fiziksel aktivite, hücresel düzeyde kronik iltihaplanmayı azaltır ve sinir sistemi dengesini yeniden kurar.\n\n11.000'den fazla katılımcıyla yapılan büyük bir çalışma, günde yalnızca **80 dakika yürümenin** kronik bel ağrısı riskini %13 azalttığını göstermiştir. 100 dakikadan itibaren azalma %23'e ulaşır.",
        ar: "عندما تتحركون بانتظام، يُفعّل جسمكم نظام حماية مذهلاً: **تخفيف الألم المُحدث بالتمرين**. هذه الظاهرة الموثقة علمياً تعمل عبر عدة مسارات في آنٍ واحد:\n\n**مسكنات طبيعية** — التمرين المعتدل يحفز إفراز الإندورفين والإندوكانابينويد، وهي مواد ينتجها جسمكم تُقلل بشكل ملحوظ من حساسيتكم للألم.\n\n**تأثير مضاد للخوف** — الحركة تنشط دائرة المكافأة في دماغكم وتثبط في الوقت نفسه ردود فعل الخوف. هكذا تساعد الحركة المنتظمة في التغلب على الخوف من الحركة.\n\n**كابح الالتهاب** — النشاط البدني يقلل الالتهاب المزمن على المستوى الخلوي ويعيد توازن الجهاز العصبي.\n\nأظهرت دراسة واسعة شملت أكثر من 11,000 مشارك أن مجرد **80 دقيقة من المشي يومياً** يقلل خطر آلام أسفل الظهر المزمنة بنسبة 13%. ومن 100 دقيقة تصل النسبة إلى 23%.",
        pl: "Gdy regularnie się ruszasz, Twoje ciało aktywuje fascynujący system ochronny: **hipoalgezję wywołaną ćwiczeniami**. To naukowo udokumentowane zjawisko działa jednocześnie kilkoma drogami:\n\n**Naturalne środki przeciwbólowe** — Umiarkowany wysiłek stymuluje wydzielanie endorfin i endokannabinoidów, substancji produkowanych przez organizm, które znacząco zmniejszają wrażliwość na ból.\n\n**Efekt antylękowy** — Ruch aktywuje obwód nagrody w mózgu i jednocześnie hamuje reakcje lękowe. Regularne ćwiczenia pomagają przezwyciężyć strach przed ruchem.\n\n**Hamulec przeciwzapalny** — Aktywność fizyczna redukuje przewlekły stan zapalny na poziomie komórkowym i przywraca równowagę układu nerwowego.\n\nDuże badanie obejmujące ponad 11 000 uczestników wykazało, że już **80 minut spaceru dziennie** zmniejsza ryzyko przewlekłego bólu pleców o 13%. Od 100 minut redukcja sięga 23%.",
      },
    },
    {
      heading: {
        de: "Folgen Sie dem Trend, nicht der Zahl",
        fr: "Suivez la tendance, pas le chiffre",
        en: "Follow the trend, not the number",
        nl: "Volg de trend, niet het getal",
        tr: "Sayıyı değil, trendi takip edin",
        ar: "تابعوا الاتجاه وليس الرقم",
        pl: "Śledź trend, nie cyfrę",
      },
      body: {
        de: "> *\u00ab Die beste Nutzung Ihrer Smartwatch? Vergleichen Sie sich heute mit sich selbst von letzter Woche \u2014 nie mit einer Norm oder einem anderen Menschen. \u00bb*\n\nDas ist **die** Regel, die alles ver\u00e4ndert. Die Wissenschaft zeigt n\u00e4mlich, dass die verschiedenen Marken nicht die gleiche Sprache sprechen: Apple Watch misst die Herzfrequenzvariabilit\u00e4t anders als Garmin, und Fitbit anders als Oura Ring. Die Werte sind zwischen Ger\u00e4ten **nicht vergleichbar**.\n\nAber jedes Ger\u00e4t ist **in sich selbst zuverl\u00e4ssig**, um Ihre pers\u00f6nlichen Trends \u00fcber Wochen und Monate zu verfolgen. Wenn Ihre Schrittzahl stetig steigt, wenn Ihr Schlaf sich verbessert, wenn Ihre Erholung zunimmt \u2014 dann sind Sie auf dem richtigen Weg. Egal was die absolute Zahl sagt.\n\nVergessen Sie die \u00ab 10 000 Schritte pro Tag \u00bb. Dieses Ziel ist **nicht wissenschaftlich fundiert** und kann entmutigend wirken. Starten Sie von Ihrem aktuellen Durchschnitt und steigern Sie ihn um 40 bis 60 % \u00fcber mehrere Wochen.",
        fr: "> *\u00ab La meilleure utilisation de votre montre connect\u00e9e ? Comparez-vous aujourd\u2019hui \u00e0 vous-m\u00eame la semaine derni\u00e8re \u2014 jamais \u00e0 une norme ni \u00e0 quelqu\u2019un d\u2019autre. \u00bb*\n\nC\u2019est **la** r\u00e8gle qui change tout. La science montre en effet que les diff\u00e9rentes marques ne parlent pas le m\u00eame langage : l\u2019Apple Watch mesure la variabilit\u00e9 cardiaque diff\u00e9remment de Garmin, et Fitbit diff\u00e9remment d\u2019Oura Ring. Les valeurs sont **incomparables** entre appareils.\n\nMais chaque appareil est **fiable en lui-m\u00eame** pour suivre vos tendances personnelles sur des semaines et des mois. Si votre nombre de pas augmente r\u00e9guli\u00e8rement, si votre sommeil s\u2019am\u00e9liore, si votre r\u00e9cup\u00e9ration progresse \u2014 vous \u00eates sur la bonne voie. Peu importe le chiffre absolu.\n\nOubliez les \u00ab 10 000 pas par jour \u00bb. Cet objectif n\u2019est **pas fond\u00e9 scientifiquement** et peut d\u00e9courager. Partez de votre moyenne actuelle et augmentez-la de 40 \u00e0 60 % sur plusieurs semaines.",
        en: "> *\"The best use of your smartwatch? Compare yourself today to yourself last week \u2014 never to a standard or someone else.\"*\n\nThis is **the** rule that changes everything. Science shows that different brands don\u2019t speak the same language: Apple Watch measures heart rate variability differently from Garmin, and Fitbit differently from Oura Ring. Values are **not comparable** between devices.\n\nBut each device is **reliable on its own** for tracking your personal trends over weeks and months. If your step count steadily rises, if your sleep improves, if your recovery progresses \u2014 you\u2019re on the right track. Regardless of the absolute number.\n\nForget the \"10,000 steps per day\" rule. This target is **not scientifically based** and can be discouraging. Start from your current average and increase it by 40 to 60% over several weeks.",
        nl: "> *\u00ab Het beste gebruik van uw smartwatch? Vergelijk uzelf vandaag met uzelf van vorige week \u2014 nooit met een norm of iemand anders. \u00bb*\n\nDit is **de** regel die alles verandert. De wetenschap toont namelijk aan dat verschillende merken niet dezelfde taal spreken: Apple Watch meet de hartslagvariabiliteit anders dan Garmin, en Fitbit anders dan Oura Ring. De waarden zijn **niet vergelijkbaar** tussen apparaten.\n\nMaar elk apparaat is **op zichzelf betrouwbaar** om uw persoonlijke trends over weken en maanden te volgen. Als uw stappentelling gestaag stijgt, als uw slaap verbetert, als uw herstel vooruitgaat \u2014 bent u op de goede weg. Ongeacht het absolute getal.\n\nVergeet de \u00ab 10.000 stappen per dag \u00bb. Dit doel is **niet wetenschappelijk onderbouwd** en kan ontmoedigend werken. Begin vanaf uw huidige gemiddelde en verhoog het met 40 tot 60% over meerdere weken.",
        tr: "> *\u00ab Ak\u0131ll\u0131 saatinizin en iyi kullan\u0131m\u0131? Bug\u00fcnk\u00fc kendinizi ge\u00e7en haftaki kendinizle kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 asla bir normla ya da ba\u015fka biriyle de\u011fil. \u00bb*\n\nBu, **her \u015feyi de\u011fi\u015ftiren** kurald\u0131r. Bilim g\u00f6steriyor ki farkl\u0131 markalar ayn\u0131 dili konu\u015fmuyor: Apple Watch kalp at\u0131\u015f de\u011fi\u015fkenli\u011fini Garmin\u2019den farkl\u0131 \u00f6l\u00e7er, Fitbit ise Oura Ring\u2019den farkl\u0131. De\u011ferler cihazlar aras\u0131nda **kar\u015f\u0131la\u015ft\u0131r\u0131lamaz**.\n\nAma her cihaz, haftalar ve aylar boyunca ki\u015fisel e\u011filimlerinizi takip etmek i\u00e7in **kendi i\u00e7inde g\u00fcvenilirdir**. Ad\u0131m say\u0131n\u0131z istikrarl\u0131 \u015fekilde art\u0131yorsa, uykunuz iyile\u015fiyorsa, toparlanman\u0131z ilerliyorsa \u2014 do\u011fru yoldas\u0131n\u0131z. Mutlak say\u0131 ne olursa olsun.\n\n\u00ab G\u00fcnde 10.000 ad\u0131m \u00bb kural\u0131n\u0131 unutun. Bu hedef **bilimsel temelli de\u011fildir** ve cesaretinizi k\u0131rabilir. Mevcut ortalamanızdan başlayın ve birkaç hafta içinde %40-60 artırın.",
        ar: "> *\u00ab \u0623\u0641\u0636\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629\u061f \u0642\u0627\u0631\u0646\u0648\u0627 \u0623\u0646\u0641\u0633\u0643\u0645 \u0627\u0644\u064a\u0648\u0645 \u0628\u0623\u0646\u0641\u0633\u0643\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a \u2014 \u0644\u0627 \u0628\u0645\u0639\u064a\u0627\u0631 \u0648\u0644\u0627 \u0628\u0634\u062e\u0635 \u0622\u062e\u0631. \u00bb*\n\n\u0647\u0630\u0647 \u0647\u064a **\u0627\u0644\u0642\u0627\u0639\u062f\u0629** \u0627\u0644\u062a\u064a \u062a\u063a\u064a\u0631 \u0643\u0644 \u0634\u064a\u0621. \u0627\u0644\u0639\u0644\u0645 \u064a\u064f\u0638\u0647\u0631 \u0623\u0646 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0627 \u062a\u062a\u062d\u062f\u062b \u0646\u0641\u0633 \u0627\u0644\u0644\u063a\u0629: Apple Watch \u062a\u0642\u064a\u0633 \u062a\u0642\u0644\u0628 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0639\u0646 Garmin\u060c \u0648Fitbit \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0639\u0646 Oura Ring. \u0627\u0644\u0642\u064a\u0645 **\u063a\u064a\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629** \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.\n\n\u0644\u0643\u0646 \u0643\u0644 \u062c\u0647\u0627\u0632 **\u0645\u0648\u062b\u0648\u0642 \u0628\u0630\u0627\u062a\u0647** \u0644\u062a\u062a\u0628\u0639 \u0627\u062a\u062c\u0627\u0647\u0627\u062a\u0643\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0639\u0628\u0631 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0648\u0627\u0644\u0623\u0634\u0647\u0631. \u0625\u0630\u0627 \u0643\u0627\u0646 \u0639\u062f\u062f \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u064a\u0632\u062f\u0627\u062f \u0628\u0627\u0633\u062a\u0645\u0631\u0627\u0631\u060c \u0625\u0630\u0627 \u0643\u0627\u0646 \u0646\u0648\u0645\u0643\u0645 \u064a\u062a\u062d\u0633\u0646\u060c \u0625\u0630\u0627 \u0643\u0627\u0646 \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u064a\u062a\u0642\u062f\u0645 \u2014 \u0641\u0623\u0646\u062a\u0645 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064a\u0642 \u0627\u0644\u0635\u062d\u064a\u062d. \u0628\u063a\u0636 \u0627\u0644\u0646\u0638\u0631 \u0639\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0637\u0644\u0642.\n\n\u0627\u0646\u0633\u0648\u0627 \u00ab 10,000 \u062e\u0637\u0648\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645 \u00bb. \u0647\u0630\u0627 \u0627\u0644\u0647\u062f\u0641 **\u0644\u064a\u0633 \u0645\u0628\u0646\u064a\u0627\u064b \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0639\u0644\u0645\u064a** \u0648\u0642\u062f \u064a\u0643\u0648\u0646 \u0645\u062d\u0628\u0637\u0627\u064b. \u0627\u0628\u062f\u0623\u0648\u0627 \u0645\u0646 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0632\u064a\u062f\u0648\u0647 \u0628\u0646\u0633\u0628\u0629 40 \u0625\u0644\u0649 60% \u0639\u0644\u0649 \u0645\u062f\u0649 \u0639\u062f\u0629 \u0623\u0633\u0627\u0628\u064a\u0639.",
        pl: "> *\u00ab Najlepsze wykorzystanie smartwatcha? Por\u00f3wnuj siebie dzi\u015b z sob\u0105 sprzed tygodnia \u2014 nigdy z norm\u0105 ani z kim\u015b innym. \u00bb*\n\nTo jest **ta** zasada, kt\u00f3ra zmienia wszystko. Nauka pokazuje, \u017ce r\u00f3\u017cne marki nie m\u00f3wi\u0105 tym samym j\u0119zykiem: Apple Watch mierzy zmienno\u015b\u0107 rytmu serca inaczej ni\u017c Garmin, a Fitbit inaczej ni\u017c Oura Ring. Warto\u015bci **nie s\u0105 por\u00f3wnywalne** mi\u0119dzy urz\u0105dzeniami.\n\nAle ka\u017cde urz\u0105dzenie jest **wiarygodne samo w sobie** do \u015bledzenia Twoich osobistych trend\u00f3w przez tygodnie i miesi\u0105ce. Je\u015bli liczba krok\u00f3w stale ro\u015bnie, je\u015bli sen si\u0119 poprawia, je\u015bli regeneracja post\u0119puje \u2014 jeste\u015b na dobrej drodze. Niezale\u017cnie od liczby bezwzgl\u0119dnej.\n\nZapomnij o \u00ab 10 000 krokach dziennie \u00bb. Ten cel **nie ma podstaw naukowych** i mo\u017ce zniech\u0119ca\u0107. Zacznij od swojej obecnej \u015bredniej i zwi\u0119ksz j\u0105 o 40-60% w ci\u0105gu kilku tygodni.",
      },
    },
    {
      heading: {
        de: "3 Reflexe f\u00fcr Ihre Smartwatch",
        fr: "3 r\u00e9flexes pour votre montre connect\u00e9e",
        en: "3 smart habits for your smartwatch",
        nl: "3 slimme gewoontes voor uw smartwatch",
        tr: "Ak\u0131ll\u0131 saatiniz i\u00e7in 3 al\u0131\u015fkanl\u0131k",
        ar: "3 \u0639\u0627\u062f\u0627\u062a \u0630\u0643\u064a\u0629 \u0644\u0633\u0627\u0639\u062a\u0643 \u0627\u0644\u0630\u0643\u064a\u0629",
        pl: "3 nawyki dla Twojego smartwatcha",
      },
      body: {
        de: "**1. Beobachten Sie Ihren Schritttrend \u00fcber 7 Tage** \u2014 Notieren Sie sich Ihren aktuellen Wochendurchschnitt. Dann steigern Sie ihn sanft: von 4 500 auf 6 000, dann auf 7 000 Schritte pro Tag. Die Forschung zeigt, dass bereits eine Steigerung um 40 % zu messbaren Verbesserungen bei chronischen Schmerzen f\u00fchrt. Keine Spr\u00fcnge \u2014 kontinuierliche Steigerung.\n\n**2. Nutzen Sie Ihre Erholungsdaten am Morgen** \u2014 Schauen Sie beim Aufwachen auf Ihre Variabilit\u00e4t der Herzfrequenz (VFC/HRV) oder Ihren \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Ist der Wert niedriger als Ihr pers\u00f6nlicher Durchschnitt? Dann w\u00e4hlen Sie sanfte Bewegung statt intensivem Training. So vermeiden Sie R\u00fcckschl\u00e4ge.\n\n**3. Vertrauen Sie dem Schlaf-Trend, nicht dem Score** \u2014 Schlafscores k\u00f6nnen t\u00e4glich stark schwanken und sind manchmal ungenau. Was z\u00e4hlt: Schlafen Sie im Durchschnitt mehr als letzte Woche? Wachen Sie seltener auf? Das ist Ihr wahrer Fortschritt.",
        fr: "**1. Observez votre tendance de pas sur 7 jours** \u2014 Notez votre moyenne hebdomadaire actuelle. Puis augmentez-la progressivement : de 4 500 \u00e0 6 000, puis \u00e0 7 000 pas par jour. La recherche montre qu\u2019une augmentation de seulement 40 % produit d\u00e9j\u00e0 des am\u00e9liorations mesurables sur les douleurs chroniques. Pas de bonds \u2014 une progression continue.\n\n**2. Utilisez vos donn\u00e9es de r\u00e9cup\u00e9ration le matin** \u2014 Au r\u00e9veil, consultez votre variabilit\u00e9 de la fr\u00e9quence cardiaque (VFC/HRV) ou votre \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. La valeur est plus basse que votre moyenne personnelle ? Optez pour du mouvement doux plut\u00f4t qu\u2019un entra\u00eenement intense. Vous \u00e9viterez ainsi les rechutes.\n\n**3. Fiez-vous \u00e0 la tendance du sommeil, pas au score** \u2014 Les scores de sommeil peuvent varier fortement d\u2019un jour \u00e0 l\u2019autre et sont parfois impr\u00e9cis. Ce qui compte : dormez-vous en moyenne plus que la semaine derni\u00e8re ? Vous r\u00e9veillez-vous moins souvent ? Voil\u00e0 votre vrai progr\u00e8s.",
        en: "**1. Watch your step trend over 7 days** \u2014 Note your current weekly average. Then increase it gradually: from 4,500 to 6,000, then to 7,000 steps per day. Research shows that just a 40% increase already produces measurable improvements in chronic pain. No jumps \u2014 steady progression.\n\n**2. Use your recovery data in the morning** \u2014 On waking, check your heart rate variability (HRV) or your \"Body Battery\"/\"Readiness Score\". Is it lower than your personal average? Choose gentle movement rather than intense training. This helps you avoid setbacks.\n\n**3. Trust the sleep trend, not the score** \u2014 Sleep scores can fluctuate wildly day-to-day and are sometimes inaccurate. What matters: are you sleeping more on average than last week? Waking less often? That\u2019s your real progress.",
        nl: "**1. Bekijk uw stappentrend over 7 dagen** \u2014 Noteer uw huidige weekgemiddelde. Verhoog het dan geleidelijk: van 4.500 naar 6.000, dan naar 7.000 stappen per dag. Onderzoek toont aan dat slechts 40% meer stappen al meetbare verbeteringen bij chronische pijn oplevert. Geen sprongen \u2014 gestage progressie.\n\n**2. Gebruik uw herstelgegevens \u2019s ochtends** \u2014 Bekijk bij het ontwaken uw hartslagvariabiliteit (HRV) of uw \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Is de waarde lager dan uw persoonlijk gemiddelde? Kies dan zachte beweging in plaats van intensieve training. Zo voorkomt u terugvallen.\n\n**3. Vertrouw op de slaaptrend, niet op de score** \u2014 Slaapscores kunnen dagelijks sterk schommelen en zijn soms onnauwkeurig. Wat telt: slaapt u gemiddeld meer dan vorige week? Wordt u minder vaak wakker? Dat is uw echte vooruitgang.",
        tr: "**1. 7 g\u00fcnl\u00fck ad\u0131m e\u011filiminizi izleyin** \u2014 Mevcut haftal\u0131k ortalamanızı not edin. Sonra kademeli olarak art\u0131r\u0131n: g\u00fcnde 4.500\u2019den 6.000\u2019e, ard\u0131ndan 7.000 ad\u0131ma. Ara\u015ft\u0131rmalar, sadece %40\u2019l\u0131k bir art\u0131\u015f\u0131n bile kronik a\u011fr\u0131larda \u00f6l\u00e7\u00fclebilir iyile\u015fmeler sa\u011flad\u0131\u011f\u0131n\u0131 g\u00f6stermektedir. Ani s\u0131\u00e7ramalar yok \u2014 s\u00fcrekli ilerleme.\n\n**2. Sabahlar\u0131 toparlanma verilerinizi kullan\u0131n** \u2014 Uyand\u0131\u011f\u0131n\u0131zda kalp at\u0131\u015f de\u011fi\u015fkenli\u011finize (HRV) veya \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb\u2019unuza bak\u0131n. Ki\u015fisel ortalamanızdan d\u00fc\u015f\u00fckse yo\u011fun antrenman yerine hafif hareket tercih edin. B\u00f6ylece geri d\u00f6n\u00fc\u015flerden ka\u00e7\u0131n\u0131rs\u0131n\u0131z.\n\n**3. Uyku skoruna de\u011fil, uyku e\u011filimine g\u00fcvenin** \u2014 Uyku puanlar\u0131 g\u00fcnden g\u00fcne b\u00fcy\u00fck farkl\u0131l\u0131klar g\u00f6sterebilir ve bazen yan\u0131lt\u0131c\u0131d\u0131r. \u00d6nemli olan: ge\u00e7en haftaya g\u00f6re ortalama daha fazla m\u0131 uyuyorsunuz? Daha az m\u0131 uyan\u0131yorsunuz? \u0130\u015fte ger\u00e7ek ilerlemeniz bu.",
        ar: "**1. \u0631\u0627\u0642\u0628\u0648\u0627 \u0627\u062a\u062c\u0627\u0647 \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u0639\u0644\u0649 \u0645\u062f\u0649 7 \u0623\u064a\u0627\u0645** \u2014 \u0633\u062c\u0644\u0648\u0627 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064a \u0627\u0644\u062d\u0627\u0644\u064a. \u062b\u0645 \u0632\u064a\u062f\u0648\u0647 \u062a\u062f\u0631\u064a\u062c\u064a\u0627\u064b: \u0645\u0646 4,500 \u0625\u0644\u0649 6,000 \u062b\u0645 \u0625\u0644\u0649 7,000 \u062e\u0637\u0648\u0629 \u064a\u0648\u0645\u064a\u0627\u064b. \u062a\u064f\u0638\u0647\u0631 \u0627\u0644\u0623\u0628\u062d\u0627\u062b \u0623\u0646 \u0632\u064a\u0627\u062f\u0629 \u0628\u0646\u0633\u0628\u0629 40% \u0641\u0642\u0637 \u062a\u064f\u0646\u062a\u062c \u0628\u0627\u0644\u0641\u0639\u0644 \u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633 \u0641\u064a \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0645\u0632\u0645\u0646. \u0628\u062f\u0648\u0646 \u0642\u0641\u0632\u0627\u062a \u2014 \u062a\u0642\u062f\u0645 \u0645\u0633\u062a\u0645\u0631.\n\n**2. \u0627\u0633\u062a\u062e\u062f\u0645\u0648\u0627 \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d** \u2014 \u0639\u0646\u062f \u0627\u0644\u0627\u0633\u062a\u064a\u0642\u0627\u0638\u060c \u062a\u062d\u0642\u0642\u0648\u0627 \u0645\u0646 \u062a\u0642\u0644\u0628 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 (HRV) \u0623\u0648 \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. \u0647\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0623\u0642\u0644 \u0645\u0646 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u061f \u0627\u062e\u062a\u0627\u0631\u0648\u0627 \u0627\u0644\u062d\u0631\u0643\u0629 \u0627\u0644\u0644\u0637\u064a\u0641\u0629 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0643\u062b\u0641. \u0647\u0643\u0630\u0627 \u062a\u062a\u062c\u0646\u0628\u0648\u0646 \u0627\u0644\u0627\u0646\u062a\u0643\u0627\u0633\u0627\u062a.\n\n**3. \u062b\u0642\u0648\u0627 \u0628\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0646\u0648\u0645 \u0648\u0644\u064a\u0633 \u0628\u0627\u0644\u0646\u062a\u064a\u062c\u0629** \u2014 \u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0646\u0648\u0645 \u0642\u062f \u062a\u062a\u0623\u0631\u062c\u062d \u0628\u0634\u0643\u0644 \u0643\u0628\u064a\u0631 \u064a\u0648\u0645\u064a\u0627\u064b \u0648\u0623\u062d\u064a\u0627\u0646\u0627\u064b \u062a\u0643\u0648\u0646 \u063a\u064a\u0631 \u062f\u0642\u064a\u0642\u0629. \u0627\u0644\u0645\u0647\u0645: \u0647\u0644 \u062a\u0646\u0627\u0645\u0648\u0646 \u0641\u064a \u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a\u061f \u0647\u0644 \u062a\u0633\u062a\u064a\u0642\u0638\u0648\u0646 \u0623\u0642\u0644\u061f \u0647\u0630\u0627 \u0647\u0648 \u062a\u0642\u062f\u0645\u0643\u0645 \u0627\u0644\u062d\u0642\u064a\u0642\u064a.",
        pl: "**1. Obserwuj trend krok\u00f3w przez 7 dni** \u2014 Zanotuj swoj\u0105 obecn\u0105 \u015bredni\u0105 tygodniow\u0105. Nast\u0119pnie zwi\u0119kszaj j\u0105 stopniowo: z 4 500 do 6 000, potem do 7 000 krok\u00f3w dziennie. Badania pokazuj\u0105, \u017ce ju\u017c 40% wzrost przynosi mierzalne poprawy w b\u00f3lu przewlek\u0142ym. Bez skok\u00f3w \u2014 sta\u0142y post\u0119p.\n\n**2. Wykorzystuj dane regeneracji rano** \u2014 Po przebudzeniu sprawd\u017a zmienno\u015b\u0107 rytmu serca (HRV) lub \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Warto\u015b\u0107 ni\u017csza ni\u017c Twoja osobista \u015brednia? Wybierz \u0142agodny ruch zamiast intensywnego treningu. Tak unikniesz nawrot\u00f3w.\n\n**3. Ufaj trendowi snu, nie punktacji** \u2014 Wyniki snu mog\u0105 si\u0119 silnie waha\u0107 z dnia na dzie\u0144 i bywaj\u0105 niedok\u0142adne. Liczy si\u0119: czy \u015bpisz \u015brednio wi\u0119cej ni\u017c w zesz\u0142ym tygodniu? Czy budzisz si\u0119 rzadziej? To jest Tw\u00f3j prawdziwy post\u0119p.",
      },
    },
    {
      heading: {
        de: "Wann Sie aufmerksam werden sollten",
        fr: "Quand \u00eatre attentif",
        en: "When to pay attention",
        nl: "Wanneer opletten",
        tr: "Ne zaman dikkatli olmal\u0131s\u0131n\u0131z",
        ar: "\u0645\u062a\u0649 \u064a\u062c\u0628 \u0627\u0644\u0627\u0646\u062a\u0628\u0627\u0647",
        pl: "Kiedy zwr\u00f3ci\u0107 uwag\u0119",
      },
      body: {
        de: "Ihre Smartwatch liefert Ihnen wertvolle Hinweise \u2014 aber sie ist **kein Arzt**. Hier sind Situationen, in denen die Daten Sie zum Handeln auffordern sollten:\n\n\u2022 **Ihre VFC/HRV sinkt mehrere Tage in Folge** und Ihre Ruheherzfrequenz steigt gleichzeitig \u2014 das kann auf \u00fcberm\u00e4\u00dfigen Stress, schlechten Schlaf oder eine beginnende Entz\u00fcndung hinweisen. Reduzieren Sie die Intensit\u00e4t.\n\n\u2022 **Sie haben Ihre Aktivit\u00e4t abrupt verdoppelt oder verdreifacht** \u2014 Die Forschung zeigt, dass ein Verh\u00e4ltnis von mehr als 1,5 zwischen Ihrer aktuellen Wochenbelastung und dem Durchschnitt der letzten 4 Wochen das Risiko f\u00fcr Schmerzsch\u00fcbe deutlich erh\u00f6ht. Progression ist der Schl\u00fcssel.\n\n\u2022 **Ihre Schmerzen verschlechtern sich trotz steigender Aktivit\u00e4t** \u2014 Manchmal braucht das Nervensystem bei chronischen Schmerzen Zeit, sich anzupassen. Wenn die Verschlechterung anh\u00e4lt, sollten Sie einen Physiotherapeuten in Eupen konsultieren, der Ihr Programm anpassen kann.\n\n\u2022 **Ihre Uhr zeigt wiederholt \u00ab ungew\u00f6hnliche Herzfrequenz \u00bb** \u2014 Lassen Sie das \u00e4rztlich abkl\u00e4ren. Die Erkennung von Herzrhythmusst\u00f6rungen geh\u00f6rt zu den st\u00e4rksten klinisch validierten Funktionen der Smartwatches.",
        fr: "Votre montre connect\u00e9e vous fournit des indices pr\u00e9cieux \u2014 mais elle n\u2019est **pas un m\u00e9decin**. Voici les situations o\u00f9 les donn\u00e9es doivent vous inciter \u00e0 agir :\n\n\u2022 **Votre VFC/HRV baisse plusieurs jours de suite** et votre fr\u00e9quence cardiaque au repos augmente simultan\u00e9ment \u2014 cela peut indiquer un stress excessif, un mauvais sommeil ou un d\u00e9but d\u2019inflammation. R\u00e9duisez l\u2019intensit\u00e9.\n\n\u2022 **Vous avez brusquement doubl\u00e9 ou tripl\u00e9 votre activit\u00e9** \u2014 La recherche montre qu\u2019un ratio sup\u00e9rieur \u00e0 1,5 entre votre charge de la semaine en cours et la moyenne des 4 derni\u00e8res semaines augmente significativement le risque de pouss\u00e9e douloureuse. La progressivit\u00e9 est la cl\u00e9.\n\n\u2022 **Vos douleurs s\u2019aggravent malgr\u00e9 une activit\u00e9 croissante** \u2014 Parfois, le syst\u00e8me nerveux a besoin de temps pour s\u2019adapter en cas de douleurs chroniques. Si la d\u00e9gradation persiste, consultez un kin\u00e9sith\u00e9rapeute \u00e0 Eupen qui pourra ajuster votre programme.\n\n\u2022 **Votre montre signale des \u00ab fr\u00e9quences cardiaques inhabituelles \u00bb** \u2014 Faites-le v\u00e9rifier par un m\u00e9decin. La d\u00e9tection des troubles du rythme cardiaque est l\u2019une des fonctions les mieux valid\u00e9es cliniquement des montres connect\u00e9es.",
        en: "Your smartwatch provides valuable clues \u2014 but it is **not a doctor**. Here are situations where the data should prompt you to act:\n\n\u2022 **Your HRV drops for several days running** while your resting heart rate rises simultaneously \u2014 this may indicate excessive stress, poor sleep or early inflammation. Reduce your intensity.\n\n\u2022 **You\u2019ve suddenly doubled or tripled your activity** \u2014 Research shows that a ratio above 1.5 between your current week\u2019s load and the average of the past 4 weeks significantly increases the risk of a pain flare-up. Gradual progression is key.\n\n\u2022 **Your pain worsens despite increasing activity** \u2014 Sometimes the nervous system needs time to adapt with chronic pain. If the worsening persists, consult a physiotherapist in Eupen who can adjust your programme.\n\n\u2022 **Your watch repeatedly flags \"unusual heart rate\"** \u2014 Have it checked by a doctor. Detecting heart rhythm disorders is one of the strongest clinically validated smartwatch features.",
        nl: "Uw smartwatch levert waardevolle aanwijzingen \u2014 maar het is **geen arts**. Hier zijn situaties waarin de gegevens u tot actie moeten aanzetten:\n\n\u2022 **Uw HRV daalt meerdere dagen achtereen** en uw rustpols stijgt gelijktijdig \u2014 dit kan wijzen op overmatige stress, slechte slaap of beginnende ontsteking. Verminder de intensiteit.\n\n\u2022 **U hebt uw activiteit plots verdubbeld of verdrievoudigd** \u2014 Onderzoek toont aan dat een ratio boven 1,5 tussen uw huidige weekbelasting en het gemiddelde van de afgelopen 4 weken het risico op een pijnopstoot aanzienlijk verhoogt. Geleidelijke progressie is de sleutel.\n\n\u2022 **Uw pijn verergert ondanks toenemende activiteit** \u2014 Soms heeft het zenuwstelsel bij chronische pijn tijd nodig om zich aan te passen. Als de verslechtering aanhoudt, raadpleeg een fysiotherapeut in Eupen die uw programma kan aanpassen.\n\n\u2022 **Uw horloge meldt herhaaldelijk \u00ab ongebruikelijke hartslag \u00bb** \u2014 Laat dit door een arts controleren. Het detecteren van hartritmestoornissen is een van de sterkst klinisch gevalideerde functies van smartwatches.",
        tr: "Ak\u0131ll\u0131 saatiniz de\u011ferli ipu\u00e7lar\u0131 sa\u011flar \u2014 ama **doktor de\u011fildir**. \u0130\u015fte verilerin sizi harekete ge\u00e7irmesi gereken durumlar:\n\n\u2022 **HRV\u2019niz birka\u00e7 g\u00fcn \u00fcst \u00fcste d\u00fc\u015f\u00fcyorsa** ve dinlenme kalp at\u0131\u015f h\u0131z\u0131n\u0131z ayn\u0131 anda y\u00fckseliyorsa \u2014 bu a\u015f\u0131r\u0131 stres, k\u00f6t\u00fc uyku veya ba\u015flang\u0131\u00e7 a\u015famas\u0131nda bir iltihap g\u00f6stergesi olabilir. Yo\u011funlu\u011fu azalt\u0131n.\n\n\u2022 **Aktivitenizi aniden ikiye veya \u00fc\u00e7e katlad\u0131ysan\u0131z** \u2014 Ara\u015ft\u0131rmalar, mevcut hafta y\u00fck\u00fcn\u00fcz ile son 4 haftan\u0131n ortalamas\u0131 aras\u0131ndaki oran\u0131n 1,5\u2019i a\u015fmas\u0131n\u0131n a\u011fr\u0131 alevlenmesi riskini \u00f6nemli \u00f6l\u00e7\u00fcde art\u0131rd\u0131\u011f\u0131n\u0131 g\u00f6stermektedir. Kademeli ilerleme anahtard\u0131r.\n\n\u2022 **Artan aktiviteye ra\u011fmen a\u011fr\u0131n\u0131z k\u00f6t\u00fcle\u015fiyorsa** \u2014 Bazen sinir sistemi kronik a\u011fr\u0131da uyum sa\u011flamak i\u00e7in zamana ihtiya\u00e7 duyar. K\u00f6t\u00fcle\u015fme devam ederse, program\u0131n\u0131z\u0131 ayarlayabilecek Eupen\u2019deki bir fizyoterapiste dan\u0131\u015f\u0131n.\n\n\u2022 **Saatiniz tekrar tekrar \u00ab ola\u011fand\u0131\u015f\u0131 kalp at\u0131\u015f h\u0131z\u0131 \u00bb bildiriyorsa** \u2014 Bir doktora kontrol ettirin. Kalp ritmi bozukluklar\u0131n\u0131n tespiti, ak\u0131ll\u0131 saatlerin en g\u00fc\u00e7l\u00fc klinik olarak do\u011frulanm\u0131\u015f i\u015flevlerinden biridir.",
        ar: "\u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u062a\u0632\u0648\u062f\u0643\u0645 \u0628\u0645\u0624\u0634\u0631\u0627\u062a \u0642\u064a\u0645\u0629 \u2014 \u0644\u0643\u0646\u0647\u0627 **\u0644\u064a\u0633\u062a \u0637\u0628\u064a\u0628\u0627\u064b**. \u0625\u0644\u064a\u0643\u0645 \u0627\u0644\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u062c\u0628 \u0623\u0646 \u062a\u062f\u0641\u0639\u0643\u0645 \u0641\u064a\u0647\u0627 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u062a\u0635\u0631\u0641:\n\n\u2022 **\u0627\u0646\u062e\u0641\u0627\u0636 HRV \u0644\u0639\u062f\u0629 \u0623\u064a\u0627\u0645 \u0645\u062a\u062a\u0627\u0644\u064a\u0629** \u0645\u0639 \u0627\u0631\u062a\u0641\u0627\u0639 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u0631\u0627\u062d\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u2014 \u0642\u062f \u064a\u0634\u064a\u0631 \u0630\u0644\u0643 \u0625\u0644\u0649 \u0625\u062c\u0647\u0627\u062f \u0645\u0641\u0631\u0637 \u0623\u0648 \u0646\u0648\u0645 \u0633\u064a\u0626 \u0623\u0648 \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u062a\u0647\u0627\u0628. \u062e\u0641\u0641\u0648\u0627 \u0645\u0646 \u0627\u0644\u0634\u062f\u0629.\n\n\u2022 **\u0636\u0627\u0639\u0641\u062a\u0645 \u0646\u0634\u0627\u0637\u0643\u0645 \u0641\u062c\u0623\u0629** \u2014 \u062a\u064f\u0638\u0647\u0631 \u0627\u0644\u0623\u0628\u062d\u0627\u062b \u0623\u0646 \u0646\u0633\u0628\u0629 \u0623\u0639\u0644\u0649 \u0645\u0646 1.5 \u0628\u064a\u0646 \u062d\u0645\u0644 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629 \u062a\u0632\u064a\u062f \u0628\u0634\u0643\u0644 \u0643\u0628\u064a\u0631 \u0645\u0646 \u062e\u0637\u0631 \u0646\u0648\u0628\u0629 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u062a\u062f\u0631\u062c \u0647\u0648 \u0627\u0644\u0645\u0641\u062a\u0627\u062d.\n\n\u2022 **\u0623\u0644\u0645\u0643\u0645 \u064a\u062a\u0641\u0627\u0642\u0645 \u0631\u063a\u0645 \u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0646\u0634\u0627\u0637** \u2014 \u0623\u062d\u064a\u0627\u0646\u0627\u064b \u064a\u062d\u062a\u0627\u062c \u0627\u0644\u062c\u0647\u0627\u0632 \u0627\u0644\u0639\u0635\u0628\u064a \u0648\u0642\u062a\u0627\u064b \u0644\u0644\u062a\u0643\u064a\u0641 \u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0645\u0632\u0645\u0646. \u0625\u0630\u0627 \u0627\u0633\u062a\u0645\u0631 \u0627\u0644\u062a\u062f\u0647\u0648\u0631\u060c \u0627\u0633\u062a\u0634\u064a\u0631\u0648\u0627 \u0645\u0639\u0627\u0644\u062c\u0627\u064b \u0637\u0628\u064a\u0639\u064a\u0627\u064b \u0641\u064a \u0623\u0648\u0628\u0646 \u064a\u0645\u0643\u0646\u0647 \u062a\u0639\u062f\u064a\u0644 \u0628\u0631\u0646\u0627\u0645\u062c\u0643\u0645.\n\n\u2022 **\u0633\u0627\u0639\u062a\u0643\u0645 \u062a\u0646\u0628\u0647 \u0628\u0634\u0643\u0644 \u0645\u062a\u0643\u0631\u0631 \u0639\u0646 \u00ab \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0642\u0644\u0628 \u063a\u064a\u0631 \u0639\u0627\u062f\u064a \u00bb** \u2014 \u0627\u0639\u0631\u0636\u0648\u0627 \u0630\u0644\u0643 \u0639\u0644\u0649 \u0637\u0628\u064a\u0628. \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0646\u0638\u0645 \u0627\u0644\u0642\u0644\u0628 \u0647\u0648 \u0645\u0646 \u0623\u0642\u0648\u0649 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u062b\u0628\u062a\u0629 \u0633\u0631\u064a\u0631\u064a\u0627\u064b \u0641\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0630\u0643\u064a\u0629.",
        pl: "Tw\u00f3j smartwatch dostarcza cennych wskaz\u00f3wek \u2014 ale **nie jest lekarzem**. Oto sytuacje, w kt\u00f3rych dane powinny Ci\u0119 sk\u0142oni\u0107 do dzia\u0142ania:\n\n\u2022 **Twoje HRV spada przez kilka dni z rz\u0119du**, a t\u0119tno spoczynkowe jednocze\u015bnie ro\u015bnie \u2014 mo\u017ce to wskazywa\u0107 na nadmierny stres, z\u0142y sen lub pocz\u0105tek stanu zapalnego. Zmniejsz intensywno\u015b\u0107.\n\n\u2022 **Nagle podwoi\u0142e\u015b lub potroi\u0142e\u015b swoj\u0105 aktywno\u015b\u0107** \u2014 Badania pokazuj\u0105, \u017ce stosunek powy\u017cej 1,5 mi\u0119dzy obci\u0105\u017ceniem bie\u017c\u0105cego tygodnia a \u015bredni\u0105 z ostatnich 4 tygodni znacz\u0105co zwi\u0119ksza ryzyko zaostrzenia b\u00f3lu. Stopniowa progresja jest kluczem.\n\n\u2022 **B\u00f3l si\u0119 pogarsza mimo rosn\u0105cej aktywno\u015bci** \u2014 Czasami uk\u0142ad nerwowy potrzebuje czasu na adaptacj\u0119 w przypadku b\u00f3lu przewlek\u0142ego. Je\u015bli pogorszenie si\u0119 utrzymuje, skonsultuj si\u0119 z fizjoterapeut\u0105 w Eupen, kt\u00f3ry dostosuje Tw\u00f3j program.\n\n\u2022 **Zegarek wielokrotnie sygnalizuje \u00ab nietypowe t\u0119tno \u00bb** \u2014 Skonsultuj to z lekarzem. Wykrywanie zaburze\u0144 rytmu serca to jedna z najsilniej klinicznie zwalidowanych funkcji smartwatchy.",
      },
    },
    {
      heading: {
        de: "Bei Praxis Loten \u2014 Technologie im Dienst der Therapie",
        fr: "Au cabinet Praxis Loten \u2014 La technologie au service de la th\u00e9rapie",
        en: "At Praxis Loten \u2014 Technology serving therapy",
        nl: "Bij Praxis Loten \u2014 Technologie ten dienste van therapie",
        tr: "Praxis Loten\u2019de \u2014 Terapinin hizmetinde teknoloji",
        ar: "\u0641\u064a \u0639\u064a\u0627\u062f\u0629 Praxis Loten \u2014 \u0627\u0644\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0641\u064a \u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0644\u0627\u062c",
        pl: "W Praxis Loten \u2014 Technologia w s\u0142u\u017cbie terapii",
      },
      body: {
        de: "In unserer Praxis in Eupen integrieren wir die Daten Ihrer Smartwatch aktiv in Ihre Therapie. So nutzen wir sie konkret:\n\n**Objektive Ausgangslage** \u2014 Bei Ihrem ersten Termin k\u00f6nnen wir Ihre durchschnittliche Schrittzahl, Ihren Schlafrhythmus und Ihre Erholungswerte der letzten Wochen analysieren. So erhalten wir ein realistisches Bild Ihres Alltags \u2014 jenseits von Erinnerungsverzerrungen.\n\n**Individuell angepasste Ziele** \u2014 Kein \u00ab 10 000 Schritte f\u00fcr alle \u00bb. Wir berechnen Ihre pers\u00f6nliche Progression basierend auf Ihren echten Daten und den wissenschaftlichen Schwellenwerten.\n\n**Belastungssteuerung** \u2014 Bei Sportlern und aktiven Patienten nutzen wir das Verh\u00e4ltnis zwischen aktueller und chronischer Belastung, um R\u00fcckf\u00e4lle zu vermeiden und die Rehabilitation sicher zu gestalten.\n\n**Gemeinsamer Fortschritt** \u2014 Ihre Daten verwandeln die Konsultation: Statt \u00ab Wie f\u00fchlen Sie sich? \u00bb k\u00f6nnen wir gemeinsam \u00ab Schauen wir, was sich ver\u00e4ndert hat \u00bb sagen. Das st\u00e4rkt Ihr Vertrauen in Ihren eigenen K\u00f6rper.\n\nBringen Sie Ihre Smartwatch gerne zu Ihrem n\u00e4chsten Termin bei Praxis Loten mit \u2014 parmi de nombreuses M\u00f6glichkeiten, wie wir Sie begleiten k\u00f6nnen.",
        fr: "Dans notre cabinet \u00e0 Eupen, nous int\u00e9grons activement les donn\u00e9es de votre montre connect\u00e9e dans votre th\u00e9rapie. Voici comment nous les utilisons concr\u00e8tement :\n\n**Bilan objectif** \u2014 Lors de votre premier rendez-vous, nous pouvons analyser votre nombre de pas moyen, votre rythme de sommeil et vos indices de r\u00e9cup\u00e9ration des derni\u00e8res semaines. Nous obtenons ainsi un portrait r\u00e9aliste de votre quotidien \u2014 au-del\u00e0 des biais de m\u00e9moire.\n\n**Objectifs personnalis\u00e9s** \u2014 Pas de \u00ab 10 000 pas pour tout le monde \u00bb. Nous calculons votre progression individuelle sur la base de vos donn\u00e9es r\u00e9elles et des seuils scientifiques.\n\n**Gestion de la charge** \u2014 Chez les sportifs et les patients actifs, nous utilisons le rapport entre charge actuelle et charge chronique pour \u00e9viter les rechutes et s\u00e9curiser la r\u00e9\u00e9ducation.\n\n**Progression partag\u00e9e** \u2014 Vos donn\u00e9es transforment la consultation : au lieu de \u00ab Comment vous sentez-vous ? \u00bb, nous pouvons dire ensemble \u00ab Regardons ce qui a chang\u00e9 \u00bb. Cela renforce votre confiance en votre propre corps.\n\nApportez votre montre connect\u00e9e lors de votre prochain rendez-vous chez Praxis Loten \u2014 parmi de nombreuses fa\u00e7ons dont nous pouvons vous accompagner.",
        en: "At our practice in Eupen, we actively integrate your smartwatch data into your therapy. Here\u2019s how we use it:\n\n**Objective baseline** \u2014 At your first appointment, we can analyse your average step count, sleep rhythm and recovery indicators from recent weeks. This gives us a realistic picture of your daily life \u2014 beyond recall biases.\n\n**Personalised goals** \u2014 No \"10,000 steps for everyone\". We calculate your individual progression based on your real data and scientific thresholds.\n\n**Load management** \u2014 For athletes and active patients, we use the ratio between current and chronic workload to prevent setbacks and ensure safe rehabilitation.\n\n**Shared progress** \u2014 Your data transforms the consultation: instead of \"How do you feel?\", we can say together \"Let\u2019s look at what\u2019s changed\". This strengthens your trust in your own body.\n\nBring your smartwatch to your next appointment at Praxis Loten \u2014 among many ways we can support you.",
        nl: "In onze praktijk in Eupen integreren we actief de gegevens van uw smartwatch in uw therapie. Zo gebruiken we ze concreet:\n\n**Objectieve nulmeting** \u2014 Bij uw eerste afspraak kunnen we uw gemiddeld aantal stappen, slaapritme en herstelindicatoren van de afgelopen weken analyseren. Zo krijgen we een realistisch beeld van uw dagelijks leven \u2014 voorbij geheugenvertekening.\n\n**Gepersonaliseerde doelen** \u2014 Geen \u00ab 10.000 stappen voor iedereen \u00bb. We berekenen uw individuele progressie op basis van uw echte gegevens en wetenschappelijke drempels.\n\n**Belastingsbeheer** \u2014 Bij sporters en actieve pati\u00ebnten gebruiken we de verhouding tussen huidige en chronische belasting om terugvallen te voorkomen en veilige revalidatie te garanderen.\n\n**Gedeelde vooruitgang** \u2014 Uw gegevens transformeren het consult: in plaats van \u00ab Hoe voelt u zich? \u00bb kunnen we samen zeggen \u00ab Laten we kijken wat er veranderd is \u00bb. Dit versterkt uw vertrouwen in uw eigen lichaam.\n\nBreng uw smartwatch mee naar uw volgende afspraak bij Praxis Loten \u2014 onder de vele manieren waarop we u kunnen begeleiden.",
        tr: "Eupen\u2019deki klini\u011fimizde ak\u0131ll\u0131 saat verilerinizi tedavinize aktif olarak entegre ediyoruz. \u0130\u015fte somut olarak nas\u0131l kulland\u0131\u011f\u0131m\u0131z:\n\n**Objektif ba\u015flang\u0131\u00e7 noktas\u0131** \u2014 \u0130lk randevunuzda son haftalardaki ortalama ad\u0131m say\u0131n\u0131z\u0131, uyku ritminizi ve toparlanma g\u00f6stergelerinizi analiz edebiliriz. Bu, g\u00fcnl\u00fck ya\u015fam\u0131n\u0131z\u0131n ger\u00e7ek\u00e7i bir resmini verir \u2014 haf\u0131za yanl\u0131l\u0131klar\u0131n\u0131n \u00f6tesinde.\n\n**Ki\u015fiselle\u015ftirilmi\u015f hedefler** \u2014 \u00ab Herkes i\u00e7in 10.000 ad\u0131m \u00bb yok. Ger\u00e7ek verilerinize ve bilimsel e\u015fiklere dayal\u0131 olarak bireysel ilerlemenizi hesapl\u0131yoruz.\n\n**Y\u00fck y\u00f6netimi** \u2014 Sporcular ve aktif hastalar i\u00e7in mevcut ve kronik i\u015f y\u00fck\u00fc aras\u0131ndaki oran\u0131 kullanarak geri d\u00f6n\u00fc\u015fleri \u00f6nl\u00fcyor ve g\u00fcvenli rehabilitasyon sa\u011fl\u0131yoruz.\n\n**Payla\u015f\u0131lan ilerleme** \u2014 Verileriniz kons\u00fcltasyonu d\u00f6n\u00fc\u015ft\u00fcr\u00fcr: \u00ab Nas\u0131l hissediyorsunuz? \u00bb yerine birlikte \u00ab Neyin de\u011fi\u015fti\u011fine bakal\u0131m \u00bb diyebiliriz. Bu, kendi v\u00fccudunuza olan g\u00fcveninizi g\u00fc\u00e7lendirir.\n\nBir sonraki Praxis Loten randevunuza ak\u0131ll\u0131 saatinizi getirin \u2014 size e\u015flik edebilece\u011fimiz pek \u00e7ok yoldan biri olarak.",
        ar: "\u0641\u064a \u0639\u064a\u0627\u062f\u062a\u0646\u0627 \u0641\u064a \u0623\u0648\u0628\u0646\u060c \u0646\u062f\u0645\u062c \u0628\u064a\u0627\u0646\u0627\u062a \u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0628\u0634\u0643\u0644 \u0641\u0639\u0627\u0644 \u0641\u064a \u0639\u0644\u0627\u062c\u0643\u0645. \u0625\u0644\u064a\u0643\u0645 \u0643\u064a\u0641 \u0646\u0633\u062a\u062e\u062f\u0645\u0647\u0627 \u0628\u0634\u0643\u0644 \u0645\u0644\u0645\u0648\u0633:\n\n**\u062a\u0642\u064a\u064a\u0645 \u0645\u0648\u0636\u0648\u0639\u064a** \u2014 \u0641\u064a \u0645\u0648\u0639\u062f\u0643\u0645 \u0627\u0644\u0623\u0648\u0644\u060c \u064a\u0645\u0643\u0646\u0646\u0627 \u062a\u062d\u0644\u064a\u0644 \u0645\u062a\u0648\u0633\u0637 \u0639\u062f\u062f \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u0648\u0646\u0645\u0637 \u0646\u0648\u0645\u0643\u0645 \u0648\u0645\u0624\u0634\u0631\u0627\u062a \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u0645\u0646 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u062e\u064a\u0631\u0629. \u0647\u0643\u0630\u0627 \u0646\u062d\u0635\u0644 \u0639\u0644\u0649 \u0635\u0648\u0631\u0629 \u0648\u0627\u0642\u0639\u064a\u0629 \u0644\u062d\u064a\u0627\u062a\u0643\u0645 \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u2014 \u0628\u0639\u064a\u062f\u0627\u064b \u0639\u0646 \u062a\u062d\u064a\u0632\u0627\u062a \u0627\u0644\u0630\u0627\u0643\u0631\u0629.\n\n**\u0623\u0647\u062f\u0627\u0641 \u0645\u062e\u0635\u0635\u0629** \u2014 \u0644\u0627 \u00ab 10,000 \u062e\u0637\u0648\u0629 \u0644\u0644\u062c\u0645\u064a\u0639 \u00bb. \u0646\u062d\u0633\u0628 \u062a\u0642\u062f\u0645\u0643\u0645 \u0627\u0644\u0641\u0631\u062f\u064a \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u0627\u0644\u0639\u062a\u0628\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629.\n\n**\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0650\u0645\u0644** \u2014 \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0631\u064a\u0627\u0636\u064a\u064a\u0646 \u0648\u0627\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0646\u0634\u0637\u064a\u0646\u060c \u0646\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0633\u0628\u0629 \u0628\u064a\u0646 \u0627\u0644\u062d\u0645\u0644 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0627\u0644\u062d\u0645\u0644 \u0627\u0644\u0645\u0632\u0645\u0646 \u0644\u062a\u062c\u0646\u0628 \u0627\u0644\u0627\u0646\u062a\u0643\u0627\u0633\u0627\u062a \u0648\u0636\u0645\u0627\u0646 \u0625\u0639\u0627\u062f\u0629 \u062a\u0623\u0647\u064a\u0644 \u0622\u0645\u0646\u0629.\n\n**\u062a\u0642\u062f\u0645 \u0645\u0634\u062a\u0631\u0643** \u2014 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u062a\u062d\u0648\u0644 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629: \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u00ab \u0643\u064a\u0641 \u062a\u0634\u0639\u0631\u0648\u0646\u061f \u00bb\u060c \u064a\u0645\u0643\u0646\u0646\u0627 \u0623\u0646 \u0646\u0642\u0648\u0644 \u0645\u0639\u0627\u064b \u00ab \u0644\u0646\u0631\u064e \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u063a\u064a\u0631 \u00bb. \u0647\u0630\u0627 \u064a\u0639\u0632\u0632 \u062b\u0642\u062a\u0643\u0645 \u0628\u0623\u062c\u0633\u0627\u0645\u0643\u0645.\n\n\u0623\u062d\u0636\u0631\u0648\u0627 \u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0625\u0644\u0649 \u0645\u0648\u0639\u062f\u0643\u0645 \u0627\u0644\u0642\u0627\u062f\u0645 \u0641\u064a Praxis Loten \u2014 \u0645\u0646 \u0628\u064a\u0646 \u0637\u0631\u0642 \u0639\u062f\u064a\u062f\u0629 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0631\u0627\u0641\u0642\u062a\u0643\u0645 \u0628\u0647\u0627.",
        pl: "W naszym gabinecie w Eupen aktywnie integrujemy dane ze smartwatcha w Twoj\u0105 terapi\u0119. Oto jak je konkretnie wykorzystujemy:\n\n**Obiektywny punkt wyj\u015bcia** \u2014 Na pierwszej wizycie mo\u017cemy przeanalizowa\u0107 Twoj\u0105 \u015bredni\u0105 liczb\u0119 krok\u00f3w, rytm snu i wska\u017aniki regeneracji z ostatnich tygodni. Daje to realistyczny obraz Twojego codziennego \u017cycia \u2014 bez zniekszta\u0142ce\u0144 pami\u0119ciowych.\n\n**Spersonalizowane cele** \u2014 \u017badnych \u00ab 10 000 krok\u00f3w dla wszystkich \u00bb. Obliczamy Twoj\u0105 indywidualn\u0105 progresj\u0119 na podstawie rzeczywistych danych i prog\u00f3w naukowych.\n\n**Zarz\u0105dzanie obci\u0105\u017ceniem** \u2014 U sportowc\u00f3w i aktywnych pacjent\u00f3w stosujemy stosunek mi\u0119dzy bie\u017c\u0105cym a przewlek\u0142ym obci\u0105\u017ceniem, aby zapobiega\u0107 nawrotom i zapewnia\u0107 bezpieczn\u0105 rehabilitacj\u0119.\n\n**Wsp\u00f3lny post\u0119p** \u2014 Twoje dane przekszta\u0142caj\u0105 konsultacj\u0119: zamiast \u00ab Jak si\u0119 czujesz? \u00bb, mo\u017cemy wsp\u00f3lnie powiedzie\u0107 \u00ab Zobaczmy, co si\u0119 zmieni\u0142o \u00bb. To wzmacnia Twoje zaufanie do w\u0142asnego cia\u0142a.\n\nPrzynie\u015b smartwatcha na nast\u0119pn\u0105 wizyt\u0119 w Praxis Loten \u2014 to jedna z wielu form, w jakich mo\u017cemy Ci towarzyszy\u0107.",
      },
    },
  ],
  keyPoints: {
    de: ["Die Smartwatch ist kein Medikament \u2014 sie ist Ihr Kompass zur Bewegung", "80 Minuten Gehen pro Tag senken das Risiko chronischer R\u00fcckenschmerzen um 13 %", "Vergleichen Sie sich nur mit sich selbst \u2014 nie mit anderen oder einer Norm", "Nutzen Sie Ihre VFC/HRV als t\u00e4glichen Erholungsindikator", "Bringen Sie Ihre Smartwatch zum Physiotherapeuten \u2014 f\u00fcr datengest\u00fctzte Therapie"],
    fr: ["La montre connect\u00e9e n\u2019est pas un m\u00e9dicament \u2014 c\u2019est votre boussole vers le mouvement", "80 minutes de marche par jour r\u00e9duisent le risque de lombalgie chronique de 13 %", "Comparez-vous uniquement \u00e0 vous-m\u00eame \u2014 jamais aux autres ni \u00e0 une norme", "Utilisez votre VFC/HRV comme indicateur quotidien de r\u00e9cup\u00e9ration", "Apportez votre montre connect\u00e9e chez le kin\u00e9sith\u00e9rapeute \u2014 pour une th\u00e9rapie guid\u00e9e par les donn\u00e9es"],
    en: ["Your smartwatch is not a medication \u2014 it\u2019s your compass to movement", "80 minutes of walking per day reduces chronic low back pain risk by 13%", "Compare yourself only to yourself \u2014 never to others or a standard", "Use your HRV as a daily recovery indicator", "Bring your smartwatch to your physiotherapist \u2014 for data-guided therapy"],
    nl: ["Uw smartwatch is geen medicijn \u2014 het is uw kompas naar beweging", "80 minuten wandelen per dag verlaagt het risico op chronische lage rugpijn met 13%", "Vergelijk uzelf alleen met uzelf \u2014 nooit met anderen of een norm", "Gebruik uw HRV als dagelijkse herstelindicator", "Breng uw smartwatch mee naar de fysiotherapeut \u2014 voor datagestuurde therapie"],
    tr: ["Ak\u0131ll\u0131 saatiniz ila\u00e7 de\u011fildir \u2014 harekete y\u00f6nlendiren pusulan\u0131zd\u0131r", "G\u00fcnde 80 dakika y\u00fcr\u00fcmek kronik bel a\u011fr\u0131s\u0131 riskini %13 azalt\u0131r", "Kendinizi yaln\u0131zca kendinizle kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 ba\u015fkalar\u0131yla veya bir normla asla", "HRV\u2019nizi g\u00fcnl\u00fck toparlanma g\u00f6stergesi olarak kullan\u0131n", "Ak\u0131ll\u0131 saatinizi fizyoterapistinize g\u00f6t\u00fcr\u00fcn \u2014 veriye dayal\u0131 terapi i\u00e7in"],
    ar: ["\u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0644\u064a\u0633\u062a \u062f\u0648\u0627\u0621\u064b \u2014 \u0625\u0646\u0647\u0627 \u0628\u0648\u0635\u0644\u062a\u0643\u0645 \u0646\u062d\u0648 \u0627\u0644\u062d\u0631\u0643\u0629", "80 \u062f\u0642\u064a\u0642\u0629 \u0645\u0634\u064a \u064a\u0648\u0645\u064a\u0627\u064b \u062a\u0642\u0644\u0644 \u062e\u0637\u0631 \u0622\u0644\u0627\u0645 \u0623\u0633\u0641\u0644 \u0627\u0644\u0638\u0647\u0631 \u0627\u0644\u0645\u0632\u0645\u0646\u0629 \u0628\u0646\u0633\u0628\u0629 13%", "\u0642\u0627\u0631\u0646\u0648\u0627 \u0623\u0646\u0641\u0633\u0643\u0645 \u0628\u0623\u0646\u0641\u0633\u0643\u0645 \u0641\u0642\u0637 \u2014 \u0644\u064a\u0633 \u0628\u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u0623\u0648 \u0628\u0645\u0639\u064a\u0627\u0631", "\u0627\u0633\u062a\u062e\u062f\u0645\u0648\u0627 HRV \u0643\u0645\u0624\u0634\u0631 \u064a\u0648\u0645\u064a \u0644\u0644\u062a\u0639\u0627\u0641\u064a", "\u0623\u062d\u0636\u0631\u0648\u0627 \u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0639\u0627\u0644\u062c \u0627\u0644\u0637\u0628\u064a\u0639\u064a \u2014 \u0644\u0639\u0644\u0627\u062c \u0645\u0648\u062c\u0647 \u0628\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a"],
    pl: ["Tw\u00f3j smartwatch nie jest lekiem \u2014 jest kompasem prowadz\u0105cym do ruchu", "80 minut spaceru dziennie zmniejsza ryzyko przewlek\u0142ego b\u00f3lu plec\u00f3w o 13%", "Por\u00f3wnuj si\u0119 tylko z sob\u0105 \u2014 nigdy z innymi ani z norm\u0105", "U\u017cywaj HRV jako codziennego wska\u017anika regeneracji", "Przynie\u015b smartwatcha do fizjoterapeuty \u2014 na terapi\u0119 opart\u0105 na danych"],
  },
  ctaText: {
    de: "Sie haben eine Smartwatch und chronische Schmerzen? Bringen Sie Ihre Daten mit \u2014 wir helfen Ihnen, sie zu verstehen und in Ihre Therapie zu integrieren. Vereinbaren Sie einen Termin bei Praxis Loten in Eupen.",
    fr: "Vous avez une montre connect\u00e9e et des douleurs chroniques ? Apportez vos donn\u00e9es \u2014 nous vous aiderons \u00e0 les comprendre et \u00e0 les int\u00e9grer dans votre th\u00e9rapie. Prenez rendez-vous chez Praxis Loten \u00e0 Eupen.",
    en: "Have a smartwatch and chronic pain? Bring your data \u2014 we\u2019ll help you understand it and integrate it into your therapy. Book an appointment at Praxis Loten in Eupen.",
    nl: "Hebt u een smartwatch en chronische pijn? Breng uw gegevens mee \u2014 wij helpen u ze te begrijpen en in uw therapie te integreren. Maak een afspraak bij Praxis Loten in Eupen.",
    tr: "Ak\u0131ll\u0131 saatiniz ve kronik a\u011fr\u0131n\u0131z m\u0131 var? Verilerinizi getirin \u2014 bunlar\u0131 anlaman\u0131za ve tedavinize entegre etmenize yard\u0131mc\u0131 olaca\u011f\u0131z. Eupen\u2019deki Praxis Loten\u2019de randevu al\u0131n.",
    ar: "\u0644\u062f\u064a\u0643\u0645 \u0633\u0627\u0639\u0629 \u0630\u0643\u064a\u0629 \u0648\u0622\u0644\u0627\u0645 \u0645\u0632\u0645\u0646\u0629\u061f \u0623\u062d\u0636\u0631\u0648\u0627 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u2014 \u0633\u0646\u0633\u0627\u0639\u062f\u0643\u0645 \u0639\u0644\u0649 \u0641\u0647\u0645\u0647\u0627 \u0648\u062f\u0645\u062c\u0647\u0627 \u0641\u064a \u0639\u0644\u0627\u062c\u0643\u0645. \u0627\u062d\u062c\u0632\u0648\u0627 \u0645\u0648\u0639\u062f\u0627\u064b \u0641\u064a Praxis Loten \u0641\u064a \u0623\u0648\u0628\u0646.",
    pl: "Masz smartwatcha i b\u00f3l przewlek\u0142y? Przynie\u015b swoje dane \u2014 pomo\u017cemy Ci je zrozumie\u0107 i zintegrowa\u0107 z terapi\u0105. Um\u00f3w wizyt\u0119 w Praxis Loten w Eupen.",
  },
  bibliography: [
    "Yerramalli et al. Volume and Intensity of Walking and Risk of Chronic Low Back Pain. Med Sci Sports Exerc. 2024;56(2):260-267.",
    "Amorim AB et al. Can Wearable Devices Promote Physical Activity and Reduce Pain in People with Chronic Musculoskeletal Conditions? A Systematic Review. J Clin Med. 2023;14(3):1003.",
    "Lima LV et al. Exercise-Induced Hypoalgesia: Cellular and Molecular Mechanisms. Cells. 2022;15(10):858.",
    "Giles D et al. Pedometer-driven Walking for Chronic Low Back Pain: A Feasibility Randomized Controlled Trial. Clin Rehabil. 2017;31(4):480-489.",
    "D\u00fcking P et al. Validity of Heart Rate Variability Measured with Apple Watch Series. Sensors. 2022;22(18):6784.",
  ],
  disclaimer: {
    de: "Dieser Artikel dient ausschlie\u00dflich der Information und ersetzt keine \u00e4rztliche oder physiotherapeutische Beratung. Bei anhaltenden oder sich verschlechternden Beschwerden wenden Sie sich bitte an einen Gesundheitsexperten.",
    fr: "Cet article a une vocation purement informative et ne remplace pas un avis m\u00e9dical ou kin\u00e9sith\u00e9rapeutique. En cas de douleurs persistantes ou qui s\u2019aggravent, consultez un professionnel de sant\u00e9.",
    en: "This article is for informational purposes only and does not replace medical or physiotherapy advice. If pain persists or worsens, consult a healthcare professional.",
    nl: "Dit artikel is puur informatief en vervangt geen medisch of fysiotherapeutisch advies. Raadpleeg bij aanhoudende of verergerende klachten een zorgprofessional.",
    tr: "Bu makale yaln\u0131zca bilgilendirme ama\u00e7l\u0131d\u0131r ve t\u0131bbi veya fizyoterapi tavsiyesinin yerini almaz. A\u011fr\u0131 devam ederse veya k\u00f6t\u00fcle\u015firse bir sa\u011fl\u0131k uzman\u0131na ba\u015fvurun.",
    ar: "\u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644 \u0644\u0623\u063a\u0631\u0627\u0636 \u0625\u0639\u0644\u0627\u0645\u064a\u0629 \u0641\u0642\u0637 \u0648\u0644\u0627 \u064a\u062d\u0644 \u0645\u062d\u0644 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0629 \u0623\u0648 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0637\u0628\u064a\u0639\u064a. \u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0633\u062a\u0645\u0631\u0627\u0631 \u0627\u0644\u0623\u0644\u0645 \u0623\u0648 \u062a\u0641\u0627\u0642\u0645\u0647\u060c \u0627\u0633\u062a\u0634\u064a\u0631\u0648\u0627 \u0645\u062e\u062a\u0635\u0627\u064b \u0635\u062d\u064a\u0627\u064b.",
    pl: "Ten artyku\u0142 ma charakter wy\u0142\u0105cznie informacyjny i nie zast\u0119puje porady lekarskiej ani fizjoterapeutycznej. W przypadku utrzymuj\u0105cego si\u0119 lub nasilaj\u0105cego b\u00f3lu skonsultuj si\u0119 ze specjalist\u0105.",
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

/** Lightweight markdown renderer: **bold**, *italic*, > blockquote, •/- bullets, 1. numbered lists, \n\n paragraphs */
function renderMarkdown(text: string): React.ReactNode {
  const bulletRe = /^[•\-]\s/;
  const orderedRe = /^(?:\*\*)?(\d+)[\.\)]\s*\*?\*?\s*/;

  const blocks = text.split("\n\n");
  const result: React.ReactNode[] = [];

  let i = 0;
  while (i < blocks.length) {
    const trimmed = blocks[i].trim();
    if (!trimmed) { i++; continue; }

    // --- Blockquote ---
    if (trimmed.startsWith(">")) {
      const quoteContent = trimmed
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      result.push(
        <blockquote key={`bq-${i}`} className="border-l-4 border-[#76b82a] pl-4 my-4 italic text-neutral-600">
          {renderInline(quoteContent)}
        </blockquote>
      );
      i++; continue;
    }

    const lines = trimmed.split("\n").map((l) => l.trim());

    // --- Unordered list (all lines start with • or -) ---
    if (lines.length > 1 && lines.every((l) => bulletRe.test(l))) {
      result.push(
        <ul key={`ul-${i}`} className="list-disc list-outside pl-5 my-3 space-y-1.5">
          {lines.map((line, li) => (
            <li key={li} className="text-neutral-700">{renderInline(line.replace(bulletRe, ""))}</li>
          ))}
        </ul>
      );
      i++; continue;
    }

    // --- Ordered list: lines within ONE block separated by \n ---
    if (lines.length > 1 && lines.every((l) => orderedRe.test(l))) {
      result.push(
        <ol key={`ol-${i}`} className="list-decimal list-outside pl-5 my-3 space-y-2">
          {lines.map((line, li) => (
            <li key={li} className="text-neutral-700">{renderInline(line.replace(orderedRe, ""))}</li>
          ))}
        </ol>
      );
      i++; continue;
    }

    // --- Ordered list: consecutive \n\n-separated blocks each starting with a number ---
    if (orderedRe.test(trimmed) && !trimmed.includes("\n")) {
      const items: string[] = [];
      while (i < blocks.length) {
        const cur = blocks[i]?.trim();
        if (!cur) { i++; continue; }
        if (orderedRe.test(cur) && !cur.includes("\n")) {
          items.push(cur.replace(orderedRe, ""));
          i++;
        } else break;
      }
      if (items.length > 0) {
        result.push(
          <ol key={`ol2-${i}`} className="list-decimal list-outside pl-5 my-3 space-y-2">
            {items.map((item, li) => (
              <li key={li} className="text-neutral-700">{renderInline(item)}</li>
            ))}
          </ol>
        );
      }
      continue;
    }

    // --- Regular paragraph ---
    if (trimmed.includes("\n")) {
      // Preserve single \n as line breaks
      const sublines = trimmed.split("\n");
      result.push(
        <span key={`p-${i}`} className="block mb-3 last:mb-0">
          {sublines.map((sl, si) => (
            <span key={si}>{si > 0 && <br />}{renderInline(sl.trim())}</span>
          ))}
        </span>
      );
    } else {
      result.push(
        <span key={`p-${i}`} className="block mb-3 last:mb-0">{renderInline(trimmed)}</span>
      );
    }
    i++;
  }

  return result;
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
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "en") as LangKey;
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
