"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useLocale } from "next-intl";
import { CheckCircle2, MapPin, Clock, Users, Mail, Phone, Briefcase, Building2, Star, UserCheck, Handshake, Send } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

const UI: Record<LangKey, {
  badge: string; h1a: string; h1b: string; subtitle: string;
  offerBadge: string; jobTitle: string; location: string; statusLabel: string; convention: string; hours: string; profiles: string;
  practiceTitle: string; practice: string;
  roleTitle: string; role: string;
  offerTitle: string; offer: string[];
  profileTitle: string; profile: string[];
  conditionsTitle: string; conditions: string;
  applyTitle: string; applyText: string;
  contactName: string; phone: string; email: string; address: string;
}> = {
  de: {
    badge: "Werden Sie Teil unseres Teams",
    h1a: "Werden Sie Teil von", h1b: "Praxis Loten",
    subtitle: "Selbstständige/r Physiotherapeut/in — Eupen, Belgien",
    offerBadge: "STELLENANGEBOT",
    jobTitle: "Physiotherapeut/in — alle Fachrichtungen willkommen",
    location: "Eupen, Belgien",
    statusLabel: "Selbstständig — freiberufliche Zusammenarbeit",
    convention: "Freie Wahl — konventioniert oder nicht",
    hours: "Flexibel, frei gestaltbar",
    profiles: "Von Berufseinsteiger/innen bis zu erfahrenen Therapeut/innen",
    practiceTitle: "Die Praxis",
    practice: "Praxis Loten ist eine Gemeinschaftspraxis im Zentrum von Eupen, in unmittelbarer Nähe des St.-Nikolaus-Hospitals. Sie wird von drei Physiotherapeuten geführt und vereint ein Team mit sich ergänzenden Schwerpunkten: manuelle Therapie, Sportphysiotherapie, Lymphdrainage, Kiefergelenktherapie, Rehabilitation nach Operationen. Die Praxis verfügt über vier voll ausgestattete Behandlungsräume und einen gemeinsamen Trainingsbereich für die aktive Rehabilitation.",
    roleTitle: "Ihre Aufgabe",
    role: "Sie begleiten Ihre Patienten zu ihren Gesundheitszielen — Schmerzlinderung, Funktion, Selbstständigkeit und Rückkehr zur Aktivität — in einem biopsychosozialen Ansatz. Sie betreuen Ihren Patientenstamm eigenständig und profitieren zugleich von der Unterstützung und Verfügbarkeit eines offenen Teams. Ein lokaler Patientenstamm ist bereits vorhanden: Ihr Start wird erleichtert.",
    offerTitle: "Was wir bieten",
    offer: [
      "Einen bestehenden, lokalen Patientenstamm — ein Start, ohne alles bei null aufbauen zu müssen.",
      "Vier ausgestattete Behandlungsräume und einen gemeinsamen Trainingsbereich für die aktive Reha.",
      "Ein offenes, hilfsbereites Team: Austausch von Fall zu Fall, Erfahrung und Rat werden gern geteilt.",
      "Flexible Arbeitszeiten, die Sie selbst gestalten.",
      "Eine zentral gelegene, gut erreichbare Praxis mit Parkmöglichkeiten.",
      "Die freie Wahl Ihrer INAMI-/LIKIV-Konvention: konventioniert oder nicht — Ihre Entscheidung.",
      "Eine auf Langfristigkeit angelegte Zusammenarbeit.",
    ],
    profileTitle: "Ihr Profil",
    profile: [
      "In Belgien anerkanntes Physiotherapie-Diplom (Master in Physiotherapie und Rehabilitationswissenschaften oder gleichwertige internationale Ausbildung mit Anspruch auf eine INAMI-/LIKIV-Nummer).",
      "INAMI-/LIKIV-Nummer vorhanden oder in Bearbeitung.",
      "Selbstständigenstatus.",
      "Deutsch: mindestens solide Grundkenntnisse, mit der Bereitschaft, sie zu vertiefen. Unsere Patienten in Eupen sind deutschsprachig — gute Deutschkenntnisse sind ein großer Pluspunkt und langfristig eine echte Notwendigkeit.",
      "Französisch: fließend.",
      "Alle Fachrichtungen sind willkommen.",
    ],
    conditionsTitle: "Konditionen",
    conditions: "Die Konditionen der Zusammenarbeit sind vorteilhaft: Die verlangte Retrozession liegt spürbar unter dem, was in der Region Lüttich üblich ist. Die Einzelheiten (Retrozession oder Miete) besprechen wir in einem persönlichen Gespräch — das ist klarer, und so lernen wir uns gleich kennen.",
    applyTitle: "Bewerben",
    applyText: "Senden Sie uns Ihre Bewerbung — Lebenslauf und Motivationsschreiben — per E-Mail. Für einen ersten, unverbindlichen Austausch können Sie uns auch gerne anrufen.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  fr: {
    badge: "Rejoignez notre équipe",
    h1a: "Rejoignez", h1b: "Praxis Loten",
    subtitle: "Kinésithérapeute indépendant(e) — Eupen, Belgique",
    offerBadge: "OFFRE D'EMPLOI",
    jobTitle: "Kinésithérapeute — toutes spécialisations bienvenues",
    location: "Eupen, Belgique",
    statusLabel: "Indépendant — collaboration libérale",
    convention: "Au libre choix — conventionné ou non",
    hours: "Flexibles, organisés librement",
    profiles: "Du jeune diplômé au praticien confirmé",
    practiceTitle: "Le cabinet",
    practice: "Praxis Loten est un cabinet de groupe situé au centre d'Eupen, à proximité immédiate de l'hôpital Saint-Nicolas. Codétenu par trois kinésithérapeutes, il réunit une équipe de praticiens aux compétences complémentaires : thérapie manuelle, kinésithérapie du sport, lymphologie, dysfonctions de l'articulation temporo-mandibulaire, rééducation post-opératoire. Le cabinet dispose de quatre espaces de soin entièrement équipés et d'un plateau technique commun dédié à la rééducation active.",
    roleTitle: "Votre rôle",
    role: "Vous accompagnez vos patients vers leurs objectifs de santé — soulagement, fonction, autonomie et retour à l'activité — dans une approche biopsychosociale. Vous gérez votre patientèle en toute autonomie, tout en bénéficiant du soutien et de la disponibilité d'une équipe. Une patientèle locale est déjà installée : votre démarrage est facilité.",
    offerTitle: "Ce que nous offrons",
    offer: [
      "Une patientèle locale déjà installée — un démarrage sans avoir à tout construire de zéro.",
      "Quatre cabinets de soin équipés et un plateau technique commun pour la rééducation active.",
      "Une équipe ouverte et disponible : échanges au cas par cas, partage d'expérience et de conseils.",
      "Des horaires flexibles que vous organisez vous-même.",
      "Un cabinet central, facile d'accès, avec parking aisé.",
      "Le libre choix de votre conventionnement INAMI : conventionné ou déconventionné, c'est votre décision.",
      "Une collaboration pensée pour le long terme.",
    ],
    profileTitle: "Votre profil",
    profile: [
      "Diplôme de kinésithérapie reconnu en Belgique (master en kinésithérapie et sciences de la rééducation, ou formation internationale équivalente permettant l'obtention d'un numéro INAMI).",
      "Numéro INAMI obtenu ou en cours d'obtention.",
      "Statut d'indépendant.",
      "Allemand : au moins des bases solides, avec la volonté de l'approfondir. Notre patientèle eupenoise est germanophone — la maîtrise de l'allemand est un atout majeur et, à terme, une véritable nécessité.",
      "Français : courant.",
      "Toutes les spécialisations sont bienvenues.",
    ],
    conditionsTitle: "Conditions",
    conditions: "Les conditions de collaboration sont avantageuses : la rétrocession demandée reste sensiblement inférieure à ce qui se pratique en région liégeoise. Le détail (rétrocession ou loyer) se discute lors d'un entretien — c'est plus clair, et cela nous permet aussi de faire connaissance.",
    applyTitle: "Postuler",
    applyText: "Envoyez-nous votre candidature — CV et lettre de motivation — par e-mail. Pour un premier échange informel, un appel téléphonique est également le bienvenu.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  en: {
    badge: "Join our team",
    h1a: "Join", h1b: "Praxis Loten",
    subtitle: "Self-employed Physiotherapist — Eupen, Belgium",
    offerBadge: "JOB OFFER",
    jobTitle: "Physiotherapist — all specialisations welcome",
    location: "Eupen, Belgium",
    statusLabel: "Self-employed — freelance collaboration",
    convention: "Free choice — conventioned or not",
    hours: "Flexible, self-organised",
    profiles: "From new graduates to experienced practitioners",
    practiceTitle: "The practice",
    practice: "Praxis Loten is a group practice located in the centre of Eupen, right next to Saint-Nicolas Hospital. Co-managed by three physiotherapists, it brings together a team with complementary expertise: manual therapy, sports physiotherapy, lymphatic drainage, temporomandibular joint therapy, and post-operative rehabilitation. The practice has four fully equipped treatment rooms and a shared training area for active rehabilitation.",
    roleTitle: "Your role",
    role: "You guide your patients towards their health goals — pain relief, function, independence and return to activity — using a biopsychosocial approach. You manage your own patient list independently while benefiting from a supportive, open team. A local patient base is already established: your start will be smooth.",
    offerTitle: "What we offer",
    offer: [
      "An established local patient base — start without building everything from scratch.",
      "Four equipped treatment rooms and a shared training area for active rehabilitation.",
      "An open, supportive team: case-by-case exchanges, experience and advice freely shared.",
      "Flexible hours that you organise yourself.",
      "A centrally located, easily accessible practice with parking.",
      "Free choice of your INAMI convention: conventioned or not — your decision.",
      "A collaboration built for the long term.",
    ],
    profileTitle: "Your profile",
    profile: [
      "Physiotherapy degree recognised in Belgium (Master's in physiotherapy and rehabilitation sciences, or equivalent international training entitling an INAMI number).",
      "INAMI number obtained or in progress.",
      "Self-employed status.",
      "German: at least solid basics, with willingness to improve. Our patients in Eupen are German-speaking — good German is a major asset and, long-term, a real necessity.",
      "French: fluent.",
      "All specialisations are welcome.",
    ],
    conditionsTitle: "Conditions",
    conditions: "Collaboration conditions are advantageous: the retrocession required is notably lower than what is standard in the Liège region. Details (retrocession or rent) are discussed in person — it's clearer, and it lets us get to know each other.",
    applyTitle: "Apply",
    applyText: "Send us your application — CV and cover letter — by email. For an initial, informal chat, a phone call is also welcome.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  nl: {
    badge: "Word deel van ons team",
    h1a: "Word deel van", h1b: "Praxis Loten",
    subtitle: "Zelfstandig fysiotherapeut(e) — Eupen, België",
    offerBadge: "VACATURE",
    jobTitle: "Fysiotherapeut(e) — alle specialisaties welkom",
    location: "Eupen, België",
    statusLabel: "Zelfstandig — freelance samenwerking",
    convention: "Vrije keuze — geconventioneerd of niet",
    hours: "Flexibel, zelf in te delen",
    profiles: "Van pas afgestudeerden tot ervaren therapeuten",
    practiceTitle: "De praktijk",
    practice: "Praxis Loten is een groepspraktijk in het centrum van Eupen, vlak bij het Sint-Nikolausziekenhuis. De praktijk wordt geleid door drie fysiotherapeuten en brengt een team samen met complementaire expertise: manuele therapie, sportfysiotherapie, lymfdrainage, kaakgewrichtstherapie en postoperatieve revalidatie. Er zijn vier volledig uitgeruste behandelkamers en een gedeelde trainingsruimte voor actieve revalidatie.",
    roleTitle: "Uw rol",
    role: "U begeleidt uw patiënten naar hun gezondheidsdoelen — pijnverlichting, functie, zelfstandigheid en terugkeer naar activiteit — met een biopsychosociale aanpak. U beheert uw eigen patiëntenbestand zelfstandig, terwijl u profiteert van een ondersteunend, open team. Een lokaal patiëntenbestand is al aanwezig: uw start verloopt vlot.",
    offerTitle: "Wat wij bieden",
    offer: [
      "Een bestaand, lokaal patiëntenbestand — starten zonder alles van nul op te bouwen.",
      "Vier uitgeruste behandelkamers en een gedeelde trainingsruimte voor actieve revalidatie.",
      "Een open, behulpzaam team: uitwisseling per casus, ervaring en advies worden graag gedeeld.",
      "Flexibele uren die u zelf indeelt.",
      "Een centraal gelegen, goed bereikbare praktijk met parkeergelegenheid.",
      "Vrije keuze van uw RIZIV-conventie: geconventioneerd of niet — uw beslissing.",
      "Een samenwerking gericht op de lange termijn.",
    ],
    profileTitle: "Uw profiel",
    profile: [
      "Fysiotherapiediploma erkend in België (master fysiotherapie en revalidatiewetenschappen, of gelijkwaardige internationale opleiding die recht geeft op een RIZIV-nummer).",
      "RIZIV-nummer verkregen of in aanvraag.",
      "Zelfstandigenstatus.",
      "Duits: minstens stevige basiskennis, met bereidheid om te verdiepen. Onze patiënten in Eupen zijn Duitstalig — goede Duitstaligheid is een groot pluspunt en op termijn een echte noodzaak.",
      "Frans: vloeiend.",
      "Alle specialisaties zijn welkom.",
    ],
    conditionsTitle: "Voorwaarden",
    conditions: "De samenwerkingsvoorwaarden zijn voordelig: de gevraagde retrocessie ligt aanzienlijk lager dan wat gebruikelijk is in de regio Luik. De details (retrocessie of huur) bespreken we in een persoonlijk gesprek — dat is duidelijker, en zo leren we elkaar meteen kennen.",
    applyTitle: "Solliciteren",
    applyText: "Stuur ons uw sollicitatie — CV en motivatiebrief — per e-mail. Voor een eerste, vrijblijvend gesprek bent u ook welkom om te bellen.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  tr: {
    badge: "Ekibimize katılın",
    h1a: "Praxis Loten'e", h1b: "Katılın",
    subtitle: "Serbest Fizyoterapist — Eupen, Belçika",
    offerBadge: "İŞ İLANI",
    jobTitle: "Fizyoterapist — tüm uzmanlıklar memnuniyetle karşılanır",
    location: "Eupen, Belçika",
    statusLabel: "Serbest — freelance işbirliği",
    convention: "Serbest seçim — sözleşmeli veya değil",
    hours: "Esnek, kendi planlamanız",
    profiles: "Yeni mezunlardan deneyimli terapistlere",
    practiceTitle: "Klinik",
    practice: "Praxis Loten, Eupen merkezinde, Saint-Nicolas Hastanesi'nin hemen yanında bulunan bir grup kliniğidir. Üç fizyoterapist tarafından yönetilmekte olup tamamlayıcı uzmanlık alanlarına sahip bir ekibi bir araya getirir: manuel terapi, spor fizyoterapisi, lenf drenajı, çene eklemi terapisi ve ameliyat sonrası rehabilitasyon. Klinik, dört tam donanımlı tedavi odası ve aktif rehabilitasyon için ortak bir eğitim alanına sahiptir.",
    roleTitle: "Göreviniz",
    role: "Hastalarınızı sağlık hedeflerine — ağrı giderme, işlevsellik, bağımsızlık ve aktiviteye dönüş — biyopsikososyal bir yaklaşımla yönlendirirsiniz. Kendi hasta listenizi bağımsız olarak yönetirken, destekleyici ve açık bir ekipten yararlanırsınız. Yerel bir hasta tabanı zaten mevcuttur: başlangıcınız kolaylaştırılmıştır.",
    offerTitle: "Sunduklarımız",
    offer: [
      "Mevcut, yerel bir hasta tabanı — sıfırdan her şeyi inşa etmeden başlayın.",
      "Dört donanımlı tedavi odası ve aktif rehabilitasyon için ortak eğitim alanı.",
      "Açık, yardımsever bir ekip: vaka bazında değişim, deneyim ve tavsiye paylaşımı.",
      "Kendiniz organize ettiğiniz esnek saatler.",
      "Merkezi konumlu, kolay ulaşılabilir, park imkânlı bir klinik.",
      "INAMI sözleşmenizde özgür seçim: sözleşmeli veya değil — kararınız.",
      "Uzun vadeli düşünülmüş bir işbirliği.",
    ],
    profileTitle: "Profiliniz",
    profile: [
      "Belçika'da tanınan fizyoterapi diploması (fizyoterapi ve rehabilitasyon bilimlerinde master veya INAMI numarası almaya hak kazandıran eşdeğer uluslararası eğitim).",
      "INAMI numarası alınmış veya süreçte.",
      "Serbest meslek statüsü.",
      "Almanca: en azından sağlam temeller, derinleştirme isteğiyle. Eupen'deki hastalarımız Almanca konuşur — iyi Almanca büyük bir artıdır ve uzun vadede gerçek bir gereklilik.",
      "Fransızca: akıcı.",
      "Tüm uzmanlıklar memnuniyetle karşılanır.",
    ],
    conditionsTitle: "Koşullar",
    conditions: "İşbirliği koşulları avantajlıdır: istenen retrosesyon, Liège bölgesinde standart olanın belirgin şekilde altındadır. Ayrıntılar (retrosesyon veya kira) yüz yüze görüşülür — daha net olur ve birbirimizi tanıma fırsatı da verir.",
    applyTitle: "Başvuru",
    applyText: "Başvurunuzu — CV ve ön yazı — e-posta ile gönderin. İlk, gayri resmi bir sohbet için telefon da memnuniyetle karşılanır.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  ar: {
    badge: "انضموا إلى فريقنا",
    h1a: "انضموا إلى", h1b: "Praxis Loten",
    subtitle: "معالج/ة طبيعي/ة مستقل/ة — أوبن، بلجيكا",
    offerBadge: "عرض عمل",
    jobTitle: "معالج/ة طبيعي/ة — جميع التخصصات مرحب بها",
    location: "أوبن، بلجيكا",
    statusLabel: "مستقل — تعاون حر",
    convention: "حرية الاختيار — معتمد أو غير معتمد",
    hours: "مرنة، تنظمها بنفسك",
    profiles: "من حديثي التخرج إلى الممارسين ذوي الخبرة",
    practiceTitle: "العيادة",
    practice: "Praxis Loten هي عيادة جماعية تقع في وسط أوبن، بجوار مستشفى القديس نيقولا مباشرة. يديرها ثلاثة معالجين طبيعيين وتجمع فريقاً بخبرات متكاملة: العلاج اليدوي، العلاج الطبيعي الرياضي، التصريف اللمفاوي، علاج المفصل الصدغي الفكي، وإعادة التأهيل بعد الجراحة. تضم العيادة أربع غرف علاج مجهزة بالكامل ومنطقة تدريب مشتركة لإعادة التأهيل النشط.",
    roleTitle: "دوركم",
    role: "ترافقون مرضاكم نحو أهدافهم الصحية — تخفيف الألم، الوظيفة، الاستقلالية والعودة إلى النشاط — وفق منهج نفسي اجتماعي حيوي. تديرون قاعدة مرضاكم باستقلالية تامة مع الاستفادة من دعم فريق منفتح ومتاح. قاعدة مرضى محلية موجودة بالفعل: بدايتكم ميسرة.",
    offerTitle: "ما نقدمه",
    offer: [
      "قاعدة مرضى محلية موجودة — بداية دون الحاجة لبناء كل شيء من الصفر.",
      "أربع غرف علاج مجهزة ومنطقة تدريب مشتركة لإعادة التأهيل النشط.",
      "فريق منفتح ومتعاون: تبادل حالة بحالة، مشاركة الخبرة والنصائح.",
      "ساعات عمل مرنة تنظمونها بأنفسكم.",
      "عيادة مركزية، سهلة الوصول، مع مواقف سيارات.",
      "حرية اختيار اعتمادكم INAMI: معتمد أو غير معتمد — قراركم.",
      "تعاون مصمم للمدى الطويل.",
    ],
    profileTitle: "ملفكم الشخصي",
    profile: [
      "شهادة علاج طبيعي معترف بها في بلجيكا (ماجستير في العلاج الطبيعي وعلوم إعادة التأهيل، أو تدريب دولي معادل يخول الحصول على رقم INAMI).",
      "رقم INAMI محصل أو قيد الحصول.",
      "صفة مستقل.",
      "الألمانية: على الأقل أساسيات متينة، مع الرغبة في التعمق. مرضانا في أوبن يتحدثون الألمانية — إتقان الألمانية ميزة كبيرة وعلى المدى الطويل ضرورة حقيقية.",
      "الفرنسية: طلاقة.",
      "جميع التخصصات مرحب بها.",
    ],
    conditionsTitle: "الشروط",
    conditions: "شروط التعاون مواتية: الاستقطاع المطلوب أقل بشكل ملحوظ مما هو معتاد في منطقة لييج. التفاصيل (استقطاع أو إيجار) تُناقش في لقاء شخصي — هذا أوضح، ويتيح لنا أيضاً التعرف على بعضنا.",
    applyTitle: "التقديم",
    applyText: "أرسلوا طلبكم — سيرة ذاتية ورسالة تحفيزية — عبر البريد الإلكتروني. لأول تبادل غير رسمي، يمكنكم أيضاً الاتصال هاتفياً.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  pl: {
    badge: "Dołącz do naszego zespołu",
    h1a: "Dołącz do", h1b: "Praxis Loten",
    subtitle: "Fizjoterapeuta na własnej działalności — Eupen, Belgia",
    offerBadge: "OFERTA PRACY",
    jobTitle: "Fizjoterapeuta — wszystkie specjalizacje mile widziane",
    location: "Eupen, Belgia",
    statusLabel: "Samozatrudnienie — współpraca freelance",
    convention: "Wolny wybór — konwencjonowany lub nie",
    hours: "Elastyczne, samodzielna organizacja",
    profiles: "Od świeżych absolwentów po doświadczonych terapeutów",
    practiceTitle: "Gabinet",
    practice: "Praxis Loten to gabinet grupowy w centrum Eupen, w bezpośrednim sąsiedztwie szpitala św. Mikołaja. Prowadzony przez trzech fizjoterapeutów, łączy zespół o uzupełniających się kompetencjach: terapia manualna, fizjoterapia sportowa, drenaż limfatyczny, terapia stawu skroniowo-żuchwowego, rehabilitacja pooperacyjna. Gabinet dysponuje czterema w pełni wyposażonymi salami zabiegowymi i wspólną strefą treningową do aktywnej rehabilitacji.",
    roleTitle: "Twoja rola",
    role: "Towarzyszysz swoim pacjentom w drodze do ich celów zdrowotnych — ulga w bólu, funkcja, samodzielność i powrót do aktywności — w podejściu biopsychospołecznym. Zarządzasz swoją bazą pacjentów samodzielnie, korzystając jednocześnie ze wsparcia otwartego zespołu. Lokalna baza pacjentów jest już obecna: Twój start będzie łatwy.",
    offerTitle: "Co oferujemy",
    offer: [
      "Istniejąca, lokalna baza pacjentów — start bez budowania wszystkiego od zera.",
      "Cztery wyposażone sale zabiegowe i wspólna strefa treningowa do aktywnej rehabilitacji.",
      "Otwarty, pomocny zespół: wymiana doświadczeń przypadek po przypadku, dzielenie się radą.",
      "Elastyczne godziny pracy, które sam organizujesz.",
      "Centralnie położony, łatwo dostępny gabinet z parkingiem.",
      "Wolny wybór konwencji INAMI: konwencjonowany lub nie — Twoja decyzja.",
      "Współpraca zaprojektowana na długi okres.",
    ],
    profileTitle: "Twój profil",
    profile: [
      "Dyplom fizjoterapeuty uznawany w Belgii (magisterium z fizjoterapii i nauk o rehabilitacji lub równoważne wykształcenie międzynarodowe uprawniające do numeru INAMI).",
      "Numer INAMI uzyskany lub w trakcie uzyskiwania.",
      "Status samozatrudnionego.",
      "Niemiecki: co najmniej solidne podstawy, z chęcią pogłębiania. Nasi pacjenci w Eupen są niemieckojęzyczni — dobra znajomość niemieckiego to ogromny atut i z czasem prawdziwa konieczność.",
      "Francuski: biegle.",
      "Wszystkie specjalizacje mile widziane.",
    ],
    conditionsTitle: "Warunki",
    conditions: "Warunki współpracy są korzystne: wymagana retrocesja jest wyraźnie niższa niż to, co jest standardem w regionie Liège. Szczegóły (retrocesja lub czynsz) omawiamy podczas spotkania — to jaśniejsze, a przy okazji poznajemy się.",
    applyTitle: "Aplikuj",
    applyText: "Wyślij nam swoją aplikację — CV i list motywacyjny — mailem. Na pierwszy, niezobowiązujący kontakt zapraszamy również do telefonu.",
    contactName: "Philippe Banaszak",
    phone: "+32 478 21 81 86",
    email: "praxisloten@gmail.com",
    address: "Praxis Loten, Loten 1, 4700 Eupen",
  },
  "uk": {
    "badge": "Приєднуйтеся до нашої команди",
    "h1a": "Приєднуйтеся до",
    "subtitle": "Фізіотерапевт(-ка) на самозайнятості — Ойпен, Бельгія",
    "offerBadge": "ВАКАНСІЯ",
    "jobTitle": "Фізіотерапевт — запрошуємо фахівців усіх спеціалізацій",
    "location": "Ойпен, Бельгія",
    "statusLabel": "Самозайнятість — вільна співпраця",
    "convention": "На Ваш вибір — із конвенцією чи без",
    "hours": "Гнучкий графік, який Ви організовуєте самі",
    "profiles": "Від молодих випускників до досвідчених фахівців",
    "practiceTitle": "Кабінет",
    "practice": "Praxis Loten — це груповий кабінет у центрі Ойпена, зовсім поруч із лікарнею Saint-Nicolas. Ним спільно володіють три фізіотерапевти, і він об'єднує команду фахівців із взаємодоповнювальними компетенціями: мануальна терапія, спортивна фізіотерапія, лімфологія, дисфункції скронево-нижньощелепного суглоба, післяопераційна реабілітація. Кабінет має чотири повністю обладнані процедурні приміщення та спільну тренувальну зону для активної реабілітації.",
    "roleTitle": "Ваша роль",
    "role": "Ви супроводжуєте своїх пацієнтів до їхніх цілей щодо здоров'я — полегшення, функції, самостійності та повернення до активності — у межах біопсихосоціального підходу. Ви повністю самостійно ведете своїх пацієнтів, водночас користуючись підтримкою та доступністю команди. Локальна база пацієнтів уже сформована: Вам буде легше розпочати.",
    "offerTitle": "Що ми пропонуємо",
    "offer": [
      "Уже сформована локальна база пацієнтів — старт без потреби будувати все з нуля.",
      "Чотири обладнані процедурні кабінети та спільна тренувальна зона для активної реабілітації.",
      "Відкрита й доступна команда: обговорення окремих випадків, обмін досвідом і порадами.",
      "Гнучкий графік, який Ви організовуєте самі.",
      "Кабінет у центрі міста, з легким доступом і зручним паркуванням.",
      "Вільний вибір щодо конвенції INAMI: із конвенцією чи без — вирішуєте Ви.",
      "Співпраця, розрахована на довгу перспективу."
    ],
    "profileTitle": "Ваш профіль",
    "profile": [
      "Диплом фізіотерапевта, визнаний у Бельгії (магістр фізіотерапії та реабілітаційних наук або рівноцінна міжнародна освіта, що дає змогу отримати номер INAMI).",
      "Номер INAMI отримано або він у процесі отримання.",
      "Статус самозайнятої особи.",
      "Німецька: щонайменше міцна база та бажання її поглибити. Наші пацієнти в Ойпені розмовляють німецькою — володіння німецькою є великою перевагою, а з часом і справжньою необхідністю.",
      "Французька: вільне володіння.",
      "Запрошуємо фахівців усіх спеціалізацій."
    ],
    "conditionsTitle": "Умови",
    "conditions": "Умови співпраці вигідні: ретроцесія, яку ми просимо, помітно нижча, ніж зазвичай у регіоні Льєжа. Деталі (ретроцесія чи оренда) обговорюються під час співбесіди — так зрозуміліше, і це також дає нам змогу познайомитися.",
    "applyTitle": "Подати заявку",
    "applyText": "Надішліть нам свою кандидатуру — резюме та мотиваційний лист — електронною поштою. Для першої неформальної розмови можна також просто зателефонувати.",
    "h1b": "Praxis Loten",
    "contactName": "Philippe Banaszak",
    "phone": "+32 478 21 81 86",
    "email": "praxisloten@gmail.com",
    "address": "Praxis Loten, Loten 1, 4700 Eupen"
  },
  "es": {
    "badge": "Únase a nuestro equipo",
    "h1a": "Únase a",
    "subtitle": "Fisioterapeuta autónomo/a — Eupen, Bélgica",
    "offerBadge": "OFERTA DE EMPLEO",
    "jobTitle": "Fisioterapeuta — todas las especializaciones son bienvenidas",
    "location": "Eupen, Bélgica",
    "statusLabel": "Autónomo — colaboración liberal",
    "convention": "A libre elección — concertado o no",
    "hours": "Flexibles, organizados libremente",
    "profiles": "Desde recién titulados hasta profesionales con experiencia",
    "practiceTitle": "La consulta",
    "practice": "Praxis Loten es una consulta de grupo situada en el centro de Eupen, muy cerca del hospital Saint-Nicolas. Copropiedad de tres fisioterapeutas, reúne a un equipo de profesionales con competencias complementarias: terapia manual, fisioterapia deportiva, linfología, disfunciones de la articulación temporomandibular y rehabilitación posoperatoria. La consulta dispone de cuatro salas de tratamiento totalmente equipadas y de una zona técnica común dedicada a la rehabilitación activa.",
    "roleTitle": "Su función",
    "role": "Acompaña a sus pacientes hacia sus objetivos de salud — alivio, función, autonomía y vuelta a la actividad — con un enfoque biopsicosocial. Gestiona su cartera de pacientes con total autonomía, a la vez que cuenta con el apoyo y la disponibilidad de un equipo. Ya existe una base local de pacientes: su comienzo será más fácil.",
    "offerTitle": "Lo que ofrecemos",
    "offer": [
      "Una base local de pacientes ya establecida — un comienzo sin tener que construirlo todo desde cero.",
      "Cuatro salas de tratamiento equipadas y una zona técnica común para la rehabilitación activa.",
      "Un equipo abierto y disponible: intercambios caso por caso, experiencia y consejos compartidos.",
      "Horarios flexibles que usted mismo organiza.",
      "Una consulta céntrica, de fácil acceso y con aparcamiento cómodo.",
      "Libre elección de su adhesión al convenio INAMI: concertado o no concertado, usted decide.",
      "Una colaboración pensada a largo plazo."
    ],
    "profileTitle": "Su perfil",
    "profile": [
      "Título de fisioterapia reconocido en Bélgica (máster en fisioterapia y ciencias de la rehabilitación, o formación internacional equivalente que permita obtener un número INAMI).",
      "Número INAMI obtenido o en trámite.",
      "Estatus de autónomo.",
      "Alemán: al menos una base sólida, con voluntad de profundizar. Nuestros pacientes de Eupen son germanohablantes — dominar el alemán es una gran ventaja y, a medio plazo, una verdadera necesidad.",
      "Francés: fluido.",
      "Todas las especializaciones son bienvenidas."
    ],
    "conditionsTitle": "Condiciones",
    "conditions": "Las condiciones de colaboración son ventajosas: la retrocesión solicitada es notablemente inferior a la habitual en la región de Lieja. Los detalles (retrocesión o alquiler) se tratan en una entrevista — es más claro y también nos permite conocernos.",
    "applyTitle": "Presentar candidatura",
    "applyText": "Envíenos su candidatura — CV y carta de motivación — por correo electrónico. Para un primer intercambio informal, una llamada telefónica también es bienvenida.",
    "h1b": "Praxis Loten",
    "contactName": "Philippe Banaszak",
    "phone": "+32 478 21 81 86",
    "email": "praxisloten@gmail.com",
    "address": "Praxis Loten, Loten 1, 4700 Eupen"
  },
  "ku": {
    "badge": "Tevlî tîma me bibin",
    "h1a": "Tevlî",
    "subtitle": "Fizyoterapîst (serbixwe) — Eupen, Belçîka",
    "offerBadge": "PÊŞNIYARA KAR",
    "jobTitle": "Fizyoterapîst — hemû pisporî bi xêr hatin",
    "location": "Eupen, Belçîka",
    "statusLabel": "Serbixwe — hevkariya azad",
    "convention": "Bi bijartina azad — bi peyman an bê peyman",
    "hours": "Nerm, bi azadî têne organîzekirin",
    "profiles": "Ji mezûnên nû heta pratîsyenên bi ezmûn",
    "practiceTitle": "Kabîne",
    "practice": "Praxis Loten kabîneyeke komê ye ku li navenda Eupenê ye, rasterast li nêzî nexweşxaneya Saint-Nicolas. Sê fizyoterapîst bi hev re xwediyê wê ne, û ew tîmeke pratîsyenan bi jêhatîbûnên temamker dicivîne: terapiya destî, fizyoterapiya werzîşê, lîmfolojî, disfonksiyonên movika çenê (TMJ), rehabîlîtasyona piştî emeliyatê. Kabîne xwedî çar odeyên dermankirinê yên bi tevahî amadekirî û qadeke teknîkî ya hevpar e ku ji bo rehabîlîtasyona çalak hatiye veqetandin.",
    "roleTitle": "Rola we",
    "role": "Hûn nexweşên xwe ber bi armancên wan ên tenduristiyê ve dibin — sivikbûna êşê, fonksiyon, serbixwebûn û vegera çalakiyê — bi nêzîkatiyeke biyopsîkososyal. Hûn nexweşên xwe bi tevahî serbixwe birêve dibin, di heman demê de ji piştgirî û amadebûna tîmekê sûd werdigirin. Komeke nexweşên herêmî jixwe heye: destpêka we hêsantir dibe.",
    "offerTitle": "Em çi pêşkêş dikin",
    "offer": [
      "Komeke nexweşên herêmî ya jixwe damezrandî — destpêkek bêyî ku hûn her tiştî ji sifirê ava bikin.",
      "Çar odeyên dermankirinê yên amadekirî û qadeke teknîkî ya hevpar ji bo rehabîlîtasyona çalak.",
      "Tîmeke vekirî û amade: danûstandin li ser her rewşê, parvekirina ezmûn û şîretan.",
      "Demjimêrên nerm ku hûn bi xwe organîze dikin.",
      "Kabîneyeke navendî, bi gihîştina hêsan û parkkirina rehet.",
      "Bijartina azad a peymana we ya INAMI: bi peyman an bê peyman — biryar a we ye.",
      "Hevkariyeke ji bo demeke dirêj hatî plankirin."
    ],
    "profileTitle": "Profîla we",
    "profile": [
      "Dîplomaya fizyoterapiyê ya li Belçîkayê naskirî (master di fizyoterapî û zanistên rehabîlîtasyonê de, an perwerdeyeke navneteweyî ya hevwate ku rê dide wergirtina hejmara INAMI).",
      "Hejmara INAMI hatiye wergirtin an di pêvajoya wergirtinê de ye.",
      "Statûya serbixwe.",
      "Almanî: bi kêmanî bingeheke xurt, bi daxwaza pêşxistina wê. Nexweşên me yên li Eupenê bi almanî diaxivin — zanîna almanî avantajeke mezin e û, bi demê re, pêwîstiyeke rastîn e.",
      "Fransî: bi herikbarî.",
      "Hemû pisporî bi xêr hatin."
    ],
    "conditionsTitle": "Şert û merc",
    "conditions": "Şert û mercên hevkariyê bi avantaj in: rêjeya vegerandinê (retrocession) ya tê xwestin bi berçavî ji ya ku li herêma Liège tê kirin kêmtir e. Hûrgilî (retrocession an kirê) di hevdîtinekê de têne nîqaşkirin — ev zelaltir e, û her weha dihêle ku em hevdu nas bikin.",
    "applyTitle": "Serlêdan bikin",
    "applyText": "Serlêdana xwe — CV û nameya motîvasyonê — bi e-nameyê ji me re bişînin. Ji bo axaftineke pêşîn a nefermî, têlefonek jî bi xêr tê.",
    "h1b": "Praxis Loten",
    "contactName": "Philippe Banaszak",
    "phone": "+32 478 21 81 86",
    "email": "praxisloten@gmail.com",
    "address": "Praxis Loten, Loten 1, 4700 Eupen"
  },
};

export function JobsPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl", "uk", "es", "ku"].includes(locale) ? locale : "en") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            {ui.h1a}{" "}<span style={{ color: "#76b82a" }}>{ui.h1b}</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-neutral-500">{ui.subtitle}</p>
        </AnimatedSection>

        {/* Job offer card */}
        <AnimatedSection>
          <div className="bg-white rounded-3xl border-2 border-[#76b82a]/20 overflow-hidden shadow-lg">

            {/* Header card */}
            <div className="bg-gradient-to-br from-[#2b3186] to-[#1e2260] px-8 py-6 text-white">
              <div>
                <span className="text-xs font-bold px-3 py-1 bg-white/20 rounded-full mb-3 inline-block">
                  {ui.offerBadge}
                </span>
                <h2 className="text-2xl font-extrabold mb-3">{ui.jobTitle}</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/80 text-sm">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 flex-shrink-0" />{ui.location}</span>
                  <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 flex-shrink-0" />{ui.statusLabel}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 flex-shrink-0" />{ui.hours}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 flex-shrink-0" />{ui.profiles}</span>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-10">

              {/* The practice */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#2b3186]" />
                  {ui.practiceTitle}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{ui.practice}</p>
              </div>

              {/* Your role */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-[#2b3186]" />
                  {ui.roleTitle}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{ui.role}</p>
              </div>

              {/* What we offer */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#76b82a]" />
                  {ui.offerTitle}
                </h3>
                <ul className="space-y-2.5">
                  {ui.offer.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Profile / Qualifications */}
              <div>
                <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#2b3186]" />
                  {ui.profileTitle}
                </h3>
                <ul className="space-y-2.5">
                  {ui.profile.map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                      <CheckCircle2 className="w-5 h-5 text-[#2b3186] flex-shrink-0 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conditions */}
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="font-bold text-neutral-900 mb-3 flex items-center gap-2">
                  <Handshake className="w-5 h-5 text-[#76b82a]" />
                  {ui.conditionsTitle}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{ui.conditions}</p>
              </div>

              {/* Apply */}
              <div className="border-t border-neutral-100 pt-8">
                <h3 className="font-bold text-neutral-900 text-lg mb-3 flex items-center gap-2">
                  <Send className="w-5 h-5 text-[#2b3186]" />
                  {ui.applyTitle}
                </h3>
                <p className="text-neutral-600 mb-6">{ui.applyText}</p>

                <div className="bg-gradient-to-br from-[#2b3186]/5 to-[#76b82a]/5 rounded-2xl p-6 space-y-4">
                  <p className="font-bold text-neutral-900">{ui.contactName}</p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`mailto:${ui.email}?subject=Candidature%20Kin%C3%A9sith%C3%A9rapeute%20Praxis%20Loten`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold transition-all hover:scale-[1.02]"
                    >
                      <Mail className="w-5 h-5" />
                      {ui.email}
                    </a>
                    <a
                      href={`tel:${ui.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#2b3186] hover:bg-[#1e2260] text-white rounded-2xl font-bold transition-all hover:scale-[1.02]"
                    >
                      <Phone className="w-5 h-5" />
                      {ui.phone}
                    </a>
                  </div>
                  <p className="text-sm text-neutral-500 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-4 h-4" />
                    {ui.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
