"use client";

import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { HonorairesSimulator } from "@/components/pages/HonorairesSimulator";
import {
  CheckCircle2, Info, AlertTriangle, Home, Building2,
  CalendarPlus, ExternalLink, Users, Euro, FileText, CreditCard, RotateCcw,
} from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

/* ─── ALL UI STRINGS ──────────────────────────────────────────────────────── */
const UI: Record<string, {
  badge: string; title: string; titleAccent: string; subtitle: string;
  perSession: string; yourPart: string;
  mutuelleShare: string; totalHonoraire: string;
  convTitle: string; nonConvTitle: string;
  normalPathLabel: string; ePathLabel: string; seriousPathLabel: string;
  bimNote: string;
  faNote: string; eNote: string; fbNote: string;
  howTitle: string;
  step1Title: string; step1Desc: string;
  step2Title: string; step2Desc: string;
  step3Title: string; step3Desc: string;
  nonConvExplain: string; nonConvNote: string;
  bimTitle: string; bimText: string; bimHow: string; bimNonConv: string;
  mutuelleTitle: string; mutuelleText: string;
  prescTitle: string; prescText: string;
  checkInami: string; inamiLink: string;
  ctaTitle: string; ctaSub: string; ctaBtn: string;
  whoConv: string; whoNonConv: string;
  convListTitle: string; nonConvListTitle: string;
  tarifsSource: string;
  cabinet: string; home: string;
}> = {
  de: {
    badge: "Transparente Preise",
    title: "Was zahlen", titleAccent: "Sie wirklich?",
    subtitle: "Klare Übersicht: Ihr Eigenanteil, die Kassenerstattung und der Gesamtbetrag — auf einen Blick.",
    perSession: "/ Sitzung", yourPart: "Ihr Eigenanteil", mutuelleShare: "Kassenerstattung", totalHonoraire: "Honorar gesamt",
    convTitle: "Konventionierte Therapeuten", nonConvTitle: "Nicht konventioniert — Loïc Meunier",
    normalPathLabel: "Übliche Pathologie", ePathLabel: "Pathologie Fa oder Fb", seriousPathLabel: "Schwere Pathologie (Liste E)",
    bimNote: "Mit BIM-Status:",
    faNote: "Übliche Pathologie: bis zu 18 Sitzungen zum besten Erstattungssatz je Situation und Kalenderjahr.",
    eNote: "Fa: bis zu 60 Sitzungen während 365 Tagen. Fb: bis zu 60 Sitzungen pro Kalenderjahr; danach sinkt die Erstattung stufenweise.",
    fbNote: "Liste E: Bewilligung des Vertrauensarztes erforderlich; sie kann bis zu 3 Jahre gelten.",
    howTitle: "Wie funktioniert die Rückerstattung?",
    step1Title: "Verschreibung holen", step1Desc: "Ihr Arzt stellt eine Physiotherapieverschreibung aus. Ohne sie — keine Erstattung.",
    step2Title: "Sitzung bezahlen", step2Desc: "Sie zahlen den Gesamtbetrag beim Therapeuten — bei jeder Sitzung.",
    step3Title: "Automatische Rückerstattung", step3Desc: "Die Kasse erstattet den INAMI-Anteil automatisch, in der Regel innerhalb weniger Tage.",
    nonConvExplain: "Loïc Meunier setzt seine Honorare frei fest. Die Kasse erstattet ca. 75 % des konventionierten INAMI-Tarifs. Der Differenzbetrag liegt zu Ihren Lasten.",
    nonConvNote: "Schätzwerte — genauen Betrag bei Ihrer Kasse erfragen.",
    bimTitle: "BIM — Was ist das?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) ist ein Vorzugstarif für Personen mit niedrigem Einkommen. Als BIM-Patient zahlen Sie deutlich weniger Eigenanteil pro Sitzung (z.B. 2,50 € statt 6,25 € bei Fa).", bimHow: "So prüfen Sie Ihren Status: Schauen Sie auf Ihren Krankenkassen-Aufkleber — der Code (CT1/CT2) endet auf 0 (z.B. 100/100) = kein BIM. Endet er auf 1 (z.B. 101/101) = BIM. Im Zweifelsfall fragen Sie Ihre Krankenkasse.", bimNonConv: "Bei einem nicht konventionierten Therapeuten hängen Ihre Kosten vom berechneten Honorar und von der Erstattung Ihrer Krankenkasse ab. Fragen Sie dort nach dem genauen Betrag.",
    mutuelleTitle: "Zusatzversicherung", mutuelleText: "Viele Krankenkassen übernehmen über ihre Zusatzversicherung einen weiteren Teil der Kosten. Fragen Sie Ihre Kasse.",
    prescTitle: "Ärztliche Verschreibung erforderlich", prescText: "Eine ärztliche Verschreibung ist für die Rückerstattung zwingend erforderlich. Ohne Verschreibung erfolgt keine Erstattung.",
    checkInami: "Offizielle INAMI-Tarife prüfen", inamiLink: "INAMI-Website",
    ctaTitle: "Fragen zu unseren Tarifen?", ctaSub: "Unser Team beantwortet gerne alle Fragen zu Kosten und Rückerstattung.", ctaBtn: "Termin vereinbaren",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Konventionierte Therapeuten:", nonConvListTitle: "Nicht konventioniert:",
    tarifsSource: "INAMI-Tarife, gültig seit 01.07.2026. Änderungen möglich — aktuelle Beträge auf inami.fgov.be.",
    cabinet: "Kabinett", home: "Hausbesuch",
  },
  fr: {
    badge: "Tarifs transparents",
    title: "Ce que vous payez", titleAccent: "réellement",
    subtitle: "Votre part, le remboursement de la mutuelle et l'honoraire total — tout en clair, sans surprise.",
    perSession: "/ séance", yourPart: "Votre part", mutuelleShare: "Remboursement mutuelle", totalHonoraire: "Honoraire total",
    convTitle: "Thérapeutes conventionnés", nonConvTitle: "Non conventionné — Loïc Meunier",
    normalPathLabel: "Pathologie courante", ePathLabel: "Pathologie Fa ou Fb", seriousPathLabel: "Pathologie lourde (liste E)",
    bimNote: "Statut BIM :",
    faNote: "Pathologie courante : jusqu’à 18 séances au meilleur remboursement par situation et par année civile.",
    eNote: "Fa : jusqu’à 60 séances pendant 365 jours. Fb : jusqu’à 60 séances par année civile, puis remboursement dégressif.",
    fbNote: "Liste E : accord du médecin-conseil indispensable, valable jusqu’à 3 ans.",
    howTitle: "Comment fonctionne le remboursement ?",
    step1Title: "Obtenez votre prescription", step1Desc: "Votre médecin vous remet une prescription de kinésithérapie. Sans elle, aucun remboursement n'est possible.",
    step2Title: "Vous payez en séance", step2Desc: "Vous réglez l'honoraire total directement à votre thérapeute, à chaque séance.",
    step3Title: "Remboursement automatique", step3Desc: "Votre mutuelle rembourse la part INAMI automatiquement, généralement en quelques jours.",
    nonConvExplain: "Loïc Meunier fixe librement ses honoraires. La mutuelle rembourse environ 75 % de la part INAMI conventionnée. La différence reste à votre charge.",
    nonConvNote: "Valeurs estimées — contactez votre mutuelle pour le montant exact.",
    bimTitle: "BIM — C'est quoi ?", bimText: "Le statut BIM (Bénéficiaire de l'Intervention Majorée) est un tarif préférentiel pour les personnes à revenus modestes. En tant que patient BIM, vous payez nettement moins de ticket modérateur par séance (ex. 2,50 € au lieu de 6,25 € en Fa).", bimHow: "Comment vérifier : regardez votre vignette de mutuelle — le code titulaire (CT1/CT2) se termine par 0 (ex. 100/100) = pas BIM. S'il se termine par 1 (ex. 101/101) = vous êtes BIM. En cas de doute, contactez votre mutuelle.", bimNonConv: "Chez un thérapeute non conventionné, votre coût dépend de l'honoraire demandé et du remboursement de votre mutuelle. Vérifiez le montant exact auprès d'elle.",
    mutuelleTitle: "Assurance complémentaire", mutuelleText: "De nombreuses mutuelles remboursent une partie supplémentaire via leur assurance complémentaire. Renseignez-vous auprès de la vôtre.",
    prescTitle: "Prescription médicale obligatoire", prescText: "Une prescription médicale est indispensable pour bénéficier du remboursement. Sans prescription, aucun remboursement n'est accordé.",
    checkInami: "Consulter les tarifs officiels INAMI", inamiLink: "Site INAMI",
    ctaTitle: "Des questions sur nos tarifs ?", ctaSub: "Notre équipe est disponible pour répondre à toutes vos questions sur les coûts et remboursements.", ctaBtn: "Prendre rendez-vous",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Thérapeutes conventionnés :", nonConvListTitle: "Non conventionné :",
    tarifsSource: "Tarifs INAMI en vigueur depuis le 01/07/2026. Susceptibles d’être mis à jour — montants actuels sur inami.fgov.be.",
    cabinet: "Au cabinet", home: "À domicile",
  },
  en: {
    badge: "Transparent pricing",
    title: "What you", titleAccent: "actually pay",
    subtitle: "Your share, the insurance reimbursement and the total fee — all clear, no surprises.",
    perSession: "/ session", yourPart: "Your share", mutuelleShare: "Insurance covers", totalHonoraire: "Total fee",
    convTitle: "Conventional therapists", nonConvTitle: "Non-conventional — Loïc Meunier",
    normalPathLabel: "Common condition", ePathLabel: "Fa or Fb condition", seriousPathLabel: "Severe condition (E list)",
    bimNote: "BIM status:",
    faNote: "Common condition: up to 18 sessions at the best reimbursement per situation and calendar year.",
    eNote: "Fa: up to 60 sessions over 365 days. Fb: up to 60 sessions per calendar year, followed by decreasing reimbursement.",
    fbNote: "E list: medical-adviser approval is required and may be valid for up to 3 years.",
    howTitle: "How does reimbursement work?",
    step1Title: "Get a prescription", step1Desc: "Your doctor gives you a physiotherapy prescription. Without one, no reimbursement is possible.",
    step2Title: "Pay at your session", step2Desc: "You pay the full fee directly to your therapist at each session.",
    step3Title: "Automatic reimbursement", step3Desc: "Your insurer reimburses the INAMI portion automatically, usually within a few days.",
    nonConvExplain: "Loïc Meunier sets his fees freely. Your insurer reimburses approx. 75% of the conventional INAMI rate. The difference is your responsibility.",
    nonConvNote: "Estimated values — contact your insurer for the exact amount.",
    bimTitle: "BIM — What is it?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) is a preferential rate for people with lower incomes. As a BIM patient, you pay significantly less per session (e.g. €2.50 instead of €6.25 for Fa conditions).", bimHow: "How to check: look at your health insurance sticker — the holder code (CT1/CT2) ends in 0 (e.g. 100/100) = not BIM. Ends in 1 (e.g. 101/101) = BIM. If in doubt, contact your insurer.", bimNonConv: "With a non-conventional therapist, your cost depends on the fee charged and your insurer's reimbursement. Ask your insurer for the exact amount.",
    mutuelleTitle: "Supplementary insurance", mutuelleText: "Many insurers reimburse an additional share through their supplementary coverage. Check with yours.",
    prescTitle: "Medical prescription required", prescText: "A medical prescription is mandatory to receive reimbursement. Without one, no reimbursement is granted.",
    checkInami: "Check official INAMI rates", inamiLink: "INAMI website",
    ctaTitle: "Questions about our fees?", ctaSub: "Our team is available to answer all your questions about costs and reimbursements.", ctaBtn: "Book appointment",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Conventional therapists:", nonConvListTitle: "Non-conventional:",
    tarifsSource: "INAMI fees effective from 01/07/2026. Subject to updates — current amounts at inami.fgov.be.",
    cabinet: "At the practice", home: "Home visit",
  },
  es: {
    badge: "Precios transparentes",
    title: "Lo que", titleAccent: "paga realmente",
    subtitle: "Su parte, el reembolso del seguro y el importe total — todo claro, sin sorpresas.",
    perSession: "/ sesión", yourPart: "Su parte", mutuelleShare: "Cubre el seguro", totalHonoraire: "Honorario total",
    convTitle: "Terapeutas convencionados", nonConvTitle: "No convencionado — Loïc Meunier",
    normalPathLabel: "Patología corriente", ePathLabel: "Patología Fa o Fb", seriousPathLabel: "Patología grave (lista E)",
    bimNote: "Estatus BIM:",
    faNote: "Patología corriente: hasta 18 sesiones con el mejor reembolso por situación y año civil.",
    eNote: "Fa: hasta 60 sesiones durante 365 días. Fb: hasta 60 por año civil y después reembolso decreciente.",
    fbNote: "Lista E: se requiere autorización del médico asesor, válida hasta 3 años.",
    howTitle: "¿Cómo funciona el reembolso?",
    step1Title: "Obtenga una prescripción", step1Desc: "Su médico le entrega una prescripción de fisioterapia. Sin ella, no hay reembolso posible.",
    step2Title: "Pague en su sesión", step2Desc: "Usted paga el importe total directamente al terapeuta en cada sesión.",
    step3Title: "Reembolso automático", step3Desc: "Su mutua reembolsa la parte INAMI automáticamente, normalmente en pocos días.",
    nonConvExplain: "Loïc Meunier fija libremente sus honorarios. Su mutua reembolsa aprox. el 75 % de la tarifa INAMI convencionada. La diferencia corre por su cuenta.",
    nonConvNote: "Valores estimados — consulte el importe exacto con su mutua.",
    bimTitle: "BIM — ¿Qué es?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) es una tarifa preferente para personas con ingresos más bajos. Como paciente BIM, paga bastante menos por sesión (p. ej. 2,50 € en lugar de 6,25 € para patologías Fa).", bimHow: "Cómo comprobarlo: mire la etiqueta de su mutua — el código del titular (CT1/CT2) termina en 0 (p. ej. 100/100) = no BIM. Termina en 1 (p. ej. 101/101) = BIM. En caso de duda, consulte a su mutua.", bimNonConv: "Con un terapeuta no convencionado, su coste depende del honorario cobrado y del reembolso de su mutua. Consulte con ella el importe exacto.",
    mutuelleTitle: "Seguro complementario", mutuelleText: "Muchas mutuas reembolsan una parte adicional a través de su cobertura complementaria. Consúltelo con la suya.",
    prescTitle: "Prescripción médica obligatoria", prescText: "Una prescripción médica es obligatoria para obtener el reembolso. Sin ella, no se concede ningún reembolso.",
    checkInami: "Consultar las tarifas oficiales INAMI", inamiLink: "Sitio web INAMI",
    ctaTitle: "¿Preguntas sobre nuestros honorarios?", ctaSub: "Nuestro equipo está disponible para responder a todas sus preguntas sobre costes y reembolsos.", ctaBtn: "Pedir cita",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Terapeutas convencionados:", nonConvListTitle: "No convencionado:",
    tarifsSource: "Tarifas INAMI vigentes desde el 01/07/2026. Sujetas a cambios — importes actuales en inami.fgov.be.",
    cabinet: "En el consultorio", home: "Visita a domicilio",
  },
  uk: {
    badge: "Прозорі ціни",
    title: "Скільки ви", titleAccent: "дійсно платите",
    subtitle: "Ваша частина, відшкодування від страховки та загальна сума — все ясно, без сюрпризів.",
    perSession: "/ сеанс", yourPart: "Ваша частина", mutuelleShare: "Покриває страховка", totalHonoraire: "Загальний гонорар",
    convTitle: "Конвенційні терапевти", nonConvTitle: "Неконвенційний — Loïc Meunier",
    normalPathLabel: "Звичайна патологія", ePathLabel: "Патологія Fa або Fb", seriousPathLabel: "Тяжка патологія (список E)",
    bimNote: "Статус BIM:",
    faNote: "Звичайна патологія: до 18 сеансів із найкращим відшкодуванням на ситуацію та календарний рік.",
    eNote: "Fa: до 60 сеансів за 365 днів. Fb: до 60 за календарний рік, далі відшкодування зменшується.",
    fbNote: "Список E: потрібен дозвіл лікаря-консультанта, чинний до 3 років.",
    howTitle: "Як працює відшкодування?",
    step1Title: "Отримайте рецепт", step1Desc: "Лікар видає вам рецепт на фізіотерапію. Без нього відшкодування неможливе.",
    step2Title: "Оплатіть на сеансі", step2Desc: "Ви сплачуєте повну суму безпосередньо терапевту на кожному сеансі.",
    step3Title: "Автоматичне відшкодування", step3Desc: "Ваша страхова автоматично відшкодовує частину INAMI, зазвичай протягом кількох днів.",
    nonConvExplain: "Loïc Meunier встановлює свої гонорари вільно. Ваша страхова відшкодовує приблизно 75 % конвенційного тарифу INAMI. Різницю ви оплачуєте самі.",
    nonConvNote: "Орієнтовні значення — точну суму уточнюйте у своїй страховій.",
    bimTitle: "BIM — що це?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) — це пільговий тариф для осіб з нижчими доходами. Як пацієнт BIM ви платите значно менше за сеанс (напр. 2,50 € замість 6,25 € для патологій Fa).", bimHow: "Як перевірити: подивіться на наклейку вашої страхової — код власника (CT1/CT2) закінчується на 0 (напр. 100/100) = не BIM. Закінчується на 1 (напр. 101/101) = BIM. У разі сумнівів зверніться до страхової.", bimNonConv: "У неконвенційного терапевта ваша вартість залежить від встановленого гонорару та відшкодування страхової. Уточніть точну суму у своїй страховій.",
    mutuelleTitle: "Додаткове страхування", mutuelleText: "Багато страхових відшкодовують додаткову частину через додаткове покриття. Уточніть у своєї.",
    prescTitle: "Потрібен медичний рецепт", prescText: "Медичний рецепт є обов'язковим для отримання відшкодування. Без нього відшкодування не надається.",
    checkInami: "Перевірити офіційні тарифи INAMI", inamiLink: "Сайт INAMI",
    ctaTitle: "Питання щодо наших гонорарів?", ctaSub: "Наша команда готова відповісти на всі ваші запитання щодо вартості та відшкодувань.", ctaBtn: "Записатися",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Конвенційні терапевти:", nonConvListTitle: "Неконвенційний:",
    tarifsSource: "Тарифи INAMI чинні з 01.07.2026. Можливі зміни — актуальні суми на inami.fgov.be.",
    cabinet: "У кабінеті", home: "Візит додому",
  },
  ku: {
    badge: "Bihayên zelal",
    title: "Hûn bi rastî", titleAccent: "çiqas didin",
    subtitle: "Para we, vegerandina sîgorteyê û tevahiya heqê — her tişt zelal, bê surprîz.",
    perSession: "/ danişîn", yourPart: "Para we", mutuelleShare: "Sîgorte vedigerîne", totalHonoraire: "Heqê giştî",
    convTitle: "Terapîstên konvansiyonel", nonConvTitle: "Ne-konvansiyonel — Loïc Meunier",
    normalPathLabel: "Patolojiya asayî", ePathLabel: "Patolojiya Fa an Fb", seriousPathLabel: "Patolojiya giran (lîsteya E)",
    bimNote: "Rewşa BIM:",
    faNote: "Patolojiya asayî: her rewş û sala salnameyê heta 18 danişîn bi vegerandina baş.",
    eNote: "Fa: di 365 rojan de heta 60 danişîn. Fb: her sal heta 60 danişîn, paşê vegerandin kêm dibe.",
    fbNote: "Lîsteya E: pejirandina bijîjkê şêwirmend pêwîst e û heta 3 salan derbasdar e.",
    howTitle: "Vegerandin çawa dixebite?",
    step1Title: "Reçeteyê bistîne", step1Desc: "Bijîjkê we reçeteya fizyoterapiyê dide we. Bê wê, vegerandin ne mimkin e.",
    step2Title: "Di danişînê de bide", step2Desc: "Hûn tevahiya heqê rasterast di her danişînê de didin terapîstê xwe.",
    step3Title: "Vegerandina otomatîk", step3Desc: "Sîgorteya we para INAMI bi otomatîkî vedigerîne, bi gelemperî di nav çend rojan de.",
    nonConvExplain: "Loïc Meunier heqên xwe bi serbestî diyar dike. Sîgorteya we nêzîkî 75% ya tarîfa konvansiyonel a INAMI vedigerîne. Cudahî li ser we ye.",
    nonConvNote: "Nirxên texmînî — ji bo mîqdara rast bi sîgorteya xwe re têkilî daynin.",
    bimTitle: "BIM — ew çi ye?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) tarîfeke taybet e ji bo kesên bi dahatê kêmtir. Wek nexweşê BIM, hûn ji bo her danişînê pir kêmtir didin (mînak 2,50 € li şûna 6,25 € ji bo nexweşiyên Fa).", bimHow: "Çawa kontrol bikin: li etîketa sîgorteya xwe binêrin — koda xwedî (CT1/CT2) bi 0 diqede (mînak 100/100) = ne BIM. Bi 1 diqede (mînak 101/101) = BIM. Heke guman hebe, bi sîgorteya xwe re têkilî daynin.", bimNonConv: "Bi terapîstekî ne-konvansiyonel, lêçûna we bi heqê ku tê xwestin û vegerandina sîgorteya we ve girêdayî ye. Ji sîgorteya xwe mîqdara rast bipirsin.",
    mutuelleTitle: "Sîgorteya temamker", mutuelleText: "Gelek sîgorte bi qewareya temamker para zêde vedigerînin. Bi ya xwe re kontrol bikin.",
    prescTitle: "Reçeteya bijîjkî pêwîst e", prescText: "Reçeteyeke bijîjkî ji bo wergirtina vegerandinê mecbûrî ye. Bê wê, ti vegerandin nayê dayîn.",
    checkInami: "Tarîfên fermî yên INAMI kontrol bike", inamiLink: "Malpera INAMI",
    ctaTitle: "Pirs li ser heqên me?", ctaSub: "Tîma me amade ye ku bersiva hemû pirsên we yên li ser lêçûn û vegerandinan bide.", ctaBtn: "Randevû bigire",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Terapîstên konvansiyonel:", nonConvListTitle: "Ne-konvansiyonel:",
    tarifsSource: "Tarifên INAMI ji 01.07.2026 ve derbasdar in. Guhertin mimkun e — mîqdarên niha li inami.fgov.be.",
    cabinet: "Li kabîneyê", home: "Serdana malê",
  },
  nl: {
    badge: "Transparante tarieven",
    title: "Wat betaalt", titleAccent: "u werkelijk?",
    subtitle: "Uw aandeel, de terugbetaling van de mutualiteit en het totale honorarium — alles duidelijk, geen verrassingen.",
    perSession: "/ sessie", yourPart: "Uw aandeel", mutuelleShare: "Terugbetaling mutualiteit", totalHonoraire: "Totaal honorarium",
    convTitle: "Geconventioneerde therapeuten", nonConvTitle: "Niet-geconventioneerd — Loïc Meunier",
    normalPathLabel: "Courante pathologie", ePathLabel: "Fa- of Fb-pathologie", seriousPathLabel: "Zware pathologie (lijst E)",
    bimNote: "BIM-statuut:",
    faNote: "Courante pathologie: maximaal 18 sessies aan de beste terugbetaling per situatie en kalenderjaar.",
    eNote: "Fa: maximaal 60 sessies gedurende 365 dagen. Fb: maximaal 60 per kalenderjaar, daarna daalt de terugbetaling.",
    fbNote: "Lijst E: goedkeuring van de adviserend arts vereist, geldig tot 3 jaar.",
    howTitle: "Hoe werkt de terugbetaling?",
    step1Title: "Haal een voorschrift", step1Desc: "Uw arts geeft u een kinesitherapievoorschrift. Zonder voorschrift — geen terugbetaling.",
    step2Title: "Betalen bij de sessie", step2Desc: "U betaalt het volledige honorarium rechtstreeks aan uw therapeut, bij elke sessie.",
    step3Title: "Automatische terugbetaling", step3Desc: "Uw mutualiteit betaalt het RIZIV-aandeel automatisch terug, doorgaans binnen een paar dagen.",
    nonConvExplain: "Loïc Meunier stelt zijn honoraria vrij vast. De mutualiteit vergoedt ca. 75% van het geconventioneerde RIZIV-tarief. Het verschil is voor uw rekening.",
    nonConvNote: "Geschatte waarden — neem contact op met uw mutualiteit voor het exacte bedrag.",
    bimTitle: "BIM — Wat is het?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) is een voorkeurtarief voor personen met een laag inkomen. Als BIM-patiënt betaalt u aanzienlijk minder remgeld per sessie (bv. €2,50 in plaats van €6,25 bij Fa).", bimHow: "Hoe controleren: kijk op uw mutualiteitsklever — de titulariscode (CT1/CT2) eindigt op 0 (bv. 100/100) = geen BIM. Eindigt op 1 (bv. 101/101) = BIM. Bij twijfel, contacteer uw mutualiteit.", bimNonConv: "Bij een niet-geconventioneerde therapeut hangt uw kost af van het aangerekende honorarium en de terugbetaling van uw mutualiteit. Vraag haar naar het exacte bedrag.",
    mutuelleTitle: "Aanvullende verzekering", mutuelleText: "Veel mutualiteiten vergoeden een extra deel via hun aanvullende verzekering. Informeer bij de uwe.",
    prescTitle: "Medisch voorschrift verplicht", prescText: "Een medisch voorschrift is verplicht voor terugbetaling. Zonder voorschrift wordt geen terugbetaling toegekend.",
    checkInami: "Officiële RIZIV-tarieven raadplegen", inamiLink: "RIZIV-website",
    ctaTitle: "Vragen over onze tarieven?", ctaSub: "Ons team staat klaar om al uw vragen over kosten en terugbetalingen te beantwoorden.", ctaBtn: "Afspraak maken",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Geconventioneerde therapeuten:", nonConvListTitle: "Niet-geconventioneerd:",
    tarifsSource: "RIZIV-tarieven geldig sinds 01/07/2026. Wijzigingen mogelijk — actuele bedragen op riziv.fgov.be.",
    cabinet: "In het kabinet", home: "Huisbezoek",
  },
  tr: {
    badge: "Şeffaf fiyatlar",
    title: "Gerçekte ne kadar", titleAccent: "ödüyorsunuz?",
    subtitle: "Sizin payınız, sigorta geri ödemesi ve toplam ücret — her şey net, sürpriz yok.",
    perSession: "/ seans", yourPart: "Sizin payınız", mutuelleShare: "Sigorta karşılıyor", totalHonoraire: "Toplam ücret",
    convTitle: "Konvansiyonel terapistler", nonConvTitle: "Konvansiyonel olmayan — Loïc Meunier",
    normalPathLabel: "Yaygın patoloji", ePathLabel: "Fa veya Fb patolojisi", seriousPathLabel: "Ağır patoloji (E listesi)",
    bimNote: "BIM statüsü:",
    faNote: "Yaygın patoloji: her durum ve takvim yılı için en iyi geri ödemeyle 18 seansa kadar.",
    eNote: "Fa: 365 günde 60 seansa kadar. Fb: takvim yılı başına 60 seansa kadar, sonra geri ödeme azalır.",
    fbNote: "E listesi: danışman doktor onayı gerekir ve 3 yıla kadar geçerli olabilir.",
    howTitle: "Geri ödeme nasıl çalışır?",
    step1Title: "Reçete alın", step1Desc: "Doktorunuz size fizyoterapi reçetesi verir. Reçete olmadan geri ödeme yapılmaz.",
    step2Title: "Seansta ödeme yapın", step2Desc: "Her seans için toplam ücreti doğrudan terapistinize ödersiniz.",
    step3Title: "Otomatik geri ödeme", step3Desc: "Sigortanız INAMI payını otomatik olarak, genellikle birkaç gün içinde geri öder.",
    nonConvExplain: "Loïc Meunier ücretlerini serbestçe belirler. Sigortanız, konvansiyonel INAMI tarifesinin yaklaşık %75'ini geri öder. Fark sizin sorumluluğunuzdadır.",
    nonConvNote: "Tahmini değerler — kesin tutar için sigortanızla iletişime geçin.",
    bimTitle: "BIM — Nedir?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée), düşük gelirli kişiler için tercihli bir tarifedir. BIM hastası olarak seans başına çok daha az ödersiniz (ör. Fa'da 6,25 € yerine 2,50 €).", bimHow: "Nasıl kontrol edilir: sağlık sigortası etiketinize bakın — sahip kodu (CT1/CT2) 0 ile bitiyorsa (ör. 100/100) = BIM değil. 1 ile bitiyorsa (ör. 101/101) = BIM. Şüpheniz varsa sigortanıza danışın.", bimNonConv: "Konvansiyonel olmayan bir terapistte maliyetiniz, alınan ücrete ve sigortanızın geri ödemesine bağlıdır. Kesin tutarı sigortanızdan öğrenin.",
    mutuelleTitle: "Ek sigorta", mutuelleText: "Birçok sigorta, ek sigortaları aracılığıyla ek bir pay karşılar. Sigortanıza danışın.",
    prescTitle: "Tıbbi reçete zorunlu", prescText: "Geri ödeme için tıbbi reçete zorunludur. Reçete olmadan geri ödeme yapılmaz.",
    checkInami: "Resmi INAMI tarifelerini kontrol et", inamiLink: "INAMI web sitesi",
    ctaTitle: "Tarifeler hakkında sorularınız mı var?", ctaSub: "Ekibimiz maliyet ve geri ödemeler hakkındaki tüm sorularınızı yanıtlamaya hazırdır.", ctaBtn: "Randevu al",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Konvansiyonel terapistler:", nonConvListTitle: "Konvansiyonel olmayan:",
    tarifsSource: "01/07/2026’dan beri geçerli INAMI tarifeleri. Değişebilir — güncel tutarlar inami.fgov.be’de.",
    cabinet: "Klinikte", home: "Ev ziyareti",
  },
  ar: {
    badge: "أسعار شفافة",
    title: "ما الذي تدفعه", titleAccent: "فعلياً؟",
    subtitle: "حصتك، تعويض التأمين والأتعاب الإجمالية — كل شيء واضح، بدون مفاجآت.",
    perSession: "/ جلسة", yourPart: "حصتك", mutuelleShare: "تغطية التأمين", totalHonoraire: "الأتعاب الإجمالية",
    convTitle: "المعالجون التقليديون", nonConvTitle: "غير تقليدي — Loïc Meunier",
    normalPathLabel: "حالة عادية", ePathLabel: "حالة Fa أو Fb", seriousPathLabel: "حالة ثقيلة (القائمة E)",
    bimNote: "وضع BIM:",
    faNote: "حالة عادية: حتى 18 جلسة بأفضل تعويض لكل حالة وسنة تقويمية.",
    eNote: "Fa: حتى 60 جلسة خلال 365 يوماً. Fb: حتى 60 في السنة، ثم ينخفض التعويض.",
    fbNote: "القائمة E: موافقة الطبيب المستشار مطلوبة وقد تكون صالحة حتى 3 سنوات.",
    howTitle: "كيف يعمل التعويض؟",
    step1Title: "احصل على وصفة طبية", step1Desc: "يمنحك طبيبك وصفة علاج طبيعي. بدونها لا يمكن الحصول على أي تعويض.",
    step2Title: "الدفع في الجلسة", step2Desc: "تدفع الأتعاب الإجمالية مباشرة لمعالجك في كل جلسة.",
    step3Title: "التعويض التلقائي", step3Desc: "يعوّض التأمين حصة INAMI تلقائياً، عادةً في غضون أيام قليلة.",
    nonConvExplain: "يحدد Loïc Meunier أتعابه بحرية. يعوّض التأمين حوالي 75٪ من تعريفة INAMI التقليدية. الفرق على عاتقك.",
    nonConvNote: "قيم تقديرية — اتصل بصندوق مرضك للحصول على المبلغ الدقيق.",
    bimTitle: "BIM — ما هو؟", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) هو نظام تعريفة تفضيلية للأشخاص ذوي الدخل المنخفض. كمريض BIM، تدفع أقل بكثير لكل جلسة (مثلاً 2,50 € بدلاً من 6,25 € في Fa).", bimHow: "كيف تتحقق: انظر إلى ملصق التأمين الصحي — رمز المؤمَّن (CT1/CT2) ينتهي بـ 0 (مثل 100/100) = ليس BIM. ينتهي بـ 1 (مثل 101/101) = أنت BIM. في حالة الشك، اتصل بصندوق مرضك.", bimNonConv: "مع معالج غير متعاقد، تعتمد تكلفتك على الأتعاب المطلوبة وتعويض صندوق المرض. اسأل صندوقك عن المبلغ الدقيق.",
    mutuelleTitle: "التأمين التكميلي", mutuelleText: "تغطي كثير من الصناديق جزءاً إضافياً عبر تأمينها التكميلي. استفسر من صندوقك.",
    prescTitle: "الوصفة الطبية إلزامية", prescText: "الوصفة الطبية إلزامية للحصول على التعويض. بدون وصفة لا يُمنح أي تعويض.",
    checkInami: "مراجعة تعريفات INAMI الرسمية", inamiLink: "موقع INAMI",
    ctaTitle: "لديك أسئلة حول أتعابنا؟", ctaSub: "فريقنا متاح للإجابة على جميع أسئلتك حول التكاليف والتعويضات.", ctaBtn: "احجز موعدًا",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "المعالجون التقليديون:", nonConvListTitle: "غير تقليدي:",
    tarifsSource: "تعريفات INAMI سارية منذ 01/07/2026. قد تتغير — المبالغ الحالية على inami.fgov.be.",
    cabinet: "في العيادة", home: "زيارة منزلية",
  },
  pl: {
    badge: "Przejrzyste ceny",
    title: "Co naprawdę", titleAccent: "płacisz?",
    subtitle: "Twój udział, zwrot z kasy chorych i całkowite honorarium — wszystko jasne, bez niespodzianek.",
    perSession: "/ sesja", yourPart: "Twój udział", mutuelleShare: "Zwrot z kasy chorych", totalHonoraire: "Całkowite honorarium",
    convTitle: "Terapeuci konwencjonowani", nonConvTitle: "Niekonwencjonowany — Loïc Meunier",
    normalPathLabel: "Zwykła patologia", ePathLabel: "Patologia Fa lub Fb", seriousPathLabel: "Ciężka patologia (lista E)",
    bimNote: "Status BIM:",
    faNote: "Zwykła patologia: do 18 sesji z najlepszą refundacją na sytuację i rok kalendarzowy.",
    eNote: "Fa: do 60 sesji przez 365 dni. Fb: do 60 w roku kalendarzowym, potem refundacja maleje.",
    fbNote: "Lista E: wymaga zgody lekarza orzecznika ważnej do 3 lat.",
    howTitle: "Jak działa zwrot kosztów?",
    step1Title: "Uzyskaj receptę", step1Desc: "Lekarz wystawia Ci receptę na fizjoterapię. Bez niej — brak zwrotu kosztów.",
    step2Title: "Płacisz podczas sesji", step2Desc: "Opłacasz całkowite honorarium bezpośrednio u terapeuty, przy każdej sesji.",
    step3Title: "Automatyczny zwrot", step3Desc: "Kasa chorych automatycznie zwraca część INAMI, zazwyczaj w ciągu kilku dni.",
    nonConvExplain: "Loïc Meunier ustala honoraria swobodnie. Kasa chorych zwraca ok. 75% konwencjonowanej stawki INAMI. Różnica jest po Twojej stronie.",
    nonConvNote: "Wartości szacunkowe — skontaktuj się z kasą chorych w celu uzyskania dokładnej kwoty.",
    bimTitle: "BIM — Co to jest?", bimText: "BIM (Bénéficiaire de l'Intervention Majorée) to taryfa preferencyjna dla osób o niskich dochodach. Jako pacjent BIM płacisz znacznie mniej za sesję (np. 2,50 € zamiast 6,25 € przy Fa).", bimHow: "Jak sprawdzić: spójrz na naklejkę kasy chorych — kod ubezpieczonego (CT1/CT2) kończy się na 0 (np. 100/100) = nie BIM. Kończy się na 1 (np. 101/101) = BIM. W razie wątpliwości skontaktuj się z kasą chorych.", bimNonConv: "U terapeuty niekonwencjonowanego koszt zależy od naliczonego honorarium i refundacji kasy chorych. Zapytaj ją o dokładną kwotę.",
    mutuelleTitle: "Ubezpieczenie uzupełniające", mutuelleText: "Wiele kas chorych pokrywa dodatkową część przez ubezpieczenie uzupełniające. Zapytaj swoją kasę.",
    prescTitle: "Recepta lekarska obowiązkowa", prescText: "Recepta lekarska jest obowiązkowa do uzyskania zwrotu. Bez recepty zwrot nie jest możliwy.",
    checkInami: "Sprawdź oficjalne stawki INAMI", inamiLink: "Strona INAMI",
    ctaTitle: "Pytania dotyczące naszych cen?", ctaSub: "Nasz zespół jest dostępny, aby odpowiedzieć na wszystkie pytania dotyczące kosztów i zwrotów.", ctaBtn: "Umów wizytę",
    whoConv: "Philippe Banaszak · Félix Esser · Fabienne Dormann · Thom Petit",
    whoNonConv: "Loïc Meunier",
    convListTitle: "Terapeuci konwencjonowani:", nonConvListTitle: "Niekonwencjonowany:",
    tarifsSource: "Stawki INAMI obowiązujące od 01.07.2026. Mogą się zmienić — aktualne kwoty na inami.fgov.be.",
    cabinet: "W przychodni", home: "Wizyta domowa",
  },
};

/* ─── SESSION DATA ─────────────────────────────────────────────────────────── */
function fmt(n: number): string {
  return n.toFixed(2).replace(".", ",") + " €";
}

const CONV = {
  cabinet: [
    { labelKey: "normalPathLabel" as const,  total: 31.64, inami: 25.39, patNonBim: 6.25, patBim: 2.50 },
    { labelKey: "ePathLabel" as const,       total: 31.64, inami: 26.14, patNonBim: 5.50, patBim: 2.00 },
    { labelKey: "seriousPathLabel" as const, total: 31.64, inami: 27.76, patNonBim: 3.88, patBim: 1.38 },
  ],
  home: [
    { labelKey: "normalPathLabel" as const,  total: 34.81, inami: 28.56, patNonBim: 6.25, patBim: 2.50 },
    { labelKey: "ePathLabel" as const,       total: 34.81, inami: 29.31, patNonBim: 5.50, patBim: 2.00 },
    { labelKey: "seriousPathLabel" as const, total: 34.81, inami: 30.93, patNonBim: 3.88, patBim: 1.38 },
  ],
};

const NON_CONV = {
  cabinet: { total: 35, inami: 19, patient: 16 },
  home:    { total: 38, inami: 21, patient: 17 },
};

/* ─── SUB-COMPONENT: FeeCard ───────────────────────────────────────────────── */
interface FeeCardProps {
  label: string;
  total: number; inami: number; patNonBim: number; patBim: number;
  ui: typeof UI["fr"];
  isApprox?: boolean;
}

function FeeCard({ label, total, inami, patNonBim, patBim, ui, isApprox }: FeeCardProps) {
  const inamiPct = Math.round((inami / total) * 100);
  const patientPct = 100 - inamiPct;

  return (
    <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      {/* Session type header */}
      <div className="px-5 py-3 bg-neutral-50 border-b border-neutral-100">
        <p className="text-sm font-semibold text-neutral-700">{label}</p>
      </div>

      <div className="p-5">
        {/* YOUR SHARE — hero number */}
        <div className="rounded-xl p-4 mb-5" style={{ background: "linear-gradient(135deg, #f0fce0 0%, #e8f8d0 100%)", border: "1.5px solid #c6e88a" }}>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#5c9120] mb-1">{ui.yourPart}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-extrabold" style={{ color: "#2d7a00" }}>
              {isApprox ? "~" : ""}{fmt(patNonBim)}
            </span>
            <span className="text-xs text-[#5c9120]">{ui.perSession}</span>
          </div>
          {patBim !== patNonBim && (
            <p className="text-xs mt-2" style={{ color: "#5c9120" }}>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#76b82a]/20 rounded-full font-semibold">
                {ui.bimNote} {isApprox ? "~" : ""}{fmt(patBim)}
              </span>
            </p>
          )}
        </div>

        {/* Visual bar */}
        <div className="mb-3">
          <div className="flex rounded-full overflow-hidden h-3 mb-2">
            <div style={{ width: `${inamiPct}%`, background: "#2b3186" }} className="transition-all duration-700" />
            <div style={{ width: `${patientPct}%`, background: "#76b82a" }} className="transition-all duration-700" />
          </div>
          <div className="flex justify-between text-xs text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2b3186]" />
              {ui.mutuelleShare} — {inamiPct}%
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#76b82a]" />
              {ui.yourPart} — {patientPct}%
            </span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2 pt-3 border-t border-neutral-100">
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-500 flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2b3186]" />
              {ui.mutuelleShare}
            </span>
            <span className="text-sm font-semibold text-[#2b3186]">
              {isApprox && "≈ "}{fmt(inami)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-400">{ui.totalHonoraire}</span>
            <span className="text-sm text-neutral-500">{fmt(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────────────────────────────────── */
export function HonorairesPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de","fr","en","nl","tr","ar","pl","uk","es","ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang] ?? UI.en;
  const isRtl = lang === "ar";

  const [convTab, setConvTab] = useState<"cabinet" | "home">("cabinet");
  const [ncTab, setNcTab] = useState<"cabinet" | "home">("cabinet");

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADER ── */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-5">
            <Euro className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight text-balance">
            {ui.title}{" "}<span style={{ color: "#76b82a" }}>{ui.titleAccent}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed text-balance">{ui.subtitle}</p>
        </AnimatedSection>

        <StaggerContainer className="space-y-10" staggerDelay={0.1}>

          <StaggerItem>
            <HonorairesSimulator lang={lang} isRtl={isRtl} />
          </StaggerItem>

          {/* ══ HOW IT WORKS ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 p-8">
              <h2 className="text-lg font-extrabold text-neutral-900 mb-8 text-center">{ui.howTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
                {/* Connecting line (desktop) */}
                <div className="hidden sm:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-0.5 bg-neutral-100 z-0" />

                {[
                  { Icon: FileText, title: ui.step1Title, desc: ui.step1Desc, color: "#2b3186", bg: "rgba(43,49,134,0.08)" },
                  { Icon: CreditCard, title: ui.step2Title, desc: ui.step2Desc, color: "#76b82a", bg: "rgba(118,184,42,0.1)" },
                  { Icon: RotateCcw, title: ui.step3Title, desc: ui.step3Desc, color: "#16a34a", bg: "rgba(22,163,74,0.08)" },
                ].map(({ Icon, title, desc, color, bg }, i) => (
                  <div key={i} className="relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm" style={{ background: bg }}>
                        <Icon className="w-7 h-7" style={{ color }} />
                      </div>
                    </div>
                    <h3 className="font-bold text-neutral-800 mb-2 text-sm">{title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* ══ CONVENTIONNÉ ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.convTitle}</h2>
                    <p className="text-white/70 text-sm mt-0.5">Tarifs INAMI officiels · Remboursement automatique</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-[#2b3186]/5 rounded-2xl">
                  <Users className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#2b3186] uppercase tracking-wide mb-1">{ui.convListTitle}</p>
                    <p className="text-sm text-neutral-700 font-medium">{ui.whoConv}</p>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2">
                  {(["cabinet", "home"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setConvTab(tab)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        convTab === tab
                          ? "bg-[#2b3186] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                      }`}
                    >
                      {tab === "cabinet" ? <Building2 className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                      {tab === "cabinet" ? ui.cabinet : ui.home}
                    </button>
                  ))}
                </div>

                {/* Session cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {CONV[convTab].map((row, i) => (
                    <FeeCard
                      key={i}
                      label={ui[row.labelKey]}
                      total={row.total}
                      inami={row.inami}
                      patNonBim={row.patNonBim}
                      patBim={row.patBim}
                      ui={ui}
                    />
                  ))}
                </div>

                {/* Fa / E / Fb notes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                    <Info className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">{ui.faNote}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-teal-50 border border-teal-100 rounded-xl">
                    <Info className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-teal-700 leading-relaxed">{ui.eNote}</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-xl">
                    <Info className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-purple-700 leading-relaxed">{ui.fbNote}</p>
                  </div>
                </div>

                {/* Source + INAMI link */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-neutral-100">
                  <p className="text-xs text-neutral-400 italic">{ui.tarifsSource}</p>
                  <a
                    href="https://www.inami.fgov.be/fr/themes/soins-de-sante-cout-et-remboursement/les-prestations-de-sante-que-vous-rembourse-votre-mutualite/prestations-de-soins-individuelles/honoraires-prix-et-remboursements/honoraires-prix-et-remboursements-des-kinesitherapeutes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2b3186] hover:text-[#76b82a] transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {ui.checkInami}
                  </a>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ══ NON-CONVENTIONNÉ ════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 px-8 py-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Euro className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold">{ui.nonConvTitle}</h2>
                    <p className="text-white/80 text-sm mt-0.5">{ui.nonConvExplain.split(".")[0]}.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                {/* Who */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">{ui.nonConvListTitle}</p>
                    <p className="text-sm text-neutral-700 font-medium">{ui.whoNonConv}</p>
                  </div>
                </div>

                {/* Context */}
                <p className="text-sm text-neutral-600 leading-relaxed">{ui.nonConvExplain}</p>

                {/* Tabs */}
                <div className="flex gap-2">
                  {(["cabinet", "home"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setNcTab(tab)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                        ncTab === tab
                          ? "bg-amber-500 text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                      }`}
                    >
                      {tab === "cabinet" ? <Building2 className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                      {tab === "cabinet" ? ui.cabinet : ui.home}
                    </button>
                  ))}
                </div>

                {/* Non-conv fee card */}
                <FeeCard
                  label={ncTab === "cabinet" ? ui.cabinet : ui.home}
                  total={NON_CONV[ncTab].total}
                  inami={NON_CONV[ncTab].inami}
                  patNonBim={NON_CONV[ncTab].patient}
                  patBim={NON_CONV[ncTab].patient}
                  ui={ui}
                  isApprox={true}
                />

                {/* Estimate note */}
                <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700 leading-relaxed">{ui.nonConvNote}</p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* ══ GOOD TO KNOW ════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Prescription */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.prescTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.prescText}</p>
              </div>
              {/* BIM */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.bimTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.bimText}</p>
                <div className="mt-2 p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-xs text-blue-700 leading-relaxed font-medium">{ui.bimHow}</p>
                </div>
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">{ui.bimNonConv}</p>
                </div>
              </div>
              {/* Supplementary */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-3">
                <div className="w-10 h-10 bg-[#76b82a]/10 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-[#76b82a]" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm">{ui.mutuelleTitle}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{ui.mutuelleText}</p>
              </div>
            </div>
          </StaggerItem>

          {/* ══ CTA ═════════════════════════════════════════════════════════ */}
          <StaggerItem>
            <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center">
              <h2 className="text-2xl font-extrabold mb-3">{ui.ctaTitle}</h2>
              <p className="text-white/70 mb-6 max-w-lg mx-auto text-balance">{ui.ctaSub}</p>
              <Link
                href="/termin"
                className="inline-flex items-center justify-center min-w-[14rem] gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
              >
                <CalendarPlus className="w-5 h-5" />
                {ui.ctaBtn}
              </Link>
            </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </div>
  );
}
