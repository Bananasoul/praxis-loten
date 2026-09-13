"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, ExternalLink, FileText, Info } from "lucide-react";

import { Link } from "@/i18n/navigation";
import {
  calculateFeeEstimate,
  getPathwaySummary,
  type Location,
  type Pathway,
  type Practitioner,
} from "@/lib/honoraires-simulator";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";
type BimStatus = "standard" | "bim" | "unknown";

interface SimulatorCopy {
  eyebrow: string;
  title: string;
  intro: string;
  privacy: string;
  pathQuestion: string;
  pathHint: string;
  pathOptions: Record<Pathway, { title: string; description: string }>;
  completedQuestion: string;
  completedHint: string;
  therapistQuestion: string;
  conventioned: string;
  conventionedNames: string;
  loic: string;
  loicHint: string;
  locationQuestion: string;
  cabinet: string;
  home: string;
  bimQuestion: string;
  standard: string;
  bim: string;
  unsure: string;
  resultTitle: string;
  nextSession: string;
  remainingPreferred: string;
  preferredUsed: string;
  fbFirstReduced: string;
  fbSecondReduced: string;
  eStatus: string;
  categoryRule: Record<Exclude<Pathway, "unknown">, string>;
  nextActionTitle: string;
  nextAction: Record<Exclude<Pathway, "unknown">, string>;
  priceTitle: string;
  perSession: string;
  standardPrice: string;
  bimPrice: string;
  paidTotal: string;
  reimbursed: string;
  approximate: string;
  unknownTitle: string;
  unknownText: string;
  contact: string;
  caveat: string;
  officialSource: string;
}

const COPY: Record<LangKey, SimulatorCopy> = {
  fr: {
    eyebrow: "Simulation en 1 minute",
    title: "Quel sera votre parcours de remboursement ?",
    intro: "Répondez à quelques questions à partir de votre prescription. Vous obtenez le nombre de séances concernées, votre prochaine tranche et une estimation du coût.",
    privacy: "Vos réponses restent dans votre navigateur. Aucune donnée de santé n’est enregistrée ni envoyée.",
    pathQuestion: "1. Que voyez-vous sur votre prescription ou votre accord ?",
    pathHint: "Le nombre de séances prescrit ne suffit pas toujours : la mention Fa, Fb ou liste E est déterminante.",
    pathOptions: {
      current: { title: "9 ou 18 séances", description: "Aucune mention Fa, Fb ou E." },
      fa: { title: "Mention Fa", description: "Souvent 30 ou 60 séances prescrites." },
      fb: { title: "Mention Fb", description: "Souvent 30 ou 60 séances prescrites." },
      e: { title: "Accord liste E", description: "Décision écrite de votre mutualité." },
      unknown: { title: "Je ne sais pas", description: "Nous vous indiquons quoi vérifier." },
    },
    completedQuestion: "2. Combien de séances avez-vous déjà faites pour ce problème ?",
    completedHint: "Indiquez les séances déjà réalisées, même chez un autre kinésithérapeute.",
    therapistQuestion: "3. Avec quel thérapeute ?",
    conventioned: "Thérapeute conventionné",
    conventionedNames: "Philippe, Félix, Fabienne ou Thom",
    loic: "Loïc Meunier",
    loicHint: "Thérapeute non conventionné",
    locationQuestion: "4. Où aura lieu la séance ?",
    cabinet: "Au cabinet",
    home: "À domicile",
    bimQuestion: "Votre statut mutuelle",
    standard: "Standard",
    bim: "BIM",
    unsure: "Je ne sais pas",
    resultTitle: "Votre estimation",
    nextSession: "Prochaine séance estimée : n° {session}",
    remainingPreferred: "Il vous reste {count} séance(s) dans la tranche au meilleur remboursement.",
    preferredUsed: "La tranche au meilleur remboursement est terminée. Les soins peuvent continuer avec un remboursement réduit.",
    fbFirstReduced: "La prochaine séance se situe dans la tranche 61–80, avec un remboursement réduit.",
    fbSecondReduced: "À partir de la 81e séance, le remboursement diminue une seconde fois.",
    eStatus: "La liste E ne suit pas le compteur de 18 ou 60 séances. Le remboursement dépend de la période couverte par l’accord.",
    categoryRule: {
      current: "Pathologie courante : jusqu’à 18 séances au meilleur remboursement par situation pathologique et par année civile.",
      fa: "Pathologie Fa : jusqu’à 60 séances au meilleur remboursement pendant 365 jours à partir de la première séance.",
      fb: "Pathologie Fb : jusqu’à 60 séances au meilleur remboursement par année civile. La notification peut être renouvelée.",
      e: "Pathologie lourde, liste E : l’accord du médecin-conseil est indispensable et peut être valable jusqu’à 3 ans.",
    },
    nextActionTitle: "À vérifier avant votre première séance",
    nextAction: {
      current: "Apportez votre prescription. Une prescription de 9 séances peut être complétée jusqu’au maximum remboursable si le médecin le juge nécessaire.",
      fa: "Vérifiez que la mention ou la notification Fa correspond bien à votre situation et que la date de la première séance est connue.",
      fb: "Vérifiez la notification Fb ou son renouvellement auprès de votre mutualité.",
      e: "Apportez la décision écrite de votre mutualité avec ses dates de validité.",
    },
    priceTitle: "Votre part estimée",
    perSession: "/ séance standard",
    standardPrice: "Sans statut BIM",
    bimPrice: "Avec statut BIM",
    paidTotal: "Honoraire facturé",
    reimbursed: "Remboursement estimé",
    approximate: "Estimation pour un thérapeute non conventionné : le montant exact dépend de votre mutualité et de la tranche atteinte.",
    unknownTitle: "Ne devinons pas votre catégorie",
    unknownText: "Une prescription de 30 ou 60 séances ne prouve pas à elle seule qu’il s’agit d’une Fa, d’une Fb ou d’une liste E. Vérifiez la mention sur la prescription ou la décision de la mutualité.",
    contact: "Nous contacter pour vérifier",
    caveat: "Estimation administrative pour une séance standard de 30 minutes, selon les tarifs INAMI applicables depuis le 1er juillet 2026. Votre mutualité confirme toujours le remboursement final.",
    officialSource: "Voir les tarifs officiels INAMI",
  },
  de: {
    eyebrow: "Simulation in 1 Minute",
    title: "Wie sieht Ihr Erstattungsweg aus?",
    intro: "Beantworten Sie einige Fragen anhand Ihrer Verordnung. Sie sehen die betroffene Sitzungszahl, Ihre nächste Tarifstufe und eine Kostenschätzung.",
    privacy: "Ihre Antworten bleiben in Ihrem Browser. Es werden keine Gesundheitsdaten gespeichert oder übertragen.",
    pathQuestion: "1. Was steht auf Ihrer Verordnung oder Bewilligung?",
    pathHint: "Die verordnete Anzahl allein reicht nicht immer aus: Entscheidend ist der Hinweis Fa, Fb oder Liste E.",
    pathOptions: {
      current: { title: "9 oder 18 Sitzungen", description: "Kein Hinweis Fa, Fb oder E." },
      fa: { title: "Hinweis Fa", description: "Oft 30 oder 60 Sitzungen verordnet." },
      fb: { title: "Hinweis Fb", description: "Oft 30 oder 60 Sitzungen verordnet." },
      e: { title: "Bewilligung Liste E", description: "Schriftliche Entscheidung der Krankenkasse." },
      unknown: { title: "Ich weiß es nicht", description: "Wir zeigen Ihnen, was zu prüfen ist." },
    },
    completedQuestion: "2. Wie viele Sitzungen hatten Sie bereits für dieses Problem?",
    completedHint: "Zählen Sie auch Sitzungen bei einer anderen Physiotherapiepraxis mit.",
    therapistQuestion: "3. Bei welchem Therapeuten?",
    conventioned: "Konventionierter Therapeut",
    conventionedNames: "Philippe, Félix, Fabienne oder Thom",
    loic: "Loïc Meunier",
    loicHint: "Nicht konventionierter Therapeut",
    locationQuestion: "4. Wo findet die Sitzung statt?",
    cabinet: "In der Praxis",
    home: "Hausbesuch",
    bimQuestion: "Ihr Kassenstatus",
    standard: "Standard",
    bim: "BIM",
    unsure: "Ich weiß es nicht",
    resultTitle: "Ihre Schätzung",
    nextSession: "Voraussichtlich nächste Sitzung: Nr. {session}",
    remainingPreferred: "Noch {count} Sitzung(en) in der besten Erstattungsstufe.",
    preferredUsed: "Die beste Erstattungsstufe ist ausgeschöpft. Die Behandlung kann mit geringerer Erstattung fortgesetzt werden.",
    fbFirstReduced: "Die nächste Sitzung liegt in der Stufe 61–80 mit geringerer Erstattung.",
    fbSecondReduced: "Ab der 81. Sitzung sinkt die Erstattung ein zweites Mal.",
    eStatus: "Für Liste E gilt nicht der Zähler von 18 oder 60 Sitzungen. Maßgeblich ist der Bewilligungszeitraum.",
    categoryRule: {
      current: "Übliche Pathologie: bis zu 18 Sitzungen zum besten Erstattungssatz je Situation und Kalenderjahr.",
      fa: "Fa: bis zu 60 Sitzungen zum besten Erstattungssatz während 365 Tagen ab der ersten Sitzung.",
      fb: "Fb: bis zu 60 Sitzungen zum besten Erstattungssatz pro Kalenderjahr. Die Meldung kann erneuert werden.",
      e: "Schwere Pathologie, Liste E: Die Bewilligung des Vertrauensarztes ist erforderlich und kann bis zu 3 Jahre gelten.",
    },
    nextActionTitle: "Vor der ersten Sitzung prüfen",
    nextAction: {
      current: "Bringen Sie Ihre Verordnung mit. Eine Verordnung über 9 Sitzungen kann bei medizinischer Notwendigkeit ergänzt werden.",
      fa: "Prüfen Sie den Fa-Hinweis bzw. die Fa-Meldung und das Datum der ersten Sitzung.",
      fb: "Prüfen Sie die Fb-Meldung oder deren Erneuerung bei Ihrer Krankenkasse.",
      e: "Bringen Sie die schriftliche Bewilligung mit dem Gültigkeitszeitraum mit.",
    },
    priceTitle: "Ihr geschätzter Eigenanteil",
    perSession: "/ Standardsitzung",
    standardPrice: "Ohne BIM-Status",
    bimPrice: "Mit BIM-Status",
    paidTotal: "Berechnetes Honorar",
    reimbursed: "Geschätzte Erstattung",
    approximate: "Schätzung bei einem nicht konventionierten Therapeuten: Der genaue Betrag hängt von Ihrer Krankenkasse und Tarifstufe ab.",
    unknownTitle: "Wir raten Ihre Kategorie nicht",
    unknownText: "30 oder 60 verordnete Sitzungen beweisen allein nicht Fa, Fb oder Liste E. Prüfen Sie die Verordnung oder den Kassenbescheid.",
    contact: "Zur Prüfung Kontakt aufnehmen",
    caveat: "Administrative Schätzung für eine Standardsitzung von 30 Minuten nach den seit 1. Juli 2026 geltenden INAMI-Tarifen. Die Krankenkasse bestätigt die endgültige Erstattung.",
    officialSource: "Offizielle INAMI-Tarife ansehen",
  },
  en: {
    eyebrow: "One-minute estimate",
    title: "What is your reimbursement pathway?",
    intro: "Answer a few questions using your prescription. You will see the relevant session allowance, your next reimbursement band and an estimated cost.",
    privacy: "Your answers stay in your browser. No health data is stored or sent.",
    pathQuestion: "1. What is written on your prescription or approval?",
    pathHint: "The prescribed number alone is not always enough: the Fa, Fb or E-list wording matters.",
    pathOptions: {
      current: { title: "9 or 18 sessions", description: "No Fa, Fb or E wording." },
      fa: { title: "Fa wording", description: "Often prescribed as 30 or 60 sessions." },
      fb: { title: "Fb wording", description: "Often prescribed as 30 or 60 sessions." },
      e: { title: "E-list approval", description: "Written decision from your health insurer." },
      unknown: { title: "I do not know", description: "We show you what to check." },
    },
    completedQuestion: "2. How many sessions have you already had for this problem?",
    completedHint: "Include sessions with any other physiotherapist.",
    therapistQuestion: "3. Which therapist?",
    conventioned: "Conventioned therapist",
    conventionedNames: "Philippe, Félix, Fabienne or Thom",
    loic: "Loïc Meunier",
    loicHint: "Non-conventioned therapist",
    locationQuestion: "4. Where will the session take place?",
    cabinet: "At the practice",
    home: "Home visit",
    bimQuestion: "Your insurance status",
    standard: "Standard",
    bim: "BIM",
    unsure: "I do not know",
    resultTitle: "Your estimate",
    nextSession: "Estimated next session: no. {session}",
    remainingPreferred: "You have {count} session(s) left in the best reimbursement band.",
    preferredUsed: "The best reimbursement band has been used. Treatment can continue with lower reimbursement.",
    fbFirstReduced: "Your next session is in the 61–80 band, with lower reimbursement.",
    fbSecondReduced: "From session 81, reimbursement decreases a second time.",
    eStatus: "The E list does not use the 18- or 60-session counter. Reimbursement depends on the approval period.",
    categoryRule: {
      current: "Common condition: up to 18 sessions at the best reimbursement per pathological situation and calendar year.",
      fa: "Fa condition: up to 60 sessions at the best reimbursement during 365 days from the first session.",
      fb: "Fb condition: up to 60 sessions at the best reimbursement per calendar year. The notification can be renewed.",
      e: "Severe condition, E list: medical-adviser approval is required and may be valid for up to 3 years.",
    },
    nextActionTitle: "Check before your first session",
    nextAction: {
      current: "Bring your prescription. A 9-session prescription may be extended when medically necessary.",
      fa: "Check the Fa wording or notification and the date of the first session.",
      fb: "Check the Fb notification or renewal with your health insurer.",
      e: "Bring the written insurer approval and its validity dates.",
    },
    priceTitle: "Your estimated share",
    perSession: "/ standard session",
    standardPrice: "Without BIM status",
    bimPrice: "With BIM status",
    paidTotal: "Fee charged",
    reimbursed: "Estimated reimbursement",
    approximate: "Estimate for a non-conventioned therapist: the exact amount depends on your insurer and reimbursement band.",
    unknownTitle: "Let us not guess your category",
    unknownText: "A prescription for 30 or 60 sessions alone does not prove Fa, Fb or E-list status. Check the wording or the insurer decision.",
    contact: "Contact us to check",
    caveat: "Administrative estimate for a standard 30-minute session using INAMI fees effective from 1 July 2026. Your insurer always confirms the final reimbursement.",
    officialSource: "View official INAMI fees",
  },
  nl: {
    eyebrow: "Schatting in 1 minuut",
    title: "Hoe ziet uw terugbetalingstraject eruit?",
    intro: "Beantwoord enkele vragen op basis van uw voorschrift. U ziet het aantal betrokken sessies, uw volgende schijf en een kostenraming.",
    privacy: "Uw antwoorden blijven in uw browser. Er worden geen gezondheidsgegevens opgeslagen of verstuurd.",
    pathQuestion: "1. Wat staat er op uw voorschrift of goedkeuring?",
    pathHint: "Het voorgeschreven aantal volstaat niet altijd: de vermelding Fa, Fb of lijst E is bepalend.",
    pathOptions: {
      current: { title: "9 of 18 sessies", description: "Geen vermelding Fa, Fb of E." },
      fa: { title: "Vermelding Fa", description: "Vaak 30 of 60 sessies voorgeschreven." },
      fb: { title: "Vermelding Fb", description: "Vaak 30 of 60 sessies voorgeschreven." },
      e: { title: "Goedkeuring lijst E", description: "Schriftelijke beslissing van uw ziekenfonds." },
      unknown: { title: "Ik weet het niet", description: "Wij tonen wat u moet controleren." },
    },
    completedQuestion: "2. Hoeveel sessies kreeg u al voor dit probleem?",
    completedHint: "Tel ook sessies bij een andere kinesitherapeut mee.",
    therapistQuestion: "3. Bij welke therapeut?",
    conventioned: "Geconventioneerde therapeut",
    conventionedNames: "Philippe, Félix, Fabienne of Thom",
    loic: "Loïc Meunier",
    loicHint: "Niet-geconventioneerde therapeut",
    locationQuestion: "4. Waar vindt de sessie plaats?",
    cabinet: "In de praktijk",
    home: "Huisbezoek",
    bimQuestion: "Uw ziekenfondsstatus",
    standard: "Standaard",
    bim: "BIM",
    unsure: "Ik weet het niet",
    resultTitle: "Uw schatting",
    nextSession: "Geschatte volgende sessie: nr. {session}",
    remainingPreferred: "U hebt nog {count} sessie(s) in de beste terugbetalingsschijf.",
    preferredUsed: "De beste terugbetalingsschijf is opgebruikt. De behandeling kan doorgaan met een lagere terugbetaling.",
    fbFirstReduced: "Uw volgende sessie valt in schijf 61–80, met een lagere terugbetaling.",
    fbSecondReduced: "Vanaf sessie 81 daalt de terugbetaling een tweede keer.",
    eStatus: "Lijst E gebruikt de teller van 18 of 60 sessies niet. De goedkeuringsperiode is bepalend.",
    categoryRule: {
      current: "Courante pathologie: maximaal 18 sessies aan de beste terugbetaling per situatie en kalenderjaar.",
      fa: "Fa-pathologie: maximaal 60 sessies aan de beste terugbetaling gedurende 365 dagen vanaf de eerste sessie.",
      fb: "Fb-pathologie: maximaal 60 sessies aan de beste terugbetaling per kalenderjaar. De kennisgeving kan worden vernieuwd.",
      e: "Zware pathologie, lijst E: goedkeuring van de adviserend arts is vereist en kan maximaal 3 jaar gelden.",
    },
    nextActionTitle: "Controleer vóór uw eerste sessie",
    nextAction: {
      current: "Breng uw voorschrift mee. Een voorschrift van 9 sessies kan bij medische noodzaak worden aangevuld.",
      fa: "Controleer de Fa-vermelding of kennisgeving en de datum van de eerste sessie.",
      fb: "Controleer de Fb-kennisgeving of hernieuwing bij uw ziekenfonds.",
      e: "Breng de schriftelijke goedkeuring en geldigheidsdata mee.",
    },
    priceTitle: "Uw geschatte aandeel",
    perSession: "/ standaardsessie",
    standardPrice: "Zonder BIM-status",
    bimPrice: "Met BIM-status",
    paidTotal: "Aangerekend honorarium",
    reimbursed: "Geschatte terugbetaling",
    approximate: "Raming voor een niet-geconventioneerde therapeut: het exacte bedrag hangt af van uw ziekenfonds en schijf.",
    unknownTitle: "We raden uw categorie niet",
    unknownText: "Een voorschrift van 30 of 60 sessies bewijst op zich geen Fa, Fb of lijst E. Controleer de vermelding of beslissing van het ziekenfonds.",
    contact: "Contacteer ons voor controle",
    caveat: "Administratieve raming voor een standaardsessie van 30 minuten volgens de RIZIV-tarieven vanaf 1 juli 2026. Uw ziekenfonds bevestigt de definitieve terugbetaling.",
    officialSource: "Officiële RIZIV-tarieven bekijken",
  },
  es: {
    eyebrow: "Estimación en 1 minuto", title: "¿Cuál es su recorrido de reembolso?", intro: "Responda unas preguntas usando su prescripción. Verá las sesiones aplicables, el siguiente tramo y un coste estimado.", privacy: "Sus respuestas permanecen en el navegador. No se guarda ni envía ningún dato de salud.",
    pathQuestion: "1. ¿Qué figura en su prescripción o autorización?", pathHint: "El número prescrito no siempre basta: importa la mención Fa, Fb o lista E.",
    pathOptions: { current: { title: "9 o 18 sesiones", description: "Sin mención Fa, Fb o E." }, fa: { title: "Mención Fa", description: "A menudo 30 o 60 sesiones." }, fb: { title: "Mención Fb", description: "A menudo 30 o 60 sesiones." }, e: { title: "Autorización lista E", description: "Decisión escrita de su mutua." }, unknown: { title: "No lo sé", description: "Le indicamos qué comprobar." } },
    completedQuestion: "2. ¿Cuántas sesiones ha realizado ya por este problema?", completedHint: "Incluya las realizadas con otro fisioterapeuta.", therapistQuestion: "3. ¿Con qué terapeuta?", conventioned: "Terapeuta convencionado", conventionedNames: "Philippe, Félix, Fabienne o Thom", loic: "Loïc Meunier", loicHint: "Terapeuta no convencionado", locationQuestion: "4. ¿Dónde será la sesión?", cabinet: "En la consulta", home: "A domicilio", bimQuestion: "Su estatus de mutua", standard: "Estándar", bim: "BIM", unsure: "No lo sé", resultTitle: "Su estimación", nextSession: "Próxima sesión estimada: n.º {session}", remainingPreferred: "Le quedan {count} sesión(es) en el mejor tramo de reembolso.", preferredUsed: "El mejor tramo se ha agotado. El tratamiento puede continuar con un reembolso menor.", fbFirstReduced: "La próxima sesión está en el tramo 61–80, con reembolso menor.", fbSecondReduced: "A partir de la sesión 81, el reembolso vuelve a disminuir.", eStatus: "La lista E no usa el contador de 18 o 60 sesiones; depende del periodo autorizado.",
    categoryRule: { current: "Patología corriente: hasta 18 sesiones con el mejor reembolso por situación y año civil.", fa: "Fa: hasta 60 sesiones con el mejor reembolso durante 365 días desde la primera sesión.", fb: "Fb: hasta 60 sesiones con el mejor reembolso por año civil. La notificación puede renovarse.", e: "Patología grave, lista E: requiere autorización del médico asesor, válida hasta 3 años." },
    nextActionTitle: "Compruebe antes de la primera sesión", nextAction: { current: "Traiga su prescripción. Una de 9 sesiones puede ampliarse si es médicamente necesario.", fa: "Compruebe la mención o notificación Fa y la fecha de la primera sesión.", fb: "Compruebe la notificación Fb o su renovación con la mutua.", e: "Traiga la autorización escrita y sus fechas de validez." }, priceTitle: "Su parte estimada", perSession: "/ sesión estándar", standardPrice: "Sin estatus BIM", bimPrice: "Con estatus BIM", paidTotal: "Honorario facturado", reimbursed: "Reembolso estimado", approximate: "Estimación para un terapeuta no convencionado: el importe exacto depende de su mutua y del tramo.", unknownTitle: "No adivinemos su categoría", unknownText: "Una prescripción de 30 o 60 sesiones no demuestra por sí sola Fa, Fb o lista E. Compruebe la mención o la decisión de la mutua.", contact: "Contactarnos para comprobar", caveat: "Estimación administrativa para una sesión estándar de 30 minutos según tarifas INAMI vigentes desde el 1 de julio de 2026. Su mutua confirma el reembolso final.", officialSource: "Ver tarifas oficiales INAMI",
  },
  pl: {
    eyebrow: "Wycena w 1 minutę", title: "Jaka jest Twoja ścieżka refundacji?", intro: "Odpowiedz na kilka pytań na podstawie skierowania. Zobaczysz liczbę sesji, kolejny próg refundacji i szacowany koszt.", privacy: "Odpowiedzi pozostają w przeglądarce. Żadne dane zdrowotne nie są zapisywane ani wysyłane.",
    pathQuestion: "1. Co widnieje na skierowaniu lub zgodzie?", pathHint: "Sama liczba sesji nie zawsze wystarcza: decyduje oznaczenie Fa, Fb lub lista E.", pathOptions: { current: { title: "9 lub 18 sesji", description: "Bez oznaczenia Fa, Fb lub E." }, fa: { title: "Oznaczenie Fa", description: "Często 30 lub 60 sesji." }, fb: { title: "Oznaczenie Fb", description: "Często 30 lub 60 sesji." }, e: { title: "Zgoda lista E", description: "Pisemna decyzja kasy chorych." }, unknown: { title: "Nie wiem", description: "Wskażemy, co sprawdzić." } },
    completedQuestion: "2. Ile sesji odbyło się już z powodu tego problemu?", completedHint: "Uwzględnij sesje u innych fizjoterapeutów.", therapistQuestion: "3. U którego terapeuty?", conventioned: "Terapeuta zakontraktowany", conventionedNames: "Philippe, Félix, Fabienne lub Thom", loic: "Loïc Meunier", loicHint: "Terapeuta bez konwencji", locationQuestion: "4. Gdzie odbędzie się sesja?", cabinet: "W gabinecie", home: "W domu", bimQuestion: "Status ubezpieczenia", standard: "Standard", bim: "BIM", unsure: "Nie wiem", resultTitle: "Twoja wycena", nextSession: "Szacowana kolejna sesja: nr {session}", remainingPreferred: "Pozostało {count} sesji w najlepszym progu refundacji.", preferredUsed: "Najlepszy próg został wykorzystany. Leczenie może trwać dalej z niższą refundacją.", fbFirstReduced: "Następna sesja przypada na próg 61–80 z niższą refundacją.", fbSecondReduced: "Od 81. sesji refundacja maleje ponownie.", eStatus: "Lista E nie używa limitu 18 lub 60 sesji; decyduje okres zgody.",
    categoryRule: { current: "Zwykła patologia: do 18 sesji z najlepszą refundacją na sytuację i rok kalendarzowy.", fa: "Fa: do 60 sesji z najlepszą refundacją przez 365 dni od pierwszej sesji.", fb: "Fb: do 60 sesji z najlepszą refundacją w roku kalendarzowym. Zgłoszenie można odnowić.", e: "Ciężka patologia, lista E: wymaga zgody lekarza orzecznika ważnej do 3 lat." },
    nextActionTitle: "Sprawdź przed pierwszą sesją", nextAction: { current: "Przynieś skierowanie. Serię 9 sesji można uzupełnić, jeśli lekarz uzna to za potrzebne.", fa: "Sprawdź oznaczenie lub zgłoszenie Fa i datę pierwszej sesji.", fb: "Sprawdź zgłoszenie Fb lub jego odnowienie w kasie chorych.", e: "Przynieś pisemną zgodę z datami ważności." }, priceTitle: "Szacowany udział pacjenta", perSession: "/ sesja standardowa", standardPrice: "Bez statusu BIM", bimPrice: "Ze statusem BIM", paidTotal: "Naliczona opłata", reimbursed: "Szacowana refundacja", approximate: "Wycena dla terapeuty bez konwencji: dokładna kwota zależy od kasy chorych i progu.", unknownTitle: "Nie zgadujemy kategorii", unknownText: "Samo skierowanie na 30 lub 60 sesji nie potwierdza Fa, Fb ani listy E. Sprawdź oznaczenie lub decyzję kasy.", contact: "Skontaktuj się z nami", caveat: "Wycena administracyjna dla standardowej sesji 30 minut według stawek INAMI od 1 lipca 2026 r. Ostateczną refundację potwierdza kasa chorych.", officialSource: "Oficjalne stawki INAMI",
  },
  tr: {
    eyebrow: "1 dakikada tahmin", title: "Geri ödeme yolunuz nedir?", intro: "Reçetenize göre birkaç soruyu yanıtlayın. Seans hakkınızı, sonraki geri ödeme dilimini ve tahmini maliyeti görün.", privacy: "Yanıtlarınız tarayıcınızda kalır. Hiçbir sağlık verisi kaydedilmez veya gönderilmez.",
    pathQuestion: "1. Reçetenizde veya onayınızda ne yazıyor?", pathHint: "Yalnızca seans sayısı her zaman yeterli değildir: Fa, Fb veya E listesi ibaresi önemlidir.", pathOptions: { current: { title: "9 veya 18 seans", description: "Fa, Fb veya E ibaresi yok." }, fa: { title: "Fa ibaresi", description: "Genellikle 30 veya 60 seans." }, fb: { title: "Fb ibaresi", description: "Genellikle 30 veya 60 seans." }, e: { title: "E listesi onayı", description: "Sigortanın yazılı kararı." }, unknown: { title: "Bilmiyorum", description: "Neyi kontrol edeceğinizi gösteririz." } },
    completedQuestion: "2. Bu sorun için kaç seans yaptınız?", completedHint: "Başka fizyoterapistlerdeki seansları da ekleyin.", therapistQuestion: "3. Hangi terapist?", conventioned: "Anlaşmalı terapist", conventionedNames: "Philippe, Félix, Fabienne veya Thom", loic: "Loïc Meunier", loicHint: "Anlaşmasız terapist", locationQuestion: "4. Seans nerede olacak?", cabinet: "Klinikte", home: "Evde", bimQuestion: "Sigorta statünüz", standard: "Standart", bim: "BIM", unsure: "Bilmiyorum", resultTitle: "Tahmininiz", nextSession: "Tahmini sonraki seans: no. {session}", remainingPreferred: "En iyi geri ödeme diliminde {count} seans kaldı.", preferredUsed: "En iyi geri ödeme dilimi bitti. Tedavi daha düşük geri ödemeyle sürebilir.", fbFirstReduced: "Sonraki seans 61–80 diliminde, geri ödeme daha düşüktür.", fbSecondReduced: "81. seanstan itibaren geri ödeme tekrar azalır.", eStatus: "E listesinde 18 veya 60 seans sayacı yoktur; onay süresi geçerlidir.",
    categoryRule: { current: "Yaygın patoloji: her durum ve takvim yılı için en iyi geri ödemeyle 18 seansa kadar.", fa: "Fa: ilk seanstan itibaren 365 gün içinde en iyi geri ödemeyle 60 seansa kadar.", fb: "Fb: takvim yılı başına en iyi geri ödemeyle 60 seansa kadar. Bildirim yenilenebilir.", e: "Ağır patoloji, E listesi: danışman doktor onayı gerekir ve 3 yıla kadar geçerli olabilir." },
    nextActionTitle: "İlk seanstan önce kontrol edin", nextAction: { current: "Reçetenizi getirin. Tıbben gerekliyse 9 seanslık reçete tamamlanabilir.", fa: "Fa ibaresini veya bildirimini ve ilk seans tarihini kontrol edin.", fb: "Fb bildirimini veya yenilemesini sigortanızla kontrol edin.", e: "Yazılı onayı ve geçerlilik tarihlerini getirin." }, priceTitle: "Tahmini payınız", perSession: "/ standart seans", standardPrice: "BIM olmadan", bimPrice: "BIM ile", paidTotal: "Fatura edilen ücret", reimbursed: "Tahmini geri ödeme", approximate: "Anlaşmasız terapist tahmini: kesin tutar sigortanıza ve dilime bağlıdır.", unknownTitle: "Kategorinizi tahmin etmeyelim", unknownText: "30 veya 60 seanslık reçete tek başına Fa, Fb veya E listesini kanıtlamaz. İbareyi veya sigorta kararını kontrol edin.", contact: "Kontrol için bize ulaşın", caveat: "1 Temmuz 2026’dan geçerli INAMI tarifelerine göre standart 30 dakikalık seans için idari tahmin. Nihai geri ödemeyi sigortanız onaylar.", officialSource: "Resmî INAMI tarifeleri",
  },
  uk: {
    eyebrow: "Оцінка за 1 хвилину", title: "Який ваш шлях відшкодування?", intro: "Дайте кілька відповідей за направленням. Ви побачите кількість сеансів, наступний рівень відшкодування та орієнтовну вартість.", privacy: "Відповіді залишаються у браузері. Медичні дані не зберігаються й не надсилаються.",
    pathQuestion: "1. Що вказано в направленні або дозволі?", pathHint: "Самої кількості сеансів не завжди достатньо: важливе позначення Fa, Fb або список E.", pathOptions: { current: { title: "9 або 18 сеансів", description: "Без позначення Fa, Fb або E." }, fa: { title: "Позначення Fa", description: "Часто 30 або 60 сеансів." }, fb: { title: "Позначення Fb", description: "Часто 30 або 60 сеансів." }, e: { title: "Дозвіл списку E", description: "Письмове рішення страхової каси." }, unknown: { title: "Я не знаю", description: "Покажемо, що перевірити." } },
    completedQuestion: "2. Скільки сеансів уже проведено для цієї проблеми?", completedHint: "Врахуйте сеанси в інших фізіотерапевтів.", therapistQuestion: "3. У якого терапевта?", conventioned: "Конвенційний терапевт", conventionedNames: "Philippe, Félix, Fabienne або Thom", loic: "Loïc Meunier", loicHint: "Неконвенційний терапевт", locationQuestion: "4. Де буде сеанс?", cabinet: "У кабінеті", home: "Вдома", bimQuestion: "Ваш страховий статус", standard: "Стандарт", bim: "BIM", unsure: "Я не знаю", resultTitle: "Ваша оцінка", nextSession: "Орієнтовний наступний сеанс: № {session}", remainingPreferred: "Залишилося {count} сеансів у найкращій категорії відшкодування.", preferredUsed: "Найкращу категорію використано. Лікування може тривати з меншим відшкодуванням.", fbFirstReduced: "Наступний сеанс належить до діапазону 61–80 з меншим відшкодуванням.", fbSecondReduced: "З 81-го сеансу відшкодування зменшується вдруге.", eStatus: "Список E не має ліміту 18 або 60 сеансів; діє строк дозволу.",
    categoryRule: { current: "Звичайна патологія: до 18 сеансів із найкращим відшкодуванням на ситуацію та календарний рік.", fa: "Fa: до 60 сеансів із найкращим відшкодуванням протягом 365 днів від першого сеансу.", fb: "Fb: до 60 сеансів із найкращим відшкодуванням за календарний рік. Повідомлення можна поновити.", e: "Тяжка патологія, список E: потрібен дозвіл лікаря-консультанта, чинний до 3 років." },
    nextActionTitle: "Перевірте до першого сеансу", nextAction: { current: "Принесіть направлення. Серію з 9 сеансів можна доповнити за медичної потреби.", fa: "Перевірте позначення або повідомлення Fa та дату першого сеансу.", fb: "Перевірте повідомлення Fb або поновлення у страховій касі.", e: "Принесіть письмовий дозвіл і дати його чинності." }, priceTitle: "Ваша орієнтовна частка", perSession: "/ стандартний сеанс", standardPrice: "Без статусу BIM", bimPrice: "Зі статусом BIM", paidTotal: "Нарахована сума", reimbursed: "Орієнтовне відшкодування", approximate: "Оцінка для неконвенційного терапевта: точна сума залежить від каси та діапазону.", unknownTitle: "Не будемо вгадувати категорію", unknownText: "Направлення на 30 або 60 сеансів саме по собі не підтверджує Fa, Fb чи список E. Перевірте позначення або рішення каси.", contact: "Зв’язатися для перевірки", caveat: "Адміністративна оцінка стандартного 30-хвилинного сеансу за тарифами INAMI від 1 липня 2026 року. Остаточне відшкодування підтверджує каса.", officialSource: "Офіційні тарифи INAMI",
  },
  ar: {
    eyebrow: "تقدير في دقيقة", title: "ما هو مسار التعويض الخاص بك؟", intro: "أجب عن أسئلة قصيرة اعتماداً على الوصفة. سترى عدد الجلسات والشريحة التالية وتقديراً للتكلفة.", privacy: "تبقى إجاباتك في المتصفح. لا يتم حفظ أو إرسال أي بيانات صحية.",
    pathQuestion: "1. ماذا كُتب في الوصفة أو الموافقة؟", pathHint: "عدد الجلسات وحده لا يكفي دائماً: ذكر Fa أو Fb أو القائمة E هو المهم.", pathOptions: { current: { title: "9 أو 18 جلسة", description: "لا يوجد ذكر Fa أو Fb أو E." }, fa: { title: "ذكر Fa", description: "غالباً 30 أو 60 جلسة." }, fb: { title: "ذكر Fb", description: "غالباً 30 أو 60 جلسة." }, e: { title: "موافقة القائمة E", description: "قرار خطي من صندوق التأمين." }, unknown: { title: "لا أعرف", description: "نوضح لك ما يجب التحقق منه." } },
    completedQuestion: "2. كم جلسة أجريت لهذه المشكلة؟", completedHint: "أضف الجلسات لدى أي معالج آخر.", therapistQuestion: "3. مع أي معالج؟", conventioned: "معالج متعاقد", conventionedNames: "Philippe أو Félix أو Fabienne أو Thom", loic: "Loïc Meunier", loicHint: "معالج غير متعاقد", locationQuestion: "4. أين ستكون الجلسة؟", cabinet: "في العيادة", home: "في المنزل", bimQuestion: "حالة التأمين", standard: "عادي", bim: "BIM", unsure: "لا أعرف", resultTitle: "تقديرك", nextSession: "الجلسة التالية المقدرة: رقم {session}", remainingPreferred: "تبقى {count} جلسة في أفضل شريحة تعويض.", preferredUsed: "انتهت أفضل شريحة تعويض. يمكن متابعة العلاج بتعويض أقل.", fbFirstReduced: "الجلسة التالية ضمن الشريحة 61–80 بتعويض أقل.", fbSecondReduced: "ابتداءً من الجلسة 81 ينخفض التعويض مرة ثانية.", eStatus: "القائمة E لا تستخدم حد 18 أو 60 جلسة؛ تعتمد على مدة الموافقة.",
    categoryRule: { current: "حالة عادية: حتى 18 جلسة بأفضل تعويض لكل حالة وسنة تقويمية.", fa: "Fa: حتى 60 جلسة بأفضل تعويض خلال 365 يوماً من أول جلسة.", fb: "Fb: حتى 60 جلسة بأفضل تعويض في السنة التقويمية، ويمكن تجديد الإشعار.", e: "حالة ثقيلة، قائمة E: تتطلب موافقة الطبيب المستشار وقد تصل صلاحيتها إلى 3 سنوات." },
    nextActionTitle: "تحقق قبل الجلسة الأولى", nextAction: { current: "أحضر الوصفة. يمكن استكمال وصفة 9 جلسات عند الحاجة الطبية.", fa: "تحقق من ذكر أو إشعار Fa وتاريخ أول جلسة.", fb: "تحقق من إشعار Fb أو تجديده لدى صندوق التأمين.", e: "أحضر الموافقة الخطية وتواريخ صلاحيتها." }, priceTitle: "حصتك المقدرة", perSession: "/ جلسة عادية", standardPrice: "بدون BIM", bimPrice: "مع BIM", paidTotal: "الأتعاب المفوترة", reimbursed: "التعويض المقدر", approximate: "تقدير لمعالج غير متعاقد: المبلغ الدقيق يعتمد على صندوق التأمين والشريحة.", unknownTitle: "لن نخمن فئتك", unknownText: "وصفة 30 أو 60 جلسة وحدها لا تثبت Fa أو Fb أو القائمة E. تحقق من العبارة أو قرار الصندوق.", contact: "اتصل بنا للتحقق", caveat: "تقدير إداري لجلسة عادية مدتها 30 دقيقة وفق تعريفات INAMI السارية منذ 1 يوليو 2026. صندوق التأمين يؤكد التعويض النهائي.", officialSource: "التعريفات الرسمية لـ INAMI",
  },
  ku: {
    eyebrow: "Texmîn di 1 deqîqeyê de", title: "Rêya vegerandina pereyê ya we çi ye?", intro: "Li gorî reçeteya xwe çend pirsan bersiv bidin. Hûn ê hejmara danişînan, asta din û nirxa texmînî bibînin.", privacy: "Bersivên we di gerokê de dimînin. Tu daneya tenduristiyê nayê tomarkirin an şandin.",
    pathQuestion: "1. Li ser reçete an pejirandina we çi hatiye nivîsandin?", pathHint: "Tenê hejmara danişînan têrê nake: nîşana Fa, Fb an lîsteya E girîng e.", pathOptions: { current: { title: "9 an 18 danişîn", description: "Bê nîşana Fa, Fb an E." }, fa: { title: "Nîşana Fa", description: "Pir caran 30 an 60 danişîn." }, fb: { title: "Nîşana Fb", description: "Pir caran 30 an 60 danişîn." }, e: { title: "Pejirandina lîsteya E", description: "Biryarnameya nivîskî ya sîgorteyê." }, unknown: { title: "Ez nizanim", description: "Em dibêjin çi were kontrolkirin." } },
    completedQuestion: "2. Ji bo vê pirsgirêkê çend danişîn hatine kirin?", completedHint: "Danişînên li cem terapîstek din jî hesab bikin.", therapistQuestion: "3. Bi kîjan terapîst re?", conventioned: "Terapîstê peymanî", conventionedNames: "Philippe, Félix, Fabienne an Thom", loic: "Loïc Meunier", loicHint: "Terapîstê bê peyman", locationQuestion: "4. Danişîn li ku derê ye?", cabinet: "Li kabinetê", home: "Li malê", bimQuestion: "Rewşa sîgorteyê", standard: "Standart", bim: "BIM", unsure: "Ez nizanim", resultTitle: "Texmîna we", nextSession: "Danişîna din a texmînî: n° {session}", remainingPreferred: "Di asta baş a vegerandinê de {count} danişîn mane.", preferredUsed: "Asta baş qediya. Dermankirin dikare bi vegerandina kêmtir berdewam bike.", fbFirstReduced: "Danişîna din di asta 61–80 de ye, bi vegerandina kêmtir.", fbSecondReduced: "Ji danişîna 81 ve vegerandin careke din kêm dibe.", eStatus: "Lîsteya E sînorê 18 an 60 danişînan naşopîne; dema pejirandinê girîng e.",
    categoryRule: { current: "Patolojiya asayî: her rewş û salnameyê heta 18 danişîn bi vegerandina baş.", fa: "Fa: ji danişîna yekem ve di 365 rojan de heta 60 danişîn bi vegerandina baş.", fb: "Fb: her sala salnameyê heta 60 danişîn bi vegerandina baş. Agahdarî dikare were nûkirin.", e: "Patolojiya giran, lîsteya E: pejirandina bijîjkê şêwirmend pêwîst e û heta 3 salan derbasdar e." },
    nextActionTitle: "Berî danişîna yekem kontrol bikin", nextAction: { current: "Reçeteya xwe bînin. Ger pêwîst be, 9 danişîn dikarin werin temamkirin.", fa: "Nîşana an agahdariya Fa û dîroka danişîna yekem kontrol bikin.", fb: "Agahdariya Fb an nûkirina wê bi sîgorteyê re kontrol bikin.", e: "Pejirandina nivîskî û dîrokên derbasdariyê bînin." }, priceTitle: "Para we ya texmînî", perSession: "/ danişîna standart", standardPrice: "Bê BIM", bimPrice: "Bi BIM", paidTotal: "Heqê hatiye hesabkirin", reimbursed: "Vegerandina texmînî", approximate: "Texmîna terapîstê bê peyman: mîqdar bi sîgorte û astê ve girêdayî ye.", unknownTitle: "Em kategoriya we texmîn nakin", unknownText: "Reçeteya 30 an 60 danişînan bi tenê Fa, Fb an E îspat nake. Nîşan an biryara sîgorteyê kontrol bikin.", contact: "Ji bo kontrolê têkilî daynin", caveat: "Texmîna îdarî ji bo danişîna standart a 30 deqîqeyan li gorî tarifên INAMI ji 1 Tîrmeh 2026. Sîgorte vegerandina dawî piştrast dike.", officialSource: "Tarifên fermî yên INAMI",
  },
};

function formatMoney(value: number): string {
  return value.toFixed(2).replace(".", ",") + " €";
}

function insertValues(template: string, values: Record<string, number>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, String(value)),
    template,
  );
}

function ChoiceButton({
  active,
  onClick,
  title,
  description,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-16 rounded-2xl border-2 px-4 py-3 text-start transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#76b82a]/30 ${
        active
          ? "border-[#76b82a] bg-[#f3fbe9] shadow-sm"
          : "border-neutral-200 bg-white hover:border-[#76b82a]/50 hover:bg-neutral-50"
      }`}
    >
      <span className="flex items-center gap-2 font-bold text-neutral-900">
        {active && <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5c9120]" />}
        {title}
      </span>
      {description && <span className="mt-1 block text-xs leading-relaxed text-neutral-500">{description}</span>}
    </button>
  );
}

export function HonorairesSimulator({ lang, isRtl }: { lang: LangKey; isRtl: boolean }) {
  const copy = COPY[lang] ?? COPY.en;
  const [pathway, setPathway] = useState<Pathway | null>(null);
  const [completed, setCompleted] = useState(0);
  const [practitioner, setPractitioner] = useState<Practitioner>("conventioned");
  const [location, setLocation] = useState<Location>("cabinet");
  const [bimStatus, setBimStatus] = useState<BimStatus>("unknown");

  const summary = pathway ? getPathwaySummary(pathway, completed) : null;
  const estimate = pathway
    ? calculateFeeEstimate({ pathway, completed, practitioner, location })
    : null;

  const selectedShare = estimate && bimStatus !== "unknown"
    ? estimate.patientShare[bimStatus]
    : null;
  const selectedReimbursement = estimate && bimStatus !== "unknown"
    ? estimate.reimbursement[bimStatus]
    : null;

  function pathwayStatus(): string | null {
    if (!summary || summary.pathway === "unknown") return null;
    if (summary.pathway === "e") return copy.eStatus;
    if (summary.band === "preferred") {
      return insertValues(copy.remainingPreferred, { count: summary.remainingPreferred ?? 0 });
    }
    if (summary.band === "reduced-first") return copy.fbFirstReduced;
    if (summary.band === "reduced-second") return copy.fbSecondReduced;
    return copy.preferredUsed;
  }

  return (
    <section
      data-testid="reimbursement-simulator"
      data-privacy="local-only"
      aria-labelledby="reimbursement-simulator-title"
      className="overflow-hidden rounded-[2rem] border border-[#76b82a]/30 bg-white shadow-xl shadow-neutral-200/60"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="bg-gradient-to-br from-[#20266f] via-[#2b3186] to-[#151947] px-5 py-8 text-white sm:px-9 sm:py-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c9f094]">
          <Calculator className="h-4 w-4" />
          {copy.eyebrow}
        </div>
        <h2 id="reimbursement-simulator-title" className="max-w-3xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
          {copy.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{copy.intro}</p>
        <p className="mt-5 flex max-w-3xl items-start gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs leading-relaxed text-white/75">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#c9f094]" />
          {copy.privacy}
        </p>
      </div>

      <div className="space-y-8 p-5 sm:p-9">
        <fieldset>
          <legend className="text-base font-extrabold text-neutral-900">{copy.pathQuestion}</legend>
          <p className="mt-1 text-xs leading-relaxed text-neutral-500">{copy.pathHint}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {(Object.keys(copy.pathOptions) as Pathway[]).map((option) => (
              <ChoiceButton
                key={option}
                active={pathway === option}
                onClick={() => setPathway(option)}
                title={copy.pathOptions[option].title}
                description={copy.pathOptions[option].description}
              />
            ))}
          </div>
        </fieldset>

        {pathway && pathway !== "unknown" && (
          <>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <label htmlFor="completed-sessions" className="block text-base font-extrabold text-neutral-900">
                  {copy.completedQuestion}
                </label>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">{copy.completedHint}</p>
                <input
                  id="completed-sessions"
                  type="number"
                  min="0"
                  max="200"
                  inputMode="numeric"
                  value={completed}
                  onChange={(event) => setCompleted(Math.max(0, Math.min(200, Number(event.target.value) || 0)))}
                  className="mt-4 h-14 w-32 rounded-2xl border-2 border-neutral-200 bg-white px-4 text-2xl font-extrabold text-[#2b3186] outline-none transition focus:border-[#76b82a] focus:ring-4 focus:ring-[#76b82a]/20"
                />
              </div>

              <fieldset>
                <legend className="text-base font-extrabold text-neutral-900">{copy.therapistQuestion}</legend>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <ChoiceButton active={practitioner === "conventioned"} onClick={() => setPractitioner("conventioned")} title={copy.conventioned} description={copy.conventionedNames} />
                  <ChoiceButton active={practitioner === "loic"} onClick={() => setPractitioner("loic")} title={copy.loic} description={copy.loicHint} />
                </div>
              </fieldset>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <fieldset>
                <legend className="text-base font-extrabold text-neutral-900">{copy.locationQuestion}</legend>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <ChoiceButton active={location === "cabinet"} onClick={() => setLocation("cabinet")} title={copy.cabinet} />
                  <ChoiceButton active={location === "home"} onClick={() => setLocation("home")} title={copy.home} />
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-base font-extrabold text-neutral-900">{copy.bimQuestion}</legend>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <ChoiceButton active={bimStatus === "standard"} onClick={() => setBimStatus("standard")} title={copy.standard} />
                  <ChoiceButton active={bimStatus === "bim"} onClick={() => setBimStatus("bim")} title={copy.bim} />
                  <ChoiceButton active={bimStatus === "unknown"} onClick={() => setBimStatus("unknown")} title={copy.unsure} />
                </div>
              </fieldset>
            </div>
          </>
        )}

        {pathway === "unknown" && (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6" role="status">
            <h3 className="text-xl font-extrabold text-amber-900">{copy.unknownTitle}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-amber-800">{copy.unknownText}</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-700">
              {copy.contact}
            </Link>
          </div>
        )}

        {summary && summary.pathway !== "unknown" && estimate && (
          <div aria-live="polite" className="rounded-3xl border-2 border-[#76b82a]/40 bg-[#f7fcef] p-5 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#5c9120]">{copy.resultTitle}</p>
                <h3 className="mt-2 text-xl font-extrabold text-neutral-900">{copy.pathOptions[summary.pathway].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{copy.categoryRule[summary.pathway]}</p>
                <p className="mt-4 font-bold text-[#2b3186]">{insertValues(copy.nextSession, { session: summary.nextSession })}</p>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{pathwayStatus()}</p>

                <div className="mt-5 rounded-2xl border border-[#2b3186]/10 bg-white p-4">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-neutral-900">
                    <FileText className="h-4 w-4 text-[#2b3186]" />
                    {copy.nextActionTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{copy.nextAction[summary.pathway]}</p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
                <p className="text-sm font-extrabold text-neutral-900">{copy.priceTitle}</p>
                {selectedShare !== null && selectedReimbursement !== null ? (
                  <>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#2d7a00]">{estimate.isApproximate && "~"}{formatMoney(selectedShare)}</span>
                      <span className="text-xs text-neutral-500">{copy.perSession}</span>
                    </div>
                    <dl className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-sm">
                      <div className="flex justify-between gap-3"><dt className="text-neutral-500">{copy.paidTotal}</dt><dd className="font-semibold">{formatMoney(estimate.chargedFee)}</dd></div>
                      <div className="flex justify-between gap-3"><dt className="text-neutral-500">{copy.reimbursed}</dt><dd className="font-semibold text-[#2b3186]">{formatMoney(selectedReimbursement)}</dd></div>
                    </dl>
                  </>
                ) : (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-neutral-50 p-4"><p className="text-xs text-neutral-500">{copy.standardPrice}</p><p className="mt-1 text-2xl font-extrabold text-[#2d7a00]">{estimate.isApproximate && "~"}{formatMoney(estimate.patientShare.standard)}</p></div>
                    <div className="rounded-2xl bg-blue-50 p-4"><p className="text-xs text-blue-600">{copy.bimPrice}</p><p className="mt-1 text-2xl font-extrabold text-blue-800">{estimate.isApproximate && "~"}{formatMoney(estimate.patientShare.bim)}</p></div>
                  </div>
                )}
                {estimate.isApproximate && <p className="mt-4 text-xs leading-relaxed text-amber-700">{copy.approximate}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-neutral-200 pt-5 text-xs leading-relaxed text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl">{copy.caveat}</p>
          <a href="https://www.inami.fgov.be/fr/themes/soins-de-sante-cout-et-remboursement/les-prestations-de-sante-que-vous-rembourse-votre-mutualite/prestations-de-soins-individuelles/honoraires-prix-et-remboursements/honoraires-prix-et-remboursements-des-kinesitherapeutes" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1.5 font-bold text-[#2b3186] hover:text-[#5c9120]">
            <ExternalLink className="h-3.5 w-3.5" />
            {copy.officialSource}
          </a>
        </div>
      </div>
    </section>
  );
}
