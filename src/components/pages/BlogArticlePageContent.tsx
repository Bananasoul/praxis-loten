"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Clock, CalendarPlus, CheckCircle2, BookOpen, Info, ListOrdered } from "lucide-react";
import Image from "next/image";
import { InfographicSlot, type InfographicKind } from "@/components/blog/Infographics";
import { getTherapistPortrait } from "@/lib/therapistPortraits";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

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
  "sommeil-recuperation-douleur": {
  "title": {
    "de": "Schlaf: Ihr am meisten unterschätzter Gesundheitspartner",
    "fr": "Le sommeil : votre allié santé le plus sous-estimé",
    "en": "Sleep: your most underrated health ally",
    "nl": "Slaap: uw meest onderschatte gezondheidsbondgenoot",
    "tr": "Uyku: en çok küçümsenen sağlık müttefikiniz",
    "ar": "النوم: حليف صحتك الأكثر استهانةً به",
    "pl": "Sen: twój najbardziej niedoceniany sprzymierzeniec zdrowia",
    "uk": "Сон: Ваш найбільш недооцінений союзник здоров'я",
    "es": "El sueño: su aliado de salud más infravalorado",
    "ku": "Xew: hevalbendê we yê tenduristiyê yê herî kêm tê nirxandin"
  },
  "category": {
    "de": "Gesundheit & Prävention",
    "fr": "Santé & Prévention",
    "en": "Health & Prevention",
    "nl": "Gezondheid & Preventie",
    "tr": "Sağlık & Önleme",
    "ar": "الصحة والوقاية",
    "pl": "Zdrowie i profilaktyka",
    "uk": "Здоров'я та профілактика",
    "es": "Salud y prevención",
    "ku": "Tenduristî û Pêşîgirtin"
  },
  "date": "2026-07-06",
  "readMin": 5,
  "color": "from-[#4f46e5] to-[#312e81]",
  "authorSlug": "philippe-banaszak",
  "authorName": "Philippe Banaszak",
  "intro": {
    "de": "Über Bewegung und Ernährung wird viel gesprochen. Doch es gibt eine dritte Säule, kostenlos und für alle zugänglich, die oft vergessen wird: den Schlaf. Die gute Nachricht — er lässt sich auch am leichtesten verbessern, Schritt für Schritt. In der Praxis Loten in Eupen betrachten wir ihn als echten Partner Ihrer Genesung.",
    "fr": "On parle beaucoup de mouvement et d'alimentation pour rester en forme. Mais il existe un troisième pilier, gratuit et à la portée de tous, souvent négligé : le sommeil. Bonne nouvelle — c'est aussi l'un des plus faciles à améliorer, un petit pas à la fois. Au cabinet Praxis Loten à Eupen, nous le considérons comme un véritable partenaire de votre récupération.",
    "en": "We talk a lot about movement and nutrition to stay healthy. But there is a third pillar, free and within everyone's reach, that is often overlooked: sleep. The good news — it's also one of the easiest to improve, one small step at a time. At Praxis Loten in Eupen, we see it as a genuine partner in your recovery.",
    "nl": "We praten veel over beweging en voeding om gezond te blijven. Maar er is een derde pijler, gratis en voor iedereen bereikbaar, die vaak wordt vergeten: slaap. Het goede nieuws — het is ook een van de gemakkelijkste om te verbeteren, stap voor stap. Bij Praxis Loten in Eupen beschouwen we slaap als een echte partner in uw herstel.",
    "tr": "Sağlıklı kalmak için hareket ve beslenmeden çok söz ederiz. Ama üçüncü bir sütun daha var; ücretsiz ve herkesin ulaşabileceği, ama çoğu zaman göz ardı edilen: uyku. İyi haber — geliştirmesi en kolay olanlardan biri, adım adım. Eupen'deki Praxis Loten'de uykuyu iyileşmenizin gerçek bir ortağı olarak görüyoruz.",
    "ar": "نتحدث كثيرًا عن الحركة والتغذية للحفاظ على الصحة. لكن هناك ركيزة ثالثة، مجانية وفي متناول الجميع، وكثيرًا ما تُهمَل: النوم. والخبر السار أنه أيضًا من أسهل ما يمكن تحسينه، خطوة صغيرة تلو الأخرى. في عيادة براكسيس لوتن في أوبن، نعتبره شريكًا حقيقيًا في تعافيك.",
    "pl": "Dużo mówimy o ruchu i odżywianiu, by zachować zdrowie. Istnieje jednak trzeci filar, darmowy i dostępny dla każdego, często pomijany: sen. Dobra wiadomość — jest też jednym z najłatwiejszych do poprawy, krok po kroku. W Praxis Loten w Eupen traktujemy go jako prawdziwego partnera Twojego powrotu do zdrowia.",
    "uk": "Щоб залишатися у формі, багато говорять про рух і харчування. Але є й третя опора — безкоштовна й доступна кожному, проте часто занедбана: сон. Добра новина — це також одна з тих речей, які найлегше покращити, крок за кроком. У Praxis Loten в Ойпені ми вважаємо його справжнім партнером у Вашому відновленні.",
    "es": "Se habla mucho del movimiento y de la alimentación para mantenerse en forma. Pero existe un tercer pilar, gratuito y al alcance de todos, a menudo olvidado: el sueño. Buena noticia — también es uno de los más fáciles de mejorar, paso a paso. En la consulta Praxis Loten de Eupen lo consideramos un verdadero aliado de su recuperación.",
    "ku": "Ji bo ku em di formê de bimînin, gelek behsa tevger û xwarinê tê kirin. Lê stûneke sêyem jî heye, belaş û di destê her kesî de, ku gelek caran tê paşguhkirin: xew. Nûçeya baş — ew jî yek ji wan tiştan e ku herî hêsan baştir dibe, gav bi gav. Li kabîneya Praxis Loten li Eupenê, em wê wekî hevkarekî rastîn ê başbûna we dibînin."
  },
  "sections": [
    {
      "heading": {
        "de": "Guter Schlaf bedeutet, weniger Schmerz zu spüren",
        "fr": "Bien dormir, c'est ressentir moins la douleur",
        "en": "Sleeping well means feeling less pain",
        "nl": "Goed slapen betekent minder pijn voelen",
        "tr": "İyi uyumak, daha az ağrı hissetmektir",
        "ar": "النوم الجيد يعني الشعور بألم أقل",
        "pl": "Dobry sen to mniej odczuwanego bólu",
        "uk": "Добре спати — означає менше відчувати біль",
        "es": "Dormir bien es sentir menos dolor",
        "ku": "Baş razan tê wê wateyê ku hûn kêmtir êşê hîs dikin"
      },
      "body": {
        "de": "Schlaf und Schmerz stehen in ständigem Austausch. Bei Schlafmangel wird das Nervensystem empfindlicher: derselbe Reiz kann als schmerzhafter empfunden werden — ein Phänomen namens Hyperalgesie, das wissenschaftlich gut belegt ist.\n\nUmgekehrt hilft eine gute Nacht Ihrem Körper, den Schmerz besser zu « filtern ». Mit anderen Worten: besser schlafen heißt, Ihrem Körper eines seiner stärksten natürlichen Schmerzmittel zu schenken.",
        "fr": "Le sommeil et la douleur se parlent en permanence. Quand on manque de sommeil, le système nerveux devient plus sensible : la même sollicitation peut être ressentie comme plus douloureuse — un phénomène appelé hyperalgésie, bien documenté dans la littérature scientifique.\n\nÀ l'inverse, une bonne nuit aide votre corps à mieux « filtrer » la douleur. Autrement dit : mieux dormir, c'est offrir à votre organisme l'un de ses antidouleurs naturels les plus puissants.",
        "en": "Sleep and pain are in constant conversation. When you lack sleep, the nervous system becomes more sensitive: the same stimulus can be felt as more painful — a phenomenon called hyperalgesia, well documented in the scientific literature.\n\nConversely, a good night helps your body « filter » pain better. In other words: sleeping better gives your body one of its most powerful natural painkillers.",
        "nl": "Slaap en pijn zijn voortdurend met elkaar in gesprek. Bij slaaptekort wordt het zenuwstelsel gevoeliger: dezelfde prikkel kan als pijnlijker worden ervaren — een fenomeen dat hyperalgesie heet en wetenschappelijk goed onderbouwd is.\n\nOmgekeerd helpt een goede nacht uw lichaam om pijn beter te « filteren ». Met andere woorden: beter slapen geeft uw lichaam een van zijn krachtigste natuurlijke pijnstillers.",
        "tr": "Uyku ve ağrı sürekli birbiriyle konuşur. Uykusuz kaldığınızda sinir sistemi daha hassas hale gelir: aynı uyaran daha ağrılı hissedilebilir — bilimsel literatürde iyi belgelenmiş, hiperaljezi denen bir olay.\n\nTersine, iyi bir gece bedeninizin ağrıyı daha iyi « süzmesine » yardımcı olur. Başka bir deyişle: daha iyi uyumak, bedeninize en güçlü doğal ağrı kesicilerinden birini sunmaktır.",
        "ar": "النوم والألم في حوار دائم. عند نقص النوم يصبح الجهاز العصبي أكثر حساسية: قد يُشعَر المنبّه نفسه بأنه أكثر إيلامًا — ظاهرة تُسمّى فرط الألم، وهي موثّقة جيدًا في الأدبيات العلمية.\n\nوعلى العكس، تساعد الليلة الجيدة جسمك على « ترشيح » الألم بشكل أفضل. بعبارة أخرى: النوم الأفضل يمنح جسمك أحد أقوى مسكّنات الألم الطبيعية لديه.",
        "pl": "Sen i ból nieustannie ze sobą rozmawiają. Przy niedoborze snu układ nerwowy staje się bardziej wrażliwy: ten sam bodziec może być odczuwany jako bardziej bolesny — zjawisko zwane hiperalgezją, dobrze udokumentowane w literaturze naukowej.\n\nI odwrotnie, dobra noc pomaga ciału lepiej « filtrować » ból. Innymi słowy: lepszy sen daje Twojemu ciału jeden z jego najsilniejszych naturalnych środków przeciwbólowych.",
        "uk": "Сон і біль постійно взаємодіють. Коли бракує сну, нервова система стає чутливішою: той самий подразник може відчуватися болючішим — це явище називається гіпералгезією і добре описане в науковій літературі.\n\nІ навпаки, добра ніч допомагає Вашому тілу краще «фільтрувати» біль. Іншими словами: краще спати — означає дати своєму організму один із найпотужніших природних знеболювальних засобів.",
        "es": "El sueño y el dolor dialogan constantemente. Cuando falta sueño, el sistema nervioso se vuelve más sensible: el mismo estímulo puede percibirse como más doloroso — un fenómeno llamado hiperalgesia, bien documentado en la literatura científica.\n\nA la inversa, una buena noche ayuda a su cuerpo a «filtrar» mejor el dolor. Dicho de otro modo: dormir mejor es ofrecer a su organismo uno de sus analgésicos naturales más potentes.",
        "ku": "Xew û êş her dem bi hev re di axaftinê de ne. Dema xew kêm be, sîstema demarî hestiyartir dibe: heman teşwîq dikare bi êştir were hîskirin — diyardeyek ku jê re hîperaljezî tê gotin, ku di wêjeya zanistî de baş hatiye belgekirin.\n\nBerevajî vê, şeveke baş alîkariya laşê we dike ku êşê baştir «parzûn» bike. Bi gotineke din: baştir razan tê wê wateyê ku hûn yek ji dermanên êşê yên xwezayî yên herî bi hêz didin laşê xwe."
      }
    },
    {
      "heading": {
        "de": "Schneller regenerieren, sich vor Verletzungen schützen",
        "fr": "Récupérer plus vite, se protéger des blessures",
        "en": "Recover faster, protect yourself from injury",
        "nl": "Sneller herstellen, uzelf beschermen tegen blessures",
        "tr": "Daha hızlı toparlanmak, kendinizi sakatlıklardan korumak",
        "ar": "تعافٍ أسرع ووقاية من الإصابات",
        "pl": "Szybsza regeneracja, ochrona przed kontuzjami",
        "uk": "Швидше відновлюватися, захищатися від травм",
        "es": "Recuperarse más rápido, protegerse de las lesiones",
        "ku": "Zûtir baş bibin, xwe ji birînan biparêzin"
      },
      "body": {
        "de": "Der Schlaf ist der Moment, in dem der Körper repariert, festigt und stärkt. Die Zahlen sind eindeutig: Bei jungen Sportlern war weniger als 8 Stunden Schlaf pro Nacht mit 1,7-mal mehr Verletzungen verbunden als bei denen mit 8 Stunden oder mehr.\n\nUmgekehrt verbesserten sich die Leistungen von Basketballspielern, als sie ihren Schlaf verlängerten: schnellere Sprints, etwa +9 % Trefferquote, bessere Reaktionszeit und Stimmung. Was für den Sport gilt, gilt auch für Ihre Genesung nach einer Verstauchung, einer Operation oder Rückenschmerzen.",
        "fr": "Le sommeil est le moment où le corps répare, consolide et se renforce. Les chiffres sont parlants : chez de jeunes sportifs, dormir moins de 8 heures par nuit était associé à 1,7 fois plus de blessures que ceux dormant 8 heures ou plus.\n\nEt dans l'autre sens, quand des basketteurs ont allongé leur sommeil, leurs performances ont progressé : sprints plus rapides, environ +9 % de réussite aux tirs, meilleur temps de réaction et meilleure humeur. Ce qui vaut pour le sport vaut aussi pour votre récupération après une entorse, une opération ou une lombalgie.",
        "en": "Sleep is when the body repairs, consolidates and strengthens. The figures speak for themselves: in young athletes, sleeping less than 8 hours a night was linked to 1.7 times more injuries than those sleeping 8 hours or more.\n\nAnd the other way round, when basketball players extended their sleep, their performance improved: faster sprints, about +9% shooting accuracy, better reaction time and mood. What holds for sport also holds for your recovery after a sprain, surgery or low back pain.",
        "nl": "Slaap is het moment waarop het lichaam herstelt, consolideert en versterkt. De cijfers spreken voor zich: bij jonge sporters was minder dan 8 uur slaap per nacht gekoppeld aan 1,7 keer meer blessures dan bij wie 8 uur of meer sliep.\n\nEn omgekeerd: toen basketballers hun slaap verlengden, verbeterden hun prestaties: snellere sprints, ongeveer +9% schotnauwkeurigheid, betere reactietijd en stemming. Wat voor sport geldt, geldt ook voor uw herstel na een verstuiking, operatie of lage rugpijn.",
        "tr": "Uyku, bedenin onardığı, pekiştirdiği ve güçlendiği andır. Rakamlar açık: genç sporcularda gecede 8 saatten az uyumak, 8 saat ve üzeri uyuyanlara göre 1,7 kat daha fazla sakatlıkla ilişkiliydi.\n\nTersine, basketbolcular uykularını uzattığında performansları arttı: daha hızlı sprintler, yaklaşık +%9 isabet, daha iyi reaksiyon süresi ve ruh hâli. Sporda geçerli olan, burkulma, ameliyat veya bel ağrısı sonrası iyileşmeniz için de geçerlidir.",
        "ar": "النوم هو اللحظة التي يُصلِح فيها الجسم ويُرسّخ ويقوّى. الأرقام واضحة: لدى الرياضيين الصغار، ارتبط النوم أقل من 8 ساعات في الليلة بإصابات أكثر بمقدار 1٫7 مرة مقارنةً بمن ينامون 8 ساعات أو أكثر.\n\nوفي الاتجاه المعاكس، عندما أطال لاعبو كرة السلة نومهم تحسّن أداؤهم: عَدْوٌ أسرع، ونحو +9٪ دقّة في التسديد، وزمن ردّ فعل ومزاج أفضل. وما يصحّ في الرياضة يصحّ أيضًا في تعافيك بعد التواء أو عملية أو ألم في أسفل الظهر.",
        "pl": "Sen to moment, w którym ciało się naprawia, wzmacnia i konsoliduje. Liczby mówią same za siebie: u młodych sportowców sen krótszy niż 8 godzin na dobę wiązał się z 1,7 raza większą liczbą kontuzji niż u tych, którzy spali 8 godzin lub więcej.\n\nI odwrotnie: gdy koszykarze wydłużyli sen, ich wyniki się poprawiły: szybsze sprinty, około +9% skuteczności rzutów, lepszy czas reakcji i nastrój. To, co dotyczy sportu, dotyczy też Twojego powrotu do zdrowia po skręceniu, operacji czy bólu krzyża.",
        "uk": "Сон — це час, коли тіло відновлюється, закріплює досягнуте і зміцнюється. Цифри говорять самі за себе: у юних спортсменів сон менше 8 годин на добу був пов'язаний з у 1,7 раза більшою кількістю травм порівняно з тими, хто спав 8 годин і більше.\n\nІ навпаки: коли баскетболісти подовжили свій сон, їхні результати покращилися — швидші спринти, приблизно +9 % влучності кидків, кращий час реакції та кращий настрій. Те, що справджується для спорту, справджується і для Вашого відновлення після розтягнення, операції чи болю в попереку.",
        "es": "El sueño es el momento en que el cuerpo repara, consolida y se fortalece. Las cifras hablan por sí solas: en jóvenes deportistas, dormir menos de 8 horas por noche se asociaba a 1,7 veces más lesiones que en quienes dormían 8 horas o más.\n\nY en sentido contrario, cuando unos jugadores de baloncesto alargaron su sueño, su rendimiento mejoró: sprints más rápidos, alrededor de un +9 % de acierto en los tiros, mejor tiempo de reacción y mejor estado de ánimo. Lo que vale para el deporte vale también para su recuperación tras un esguince, una operación o una lumbalgia.",
        "ku": "Xew ew dem e ku laş xwe tamîr dike, xurt dike û hêz digire. Hejmar bi xwe diaxivin: di nav werzîşvanên ciwan de, razana kêmtir ji 8 saetan di şevê de bi 1,7 qat zêdetir birînan re girêdayî bû li gorî yên ku 8 saet an zêdetir radizan.\n\nÛ berevajî vê, dema ku lîstikvanên basketbolê xewa xwe dirêjtir kirin, performansa wan pêş ket: bezên zûtir, nêzîkî +9 % serkeftina avêtinan, dema bertekê ya baştir û rewşa derûnî ya baştir. Ya ku ji bo werzîşê derbas dibe, ji bo başbûna we ya piştî burxbûnekê, emeliyatekê an êşa pişta jêrîn jî derbas dibe."
      },
      "infographic": "sleep-stats"
    },
    {
      "heading": {
        "de": "Von wie vielen Stunden sprechen wir?",
        "fr": "De combien d'heures parle-t-on ?",
        "en": "How many hours are we talking about?",
        "nl": "Over hoeveel uur hebben we het?",
        "tr": "Kaç saatten söz ediyoruz?",
        "ar": "عن كم ساعة نتحدث؟",
        "pl": "O ilu godzinach mowa?",
        "uk": "Про скільки годин ідеться?",
        "es": "¿De cuántas horas hablamos?",
        "ku": "Behsa çend saetan tê kirin?"
      },
      "body": {
        "de": "Für die meisten Erwachsenen liegt das Ziel zwischen 7 und 9 Stunden pro Nacht. Aber die Regelmäßigkeit zählt genauso viel wie die Dauer: zu stabilen Zeiten ins Bett gehen und aufstehen « stellt » Ihre innere Uhr.\n\nStreben Sie keine Perfektion an — es ist die Tendenz über die Woche, die den Unterschied macht, nicht eine einzelne Nacht.",
        "fr": "Pour la plupart des adultes, la cible se situe entre 7 et 9 heures par nuit. Mais la régularité compte autant que la durée : se coucher et se lever à des heures stables « cale » votre horloge interne.\n\nInutile de viser la perfection — c'est la tendance sur la semaine qui fait la différence, pas une nuit isolée.",
        "en": "For most adults, the target is between 7 and 9 hours a night. But regularity matters as much as duration: going to bed and getting up at steady times « sets » your internal clock.\n\nNo need to aim for perfection — it's the trend over the week that makes the difference, not a single night.",
        "nl": "Voor de meeste volwassenen ligt het doel tussen 7 en 9 uur per nacht. Maar regelmaat telt evenveel als duur: op vaste tijden gaan slapen en opstaan « stelt » uw interne klok af.\n\nStreef niet naar perfectie — het is de trend over de week die het verschil maakt, niet één enkele nacht.",
        "tr": "Çoğu yetişkin için hedef gecede 7 ile 9 saat arasıdır. Ama düzenlilik en az süre kadar önemlidir: sabit saatlerde yatıp kalkmak iç saatinizi « ayarlar ».\n\nMükemmeli hedeflemeye gerek yok — farkı yaratan, tek bir gece değil, hafta boyunca eğilimdir.",
        "ar": "بالنسبة لمعظم البالغين، يتراوح الهدف بين 7 و9 ساعات في الليلة. لكن الانتظام لا يقلّ أهمية عن المدّة: النوم والاستيقاظ في أوقات ثابتة « يضبط » ساعتك الداخلية.\n\nلا داعي للسعي إلى الكمال — ما يصنع الفرق هو الاتجاه على مدار الأسبوع، لا ليلة واحدة.",
        "pl": "Dla większości dorosłych cel to od 7 do 9 godzin na dobę. Ale regularność liczy się tak samo jak długość: kładzenie się i wstawanie o stałych porach « nastawia » Twój wewnętrzny zegar.\n\nNie trzeba dążyć do perfekcji — różnicę robi tendencja w skali tygodnia, a nie pojedyncza noc.",
        "uk": "Для більшості дорослих мета — від 7 до 9 годин на добу. Але регулярність важить не менше за тривалість: лягати спати й прокидатися в сталий час — це «налаштовує» Ваш внутрішній годинник.\n\nНе варто прагнути досконалості — різницю робить тенденція протягом тижня, а не одна окрема ніч.",
        "es": "Para la mayoría de los adultos, el objetivo se sitúa entre 7 y 9 horas por noche. Pero la regularidad cuenta tanto como la duración: acostarse y levantarse a horas estables «ajusta» su reloj interno.\n\nNo hace falta aspirar a la perfección — lo que marca la diferencia es la tendencia a lo largo de la semana, no una noche aislada.",
        "ku": "Ji bo piraniya mezinan, armanc di navbera 7 û 9 saetan de ye di şevê de. Lê birêkûpêkî bi qasî dirêjahiyê girîng e: di demên sabît de razan û rabûn demjimêra we ya hundirîn «eyar» dike.\n\nPêwîst nake hûn li pey bêkêmasiyê bin — meyla li ser hefteyê ye ku cudahiyê çêdike, ne şeveke tenê."
      }
    },
    {
      "heading": {
        "de": "Ihre einfachen Schritte für besseren Schlaf",
        "fr": "Vos actions faciles pour mieux dormir",
        "en": "Your easy actions for better sleep",
        "nl": "Uw eenvoudige acties voor betere slaap",
        "tr": "Daha iyi uyku için kolay adımlarınız",
        "ar": "خطواتك السهلة لنوم أفضل",
        "pl": "Twoje proste działania na lepszy sen",
        "uk": "Ваші прості кроки для кращого сну",
        "es": "Sus acciones sencillas para dormir mejor",
        "ku": "Gavên we yên hêsan ji bo xeweke baştir"
      },
      "body": {
        "de": "Sie müssen nicht alles auf einmal ändern. Wählen Sie ein oder zwei dieser Maßnahmen und führen Sie sie sanft ein: regelmäßige Zeiten (auch am Wochenende — der wichtigste Hebel), Licht am Morgen, Kaffee nur vormittags, Bildschirme etwa eine Stunde vor dem Schlafengehen pausieren, ein kühles und dunkles Schlafzimmer, ein beruhigendes Ritual, Bewegung tagsüber, abends weniger Alkohol und — bei vollem Kopf — ein paar Zeilen auf Papier, um den Geist zu « entlasten ».\n\nRegelmäßige Bewegung ist übrigens eines der besten natürlichen Schlafmittel: ein Bereich, in dem Ihr Physiotherapeut Sie begleiten kann.",
        "fr": "Pas besoin de tout changer d'un coup. Choisissez une ou deux de ces actions et installez-les en douceur : des horaires réguliers (même le week-end, c'est le levier n°1), de la lumière le matin, le café avant midi, des écrans en pause environ une heure avant le coucher, une chambre fraîche et sombre, un petit rituel qui apaise, de l'activité physique dans la journée, moins d'alcool le soir, et — si la tête est pleine — quelques lignes sur papier pour « décharger » le mental.\n\nBouger régulièrement est d'ailleurs l'un des meilleurs somnifères naturels : un domaine où votre kinésithérapeute peut vous accompagner.",
        "en": "No need to change everything at once. Pick one or two of these actions and ease them in: regular times (even at the weekend — the number-one lever), light in the morning, coffee before noon, screens paused about an hour before bed, a cool and dark bedroom, a calming ritual, physical activity during the day, less alcohol in the evening, and — if your mind is racing — a few lines on paper to « unload » your thoughts.\n\nMoving regularly is, by the way, one of the best natural sleep aids: an area where your physiotherapist can support you.",
        "nl": "U hoeft niet alles ineens te veranderen. Kies een of twee van deze acties en voer ze rustig in: vaste tijden (ook in het weekend — de belangrijkste hefboom), licht in de ochtend, koffie vóór de middag, schermen ongeveer een uur voor het slapengaan op pauze, een koele en donkere slaapkamer, een rustgevend ritueel, lichaamsbeweging overdag, 's avonds minder alcohol en — bij een druk hoofd — een paar regels op papier om uw gedachten te « ontladen ».\n\nRegelmatig bewegen is trouwens een van de beste natuurlijke slaapmiddelen: een gebied waarin uw kinesitherapeut u kan begeleiden.",
        "tr": "Her şeyi bir anda değiştirmenize gerek yok. Bu adımlardan bir ya da ikisini seçin ve yavaşça yerleştirin: düzenli saatler (hafta sonu da — bir numaralı kaldıraç), sabah ışığı, öğleden önce kahve, yatmadan yaklaşık bir saat önce ekranlara ara, serin ve karanlık bir yatak odası, sakinleştirici bir ritüel, gün içinde fiziksel aktivite, akşam daha az alkol ve — zihniniz doluysa — düşüncelerinizi « boşaltmak » için kâğıda birkaç satır.\n\nDüzenli hareket ayrıca en iyi doğal uyku destekçilerinden biridir: fizyoterapistinizin size eşlik edebileceği bir alan.",
        "ar": "لا حاجة لتغيير كل شيء دفعة واحدة. اختر واحدًا أو اثنين من هذه الإجراءات وأدخِلها بهدوء: أوقات منتظمة (حتى في عطلة نهاية الأسبوع — وهي الرافعة الأولى)، ضوء في الصباح، القهوة قبل الظهر، إيقاف الشاشات نحو ساعة قبل النوم، غرفة نوم باردة ومظلمة، طقس مُهدّئ، نشاط بدني خلال النهار، كحول أقل مساءً، و— إن كان الذهن مشغولًا — بضعة أسطر على ورق « لتفريغ » الأفكار.\n\nوالحركة المنتظمة من أفضل المنوّمات الطبيعية: مجال يمكن لأخصائي العلاج الطبيعي أن يرافقك فيه.",
        "pl": "Nie trzeba zmieniać wszystkiego naraz. Wybierz jedno lub dwa z tych działań i wprowadzaj je łagodnie: stałe pory (także w weekend — dźwignia numer jeden), światło rano, kawa przed południem, ekrany odłożone około godziny przed snem, chłodna i ciemna sypialnia, uspokajający rytuał, aktywność fizyczna w ciągu dnia, mniej alkoholu wieczorem i — gdy głowa jest pełna — kilka linijek na papierze, by « rozładować » myśli.\n\nRegularny ruch jest zresztą jednym z najlepszych naturalnych środków nasennych: to obszar, w którym Twój fizjoterapeuta może Cię wesprzeć.",
        "uk": "Не потрібно змінювати все одразу. Оберіть одну-дві з цих дій і запроваджуйте їх поступово: регулярний розпорядок (навіть на вихідних — це важіль № 1), світло вранці, кава до полудня, перерва від екранів приблизно за годину до сну, прохолодна й темна спальня, невеликий заспокійливий ритуал, фізична активність протягом дня, менше алкоголю ввечері і — якщо голова переповнена думками — кілька рядків на папері, щоб «розвантажити» розум.\n\nДо речі, регулярний рух — один із найкращих природних засобів для сну: це сфера, у якій Вас може супроводжувати Ваш фізіотерапевт.",
        "es": "No hace falta cambiarlo todo de golpe. Elija una o dos de estas acciones e incorpórelas con suavidad: horarios regulares (incluso el fin de semana, es la palanca n.º 1), luz por la mañana, el café antes del mediodía, pantallas en pausa aproximadamente una hora antes de acostarse, un dormitorio fresco y oscuro, un pequeño ritual que calme, actividad física durante el día, menos alcohol por la noche y — si tiene la cabeza llena — unas líneas en papel para «descargar» la mente.\n\nMoverse con regularidad es, por cierto, uno de los mejores somníferos naturales: un ámbito en el que su fisioterapeuta puede acompañarle.",
        "ku": "Ne pêwîst e ku hûn her tiştî bi carekê biguherînin. Yek an du ji van gavan hilbijêrin û bi nermî bi cih bikin: demên birêkûpêk (heta di dawiya hefteyê de jî — ev lêvera hejmar 1 e), ronahî di sibehê de, qehwe berî nîvro, rawestandina ekranan nêzîkî saetekê berî razanê, odeyeke razanê ya hênik û tarî, rîtûeleke biçûk a aramker, çalakiya laşî di nav rojê de, kêmtir alkol êvaran, û — heke serê we tije be — çend rêz li ser kaxezê ji bo «valakirina» hişê xwe.\n\nTevgera birêkûpêk, bi rastî, yek ji baştirîn alîkarên xewê yên xwezayî ye: qadek ku fizyoterapîstê we dikare tê de bi we re be."
      },
      "infographic": "sleep-tips"
    },
    {
      "heading": {
        "de": "Wann Sie mit einer Fachperson sprechen sollten",
        "fr": "Quand en parler à un professionnel",
        "en": "When to talk to a professional",
        "nl": "Wanneer een professional raadplegen",
        "tr": "Ne zaman bir uzmana danışmalı",
        "ar": "متى تتحدث إلى مختص",
        "pl": "Kiedy porozmawiać ze specjalistą",
        "uk": "Коли варто звернутися до фахівця",
        "es": "Cuándo consultar a un profesional",
        "ku": "Kengê divê hûn bi pisporekî re biaxivin"
      },
      "body": {
        "de": "Schlaf lässt sich trainieren, und oft genügen kleine Anpassungen. Treten jedoch starkes Schnarchen mit Atemaussetzern, anhaltende Müdigkeit trotz ausreichender Nächte oder seit mehreren Wochen bestehende Einschlafprobleme auf, sprechen Sie mit Ihrem Arzt: Das sind Situationen, die sich wirksam behandeln lassen.\n\nIn Eupen bindet unser Team diese Ratschläge gern in Ihre Betreuung ein — denn ein gut erholter Körper regeneriert besser, bewegt sich besser und schließt leichter Frieden mit dem Schmerz.",
        "fr": "Le sommeil se travaille, et de petits ajustements suffisent souvent. Mais si des ronflements importants avec pauses respiratoires, une fatigue persistante malgré des nuits suffisantes, ou des difficultés à dormir installées depuis plusieurs semaines apparaissent, parlez-en à votre médecin : ce sont des situations qui se prennent en charge efficacement.\n\nÀ Eupen, notre équipe intègre volontiers ces conseils dans votre suivi — parce qu'un corps bien reposé récupère mieux, bouge mieux et fait plus facilement la paix avec la douleur.",
        "en": "Sleep can be trained, and small adjustments are often enough. But if you notice heavy snoring with breathing pauses, persistent fatigue despite adequate nights, or difficulty sleeping that has lasted several weeks, talk to your doctor: these situations can be managed effectively.\n\nIn Eupen, our team is happy to weave this advice into your care — because a well-rested body recovers better, moves better and more easily makes peace with pain.",
        "nl": "Slaap kun je trainen, en kleine aanpassingen volstaan vaak. Maar bij zwaar snurken met ademstops, aanhoudende vermoeidheid ondanks voldoende nachten, of slaapproblemen die al enkele weken duren, bespreek het met uw arts: dit zijn situaties die doeltreffend kunnen worden aangepakt.\n\nIn Eupen verweeft ons team dit advies graag in uw begeleiding — want een goed uitgerust lichaam herstelt beter, beweegt beter en sluit makkelijker vrede met pijn.",
        "tr": "Uyku çalışılabilir ve çoğu zaman küçük ayarlamalar yeterlidir. Ama nefes duraklamalarıyla birlikte yoğun horlama, yeterli gecelere rağmen süren yorgunluk ya da birkaç haftadır süren uyku güçlüğü fark ederseniz doktorunuza danışın: bunlar etkili biçimde yönetilebilen durumlardır.\n\nEupen'de ekibimiz bu önerileri takibinize seve seve katar — çünkü iyi dinlenmiş bir beden daha iyi toparlanır, daha iyi hareket eder ve ağrıyla daha kolay barışır.",
        "ar": "يمكن تدريب النوم، وغالبًا ما تكفي تعديلات صغيرة. لكن إذا ظهر شخير قوي مع توقّفات في التنفّس، أو تعب مستمر رغم ليالٍ كافية، أو صعوبة في النوم مستمرة منذ عدة أسابيع، فتحدّث إلى طبيبك: هذه حالات يمكن التعامل معها بفعالية.\n\nفي أوبن، يسعد فريقنا بدمج هذه النصائح في متابعتك — لأن الجسم المرتاح جيدًا يتعافى أفضل، ويتحرّك أفضل، ويصالح الألم بسهولة أكبر.",
        "pl": "Sen można trenować, a często wystarczają drobne korekty. Ale jeśli pojawi się głośne chrapanie z przerwami w oddychaniu, uporczywe zmęczenie mimo wystarczających nocy lub trudności ze snem utrzymujące się od kilku tygodni, porozmawiaj z lekarzem: to sytuacje, które można skutecznie leczyć.\n\nW Eupen nasz zespół chętnie włącza te wskazówki do Twojej opieki — bo dobrze wypoczęte ciało lepiej się regeneruje, lepiej się porusza i łatwiej godzi się z bólem.",
        "uk": "Над сном можна працювати, і часто достатньо невеликих змін. Але якщо з'являється сильне хропіння з паузами в диханні, стійка втома попри достатню тривалість сну або труднощі зі сном, що тривають уже кілька тижнів, поговоріть із Вашим лікарем: ці ситуації ефективно піддаються лікуванню.\n\nВ Ойпені наша команда охоче включає ці поради у Ваш супровід — адже добре відпочиле тіло краще відновлюється, краще рухається і легше примиряється з болем.",
        "es": "El sueño se puede trabajar, y a menudo bastan pequeños ajustes. Pero si aparecen ronquidos importantes con pausas respiratorias, un cansancio persistente pese a dormir lo suficiente o dificultades para dormir que se prolongan desde hace varias semanas, hable con su médico: son situaciones que se tratan de forma eficaz.\n\nEn Eupen, nuestro equipo integra con gusto estos consejos en su seguimiento — porque un cuerpo bien descansado se recupera mejor, se mueve mejor y hace las paces con el dolor más fácilmente.",
        "ku": "Li ser xewê dikare were xebitîn, û gelek caran eyarkirinên biçûk bes in. Lê heke xorxirkên giran bi rawestanên bêhnê, westandineke domdar tevî şevên têr, an zehmetiyên razanê yên ku çend hefte ne berdewam dikin xuya bibin, bi bijîşkê xwe re biaxivin: ev rewş bi bandor tên dermankirin.\n\nLi Eupenê, tîma me bi dilxwazî van şîretan di şopandina we de cih dike — ji ber ku laşekî baş bêhnvedayî baştir baş dibe, baştir tevdigere û hêsantir bi êşê re li hev tê."
      }
    }
  ],
  "keyPoints": {
    "de": [
      "Schlafmangel erhöht die Schmerzempfindlichkeit (Hyperalgesie).",
      "Weniger als 8 h Schlaf = 1,7× mehr Verletzungen bei jungen Sportlern.",
      "Mehr Schlaf verbessert Regeneration und Leistung (~+9 %).",
      "Ziel: 7-9 h mit regelmäßigen Zeiten; beginnen Sie mit 1 oder 2 kleinen Änderungen."
    ],
    "fr": [
      "Le manque de sommeil augmente la sensibilité à la douleur (hyperalgésie).",
      "Moins de 8 h de sommeil = 1,7× plus de blessures chez de jeunes sportifs.",
      "Allonger son sommeil améliore récupération et performance (~+9 %).",
      "Cible : 7-9 h avec des horaires réguliers ; commencez par 1 ou 2 petits changements."
    ],
    "en": [
      "Lack of sleep increases pain sensitivity (hyperalgesia).",
      "Less than 8 h of sleep = 1.7× more injuries in young athletes.",
      "Extending sleep improves recovery and performance (~+9%).",
      "Target: 7-9 h with regular times; start with 1 or 2 small changes."
    ],
    "nl": [
      "Slaaptekort verhoogt de pijngevoeligheid (hyperalgesie).",
      "Minder dan 8 u slaap = 1,7× meer blessures bij jonge sporters.",
      "Meer slaap verbetert herstel en prestaties (~+9%).",
      "Doel: 7-9 u met vaste tijden; begin met 1 of 2 kleine veranderingen."
    ],
    "tr": [
      "Uyku eksikliği ağrı duyarlılığını artırır (hiperaljezi).",
      "8 saatten az uyku = genç sporcularda 1,7× daha fazla sakatlık.",
      "Uykuyu uzatmak toparlanmayı ve performansı iyileştirir (~+%9).",
      "Hedef: 7-9 saat, düzenli saatlerle; 1 veya 2 küçük değişiklikle başlayın."
    ],
    "ar": [
      "نقص النوم يزيد الحساسية للألم (فرط الألم).",
      "أقل من 8 ساعات نوم = إصابات أكثر بـ1٫7 مرة لدى الرياضيين الصغار.",
      "إطالة النوم تحسّن التعافي والأداء (~+9٪).",
      "الهدف: 7-9 ساعات بأوقات منتظمة؛ ابدأ بتغيير أو اثنين صغيرين."
    ],
    "pl": [
      "Niedobór snu zwiększa wrażliwość na ból (hiperalgezja).",
      "Mniej niż 8 h snu = 1,7× więcej kontuzji u młodych sportowców.",
      "Wydłużenie snu poprawia regenerację i wyniki (~+9%).",
      "Cel: 7-9 h o stałych porach; zacznij od 1-2 małych zmian."
    ],
    "uk": [
      "Нестача сну підвищує чутливість до болю (гіпералгезія).",
      "Менше 8 год сну = в 1,7× більше травм у юних спортсменів.",
      "Подовження сну покращує відновлення та результати (~+9 %).",
      "Мета: 7–9 год за регулярного розпорядку; почніть з 1–2 невеликих змін."
    ],
    "es": [
      "La falta de sueño aumenta la sensibilidad al dolor (hiperalgesia).",
      "Menos de 8 h de sueño = 1,7× más lesiones en jóvenes deportistas.",
      "Alargar el sueño mejora la recuperación y el rendimiento (~+9 %).",
      "Objetivo: 7-9 h con horarios regulares; empiece por 1 o 2 pequeños cambios."
    ],
    "ku": [
      "Kêmbûna xewê hestiyariya li hember êşê zêde dike (hîperaljezî).",
      "Kêmtir ji 8 saet xew = 1,7× zêdetir birîn di nav werzîşvanên ciwan de.",
      "Dirêjkirina xewê başbûn û performansê pêş dixe (~+9 %).",
      "Armanc: 7-9 saet bi demên birêkûpêk; bi 1 an 2 guhertinên biçûk dest pê bikin."
    ]
  },
  "ctaText": {
    "de": "Anhaltende Schmerzen oder schwierige Erholung? In der Praxis Loten in Eupen beziehen wir Schlaf und Bewegung in eine maßgeschneiderte Betreuung ein. Vereinbaren Sie einen Termin.",
    "fr": "Douleurs persistantes ou récupération difficile ? Au cabinet Praxis Loten à Eupen, nous intégrons le sommeil et le mouvement dans un accompagnement sur mesure. Prenez rendez-vous.",
    "en": "Persistent pain or difficult recovery? At Praxis Loten in Eupen, we bring sleep and movement into tailored care. Book an appointment.",
    "nl": "Aanhoudende pijn of moeizaam herstel? Bij Praxis Loten in Eupen betrekken we slaap en beweging in een begeleiding op maat. Maak een afspraak.",
    "tr": "Kalıcı ağrı ya da zor bir toparlanma mı? Eupen'deki Praxis Loten'de uyku ve hareketi size özel bir bakıma dâhil ediyoruz. Randevu alın.",
    "ar": "ألم مستمر أو تعافٍ صعب؟ في عيادة براكسيس لوتن في أوبن، ندمج النوم والحركة في متابعة مُصمَّمة لك. احجز موعدًا.",
    "pl": "Uporczywy ból lub trudna regeneracja? W Praxis Loten w Eupen łączymy sen i ruch w opiece dopasowanej do Ciebie. Umów wizytę.",
    "uk": "Тривалий біль чи складне відновлення? У Praxis Loten в Ойпені ми включаємо сон і рух в індивідуальний супровід. Запишіться на прийом.",
    "es": "¿Dolor persistente o recuperación difícil? En la consulta Praxis Loten de Eupen integramos el sueño y el movimiento en un acompañamiento a medida. Pida cita.",
    "ku": "Êşa domdar an başbûna dijwar? Li kabîneya Praxis Loten li Eupenê, em xew û tevgerê di şopandineke li gorî we de cih dikin. Randevû bigirin."
  },
  "bibliography": [
    "Karmann AJ, Kundermann B, Lautenbacher S. Schlafentzug und Schmerz [Sleep deprivation and pain: a review]. Schmerz. 2014;28(2):141-146.",
    "Milewski MD, Skaggs DL, Bishop GA, et al. Chronic lack of sleep is associated with increased sports injuries in adolescent athletes. J Pediatr Orthop. 2014;34(2):129-133.",
    "Mah CD, Mah KE, Kezirian EJ, Dement WC. The effects of sleep extension on the athletic performance of collegiate basketball players. Sleep. 2011;34(7):943-950."
  ],
  "disclaimer": {
    "de": "Dieser Artikel dient der Information und ersetzt keine ärztliche oder therapeutische Beratung. Bei anhaltenden Schlafstörungen oder beunruhigenden Schmerzen wenden Sie sich an eine medizinische Fachperson.",
    "fr": "Cet article a une vocation informative et ne remplace pas une consultation médicale ou paramédicale. En cas de troubles du sommeil persistants ou de douleur inquiétante, consultez un professionnel de santé.",
    "en": "This article is for information only and does not replace a medical or paramedical consultation. For persistent sleep problems or worrying pain, consult a healthcare professional.",
    "nl": "Dit artikel is louter informatief en vervangt geen medisch of paramedisch advies. Raadpleeg bij aanhoudende slaapproblemen of verontrustende pijn een zorgverlener.",
    "tr": "Bu makale yalnızca bilgilendirme amaçlıdır ve tıbbi veya paramedikal bir muayenenin yerini tutmaz. Kalıcı uyku sorunları veya endişe verici ağrıda bir sağlık uzmanına danışın.",
    "ar": "هذا المقال لأغراض إعلامية فقط ولا يُغني عن استشارة طبية أو شبه طبية. في حال اضطرابات النوم المستمرة أو الألم المقلق، استشر أخصائي رعاية صحية.",
    "pl": "Ten artykuł ma charakter informacyjny i nie zastępuje konsultacji medycznej ani paramedycznej. Przy utrzymujących się problemach ze snem lub niepokojącym bólu skonsultuj się z pracownikiem ochrony zdrowia.",
    "uk": "Ця стаття має інформаційний характер і не замінює медичної чи парамедичної консультації. У разі тривалих порушень сну або болю, що Вас турбує, зверніться до медичного фахівця.",
    "es": "Este artículo tiene carácter informativo y no sustituye una consulta médica o paramédica. En caso de trastornos del sueño persistentes o de un dolor que le preocupe, consulte a un profesional sanitario.",
    "ku": "Ev gotar tenê ji bo agahdariyê ye û şûna şêwirdariyeke bijîşkî an paramedîkal nagire. Di rewşa aloziyên xewê yên domdar an êşeke ku we bi fikar dike de, serdana pisporekî tenduristiyê bikin."
  }
},

  "therapie-manuelle-mythes-mouvement": {
    "title": {
        "de": "Manuelle Therapie in Eupen: Bewegung zurückgeben, nicht « einrenken »",
        "fr": "Thérapie manuelle à Eupen : remettre du mouvement, pas « remettre en place »",
        "en": "Manual therapy in Eupen: restoring movement, not « putting things back »",
        "nl": "Manuele therapie in Eupen: beweging teruggeven, niet « rechtzetten »",
        "tr": "Eupen'de manuel terapi: yerine oturtmak değil, hareketi geri vermek",
        "ar": "العلاج اليدوي في أوبن: إعادة الحركة، لا « إعادة الأمور إلى مكانها »",
        "pl": "Terapia manualna w Eupen: przywracanie ruchu, a nie « nastawianie »",
        "uk": "Мануальна терапія в Ойпені: повернути рух, а не «вправити на місце»",
        "es": "Terapia manual en Eupen: devolver el movimiento, no «volver a colocar en su sitio»",
        "ku": "Terapiya destî li Eupenê: vegerandina tevgerê, ne «xistina cihê xwe»"
    },
    "category": {
        "de": "Manuelle Therapie",
        "fr": "Thérapie Manuelle",
        "en": "Manual Therapy",
        "nl": "Manuele Therapie",
        "tr": "Manuel Terapi",
        "ar": "العلاج اليدوي",
        "pl": "Terapia Manualna",
        "uk": "Мануальна терапія",
        "es": "Terapia manual",
        "ku": "Terapiya destî"
    },
    "date": "2026-06-21",
    "readMin": 6,
    "color": "from-[#2b3186] to-[#1e2260]",
    "authorSlug": "philippe-banaszak",
    "authorName": "Philippe Banaszak",
    "intro": {
        "fr": "On vous a sûrement déjà dit qu'un kiné « remet les choses en place » d'un geste précis, dans un craquement libérateur. L'image est rassurante… mais inexacte. La thérapie manuelle moderne ne réaligne pas un os récalcitrant : elle se sert des mains pour apaiser la douleur, redonner de la mobilité et, surtout, vous remettre en mouvement. Au cabinet Praxis Loten à Eupen, c'est cette approche fondée sur les preuves et reconnue au niveau international (standard IFOMPT) que nous pratiquons. Voici ce qu'elle est vraiment — et ce qu'elle peut faire pour vous, sans promesse magique.",
        "de": "Man hat Ihnen sicher schon gesagt, dass ein Physiotherapeut mit einem gezielten Handgriff « etwas einrenkt » — begleitet von einem befreienden Knacken. Das Bild ist beruhigend … aber unzutreffend. Die moderne manuelle Therapie richtet keinen widerspenstigen Knochen aus: Sie nutzt die Hände, um Schmerzen zu lindern, Beweglichkeit zurückzugeben und Sie vor allem wieder in Bewegung zu bringen. In der Praxis Loten in Eupen praktizieren wir genau diesen evidenzbasierten, international anerkannten Ansatz (IFOMPT-Standard). Hier erfahren Sie, was sie wirklich ist — und was sie für Sie tun kann, ganz ohne Wunderversprechen.",
        "en": "You have probably been told that a physiotherapist « puts things back in place » with a precise move and a satisfying crack. The image is reassuring… but inaccurate. Modern manual therapy does not realign a stubborn bone: it uses the hands to ease pain, restore mobility and, above all, get you moving again. At Praxis Loten in Eupen, this is the evidence-based, internationally recognised approach (IFOMPT standard) that we practise. Here is what it really is — and what it can do for you, without any magic promise.",
        "nl": "Men heeft u vast al verteld dat een kinesitherapeut met een precieze handeling « iets rechtzet », met een bevrijdende krak. Het beeld is geruststellend… maar onjuist. Moderne manuele therapie zet geen weerbarstig bot recht: ze gebruikt de handen om pijn te verzachten, mobiliteit terug te geven en u vooral weer in beweging te brengen. Bij Praxis Loten in Eupen passen we precies deze evidence-based, internationaal erkende aanpak toe (IFOMPT-standaard). Dit is wat ze werkelijk is — en wat ze voor u kan doen, zonder wonderbeloftes.",
        "tr": "Bir fizyoterapistin kesin bir hareketle, ferahlatıcı bir çıtırtıyla « bir şeyi yerine oturttuğu » size mutlaka söylenmiştir. Bu imge güven verir… ama yanlıştır. Modern manuel terapi inatçı bir kemiği hizalamaz: ağrıyı dindirmek, hareketliliği geri vermek ve hepsinden önemlisi sizi yeniden harekete geçirmek için elleri kullanır. Eupen'deki Praxis Loten'de tam da bu kanıta dayalı, uluslararası kabul görmüş yaklaşımı (IFOMPT standardı) uyguluyoruz. İşte gerçekte ne olduğu — ve hiçbir mucize vaadi olmadan sizin için neler yapabileceği.",
        "ar": "ربما قيل لك أن أخصائي العلاج الطبيعي « يعيد الأمور إلى مكانها » بحركة دقيقة مصحوبة بطقطقة مريحة. الصورة مطمئنة… لكنها غير دقيقة. لا يعيد العلاج اليدوي الحديث محاذاة عظمة عنيدة: بل يستخدم اليدين لتخفيف الألم، واستعادة الحركة، وقبل كل شيء إعادتك إلى الحركة. في عيادة براكسيس لوتن في أوبن، هذا هو النهج القائم على الأدلة والمعترف به دوليًا (معيار IFOMPT) الذي نمارسه. إليك ما هو حقًا — وما يمكنه فعله من أجلك، دون أي وعد سحري.",
        "pl": "Pewnie nieraz słyszałeś, że fizjoterapeuta « nastawia » coś precyzyjnym ruchem, z wyzwalającym trzaskiem. Ten obraz uspokaja… ale jest nieprawdziwy. Nowoczesna terapia manualna nie nastawia opornej kości: używa rąk, by złagodzić ból, przywrócić ruchomość, a przede wszystkim znów wprawić Cię w ruch. W Praxis Loten w Eupen praktykujemy właśnie to podejście oparte na dowodach i uznane międzynarodowo (standard IFOMPT). Oto czym naprawdę jest — i co może dla Ciebie zrobić, bez żadnej cudownej obietnicy.",
        "uk": "Вам, напевно, вже казали, що фізіотерапевт «вправляє все на місце» точним рухом, із хрускотом, що приносить полегшення. Цей образ заспокоює… але він неточний. Сучасна мануальна терапія не вирівнює «непокірну» кістку: вона використовує руки, щоб зменшити біль, відновити рухливість і, головне, знову повернути Вас до руху. У кабінеті Praxis Loten в Ойпені ми практикуємо саме цей науково обґрунтований і міжнародно визнаний підхід (стандарт IFOMPT). Ось що це таке насправді — і що вона може зробити для Вас, без жодних чарівних обіцянок.",
        "es": "Seguramente ya le han dicho que un fisioterapeuta «vuelve a colocar las cosas en su sitio» con un gesto preciso y un crujido liberador. La imagen tranquiliza… pero es inexacta. La terapia manual moderna no realinea un hueso rebelde: utiliza las manos para aliviar el dolor, devolver la movilidad y, sobre todo, volver a ponerle en movimiento. En la consulta Praxis Loten de Eupen practicamos este enfoque basado en la evidencia y reconocido a nivel internacional (estándar IFOMPT). Esto es lo que es realmente — y lo que puede hacer por usted, sin promesas mágicas.",
        "ku": "Belkî berê ji we re gotine ku fizyoterapîst bi tevgereke rast û bi qirçeke rehetker «tiştan dixe cihê wan». Ev wêne aram dike… lê ne rast e. Terapiya destî ya nûjen hestiyekî serhişk ji nû ve rêz nake: ew destan bi kar tîne da ku êşê sivik bike, livînê vegerîne û berî her tiştî, we dîsa bixe tevgerê. Li kabîneya Praxis Loten li Eupenê, em vê nêzîkatiya li ser delîlan û di asta navneteweyî de naskirî (standarda IFOMPT) pêk tînin. Va ye ew bi rastî çi ye — û ew dikare ji bo we çi bike, bêyî sozên efsûnî."
    },
    "sections": [
        {
            "heading": {
                "fr": "Le mythe du « remettre en place »",
                "de": "Der Mythos vom « Einrenken »",
                "en": "The « putting back » myth",
                "nl": "De mythe van het « rechtzetten »",
                "tr": "« Yerine oturtma » miti",
                "ar": "خرافة « الإعادة إلى المكان »",
                "pl": "Mit « nastawiania »",
                "uk": "Міф про «вправляння на місце»",
                "es": "El mito de «volver a colocar en su sitio»",
                "ku": "Efsaneya «xistina cihê xwe»"
            },
            "body": {
                "fr": "Le craquement n'est pas le bruit d'un os qui retrouve sa position : c'est un phénomène articulaire tout à fait normal, lié à de petites bulles de gaz dans le liquide de l'articulation, sans aucun rapport avec un réalignement. Pourtant, l'idée qu'une vertèbre serait « sortie » et qu'il faudrait la « remettre » a la vie dure. Le problème, c'est qu'elle inquiète : elle laisse croire que votre dos serait précaire et dépendrait d'une main extérieure pour tenir debout. La réalité est bien plus rassurante. Votre colonne et vos articulations sont solides, mobiles et faites pour s'adapter. Quand un mouvement devient douloureux, ce n'est presque jamais une pièce « déplacée » — c'est un système sensible, momentanément sur la défensive. Et ça, ça se retravaille.",
                "de": "Das Knacken ist nicht das Geräusch eines Knochens, der seine Position wiederfindet: Es ist ein völlig normales Gelenkphänomen, ausgelöst durch kleine Gasbläschen in der Gelenkflüssigkeit — ohne jeden Zusammenhang mit einer Ausrichtung. Dennoch hält sich die Vorstellung hartnäckig, ein Wirbel sei « herausgesprungen » und müsse « zurückgesetzt » werden. Das Problem: Diese Idee macht Angst. Sie suggeriert, Ihr Rücken sei labil und brauche eine fremde Hand, um zu halten. Die Realität ist weit beruhigender. Ihre Wirbelsäule und Ihre Gelenke sind stabil, beweglich und dafür gemacht, sich anzupassen. Wird eine Bewegung schmerzhaft, ist fast nie ein Teil « verschoben » — es ist ein empfindliches System, das vorübergehend in Abwehrhaltung ist. Und genau das lässt sich wieder verändern.",
                "en": "The crack is not the sound of a bone returning to its position: it is a perfectly normal joint phenomenon, caused by tiny gas bubbles in the joint fluid, with no connection to any realignment. Yet the idea that a vertebra has « come out » and needs to be « put back » dies hard. The problem is that it worries people: it suggests your back is precarious and depends on an outside hand to stay upright. The reality is far more reassuring. Your spine and joints are strong, mobile and built to adapt. When a movement becomes painful, it is almost never a « displaced » part — it is a sensitive system, temporarily on the defensive. And that can be reworked.",
                "nl": "De krak is niet het geluid van een bot dat zijn plaats terugvindt: het is een volkomen normaal gewrichtsverschijnsel, veroorzaakt door kleine gasbelletjes in de gewrichtsvloeistof, zonder enig verband met een heruitlijning. Toch is het idee dat een wervel « eruit » zou zijn en « teruggezet » moet worden hardnekkig. Het probleem is dat het ongerust maakt: het suggereert dat uw rug wankel is en een externe hand nodig heeft om overeind te blijven. De werkelijkheid is veel geruststellender. Uw wervelkolom en gewrichten zijn sterk, mobiel en gemaakt om zich aan te passen. Wanneer een beweging pijnlijk wordt, is het bijna nooit een « verschoven » onderdeel — het is een gevoelig systeem dat tijdelijk in de verdediging staat. En dat kan opnieuw worden bijgestuurd.",
                "tr": "Çıtırtı, bir kemiğin yerine dönmesinin sesi değildir: eklem sıvısındaki küçük gaz kabarcıklarından kaynaklanan, hizalanmayla hiçbir ilgisi olmayan, son derece normal bir eklem olayıdır. Yine de bir omurun « çıktığı » ve « yerine konması » gerektiği fikri kolay ölmüyor. Sorun şu ki bu, insanı endişelendirir: sırtınızın güvensiz olduğunu ve ayakta durmak için dışarıdan bir ele bağlı olduğunu ima eder. Gerçek çok daha güven verici. Omurganız ve eklemleriniz güçlü, hareketli ve uyum sağlamak için yapılmıştır. Bir hareket ağrılı hale geldiğinde, neredeyse hiçbir zaman « yerinden oynamış » bir parça değildir — geçici olarak savunmaya geçmiş hassas bir sistemdir. Ve bu yeniden düzenlenebilir.",
                "ar": "الطقطقة ليست صوت عظمة تعود إلى موضعها: إنها ظاهرة مفصلية طبيعية تمامًا، ناتجة عن فقاعات غازية صغيرة في سائل المفصل، ولا علاقة لها بأي إعادة محاذاة. ومع ذلك، فإن فكرة أن فقرة قد « خرجت » ويجب « إعادتها » راسخة بعناد. المشكلة أنها تثير القلق: توحي بأن ظهرك هشّ ويعتمد على يد خارجية ليبقى منتصبًا. الواقع أكثر طمأنينة بكثير. عمودك الفقري ومفاصلك قوية ومرنة ومصممة للتكيّف. عندما تصبح حركة ما مؤلمة، نادرًا ما يكون ذلك بسبب جزء « منزاح » — بل هو نظام حسّاس في حالة دفاع مؤقتة. وهذا أمر يمكن إعادة العمل عليه.",
                "pl": "Trzask to nie dźwięk kości wracającej na swoje miejsce: to całkowicie normalne zjawisko stawowe, spowodowane drobnymi pęcherzykami gazu w płynie stawowym, bez żadnego związku z nastawianiem. Mimo to przekonanie, że krąg « wyskoczył » i trzeba go « nastawić », trudno wykorzenić. Problem w tym, że niepokoi: sugeruje, że Twoje plecy są niestabilne i zależą od cudzej ręki, by się utrzymać. Rzeczywistość jest o wiele bardziej uspokajająca. Twój kręgosłup i stawy są mocne, ruchome i stworzone do adaptacji. Gdy ruch staje się bolesny, prawie nigdy nie chodzi o « przesunięty » element — to wrażliwy system, chwilowo w defensywie. A to można na nowo opracować.",
                "uk": "Хрускіт — це не звук кістки, що повертається на своє місце: це цілком нормальне явище в суглобі, пов'язане з маленькими бульбашками газу в суглобовій рідині, і воно не має жодного стосунку до вирівнювання. Проте уявлення, що хребець «вискочив» і його треба «вправити», дуже живуче. Проблема в тому, що воно тривожить: воно змушує думати, ніби Ваша спина крихка і тримається лише завдяки чужій руці. Насправді все набагато спокійніше. Ваш хребет і суглоби міцні, рухливі й створені, щоб пристосовуватися. Коли рух стає болючим, це майже ніколи не «зміщена» деталь — це чутлива система, яка тимчасово перейшла в оборону. І з цим можна працювати.",
                "es": "El crujido no es el ruido de un hueso que vuelve a su posición: es un fenómeno articular totalmente normal, ligado a pequeñas burbujas de gas en el líquido de la articulación, sin ninguna relación con un realineamiento. Sin embargo, la idea de que una vértebra «se ha salido» y hay que «volver a colocarla» está muy arraigada. El problema es que inquieta: hace creer que su espalda es frágil y depende de una mano externa para mantenerse en pie. La realidad es mucho más tranquilizadora. Su columna y sus articulaciones son sólidas, móviles y están hechas para adaptarse. Cuando un movimiento se vuelve doloroso, casi nunca se trata de una pieza «desplazada»: es un sistema sensible, momentáneamente a la defensiva. Y eso se puede volver a trabajar.",
                "ku": "Qirç ne dengê hestiyekî ye ku vedigere cihê xwe: ew diyardeyeke movikê ya bi temamî normal e, bi bilbilên biçûk ên gazê yên di şileya movikê de ve girêdayî ye, û tu têkiliya wê bi rêzkirina ji nû ve re tune ye. Lêbelê ramana ku hestiyekî stûna piştê (vertebra) «derketiye» û divê «bikeve cihê xwe» hîn jî gelek belav e. Pirsgirêk ew e ku ev xem dide: wisa dide xuyakirin ku pişta we lawaz e û ji bo li ser piyan mayînê bi destekî ji derve ve girêdayî ye. Rastî gelekî aramtir e. Stûna pişta we û movikên we xurt û livok in û ji bo adaptebûnê hatine çêkirin. Dema tevgerek bi êş dibe, hema hema qet ne parçeyekî «ji cih derketî» ye — ew pergaleke hestiyar e ku demkî xwe diparêze. Û ev dikare ji nû ve were xebitandin."
            }
        },
        {
            "heading": {
                "fr": "Une main qui guide le mouvement",
                "de": "Eine Hand, die Bewegung lenkt",
                "en": "A hand that guides movement",
                "nl": "Een hand die beweging stuurt",
                "tr": "Hareketi yönlendiren bir el",
                "ar": "يدٌ توجّه الحركة",
                "pl": "Ręka, która prowadzi ruch",
                "uk": "Рука, що спрямовує рух",
                "es": "Una mano que guía el movimiento",
                "ku": "Destek ku rê nîşanî tevgerê dide"
            },
            "body": {
                "fr": "La thérapie manuelle regroupe un ensemble de techniques — mobilisations, manipulations, travail des tissus — appliquées par les mains du thérapeute. Leur but n'est pas de corriger une structure, mais de moduler la douleur, gagner en mobilité et créer une fenêtre de confort. Cette fenêtre a une valeur précise : elle vous permet de rebouger plus tôt et avec moins d'appréhension. Car c'est le mouvement actif qui fait le travail de fond. La science est claire là-dessus : la thérapie manuelle donne ses meilleurs résultats associée à l'exercice, pas utilisée seule. La main ouvre la porte ; vos mouvements consolident le résultat dans la durée. C'est pourquoi, à Eupen, nous combinons toujours techniques manuelles et exercices adaptés.",
                "de": "Die manuelle Therapie umfasst verschiedene Techniken — Mobilisationen, Manipulationen, Gewebearbeit —, die mit den Händen des Therapeuten angewandt werden. Ihr Ziel ist nicht, eine Struktur zu korrigieren, sondern Schmerzen zu modulieren, Beweglichkeit zu gewinnen und ein Zeitfenster des Wohlbefindens zu schaffen. Dieses Fenster hat einen klaren Wert: Es erlaubt Ihnen, früher und mit weniger Angst wieder in Bewegung zu kommen. Denn die eigentliche Grundlagenarbeit leistet die aktive Bewegung. Die Wissenschaft ist hier eindeutig: Manuelle Therapie wirkt am besten in Kombination mit Bewegung, nicht allein. Die Hand öffnet die Tür; Ihre Bewegungen festigen das Ergebnis auf Dauer. Deshalb verbinden wir in Eupen stets manuelle Techniken mit passenden Übungen.",
                "en": "Manual therapy brings together a set of techniques — mobilisations, manipulations, soft-tissue work — applied by the therapist's hands. Their goal is not to correct a structure, but to modulate pain, gain mobility and create a window of comfort. That window has a precise value: it lets you move again sooner and with less apprehension. Because it is active movement that does the deep work. The science is clear on this: manual therapy gives its best results combined with exercise, not used alone. The hand opens the door; your movements consolidate the result over time. That is why, in Eupen, we always combine manual techniques with tailored exercises.",
                "nl": "Manuele therapie bundelt een geheel van technieken — mobilisaties, manipulaties, weefselwerk — toegepast door de handen van de therapeut. Hun doel is niet een structuur te corrigeren, maar pijn te moduleren, mobiliteit te winnen en een comfortvenster te creëren. Dat venster heeft een duidelijke waarde: het laat u toe vroeger en met minder schroom weer te bewegen. Want het is de actieve beweging die het grondwerk doet. De wetenschap is hierover duidelijk: manuele therapie geeft haar beste resultaten in combinatie met oefening, niet alleen gebruikt. De hand opent de deur; uw bewegingen verankeren het resultaat op termijn. Daarom combineren we in Eupen altijd manuele technieken met aangepaste oefeningen.",
                "tr": "Manuel terapi, terapistin elleriyle uygulanan bir dizi tekniği bir araya getirir — mobilizasyonlar, manipülasyonlar, doku çalışması. Amaçları bir yapıyı düzeltmek değil, ağrıyı düzenlemek, hareketlilik kazanmak ve bir konfor penceresi yaratmaktır. Bu pencerenin net bir değeri vardır: daha erken ve daha az çekinerek yeniden hareket etmenizi sağlar. Çünkü asıl temel işi aktif hareket yapar. Bilim bu konuda nettir: manuel terapi en iyi sonuçları egzersizle birlikte verir, tek başına değil. El kapıyı açar; hareketleriniz sonucu zamanla pekiştirir. İşte bu yüzden Eupen'de manuel teknikleri her zaman uygun egzersizlerle birleştiriyoruz.",
                "ar": "يجمع العلاج اليدوي مجموعة من التقنيات — التعبئة، والمناورات، والعمل على الأنسجة — يطبّقها المعالج بيديه. هدفها ليس تصحيح بنية، بل تعديل الألم، واكتساب الحركة، وخلق نافذة من الراحة. لهذه النافذة قيمة محددة: تتيح لك العودة إلى الحركة أبكر وبخوف أقل. لأن الحركة النشطة هي التي تقوم بالعمل العميق. العلم واضح في هذا: يعطي العلاج اليدوي أفضل نتائجه مقترنًا بالتمرين، لا مستخدمًا وحده. اليد تفتح الباب؛ وحركاتك تثبّت النتيجة على المدى الطويل. لهذا، في أوبن، نجمع دائمًا بين التقنيات اليدوية والتمارين المناسبة.",
                "pl": "Terapia manualna łączy zestaw technik — mobilizacje, manipulacje, pracę na tkankach — wykonywanych rękami terapeuty. Ich celem nie jest korygowanie struktury, lecz modulowanie bólu, zyskanie ruchomości i stworzenie okna komfortu. To okno ma konkretną wartość: pozwala wcześniej i z mniejszą obawą znów się ruszać. Bo to ruch aktywny wykonuje zasadniczą pracę. Nauka jest w tym jasna: terapia manualna daje najlepsze wyniki w połączeniu z ćwiczeniami, a nie stosowana samodzielnie. Ręka otwiera drzwi; Twoje ruchy utrwalają efekt na dłużej. Dlatego w Eupen zawsze łączymy techniki manualne z dopasowanymi ćwiczeniami.",
                "uk": "Мануальна терапія об'єднує сукупність технік — мобілізації, маніпуляції, роботу з м'якими тканинами, — які терапевт виконує руками. Їхня мета — не виправити структуру, а модулювати біль, покращити рухливість і створити вікно комфорту. Це вікно має чітку цінність: воно дає змогу знову рухатися раніше й з меншою тривогою. Адже саме активний рух виконує основну роботу. Наука тут однозначна: мануальна терапія дає найкращі результати в поєднанні з вправами, а не сама по собі. Рука відчиняє двері; Ваші рухи закріплюють результат надовго. Саме тому в Ойпені ми завжди поєднуємо мануальні техніки з індивідуально підібраними вправами.",
                "es": "La terapia manual reúne un conjunto de técnicas — movilizaciones, manipulaciones, trabajo de los tejidos — aplicadas con las manos del terapeuta. Su objetivo no es corregir una estructura, sino modular el dolor, ganar movilidad y crear una ventana de confort. Esa ventana tiene un valor preciso: le permite volver a moverse antes y con menos aprensión. Porque es el movimiento activo el que hace el trabajo de fondo. La ciencia es clara al respecto: la terapia manual da sus mejores resultados asociada al ejercicio, no utilizada sola. La mano abre la puerta; sus movimientos consolidan el resultado a largo plazo. Por eso, en Eupen, siempre combinamos técnicas manuales y ejercicios adaptados.",
                "ku": "Terapiya destî komek teknîkan dihewîne — mobîlîzasyon, manîpulasyon, xebata li ser tevnên nerm — ku bi destên terapîst têne sepandin. Armanca wan ne rastkirina avahiyekê ye, lê birêvebirina êşê, zêdekirina livînê û afirandina pencereyeke rehetiyê ye. Ev pencere xwedî nirxeke diyar e: ew dihêle hûn zûtir û bi kêmtir fikar dîsa biliviyin. Ji ber ku tevgera çalak e ku karê bingehîn dike. Zanist di vê yekê de zelal e: terapiya destî encamên xwe yên herî baş bi werzîşê re dide, ne bi tena serê xwe. Dest derî vedike; tevgerên we encamê bi demê re xurt dikin. Ji ber vê yekê, li Eupenê, em her tim teknîkên destî û werzîşên li gorî we hatine amadekirin bi hev re bi kar tînin."
            },
            "infographic": "movement"
        },
        {
            "heading": {
                "fr": "La règle d'or de l'équipe",
                "de": "Die goldene Regel des Teams",
                "en": "The team's golden rule",
                "nl": "De gouden regel van het team",
                "tr": "Ekibin altın kuralı",
                "ar": "القاعدة الذهبية للفريق",
                "pl": "Złota zasada zespołu",
                "uk": "Золоте правило команди",
                "es": "La regla de oro del equipo",
                "ku": "Qaîdeya zêrîn a tîmê"
            },
            "body": {
                "fr": "Une phrase résume notre façon de travailler : « Nos mains ne réparent pas votre corps — elles lui rappellent qu'il peut bouger sans danger. » Autrement dit, la séance ne vise pas à vous « réparer » passivement, mais à relancer une mécanique que votre corps sait déjà faire tourner. Le soulagement ressenti sur la table n'est pas une fin : c'est le point de départ d'un retour progressif au mouvement, à votre rythme.",
                "de": "Ein Satz fasst unsere Arbeitsweise zusammen: « Unsere Hände reparieren Ihren Körper nicht — sie erinnern ihn daran, dass er sich gefahrlos bewegen kann. » Mit anderen Worten: Die Sitzung soll Sie nicht passiv « reparieren », sondern eine Mechanik wieder in Gang bringen, die Ihr Körper längst beherrscht. Die Erleichterung auf der Behandlungsliege ist kein Ziel, sondern der Ausgangspunkt für eine schrittweise Rückkehr zur Bewegung — in Ihrem Tempo.",
                "en": "One sentence sums up how we work: « Our hands do not repair your body — they remind it that it can move safely. » In other words, the session is not about passively « fixing » you, but about restarting a mechanism your body already knows how to run. The relief felt on the table is not an end point: it is the starting point of a gradual return to movement, at your own pace.",
                "nl": "Eén zin vat onze werkwijze samen: « Onze handen herstellen uw lichaam niet — ze herinneren het eraan dat het veilig kan bewegen. » Met andere woorden: de sessie wil u niet passief « herstellen », maar een mechaniek heropstarten die uw lichaam al beheerst. De verlichting op de behandeltafel is geen eindpunt: het is het startpunt van een geleidelijke terugkeer naar beweging, op uw eigen tempo.",
                "tr": "Bir cümle çalışma şeklimizi özetler: « Ellerimiz bedeninizi onarmaz — ona güvenle hareket edebileceğini hatırlatır. » Başka bir deyişle, seans sizi pasif biçimde « onarmayı » değil, bedeninizin zaten nasıl çalıştıracağını bildiği bir mekanizmayı yeniden harekete geçirmeyi amaçlar. Masada hissedilen rahatlama bir son değildir: kendi temponuzda harekete kademeli dönüşün başlangıç noktasıdır.",
                "ar": "تلخّص جملة واحدة طريقتنا في العمل: « أيدينا لا تُصلح جسدك — بل تُذكّره بأنه يستطيع الحركة بأمان. » بعبارة أخرى، لا تهدف الجلسة إلى « إصلاحك » بشكل سلبي، بل إلى إعادة تشغيل آلية يعرف جسدك أصلًا كيف يُديرها. الراحة التي تشعر بها على الطاولة ليست نهاية: إنها نقطة انطلاق لعودة تدريجية إلى الحركة، وبإيقاعك الخاص.",
                "pl": "Jedno zdanie podsumowuje nasz sposób pracy: « Nasze ręce nie naprawiają Twojego ciała — przypominają mu, że może bezpiecznie się poruszać. » Innymi słowy, sesja nie polega na biernym « naprawianiu » Ciebie, lecz na ponownym uruchomieniu mechanizmu, który Twoje ciało już zna. Ulga odczuwana na stole to nie koniec: to punkt wyjścia do stopniowego powrotu do ruchu, we własnym tempie.",
                "uk": "Одне речення підсумовує наш підхід до роботи: «Наші руки не лагодять Ваше тіло — вони нагадують йому, що воно може рухатися безпечно». Іншими словами, сеанс має на меті не пасивно Вас «полагодити», а перезапустити механізм, який Ваше тіло вже вміє запускати. Полегшення, яке Ви відчуваєте на кушетці, — не кінцева мета: це відправна точка поступового повернення до руху у Вашому власному темпі.",
                "es": "Una frase resume nuestra forma de trabajar: «Nuestras manos no reparan su cuerpo — le recuerdan que puede moverse sin peligro». Dicho de otro modo, la sesión no busca «repararle» de forma pasiva, sino relanzar una mecánica que su cuerpo ya sabe hacer funcionar. El alivio que siente en la camilla no es un final: es el punto de partida de un regreso progresivo al movimiento, a su propio ritmo.",
                "ku": "Hevokek awayê xebata me kurt dike: «Destên me laşê we tamîr nakin — ew tînin bîra wî ku ew dikare bê xeter biliviye.» Bi gotineke din, armanca danişînê ne ew e ku we bi awayekî pasîf «tamîr bike», lê ew e ku mekanîzmayeke ku laşê we jixwe dizane bixebitîne ji nû ve bide destpêkirin. Rehetiya ku hûn li ser maseyê hîs dikin ne dawî ye: ew xala destpêkê ya vegereke gav bi gav a tevgerê ye, li gorî rîtma we."
            }
        },
        {
            "heading": {
                "fr": "Trois réflexes utiles",
                "de": "Drei nützliche Reflexe",
                "en": "Three useful habits",
                "nl": "Drie nuttige reflexen",
                "tr": "Üç yararlı alışkanlık",
                "ar": "ثلاثة ردود فعل مفيدة",
                "pl": "Trzy przydatne nawyki",
                "uk": "Три корисні звички",
                "es": "Tres hábitos útiles",
                "ku": "Sê adetên bikêr"
            },
            "body": {
                "fr": "D'abord, bougez tôt et en douceur : après une douleur, la pire stratégie est l'immobilité prolongée. Ensuite, soignez le terrain : sommeil, niveau de stress et activité physique régulière influencent fortement votre douleur — elle n'est jamais purement mécanique. Enfin, ne courez pas après le craquement : un soin efficace ne se mesure pas au bruit, mais à ce que vous arrivez à refaire ensuite. Ces trois réflexes, simples, valent souvent mieux qu'un geste spectaculaire.",
                "de": "Erstens: Bewegen Sie sich früh und sanft — nach einem Schmerz ist anhaltende Ruhe die schlechteste Strategie. Zweitens: Pflegen Sie das Umfeld — Schlaf, Stresslevel und regelmäßige Bewegung beeinflussen Ihren Schmerz stark; er ist nie rein mechanisch. Drittens: Jagen Sie nicht dem Knacken hinterher — wirksame Behandlung misst sich nicht am Geräusch, sondern daran, was Sie danach wieder tun können. Diese drei einfachen Reflexe sind oft mehr wert als ein spektakulärer Handgriff.",
                "en": "First, move early and gently: after pain, prolonged rest is the worst strategy. Second, look after the bigger picture: sleep, stress levels and regular physical activity strongly influence your pain — it is never purely mechanical. Third, do not chase the crack: effective care is not measured by the sound, but by what you manage to do again afterwards. These three simple habits are often worth more than a spectacular move.",
                "nl": "Ten eerste: beweeg vroeg en zacht — na pijn is langdurige rust de slechtste strategie. Ten tweede: zorg voor de bredere context — slaap, stressniveau en regelmatige lichaamsbeweging beïnvloeden uw pijn sterk; ze is nooit puur mechanisch. Ten derde: jaag niet op de krak — doeltreffende zorg meet u niet aan het geluid, maar aan wat u daarna weer kunt doen. Deze drie eenvoudige reflexen zijn vaak meer waard dan een spectaculaire handeling.",
                "tr": "Birincisi, erken ve nazikçe hareket edin: ağrıdan sonra uzun süreli hareketsizlik en kötü stratejidir. İkincisi, zemini iyileştirin: uyku, stres düzeyi ve düzenli fiziksel aktivite ağrınızı güçlü biçimde etkiler — ağrı asla yalnızca mekanik değildir. Üçüncüsü, çıtırtının peşinden koşmayın: etkili bakım sesle değil, sonrasında yeniden yapabildiklerinizle ölçülür. Bu üç basit alışkanlık, çoğu zaman gösterişli bir hareketten daha değerlidir.",
                "ar": "أولًا، تحرّك مبكرًا وبلطف: بعد الألم، السكون المطوّل هو أسوأ استراتيجية. ثانيًا، اعتنِ بالأرضية: النوم، ومستوى التوتر، والنشاط البدني المنتظم تؤثّر بقوة في ألمك — فهو ليس ميكانيكيًا بحتًا أبدًا. ثالثًا، لا تلهث وراء الطقطقة: لا تُقاس الرعاية الفعّالة بالصوت، بل بما تستطيع القيام به مجددًا بعدها. هذه الردود الثلاثة البسيطة كثيرًا ما تكون أثمن من حركة مذهلة.",
                "pl": "Po pierwsze, ruszaj się wcześnie i delikatnie: po bólu długotrwały bezruch to najgorsza strategia. Po drugie, zadbaj o podłoże: sen, poziom stresu i regularna aktywność fizyczna silnie wpływają na Twój ból — nigdy nie jest on czysto mechaniczny. Po trzecie, nie goń za trzaskiem: skutecznej opieki nie mierzy się dźwiękiem, lecz tym, co potrafisz znów robić później. Te trzy proste nawyki często są warte więcej niż spektakularny ruch.",
                "uk": "По-перше, рухайтеся рано й обережно: після болю найгірша стратегія — тривала нерухомість. По-друге, подбайте про загальний стан: сон, рівень стресу та регулярна фізична активність сильно впливають на Ваш біль — він ніколи не буває суто механічним. По-третє, не женіться за хрускотом: ефективне лікування вимірюється не звуком, а тим, що Ви знову можете робити після нього. Ці три прості звички часто варті більше, ніж ефектний рух.",
                "es": "Primero, muévase pronto y con suavidad: tras un dolor, la peor estrategia es la inmovilidad prolongada. Después, cuide el terreno: el sueño, el nivel de estrés y la actividad física regular influyen mucho en su dolor — nunca es puramente mecánico. Por último, no persiga el crujido: un tratamiento eficaz no se mide por el ruido, sino por lo que consigue volver a hacer después. Estos tres hábitos sencillos suelen valer más que un gesto espectacular.",
                "ku": "Pêşî, zû û bi nermî biliviyin: piştî êşê, stratejiya herî xirab bêtevgeriya dirêj e. Duyem, li rewşa giştî xwedî derkevin: xew, asta stresê û çalakiya laşî ya birêkûpêk bi hêz bandorê li êşa we dikin — ew qet ne tenê mekanîkî ye. Di dawiyê de, li pey qirçê nekevin: lênihêrîneke bi bandor bi dengê nayê pîvan, lê bi wê yekê ku hûn piştre dikarin dîsa bikin. Ev sê adetên hêsan pir caran ji tevgereke balkêş bêtir hêja ne."
            },
            "infographic": "reflexes"
        },
        {
            "heading": {
                "fr": "Quand consulter ?",
                "de": "Wann sollten Sie kommen?",
                "en": "When should you seek help?",
                "nl": "Wanneer raadplegen?",
                "tr": "Ne zaman başvurmalı?",
                "ar": "متى تستشير؟",
                "pl": "Kiedy się zgłosić?",
                "uk": "Коли звертатися до фахівця?",
                "es": "¿Cuándo consultar?",
                "ku": "Kengê serî li pispor bidin?"
            },
            "body": {
                "fr": "Une douleur qui s'installe au-delà de quelques semaines, qui limite vos gestes du quotidien ou qui survient après un choc mérite un avis. Certains signaux demandent une attention plus rapide : une douleur nocturne intense et inhabituelle, une perte de force ou de sensibilité dans un membre, de la fièvre ou une perte de poids inexpliquée. Ils sont rares, mais dans ces cas, parlez-en sans tarder à votre médecin ou à votre kinésithérapeute. Dans l'immense majorité des situations, le pronostic est favorable et le mouvement reste votre meilleur allié.",
                "de": "Ein Schmerz, der über mehrere Wochen anhält, Ihren Alltag einschränkt oder nach einem Sturz auftritt, verdient eine Abklärung. Einige Signale erfordern raschere Aufmerksamkeit: ein intensiver, ungewöhnlicher nächtlicher Schmerz, ein Kraft- oder Gefühlsverlust in einem Glied, Fieber oder ungewollter Gewichtsverlust. Sie sind selten, aber in diesen Fällen sprechen Sie umgehend mit Ihrem Arzt oder Physiotherapeuten. In der überwiegenden Mehrheit der Fälle ist die Prognose günstig — und Bewegung bleibt Ihr bester Verbündeter.",
                "en": "Pain that settles in beyond a few weeks, limits your daily activities or follows an injury deserves an assessment. Some signals call for quicker attention: intense and unusual night pain, a loss of strength or sensation in a limb, fever or unexplained weight loss. They are rare, but in those cases, speak to your doctor or physiotherapist without delay. In the vast majority of situations, the outlook is good — and movement remains your best ally.",
                "nl": "Pijn die langer dan enkele weken aanhoudt, uw dagelijkse handelingen beperkt of na een schok optreedt, verdient een advies. Sommige signalen vragen snellere aandacht: intense en ongewone nachtelijke pijn, krachts- of gevoelsverlies in een lidmaat, koorts of onverklaard gewichtsverlies. Ze zijn zeldzaam, maar spreek er in die gevallen onverwijld over met uw arts of kinesitherapeut. In de overgrote meerderheid van de situaties is de prognose gunstig — en blijft beweging uw beste bondgenoot.",
                "tr": "Birkaç haftayı aşan, günlük hareketlerinizi kısıtlayan ya da bir darbeden sonra ortaya çıkan ağrı bir değerlendirmeyi hak eder. Bazı işaretler daha hızlı dikkat gerektirir: yoğun ve alışılmadık gece ağrısı, bir uzuvda güç ya da his kaybı, ateş veya açıklanamayan kilo kaybı. Bunlar nadirdir, ancak bu durumlarda gecikmeden doktorunuza veya fizyoterapistinize danışın. Durumların büyük çoğunluğunda gidişat olumludur — ve hareket en iyi müttefikiniz olmaya devam eder.",
                "ar": "الألم الذي يستقرّ لأكثر من بضعة أسابيع، أو يحدّ من حركاتك اليومية، أو يظهر بعد صدمة، يستحق استشارة. بعض الإشارات تتطلّب انتباهًا أسرع: ألم ليلي شديد وغير معتاد، فقدان للقوة أو الإحساس في أحد الأطراف، حُمّى، أو فقدان وزن غير مبرّر. إنها نادرة، لكن في هذه الحالات تحدّث دون تأخير إلى طبيبك أو أخصائي العلاج الطبيعي. في الغالبية العظمى من الحالات يكون المآل جيدًا — وتبقى الحركة أفضل حليف لك.",
                "pl": "Ból, który utrzymuje się ponad kilka tygodni, ogranicza codzienne czynności lub pojawia się po urazie, zasługuje na konsultację. Niektóre sygnały wymagają szybszej uwagi: intensywny i nietypowy ból nocny, utrata siły lub czucia w kończynie, gorączka albo niewyjaśniona utrata masy ciała. Są rzadkie, ale w takich przypadkach bezzwłocznie porozmawiaj z lekarzem lub fizjoterapeutą. W zdecydowanej większości sytuacji rokowanie jest dobre — a ruch pozostaje Twoim najlepszym sojusznikiem.",
                "uk": "Біль, що триває довше кількох тижнів, обмежує Ваші повсякденні дії або виник після удару, вартий консультації. Деякі сигнали потребують швидшої уваги: сильний і незвичний нічний біль, втрата сили або чутливості в кінцівці, гарячка чи незрозуміла втрата ваги. Вони трапляються рідко, але в таких випадках без зволікань зверніться до свого лікаря або фізіотерапевта. У переважній більшості ситуацій прогноз сприятливий, а рух залишається Вашим найкращим союзником.",
                "es": "Un dolor que se prolonga más allá de unas semanas, que limita sus gestos cotidianos o que aparece tras un golpe merece una valoración. Algunas señales requieren una atención más rápida: un dolor nocturno intenso e inusual, una pérdida de fuerza o de sensibilidad en un miembro, fiebre o una pérdida de peso inexplicada. Son poco frecuentes, pero en esos casos hable sin demora con su médico o su fisioterapeuta. En la inmensa mayoría de las situaciones, el pronóstico es favorable y el movimiento sigue siendo su mejor aliado.",
                "ku": "Êşeke ku ji çend hefteyan zêdetir berdewam dike, tevgerên we yên rojane sînordar dike an piştî derbeyekê çêdibe, hêjayî nirxandinekê ye. Hin nîşan hewceyî baldariyeke zûtir in: êşeke şevê ya dijwar û neasayî, windabûna hêzê an hestê di endamekî laş de, ta an kêmbûna giraniyê ya bê sedem. Ev kêm in, lê di van rewşan de bê derengî bi bijîjkê xwe an fizyoterapîstê xwe re biaxivin. Di piraniya mezin a rewşan de, pêşbînî baş e û tevger hevalbendê we yê herî baş dimîne."
            }
        },
        {
            "heading": {
                "fr": "Au cabinet Praxis Loten",
                "de": "In der Praxis Loten",
                "en": "At Praxis Loten",
                "nl": "Bij Praxis Loten",
                "tr": "Praxis Loten kliniğinde",
                "ar": "في عيادة براكسيس لوتن",
                "pl": "W Praxis Loten",
                "uk": "У кабінеті Praxis Loten",
                "es": "En la consulta Praxis Loten",
                "ku": "Li kabîneya Praxis Loten"
            },
            "body": {
                "fr": "Notre prise en charge à Eupen repose sur quatre piliers : un bilan précis pour comprendre votre situation ; des techniques manuelles ciblées pour ouvrir la fenêtre de confort ; des exercices personnalisés pour ancrer le progrès ; et de l'éducation, parce que comprendre sa douleur, c'est déjà la diminuer. La thérapie manuelle n'est qu'une option parmi de nombreuses prises en charge possibles — nous l'adaptons à vous, jamais l'inverse. Notre objectif n'est pas de vous rendre dépendant de nos mains, mais de vous redonner confiance dans votre propre mouvement.",
                "de": "Unsere Behandlung in Eupen ruht auf vier Säulen: einer genauen Untersuchung, um Ihre Situation zu verstehen; gezielten manuellen Techniken, um das Fenster des Wohlbefindens zu öffnen; individuellen Übungen, um den Fortschritt zu verankern; und Aufklärung, denn seinen Schmerz zu verstehen heißt bereits, ihn zu verringern. Die manuelle Therapie ist nur eine Option unter vielen möglichen Behandlungswegen — wir passen sie an Sie an, nie umgekehrt. Unser Ziel ist nicht, Sie von unseren Händen abhängig zu machen, sondern Ihnen das Vertrauen in Ihre eigene Bewegung zurückzugeben.",
                "en": "Our care in Eupen rests on four pillars: a precise assessment to understand your situation; targeted manual techniques to open the window of comfort; personalised exercises to anchor progress; and education, because understanding your pain already helps reduce it. Manual therapy is only one option among many possible approaches — we adapt it to you, never the other way around. Our goal is not to make you dependent on our hands, but to give you back confidence in your own movement.",
                "nl": "Onze zorg in Eupen rust op vier pijlers: een nauwkeurig onderzoek om uw situatie te begrijpen; gerichte manuele technieken om het comfortvenster te openen; gepersonaliseerde oefeningen om de vooruitgang te verankeren; en educatie, want uw pijn begrijpen helpt ze al te verminderen. Manuele therapie is slechts één optie tussen vele mogelijke aanpakken — we passen ze aan u aan, nooit omgekeerd. Ons doel is niet u afhankelijk te maken van onze handen, maar u het vertrouwen in uw eigen beweging terug te geven.",
                "tr": "Eupen'deki bakımımız dört temele dayanır: durumunuzu anlamak için kesin bir değerlendirme; konfor penceresini açmak için hedefli manuel teknikler; ilerlemeyi pekiştirmek için kişiselleştirilmiş egzersizler; ve eğitim, çünkü ağrınızı anlamak onu azaltmaya başlamaktır. Manuel terapi, olası birçok yaklaşımdan yalnızca biridir — onu size uyarlarız, asla tersi olmaz. Amacımız sizi ellerimize bağımlı kılmak değil, kendi hareketinize olan güveninizi geri vermektir.",
                "ar": "تقوم رعايتنا في أوبن على أربع ركائز: تقييم دقيق لفهم حالتك؛ وتقنيات يدوية موجّهة لفتح نافذة الراحة؛ وتمارين مخصّصة لترسيخ التقدّم؛ والتثقيف، لأن فهم ألمك هو بداية تقليله. العلاج اليدوي ليس سوى خيار واحد بين العديد من المقاربات الممكنة — نكيّفه ليناسبك، لا العكس أبدًا. هدفنا ليس جعلك معتمدًا على أيدينا، بل إعادة الثقة إليك في حركتك الخاصة.",
                "pl": "Nasza opieka w Eupen opiera się na czterech filarach: dokładnej ocenie, by zrozumieć Twoją sytuację; ukierunkowanych technikach manualnych, by otworzyć okno komfortu; spersonalizowanych ćwiczeniach, by utrwalić postęp; oraz edukacji, bo zrozumienie bólu już pomaga go zmniejszyć. Terapia manualna to tylko jedna z wielu możliwych metod — dopasowujemy ją do Ciebie, nigdy odwrotnie. Naszym celem nie jest uzależnienie Cię od naszych rąk, lecz przywrócenie Ci zaufania do własnego ruchu.",
                "uk": "Наш підхід в Ойпені тримається на чотирьох опорах: точне обстеження, щоб зрозуміти Вашу ситуацію; цілеспрямовані мануальні техніки, щоб відчинити вікно комфорту; індивідуальні вправи, щоб закріпити прогрес; і навчання, бо зрозуміти свій біль — це вже його зменшити. Мануальна терапія — лише один варіант серед багатьох можливих підходів: ми підлаштовуємо її під Вас, а не навпаки. Наша мета — не зробити Вас залежними від наших рук, а повернути Вам довіру до власного руху.",
                "es": "Nuestra atención en Eupen se basa en cuatro pilares: una valoración precisa para comprender su situación; técnicas manuales específicas para abrir la ventana de confort; ejercicios personalizados para afianzar el progreso; y educación, porque comprender el propio dolor ya es reducirlo. La terapia manual es solo una opción entre muchos abordajes posibles — la adaptamos a usted, nunca al revés. Nuestro objetivo no es hacerle dependiente de nuestras manos, sino devolverle la confianza en su propio movimiento.",
                "ku": "Lênihêrîna me li Eupenê li ser çar stûnan radiweste: nirxandineke rast ji bo têgihîştina rewşa we; teknîkên destî yên armancdar ji bo vekirina pencereya rehetiyê; werzîşên kesane ji bo xurtkirina pêşketinê; û perwerde, ji ber ku têgihîştina êşa xwe jixwe kêmkirina wê ye. Terapiya destî tenê vebijarkek e di nav gelek rêbazên dermankirinê yên gengaz de — em wê li gorî we eyar dikin, qet ne berevajî. Armanca me ne ew e ku we bi destên me ve girêdayî bikin, lê ew e ku baweriya we bi tevgera we ya xwe vegerînin."
            },
            "infographic": "manual-therapy-pillars"
        }
    ],
    "keyPoints": {
        "fr": [
            "La thérapie manuelle ne « remet rien en place » : elle calme la douleur et relance le mouvement.",
            "Son effet est maximal combinée à l'exercice actif, pas seule.",
            "Le craquement est sans danger et sans lien avec un réalignement.",
            "Votre colonne est solide et faite pour s'adapter.",
            "À Eupen, une approche IFOMPT fondée sur les preuves."
        ],
        "de": [
            "Manuelle Therapie « renkt nichts ein »: Sie lindert Schmerzen und bringt Bewegung zurück.",
            "Ihre Wirkung ist am größten in Kombination mit aktiver Bewegung, nicht allein.",
            "Das Knacken ist ungefährlich und hat nichts mit einer Ausrichtung zu tun.",
            "Ihre Wirbelsäule ist stabil und zur Anpassung gemacht.",
            "In Eupen ein evidenzbasierter IFOMPT-Ansatz."
        ],
        "en": [
            "Manual therapy « puts nothing back »: it eases pain and restarts movement.",
            "Its effect is greatest combined with active exercise, not alone.",
            "The crack is harmless and unrelated to any realignment.",
            "Your spine is strong and built to adapt.",
            "In Eupen, an evidence-based IFOMPT approach."
        ],
        "nl": [
            "Manuele therapie « zet niets recht »: ze verzacht pijn en herstart beweging.",
            "Haar effect is het grootst in combinatie met actieve oefening, niet alleen.",
            "De krak is ongevaarlijk en los van enige heruitlijning.",
            "Uw wervelkolom is sterk en gemaakt om zich aan te passen.",
            "In Eupen een evidence-based IFOMPT-aanpak."
        ],
        "tr": [
            "Manuel terapi « hiçbir şeyi yerine oturtmaz »: ağrıyı dindirir ve hareketi yeniden başlatır.",
            "Etkisi aktif egzersizle birlikte en yüksektir, tek başına değil.",
            "Çıtırtı zararsızdır ve herhangi bir hizalanmayla ilgisi yoktur.",
            "Omurganız güçlüdür ve uyum sağlamak için yapılmıştır.",
            "Eupen'de kanıta dayalı bir IFOMPT yaklaşımı."
        ],
        "ar": [
            "العلاج اليدوي « لا يعيد شيئًا إلى مكانه »: بل يهدّئ الألم ويعيد تشغيل الحركة.",
            "تأثيره أقصى ما يكون مقترنًا بالتمرين النشط، لا وحده.",
            "الطقطقة غير ضارة ولا علاقة لها بأي إعادة محاذاة.",
            "عمودك الفقري قوي ومصمّم للتكيّف.",
            "في أوبن، نهج قائم على الأدلة وفق معيار IFOMPT."
        ],
        "pl": [
            "Terapia manualna « niczego nie nastawia »: łagodzi ból i ponownie uruchamia ruch.",
            "Jej efekt jest największy w połączeniu z aktywnym ćwiczeniem, nie samodzielnie.",
            "Trzask jest nieszkodliwy i niezwiązany z żadnym nastawianiem.",
            "Twój kręgosłup jest mocny i stworzony do adaptacji.",
            "W Eupen podejście oparte na dowodach zgodne z IFOMPT."
        ],
        "uk": [
          "Мануальна терапія нічого «не вправляє на місце»: вона заспокоює біль і відновлює рух.",
          "Її ефект найбільший у поєднанні з активними вправами, а не окремо.",
          "Хрускіт безпечний і не пов'язаний із жодним вирівнюванням.",
          "Ваш хребет міцний і створений, щоб пристосовуватися.",
          "В Ойпені — науково обґрунтований підхід IFOMPT."
        ],
        "es": [
          "La terapia manual no «vuelve a colocar nada en su sitio»: calma el dolor y relanza el movimiento.",
          "Su efecto es máximo combinada con ejercicio activo, no sola.",
          "El crujido es inofensivo y no tiene relación con ningún realineamiento.",
          "Su columna es sólida y está hecha para adaptarse.",
          "En Eupen, un enfoque IFOMPT basado en la evidencia."
        ],
        "ku": [
          "Terapiya destî tiştekî «naxe cihê wî»: ew êşê aram dike û tevgerê ji nû ve dide destpêkirin.",
          "Bandora wê ya herî mezin bi werzîşa çalak re ye, ne bi tena serê xwe.",
          "Qirç bê xeter e û têkiliya wê bi tu rêzkirineke ji nû ve re tune ye.",
          "Stûna pişta we xurt e û ji bo adaptebûnê hatiye çêkirin.",
          "Li Eupenê, nêzîkatiyeke IFOMPT ya li ser delîlan."
        ]
    },
    "ctaText": {
        "fr": "Une douleur qui traîne ou une mobilité réduite ? Prenez rendez-vous au cabinet Praxis Loten à Eupen : nous évaluons, nous vous remettons en mouvement, et nous vous expliquons chaque étape.",
        "de": "Anhaltende Schmerzen oder eingeschränkte Beweglichkeit? Vereinbaren Sie einen Termin in der Praxis Loten in Eupen: Wir untersuchen, bringen Sie wieder in Bewegung und erklären Ihnen jeden Schritt.",
        "en": "Lingering pain or reduced mobility? Book an appointment at Praxis Loten in Eupen: we assess, we get you moving again, and we explain every step.",
        "nl": "Aanhoudende pijn of verminderde mobiliteit? Maak een afspraak bij Praxis Loten in Eupen: we evalueren, we brengen u weer in beweging en we leggen elke stap uit.",
        "tr": "Geçmeyen ağrı ya da azalmış hareketlilik mi? Eupen'deki Praxis Loten'den randevu alın: değerlendiririz, sizi yeniden harekete geçiririz ve her adımı açıklarız.",
        "ar": "ألم مستمر أو حركة محدودة؟ احجز موعدًا في عيادة براكسيس لوتن في أوبن: نقيّم، ونعيدك إلى الحركة، ونشرح لك كل خطوة.",
        "pl": "Uporczywy ból lub ograniczona ruchomość? Umów wizytę w Praxis Loten w Eupen: oceniamy, przywracamy Ci ruch i wyjaśniamy każdy krok.",
        "uk": "Біль, що не минає, чи обмежена рухливість? Запишіться на прийом у кабінет Praxis Loten в Ойпені: ми проведемо обстеження, повернемо Вас до руху й пояснимо кожен крок.",
        "es": "¿Un dolor que no se va o una movilidad reducida? Pida cita en la consulta Praxis Loten de Eupen: le evaluamos, le volvemos a poner en movimiento y le explicamos cada paso.",
        "ku": "Êşeke ku dewam dike an livîneke kêmbûyî? Li kabîneya Praxis Loten li Eupenê randevûyekê bigirin: em we dinirxînin, we dîsa dixin tevgerê û her gavê ji we re rave dikin."
    },
    "bibliography": [
        "Hayden JA et al. Exercise therapy for chronic low back pain. Cochrane Database Syst Rev. 2021;9:CD009790.",
        "Kirker K et al. Manual therapy and exercise for adhesive capsulitis: a systematic review with meta-analysis. J Man Manip Ther. 2023;31(5):311-327.",
        "Jiménez-Del-Barrio S et al. Effectiveness of manual therapy in carpal tunnel syndrome. Int Orthop. 2021;46(2):301-312.",
        "Trager RJ et al. Efficacy of manual therapy for sacroiliac joint pain syndrome. J Man Manip Ther. 2024;32(6):561-572.",
        "Gutiérrez-Espinoza H et al. Effectiveness of manual therapy in distal radius fracture. J Man Manip Ther. 2021;30(1):33-45."
    ],
    "disclaimer": {
        "fr": "Cet article a une vocation informative et ne remplace pas une consultation individuelle. En cas de douleur persistante ou inquiétante, consultez votre kinésithérapeute ou votre médecin.",
        "de": "Dieser Artikel dient der Information und ersetzt keine individuelle Beratung. Bei anhaltenden oder beunruhigenden Schmerzen wenden Sie sich an Ihren Physiotherapeuten oder Arzt.",
        "en": "This article is for information only and does not replace an individual consultation. For persistent or worrying pain, consult your physiotherapist or doctor.",
        "nl": "Dit artikel is louter informatief en vervangt geen individuele consultatie. Raadpleeg bij aanhoudende of verontrustende pijn uw kinesitherapeut of arts.",
        "tr": "Bu makale yalnızca bilgilendirme amaçlıdır ve bireysel bir muayenenin yerini tutmaz. Kalıcı veya endişe verici ağrıda fizyoterapistinize veya doktorunuza danışın.",
        "ar": "هذا المقال لأغراض إعلامية فقط ولا يُغني عن استشارة فردية. في حال الألم المستمر أو المقلق، استشر أخصائي العلاج الطبيعي أو طبيبك.",
        "pl": "Ten artykuł ma charakter wyłącznie informacyjny i nie zastępuje indywidualnej konsultacji. W razie utrzymującego się lub niepokojącego bólu skonsultuj się z fizjoterapeutą lub lekarzem.",
        "uk": "Ця стаття має інформаційний характер і не замінює індивідуальної консультації. У разі тривалого або тривожного болю зверніться до свого фізіотерапевта чи лікаря.",
        "es": "Este artículo tiene carácter informativo y no sustituye una consulta individual. En caso de dolor persistente o preocupante, consulte a su fisioterapeuta o a su médico.",
        "ku": "Ev gotar tenê ji bo agahdariyê ye û şûna şêwirmendiyeke kesane nagire. Di rewşa êşeke domdar an xemdar de, serî li fizyoterapîstê xwe an bijîjkê xwe bidin."
    }
},
  "doser-activite-douleur": {
    title: {
      de: "Bewegen trotz Schmerzen — wie Sie die richtige Dosis finden",
      fr: "Bouger malgré la douleur — comment trouver la bonne dose",
      en: "Moving with Pain — How to Find the Right Dose",
      nl: "Bewegen met pijn — hoe vindt u de juiste dosis?",
      tr: "Ağrıyla hareket etmek — doğru dozu nasıl bulursunuz?",
      ar: "الحركة مع الألم — كيف تجد الجرعة المناسبة؟",
      pl: "Ruch mimo bólu — jak znaleźć odpowiednią dawkę?",
      "uk": "Рухатися попри біль — як знайти правильну дозу",
      "es": "Moverse a pesar del dolor: cómo encontrar la dosis adecuada",
      "ku": "Tevgera digel êşê — çawa doza rast bibînin",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
      "uk": "Мануальна терапія",
      "es": "Terapia manual",
      "ku": "Terapiya destî",
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
      "uk": "«Мені болить — мені зупинитися чи продовжувати рухатися?» Це питання Ви, ймовірно, вже собі ставили. Довгий час медична відповідь була простою: якщо болить — зупиняємося. Наука повністю похитнула цю догму. Сьогодні дослідження у фізіотерапії та науці про біль показують, що рух — навіть із невеликим болем — часто є найкращим лікуванням. Але потрібно знати правильну дозу. У кабінеті Praxis Loten в Ойпені ми пояснимо Вам, як знайти правильний баланс за допомогою простих і конкретних інструментів.",
      "es": "«Me duele: ¿debo parar o seguir moviéndome?» Probablemente usted ya se ha hecho esta pregunta. Durante mucho tiempo, la respuesta médica fue sencilla: si duele, se para. La ciencia ha puesto completamente en cuestión este dogma. Hoy, la investigación en fisioterapia y en ciencias del dolor muestra que moverse —incluso con un poco de dolor— suele ser el mejor tratamiento. Eso sí, hay que conocer la dosis adecuada. En la consulta Praxis Loten de Eupen le explicamos cómo encontrar el equilibrio justo, con herramientas sencillas y concretas.",
      "ku": "«Êşa min heye — divê ez rawestim an bidomînim ku bilivim?» Dibe ku we ev pirs berê ji xwe kiribe. Demeke dirêj bersiva bijîjkî hêsan bû: eger diêşe, raweste. Zanistê ev dogma bi tevahî serûbin kiriye. Îro lêkolînên di fizyoterapî û zanistên êşê de nîşan didin ku tevger — heta bi hinekî êşê jî — pir caran dermankirina herî baş e. Lê divê meriv doza rast nas bike. Li kabîneya Praxis Loten li Eupenê, em ji we re rave dikin ka hûn çawa hevsengiya rast bibînin, bi amûrên hêsan û berbiçav.",
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
        "uk": "Жінка спокійно йде зеленою лісовою стежкою на природі",
        "es": "Mujer caminando tranquilamente por un sendero forestal verde en plena naturaleza",
        "ku": "Jinek bi aramî li ser rêyeke daristanê ya kesk di nav xwezayê de dimeşe",
      },
    },
    sections: [
      {
        heading: {
          de: "Der Mythos zum Aufräumen", fr: "Le mythe à déconstruire", en: "The myth to dismantle",
          nl: "De mythe ontkracht", tr: "Çürütülecek mit", ar: "الخرافة التي يجب تفكيكها", pl: "Mit do obalenia",
          "uk": "Міф, який варто розвіяти",
          "es": "El mito que hay que desmontar",
          "ku": "Efsaneya ku divê were hilweşandin",
        },
        body: {
          de: "Jahrzehntelang war der medizinische Reflex bei Schmerzen derselbe: ausruhen, ruhigstellen, abwarten. Diese Sicht beruht auf einer logischen, aber unvollständigen Idee — Schmerz wäre immer das Spiegelbild einer Schädigung, die geschützt werden muss.\n\nDie moderne Wissenschaft erzählt eine andere Geschichte. Bei anhaltenden muskuloskelettalen Schmerzen schadet absolute Ruhe mehr, als sie nützt. Die Muskeln werden schwächer, die Gelenke verlieren an Beweglichkeit, das Nervensystem wird empfindlicher. Folge: Der Schmerz verstärkt sich, und die Bewegungsangst nistet sich ein.\n\nIm Gegenteil zeigen Studien, dass Bewegung — auch mit etwas Unbehagen — Schmerzen reduziert, die Funktion wiederherstellt und das Vertrauen in den eigenen Körper stärkt. Die Herausforderung besteht also nicht darin, zwischen Ruhe und Aktivität zu wählen, sondern die richtige Bewegungsdosis zu finden: weder zu viel noch zu wenig. Was wir manchmal mit dem Satz zusammenfassen: « Mehr ist nicht immer besser. »",
          fr: "Pendant des décennies, le réflexe médical face à une douleur a été le même : reposer, immobiliser, attendre que ça passe. Cette vision repose sur une idée logique mais incomplète — la douleur serait toujours le reflet d'un dommage qu'il faudrait protéger.\n\nLa science moderne raconte une autre histoire. Pour les douleurs musculo-squelettiques persistantes, le repos absolu fait plus de mal que de bien. Les muscles s'affaiblissent, les articulations perdent en mobilité, le système nerveux devient plus sensible. Résultat : la douleur s'aggrave, et la peur de bouger s'installe.\n\nÀ l'inverse, les études montrent que bouger — y compris avec un peu d'inconfort — réduit la douleur, restaure la fonction et renforce la confiance en son corps. Le défi n'est donc pas de choisir entre repos et activité, mais de trouver la bonne dose de mouvement : ni trop, ni trop peu. Ce que l'on résume parfois par : « plus n'est pas toujours mieux ».",
          en: "For decades, the medical reflex when facing pain was the same: rest, immobilise, wait for it to pass. This view rests on a logical but incomplete idea — pain would always reflect damage that needs to be protected.\n\nModern science tells a different story. For persistent musculoskeletal pain, absolute rest does more harm than good. Muscles weaken, joints lose mobility, the nervous system becomes more sensitive. Result: pain worsens, and fear of movement sets in.\n\nConversely, studies show that moving — even with some discomfort — reduces pain, restores function and rebuilds trust in your body. The challenge is therefore not to choose between rest and activity, but to find the right dose of movement: not too much, not too little. As we sometimes put it: « more is not always better ».",
          nl: "Decennialang was de medische reflex bij pijn dezelfde: rusten, immobiliseren, wachten tot het overgaat. Deze visie berust op een logisch maar onvolledig idee — pijn zou altijd een weerspiegeling zijn van schade die beschermd moet worden.\n\nDe moderne wetenschap vertelt een ander verhaal. Bij aanhoudende musculoskeletale pijn doet absolute rust meer kwaad dan goed. Spieren verzwakken, gewrichten verliezen mobiliteit, het zenuwstelsel wordt gevoeliger. Resultaat: de pijn verergert, en bewegingsangst nestelt zich in.\n\nOmgekeerd tonen studies aan dat bewegen — zelfs met wat ongemak — pijn vermindert, de functie herstelt en het vertrouwen in het eigen lichaam versterkt. De uitdaging is dus niet kiezen tussen rust en activiteit, maar de juiste dosis beweging vinden: niet te veel, niet te weinig.",
          tr: "On yıllar boyunca ağrı karşısındaki tıbbi refleks aynıydı: dinlen, hareketsiz kal, geçmesini bekle. Bu bakış mantıklı ama eksik bir fikre dayanır — ağrı her zaman korunması gereken bir hasarın yansıması olurdu.\n\nModern bilim farklı bir hikâye anlatıyor. Kalıcı kas-iskelet ağrılarında mutlak dinlenme iyiden çok zarar verir. Kaslar zayıflar, eklemler hareketliliğini kaybeder, sinir sistemi daha hassas hale gelir. Sonuç: ağrı kötüleşir ve hareket korkusu yerleşir.\n\nTersine, çalışmalar gösteriyor ki — biraz rahatsızlıkla bile — hareket etmek ağrıyı azaltır, işlevi geri kazandırır ve bedeninize olan güveni güçlendirir. O halde zorluk dinlenme ile aktivite arasında seçim yapmak değil, doğru hareket dozunu bulmaktır.",
          ar: "لعقود طويلة، كان رد الفعل الطبي تجاه الألم واحدًا: الراحة، التثبيت، انتظار زواله. تستند هذه النظرة إلى فكرة منطقية لكن غير كاملة — أن يكون الألم دائمًا انعكاسًا لضرر يجب حمايته.\n\nيروي العلم الحديث قصة مختلفة. في الألم العضلي الهيكلي المستمر، الراحة المطلقة تضرّ أكثر مما تنفع. تضعف العضلات، تفقد المفاصل مرونتها، ويصبح الجهاز العصبي أكثر حساسية. النتيجة: يتفاقم الألم، ويترسّخ الخوف من الحركة.\n\nعلى العكس، تُظهر الدراسات أن الحركة — حتى مع بعض الانزعاج — تُقلّل الألم وتُعيد الوظيفة وتُعزّز الثقة بالجسم. التحدي إذن ليس الاختيار بين الراحة والنشاط، بل العثور على الجرعة المناسبة من الحركة: لا كثيرة ولا قليلة.",
          pl: "Przez dziesięciolecia odruch medyczny w obliczu bólu był ten sam: odpoczywać, unieruchomić, czekać aż przejdzie. To spojrzenie opiera się na logicznej, ale niekompletnej idei — ból zawsze odzwierciedlałby uszkodzenie, które trzeba chronić.\n\nWspółczesna nauka opowiada inną historię. W przewlekłym bólu mięśniowo-szkieletowym całkowity odpoczynek bardziej szkodzi niż pomaga. Mięśnie słabną, stawy tracą ruchomość, układ nerwowy staje się bardziej wrażliwy. Skutek: ból się nasila, a lęk przed ruchem się utrwala.\n\nZ drugiej strony badania pokazują, że ruch — nawet z odrobiną dyskomfortu — zmniejsza ból, przywraca funkcję i wzmacnia zaufanie do własnego ciała. Wyzwanie nie polega więc na wyborze między odpoczynkiem a aktywnością, ale na znalezieniu właściwej dawki ruchu: ani za dużo, ani za mało.",
          "uk": "Протягом десятиліть медичний рефлекс у відповідь на біль був однаковим: відпочивати, знерухомити, чекати, поки мине. Цей погляд ґрунтується на логічній, але неповній ідеї — нібито біль завжди відображає ушкодження, яке потрібно захищати.\n\nСучасна наука розповідає іншу історію. При стійкому болю в опорно-руховому апараті абсолютний спокій шкодить більше, ніж допомагає. М'язи слабшають, суглоби втрачають рухливість, нервова система стає чутливішою. Результат: біль посилюється, і з'являється страх рухатися.\n\nНавпаки, дослідження показують, що рух — навіть із невеликим дискомфортом — зменшує біль, відновлює функцію та зміцнює довіру до власного тіла. Тож завдання полягає не у виборі між відпочинком і активністю, а в тому, щоб знайти правильну дозу руху: не забагато й не замало. Іноді це підсумовують так: «більше — не завжди краще».",
          "es": "Durante décadas, el reflejo médico ante el dolor fue siempre el mismo: reposar, inmovilizar, esperar a que pase. Esta visión se basa en una idea lógica pero incompleta: el dolor sería siempre el reflejo de un daño que habría que proteger.\n\nLa ciencia moderna cuenta otra historia. En los dolores musculoesqueléticos persistentes, el reposo absoluto hace más mal que bien. Los músculos se debilitan, las articulaciones pierden movilidad, el sistema nervioso se vuelve más sensible. Resultado: el dolor empeora y se instala el miedo a moverse.\n\nPor el contrario, los estudios muestran que moverse —incluso con algo de molestia— reduce el dolor, restablece la función y refuerza la confianza en el propio cuerpo. El reto, por tanto, no es elegir entre reposo y actividad, sino encontrar la dosis adecuada de movimiento: ni demasiado, ni demasiado poco. Lo que a veces se resume así: «más no siempre es mejor».",
          "ku": "Bi dehsalan, refleksa bijîjkî li hember êşê her heman bû: bêhnvedan, bêlivkirin, li bendê man heta ku derbas bibe. Ev nêrîn li ser ramaneke mantiqî lê netemam ava dibe — ku êş her tim nîşana zirarekê ye ku divê were parastin.\n\nZanista nûjen çîrokeke din vedibêje. Di êşên domdar ên masûlke û hestiyan de, bêhnvedana tam ji başiyê zêdetir zirarê dide. Masûlke qels dibin, movik livbariya xwe winda dikin, pergala demarî hestiyartir dibe. Encam: êş girantir dibe, û tirsa ji tevgerê bi cih dibe.\n\nBerevajî vê, lêkolîn nîşan didin ku tevger — heta bi hinekî nerehetiyê jî — êşê kêm dike, fonksiyonê vedigerîne û baweriya bi laşê xwe xurt dike. Ji ber vê yekê dijwarî ne ew e ku di navbera bêhnvedan û çalakiyê de hilbijêrin, lê ew e ku doza rast a tevgerê bibînin: ne pir zêde, ne pir kêm. Ev carinan wiha tê kurtkirin: «bêtir ne her tim çêtir e».",
        },
      },
      {
        heading: {
          de: "Bewegung als Medizin", fr: "Le mouvement comme médicament", en: "Movement as medicine",
          nl: "Beweging als medicijn", tr: "İlaç olarak hareket", ar: "الحركة كدواء", pl: "Ruch jako lekarstwo",
          "uk": "Рух як ліки",
          "es": "El movimiento como medicamento",
          "ku": "Tevger wek derman",
        },
        body: {
          de: "Ihre Gewebe — Muskeln, Sehnen, Knorpel, Knochen — sind keine starren Strukturen. Sie sind lebendig und brauchen Stimulation, um gesund zu bleiben. Ohne regelmäßige mechanische Belastung werden sie schwächer. Mit einer angepassten Dosis stärken und reparieren sie sich selbst.\n\nDieses Phänomen nennt man Mechanotransduktion: Bewegung und moderate Belastungen senden Ihren Zellen das Signal « bleib stark, passe dich an ». Genau das passiert, wenn Sie spazieren gehen, eine Einkaufstasche tragen oder Rad fahren.\n\nNoch beeindruckender: Bewegung wirkt als natürliches Schmerzmittel. Beim Bewegen setzt Ihr Körper Substanzen frei, die das Nervensystem beruhigen und die Schmerzempfindlichkeit verringern. Deshalb spüren viele Patienten, wie ihr Schmerz während oder nach einer gut dosierten Trainingseinheit nachlässt — und nicht umgekehrt.",
          fr: "Vos tissus — muscles, tendons, cartilages, os — ne sont pas des structures inertes. Ils sont vivants, et ils ont besoin de stimulation pour rester en bonne santé. Sans contrainte mécanique régulière, ils s'affaiblissent. Avec une dose adaptée, ils se renforcent et se réparent.\n\nC'est ce qu'on appelle la mécanotransduction : le mouvement et les charges modérées envoient à vos cellules un signal qui dit « reste solide, adapte-toi ». C'est exactement ce qui se produit lorsque vous marchez, soulevez un sac de courses ou faites du vélo.\n\nPlus impressionnant encore : l'exercice a un effet antidouleur naturel. En bougeant, votre corps libère des substances qui calment le système nerveux et diminuent la sensibilité à la douleur. C'est pour cela que beaucoup de patients sentent leur douleur diminuer pendant ou après une séance bien dosée — et non l'inverse.",
          en: "Your tissues — muscles, tendons, cartilage, bones — are not inert structures. They are alive, and they need stimulation to stay healthy. Without regular mechanical load, they weaken. With the right dose, they strengthen and repair themselves.\n\nThis is called mechanotransduction: movement and moderate loads send your cells a signal that says « stay strong, adapt ». This is exactly what happens when you walk, carry a grocery bag or cycle.\n\nEven more remarkable: exercise has a natural painkilling effect. When you move, your body releases substances that calm the nervous system and reduce pain sensitivity. That's why many patients feel their pain decrease during or after a well-dosed session — not the other way around.",
          nl: "Uw weefsels — spieren, pezen, kraakbeen, botten — zijn geen inerte structuren. Ze zijn levend en hebben stimulatie nodig om gezond te blijven. Zonder regelmatige mechanische belasting worden ze zwakker. Met een aangepaste dosis versterken en herstellen ze zich.\n\nDat wordt mechanotransductie genoemd: beweging en gematigde belastingen sturen uw cellen een signaal dat zegt « blijf sterk, pas u aan ». Dat gebeurt precies wanneer u wandelt, een boodschappentas tilt of fietst.\n\nNog indrukwekkender: bewegen heeft een natuurlijk pijnstillend effect. Door te bewegen geeft uw lichaam stoffen vrij die het zenuwstelsel kalmeren en de pijngevoeligheid verminderen. Daarom voelen veel patiënten hun pijn afnemen tijdens of na een goed gedoseerde sessie — niet andersom.",
          tr: "Dokularınız — kaslar, tendonlar, kıkırdak, kemikler — atıl yapılar değildir. Canlıdırlar ve sağlıklı kalmak için uyarıma ihtiyaç duyarlar. Düzenli mekanik yüklenme olmadan zayıflarlar. Uygun bir dozla güçlenir ve kendilerini onarırlar.\n\nBuna mekanotransdüksiyon denir: hareket ve orta düzey yükler hücrelerinize « güçlü kal, uyum sağla » mesajını gönderir. Yürüdüğünüzde, bir alışveriş çantası kaldırdığınızda ya da bisiklete bindiğinizde tam olarak bu olur.\n\nDahası: egzersizin doğal bir ağrı kesici etkisi vardır. Hareket ederken vücudunuz, sinir sistemini sakinleştiren ve ağrı duyarlılığını azaltan maddeler salgılar. Bu yüzden birçok hasta, iyi doz ayarlanmış bir seans sırasında veya sonrasında ağrılarının azaldığını hisseder — tersini değil.",
          ar: "أنسجتك — العضلات والأوتار والغضاريف والعظام — ليست هياكل خاملة. إنها حيّة، وتحتاج إلى التحفيز لتبقى بصحة جيدة. بدون تحميل ميكانيكي منتظم، تضعف. وبجرعة مناسبة، تقوى وتُصلح نفسها.\n\nهذا ما يُسمّى النقل الميكانيكي: تُرسل الحركة والأحمال المعتدلة إلى خلاياك إشارة تقول « ابقَ قويًا، تكيّف ». وهذا تحديدًا ما يحدث عندما تمشي، أو تحمل كيس تسوق، أو تركب الدراجة.\n\nوأكثر إثارة للإعجاب: للتمارين تأثير مُسكّن طبيعي للألم. عندما تتحرك، يُطلق جسمك مواد تُهدّئ الجهاز العصبي وتُقلّل من الحساسية للألم. لهذا يشعر كثير من المرضى بانخفاض الألم خلال أو بعد جلسة بجرعة مناسبة — وليس العكس.",
          pl: "Twoje tkanki — mięśnie, ścięgna, chrząstka, kości — nie są bezwładnymi strukturami. Są żywe i potrzebują stymulacji, by pozostać zdrowe. Bez regularnego obciążenia mechanicznego słabną. Przy odpowiedniej dawce wzmacniają się i regenerują.\n\nNazywa się to mechanotransdukcją: ruch i umiarkowane obciążenia wysyłają Twoim komórkom sygnał « pozostań silny, adaptuj się ». Dokładnie to dzieje się, gdy spacerujesz, niesiesz torbę zakupów lub jeździsz na rowerze.\n\nJeszcze bardziej imponujące: ćwiczenia mają naturalne działanie przeciwbólowe. Podczas ruchu organizm uwalnia substancje, które uspokajają układ nerwowy i zmniejszają wrażliwość na ból. Dlatego wielu pacjentów odczuwa, że ich ból maleje podczas lub po dobrze dawkowanej sesji — a nie odwrotnie.",
          "uk": "Ваші тканини — м'язи, сухожилля, хрящі, кістки — не є інертними структурами. Вони живі, і їм потрібна стимуляція, щоб залишатися здоровими. Без регулярного механічного навантаження вони слабшають. За відповідної дози вони зміцнюються та відновлюються.\n\nЦе називається механотрансдукцією: рух і помірні навантаження надсилають Вашим клітинам сигнал «залишайся міцною, адаптуйся». Саме це відбувається, коли Ви ходите, піднімаєте сумку з покупками чи їдете на велосипеді.\n\nЩе вражаючіше: фізичні вправи мають природний знеболювальний ефект. Під час руху Ваше тіло вивільняє речовини, які заспокоюють нервову систему та знижують чутливість до болю. Саме тому багато пацієнтів відчувають, що біль зменшується під час або після правильно дозованого заняття — а не навпаки.",
          "es": "Sus tejidos —músculos, tendones, cartílagos, huesos— no son estructuras inertes. Están vivos y necesitan estímulos para mantenerse sanos. Sin una carga mecánica regular, se debilitan. Con una dosis adecuada, se fortalecen y se reparan.\n\nEs lo que se denomina mecanotransducción: el movimiento y las cargas moderadas envían a sus células una señal que dice «mantente fuerte, adáptate». Es exactamente lo que ocurre cuando usted camina, levanta una bolsa de la compra o monta en bicicleta.\n\nY lo que es aún más sorprendente: el ejercicio tiene un efecto analgésico natural. Al moverse, su cuerpo libera sustancias que calman el sistema nervioso y reducen la sensibilidad al dolor. Por eso muchos pacientes notan que su dolor disminuye durante o después de una sesión bien dosificada, y no al revés.",
          "ku": "Tevnên we — masûlke, tendon, kerkirk, hestî — ne avahiyên bêliv in. Ew zindî ne, û ji bo ku saxlem bimînin hewceyî teşwîqê ne. Bêyî barkirina mekanîkî ya birêkûpêk, ew qels dibin. Bi dozeke guncav, ew xurt dibin û xwe sererast dikin.\n\nJi vê re mekanotransdûksiyon tê gotin: tevger û barên navîn ji şaneyên we re îşaretekê dişînin ku dibêje «bi hêz bimîne, xwe biguncîne». Tam ev e ya ku diqewime dema ku hûn dimeşin, çenteyekî kirînê hildidin an bi bîsîkletê diajon.\n\nHê balkêştir: werzîş xwedî bandoreke xwezayî ya dij-êşê ye. Dema ku hûn dilivin, laşê we hin madeyan berdide ku pergala demarî aram dikin û hestiyariya li hember êşê kêm dikin. Ji ber vê yekê gelek nexweş hîs dikin ku êşa wan di dema danişîneke baş dozkirî de an piştî wê kêm dibe — ne berevajî.",
        },
        infographic: "movement",
      },
      {
        heading: {
          de: "Die 24-Stunden-Regel", fr: "La règle des 24 heures", en: "The 24-hour rule",
          nl: "De 24-uursregel", tr: "24 saat kuralı", ar: "قاعدة الـ 24 ساعة", pl: "Zasada 24 godzin",
          "uk": "Правило 24 годин",
          "es": "La regla de las 24 horas",
          "ku": "Qaîdeya 24 saetan",
        },
        body: {
          de: "Wie wissen Sie, ob Ihre Bewegungsdosis stimmt? Eine einfache, wissenschaftlich validierte Regel kann Ihnen helfen:\n\n« Ein Schmerz während oder direkt nach der Anstrengung ist akzeptabel — vorausgesetzt, er kehrt innerhalb von 24 Stunden auf sein gewohntes Niveau zurück. »\n\nKonkret: Wenn Sie 30 Minuten spazieren gehen und etwas Unbehagen spüren, ist das kein schlechtes Zeichen. Am nächsten Morgen sollte Ihr Schmerz wieder auf dem Niveau des Vortags sein (oder besser). In diesem Fall sind Sie in der richtigen Zone — und Sie können fortfahren.\n\nWenn der Schmerz am nächsten Tag jedoch stärker ist, mehrere Tage anhält oder Sie zum Hinken bringt, war die Dosis zu hoch. Keine Panik: Es genügt, in der nächsten Sitzung etwas zu reduzieren (Dauer, Intensität oder Widerstand) und langsamer fortzuschreiten. Unter vielen Strategien, die wir individuell anpassen, bleibt diese Regel eine der einfachsten und nützlichsten im Alltag.",
          fr: "Comment savoir si votre dose de mouvement est correcte ? Une règle simple, validée par la recherche, peut vous guider :\n\n« Une douleur pendant ou juste après l'effort est acceptable, à condition qu'elle revienne à son niveau habituel dans les 24 heures. »\n\nConcrètement : si vous marchez 30 minutes et que vous ressentez un peu de gêne, ce n'est pas un mauvais signe. Le lendemain matin, votre douleur doit être revenue à ce qu'elle était la veille (ou mieux). Dans ce cas, vous êtes dans la bonne zone — et vous pouvez continuer.\n\nSi en revanche la douleur est encore plus forte le lendemain, qu'elle persiste plusieurs jours, ou qu'elle vous fait boiter, c'est que la dose était trop importante. Pas de panique : il suffit de réduire un peu (durée, intensité ou résistance) lors de la prochaine séance, et de progresser plus doucement. Parmi de nombreuses stratégies que nous adaptons à chacun, cette règle reste l'une des plus simples et des plus utiles au quotidien.",
          en: "How do you know if your movement dose is right? A simple, research-validated rule can guide you:\n\n« Pain during or right after the effort is acceptable, as long as it returns to its usual level within 24 hours. »\n\nIn practice: if you walk for 30 minutes and feel some discomfort, it's not a bad sign. The next morning, your pain should be back to what it was the day before (or better). In that case, you're in the right zone — and you can continue.\n\nHowever, if the pain is even stronger the next day, persists for several days, or makes you limp, the dose was too high. No need to panic: simply reduce a little (duration, intensity or resistance) at the next session and progress more gradually. Among many strategies we tailor to each person, this rule remains one of the simplest and most useful in daily life.",
          nl: "Hoe weet u of uw bewegingsdosis juist is? Een eenvoudige, wetenschappelijk gevalideerde regel kan u leiden:\n\n« Pijn tijdens of vlak na de inspanning is aanvaardbaar, op voorwaarde dat ze binnen 24 uur naar haar gewone niveau terugkeert. »\n\nConcreet: als u 30 minuten wandelt en wat ongemak voelt, is dat geen slecht teken. De volgende ochtend zou uw pijn op het niveau van de vorige dag moeten zijn (of beter). In dat geval zit u in de juiste zone — en kunt u doorgaan.\n\nAls de pijn de volgende dag echter erger is, meerdere dagen aanhoudt of u doet hinken, was de dosis te hoog. Geen paniek: het volstaat om bij de volgende sessie iets te verminderen (duur, intensiteit of weerstand) en wat rustiger op te bouwen. Onder vele strategieën die we voor elke persoon afstemmen, blijft deze regel een van de eenvoudigste en nuttigste in het dagelijks leven.",
          tr: "Hareket dozunuzun doğru olup olmadığını nasıl anlarsınız? Araştırmalarla doğrulanmış basit bir kural size yol gösterebilir:\n\n« Eforun sırasında veya hemen sonrasında bir ağrı kabul edilebilir — yeter ki 24 saat içinde alışılmış seviyesine geri dönsün. »\n\nSomut olarak: 30 dakika yürür ve biraz rahatsızlık hissederseniz, bu kötü bir işaret değildir. Ertesi sabah ağrınız bir önceki günün seviyesine (veya daha iyiye) dönmüş olmalıdır. Bu durumda, doğru bölgedesiniz — ve devam edebilirsiniz.\n\nAma ağrı ertesi gün daha şiddetliyse, birkaç gün sürüyorsa veya sizi topallatıyorsa, doz çok yüksekti. Panik yok: bir sonraki seansta biraz azaltmak (süre, yoğunluk veya direnç) ve daha yavaş ilerlemek yeterlidir. Her kişiye uyarladığımız pek çok stratejiden biri olarak, bu kural günlük yaşamda en basit ve en yararlı olanlardan biri olmaya devam ediyor.",
          ar: "كيف تعرف ما إذا كانت جرعة الحركة لديك مناسبة؟ قاعدة بسيطة، أكدّتها الأبحاث، يمكن أن ترشدك:\n\n« الألم أثناء المجهود أو بعده مباشرة مقبول، شرط أن يعود إلى مستواه المعتاد خلال 24 ساعة. »\n\nبشكل ملموس: إذا مشيتَ 30 دقيقة وشعرتَ ببعض الانزعاج، فهذا ليس علامة سيئة. في صباح اليوم التالي، يجب أن يكون ألمك قد عاد إلى ما كان عليه في اليوم السابق (أو أفضل). في هذه الحالة، أنت في المنطقة الصحيحة — ويمكنك الاستمرار.\n\nأما إذا كان الألم أشد في اليوم التالي، أو استمر عدة أيام، أو جعلك تعرج، فإن الجرعة كانت كبيرة. لا داعي للقلق: يكفي أن تُخفّض قليلًا (المدة أو الشدة أو المقاومة) في الجلسة التالية، وأن تتقدم بشكل أكثر هدوءًا. ضمن أساليب عديدة نُكيّفها مع كل شخص، تظل هذه القاعدة واحدة من أبسطها وأكثرها فائدة في الحياة اليومية.",
          pl: "Skąd wiadomo, czy Twoja dawka ruchu jest właściwa? Prosta, naukowo potwierdzona zasada może Cię prowadzić:\n\n« Ból podczas lub bezpośrednio po wysiłku jest akceptowalny — pod warunkiem, że w ciągu 24 godzin wróci do swojego zwykłego poziomu. »\n\nW praktyce: jeśli idziesz na 30-minutowy spacer i czujesz lekki dyskomfort, to nie jest zły znak. Następnego ranka Twój ból powinien wrócić do poziomu z poprzedniego dnia (lub być mniejszy). W takim razie jesteś we właściwej strefie — i możesz kontynuować.\n\nJeśli jednak następnego dnia ból jest jeszcze silniejszy, utrzymuje się przez kilka dni lub powoduje, że kulejesz, to dawka była za duża. Bez paniki: wystarczy zmniejszyć trochę (czas trwania, intensywność lub opór) podczas kolejnej sesji i postępować łagodniej. Wśród wielu strategii, które dostosowujemy do każdej osoby, ta zasada pozostaje jedną z najprostszych i najbardziej użytecznych w codziennym życiu.",
          "uk": "Як дізнатися, чи правильна Ваша доза руху? Просте правило, підтверджене дослідженнями, може Вам допомогти:\n\n«Біль під час або одразу після навантаження є прийнятним за умови, що протягом 24 годин він повертається до свого звичного рівня».\n\nНа практиці: якщо Ви ходите 30 хвилин і відчуваєте легкий дискомфорт, це не поганий знак. Наступного ранку Ваш біль має повернутися до того рівня, яким він був напередодні (або стати меншим). У такому разі Ви в правильній зоні — і можете продовжувати.\n\nЯкщо ж біль наступного дня сильніший, тримається кілька днів або змушує Вас кульгати, це означає, що доза була надто великою. Без паніки: достатньо трохи зменшити (тривалість, інтенсивність чи опір) на наступному занятті й прогресувати повільніше. Серед багатьох стратегій, які ми адаптуємо до кожного, це правило залишається одним із найпростіших і найкорисніших у повсякденному житті.",
          "es": "¿Cómo saber si su dosis de movimiento es correcta? Una regla sencilla, validada por la investigación, puede orientarle:\n\n«Un dolor durante o justo después del esfuerzo es aceptable, siempre que vuelva a su nivel habitual en un plazo de 24 horas.»\n\nEn la práctica: si camina 30 minutos y siente una ligera molestia, no es una mala señal. A la mañana siguiente, su dolor debería haber vuelto al nivel del día anterior (o estar mejor). En ese caso, está en la zona adecuada y puede continuar.\n\nSi, en cambio, el dolor es aún más fuerte al día siguiente, persiste varios días o le hace cojear, la dosis ha sido excesiva. Sin alarmarse: basta con reducir un poco (duración, intensidad o resistencia) en la siguiente sesión y progresar con más suavidad. Entre las muchas estrategias que adaptamos a cada persona, esta regla sigue siendo una de las más sencillas y útiles en el día a día.",
          "ku": "Hûn çawa dizanin ka doza tevgera we rast e? Qaîdeyeke hêsan, ku ji hêla lêkolînê ve hatiye pejirandin, dikare rêberiya we bike:\n\n«Êşek di dema hewldanê de an yekser piştî wê qebûlkirî ye, bi şertê ku di nav 24 saetan de vegere asta xwe ya asayî.»\n\nBi awayekî berbiçav: eger hûn 30 deqeyan bimeşin û hinekî nerehetiyê hîs bikin, ev ne nîşaneke xirab e. Sibeha din, divê êşa we vegeriyabe asta roja berê (an baştir bûbe). Di vê rewşê de, hûn di herêma rast de ne — û hûn dikarin bidomînin.\n\nLê eger roja din êş hê xurttir be, çend rojan bidome, an we bike ku hûn bilengin, wê demê doz pir zêde bûye. Netirsin: bes e ku di danişîna din de hinekî kêm bikin (dem, giranî an berxwedan) û hêdîtir pêş ve biçin. Di nav gelek stratejiyên ku em ji bo her kesî diguncînin de, ev qaîde yek ji yên herî hêsan û kêrhatî di jiyana rojane de dimîne.",
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
            "uk": "Жінка спокійно прокидається у світлій спальні та бадьоро починає свій день",
            "es": "Mujer despertándose tranquilamente en un dormitorio luminoso y comenzando el día con vitalidad",
            "ku": "Jinek bi aramî di odeyeke razanê ya ronî de şiyar dibe û roja xwe bi enerjî dest pê dike",
          },
          caption: {
            de: "Die 24-Stunden-Regel: Schmerzen am nächsten Morgen sollten auf ihr gewohntes Niveau zurückgekehrt sein",
            fr: "La règle des 24 heures : les douleurs devraient être revenues à leur niveau habituel le lendemain matin",
            en: "The 24-hour rule: pain should return to its usual level the next morning",
            nl: "De 24-uursregel: pijn zou de volgende ochtend naar haar gewone niveau moeten zijn teruggekeerd",
            tr: "24 saat kuralı: ertesi sabah ağrı alışılmış seviyesine dönmüş olmalıdır",
            ar: "قاعدة الـ 24 ساعة: يجب أن تعود الآلام إلى مستواها المعتاد صباح اليوم التالي",
            pl: "Zasada 24 godzin: ból powinien wrócić do normalnego poziomu następnego ranka",
            "uk": "Правило 24 годин: наступного ранку біль має повернутися до свого звичного рівня",
            "es": "La regla de las 24 horas: a la mañana siguiente, el dolor debería haber vuelto a su nivel habitual",
            "ku": "Qaîdeya 24 saetan: divê êş sibeha din vegeriyabe asta xwe ya asayî",
          },
        },
      },
      {
        heading: {
          de: "Das Ampelsystem", fr: "Le système des feux tricolores", en: "The traffic light system",
          nl: "Het stoplichtsysteem", tr: "Trafik ışığı sistemi", ar: "نظام إشارات المرور", pl: "System świateł drogowych",
          "uk": "Система світлофора",
          "es": "El sistema del semáforo",
          "ku": "Pergala ronahiyên trafîkê",
        },
        body: {
          de: "Um in Echtzeit während des Trainings zu entscheiden, haben Forscher ein sehr intuitives Werkzeug validiert: das Ampelsystem, basierend auf einer einfachen Schmerzskala von 0 (kein Schmerz) bis 10 (der schlimmste vorstellbare).\n\nGrünes Licht (0-2/10): kein oder minimaler Schmerz. Machen Sie unbesorgt weiter, Sie können sogar ruhig steigern.\n\nGelbes Licht (3-5/10): spürbarer, aber erträglicher Schmerz. Sie können fortfahren — es ist sogar förderlich. Diese Zone verschlimmert Ihr Problem nicht, anders als viele glauben.\n\nRotes Licht (6/10 oder mehr): Der Schmerz ist stark, Sie kompensieren oder hinken. Stopp: Die Dosis muss in der nächsten Sitzung reduziert werden.\n\nDieses einfache System verändert alles. Es gibt Ihnen einen objektiven Rahmen für Entscheidungen, ohne zwischen « alles abbrechen » und « blind durchziehen » wählen zu müssen. Sie übernehmen die Kontrolle, Schritt für Schritt, in voller Sicherheit.",
          fr: "Pour décider en temps réel pendant l'exercice, les chercheurs ont validé un outil très intuitif : le système des feux tricolores, basé sur une échelle de douleur simple de 0 (aucune douleur) à 10 (la pire imaginable).\n\nFeu vert (0-2/10) : douleur absente ou minime. Continuez sans souci, vous pouvez même progresser tranquillement.\n\nFeu orange (3-5/10) : douleur perceptible, mais supportable. Vous pouvez continuer — c'est même bénéfique. Cette zone n'aggrave pas votre problème, contrairement à ce que beaucoup croient.\n\nFeu rouge (6/10 et plus) : la douleur est forte, vous compensez ou vous boitez. Stop : il faut réduire la dose pour la prochaine séance.\n\nCe système simple change tout. Il vous donne un cadre objectif pour décider, sans avoir à choisir entre tout arrêter ou pousser à l'aveugle. Vous reprenez le contrôle, étape par étape, en toute sécurité.",
          en: "To decide in real time during exercise, researchers have validated a very intuitive tool: the traffic light system, based on a simple pain scale from 0 (no pain) to 10 (the worst imaginable).\n\nGreen light (0-2/10): no or minimal pain. Carry on without worry — you can even progress steadily.\n\nAmber light (3-5/10): noticeable but bearable pain. You can keep going — it's even beneficial. This zone does not worsen your condition, contrary to common belief.\n\nRed light (6/10 and above): pain is strong, you're compensating or limping. Stop: reduce the dose for the next session.\n\nThis simple system changes everything. It gives you an objective framework to decide, without having to choose between stopping everything or pushing blindly. You regain control, step by step, in full safety.",
          nl: "Om tijdens de oefening in real time te beslissen, hebben onderzoekers een zeer intuïtief hulpmiddel gevalideerd: het stoplichtsysteem, gebaseerd op een eenvoudige pijnschaal van 0 (geen pijn) tot 10 (de ergst voorstelbare).\n\nGroen licht (0-2/10): geen of minimale pijn. Ga zonder zorgen door, u kunt zelfs rustig progressie maken.\n\nOranje licht (3-5/10): merkbare maar verdraagbare pijn. U kunt doorgaan — het is zelfs gunstig. Deze zone verergert uw probleem niet, in tegenstelling tot wat velen denken.\n\nRood licht (6/10 en meer): de pijn is sterk, u compenseert of hinkt. Stop: bij de volgende sessie moet de dosis worden verlaagd.\n\nDit eenvoudige systeem verandert alles. Het geeft u een objectief kader om te beslissen, zonder te hoeven kiezen tussen alles stoppen of blind doorduwen. U krijgt opnieuw controle, stap voor stap, in alle veiligheid.",
          tr: "Egzersiz sırasında gerçek zamanlı karar vermek için araştırmacılar çok sezgisel bir araç doğruladılar: trafik ışığı sistemi, 0 (ağrı yok) ile 10 (hayal edilebilecek en kötü) arasında değişen basit bir ağrı skalasına dayanır.\n\nYeşil ışık (0-2/10): ağrı yok veya minimal. Endişe etmeden devam edin, hatta sakin bir şekilde ilerleyebilirsiniz.\n\nSarı ışık (3-5/10): hissedilebilir ama dayanılabilir ağrı. Devam edebilirsiniz — hatta yararlıdır. Bu bölge, birçok kişinin sandığının aksine, sorununuzu kötüleştirmez.\n\nKırmızı ışık (6/10 ve üzeri): ağrı güçlü, kompanze ediyor ya da topallıyorsunuz. Dur: bir sonraki seans için doz azaltılmalı.\n\nBu basit sistem her şeyi değiştirir. Her şeyi durdurmak ya da körü körüne zorlamak arasında seçim yapmak zorunda kalmadan karar vermek için size objektif bir çerçeve sunar. Adım adım, tam bir güvenlik içinde kontrolü yeniden ele alırsınız.",
          ar: "لاتخاذ القرار في الوقت الفعلي أثناء التمرين، أكّد الباحثون أداة بديهية للغاية: نظام إشارات المرور، المبني على مقياس بسيط للألم من 0 (لا ألم) إلى 10 (الأسوأ قابل للتخيّل).\n\nالضوء الأخضر (0-2/10): لا ألم أو ألم خفيف جدًا. تابع دون قلق، يمكنك حتى التقدّم بهدوء.\n\nالضوء البرتقالي (3-5/10): ألم محسوس لكن محتمل. يمكنك الاستمرار — بل هو مفيد. هذه المنطقة لا تُفاقم مشكلتك، عكس ما يعتقده كثيرون.\n\nالضوء الأحمر (6/10 فأكثر): الألم قوي، أنت تتعويض أو تعرج. توقّف: يجب خفض الجرعة في الجلسة التالية.\n\nهذا النظام البسيط يُغيّر كل شيء. يمنحك إطارًا موضوعيًا لاتخاذ القرار، دون الحاجة إلى الاختيار بين التوقف الكامل والاستمرار العشوائي. تستعيد زمام الأمور، خطوة بخطوة، بأمان تام.",
          pl: "Aby podejmować decyzje w czasie rzeczywistym podczas ćwiczeń, badacze potwierdzili bardzo intuicyjne narzędzie: system świateł drogowych, oparty na prostej skali bólu od 0 (brak bólu) do 10 (najgorszy wyobrażalny).\n\nZielone światło (0-2/10): brak bólu lub minimalny. Kontynuuj bez obaw, możesz nawet spokojnie zwiększać obciążenie.\n\nPomarańczowe światło (3-5/10): zauważalny, ale znośny ból. Możesz kontynuować — jest to nawet korzystne. Ta strefa nie pogarsza Twojego problemu, wbrew temu, co wielu sądzi.\n\nCzerwone światło (6/10 i więcej): ból jest silny, kompensujesz lub kulejesz. Stop: w następnej sesji trzeba zmniejszyć dawkę.\n\nTen prosty system zmienia wszystko. Daje obiektywne ramy do podejmowania decyzji, bez konieczności wybierania między całkowitym zatrzymaniem a forsowaniem na ślepo. Odzyskujesz kontrolę, krok po kroku, w pełnym bezpieczeństwie.",
          "uk": "Щоб ухвалювати рішення просто під час вправ, дослідники підтвердили дуже інтуїтивний інструмент: систему світлофора, засновану на простій шкалі болю від 0 (немає болю) до 10 (найсильніший біль, який можна уявити).\n\nЗелене світло (0-2/10): болю немає або він мінімальний. Продовжуйте без побоювань, Ви навіть можете спокійно прогресувати.\n\nЖовте світло (3-5/10): біль відчутний, але терпимий. Ви можете продовжувати — це навіть корисно. Ця зона не погіршує Вашу проблему, всупереч тому, що думають багато хто.\n\nЧервоне світло (6/10 і більше): біль сильний, Ви компенсуєте рухи або кульгаєте. Стоп: на наступному занятті дозу потрібно зменшити.\n\nЦя проста система змінює все. Вона дає Вам об'єктивні рамки для ухвалення рішень, без вибору між тим, щоб усе припинити, або тим, щоб навмання перевантажуватися. Ви повертаєте собі контроль, крок за кроком, у повній безпеці.",
          "es": "Para decidir en tiempo real durante el ejercicio, los investigadores han validado una herramienta muy intuitiva: el sistema del semáforo, basado en una sencilla escala de dolor de 0 (ningún dolor) a 10 (el peor imaginable).\n\nLuz verde (0-2/10): dolor ausente o mínimo. Continúe sin preocupaciones; incluso puede progresar con tranquilidad.\n\nLuz ámbar (3-5/10): dolor perceptible, pero soportable. Puede continuar; incluso es beneficioso. Esta zona no agrava su problema, al contrario de lo que muchos creen.\n\nLuz roja (6/10 o más): el dolor es fuerte, usted compensa o cojea. Alto: hay que reducir la dosis en la siguiente sesión.\n\nEste sencillo sistema lo cambia todo. Le ofrece un marco objetivo para decidir, sin tener que elegir entre dejarlo todo o forzar a ciegas. Usted recupera el control, paso a paso, con total seguridad.",
          "ku": "Ji bo ku di dema werzîşê de di cih de biryarê bidin, lêkolîneran amûreke pir xwezayî pejirandine: pergala ronahiyên trafîkê, ku li ser pîvaneke êşê ya hêsan ji 0 (bê êş) heta 10 (êşa herî xirab a ku meriv dikare xeyal bike) ava dibe.\n\nRonahiya kesk (0-2/10): êş tune ye an pir kêm e. Bê xem bidomînin, hûn heta dikarin bi aramî pêş ve jî biçin.\n\nRonahiya porteqalî (3-5/10): êş tê hîskirin, lê tê ragirtin. Hûn dikarin bidomînin — ev heta bi kêr jî tê. Ev herêm pirsgirêka we giran nake, berevajî ya ku gelek kes bawer dikin.\n\nRonahiya sor (6/10 û zêdetir): êş xurt e, hûn telafî dikin an dilengin. Raweste: divê doz di danişîna din de were kêmkirin.\n\nEv pergala hêsan her tiştî diguherîne. Ew çarçoveyeke objektîf dide we da ku biryarê bidin, bêyî ku neçar bimînin di navbera rawestandina her tiştî û zorkirina kor de hilbijêrin. Hûn kontrolê ji nû ve digirin destê xwe, gav bi gav, bi ewlehiya tam.",
        },
        infographic: "traffic-light",
      },
      {
        heading: {
          de: "Wann sollten Sie kommen?", fr: "Quand consulter ?", en: "When to consult?",
          nl: "Wanneer raadplegen?", tr: "Ne zaman başvurmalı?", ar: "متى يجب استشارة الطبيب؟", pl: "Kiedy się zgłosić?",
          "uk": "Коли звертатися до фахівця?",
          "es": "¿Cuándo consultar?",
          "ku": "Kengê serî li pisporekî bidin?",
        },
        body: {
          de: "Diese Werkzeuge sind wertvoll, ersetzen aber keine professionelle Beurteilung. Bitte wenden Sie sich an einen Physiotherapeuten oder Ihren Arzt, wenn:\n\n• der Schmerz länger als einige Wochen anhält und sich nicht bessert;\n• er von ungewöhnlichen Zeichen begleitet wird: Kribbeln, Kraftverlust, Fieber, unerklärlicher Gewichtsverlust, Probleme beim Wasserlassen;\n• er nach einem bedeutenden Trauma auftritt;\n• er Sie am Schlafen oder an wichtigen Aktivitäten hindert;\n• Sie schlicht nicht wissen, wo Sie anfangen sollen.\n\nEine Beurteilung durch eine geschulte Fachperson hilft, Ursachen zu erkennen, die besondere Aufmerksamkeit verdienen, und vor allem mit Ihnen ein passendes Programm aufzubauen. Die richtige Dosis ist nicht universell: Sie hängt von Ihrer Geschichte, Ihrem aktuellen Niveau und Ihren Zielen ab. In Eupen ist unser Team genau dafür da: einen klaren Rahmen schaffen und Sie Schritt für Schritt begleiten.",
          fr: "Ces outils sont précieux, mais ils ne remplacent pas une évaluation professionnelle. Consultez un kinésithérapeute ou votre médecin si :\n\n• la douleur persiste plus de quelques semaines sans amélioration ;\n• elle s'accompagne de signes inhabituels : fourmillements, perte de force, fièvre, perte de poids inexpliquée, troubles urinaires ;\n• elle survient après un traumatisme important ;\n• elle vous empêche de dormir ou de pratiquer vos activités essentielles ;\n• vous ne savez tout simplement pas par où commencer.\n\nUne évaluation par un professionnel formé permet d'écarter les causes qui méritent une attention particulière et, surtout, de construire avec vous un programme adapté. Le bon dosage n'est pas universel : il dépend de votre histoire, de votre niveau actuel, de vos objectifs. À Eupen, notre équipe est là pour ça : poser un cadre clair et vous accompagner pas à pas.",
          en: "These tools are valuable but don't replace a professional assessment. Consult a physiotherapist or your doctor if:\n\n• the pain persists for more than a few weeks with no improvement;\n• it is accompanied by unusual signs: tingling, loss of strength, fever, unexplained weight loss, urinary problems;\n• it appears after a significant injury;\n• it prevents you from sleeping or doing essential activities;\n• you simply don't know where to start.\n\nAn assessment by a trained professional helps identify causes that deserve special attention and, above all, build a tailored programme with you. The right dose is not universal: it depends on your history, your current level, your goals. In Eupen, our team is here for exactly that: to set a clear framework and support you step by step.",
          nl: "Deze hulpmiddelen zijn waardevol, maar vervangen geen professionele evaluatie. Raadpleeg een fysiotherapeut of uw arts als:\n\n• de pijn meer dan enkele weken aanhoudt zonder verbetering;\n• ze gepaard gaat met ongewone signalen: tintelingen, krachtverlies, koorts, onverklaarbaar gewichtsverlies, plasproblemen;\n• ze optreedt na een belangrijk letsel;\n• ze u belet te slapen of essentiële activiteiten uit te voeren;\n• u gewoonweg niet weet waar te beginnen.\n\nEen evaluatie door een opgeleide professional helpt oorzaken op te sporen die bijzondere aandacht verdienen en vooral samen met u een aangepast programma op te stellen. De juiste dosering is niet universeel: ze hangt af van uw verhaal, uw huidige niveau, uw doelen. In Eupen is ons team daar precies voor: een helder kader bieden en u stap voor stap begeleiden.",
          tr: "Bu araçlar değerlidir, ancak profesyonel bir değerlendirmenin yerine geçmez. Aşağıdaki durumlarda bir fizyoterapiste veya doktorunuza başvurun:\n\n• ağrı birkaç haftadan fazla sürüyor ve düzelmiyorsa;\n• olağandışı belirtilere eşlik ediyorsa: karıncalanma, güç kaybı, ateş, açıklanamayan kilo kaybı, idrar sorunları;\n• önemli bir yaralanma sonrasında ortaya çıkıyorsa;\n• uyumanızı veya temel aktivitelerinizi yapmanızı engelliyorsa;\n• sadece nereden başlayacağınızı bilmiyorsanız.\n\nEğitimli bir profesyonel tarafından yapılan değerlendirme, özel ilgiyi hak eden nedenleri belirlemeye ve en önemlisi sizinle birlikte size uygun bir program oluşturmaya yardımcı olur. Doğru doz evrensel değildir: hikayenize, mevcut seviyenize, hedeflerinize bağlıdır. Eupen'deki ekibimiz tam da bunun için burada: net bir çerçeve çizmek ve adım adım size eşlik etmek.",
          ar: "هذه الأدوات قيّمة، لكنها لا تُغني عن التقييم المهني. استشر أخصائي علاج طبيعي أو طبيبك في الحالات التالية:\n\n• إذا استمر الألم لأكثر من بضعة أسابيع دون أي تحسن؛\n• إذا رافقته علامات غير معتادة: تنميل، فقدان قوة، حمى، فقدان وزن غير مُفسَّر، مشاكل بولية؛\n• إذا ظهر بعد إصابة مهمّة؛\n• إذا منعك من النوم أو من ممارسة نشاطاتك الأساسية؛\n• إذا كنت ببساطة لا تعرف من أين تبدأ.\n\nإن التقييم من قِبل مهني مُدرَّب يُساعد على رصد الأسباب التي تستحق اهتمامًا خاصًا، والأهم من ذلك بناء برنامج مُناسب معك. الجرعة المناسبة ليست عالمية: تعتمد على تاريخك ومستواك الحالي وأهدافك. في أوبن، فريقنا موجود لهذا تحديدًا: تقديم إطار واضح ومرافقتك خطوة بخطوة.",
          pl: "Te narzędzia są cenne, ale nie zastępują profesjonalnej oceny. Skonsultuj się z fizjoterapeutą lub lekarzem, jeśli:\n\n• ból utrzymuje się dłużej niż kilka tygodni bez poprawy;\n• towarzyszą mu nietypowe objawy: mrowienie, utrata siły, gorączka, niewyjaśniona utrata wagi, problemy z oddawaniem moczu;\n• pojawia się po znaczącym urazie;\n• uniemożliwia Ci spanie lub wykonywanie codziennych aktywności;\n• po prostu nie wiesz, od czego zacząć.\n\nOcena przez przeszkolonego specjalistę pomaga zidentyfikować przyczyny wymagające szczególnej uwagi i, co najważniejsze, wspólnie z Tobą zbudować dostosowany program. Właściwa dawka nie jest uniwersalna: zależy od Twojej historii, obecnego poziomu, Twoich celów. W Eupen nasz zespół jest właśnie po to: zaproponować jasne ramy i towarzyszyć Ci krok po kroku.",
          "uk": "Ці інструменти цінні, але вони не замінюють професійної оцінки. Зверніться до фізіотерапевта або свого лікаря, якщо:\n\n• біль триває понад кілька тижнів без покращення;\n• він супроводжується незвичними ознаками: поколюванням, втратою сили, гарячкою, незрозумілою втратою ваги, порушеннями сечовипускання;\n• він виник після значної травми;\n• він заважає Вам спати або займатися основними справами;\n• Ви просто не знаєте, з чого почати.\n\nОцінка підготовленим фахівцем дає змогу виключити причини, які потребують особливої уваги, і, головне, разом із Вами скласти відповідну програму. Правильне дозування не є універсальним: воно залежить від Вашої історії, Вашого поточного рівня, Ваших цілей. В Ойпені наша команда саме для цього: встановити чіткі рамки та супроводжувати Вас крок за кроком.",
          "es": "Estas herramientas son valiosas, pero no sustituyen una evaluación profesional. Consulte a un fisioterapeuta o a su médico si:\n\n• el dolor persiste más de unas semanas sin mejoría;\n• se acompaña de signos inusuales: hormigueo, pérdida de fuerza, fiebre, pérdida de peso inexplicada, trastornos urinarios;\n• aparece tras un traumatismo importante;\n• le impide dormir o realizar sus actividades esenciales;\n• simplemente no sabe por dónde empezar.\n\nUna evaluación por parte de un profesional cualificado permite descartar las causas que merecen una atención especial y, sobre todo, elaborar con usted un programa adaptado. La dosis adecuada no es universal: depende de su historia, de su nivel actual y de sus objetivos. En Eupen, nuestro equipo está para eso: establecer un marco claro y acompañarle paso a paso.",
          "ku": "Ev amûr bi nirx in, lê cihê nirxandineke profesyonel nagirin. Serî li fizyoterapîstekî an bijîjkê xwe bidin eger:\n\n• êş ji çend hefteyan zêdetir bêyî başbûnê bidome;\n• bi nîşanên neasayî re be: mûrmûrî, windakirina hêzê, tayê, kêmbûna kîloyan a bê sedem, pirsgirêkên mîzê;\n• piştî birîndariyeke giran derkeve;\n• nehêle hûn razên an çalakiyên xwe yên bingehîn bikin;\n• hûn bi tenê nizanin ji ku dest pê bikin.\n\nNirxandina ji hêla pisporekî perwerdekirî ve dihêle ku sedemên ku hewceyî baldariyeke taybet in werin dûrxistin û, berî her tiştî, bi we re bernameyeke guncav were avakirin. Doza rast ne gerdûnî ye: ew bi dîroka we, asta we ya niha û armancên we ve girêdayî ye. Li Eupenê, tîma me ji bo vê yekê heye: çarçoveyeke zelal danîn û gav bi gav bi we re bimeşe.",
        },
        infographic: "pain-alarm",
      },
      {
        heading: {
          de: "In der Praxis Loten", fr: "Au cabinet Praxis Loten", en: "At Praxis Loten",
          nl: "Bij Praxis Loten", tr: "Praxis Loten kliniğinde", ar: "في عيادة براكسيس لوتن", pl: "W gabinecie Praxis Loten",
          "uk": "У кабінеті Praxis Loten",
          "es": "En la consulta Praxis Loten",
          "ku": "Li kabîneya Praxis Loten",
        },
        body: {
          de: "In Eupen begleitet unser Team — Physiotherapeuten, Manualtherapeuten und Osteopathen — täglich Patientinnen und Patienten auf der Suche nach der richtigen Dosis. Unser Ansatz beruht auf vier Säulen:\n\n1. Beurteilen — Ihre aktuelle Bewegungstoleranz, ohne Wertung, ausgehend von Ihrem realen Alltag.\n2. Aufbauen — ein Programm in Ihrer Dosis: stimulierend genug, damit Ihre Gewebe sich anpassen, leicht genug, um Ihre derzeitige Kapazität nicht zu überschreiten.\n3. Lehren — wir vermitteln Ihnen die Werkzeuge: 24-Stunden-Regel, Ampelsystem, Warnsignale, damit Sie Schritt für Schritt selbständig werden.\n4. Vorankommen — gemeinsam und stufenweise, indem wir die Belastung an Ihre Rückmeldungen und Ziele anpassen, als eine von vielen Methoden, die wir je nach Ihren Bedürfnissen kombinieren.\n\nUnser Ziel: dass Sie stärker, selbstsicherer und in der Lage werden, Ihre Aktivität selbst zu dosieren. Schritt für Schritt, gemeinsam.",
          fr: "À Eupen, notre équipe — kinésithérapeutes, thérapeutes manuels et ostéopathes — accompagne chaque jour des patients à la recherche du juste dosage. Notre approche tient en quatre piliers :\n\n1. Évaluer votre tolérance actuelle au mouvement, sans jugement, à partir de votre quotidien réel.\n2. Construire un programme à votre dose : assez stimulant pour faire progresser vos tissus, assez léger pour ne pas dépasser votre capacité du moment.\n3. Éduquer : vous transmettre les outils — règle des 24 heures, feux tricolores, signaux d'alarme — pour que vous deveniez progressivement autonome.\n4. Progresser ensemble par paliers, en ajustant la charge selon vos retours et vos objectifs, parmi de nombreuses approches que nous combinons selon vos besoins.\n\nNotre objectif : que vous repartiez plus solide, plus confiant, et capable de doser votre activité par vous-même. Étape par étape, ensemble.",
          en: "In Eupen, our team — physiotherapists, manual therapists and osteopaths — supports patients every day in finding the right dose. Our approach is built on four pillars:\n\n1. Assess your current movement tolerance, without judgement, starting from your real daily life.\n2. Build a programme at your dose: stimulating enough for your tissues to progress, light enough not to exceed your current capacity.\n3. Educate — we share the tools with you: the 24-hour rule, the traffic light system, warning signs, so you gradually become autonomous.\n4. Progress together step by step, adjusting the load based on your feedback and goals, among many approaches we combine according to your needs.\n\nOur goal: that you leave stronger, more confident, and able to dose your activity yourself. Step by step, together.",
          nl: "In Eupen begeleidt ons team — fysiotherapeuten, manueel therapeuten en osteopaten — dagelijks patiënten op zoek naar de juiste dosering. Onze benadering rust op vier pijlers:\n\n1. Evalueren — uw huidige bewegingstolerantie, zonder oordeel, vanuit uw werkelijke dagelijkse leven.\n2. Opbouwen — een programma op uw maat: stimulerend genoeg om uw weefsels te laten progresseren, licht genoeg om uw huidige capaciteit niet te overschrijden.\n3. Onderwijzen — we geven u de hulpmiddelen mee: 24-uursregel, stoplichtsysteem, alarmsignalen, zodat u geleidelijk autonoom wordt.\n4. Vooruitgaan — samen, stap voor stap, door de belasting aan te passen aan uw feedback en doelen, als een van vele benaderingen die we afstemmen op uw behoeften.\n\nOns doel: dat u sterker, zelfverzekerder en in staat bent om zelf uw activiteit te doseren. Stap voor stap, samen.",
          tr: "Eupen'de fizyoterapistler, manuel terapistler ve osteopatlardan oluşan ekibimiz, doğru dozu arayan hastalara her gün eşlik ediyor. Yaklaşımımız dört temel sütun üzerine kurulu:\n\n1. Değerlendirme — yargılamadan, gerçek günlük yaşamınızdan yola çıkarak mevcut hareket toleransınızı belirliyoruz.\n2. İnşa etme — size özel bir program: dokularınızın ilerlemesi için yeterince uyarıcı, mevcut kapasitenizi aşmayacak kadar hafif.\n3. Eğitme — araçları sizinle paylaşıyoruz: 24 saat kuralı, trafik ışığı sistemi, uyarı sinyalleri — kademeli olarak özerk olmanız için.\n4. İlerleme — birlikte, adım adım, geri bildirimlerinize ve hedeflerinize göre yükü ayarlayarak, ihtiyaçlarınıza göre birleştirdiğimiz pek çok yaklaşımdan biri.\n\nAmacımız: daha güçlü, daha kendine güvenen ve aktivitenizi kendi başınıza dozajlayabilecek şekilde ayrılmanız. Adım adım, birlikte.",
          ar: "في أوبن، يُرافق فريقنا — أخصائيو علاج طبيعي، معالجون يدويون، وأطباء عظام — يوميًا مرضى يبحثون عن الجرعة المناسبة. يقوم نهجنا على أربع ركائز:\n\n1. التقييم — تحمّلك الحالي للحركة، دون حكم، انطلاقًا من واقعك اليومي.\n2. البناء — برنامج بجرعتك: مُحفّز بما يكفي ليتقدّم أنسجتك، خفيف بما يكفي لئلا يتجاوز قدرتك الحالية.\n3. التعليم — نُشاركك الأدوات: قاعدة الـ 24 ساعة، نظام إشارات المرور، علامات الإنذار — لتصبح مستقلًا تدريجيًا.\n4. التقدّم — معًا، خطوة بخطوة، بتعديل الحمل وفق ملاحظاتك وأهدافك، كأحد الأساليب العديدة التي نُكيّفها حسب احتياجاتك.\n\nهدفنا: أن تخرج أقوى، أكثر ثقة، وقادرًا على تعديل جرعة نشاطك بنفسك. خطوة بخطوة، معًا.",
          pl: "W Eupen nasz zespół — fizjoterapeuci, terapeuci manualni i osteopaci — codziennie towarzyszy pacjentom szukającym właściwej dawki. Nasze podejście opiera się na czterech filarach:\n\n1. Ocena — Twojej obecnej tolerancji ruchu, bez osądzania, wychodząc od Twojej rzeczywistej codzienności.\n2. Budowanie — programu na Twoją miarę: wystarczająco stymulującego, by tkanki postępowały, wystarczająco lekkiego, by nie przekroczyć obecnej zdolności.\n3. Edukacja — przekazujemy Ci narzędzia: zasadę 24 godzin, system świateł drogowych, sygnały alarmowe, byś stopniowo stawał się samodzielny.\n4. Postępy — wspólnie, krok po kroku, dostosowując obciążenie do Twoich informacji zwrotnych i celów, jedno z wielu podejść, które łączymy zgodnie z Twoimi potrzebami.\n\nNasz cel: byś wyszedł silniejszy, pewniejszy siebie i zdolny do samodzielnego dawkowania aktywności. Krok po kroku, razem.",
          "uk": "В Ойпені наша команда — фізіотерапевти, мануальні терапевти та остеопати — щодня супроводжує пацієнтів у пошуку правильного дозування. Наш підхід тримається на чотирьох опорах:\n\n1. Оцінити Вашу поточну толерантність до руху, без осуду, виходячи з Вашого реального повсякдення.\n2. Скласти програму у Вашій дозі: достатньо стимулюючу, щоб Ваші тканини прогресували, і достатньо легку, щоб не перевищувати Ваших можливостей на цей момент.\n3. Навчати: передати Вам інструменти — правило 24 годин, світлофор, тривожні сигнали — щоб Ви поступово ставали самостійними.\n4. Прогресувати разом поетапно, коригуючи навантаження відповідно до Ваших відгуків і цілей, серед багатьох підходів, які ми поєднуємо відповідно до Ваших потреб.\n\nНаша мета: щоб Ви пішли від нас міцнішими, впевненішими та здатними самостійно дозувати свою активність. Крок за кроком, разом.",
          "es": "En Eupen, nuestro equipo —fisioterapeutas, terapeutas manuales y osteópatas— acompaña cada día a pacientes que buscan la dosis justa. Nuestro enfoque se basa en cuatro pilares:\n\n1. Evaluar su tolerancia actual al movimiento, sin juzgar, a partir de su vida cotidiana real.\n2. Elaborar un programa a su medida: lo bastante estimulante para que sus tejidos progresen y lo bastante ligero para no superar su capacidad del momento.\n3. Educar: transmitirle las herramientas —regla de las 24 horas, semáforo, señales de alarma— para que usted gane autonomía progresivamente.\n4. Progresar juntos por etapas, ajustando la carga según sus sensaciones y sus objetivos, entre los muchos enfoques que combinamos según sus necesidades.\n\nNuestro objetivo: que usted salga más fuerte, con más confianza y capaz de dosificar su actividad por sí mismo. Paso a paso, juntos.",
          "ku": "Li Eupenê, tîma me — fizyoterapîst, terapîstên destî û osteopat — her roj bi nexweşên ku li doza rast digerin re dixebite. Nêzîkatiya me li ser çar stûnan radiweste:\n\n1. Nirxandina tehemula we ya niha ya ji bo tevgerê, bêyî dadbarkirinê, li gorî jiyana we ya rojane ya rastîn.\n2. Avakirina bernameyeke li gorî doza we: têra xwe teşwîqker ku tevnên we pêş ve biçin, têra xwe sivik ku ji kapasîteya we ya wê gavê derbas nebe.\n3. Perwerdekirin: amûran radestî we bikin — qaîdeya 24 saetan, ronahiyên trafîkê, îşaretên hişyariyê — da ku hûn hêdî hêdî serbixwe bibin.\n4. Bi hev re qonax bi qonax pêş ve biçin, barê li gorî vegerandinên we û armancên we eyar bikin, di nav gelek nêzîkatiyên ku em li gorî hewcedariyên we bi hev re bi kar tînin.\n\nArmanca me: ku hûn bi hêztir, bi baweriyeke zêdetir û bi şiyana dozkirina çalakiya xwe bi xwe ji cem me derkevin. Gav bi gav, bi hev re.",
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
      "uk": [
        "Біль не завжди є сигналом зупинитися — особливо коли йдеться про стійкий біль.",
        "Вашим тканинам потрібен рух: «більше — не завжди краще, але менше — ніколи не краще».",
        "Правило 24 годин: прийнятний біль наступного ранку повертається до свого звичного рівня.",
        "Система світлофора: зелене (0-2) та жовте (3-5) = OK; червоне (6+) = стоп і зменшуємо дозу.",
        "Правильне дозування індивідуальне — його вчаться і вибудовують поступово, в ідеалі з допомогою фахівця."
      ],
      "es": [
        "El dolor no siempre es una señal para parar, sobre todo en los dolores persistentes.",
        "Sus tejidos necesitan movimiento: «más no siempre es mejor, pero menos nunca lo es».",
        "Regla de las 24 horas: un dolor aceptable vuelve a su nivel habitual a la mañana siguiente.",
        "Sistema del semáforo: verde (0-2) y ámbar (3-5) = OK; rojo (6+) = alto y se reduce la dosis.",
        "La dosis adecuada es individual: se aprende y se construye progresivamente, idealmente con la ayuda de un profesional."
      ],
      "ku": [
        "Êş ne her tim îşareta rawestanê ye — bi taybetî ji bo êşên domdar.",
        "Tevnên we hewceyî tevgerê ne: «bêtir ne her tim çêtir e, lê kêmtir qet ne çêtir e».",
        "Qaîdeya 24 saetan: êşeke qebûlkirî sibeha din vedigere asta xwe ya asayî.",
        "Pergala ronahiyên trafîkê: kesk (0-2) û porteqalî (3-5) = OK; sor (6+) = raweste û doz kêm bike.",
        "Doza rast kesane ye — ew hêdî hêdî tê fêrbûn û avakirin, bi awayê îdeal bi alîkariya pisporekî."
      ],
    },
    ctaText: {
      de: "Suchen Sie die richtige Dosis, um wieder aktiv zu werden, ohne Ihre Schmerzen zu verschlimmern? Vereinbaren Sie einen Termin in der Praxis Loten in Eupen für ein individuelles Programm.",
      fr: "Vous cherchez le bon dosage pour reprendre l'activité physique sans aggraver votre douleur ? Prenez rendez-vous au cabinet Praxis Loten à Eupen pour un programme adapté à vous.",
      en: "Looking for the right dose to get active again without worsening your pain? Book an appointment at Praxis Loten in Eupen for a programme tailored to you.",
      nl: "Zoekt u de juiste dosering om opnieuw te bewegen zonder uw pijn te verergeren? Maak een afspraak bij Praxis Loten in Eupen voor een programma op uw maat.",
      tr: "Ağrınızı kötüleştirmeden tekrar aktif olmak için doğru dozu mu arıyorsunuz? Size özel bir program için Eupen'deki Praxis Loten kliniğinden randevu alın.",
      ar: "هل تبحث عن الجرعة المناسبة لاستئناف النشاط البدني دون تفاقم الألم؟ احجز موعدًا في عيادة براكسيس لوتن في أوبن للحصول على برنامج مُكيَّف لك.",
      pl: "Szukasz właściwej dawki, by wrócić do aktywności bez nasilenia bólu? Umów wizytę w Praxis Loten w Eupen, aby otrzymać dopasowany program.",
      "uk": "Шукаєте правильне дозування, щоб повернутися до фізичної активності, не посилюючи біль? Запишіться на прийом до кабінету Praxis Loten в Ойпені, щоб отримати програму, адаптовану саме для Вас.",
      "es": "¿Busca la dosis adecuada para retomar la actividad física sin agravar su dolor? Pida cita en la consulta Praxis Loten de Eupen para un programa adaptado a usted.",
      "ku": "Hûn li doza rast digerin da ku dîsa dest bi çalakiya laşî bikin bêyî ku êşa we girantir bibe? Li kabîneya Praxis Loten li Eupenê randevûyekê bigirin ji bo bernameyeke li gorî we.",
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
      "uk": "Ця стаття має інформаційний характер і не замінює медичної чи парамедичної консультації. У разі стійкого або тривожного болю запишіться на прийом до медичного фахівця.",
      "es": "Este artículo tiene fines informativos y no sustituye una consulta médica o paramédica. En caso de dolor persistente o preocupante, pida cita con un profesional sanitario.",
      "ku": "Ev gotar ji bo agahdariyê ye û cihê şêwirdariyeke bijîjkî an paramedîkal nagire. Di rewşa êşeke domdar an xemgîn de, bi pisporekî tenduristiyê re randevûyekê bigirin.",
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
      "uk": "Чи справді сидіння шкодить Вашій спині? Що каже наука у 2026 році",
      "es": "¿Estar sentado perjudica realmente su espalda? Lo que dice la ciencia en 2026",
      "ku": "Gelo rûniştin bi rastî zirarê dide pişta we? Zanist di 2026an de çi dibêje",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
      "uk": "Мануальна терапія",
      "es": "Terapia manual",
      "ku": "Terapiya destî",
    },
    date: "2026-05-03",
    readMin: 4,
    color: "from-[#0e7490] to-[#155e75]",
    authorSlug: "philippe-banaszak",
    authorName: "Philippe Banaszak",
    intro: {
      de: "Sie haben es sicher schon gehört: « Sitzen ist das neue Rauchen. » Wenn Sie stundenlang am Bildschirm arbeiten, jagt dieser Satz Angst ein. Und wenn Ihr Rücken still leidet? Gute Nachricht: Die Wissenschaft sagt etwas anderes. Philippe Banaszak, manueller Therapeut bei Praxis Loten in Eupen, klärt auf.",
      fr: "Vous l'avez sûrement entendu : « rester assis, c'est le nouveau tabagisme. » Si vous travaillez des heures devant un écran, cette phrase fait peur. Et si votre dos souffrait en silence ? Bonne nouvelle : la science dit autre chose. Philippe Banaszak, thérapeute manuel chez Praxis Loten à Eupen, fait le point.",
      en: "You've probably heard it: \"sitting is the new smoking.\" If you work long hours at a screen, that phrase is scary. What if your back were quietly suffering? Good news: science says otherwise. Philippe Banaszak, manual therapist at Praxis Loten in Eupen, sets the record straight.",
      nl: "U hebt het vast gehoord: „zitten is het nieuwe roken.\" Als u uren achter een scherm werkt, is die zin angstaanjagend. En als uw rug langzaam zou veranderen, zonder dat u iets doet? Goed nieuws: de wetenschap zegt iets anders.",
      tr: "Muhtemelen duymuşsunuzdur: „Oturmak yeni sigaradır.\" Saatlerce ekran başında çalışıyorsanız bu cümle korkutucudur. Ya sırtınız yavaşça değişiyorsa, siz fark etmeden? İyi haber: bilim başka şey söylüyor.",
      ar: "ربما سمعتها: „الجلوس هو التدخين الجديد.\" إذا كنت تعمل ساعات أمام الشاشة، فهذه العبارة مخيفة. ماذا لو كان ظهرك يتغير ببطء دون أن تلاحظ؟ خبر جيد: العلم يقول العكس.",
      pl: "Pewnie to słyszałeś: „Siedzenie to nowe palenie.\" Jeśli pracujesz godzinami przed ekranem, to zdanie przeraża. A gdyby Twoje plecy powoli się zmieniały, a Ty byś nic nie robił? Dobra wiadomość: nauka mówi co innego.",
      "uk": "Ви напевно це чули: «сидіння — це нове куріння». Якщо Ви годинами працюєте перед екраном, ця фраза лякає. А раптом Ваша спина страждає мовчки? Добра новина: наука каже інше. Philippe Banaszak, мануальний терапевт у Praxis Loten в Ойпені, розповідає, як є насправді.",
      "es": "Seguro que lo ha oído: «estar sentado es el nuevo tabaco». Si trabaja horas delante de una pantalla, esta frase asusta. ¿Y si su espalda sufriera en silencio? Buena noticia: la ciencia dice otra cosa. Philippe Banaszak, terapeuta manual en Praxis Loten, en Eupen, hace balance.",
      "ku": "Bê guman we ev bihîstiye: «rûniştin cixareya nû ye.» Ger hûn bi saetan li ber ekranê dixebitin, ev hevok mirov ditirsîne. Û heke pişta we bi bêdengî êşê dikişîne? Nûçeya baş: zanist tiştekî din dibêje. Philippe Banaszak, terapîstê destî li Praxis Loten li Eupenê, rewşê zelal dike.",
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
          "uk": "Міф, який варто забути",
          "es": "El mito que hay que olvidar",
          "ku": "Efsaneya ku divê were jibîrkirin",
        },
        body: {
          de: "Lange Zeit glaubte man, das Sitzen drücke die Bandscheiben zusammen und verursache direkt Rückenschmerzen. Diese Idee ist heute durch große aktuelle Studien stark relativiert. Das Urteil ist klar: Sitzen verursacht an sich keinen Rückenschmerz. Es kann ein vorübergehendes Unbehagen erzeugen, aber es zerstört nichts. Ihre Wirbelsäule ist robust. Ihre Bandscheiben sind intelligente Stoßdämpfer, gebaut, um die Lasten des Alltags zu absorbieren. Ein Bürotag schadet ihnen nicht.",
          fr: "Pendant longtemps, on a cru que la position assise mettait les disques sous pression et causait directement le mal de dos. Cette idée est aujourd'hui largement nuancée par les grandes études récentes. Le verdict est clair : la position assise, en elle-même, ne cause pas le mal de dos. Elle peut générer un inconfort temporaire, mais elle ne « casse » rien. Votre colonne est solide. Vos disques sont des amortisseurs intelligents, conçus pour encaisser les charges du quotidien. Une journée au bureau ne leur nuit pas.",
          en: "For a long time, people believed sitting put excessive pressure on the spinal discs and directly caused back pain. That idea is now heavily nuanced by large recent studies. The verdict is clear: sitting itself does not cause back pain. It can produce temporary discomfort, but it doesn't harm anything. Your spine is strong. Your discs are intelligent shock absorbers, designed to handle daily loads. A day at the office doesn't hurt them.",
          nl: "Lang dacht men dat zitten overmatige druk op de tussenwervelschijven uitoefende en rechtstreeks rugpijn veroorzaakte. Dat idee wordt vandaag sterk genuanceerd door recente grote studies. Het oordeel is duidelijk: zitten op zich veroorzaakt geen rugpijn. Het kan tijdelijk ongemak geven, maar schaadt niets. Uw wervelkolom is sterk. Uw discussen zijn intelligente schokdempers.",
          tr: "Uzun süre, oturmanın omurga disklerini ezdiği ve doğrudan sırt ağrısına neden olduğu sanıldı. Bu fikir bugün son büyük çalışmalarla büyük ölçüde nüanslanmıştır. Karar açık: oturmak başlı başına sırt ağrısına neden olmaz. Geçici rahatsızlık yaratabilir, ama hiçbir şeyi „kırmaz\". Omurganız sağlamdır. Diskleriniz akıllı amortisörlerdir.",
          ar: "لفترة طويلة، كان يُعتقد أن الجلوس يضغط على أقراص العمود الفقري ويسبب آلام الظهر مباشرة. هذه الفكرة تم تخفيفها كثيرًا بدراسات حديثة كبيرة. الحكم واضح: الجلوس بحد ذاته لا يسبب ألم الظهر. قد يسبب انزعاجًا مؤقتًا، لكنه لا „يكسر\" شيئًا. عمودك الفقري قوي. أقراصك ممتصات صدمات ذكية.",
          pl: "Przez długi czas wierzono, że siedzenie zgniata krążki kręgosłupa i bezpośrednio powoduje ból pleców. Ten pogląd jest dziś mocno niuansowany przez duże, niedawne badania. Werdykt jest jasny: siedzenie samo w sobie nie powoduje bólu pleców. Może wywołać chwilowy dyskomfort, ale niczego nie „łamie\". Twój kręgosłup jest mocny. Twoje krążki to inteligentne amortyzatory.",
          "uk": "Довгий час вважали, що сидіння створює тиск на міжхребцеві диски й безпосередньо спричиняє біль у спині. Сьогодні великі сучасні дослідження значною мірою уточнили цю думку. Висновок чіткий: сидіння саме по собі не спричиняє болю в спині. Воно може викликати тимчасовий дискомфорт, але нічого не «ламає». Ваш хребет міцний. Ваші диски — розумні амортизатори, створені витримувати щоденні навантаження. Робочий день в офісі їм не шкодить.",
          "es": "Durante mucho tiempo se creyó que estar sentado sometía los discos a presión y causaba directamente el dolor de espalda. Hoy, los grandes estudios recientes matizan ampliamente esta idea. El veredicto es claro: estar sentado, en sí mismo, no causa dolor de espalda. Puede generar una molestia pasajera, pero no «rompe» nada. Su columna es sólida. Sus discos son amortiguadores inteligentes, diseñados para soportar las cargas del día a día. Una jornada en la oficina no les hace daño.",
          "ku": "Demeke dirêj dihat bawerkirin ku rûniştin dîskan dixe bin zextê û rasterast dibe sedema êşa pişte. Îro ev raman ji aliyê lêkolînên mezin ên nû ve bi giranî hatiye rastkirin. Biryar zelal e: rûniştin bi serê xwe nabe sedema êşa pişte. Ew dikare nerehetiyeke demkî çêbike, lê tiştekî «naşkîne». Stûna we ya pişte xurt e. Dîskên we amortîsorên biaqil in, ji bo hilgirtina barên rojane hatine çêkirin. Rojeke li ofîsê zirarê nade wan.",
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
          "uk": "Що справді важливо: рухатися",
          "es": "Lo que realmente importa: moverse",
          "ku": "Tiştê ku bi rastî girîng e: livîn",
        },
        body: {
          de: "Das eigentliche Problem ist nicht der Stuhl, sondern die anhaltende Unbeweglichkeit. Der menschliche Körper liebt Bewegung. Er braucht sie, um das Blut zirkulieren zu lassen, die Gelenke zu mobilisieren, die Muskeln wach zu halten. Wenn man stundenlang erstarrt bleibt — sitzend, stehend, egal — protestiert er. Die Wissenschaft ist sehr beruhigend: 30 bis 60 Minuten Bewegung pro Tag reichen weitgehend, um die Stunden im Büro auszugleichen. Schnelles Gehen, Rad, Treppen, Garten, Schwimmen — alles zählt. Kein Fitnessstudio nötig.",
          fr: "Le vrai problème n'est pas la chaise. C'est l'immobilité prolongée. Le corps humain adore le mouvement. Il en a besoin pour faire circuler le sang, mobiliser les articulations, garder les muscles éveillés. Quand on reste figé pendant des heures — assis, debout, peu importe — il proteste. La science est très rassurante sur ce point : 30 à 60 minutes de mouvement par jour suffisent largement à compenser les heures passées au bureau. Marche rapide, vélo, escaliers, jardinage, natation : tout compte. Pas besoin de salle de sport.",
          en: "The real problem isn't the chair. It's prolonged immobility. The human body loves movement. It needs it to circulate blood, mobilise joints, keep muscles awake. When we stay frozen for hours — sitting, standing, whatever — it protests. Science is very reassuring here: 30 to 60 minutes of movement a day is largely enough to offset hours spent at the desk. Brisk walking, cycling, stairs, gardening, swimming — it all counts. No gym required.",
          nl: "Het echte probleem is niet de stoel. Het is langdurige onbeweeglijkheid. Het lichaam houdt van beweging. Het heeft het nodig om bloed te laten circuleren, gewrichten te mobiliseren, spieren wakker te houden. Als we uren stilzitten of staan — protesteert het. De wetenschap is hier heel geruststellend: 30 tot 60 minuten beweging per dag volstaan ruimschoots om bureau-uren te compenseren.",
          tr: "Asıl sorun sandalye değil, uzun süreli hareketsizliktir. İnsan vücudu hareketi sever. Kanın dolaşması, eklemlerin hareket etmesi, kasların uyanık kalması için ona ihtiyacı vardır. Saatlerce donmuş kaldığımızda — oturarak, ayakta, fark etmez — protesto eder. Bilim çok güven verici: günde 30-60 dakika hareket masada geçirilen saatleri telafi etmeye fazlasıyla yeter.",
          ar: "المشكلة الحقيقية ليست الكرسي، بل الجمود المطوّل. الجسم البشري يحب الحركة. يحتاجها لتدوير الدم وتحريك المفاصل وإبقاء العضلات يقظة. عندما نبقى متجمدين لساعات — يحتج. العلم مطمئن جدًا: 30 إلى 60 دقيقة حركة يوميًا تكفي على نطاق واسع لتعويض ساعات المكتب.",
          pl: "Prawdziwym problemem nie jest krzesło, lecz długotrwały bezruch. Ludzkie ciało kocha ruch. Potrzebuje go, by krążyła krew, by stawy się ruszały, mięśnie były aktywne. Gdy stoimy lub siedzimy bez ruchu godzinami — protestuje. Nauka uspokaja: 30 do 60 minut ruchu dziennie wystarczy z naddatkiem, by zrekompensować godziny przy biurku.",
          "uk": "Справжня проблема — не стілець. Це тривала нерухомість. Людське тіло любить рух. Воно потребує його, щоб кров циркулювала, суглоби рухалися, а м’язи залишалися активними. Коли ми годинами застигаємо в одній позі — сидячи, стоячи, байдуже, — тіло протестує. Наука тут дуже заспокоює: 30–60 хвилин руху на день цілком достатньо, щоб компенсувати години, проведені за робочим столом. Швидка ходьба, велосипед, сходи, садівництво, плавання — усе зараховується. Спортзал не потрібен.",
          "es": "El verdadero problema no es la silla. Es la inmovilidad prolongada. Al cuerpo humano le encanta el movimiento. Lo necesita para hacer circular la sangre, movilizar las articulaciones y mantener los músculos despiertos. Cuando permanecemos inmóviles durante horas —sentados, de pie, da igual—, protesta. La ciencia es muy tranquilizadora en este punto: de 30 a 60 minutos de movimiento al día bastan de sobra para compensar las horas pasadas en la oficina. Caminar a paso ligero, bicicleta, escaleras, jardinería, natación: todo cuenta. No hace falta gimnasio.",
          "ku": "Pirsgirêka rastîn ne kursî ye. Ew bêtevgeriya dirêj e. Laşê mirov ji tevgerê hez dike. Ew hewceyî wê ye da ku xwîn bigere, movik bilivin û masûlke şiyar bimînin. Dema ku em bi saetan sabit dimînin — rûniştî, li ser piyan, ne girîng e — laş nerazîbûna xwe nîşan dide. Zanist di vê mijarê de gelekî aramker e: 30 heta 60 deqe tevger di rojê de bi têra xwe bes e da ku saetên li ofîsê derbas bûne telafî bike. Meşa bilez, duçerxe, derence, baxçevanî, avjenî: her tişt tê hesibandin. Hewcedarî bi salona werzîşê tune.",
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
          "uk": "Золоте правило: часто змінюйте положення",
          "es": "La regla de oro: cambie de postura a menudo",
          "ku": "Rêgeza zêrîn: pozîsyona xwe gelek caran biguherînin",
        },
        body: {
          de: "In der modernen Physiotherapie lieben wir diesen Satz: „Die beste Haltung ist die nächste.\" Anders gesagt: Es gibt keine „perfekte\" Haltung, die man stundenlang halten müsste. Ihr Rücken braucht Vielfalt, nicht Steifheit. Lümmelnd, gerade, Beine übergeschlagen, stehend — wechseln Sie ohne Schuldgefühle. Sich alle 20-30 Minuten zu bewegen ist viel nützlicher, als die „ideale\" Haltung zu suchen.",
          fr: "En kinésithérapie moderne, on aime cette phrase : « La meilleure posture, c'est la prochaine. » Autrement dit : il n'existe pas de position « parfaite » à maintenir pendant des heures. Votre dos a besoin de variété, pas de raideur. Avachi, droit, jambes croisées, debout — alternez sans culpabilité. Bouger toutes les 20 à 30 minutes est bien plus utile que de chercher la posture « idéale ».",
          en: "In modern physiotherapy we love this saying: \"Your best posture is your next one.\" In other words, there is no \"perfect\" position to hold for hours. Your back needs variety, not rigidity. Slouched, upright, legs crossed, standing — alternate without guilt. Moving every 20-30 minutes is much more useful than searching for the \"ideal\" posture.",
          nl: "In de moderne fysiotherapie houden we van deze zin: „De beste houding is de volgende.\" Met andere woorden: er bestaat geen „perfecte\" houding die u uren moet aanhouden. Uw rug heeft variatie nodig, geen stijfheid. Onderuitgezakt, rechtop, gekruist, staand — wissel zonder schuldgevoel.",
          tr: "Modern fizyoterapide bu cümleyi seviyoruz: „En iyi duruşunuz bir sonrakidir.\" Başka deyişle: saatlerce sürdürülecek „mükemmel\" bir pozisyon yoktur. Sırtınızın çeşitliliğe ihtiyacı vardır, katılığa değil. Çökmüş, dik, bacak bacak üstüne, ayakta — suçluluk duymadan değiştirin.",
          ar: "في العلاج الطبيعي الحديث، نحب هذه العبارة: „أفضل وضعية هي التالية.\" بكلمات أخرى: لا توجد وضعية „مثالية\" يجب الحفاظ عليها لساعات. ظهرك يحتاج إلى التنوع، لا إلى الصلابة. منحنيًا، مستقيمًا، أرجل متقاطعة، واقفًا — تناوب دون شعور بالذنب.",
          pl: "W nowoczesnej fizjoterapii uwielbiamy to zdanie: „Najlepsza postawa to ta następna.\" Innymi słowy: nie istnieje „idealna\" pozycja, którą należy utrzymywać godzinami. Twoje plecy potrzebują różnorodności, nie sztywności. Rozwalony, wyprostowany, nogi skrzyżowane, na stojąco — zmieniaj bez wyrzutów sumienia.",
          "uk": "У сучасній фізіотерапії полюбляють такий вислів: «Найкраща постава — наступна». Іншими словами: не існує «ідеального» положення, яке слід утримувати годинами. Вашій спині потрібна різноманітність, а не скутість. Розслаблено, рівно, нога на ногу, стоячи — чергуйте без почуття провини. Рухатися кожні 20–30 хвилин набагато корисніше, ніж шукати «ідеальну» поставу.",
          "es": "En la fisioterapia moderna nos gusta esta frase: «La mejor postura es la siguiente». Dicho de otro modo: no existe una postura «perfecta» que haya que mantener durante horas. Su espalda necesita variedad, no rigidez. Repantigado, recto, con las piernas cruzadas, de pie: alterne sin culpa. Moverse cada 20 a 30 minutos es mucho más útil que buscar la postura «ideal».",
          "ku": "Di fizyoterapiya nûjen de, em ji vê hevokê hez dikin: «Baştirîn rewşa laş ya din e.» Bi gotineke din: tu pozîsyoneke «bêkêmasî» tune ku divê bi saetan were parastin. Pişta we hewceyî cûrbecûriyê ye, ne hişkbûnê. Xwe berdayî, rast, ling li ser lingê din, li ser piyan — bêyî hesta sûcdariyê biguherînin. Her 20 heta 30 deqeyan livîn ji lêgerîna pozîsyona «îdeal» gelekî bikêrtir e.",
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
          "uk": "3 прості звички для Вашого повсякдення",
          "es": "3 reflejos sencillos para su día a día",
          "ku": "3 adetên hêsan ji bo jiyana we ya rojane",
        },
        body: {
          de: "1. Stehen Sie alle 30 Minuten auf. Eine Minute stehen, ein paar Schritte, ein freies Strecken.\n\n2. Bewegen Sie sich 30 Minuten am Tag. Die Aktivität, die Ihnen gefällt, ist die beste — Regelmäßigkeit zählt mehr als Intensität.\n\n3. Vertrauen Sie Ihrem Rücken. Er ist robuster, als man Ihnen erzählt hat.",
          fr: "1. Levez-vous toutes les 30 minutes. Une minute debout, quelques pas, un étirement libre.\n\n2. Bougez 30 minutes par jour. L'activité qui vous plaît, c'est la meilleure. La régularité compte plus que l'intensité.\n\n3. Faites confiance à votre dos. Il est plus solide que ce qu'on vous a fait croire.",
          en: "1. Stand up every 30 minutes. One minute standing, a few steps, a free stretch.\n\n2. Move 30 minutes a day. The activity you enjoy is the best one. Consistency matters more than intensity.\n\n3. Trust your back. It is stronger than you've been told.",
          nl: "1. Sta elke 30 minuten op. Een minuut staan, paar stappen, vrij rekken.\n\n2. Beweeg 30 minuten per dag. Wat u leuk vindt is het beste. Regelmaat telt meer dan intensiteit.\n\n3. Vertrouw uw rug. Hij is sterker dan u is wijsgemaakt.",
          tr: "1. Her 30 dakikada ayağa kalkın. Bir dakika ayakta, birkaç adım, serbest esneme.\n\n2. Günde 30 dakika hareket edin. Hoşunuza giden aktivite en iyisidir.\n\n3. Sırtınıza güvenin. Size söylenenden çok daha sağlam.",
          ar: "1. انهض كل 30 دقيقة. دقيقة وقوف، بضع خطوات، تمدد حر.\n\n2. تحرك 30 دقيقة يوميًا. النشاط الذي تحبه هو الأفضل. الانتظام أهم من الشدة.\n\n3. ثق بظهرك. إنه أقوى مما قيل لك.",
          pl: "1. Wstawaj co 30 minut. Minuta stania, kilka kroków, swobodne rozciągnięcie.\n\n2. Ruszaj się 30 minut dziennie. Aktywność, którą lubisz, jest najlepsza.\n\n3. Zaufaj swoim plecom. Są mocniejsze niż Ci powiedziano.",
          "uk": "1. Вставайте кожні 30 хвилин. Хвилину постояти, кілька кроків, довільне розтягування.\n\n2. Рухайтеся 30 хвилин на день. Найкраща активність — та, що Вам до вподоби. Регулярність важливіша за інтенсивність.\n\n3. Довіряйте своїй спині. Вона міцніша, ніж Вам казали.",
          "es": "1. Levántese cada 30 minutos. Un minuto de pie, unos pasos, un estiramiento libre.\n\n2. Muévase 30 minutos al día. La actividad que le guste es la mejor. La regularidad cuenta más que la intensidad.\n\n3. Confíe en su espalda. Es más sólida de lo que le han hecho creer.",
          "ku": "1. Her 30 deqeyan carekê rabin ser xwe. Deqeyekê li ser piyan, çend gav, vezelandineke azad.\n\n2. Rojê 30 deqeyan bilivin. Çalakiya ku hûn jê hez dikin ya herî baş e. Berdewamî ji tundiyê girîngtir e.\n\n3. Bi pişta xwe bawer bikin. Ew ji ya ku ji we re hatiye gotin xurttir e.",
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
          "uk": "Коли звертатися до фахівця?",
          "es": "¿Cuándo consultar?",
          "ku": "Kengê serdana pispor bikin?",
        },
        body: {
          de: "Wenn ein Schmerz mehrere Wochen anhält, Sie in Ihren täglichen Aktivitäten stört oder von Kribbeln, Schwäche oder anderen ungewöhnlichen Zeichen begleitet wird — warten Sie nicht. Eine Bewertung durch eine ausgebildete Fachperson erlaubt, das auszuschließen, was Aufmerksamkeit verdient, und Sie schnell wieder in Bewegung zu bringen.",
          fr: "Si une douleur dure plusieurs semaines, vous gêne dans vos activités quotidiennes, ou s'accompagne de fourmillements, faiblesses ou autres signes inhabituels — n'attendez pas. Une évaluation par un professionnel formé permet d'écarter ce qui mérite attention et de vous remettre en mouvement rapidement.",
          en: "If pain lasts several weeks, hampers your daily activities, or comes with tingling, weakness or other unusual signs — don't wait. An assessment by a trained professional helps rule out what deserves attention and get you moving again quickly.",
          nl: "Als pijn weken aanhoudt, uw dagelijkse activiteiten hindert of gepaard gaat met tintelingen, zwakte of andere ongewone tekenen — wacht niet. Een evaluatie door een opgeleide professional helpt uit te sluiten wat aandacht verdient en u snel weer in beweging te brengen.",
          tr: "Bir ağrı haftalarca sürerse, günlük aktivitelerinizi engelliyorsa veya karıncalanma, halsizlik ya da diğer olağandışı belirtilerle birlikte geliyorsa — beklemeyin. Eğitimli bir uzmanın değerlendirmesi, dikkat gerektireni saf dışı bırakıp sizi hızla harekete geçirmeyi sağlar.",
          ar: "إذا استمر الألم عدة أسابيع، أو أعاق أنشطتك اليومية، أو رافقه تنميل أو ضعف أو علامات غير عادية — لا تنتظر. تقييم من قبل أخصائي مدرب يسمح باستبعاد ما يستحق الانتباه وإعادتك إلى الحركة بسرعة.",
          pl: "Jeśli ból trwa kilka tygodni, utrudnia codzienne czynności lub towarzyszą mu mrowienie, osłabienie lub inne nietypowe objawy — nie czekaj. Ocena przez wyszkolonego specjalistę pozwala wykluczyć to, co wymaga uwagi, i szybko przywrócić Ci ruch.",
          "uk": "Якщо біль триває кілька тижнів, заважає Вам у повсякденних справах або супроводжується поколюванням, слабкістю чи іншими незвичними ознаками — не зволікайте. Оцінка підготовленим фахівцем дає змогу виключити те, що потребує уваги, і швидко повернути Вас до руху.",
          "es": "Si un dolor dura varias semanas, le molesta en sus actividades diarias o se acompaña de hormigueo, debilidad u otros signos inusuales, no espere. Una valoración por un profesional formado permite descartar lo que merece atención y ponerle de nuevo en movimiento rápidamente.",
          "ku": "Ger êşek çend hefteyan dom dike, di çalakiyên we yên rojane de asteng dibe, an bi tevizîn, lawazî an nîşaneyên din ên ne asayî re tê — li bendê nemînin. Nirxandineke ji aliyê pisporekî perwerdekirî ve rê dide ku tiştê ku hewceyî baldariyê ye were derxistin û hûn zû vegerin tevgerê.",
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
          "uk": "У кабінеті Praxis Loten, в Ойпені",
          "es": "En Praxis Loten, en Eupen",
          "ku": "Li kabîneya Praxis Loten, li Eupenê",
        },
        body: {
          de: "Unser Team — Physiotherapeuten, Manualtherapeuten und Osteopathen — begleitet jeden Tag Patienten, die glauben, ihr Rücken « mache nicht mehr mit » oder « lasse nach ». Unser Ansatz hält in vier Wörtern: Zuhören (Ihren Schmerz im Gesamtkontext: Schlaf, Stress, Lebensstil), Erleichtern (durch angepasste Manuelle Therapie), Stärken (durch progressive personalisierte Übungen), Erklären (wie Ihr Rücken wirklich funktioniert). Unser Ziel: dass Sie kräftiger und gelassener gehen — nicht besorgter.",
          fr: "Notre équipe — kinésithérapeutes, thérapeutes manuels et ostéopathes — accompagne chaque jour des patients qui pensent que leur dos « ne suit plus » ou « lâche ». Notre approche tient en quatre mots : Écouter votre douleur dans son contexte global (sommeil, stress, mode de vie). Soulager par la thérapie manuelle adaptée. Renforcer par des exercices progressifs et personnalisés. Expliquer comment fonctionne réellement votre dos. Notre objectif : que vous repartiez plus solide et plus serein — pas plus inquiet.",
          en: "Our team — physiotherapists, manual therapists and osteopaths — supports patients every day who believe their back \"can't keep up\" or \"is giving out.\" Our approach holds in four words: Listen to your pain in its global context (sleep, stress, lifestyle). Relieve through adapted manual therapy. Strengthen through progressive personalised exercises. Explain how your back actually works. Our aim: that you leave stronger and calmer — not more worried.",
          nl: "Ons team — fysiotherapeuten, manuele therapeuten en osteopaten — begeleidt dagelijks patiënten die denken dat hun rug « niet meer meewerkt » of « het laat afweten ». Onze aanpak vat samen in vier woorden: Luisteren naar uw pijn in globale context. Verlichten door aangepaste manuele therapie. Versterken door progressieve oefeningen. Uitleggen hoe uw rug werkelijk werkt.",
          tr: "Ekibimiz — fizyoterapistler, manuel terapistler ve osteopatlar — sırtının « artık dayanamadığını » veya « eskisi gibi olmadığını » düşünen hastalara her gün eşlik eder. Yaklaşımımız dört kelimede özetlenir: Dinlemek (yaşam bağlamında ağrı), Rahatlatmak (uyarlanmış manuel terapi), Güçlendirmek (kademeli kişisel egzersizler), Açıklamak (sırtın gerçekte nasıl çalıştığı).",
          ar: "فريقنا — أخصائيو علاج طبيعي، معالجون يدويون وأخصائيو عظام — يرافق يوميًا مرضى يعتقدون أن ظهرهم « لم يعد يتحمل » أو « لا يعمل كالسابق ». نهجنا يلخص في أربع كلمات: الإصغاء إلى ألمك في سياقه الشامل، التخفيف بالعلاج اليدوي المكيف، التقوية بتمارين تدريجية، الشرح كيف يعمل ظهرك حقًا.",
          pl: "Nasz zespół — fizjoterapeuci, terapeuci manualni i osteopaci — codziennie wspiera pacjentów, którzy uważają, że ich plecy « już nie dają rady » lub « nie działają jak kiedyś ». Nasze podejście to cztery słowa: Słuchać (Twojego bólu w globalnym kontekście), Ulżyć (dostosowaną terapią manualną), Wzmocnić (progresywnymi ćwiczeniami), Wyjaśnić (jak naprawdę działają plecy).",
          "uk": "Наша команда — фізіотерапевти, мануальні терапевти та остеопати — щодня супроводжує пацієнтів, які вважають, що їхня спина «вже не витримує» чи «підводить». Наш підхід уміщується в чотири слова: Вислухати Ваш біль у його загальному контексті (сон, стрес, спосіб життя). Полегшити за допомогою відповідної мануальної терапії. Зміцнити поступовими індивідуальними вправами. Пояснити, як насправді працює Ваша спина. Наша мета: щоб Ви пішли від нас міцнішими й спокійнішими — а не більш стривоженими.",
          "es": "Nuestro equipo —fisioterapeutas, terapeutas manuales y osteópatas— acompaña cada día a pacientes que creen que su espalda «ya no aguanta» o «falla». Nuestro enfoque cabe en cuatro palabras: Escuchar su dolor en su contexto global (sueño, estrés, estilo de vida). Aliviar mediante una terapia manual adaptada. Fortalecer con ejercicios progresivos y personalizados. Explicar cómo funciona realmente su espalda. Nuestro objetivo: que salga más fuerte y más tranquilo, no más preocupado.",
          "ku": "Tîma me — fizyoterapîst, terapîstên destî û osteopat — her roj bi nexweşên ku difikirin pişta wan «êdî nikare» an «dev jê berdide» re ye. Nêzîkatiya me di çar peyvan de ye: Guhdarîkirina êşa we di çarçoveya wê ya giştî de (xew, stres, şêwaza jiyanê). Sivikkirin bi terapiya destî ya guncaw. Xurtkirin bi werzîşên gav bi gav û kesane. Ravekirina ka pişta we bi rastî çawa dixebite. Armanca me: ku hûn xurttir û aramtir ji cem me derkevin — ne bi fikartir.",
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
      "uk": [
        "Сидіння не спричиняє болю в спині",
        "Проблема — нерухомість, а не стілець",
        "30–60 хв руху/день компенсують сидіння",
        "Найкраща постава = наступна (різноманітність > скутість)",
        "У Praxis Loten: мануальна терапія + навчання"
      ],
      "es": [
        "Estar sentado no causa dolor de espalda",
        "El problema es la inmovilidad, no la silla",
        "30-60 min de movimiento/día compensan el tiempo sentado",
        "Mejor postura = la siguiente (variedad > rigidez)",
        "En Praxis Loten: terapia manual + educación"
      ],
      "ku": [
        "Rûniştin nabe sedema êşa pişte",
        "Pirsgirêk bêtevgerî ye, ne kursî",
        "30-60 deq tevger/roj rûniştinê telafî dike",
        "Baştirîn pozîsyon = ya din (cûrbecûrî > hişkbûn)",
        "Li Praxis Loten: terapiya destî + perwerde"
      ],
    },
    ctaText: {
      de: "Anhaltender Rückenschmerz? Lassen Sie sich in Eupen umfassend untersuchen.",
      fr: "Mal de dos qui s'installe ? Faites un bilan complet chez nous à Eupen.",
      en: "Back pain that lingers? Get a full assessment with us in Eupen.",
      nl: "Aanhoudende rugpijn? Maak een volledig bilan bij ons in Eupen.",
      tr: "Geçmeyen sırt ağrısı? Eupen'deki kliniğimizde tam değerlendirme yaptırın.",
      ar: "ألم ظهر مستمر؟ احصل على تقييم كامل لدينا في أوبن.",
      pl: "Uporczywy ból pleców? Umów się na pełną ocenę u nas w Eupen.",
      "uk": "Біль у спині не минає? Пройдіть повне обстеження в нас в Ойпені.",
      "es": "¿Un dolor de espalda que se instala? Hágase una valoración completa con nosotros en Eupen.",
      "ku": "Êşa pişte ku cih digire? Li cem me li Eupenê nirxandineke tam bikin.",
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
      "uk": "Ця стаття має інформаційний характер і не замінює консультації. Якщо біль не минає, запишіться на прийом до одного з наших фахівців.",
      "es": "Este artículo tiene una finalidad informativa y no sustituye una consulta. En caso de dolor persistente, pida cita con uno de nuestros profesionales.",
      "ku": "Ev gotar ji bo agahdariyê ye û şûna konsultasyonê nagire. Di rewşa êşa berdewam de, bi yek ji pisporên me re randevûyekê bigirin.",
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
      "uk": "Біль у шиї — чому болить шия і як повернути рухливість в Ойпені",
      "es": "Dolor cervical: por qué le duele el cuello y cómo recuperar la movilidad en Eupen",
      "ku": "Êşa stûyê — çima stûyê we diêşe û hûn çawa li Eupenê livîna xwe vedigerînin",
    },
    category: {
      de: "Nackenschmerzen", fr: "Cervicales", en: "Neck pain",
      nl: "Nekpijn", tr: "Boyun Ağrısı", ar: "آلام الرقبة", pl: "Ból szyi",
      "uk": "Біль у шиї",
      "es": "Cervicales",
      "ku": "Êşa stûyê",
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
      "uk": "Чи буває, що після робочого дня ви відчуваєте стійку скутість біля основи черепа або між лопатками? Хоча першою реакцією часто є тривога через «старіння» чи «брак рухливості», сучасна наука приносить набагато заспокійливішу новину: ваша шия міцна, витривала й здатна адаптуватися.",
      "es": "¿Le ocurre sentir esa rigidez persistente en la base del cráneo o entre los omóplatos después de un día de trabajo? Aunque la primera reacción suele ser preocuparse por un «envejecimiento» o una «falta de movilidad», la ciencia actual nos trae una noticia mucho más tranquilizadora: su cuello es sólido, resistente y capaz de adaptarse.",
      "ku": "Ma carinan piştî rojeke kar hûn wê hişkbûna domdar li binê serî an di navbera kafikên milan de hîs dikin? Her çend bertekdana pêşîn bi gelemperî fikarkirin ji «pîrbûnê» an «kêmbûna livînê» be jî, zanista nûjen nûçeyeke gelek aramkertir tîne: stûyê we xurt û berxwedêr e û dikare xwe biguncîne.",
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
          "uk": "Біль у шиї: сигнал тривоги, а не обов'язково ушкодження",
          "es": "El dolor cervical: una alarma, no necesariamente una lesión",
          "ku": "Êşa stûyê: alarmek e, ne bi mecbûrî birînek e",
        },
        body: {
          de: "Stellen Sie sich Schmerz wie ein hochempfindliches Alarmsystem vor. Manchmal löst der Alarm aus, weil tatsächlich Rauch aufsteigt — oft jedoch klingelt er einfach, weil er zu empfindlich geworden ist. Nackenschmerzen bedeuten nicht, dass Ihre Wirbel « in Gefahr » sind. Es ist meist ein Signal Ihres Gehirns, dass die Gewebe in dieser Zone an ihrer aktuellen Toleranzgrenze angekommen sind — häufig durch fehlende Bewegungsvielfalt.",
          fr: "Imaginez la douleur comme un système d'alarme ultra-sensible. Parfois, l'alarme se déclenche parce que la fumée monte, mais souvent, elle sonne simplement parce qu'elle est devenue trop sensible. Une douleur au cou ne signifie pas que vos vertèbres sont « en danger ». C'est souvent un signal envoyé par votre cerveau pour vous dire que les tissus de cette zone ont atteint leur limite de tolérance actuelle, souvent par manque de variété de mouvement.",
          en: "Think of pain as a highly sensitive alarm system. Sometimes the alarm is triggered because smoke really is rising — but often it rings simply because it has become too sensitive. Neck pain does not mean your vertebrae are \"at risk.\" It is usually a signal from your brain that the tissues in this area have reached their current tolerance limit, often through lack of movement variety.",
          nl: "Stel u pijn voor als een uiterst gevoelig alarmsysteem. Soms gaat het alarm af omdat er echt rook opstijgt — maar vaak klinkt het simpelweg omdat het te gevoelig is geworden. Nekpijn betekent niet dat uw wervels « in gevaar » zijn. Het is meestal een signaal van uw brein dat de weefsels hun huidige tolerantielimiet hebben bereikt, vaak door gebrek aan bewegingsvariatie.",
          tr: "Ağrıyı son derece hassas bir alarm sistemi olarak düşünün. Bazen alarm gerçekten duman çıktığı için çalar — ama çoğu zaman aşırı hassaslaştığı için çalar. Boyun ağrısı omurlarınızın « tehlikede olduğu » anlamına gelmez. Genellikle beyninizin, bu bölgedeki dokuların mevcut tolerans sınırlarına ulaştığını söyleyen bir sinyaldir — sıklıkla hareket çeşitliliği eksikliğinden.",
          ar: "تخيل الألم كنظام إنذار حساس للغاية. أحيانًا ينطلق الإنذار لأن الدخان يتصاعد فعلًا، لكنه غالبًا ما يرن لأنه أصبح حساسًا للغاية. ألم الرقبة لا يعني أن فقراتك « في خطر ». إنه عادةً إشارة من دماغك بأن أنسجة هذه المنطقة وصلت إلى حد تحملها الحالي، غالبًا بسبب نقص تنوع الحركة.",
          pl: "Wyobraź sobie ból jako bardzo czuły system alarmowy. Czasem alarm uruchamia się, bo rzeczywiście unosi się dym — ale często dzwoni po prostu dlatego, że stał się zbyt czuły. Ból szyi nie oznacza, że Twoje kręgi są « zagrożone ». To zazwyczaj sygnał z mózgu, że tkanki w tym obszarze osiągnęły aktualny limit tolerancji, często z powodu braku różnorodności ruchu.",
          "uk": "Уявіть біль як надчутливу систему сигналізації. Іноді вона спрацьовує, бо справді з'явився дим, але часто вона дзвонить просто тому, що стала надто чутливою. Біль у шиї не означає, що ваші хребці «в небезпеці». Зазвичай це сигнал від вашого мозку про те, що тканини в цій ділянці досягли своєї поточної межі толерантності, часто через брак різноманітності рухів.",
          "es": "Imagine el dolor como un sistema de alarma muy sensible. A veces la alarma salta porque de verdad sube humo, pero a menudo suena simplemente porque se ha vuelto demasiado sensible. Un dolor de cuello no significa que sus vértebras estén «en peligro». Suele ser una señal que le envía su cerebro para decirle que los tejidos de esa zona han alcanzado su límite de tolerancia actual, a menudo por falta de variedad de movimiento.",
          "ku": "Êşê wekî pergaleke alarmê ya pir hestiyar bifikirin. Carinan alarm lê dide ji ber ku bi rastî dûman bilind dibe, lê gelek caran ew tenê lê dide ji ber ku pir hestiyar bûye. Êşa stûyê nayê wê wateyê ku movikên piştê yên we «di xeterê de» ne. Bi gelemperî ew îşaretek e ku mêjiyê we dişîne da ku bibêje şaneyên vê herêmê gihîştine sînorê xwe yê tehamulê yê niha, bi gelemperî ji ber kêmbûna cûrbecûriya tevgerê.",
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
          "uk": "Міф про ідеальну поставу",
          "es": "El mito de la postura perfecta",
          "ku": "Efsaneya helwesta laş a bêkêmasî",
        },
        body: {
          de: "Man hat uns oft gesagt, „gerade zu sitzen\". Doch die Forschung in der Manuellen Therapie ist eindeutig: Es gibt keine einzige Haltung, die Schmerzen verhindern würde. Der wahre Übeltäter ist die Unbeweglichkeit. Wie das Sprichwort sagt: „Ihre beste Haltung ist die nächste.\" Regelmäßig die Position zu wechseln ist weitaus vorteilhafter, als sich den ganzen Tag lang künstlich steif zu halten.",
          fr: "On nous a souvent répété de « se tenir droit ». Pourtant, la recherche en thérapie manuelle est claire : il n'existe pas de posture unique qui préviendrait la douleur. Le véritable coupable, c'est l'immobilité. Comme le dit l'adage : « Votre meilleure posture, c'est la prochaine ». Changer de position régulièrement est bien plus bénéfique que d'essayer de maintenir une rigidité artificielle toute la journée.",
          en: "We've often been told to \"sit up straight.\" Yet research in manual therapy is clear: there is no single posture that prevents pain. The real culprit is immobility. As the saying goes: \"Your best posture is your next one.\" Changing position regularly is far more beneficial than trying to maintain artificial rigidity all day long.",
          nl: "Ons is vaak gezegd „rechtop te zitten\". Toch is het onderzoek in de manuele therapie duidelijk: er bestaat geen enkele houding die pijn zou voorkomen. De echte boosdoener is onbeweeglijkheid. Zoals het gezegde luidt: „Uw beste houding is de volgende.\" Regelmatig van positie veranderen is veel gunstiger dan de hele dag kunstmatige stijfheid proberen aan te houden.",
          tr: "Bize sık sık „dik oturun\" denildi. Ancak manuel terapi araştırması açık: ağrıyı önleyecek tek bir duruş yoktur. Gerçek suçlu hareketsizliktir. Atasözünün dediği gibi: „En iyi duruşunuz bir sonrakidir.\" Düzenli olarak pozisyon değiştirmek, gün boyu yapay bir katılığı sürdürmeye çalışmaktan çok daha faydalıdır.",
          ar: "كثيرًا ما قيل لنا أن „نجلس باستقامة\". ومع ذلك، فإن البحث في العلاج اليدوي واضح: لا توجد وضعية واحدة تمنع الألم. الجاني الحقيقي هو الجمود. كما يقول المثل: „أفضل وضعية لديك هي التالية\". تغيير الوضعية بانتظام أكثر فائدة بكثير من محاولة الحفاظ على صلابة مصطنعة طوال اليوم.",
          pl: "Często powtarzano nam, by „siedzieć prosto\". Jednak badania w terapii manualnej są jasne: nie istnieje jedna postawa, która zapobiegałaby bólowi. Prawdziwym winowajcą jest bezruch. Jak mówi przysłowie: „Najlepsza postawa to ta następna\". Regularna zmiana pozycji jest znacznie korzystniejsza niż próba utrzymania sztucznej sztywności przez cały dzień.",
          "uk": "Нам часто повторювали: «Сиди рівно». Проте дослідження в мануальній терапії однозначні: не існує єдиної постави, яка запобігала б болю. Справжній винуватець — нерухомість. Як каже приказка: «Ваша найкраща постава — наступна». Регулярно змінювати положення набагато корисніше, ніж намагатися цілий день зберігати штучну скутість.",
          "es": "A menudo nos han repetido que hay que «ponerse recto». Sin embargo, la investigación en terapia manual es clara: no existe una postura única que prevenga el dolor. El verdadero culpable es la inmovilidad. Como dice el dicho: «Su mejor postura es la siguiente». Cambiar de posición con regularidad es mucho más beneficioso que intentar mantener una rigidez artificial todo el día.",
          "ku": "Gelek caran ji me re hatiye gotin ku «rast rûnin». Lê lêkolînên di terapiya destî de zelal in: helwesteke yekane tune ye ku pêşî li êşê bigire. Sûcdarê rastîn bêtevgerî ye. Wekî gotina pêşiyan: «Helwesta we ya herî baş ya din e». Guhertina pozîsyonê bi rêkûpêk ji hewldana parastina hişkbûneke çêkirî tevahiya rojê gelek bi feydetir e.",
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
          "uk": "Медична візуалізація: внутрішні «зморшки»",
          "es": "Las pruebas de imagen: «arrugas» interiores",
          "ku": "Wênegiriya bijîşkî: «qermiçokên» hundirîn",
        },
        body: {
          de: "Wenn Ihr Röntgenbild Arthrose oder eine leichte Bandscheibenvorwölbung erwähnt, kein Grund zur Panik! Bei einer überwältigenden Mehrheit von Menschen ohne jegliche Schmerzen finden sich genau dieselben Zeichen. Es sind keine Krankheiten, sondern normale Reifungsprozesse des Körpers, ähnlich wie Falten auf der Haut oder graue Haare. Sie sind kein Hindernis für ein aktives, schmerzfreies Leben.",
          fr: "Si votre radio mentionne de l'arthrose ou une légère saillie discale, pas de panique ! Chez une immense majorité de personnes sans aucune douleur, on retrouve ces mêmes signes. Ce ne sont pas des maladies, mais des processus normaux de maturation du corps, semblables aux rides sur la peau ou aux cheveux blancs. Ils ne sont pas une barrière à une vie active et sans douleur.",
          en: "If your X-ray mentions arthritis or a slight disc bulge, don't panic! In an overwhelming majority of people with no pain at all, we find these very same signs. They are not diseases, but normal maturation processes of the body, similar to wrinkles on the skin or grey hair. They are no barrier to an active, pain-free life.",
          nl: "Als uw röntgenfoto artrose of een lichte discusbulging vermeldt, geen paniek! Bij een overgrote meerderheid van mensen zonder pijn vinden we precies dezelfde tekenen. Het zijn geen ziektes, maar normale rijpingsprocessen van het lichaam, vergelijkbaar met rimpels op de huid of grijs haar. Ze zijn geen belemmering voor een actief, pijnvrij leven.",
          tr: "Röntgeniniz artrit veya hafif bir disk çıkıntısından bahsediyorsa, paniğe gerek yok! Hiçbir ağrısı olmayan insanların büyük çoğunluğunda da aynı işaretler bulunur. Bunlar hastalık değil, vücudun normal olgunlaşma süreçleridir — cilt kırışıkları veya gri saçlar gibi. Aktif ve ağrısız bir hayata engel değildirler.",
          ar: "إذا ذكرت أشعتك السينية وجود التهاب مفاصل أو انتفاخ خفيف في القرص، فلا داعي للذعر! نجد نفس هذه العلامات لدى الغالبية العظمى من الأشخاص الذين لا يعانون من أي ألم. هذه ليست أمراضًا، بل عمليات نضج طبيعية للجسم، مشابهة للتجاعيد على الجلد أو الشعر الرمادي. ليست حاجزًا أمام حياة نشطة وخالية من الألم.",
          pl: "Jeśli Twoje zdjęcie RTG wspomina o zwyrodnieniu lub niewielkiej wypuklinie dyskowej, bez paniki! U przytłaczającej większości osób bez żadnego bólu znajdujemy te same oznaki. To nie choroby, lecz normalne procesy dojrzewania ciała, podobne do zmarszczek na skórze czy siwych włosów. Nie są przeszkodą w aktywnym, bezbolesnym życiu.",
          "uk": "Якщо у висновку рентгену згадано артроз або невелике випинання диска — без паніки! У переважної більшості людей, які зовсім не мають болю, знаходять ті самі ознаки. Це не хвороби, а нормальні процеси дозрівання організму, подібні до зморшок на шкірі чи сивого волосся. Вони не є перешкодою для активного життя без болю.",
          "es": "Si su radiografía menciona artrosis o una leve protrusión discal, ¡que no cunda el pánico! En una inmensa mayoría de personas sin ningún dolor se encuentran esos mismos signos. No son enfermedades, sino procesos normales de maduración del cuerpo, parecidos a las arrugas de la piel o las canas. No son un obstáculo para una vida activa y sin dolor.",
          "ku": "Eger di rapora rontgena we de artroz an derketineke sivik a dîskê hatibe nivîsîn, netirsin! Li piraniya herî mezin a kesên ku qet êşa wan tune, heman nîşan têne dîtin. Ev ne nexweşî ne, lê pêvajoyên normal ên gihîştina laş in, wekî qermiçokên li ser çerm an porê spî. Ew ne astengek in li pêşiya jiyaneke çalak û bê êş.",
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
          "uk": "Повернути контроль: рух як ліки",
          "es": "Recuperar el control: el movimiento como medicina",
          "ku": "Kontrolê dîsa bi dest bixin: tevger wekî derman",
        },
        body: {
          de: "Der menschliche Körper nutzt sich nur dann ab, wenn man ihn nicht benutzt. Um einen empfindlichen Nacken zu beruhigen, ist die Lösung nicht völlige Ruhe, sondern progressive und wohlwollende Bewegung. Indem Sie Ihrem Nervensystem durch angepasste Übungen Vertrauen zurückgeben, erhöhen Sie die Kapazität Ihres Körpers, mit den Belastungen des Alltags umzugehen.",
          fr: "Le corps humain ne s'use que si l'on ne s'en sert pas. Pour apaiser un cou sensible, la solution n'est pas le repos total, mais le mouvement progressif et bienveillant. En redonnant de la confiance à votre système nerveux par des exercices adaptés, vous augmentez la capacité de votre corps à supporter les contraintes du quotidien.",
          en: "The human body only wears out if you don't use it. To soothe a sensitive neck, the solution is not complete rest, but progressive and benevolent movement. By giving your nervous system back its confidence through adapted exercises, you increase your body's capacity to handle daily-life loads.",
          nl: "Het menselijk lichaam slijt alleen als u het niet gebruikt. Om een gevoelige nek te kalmeren is de oplossing niet volledige rust, maar progressieve en welwillende beweging. Door uw zenuwstelsel via aangepaste oefeningen vertrouwen terug te geven, vergroot u het vermogen van uw lichaam om de dagelijkse belasting aan te kunnen.",
          tr: "İnsan vücudu yalnızca kullanılmadığında aşınır. Hassas bir boynu yatıştırmak için çözüm tam dinlenme değil, kademeli ve nazik harekettir. Sinir sisteminize uyarlanmış egzersizlerle güveni geri kazandırarak, vücudunuzun günlük yaşam yüklerini kaldırma kapasitesini artırırsınız.",
          ar: "الجسم البشري يبلى فقط إذا لم تستخدمه. لتهدئة رقبة حساسة، الحل ليس الراحة الكاملة، بل الحركة التدريجية والرحيمة. من خلال إعادة الثقة إلى جهازك العصبي عبر تمارين مكيّفة، تزيد من قدرة جسمك على تحمّل ضغوط الحياة اليومية.",
          pl: "Ciało ludzkie zużywa się tylko wtedy, gdy się go nie używa. Aby uspokoić wrażliwą szyję, rozwiązaniem nie jest całkowity odpoczynek, ale stopniowy i łagodny ruch. Przywracając pewność swojemu układowi nerwowemu poprzez dostosowane ćwiczenia, zwiększasz zdolność ciała do radzenia sobie z codziennymi obciążeniami.",
          "uk": "Людське тіло зношується лише тоді, коли ним не користуються. Щоб заспокоїти чутливу шию, рішення — не повний спокій, а поступовий і дбайливий рух. Повертаючи довіру вашій нервовій системі за допомогою відповідних вправ, ви збільшуєте здатність тіла витримувати повсякденні навантаження.",
          "es": "El cuerpo humano solo se desgasta si no se usa. Para calmar un cuello sensible, la solución no es el reposo total, sino el movimiento progresivo y amable. Al devolver la confianza a su sistema nervioso con ejercicios adaptados, aumenta la capacidad de su cuerpo para soportar las cargas del día a día.",
          "ku": "Laşê mirov tenê dema ku nayê bikaranîn dirize. Ji bo aramkirina stûyekî hestiyar, çareserî ne bêhnvedana tevahî ye, lê tevgera gav bi gav û bi nermî ye. Bi vegerandina baweriyê ji pergala we ya demarî re bi rahênanên guncaw, hûn kapasîteya laşê xwe ya hilgirtina barên jiyana rojane zêde dikin.",
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
          "uk": "Що ми робимо в кабінеті Praxis Loten",
          "es": "Lo que hacemos en la consulta Praxis Loten",
          "ku": "Em li klînîka Praxis Loten çi dikin",
        },
        body: {
          de: "In unserer Praxis in Eupen begleiten wir Sie dabei, Ihre Sorge in Handlung zu verwandeln. Ob mit dem Inhaber, unseren Partnern oder Mitarbeitern — unser Ansatz beruht auf vier Säulen: aktivem Zuhören, um Ihren Lebenskontext und Ihre Ziele zu verstehen; Orthopädischer Manueller Therapie mit sanften Techniken zur Schmerzmodulation; Edukation in Schmerz-Neurowissenschaft, damit Sie genau verstehen, was in Ihrem Körper passiert; und personalisierter Bewegung mit einfachen, wirksamen Übungen für Ihre Routine.",
          fr: "Au sein de notre cabinet à Eupen, nous vous accompagnons pour transformer cette appréhension en action. Que ce soit avec le gérant, nos associés ou nos collaborateurs, notre approche repose sur quatre piliers : une écoute active pour comprendre votre contexte de vie et vos objectifs ; la thérapie manuelle orthopédique avec des techniques douces pour moduler la douleur ; l'éducation aux neurosciences de la douleur, pour que vous compreniez précisément ce qui se passe dans votre corps ; et le mouvement personnalisé, avec des exercices simples et efficaces à intégrer dans votre routine pour devenir autonome.",
          en: "At our practice in Eupen, we help you turn that apprehension into action. Whether with the manager, our partners or our collaborators, our approach rests on four pillars: active listening to understand your life context and goals; Orthopaedic Manual Therapy with gentle techniques to modulate pain; pain neuroscience education so you understand exactly what is happening in your body; and personalised movement, with simple and effective exercises to fold into your routine and become autonomous.",
          nl: "In onze praktijk in Eupen begeleiden we u om die ongerustheid om te zetten in actie. Of het nu met de zaakvoerder, onze partners of medewerkers is — onze aanpak rust op vier pijlers: actief luisteren om uw levenscontext en doelen te begrijpen; orthopedische manuele therapie met zachte technieken om pijn te moduleren; pijnneurowetenschap-educatie zodat u precies begrijpt wat er in uw lichaam gebeurt; en gepersonaliseerde beweging met eenvoudige, effectieve oefeningen voor uw routine.",
          tr: "Eupen'deki kliniğimizde, bu endişeyi eyleme dönüştürmenize yardımcı oluyoruz. Yöneticimizle, ortaklarımızla veya çalışanlarımızla olsun, yaklaşımımız dört temele dayanır: yaşam bağlamınızı ve hedeflerinizi anlamak için aktif dinleme; ağrıyı modüle etmek için nazik tekniklerle Ortopedik Manuel Terapi; vücudunuzda neler olduğunu tam olarak anlamanız için ağrı nörobilim eğitimi; ve rutininize entegre edebileceğiniz basit ve etkili egzersizlerle kişiselleştirilmiş hareket.",
          ar: "في عيادتنا في أوبن، نرافقك لتحويل هذا القلق إلى عمل. سواء مع المدير أو شركائنا أو متعاوننا، يرتكز نهجنا على أربعة أركان: الإصغاء النشط لفهم سياق حياتك وأهدافك؛ العلاج اليدوي العظمي بتقنيات لطيفة لتعديل الألم؛ تثقيف علم الأعصاب للألم لتفهم بدقة ما يحدث في جسمك؛ والحركة المخصصة بتمارين بسيطة وفعّالة لدمجها في روتينك واستعادة استقلاليتك.",
          pl: "W naszym gabinecie w Eupen pomagamy przekształcić tę obawę w działanie. Czy to z kierownikiem, naszymi partnerami czy współpracownikami, nasze podejście opiera się na czterech filarach: aktywnym słuchaniu, aby zrozumieć Twój kontekst życiowy i cele; ortopedycznej terapii manualnej z łagodnymi technikami modulującymi ból; edukacji w neuronaukach bólu, abyś dokładnie rozumiał, co dzieje się w Twoim ciele; i spersonalizowanym ruchu z prostymi, skutecznymi ćwiczeniami do Twojej rutyny.",
          "uk": "У нашому кабінеті в Ойпені ми допомагаємо вам перетворити цю тривогу на дію. Чи то з керівником, чи з нашими партнерами або співробітниками, наш підхід спирається на чотири стовпи: активне слухання, щоб зрозуміти ваш життєвий контекст і цілі; ортопедична мануальна терапія з м'якими техніками для модуляції болю; навчання нейронауці болю, щоб ви точно розуміли, що відбувається у вашому тілі; і персоналізований рух — прості та ефективні вправи, які можна включити у ваш розпорядок, щоб стати самостійними.",
          "es": "En nuestra consulta de Eupen le acompañamos para transformar esa aprensión en acción. Ya sea con el gerente, con nuestros socios o con nuestros colaboradores, nuestro enfoque se basa en cuatro pilares: una escucha activa para comprender su contexto de vida y sus objetivos; la terapia manual ortopédica, con técnicas suaves para modular el dolor; la educación en neurociencia del dolor, para que comprenda con precisión lo que ocurre en su cuerpo; y el movimiento personalizado, con ejercicios sencillos y eficaces que puede integrar en su rutina para ganar autonomía.",
          "ku": "Li klînîka me ya li Eupenê, em alîkariya we dikin ku hûn vê fikarê veguherînin çalakiyê. Çi bi rêvebir re be, çi bi hevparên me an hevkarên me re, nêzîkatiya me li ser çar stûnan e: guhdariya çalak ji bo têgihîştina rewşa jiyana we û armancên we; terapiya destî ya ortopedîk bi teknîkên nerm ji bo sivikkirina êşê; perwerdeya li ser zanista demarî ya êşê, da ku hûn bi hûrgilî fêm bikin ka di laşê we de çi diqewime; û tevgera kesane, bi rahênanên hêsan û bi bandor ku hûn dikarin têxin nav rûtîna xwe da ku serbixwe bibin.",
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
      "uk": [
        "Біль = сигнал тривоги, а не обов'язково ушкодження",
        "Найкраща постава = наступна (рух перемагає статику)",
        "Знахідки на знімках часто схожі на «зморшки»",
        "Поступовий рух заспокоює нервову систему",
        "У Praxis Loten: мануальна терапія + навчання про біль"
      ],
      "es": [
        "Dolor = alarma, no necesariamente lesión",
        "Mejor postura = la siguiente (el movimiento gana a la estática)",
        "Los hallazgos radiológicos suelen ser como «arrugas»",
        "El movimiento progresivo calma el sistema nervioso",
        "En Praxis Loten: terapia manual + educación sobre el dolor"
      ],
      "ku": [
        "Êş = alarm, ne bi mecbûrî birîn",
        "Helwesta herî baş = ya din (tevger ji rawestanê çêtir e)",
        "Dîtinên wênegiriyê bi gelemperî wekî «qermiçokan» in",
        "Tevgera gav bi gav pergala demarî aram dike",
        "Li Praxis Loten: terapiya destî + perwerdeya li ser êşê"
      ],
    },
    ctaText: {
      de: "Nackenschmerzen? Vereinbaren Sie eine Bestandsaufnahme bei uns in Eupen.",
      fr: "Douleurs aux cervicales ? Prenez rendez-vous pour un bilan personnalisé chez nous à Eupen.",
      en: "Neck pain? Book a personalised assessment with us in Eupen.",
      nl: "Nekpijn? Boek een persoonlijke evaluatie bij ons in Eupen.",
      tr: "Boyun ağrısı mı? Eupen'deki kliniğimizde kişisel bir değerlendirme için randevu alın.",
      ar: "آلام الرقبة؟ احجز تقييمًا شخصيًا لدينا في أوبن.",
      pl: "Ból szyi? Umów się na indywidualną ocenę u nas w Eupen.",
      "uk": "Біль у шиї? Запишіться до нас на індивідуальну оцінку в Ойпені.",
      "es": "¿Dolor cervical? Pida cita para una valoración personalizada en nuestra consulta de Eupen.",
      "ku": "Êşa stûyê? Ji bo nirxandineke kesane li cem me li Eupenê randevû bigirin.",
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
      "uk": "Ця стаття має інформаційний характер. Для точної оцінки вашої ситуації зверніться до медичного фахівця.",
      "es": "Este artículo es informativo. Para una valoración precisa de su situación, no dude en consultar a un profesional sanitario.",
      "ku": "Ev gotar ji bo agahdariyê ye. Ji bo nirxandineke rast a rewşa xwe, serî li pisporekî tenduristiyê bidin.",
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
      "uk": "Біль у спині в Ойпені — коли допомагає мануальна терапія?",
      "es": "Dolor de espalda en Eupen: ¿cuándo ayuda la terapia manual?",
      "ku": "Êşa pişte li Eupenê — terapiya destî kengê alîkar e?",
    },
    category: {
      de: "Manuelle Therapie", fr: "Thérapie Manuelle", en: "Manual Therapy",
      nl: "Manuele Therapie", tr: "Manuel Terapi", ar: "العلاج اليدوي", pl: "Terapia Manualna",
      "uk": "Мануальна терапія",
      "es": "Terapia manual",
      "ku": "Terapiya destî",
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
      "uk": "Біль у спині хоча б раз у житті буває майже в кожного. Добра новина: Ваша спина **міцна, здатна до адаптації та витривала**. У більшості випадків жодного серйозного ушкодження немає. Мануальна терапія — у поєднанні з рухом і поясненнями — пропонує науково обґрунтований підхід, який допомагає Вам знову повірити у своє тіло. У нашому кабінеті в Ойпені ми супроводжуємо Вас на цьому шляху.",
      "es": "El dolor de espalda afecta a casi todo el mundo al menos una vez en la vida. La buena noticia: su espalda es **fuerte, adaptable y resistente**. En la mayoría de los casos no hay ninguna lesión grave. La terapia manual, combinada con el movimiento y la educación, ofrece un enfoque basado en la evidencia que le ayuda a recuperar la confianza en su cuerpo. En nuestra consulta de Eupen le acompañamos en este camino.",
      "ku": "Êşa pişte hema hema her kesî bi kêmanî carekê di jiyana wî de digire. Nûçeya baş: pişta we **xurt, guncawbar û berxwedêr e**. Di piraniya rewşan de tu zirareke giran tune. Terapiya destî — bi tevger û perwerdehiyê re — nêzîkatiyeke li ser bingeha delîlan pêşkêş dike ku alîkariya we dike hûn dîsa bi laşê xwe bawer bikin. Li kabîneya me ya li Eupenê, em li ser vê rêyê bi we re ne.",
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
          "uk": "«Моя спина вже не витримує» — це міф",
          "es": "«Mi espalda ya no aguanta»: un mito",
          "ku": "«Pişta min êdî nikare» — efsaneyek",
        },
        body: {
          de: "Viele Menschen glauben, dass Rückenschmerzen zwangsläufig auf eine « altersbedingte Veränderung » oder eine strukturelle Schädigung hinweisen. Die Wissenschaft zeigt ein anderes Bild: bildgebende Veränderungen wie Bandscheibenwölbungen finden sich auch bei **schmerzfreien** Personen. Ihre Wirbelsäule ist eine robuste, anpassungsfähige Struktur — wie ein Baum, der sich im Wind biegt, ohne zu brechen. Schmerz ist ein Schutzsignal Ihres Nervensystems, keine Schadensanzeige. Faktoren wie Schlafqualität, Stress, Überzeugungen und Bewegungsmangel beeinflussen Ihren Schmerz oft stärker als das, was auf einem MRT zu sehen ist.",
          fr: "Beaucoup de personnes croient que les douleurs dorsales signifient forcément un « dommage » ou une détérioration structurelle. La science montre un autre tableau : des modifications à l'imagerie comme les protrusions discales se retrouvent aussi chez des personnes **sans douleur**. Votre colonne vertébrale est une structure robuste et adaptable — comme un arbre qui ploie sous le vent sans se rompre. La douleur est un signal de protection de votre système nerveux, pas un indicateur de dégât. Des facteurs comme la qualité du sommeil, le stress, les croyances et le manque de mouvement influencent souvent votre douleur davantage que ce qu'un IRM peut montrer.",
          en: "Many people believe that back pain inevitably means \"age-related changes\" or structural problems. Science tells a different story: imaging changes like disc bulges are also found in **pain-free** individuals. Your spine is a robust, adaptable structure — like a tree that bends in the wind without breaking. Pain is a protective signal from your nervous system, not a status report. Factors like sleep quality, stress, beliefs and lack of movement often influence your pain more than what an MRI shows.",
          nl: "Veel mensen geloven dat rugpijn automatisch « leeftijdsgebonden veranderingen » of structurele problemen betekent. De wetenschap toont een ander beeld: beeldvormende veranderingen zoals uitpuilende schijven komen ook voor bij **pijnvrije** personen. Uw wervelkolom is een robuuste, aanpasbare structuur — als een boom die buigt in de wind zonder te breken. Pijn is een beschermend signaal van uw zenuwstelsel, geen statusrapport. Factoren als slaapkwaliteit, stress, overtuigingen en bewegingsgebrek beïnvloeden uw pijn vaak sterker dan wat een MRI laat zien.",
          tr: "Birçok kişi sırt ağrısının mutlaka « yaşa bağlı değişiklikler » veya yapısal sorunlar anlamına geldiğine inanır. Bilim farklı bir tablo sunar: disk çıkıntıları gibi görüntüleme bulguları **ağrısız** bireylerde de bulunur. Omurganız sağlam ve uyumlu bir yapıdır — rüzgarda kırılmadan eğilen bir ağaç gibi. Ağrı, sinir sisteminizden gelen koruyucu bir sinyaldir, bir durum raporu değildir. Uyku kalitesi, stres, inançlar ve hareketsizlik gibi faktörler ağrınızı genellikle MR'ın gösterdiğinden daha fazla etkiler.",
          ar: "يعتقد كثيرون أن آلام الظهر تعني حتمًا « تغيرات مرتبطة بالعمر » أو مشاكل هيكلية. العلم يُظهر صورة مختلفة: تغييرات التصوير مثل بروز الأقراص توجد أيضًا عند أشخاص **بدون ألم**. عمودك الفقري بنية متينة وقابلة للتكيف — كشجرة تنحني في الريح دون أن تنكسر. الألم إشارة حماية من جهازك العصبي، وليس تقرير حالة. عوامل مثل جودة النوم والتوتر والمعتقدات وقلة الحركة تؤثر غالبًا على ألمك أكثر مما يظهره التصوير بالرنين المغناطيسي.",
          pl: "Wiele osób wierzy, że ból pleców oznacza « zmiany związane z wiekiem » lub problemy strukturalne. Nauka pokazuje inny obraz: zmiany w obrazowaniu, takie jak wypukliny dyskowe, występują również u osób **bez bólu**. Twój kręgosłup to solidna, adaptacyjna struktura — jak drzewo, które ugina się na wietrze, nie łamiąc się. Ból to sygnał ochronny układu nerwowego, nie raport o stanie. Czynniki takie jak jakość snu, stres, przekonania i brak ruchu często wpływają na ból bardziej niż to, co pokazuje MRI.",
          "uk": "Багато людей вважають, що біль у спині неодмінно означає «пошкодження» чи структурне руйнування. Наука показує іншу картину: зміни на знімках, як-от протрузії міжхребцевих дисків, трапляються й у людей **без болю**. Ваш хребет — міцна структура, здатна до адаптації, — як дерево, що гнеться під вітром, але не ламається. Біль — це захисний сигнал Вашої нервової системи, а не показник пошкодження. Такі чинники, як якість сну, стрес, переконання та брак руху, часто впливають на Ваш біль більше, ніж те, що може показати МРТ.",
          "es": "Mucha gente cree que el dolor de espalda significa necesariamente un «daño» o un deterioro estructural. La ciencia muestra otro panorama: los cambios en las pruebas de imagen, como las protrusiones discales, también se encuentran en personas **sin dolor**. Su columna vertebral es una estructura robusta y adaptable, como un árbol que se dobla con el viento sin romperse. El dolor es una señal de protección de su sistema nervioso, no un indicador de daño. Factores como la calidad del sueño, el estrés, las creencias y la falta de movimiento influyen a menudo en su dolor más que lo que puede mostrar una resonancia magnética.",
          "ku": "Gelek kes bawer dikin ku êşa pişte bi neçarî tê wateya «zirarê» an xirabbûneke avahîsaziyê. Zanist wêneyekî din nîşan dide: guherînên di wêneyên bijîşkî de, wekî derketinên dîskan, li cem kesên **bê êş** jî têne dîtin. Stûna we ya pişte avahiyeke xurt û guncawbar e — wekî darekê ku di ber bayê de diçemîne bêyî ku bişkê. Êş îşareteke parastinê ya pergala we ya demaran e, ne nîşaneya zirarê. Faktorên wekî kalîteya xewê, stres, bawerî û kêmasiya tevgerê gelek caran ji tiştê ku MRI dikare nîşan bide bêtir bandorê li êşa we dikin.",
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
          "uk": "Що справді важливо: рух і розуміння",
          "es": "Lo que realmente importa: movimiento y comprensión",
          "ku": "Tiştê ku bi rastî girîng e: tevger û têgihîştin",
        },
        body: {
          de: "Die internationale Forschung ist eindeutig: die Kombination aus **manueller Therapie, aktiver Bewegung und Patientenedukation** erzielt die besten Ergebnisse bei Rückenschmerzen. Manuelle Therapie allein ist wirksam zur kurzfristigen Schmerzlinderung — aber ihr größter Wert liegt darin, ein « Fenster der Möglichkeit » zu öffnen, in dem Sie sich wieder bewegen können. Mobilisationstechniken beruhigen Ihr Nervensystem, verbessern die Beweglichkeit und reduzieren die Muskelspannung. Dieser Effekt ermöglicht es Ihnen, aktive Übungen durchzuführen, die langfristig den Unterschied machen. Der Schlüssel liegt in der Kombination: Hände des Therapeuten + Ihre eigene Bewegung + Verständnis Ihrer Situation.",
          fr: "La recherche internationale est claire : la combinaison de **thérapie manuelle, mouvement actif et éducation du patient** obtient les meilleurs résultats pour les douleurs dorsales. La thérapie manuelle seule est efficace pour soulager à court terme — mais sa plus grande valeur est d'ouvrir une « fenêtre d'opportunité » dans laquelle vous pouvez recommencer à bouger. Les techniques de mobilisation calment votre système nerveux, améliorent la mobilité et réduisent les tensions musculaires. Cet effet vous permet de réaliser des exercices actifs qui font la différence à long terme. La clé réside dans la combinaison : les mains du thérapeute + votre propre mouvement + la compréhension de votre situation.",
          en: "International research is clear: the combination of **manual therapy, active movement and patient education** achieves the best results for back pain. Manual therapy alone is effective for short-term relief — but its greatest value lies in opening a \"window of opportunity\" in which you can start moving again. Mobilisation techniques calm your nervous system, improve mobility and reduce muscle tension. This effect allows you to perform active exercises that make the long-term difference. The key lies in the combination: the therapist's hands + your own movement + understanding your situation.",
          nl: "Internationaal onderzoek is duidelijk: de combinatie van **manuele therapie, actieve beweging en patiënteducatie** behaalt de beste resultaten bij rugpijn. Manuele therapie alleen is effectief voor kortdurende verlichting — maar de grootste waarde ligt in het openen van een « venster van mogelijkheid » waarin u weer kunt bewegen. Mobilisatietechnieken kalmeren uw zenuwstelsel, verbeteren de beweeglijkheid en verminderen spierspanning. Dit effect stelt u in staat actieve oefeningen uit te voeren die op lange termijn het verschil maken. De sleutel ligt in de combinatie: de handen van de therapeut + uw eigen beweging + begrip van uw situatie.",
          tr: "Uluslararası araştırma açıktır: **manuel terapi, aktif hareket ve hasta eğitiminin** kombinasyonu sırt ağrısı için en iyi sonuçları elde eder. Manuel terapi tek başına kısa vadeli rahatlama için etkilidir — ancak en büyük değeri, tekrar hareket edebileceğiniz bir « fırsat penceresi » açmasıdır. Mobilizasyon teknikleri sinir sisteminizi sakinleştirir, hareketliliği artırır ve kas gerginliğini azaltır. Bu etki, uzun vadede fark yaratan aktif egzersizleri yapmanızı sağlar. Anahtar kombinasyondadır: terapistin elleri + kendi hareketiniz + durumunuzu anlama.",
          ar: "البحث الدولي واضح: الجمع بين **العلاج اليدوي والحركة النشطة وتثقيف المريض** يحقق أفضل النتائج لآلام الظهر. العلاج اليدوي وحده فعال للتخفيف قصير المدى — لكن قيمته الأكبر تكمن في فتح «نافذة فرصة» يمكنك فيها البدء بالحركة مجددًا. تقنيات التحريك تهدئ جهازك العصبي وتحسن الحركة وتقلل التوتر العضلي. هذا التأثير يتيح لك أداء تمارين نشطة تصنع الفرق على المدى الطويل. المفتاح في الجمع: يدا المعالج + حركتك الخاصة + فهم وضعك.",
          pl: "Badania międzynarodowe są jasne: połączenie **terapii manualnej, aktywnego ruchu i edukacji pacjenta** osiąga najlepsze wyniki w bólu pleców. Terapia manualna sama w sobie jest skuteczna w krótkotrwałym łagodzeniu bólu — ale jej największa wartość polega na otwarciu «okna możliwości», w którym możesz znów zacząć się ruszać. Techniki mobilizacji uspokajają układ nerwowy, poprawiają ruchomość i zmniejszają napięcie mięśniowe. Ten efekt pozwala wykonywać aktywne ćwiczenia, które robią różnicę w dłuższej perspektywie. Klucz leży w kombinacji: ręce terapeuty + Twój własny ruch + zrozumienie Twojej sytuacji.",
          "uk": "Міжнародні дослідження однозначні: поєднання **мануальної терапії, активного руху та навчання пацієнта** дає найкращі результати при болю в спині. Сама лише мануальна терапія ефективна для короткочасного полегшення — але найбільша її цінність у тому, що вона відкриває «вікно можливостей», у якому Ви можете знову почати рухатися. Мобілізаційні техніки заспокоюють Вашу нервову систему, покращують рухливість і зменшують м’язове напруження. Цей ефект дає Вам змогу виконувати активні вправи, які роблять різницю в довгостроковій перспективі. Ключ — у поєднанні: руки терапевта + Ваш власний рух + розуміння Вашої ситуації.",
          "es": "La investigación internacional es clara: la combinación de **terapia manual, movimiento activo y educación del paciente** obtiene los mejores resultados en el dolor de espalda. La terapia manual por sí sola es eficaz para aliviar a corto plazo, pero su mayor valor es abrir una «ventana de oportunidad» en la que usted puede volver a moverse. Las técnicas de movilización calman su sistema nervioso, mejoran la movilidad y reducen la tensión muscular. Este efecto le permite realizar ejercicios activos que marcan la diferencia a largo plazo. La clave está en la combinación: las manos del terapeuta + su propio movimiento + la comprensión de su situación.",
          "ku": "Lêkolîna navneteweyî zelal e: hevgirtina **terapiya destî, tevgera çalak û perwerdehiya nexweş** di êşa pişte de encamên herî baş digire. Terapiya destî bi tenê ji bo sivikkirina demkurt bi bandor e — lê nirxa wê ya herî mezin ew e ku «pencereyeke derfetê» vedike ku tê de hûn dikarin dîsa dest bi livînê bikin. Teknîkên mobîlîzasyonê pergala we ya demaran aram dikin, livînbûnê baştir dikin û gerbûna masûlkeyan kêm dikin. Ev bandor rê dide we ku hûn werzîşên çalak bikin ku di demeke dirêj de ferqê çêdikin. Kilît di hevgirtinê de ye: destên terapîst + tevgera we ya xwe + têgihîştina rewşa we.",
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
          "uk": "Золоте правило нашого кабінету",
          "es": "La regla de oro de nuestra consulta",
          "ku": "Rêgeza zêrîn a kabîneya me",
        },
        body: {
          de: "> *« Manuelle Therapie öffnet die Tür — Ihre Bewegung geht hindurch. »*\n\nDieser Satz fasst unsere Philosophie zusammen. Die Hände des Therapeuten helfen, Schmerzen zu modulieren und Vertrauen in die Bewegung zurückzugeben. Aber es sind **Ihre** täglichen Übungen und **Ihr** Verständnis, die den nachhaltigen Erfolg sichern. Wir sehen unsere Rolle nicht als « Reparateure », sondern als Coaches, die Sie befähigen, Ihren Alltag schmerzfrei zu meistern. Die wissenschaftliche Evidenz zeigt: Patienten, die ihre Situation verstehen und aktiv mitwirken, erholen sich schneller und bleiben langfristig beschwerdefrei.",
          fr: "> *« La thérapie manuelle ouvre la porte — c'est votre mouvement qui la franchit. »*\n\nCette phrase résume notre philosophie. Les mains du thérapeute aident à moduler la douleur et à redonner confiance dans le mouvement. Mais ce sont **vos** exercices quotidiens et **votre** compréhension qui assurent le succès durable. Nous ne nous voyons pas comme des « réparateurs », mais comme des coaches qui vous aident à retrouver un quotidien sans douleur. L'évidence scientifique montre que les patients qui comprennent leur situation et participent activement se rétablissent plus vite et restent sans douleur à long terme.",
          en: "> *\"Manual therapy opens the door — your movement walks through it.\"*\n\nThis sentence captures our philosophy. The therapist's hands help modulate pain and restore confidence in movement. But it is **your** daily exercises and **your** understanding that ensure lasting success. We don't see ourselves as \"fixers\" but as coaches who empower you to master your daily life pain-free. Scientific evidence shows that patients who understand their situation and actively participate recover faster and remain pain-free long-term.",
          nl: "> *« Manuele therapie opent de deur — uw beweging gaat erdoor. »*\n\nDeze zin vat onze filosofie samen. De handen van de therapeut helpen pijn te moduleren en vertrouwen in beweging te herstellen. Maar het zijn **uw** dagelijkse oefeningen en **uw** begrip die duurzaam succes garanderen. Wij zien onszelf niet als « reparateurs » maar als coaches die u in staat stellen uw dagelijks leven pijnvrij te leven. Wetenschappelijk bewijs toont dat patiënten die hun situatie begrijpen en actief meewerken sneller herstellen en langdurig pijnvrij blijven.",
          tr: "> *« Manuel terapi kapıyı açar — hareketiniz içeri girer. »*\n\nBu cümle felsefemizi özetler. Terapistin elleri ağrıyı modüle etmeye ve harekete güveni yeniden kazandırmaya yardımcı olur. Ancak kalıcı başarıyı sağlayan **sizin** günlük egzersizleriniz ve **sizin** anlayışınızdır. Kendimizi « tamirciler » olarak değil, günlük yaşamınızı ağrısız sürdürmenizi sağlayan koçlar olarak görüyoruz. Bilimsel kanıtlar, durumlarını anlayan ve aktif katılan hastaların daha hızlı iyileştiğini ve uzun vadede ağrısız kaldığını göstermektedir.",
          ar: "> *«العلاج اليدوي يفتح الباب — حركتك تعبر منه.»*\n\nهذه الجملة تلخص فلسفتنا. يدا المعالج تساعدان في تعديل الألم واستعادة الثقة في الحركة. لكن **تمارينك** اليومية و**فهمك** هما ما يضمنان النجاح المستدام. لا نرى أنفسنا كـ«مصلحين» بل كمدربين يمكّنونك من عيش حياتك اليومية بدون ألم. الأدلة العلمية تظهر أن المرضى الذين يفهمون وضعهم ويشاركون بنشاط يتعافون أسرع ويبقون بدون ألم على المدى الطويل.",
          pl: "> *« Terapia manualna otwiera drzwi — Twój ruch przez nie przechodzi. »*\n\nTo zdanie podsumowuje naszą filozofię. Ręce terapeuty pomagają modulować ból i przywrócić zaufanie do ruchu. Ale to **Twoje** codzienne ćwiczenia i **Twoje** zrozumienie zapewniają trwały sukces. Nie widzimy siebie jako «naprawiaczy», ale jako trenerów, którzy pomagają Ci opanować codzienne życie bez bólu. Dowody naukowe pokazują, że pacjenci rozumiejący swoją sytuację i aktywnie uczestniczący dochodzą do zdrowia szybciej i pozostają bez bólu długoterminowo.",
          "uk": "> *«Мануальна терапія відчиняє двері — а проходить крізь них Ваш рух.»*\n\nЦя фраза підсумовує нашу філософію. Руки терапевта допомагають модулювати біль і повернути довіру до руху. Але саме **Ваші** щоденні вправи та **Ваше** розуміння забезпечують тривалий успіх. Ми бачимо себе не «ремонтниками», а тренерами, які допомагають Вам повернутися до повсякдення без болю. Наукові дані показують, що пацієнти, які розуміють свою ситуацію та беруть активну участь, одужують швидше й довше залишаються без болю.",
          "es": "> *«La terapia manual abre la puerta; es su movimiento el que la cruza.»*\n\nEsta frase resume nuestra filosofía. Las manos del terapeuta ayudan a modular el dolor y a devolver la confianza en el movimiento. Pero son **sus** ejercicios diarios y **su** comprensión los que garantizan el éxito duradero. No nos vemos como «reparadores», sino como entrenadores que le ayudan a recuperar un día a día sin dolor. La evidencia científica muestra que los pacientes que comprenden su situación y participan activamente se recuperan más rápido y siguen sin dolor a largo plazo.",
          "ku": "> *«Terapiya destî derî vedike — tevgera we ye ku di wî re derbas dibe.»*\n\nEv hevok felsefeya me kurt dike. Destên terapîst alîkariya modulekirina êşê û vegerandina baweriya bi tevgerê dikin. Lê werzîşên **we** yên rojane û têgihîştina **we** ne ku serkeftina mayînde misoger dikin. Em xwe ne wekî «tamîrkar», lê wekî rahênerên ku alîkariya we dikin hûn vegerin jiyaneke rojane ya bê êş dibînin. Delîlên zanistî nîşan didin ku nexweşên ku rewşa xwe fêm dikin û bi awayekî çalak beşdar dibin zûtir baş dibin û di demeke dirêj de bê êş dimînin.",
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
          "uk": "3 звички при болю в спині",
          "es": "3 reflejos en caso de dolor de espalda",
          "ku": "3 adet di rewşa êşa pişte de",
        },
        body: {
          de: "**1. Bleiben Sie in Bewegung** — Bettruhe ist überholt. Leichte Aktivität (Spazierengehen, sanftes Dehnen) fördert die Heilung besser als Stillliegen. Beginnen Sie mit dem, was Ihnen möglich ist.\n\n**2. Beruhigen Sie Ihren Geist** — Sorgen und Katastrophengedanken verstärken den Schmerz nachweislich. Erinnern Sie sich: Rückenschmerzen sind meist gutartig und vorübergehend. Ihr Körper ist auf Heilung programmiert.\n\n**3. Suchen Sie qualifizierte Begleitung** — Ein Manualtherapeut kann Ihnen helfen, Ihre Beweglichkeit zurückzugewinnen und Ihnen einen individuellen Übungsplan geben. In Eupen stehen wir Ihnen zur Verfügung.",
          fr: "**1. Restez en mouvement** — Le repos au lit est dépassé. Une activité légère (marche, étirements doux) favorise la guérison mieux que l'immobilité. Commencez par ce qui vous est possible.\n\n**2. Rassurez votre esprit** — Les inquiétudes et pensées catastrophiques amplifient la douleur de manière prouvée. Rappelez-vous : les douleurs dorsales sont généralement bénignes et temporaires. Votre corps est programmé pour guérir.\n\n**3. Consultez un professionnel qualifié** — Un thérapeute manuel peut vous aider à retrouver votre mobilité et vous donner un plan d'exercices personnalisé. À Eupen, nous sommes à votre disposition.",
          en: "**1. Keep moving** — Bed rest is outdated. Light activity (walking, gentle stretching) promotes healing better than lying still. Start with what you can manage.\n\n**2. Calm your mind** — Worries and catastrophic thoughts have been proven to amplify pain. Remember: back pain is usually benign and temporary. Your body is programmed to heal.\n\n**3. Seek qualified guidance** — A manual therapist can help you regain mobility and provide a personalised exercise plan. In Eupen, we are at your service.",
          nl: "**1. Blijf bewegen** — Bedrust is achterhaald. Lichte activiteit (wandelen, zacht stretchen) bevordert herstel beter dan stilliggen. Begin met wat u aankunt.\n\n**2. Stel uw geest gerust** — Zorgen en rampdenken versterken pijn aantoonbaar. Onthoud: rugpijn is meestal goedaardig en tijdelijk. Uw lichaam is geprogrammeerd om te herstellen.\n\n**3. Zoek gekwalificeerde begeleiding** — Een manuele therapeut kan u helpen uw mobiliteit te herwinnen en een persoonlijk oefenplan geven. In Eupen staan wij voor u klaar.",
          tr: "**1. Hareket etmeye devam edin** — Yatak istirahati modası geçmiştir. Hafif aktivite (yürüyüş, nazik germe) iyileşmeyi hareketsiz yatmaktan daha iyi destekler. Yapabildiğinizle başlayın.\n\n**2. Zihninizi sakinleştirin** — Endişeler ve felaket düşünceleri ağrıyı kanıtlanmış şekilde artırır. Unutmayın: sırt ağrısı genellikle iyi huylu ve geçicidir. Vücudunuz iyileşmek için programlanmıştır.\n\n**3. Nitelikli rehberlik arayın** — Bir manuel terapist hareketliliğinizi yeniden kazanmanıza ve kişiselleştirilmiş egzersiz planı sunmanıza yardımcı olabilir. Eupen'de hizmetinizdeyiz.",
          ar: "**1. ابقَ في حركة** — الراحة في السرير عفا عليها الزمن. النشاط الخفيف (المشي، التمدد اللطيف) يعزز الشفاء أفضل من الاستلقاء. ابدأ بما تستطيع.\n\n**2. طمئن ذهنك** — القلق والأفكار الكارثية تضخم الألم بشكل مثبت. تذكر: آلام الظهر عادةً حميدة ومؤقتة. جسمك مبرمج للشفاء.\n\n**3. اطلب التوجيه المؤهل** — يمكن لمعالج يدوي مساعدتك في استعادة حركتك وتقديم خطة تمارين مخصصة. في Eupen، نحن في خدمتك.",
          pl: "**1. Pozostań w ruchu** — Leżenie w łóżku jest przestarzałe. Lekka aktywność (spacer, delikatne rozciąganie) wspiera gojenie lepiej niż leżenie. Zacznij od tego, co możesz.\n\n**2. Uspokój swój umysł** — Obawy i katastroficzne myśli udowodniono, że nasilają ból. Pamiętaj: ból pleców jest zwykle łagodny i tymczasowy. Twoje ciało jest zaprogramowane do gojenia.\n\n**3. Szukaj kwalifikowanego wsparcia** — Terapeuta manualny może pomóc Ci odzyskać ruchomość i zapewnić spersonalizowany plan ćwiczeń. W Eupen jesteśmy do Twojej dyspozycji.",
          "uk": "**1. Залишайтеся в русі** — Постільний режим застарів. Легка активність (ходьба, м’яке розтягування) сприяє одужанню краще, ніж нерухомість. Почніть із того, що Вам під силу.\n\n**2. Заспокойте свої думки** — Доведено, що тривоги й катастрофічні думки посилюють біль. Пам’ятайте: біль у спині зазвичай доброякісний і тимчасовий. Ваше тіло запрограмоване на одужання.\n\n**3. Зверніться до кваліфікованого фахівця** — Мануальний терапевт може допомогти Вам відновити рухливість і дати індивідуальний план вправ. В Ойпені ми до Ваших послуг.",
          "es": "**1. Manténgase en movimiento** — El reposo en cama está superado. Una actividad ligera (caminar, estiramientos suaves) favorece la curación mejor que la inmovilidad. Empiece por lo que le resulte posible.\n\n**2. Tranquilice su mente** — Está demostrado que las preocupaciones y los pensamientos catastrofistas amplifican el dolor. Recuerde: el dolor de espalda suele ser benigno y pasajero. Su cuerpo está programado para curarse.\n\n**3. Consulte a un profesional cualificado** — Un terapeuta manual puede ayudarle a recuperar la movilidad y darle un plan de ejercicios personalizado. En Eupen estamos a su disposición.",
          "ku": "**1. Di tevgerê de bimînin** — Bêhnvedana di nav nivînan de êdî kevn bûye. Çalakiya sivik (meş, vezelandina nerm) ji bêtevgeriyê çêtir başbûnê pêş dixe. Bi tiştê ku ji we tê dest pê bikin.\n\n**2. Hişê xwe aram bikin** — Hatiye îsbatkirin ku fikar û ramanên felaketî êşê zêde dikin. Bînin bîra xwe: êşa pişte bi gelemperî bêzirar û demkî ye. Laşê we ji bo başbûnê hatiye bernamekirin.\n\n**3. Serdana pisporekî jêhatî bikin** — Terapîstekî destî dikare alîkariya we bike ku hûn livînbûna xwe ji nû ve bi dest bixin û bernameyeke werzîşê ya kesane bide we. Li Eupenê em di xizmeta we de ne.",
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
          "uk": "Коли звертатися до лікаря?",
          "es": "¿Cuándo consultar a un médico?",
          "ku": "Kengê divê hûn serdana bijîşk bikin?",
        },
        body: {
          de: "Die allermeisten Rückenschmerzen sind harmlos. Selten können jedoch Warnsignale auf eine ernstere Ursache hinweisen. Suchen Sie zeitnah einen Arzt auf bei: anhaltendem **Taubheitsgefühl oder Kraftverlust** in den Beinen, Problemen mit der **Blasen- oder Darmkontrolle**, Schmerzen nach einem **schweren Unfall**, unerklärlichem **Gewichtsverlust** oder **Fieber** in Kombination mit Rückenschmerzen, oder Schmerzen, die sich **nachts in Ruhe** verschlimmern. Diese Signale betreffen weniger als 1 % aller Rückenschmerzpatienten — aber sie erfordern eine ärztliche Abklärung. Bei allen anderen Formen von Rückenschmerzen können wir Ihnen in der Praxis Loten direkt helfen.",
          fr: "La très grande majorité des douleurs dorsales est bénigne. Rarement, certains signaux d'alerte peuvent indiquer une cause plus sérieuse. Consultez rapidement un médecin en cas de : **engourdissements ou perte de force** persistants dans les jambes, problèmes de **contrôle de la vessie ou de l'intestin**, douleur après un **accident grave**, **perte de poids inexpliquée** ou **fièvre** associée à des douleurs dorsales, ou douleur qui **s'aggrave la nuit au repos**. Ces signaux concernent moins de 1 % des patients souffrant du dos — mais ils nécessitent un avis médical. Pour toutes les autres formes de douleurs dorsales, nous pouvons vous aider directement au cabinet Praxis Loten.",
          en: "The vast majority of back pain is harmless. Rarely, warning signs may point to a more serious cause. Seek medical attention promptly for: persistent **numbness or loss of strength** in the legs, problems with **bladder or bowel control**, pain following a **serious accident**, unexplained **weight loss** or **fever** combined with back pain, or pain that **worsens at night at rest**. These signs affect less than 1% of all back pain patients — but they require medical assessment. For all other forms of back pain, we can help you directly at Praxis Loten.",
          nl: "De overgrote meerderheid van rugpijn is onschuldig. Zelden kunnen waarschuwingssignalen op een ernstiger oorzaak wijzen. Raadpleeg snel een arts bij: aanhoudend **gevoelloosheid of krachtverlies** in de benen, problemen met de **blaas- of darmcontrole**, pijn na een **ernstig ongeval**, onverklaarbaar **gewichtsverlies** of **koorts** in combinatie met rugpijn, of pijn die **'s nachts in rust** verergert. Deze signalen betreffen minder dan 1 % van alle rugpijnpatiënten — maar ze vereisen medische beoordeling. Voor alle andere vormen van rugpijn kunnen wij u direct helpen bij Praxis Loten.",
          tr: "Sırt ağrısının büyük çoğunluğu zararsızdır. Nadiren, uyarı işaretleri daha ciddi bir nedene işaret edebilir. Şu durumlarda derhal bir doktora başvurun: bacaklarda kalıcı **uyuşma veya güç kaybı**, **mesane veya bağırsak kontrolü** sorunları, **ciddi bir kaza** sonrası ağrı, açıklanamayan **kilo kaybı** veya sırt ağrısıyla birlikte **ateş**, ya da **geceleri istirahatte** kötüleşen ağrı. Bu işaretler tüm sırt ağrısı hastalarının %1'inden azını etkiler — ancak tıbbi değerlendirme gerektirir. Diğer tüm sırt ağrısı formları için Eupen'deki kliniğimizde size doğrudan yardımcı olabiliriz.",
          ar: "الغالبية العظمى من آلام الظهر غير ضارة. نادرًا، قد تشير إشارات تحذيرية إلى سبب أكثر خطورة. استشر طبيبًا بسرعة في حالة: **خدر أو فقدان قوة** مستمر في الساقين، مشاكل في **التحكم بالمثانة أو الأمعاء**، ألم بعد **حادث خطير**، **فقدان وزن غير مبرر** أو **حمى** مع آلام الظهر، أو ألم **يتفاقم ليلاً أثناء الراحة**. هذه الإشارات تصيب أقل من 1% من مرضى آلام الظهر — لكنها تتطلب تقييمًا طبيًا. لجميع أشكال آلام الظهر الأخرى، يمكننا مساعدتك مباشرة في Praxis Loten.",
          pl: "Zdecydowana większość bólów pleców jest nieszkodliwa. Rzadko sygnały ostrzegawcze mogą wskazywać na poważniejszą przyczynę. Szukaj pilnie pomocy lekarskiej przy: utrzymującym się **drętwieniu lub utracie siły** w nogach, problemach z **kontrolą pęcherza lub jelit**, bólu po **poważnym wypadku**, niewyjaśnionej **utracie wagi** lub **gorączce** w połączeniu z bólem pleców, lub bólu, który **nasila się w nocy w spoczynku**. Te sygnały dotyczą mniej niż 1% pacjentów z bólem pleców — ale wymagają oceny lekarskiej. W przypadku wszystkich innych form bólu pleców możemy pomóc bezpośrednio w Praxis Loten w Eupen.",
          "uk": "Переважна більшість випадків болю в спині — доброякісні. Зрідка певні тривожні ознаки можуть вказувати на серйознішу причину. Невідкладно зверніться до лікаря, якщо маєте: стійке **оніміння або втрату сили** в ногах, проблеми з **контролем сечового міхура чи кишківника**, біль після **серйозної травми**, **незрозумілу втрату ваги** або **гарячку** разом із болем у спині, чи біль, який **посилюється вночі у спокої**. Ці ознаки стосуються менш ніж 1 % пацієнтів із болем у спині — але потребують медичної оцінки. При всіх інших формах болю в спині ми можемо допомогти Вам безпосередньо в кабінеті Praxis Loten.",
          "es": "La gran mayoría de los dolores de espalda son benignos. En raras ocasiones, ciertas señales de alerta pueden indicar una causa más seria. Consulte rápidamente a un médico en caso de: **entumecimiento o pérdida de fuerza** persistentes en las piernas, problemas de **control de la vejiga o del intestino**, dolor tras un **accidente grave**, **pérdida de peso inexplicada** o **fiebre** asociada al dolor de espalda, o dolor que **empeora por la noche en reposo**. Estas señales afectan a menos del 1 % de los pacientes con dolor de espalda, pero requieren una valoración médica. Para todas las demás formas de dolor de espalda, podemos ayudarle directamente en Praxis Loten.",
          "ku": "Piraniya herî mezin a êşên pişte bêzirar in. Bi kêmî, hin nîşaneyên hişyariyê dikarin sedemeke cidîtir nîşan bidin. Di van rewşan de zû serdana bijîşkekî bikin: **sistbûn an windakirina hêzê** ya berdewam di lingan de, pirsgirêkên **kontrola mîzdank an rûviyan**, êş piştî **qezayeke giran**, **kêmbûna kîloyan bê sedemeke diyar** an **ta** bi êşa pişte re, an êşa ku **bi şev di bêhnvedanê de xirabtir dibe**. Ev nîşane kêmtirî 1 % ji nexweşên bi êşa pişte digirin — lê ew hewceyî nirxandina bijîşkî ne. Ji bo hemû cureyên din ên êşa pişte, em dikarin rasterast li kabîneya Praxis Loten alîkariya we bikin.",
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
          "uk": "У кабінеті Praxis Loten в Ойпені: наші 4 основи",
          "es": "En Praxis Loten, en Eupen: nuestros 4 pilares",
          "ku": "Li kabîneya Praxis Loten li Eupenê: 4 stûnên me",
        },
        body: {
          de: "**1. Gründliches Assessment** — Jede Behandlung beginnt mit einem ausführlichen Gespräch und einer funktionellen Untersuchung. Wir hören zu, analysieren und erklären.\n\n**2. Manuelle Therapie nach IFOMPT-Standards** — Gezielte Mobilisationen und Manipulationen auf unserem Manuthera 242 — präzise, sanft und individuell angepasst.\n\n**3. Aktives Übungsprogramm** — Sie erhalten personalisierte Heimübungen, die Sie Schritt für Schritt selbstständiger machen.\n\n**4. Aufklärung und Empowerment** — Wir erklären Ihnen verständlich, was in Ihrem Körper vorgeht. Denn wer versteht, hat weniger Angst — und wer weniger Angst hat, erholt sich schneller.",
          fr: "**1. Bilan approfondi** — Chaque séance commence par un entretien détaillé et un examen fonctionnel. Nous écoutons, analysons et expliquons.\n\n**2. Thérapie manuelle aux normes IFOMPT** — Mobilisations et manipulations ciblées sur notre Manuthera 242 — précises, douces et adaptées à chaque patient.\n\n**3. Programme d'exercices actifs** — Vous recevez des exercices personnalisés à domicile qui vous rendent progressivement plus autonome.\n\n**4. Éducation et empowerment** — Nous vous expliquons de manière compréhensible ce qui se passe dans votre corps. Car celui qui comprend a moins peur — et celui qui a moins peur se rétablit plus vite.",
          en: "**1. Thorough assessment** — Every session starts with a detailed conversation and functional examination. We listen, analyse and explain.\n\n**2. Manual therapy to IFOMPT standards** — Targeted mobilisations and manipulations on our Manuthera 242 — precise, gentle and individually adapted.\n\n**3. Active exercise programme** — You receive personalised home exercises that progressively make you more independent.\n\n**4. Education and empowerment** — We explain in understandable terms what's happening in your body. Because understanding reduces fear — and less fear means faster recovery.",
          nl: "**1. Grondig assessment** — Elke sessie begint met een uitgebreid gesprek en functioneel onderzoek. We luisteren, analyseren en leggen uit.\n\n**2. Manuele therapie volgens IFOMPT-normen** — Gerichte mobilisaties en manipulaties op onze Manuthera 242 — nauwkeurig, zacht en individueel aangepast.\n\n**3. Actief oefenprogramma** — U krijgt gepersonaliseerde thuisoefeningen die u stap voor stap zelfstandiger maken.\n\n**4. Voorlichting en empowerment** — We leggen begrijpelijk uit wat er in uw lichaam gebeurt. Want wie begrijpt, heeft minder angst — en wie minder angst heeft, herstelt sneller.",
          tr: "**1. Kapsamlı değerlendirme** — Her seans detaylı bir görüşme ve fonksiyonel muayene ile başlar. Dinliyoruz, analiz ediyoruz ve açıklıyoruz.\n\n**2. IFOMPT standartlarında manuel terapi** — Manuthera 242'mizde hedefli mobilizasyonlar ve manipülasyonlar — hassas, nazik ve bireysel olarak uyarlanmış.\n\n**3. Aktif egzersiz programı** — Sizi adım adım daha bağımsız hale getiren kişiselleştirilmiş ev egzersizleri alırsınız.\n\n**4. Eğitim ve güçlendirme** — Vücudunuzda neler olduğunu anlaşılır şekilde açıklıyoruz. Çünkü anlayan daha az korkar — ve daha az korkan daha hızlı iyileşir.",
          ar: "**1. تقييم شامل** — كل جلسة تبدأ بمحادثة مفصلة وفحص وظيفي. نستمع ونحلل ونشرح.\n\n**2. علاج يدوي وفق معايير IFOMPT** — تحريكات ومعالجات موجهة على طاولتنا Manuthera 242 — دقيقة ولطيفة ومكيفة فرديًا.\n\n**3. برنامج تمارين نشط** — تتلقى تمارين منزلية مخصصة تجعلك تدريجيًا أكثر استقلالية.\n\n**4. تثقيف وتمكين** — نشرح لك بشكل مفهوم ما يحدث في جسمك. لأن من يفهم يخاف أقل — ومن يخاف أقل يتعافى أسرع.",
          pl: "**1. Dokładna ocena** — Każda sesja zaczyna się od szczegółowej rozmowy i badania funkcjonalnego. Słuchamy, analizujemy i wyjaśniamy.\n\n**2. Terapia manualna według standardów IFOMPT** — Ukierunkowane mobilizacje i manipulacje na naszym stole Manuthera 242 — precyzyjne, delikatne i indywidualnie dostosowane.\n\n**3. Aktywny program ćwiczeń** — Otrzymujesz spersonalizowane ćwiczenia domowe, które krok po kroku czynią Cię bardziej samodzielnym.\n\n**4. Edukacja i wzmocnienie** — Wyjaśniamy zrozumiale, co dzieje się w Twoim ciele. Bo kto rozumie, mniej się boi — a kto mniej się boi, szybciej wraca do zdrowia.",
          "uk": "**1. Ретельна оцінка** — Кожен сеанс починається з детальної розмови та функціонального обстеження. Ми слухаємо, аналізуємо та пояснюємо.\n\n**2. Мануальна терапія за стандартами IFOMPT** — Цілеспрямовані мобілізації та маніпуляції на нашому столі Manuthera 242 — точні, м’які та адаптовані до кожного пацієнта.\n\n**3. Програма активних вправ** — Ви отримуєте індивідуальні вправи для дому, які поступово роблять Вас самостійнішими.\n\n**4. Навчання та розширення можливостей** — Ми зрозуміло пояснюємо Вам, що відбувається у Вашому тілі. Адже той, хто розуміє, боїться менше, — а той, хто боїться менше, одужує швидше.",
          "es": "**1. Valoración exhaustiva** — Cada sesión empieza con una entrevista detallada y una exploración funcional. Escuchamos, analizamos y explicamos.\n\n**2. Terapia manual según los estándares IFOMPT** — Movilizaciones y manipulaciones específicas en nuestra Manuthera 242: precisas, suaves y adaptadas a cada paciente.\n\n**3. Programa de ejercicios activos** — Recibe ejercicios personalizados para casa que le hacen cada vez más autónomo.\n\n**4. Educación y empoderamiento** — Le explicamos de forma comprensible lo que ocurre en su cuerpo. Porque quien comprende tiene menos miedo, y quien tiene menos miedo se recupera más rápido.",
          "ku": "**1. Nirxandineke kûr** — Her danişîn bi axaftineke berfireh û muayeneyeke fonksiyonel dest pê dike. Em guhdarî dikin, analîz dikin û rave dikin.\n\n**2. Terapiya destî li gorî standardên IFOMPT** — Mobîlîzasyon û manîpulasyonên armanckirî li ser Manuthera 242 ya me — rast, nerm û li gorî her nexweşî hatine eyarkirin.\n\n**3. Bernameya werzîşên çalak** — Hûn werzîşên kesane ji bo malê distînin ku we gav bi gav serbixwetir dikin.\n\n**4. Perwerde û xurtkirin** — Em bi awayekî fêmbar ji we re rave dikin ka di laşê we de çi diqewime. Ji ber ku yê ku fêm dike kêmtir ditirse — û yê ku kêmtir ditirse zûtir baş dibe.",
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
      "uk": [
        "Ваша спина міцна й здатна до адаптації — витриваліша, ніж Ви думаєте",
        "Мануальна терапія + рух + розуміння = найкращі результати",
        "Біль ≠ пошкодження: сон і стрес відіграють центральну роль",
        "Менш ніж 1 % випадків болю в спині мають серйозну причину",
        "Лікування за стандартами IFOMPT в Ойпені на Manuthera 242"
      ],
      "es": [
        "Su espalda es fuerte y adaptable: más robusta de lo que cree",
        "Terapia manual + movimiento + comprensión = mejores resultados",
        "Dolor ≠ daño: el sueño y el estrés desempeñan un papel central",
        "Menos del 1 % de los dolores de espalda tiene una causa grave",
        "Tratamiento certificado IFOMPT en Eupen en la Manuthera 242"
      ],
      "ku": [
        "Pişta we xurt û guncawbar e — ji ya ku hûn difikirin berxwedêrtir e",
        "Terapiya destî + tevger + têgihîştin = encamên herî baş",
        "Êş ≠ zirar: xew û stres roleke navendî dilîzin",
        "Kêmtirî 1 % ji êşên pişte xwedî sedemeke giran in",
        "Dermankirina bi sertîfîkaya IFOMPT li Eupenê li ser Manuthera 242"
      ],
    },
    ctaText: {
      de: "Rückenschmerzen? Vereinbaren Sie jetzt einen Termin bei Philippe Banaszak in Eupen.",
      fr: "Douleurs dorsales ? Prenez rendez-vous avec Philippe Banaszak à Eupen.",
      en: "Back pain? Book an appointment with Philippe Banaszak in Eupen.",
      nl: "Rugpijn? Boek nu een afspraak bij Philippe Banaszak in Eupen.",
      tr: "Sırt ağrısı mı? Eupen'de Philippe Banaszak ile randevu alın.",
      ar: "آلام الظهر؟ احجز موعدًا مع Philippe Banaszak في Eupen.",
      pl: "Ból pleców? Zarezerwuj wizytę u Philippe Banaszak w Eupen.",
      "uk": "Болить спина? Запишіться на прийом до Philippe Banaszak в Ойпені.",
      "es": "¿Dolor de espalda? Pida cita con Philippe Banaszak en Eupen.",
      "ku": "Êşa pişte? Li Eupenê bi Philippe Banaszak re randevûyekê bigirin.",
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
      "uk": "Ця стаття має суто інформаційний характер і в жодному разі не замінює консультації лікаря чи фізіотерапевта. Якщо симптоми не минають або є вираженими, зверніться до медичного фахівця.",
      "es": "Este artículo tiene una finalidad meramente informativa y en ningún caso sustituye una consulta médica o de fisioterapia. En caso de síntomas persistentes o intensos, consulte a un profesional sanitario.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye û qet şûna konsultasyoneke bijîşkî an fizyoterapiyê nagire. Di rewşa nîşaneyên berdewam an giran de, serdana pisporekî tenduristiyê bikin.",
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
      "uk": "Біг без травм в Ойпені — як себе вберегти",
      "es": "Correr sin lesiones en Eupen: cómo protegerse",
      "ku": "Bê birîndarî bezîn li Eupenê — hûn çawa xwe biparêzin",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "العلاج الطبيعي الرياضي", pl: "Fizjoterapia Sportowa",
      "uk": "Спортивна фізіотерапія",
      "es": "Fisioterapia deportiva",
      "ku": "Fizyoterapiya werzîşê",
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
      "uk": "Біг — один із найдоступніших і найкорисніших для здоров'я видів спорту у світі. Ваше тіло **створене для бігу** — сухожилля, м'язи та суглоби адаптуються до навантаження й стають сильнішими. Проте багато бігунів рано чи пізно відчувають біль. Добра новина: більшості травм можна запобігти. У нашій Running Clinic в Ойпені Thom Petit супроводжує бігунів будь-якого рівня, спираючись на доказовий підхід.",
      "es": "Correr es uno de los deportes más accesibles y saludables del mundo. Su cuerpo está **hecho para correr**: sus tendones, músculos y articulaciones se adaptan a la carga y se vuelven más fuertes. Aun así, muchos corredores sienten dolor en algún momento. La buena noticia: la mayoría de las lesiones se pueden prevenir. En nuestra Running Clinic de Eupen, Thom Petit acompaña a corredores de todos los niveles con un enfoque basado en la evidencia.",
      "ku": "Bezîn yek ji werzîşên herî gihîştbar û herî tendurist ên cîhanê ye. Laşê we **ji bo bezînê hatiye çêkirin** — tendon, masûlke û movikên we li gorî barê xwe diguncînin û bihêztir dibin. Lê dîsa jî gelek bezvan rojekê êşê dikişînin. Mizgîniya baş: piraniya birîndariyan dikarin werin pêşîlêgirtin. Li Running Clinic a me ya li Eupenê, Thom Petit bi nêzîkatiyeke li ser bingeha delîlan bezvanên her astê dişopîne.",
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
          "uk": "«Біг руйнує суглоби» — неправда",
          "es": "«Correr destroza las articulaciones»: falso",
          "ku": "“Bezîn movikan xera dike” — şaş e",
        },
        body: {
          de: "Eines der hartnäckigsten Mythen im Laufsport: « Laufen ist schlecht für die Knie ». Die Forschung zeigt das Gegenteil. Regelmäßige Läufer haben **kein erhöhtes Arthroserisiko** — im Gegenteil, moderate Belastung nährt den Knorpel und hält ihn gesund. Ihre Gelenke sind keine Maschinen, die sich abnutzen, sondern lebendige Strukturen, die sich an Belastung anpassen. Der häufigste Grund für Laufverletzungen ist nicht das Laufen selbst, sondern **plötzliche Belastungsspitzen** — wenn Sie zu viel, zu schnell, zu früh tun. Eine aktuelle Studie mit über 5.200 Läufern zeigt: ein einzelner Lauf, der 10 % länger als Ihr längster Lauf des Vormonats ist, erhöht das Verletzungsrisiko um 64 %.",
          fr: "L'un des mythes les plus tenaces de la course à pied : « courir détruit les genoux ». La recherche montre le contraire. Les coureurs réguliers n'ont **pas un risque accru d'arthrose** — au contraire, une charge modérée nourrit le cartilage et le maintient en bonne santé. Vos articulations ne sont pas des pièces mécaniques, mais des structures vivantes qui s'adaptent à la charge. La cause la plus fréquente de blessures n'est pas la course elle-même, mais les **pics de charge soudains** — quand vous en faites trop, trop vite, trop tôt. Une étude récente sur plus de 5 200 coureurs montre qu'un seul run dépassant de 10 % votre plus longue sortie du mois précédent augmente le risque de blessure de 64 %.",
          en: "One of the most persistent myths in running: \"running is bad for your knees\". Research shows the opposite. Regular runners have **no increased risk of osteoarthritis** — on the contrary, moderate loading nourishes cartilage and keeps it healthy. Your joints are not machines that wear out, but living structures that adapt to load. The most common reason for running injuries is not running itself, but **sudden load spikes** — when you do too much, too fast, too soon. A recent study of over 5,200 runners shows that a single run exceeding your longest run of the previous month by 10% increases injury risk by 64%.",
          nl: "Een van de hardnekkigste mythes in de loopsport: « lopen is slecht voor je knieën ». Onderzoek toont het tegendeel. Regelmatige lopers hebben **geen verhoogd risico op artrose** — integendeel, matige belasting voedt het kraakbeen en houdt het gezond. Uw gewrichten zijn geen machines die slijten, maar levende structuren die zich aanpassen aan belasting. De meest voorkomende oorzaak van loopblessures is niet het lopen zelf, maar **plotselinge belastingspieken** — wanneer u te veel, te snel, te vroeg doet. Een recente studie met meer dan 5.200 lopers toont: één enkele run die 10% langer is dan uw langste loop van de vorige maand verhoogt het blessurerisico met 64%.",
          tr: "Koşu sporundaki en inatçı mitlerden biri: « koşu dizleri mahveder ». Araştırma aksini gösteriyor. Düzenli koşucuların **artrit riski artmaz** — aksine, ılımlı yükleme kıkırdağı besler ve sağlıklı tutar. Eklemleriniz aşınan makineler değil, yüke adapte olan canlı yapılardır. Koşu yaralanmalarının en yaygın nedeni koşunun kendisi değil, **ani yük artışlarıdır** — çok fazla, çok hızlı, çok erken. 5.200'den fazla koşucuyu içeren güncel bir çalışma, önceki ayın en uzun koşunuzu %10 aşan tek bir koşunun yaralanma riskini %64 artırdığını göstermektedir.",
          ar: "من أكثر الخرافات عنادًا في رياضة الجري: «الجري يضر بالركبتين». البحث يظهر العكس. العداؤون المنتظمون ليس لديهم **خطر متزايد لالتهاب المفاصل** — بل العكس، الحمل المعتدل يغذي الغضروف ويحافظ على صحته. مفاصلك ليست آلات تبلى، بل هياكل حية تتكيف مع الحمل. السبب الأكثر شيوعًا لإصابات الجري ليس الجري نفسه، بل **القفزات المفاجئة في الحمل** — عندما تفعل الكثير، بسرعة كبيرة، مبكرًا جدًا. دراسة حديثة على أكثر من 5200 عداء تظهر أن جرية واحدة تتجاوز أطول جرية في الشهر السابق بنسبة 10% تزيد خطر الإصابة بنسبة 64%.",
          pl: "Jeden z najbardziej uporczywych mitów biegowych: «bieganie niszczy kolana». Badania pokazują coś odwrotnego. Regularni biegacze **nie mają zwiększonego ryzyka artrozy** — wręcz przeciwnie, umiarkowane obciążenie odżywia chrząstkę i utrzymuje ją w zdrowiu. Twoje stawy to nie maszyny, które się zużywają, ale żywe struktury adaptujące się do obciążeń. Najczęstszą przyczyną kontuzji biegowych nie jest samo bieganie, ale **nagłe skoki obciążenia** — gdy robisz za dużo, za szybko, za wcześnie. Najnowsze badanie na ponad 5200 biegaczach pokazuje, że pojedynczy bieg przekraczający o 10% najdłuższy bieg poprzedniego miesiąca zwiększa ryzyko kontuzji o 64%.",
          "uk": "Один із найстійкіших міфів про біг: «біг руйнує коліна». Дослідження показують протилежне. Люди, які регулярно бігають, **не мають підвищеного ризику артрозу** — навпаки, помірне навантаження живить хрящ і підтримує його здоров'я. Ваші суглоби — не механічні деталі, а живі структури, що адаптуються до навантаження. Найчастіша причина травм — не сам біг, а **раптові піки навантаження**: коли Ви робите забагато, зашвидко, зарано. Нещодавнє дослідження за участю понад 5 200 бігунів показує, що одна-єдина пробіжка, яка на 10 % довша за Вашу найдовшу пробіжку попереднього місяця, підвищує ризик травми на 64 %.",
          "es": "Uno de los mitos más persistentes del running: «correr destroza las rodillas». La investigación demuestra lo contrario. Los corredores habituales **no tienen un mayor riesgo de artrosis**; al contrario, una carga moderada nutre el cartílago y lo mantiene sano. Sus articulaciones no son piezas mecánicas, sino estructuras vivas que se adaptan a la carga. La causa más frecuente de lesiones no es correr en sí, sino los **picos de carga repentinos**: cuando hace demasiado, demasiado rápido, demasiado pronto. Un estudio reciente con más de 5200 corredores muestra que una sola salida que supere en un 10 % su salida más larga del mes anterior aumenta el riesgo de lesión en un 64 %.",
          "ku": "Yek ji efsaneyên herî domdar ên bezînê: “bezîn çokan xera dike”. Lêkolîn berevajiyê vê nîşan didin. Bezvanên birêkûpêk **xetereya wan a artrozê zêdetir nîn e** — berevajî, barekî navîn kirkirkê xwedî dike û wê saxlem dihêle. Movikên we ne parçeyên mekanîkî ne, lê avahiyên zindî ne ku li gorî barê xwe diguncînin. Sedema herî gelemper a birîndariyan ne bezîn bi xwe ye, lê **zêdebûnên ji nişka ve yên barê** ne — dema ku hûn pir zêde, pir bilez, pir zû dikin. Lêkolîneke nû li ser zêdetirî 5 200 bezvanan nîşan dide ku tenê bezînek ku 10 % ji bezîna we ya herî dirêj a meha borî derbas bike, xetereya birîndariyê 64 % zêde dike.",
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
          "uk": "Розумне керування навантаженням",
          "es": "La gestión inteligente de la carga",
          "ku": "Birêvebirina jîr a barê",
        },
        body: {
          de: "Die alte « 10%-Regel » (nie mehr als 10 % Wochenvolumen steigern) wird durch neue Daten nuanciert. Entscheidend ist nicht nur das Wochenvolumen, sondern vor allem: **vermeiden Sie plötzliche Spitzen in einzelnen Läufen**. Ihr Körper braucht Zeit, sich anzupassen. Sehnen und Knochen reagieren langsamer als Muskeln — sie brauchen 8 bis 12 Wochen, um sich einer neuen Belastung anzupassen. Praktisch bedeutet das: steigern Sie Dauer **oder** Intensität — nie beides gleichzeitig. Wechseln Sie leichte und intensive Tage ab. Und nach einer Pause (Urlaub, Krankheit): starten Sie bei 50 % Ihres vorherigen Niveaus. Geduld ist keine Schwäche — sie ist Ihr bester Schutzfaktor.",
          fr: "L'ancienne « règle des 10 % » (ne jamais augmenter le volume hebdomadaire de plus de 10 %) est nuancée par les données récentes. Ce qui compte n'est pas seulement le volume hebdomadaire, mais surtout : **évitez les pics soudains lors de sorties individuelles**. Votre corps a besoin de temps pour s'adapter. Les tendons et les os réagissent plus lentement que les muscles — ils nécessitent 8 à 12 semaines pour s'adapter à une nouvelle charge. En pratique : augmentez la durée **ou** l'intensité — jamais les deux en même temps. Alternez jours légers et jours intenses. Et après une pause (vacances, maladie) : reprenez à 50 % de votre niveau antérieur. La patience n'est pas une faiblesse — c'est votre meilleur facteur de protection.",
          en: "The old \"10% rule\" (never increase weekly volume by more than 10%) is being nuanced by new data. What matters is not just weekly volume, but above all: **avoid sudden spikes in individual runs**. Your body needs time to adapt. Tendons and bones respond more slowly than muscles — they need 8 to 12 weeks to adapt to new loads. In practice: increase duration **or** intensity — never both at once. Alternate light and hard days. And after a break (holiday, illness): restart at 50% of your previous level. Patience is not weakness — it's your best protective factor.",
          nl: "De oude « 10%-regel » (nooit meer dan 10% wekelijks volume verhogen) wordt genuanceerd door nieuwe data. Wat telt is niet alleen het wekelijks volume, maar vooral: **vermijd plotselinge pieken in individuele runs**. Uw lichaam heeft tijd nodig om zich aan te passen. Pezen en botten reageren langzamer dan spieren — ze hebben 8 tot 12 weken nodig om zich aan nieuwe belasting aan te passen. In de praktijk: verhoog duur **of** intensiteit — nooit beide tegelijk. Wissel lichte en zware dagen af. En na een pauze: herstart op 50% van uw vorige niveau. Geduld is geen zwakte — het is uw beste beschermende factor.",
          tr: "Eski «%10 kuralı» (haftalık hacmi hiçbir zaman %10'dan fazla artırmayın) yeni verilerle nüanslandırılmaktadır. Önemli olan sadece haftalık hacim değil, özellikle: **bireysel koşularda ani artışlardan kaçının**. Vücudunuzun adapte olması için zamana ihtiyacı var. Tendonlar ve kemikler kaslardan daha yavaş tepki verir — yeni yüklere adapte olmak için 8-12 haftaya ihtiyaç duyarlar. Pratikte: süreyi **veya** yoğunluğu artırın — ikisini aynı anda asla. Hafif ve yoğun günleri değiştirin. Bir aradan sonra: önceki seviyenizin %50'sinden başlayın. Sabır zayıflık değil — en iyi koruyucu faktörünüzdür.",
          ar: "«قاعدة 10%» القديمة (لا تزيد الحجم الأسبوعي بأكثر من 10%) يتم تدقيقها بالبيانات الحديثة. المهم ليس فقط الحجم الأسبوعي، بل بالأخص: **تجنب القفزات المفاجئة في الجريات الفردية**. جسمك يحتاج وقتًا للتكيف. الأوتار والعظام تستجيب أبطأ من العضلات — تحتاج 8 إلى 12 أسبوعًا للتكيف مع أحمال جديدة. عمليًا: زِد المدة **أو** الشدة — لا الاثنين معًا. بدّل بين أيام خفيفة وأيام مكثفة. وبعد استراحة: ابدأ بـ50% من مستواك السابق. الصبر ليس ضعفًا — إنه أفضل عامل حماية لك.",
          pl: "Stara «zasada 10%» (nigdy nie zwiększaj tygodniowego wolumenu o więcej niż 10%) jest udoskonalana przez nowe dane. Ważny jest nie tylko wolumen tygodniowy, ale przede wszystkim: **unikaj nagłych skoków w pojedynczych biegach**. Twoje ciało potrzebuje czasu na adaptację. Ścięgna i kości reagują wolniej niż mięśnie — potrzebują 8-12 tygodni na adaptację do nowych obciążeń. W praktyce: zwiększaj czas trwania **lub** intensywność — nigdy obu naraz. Zmieniaj dni lekkie i ciężkie. A po przerwie: zacznij od 50% poprzedniego poziomu. Cierpliwość to nie słabość — to Twój najlepszy czynnik ochronny.",
          "uk": "Давнє «правило 10 %» (ніколи не збільшувати тижневий обсяг більш ніж на 10 %) нові дані уточнюють. Важить не лише тижневий обсяг, а насамперед ось що: **уникайте раптових піків під час окремих пробіжок**. Вашому тілу потрібен час, щоб адаптуватися. Сухожилля та кістки реагують повільніше, ніж м'язи, — їм потрібно 8–12 тижнів, щоб пристосуватися до нового навантаження. На практиці: збільшуйте тривалість **або** інтенсивність — ніколи обидва одночасно. Чергуйте легкі та інтенсивні дні. А після перерви (відпустка, хвороба) відновлюйте тренування з 50 % від попереднього рівня. Терпіння — не слабкість, а Ваш найкращий захисний чинник.",
          "es": "La antigua «regla del 10 %» (no aumentar nunca el volumen semanal más de un 10 %) queda matizada por los datos recientes. Lo que cuenta no es solo el volumen semanal, sino sobre todo: **evite los picos repentinos en las salidas individuales**. Su cuerpo necesita tiempo para adaptarse. Los tendones y los huesos reaccionan más lentamente que los músculos: necesitan de 8 a 12 semanas para adaptarse a una nueva carga. En la práctica: aumente la duración **o** la intensidad, nunca ambas a la vez. Alterne días suaves y días intensos. Y después de una pausa (vacaciones, enfermedad): retome al 50 % de su nivel anterior. La paciencia no es una debilidad: es su mejor factor de protección.",
          "ku": "“Qaîdeya 10 %” ya kevn (qebareya heftane tu caran zêdetirî 10 % zêde nekin) ji hêla daneyên nû ve tê nermkirin. Ya girîng ne tenê qebareya heftane ye, lê berî her tiştî: **di bezînên yekane de ji zêdebûnên ji nişka ve dûr bisekinin**. Laşê we ji bo guncandinê wext hewce dike. Tendon û hestî ji masûlkan hêdîtir bertek nîşan didin — ji bo ku li barekî nû biguncînin 8 heta 12 hefte hewce dikin. Di pratîkê de: dirêjahiyê **an** jî tundiyê zêde bikin — tu caran herduyan bi hev re. Rojên sivik û rojên tund li dû hev biguherînin. Û piştî navberekê (betlane, nexweşî): ji 50 %ê asta xwe ya berê dest pê bikin. Sebir ne qelsî ye — ew faktora we ya parastinê ya herî baş e.",
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
          "uk": "Золоте правило нашої Running Clinic",
          "es": "La regla de oro de nuestra Running Clinic",
          "ku": "Qaîdeya zêrîn a Running Clinic a me",
        },
        body: {
          de: "> *« Ihr Körper verträgt fast alles — wenn Sie ihm die Zeit geben, sich anzupassen. »*\n\nDiese Philosophie leitet uns in der Running Clinic. Verletzungen entstehen selten durch « zu viel Laufen », sondern durch **zu schnelle Veränderungen**. Ihr Körper ist ein Meister der Anpassung: Knochen werden dichter, Sehnen widerstandsfähiger, Muskeln kräftiger — wenn die Belastung progressiv gesteigert wird. Das Ziel ist nicht weniger Laufen, sondern **klügeres** Laufen. Und das beginnt damit, auf die Signale Ihres Körpers zu hören: leichte Steifheit nach einem langen Lauf ist normal; Schmerz, der von Lauf zu Lauf schlimmer wird, ist ein Signal zum Anpassen — nicht zum Aufhören.",
          fr: "> *« Votre corps supporte presque tout — si vous lui donnez le temps de s'adapter. »*\n\nCette philosophie guide notre Running Clinic. Les blessures surviennent rarement à cause de « trop de course », mais à cause de **changements trop rapides**. Votre corps est un maître de l'adaptation : les os deviennent plus denses, les tendons plus résistants, les muscles plus forts — si la charge est augmentée progressivement. L'objectif n'est pas de courir moins, mais de courir **plus intelligemment**. Et cela commence par écouter les signaux de votre corps : une légère raideur après une longue sortie est normale ; une douleur qui s'aggrave de course en course est un signal pour s'adapter — pas pour s'arrêter.",
          en: "> *\"Your body can handle almost anything — if you give it time to adapt.\"*\n\nThis philosophy guides our Running Clinic. Injuries rarely happen because of \"too much running\", but because of **too-rapid changes**. Your body is a master of adaptation: bones become denser, tendons more resilient, muscles stronger — if load is increased progressively. The goal is not to run less, but to run **smarter**. And that starts with listening to your body's signals: mild stiffness after a long run is normal; pain that worsens from run to run is a signal to adapt — not to stop.",
          nl: "> *« Uw lichaam kan bijna alles aan — als u het de tijd geeft om zich aan te passen. »*\n\nDeze filosofie leidt onze Running Clinic. Blessures ontstaan zelden door « te veel lopen », maar door **te snelle veranderingen**. Uw lichaam is een meester in aanpassing: botten worden dichter, pezen veerkrachtiger, spieren sterker — als de belasting progressief wordt verhoogd. Het doel is niet minder lopen, maar **slimmer** lopen. En dat begint met luisteren naar de signalen van uw lichaam: lichte stijfheid na een lange loop is normaal; pijn die van loop tot loop verergert is een signaal om aan te passen — niet om te stoppen.",
          tr: "> *« Vücudunuz neredeyse her şeyi kaldırabilir — eğer ona adapte olması için zaman verirseniz. »*\n\nBu felsefe Running Clinic'imize yön verir. Yaralanmalar nadiren «çok fazla koşu» yüzünden, **çok hızlı değişiklikler** yüzünden olur. Vücudunuz bir adaptasyon ustasıdır: kemikler daha yoğun, tendonlar daha dirençli, kaslar daha güçlü olur — yük kademeli olarak artırılırsa. Amaç daha az koşmak değil, **daha akıllı** koşmaktır. Ve bu, vücudunuzun sinyallerini dinlemekle başlar.",
          ar: "> *«جسمك يتحمل كل شيء تقريبًا — إذا أعطيته الوقت للتكيف.»*\n\nهذه الفلسفة توجه عيادة الجري لدينا. الإصابات نادرًا ما تحدث بسبب «الجري الكثير»، بل بسبب **التغييرات السريعة جدًا**. جسمك سيد التكيف: العظام تصبح أكثر كثافة، الأوتار أكثر مرونة، العضلات أقوى — إذا زادت الأحمال تدريجيًا. الهدف ليس الجري أقل، بل الجري **بذكاء أكبر**. وهذا يبدأ بالاستماع لإشارات جسمك: التيبس الخفيف بعد جرية طويلة طبيعي؛ الألم الذي يسوء من جرية لأخرى إشارة للتكيف — لا للتوقف.",
          pl: "> *« Twoje ciało zniesie prawie wszystko — jeśli dasz mu czas na adaptację. »*\n\nTa filozofia kieruje naszą Running Clinic. Kontuzje rzadko powstają z powodu «zbyt dużo biegania», ale z powodu **zbyt szybkich zmian**. Twoje ciało jest mistrzem adaptacji: kości stają się gęstsze, ścięgna bardziej odporne, mięśnie silniejsze — jeśli obciążenie zwiększa się stopniowo. Celem nie jest bieganie mniej, ale bieganie **mądrzej**. A to zaczyna się od słuchania sygnałów ciała: lekka sztywność po długim biegu jest normalna; ból narastający z biegu na bieg to sygnał do dostosowania — nie do rezygnacji.",
          "uk": "> *«Ваше тіло витримує майже все — якщо дати йому час адаптуватися.»*\n\nЦя філософія лежить в основі нашої Running Clinic. Травми рідко виникають через «забагато бігу» — найчастіше через **надто швидкі зміни**. Ваше тіло — майстер адаптації: кістки стають щільнішими, сухожилля — міцнішими, м'язи — сильнішими, якщо навантаження зростає поступово. Мета не в тому, щоб бігати менше, а в тому, щоб бігати **розумніше**. І починається це з уваги до сигналів Вашого тіла: легка скутість після довгої пробіжки — це нормально; біль, що посилюється від пробіжки до пробіжки, — сигнал адаптувати навантаження, а не зупинятися.",
          "es": "> *«Su cuerpo lo soporta casi todo, si le da tiempo para adaptarse.»*\n\nEsta filosofía guía nuestra Running Clinic. Las lesiones rara vez se producen por «correr demasiado», sino por **cambios demasiado rápidos**. Su cuerpo es un maestro de la adaptación: los huesos se vuelven más densos, los tendones más resistentes, los músculos más fuertes, siempre que la carga aumente de forma progresiva. El objetivo no es correr menos, sino correr **de forma más inteligente**. Y eso empieza por escuchar las señales de su cuerpo: una ligera rigidez después de una salida larga es normal; un dolor que empeora de una carrera a otra es una señal para adaptar, no para parar.",
          "ku": "> *“Laşê we hema hema her tiştî radigire — heke hûn wext bidin wî ku biguncîne.”*\n\nEv felsefe rêberiya Running Clinic a me dike. Birîndarî kêm caran ji ber “bezîna pir zêde” çêdibin, lê ji ber **guhertinên pir bilez**. Laşê we hosteyê guncandinê ye: hestî qelewtir dibin, tendon berxwedêrtir, masûlke bihêztir — heke bar hêdî hêdî were zêdekirin. Armanc ne kêmtir bezîn e, lê **jîrtir** bezîn e. Û ev bi guhdarîkirina îşaretên laşê we dest pê dike: hişkbûneke sivik piştî bezîneke dirêj normal e; êşeke ku ji bezînekê heta bezîna din girantir dibe îşaretek e ji bo guncandinê — ne ji bo rawestandinê.",
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
          "uk": "3 звички для бігу без травм",
          "es": "3 hábitos para correr sin lesiones",
          "ku": "3 adet ji bo bezîna bê birîndarî",
        },
        body: {
          de: "**1. Renforcement musculaire** — Hüftabduktoren, Waden und ischiocrurale Muskulatur 2× pro Woche gezielt kräftigen. Das reduziert nachweislich das Verletzungsrisiko bei Läufern und verbessert die Laufökonomie.\n\n**2. Schlaf und Erholung** — Mindestens 7–8 Stunden Schlaf und 1–2 Ruhetage pro Woche sind nicht optional — sie sind Teil Ihres Trainings. Während der Ruhe adaptiert sich Ihr Gewebe.\n\n**3. Professionelle Laufanalyse** — Kadenz, Schrittlänge, Fußaufsatz: kleine technische Anpassungen können große Wirkung haben. In unserer Running Clinic in Eupen analysieren wir Ihren individuellen Laufstil und geben Ihnen konkrete Tipps.",
          fr: "**1. Renforcement musculaire** — Renforcez abducteurs de hanche, mollets et ischio-jambiers 2× par semaine. Cela réduit de manière prouvée le risque de blessure chez les coureurs et améliore l'économie de course.\n\n**2. Sommeil et récupération** — Minimum 7–8 heures de sommeil et 1–2 jours de repos par semaine ne sont pas optionnels — ils font partie de votre entraînement. C'est au repos que vos tissus s'adaptent.\n\n**3. Analyse de course professionnelle** — Cadence, longueur de foulée, attaque du pied : de petits ajustements techniques peuvent avoir un grand impact. Dans notre Running Clinic à Eupen, nous analysons votre style de course et vous donnons des conseils concrets.",
          en: "**1. Strength training** — Strengthen hip abductors, calves and hamstrings 2× per week. This is proven to reduce injury risk in runners and improves running economy.\n\n**2. Sleep and recovery** — Minimum 7–8 hours of sleep and 1–2 rest days per week are not optional — they are part of your training. Tissue adaptation happens during rest.\n\n**3. Professional gait analysis** — Cadence, stride length, foot strike: small technical adjustments can have a big impact. At our Running Clinic in Eupen, we analyse your individual running style and give you concrete tips.",
          nl: "**1. Krachttraining** — Versterk heupabductoren, kuiten en hamstrings 2× per week. Dit vermindert aantoonbaar het blessurerisico bij lopers en verbetert de loopeconomie.\n\n**2. Slaap en herstel** — Minimaal 7–8 uur slaap en 1–2 rustdagen per week zijn niet optioneel — ze maken deel uit van uw training. Weefselaanpassing gebeurt tijdens rust.\n\n**3. Professionele loopanalyse** — Cadans, paslengte, voetlanding: kleine technische aanpassingen kunnen een groot effect hebben. In onze Running Clinic in Eupen analyseren we uw individuele loopstijl en geven concrete tips.",
          tr: "**1. Güç antrenmanı** — Kalça abduktörlerini, baldırları ve hamstringleri haftada 2× güçlendirin. Bu, koşucularda yaralanma riskini kanıtlanmış şekilde azaltır ve koşu ekonomisini iyileştirir.\n\n**2. Uyku ve toparlanma** — Minimum 7–8 saat uyku ve haftada 1–2 dinlenme günü isteğe bağlı değildir — antrenmanınızın parçasıdır. Doku adaptasyonu dinlenme sırasında gerçekleşir.\n\n**3. Profesyonel koşu analizi** — Kadans, adım uzunluğu, ayak vuruşu: küçük teknik ayarlamalar büyük etki yaratabilir. Eupen'deki Running Clinic'imizde bireysel koşu stilinizi analiz eder ve somut ipuçları veririz.",
          ar: "**1. تدريب القوة** — قوّ مبعدات الورك والساق وأوتار الركبة مرتين أسبوعيًا. هذا يقلل بشكل مثبت خطر الإصابة عند العدائين ويحسن اقتصاد الجري.\n\n**2. النوم والتعافي** — 7-8 ساعات نوم كحد أدنى و1-2 يوم راحة أسبوعيًا ليست اختيارية — إنها جزء من تدريبك. تكيف الأنسجة يحدث أثناء الراحة.\n\n**3. تحليل جري مهني** — الإيقاع، طول الخطوة، ملامسة القدم: تعديلات تقنية صغيرة يمكن أن يكون لها تأثير كبير. في عيادة الجري في Eupen، نحلل أسلوب جريك ونقدم نصائح عملية.",
          pl: "**1. Trening siłowy** — Wzmacniaj odwodziciele bioder, łydki i mięśnie dwugłowe uda 2× w tygodniu. To udowodniono, że zmniejsza ryzyko kontuzji u biegaczy i poprawia ekonomię biegu.\n\n**2. Sen i regeneracja** — Minimum 7–8 godzin snu i 1–2 dni odpoczynku w tygodniu nie są opcjonalne — są częścią Twojego treningu. Adaptacja tkanek zachodzi podczas odpoczynku.\n\n**3. Profesjonalna analiza chodu** — Kadencja, długość kroku, sposób stawiania stopy: małe techniczne korekty mogą mieć duży wpływ. W naszej Running Clinic w Eupen analizujemy Twój indywidualny styl biegu i dajemy konkretne wskazówki.",
          "uk": "**1. Зміцнення м'язів** — Зміцнюйте відвідні м'язи стегна, литкові м'язи та задню групу м'язів стегна 2× на тиждень. Доведено, що це знижує ризик травм у бігунів і покращує економічність бігу.\n\n**2. Сон і відновлення** — Щонайменше 7–8 годин сну та 1–2 дні відпочинку на тиждень — не опція, а частина Вашого тренування. Саме під час відпочинку Ваші тканини адаптуються.\n\n**3. Професійний аналіз бігу** — Каденс, довжина кроку, постановка стопи: невеликі технічні корективи можуть дати великий ефект. У нашій Running Clinic в Ойпені ми аналізуємо Вашу техніку бігу й даємо конкретні поради.",
          "es": "**1. Fortalecimiento muscular** — Fortalezca los abductores de cadera, los gemelos y los isquiotibiales 2 veces por semana. Está demostrado que reduce el riesgo de lesión en los corredores y mejora la economía de carrera.\n\n**2. Sueño y recuperación** — Un mínimo de 7–8 horas de sueño y 1–2 días de descanso por semana no son opcionales: forman parte de su entrenamiento. Es durante el descanso cuando sus tejidos se adaptan.\n\n**3. Análisis profesional de la carrera** — Cadencia, longitud de zancada, apoyo del pie: pequeños ajustes técnicos pueden tener un gran impacto. En nuestra Running Clinic de Eupen analizamos su forma de correr y le damos consejos concretos.",
          "ku": "**1. Xurtkirina masûlkeyan** — Abduktorên kalçê, masûlkeyên pozê lingê û masûlkeyên paşiya ranê hefteyê 2× xurt bikin. Ev bi awayekî îspatkirî xetereya birîndariyê li ba bezvanan kêm dike û aboriya bezînê baştir dike.\n\n**2. Xew û başbûn** — Herî kêm 7–8 saet xew û hefteyê 1–2 rojên bêhnvedanê ne vebijarkî ne — ew beşek ji perwerdeya we ne. Di dema bêhnvedanê de ye ku tevnên we diguncînin.\n\n**3. Analîza profesyonel a bezînê** — Kadens, dirêjahiya gavê, danîna lingê: guhertinên teknîkî yên biçûk dikarin bandoreke mezin bikin. Li Running Clinic a me ya li Eupenê, em şêwaza bezîna we analîz dikin û şîretên berbiçav didin we.",
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
          "uk": "Коли звернутися до фахівця?",
          "es": "¿Cuándo consultar a un especialista?",
          "ku": "Kengê divê hûn serî li pisporekî bidin?",
        },
        body: {
          de: "Die meisten Laufbeschwerden sind vorübergehend und klingen mit Anpassung der Belastung ab. Suchen Sie jedoch professionelle Hilfe wenn: der **Schmerz seit mehr als 2 Wochen** besteht und sich nicht bessert, der Schmerz **während des Laufens zunimmt** (nicht nur danach), Sie eine **Schwellung oder Morgensteifigkeit** bemerken, die nicht nachlässt, oder wenn Sie Ihren **Laufstil verändert** haben, um den Schmerz zu kompensieren. Früh handeln bedeutet schneller zurückkehren. In der Praxis Loten in Eupen analysiert Thom Petit Ihren Laufstil, identifiziert die Ursache und erstellt mit Ihnen einen Plan für die Rückkehr zum schmerzfreien Laufen.",
          fr: "La plupart des douleurs liées à la course sont temporaires et s'atténuent avec l'adaptation de la charge. Consultez cependant un professionnel si : la **douleur persiste depuis plus de 2 semaines** sans amélioration, la douleur **augmente pendant la course** (pas seulement après), vous remarquez un **gonflement ou une raideur matinale** persistante, ou si vous avez **modifié votre foulée** pour compenser la douleur. Agir tôt, c'est revenir plus vite. Au cabinet Praxis Loten à Eupen, Thom Petit analyse votre foulée, identifie la cause et établit avec vous un plan de retour à la course sans douleur.",
          en: "Most running-related complaints are temporary and resolve with load adjustment. However, seek professional help if: **pain persists for more than 2 weeks** without improvement, pain **increases during running** (not just after), you notice **swelling or morning stiffness** that doesn't subside, or if you've **changed your running form** to compensate for pain. Acting early means returning sooner. At Praxis Loten in Eupen, Thom Petit analyses your gait, identifies the cause and creates a plan with you for pain-free return to running.",
          nl: "De meeste loopklachten zijn tijdelijk en verminderen met aanpassing van de belasting. Zoek echter professionele hulp als: de **pijn langer dan 2 weken** aanhoudt zonder verbetering, de pijn **toeneemt tijdens het lopen** (niet alleen erna), u **zwelling of ochtendstijfheid** opmerkt die niet afneemt, of als u uw **loopstijl hebt aangepast** om de pijn te compenseren. Vroeg handelen betekent sneller terugkeren. Bij Praxis Loten in Eupen analyseert Thom Petit uw loopstijl en maakt een plan voor pijnvrij terugkeren.",
          tr: "Koşuyla ilgili şikayetlerin çoğu geçicidir ve yük ayarlamasıyla düzelir. Ancak şu durumlarda profesyonel yardım arayın: **ağrı 2 haftadan fazla** iyileşmeden devam ediyorsa, ağrı **koşu sırasında artıyorsa** (sadece sonra değil), azalmayan **şişlik veya sabah sertliği** fark ediyorsanız, veya ağrıyı telafi etmek için **koşu formunuzu değiştirdiyseniz**. Erken davranmak daha hızlı dönmek demektir. Eupen'de Praxis Loten'de Thom Petit koşu stilinizi analiz eder ve ağrısız koşuya dönüş planı oluşturur.",
          ar: "معظم آلام الجري مؤقتة وتتحسن مع تعديل الحمل. لكن اطلب المساعدة المهنية إذا: **استمر الألم أكثر من أسبوعين** دون تحسن، الألم **يزداد أثناء الجري** (ليس فقط بعده)، لاحظت **تورمًا أو تيبسًا صباحيًا** لا يزول، أو إذا **غيرت أسلوب جريك** لتعويض الألم. التصرف مبكرًا يعني العودة أسرع. في Praxis Loten في Eupen، يحلل ثوم بيتي أسلوب جريك ويضع خطة للعودة بدون ألم.",
          pl: "Większość dolegliwości biegowych jest tymczasowa i ustępuje z dostosowaniem obciążeń. Szukaj jednak profesjonalnej pomocy jeśli: **ból utrzymuje się ponad 2 tygodnie** bez poprawy, ból **narasta podczas biegu** (nie tylko po), zauważasz **obrzęk lub poranną sztywność** która nie ustępuje, lub **zmieniłeś technikę biegu** by kompensować ból. Działanie wcześnie to szybszy powrót. W Praxis Loten w Eupen, Thom Petit analizuje Twój styl biegu i tworzy plan powrotu do biegania bez bólu.",
          "uk": "Більшість болів, пов'язаних із бігом, тимчасові й зменшуються, коли навантаження адаптують. Проте зверніться до фахівця, якщо: **біль триває понад 2 тижні** без покращення, біль **посилюється під час бігу** (а не лише після), Ви помічаєте стійкий **набряк або ранкову скутість**, або якщо Ви **змінили свій крок**, щоб компенсувати біль. Діяти рано — означає швидше повернутися. У кабінеті Praxis Loten в Ойпені Thom Petit аналізує Ваш крок, з'ясовує причину і разом із Вами складає план повернення до бігу без болю.",
          "es": "La mayoría de los dolores relacionados con la carrera son temporales y disminuyen al adaptar la carga. No obstante, consulte a un profesional si: el **dolor persiste más de 2 semanas** sin mejoría, el dolor **aumenta durante la carrera** (no solo después), nota una **hinchazón o una rigidez matutina** persistentes, o si ha **modificado su zancada** para compensar el dolor. Actuar pronto es volver antes. En la consulta Praxis Loten de Eupen, Thom Petit analiza su zancada, identifica la causa y elabora con usted un plan de vuelta a la carrera sin dolor.",
          "ku": "Piraniya êşên girêdayî bezînê demkî ne û bi guncandina barê kêm dibin. Lê dîsa jî serî li pisporekî bidin heke: **êş zêdetirî 2 hefteyan berdewam dike** û baştir nabe, êş **di dema bezînê de zêde dibe** (ne tenê piştî wê), hûn **werimîn an hişkbûna sibehê** ya domdar dibînin, an jî heke we ji bo telafîkirina êşê **gava xwe guhertiye**. Zû tevgerîn, zû vegerîn e. Li kabîneya Praxis Loten a li Eupenê, Thom Petit gava we analîz dike, sedemê dibîne û bi we re planeke vegera bezîna bê êş amade dike.",
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
          "uk": "У кабінеті Praxis Loten в Ойпені: наша Running Clinic",
          "es": "En la consulta Praxis Loten de Eupen: nuestra Running Clinic",
          "ku": "Li kabîneya Praxis Loten a li Eupenê: Running Clinic a me",
        },
        body: {
          de: "**1. Videogestützte Laufanalyse** — Wir filmen Ihren Laufstil auf dem Laufband und analysieren Kadenz, Fußaufsatz, Knieachse und Beckenrotation in Echtzeit.\n\n**2. Individueller Trainingsplan** — Basierend auf Ihrer Analyse erhalten Sie einen progressiven Belastungsplan, der Ihre Ziele respektiert und Verletzungen vorbeugt.\n\n**3. Gezieltes Kräftigungsprogramm** — Spezifische Übungen für die läufertypischen Schwachstellen: Hüfte, Waden, Rumpfstabilität — mit BFR-Training (Blutflussrestriktionstraining) als Option bei Sehnenproblemen.\n\n**4. Beratung zu Schuhen und Ausrüstung** — Keine pauschale Empfehlung, sondern individuelle Beratung auf Basis Ihrer Fußform, Ihres Laufstils und Ihrer Ziele.",
          fr: "**1. Analyse de course vidéo** — Nous filmons votre foulée sur tapis roulant et analysons cadence, attaque du pied, axe du genou et rotation du bassin en temps réel.\n\n**2. Plan d'entraînement individuel** — Sur base de votre analyse, vous recevez un plan de charge progressif qui respecte vos objectifs et prévient les blessures.\n\n**3. Programme de renforcement ciblé** — Exercices spécifiques pour les faiblesses typiques du coureur : hanche, mollets, stabilité du tronc — avec l'entraînement BFR (restriction du flux sanguin) comme option pour les problèmes tendineux.\n\n**4. Conseil en chaussures et équipement** — Pas de recommandation générique, mais un conseil individuel basé sur votre morphologie, votre foulée et vos objectifs.",
          en: "**1. Video-based gait analysis** — We film your running style on the treadmill and analyse cadence, foot strike, knee alignment and pelvic rotation in real time.\n\n**2. Individual training plan** — Based on your analysis, you receive a progressive loading plan that respects your goals and prevents injuries.\n\n**3. Targeted strengthening programme** — Specific exercises for typical runner weaknesses: hips, calves, core stability — with BFR training (blood flow restriction) as an option for tendon issues.\n\n**4. Footwear and equipment advice** — No generic recommendations, but individual advice based on your foot shape, running style and goals.",
          nl: "**1. Videogestuurde loopanalyse** — We filmen uw loopstijl op de loopband en analyseren cadans, voetlanding, knie-as en bekkenrotatie in real time.\n\n**2. Individueel trainingsplan** — Op basis van uw analyse krijgt u een progressief belastingsplan dat uw doelen respecteert en blessures voorkomt.\n\n**3. Gericht versterkingsprogramma** — Specifieke oefeningen voor typische loperzwaktes: heup, kuiten, rompstabiliteit — met BFR-training als optie bij peesproblemen.\n\n**4. Schoen- en uitrustingsadvies** — Geen generieke aanbeveling, maar individueel advies op basis van uw voettype, loopstijl en doelen.",
          tr: "**1. Video destekli koşu analizi** — Koşu bandında koşu stilinizi filme alır ve kadans, ayak vuruşu, diz hizası ve pelvis rotasyonunu gerçek zamanlı analiz ederiz.\n\n**2. Bireysel antrenman planı** — Analizinize dayanarak, hedeflerinize saygı duyan ve yaralanmaları önleyen kademeli bir yükleme planı alırsınız.\n\n**3. Hedefli güçlendirme programı** — Tipik koşucu zayıflıkları için spesifik egzersizler: kalça, baldırlar, gövde stabilitesi — tendon sorunları için BFR antrenmanı seçeneğiyle.\n\n**4. Ayakkabı ve ekipman danışmanlığı** — Genel tavsiye değil, ayak şeklinize, koşu stilinize ve hedeflerinize dayalı bireysel danışmanlık.",
          ar: "**1. تحليل جري بالفيديو** — نصور أسلوب جريك على جهاز المشي ونحلل الإيقاع وملامسة القدم ومحور الركبة ودوران الحوض في الوقت الفعلي.\n\n**2. خطة تدريب فردية** — بناءً على تحليلك، تتلقى خطة حمل تدريجية تحترم أهدافك وتمنع الإصابات.\n\n**3. برنامج تقوية مستهدف** — تمارين محددة لنقاط الضعف النموذجية للعداء: الورك، الساق، استقرار الجذع — مع تدريب BFR كخيار لمشاكل الأوتار.\n\n**4. نصائح الأحذية والمعدات** — ليس توصية عامة، بل نصيحة فردية بناءً على شكل قدمك وأسلوب جريك وأهدافك.",
          pl: "**1. Analiza biegu wideo** — Filmujemy Twój styl biegu na bieżni i analizujemy kadencję, kontakt stopy, oś kolana i rotację miednicy w czasie rzeczywistym.\n\n**2. Indywidualny plan treningowy** — Na podstawie analizy otrzymujesz progresywny plan obciążeń respektujący Twoje cele i zapobiegający kontuzjom.\n\n**3. Ukierunkowany program wzmacniający** — Specyficzne ćwiczenia dla typowych słabości biegacza: biodra, łydki, stabilność tułowia — z treningiem BFR jako opcją przy problemach ze ścięgnami.\n\n**4. Doradztwo ws. obuwia i sprzętu** — Nie ogólne zalecenie, lecz indywidualna porada oparta na kształcie stopy, stylu biegu i celach.",
          "uk": "**1. Відеоаналіз бігу** — Ми знімаємо Ваш біг на біговій доріжці й у реальному часі аналізуємо каденс, постановку стопи, вісь коліна та ротацію таза.\n\n**2. Індивідуальний план тренувань** — На основі аналізу Ви отримуєте план поступового збільшення навантаження, який враховує Ваші цілі та запобігає травмам.\n\n**3. Цільова програма зміцнення** — Спеціальні вправи для типових слабких місць бігуна: стегно, литки, стабільність тулуба — з тренуванням BFR (обмеження кровотоку) як варіантом при проблемах із сухожиллями.\n\n**4. Порада щодо взуття та спорядження** — Не загальні рекомендації, а індивідуальна порада з урахуванням Вашої статури, кроку та цілей.",
          "es": "**1. Análisis de carrera en vídeo** — Grabamos su zancada en cinta de correr y analizamos en tiempo real la cadencia, el apoyo del pie, el eje de la rodilla y la rotación de la pelvis.\n\n**2. Plan de entrenamiento individual** — A partir de su análisis, recibe un plan de carga progresivo que respeta sus objetivos y previene las lesiones.\n\n**3. Programa de fortalecimiento específico** — Ejercicios concretos para las debilidades típicas del corredor: cadera, gemelos, estabilidad del tronco, con el entrenamiento BFR (restricción del flujo sanguíneo) como opción para los problemas de tendones.\n\n**4. Asesoramiento sobre calzado y equipamiento** — Ninguna recomendación genérica, sino un consejo individual basado en su morfología, su zancada y sus objetivos.",
          "ku": "**1. Analîza bezînê ya bi vîdyoyê** — Em gava we li ser bandê bezînê dikişînin û di dema rast de kadens, danîna lingê, axa çokê û zivirîna kemaxê analîz dikin.\n\n**2. Plana perwerdeyê ya kesane** — Li ser bingeha analîza we, hûn planeke barê ya gav bi gav distînin ku armancên we li ber çav digire û pêşî li birîndariyan digire.\n\n**3. Bernameya xurtkirinê ya armanckirî** — Tetbîqatên taybet ji bo qelsiyên tîpîk ên bezvanan: kalçe, pozê lingê, îstîqrara qurmê laş — bi perwerdeya BFR (sînordarkirina herikîna xwînê) wekî vebijarkek ji bo pirsgirêkên tendonan.\n\n**4. Şîreta li ser pêlav û alavan** — Ne pêşniyareke giştî, lê şîreteke kesane li gorî morfolojiya we, gava we û armancên we.",
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
      "uk": [
        "Біг зміцнює Ваші суглоби — а не зношує їх",
        "Головний чинник ризику — раптові піки навантаження, а не сам біг",
        "Зміцнення 2×/тиждень захищає сухожилля та суглоби",
        "Сон і відновлення — частина тренування",
        "Відеоаналіз бігу в Ойпені в Praxis Loten"
      ],
      "es": [
        "Correr fortalece sus articulaciones, no las desgasta",
        "Los picos de carga repentinos son el principal factor de riesgo, no correr",
        "Fortalecimiento 2 veces/semana protege tendones y articulaciones",
        "El sueño y la recuperación forman parte del entrenamiento",
        "Análisis de carrera en vídeo en Eupen, en Praxis Loten"
      ],
      "ku": [
        "Bezîn movikên we xurt dike — wan naxwe",
        "Zêdebûnên ji nişka ve yên barê faktora sereke ya xetereyê ne, ne bezîn",
        "Xurtkirin hefteyê 2× tendon û movikan diparêze",
        "Xew û başbûn beşek ji perwerdeyê ne",
        "Analîza bezînê ya bi vîdyoyê li Eupenê li Praxis Loten"
      ],
    },
    ctaText: {
      de: "Laufbeschwerden oder Laufziel? Vereinbaren Sie eine Analyse bei Thom Petit in Eupen.",
      fr: "Douleurs de course ou objectif sportif ? Prenez rendez-vous avec Thom Petit à Eupen.",
      en: "Running complaints or running goal? Book an analysis with Thom Petit in Eupen.",
      nl: "Loopklachten of loopdoel? Maak een afspraak bij Thom Petit in Eupen.",
      tr: "Koşu şikayetleri veya hedefi mi? Eupen'de Thom Petit ile analiz randevusu alın.",
      ar: "شكاوى جري أو هدف رياضي؟ احجز تحليلاً مع ثوم بيتي في Eupen.",
      pl: "Dolegliwości biegowe lub cel sportowy? Zarezerwuj analizę u Thom Petit w Eupen.",
      "uk": "Біль під час бігу чи спортивна мета? Запишіться на прийом до Thom Petit в Ойпені.",
      "es": "¿Dolor al correr u objetivo deportivo? Pida cita con Thom Petit en Eupen.",
      "ku": "Êşa bezînê an armanceke werzîşî? Bi Thom Petit re li Eupenê randevû bigirin.",
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
      "uk": "Ця стаття має виключно інформаційний характер і в жодному разі не замінює консультацію лікаря чи фізіотерапевта. Якщо симптоми тривалі або виражені, зверніться до медичного фахівця.",
      "es": "Este artículo tiene una finalidad exclusivamente informativa y en ningún caso sustituye una consulta médica o de fisioterapia. En caso de síntomas persistentes o graves, consulte a un profesional de la salud.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye û bi tu awayî şûna şêwirdariyeke bijîjkî an fizyoterapiyê nagire. Di rewşa nîşaneyên domdar an giran de, serî li pisporekî tenduristiyê bidin.",
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
      "uk": "Лімфодренаж в Ойпені — кому і коли?",
      "es": "Drenaje linfático en Eupen: ¿para quién y cuándo?",
      "ku": "Drenaja lîmfatîk li Eupenê — ji bo kê û kengê?",
    },
    category: {
      de: "Lymphdrainage", fr: "Drainage Lymphatique", en: "Lymphatic Drainage",
      nl: "Lymfedrainage", tr: "Lenf Drenajı", ar: "الصرف اللمفاوي", pl: "Drenaż Limfatyczny",
      "uk": "Лімфодренаж",
      "es": "Drenaje linfático",
      "ku": "Drenaja lîmfatîk",
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
      "uk": "Набряки та відчуття важкості в кінцівках можуть суттєво впливати на повсякденне життя. Мануальний лімфодренаж за методом Leduc — це **спеціалізоване медичне лікування**, яке виходить далеко за межі звичайного масажу. Він цілеспрямовано активує лімфатичну систему й допомагає вашому організму виводити надлишок рідини. У нашому кабінеті в Ойпені Fabienne Dormann уже багато років супроводжує пацієнтів із набряками та лімфедемою — з індивідуальним підходом, що ґрунтується на доказах.",
      "es": "La hinchazón y la sensación de pesadez en las extremidades pueden afectar mucho al día a día. El drenaje linfático manual según el método Leduc es un **tratamiento médico especializado** que va mucho más allá de un simple masaje. Activa de forma específica el sistema linfático y ayuda a su cuerpo a eliminar el exceso de líquido. En nuestra consulta de Eupen, Fabienne Dormann acompaña desde hace años a pacientes con edemas y linfedemas, con un enfoque individual y basado en la evidencia.",
      "ku": "Werimîn û hesta girîbûnê di dest û lingan de dikarin bandoreke mezin li jiyana rojane bikin. Drenaja lîmfatîk a destî li gorî rêbaza Leduc **dermankirineke bijîşkî ya pispor** e, ku ji masajeke sade gelek wêdetir diçe. Ew pergala lîmfatîk bi awayekî armancdar çalak dike û alîkariya laşê we dike ku şileya zêde derxîne. Li klînîka me ya li Eupenê, Fabienne Dormann bi salan e ku nexweşên bi werim û lîmfodemê re dimeşe — bi nêzîkatiyeke kesane û li ser bingeha delîlan.",
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
          "uk": "«Дренаж — це просто масаж» — неправда",
          "es": "«El drenaje es solo un masaje»: falso",
          "ku": "«Drenaj tenê masaj e» — şaş e",
        },
        body: {
          de: "Ein häufiges Missverständnis: die manuelle Lymphdrainage (MLD) wäre eine einfache Entspannungsmassage. In Wirklichkeit ist sie eine **präzise medizinische Technik** mit spezifischem Druck, Rhythmus und Richtung — entwickelt, um das Lymphsystem physiologisch zu aktivieren. Die Griffe sind sanft (unter 40 mmHg Druck), aber ihre Wirkung ist messbar: Reduktion von Schwellung, Schmerzlinderung und Verbesserung der Gewebemobilität. Der Beweis: Studien zeigen eine signifikante Schmerzreduktion und eine verbesserte Lebensqualität bei Patienten mit Lymphödem nach Brustkrebsbehandlung. Die MLD nach Leduc — die Methode, die wir in Eupen anwenden — folgt dem natürlichen anatomischen Verlauf der Lymphbahnen.",
          fr: "Un malentendu fréquent : le drainage lymphatique manuel (DLM) serait un simple massage relaxant. En réalité, c'est une **technique médicale précise** avec une pression, un rythme et une direction spécifiques — conçue pour activer physiologiquement le système lymphatique. Les manœuvres sont douces (moins de 40 mmHg de pression), mais leur effet est mesurable : réduction du gonflement, soulagement de la douleur et amélioration de la mobilité tissulaire. La preuve : les études montrent une réduction significative de la douleur et une meilleure qualité de vie chez les patients avec lymphœdème après cancer du sein. Le DLM selon Leduc — la méthode que nous utilisons à Eupen — suit le trajet anatomique naturel des voies lymphatiques.",
          en: "A common misconception: manual lymphatic drainage (MLD) is just a relaxation massage. In reality, it is a **precise medical technique** with specific pressure, rhythm and direction — designed to physiologically activate the lymphatic system. The manoeuvres are gentle (under 40 mmHg pressure), but their effect is measurable: reduction of swelling, pain relief and improvement of tissue mobility. The evidence: studies show significant pain reduction and improved quality of life in patients with lymphoedema after breast cancer treatment. The Leduc method MLD — used at our practice in Eupen — follows the natural anatomical pathway of lymphatic vessels.",
          nl: "Een veelvoorkomend misverstand: manuele lymfedrainage (MLD) zou gewoon een ontspanningsmassage zijn. In werkelijkheid is het een **nauwkeurige medische techniek** met specifieke druk, ritme en richting — ontworpen om het lymfesysteem fysiologisch te activeren. De grepen zijn zacht (onder 40 mmHg druk), maar hun effect is meetbaar: vermindering van zwelling, pijnverlichting en verbetering van weefselmobiliteit. Het bewijs: studies tonen significante pijnreductie en verbeterde levenskwaliteit bij patiënten met lymfoedeem na borstkankerbehandeling. De Leduc-methode MLD — die we in Eupen toepassen — volgt het natuurlijke anatomische verloop van lymfevaten.",
          tr: "Yaygın bir yanlış anlama: manuel lenf drenajı (MLD) sadece bir gevşeme masajıdır. Gerçekte, lenf sistemini fizyolojik olarak aktive etmek için tasarlanmış, belirli basınç, ritim ve yöne sahip **hassas bir tıbbi tekniktir**. Hareketler naziktir (40 mmHg altında basınç), ancak etkileri ölçülebilir: şişlik azalması, ağrı rahatlaması ve doku hareketliliğinde iyileşme. Kanıt: çalışmalar, meme kanseri tedavisi sonrası lenfödemli hastalarda önemli ağrı azalması ve yaşam kalitesinde iyileşme göstermektedir. Eupen'de uyguladığımız Leduc yöntemi MLD, lenf damarlarının doğal anatomik yolunu takip eder.",
          ar: "سوء فهم شائع: الصرف اللمفاوي اليدوي (MLD) مجرد تدليك للاسترخاء. في الواقع، هو **تقنية طبية دقيقة** بضغط وإيقاع واتجاه محددين — مصممة لتنشيط الجهاز اللمفاوي فسيولوجيًا. الحركات لطيفة (أقل من 40 ملم زئبق ضغط)، لكن تأثيرها قابل للقياس: تقليل التورم وتخفيف الألم وتحسين حركية الأنسجة. الدليل: تظهر الدراسات انخفاضًا كبيرًا في الألم وتحسن نوعية الحياة لدى مرضى الوذمة اللمفية بعد علاج سرطان الثدي. طريقة Leduc التي نطبقها في Eupen تتبع المسار التشريحي الطبيعي للأوعية اللمفاوية.",
          pl: "Częste nieporozumienie: ręczny drenaż limfatyczny (MLD) to tylko masaż relaksacyjny. W rzeczywistości jest to **precyzyjna technika medyczna** o specyficznym ciśnieniu, rytmie i kierunku — zaprojektowana do fizjologicznej aktywacji układu limfatycznego. Chwyty są delikatne (poniżej 40 mmHg ciśnienia), ale ich efekt jest mierzalny: redukcja obrzęku, ulga w bólu i poprawa mobilności tkanek. Dowód: badania pokazują znaczną redukcję bólu i poprawę jakości życia u pacjentów z obrzękiem limfatycznym po leczeniu raka piersi. Metoda Leduc MLD — stosowana w naszej praktyce w Eupen — podąża za naturalnym anatomicznym przebiegiem naczyń limfatycznych.",
          "uk": "Поширене непорозуміння: мануальний лімфодренаж (МЛД) нібито є звичайним розслаблювальним масажем. Насправді це **точна медична техніка** з особливим тиском, ритмом і напрямком — створена для фізіологічної активації лімфатичної системи. Прийоми м'які (тиск менше 40 мм рт. ст.), але їхній ефект можна виміряти: зменшення набряку, полегшення болю та покращення рухливості тканин. Докази: дослідження показують значне зменшення болю та кращу якість життя в пацієнтів із лімфедемою після лікування раку грудей. МЛД за Leduc — метод, який ми застосовуємо в Ойпені, — відповідає природному анатомічному ходу лімфатичних шляхів.",
          "es": "Un malentendido frecuente: el drenaje linfático manual (DLM) sería un simple masaje relajante. En realidad, es una **técnica médica precisa**, con una presión, un ritmo y una dirección específicos, diseñada para activar fisiológicamente el sistema linfático. Las maniobras son suaves (menos de 40 mmHg de presión), pero su efecto es medible: reducción de la hinchazón, alivio del dolor y mejora de la movilidad de los tejidos. La evidencia: los estudios muestran una reducción significativa del dolor y una mejor calidad de vida en pacientes con linfedema tras un cáncer de mama. El DLM según Leduc, el método que utilizamos en Eupen, sigue el recorrido anatómico natural de las vías linfáticas.",
          "ku": "Têgihîştineke şaş a belav: drenaja lîmfatîk a destî (DLM) tenê masajeke rehetkirinê ye. Bi rastî, ew **teknîkeke bijîşkî ya hûr** e, bi pestan, rîtm û alîyekî taybet — ji bo çalakkirina fîzyolojîk a pergala lîmfatîk hatiye sêwirandin. Tevgerên destan nerm in (pestana kêmtir ji 40 mmHg), lê bandora wan tê pîvan: kêmbûna werimê, sivikbûna êşê û baştirbûna livîna şaneyan. Delîl: lêkolîn kêmbûneke berçav a êşê û kalîteya jiyanê ya baştir li nexweşên bi lîmfodemê piştî penceşêra pêsîrê nîşan didin. DLM li gorî Leduc — rêbaza ku em li Eupenê bi kar tînin — rêya xwezayî ya anatomîk a damarên lîmfê dişopîne.",
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
          "uk": "Кому підходить лімфодренаж?",
          "es": "¿Para quién está indicado el drenaje?",
          "ku": "Drenaj ji bo kê guncaw e?",
        },
        body: {
          de: "Die Lymphdrainage ist, parmi de nombreuses indications, besonders wertvoll für : Patienten mit **Lymphödem nach Krebsbehandlung** (insbesondere nach Brustkrebs mit Lymphknotenentfernung), **postoperative Schwellungen** nach Knie- oder Hüftprothese, **chronische venöse Insuffizienz** mit Beinödemen, **Schwangere** mit geschwollenen Beinen, und Patienten nach **plastischen Eingriffen** oder Verletzungen mit anhaltender Schwellung. Die Technik wirkt nicht nur auf das Volumen, sondern auch auf die Schmerzwahrnehmung — durch eine beruhigende Wirkung auf das Nervensystem.",
          fr: "Le drainage lymphatique est, parmi de nombreuses indications, particulièrement précieux pour : les patients avec un **lymphœdème post-cancer** (notamment après cancer du sein avec ablation des ganglions), les **œdèmes post-opératoires** après prothèse de genou ou hanche, l'**insuffisance veineuse chronique** avec œdèmes des jambes, les **femmes enceintes** avec jambes gonflées, et les patients après **chirurgie esthétique** ou traumatismes avec gonflement persistant. La technique agit non seulement sur le volume, mais aussi sur la perception de la douleur — par un effet apaisant sur le système nerveux.",
          en: "Lymphatic drainage is, among many indications, particularly valuable for: patients with **post-cancer lymphoedema** (especially after breast cancer with lymph node removal), **post-operative swelling** after knee or hip replacement, **chronic venous insufficiency** with leg oedema, **pregnant women** with swollen legs, and patients after **cosmetic surgery** or injuries with persistent swelling. The technique acts not only on volume, but also on pain perception — through a calming effect on the nervous system.",
          nl: "Lymfedrainage is, onder vele indicaties, bijzonder waardevol voor: patiënten met **lymfoedeem na kankerbehandeling** (vooral na borstkanker met lymfeklierverwijdering), **postoperatieve zwellingen** na knie- of heupprothese, **chronische veneuze insufficiëntie** met beenoedeem, **zwangere vrouwen** met gezwollen benen, en patiënten na **cosmetische chirurgie** of verwondingen met aanhoudende zwelling. De techniek werkt niet alleen op volume, maar ook op pijnperceptie — door een kalmerend effect op het zenuwstelsel.",
          tr: "Lenf drenajı, birçok endikasyon arasında, özellikle şunlar için değerlidir: **kanser sonrası lenfödemli** hastalar (özellikle lenf düğümü çıkarılan meme kanseri sonrası), diz veya kalça protezi sonrası **ameliyat sonrası şişlik**, **kronik venöz yetmezlik** ile bacak ödemi, şişmiş bacaklı **hamileler**, ve kalıcı şişlik ile **estetik cerrahi** veya yaralanma sonrası hastalar. Teknik sadece hacme değil, ağrı algısına da etki eder — sinir sistemi üzerinde sakinleştirici bir etkiyle.",
          ar: "الصرف اللمفاوي، من بين العديد من المؤشرات، ذو قيمة خاصة لـ: المرضى الذين يعانون من **وذمة لمفية بعد السرطان** (خاصة بعد سرطان الثدي مع إزالة العقد اللمفاوية)، **التورمات بعد العملية** بعد استبدال الركبة أو الورك، **القصور الوريدي المزمن** مع وذمة الساق، **النساء الحوامل** ذوات الأرجل المتورمة، والمرضى بعد **الجراحة التجميلية** أو الإصابات مع تورم مستمر. التقنية لا تعمل فقط على الحجم، بل أيضًا على إدراك الألم — من خلال تأثير مهدئ على الجهاز العصبي.",
          pl: "Drenaż limfatyczny jest, wśród wielu wskazań, szczególnie wartościowy dla: pacjentów z **obrzękiem limfatycznym po leczeniu raka** (zwłaszcza po raku piersi z usunięciem węzłów chłonnych), **obrzęków pooperacyjnych** po protezie kolana lub biodra, **przewlekłej niewydolności żylnej** z obrzękiem nóg, **kobiet w ciąży** z opuchniętymi nogami, i pacjentów po **chirurgii estetycznej** lub urazach z utrzymującym się obrzękiem. Technika działa nie tylko na objętość, ale również na percepcję bólu — przez uspokajający wpływ na układ nerwowy.",
          "uk": "Серед багатьох показань лімфодренаж особливо цінний для: пацієнтів із **лімфедемою після онкологічного лікування** (зокрема після раку грудей з видаленням лімфовузлів), **післяопераційних набряків** після ендопротезування коліна чи кульшового суглоба, **хронічної венозної недостатності** з набряками ніг, **вагітних жінок** із набряклими ногами, а також пацієнтів після **естетичної хірургії** або травм зі стійким набряком. Техніка впливає не лише на об'єм, а й на сприйняття болю — завдяки заспокійливій дії на нервову систему.",
          "es": "Entre sus muchas indicaciones, el drenaje linfático resulta especialmente útil para: pacientes con **linfedema tras un cáncer** (sobre todo después de un cáncer de mama con extirpación de ganglios), **edemas posoperatorios** tras una prótesis de rodilla o de cadera, **insuficiencia venosa crónica** con edemas en las piernas, **mujeres embarazadas** con las piernas hinchadas, y pacientes tras una **cirugía estética** o traumatismos con hinchazón persistente. La técnica actúa no solo sobre el volumen, sino también sobre la percepción del dolor, gracias a un efecto calmante sobre el sistema nervioso.",
          "ku": "Di nav gelek nîşandanan de, drenaja lîmfatîk bi taybetî bi nirx e ji bo: nexweşên bi **lîmfodemê piştî penceşêrê** (bi taybetî piştî penceşêra pêsîrê bi rakirina girêkên lîmfê), **werimên piştî emeliyatê** piştî proteza çok an kalçê, **kêmasiya kronîk a damarên xwînê (venan)** bi werimên lingan, **jinên ducanî** bi lingên werimî, û nexweşên piştî **emeliyata estetîk** an birînan bi werimeke domdar. Teknîk ne tenê li ser qebareyê, lê herwiha li ser hesta êşê jî bandor dike — bi bandoreke aramker li ser pergala demarî.",
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
          "uk": "Золоте правило лімфодренажу",
          "es": "La regla de oro del drenaje linfático",
          "ku": "Qaîdeya zêrîn a drenaja lîmfatîk",
        },
        body: {
          de: "> *« Die Drainage arbeitet nicht allein — es ist Teamarbeit zwischen Ihnen und Ihrer Therapeutin. »*\n\nLymphdrainage ist besonders wirksam, wenn sie Teil einer **kombinierten Entstauungstherapie** (KPE) ist. Die Hände der Therapeutin reaktivieren den Lymphfluss, aber um die Ergebnisse zu halten, ist Ihre Mitarbeit entscheidend: Kompressionsbandagen, Entstauungsübungen, Hautpflege und Selbstdrainage. Dieser ganzheitliche Ansatz — empfohlen von internationalen Leitlinien — maximiert den langfristigen Nutzen.",
          fr: "> *« Le drainage ne travaille pas seul — c'est une équipe entre vous et votre thérapeute. »*\n\nLe drainage lymphatique est d'autant plus efficace qu'il s'inscrit dans une **thérapie décongestive combinée** (TDC). Les mains de la thérapeute réactivent le flux lymphatique, mais pour maintenir les résultats, votre implication est essentielle : bandages de compression, exercices décongestifs, soins de la peau et auto-drainage. Cette approche globale — recommandée par les guidelines internationales — maximise les bénéfices à long terme.",
          en: "> *\"Drainage doesn't work alone — it's a team effort between you and your therapist.\"*\n\nLymphatic drainage is most effective when part of **combined decongestive therapy** (CDT). The therapist's hands reactivate lymphatic flow, but to maintain results, your involvement is essential: compression bandaging, decongestive exercises, skin care and self-drainage. This comprehensive approach — recommended by international guidelines — maximises long-term benefits.",
          nl: "> *« Drainage werkt niet alleen — het is teamwerk tussen u en uw therapeut. »*\n\nLymfedrainage is het meest effectief als onderdeel van **gecombineerde decongestieve therapie** (CDT). De handen van de therapeut reactiveren de lymfestroom, maar om resultaten te behouden is uw betrokkenheid essentieel: compressiebandages, decongestieve oefeningen, huidverzorging en zelfdrainage. Deze alomvattende aanpak — aanbevolen door internationale richtlijnen — maximaliseert de langetermijnvoordelen.",
          tr: "> *« Drenaj tek başına çalışmaz — siz ve terapistiniz arasında bir ekip çalışmasıdır. »*\n\nLenf drenajı, **kombine dekongestif tedavinin** (KDT) bir parçası olduğunda en etkilidir. Terapistin elleri lenf akışını yeniden aktive eder, ancak sonuçları sürdürmek için sizin katılımınız gereklidir: kompresyon bandajlama, dekongestif egzersizler, cilt bakımı ve kendi kendine drenaj.",
          ar: "> *«الدرينج لا يعمل وحده — إنه عمل جماعي بينك وبين معالجك.»*\n\nالصرف اللمفاوي يكون أكثر فعالية عندما يكون جزءًا من **العلاج الاحتقاني المشترك** (CDT). يدا المعالجة تعيدان تنشيط التدفق اللمفاوي، ولكن للحفاظ على النتائج، مشاركتك ضرورية: ضمادات ضغط، تمارين احتقانية، العناية بالبشرة والتصريف الذاتي. هذا النهج الشامل — الموصى به من المبادئ التوجيهية الدولية — يزيد الفوائد طويلة المدى.",
          pl: "> *« Drenaż nie działa sam — to praca zespołowa między Tobą a Twoim terapeutą. »*\n\nDrenaż limfatyczny jest najskuteczniejszy jako część **połączonej terapii odblokującej** (CDT). Ręce terapeutki reaktywują przepływ limfy, ale aby utrzymać wyniki, Twoje zaangażowanie jest niezbędne: bandażowanie kompresyjne, ćwiczenia odblokujące, pielęgnacja skóry i samodrenowanie. To kompleksowe podejście — zalecane przez międzynarodowe wytyczne — maksymalizuje korzyści długoterminowe.",
          "uk": "> *«Дренаж не працює сам по собі — це командна робота між вами та вашим терапевтом.»*\n\nЛімфодренаж найефективніший, коли він є частиною **комплексної протинабрякової терапії** (КПТ). Руки терапевта відновлюють лімфатичний відтік, але для збереження результатів важлива ваша участь: компресійне бинтування, протинабрякові вправи, догляд за шкірою та самодренаж. Такий комплексний підхід — рекомендований міжнародними настановами — максимізує довгострокову користь.",
          "es": "> *«El drenaje no funciona solo: es un trabajo en equipo entre usted y su terapeuta.»*\n\nEl drenaje linfático es más eficaz cuando forma parte de una **terapia descongestiva combinada** (TDC). Las manos de la terapeuta reactivan el flujo linfático, pero para mantener los resultados su implicación es esencial: vendajes de compresión, ejercicios descongestivos, cuidado de la piel y autodrenaje. Este enfoque global, recomendado por las guías internacionales, maximiza los beneficios a largo plazo.",
          "ku": "> *«Drenaj bi tena serê xwe naxebite — ew xebateke tîmê ye di navbera we û terapîsta we de.»*\n\nDrenaja lîmfatîk herî bi bandor e dema ku beşek ji **terapiya dekonjestîf a tevhev** (TDT) be. Destên terapîstê herikîna lîmfê ji nû ve çalak dikin, lê ji bo parastina encaman beşdariya we pêwîst e: bandajên kompresyonê, rahênanên kêmkirina werimê, lênêrîna çerm û xwe-drenaj. Ev nêzîkatiya giştî — ku ji aliyê rêbernameyên navneteweyî ve tê pêşniyarkirin — feydeyên demdirêj herî zêde dike.",
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
          "uk": "3 правила при набряку",
          "es": "3 reflejos ante la hinchazón",
          "ku": "3 refleks dema werimînê",
        },
        body: {
          de: "**1. Bewegen Sie sich regelmäßig** — Schon leichte Bewegung (Gehen, Radfahren, Schwimmen) aktiviert die Muskulatur und fördert den Lymphfluss. Ihre Muskeln sind eine natürliche « Pumpe » für die Lymphe.\n\n**2. Hochlagern und Kompression** — Bei Beinödemen: Beine regelmäßig hochlegen und ärztlich verordnete Kompressionsstrümpfe tragen. Die Kombination ist wirksamer als jedes Element allein.\n\n**3. Frühzeitig handeln** — Je schneller ein Ödem behandelt wird, desto besser die Prognose. Warten Sie nicht, bis die Schwellung chronisch wird. In Eupen stehen wir Ihnen kurzfristig zur Verfügung.",
          fr: "**1. Bougez régulièrement** — Même une activité légère (marche, vélo, natation) active la musculature et favorise le flux lymphatique. Vos muscles sont une « pompe » naturelle pour la lymphe.\n\n**2. Surélévation et compression** — En cas d'œdème des jambes : surélevez-les régulièrement et portez les bas de compression prescrits. La combinaison est plus efficace que chaque élément seul.\n\n**3. Agissez tôt** — Plus un œdème est traité rapidement, meilleur est le pronostic. N'attendez pas que le gonflement devienne chronique. À Eupen, nous pouvons vous recevoir rapidement.",
          en: "**1. Move regularly** — Even light activity (walking, cycling, swimming) activates muscles and promotes lymph flow. Your muscles are a natural \"pump\" for lymph.\n\n**2. Elevation and compression** — For leg oedema: elevate legs regularly and wear prescribed compression stockings. The combination is more effective than either alone.\n\n**3. Act early** — The sooner an oedema is treated, the better the prognosis. Don't wait until swelling becomes chronic. In Eupen, we can see you at short notice.",
          nl: "**1. Beweeg regelmatig** — Zelfs lichte activiteit (wandelen, fietsen, zwemmen) activeert de spieren en bevordert de lymfestroom. Uw spieren zijn een natuurlijke « pomp » voor lymfe.\n\n**2. Hoogleggen en compressie** — Bij beenoedeem: benen regelmatig hoogleggen en voorgeschreven compressiekousen dragen. De combinatie is effectiever dan elk element apart.\n\n**3. Handel vroeg** — Hoe sneller een oedeem behandeld wordt, hoe beter de prognose. Wacht niet tot de zwelling chronisch wordt. In Eupen kunnen wij u snel ontvangen.",
          tr: "**1. Düzenli hareket edin** — Hafif aktivite bile (yürüyüş, bisiklet, yüzme) kasları aktive eder ve lenf akışını destekler. Kaslarınız lenf için doğal bir « pompadır ».\n\n**2. Yükseltme ve kompresyon** — Bacak ödemi için: bacakları düzenli olarak yükseltin ve reçeteli kompresyon çorapları giyin. Kombinasyon, her birinden tek başına daha etkilidir.\n\n**3. Erken davranın** — Bir ödem ne kadar erken tedavi edilirse, prognoz o kadar iyi olur. Şişliğin kronikleşmesini beklemeyin. Eupen'de sizi kısa sürede görebiliriz.",
          ar: "**1. تحرك بانتظام** — حتى النشاط الخفيف (المشي، ركوب الدراجة، السباحة) ينشط العضلات ويعزز تدفق اللمف. عضلاتك هي «مضخة» طبيعية للمف.\n\n**2. الرفع والضغط** — لوذمة الساق: ارفع ساقيك بانتظام وارتدِ جوارب الضغط الموصوفة. الجمع أكثر فعالية من أي عنصر وحده.\n\n**3. تصرف مبكرًا** — كلما عولجت الوذمة أسرع، كان التشخيص أفضل. لا تنتظر حتى يصبح التورم مزمنًا. في Eupen، يمكننا استقبالك بسرعة.",
          pl: "**1. Ruszaj się regularnie** — Nawet lekka aktywność (spacer, jazda na rowerze, pływanie) aktywuje mięśnie i wspiera przepływ limfy. Twoje mięśnie to naturalna «pompa» dla limfy.\n\n**2. Unoszenie i kompresja** — Przy obrzęku nóg: regularnie unoś nogi i noś przepisane pończochy kompresyjne. Kombinacja jest skuteczniejsza niż każdy element z osobna.\n\n**3. Działaj wcześnie** — Im szybciej obrzęk jest leczony, tym lepsza prognoza. Nie czekaj, aż obrzęk stanie się przewlekły. W Eupen możemy przyjąć Cię w krótkim terminie.",
          "uk": "**1. Регулярно рухайтеся** — Навіть легка активність (ходьба, велосипед, плавання) активує м'язи й сприяє відтоку лімфи. Ваші м'язи — природний «насос» для лімфи.\n\n**2. Підняте положення та компресія** — При набряку ніг: регулярно піднімайте ноги й носіть призначені компресійні панчохи. Поєднання ефективніше, ніж кожен засіб окремо.\n\n**3. Дійте рано** — Що раніше лікують набряк, то кращий прогноз. Не чекайте, поки набряк стане хронічним. В Ойпені ми можемо швидко вас прийняти.",
          "es": "**1. Muévase con regularidad** — Incluso una actividad ligera (caminar, bicicleta, natación) activa la musculatura y favorece el flujo linfático. Sus músculos son una «bomba» natural para la linfa.\n\n**2. Elevación y compresión** — En caso de edema en las piernas: elévelas con regularidad y lleve las medias de compresión prescritas. La combinación es más eficaz que cada elemento por separado.\n\n**3. Actúe pronto** — Cuanto antes se trate un edema, mejor es el pronóstico. No espere a que la hinchazón se vuelva crónica. En Eupen podemos atenderle con rapidez.",
          "ku": "**1. Bi rêkûpêk bilivin** — Çalakiyeke sivik jî (meş, bisîklet, avjenî) masûlkan çalak dike û herikîna lîmfê hêsantir dike. Masûlkeyên we «pompeyeke» xwezayî ne ji bo lîmfê.\n\n**2. Bilindkirin û kompresyon** — Di rewşa werima lingan de: lingan bi rêkûpêk bilind bikin û çorabên kompresyonê yên ku hatine nivîsandin li xwe bikin. Hevgirtina wan ji her yekê bi tenê bi bandortir e.\n\n**3. Zû tevbigerin** — Werim çiqas zû bê dermankirin, pêşbînî ewqas baştir e. Li bendê nemînin heta ku werimîn kronîk bibe. Li Eupenê em dikarin we zû qebûl bikin.",
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
          "uk": "Коли лімфодренаж протипоказаний?",
          "es": "¿Cuándo está contraindicado el drenaje?",
          "ku": "Drenaj kengê nayê kirin (dijnîşandan)?",
        },
        body: {
          de: "Die Sicherheit unserer Patienten hat absolute Priorität. Lymphdrainage darf **nicht** durchgeführt werden bei: **aktiver Infektion** (Erysipel, Cellulitis) im Behandlungsgebiet, Verdacht auf oder bestätigter **tiefer Venenthrombose**, **dekompensierter Herzinsuffizienz**, oder **unbehandeltem aktivem Krebs** im Drainagegebiet. Im Zweifelsfall arbeiten wir eng mit Ihrem behandelnden Arzt zusammen, um eine sichere Versorgung zu gewährleisten. Falls Sie ein ärztliches Rezept haben, teilen Sie es uns gerne mit — es hilft uns bei der Anpassung der Behandlung.",
          fr: "La sécurité de nos patients est notre priorité absolue. Le drainage lymphatique ne doit **pas** être réalisé en cas de : **infection active** (cellulite, érysipèle) dans la zone à traiter, **thrombose veineuse profonde** suspectée ou confirmée, **insuffisance cardiaque décompensée**, ou **cancer actif non traité** dans le territoire de drainage. En cas de doute, nous collaborons étroitement avec votre médecin traitant pour garantir une prise en charge sûre. Si vous avez une prescription médicale, n'hésitez pas à nous la transmettre — elle nous guide dans l'adaptation du traitement.",
          en: "Patient safety is our absolute priority. Lymphatic drainage must **not** be performed in cases of: **active infection** (cellulitis, erysipelas) in the treatment area, suspected or confirmed **deep vein thrombosis**, **decompensated heart failure**, or **untreated active cancer** in the drainage territory. When in doubt, we collaborate closely with your physician to ensure safe care. If you have a medical prescription, please share it with us — it guides our treatment adaptation.",
          nl: "De veiligheid van onze patiënten is onze absolute prioriteit. Lymfedrainage mag **niet** worden uitgevoerd bij: **actieve infectie** (cellulitis, erysipelas) in het behandelgebied, vermoede of bevestigde **diepe veneuze trombose**, **gedecompenseerd hartfalen**, of **onbehandelde actieve kanker** in het drainagegebied. Bij twijfel werken we nauw samen met uw arts om veilige zorg te garanderen.",
          tr: "Hasta güvenliği mutlak önceliğimizdir. Lenf drenajı şu durumlarda **yapılmamalıdır**: tedavi bölgesinde **aktif enfeksiyon** (selülit, erizipel), şüpheli veya doğrulanmış **derin ven trombozu**, **dekompanse kalp yetmezliği**, veya drenaj bölgesinde **tedavi edilmemiş aktif kanser**. Şüphe durumunda, güvenli bakım sağlamak için doktorunuzla yakın işbirliği yapıyoruz.",
          ar: "سلامة مرضانا هي أولويتنا المطلقة. لا يجب إجراء الصرف اللمفاوي في حالات: **عدوى نشطة** (التهاب النسيج الخلوي) في منطقة العلاج، **تخثر وريدي عميق** مشتبه أو مؤكد، **فشل قلبي غير معوض**، أو **سرطان نشط غير معالج** في منطقة الصرف. في حالة الشك، نتعاون بشكل وثيق مع طبيبك لضمان رعاية آمنة.",
          pl: "Bezpieczeństwo naszych pacjentów jest naszym absolutnym priorytetem. Drenaż limfatyczny **nie może** być wykonywany w przypadku: **aktywnej infekcji** (zapalenie tkanki łącznej) w obszarze leczenia, podejrzewanej lub potwierdzonej **zakrzepicy żył głębokich**, **niewyrównanej niewydolności serca**, lub **nieleczonego aktywnego nowotworu** w terenie drenażu. W razie wątpliwości ściśle współpracujemy z Twoim lekarzem, aby zapewnić bezpieczną opiekę.",
          "uk": "Безпека пацієнтів — наш абсолютний пріоритет. Лімфодренаж **не** можна проводити у випадку: **активної інфекції** (флегмона, бешиха) в зоні лікування, підозри на **тромбоз глибоких вен** або підтвердженого тромбозу, **декомпенсованої серцевої недостатності** чи **активного нелікованого раку** в зоні дренажу. У разі сумнівів ми тісно співпрацюємо з вашим сімейним лікарем, щоб забезпечити безпечне лікування. Якщо у вас є лікарське направлення, будь ласка, передайте його нам — воно допомагає адаптувати лікування.",
          "es": "La seguridad de nuestros pacientes es nuestra prioridad absoluta. El drenaje linfático **no** debe realizarse en caso de: **infección activa** (celulitis infecciosa, erisipela) en la zona a tratar, sospecha o confirmación de **trombosis venosa profunda**, **insuficiencia cardíaca descompensada** o **cáncer activo no tratado** en el territorio de drenaje. En caso de duda, colaboramos estrechamente con su médico de cabecera para garantizar una atención segura. Si tiene una prescripción médica, no dude en facilitárnosla: nos orienta para adaptar el tratamiento.",
          "ku": "Ewlehiya nexweşên me pêşaniya me ya mutleq e. Drenaja lîmfatîk **nabe** bê kirin di van rewşan de: **enfeksiyona çalak** (selûlît, erîzîpel) li herêma dermankirinê, gumana **tromboza venên kûr** an tromboza piştrastkirî, **kêmasiya dil a dekompanse**, an **penceşêra çalak a nedermankirî** li herêma drenajê. Di rewşa gumanê de, em bi bijîşkê we yê malbatê re ji nêz ve dixebitin da ku lênêrîneke ewle misoger bikin. Eger reçeteyeke we ya bijîşkî hebe, ji kerema xwe wê ji me re bişînin — ew di lihevanîna dermankirinê de rêberiya me dike.",
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
          "uk": "У кабінеті Praxis Loten в Ойпені: дренаж за Leduc",
          "es": "En la consulta Praxis Loten de Eupen: drenaje según Leduc",
          "ku": "Li klînîka Praxis Loten li Eupenê: drenaj li gorî Leduc",
        },
        body: {
          de: "**1. Individuelle Befunderhebung** — Fabienne Dormann beurteilt das Ausmaß des Ödems, seinen Ursprung und seine Auswirkung auf Ihren Alltag. Jeder Plan ist einzigartig.\n\n**2. Zertifizierte Leduc-Technik** — Ausgebildet an der Schule von Professor Leduc (UCL Brüssel) wendet Fabienne eine international anerkannte Technik mit spezifischen Ruf- und Resorptionsmanövern an.\n\n**3. Schulung zur Selbstbehandlung** — Sie erlernen Selbstdrainage-Techniken, Entstauungsübungen und Kompressionsprinzipien, um die Ergebnisse zwischen den Sitzungen zu erhalten.\n\n**4. Medizinische Zusammenarbeit** — In enger Abstimmung mit Ihrem Arzt, Onkologen oder Chirurgen gewährleisten wir eine koordinierte und sichere Versorgung.",
          fr: "**1. Bilan individualisé** — Fabienne Dormann évalue l'étendue de l'œdème, son origine et son impact sur votre quotidien. Chaque plan est unique.\n\n**2. Technique Leduc certifiée** — Formée à l'école du Professeur Leduc (UCL Bruxelles), Fabienne applique une technique reconnue internationalement, avec des manœuvres d'appel et de résorption spécifiques.\n\n**3. Éducation à l'auto-gestion** — Vous apprenez les gestes d'auto-drainage, les exercices décongestifs et les principes de compression pour maintenir les résultats entre les séances.\n\n**4. Collaboration médicale** — En lien étroit avec votre médecin, oncologue ou chirurgien, nous assurons une prise en charge coordonnée et sûre.",
          en: "**1. Individualised assessment** — Fabienne Dormann evaluates the extent of oedema, its origin and its impact on your daily life. Every plan is unique.\n\n**2. Certified Leduc technique** — Trained at the school of Professor Leduc (UCL Brussels), Fabienne applies an internationally recognised technique with specific call and resorption manoeuvres.\n\n**3. Self-management education** — You learn self-drainage techniques, decongestive exercises and compression principles to maintain results between sessions.\n\n**4. Medical collaboration** — Working closely with your doctor, oncologist or surgeon, we ensure coordinated and safe care.",
          nl: "**1. Geïndividualiseerde beoordeling** — Fabienne Dormann evalueert de omvang van het oedeem, de oorsprong en de impact op uw dagelijks leven. Elk plan is uniek.\n\n**2. Gecertificeerde Leduc-techniek** — Opgeleid aan de school van Professor Leduc (UCL Brussel) past Fabienne een internationaal erkende techniek toe met specifieke oproep- en resorptiebewegingen.\n\n**3. Educatie in zelfmanagement** — U leert zelfdrainagetechnieken, decongestieve oefeningen en compressieprincipes om resultaten tussen sessies te behouden.\n\n**4. Medische samenwerking** — In nauw contact met uw arts, oncoloog of chirurg zorgen wij voor gecoördineerde en veilige zorg.",
          tr: "**1. Bireyselleştirilmiş değerlendirme** — Fabienne Dormann ödemin boyutunu, kökenini ve günlük yaşamınıza etkisini değerlendirir. Her plan benzersizdir.\n\n**2. Sertifikalı Leduc tekniği** — Profesör Leduc okulunda (UCL Brüksel) eğitim almış Fabienne, uluslararası olarak tanınan bir tekniği spesifik çağrı ve rezorpsiyon manevraları ile uygular.\n\n**3. Öz-yönetim eğitimi** — Seanslar arasında sonuçları korumak için kendi kendine drenaj tekniklerini, dekongestif egzersizleri ve kompresyon prensiplerini öğrenirsiniz.\n\n**4. Tıbbi işbirliği** — Doktorunuz, onkologunuz veya cerrahınızla yakın çalışarak koordineli ve güvenli bakım sağlıyoruz.",
          ar: "**1. تقييم فردي** — تقيم فابيان دورمان مدى الوذمة ومنشأها وتأثيرها على حياتك اليومية. كل خطة فريدة.\n\n**2. تقنية Leduc المعتمدة** — تدربت في مدرسة البروفيسور Leduc (UCL بروكسل)، تطبق فابيان تقنية معترف بها دوليًا مع مناورات استدعاء وامتصاص محددة.\n\n**3. تثقيف الإدارة الذاتية** — تتعلم تقنيات التصريف الذاتي والتمارين الاحتقانية ومبادئ الضغط للحفاظ على النتائج بين الجلسات.\n\n**4. تعاون طبي** — بالتنسيق الوثيق مع طبيبك أو أخصائي الأورام أو الجراح، نضمن رعاية منسقة وآمنة.",
          pl: "**1. Zindywidualizowana ocena** — Fabienne Dormann ocenia rozległość obrzęku, jego pochodzenie i wpływ na Twoje codzienne życie. Każdy plan jest unikalny.\n\n**2. Certyfikowana technika Leduc** — Wykształcona w szkole Profesora Leduc (UCL Bruksela), Fabienne stosuje międzynarodowo uznaną technikę ze specyficznymi manewrami wezwania i resorpcji.\n\n**3. Edukacja w samodzielnym zarządzaniu** — Uczysz się technik samodrenowania, ćwiczeń odblokujących i zasad kompresji, aby utrzymać wyniki między sesjami.\n\n**4. Współpraca medyczna** — W ścisłym kontakcie z Twoim lekarzem, onkologiem lub chirurgiem zapewniamy skoordynowaną i bezpieczną opiekę.",
          "uk": "**1. Індивідуальна оцінка** — Fabienne Dormann оцінює поширеність набряку, його походження та вплив на ваше повсякденне життя. Кожен план унікальний.\n\n**2. Сертифікована техніка Leduc** — Навчена в школі професора Leduc (UCL, Брюссель), Fabienne застосовує міжнародно визнану техніку зі специфічними прийомами «виклику» та резорбції.\n\n**3. Навчання самодопомозі** — Ви опановуєте прийоми самодренажу, протинабрякові вправи та принципи компресії, щоб зберігати результати між сеансами.\n\n**4. Співпраця з лікарями** — У тісній співпраці з вашим лікарем, онкологом або хірургом ми забезпечуємо скоординований і безпечний супровід.",
          "es": "**1. Valoración individualizada** — Fabienne Dormann evalúa la extensión del edema, su origen y su impacto en su día a día. Cada plan es único.\n\n**2. Técnica Leduc certificada** — Formada en la escuela del profesor Leduc (UCL Bruselas), Fabienne aplica una técnica reconocida internacionalmente, con maniobras específicas de llamada y de reabsorción.\n\n**3. Educación en autocuidado** — Aprende los gestos de autodrenaje, los ejercicios descongestivos y los principios de la compresión para mantener los resultados entre sesiones.\n\n**4. Colaboración médica** — En estrecha relación con su médico, oncólogo o cirujano, garantizamos una atención coordinada y segura.",
          "ku": "**1. Nirxandina kesane** — Fabienne Dormann berfirehiya werimê, eslê wê û bandora wê li ser jiyana we ya rojane dinirxîne. Her plan yekta ye.\n\n**2. Teknîka Leduc a sertîfîkekirî** — Fabienne, ku li dibistana Profesor Leduc (UCL Brukselê) perwerde bûye, teknîkeke ku li cîhanê tê naskirin bi kar tîne, bi tevgerên taybet ên bangkirinê û vemijandinê.\n\n**3. Perwerdeya xwe-birêvebirinê** — Hûn tevgerên xwe-drenajê, rahênanên kêmkirina werimê û prensîbên kompresyonê fêr dibin, da ku encaman di navbera danişînan de biparêzin.\n\n**4. Hevkariya bijîşkî** — Bi têkiliyeke nêzîk bi bijîşk, onkolog an cerahê we re, em lênêrîneke hevahengkirî û ewle misoger dikin.",
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
      "uk": [
        "Медична техніка за Leduc — набагато більше, ніж масаж",
        "Доведена ефективність щодо болю та набряку після онкологічного лікування",
        "Частина комплексної терапії: дренаж + компресія + рух",
        "Індивідуальний план від Fabienne Dormann в Ойпені",
        "Співпраця з вашим лікарем для оптимальної безпеки"
      ],
      "es": [
        "Técnica médica según Leduc: mucho más que un masaje",
        "Eficacia demostrada sobre el dolor y la hinchazón tras un cáncer",
        "Parte de una terapia global: drenaje + compresión + movimiento",
        "Plan individual con Fabienne Dormann en Eupen",
        "Colaboración con su médico para una seguridad óptima"
      ],
      "ku": [
        "Teknîka bijîşkî li gorî Leduc — ji masajê gelek zêdetir",
        "Bandora îsbatkirî li ser êş û werimê piştî penceşêrê",
        "Beşek ji terapiyeke giştî: drenaj + kompresyon + tevger",
        "Plana kesane bi Fabienne Dormann re li Eupenê",
        "Hevkarî bi bijîşkê we re ji bo ewlehiya herî baş"
      ],
    },
    ctaText: {
      de: "Schwellungen oder Lymphödem? Vereinbaren Sie einen Termin bei Fabienne Dormann in Eupen.",
      fr: "Gonflements ou lymphœdème ? Prenez rendez-vous avec Fabienne Dormann à Eupen.",
      en: "Swelling or lymphoedema? Book an appointment with Fabienne Dormann in Eupen.",
      nl: "Zwellingen of lymfoedeem? Maak een afspraak bij Fabienne Dormann in Eupen.",
      tr: "Şişlik veya lenfödem mi? Eupen'de Fabienne Dormann ile randevu alın.",
      ar: "تورمات أو وذمة لمفية؟ احجز موعدًا مع فابيان دورمان في Eupen.",
      pl: "Obrzęki lub obrzęk limfatyczny? Zarezerwuj wizytę u Fabienne Dormann w Eupen.",
      "uk": "Набряки чи лімфедема? Запишіться на прийом до Fabienne Dormann в Ойпені.",
      "es": "¿Hinchazón o linfedema? Pida cita con Fabienne Dormann en Eupen.",
      "ku": "Werimîn an lîmfodem? Bi Fabienne Dormann re li Eupenê randevû bigirin.",
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
      "uk": "Ця стаття має суто інформаційний характер і жодним чином не замінює консультацію лікаря чи фізіотерапевта. Якщо симптоми тривалі або сильні, зверніться до медичного фахівця.",
      "es": "Este artículo tiene un fin puramente informativo y en ningún caso sustituye una consulta médica o de fisioterapia. Si presenta síntomas persistentes o intensos, consulte a un profesional sanitario.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye û qet şûna şêwirdariyeke bijîşkî an fizyoterapiyê nagire. Eger nîşaneyên we yên domdar an giran hebin, serî li pisporekî tenduristiyê bidin.",
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
      "uk": "Біль у щелепі (СНЩС) — що справді допомагає",
      "es": "Dolor de mandíbula (ATM) — lo que realmente ayuda",
      "ku": "Êşa çenê (TMJ) — çi bi rastî dibe alîkar",
    },
    category: {
      de: "Kiefergelenk / ATM", fr: "Articulation Temporo-Mandibulaire", en: "TMJ / Jaw",
      nl: "Kaakgewricht", tr: "Çene Eklemi", ar: "مفصل الفك", pl: "Staw Żuchwowy",
      "uk": "Скронево-нижньощелепний суглоб",
      "es": "Articulación temporomandibular",
      "ku": "Movika çenê (TMJ)",
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
      "uk": "Ваша щелепа клацає, болить голова, напружена шия — і ніхто не знаходить причини? Краніомандибулярна дисфункція (КМД) трапляється в до 10 % населення і часто довго залишається нерозпізнаною. Добра новина: за правильного підходу симптоми помітно покращуються в більшості випадків. Fabienne Dormann, яка спеціалізується на терапії СНЩС у Praxis Loten в Ойпені, пояснює, що за цим стоїть.",
      "es": "¿Su mandíbula cruje, le duele la cabeza, tiene la nuca tensa — y nadie encuentra la causa? La disfunción craneomandibular (DCM) afecta hasta al 10 % de la población y a menudo pasa desapercibida durante mucho tiempo. La buena noticia: con el enfoque adecuado, los síntomas mejoran claramente en la mayoría de los casos. Fabienne Dormann, especializada en terapia de la ATM en Praxis Loten en Eupen, le explica qué se esconde detrás.",
      "ku": "Çena we qirç dike, serê we diêşe, stûyê we girj e — û kes sedemê nabîne? Disfonksiyona kranomandîbular (TMD) heta 10 % ji nifûsê digire û pir caran demeke dirêj nayê naskirin. Mizgîniya baş: bi nêzîkatiya rast, di piraniya rewşan de nîşan bi awayekî berçav baştir dibin. Fabienne Dormann, ku li Praxis Loten li Eupenê di terapiya TMJ de pispor e, rave dike ka çi li pişt vê yekê heye.",
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
          "uk": "Міф: клацання означає пошкодження",
          "es": "Mito: un crujido significa daño",
          "ku": "Efsane: qirç tê wateya zirarê",
        },
        body: {
          de: "Viele Menschen hören ein Knacken im Kiefergelenk und denken sofort an eine schwere Schädigung. Die Realität ist beruhigender: **Gelenkgeräusche ohne Schmerz sind in den meisten Fällen harmlos.** Studien zeigen, dass bis zu 40 % der Bevölkerung Kiefergelenkgeräusche haben — ohne jede Behandlungsbedürftigkeit. Ein Knacken entsteht oft durch eine normale Variation der Diskusposition und ist kein Zeichen von Schädigung. Auch Zähneknirschen (Bruxismus) bedeutet nicht automatisch Schaden: Ihr Kiefer ist ein robustes, anpassungsfähiges Gelenk. Entscheidend ist nicht das Geräusch, sondern ob Schmerz oder Funktionseinschränkung vorliegen.",
          fr: "Beaucoup de personnes entendent un craquement dans la mâchoire et pensent immédiatement à un dommage grave. La réalité est rassurante : **les bruits articulaires sans douleur sont inoffensifs dans la plupart des cas.** Des études montrent que jusqu'à 40 % de la population présente des bruits de l'ATM — sans aucun besoin de traitement. Un craquement résulte souvent d'une variation normale de la position du disque et n'est pas un signe de détérioration. Le bruxisme (grincement des dents) ne signifie pas non plus automatiquement un dommage : votre mâchoire est une articulation robuste et adaptable. Ce qui compte, ce n'est pas le bruit, mais la présence de douleur ou de limitation fonctionnelle.",
          en: "Many people hear clicking in their jaw and immediately think of serious damage. The reality is reassuring: **joint sounds without pain are harmless in most cases.** Studies show that up to 40% of the population have TMJ sounds — without any need for treatment. Clicking often results from a normal variation in disc position and is not a sign of wear. Teeth grinding (bruxism) doesn't automatically mean damage either: your jaw is a robust, adaptable joint. What matters is not the sound, but whether pain or functional limitation is present.",
          nl: "Veel mensen horen een klik in hun kaak en denken meteen aan een ernstig probleem. De realiteit is geruststellend: **gewrichtsgeluiden zonder pijn zijn in de meeste gevallen onschuldig.** Studies tonen aan dat tot 40% van de bevolking kaakgewrichtsgeluiden heeft — zonder enige behandelbehoefte. Een klik ontstaat vaak door een normale variatie in de discuspositie en is geen teken van een probleem. Tandenknarsen (bruxisme) betekent ook niet automatisch schade: uw kaak is een robuust, aanpasbaar gewricht.",
          tr: "Birçok kişi çenesinde tıklama duyar ve hemen ciddi bir sorun olduğunu düşünür. Gerçek rahatlatıcıdır: **ağrısız eklem sesleri çoğu durumda zararsızdır.** Araştırmalar, nüfusun %40'ına kadarının çene eklemi sesleri olduğunu göstermektedir — herhangi bir tedavi ihtiyacı olmaksızın. Tıklama genellikle disk pozisyonundaki normal bir varyasyondan kaynaklanır.",
          ar: "كثير من الناس يسمعون طقطقة في فكهم ويفكرون فورًا في مشكلة خطيرة. الواقع مطمئن: **أصوات المفصل بدون ألم غير ضارة في معظم الحالات.** تظهر الدراسات أن ما يصل إلى 40٪ من السكان لديهم أصوات في مفصل الفك — دون أي حاجة للعلاج. الطقطقة غالبًا ما تنتج عن تغير طبيعي في وضع القرص وليست علامة على وجود مشكلة.",
          pl: "Wiele osób słyszy trzaskanie w żuchwie i natychmiast myśli o poważnym problemie. Rzeczywistość jest uspokajająca: **odgłosy stawowe bez bólu są w większości przypadków nieszkodliwe.** Badania pokazują, że do 40% populacji ma odgłosy stawu skroniowo-żuchwowego — bez jakiejkolwiek potrzeby leczenia. Trzaskanie często wynika z normalnej wariacji pozycji krążka i nie jest oznaką problemu.",
          "uk": "Багато людей чують клацання в щелепі й одразу думають про серйозне пошкодження. Реальність заспокоює: **звуки в суглобі без болю в більшості випадків нешкідливі.** Дослідження показують, що до 40 % населення мають звуки в СНЩС — без жодної потреби в лікуванні. Клацання часто є наслідком нормальної варіації положення диска і не є ознакою зношування. Бруксизм (скреготіння зубами) теж не означає автоматично пошкодження: Ваша щелепа — міцний суглоб, здатний пристосовуватися. Важить не звук, а наявність болю чи функціонального обмеження.",
          "es": "Muchas personas oyen un crujido en la mandíbula y piensan de inmediato en un daño grave. La realidad es tranquilizadora: **los ruidos articulares sin dolor son inofensivos en la mayoría de los casos.** Los estudios muestran que hasta el 40 % de la población presenta ruidos en la ATM — sin ninguna necesidad de tratamiento. Un crujido suele deberse a una variación normal de la posición del disco y no es un signo de deterioro. El bruxismo (rechinar los dientes) tampoco significa automáticamente un daño: su mandíbula es una articulación robusta y adaptable. Lo que cuenta no es el ruido, sino la presencia de dolor o de limitación funcional.",
          "ku": "Gelek kes di çena xwe de qirçekê dibihîzin û yekser zirareke giran tînin bîra xwe. Rastî aram dike: **dengên movikê yên bê êş di piraniya rewşan de bê zirar in.** Lêkolîn nîşan didin ku heta 40 % ji nifûsê dengên TMJ hene — bêyî tu hewcedariya dermankirinê. Qirç pir caran ji guherîneke normal a cihê dîskê çêdibe û ne nîşana xerabûnê ye. Bruksîzm (qirçandina diranan) jî bixweber nayê wateya zirarê: çena we movikeke xurt e û xwe diguncîne. Ya girîng ne deng e, lê hebûna êşê an sînordarbûna fonksiyonê ye.",
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
          "uk": "КМД — це набагато більше, ніж щелепа",
          "es": "La DCM es mucho más que la mandíbula",
          "ku": "TMD ji çenê gelekî zêdetir e",
        },
        body: {
          de: "Die moderne Forschung zeigt: CMD ist eine **multifaktorielle Erkrankung**. Stress, Schlafqualität, Haltung der Halswirbelsäule und sogar emotionale Belastung spielen eine zentrale Rolle. Ihr Kiefer reagiert auf Ihren gesamten Lebenskontext. Wer nachts die Zähne zusammenpresst, tut das oft nicht wegen eines « Kieferproblems », sondern weil das Nervensystem überaktiv ist. Deshalb behandeln wir bei CMD nie isoliert das Gelenk. Ein ganzheitlicher Ansatz — der Nacken, Haltung, Stressmanagement und Schlafhygiene einschließt — zeigt die besten Ergebnisse. Die Wissenschaft bestätigt: **manuelle Therapie kombiniert mit Übungen und Patientenedukation ist wirksamer als jede Einzelmaßnahme.**",
          fr: "La recherche moderne montre : la DCM est une **affection multifactorielle**. Le stress, la qualité du sommeil, la posture cervicale et même la charge émotionnelle jouent un rôle central. Votre mâchoire réagit à l'ensemble de votre contexte de vie. Ceux qui serrent les dents la nuit ne le font souvent pas à cause d'un « problème de mâchoire », mais parce que le système nerveux est suractivé. C'est pourquoi nous ne traitons jamais l'articulation de façon isolée. Une approche globale — incluant la nuque, la posture, la gestion du stress et l'hygiène du sommeil — montre les meilleurs résultats. La science confirme : **la thérapie manuelle combinée aux exercices et à l'éducation du patient est plus efficace que toute mesure isolée.**",
          en: "Modern research shows: TMD is a **multifactorial condition**. Stress, sleep quality, cervical posture and even emotional burden play a central role. Your jaw reacts to your entire life context. Those who clench their teeth at night often do so not because of a \"jaw problem\", but because the nervous system is overactive. This is why we never treat the joint in isolation. A holistic approach — including neck, posture, stress management and sleep hygiene — shows the best results. Science confirms: **manual therapy combined with exercises and patient education is more effective than any single intervention.**",
          nl: "Modern onderzoek toont: CMD is een **multifactoriële aandoening**. Stress, slaapkwaliteit, cervicale houding en zelfs emotionele belasting spelen een centrale rol. Uw kaak reageert op uw hele levenscontext. Wie 's nachts de tanden op elkaar klemt, doet dat vaak niet vanwege een « kaakprobleem », maar omdat het zenuwstelsel overactief is. Daarom behandelen wij bij CMD nooit geïsoleerd het gewricht. Een holistische aanpak — inclusief nek, houding, stressmanagement en slaaphygiëne — toont de beste resultaten.",
          tr: "Modern araştırmalar gösteriyor: CMD **çok faktörlü bir durumdur**. Stres, uyku kalitesi, servikal postür ve duygusal yük merkezi rol oynar. Çeneniz tüm yaşam bağlamınıza tepki verir. Geceleri dişlerini sıkanlar bunu genellikle bir « çene sorunu » yüzünden değil, sinir sistemi aşırı aktif olduğu için yapar. Bu nedenle CMD'de eklemi asla izole tedavi etmiyoruz.",
          ar: "يُظهر البحث الحديث أن CMD هو **حالة متعددة العوامل**. الإجهاد وجودة النوم ووضعية الرقبة وحتى العبء العاطفي يلعبون دورًا محوريًا. فكك يتفاعل مع سياق حياتك بأكمله. من يضغط على أسنانه ليلاً غالبًا لا يفعل ذلك بسبب «مشكلة في الفك»، بل لأن الجهاز العصبي مفرط النشاط. لهذا لا نعالج المفصل بمعزل أبدًا.",
          pl: "Nowoczesne badania pokazują: CMD to **schorzenie wieloczynnikowe**. Stres, jakość snu, postawa odcinka szyjnego, a nawet obciążenie emocjonalne odgrywają centralną rolę. Twoja żuchwa reaguje na cały kontekst Twojego życia. Kto w nocy zaciska zęby, robi to często nie z powodu «problemu żuchwy», lecz dlatego, że układ nerwowy jest nadmiernie aktywny. Dlatego przy CMD nigdy nie leczymy stawu w izolacji.",
          "uk": "Сучасні дослідження показують: КМД — це **багатофакторний стан**. Стрес, якість сну, положення шиї і навіть емоційне навантаження відіграють ключову роль. Ваша щелепа реагує на весь контекст Вашого життя. Ті, хто стискає зуби вночі, часто роблять це не через «проблему зі щелепою», а тому, що нервова система надмірно активована. Саме тому ми ніколи не лікуємо суглоб ізольовано. Цілісний підхід — що охоплює шию, поставу, керування стресом і гігієну сну — дає найкращі результати. Наука підтверджує: **мануальна терапія в поєднанні з вправами та навчанням пацієнта ефективніша за будь-який окремий захід.**",
          "es": "La investigación moderna lo demuestra: la DCM es una **afección multifactorial**. El estrés, la calidad del sueño, la postura cervical e incluso la carga emocional desempeñan un papel central. Su mandíbula reacciona a todo su contexto vital. Quienes aprietan los dientes por la noche a menudo no lo hacen por un «problema de mandíbula», sino porque el sistema nervioso está sobreactivado. Por eso nunca tratamos la articulación de forma aislada. Un enfoque global — que incluya la nuca, la postura, la gestión del estrés y la higiene del sueño — muestra los mejores resultados. La ciencia lo confirma: **la terapia manual combinada con ejercicios y educación del paciente es más eficaz que cualquier medida aislada.**",
          "ku": "Lêkolînên nûjen nîşan didin: TMD **rewşeke pirfaktorî** ye. Stres, kalîteya xewê, rewşa stûyê û heta barê hestyarî rolekî navendî dilîzin. Çena we li hemû çarçoveya jiyana we bertek dide. Yên ku bi şev diranên xwe dişidînin, pir caran ne ji ber «pirsgirêkeke çenê», lê ji ber ku pergala demaran zêde çalak e wisa dikin. Ji ber vê yekê em qet movikê bi tena serê wê derman nakin. Nêzîkatiyeke giştî — ku stû, rewşa laş, birêvebirina stresê û paqijiya xewê dihewîne — encamên herî baş nîşan dide. Zanist piştrast dike: **terapiya destî bi werzîş û perwerdeya nexweş re ji her tedbîreke tenê bi bandortir e.**",
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
          "uk": "Золоте правило нашої терапії СНЩС",
          "es": "La regla de oro de nuestra terapia de la ATM",
          "ku": "Qaîdeya zêrîn a terapiya me ya TMJ",
        },
        body: {
          de: "> *« Votre mâchoire a besoin de calme, pas de force — détendre, c'est déjà guérir. »*\n\nDie meisten CMD-Beschwerden verbessern sich durch **Entspannung, nicht durch Korrektur**. Ihr Kiefergelenk braucht keine « Einrenkung » und keine invasiven Eingriffe. Die internationale Forschung ist eindeutig: konservative Therapie (manuelle Techniken + Übungen + Edukation) hilft bei über 85 % der Patienten. Nur in seltenen Ausnahmen ist eine chirurgische Intervention nötig. Ihr Körper verfügt über bemerkenswerte Selbstheilungskräfte — unsere Aufgabe ist es, die richtigen Bedingungen dafür zu schaffen.",
          fr: "> *« Votre mâchoire a besoin de calme, pas de force — détendre, c'est déjà guérir. »*\n\nLa plupart des troubles de l'ATM s'améliorent par la **détente, pas par la correction**. Votre articulation n'a pas besoin d'être « remise en place » ni d'intervention invasive. La recherche internationale est claire : la thérapie conservatrice (techniques manuelles + exercices + éducation) aide plus de 85 % des patients. Ce n'est que dans de rares exceptions qu'une intervention chirurgicale est nécessaire. Votre corps dispose de remarquables capacités d'auto-guérison — notre rôle est de créer les bonnes conditions.",
          en: "> *\"Your jaw needs calm, not force — relaxing is already healing.\"*\n\nMost TMD symptoms improve through **relaxation, not correction**. Your jaw joint doesn't need \"realignment\" or invasive procedures. International research is clear: conservative therapy (manual techniques + exercises + education) helps over 85% of patients. Surgical intervention is needed only in rare exceptions. Your body has remarkable self-healing capacities — our role is to create the right conditions.",
          nl: "> *« Uw kaak heeft rust nodig, geen kracht — ontspannen is al genezen. »*\n\nDe meeste CMD-klachten verbeteren door **ontspanning, niet door correctie**. Uw kaakgewricht hoeft niet « teruggezet » te worden en heeft geen invasieve ingrepen nodig. Internationaal onderzoek is duidelijk: conservatieve therapie (manuele technieken + oefeningen + educatie) helpt bij meer dan 85% van de patiënten. Alleen in zeldzame uitzonderingen is chirurgische interventie nodig.",
          tr: "> *« Çenenizin sakinliğe ihtiyacı var, güce değil — gevşemek zaten iyileşmektir. »*\n\nÇoğu CMD şikayeti **gevşeme ile iyileşir, düzeltme ile değil**. Çene ekleminizin « yerine oturtulmasına » veya invaziv prosedürlere ihtiyacı yoktur. Uluslararası araştırmalar açıktır: konservatif tedavi (manuel teknikler + egzersizler + eğitim) hastaların %85'inden fazlasına yardımcı olur.",
          ar: "> *«فكك يحتاج إلى هدوء، لا قوة — الاسترخاء هو بداية الشفاء.»*\n\nمعظم أعراض CMD تتحسن من خلال **الاسترخاء، وليس التصحيح**. مفصل فكك لا يحتاج إلى «إعادة ضبط» أو إجراءات جراحية. البحث الدولي واضح: العلاج المحافظ (تقنيات يدوية + تمارين + تثقيف) يساعد أكثر من 85٪ من المرضى.",
          pl: "> *« Twoja żuchwa potrzebuje spokoju, nie siły — rozluźnienie to już leczenie. »*\n\nWiększość dolegliwości CMD poprawia się przez **rozluźnienie, nie korektę**. Twój staw skroniowo-żuchwowy nie potrzebuje «nastawienia» ani inwazyjnych zabiegów. Międzynarodowe badania są jednoznaczne: terapia zachowawcza (techniki manualne + ćwiczenia + edukacja) pomaga ponad 85% pacjentów.",
          "uk": "> *«Вашій щелепі потрібен спокій, а не сила — розслабитися означає вже почати одужувати».*\n\nБільшість розладів СНЩС покращуються завдяки **розслабленню, а не корекції**. Ваш суглоб не потрібно «вправляти на місце», і він не потребує інвазивного втручання. Міжнародні дослідження однозначні: консервативна терапія (мануальні техніки + вправи + навчання) допомагає понад 85 % пацієнтів. Хірургічне втручання потрібне лише в рідкісних винятках. Ваше тіло має чудові здібності до самовідновлення — наше завдання полягає в тому, щоб створити для цього правильні умови.",
          "es": "> *«Su mandíbula necesita calma, no fuerza — relajarse ya es curarse».*\n\nLa mayoría de los trastornos de la ATM mejoran con la **relajación, no con la corrección**. Su articulación no necesita ser «colocada en su sitio» ni una intervención invasiva. La investigación internacional es clara: la terapia conservadora (técnicas manuales + ejercicios + educación) ayuda a más del 85 % de los pacientes. Solo en raras excepciones es necesaria una intervención quirúrgica. Su cuerpo dispone de notables capacidades de autocuración — nuestro papel es crear las condiciones adecuadas.",
          "ku": "> *«Çena we hewceyî aramiyê ye, ne hêzê — sistbûn jixwe başbûn e.»*\n\nPiraniya aloziyên TMJ bi **sistbûnê, ne bi rastkirinê** baştir dibin. Ne hewce ye ku movika we «bikeve cihê xwe», û ne jî destwerdaneke invazîv hewce ye. Lêkolîna navneteweyî zelal e: terapiya konservatîf (teknîkên destî + werzîş + perwerde) alîkariya ji 85 % zêdetir ji nexweşan dike. Tenê di îstîsnayên kêm de destwerdaneke cerahî pêwîst e. Laşê we xwedî şiyanên balkêş ên xwe-başkirinê ye — rola me ew e ku şert û mercên rast biafirînin.",
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
          "uk": "3 корисні дії при напрузі в щелепі",
          "es": "3 reflejos en caso de tensión en la mandíbula",
          "ku": "3 adet ji bo girjbûna çenê",
        },
        body: {
          de: "**1. Position de repos linguistique** — Legen Sie Ihre Zungenspitze leicht hinter die oberen Schneidezähne, Lippen geschlossen, Zähne leicht getrennt. Diese « Ruheposition » entspannt die gesamte Kaumuskulatur und kann hundertmal am Tag angewendet werden.\n\n**2. Nacken-Kiefer-Verbindung pflegen** — Sanfte Nackenmobilisationen (Drehung, Seitneigung) entlasten den Kiefer mit. Studien zeigen: die Halswirbelsäule und das Kiefergelenk teilen sich neuronale Bahnen. Wer den Nacken entspannt, entspannt den Kiefer.\n\n**3. Stressventil einbauen** — Bewusste Atemübungen (4 Sek. ein, 6 Sek. aus) vor dem Schlafengehen reduzieren nächtliches Zähneknirschen nachweislich. Ihr Nervensystem braucht ein Signal zum Herunterfahren.",
          fr: "**1. Position de repos linguale** — Placez le bout de votre langue légèrement derrière les incisives supérieures, lèvres fermées, dents légèrement séparées. Cette « position de repos » détend toute la musculature masticatrice et peut être pratiquée cent fois par jour.\n\n**2. Soigner le lien nuque-mâchoire** — De douces mobilisations cervicales (rotation, inclinaison) soulagent aussi la mâchoire. Les études montrent que le rachis cervical et l'ATM partagent des voies neuronales. Détendre la nuque, c'est détendre la mâchoire.\n\n**3. Installer une soupape anti-stress** — Des exercices respiratoires conscients (4 sec. inspiration, 6 sec. expiration) avant le coucher réduisent le bruxisme nocturne de façon prouvée. Votre système nerveux a besoin d'un signal pour se calmer.",
          en: "**1. Tongue rest position** — Place your tongue tip lightly behind the upper front teeth, lips closed, teeth slightly apart. This \"rest position\" relaxes the entire chewing musculature and can be practised hundreds of times a day.\n\n**2. Care for the neck-jaw connection** — Gentle neck mobilisations (rotation, side bending) also relieve the jaw. Studies show the cervical spine and TMJ share neural pathways. Relaxing the neck relaxes the jaw.\n\n**3. Build in a stress valve** — Conscious breathing exercises (4 sec in, 6 sec out) before bed demonstrably reduce nocturnal teeth grinding. Your nervous system needs a signal to wind down.",
          nl: "**1. Tongrust positie** — Leg uw tongpunt licht achter de bovenste snijtanden, lippen gesloten, tanden licht van elkaar. Deze « rustpositie » ontspant de hele kauwmusculatuur en kan honderd keer per dag worden toegepast.\n\n**2. Nek-kaakverbinding verzorgen** — Zachte nekmobilisaties (rotatie, zijbuiging) ontlasten ook de kaak. Studies tonen: de cervicale wervelkolom en het kaakgewricht delen neurale banen. Nek ontspannen = kaak ontspannen.\n\n**3. Stressventiel inbouwen** — Bewuste ademhalingsoefeningen (4 sec in, 6 sec uit) voor het slapen verminderen aantoonbaar nachtelijk tandenknarsen.",
          tr: "**1. Dil dinlenme pozisyonu** — Dil ucunuzu hafifçe üst ön dişlerin arkasına koyun, dudaklar kapalı, dişler hafif ayrık. Bu «dinlenme pozisyonu» tüm çiğneme kaslarını gevşetir ve günde yüzlerce kez uygulanabilir.\n\n**2. Boyun-çene bağlantısına bakın** — Nazik boyun mobilizasyonları (rotasyon, lateral eğilme) çeneyi de rahatlatır. Çalışmalar, servikal omurga ve çene ekleminin sinir yollarını paylaştığını göstermektedir.\n\n**3. Stres vanası kurun** — Yatmadan önce bilinçli nefes egzersizleri (4 sn giriş, 6 sn çıkış) gece diş gıcırdatmasını kanıtlanmış şekilde azaltır.",
          ar: "**1. وضع راحة اللسان** — ضع طرف لسانك خلف الأسنان الأمامية العلوية بلطف، الشفاه مغلقة، الأسنان متباعدة قليلاً. هذا «وضع الراحة» يريح جميع عضلات المضغ ويمكن ممارسته مئات المرات يوميًا.\n\n**2. اعتنِ بالرابط بين الرقبة والفك** — التعبئة اللطيفة للرقبة (دوران، إمالة جانبية) تريح الفك أيضًا. تظهر الدراسات أن العمود الفقري العنقي ومفصل الفك يشتركان في مسارات عصبية.\n\n**3. ثبّت صمام أمان ضد الإجهاد** — تمارين التنفس الواعي (4 ثوانٍ شهيق، 6 ثوانٍ زفير) قبل النوم تقلل من صرير الأسنان الليلي بشكل مثبت.",
          pl: "**1. Pozycja spoczynkowa języka** — Umieść czubek języka lekko za górnymi siekaczami, usta zamknięte, zęby lekko rozdzielone. Ta «pozycja spoczynkowa» rozluźnia całą muskulaturę żucia i może być stosowana setki razy dziennie.\n\n**2. Dbaj o połączenie kark-żuchwa** — Delikatne mobilizacje karku (rotacja, przechył boczny) odciążają też żuchwę. Badania pokazują, że kręgosłup szyjny i staw żuchwowy dzielą szlaki nerwowe.\n\n**3. Wbuduj zawór antystresowy** — Świadome ćwiczenia oddechowe (4 sek wdech, 6 sek wydech) przed snem udowodnione zmniejszają nocne zgrzytanie zębami.",
          "uk": "**1. Положення спокою язика** — Розташуйте кінчик язика легенько позаду верхніх різців, губи зімкнуті, зуби трохи розведені. Це «положення спокою» розслабляє всі жувальні м'язи, і його можна практикувати сотню разів на день.\n\n**2. Подбайте про зв'язок шия–щелепа** — М'які мобілізації шиї (повороти, нахили) полегшують і щелепу. Дослідження показують, що шийний відділ хребта і СНЩС мають спільні нервові шляхи. Розслабити шию означає розслабити щелепу.\n\n**3. Встановіть антистресовий клапан** — Свідомі дихальні вправи (4 с вдих, 6 с видих) перед сном доведено зменшують нічний бруксизм. Вашій нервовій системі потрібен сигнал, щоб заспокоїтися.",
          "es": "**1. Posición de reposo lingual** — Coloque la punta de la lengua ligeramente detrás de los incisivos superiores, con los labios cerrados y los dientes ligeramente separados. Esta «posición de reposo» relaja toda la musculatura masticatoria y puede practicarse cien veces al día.\n\n**2. Cuidar la conexión nuca-mandíbula** — Movilizaciones cervicales suaves (rotación, inclinación) también alivian la mandíbula. Los estudios muestran que la columna cervical y la ATM comparten vías neuronales. Relajar la nuca es relajar la mandíbula.\n\n**3. Instalar una válvula antiestrés** — Ejercicios de respiración consciente (4 s de inspiración, 6 s de espiración) antes de acostarse reducen de forma demostrada el bruxismo nocturno. Su sistema nervioso necesita una señal para calmarse.",
          "ku": "**1. Rewşa bêhnvedanê ya ziman** — Serê zimanê xwe bi sivikî li pişt diranên pêşiyê yên jorîn deynin, lêv girtî, diran hinekî ji hev dûr. Ev «rewşa bêhnvedanê» hemû masûlkeyên cûtinê sist dike û dikare rojê sed caran were kirin.\n\n**2. Li girêdana stû û çenê xwedî derkevin** — Mobîlîzasyonên nerm ên stûyê (zivirandin, xwarkirina li alî) çenê jî rehet dikin. Lêkolîn nîşan didin ku stûna stûyê û TMJ rêyên demarî yên hevpar parve dikin. Sistkirina stûyê sistkirina çenê ye.\n\n**3. Valfeke dijî-stresê saz bikin** — Werzîşên nefesê yên hişmendane (4 çirk hilmijandin, 6 çirk berdan) berî razanê bi awayekî îspatkirî qirçandina diranan a şevê kêm dikin. Pergala demarên we hewceyî îşaretekê ye da ku aram bibe.",
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
          "uk": "Коли варто звернутися до фахівця?",
          "es": "¿Cuándo hay que consultar?",
          "ku": "Kengê divê hûn serî li pispor bidin?",
        },
        body: {
          de: "Kiefergelenkgeräusche allein sind **kein Grund zur Sorge**. Konsultieren Sie eine spezialisierte Therapeutin, wenn: **Schmerzen beim Kauen** länger als 2 Wochen anhalten, **Mundöffnung eingeschränkt** ist (weniger als 3 Finger breit), **Kopfschmerzen oder Ohrenschmerzen** regelmäßig auftreten und Ihr Arzt keine andere Ursache findet, oder **Kiefer sich nicht mehr normal öffnen** lässt. Je früher die Behandlung beginnt, desto schneller reagiert Ihr System. In Eupen bietet Fabienne Dormann kurzfristige Termine für Kiefergelenk-Problematiken an — auch ohne ärztliche Überweisung.",
          fr: "Les bruits articulaires seuls ne sont **pas un motif d'inquiétude**. Consultez une thérapeute spécialisée si : **des douleurs en mangeant** persistent plus de 2 semaines, **l'ouverture buccale est limitée** (moins de 3 doigts de large), **des maux de tête ou douleurs d'oreille** surviennent régulièrement sans autre cause identifiée par votre médecin, ou **la mâchoire se verrouille** et ne s'ouvre plus normalement. Plus le traitement commence tôt, plus votre système répond rapidement. À Eupen, Fabienne Dormann propose des rendez-vous rapides pour les problématiques ATM — même sans ordonnance médicale.",
          en: "Joint sounds alone are **no cause for concern**. Consult a specialist therapist if: **pain when chewing** persists for more than 2 weeks, **mouth opening is limited** (less than 3 fingers wide), **headaches or ear pain** occur regularly and your doctor finds no other cause, or **the jaw locks** and no longer opens normally. The earlier treatment begins, the faster your system responds. In Eupen, Fabienne Dormann offers short-notice appointments for TMJ issues — even without a medical referral.",
          nl: "Gewrichtsgeluiden alleen zijn **geen reden tot bezorgdheid**. Raadpleeg een gespecialiseerde therapeute als: **pijn bij kauwen** langer dan 2 weken aanhoudt, **mondopening beperkt** is (minder dan 3 vingers breed), **hoofdpijn of oorpijn** regelmatig optreedt en uw arts geen andere oorzaak vindt, of **de kaak blokkeert** en niet meer normaal opent. Hoe eerder de behandeling begint, hoe sneller uw systeem reageert. In Eupen biedt Fabienne Dormann snelle afspraken voor kaakgewrichtsproblemen.",
          tr: "Eklem sesleri tek başına **endişe nedeni değildir**. Uzman bir terapiste danışın: **çiğnerken ağrı** 2 haftadan uzun sürerse, **ağız açıklığı kısıtlıysa** (3 parmak genişliğinden az), **baş ağrısı veya kulak ağrısı** düzenli olarak ortaya çıkıyor ve doktorunuz başka bir neden bulamıyorsa, veya **çene kilitleniyorsa** ve artık normal açılmıyorsa. Eupen'de Fabienne Dormann çene eklemi sorunları için kısa vadeli randevular sunuyor.",
          ar: "أصوات المفصل وحدها **ليست سببًا للقلق**. استشر معالجة متخصصة إذا: **استمر الألم عند المضغ** لأكثر من أسبوعين، **كان فتح الفم محدودًا** (أقل من 3 أصابع عرضًا)، **الصداع أو ألم الأذن** يحدث بانتظام ولم يجد طبيبك سببًا آخر، أو **الفك ينغلق** ولا يفتح بشكل طبيعي. في Eupen، تقدم فابيان دورمان مواعيد سريعة لمشاكل مفصل الفك.",
          pl: "Odgłosy stawowe same w sobie **nie są powodem do niepokoju**. Skonsultuj się ze specjalistką, jeśli: **ból przy żuciu** utrzymuje się dłużej niż 2 tygodnie, **otwarcie ust jest ograniczone** (mniej niż 3 palce szerokości), **bóle głowy lub ucha** występują regularnie bez innej przyczyny, lub **żuchwa się blokuje** i nie otwiera normalnie. W Eupen Fabienne Dormann oferuje szybkie terminy dla problemów stawu żuchwowego.",
          "uk": "Самі по собі звуки в суглобі **не є приводом для занепокоєння**. Зверніться до спеціалізованої терапевтки, якщо: **біль під час їжі** триває понад 2 тижні, **відкривання рота обмежене** (менше ніж на ширину 3 пальців), **головний біль або біль у вусі** виникають регулярно без іншої причини, встановленої Вашим лікарем, або **щелепа блокується** й більше не відкривається нормально. Що раніше починається лікування, то швидше реагує Ваша система. В Ойпені Fabienne Dormann пропонує швидкий запис на прийом із проблемами СНЩС — навіть без лікарського направлення.",
          "es": "Los ruidos articulares por sí solos **no son motivo de preocupación**. Consulte a una terapeuta especializada si: **el dolor al comer** persiste más de 2 semanas, **la apertura de la boca está limitada** (menos de 3 dedos de ancho), aparecen con regularidad **dolores de cabeza o de oído** sin otra causa identificada por su médico, o **la mandíbula se bloquea** y ya no se abre con normalidad. Cuanto antes empiece el tratamiento, más rápido responde su sistema. En Eupen, Fabienne Dormann ofrece citas rápidas para los problemas de ATM — incluso sin prescripción médica.",
          "ku": "Dengên movikê bi tena serê xwe **ne sedema fikarê ne**. Serî li terapîsteke pispor bidin eger: **êşa dema xwarinê** ji 2 hefteyan zêdetir berdewam bike, **vekirina devê sînordar be** (ji firehiya 3 tiliyan kêmtir), **serêş an êşa guh** bi rêkûpêk çêbibin bêyî ku bijîjkê we sedemeke din bibîne, an **çena we qefl bibe** û êdî bi awayekî normal venebe. Çiqas dermankirin zûtir dest pê bike, pergala we ewqas zûtir bersiv dide. Li Eupenê, Fabienne Dormann ji bo pirsgirêkên TMJ randevûyên bilez pêşkêş dike — heta bêyî recêteya bijîjkî.",
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
          "uk": "У кабінеті Praxis Loten в Ойпені: терапія СНЩС",
          "es": "En la consulta Praxis Loten de Eupen: terapia de la ATM",
          "ku": "Li kabîneya Praxis Loten li Eupenê: terapiya TMJ",
        },
        body: {
          de: "**1. Umfassende Befunderhebung** — Fabienne Dormann untersucht nicht nur Ihren Kiefer, sondern auch Nacken, Haltung und Stressfaktoren. Jede CMD ist individuell — Ihr Behandlungsplan auch.\n\n**2. Intra- und extraorale Techniken** — Sanfte manuelle Techniken an der Kaumuskulatur (von innen und außen), Mobilisation des Kiefergelenks und Weichteiltechniken lösen Spannungen ohne Kraft.\n\n**3. Übungen und Selbstmanagement** — Sie erlernen die Zungenruheposition, Entspannungsstrategien und gezielte Heimübungen, die Sie im Alltag einsetzen können.\n\n**4. Interdisziplinäre Zusammenarbeit** — In Abstimmung mit Ihrem Zahnarzt (Aufbissschiene), HNO-Arzt oder Psychologen bieten wir eine ganzheitliche Versorgung, die alle Faktoren berücksichtigt.",
          fr: "**1. Bilan complet** — Fabienne Dormann examine non seulement votre mâchoire, mais aussi la nuque, la posture et les facteurs de stress. Chaque DCM est individuelle — votre plan de traitement aussi.\n\n**2. Techniques intra- et extra-orales** — Des techniques manuelles douces sur la musculature masticatrice (par l'intérieur et l'extérieur), la mobilisation de l'ATM et des techniques des tissus mous libèrent les tensions sans force.\n\n**3. Exercices et autogestion** — Vous apprenez la position linguale de repos, des stratégies de relaxation et des exercices ciblés à faire chez vous au quotidien.\n\n**4. Collaboration interdisciplinaire** — En coordination avec votre dentiste (gouttière occlusale), ORL ou psychologue, nous offrons une prise en charge globale qui tient compte de tous les facteurs.",
          en: "**1. Comprehensive assessment** — Fabienne Dormann examines not just your jaw, but also your neck, posture and stress factors. Every TMD is individual — your treatment plan is too.\n\n**2. Intra- and extra-oral techniques** — Gentle manual techniques on the chewing muscles (from inside and outside), TMJ mobilisation and soft tissue techniques release tension without force.\n\n**3. Exercises and self-management** — You learn the tongue rest position, relaxation strategies and targeted home exercises you can use in daily life.\n\n**4. Interdisciplinary collaboration** — In coordination with your dentist (occlusal splint), ENT or psychologist, we offer holistic care that considers all factors.",
          nl: "**1. Uitgebreide beoordeling** — Fabienne Dormann onderzoekt niet alleen uw kaak, maar ook nek, houding en stressfactoren. Elke CMD is individueel — uw behandelplan ook.\n\n**2. Intra- en extra-orale technieken** — Zachte manuele technieken op de kauwmusculatuur (van binnen en buiten), mobilisatie van het kaakgewricht en weefseltechnieken lossen spanning op zonder kracht.\n\n**3. Oefeningen en zelfmanagement** — U leert de tongrust positie, ontspanningsstrategieën en gerichte thuisoefeningen die u dagelijks kunt gebruiken.\n\n**4. Interdisciplinaire samenwerking** — In afstemming met uw tandarts (opbeetplaat), KNO-arts of psycholoog bieden wij holistische zorg die alle factoren meeweegt.",
          tr: "**1. Kapsamlı değerlendirme** — Fabienne Dormann sadece çenenizi değil, aynı zamanda boyun, postür ve stres faktörlerini de inceler. Her CMD bireyseldir — tedavi planınız da öyle.\n\n**2. İntra ve ekstraoral teknikler** — Çiğneme kasları üzerinde nazik manuel teknikler (içten ve dıştan), çene eklemi mobilizasyonu ve yumuşak doku teknikleri gerginliği kuvvetsiz çözer.\n\n**3. Egzersizler ve öz-yönetim** — Dil dinlenme pozisyonunu, gevşeme stratejilerini ve günlük yaşamda kullanabileceğiniz hedefli ev egzersizlerini öğrenirsiniz.\n\n**4. Disiplinler arası işbirliği** — Diş hekiminiz (oklüzal atel), KBB uzmanı veya psikologla koordineli olarak tüm faktörleri dikkate alan bütünsel bakım sunuyoruz.",
          ar: "**1. تقييم شامل** — تفحص فابيان دورمان ليس فقط فكك، بل أيضًا الرقبة والوضعية وعوامل الإجهاد. كل CMD فردي — خطة علاجك أيضًا.\n\n**2. تقنيات داخل وخارج الفم** — تقنيات يدوية لطيفة على عضلات المضغ (من الداخل والخارج)، تعبئة مفصل الفك وتقنيات الأنسجة الرخوة تحرر التوتر بدون قوة.\n\n**3. تمارين وإدارة ذاتية** — تتعلم وضع راحة اللسان واستراتيجيات الاسترخاء وتمارين منزلية مستهدفة يمكنك استخدامها يوميًا.\n\n**4. تعاون متعدد التخصصات** — بالتنسيق مع طبيب أسنانك (جبيرة إطباقية)، أخصائي الأنف والأذن أو الأخصائي النفسي، نقدم رعاية شاملة تراعي جميع العوامل.",
          pl: "**1. Kompleksowa ocena** — Fabienne Dormann bada nie tylko żuchwę, ale też kark, postawę i czynniki stresowe. Każdy CMD jest indywidualny — Twój plan leczenia też.\n\n**2. Techniki wewnątrz- i zewnątrzustne** — Delikatne techniki manualne na muskulaturze żucia (od wewnątrz i zewnątrz), mobilizacja stawu żuchwowego i techniki tkanek miękkich uwalniają napięcie bez siły.\n\n**3. Ćwiczenia i samodzielne zarządzanie** — Uczysz się pozycji spoczynkowej języka, strategii relaksacji i celowanych ćwiczeń domowych do codziennego stosowania.\n\n**4. Współpraca interdyscyplinarna** — W koordynacji z Twoim dentystą (szyna okluzyjna), laryngologiem lub psychologiem oferujemy holistyczną opiekę uwzględniającą wszystkie czynniki.",
          "uk": "**1. Комплексне обстеження** — Fabienne Dormann оглядає не лише Вашу щелепу, а й шию, поставу та чинники стресу. Кожна КМД індивідуальна — і Ваш план лікування теж.\n\n**2. Внутрішньо- та позаротові техніки** — М'які мануальні техніки на жувальних м'язах (зсередини та ззовні), мобілізація СНЩС і техніки для м'яких тканин знімають напругу без застосування сили.\n\n**3. Вправи та самодопомога** — Ви опануєте положення спокою язика, стратегії розслаблення та цілеспрямовані вправи, які можна щодня виконувати вдома.\n\n**4. Міждисциплінарна співпраця** — У координації з Вашим стоматологом (оклюзійна шина), ЛОР-лікарем чи психологом ми пропонуємо цілісний супровід, що враховує всі чинники.",
          "es": "**1. Valoración completa** — Fabienne Dormann examina no solo su mandíbula, sino también la nuca, la postura y los factores de estrés. Cada DCM es individual — su plan de tratamiento también.\n\n**2. Técnicas intra y extraorales** — Técnicas manuales suaves sobre la musculatura masticatoria (por dentro y por fuera), la movilización de la ATM y técnicas de tejidos blandos liberan las tensiones sin fuerza.\n\n**3. Ejercicios y autogestión** — Usted aprende la posición de reposo lingual, estrategias de relajación y ejercicios específicos para hacer en casa a diario.\n\n**4. Colaboración interdisciplinar** — En coordinación con su dentista (férula oclusal), otorrinolaringólogo o psicólogo, ofrecemos una atención global que tiene en cuenta todos los factores.",
          "ku": "**1. Nirxandineke berfireh** — Fabienne Dormann ne tenê çena we, lê stû, rewşa laş û faktorên stresê jî kontrol dike. Her TMD kesane ye — plana dermankirina we jî.\n\n**2. Teknîkên hundirê dev û derveyî dev** — Teknîkên destî yên nerm li ser masûlkeyên cûtinê (ji hundir û ji derve), mobîlîzasyona TMJ û teknîkên tevnên nerm girjbûnê bê hêz vedikin.\n\n**3. Werzîş û xwe-birêvebirin** — Hûn rewşa bêhnvedanê ya ziman, stratejiyên sistbûnê û werzîşên armancdar ên ku rojane li malê bikin fêr dibin.\n\n**4. Hevkariya navdîsîplînî** — Bi hevahengiya bi diransazê we (plaka oklûzal), bijîjkê guh, poz û qirikê an psîkologê we re, em lênihêrîneke giştî pêşkêş dikin ku hemû faktoran li ber çav digire.",
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
      "uk": [
        "Клацання без болю зазвичай нешкідливе",
        "КМД багатофакторна: стрес, сон і шия відіграють роль",
        "Консервативна терапія допомагає в понад 85 % випадків",
        "Положення спокою язика та дихальні вправи як швидка допомога",
        "Спеціалізована терапія СНЩС із Fabienne Dormann в Ойпені"
      ],
      "es": [
        "El crujido sin dolor suele ser inofensivo",
        "La DCM es multifactorial: el estrés, el sueño y la nuca influyen",
        "La terapia conservadora ayuda en más del 85 % de los casos",
        "Posición de reposo lingual y ejercicios respiratorios como ayuda inmediata",
        "Terapia especializada de la ATM con Fabienne Dormann en Eupen"
      ],
      "ku": [
        "Qirça bê êş bi gelemperî bê zirar e",
        "TMD pirfaktorî ye: stres, xew û stû rol dilîzin",
        "Terapiya konservatîf di ji 85 % zêdetir rewşan de dibe alîkar",
        "Rewşa bêhnvedanê ya ziman û werzîşên nefesê wek alîkariya yekser",
        "Terapiya TMJ ya pispor bi Fabienne Dormann re li Eupenê"
      ],
    },
    ctaText: {
      de: "Kieferschmerzen, Kopfschmerzen oder Zähneknirschen? Vereinbaren Sie einen Termin bei Fabienne Dormann in Eupen.",
      fr: "Douleurs à la mâchoire, maux de tête ou bruxisme ? Prenez rendez-vous avec Fabienne Dormann à Eupen.",
      en: "Jaw pain, headaches or teeth grinding? Book an appointment with Fabienne Dormann in Eupen.",
      nl: "Kaakpijn, hoofdpijn of tandenknarsen? Maak een afspraak bij Fabienne Dormann in Eupen.",
      tr: "Çene ağrısı, baş ağrısı veya diş gıcırdatması mı? Eupen'de Fabienne Dormann ile randevu alın.",
      ar: "ألم الفك أو الصداع أو صرير الأسنان؟ احجز موعدًا مع فابيان دورمان في Eupen.",
      pl: "Ból żuchwy, bóle głowy lub zgrzytanie zębami? Zarezerwuj wizytę u Fabienne Dormann w Eupen.",
      "uk": "Біль у щелепі, головний біль чи бруксизм? Запишіться на прийом до Fabienne Dormann в Ойпені.",
      "es": "¿Dolor de mandíbula, dolores de cabeza o bruxismo? Pida cita con Fabienne Dormann en Eupen.",
      "ku": "Êşa çenê, serêş an qirçandina diranan? Bi Fabienne Dormann re li Eupenê randevûyekê bigirin.",
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
      "uk": "Ця стаття має суто інформаційний характер і не замінює індивідуальної консультації з кваліфікованою терапевткою. У разі стійких симптомів зверніться до свого терапевта або лікаря.",
      "es": "Este artículo tiene una finalidad exclusivamente informativa y no sustituye una consulta individual con una terapeuta cualificada. En caso de síntomas persistentes, consulte a su terapeuta o a su médico.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye û şûna şêwirmendiyeke kesane bi terapîsteke jêhatî re nagire. Di rewşa nîşanên domdar de, serî li terapîstê xwe an bijîjkê xwe bidin.",
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
      "uk": "Остеопатія і фізіотерапія — два шляхи, одна мета",
      "es": "Osteopatía y fisioterapia: dos caminos, un mismo objetivo",
      "ku": "Osteopatî û fizyoterapî — du rê, yek armanc",
    },
    category: {
      de: "Osteopathie", fr: "Ostéopathie", en: "Osteopathy",
      nl: "Osteopathie", tr: "Osteopati", ar: "العلاج اليدوي", pl: "Osteopatia",
      "uk": "Остеопатія",
      "es": "Osteopatía",
      "ku": "Osteopatî",
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
      "uk": "«Мені йти до остеопата чи до фізіотерапевта?» Це питання ми чуємо кілька разів на тиждень у Praxis Loten в Ойпені. Чесна відповідь: сьогодні межа між цими двома дисциплінами розмита. Багато терапевтів — зокрема Félix Esser і Loïc Meunier — мають підготовку в обох. Важить не назва, а якість обстеження та доказовість, що стоїть за лікуванням.",
      "es": "«¿Debo ir al osteópata o al fisioterapeuta?» Escuchamos esta pregunta varias veces por semana en Praxis Loten, en Eupen. La respuesta sincera: hoy en día, la frontera entre ambas disciplinas es difusa. Muchos terapeutas, entre ellos Félix Esser y Loïc Meunier, están formados en las dos. Lo que importa no es la etiqueta, sino la calidad de la evaluación y la evidencia que respalda el tratamiento.",
      "ku": "“Ez herim cem osteopat an fizyoterapîst?” Em vê pirsê hefteyê çend caran li Praxis Loten a li Eupenê dibihîzin. Bersiva dilsoz: îro sînorê di navbera van herdu dîsîplînan de ne zelal e. Gelek terapîst — di nav wan de Félix Esser û Loïc Meunier — di herduyan de jî perwerde bûne. Ya girîng ne etîket e, lê qalîteya nirxandinê û delîlên li pişt dermankirinê ne.",
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
          "uk": "Міф: два окремі світи",
          "es": "Mito: dos mundos separados",
          "ku": "Efsane: du cîhanên ji hev cuda",
        },
        body: {
          de: "Viele glauben, Physiotherapie sei « nur Übungen » und Osteopathie « nur Knacken ». Beides ist falsch. Moderne Physiotherapie umfasst manuelle Techniken, und moderne Osteopathie integriert aktive Übungen. Die beiden Disziplinen haben sich in den letzten 20 Jahren stark angenähert. Was sie verbindet: beide arbeiten mit den Händen, beide zielen auf Funktionsverbesserung, beide sollten evidenzbasiert arbeiten. Was sie historisch unterscheidet: Physiotherapie wurde im medizinischen System geboren (Reha, Neurologie, Sport), Osteopathie in einer ganzheitlicheren Philosophie (Körper als Einheit, Selbstregulation). In der Praxis 2024? Ein guter Therapeut nutzt die besten Werkzeuge beider Welten.",
          fr: "Beaucoup croient que la kinésithérapie c'est « juste des exercices » et l'ostéopathie « juste craquer ». Les deux sont faux. La kinésithérapie moderne inclut des techniques manuelles, et l'ostéopathie moderne intègre des exercices actifs. Les deux disciplines se sont considérablement rapprochées ces 20 dernières années. Ce qui les unit : toutes deux travaillent avec les mains, visent l'amélioration fonctionnelle, et devraient s'appuyer sur les preuves. Ce qui les distingue historiquement : la kinésithérapie est née dans le système médical (réhabilitation, neurologie, sport), l'ostéopathie dans une philosophie plus globale (le corps comme unité, autorégulation). En pratique en 2024 ? Un bon thérapeute utilise les meilleurs outils des deux mondes.",
          en: "Many believe physiotherapy is \"just exercises\" and osteopathy is \"just cracking\". Both are wrong. Modern physiotherapy includes manual techniques, and modern osteopathy integrates active exercises. The two disciplines have converged significantly over the last 20 years. What unites them: both work with hands, both aim for functional improvement, both should be evidence-based. What historically distinguishes them: physiotherapy was born in the medical system (rehabilitation, neurology, sport), osteopathy in a more holistic philosophy (body as unit, self-regulation). In practice in 2024? A good therapist uses the best tools from both worlds.",
          nl: "Velen geloven dat fysiotherapie « alleen oefeningen » is en osteopathie « alleen kraken ». Beide zijn onjuist. Moderne fysiotherapie omvat manuele technieken, en moderne osteopathie integreert actieve oefeningen. De twee disciplines zijn de afgelopen 20 jaar sterk naar elkaar toegegroeid. Wat ze verbindt: beide werken met handen, beide richten zich op functionele verbetering. Wat ze historisch onderscheidt: fysiotherapie ontstond in het medisch systeem, osteopathie in een meer holistische filosofie. In de praktijk in 2024? Een goede therapeut gebruikt het beste van beide werelden.",
          tr: "Birçok kişi fizyoterapinin «sadece egzersiz» ve osteopatinin «sadece çıtlatma» olduğuna inanır. İkisi de yanlıştır. Modern fizyoterapi manuel teknikleri içerir ve modern osteopati aktif egzersizleri entegre eder. İki disiplin son 20 yılda önemli ölçüde yakınlaşmıştır. Onları birleştiren: ikisi de ellerle çalışır, ikisi de fonksiyonel iyileşmeyi hedefler. Pratikte 2024'te? İyi bir terapist her iki dünyanın en iyi araçlarını kullanır.",
          ar: "يعتقد كثيرون أن العلاج الطبيعي «مجرد تمارين» والعلاج اليدوي «مجرد طقطقة». كلاهما خاطئ. العلاج الطبيعي الحديث يشمل تقنيات يدوية، والعلاج اليدوي الحديث يدمج تمارين نشطة. التخصصان تقاربا بشكل كبير خلال الـ20 سنة الماضية. ما يوحدهما: كلاهما يعمل باليدين ويهدف للتحسين الوظيفي. ما يميزهما تاريخيًا: العلاج الطبيعي وُلد في النظام الطبي، والعلاج اليدوي في فلسفة أكثر شمولية. في الممارسة عام 2024؟ المعالج الجيد يستخدم أفضل أدوات العالمين.",
          pl: "Wielu wierzy, że fizjoterapia to «tylko ćwiczenia», a osteopatia to «tylko trzaskanie». Oba poglądy są błędne. Nowoczesna fizjoterapia obejmuje techniki manualne, a nowoczesna osteopatia integruje aktywne ćwiczenia. Obie dyscypliny znacząco zbliżyły się w ciągu ostatnich 20 lat. Co je łączy: obie pracują rękami, obie dążą do poprawy funkcji. Co je historycznie odróżnia: fizjoterapia narodziła się w systemie medycznym, osteopatia w bardziej holistycznej filozofii. W praktyce 2024? Dobry terapeuta korzysta z najlepszych narzędzi obu światów.",
          "uk": "Багато хто вважає, що фізіотерапія — це «лише вправи», а остеопатія — «лише хрускіт». Обидва уявлення хибні. Сучасна фізіотерапія включає мануальні техніки, а сучасна остеопатія поєднується з активними вправами. За останні 20 років ці дві дисципліни значно зблизилися. Що їх об'єднує: обидві працюють руками, мають на меті покращення функції й мають спиратися на докази. Що їх історично розрізняє: фізіотерапія виникла в межах медичної системи (реабілітація, неврологія, спорт), остеопатія — у більш цілісній філософії (тіло як єдине ціле, саморегуляція). А на практиці у 2024 році? Добрий терапевт використовує найкращі інструменти обох світів.",
          "es": "Muchos creen que la fisioterapia es «solo ejercicios» y la osteopatía «solo hacer crujir». Ambas ideas son falsas. La fisioterapia moderna incluye técnicas manuales, y la osteopatía moderna integra ejercicios activos. Las dos disciplinas se han acercado considerablemente en los últimos 20 años. Lo que las une: ambas trabajan con las manos, buscan la mejora funcional y deberían apoyarse en la evidencia. Lo que las distingue históricamente: la fisioterapia nació dentro del sistema médico (rehabilitación, neurología, deporte); la osteopatía, en una filosofía más global (el cuerpo como unidad, autorregulación). ¿En la práctica, en 2024? Un buen terapeuta utiliza las mejores herramientas de ambos mundos.",
          "ku": "Gelek kes difikirin ku fizyoterapî “tenê tetbîqat” e û osteopatî “tenê şikandina movikan” e. Herdu jî şaş in. Fizyoterapiya nûjen teknîkên destî dihewîne, û osteopatiya nûjen tetbîqatên çalak tê de bi cih dike. Herdu dîsîplîn di van 20 salên dawî de pir nêzî hev bûne. Tiştê ku wan dike yek: herdu jî bi destan dixebitin, armanca wan baştirkirina fonksiyonê ye, û divê herdu jî li ser delîlan bin. Tiştê ku ji hêla dîrokî ve wan ji hev cuda dike: fizyoterapî di nav pergala bijîjkî de çêbû (rehabîlîtasyon, nörolojî, werzîş), osteopatî di felsefeyeke giştîtir de (laş wekî yekîtiyek, xwe-rêkxistin). Di pratîkê de di 2024an de? Terapîstekî baş amûrên herî baş ên herdu cîhanan bi kar tîne.",
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
          "uk": "Що насправді каже наука?",
          "es": "¿Qué dice realmente la ciencia?",
          "ku": "Zanist bi rastî çi dibêje?",
        },
        body: {
          de: "Die Evidenz zeigt: **manuelle Techniken** (Mobilisationen, Manipulationen, Weichteiltechniken) sind wirksam bei muskuloskelettalen Beschwerden — unabhängig davon, ob sie von einem Physiotherapeuten oder Osteopathen durchgeführt werden. Entscheidend ist die **Kombination** mit aktiver Übung und Patientenedukation. Meta-Analysen (Rubinstein 2019, Coulter 2018) belegen moderate Evidenz für manuelle Therapie bei Rückenschmerzen, Nackenschmerzen und bestimmten Kopfschmerzformen. Was keinen Unterschied macht: der Name auf dem Praxisschild. Was einen Unterschied macht: ob der Therapeut seine Techniken in ein **globales Behandlungskonzept** einbettet — mit klarem Ziel, messbaren Fortschritten und aktiver Mitarbeit des Patienten.",
          fr: "L'évidence montre : les **techniques manuelles** (mobilisations, manipulations, techniques des tissus mous) sont efficaces pour les troubles musculosquelettiques — peu importe qu'elles soient réalisées par un kinésithérapeute ou un ostéopathe. Ce qui est décisif, c'est la **combinaison** avec l'exercice actif et l'éducation du patient. Les méta-analyses (Rubinstein 2019, Coulter 2018) montrent une évidence modérée pour la thérapie manuelle dans les douleurs lombaires, cervicales et certaines céphalées. Ce qui ne fait pas de différence : le nom sur la plaque. Ce qui fait la différence : le thérapeute intègre-t-il ses techniques dans un **concept de traitement global** — avec un objectif clair, des progrès mesurables et la participation active du patient.",
          en: "Evidence shows: **manual techniques** (mobilisations, manipulations, soft tissue techniques) are effective for musculoskeletal complaints — regardless of whether performed by a physiotherapist or osteopath. What matters is the **combination** with active exercise and patient education. Meta-analyses (Rubinstein 2019, Coulter 2018) demonstrate moderate evidence for manual therapy in back pain, neck pain and certain headache types. What makes no difference: the name on the door. What makes a difference: whether the therapist integrates techniques into a **comprehensive treatment concept** — with clear goals, measurable progress and active patient participation.",
          nl: "Het bewijs toont: **manuele technieken** (mobilisaties, manipulaties, weke-delentechnieken) zijn effectief bij musculoskeletale klachten — ongeacht of ze door een fysiotherapeut of osteopaat worden uitgevoerd. Wat telt is de **combinatie** met actieve oefening en patiënteducatie. Meta-analyses (Rubinstein 2019, Coulter 2018) tonen matige evidentie voor manuele therapie bij rug-, nekpijn en bepaalde hoofdpijnvormen. Wat geen verschil maakt: de naam op het bord. Wat wel verschil maakt: integreert de therapeut zijn technieken in een **globaal behandelconcept**.",
          tr: "Kanıtlar gösteriyor: **manuel teknikler** (mobilizasyonlar, manipülasyonlar, yumuşak doku teknikleri) kas-iskelet sistemi şikayetlerinde etkilidir — fizyoterapist veya osteopat tarafından uygulanmasına bakılmaksızın. Belirleyici olan, aktif egzersiz ve hasta eğitimi ile **kombinasyondur**. Meta-analizler (Rubinstein 2019, Coulter 2018) bel ağrısı ve boyun ağrısında orta düzeyde kanıt göstermektedir. Fark yaratan: terapistin tekniklerini **kapsamlı bir tedavi konseptine** entegre edip etmediğidir.",
          ar: "تُظهر الأدلة: **التقنيات اليدوية** (التحريكات، المناورات، تقنيات الأنسجة الرخوة) فعالة للشكاوى العضلية الهيكلية — بغض النظر عمن يقوم بها. الحاسم هو **الجمع** مع التمارين النشطة وتثقيف المريض. تُظهر التحليلات الوصفية (Rubinstein 2019, Coulter 2018) دليلًا معتدلًا للعلاج اليدوي في آلام الظهر والرقبة. ما لا يصنع فرقًا: الاسم على اللوحة. ما يصنع الفرق: هل يدمج المعالج تقنياته في **مفهوم علاج شامل**.",
          pl: "Dowody pokazują: **techniki manualne** (mobilizacje, manipulacje, techniki tkanek miękkich) są skuteczne w dolegliwościach mięśniowo-szkieletowych — niezależnie od tego, czy wykonuje je fizjoterapeuta czy osteopata. Decydujące jest **połączenie** z aktywnymi ćwiczeniami i edukacją pacjenta. Meta-analizy (Rubinstein 2019, Coulter 2018) pokazują umiarkowane dowody na terapię manualną w bólach pleców, szyi i niektórych bólach głowy. Co nie robi różnicy: nazwa na tabliczce. Co robi różnicę: czy terapeuta integruje techniki w **całościową koncepcję leczenia**.",
          "uk": "Докази показують: **мануальні техніки** (мобілізації, маніпуляції, техніки роботи з м'якими тканинами) ефективні при порушеннях опорно-рухового апарату — незалежно від того, хто їх виконує: фізіотерапевт чи остеопат. Вирішальне значення має **поєднання** з активними вправами та навчанням пацієнта. Метааналізи (Rubinstein 2019, Coulter 2018) свідчать про помірний рівень доказовості мануальної терапії при болю в попереку, шиї та деяких видах головного болю. Що не має значення: назва на табличці. Що має значення: чи вписує терапевт свої техніки в **цілісну концепцію лікування** — з чіткою метою, вимірюваним прогресом і активною участю пацієнта.",
          "es": "La evidencia muestra que las **técnicas manuales** (movilizaciones, manipulaciones, técnicas de tejidos blandos) son eficaces para los trastornos musculoesqueléticos, independientemente de que las aplique un fisioterapeuta o un osteópata. Lo decisivo es la **combinación** con el ejercicio activo y la educación del paciente. Los metaanálisis (Rubinstein 2019, Coulter 2018) muestran una evidencia moderada a favor de la terapia manual en el dolor lumbar, el dolor cervical y algunas cefaleas. Lo que no marca la diferencia: el nombre de la placa. Lo que sí la marca: que el terapeuta integre sus técnicas en un **concepto de tratamiento global**, con un objetivo claro, progresos medibles y la participación activa del paciente.",
          "ku": "Delîl nîşan didin: **teknîkên destî** (mobîlîzasyon, manîpulasyon, teknîkên tevnên nerm) ji bo nexweşiyên masûlke û hestiyan bi bandor in — çi fizyoterapîst çi osteopat wan bike, ne girîng e. Ya diyarker **tevlîhevkirin** bi tetbîqatên çalak û perwerdeya nexweş re ye. Meta-analîz (Rubinstein 2019, Coulter 2018) ji bo terapiya destî di êşên piştê yên jêrîn, êşên stûyê û hin serêşan de delîlên navîn nîşan didin. Tiştê ku ferq nake: navê li ser tabelayê. Tiştê ku ferq dike: gelo terapîst teknîkên xwe di nav **têgeheke dermankirinê ya giştî** de bi cih dike — bi armanceke zelal, pêşketinên pîvanbar û beşdariya çalak a nexweş.",
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
          "uk": "Золоте правило",
          "es": "La regla de oro",
          "ku": "Qaîdeya zêrîn",
        },
        body: {
          de: "> *« Gute Hände öffnen die Tür — aber Sie gehen selbst hindurch. »*\n\nManuelle Therapie (ob « osteopathisch » oder « physiotherapeutisch » genannt) ist ein hervorragendes Werkzeug, um Schmerz zu modulieren, Beweglichkeit zu verbessern und Vertrauen in den eigenen Körper aufzubauen. Aber sie ist **ein Teil** des Puzzles. Die Forschung ist eindeutig: die besten Langzeitergebnisse entstehen, wenn manuelle Behandlung mit **aktivem Training** kombiniert wird. Die Hände des Therapeuten bringen Erleichterung und schaffen ein Fenster — Ihre eigene Bewegung sorgt für die nachhaltige Veränderung. Das gilt für Rückenschmerzen, Nackenschmerzen, Kopfschmerzen und Gelenkbeschwerden gleichermaßen.",
          fr: "> *« De bonnes mains ouvrent la porte — mais c'est vous qui la franchissez. »*\n\nLa thérapie manuelle (qu'on l'appelle « ostéopathique » ou « kinésithérapeutique ») est un excellent outil pour moduler la douleur, améliorer la mobilité et reconstruire la confiance dans votre corps. Mais c'est **une partie** du puzzle. La recherche est claire : les meilleurs résultats à long terme naissent quand le traitement manuel est combiné avec un **entraînement actif**. Les mains du thérapeute apportent un soulagement et créent une fenêtre — votre propre mouvement assure le changement durable. Cela vaut pour les lombalgies, cervicalgies, céphalées et douleurs articulaires.",
          en: "> *\"Good hands open the door — but you walk through it yourself.\"*\n\nManual therapy (whether called \"osteopathic\" or \"physiotherapeutic\") is an excellent tool to modulate pain, improve mobility and rebuild confidence in your body. But it is **one part** of the puzzle. Research is clear: the best long-term outcomes come when manual treatment is combined with **active training**. The therapist's hands bring relief and create a window — your own movement ensures lasting change. This applies equally to back pain, neck pain, headaches and joint complaints.",
          nl: "> *« Goede handen openen de deur — maar u loopt er zelf doorheen. »*\n\nManuele therapie (of men het nu « osteopathisch » of « fysiotherapeutisch » noemt) is een uitstekend instrument om pijn te moduleren, mobiliteit te verbeteren en vertrouwen in uw lichaam op te bouwen. Maar het is **één deel** van de puzzel. Onderzoek is duidelijk: de beste langetermijnresultaten ontstaan wanneer manuele behandeling wordt gecombineerd met **actieve training**. De handen van de therapeut brengen verlichting — uw eigen beweging zorgt voor blijvende verandering.",
          tr: "> *« İyi eller kapıyı açar — ama içinden kendiniz geçersiniz. »*\n\nManuel terapi (« osteopatik » veya « fizyoterapötik » densin) ağrıyı modüle etmek, mobiliteyi artırmak ve vücudunuza güveni yeniden inşa etmek için mükemmel bir araçtır. Ama bulmacadanın **bir parçasıdır**. Araştırma açık: en iyi uzun vadeli sonuçlar manuel tedavi **aktif egzersizle** birleştirildiğinde ortaya çıkar. Terapistin elleri rahatlık sağlar — kendi hareketiniz kalıcı değişimi sağlar.",
          ar: "> *«الأيدي الجيدة تفتح الباب — لكنك أنت من يمر من خلاله.»*\n\nالعلاج اليدوي (سواء سُمي «استيوباثي» أو «علاج طبيعي») أداة ممتازة لتعديل الألم وتحسين الحركة وإعادة بناء الثقة بجسمك. لكنه **جزء واحد** من الأحجية. البحث واضح: أفضل النتائج طويلة المدى تأتي عندما يُدمج العلاج اليدوي مع **التدريب النشط**. أيدي المعالج تجلب الراحة — حركتك الخاصة تضمن التغيير الدائم.",
          pl: "> *« Dobre ręce otwierają drzwi — ale to Ty przez nie przechodzisz. »*\n\nTerapia manualna (czy nazywana «osteopatyczną» czy «fizjoterapeutyczną») to doskonałe narzędzie do modulowania bólu, poprawy ruchomości i odbudowy zaufania do ciała. Ale jest **jedną częścią** układanki. Badania są jasne: najlepsze długoterminowe wyniki powstają, gdy leczenie manualne łączy się z **aktywnym treningiem**. Ręce terapeuty przynoszą ulgę — Twój własny ruch zapewnia trwałą zmianę.",
          "uk": "> *«Добрі руки відчиняють двері — але переступаєте поріг Ви самі.»*\n\nМануальна терапія (чи то «остеопатична», чи «фізіотерапевтична») — чудовий інструмент, щоб зменшити біль, покращити рухливість і повернути довіру до власного тіла. Але це **лише частина** пазла. Дослідження однозначні: найкращі довгострокові результати з'являються, коли мануальне лікування поєднують з **активним тренуванням**. Руки терапевта приносять полегшення й відкривають вікно можливостей — а тривалі зміни забезпечує Ваш власний рух. Це стосується болю в попереку, болю в шиї, головного болю та болю в суглобах.",
          "es": "> *«Unas buenas manos abren la puerta, pero es usted quien la cruza.»*\n\nLa terapia manual (se llame «osteopática» o «fisioterapéutica») es una herramienta excelente para modular el dolor, mejorar la movilidad y recuperar la confianza en su cuerpo. Pero es **una parte** del rompecabezas. La investigación es clara: los mejores resultados a largo plazo se obtienen cuando el tratamiento manual se combina con un **entrenamiento activo**. Las manos del terapeuta aportan alivio y abren una ventana; su propio movimiento asegura el cambio duradero. Esto vale para el dolor lumbar, el dolor cervical, las cefaleas y los dolores articulares.",
          "ku": "> *“Destên baş derî vedikin — lê yê ku tê re derbas dibe hûn in.”*\n\nTerapiya destî (çi jê re “osteopatîk” bê gotin çi “fizyoterapîk”) amûreke hêja ye ji bo kêmkirina êşê, baştirkirina tevgerê û ji nû ve avakirina baweriya bi laşê we. Lê ew **beşek** ji puzzleyê ye. Lêkolîn zelal e: encamên herî baş ên demdirêj çêdibin dema ku dermankirina destî bi **perwerdeya çalak** re tê tevlîhevkirin. Destên terapîst sivikbûnê tînin û pencereyekê vedikin — tevgera we ya xwe guhertina mayînde misoger dike. Ev ji bo êşên piştê yên jêrîn, êşên stûyê, serêş û êşên movikan derbasdar e.",
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
          "uk": "3 запитання перед Вашим прийомом",
          "es": "3 preguntas antes de su cita",
          "ku": "3 pirs berî randevûya we",
        },
        body: {
          de: "**1. Hat mein Therapeut eine anerkannte Grundausbildung?** — In Belgien sollte Ihr Osteopath gleichzeitig diplomierter Physiotherapeut sein. Das garantiert eine solide medizinische Basis und Erstattung durch die Krankenkasse.\n\n**2. Arbeitet er/sie evidenzbasiert?** — Fragen Sie: « Warum diese Technik bei mir? » Ein guter Therapeut erklärt sein Vorgehen und passt es an Ihre Reaktion an — nicht an ein starres Protokoll.\n\n**3. Gibt es einen aktiven Teil?** — Wenn Sie nach 6 Sitzungen nur passive Behandlung erhalten haben, fehlt ein entscheidender Baustein. Fragen Sie nach Übungen für zu Hause.",
          fr: "**1. Mon thérapeute a-t-il une formation de base reconnue ?** — En Belgique, votre ostéopathe devrait être simultanément kinésithérapeute diplômé. Cela garantit une base médicale solide et le remboursement par la mutuelle.\n\n**2. Travaille-t-il/elle de manière fondée sur les preuves ?** — Demandez : « Pourquoi cette technique pour moi ? » Un bon thérapeute explique sa démarche et s'adapte à votre réaction — pas à un protocole rigide.\n\n**3. Y a-t-il une partie active ?** — Si après 6 séances vous n'avez reçu que du traitement passif, il manque une pièce essentielle. Demandez des exercices pour la maison.",
          en: "**1. Does my therapist have a recognised basic qualification?** — In Belgium, your osteopath should simultaneously be a qualified physiotherapist. This guarantees a solid medical foundation and health insurance reimbursement.\n\n**2. Do they work evidence-based?** — Ask: \"Why this technique for me?\" A good therapist explains their approach and adapts to your response — not to a rigid protocol.\n\n**3. Is there an active component?** — If after 6 sessions you've only received passive treatment, a crucial element is missing. Ask for home exercises.",
          nl: "**1. Heeft mijn therapeut een erkende basisopleiding?** — In België moet uw osteopaat tegelijk gediplomeerd fysiotherapeut zijn. Dit garandeert een solide medische basis en terugbetaling door de zorgverzekeraar.\n\n**2. Werkt hij/zij evidence-based?** — Vraag: «Waarom deze techniek bij mij?» Een goede therapeut legt zijn aanpak uit en past aan op uw reactie.\n\n**3. Is er een actief deel?** — Als u na 6 sessies alleen passieve behandeling heeft gehad, ontbreekt een cruciaal onderdeel. Vraag naar oefeningen voor thuis.",
          tr: "**1. Terapistimin tanınmış bir temel eğitimi var mı?** — Belçika'da osteopatınız aynı zamanda diplomalı fizyoterapist olmalıdır. Bu sağlam bir tıbbi temel ve sağlık sigortası geri ödemesini garanti eder.\n\n**2. Kanıta dayalı çalışıyor mu?** — Sorun: «Neden benim için bu teknik?» İyi bir terapist yaklaşımını açıklar ve tepkinize uyum sağlar.\n\n**3. Aktif bir bileşen var mı?** — 6 seans sonra sadece pasif tedavi aldıysanız, önemli bir unsur eksiktir. Ev egzersizleri isteyin.",
          ar: "**1. هل لدى معالجي مؤهل أساسي معترف به؟** — في بلجيكا، يجب أن يكون أخصائي العلاج اليدوي في نفس الوقت معالجًا طبيعيًا مؤهلاً. هذا يضمن أساسًا طبيًا متينًا وتعويض التأمين الصحي.\n\n**2. هل يعمل بناءً على الأدلة؟** — اسأل: «لماذا هذه التقنية لي؟» المعالج الجيد يشرح منهجه ويتكيف مع استجابتك.\n\n**3. هل هناك جزء نشط؟** — إذا بعد 6 جلسات لم تتلقَ سوى علاج سلبي، فهناك عنصر حاسم مفقود. اطلب تمارين منزلية.",
          pl: "**1. Czy mój terapeuta ma uznane wykształcenie podstawowe?** — W Belgii Twój osteopata powinien być jednocześnie dyplomowanym fizjoterapeutą. To gwarantuje solidną bazę medyczną i zwrot kosztów przez ubezpieczenie.\n\n**2. Czy pracuje w oparciu o dowody?** — Zapytaj: «Dlaczego ta technika u mnie?» Dobry terapeuta wyjaśnia swoje podejście i dostosowuje się do Twojej reakcji.\n\n**3. Czy jest część aktywna?** — Jeśli po 6 sesjach otrzymałeś tylko leczenie pasywne, brakuje kluczowego elementu. Poproś o ćwiczenia domowe.",
          "uk": "**1. Чи має мій терапевт визнану базову освіту?** — У Бельгії Ваш остеопат має водночас бути дипломованим фізіотерапевтом. Це гарантує надійну медичну базу та відшкодування з боку лікарняної каси.\n\n**2. Чи працює він/вона на основі доказів?** — Запитайте: «Чому саме ця техніка для мене?» Добрий терапевт пояснює свій підхід і зважає на Вашу реакцію, а не на жорсткий протокол.\n\n**3. Чи є активна частина?** — Якщо після 6 сеансів Ви отримували лише пасивне лікування, бракує важливої складової. Попросіть вправи для дому.",
          "es": "**1. ¿Tiene mi terapeuta una formación de base reconocida?** — En Bélgica, su osteópata debería ser al mismo tiempo fisioterapeuta titulado. Esto garantiza una base médica sólida y el reembolso por parte de la mutua.\n\n**2. ¿Trabaja de forma basada en la evidencia?** — Pregunte: «¿Por qué esta técnica en mi caso?». Un buen terapeuta explica su enfoque y se adapta a su respuesta, no a un protocolo rígido.\n\n**3. ¿Hay una parte activa?** — Si después de 6 sesiones solo ha recibido tratamiento pasivo, falta una pieza esencial. Pida ejercicios para hacer en casa.",
          "ku": "**1. Gelo terapîstê min xwedî perwerdeyeke bingehîn a naskirî ye?** — Li Belçîkayê, divê osteopatê we di heman demê de fizyoterapîstekî dîplomayî be. Ev bingeheke bijîjkî ya xurt û vegerandina pereyan ji aliyê sendûqa tenduristiyê ve misoger dike.\n\n**2. Gelo ew li ser bingeha delîlan dixebite?** — Bipirsin: “Çima ev teknîk ji bo min?” Terapîstekî baş rêbaza xwe rave dike û xwe li gorî bertekên we diguncîne — ne li gorî protokoleke hişk.\n\n**3. Gelo beşeke çalak heye?** — Heke piştî 6 danişînan we tenê dermankirina pasîf wergirtibe, parçeyeke bingehîn kêm e. Ji bo malê tetbîqatan bixwazin.",
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
          "uk": "Коли краще звернутися до лікаря, а не до терапевта?",
          "es": "¿Cuándo consultar a un médico en lugar de a un terapeuta?",
          "ku": "Kengê divê hûn li şûna terapîstekî serî li bijîjkekî bidin?",
        },
        body: {
          de: "Manuelle Therapie — ob osteopathisch oder physiotherapeutisch — ist **nicht** die richtige Antwort bei: unerklärtem Gewichtsverlust, Fieber in Kombination mit Rücken-/Gelenkschmerzen, plötzlicher Schwäche in Armen oder Beinen, Blasen- oder Darmstörungen in Verbindung mit Rückenschmerzen, oder Schmerzen die nachts immer schlimmer werden und auf keine Position reagieren. Diese « Red Flags » erfordern eine ärztliche Abklärung. Ein verantwortungsvoller Therapeut — ob Osteopath oder Physiotherapeut — erkennt diese Zeichen und verweist Sie an den richtigen Ansprechpartner. Das ist kein Versagen, sondern professionelle Sorgfalt.",
          fr: "La thérapie manuelle — ostéopathique ou kinésithérapeutique — **n'est pas** la bonne réponse en cas de : perte de poids inexpliquée, fièvre associée à des douleurs rachidiennes/articulaires, faiblesse soudaine dans les bras ou jambes, troubles vésicaux ou intestinaux associés à des lombalgies, ou douleurs qui s'aggravent la nuit sans répondre à aucune position. Ces « drapeaux rouges » nécessitent un avis médical. Un thérapeute responsable — ostéopathe ou kinésithérapeute — reconnaît ces signes et vous oriente vers le bon interlocuteur. Ce n'est pas un échec, c'est du professionnalisme.",
          en: "Manual therapy — whether osteopathic or physiotherapeutic — is **not** the right answer for: unexplained weight loss, fever combined with back/joint pain, sudden weakness in arms or legs, bladder or bowel disturbances with back pain, or pain that worsens at night and doesn't respond to any position. These \"red flags\" require medical investigation. A responsible therapist — osteopath or physiotherapist — recognises these signs and refers you appropriately. That's not failure, it's professional care.",
          nl: "Manuele therapie — osteopathisch of fysiotherapeutisch — is **niet** het juiste antwoord bij: onverklaard gewichtsverlies, koorts gecombineerd met rug-/gewrichtspijn, plotselinge zwakte in armen of benen, blaas- of darmstoornissen bij rugpijn, of pijn die 's nachts erger wordt. Deze « rode vlaggen » vereisen medisch onderzoek. Een verantwoordelijke therapeut herkent deze tekenen en verwijst u door. Dat is geen falen, maar professionele zorg.",
          tr: "Manuel terapi — osteopatik veya fizyoterapötik — şunlar için doğru cevap **değildir**: açıklanamayan kilo kaybı, sırt/eklem ağrısıyla birlikte ateş, kol veya bacaklarda ani güçsüzlük, bel ağrısıyla birlikte mesane/bağırsak bozuklukları, veya geceleri kötüleşen ve hiçbir pozisyona yanıt vermeyen ağrı. Bu «kırmızı bayraklar» tıbbi değerlendirme gerektirir.",
          ar: "العلاج اليدوي — سواء كان استيوباثي أو علاج طبيعي — **ليس** الإجابة الصحيحة في حالة: فقدان وزن غير مبرر، حمى مع آلام ظهر/مفاصل، ضعف مفاجئ في الذراعين أو الساقين، اضطرابات المثانة أو الأمعاء مع آلام الظهر، أو ألم يزداد ليلاً. هذه «إشارات حمراء» تتطلب تقييمًا طبيًا. المعالج المسؤول يتعرف على هذه العلامات ويحيلك بشكل مناسب.",
          pl: "Terapia manualna — osteopatyczna czy fizjoterapeutyczna — **nie jest** właściwą odpowiedzią przy: niewyjaśnionej utracie wagi, gorączce połączonej z bólem pleców/stawów, nagłym osłabieniu rąk lub nóg, zaburzeniach pęcherza/jelit z bólem pleców, lub bólu nasilającym się nocą. Te «czerwone flagi» wymagają oceny lekarskiej. Odpowiedzialny terapeuta rozpoznaje te znaki i kieruje Cię odpowiednio.",
          "uk": "Мануальна терапія — остеопатична чи фізіотерапевтична — **не є** правильним рішенням у таких випадках: незрозуміла втрата ваги, гарячка разом із болем у хребті чи суглобах, раптова слабкість у руках або ногах, порушення сечовипускання чи роботи кишківника разом із болем у попереку, або біль, що посилюється вночі й не минає в жодному положенні. Ці «червоні прапорці» потребують оцінки лікаря. Відповідальний терапевт — остеопат чи фізіотерапевт — розпізнає ці ознаки й скерує Вас до потрібного фахівця. Це не невдача, а професіоналізм.",
          "es": "La terapia manual, osteopática o fisioterapéutica, **no es** la respuesta adecuada en caso de: pérdida de peso inexplicada, fiebre asociada a dolores de columna o articulares, debilidad repentina en brazos o piernas, trastornos de la vejiga o intestinales asociados a dolor lumbar, o dolores que empeoran por la noche sin aliviarse en ninguna posición. Estas «banderas rojas» requieren una valoración médica. Un terapeuta responsable, osteópata o fisioterapeuta, reconoce estas señales y le orienta hacia el profesional adecuado. No es un fracaso, es profesionalidad.",
          "ku": "Terapiya destî — çi osteopatîk çi fizyoterapîk — di van rewşan de **ne** bersiva rast e: kêmbûna giraniyê ya bê sedem, ta ligel êşên stûna piştê an movikan, qelsiya ji nişka ve ya di dest an lingan de, pirsgirêkên mîzdankê an rûviyan ligel êşên piştê yên jêrîn, an êşên ku bi şev girantir dibin û di tu helwestê de sivik nabin. Ev “alên sor” nirxandineke bijîjkî hewce dikin. Terapîstekî berpirsiyar — osteopat an fizyoterapîst — van nîşanan nas dike û we ber bi kesê rast ve dişîne. Ev ne têkçûn e, ev profesyonelî ye.",
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
          "uk": "У Praxis Loten: найкраще з обох світів",
          "es": "En Praxis Loten: lo mejor de ambos mundos",
          "ku": "Li Praxis Loten: ya herî baş a herdu cîhanan",
        },
        body: {
          de: "**1. Umfassende Erstbeurteilung** — Félix Esser und Loïc Meunier evaluieren Ihre Beschwerden global: Gelenke, Muskeln, Faszien, aber auch Lebensstil, Stress und Erwartungen. Kein starres Schema.\n\n**2. Manuelle Techniken auf EBP-Basis** — Mobilisationen, Manipulationen, viszerale und kraniosakrale Techniken — aber nur dort, wo die Evidenz sie rechtfertigt und Ihre Reaktion positiv ist.\n\n**3. Aktives Programm integriert** — Jede Sitzung kombiniert passive Behandlung mit Übungen, die Sie selbstständig weiterführen. Denn Ihre Autonomie ist unser Ziel.\n\n**4. Transparente Kommunikation** — Wir erklären, was wir tun und warum. Keine mystischen Erklärungen, keine leeren Versprechen. Wenn eine andere Disziplin besser geeignet ist, sagen wir es Ihnen — bei Praxis Loten in Eupen arbeiten 6 Therapeuten mit komplementären Kompetenzen unter einem Dach.",
          fr: "**1. Bilan initial complet** — Félix Esser et Loïc Meunier évaluent vos plaintes globalement : articulations, muscles, fascias, mais aussi mode de vie, stress et attentes. Pas de schéma rigide.\n\n**2. Techniques manuelles sur base EBP** — Mobilisations, manipulations, techniques viscérales et crânio-sacrées — mais uniquement là où l'évidence les justifie et où votre réaction est positive.\n\n**3. Programme actif intégré** — Chaque séance combine traitement passif et exercices que vous poursuivez en autonomie. Car votre autonomie est notre objectif.\n\n**4. Communication transparente** — Nous expliquons ce que nous faisons et pourquoi. Pas d'explications mystiques, pas de promesses vides. Si une autre discipline convient mieux, nous vous le disons — chez Praxis Loten à Eupen, 6 thérapeutes aux compétences complémentaires travaillent sous un même toit.",
          en: "**1. Comprehensive initial assessment** — Félix Esser and Loïc Meunier evaluate your complaints globally: joints, muscles, fascia, but also lifestyle, stress and expectations. No rigid framework.\n\n**2. Manual techniques on EBP basis** — Mobilisations, manipulations, visceral and craniosacral techniques — but only where evidence justifies them and your response is positive.\n\n**3. Integrated active programme** — Each session combines passive treatment with exercises you continue independently. Because your autonomy is our goal.\n\n**4. Transparent communication** — We explain what we do and why. No mystical explanations, no empty promises. If another discipline is better suited, we tell you — at Praxis Loten in Eupen, 6 therapists with complementary skills work under one roof.",
          nl: "**1. Uitgebreide eerste beoordeling** — Félix Esser en Loïc Meunier evalueren uw klachten globaal: gewrichten, spieren, fascia, maar ook levensstijl, stress en verwachtingen.\n\n**2. Manuele technieken op EBP-basis** — Mobilisaties, manipulaties, viscerale en craniosacrrale technieken — maar alleen waar het bewijs dit rechtvaardigt.\n\n**3. Geïntegreerd actief programma** — Elke sessie combineert passieve behandeling met oefeningen die u zelfstandig voortzet.\n\n**4. Transparante communicatie** — We leggen uit wat we doen en waarom. Geen mystieke verklaringen. Bij Praxis Loten in Eupen werken 6 therapeuten met complementaire vaardigheden onder één dak.",
          tr: "**1. Kapsamlı ilk değerlendirme** — Félix Esser ve Loïc Meunier şikayetlerinizi global olarak değerlendirir: eklemler, kaslar, fasya, ama aynı zamanda yaşam tarzı ve stres.\n\n**2. EBP temelli manuel teknikler** — Mobilizasyonlar, manipülasyonlar, viseral ve kraniosakral teknikler — ama sadece kanıtın haklı kıldığı yerde.\n\n**3. Entegre aktif program** — Her seans pasif tedaviyi bağımsız olarak sürdürdüğünüz egzersizlerle birleştirir.\n\n**4. Şeffaf iletişim** — Ne yaptığımızı ve nedenini açıklarız. Eupen'deki Praxis Loten'de 6 terapist tamamlayıcı becerilerle tek çatı altında çalışır.",
          ar: "**1. تقييم أولي شامل** — Félix Esser وLoïc Meunier يقيمان شكاواك بشكل شامل: مفاصل، عضلات، لفافات، وأيضًا نمط الحياة والتوتر.\n\n**2. تقنيات يدوية على أساس EBP** — تحريكات، مناورات، تقنيات حشوية وقحفية عجزية — لكن فقط حيث يبررها الدليل.\n\n**3. برنامج نشط متكامل** — كل جلسة تجمع بين العلاج السلبي والتمارين التي تستمر بها بشكل مستقل.\n\n**4. تواصل شفاف** — نشرح ما نفعله ولماذا. في Praxis Loten في Eupen، 6 معالجين بمهارات تكاملية يعملون تحت سقف واحد.",
          pl: "**1. Kompleksowa ocena wstępna** — Félix Esser i Loïc Meunier oceniają Twoje dolegliwości globalnie: stawy, mięśnie, powięzi, ale też styl życia i stres.\n\n**2. Techniki manualne na bazie EBP** — Mobilizacje, manipulacje, techniki trzewne i czaszkowo-krzyżowe — ale tylko tam, gdzie dowody je uzasadniają.\n\n**3. Zintegrowany program aktywny** — Każda sesja łączy leczenie pasywne z ćwiczeniami, które kontynuujesz samodzielnie.\n\n**4. Przejrzysta komunikacja** — Wyjaśniamy co robimy i dlaczego. W Praxis Loten w Eupen 6 terapeutów z komplementarnymi umiejętnościami pracuje pod jednym dachem.",
          "uk": "**1. Повне первинне обстеження** — Félix Esser і Loïc Meunier оцінюють Ваші скарги цілісно: суглоби, м'язи, фасції, а також спосіб життя, стрес і очікування. Без жорстких схем.\n\n**2. Мануальні техніки на засадах доказової практики (EBP)** — Мобілізації, маніпуляції, вісцеральні та краніосакральні техніки — але лише там, де їх виправдовують докази і де Ваша реакція позитивна.\n\n**3. Інтегрована активна програма** — Кожен сеанс поєднує пасивне лікування та вправи, які Ви продовжуєте виконувати самостійно. Адже наша мета — Ваша самостійність.\n\n**4. Прозоре спілкування** — Ми пояснюємо, що робимо і навіщо. Без містичних пояснень, без порожніх обіцянок. Якщо Вам краще підійде інша дисципліна, ми про це скажемо — у Praxis Loten в Ойпені 6 терапевтів із взаємодоповнювальними компетенціями працюють під одним дахом.",
          "es": "**1. Valoración inicial completa** — Félix Esser y Loïc Meunier evalúan sus molestias de forma global: articulaciones, músculos, fascias, pero también estilo de vida, estrés y expectativas. Sin esquemas rígidos.\n\n**2. Técnicas manuales basadas en la EBP** — Movilizaciones, manipulaciones, técnicas viscerales y craneosacras, pero solo cuando la evidencia las justifica y su respuesta es positiva.\n\n**3. Programa activo integrado** — Cada sesión combina tratamiento pasivo y ejercicios que usted continúa de forma autónoma. Porque su autonomía es nuestro objetivo.\n\n**4. Comunicación transparente** — Explicamos lo que hacemos y por qué. Sin explicaciones místicas ni promesas vacías. Si otra disciplina le conviene más, se lo decimos: en Praxis Loten, en Eupen, 6 terapeutas con competencias complementarias trabajan bajo un mismo techo.",
          "ku": "**1. Nirxandina destpêkê ya tam** — Félix Esser û Loïc Meunier gilîyên we bi awayekî giştî dinirxînin: movik, masûlke, fasya, lê her wiha şêwaza jiyanê, stres û hêviyan. Ne şemayeke hişk.\n\n**2. Teknîkên destî li ser bingeha EBP** — Mobîlîzasyon, manîpulasyon, teknîkên vîseral û kranyosakral — lê tenê li cihê ku delîl wan rewa dikin û bertekên we erênî ne.\n\n**3. Bernameyeke çalak a yekgirtî** — Her danişîn dermankirina pasîf û tetbîqatên ku hûn bi serê xwe didomînin bi hev re tîne. Ji ber ku serxwebûna we armanca me ye.\n\n**4. Têkiliyeke zelal** — Em rave dikin ka em çi dikin û çima. Ne ravekirinên mîstîk, ne sozên vala. Heke dîsîplîneke din ji we re çêtir be, em ji we re dibêjin — li Praxis Loten a li Eupenê, 6 terapîstên bi jêhatîbûnên temamker di bin heman banî de dixebitin.",
        },
      },
    ],
    keyPoints: {
      de: ["Osteopathie und Physiotherapie sind heute eng verwandt", "Manuelle Techniken wirken — unabhängig vom Etikett", "Kombination mit aktiver Übung bringt die besten Ergebnisse", "In Belgien: Osteopathie als Erweiterung der Kinesitherapie", "6 Therapeuten mit komplementären Kompetenzen bei Praxis Loten"],
      fr: ["Ostéopathie et kinésithérapie sont aujourd'hui proches", "Les techniques manuelles fonctionnent — peu importe l'étiquette", "La combinaison avec l'exercice actif donne les meilleurs résultats", "En Belgique : l'ostéopathie comme extension de la kinésithérapie", "6 thérapeutes complémentaires chez Praxis Loten"],
      en: ["Osteopathy and physiotherapy are closely related today", "Manual techniques work — regardless of the label", "Combination with active exercise yields the best results", "In Belgium: osteopathy as an extension of physiotherapy", "6 therapists with complementary skills at Praxis Loten"],
      nl: ["Osteopathie en fysiotherapie zijn vandaag nauw verwant", "Manuele technieken werken — ongeacht het etiket", "Combinatie met actieve oefening geeft de beste resultaten", "In België: osteopathie als uitbreiding van kinesitherapie", "6 therapeuten met complementaire vaardigheden bij Praxis Loten"],
      tr: ["Osteopati ve fizyoterapi bugün yakın ilişkili", "Manuel teknikler işe yarıyor — etiketten bağımsız", "Aktif egzersizle kombinasyon en iyi sonuçları verir", "Belçika'da: fizyoterapinin uzantısı olarak osteopati", "Praxis Loten'de 6 tamamlayıcı terapist"],
      ar: ["العلاج اليدوي والعلاج الطبيعي مرتبطان اليوم ارتباطًا وثيقًا", "التقنيات اليدوية تعمل — بغض النظر عن التسمية", "الجمع مع التمارين النشطة يعطي أفضل النتائج", "في بلجيكا: العلاج اليدوي كامتداد للعلاج الطبيعي", "6 معالجين بمهارات تكاملية في Praxis Loten"],
      pl: ["Osteopatia i fizjoterapia są dziś blisko spokrewnione", "Techniki manualne działają — niezależnie od etykiety", "Połączenie z aktywnymi ćwiczeniami daje najlepsze wyniki", "W Belgii: osteopatia jako rozszerzenie fizjoterapii", "6 terapeutów z komplementarnymi umiejętnościami w Praxis Loten"],
      "uk": [
        "Остеопатія і фізіотерапія сьогодні дуже близькі",
        "Мануальні техніки працюють — незалежно від назви",
        "Поєднання з активними вправами дає найкращі результати",
        "У Бельгії: остеопатія як продовження фізіотерапії",
        "6 терапевтів, що доповнюють одне одного, у Praxis Loten"
      ],
      "es": [
        "Osteopatía y fisioterapia hoy están muy próximas",
        "Las técnicas manuales funcionan, sea cual sea la etiqueta",
        "La combinación con ejercicio activo da los mejores resultados",
        "En Bélgica: la osteopatía como extensión de la fisioterapia",
        "6 terapeutas complementarios en Praxis Loten"
      ],
      "ku": [
        "Osteopatî û fizyoterapî îro nêzî hev in",
        "Teknîkên destî dixebitin — etîket çi dibe bila bibe",
        "Tevlîhevkirina bi tetbîqatên çalak re encamên herî baş dide",
        "Li Belçîkayê: osteopatî wekî berfirehkirina fizyoterapiyê",
        "6 terapîstên temamker li Praxis Loten"
      ],
    },
    ctaText: {
      de: "Unsicher welche Therapie passt? Félix Esser und Loïc Meunier beraten Sie gerne bei Praxis Loten in Eupen.",
      fr: "Vous hésitez entre les deux ? Félix Esser et Loïc Meunier vous conseillent chez Praxis Loten à Eupen.",
      en: "Unsure which therapy fits? Félix Esser and Loïc Meunier are happy to advise you at Praxis Loten in Eupen.",
      nl: "Onzeker welke therapie past? Félix Esser en Loïc Meunier adviseren u graag bij Praxis Loten in Eupen.",
      tr: "Hangi terapi uygun emin değil misiniz? Eupen'deki Praxis Loten'de Félix Esser ve Loïc Meunier size yardımcı olur.",
      ar: "غير متأكد أي علاج يناسبك؟ Félix Esser وLoïc Meunier ينصحانك في Praxis Loten في Eupen.",
      pl: "Nie wiesz, która terapia pasuje? Félix Esser i Loïc Meunier doradzą Ci w Praxis Loten w Eupen.",
      "uk": "Вагаєтеся між двома? Félix Esser і Loïc Meunier проконсультують Вас у Praxis Loten в Ойпені.",
      "es": "¿Duda entre las dos? Félix Esser y Loïc Meunier le asesoran en Praxis Loten, en Eupen.",
      "ku": "Hûn di navbera herduyan de dudil in? Félix Esser û Loïc Meunier li Praxis Loten a li Eupenê şîretan didin we.",
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
      "uk": "Ця стаття має лише інформаційний характер і не замінює індивідуальної консультації. Якщо симптоми не минають, зверніться до свого терапевта або лікаря.",
      "es": "Este artículo tiene una finalidad exclusivamente informativa y no sustituye una consulta individual. Consulte a su terapeuta o a su médico en caso de síntomas persistentes.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye û şûna şêwirdariyeke kesane nagire. Di rewşa nîşaneyên domdar de serî li terapîst an bijîjkê xwe bidin.",
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
      "uk": "Тренування BFR — нарощувати м'язи з невеликим навантаженням",
      "es": "Entrenamiento BFR: ganar músculo con poca carga",
      "ku": "Perwerdeya BFR — bi barê kêm masûlke çêkirin",
    },
    category: {
      de: "Sport Physiotherapie", fr: "Kinésithérapie Sportive", en: "Sports Physio",
      nl: "Sportfysiotherapie", tr: "Spor Fizyoterapisi", ar: "العلاج الطبيعي الرياضي", pl: "Fizjoterapia Sportowa",
      "uk": "Спортивна фізіотерапія",
      "es": "Fisioterapia deportiva",
      "ku": "Fizyoterapiya werzîşê",
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
      "uk": "Після операції на коліні хірург каже Вам: «жодних важких навантажень протягом 3 місяців». Тим часом м'яз тане. А що, якби його можна було відновити лише з 20 % звичної ваги? Саме це дає змогу робити BFR (Blood Flow Restriction). Thom Petit, сертифікований Kinesport BFR, у Praxis Loten в Ойпені пояснює Вам цей метод, підтверджений понад 300 дослідженнями.",
      "es": "Tras una operación de rodilla, su cirujano le dice: «nada de cargas pesadas durante 3 meses». Mientras tanto, el músculo se pierde. ¿Y si pudiera reconstruirse con solo el 20 % del peso habitual? Eso es exactamente lo que permite el BFR (Blood Flow Restriction). Thom Petit, certificado Kinesport BFR en Praxis Loten (Eupen), le explica este método validado por más de 300 estudios.",
      "ku": "Piştî emeliyata çokê, cerahê we dibêje: «3 mehan barê giran tune». Di vê navberê de, masûlke dihele. Lê eger meriv bikaribûya wê tenê bi 20 % ji giraniya asayî ji nû ve ava bike? Tam ev e ya ku BFR (Blood Flow Restriction) gengaz dike. Thom Petit, ku sertîfîkaya Kinesport BFR heye, li Praxis Loten li Eupenê ev rêbaza ku ji hêla zêdetirî 300 lêkolînan ve hatiye pejirandin ji we re rave dike.",
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
          "uk": "Міф: без важких навантажень немає м'язів",
          "es": "Mito: sin cargas pesadas no hay músculo",
          "ku": "Efsane: bêyî barên giran masûlke çênabe",
        },
        body: {
          de: "Klassisch gilt: um Muskeln aufzubauen, braucht man mindestens 60–70 % der Maximalkraft. Das stimmt — **ohne BFR**. Mit einem pneumatischen Brassard, der den venösen Rückfluss kontrolliert einschränkt, reichen bereits **20–30 %** der Maximallast für vergleichbare Muskelzuwächse. Ihr Muskel « glaubt », er arbeite schwer, weil der lokale Stress (Sauerstoffmangel, metabolische Abfallprodukte) die gleichen Wachstumssignale auslöst. Das ist keine Theorie: über 300 klinische Studien belegen diesen Effekt. Für Patienten nach einer Operation oder mit Gelenkbeschwerden ist das ein entscheidender Vorteil — Muskelkraft aufbauen, ohne das Gelenk zu überlasten.",
          fr: "Classiquement, pour construire du muscle, il faut au moins 60–70 % de la force maximale. C'est vrai — **sans BFR**. Avec un brassard pneumatique qui restreint le retour veineux de manière contrôlée, **20–30 %** de la charge maximale suffisent pour des gains musculaires comparables. Votre muscle « croit » travailler lourd, car le stress local (manque d'oxygène, déchets métaboliques) déclenche les mêmes signaux de croissance. Ce n'est pas de la théorie : plus de 300 études cliniques documentent cet effet. Pour les patients après une opération ou avec des douleurs articulaires, c'est un avantage décisif — construire de la force sans surcharger l'articulation.",
          en: "Classically, building muscle requires at least 60–70% of maximum strength. That's true — **without BFR**. With a pneumatic cuff that restricts venous return in a controlled manner, just **20–30%** of maximum load is sufficient for comparable muscle gains. Your muscle \"believes\" it's working hard because local stress (oxygen deficit, metabolic waste) triggers the same growth signals. This isn't theory: over 300 clinical studies document this effect. For post-surgical patients or those with joint issues, this is a decisive advantage — building strength without overloading the joint.",
          nl: "Klassiek geldt: voor spieropbouw heb je minstens 60–70% van de maximale kracht nodig. Dat klopt — **zonder BFR**. Met een pneumatische manchet die de veneuze terugstroom gecontroleerd beperkt, volstaat **20–30%** van de maximale belasting voor vergelijkbare spiergroei. Uw spier « gelooft » dat hij zwaar werkt. Voor patiënten na een operatie is dit een doorslaggevend voordeel.",
          tr: "Klasik olarak, kas geliştirmek için maksimum gücün en az %60–70'i gerekir. Bu doğrudur — **BFR olmadan**. Venöz dönüşü kontrollü şekilde kısıtlayan pnömatik bir manşonla, karşılaştırılabilir kas kazanımları için maksimum yükün sadece **%20–30'u** yeterlidir. 300'den fazla klinik çalışma bu etkiyi belgeliyor.",
          ar: "تقليديًا، بناء العضلات يتطلب 60-70% على الأقل من القوة القصوى. هذا صحيح — **بدون BFR**. مع كُفة هوائية تقيد الجريان الوريدي بشكل مسيطر عليه، **20-30%** فقط من الحمل الأقصى تكفي لمكاسب عضلية مماثلة. أكثر من 300 دراسة سريرية توثق هذا التأثير.",
          pl: "Klasycznie, do budowy mięśni potrzeba co najmniej 60–70% siły maksymalnej. To prawda — **bez BFR**. Z pneumatycznym mankietem kontrolowanie ograniczającym powrót żylny, wystarczy **20–30%** obciążenia maksymalnego dla porównywalnych przyrostów mięśniowych. Ponad 300 badań klinicznych dokumentuje ten efekt.",
          "uk": "Класично, щоб наростити м'язи, потрібно щонайменше 60–70 % максимальної сили. Це правда — **без BFR**. З пневматичною манжетою, яка контрольовано обмежує венозний відтік, **20–30 %** максимального навантаження достатньо для порівнянного приросту м'язів. Ваш м'яз «вважає», що працює з великою вагою, бо локальний стрес (нестача кисню, продукти обміну речовин) запускає ті самі сигнали росту. Це не теорія: понад 300 клінічних досліджень документують цей ефект. Для пацієнтів після операції або з болем у суглобах це вирішальна перевага — нарощувати силу, не перевантажуючи суглоб.",
          "es": "Tradicionalmente, para ganar músculo se necesita al menos el 60–70 % de la fuerza máxima. Es cierto, **sin BFR**. Con un manguito neumático que restringe de forma controlada el retorno venoso, basta con el **20–30 %** de la carga máxima para obtener ganancias musculares comparables. Su músculo «cree» que trabaja con mucho peso, porque el estrés local (falta de oxígeno, residuos metabólicos) desencadena las mismas señales de crecimiento. No es teoría: más de 300 estudios clínicos documentan este efecto. Para los pacientes tras una operación o con dolores articulares, es una ventaja decisiva: ganar fuerza sin sobrecargar la articulación.",
          "ku": "Bi awayê klasîk, ji bo avakirina masûlkeyan herî kêm 60–70 % ji hêza herî zêde lazim e. Ev rast e — **bêyî BFR**. Bi kemberek pneumatîk ku vegera xwîna damaran bi awayekî kontrolkirî sînordar dike, **20–30 %** ji barê herî zêde bes e ji bo qezencên masûlkeyan ên berhevkirî. Masûlkeya we «bawer dike» ku bi giranî dixebite, ji ber ku stresa herêmî (kêmasiya oksîjenê, bermayiyên metabolîk) heman îşaretên mezinbûnê dide destpêkirin. Ev ne teorî ye: zêdetirî 300 lêkolînên klînîkî vê bandorê belge dikin. Ji bo nexweşên piştî emeliyatê an bi êşên movikan, ev avantajeke biryarder e — avakirina hêzê bêyî barkirina zêde ya movikê.",
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
          "uk": "Як BFR діє в організмі?",
          "es": "¿Cómo actúa el BFR en el cuerpo?",
          "ku": "BFR di laş de çawa dixebite?",
        },
        body: {
          fr: "Le brassard BFR crée un environnement métabolique unique dans votre muscle. En réduisant le retour veineux (sans couper le flux artériel), le muscle accumule des métabolites et fonctionne en **manque relatif d'oxygène**. Ce stress contrôlé déclenche trois réponses : activation des fibres musculaires rapides (normalement recrutées seulement sous charge lourde), libération d'hormones de croissance locales, et stimulation des cellules « réparatrices » du muscle. Concrètement : votre corps construit du muscle comme s'il soulevait lourd — mais vos articulations, tendons et os ne subissent que 20 % de la contrainte. C'est pourquoi le BFR est sûr dès les premières semaines après une opération.",
          en: "The BFR cuff creates a unique metabolic environment in your muscle. By reducing venous return (without cutting arterial flow), the muscle accumulates metabolites and works in **relative oxygen deficit**. This controlled stress triggers three responses: activation of fast-twitch muscle fibres (normally only recruited under heavy load), release of local growth hormones, and stimulation of muscle \"repair\" cells. In practice: your body builds muscle as if lifting heavy — but your joints, tendons and bones experience only 20% of the stress. This is why BFR is safe from the first weeks after surgery.",
          de: "Das BFR-Brassard schafft eine einzigartige Stoffwechselumgebung in Ihrem Muskel. Durch Reduktion des venösen Rückflusses (ohne den arteriellen Zufluss zu unterbrechen) sammelt der Muskel Stoffwechselprodukte an und arbeitet unter **relativem Sauerstoffmangel**. Dieser kontrollierte Stress löst drei Reaktionen aus: Aktivierung schneller Muskelfasern (normalerweise nur bei schwerer Last rekrutiert), Freisetzung lokaler Wachstumshormone und Stimulation der « Reparaturzellen » des Muskels. Konkret: Ihr Körper baut Muskeln auf, als ob er schwer heben würde — aber Ihre Gelenke, Sehnen und Knochen erfahren nur 20 % der Belastung.",
          nl: "De BFR-manchet creëert een uniek metabolisch milieu in uw spier. Door de veneuze terugstroom te verminderen (zonder de arteriële stroom te stoppen), accumuleert de spier metabolieten en werkt onder **relatief zuurstoftekort**. Deze gecontroleerde stress activeert snelle spiervezels, maakt lokale groeihormonen vrij en stimuleert « herstelcellen ». Uw lichaam bouwt spier op alsof het zwaar tilt — maar uw gewrichten ervaren slechts 20% belasting.",
          tr: "BFR manşonu kasınızda benzersiz bir metabolik ortam yaratır. Venöz dönüşü azaltarak (arteriyel akışı kesmeden), kas metabolitleri biriktirir ve **göreceli oksijen eksikliğinde** çalışır. Bu kontrollü stres hızlı kas liflerini aktive eder, lokal büyüme hormonları salar ve kas «onarım» hücrelerini uyarır.",
          ar: "تخلق كُفة BFR بيئة أيضية فريدة في عضلتك. بتقليل الجريان الوريدي (دون قطع التدفق الشرياني)، تتراكم المستقلبات ويعمل العضل في **نقص أوكسجين نسبي**. هذا الإجهاد المنضبط يُنشط الألياف العضلية السريعة، يُطلق هرمونات نمو محلية، ويُحفز خلايا «إصلاح» العضلات.",
          pl: "Mankiet BFR tworzy unikalne środowisko metaboliczne w mięśniu. Zmniejszając powrót żylny (bez odcinania przepływu tętniczego), mięsień gromadzi metabolity i pracuje w **względnym niedoborze tlenu**. Ten kontrolowany stres aktywuje szybkie włókna mięśniowe, uwalnia lokalne hormony wzrostu i stymuluje komórki «naprawcze» mięśnia.",
          "uk": "Манжета BFR створює у Вашому м'язі унікальне метаболічне середовище. Зменшуючи венозний відтік (не перекриваючи артеріальний кровотік), м'яз накопичує метаболіти й працює у стані **відносної нестачі кисню**. Цей контрольований стрес запускає три реакції: активацію швидких м'язових волокон (зазвичай задіяних лише під великим навантаженням), вивільнення місцевих гормонів росту та стимуляцію «відновлювальних» клітин м'яза. На практиці: Ваше тіло нарощує м'язи так, ніби піднімає велику вагу, — але Ваші суглоби, сухожилля й кістки зазнають лише 20 % навантаження. Ось чому BFR безпечний уже з перших тижнів після операції.",
          "es": "El manguito BFR crea un entorno metabólico único en su músculo. Al reducir el retorno venoso (sin cortar el flujo arterial), el músculo acumula metabolitos y funciona con una **relativa falta de oxígeno**. Este estrés controlado desencadena tres respuestas: activación de las fibras musculares rápidas (que normalmente solo se reclutan con cargas pesadas), liberación de hormonas de crecimiento locales y estimulación de las células «reparadoras» del músculo. En la práctica: su cuerpo construye músculo como si levantara mucho peso, pero sus articulaciones, tendones y huesos solo soportan el 20 % de la carga. Por eso el BFR es seguro desde las primeras semanas tras una operación.",
          "ku": "Kembera BFR di masûlkeya we de jîngeheke metabolîk a bêhempa diafirîne. Bi kêmkirina vegera xwîna damaran (bêyî birîna herikîna arteran), masûlke metabolîtan kom dike û di **kêmasiyeke nisbî ya oksîjenê** de dixebite. Ev stresa kontrolkirî sê bersivan dide destpêkirin: çalakkirina fîberên masûlkeyan ên bilez (ku bi gelemperî tenê di bin barê giran de tên bikaranîn), berdana hormonên mezinbûnê yên herêmî, û teşwîqkirina şaneyên «sererastker» ên masûlkeyê. Bi awayekî berbiçav: laşê we masûlke ava dike mîna ku giranî hildide — lê movik, tendon û hestiyên we tenê 20 % ji barê dikişînin. Ji ber vê yekê BFR ji hefteyên pêşîn ên piştî emeliyatê ve ewle ye.",
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
          "uk": "Золоте правило тренування BFR",
          "es": "La regla de oro del entrenamiento BFR",
          "ku": "Qaîdeya zêrîn a perwerdeya BFR",
        },
        body: {
          de: "> *« Weniger Last, mehr Wirkung — das ist kein Widerspruch, das ist Wissenschaft. »*\n\nDas Protokoll ist standardisiert und sicher : 4 Serien (30-15-15-15 Wiederholungen), 20–30 % der Maximallast, 30 Sekunden Pause zwischen den Serien. Der Brassard bleibt während der gesamten Übung angelegt. Die Sitzung dauert nur **15–20 Minuten** — deutlich kürzer als klassisches Krafttraining. Der Schlüssel: die korrekte Einstellung des Brassard-Drucks. Zu viel Druck ist kontraproduktiv, zu wenig wirkungslos. Deshalb verwenden wir bei Praxis Loten in Eupen ein **kalibriertes Doppler-System**, das den optimalen Druck individuell bestimmt.",
          fr: "> *« Moins de charge, plus d'effet — ce n'est pas un paradoxe, c'est de la science. »*\n\nLe protocole est standardisé et sûr : 4 séries (30-15-15-15 répétitions), 20–30 % de la charge maximale, 30 secondes de repos entre les séries. Le brassard reste en place pendant toute l'exercice. La séance ne dure que **15–20 minutes** — nettement plus court qu'un entraînement classique. La clé : le réglage correct de la pression du brassard. Trop de pression est contre-productif, trop peu est inefficace. C'est pourquoi, chez Praxis Loten à Eupen, nous utilisons un **système Doppler calibré** qui détermine la pression optimale individuellement.",
          en: "> *\"Less load, more effect — that's not a contradiction, that's science.\"*\n\nThe protocol is standardised and safe: 4 sets (30-15-15-15 repetitions), 20–30% of maximum load, 30 seconds rest between sets. The cuff stays on throughout the exercise. The session lasts only **15–20 minutes** — significantly shorter than classical strength training. The key: correct cuff pressure setting. Too much is counterproductive, too little is ineffective. This is why at Praxis Loten in Eupen we use a **calibrated Doppler system** that determines optimal pressure individually.",
          nl: "> *« Minder belasting, meer effect — dat is geen tegenspraak, dat is wetenschap. »*\n\nHet protocol is gestandaardiseerd en veilig: 4 sets (30-15-15-15 herhalingen), 20–30% van de maximale belasting, 30 seconden rust tussen sets. De manchet blijft tijdens de hele oefening zitten. De sessie duurt slechts **15–20 minuten**. De sleutel: correcte drukinstelling. Daarom gebruiken wij bij Praxis Loten in Eupen een **gekalibreerd Doppler-systeem**.",
          tr: "> *« Daha az yük, daha fazla etki — bu bir çelişki değil, bilimdir. »*\n\nProtokol standartlaştırılmış ve güvenlidir: 4 set (30-15-15-15 tekrar), maksimum yükün %20–30'u, setler arasında 30 saniye dinlenme. Manşon egzersiz boyunca takılı kalır. Seans sadece **15–20 dakika** sürer. Anahtar: doğru manşon basıncı ayarı. Eupen'deki Praxis Loten'de **kalibre edilmiş bir Doppler sistemi** kullanıyoruz.",
          ar: "> *«حمل أقل، تأثير أكبر — هذا ليس تناقضًا، إنه علم.»*\n\nالبروتوكول موحد وآمن: 4 مجموعات (30-15-15-15 تكرار)، 20-30% من الحمل الأقصى، 30 ثانية راحة بين المجموعات. تبقى الكُفة في مكانها طوال التمرين. الجلسة تستغرق فقط **15-20 دقيقة**. المفتاح: ضبط ضغط الكُفة بشكل صحيح. في Praxis Loten في Eupen نستخدم **نظام دوبلر معاير** يحدد الضغط الأمثل فرديًا.",
          pl: "> *« Mniej obciążenia, więcej efektu — to nie sprzeczność, to nauka. »*\n\nProtokół jest standaryzowany i bezpieczny: 4 serie (30-15-15-15 powtórzeń), 20–30% obciążenia maksymalnego, 30 sekund przerwy między seriami. Mankiet pozostaje założony przez cały czas ćwiczenia. Sesja trwa zaledwie **15–20 minut**. Klucz: prawidłowe ustawienie ciśnienia mankietu. W Praxis Loten w Eupen używamy **kalibrowanego systemu Doppler**.",
          "uk": "> *«Менше навантаження, більше ефекту — це не парадокс, це наука».*\n\nПротокол стандартизований і безпечний: 4 підходи (30-15-15-15 повторень), 20–30 % максимального навантаження, 30 секунд відпочинку між підходами. Манжета залишається на місці протягом усієї вправи. Заняття триває лише **15–20 хвилин** — помітно коротше, ніж класичне тренування. Ключ: правильне налаштування тиску манжети. Надто високий тиск контрпродуктивний, надто низький — неефективний. Саме тому в Praxis Loten в Ойпені ми використовуємо **калібровану доплерівську систему**, яка індивідуально визначає оптимальний тиск.",
          "es": "> *«Menos carga, más efecto: no es una paradoja, es ciencia.»*\n\nEl protocolo está estandarizado y es seguro: 4 series (30-15-15-15 repeticiones), 20–30 % de la carga máxima, 30 segundos de descanso entre series. El manguito permanece colocado durante todo el ejercicio. La sesión dura solo **15–20 minutos**, bastante menos que un entrenamiento clásico. La clave: el ajuste correcto de la presión del manguito. Demasiada presión es contraproducente; demasiado poca, ineficaz. Por eso, en Praxis Loten (Eupen), utilizamos un **sistema Doppler calibrado** que determina individualmente la presión óptima.",
          "ku": "> *«Barê kêmtir, bandora zêdetir — ev ne paradoks e, ev zanist e.»*\n\nProtokol standardkirî û ewle ye: 4 set (30-15-15-15 dubarekirin), 20–30 % ji barê herî zêde, 30 çirke bêhnvedan di navbera setan de. Kember di tevahiya werzîşê de li cihê xwe dimîne. Danişîn tenê **15–20 deqe** dikişîne — bi awayekî diyar kurttir ji perwerdeyeke klasîk. Mifte: eyarkirina rast a zexta kemberê. Zexta pir zêde berevajî bandor dike, zexta pir kêm bê bandor e. Ji ber vê yekê, li Praxis Loten li Eupenê, em **pergaleke Doppler a kalîbrekirî** bi kar tînin ku zexta çêtirîn bi awayekî kesane diyar dike.",
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
          "uk": "3 ідеальні ситуації для BFR",
          "es": "3 situaciones ideales para el BFR",
          "ku": "3 rewşên îdeal ji bo BFR",
        },
        body: {
          de: "**1. Frühe Post-OP-Phase** — Nach Kreuzband-, Meniskus- oder Prothesenoperation: Muskelaufbau ab der 2. Woche, ohne das Gelenk zu gefährden. Ihre Kniescheibe sagt « Danke ».\n\n**2. Senioren mit Sarkopenie-Risiko** — Muskelkraftverlust im Alter ist kein Schicksal. BFR ermöglicht effektives Training auch wenn schwere Gewichte nicht toleriert werden — aus Angst, Gelenkbeschwerden oder allgemeiner Dekonditionierung.\n\n**3. Sportler im Return-to-Sport** — Die Lücke zwischen « geheilt » und « wettkampffähig » schließen. BFR beschleunigt den Muskelwiederaufbau in der Phase, in der maximale Belastung noch nicht erlaubt ist.",
          fr: "**1. Phase post-opératoire précoce** — Après ligament croisé, ménisque ou prothèse : reconstruction musculaire dès la 2e semaine, sans mettre en danger l'articulation. Votre rotule dit « merci ».\n\n**2. Seniors à risque de sarcopénie** — La perte de force musculaire avec l'âge n'est pas une fatalité. Le BFR permet un entraînement efficace même quand les charges lourdes ne sont pas tolérées — par peur, douleurs articulaires ou déconditionnement.\n\n**3. Sportifs en retour au terrain** — Combler l'écart entre « guéri » et « apte à la compétition ». Le BFR accélère la reconstruction musculaire dans la phase où la charge maximale n'est pas encore autorisée.",
          en: "**1. Early post-op phase** — After cruciate ligament, meniscus or joint replacement surgery: muscle building from week 2, without endangering the joint. Your kneecap says \"thank you\".\n\n**2. Seniors at sarcopenia risk** — Age-related muscle loss is not inevitable. BFR enables effective training even when heavy weights aren't tolerated — due to fear, joint pain or general deconditioning.\n\n**3. Athletes in return-to-sport** — Bridging the gap between \"healed\" and \"competition-ready\". BFR accelerates muscle rebuilding in the phase where maximum load isn't yet permitted.",
          nl: "**1. Vroege post-op fase** — Na kruisband, meniscus of prothese: spieropbouw vanaf week 2, zonder het gewricht in gevaar te brengen.\n\n**2. Senioren met sarcopenie-risico** — Leeftijdsgerelateerd spierverlies is geen lot. BFR maakt effectieve training mogelijk zelfs als zware gewichten niet worden verdragen.\n\n**3. Sporters in return-to-sport** — De kloof tussen «genezen» en «wedstrijdklaar» overbruggen. BFR versnelt de spieropbouw in de fase waarin maximale belasting nog niet is toegestaan.",
          tr: "**1. Erken ameliyat sonrası faz** — Çapraz bağ, menisküs veya protez sonrası: 2. haftadan itibaren eklemi tehlikeye atmadan kas geliştirme.\n\n**2. Sarkopeni riski taşıyan yaşlılar** — Yaşa bağlı kas kaybı kaçınılmaz değildir. BFR, ağır ağırlıklar tolere edilmediğinde bile etkili antrenman sağlar.\n\n**3. Spora dönüş yapan sporcular** — «İyileşmiş» ile «yarışmaya hazır» arasındaki boşluğu kapatmak.",
          ar: "**1. المرحلة المبكرة بعد العملية** — بعد الرباط الصليبي أو الغضروف أو الاستبدال: بناء عضلي من الأسبوع الثاني دون تعريض المفصل للخطر.\n\n**2. كبار السن المعرضون للضمور العضلي** — فقدان العضلات المرتبط بالعمر ليس حتميًا. BFR يتيح تدريبًا فعالاً حتى عندما لا تُتحمل الأوزان الثقيلة.\n\n**3. الرياضيون في مرحلة العودة** — سد الفجوة بين «شُفيت» و«جاهز للمنافسة».",
          pl: "**1. Wczesna faza pooperacyjna** — Po więzadle krzyżowym, łąkotce lub protezie: budowa mięśni od 2. tygodnia, bez zagrożenia dla stawu.\n\n**2. Seniorzy z ryzykiem sarkopenii** — Utrata siły mięśniowej z wiekiem nie jest nieunikniona. BFR umożliwia skuteczny trening nawet gdy ciężkie obciążenia nie są tolerowane.\n\n**3. Sportowcy w powrocie do sportu** — Wypełnienie luki między «wyleczony» a «gotowy do rywalizacji».",
          "uk": "**1. Рання післяопераційна фаза** — Після операції на хрестоподібній зв'язці, меніску чи ендопротезування: відновлення м'язів уже з 2-го тижня, без ризику для суглоба. Ваш наколінок каже «дякую».\n\n**2. Люди похилого віку з ризиком саркопенії** — Втрата м'язової сили з віком не є неминучою. BFR дає змогу ефективно тренуватися навіть тоді, коли великі навантаження не переносяться — через страх, біль у суглобах або детренованість.\n\n**3. Спортсмени, які повертаються до тренувань** — Подолати розрив між «вилікуваний» і «готовий до змагань». BFR прискорює відновлення м'язів у фазі, коли максимальне навантаження ще не дозволене.",
          "es": "**1. Fase postoperatoria temprana** — Tras cirugía de ligamento cruzado, menisco o prótesis: reconstrucción muscular desde la 2.ª semana, sin poner en peligro la articulación. Su rótula se lo agradece.\n\n**2. Personas mayores con riesgo de sarcopenia** — La pérdida de fuerza muscular con la edad no es una fatalidad. El BFR permite un entrenamiento eficaz incluso cuando no se toleran las cargas pesadas, ya sea por miedo, dolores articulares o desacondicionamiento.\n\n**3. Deportistas que vuelven a la competición** — Salvar la distancia entre «curado» y «apto para competir». El BFR acelera la reconstrucción muscular en la fase en la que aún no se permite la carga máxima.",
          "ku": "**1. Qonaxa zû ya piştî emeliyatê** — Piştî emeliyata girêka xaçerê, menîskê an protezê: ji hefteya 2yemîn ve avakirina masûlkeyan, bêyî xistina movikê nav xeterê. Kabika çoka we dibêje «spas».\n\n**2. Kalemêrên di xetera sarkopeniyê de** — Windakirina hêza masûlkeyan bi temen re ne qeder e. BFR perwerdeyeke bi bandor gengaz dike heta dema ku barên giran nayên ragirtin — ji ber tirsê, êşên movikan an kêmbûna şiyanê.\n\n**3. Werzîşvanên ku vedigerin qadê** — Valahiya di navbera «baş bûye» û «amade ye ji bo pêşbirkê» de dagirtin. BFR avakirina masûlkeyan di qonaxa ku barê herî zêde hê nehatiye destûrdan de lez dike.",
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
          "uk": "Безпека та протипоказання",
          "es": "Seguridad y contraindicaciones",
          "ku": "Ewlehî û dij-nîşan",
        },
        body: {
          de: "BFR ist bei korrekter Anwendung **sicher** — das bestätigen die Meta-Analysen. Nebenwirkungen (leichte Rötung, vorübergehendes Taubheitsgefühl) sind mild und verschwinden nach dem Training. **Nicht geeignet** ist BFR bei: aktiver tiefer Venenthrombose, unkontrolliertem Bluthochdruck (≥180/110), Lymphödem der betroffenen Extremität, oder aktiver Krebserkrankung in der Region. **Wichtig**: BFR sollte immer von einem **ausgebildeten Therapeuten** mit kalibrierten Geräten durchgeführt werden. Elastische Bänder aus dem Internet sind kein Ersatz für ein medizinisches Doppler-System. Bei Praxis Loten in Eupen verwenden wir ausschließlich professionelle Systeme mit individueller Druckmessung.",
          fr: "Le BFR est **sûr** lorsqu'il est correctement appliqué — les méta-analyses le confirment. Les effets secondaires (légère rougeur, engourdissement temporaire) sont légers et disparaissent après l'entraînement. Le BFR **n'est pas adapté** en cas de : thrombose veineuse profonde active, hypertension non contrôlée (≥180/110), lymphœdème du membre concerné, ou cancer actif dans la région. **Important** : le BFR doit toujours être réalisé par un **thérapeute formé** avec du matériel calibré. Les bandes élastiques achetées sur internet ne remplacent pas un système Doppler médical. Chez Praxis Loten à Eupen, nous utilisons exclusivement des systèmes professionnels avec mesure de pression individualisée.",
          en: "BFR is **safe** when correctly applied — meta-analyses confirm this. Side effects (mild redness, temporary numbness) are minor and disappear after training. BFR is **not suitable** for: active deep vein thrombosis, uncontrolled hypertension (≥180/110), lymphoedema of the affected limb, or active cancer in the region. **Important**: BFR should always be performed by a **trained therapist** with calibrated equipment. Elastic bands from the internet are no substitute for a medical Doppler system. At Praxis Loten in Eupen, we exclusively use professional systems with individualised pressure measurement.",
          nl: "BFR is **veilig** bij correcte toepassing — meta-analyses bevestigen dit. Bijwerkingen (lichte roodheid, tijdelijke gevoelloosheid) zijn mild. BFR is **niet geschikt** bij: actieve diepe veneuze trombose, ongecontroleerde hypertensie (≥180/110), lymfoedeem van het aangedane ledemaat, of actieve kanker in de regio. **Belangrijk**: BFR moet altijd door een **getrainde therapeut** met gekalibreerde apparatuur worden uitgevoerd.",
          tr: "BFR doğru uygulandığında **güvenlidir** — meta-analizler bunu doğrulamaktadır. Yan etkiler (hafif kızarıklık, geçici uyuşukluk) hafiftir. BFR şu durumlarda **uygun değildir**: aktif derin ven trombozu, kontrol edilemeyen hipertansiyon (≥180/110), etkilenen ekstremitenin lenf ödemi, veya bölgede aktif kanser. **Önemli**: BFR her zaman kalibre edilmiş ekipmanla **eğitimli bir terapist** tarafından yapılmalıdır.",
          ar: "BFR **آمن** عند تطبيقه بشكل صحيح — التحليلات الوصفية تؤكد ذلك. BFR **غير مناسب** في حالة: تخثر وريدي عميق نشط، ارتفاع ضغط دم غير مسيطر عليه (≥180/110)، وذمة لمفاوية في الطرف المصاب، أو سرطان نشط في المنطقة. **مهم**: يجب دائمًا إجراء BFR بواسطة **معالج مدرب** بمعدات معايرة.",
          pl: "BFR jest **bezpieczny** przy prawidłowym stosowaniu — meta-analizy to potwierdzają. BFR **nie jest odpowiedni** w przypadku: aktywnej zakrzepicy żył głębokich, niekontrolowanego nadciśnienia (≥180/110), obrzęku limfatycznego zajętej kończyny, lub aktywnego nowotworu w regionie. **Ważne**: BFR powinien zawsze być wykonywany przez **wykwalifikowanego terapeutę** ze skalibrowanym sprzętem.",
          "uk": "BFR є **безпечним** за правильного застосування — це підтверджують метааналізи. Побічні ефекти (легке почервоніння, тимчасове оніміння) незначні й зникають після тренування. BFR **не підходить** у разі: активного тромбозу глибоких вен, неконтрольованої артеріальної гіпертензії (≥180/110), лімфедеми відповідної кінцівки або активного раку в цій ділянці. **Важливо**: BFR завжди має проводити **підготовлений терапевт** із каліброваним обладнанням. Еластичні стрічки, куплені в інтернеті, не замінюють медичної доплерівської системи. У Praxis Loten в Ойпені ми використовуємо виключно професійні системи з індивідуальним вимірюванням тиску.",
          "es": "El BFR es **seguro** cuando se aplica correctamente, como confirman los metaanálisis. Los efectos secundarios (ligero enrojecimiento, entumecimiento temporal) son leves y desaparecen tras el entrenamiento. El BFR **no es adecuado** en caso de: trombosis venosa profunda activa, hipertensión no controlada (≥180/110), linfedema del miembro afectado o cáncer activo en la zona. **Importante**: el BFR debe realizarlo siempre un **terapeuta formado** con material calibrado. Las bandas elásticas compradas en internet no sustituyen a un sistema Doppler médico. En Praxis Loten (Eupen) utilizamos exclusivamente sistemas profesionales con medición individualizada de la presión.",
          "ku": "BFR **ewle** ye dema ku bi rêkûpêk tê sepandin — meta-analîz vê piştrast dikin. Bandorên alî (sorbûneke sivik, bêhestbûneke demkî) sivik in û piştî perwerdeyê winda dibin. BFR **ne guncav e** di van rewşan de: trombozeke damarên kûr a çalak, tansiyona bilind a nekontrolkirî (≥180/110), lîmfodema endamê têkildar, an penceşêreke çalak li wê herêmê. **Girîng**: divê BFR her tim ji hêla **terapîstekî perwerdekirî** ve bi amûrên kalîbrekirî were kirin. Bendên elastîk ên ku ji înternetê hatine kirîn cihê pergaleke Doppler a bijîjkî nagirin. Li Praxis Loten li Eupenê, em tenê pergalên profesyonel bi pîvandina zextê ya kesane bi kar tînin.",
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
          "uk": "У кабінеті Praxis Loten в Ойпені: BFR з Thom Petit",
          "es": "En la consulta Praxis Loten de Eupen: BFR con Thom Petit",
          "ku": "Li kabîneya Praxis Loten li Eupenê: BFR bi Thom Petit re",
        },
        body: {
          fr: "**1. Évaluation individualisée** — Thom Petit évalue votre situation (type d'opération, stade de cicatrisation, objectifs) et détermine si le BFR est adapté pour vous. Pas de recette unique.\n\n**2. Mesure Doppler personnalisée** — Le système calibré mesure votre pression d'occlusion artérielle individuelle pour calculer la pression de travail optimale (40–80 % selon la zone).\n\n**3. Protocole progressif** — Intégré dans votre programme de rééducation global, le BFR évolue avec vous : de la phase de protection vers le retour à la performance.\n\n**4. Formation Kinesport certifiée** — Thom est formé selon les standards internationaux Kinesport, garantissant une application sûre et fondée sur les dernières données scientifiques.",
          en: "**1. Individualised evaluation** — Thom Petit assesses your situation (surgery type, healing stage, goals) and determines whether BFR is right for you. No one-size-fits-all.\n\n**2. Personalised Doppler measurement** — The calibrated system measures your individual arterial occlusion pressure to calculate optimal working pressure (40–80% depending on the zone).\n\n**3. Progressive protocol** — Integrated into your overall rehabilitation programme, BFR evolves with you: from protection phase to return to performance.\n\n**4. Kinesport certified training** — Thom is trained according to international Kinesport standards, ensuring safe, evidence-based application.",
          de: "**1. Individuelle Evaluation** — Thom Petit beurteilt Ihre Situation (Operationstyp, Heilungsphase, Ziele) und bestimmt, ob BFR für Sie geeignet ist. Kein Einheitsrezept.\n\n**2. Personalisierte Doppler-Messung** — Das kalibrierte System misst Ihren individuellen arteriellen Okklusionsdruck und berechnet den optimalen Arbeitsdruck (40–80 % je nach Zone).\n\n**3. Progressives Protokoll** — Integriert in Ihr gesamtes Reha-Programm, entwickelt sich das BFR mit Ihnen: von der Schutzphase bis zur Rückkehr zur Leistung.\n\n**4. Kinesport-zertifizierte Ausbildung** — Thom ist nach internationalen Kinesport-Standards ausgebildet, was eine sichere und evidenzbasierte Anwendung garantiert.",
          nl: "**1. Geïndividualiseerde evaluatie** — Thom Petit beoordeelt uw situatie (type operatie, genezingsfase, doelen) en bepaalt of BFR geschikt is.\n\n**2. Gepersonaliseerde Doppler-meting** — Het gekalibreerde systeem meet uw individuele arteriële occlusiedruk.\n\n**3. Progressief protocol** — Geïntegreerd in uw totale revalidatieprogramma evolueert BFR met u mee.\n\n**4. Kinesport-gecertificeerde opleiding** — Thom is opgeleid volgens internationale Kinesport-standaarden.",
          tr: "**1. Bireyselleştirilmiş değerlendirme** — Thom Petit durumunuzu değerlendirir ve BFR'nin size uygun olup olmadığını belirler.\n\n**2. Kişiselleştirilmiş Doppler ölçümü** — Kalibre edilmiş sistem optimal çalışma basıncını hesaplar.\n\n**3. Progresif protokol** — Genel rehabilitasyon programınıza entegre edilmiştir.\n\n**4. Kinesport sertifikalı eğitim** — Thom uluslararası Kinesport standartlarına göre eğitilmiştir.",
          ar: "**1. تقييم فردي** — يقيم ثوم بيتي وضعك ويحدد ما إذا كان BFR مناسبًا لك.\n\n**2. قياس دوبلر شخصي** — النظام المعاير يقيس ضغط الانسداد الشرياني الفردي.\n\n**3. بروتوكول تقدمي** — مدمج في برنامج إعادة التأهيل الشامل.\n\n**4. تدريب معتمد من Kinesport** — ثوم مدرب وفق المعايير الدولية.",
          pl: "**1. Zindywidualizowana ocena** — Thom Petit ocenia Twoją sytuację i określa czy BFR jest dla Ciebie odpowiedni.\n\n**2. Spersonalizowany pomiar Doppler** — Skalibrowany system mierzy indywidualne ciśnienie okluzji tętniczej.\n\n**3. Progresywny protokół** — Zintegrowany z całościowym programem rehabilitacji.\n\n**4. Certyfikowane szkolenie Kinesport** — Thom jest szkolony według międzynarodowych standardów Kinesport.",
          "uk": "**1. Індивідуальна оцінка** — Thom Petit оцінює Вашу ситуацію (тип операції, стадію загоєння, цілі) і визначає, чи підходить Вам BFR. Жодного універсального рецепта.\n\n**2. Персоналізоване доплерівське вимірювання** — Калібрований пристрій вимірює Ваш індивідуальний тиск артеріальної оклюзії, щоб розрахувати оптимальний робочий тиск (40–80 % залежно від ділянки).\n\n**3. Поступовий протокол** — Інтегрований у Вашу загальну програму реабілітації, BFR змінюється разом із Вами: від фази захисту до повернення до високих результатів.\n\n**4. Сертифіковане навчання Kinesport** — Thom навчався за міжнародними стандартами Kinesport, що гарантує безпечне застосування, засноване на найновіших наукових даних.",
          "es": "**1. Evaluación individualizada** — Thom Petit evalúa su situación (tipo de operación, fase de cicatrización, objetivos) y determina si el BFR es adecuado para usted. No hay una receta única.\n\n**2. Medición Doppler personalizada** — El sistema calibrado mide su presión de oclusión arterial individual para calcular la presión de trabajo óptima (40–80 % según la zona).\n\n**3. Protocolo progresivo** — Integrado en su programa global de rehabilitación, el BFR evoluciona con usted: desde la fase de protección hasta la vuelta al rendimiento.\n\n**4. Formación Kinesport certificada** — Thom está formado según los estándares internacionales de Kinesport, lo que garantiza una aplicación segura y basada en los datos científicos más recientes.",
          "ku": "**1. Nirxandina kesane** — Thom Petit rewşa we (cureyê emeliyatê, qonaxa saxbûna birînê, armanc) dinirxîne û diyar dike ka BFR ji bo we guncav e an na. Reçeteyeke yekane tune ye.\n\n**2. Pîvandina Doppler a kesane** — Pergala kalîbrekirî zexta girtina arteran a kesane ya we dipîve da ku zexta xebatê ya çêtirîn hesab bike (40–80 % li gorî herêmê).\n\n**3. Protokola pêşkeftî** — Di nav bernameya we ya giştî ya rehabîlîtasyonê de, BFR bi we re pêş ve diçe: ji qonaxa parastinê heta vegera performansê.\n\n**4. Perwerdeya Kinesport a sertîfîkekirî** — Thom li gorî standardên navneteweyî yên Kinesport hatiye perwerdekirin, ku sepandineke ewle û li ser daneyên zanistî yên herî dawî ava dibe garantî dike.",
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
      "uk": [
        "Приріст м'язів лише при 20–30 % максимального навантаження",
        "Безпечно вже з 2 тижнів після операції (під наглядом)",
        "Понад 300 досліджень доводять ефективність",
        "Калібрована доплерівська система в Praxis Loten в Ойпені",
        "Сертифікований Kinesport: Thom Petit"
      ],
      "es": [
        "Ganancia muscular con solo el 20–30 % de la carga máxima",
        "Seguro desde 2 semanas tras la operación (bajo supervisión)",
        "Más de 300 estudios demuestran su eficacia",
        "Sistema Doppler calibrado en Praxis Loten (Eupen)",
        "Certificado Kinesport: Thom Petit"
      ],
      "ku": [
        "Qezenca masûlkeyan bi tenê 20–30 % ji barê herî zêde",
        "Ji 2 hefteyên piştî emeliyatê ve ewle ye (di bin çavdêriyê de)",
        "Zêdetirî 300 lêkolîn bandoriyê îspat dikin",
        "Pergala Doppler a kalîbrekirî li Praxis Loten li Eupenê",
        "Sertîfîkaya Kinesport: Thom Petit"
      ],
    },
    ctaText: {
      de: "Nach einer OP oder Muskelschwund? Thom Petit bei Praxis Loten in Eupen berät Sie zum BFR-Training.",
      fr: "Après une opération ou perte musculaire ? Thom Petit chez Praxis Loten à Eupen vous conseille sur le BFR.",
      en: "After surgery or muscle loss? Thom Petit at Praxis Loten in Eupen advises you on BFR training.",
      nl: "Na een operatie of spierverlies? Thom Petit bij Praxis Loten in Eupen adviseert u over BFR-training.",
      tr: "Ameliyat sonrası veya kas kaybı mı? Eupen'deki Praxis Loten'de Thom Petit BFR antrenmanı konusunda sizi bilgilendirir.",
      ar: "بعد عملية أو فقدان عضلي؟ ثوم بيتي في Praxis Loten في Eupen ينصحك بشأن تدريب BFR.",
      pl: "Po operacji lub utrata mięśni? Thom Petit w Praxis Loten w Eupen doradzi Ci w sprawie treningu BFR.",
      "uk": "Після операції чи втрати м'язової маси? Thom Petit у Praxis Loten в Ойпені проконсультує Вас щодо BFR.",
      "es": "¿Tras una operación o pérdida muscular? Thom Petit, en Praxis Loten (Eupen), le asesora sobre el BFR.",
      "ku": "Piştî emeliyatê an windakirina masûlkeyan? Thom Petit li Praxis Loten li Eupenê li ser BFR şêwirdariyê dide we.",
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
      "uk": "Ця стаття має виключно інформаційний характер. Тренування BFR слід виконувати лише під наглядом підготовленого терапевта.",
      "es": "Este artículo tiene una finalidad exclusivamente informativa. El entrenamiento BFR solo debe practicarse bajo la supervisión de un terapeuta formado.",
      "ku": "Ev gotar tenê ji bo agahdariyê ye. Divê perwerdeya BFR tenê di bin çavdêriya terapîstekî perwerdekirî de were kirin.",
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
    "uk": "Смарт-годинник і біль — що Ваш годинник справді може для Вас зробити",
    "es": "Reloj inteligente y dolor: lo que su reloj puede hacer realmente por usted",
    "ku": "Saeta biaqil û êş — Saeta we bi rastî dikare çi ji bo we bike",
  },
  category: {
    de: "Therapie & Technologie",
    fr: "Thérapie & Technologie",
    en: "Therapy & Technology",
    nl: "Therapie & Technologie",
    tr: "Terapi & Teknoloji",
    ar: "العلاج والتكنولوجيا",
    pl: "Terapia & Technologia",
    "uk": "Терапія і технології",
    "es": "Terapia y tecnología",
    "ku": "Terapî û Teknolojî",
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
    "uk": "Apple Watch, Garmin, Fitbit, Oura Ring — мільйони людей сьогодні носять пристрої, що вимірюють їхній сон, частоту серцевих скорочень і кроки. Але чи можуть ці дані справді допомогти при хронічному болю? Наукова відповідь захоплює: **біль полегшує не годинник — а рух, до якого він спонукає.** У нашому кабінеті в Ойпені ми використовуємо ці технології як союзників реабілітації. Ось як отримати максимум від Вашого смарт-годинника.",
    "es": "Apple Watch, Garmin, Fitbit, Oura Ring: hoy millones de personas llevan dispositivos que miden su sueño, su frecuencia cardíaca y sus pasos. Pero ¿pueden estos datos ayudar realmente en caso de dolor crónico? La respuesta científica es fascinante: **no es el reloj lo que alivia el dolor, sino el movimiento que fomenta.** En nuestra consulta de Eupen utilizamos estas tecnologías como aliadas de la rehabilitación. Así puede sacar el máximo partido a su reloj inteligente.",
    "ku": "Apple Watch, Garmin, Fitbit, Oura Ring — îro bi milyonan mirov amûrên ku xew, lêdana dil û gavên wan dipîvin li xwe dikin. Lê gelo ev dane bi rastî dikarin di êşên kronîk de alîkar bin? Bersiva zanistî balkêş e: **ne saet êşê sivik dike — lê ew tevgera ku ew teşwîq dike.** Li kabîneya me ya li Eupenê, em van teknolojiyan wekî hevalbendên rehabîlîtasyonê bi kar tînin. Li vir hûn ê fêr bibin ka hûn çawa herî zêde ji saeta xwe ya biaqil sûd werbigirin.",
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
        "uk": "Ні, Ваш годинник не лікує біль",
        "es": "No, su reloj no cura el dolor",
        "ku": "Na, saeta we êşê derman nake",
      },
      body: {
        de: "Lassen Sie uns einen weit verbreiteten Mythos entlarven: **Kein tragbares Gerät hat eine direkte schmerzlindernde Wirkung.** Ihre Smartwatch ist kein Medikament. Die wissenschaftliche Literatur ist eindeutig: Die isolierte Nutzung eines Aktivitätstrackers hat keinen direkten und signifikanten Einfluss auf die Schmerzintensität.\n\nAber — und das ist die gute Nachricht — die Forschung zeigt ebenso deutlich, dass Aktivitätstracker eine **klinisch bedeutsame und dauerhafte Steigerung der körperlichen Aktivität** bewirken, über alle Altersgruppen hinweg. Und genau diese Steigerung der Bewegung löst tiefgreifende neurophysiologische Mechanismen der Schmerzmodulation aus.\n\nMit anderen Worten: Die Uhr ist nicht die Medizin. **Die Uhr ist der Kompass, der Sie zur Medizin führt — der Bewegung.**",
        fr: "Déconstruisons un mythe répandu : **aucun dispositif portable n'a d'effet antidouleur direct.** Votre montre connectée n'est pas un médicament. La littérature scientifique est formelle : l'utilisation isolée d'un traqueur d'activité n'a pas d'effet direct et significatif sur l'intensité de la douleur.\n\nMais — et c'est la bonne nouvelle — la recherche montre tout aussi clairement que les traqueurs d'activité induisent une **augmentation cliniquement importante et durable de l'activité physique**, dans tous les groupes d'âge. Et c'est précisément cette augmentation du mouvement qui déclenche des mécanismes neurophysiologiques profonds de modulation de la douleur.\n\nAutrement dit : la montre n'est pas le remède. **La montre est la boussole qui vous guide vers le remède — le mouvement.**",
        en: "Let's bust a widespread myth: **no wearable device has a direct pain-relieving effect.** Your smartwatch is not a medication. The scientific literature is clear: using an activity tracker alone has no direct, significant impact on pain intensity.\n\nBut — and this is the good news — research equally shows that activity trackers drive a **clinically meaningful and lasting increase in physical activity**, across all age groups. And it is precisely this increase in movement that triggers profound neurophysiological pain modulation mechanisms.\n\nIn other words: the watch is not the medicine. **The watch is the compass that guides you to the medicine — movement.**",
        nl: "Laten we een wijdverbreide mythe ontkrachten: **geen enkel draagbaar apparaat heeft een direct pijnstillend effect.** Uw smartwatch is geen medicijn. De wetenschappelijke literatuur is duidelijk: het geïsoleerde gebruik van een activiteitstracker heeft geen direct en significant effect op de pijnintensiteit.\n\nMaar — en dat is het goede nieuws — onderzoek toont even duidelijk aan dat activiteitstrackers een **klinisch betekenisvolle en duurzame toename van fysieke activiteit** bewerkstelligen, in alle leeftijdsgroepen. En het is precies deze toename in beweging die diepe neurofysiologische mechanismen van pijnmodulatie activeert.\n\nMet andere woorden: het horloge is niet het medicijn. **Het horloge is het kompas dat u naar het medicijn leidt — beweging.**",
        tr: "Yaygın bir efsaneyi çürütelim: **hiçbir giyilebilir cihazın doğrudan ağrı kesici etkisi yoktur.** Akıllı saatiniz bir ilaç değildir. Bilimsel literatür açıktır: bir aktivite takipçisinin tek başına kullanımının ağrı yoğunluğu üzerinde doğrudan ve anlamlı bir etkisi yoktur.\n\nAma — ve işte iyi haber — araştırmalar aktivite takipçilerinin tüm yaş gruplarında **klinik olarak anlamlı ve kalıcı bir fiziksel aktivite artışı** sağladığını da açıkça göstermektedir. Ve tam da bu hareket artışı, derin nörofizyolojik ağrı modülasyon mekanizmalarını tetikler.\n\nBaşka bir deyişle: saat ilaç değildir. **Saat, sizi ilaca — harekete — yönlendiren pusuladır.**",
        ar: "لنكشف أسطورة شائعة: **لا يوجد جهاز قابل للارتداء له تأثير مباشر في تخفيف الألم.** ساعتك الذكية ليست دواءً. الأدبيات العلمية واضحة: استخدام متتبع النشاط وحده ليس له تأثير مباشر وملموس على شدة الألم.\n\nلكن — وهنا الخبر السار — تُظهر الأبحاث بوضوح أيضاً أن متتبعات النشاط تُحدث **زيادة مهمة سريرياً ودائمة في النشاط البدني**، عبر جميع الفئات العمرية. وهذه الزيادة في الحركة بالتحديد هي التي تُطلق آليات عصبية فسيولوجية عميقة لتعديل الألم.\n\nبمعنى آخر: الساعة ليست العلاج. **الساعة هي البوصلة التي ترشدك إلى العلاج — الحركة.**",
        pl: "Obalmy powszechny mit: **żadne urządzenie noszone nie ma bezpośredniego działania przeciwbólowego.** Twój smartwatch nie jest lekiem. Literatura naukowa jest jednoznaczna: samo używanie trackera aktywności nie ma bezpośredniego, znaczącego wpływu na intensywność bólu.\n\nAle — i to dobra wiadomość — badania równie wyraźnie pokazują, że trackery aktywności powodują **klinicznie istotny i trwały wzrost aktywności fizycznej**, we wszystkich grupach wiekowych. I to właśnie ten wzrost ruchu uruchamia głębokie neurofizjologiczne mechanizmy modulacji bólu.\n\nInnymi słowy: zegarek nie jest lekarstwem. **Zegarek jest kompasem, który prowadzi do lekarstwa — ruchu.**",
        "uk": "Розвіймо поширений міф: **жоден носимий пристрій не має прямої знеболювальної дії.** Ваш смарт-годинник — не ліки. Наукова література однозначна: саме лише використання фітнес-трекера не має прямого й значущого впливу на інтенсивність болю.\n\nАле — і це добра новина — дослідження так само чітко показують, що фітнес-трекери спричиняють **клінічно важливе та стійке збільшення фізичної активності** в усіх вікових групах. І саме це збільшення руху запускає глибокі нейрофізіологічні механізми модуляції болю.\n\nІншими словами: годинник — не ліки. **Годинник — це компас, що веде Вас до ліків — руху.**",
        "es": "Desmontemos un mito muy extendido: **ningún dispositivo portátil tiene un efecto analgésico directo.** Su reloj inteligente no es un medicamento. La literatura científica es clara: el uso aislado de un monitor de actividad no tiene un efecto directo ni significativo sobre la intensidad del dolor.\n\nPero —y esta es la buena noticia— la investigación muestra con la misma claridad que los monitores de actividad producen un **aumento clínicamente importante y duradero de la actividad física** en todos los grupos de edad. Y es precisamente este aumento del movimiento lo que pone en marcha profundos mecanismos neurofisiológicos de modulación del dolor.\n\nDicho de otro modo: el reloj no es el remedio. **El reloj es la brújula que le guía hacia el remedio: el movimiento.**",
        "ku": "Werin em efsaneyeke belav ji holê rakin: **tu amûreke ku li xwe tê kirin bandoreke rasterast a dijî êşê nîne.** Saeta we ya biaqil ne derman e. Edebiyata zanistî zelal e: bikaranîna tenê ya şopînerê çalakiyê bandoreke rasterast û girîng li ser tundiya êşê nake.\n\nLê — û ev nûçeya baş e — lêkolîn bi heman zelalî nîşan didin ku şopînerên çalakiyê dibin sedema **zêdebûneke klînîkî girîng û mayînde ya çalakiya laşî**, di hemû komên temenî de. Û tam ev zêdebûna tevgerê mekanîzmayên kûr ên neurofîzyolojîk ên modulasyona êşê dide destpêkirin.\n\nBi gotineke din: saet ne derman e. **Saet ew pûsla ye ku we ber bi dermên ve dibe — tevger.**",
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
        "uk": "Рух — Ваш природний знеболювальний засіб",
        "es": "El movimiento: su analgésico natural",
        "ku": "Tevger — dermanê we yê xwezayî yê dijî êşê",
      },
      body: {
        de: "Wenn Sie sich regelmäßig bewegen, aktiviert Ihr Körper ein faszinierendes Schutzsystem: die **bewegungsinduzierte Schmerzlinderung**. Dieses wissenschaftlich dokumentierte Phänomen funktioniert über mehrere Wege gleichzeitig:\n\n**Natürliche Schmerzmittel** — Moderate Bewegung regt die Ausschüttung von Endorphinen und Endocannabinoiden an, körpereigene Substanzen, die Ihre Schmerzempfindlichkeit deutlich senken.\n\n**Anti-Angst-Effekt** — Bewegung aktiviert das Belohnungszentrum Ihres Gehirns und hemmt gleichzeitig Angstreaktionen. So hilft regelmäßige Bewegung, die Angst vor dem Bewegen zu überwinden.\n\n**Entzündungsbremse** — Körperliche Aktivität reduziert chronische Entzündungen auf zellulärer Ebene und stellt das Gleichgewicht des Nervensystems wieder her.\n\nEine große Studie mit über 11 000 Teilnehmern hat gezeigt: Bereits **80 Minuten Gehen pro Tag** senkt das Risiko für chronische Rückenschmerzen um 13 %. Ab 100 Minuten liegt die Reduktion bei 23 %.",
        fr: "Quand vous bougez régulièrement, votre corps active un système de protection fascinant : **l'hypoalgésie induite par l'exercice**. Ce phénomène scientifiquement documenté fonctionne par plusieurs voies simultanément :\n\n**Antidouleurs naturels** — L'exercice modéré stimule la libération d'endorphines et d'endocannabinoïdes, des substances produites par votre corps qui diminuent considérablement votre sensibilité à la douleur.\n\n**Effet anti-peur** — Le mouvement active le circuit de la récompense dans votre cerveau et inhibe simultanément les réactions de peur. Ainsi, bouger régulièrement aide à surmonter la peur du mouvement.\n\n**Frein anti-inflammatoire** — L'activité physique réduit l'inflammation chronique au niveau cellulaire et rétablit l'équilibre du système nerveux.\n\nUne vaste étude portant sur plus de 11 000 participants a montré que **80 minutes de marche par jour** réduisent le risque de lombalgie chronique de 13 %. À partir de 100 minutes, la réduction atteint 23 %.",
        en: "When you move regularly, your body activates a fascinating defence system: **exercise-induced hypoalgesia**. This scientifically documented phenomenon works through several pathways simultaneously:\n\n**Natural painkillers** — Moderate exercise stimulates the release of endorphins and endocannabinoids, substances produced by your body that significantly reduce your pain sensitivity.\n\n**Anti-fear effect** — Movement activates the reward circuit in your brain while simultaneously inhibiting fear responses. Regular movement thus helps overcome the fear of moving.\n\n**Anti-inflammatory brake** — Physical activity reduces chronic inflammation at the cellular level and restores nervous system balance.\n\nA large study of over 11,000 participants showed that just **80 minutes of walking per day** reduces the risk of chronic low back pain by 13%. From 100 minutes, the reduction reaches 23%.",
        nl: "Wanneer u regelmatig beweegt, activeert uw lichaam een fascinerend beschermingssysteem: **bewegingsgeïnduceerde pijnvermindering**. Dit wetenschappelijk gedocumenteerde fenomeen werkt via meerdere routes tegelijk:\n\n**Natuurlijke pijnstillers** — Matige beweging stimuleert de afgifte van endorfines en endocannabinoïden, stoffen die uw lichaam zelf aanmaakt en die uw pijngevoeligheid aanzienlijk verminderen.\n\n**Anti-angsteffect** — Beweging activeert het beloningscentrum in uw hersenen en remt tegelijkertijd angstreacties. Zo helpt regelmatig bewegen om de angst voor bewegen te overwinnen.\n\n**Ontstekingsrem** — Fysieke activiteit vermindert chronische ontsteking op cellulair niveau en herstelt het evenwicht van het zenuwstelsel.\n\nEen grote studie met meer dan 11.000 deelnemers toonde aan dat al **80 minuten wandelen per dag** het risico op chronische lage rugpijn met 13% verlaagt. Vanaf 100 minuten bereikt de vermindering 23%.",
        tr: "Düzenli hareket ettiğinizde, vücudunuz büyüleyici bir koruma sistemi devreye sokar: **egzersizle indüklenen ağrı azalması**. Bilimsel olarak belgelenmiş bu fenomen aynı anda birkaç yoldan çalışır:\n\n**Doğal ağrı kesiciler** — Orta düzey egzersiz, vücudunuzun ürettiği ve ağrı duyarlılığınızı önemli ölçüde azaltan endorfin ve endokannabinoidlerin salınımını uyarır.\n\n**Korku karşıtı etki** — Hareket beyninizdeki ödül devresini aktive ederken aynı anda korku tepkilerini baskılar. Böylece düzenli hareket, hareket korkusunun üstesinden gelmeye yardımcı olur.\n\n**İltihaplanma freni** — Fiziksel aktivite, hücresel düzeyde kronik iltihaplanmayı azaltır ve sinir sistemi dengesini yeniden kurar.\n\n11.000'den fazla katılımcıyla yapılan büyük bir çalışma, günde yalnızca **80 dakika yürümenin** kronik bel ağrısı riskini %13 azalttığını göstermiştir. 100 dakikadan itibaren azalma %23'e ulaşır.",
        ar: "عندما تتحركون بانتظام، يُفعّل جسمكم نظام حماية مذهلاً: **تخفيف الألم المُحدث بالتمرين**. هذه الظاهرة الموثقة علمياً تعمل عبر عدة مسارات في آنٍ واحد:\n\n**مسكنات طبيعية** — التمرين المعتدل يحفز إفراز الإندورفين والإندوكانابينويد، وهي مواد ينتجها جسمكم تُقلل بشكل ملحوظ من حساسيتكم للألم.\n\n**تأثير مضاد للخوف** — الحركة تنشط دائرة المكافأة في دماغكم وتثبط في الوقت نفسه ردود فعل الخوف. هكذا تساعد الحركة المنتظمة في التغلب على الخوف من الحركة.\n\n**كابح الالتهاب** — النشاط البدني يقلل الالتهاب المزمن على المستوى الخلوي ويعيد توازن الجهاز العصبي.\n\nأظهرت دراسة واسعة شملت أكثر من 11,000 مشارك أن مجرد **80 دقيقة من المشي يومياً** يقلل خطر آلام أسفل الظهر المزمنة بنسبة 13%. ومن 100 دقيقة تصل النسبة إلى 23%.",
        pl: "Gdy regularnie się ruszasz, Twoje ciało aktywuje fascynujący system ochronny: **hipoalgezję wywołaną ćwiczeniami**. To naukowo udokumentowane zjawisko działa jednocześnie kilkoma drogami:\n\n**Naturalne środki przeciwbólowe** — Umiarkowany wysiłek stymuluje wydzielanie endorfin i endokannabinoidów, substancji produkowanych przez organizm, które znacząco zmniejszają wrażliwość na ból.\n\n**Efekt antylękowy** — Ruch aktywuje obwód nagrody w mózgu i jednocześnie hamuje reakcje lękowe. Regularne ćwiczenia pomagają przezwyciężyć strach przed ruchem.\n\n**Hamulec przeciwzapalny** — Aktywność fizyczna redukuje przewlekły stan zapalny na poziomie komórkowym i przywraca równowagę układu nerwowego.\n\nDuże badanie obejmujące ponad 11 000 uczestników wykazało, że już **80 minut spaceru dziennie** zmniejsza ryzyko przewlekłego bólu pleców o 13%. Od 100 minut redukcja sięga 23%.",
        "uk": "Коли Ви регулярно рухаєтеся, Ваше тіло вмикає дивовижну захисну систему: **гіпоалгезію, викликану фізичним навантаженням**. Це науково задокументоване явище діє кількома шляхами одночасно:\n\n**Природні знеболювальні** — Помірне фізичне навантаження стимулює вивільнення ендорфінів та ендоканабіноїдів — речовин, які виробляє Ваше тіло і які значно знижують Вашу чутливість до болю.\n\n**Ефект проти страху** — Рух активує систему винагороди у Вашому мозку й водночас гальмує реакції страху. Тож регулярний рух допомагає подолати страх перед рухом.\n\n**Протизапальне гальмо** — Фізична активність зменшує хронічне запалення на клітинному рівні та відновлює рівновагу нервової системи.\n\nВелике дослідження за участю понад 11 000 осіб показало, що **80 хвилин ходьби на день** знижують ризик хронічного болю в попереку на 13 %. Від 100 хвилин зниження сягає 23 %.",
        "es": "Cuando se mueve con regularidad, su cuerpo activa un fascinante sistema de protección: **la hipoalgesia inducida por el ejercicio**. Este fenómeno, documentado científicamente, actúa por varias vías a la vez:\n\n**Analgésicos naturales** — El ejercicio moderado estimula la liberación de endorfinas y endocannabinoides, sustancias que produce su propio cuerpo y que reducen notablemente su sensibilidad al dolor.\n\n**Efecto contra el miedo** — El movimiento activa el circuito de recompensa de su cerebro y, al mismo tiempo, inhibe las reacciones de miedo. Así, moverse con regularidad ayuda a superar el miedo al movimiento.\n\n**Freno antiinflamatorio** — La actividad física reduce la inflamación crónica a nivel celular y restablece el equilibrio del sistema nervioso.\n\nUn amplio estudio con más de 11 000 participantes mostró que **80 minutos de caminata al día** reducen un 13 % el riesgo de lumbalgia crónica. A partir de 100 minutos, la reducción llega al 23 %.",
        "ku": "Dema ku hûn bi rêkûpêk dilivin, laşê we pergaleke parastinê ya balkêş çalak dike: **hîpoalgezîya ku ji werzîşê çêdibe**. Ev diyardeya ku bi awayekî zanistî hatiye belgekirin di heman demê de bi çend rêyan dixebite:\n\n**Dermanên xwezayî yên dijî êşê** — Werzîşa navîn derketina endorfîn û endokanabînoîdan teşwîq dike, ew madeyên ku laşê we bi xwe çêdike û hestiyariya we ya li hember êşê gelekî kêm dikin.\n\n**Bandora dijî tirsê** — Tevger çerxa xelatê ya di mêjiyê we de çalak dike û di heman demê de bertekên tirsê asteng dike. Bi vî awayî, livîna bi rêkûpêk alîkariya derbaskirina tirsa ji tevgerê dike.\n\n**Frena dijî iltîhabê** — Çalakiya laşî iltîhaba kronîk di asta şaneyan de kêm dike û hevsengiya pergala demaran ji nû ve saz dike.\n\nLêkolîneke mezin a bi zêdetirî 11 000 beşdaran nîşan da ku **80 deqe meş di rojê de** xetera êşa pişta jêrîn a kronîk 13 % kêm dike. Ji 100 deqeyan û pê ve, kêmbûn digihîje 23 %.",
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
        "uk": "Стежте за тенденцією, а не за цифрою",
        "es": "Siga la tendencia, no la cifra",
        "ku": "Meylê bişopînin, ne hejmarê",
      },
      body: {
        de: "> *\u00ab Die beste Nutzung Ihrer Smartwatch? Vergleichen Sie sich heute mit sich selbst von letzter Woche \u2014 nie mit einer Norm oder einem anderen Menschen. \u00bb*\n\nDas ist **die** Regel, die alles ver\u00e4ndert. Die Wissenschaft zeigt n\u00e4mlich, dass die verschiedenen Marken nicht die gleiche Sprache sprechen: Apple Watch misst die Herzfrequenzvariabilit\u00e4t anders als Garmin, und Fitbit anders als Oura Ring. Die Werte sind zwischen Ger\u00e4ten **nicht vergleichbar**.\n\nAber jedes Ger\u00e4t ist **in sich selbst zuverl\u00e4ssig**, um Ihre pers\u00f6nlichen Trends \u00fcber Wochen und Monate zu verfolgen. Wenn Ihre Schrittzahl stetig steigt, wenn Ihr Schlaf sich verbessert, wenn Ihre Erholung zunimmt \u2014 dann sind Sie auf dem richtigen Weg. Egal was die absolute Zahl sagt.\n\nVergessen Sie die \u00ab 10 000 Schritte pro Tag \u00bb. Dieses Ziel ist **nicht wissenschaftlich fundiert** und kann entmutigend wirken. Starten Sie von Ihrem aktuellen Durchschnitt und steigern Sie ihn um 40 bis 60 % \u00fcber mehrere Wochen.",
        fr: "> *\u00ab La meilleure utilisation de votre montre connect\u00e9e ? Comparez-vous aujourd\u2019hui \u00e0 vous-m\u00eame la semaine derni\u00e8re \u2014 jamais \u00e0 une norme ni \u00e0 quelqu\u2019un d\u2019autre. \u00bb*\n\nC\u2019est **la** r\u00e8gle qui change tout. La science montre en effet que les diff\u00e9rentes marques ne parlent pas le m\u00eame langage : l\u2019Apple Watch mesure la variabilit\u00e9 cardiaque diff\u00e9remment de Garmin, et Fitbit diff\u00e9remment d\u2019Oura Ring. Les valeurs sont **incomparables** entre appareils.\n\nMais chaque appareil est **fiable en lui-m\u00eame** pour suivre vos tendances personnelles sur des semaines et des mois. Si votre nombre de pas augmente r\u00e9guli\u00e8rement, si votre sommeil s\u2019am\u00e9liore, si votre r\u00e9cup\u00e9ration progresse \u2014 vous \u00eates sur la bonne voie. Peu importe le chiffre absolu.\n\nOubliez les \u00ab 10 000 pas par jour \u00bb. Cet objectif n\u2019est **pas fond\u00e9 scientifiquement** et peut d\u00e9courager. Partez de votre moyenne actuelle et augmentez-la de 40 \u00e0 60 % sur plusieurs semaines.",
        en: "> *\"The best use of your smartwatch? Compare yourself today to yourself last week \u2014 never to a standard or someone else.\"*\n\nThis is **the** rule that changes everything. Science shows that different brands don\u2019t speak the same language: Apple Watch measures heart rate variability differently from Garmin, and Fitbit differently from Oura Ring. Values are **not comparable** between devices.\n\nBut each device is **reliable on its own** for tracking your personal trends over weeks and months. If your step count steadily rises, if your sleep improves, if your recovery progresses \u2014 you\u2019re on the right track. Regardless of the absolute number.\n\nForget the \"10,000 steps per day\" rule. This target is **not scientifically based** and can be discouraging. Start from your current average and increase it by 40 to 60% over several weeks.",
        nl: "> *\u00ab Het beste gebruik van uw smartwatch? Vergelijk uzelf vandaag met uzelf van vorige week \u2014 nooit met een norm of iemand anders. \u00bb*\n\nDit is **de** regel die alles verandert. De wetenschap toont namelijk aan dat verschillende merken niet dezelfde taal spreken: Apple Watch meet de hartslagvariabiliteit anders dan Garmin, en Fitbit anders dan Oura Ring. De waarden zijn **niet vergelijkbaar** tussen apparaten.\n\nMaar elk apparaat is **op zichzelf betrouwbaar** om uw persoonlijke trends over weken en maanden te volgen. Als uw stappentelling gestaag stijgt, als uw slaap verbetert, als uw herstel vooruitgaat \u2014 bent u op de goede weg. Ongeacht het absolute getal.\n\nVergeet de \u00ab 10.000 stappen per dag \u00bb. Dit doel is **niet wetenschappelijk onderbouwd** en kan ontmoedigend werken. Begin vanaf uw huidige gemiddelde en verhoog het met 40 tot 60% over meerdere weken.",
        tr: "> *\u00ab Ak\u0131ll\u0131 saatinizin en iyi kullan\u0131m\u0131? Bug\u00fcnk\u00fc kendinizi ge\u00e7en haftaki kendinizle kar\u015f\u0131la\u015ft\u0131r\u0131n \u2014 asla bir normla ya da ba\u015fka biriyle de\u011fil. \u00bb*\n\nBu, **her \u015feyi de\u011fi\u015ftiren** kurald\u0131r. Bilim g\u00f6steriyor ki farkl\u0131 markalar ayn\u0131 dili konu\u015fmuyor: Apple Watch kalp at\u0131\u015f de\u011fi\u015fkenli\u011fini Garmin\u2019den farkl\u0131 \u00f6l\u00e7er, Fitbit ise Oura Ring\u2019den farkl\u0131. De\u011ferler cihazlar aras\u0131nda **kar\u015f\u0131la\u015ft\u0131r\u0131lamaz**.\n\nAma her cihaz, haftalar ve aylar boyunca ki\u015fisel e\u011filimlerinizi takip etmek i\u00e7in **kendi i\u00e7inde g\u00fcvenilirdir**. Ad\u0131m say\u0131n\u0131z istikrarl\u0131 \u015fekilde art\u0131yorsa, uykunuz iyile\u015fiyorsa, toparlanman\u0131z ilerliyorsa \u2014 do\u011fru yoldas\u0131n\u0131z. Mutlak say\u0131 ne olursa olsun.\n\n\u00ab G\u00fcnde 10.000 ad\u0131m \u00bb kural\u0131n\u0131 unutun. Bu hedef **bilimsel temelli de\u011fildir** ve cesaretinizi k\u0131rabilir. Mevcut ortalamanızdan başlayın ve birkaç hafta içinde %40-60 artırın.",
        ar: "> *\u00ab \u0623\u0641\u0636\u0644 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0644\u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629\u061f \u0642\u0627\u0631\u0646\u0648\u0627 \u0623\u0646\u0641\u0633\u0643\u0645 \u0627\u0644\u064a\u0648\u0645 \u0628\u0623\u0646\u0641\u0633\u0643\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a \u2014 \u0644\u0627 \u0628\u0645\u0639\u064a\u0627\u0631 \u0648\u0644\u0627 \u0628\u0634\u062e\u0635 \u0622\u062e\u0631. \u00bb*\n\n\u0647\u0630\u0647 \u0647\u064a **\u0627\u0644\u0642\u0627\u0639\u062f\u0629** \u0627\u0644\u062a\u064a \u062a\u063a\u064a\u0631 \u0643\u0644 \u0634\u064a\u0621. \u0627\u0644\u0639\u0644\u0645 \u064a\u064f\u0638\u0647\u0631 \u0623\u0646 \u0627\u0644\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0627\u0644\u0645\u062e\u062a\u0644\u0641\u0629 \u0644\u0627 \u062a\u062a\u062d\u062f\u062b \u0646\u0641\u0633 \u0627\u0644\u0644\u063a\u0629: Apple Watch \u062a\u0642\u064a\u0633 \u062a\u0642\u0644\u0628 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0639\u0646 Garmin\u060c \u0648Fitbit \u0628\u0637\u0631\u064a\u0642\u0629 \u0645\u062e\u062a\u0644\u0641\u0629 \u0639\u0646 Oura Ring. \u0627\u0644\u0642\u064a\u0645 **\u063a\u064a\u0631 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629** \u0628\u064a\u0646 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.\n\n\u0644\u0643\u0646 \u0643\u0644 \u062c\u0647\u0627\u0632 **\u0645\u0648\u062b\u0648\u0642 \u0628\u0630\u0627\u062a\u0647** \u0644\u062a\u062a\u0628\u0639 \u0627\u062a\u062c\u0627\u0647\u0627\u062a\u0643\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u0629 \u0639\u0628\u0631 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0648\u0627\u0644\u0623\u0634\u0647\u0631. \u0625\u0630\u0627 \u0643\u0627\u0646 \u0639\u062f\u062f \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u064a\u0632\u062f\u0627\u062f \u0628\u0627\u0633\u062a\u0645\u0631\u0627\u0631\u060c \u0625\u0630\u0627 \u0643\u0627\u0646 \u0646\u0648\u0645\u0643\u0645 \u064a\u062a\u062d\u0633\u0646\u060c \u0625\u0630\u0627 \u0643\u0627\u0646 \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u064a\u062a\u0642\u062f\u0645 \u2014 \u0641\u0623\u0646\u062a\u0645 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064a\u0642 \u0627\u0644\u0635\u062d\u064a\u062d. \u0628\u063a\u0636 \u0627\u0644\u0646\u0638\u0631 \u0639\u0646 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0637\u0644\u0642.\n\n\u0627\u0646\u0633\u0648\u0627 \u00ab 10,000 \u062e\u0637\u0648\u0629 \u0641\u064a \u0627\u0644\u064a\u0648\u0645 \u00bb. \u0647\u0630\u0627 \u0627\u0644\u0647\u062f\u0641 **\u0644\u064a\u0633 \u0645\u0628\u0646\u064a\u0627\u064b \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 \u0639\u0644\u0645\u064a** \u0648\u0642\u062f \u064a\u0643\u0648\u0646 \u0645\u062d\u0628\u0637\u0627\u064b. \u0627\u0628\u062f\u0623\u0648\u0627 \u0645\u0646 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0632\u064a\u062f\u0648\u0647 \u0628\u0646\u0633\u0628\u0629 40 \u0625\u0644\u0649 60% \u0639\u0644\u0649 \u0645\u062f\u0649 \u0639\u062f\u0629 \u0623\u0633\u0627\u0628\u064a\u0639.",
        pl: "> *\u00ab Najlepsze wykorzystanie smartwatcha? Por\u00f3wnuj siebie dzi\u015b z sob\u0105 sprzed tygodnia \u2014 nigdy z norm\u0105 ani z kim\u015b innym. \u00bb*\n\nTo jest **ta** zasada, kt\u00f3ra zmienia wszystko. Nauka pokazuje, \u017ce r\u00f3\u017cne marki nie m\u00f3wi\u0105 tym samym j\u0119zykiem: Apple Watch mierzy zmienno\u015b\u0107 rytmu serca inaczej ni\u017c Garmin, a Fitbit inaczej ni\u017c Oura Ring. Warto\u015bci **nie s\u0105 por\u00f3wnywalne** mi\u0119dzy urz\u0105dzeniami.\n\nAle ka\u017cde urz\u0105dzenie jest **wiarygodne samo w sobie** do \u015bledzenia Twoich osobistych trend\u00f3w przez tygodnie i miesi\u0105ce. Je\u015bli liczba krok\u00f3w stale ro\u015bnie, je\u015bli sen si\u0119 poprawia, je\u015bli regeneracja post\u0119puje \u2014 jeste\u015b na dobrej drodze. Niezale\u017cnie od liczby bezwzgl\u0119dnej.\n\nZapomnij o \u00ab 10 000 krokach dziennie \u00bb. Ten cel **nie ma podstaw naukowych** i mo\u017ce zniech\u0119ca\u0107. Zacznij od swojej obecnej \u015bredniej i zwi\u0119ksz j\u0105 o 40-60% w ci\u0105gu kilku tygodni.",
        "uk": "> *«Найкраще використання Вашого смарт-годинника? Порівнюйте себе сьогоднішнього із собою минулого тижня — ніколи з нормою чи з кимось іншим.»*\n\nЦе **те саме** правило, що змінює все. Наука показує, що різні бренди не говорять однією мовою: Apple Watch вимірює варіабельність серцевого ритму інакше, ніж Garmin, а Fitbit — інакше, ніж Oura Ring. Значення різних пристроїв **неможливо порівнювати** між собою.\n\nАле кожен пристрій **надійний сам по собі**, щоб відстежувати Ваші особисті тенденції впродовж тижнів і місяців. Якщо кількість Ваших кроків поступово зростає, якщо Ваш сон покращується, якщо Ваше відновлення прогресує — Ви на правильному шляху. Абсолютна цифра не важлива.\n\nЗабудьте про «10 000 кроків на день». Ця мета **не має наукового підґрунтя** і може знеохочувати. Почніть із Вашого поточного середнього значення та збільшуйте його на 40–60 % упродовж кількох тижнів.",
        "es": "> *«¿El mejor uso de su reloj inteligente? Compárese hoy con usted mismo la semana pasada, nunca con una norma ni con otra persona.»*\n\nEsa es **la** regla que lo cambia todo. La ciencia muestra que las distintas marcas no hablan el mismo idioma: el Apple Watch mide la variabilidad de la frecuencia cardíaca de forma distinta a Garmin, y Fitbit de forma distinta a Oura Ring. Los valores **no son comparables** entre dispositivos.\n\nPero cada dispositivo es **fiable en sí mismo** para seguir sus tendencias personales a lo largo de semanas y meses. Si su número de pasos aumenta de forma constante, si su sueño mejora, si su recuperación progresa, va por buen camino. La cifra absoluta da igual.\n\nOlvídese de los «10 000 pasos al día». Ese objetivo **no tiene base científica** y puede desanimar. Parta de su media actual y auméntela entre un 40 y un 60 % a lo largo de varias semanas.",
        "ku": "> *«Bikaranîna herî baş a saeta we ya biaqil? Îro xwe bi xwe re ya hefteya borî bidin ber hev — qet ne bi normekê an bi kesekî din re.»*\n\nEv **ew** rêgez e ku her tiştî diguherîne. Zanist nîşan dide ku markeyên cuda bi heman zimanî naaxivin: Apple Watch guherbariya lêdana dil ji Garminê cudatir dipîve, û Fitbit jî ji Oura Ringê cudatir. Nirx di navbera amûran de **nayên berhevkirin**.\n\nLê her amûr **bi serê xwe pêbawer e** da ku meylên we yên kesane di nav hefte û mehan de bişopîne. Ger hejmara gavên we bi rêkûpêk zêde dibe, ger xewa we baştir dibe, ger vehesîna we pêş dikeve — hûn li ser rêya rast in. Hejmara mutleq ne girîng e.\n\n«10 000 gav di rojê de» ji bîr bikin. Ev armanc **ne li ser bingeheke zanistî ye** û dikare hêviyê bişkîne. Ji navînîya xwe ya niha dest pê bikin û wê di nav çend hefteyan de 40 heta 60 % zêde bikin.",
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
        "uk": "3 звички для Вашого смарт-годинника",
        "es": "3 reflejos para su reloj inteligente",
        "ku": "3 adet ji bo saeta we ya biaqil",
      },
      body: {
        de: "**1. Beobachten Sie Ihren Schritttrend \u00fcber 7 Tage** \u2014 Notieren Sie sich Ihren aktuellen Wochendurchschnitt. Dann steigern Sie ihn sanft: von 4 500 auf 6 000, dann auf 7 000 Schritte pro Tag. Die Forschung zeigt, dass bereits eine Steigerung um 40 % zu messbaren Verbesserungen bei chronischen Schmerzen f\u00fchrt. Keine Spr\u00fcnge \u2014 kontinuierliche Steigerung.\n\n**2. Nutzen Sie Ihre Erholungsdaten am Morgen** \u2014 Schauen Sie beim Aufwachen auf Ihre Variabilit\u00e4t der Herzfrequenz (VFC/HRV) oder Ihren \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Ist der Wert niedriger als Ihr pers\u00f6nlicher Durchschnitt? Dann w\u00e4hlen Sie sanfte Bewegung statt intensivem Training. So vermeiden Sie R\u00fcckschl\u00e4ge.\n\n**3. Vertrauen Sie dem Schlaf-Trend, nicht dem Score** \u2014 Schlafscores k\u00f6nnen t\u00e4glich stark schwanken und sind manchmal ungenau. Was z\u00e4hlt: Schlafen Sie im Durchschnitt mehr als letzte Woche? Wachen Sie seltener auf? Das ist Ihr wahrer Fortschritt.",
        fr: "**1. Observez votre tendance de pas sur 7 jours** \u2014 Notez votre moyenne hebdomadaire actuelle. Puis augmentez-la progressivement : de 4 500 \u00e0 6 000, puis \u00e0 7 000 pas par jour. La recherche montre qu\u2019une augmentation de seulement 40 % produit d\u00e9j\u00e0 des am\u00e9liorations mesurables sur les douleurs chroniques. Pas de bonds \u2014 une progression continue.\n\n**2. Utilisez vos donn\u00e9es de r\u00e9cup\u00e9ration le matin** \u2014 Au r\u00e9veil, consultez votre variabilit\u00e9 de la fr\u00e9quence cardiaque (VFC/HRV) ou votre \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. La valeur est plus basse que votre moyenne personnelle ? Optez pour du mouvement doux plut\u00f4t qu\u2019un entra\u00eenement intense. Vous \u00e9viterez ainsi les rechutes.\n\n**3. Fiez-vous \u00e0 la tendance du sommeil, pas au score** \u2014 Les scores de sommeil peuvent varier fortement d\u2019un jour \u00e0 l\u2019autre et sont parfois impr\u00e9cis. Ce qui compte : dormez-vous en moyenne plus que la semaine derni\u00e8re ? Vous r\u00e9veillez-vous moins souvent ? Voil\u00e0 votre vrai progr\u00e8s.",
        en: "**1. Watch your step trend over 7 days** \u2014 Note your current weekly average. Then increase it gradually: from 4,500 to 6,000, then to 7,000 steps per day. Research shows that just a 40% increase already produces measurable improvements in chronic pain. No jumps \u2014 steady progression.\n\n**2. Use your recovery data in the morning** \u2014 On waking, check your heart rate variability (HRV) or your \"Body Battery\"/\"Readiness Score\". Is it lower than your personal average? Choose gentle movement rather than intense training. This helps you avoid setbacks.\n\n**3. Trust the sleep trend, not the score** \u2014 Sleep scores can fluctuate wildly day-to-day and are sometimes inaccurate. What matters: are you sleeping more on average than last week? Waking less often? That\u2019s your real progress.",
        nl: "**1. Bekijk uw stappentrend over 7 dagen** \u2014 Noteer uw huidige weekgemiddelde. Verhoog het dan geleidelijk: van 4.500 naar 6.000, dan naar 7.000 stappen per dag. Onderzoek toont aan dat slechts 40% meer stappen al meetbare verbeteringen bij chronische pijn oplevert. Geen sprongen \u2014 gestage progressie.\n\n**2. Gebruik uw herstelgegevens \u2019s ochtends** \u2014 Bekijk bij het ontwaken uw hartslagvariabiliteit (HRV) of uw \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Is de waarde lager dan uw persoonlijk gemiddelde? Kies dan zachte beweging in plaats van intensieve training. Zo voorkomt u terugvallen.\n\n**3. Vertrouw op de slaaptrend, niet op de score** \u2014 Slaapscores kunnen dagelijks sterk schommelen en zijn soms onnauwkeurig. Wat telt: slaapt u gemiddeld meer dan vorige week? Wordt u minder vaak wakker? Dat is uw echte vooruitgang.",
        tr: "**1. 7 g\u00fcnl\u00fck ad\u0131m e\u011filiminizi izleyin** \u2014 Mevcut haftal\u0131k ortalamanızı not edin. Sonra kademeli olarak art\u0131r\u0131n: g\u00fcnde 4.500\u2019den 6.000\u2019e, ard\u0131ndan 7.000 ad\u0131ma. Ara\u015ft\u0131rmalar, sadece %40\u2019l\u0131k bir art\u0131\u015f\u0131n bile kronik a\u011fr\u0131larda \u00f6l\u00e7\u00fclebilir iyile\u015fmeler sa\u011flad\u0131\u011f\u0131n\u0131 g\u00f6stermektedir. Ani s\u0131\u00e7ramalar yok \u2014 s\u00fcrekli ilerleme.\n\n**2. Sabahlar\u0131 toparlanma verilerinizi kullan\u0131n** \u2014 Uyand\u0131\u011f\u0131n\u0131zda kalp at\u0131\u015f de\u011fi\u015fkenli\u011finize (HRV) veya \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb\u2019unuza bak\u0131n. Ki\u015fisel ortalamanızdan d\u00fc\u015f\u00fckse yo\u011fun antrenman yerine hafif hareket tercih edin. B\u00f6ylece geri d\u00f6n\u00fc\u015flerden ka\u00e7\u0131n\u0131rs\u0131n\u0131z.\n\n**3. Uyku skoruna de\u011fil, uyku e\u011filimine g\u00fcvenin** \u2014 Uyku puanlar\u0131 g\u00fcnden g\u00fcne b\u00fcy\u00fck farkl\u0131l\u0131klar g\u00f6sterebilir ve bazen yan\u0131lt\u0131c\u0131d\u0131r. \u00d6nemli olan: ge\u00e7en haftaya g\u00f6re ortalama daha fazla m\u0131 uyuyorsunuz? Daha az m\u0131 uyan\u0131yorsunuz? \u0130\u015fte ger\u00e7ek ilerlemeniz bu.",
        ar: "**1. \u0631\u0627\u0642\u0628\u0648\u0627 \u0627\u062a\u062c\u0627\u0647 \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u0639\u0644\u0649 \u0645\u062f\u0649 7 \u0623\u064a\u0627\u0645** \u2014 \u0633\u062c\u0644\u0648\u0627 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064a \u0627\u0644\u062d\u0627\u0644\u064a. \u062b\u0645 \u0632\u064a\u062f\u0648\u0647 \u062a\u062f\u0631\u064a\u062c\u064a\u0627\u064b: \u0645\u0646 4,500 \u0625\u0644\u0649 6,000 \u062b\u0645 \u0625\u0644\u0649 7,000 \u062e\u0637\u0648\u0629 \u064a\u0648\u0645\u064a\u0627\u064b. \u062a\u064f\u0638\u0647\u0631 \u0627\u0644\u0623\u0628\u062d\u0627\u062b \u0623\u0646 \u0632\u064a\u0627\u062f\u0629 \u0628\u0646\u0633\u0628\u0629 40% \u0641\u0642\u0637 \u062a\u064f\u0646\u062a\u062c \u0628\u0627\u0644\u0641\u0639\u0644 \u062a\u062d\u0633\u064a\u0646\u0627\u062a \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0642\u064a\u0627\u0633 \u0641\u064a \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0645\u0632\u0645\u0646. \u0628\u062f\u0648\u0646 \u0642\u0641\u0632\u0627\u062a \u2014 \u062a\u0642\u062f\u0645 \u0645\u0633\u062a\u0645\u0631.\n\n**2. \u0627\u0633\u062a\u062e\u062f\u0645\u0648\u0627 \u0628\u064a\u0627\u0646\u0627\u062a \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d** \u2014 \u0639\u0646\u062f \u0627\u0644\u0627\u0633\u062a\u064a\u0642\u0627\u0638\u060c \u062a\u062d\u0642\u0642\u0648\u0627 \u0645\u0646 \u062a\u0642\u0644\u0628 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 (HRV) \u0623\u0648 \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. \u0647\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0623\u0642\u0644 \u0645\u0646 \u0645\u062a\u0648\u0633\u0637\u0643\u0645 \u0627\u0644\u0634\u062e\u0635\u064a\u061f \u0627\u062e\u062a\u0627\u0631\u0648\u0627 \u0627\u0644\u062d\u0631\u0643\u0629 \u0627\u0644\u0644\u0637\u064a\u0641\u0629 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0645\u0643\u062b\u0641. \u0647\u0643\u0630\u0627 \u062a\u062a\u062c\u0646\u0628\u0648\u0646 \u0627\u0644\u0627\u0646\u062a\u0643\u0627\u0633\u0627\u062a.\n\n**3. \u062b\u0642\u0648\u0627 \u0628\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0646\u0648\u0645 \u0648\u0644\u064a\u0633 \u0628\u0627\u0644\u0646\u062a\u064a\u062c\u0629** \u2014 \u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0646\u0648\u0645 \u0642\u062f \u062a\u062a\u0623\u0631\u062c\u062d \u0628\u0634\u0643\u0644 \u0643\u0628\u064a\u0631 \u064a\u0648\u0645\u064a\u0627\u064b \u0648\u0623\u062d\u064a\u0627\u0646\u0627\u064b \u062a\u0643\u0648\u0646 \u063a\u064a\u0631 \u062f\u0642\u064a\u0642\u0629. \u0627\u0644\u0645\u0647\u0645: \u0647\u0644 \u062a\u0646\u0627\u0645\u0648\u0646 \u0641\u064a \u0627\u0644\u0645\u062a\u0648\u0633\u0637 \u0623\u0643\u062b\u0631 \u0645\u0646 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u0645\u0627\u0636\u064a\u061f \u0647\u0644 \u062a\u0633\u062a\u064a\u0642\u0638\u0648\u0646 \u0623\u0642\u0644\u061f \u0647\u0630\u0627 \u0647\u0648 \u062a\u0642\u062f\u0645\u0643\u0645 \u0627\u0644\u062d\u0642\u064a\u0642\u064a.",
        pl: "**1. Obserwuj trend krok\u00f3w przez 7 dni** \u2014 Zanotuj swoj\u0105 obecn\u0105 \u015bredni\u0105 tygodniow\u0105. Nast\u0119pnie zwi\u0119kszaj j\u0105 stopniowo: z 4 500 do 6 000, potem do 7 000 krok\u00f3w dziennie. Badania pokazuj\u0105, \u017ce ju\u017c 40% wzrost przynosi mierzalne poprawy w b\u00f3lu przewlek\u0142ym. Bez skok\u00f3w \u2014 sta\u0142y post\u0119p.\n\n**2. Wykorzystuj dane regeneracji rano** \u2014 Po przebudzeniu sprawd\u017a zmienno\u015b\u0107 rytmu serca (HRV) lub \u00ab Body Battery \u00bb/\u00ab Readiness Score \u00bb. Warto\u015b\u0107 ni\u017csza ni\u017c Twoja osobista \u015brednia? Wybierz \u0142agodny ruch zamiast intensywnego treningu. Tak unikniesz nawrot\u00f3w.\n\n**3. Ufaj trendowi snu, nie punktacji** \u2014 Wyniki snu mog\u0105 si\u0119 silnie waha\u0107 z dnia na dzie\u0144 i bywaj\u0105 niedok\u0142adne. Liczy si\u0119: czy \u015bpisz \u015brednio wi\u0119cej ni\u017c w zesz\u0142ym tygodniu? Czy budzisz si\u0119 rzadziej? To jest Tw\u00f3j prawdziwy post\u0119p.",
        "uk": "**1. Стежте за тенденцією кроків за 7 днів** — Запишіть Ваше поточне середнє значення за тиждень. Потім поступово збільшуйте його: з 4 500 до 6 000, далі до 7 000 кроків на день. Дослідження показують, що збільшення лише на 40 % уже дає помітні покращення при хронічному болю. Без стрибків — поступове зростання.\n\n**2. Використовуйте дані про відновлення вранці** — Прокинувшись, перегляньте Вашу варіабельність серцевого ритму (ВСР/HRV) або Ваш «Body Battery»/«Readiness Score». Значення нижче за Ваше особисте середнє? Оберіть м’який рух замість інтенсивного тренування. Так Ви уникнете рецидивів.\n\n**3. Довіряйте тенденції сну, а не оцінці** — Оцінки сну можуть сильно коливатися від дня до дня і часом бувають неточними. Важливо інше: чи спите Ви в середньому більше, ніж минулого тижня? Чи рідше прокидаєтеся? Ось Ваш справжній прогрес.",
        "es": "**1. Observe su tendencia de pasos en 7 días** — Anote su media semanal actual. Después auméntela poco a poco: de 4 500 a 6 000 y luego a 7 000 pasos al día. La investigación muestra que un aumento de solo un 40 % ya produce mejoras medibles en el dolor crónico. Sin saltos: una progresión continua.\n\n**2. Utilice sus datos de recuperación por la mañana** — Al despertar, consulte su variabilidad de la frecuencia cardíaca (VFC/HRV) o su «Body Battery»/«Readiness Score». ¿El valor es más bajo que su media personal? Opte por un movimiento suave en lugar de un entrenamiento intenso. Así evitará recaídas.\n\n**3. Confíe en la tendencia del sueño, no en la puntuación** — Las puntuaciones de sueño pueden variar mucho de un día a otro y a veces son imprecisas. Lo que cuenta: ¿duerme de media más que la semana pasada? ¿Se despierta menos veces? Ese es su verdadero progreso.",
        "ku": "**1. Meyla gavên xwe di 7 rojan de bişopînin** — Navînîya xwe ya heftane ya niha binivîsin. Paşê wê hêdî hêdî zêde bikin: ji 4 500 bo 6 000, paşê bo 7 000 gav di rojê de. Lêkolîn nîşan didin ku zêdebûneke tenê 40 % jî di êşên kronîk de baştirbûnên pîvanbar çêdike. Bê baz — pêşveçûneke berdewam.\n\n**2. Sibehê daneyên xwe yên vehesînê bi kar bînin** — Dema ku hûn şiyar dibin, li guherbariya lêdana dilê xwe (VFC/HRV) an li «Body Battery»/«Readiness Score» ya xwe binêrin. Nirx ji navînîya we ya kesane kêmtir e? Li şûna perwerdehiyeke giran, tevgereke nerm hilbijêrin. Bi vî awayî hûn ê ji vegera êşê dûr bimînin.\n\n**3. Bi meyla xewê bawer bikin, ne bi pûanê** — Pûanên xewê dikarin ji rojekê bo rojeke din gelekî biguherin û carinan ne rast in. Tiştê girîng: gelo hûn bi navînî ji hefteya borî zêdetir radizên? Gelo hûn kêmtir şiyar dibin? Ev e pêşveçûna we ya rastîn.",
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
        "uk": "Коли варто бути уважними",
        "es": "Cuándo prestar atención",
        "ku": "Kengê divê hûn bala xwe bidin",
      },
      body: {
        de: "Ihre Smartwatch liefert Ihnen wertvolle Hinweise \u2014 aber sie ist **kein Arzt**. Hier sind Situationen, in denen die Daten Sie zum Handeln auffordern sollten:\n\n\u2022 **Ihre VFC/HRV sinkt mehrere Tage in Folge** und Ihre Ruheherzfrequenz steigt gleichzeitig \u2014 das kann auf \u00fcberm\u00e4\u00dfigen Stress, schlechten Schlaf oder eine beginnende Entz\u00fcndung hinweisen. Reduzieren Sie die Intensit\u00e4t.\n\n\u2022 **Sie haben Ihre Aktivit\u00e4t abrupt verdoppelt oder verdreifacht** \u2014 Die Forschung zeigt, dass ein Verh\u00e4ltnis von mehr als 1,5 zwischen Ihrer aktuellen Wochenbelastung und dem Durchschnitt der letzten 4 Wochen das Risiko f\u00fcr Schmerzsch\u00fcbe deutlich erh\u00f6ht. Progression ist der Schl\u00fcssel.\n\n\u2022 **Ihre Schmerzen verschlechtern sich trotz steigender Aktivit\u00e4t** \u2014 Manchmal braucht das Nervensystem bei chronischen Schmerzen Zeit, sich anzupassen. Wenn die Verschlechterung anh\u00e4lt, sollten Sie einen Physiotherapeuten in Eupen konsultieren, der Ihr Programm anpassen kann.\n\n\u2022 **Ihre Uhr zeigt wiederholt \u00ab ungew\u00f6hnliche Herzfrequenz \u00bb** \u2014 Lassen Sie das \u00e4rztlich abkl\u00e4ren. Die Erkennung von Herzrhythmusst\u00f6rungen geh\u00f6rt zu den st\u00e4rksten klinisch validierten Funktionen der Smartwatches.",
        fr: "Votre montre connect\u00e9e vous fournit des indices pr\u00e9cieux \u2014 mais elle n\u2019est **pas un m\u00e9decin**. Voici les situations o\u00f9 les donn\u00e9es doivent vous inciter \u00e0 agir :\n\n\u2022 **Votre VFC/HRV baisse plusieurs jours de suite** et votre fr\u00e9quence cardiaque au repos augmente simultan\u00e9ment \u2014 cela peut indiquer un stress excessif, un mauvais sommeil ou un d\u00e9but d\u2019inflammation. R\u00e9duisez l\u2019intensit\u00e9.\n\n\u2022 **Vous avez brusquement doubl\u00e9 ou tripl\u00e9 votre activit\u00e9** \u2014 La recherche montre qu\u2019un ratio sup\u00e9rieur \u00e0 1,5 entre votre charge de la semaine en cours et la moyenne des 4 derni\u00e8res semaines augmente significativement le risque de pouss\u00e9e douloureuse. La progressivit\u00e9 est la cl\u00e9.\n\n\u2022 **Vos douleurs s\u2019aggravent malgr\u00e9 une activit\u00e9 croissante** \u2014 Parfois, le syst\u00e8me nerveux a besoin de temps pour s\u2019adapter en cas de douleurs chroniques. Si la d\u00e9gradation persiste, consultez un kin\u00e9sith\u00e9rapeute \u00e0 Eupen qui pourra ajuster votre programme.\n\n\u2022 **Votre montre signale des \u00ab fr\u00e9quences cardiaques inhabituelles \u00bb** \u2014 Faites-le v\u00e9rifier par un m\u00e9decin. La d\u00e9tection des troubles du rythme cardiaque est l\u2019une des fonctions les mieux valid\u00e9es cliniquement des montres connect\u00e9es.",
        en: "Your smartwatch provides valuable clues \u2014 but it is **not a doctor**. Here are situations where the data should prompt you to act:\n\n\u2022 **Your HRV drops for several days running** while your resting heart rate rises simultaneously \u2014 this may indicate excessive stress, poor sleep or early inflammation. Reduce your intensity.\n\n\u2022 **You\u2019ve suddenly doubled or tripled your activity** \u2014 Research shows that a ratio above 1.5 between your current week\u2019s load and the average of the past 4 weeks significantly increases the risk of a pain flare-up. Gradual progression is key.\n\n\u2022 **Your pain worsens despite increasing activity** \u2014 Sometimes the nervous system needs time to adapt with chronic pain. If the worsening persists, consult a physiotherapist in Eupen who can adjust your programme.\n\n\u2022 **Your watch repeatedly flags \"unusual heart rate\"** \u2014 Have it checked by a doctor. Detecting heart rhythm disorders is one of the strongest clinically validated smartwatch features.",
        nl: "Uw smartwatch levert waardevolle aanwijzingen \u2014 maar het is **geen arts**. Hier zijn situaties waarin de gegevens u tot actie moeten aanzetten:\n\n\u2022 **Uw HRV daalt meerdere dagen achtereen** en uw rustpols stijgt gelijktijdig \u2014 dit kan wijzen op overmatige stress, slechte slaap of beginnende ontsteking. Verminder de intensiteit.\n\n\u2022 **U hebt uw activiteit plots verdubbeld of verdrievoudigd** \u2014 Onderzoek toont aan dat een ratio boven 1,5 tussen uw huidige weekbelasting en het gemiddelde van de afgelopen 4 weken het risico op een pijnopstoot aanzienlijk verhoogt. Geleidelijke progressie is de sleutel.\n\n\u2022 **Uw pijn verergert ondanks toenemende activiteit** \u2014 Soms heeft het zenuwstelsel bij chronische pijn tijd nodig om zich aan te passen. Als de verslechtering aanhoudt, raadpleeg een fysiotherapeut in Eupen die uw programma kan aanpassen.\n\n\u2022 **Uw horloge meldt herhaaldelijk \u00ab ongebruikelijke hartslag \u00bb** \u2014 Laat dit door een arts controleren. Het detecteren van hartritmestoornissen is een van de sterkst klinisch gevalideerde functies van smartwatches.",
        tr: "Ak\u0131ll\u0131 saatiniz de\u011ferli ipu\u00e7lar\u0131 sa\u011flar \u2014 ama **doktor de\u011fildir**. \u0130\u015fte verilerin sizi harekete ge\u00e7irmesi gereken durumlar:\n\n\u2022 **HRV\u2019niz birka\u00e7 g\u00fcn \u00fcst \u00fcste d\u00fc\u015f\u00fcyorsa** ve dinlenme kalp at\u0131\u015f h\u0131z\u0131n\u0131z ayn\u0131 anda y\u00fckseliyorsa \u2014 bu a\u015f\u0131r\u0131 stres, k\u00f6t\u00fc uyku veya ba\u015flang\u0131\u00e7 a\u015famas\u0131nda bir iltihap g\u00f6stergesi olabilir. Yo\u011funlu\u011fu azalt\u0131n.\n\n\u2022 **Aktivitenizi aniden ikiye veya \u00fc\u00e7e katlad\u0131ysan\u0131z** \u2014 Ara\u015ft\u0131rmalar, mevcut hafta y\u00fck\u00fcn\u00fcz ile son 4 haftan\u0131n ortalamas\u0131 aras\u0131ndaki oran\u0131n 1,5\u2019i a\u015fmas\u0131n\u0131n a\u011fr\u0131 alevlenmesi riskini \u00f6nemli \u00f6l\u00e7\u00fcde art\u0131rd\u0131\u011f\u0131n\u0131 g\u00f6stermektedir. Kademeli ilerleme anahtard\u0131r.\n\n\u2022 **Artan aktiviteye ra\u011fmen a\u011fr\u0131n\u0131z k\u00f6t\u00fcle\u015fiyorsa** \u2014 Bazen sinir sistemi kronik a\u011fr\u0131da uyum sa\u011flamak i\u00e7in zamana ihtiya\u00e7 duyar. K\u00f6t\u00fcle\u015fme devam ederse, program\u0131n\u0131z\u0131 ayarlayabilecek Eupen\u2019deki bir fizyoterapiste dan\u0131\u015f\u0131n.\n\n\u2022 **Saatiniz tekrar tekrar \u00ab ola\u011fand\u0131\u015f\u0131 kalp at\u0131\u015f h\u0131z\u0131 \u00bb bildiriyorsa** \u2014 Bir doktora kontrol ettirin. Kalp ritmi bozukluklar\u0131n\u0131n tespiti, ak\u0131ll\u0131 saatlerin en g\u00fc\u00e7l\u00fc klinik olarak do\u011frulanm\u0131\u015f i\u015flevlerinden biridir.",
        ar: "\u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u062a\u0632\u0648\u062f\u0643\u0645 \u0628\u0645\u0624\u0634\u0631\u0627\u062a \u0642\u064a\u0645\u0629 \u2014 \u0644\u0643\u0646\u0647\u0627 **\u0644\u064a\u0633\u062a \u0637\u0628\u064a\u0628\u0627\u064b**. \u0625\u0644\u064a\u0643\u0645 \u0627\u0644\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u062c\u0628 \u0623\u0646 \u062a\u062f\u0641\u0639\u0643\u0645 \u0641\u064a\u0647\u0627 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0644\u0644\u062a\u0635\u0631\u0641:\n\n\u2022 **\u0627\u0646\u062e\u0641\u0627\u0636 HRV \u0644\u0639\u062f\u0629 \u0623\u064a\u0627\u0645 \u0645\u062a\u062a\u0627\u0644\u064a\u0629** \u0645\u0639 \u0627\u0631\u062a\u0641\u0627\u0639 \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0627\u0644\u0642\u0644\u0628 \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u0631\u0627\u062d\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062a \u2014 \u0642\u062f \u064a\u0634\u064a\u0631 \u0630\u0644\u0643 \u0625\u0644\u0649 \u0625\u062c\u0647\u0627\u062f \u0645\u0641\u0631\u0637 \u0623\u0648 \u0646\u0648\u0645 \u0633\u064a\u0626 \u0623\u0648 \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u062a\u0647\u0627\u0628. \u062e\u0641\u0641\u0648\u0627 \u0645\u0646 \u0627\u0644\u0634\u062f\u0629.\n\n\u2022 **\u0636\u0627\u0639\u0641\u062a\u0645 \u0646\u0634\u0627\u0637\u0643\u0645 \u0641\u062c\u0623\u0629** \u2014 \u062a\u064f\u0638\u0647\u0631 \u0627\u0644\u0623\u0628\u062d\u0627\u062b \u0623\u0646 \u0646\u0633\u0628\u0629 \u0623\u0639\u0644\u0649 \u0645\u0646 1.5 \u0628\u064a\u0646 \u062d\u0645\u0644 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629 \u062a\u0632\u064a\u062f \u0628\u0634\u0643\u0644 \u0643\u0628\u064a\u0631 \u0645\u0646 \u062e\u0637\u0631 \u0646\u0648\u0628\u0629 \u0627\u0644\u0623\u0644\u0645. \u0627\u0644\u062a\u062f\u0631\u062c \u0647\u0648 \u0627\u0644\u0645\u0641\u062a\u0627\u062d.\n\n\u2022 **\u0623\u0644\u0645\u0643\u0645 \u064a\u062a\u0641\u0627\u0642\u0645 \u0631\u063a\u0645 \u0632\u064a\u0627\u062f\u0629 \u0627\u0644\u0646\u0634\u0627\u0637** \u2014 \u0623\u062d\u064a\u0627\u0646\u0627\u064b \u064a\u062d\u062a\u0627\u062c \u0627\u0644\u062c\u0647\u0627\u0632 \u0627\u0644\u0639\u0635\u0628\u064a \u0648\u0642\u062a\u0627\u064b \u0644\u0644\u062a\u0643\u064a\u0641 \u0641\u064a \u062d\u0627\u0644\u0629 \u0627\u0644\u0623\u0644\u0645 \u0627\u0644\u0645\u0632\u0645\u0646. \u0625\u0630\u0627 \u0627\u0633\u062a\u0645\u0631 \u0627\u0644\u062a\u062f\u0647\u0648\u0631\u060c \u0627\u0633\u062a\u0634\u064a\u0631\u0648\u0627 \u0645\u0639\u0627\u0644\u062c\u0627\u064b \u0637\u0628\u064a\u0639\u064a\u0627\u064b \u0641\u064a \u0623\u0648\u0628\u0646 \u064a\u0645\u0643\u0646\u0647 \u062a\u0639\u062f\u064a\u0644 \u0628\u0631\u0646\u0627\u0645\u062c\u0643\u0645.\n\n\u2022 **\u0633\u0627\u0639\u062a\u0643\u0645 \u062a\u0646\u0628\u0647 \u0628\u0634\u0643\u0644 \u0645\u062a\u0643\u0631\u0631 \u0639\u0646 \u00ab \u0645\u0639\u062f\u0644 \u0636\u0631\u0628\u0627\u062a \u0642\u0644\u0628 \u063a\u064a\u0631 \u0639\u0627\u062f\u064a \u00bb** \u2014 \u0627\u0639\u0631\u0636\u0648\u0627 \u0630\u0644\u0643 \u0639\u0644\u0649 \u0637\u0628\u064a\u0628. \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0627\u0636\u0637\u0631\u0627\u0628\u0627\u062a \u0646\u0638\u0645 \u0627\u0644\u0642\u0644\u0628 \u0647\u0648 \u0645\u0646 \u0623\u0642\u0648\u0649 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u0645\u062b\u0628\u062a\u0629 \u0633\u0631\u064a\u0631\u064a\u0627\u064b \u0641\u064a \u0627\u0644\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0630\u0643\u064a\u0629.",
        pl: "Tw\u00f3j smartwatch dostarcza cennych wskaz\u00f3wek \u2014 ale **nie jest lekarzem**. Oto sytuacje, w kt\u00f3rych dane powinny Ci\u0119 sk\u0142oni\u0107 do dzia\u0142ania:\n\n\u2022 **Twoje HRV spada przez kilka dni z rz\u0119du**, a t\u0119tno spoczynkowe jednocze\u015bnie ro\u015bnie \u2014 mo\u017ce to wskazywa\u0107 na nadmierny stres, z\u0142y sen lub pocz\u0105tek stanu zapalnego. Zmniejsz intensywno\u015b\u0107.\n\n\u2022 **Nagle podwoi\u0142e\u015b lub potroi\u0142e\u015b swoj\u0105 aktywno\u015b\u0107** \u2014 Badania pokazuj\u0105, \u017ce stosunek powy\u017cej 1,5 mi\u0119dzy obci\u0105\u017ceniem bie\u017c\u0105cego tygodnia a \u015bredni\u0105 z ostatnich 4 tygodni znacz\u0105co zwi\u0119ksza ryzyko zaostrzenia b\u00f3lu. Stopniowa progresja jest kluczem.\n\n\u2022 **B\u00f3l si\u0119 pogarsza mimo rosn\u0105cej aktywno\u015bci** \u2014 Czasami uk\u0142ad nerwowy potrzebuje czasu na adaptacj\u0119 w przypadku b\u00f3lu przewlek\u0142ego. Je\u015bli pogorszenie si\u0119 utrzymuje, skonsultuj si\u0119 z fizjoterapeut\u0105 w Eupen, kt\u00f3ry dostosuje Tw\u00f3j program.\n\n\u2022 **Zegarek wielokrotnie sygnalizuje \u00ab nietypowe t\u0119tno \u00bb** \u2014 Skonsultuj to z lekarzem. Wykrywanie zaburze\u0144 rytmu serca to jedna z najsilniej klinicznie zwalidowanych funkcji smartwatchy.",
        "uk": "Ваш смарт-годинник дає Вам цінні підказки — але він **не лікар**. Ось ситуації, у яких дані мають спонукати Вас до дій:\n\n• **Ваша ВСР/HRV знижується кілька днів поспіль**, а частота серцевих скорочень у спокої водночас зростає — це може вказувати на надмірний стрес, поганий сон або початок запалення. Зменште інтенсивність.\n\n• **Ви різко подвоїли чи потроїли свою активність** — Дослідження показують, що співвідношення понад 1,5 між навантаженням поточного тижня та середнім за останні 4 тижні суттєво підвищує ризик загострення болю. Поступовість — це ключ.\n\n• **Ваш біль посилюється, попри зростання активності** — Іноді нервовій системі потрібен час, щоб адаптуватися при хронічному болю. Якщо погіршення триває, зверніться до фізіотерапевта в Ойпені, який зможе скоригувати Вашу програму.\n\n• **Ваш годинник повідомляє про «незвичний серцевий ритм»** — Попросіть лікаря це перевірити. Виявлення порушень серцевого ритму — одна з найкраще клінічно підтверджених функцій смарт-годинників.",
        "es": "Su reloj inteligente le ofrece pistas valiosas, pero **no es un médico**. Estas son las situaciones en las que los datos deberían animarle a actuar:\n\n• **Su VFC/HRV baja varios días seguidos** y, al mismo tiempo, su frecuencia cardíaca en reposo aumenta: puede indicar estrés excesivo, mal descanso o el inicio de una inflamación. Reduzca la intensidad.\n\n• **Ha duplicado o triplicado bruscamente su actividad** — La investigación muestra que una relación superior a 1,5 entre la carga de la semana en curso y la media de las últimas 4 semanas aumenta significativamente el riesgo de un brote de dolor. La progresividad es la clave.\n\n• **Su dolor empeora a pesar de una actividad creciente** — A veces, en caso de dolor crónico, el sistema nervioso necesita tiempo para adaptarse. Si el empeoramiento persiste, consulte a un fisioterapeuta en Eupen que pueda ajustar su programa.\n\n• **Su reloj indica «frecuencias cardíacas inusuales»** — Hágalo comprobar por un médico. La detección de alteraciones del ritmo cardíaco es una de las funciones de los relojes inteligentes mejor validadas clínicamente.",
        "ku": "Saeta we ya biaqil nîşaneyên hêja dide we — lê ew **ne bijîşk e**. Li vir ew rewş hene ku tê de divê dane we teşwîqî kiryarê bikin:\n\n• **VFC/HRV ya we çend rojan li pey hev dadikeve** û di heman demê de lêdana dilê we ya di bêhnvedanê de bilind dibe — ev dikare nîşana stresa zêde, xewa xirab an destpêka iltîhabekê be. Tundiyê kêm bikin.\n\n• **We ji nişkê ve çalakiya xwe du an sê qat zêde kiriye** — Lêkolîn nîşan didin ku rêjeyeke ji 1,5 zêdetir di navbera barê hefteya niha û navînîya 4 hefteyên dawî de xetera hilkişîna êşê bi awayekî girîng zêde dike. Pêşveçûna gav bi gav kilît e.\n\n• **Êşên we tevî zêdebûna çalakiyê xirabtir dibin** — Carinan di êşên kronîk de pergala demaran hewceyî demê ye da ku xwe biguncîne. Ger xirabbûn berdewam bike, serdana fizyoterapîstekî li Eupenê bikin ku dikare bernameya we eyar bike.\n\n• **Saeta we «lêdanên dil ên ne asayî» nîşan dide** — Bila bijîşkek wê kontrol bike. Tespîtkirina tevliheviyên rîtma dil yek ji fonksiyonên saetên biaqil e ku herî baş bi awayekî klînîkî hatine piştrastkirin.",
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
        "uk": "У кабінеті Praxis Loten — технології на службі терапії",
        "es": "En Praxis Loten: la tecnología al servicio de la terapia",
        "ku": "Li kabîneya Praxis Loten — Teknolojî di xizmeta terapiyê de",
      },
      body: {
        de: "In unserer Praxis in Eupen integrieren wir die Daten Ihrer Smartwatch aktiv in Ihre Therapie. So nutzen wir sie konkret:\n\n**Objektive Ausgangslage** \u2014 Bei Ihrem ersten Termin k\u00f6nnen wir Ihre durchschnittliche Schrittzahl, Ihren Schlafrhythmus und Ihre Erholungswerte der letzten Wochen analysieren. So erhalten wir ein realistisches Bild Ihres Alltags \u2014 jenseits von Erinnerungsverzerrungen.\n\n**Individuell angepasste Ziele** \u2014 Kein \u00ab 10 000 Schritte f\u00fcr alle \u00bb. Wir berechnen Ihre pers\u00f6nliche Progression basierend auf Ihren echten Daten und den wissenschaftlichen Schwellenwerten.\n\n**Belastungssteuerung** \u2014 Bei Sportlern und aktiven Patienten nutzen wir das Verh\u00e4ltnis zwischen aktueller und chronischer Belastung, um R\u00fcckf\u00e4lle zu vermeiden und die Rehabilitation sicher zu gestalten.\n\n**Gemeinsamer Fortschritt** \u2014 Ihre Daten verwandeln die Konsultation: Statt \u00ab Wie f\u00fchlen Sie sich? \u00bb k\u00f6nnen wir gemeinsam \u00ab Schauen wir, was sich ver\u00e4ndert hat \u00bb sagen. Das st\u00e4rkt Ihr Vertrauen in Ihren eigenen K\u00f6rper.\n\nBringen Sie Ihre Smartwatch gerne zu Ihrem n\u00e4chsten Termin bei Praxis Loten mit \u2014 eine von vielen M\u00f6glichkeiten, wie wir Sie begleiten k\u00f6nnen.",
        fr: "Dans notre cabinet \u00e0 Eupen, nous int\u00e9grons activement les donn\u00e9es de votre montre connect\u00e9e dans votre th\u00e9rapie. Voici comment nous les utilisons concr\u00e8tement :\n\n**Bilan objectif** \u2014 Lors de votre premier rendez-vous, nous pouvons analyser votre nombre de pas moyen, votre rythme de sommeil et vos indices de r\u00e9cup\u00e9ration des derni\u00e8res semaines. Nous obtenons ainsi un portrait r\u00e9aliste de votre quotidien \u2014 au-del\u00e0 des biais de m\u00e9moire.\n\n**Objectifs personnalis\u00e9s** \u2014 Pas de \u00ab 10 000 pas pour tout le monde \u00bb. Nous calculons votre progression individuelle sur la base de vos donn\u00e9es r\u00e9elles et des seuils scientifiques.\n\n**Gestion de la charge** \u2014 Chez les sportifs et les patients actifs, nous utilisons le rapport entre charge actuelle et charge chronique pour \u00e9viter les rechutes et s\u00e9curiser la r\u00e9\u00e9ducation.\n\n**Progression partag\u00e9e** \u2014 Vos donn\u00e9es transforment la consultation : au lieu de \u00ab Comment vous sentez-vous ? \u00bb, nous pouvons dire ensemble \u00ab Regardons ce qui a chang\u00e9 \u00bb. Cela renforce votre confiance en votre propre corps.\n\nApportez votre montre connect\u00e9e lors de votre prochain rendez-vous chez Praxis Loten \u2014 parmi de nombreuses fa\u00e7ons dont nous pouvons vous accompagner.",
        en: "At our practice in Eupen, we actively integrate your smartwatch data into your therapy. Here\u2019s how we use it:\n\n**Objective baseline** \u2014 At your first appointment, we can analyse your average step count, sleep rhythm and recovery indicators from recent weeks. This gives us a realistic picture of your daily life \u2014 beyond recall biases.\n\n**Personalised goals** \u2014 No \"10,000 steps for everyone\". We calculate your individual progression based on your real data and scientific thresholds.\n\n**Load management** \u2014 For athletes and active patients, we use the ratio between current and chronic workload to prevent setbacks and ensure safe rehabilitation.\n\n**Shared progress** \u2014 Your data transforms the consultation: instead of \"How do you feel?\", we can say together \"Let\u2019s look at what\u2019s changed\". This strengthens your trust in your own body.\n\nBring your smartwatch to your next appointment at Praxis Loten \u2014 among many ways we can support you.",
        nl: "In onze praktijk in Eupen integreren we actief de gegevens van uw smartwatch in uw therapie. Zo gebruiken we ze concreet:\n\n**Objectieve nulmeting** \u2014 Bij uw eerste afspraak kunnen we uw gemiddeld aantal stappen, slaapritme en herstelindicatoren van de afgelopen weken analyseren. Zo krijgen we een realistisch beeld van uw dagelijks leven \u2014 voorbij geheugenvertekening.\n\n**Gepersonaliseerde doelen** \u2014 Geen \u00ab 10.000 stappen voor iedereen \u00bb. We berekenen uw individuele progressie op basis van uw echte gegevens en wetenschappelijke drempels.\n\n**Belastingsbeheer** \u2014 Bij sporters en actieve pati\u00ebnten gebruiken we de verhouding tussen huidige en chronische belasting om terugvallen te voorkomen en veilige revalidatie te garanderen.\n\n**Gedeelde vooruitgang** \u2014 Uw gegevens transformeren het consult: in plaats van \u00ab Hoe voelt u zich? \u00bb kunnen we samen zeggen \u00ab Laten we kijken wat er veranderd is \u00bb. Dit versterkt uw vertrouwen in uw eigen lichaam.\n\nBreng uw smartwatch mee naar uw volgende afspraak bij Praxis Loten \u2014 onder de vele manieren waarop we u kunnen begeleiden.",
        tr: "Eupen\u2019deki klini\u011fimizde ak\u0131ll\u0131 saat verilerinizi tedavinize aktif olarak entegre ediyoruz. \u0130\u015fte somut olarak nas\u0131l kulland\u0131\u011f\u0131m\u0131z:\n\n**Objektif ba\u015flang\u0131\u00e7 noktas\u0131** \u2014 \u0130lk randevunuzda son haftalardaki ortalama ad\u0131m say\u0131n\u0131z\u0131, uyku ritminizi ve toparlanma g\u00f6stergelerinizi analiz edebiliriz. Bu, g\u00fcnl\u00fck ya\u015fam\u0131n\u0131z\u0131n ger\u00e7ek\u00e7i bir resmini verir \u2014 haf\u0131za yanl\u0131l\u0131klar\u0131n\u0131n \u00f6tesinde.\n\n**Ki\u015fiselle\u015ftirilmi\u015f hedefler** \u2014 \u00ab Herkes i\u00e7in 10.000 ad\u0131m \u00bb yok. Ger\u00e7ek verilerinize ve bilimsel e\u015fiklere dayal\u0131 olarak bireysel ilerlemenizi hesapl\u0131yoruz.\n\n**Y\u00fck y\u00f6netimi** \u2014 Sporcular ve aktif hastalar i\u00e7in mevcut ve kronik i\u015f y\u00fck\u00fc aras\u0131ndaki oran\u0131 kullanarak geri d\u00f6n\u00fc\u015fleri \u00f6nl\u00fcyor ve g\u00fcvenli rehabilitasyon sa\u011fl\u0131yoruz.\n\n**Payla\u015f\u0131lan ilerleme** \u2014 Verileriniz kons\u00fcltasyonu d\u00f6n\u00fc\u015ft\u00fcr\u00fcr: \u00ab Nas\u0131l hissediyorsunuz? \u00bb yerine birlikte \u00ab Neyin de\u011fi\u015fti\u011fine bakal\u0131m \u00bb diyebiliriz. Bu, kendi v\u00fccudunuza olan g\u00fcveninizi g\u00fc\u00e7lendirir.\n\nBir sonraki Praxis Loten randevunuza ak\u0131ll\u0131 saatinizi getirin \u2014 size e\u015flik edebilece\u011fimiz pek \u00e7ok yoldan biri olarak.",
        ar: "\u0641\u064a \u0639\u064a\u0627\u062f\u062a\u0646\u0627 \u0641\u064a \u0623\u0648\u0628\u0646\u060c \u0646\u062f\u0645\u062c \u0628\u064a\u0627\u0646\u0627\u062a \u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0628\u0634\u0643\u0644 \u0641\u0639\u0627\u0644 \u0641\u064a \u0639\u0644\u0627\u062c\u0643\u0645. \u0625\u0644\u064a\u0643\u0645 \u0643\u064a\u0641 \u0646\u0633\u062a\u062e\u062f\u0645\u0647\u0627 \u0628\u0634\u0643\u0644 \u0645\u0644\u0645\u0648\u0633:\n\n**\u062a\u0642\u064a\u064a\u0645 \u0645\u0648\u0636\u0648\u0639\u064a** \u2014 \u0641\u064a \u0645\u0648\u0639\u062f\u0643\u0645 \u0627\u0644\u0623\u0648\u0644\u060c \u064a\u0645\u0643\u0646\u0646\u0627 \u062a\u062d\u0644\u064a\u0644 \u0645\u062a\u0648\u0633\u0637 \u0639\u062f\u062f \u062e\u0637\u0648\u0627\u062a\u0643\u0645 \u0648\u0646\u0645\u0637 \u0646\u0648\u0645\u0643\u0645 \u0648\u0645\u0624\u0634\u0631\u0627\u062a \u062a\u0639\u0627\u0641\u064a\u0643\u0645 \u0645\u0646 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u062e\u064a\u0631\u0629. \u0647\u0643\u0630\u0627 \u0646\u062d\u0635\u0644 \u0639\u0644\u0649 \u0635\u0648\u0631\u0629 \u0648\u0627\u0642\u0639\u064a\u0629 \u0644\u062d\u064a\u0627\u062a\u0643\u0645 \u0627\u0644\u064a\u0648\u0645\u064a\u0629 \u2014 \u0628\u0639\u064a\u062f\u0627\u064b \u0639\u0646 \u062a\u062d\u064a\u0632\u0627\u062a \u0627\u0644\u0630\u0627\u0643\u0631\u0629.\n\n**\u0623\u0647\u062f\u0627\u0641 \u0645\u062e\u0635\u0635\u0629** \u2014 \u0644\u0627 \u00ab 10,000 \u062e\u0637\u0648\u0629 \u0644\u0644\u062c\u0645\u064a\u0639 \u00bb. \u0646\u062d\u0633\u0628 \u062a\u0642\u062f\u0645\u0643\u0645 \u0627\u0644\u0641\u0631\u062f\u064a \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u0627\u0644\u062d\u0642\u064a\u0642\u064a\u0629 \u0648\u0627\u0644\u0639\u062a\u0628\u0627\u062a \u0627\u0644\u0639\u0644\u0645\u064a\u0629.\n\n**\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0650\u0645\u0644** \u2014 \u0628\u0627\u0644\u0646\u0633\u0628\u0629 \u0644\u0644\u0631\u064a\u0627\u0636\u064a\u064a\u0646 \u0648\u0627\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u0646\u0634\u0637\u064a\u0646\u060c \u0646\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0646\u0633\u0628\u0629 \u0628\u064a\u0646 \u0627\u0644\u062d\u0645\u0644 \u0627\u0644\u062d\u0627\u0644\u064a \u0648\u0627\u0644\u062d\u0645\u0644 \u0627\u0644\u0645\u0632\u0645\u0646 \u0644\u062a\u062c\u0646\u0628 \u0627\u0644\u0627\u0646\u062a\u0643\u0627\u0633\u0627\u062a \u0648\u0636\u0645\u0627\u0646 \u0625\u0639\u0627\u062f\u0629 \u062a\u0623\u0647\u064a\u0644 \u0622\u0645\u0646\u0629.\n\n**\u062a\u0642\u062f\u0645 \u0645\u0634\u062a\u0631\u0643** \u2014 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u062a\u062d\u0648\u0644 \u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629: \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u00ab \u0643\u064a\u0641 \u062a\u0634\u0639\u0631\u0648\u0646\u061f \u00bb\u060c \u064a\u0645\u0643\u0646\u0646\u0627 \u0623\u0646 \u0646\u0642\u0648\u0644 \u0645\u0639\u0627\u064b \u00ab \u0644\u0646\u0631\u064e \u0645\u0627 \u0627\u0644\u0630\u064a \u062a\u063a\u064a\u0631 \u00bb. \u0647\u0630\u0627 \u064a\u0639\u0632\u0632 \u062b\u0642\u062a\u0643\u0645 \u0628\u0623\u062c\u0633\u0627\u0645\u0643\u0645.\n\n\u0623\u062d\u0636\u0631\u0648\u0627 \u0633\u0627\u0639\u062a\u0643\u0645 \u0627\u0644\u0630\u0643\u064a\u0629 \u0625\u0644\u0649 \u0645\u0648\u0639\u062f\u0643\u0645 \u0627\u0644\u0642\u0627\u062f\u0645 \u0641\u064a Praxis Loten \u2014 \u0645\u0646 \u0628\u064a\u0646 \u0637\u0631\u0642 \u0639\u062f\u064a\u062f\u0629 \u064a\u0645\u0643\u0646\u0646\u0627 \u0645\u0631\u0627\u0641\u0642\u062a\u0643\u0645 \u0628\u0647\u0627.",
        pl: "W naszym gabinecie w Eupen aktywnie integrujemy dane ze smartwatcha w Twoj\u0105 terapi\u0119. Oto jak je konkretnie wykorzystujemy:\n\n**Obiektywny punkt wyj\u015bcia** \u2014 Na pierwszej wizycie mo\u017cemy przeanalizowa\u0107 Twoj\u0105 \u015bredni\u0105 liczb\u0119 krok\u00f3w, rytm snu i wska\u017aniki regeneracji z ostatnich tygodni. Daje to realistyczny obraz Twojego codziennego \u017cycia \u2014 bez zniekszta\u0142ce\u0144 pami\u0119ciowych.\n\n**Spersonalizowane cele** \u2014 \u017badnych \u00ab 10 000 krok\u00f3w dla wszystkich \u00bb. Obliczamy Twoj\u0105 indywidualn\u0105 progresj\u0119 na podstawie rzeczywistych danych i prog\u00f3w naukowych.\n\n**Zarz\u0105dzanie obci\u0105\u017ceniem** \u2014 U sportowc\u00f3w i aktywnych pacjent\u00f3w stosujemy stosunek mi\u0119dzy bie\u017c\u0105cym a przewlek\u0142ym obci\u0105\u017ceniem, aby zapobiega\u0107 nawrotom i zapewnia\u0107 bezpieczn\u0105 rehabilitacj\u0119.\n\n**Wsp\u00f3lny post\u0119p** \u2014 Twoje dane przekszta\u0142caj\u0105 konsultacj\u0119: zamiast \u00ab Jak si\u0119 czujesz? \u00bb, mo\u017cemy wsp\u00f3lnie powiedzie\u0107 \u00ab Zobaczmy, co si\u0119 zmieni\u0142o \u00bb. To wzmacnia Twoje zaufanie do w\u0142asnego cia\u0142a.\n\nPrzynie\u015b smartwatcha na nast\u0119pn\u0105 wizyt\u0119 w Praxis Loten \u2014 to jedna z wielu form, w jakich mo\u017cemy Ci towarzyszy\u0107.",
        "uk": "У нашому кабінеті в Ойпені ми активно включаємо дані Вашого смарт-годинника у Вашу терапію. Ось як ми їх використовуємо на практиці:\n\n**Об’єктивна оцінка** — Під час Вашого першого візиту ми можемо проаналізувати Вашу середню кількість кроків, Ваш режим сну та показники відновлення за останні тижні. Так ми отримуємо реалістичну картину Вашого повсякдення — без викривлень пам’яті.\n\n**Індивідуальні цілі** — Жодних «10 000 кроків для всіх». Ми розраховуємо Ваш індивідуальний прогрес на основі Ваших реальних даних і наукових порогових значень.\n\n**Керування навантаженням** — У спортсменів та активних пацієнтів ми використовуємо співвідношення між поточним і хронічним навантаженням, щоб уникати рецидивів і зробити реабілітацію безпечною.\n\n**Спільний прогрес** — Ваші дані змінюють консультацію: замість «Як Ви почуваєтеся?» ми можемо разом сказати «Подивімося, що змінилося». Це зміцнює Вашу довіру до власного тіла.\n\nПринесіть свій смарт-годинник на наступний прийом у Praxis Loten — це лише один із багатьох способів, якими ми можемо Вас супроводжувати.",
        "es": "En nuestra consulta de Eupen integramos activamente los datos de su reloj inteligente en su terapia. Así los utilizamos en concreto:\n\n**Valoración objetiva** — En su primera cita podemos analizar su número medio de pasos, su ritmo de sueño y sus índices de recuperación de las últimas semanas. Así obtenemos un retrato realista de su día a día, más allá de los sesgos de memoria.\n\n**Objetivos personalizados** — Nada de «10 000 pasos para todo el mundo». Calculamos su progresión individual a partir de sus datos reales y de los umbrales científicos.\n\n**Gestión de la carga** — En deportistas y pacientes activos utilizamos la relación entre la carga actual y la carga crónica para evitar recaídas y hacer la rehabilitación más segura.\n\n**Progreso compartido** — Sus datos transforman la consulta: en lugar de «¿Cómo se encuentra?», podemos decir juntos «Veamos qué ha cambiado». Esto refuerza su confianza en su propio cuerpo.\n\nTraiga su reloj inteligente a su próxima cita en Praxis Loten: es una de las muchas formas en que podemos acompañarle.",
        "ku": "Li kabîneya me ya li Eupenê, em daneyên saeta we ya biaqil bi awayekî çalak tevlî terapiya we dikin. Em wan bi awayekî pratîk wiha bi kar tînin:\n\n**Nirxandina objektîf** — Di randevûya we ya yekem de, em dikarin navînîya hejmara gavên we, rîtma xewa we û nîşaneyên vehesîna we yên hefteyên dawî analîz bikin. Bi vî awayî em wêneyekî realîst ê jiyana we ya rojane digirin — ji xeletiyên bîrê wêdetir.\n\n**Armancên kesane** — Ne «10 000 gav ji bo her kesî». Em pêşveçûna we ya kesane li gorî daneyên we yên rastîn û sînorên zanistî hesab dikin.\n\n**Birêvebirina barê** — Li cem werzîşvan û nexweşên çalak, em rêjeya di navbera barê niha û barê kronîk de bi kar tînin da ku ji vegera êşê dûr bimînin û rehabîlîtasyonê ewle bikin.\n\n**Pêşveçûna hevpar** — Daneyên we konsultasyonê diguherînin: li şûna «Hûn xwe çawa hîs dikin?», em dikarin bi hev re bibêjin «Werin em binêrin ka çi guheriye». Ev baweriya we bi laşê we yê xwe xurt dike.\n\nSaeta xwe ya biaqil di randevûya xwe ya bê de li Praxis Loten bi xwe re bînin — ev yek ji gelek awayan e ku em dikarin we bi rê ve bibin.",
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
    "uk": [
      "Смарт-годинник — не ліки, це Ваш компас до руху",
      "80 хвилин ходьби на день знижують ризик хронічного болю в попереку на 13 %",
      "Порівнюйте себе лише із собою — ніколи з іншими чи з нормою",
      "Використовуйте Вашу ВСР/HRV як щоденний показник відновлення",
      "Принесіть смарт-годинник до фізіотерапевта — для терапії на основі даних"
    ],
    "es": [
      "El reloj inteligente no es un medicamento: es su brújula hacia el movimiento",
      "80 minutos de caminata al día reducen un 13 % el riesgo de lumbalgia crónica",
      "Compárese solo con usted mismo, nunca con los demás ni con una norma",
      "Utilice su VFC/HRV como indicador diario de recuperación",
      "Lleve su reloj inteligente al fisioterapeuta para una terapia guiada por datos"
    ],
    "ku": [
      "Saeta biaqil ne derman e — ew pûsla we ye ber bi tevgerê ve",
      "80 deqe meş di rojê de xetera êşa pişta jêrîn a kronîk 13 % kêm dike",
      "Xwe tenê bi xwe re bidin ber hev — qet ne bi kesên din an bi normekê re",
      "VFC/HRV ya xwe wekî nîşaneya rojane ya vehesînê bi kar bînin",
      "Saeta xwe ya biaqil bînin cem fizyoterapîst — ji bo terapiyeke ku bi daneyan tê rêvebirin"
    ],
  },
  ctaText: {
    de: "Sie haben eine Smartwatch und chronische Schmerzen? Bringen Sie Ihre Daten mit \u2014 wir helfen Ihnen, sie zu verstehen und in Ihre Therapie zu integrieren. Vereinbaren Sie einen Termin bei Praxis Loten in Eupen.",
    fr: "Vous avez une montre connect\u00e9e et des douleurs chroniques ? Apportez vos donn\u00e9es \u2014 nous vous aiderons \u00e0 les comprendre et \u00e0 les int\u00e9grer dans votre th\u00e9rapie. Prenez rendez-vous chez Praxis Loten \u00e0 Eupen.",
    en: "Have a smartwatch and chronic pain? Bring your data \u2014 we\u2019ll help you understand it and integrate it into your therapy. Book an appointment at Praxis Loten in Eupen.",
    nl: "Hebt u een smartwatch en chronische pijn? Breng uw gegevens mee \u2014 wij helpen u ze te begrijpen en in uw therapie te integreren. Maak een afspraak bij Praxis Loten in Eupen.",
    tr: "Ak\u0131ll\u0131 saatiniz ve kronik a\u011fr\u0131n\u0131z m\u0131 var? Verilerinizi getirin \u2014 bunlar\u0131 anlaman\u0131za ve tedavinize entegre etmenize yard\u0131mc\u0131 olaca\u011f\u0131z. Eupen\u2019deki Praxis Loten\u2019de randevu al\u0131n.",
    ar: "\u0644\u062f\u064a\u0643\u0645 \u0633\u0627\u0639\u0629 \u0630\u0643\u064a\u0629 \u0648\u0622\u0644\u0627\u0645 \u0645\u0632\u0645\u0646\u0629\u061f \u0623\u062d\u0636\u0631\u0648\u0627 \u0628\u064a\u0627\u0646\u0627\u062a\u0643\u0645 \u2014 \u0633\u0646\u0633\u0627\u0639\u062f\u0643\u0645 \u0639\u0644\u0649 \u0641\u0647\u0645\u0647\u0627 \u0648\u062f\u0645\u062c\u0647\u0627 \u0641\u064a \u0639\u0644\u0627\u062c\u0643\u0645. \u0627\u062d\u062c\u0632\u0648\u0627 \u0645\u0648\u0639\u062f\u0627\u064b \u0641\u064a Praxis Loten \u0641\u064a \u0623\u0648\u0628\u0646.",
    pl: "Masz smartwatcha i b\u00f3l przewlek\u0142y? Przynie\u015b swoje dane \u2014 pomo\u017cemy Ci je zrozumie\u0107 i zintegrowa\u0107 z terapi\u0105. Um\u00f3w wizyt\u0119 w Praxis Loten w Eupen.",
    "uk": "Маєте смарт-годинник і хронічний біль? Принесіть свої дані — ми допоможемо Вам їх зрозуміти та включити у Вашу терапію. Запишіться на прийом до Praxis Loten в Ойпені.",
    "es": "¿Tiene un reloj inteligente y dolor crónico? Traiga sus datos: le ayudaremos a entenderlos y a integrarlos en su terapia. Pida cita en Praxis Loten, en Eupen.",
    "ku": "Saeteke we ya biaqil û êşên we yên kronîk hene? Daneyên xwe bînin — em ê alîkariya we bikin ku hûn wan fêm bikin û tevlî terapiya xwe bikin. Li Praxis Loten li Eupenê randevûyekê bigirin.",
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
    "uk": "Ця стаття має суто інформаційний характер і не замінює консультації лікаря чи фізіотерапевта. Якщо біль не минає або посилюється, зверніться до медичного фахівця.",
    "es": "Este artículo tiene una finalidad meramente informativa y no sustituye el consejo de un médico o fisioterapeuta. Si el dolor persiste o empeora, consulte a un profesional sanitario.",
    "ku": "Ev gotar tenê ji bo agahdariyê ye û şûna şîreta bijîşkî an fizyoterapiyê nagire. Di rewşa êşên berdewam an yên ku xirabtir dibin de, serdana pisporekî tenduristiyê bikin.",
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
  "uk": {
    "backBlog": "← Назад до блогу",
    "readMin": "хв читання",
    "keyPoints": "Головне з першого погляду",
    "bookCta": "Записатися на прийом",
    "authorBy": "Автор",
    "bibliography": "Бібліографія",
    "onThisPage": "На цій сторінці"
  },
  "es": {
    "backBlog": "← Volver al blog",
    "readMin": "min de lectura",
    "keyPoints": "Lo esencial de un vistazo",
    "bookCta": "Pedir cita",
    "authorBy": "Escrito por",
    "bibliography": "Bibliografía",
    "onThisPage": "En esta página"
  },
  "ku": {
    "backBlog": "← Vegere blogê",
    "readMin": "deq xwendin",
    "keyPoints": "Ya bingehîn bi nêrînekê",
    "bookCta": "Randevû bigire",
    "authorBy": "Nivîskar",
    "bibliography": "Bîbliyografî",
    "onThisPage": "Li ser vê rûpelê"
  },
};

function formatDate(dateStr: string, lang: LangKey) {
  const d = new Date(dateStr);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
  const localeMap: Record<LangKey, string> = { de: "de-DE", fr: "fr-FR", en: "en-GB", nl: "nl-NL", tr: "tr-TR", ar: "ar-EG", pl: "pl-PL",
  "uk": "uk-UA",
  "es": "es-ES",
  "ku": "ku-TR" };
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
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang];
  const article = ARTICLES[slug];

  if (!article) return null;

  const authorPortrait = getTherapistPortrait(article.authorSlug, "thumbnail");
  const isRtl = lang === "ar";

  const BASE_URL = "https://www.praxisloten.be";
  const pickStr = (r: Record<LangKey, string>) => r[lang] ?? r.en ?? r.fr ?? "";
  const articleUrl = `${BASE_URL}/${lang}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    "headline": pickStr(article.title),
    "description": pickStr(article.intro),
    "inLanguage": lang,
    "datePublished": article.date,
    "dateModified": article.date,
    "url": articleUrl,
    "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
    "image": article.heroImage ? `${BASE_URL}${article.heroImage.src}` : `${BASE_URL}/og-image.png`,
    "keywords": (article.keyPoints[lang] ?? article.keyPoints.en ?? []).join(", "),
    "author": {
      "@type": "Person",
      "name": article.authorName,
      "url": `${BASE_URL}/${lang}/team/${article.authorSlug}`,
      "jobTitle": "Physiotherapist",
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Praxis Loten",
      "url": BASE_URL,
      "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logos/logo-full.png` },
    },
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
                          src={authorPortrait.src}
                          alt={article.authorName}
                          fill
                          sizes="48px"
                          className={authorPortrait.className}
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
