import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Cookie-Richtlinie",
    fr: "Politique de cookies",
    en: "Cookie Policy",
    nl: "Cookiebeleid",
    tr: "Çerez Politikası",
    ar: "سياسة ملفات تعريف الارتباط",
    pl: "Polityka plików cookie",
  };
  return { title: titles[locale] || titles.fr };
}

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

interface CookieContent {
  title: string;
  updated: string;
  intro: string;
  whatAreCookies: { heading: string; body: string };
  tableHeading: string;
  tableHeaders: [string, string, string, string, string];
  cookies: {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
    category: string;
  }[];
  categoriesHeading: string;
  categories: { name: string; description: string }[];
  managementHeading: string;
  management: string;
  gaOptout: string;
  browserSettings: string;
  moreInfo: string;
}

const CONTENT: Record<LangKey, CookieContent> = {
  fr: {
    title: "Politique de cookies",
    updated: "Dernière mise à jour : mai 2026",
    intro:
      "Ce site utilise des cookies et des technologies similaires. La présente politique vous informe sur les cookies que nous utilisons, leur finalité et vos droits, conformément au Règlement (UE) 2016/679 (RGPD) et à la directive ePrivacy transposée en droit belge par la loi du 13 juin 2005 sur les communications électroniques.",
    whatAreCookies: {
      heading: "Qu'est-ce qu'un cookie ?",
      body: "Un cookie est un petit fichier texte déposé sur votre navigateur ou votre appareil lors de la visite d'un site web. Il permet au site de mémoriser certaines informations (langue choisie, préférences, statistiques de visite) afin d'améliorer votre expérience.\n\nCertains cookies sont strictement nécessaires au fonctionnement du site et ne requièrent pas votre consentement. D'autres (analytiques, marketing) nécessitent votre accord préalable.",
    },
    tableHeading: "Cookies utilisés sur ce site",
    tableHeaders: ["Nom", "Fournisseur", "Finalité", "Durée", "Catégorie"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Mémorise votre préférence de langue pour personnaliser l'affichage du site",
        duration: "Session (supprimé à la fermeture du navigateur)",
        category: "Strictement nécessaire",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Distingue les utilisateurs uniques en attribuant un identifiant anonyme. Utilisé par Google Analytics 4 pour les statistiques d'audience",
        duration: "13 mois",
        category: "Analytique",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Maintient l'état de la session de mesure Google Analytics 4 spécifique à ce site",
        duration: "13 mois",
        category: "Analytique",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "Distingue les utilisateurs sur une période de 24 heures (Google Analytics)",
        duration: "24 heures",
        category: "Analytique",
      },
    ],
    categoriesHeading: "Catégories de cookies",
    categories: [
      {
        name: "🟢 Strictement nécessaires",
        description:
          "Indispensables au fonctionnement du site (affichage de la langue). Ils ne collectent pas de données personnelles à des fins de marketing. Aucun consentement requis.",
      },
      {
        name: "📊 Analytiques",
        description:
          "Nous permettent de mesurer le nombre de visiteurs et d'analyser comment vous naviguez sur le site, afin d'améliorer nos contenus. Ces cookies sont déposés uniquement avec votre consentement. Les données sont anonymisées et traitées par Google Analytics 4.",
      },
    ],
    managementHeading: "Gérer vos préférences",
    management:
      "Lors de votre première visite, vous pouvez accepter ou refuser les cookies analytiques. Vous pouvez modifier votre choix à tout moment.",
    gaOptout:
      "Pour désactiver Google Analytics sur tous les sites : installez l'extension officielle Google Analytics Opt-out disponible sur https://tools.google.com/dlpage/gaoptout",
    browserSettings:
      "Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies :",
    moreInfo:
      "Pour toute question relative aux cookies ou à la protection de vos données, contactez-nous à praxisloten@gmail.com. Pour plus d'informations sur le RGPD et vos droits, consultez notre Politique de confidentialité ou le site de l'Autorité de Protection des Données : www.autoriteprotectiondonnees.be",
  },
  de: {
    title: "Cookie-Richtlinie",
    updated: "Letzte Aktualisierung: Mai 2026",
    intro:
      "Diese Website verwendet Cookies und ähnliche Technologien. Diese Richtlinie informiert Sie über die von uns verwendeten Cookies, ihren Zweck und Ihre Rechte gemäß der DSGVO und der in belgisches Recht umgesetzten ePrivacy-Richtlinie (Gesetz vom 13. Juni 2005 über elektronische Kommunikation).",
    whatAreCookies: {
      heading: "Was ist ein Cookie?",
      body: "Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website auf Ihrem Browser oder Gerät abgelegt wird. Sie ermöglicht es der Website, bestimmte Informationen zu speichern (gewählte Sprache, Einstellungen, Besuchsstatistiken), um Ihr Erlebnis zu verbessern.\n\nBestimmte Cookies sind für das Funktionieren der Website unbedingt erforderlich und erfordern keine Einwilligung. Andere (Analyse-, Marketing-Cookies) erfordern Ihre vorherige Zustimmung.",
    },
    tableHeading: "Auf dieser Website verwendete Cookies",
    tableHeaders: ["Name", "Anbieter", "Zweck", "Dauer", "Kategorie"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Speichert Ihre Spracheinstellung für die Anzeige der Website",
        duration: "Sitzung (wird beim Schließen des Browsers gelöscht)",
        category: "Unbedingt erforderlich",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Unterscheidet eindeutige Benutzer durch Zuweisung einer anonymen ID — Google Analytics 4",
        duration: "13 Monate",
        category: "Analyse",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Hält den Google Analytics 4-Messsitzungsstatus für diese Website aufrecht",
        duration: "13 Monate",
        category: "Analyse",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "Unterscheidet Benutzer über einen Zeitraum von 24 Stunden (Google Analytics)",
        duration: "24 Stunden",
        category: "Analyse",
      },
    ],
    categoriesHeading: "Cookie-Kategorien",
    categories: [
      {
        name: "🟢 Unbedingt erforderlich",
        description:
          "Für das Funktionieren der Website unverzichtbar (Sprachanzeige). Sie sammeln keine personenbezogenen Daten zu Marketingzwecken. Keine Einwilligung erforderlich.",
      },
      {
        name: "📊 Analyse",
        description:
          "Ermöglichen uns, die Besucherzahl zu messen und zu analysieren, wie Sie auf der Website navigieren, um unsere Inhalte zu verbessern. Diese Cookies werden nur mit Ihrer Einwilligung gesetzt. Daten werden anonymisiert von Google Analytics 4 verarbeitet.",
      },
    ],
    managementHeading: "Ihre Einstellungen verwalten",
    management:
      "Bei Ihrem ersten Besuch können Sie Analyse-Cookies akzeptieren oder ablehnen. Sie können Ihre Wahl jederzeit ändern.",
    gaOptout:
      "Um Google Analytics auf allen Websites zu deaktivieren: Installieren Sie das offizielle Google Analytics Opt-out-Add-on unter https://tools.google.com/dlpage/gaoptout",
    browserSettings:
      "Sie können Ihren Browser auch so konfigurieren, dass Cookies blockiert oder gelöscht werden:",
    moreInfo:
      "Bei Fragen zu Cookies oder zum Datenschutz kontaktieren Sie uns unter praxisloten@gmail.com. Weitere Informationen finden Sie in unserer Datenschutzerklärung oder auf der Website der belgischen Datenschutzbehörde: www.autoriteprotectiondonnees.be",
  },
  en: {
    title: "Cookie Policy",
    updated: "Last updated: May 2026",
    intro:
      "This website uses cookies and similar technologies. This policy informs you about the cookies we use, their purpose and your rights, in accordance with Regulation (EU) 2016/679 (GDPR) and the ePrivacy Directive as transposed into Belgian law (Law of 13 June 2005 on electronic communications).",
    whatAreCookies: {
      heading: "What is a cookie?",
      body: "A cookie is a small text file placed on your browser or device when you visit a website. It allows the website to remember certain information (chosen language, preferences, visit statistics) to improve your experience.\n\nSome cookies are strictly necessary for the website to function and do not require your consent. Others (analytics, marketing) require your prior agreement.",
    },
    tableHeading: "Cookies used on this site",
    tableHeaders: ["Name", "Provider", "Purpose", "Duration", "Category"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Stores your language preference to personalise the site display",
        duration: "Session (deleted when browser is closed)",
        category: "Strictly necessary",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Distinguishes unique users by assigning an anonymous ID — Google Analytics 4",
        duration: "13 months",
        category: "Analytics",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Maintains the Google Analytics 4 measurement session state for this site",
        duration: "13 months",
        category: "Analytics",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "Distinguishes users over a 24-hour period (Google Analytics)",
        duration: "24 hours",
        category: "Analytics",
      },
    ],
    categoriesHeading: "Cookie categories",
    categories: [
      {
        name: "🟢 Strictly necessary",
        description:
          "Essential for the website to function (language display). They do not collect personal data for marketing purposes. No consent required.",
      },
      {
        name: "📊 Analytics",
        description:
          "Allow us to measure the number of visitors and analyse how you navigate the site, in order to improve our content. These cookies are only placed with your consent. Data is anonymised and processed by Google Analytics 4.",
      },
    ],
    managementHeading: "Manage your preferences",
    management:
      "On your first visit, you can accept or decline analytics cookies. You can change your choice at any time.",
    gaOptout:
      "To disable Google Analytics across all websites: install the official Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout",
    browserSettings:
      "You can also configure your browser to block or delete cookies:",
    moreInfo:
      "For any questions about cookies or data protection, contact us at praxisloten@gmail.com. For more information on GDPR and your rights, see our Privacy Policy or the website of the Data Protection Authority: www.autoriteprotectiondonnees.be",
  },
  nl: {
    title: "Cookiebeleid",
    updated: "Laatste update: mei 2026",
    intro:
      "Deze website gebruikt cookies en vergelijkbare technologieën. Dit beleid informeert u over de cookies die wij gebruiken, hun doel en uw rechten, in overeenstemming met de AVG en de ePrivacy-richtlijn omgezet in Belgisch recht.",
    whatAreCookies: {
      heading: "Wat is een cookie?",
      body: "Een cookie is een klein tekstbestand dat op uw browser of apparaat wordt geplaatst wanneer u een website bezoekt. Het stelt de website in staat bepaalde informatie te onthouden (gekozen taal, voorkeuren) om uw ervaring te verbeteren.\n\nSommige cookies zijn strikt noodzakelijk voor het functioneren van de website. Andere (analytische) vereisen uw voorafgaande toestemming.",
    },
    tableHeading: "Cookies gebruikt op deze site",
    tableHeaders: ["Naam", "Aanbieder", "Doel", "Duur", "Categorie"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Slaat uw taalvoorkeur op voor de weergave van de site",
        duration: "Sessie (verwijderd bij sluiten browser)",
        category: "Strikt noodzakelijk",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Onderscheidt unieke gebruikers via anonieme ID — Google Analytics 4",
        duration: "13 maanden",
        category: "Analytisch",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Houdt de Google Analytics 4-sessiestatus bij voor deze site",
        duration: "13 maanden",
        category: "Analytisch",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "Onderscheidt gebruikers gedurende 24 uur",
        duration: "24 uur",
        category: "Analytisch",
      },
    ],
    categoriesHeading: "Cookiecategorieën",
    categories: [
      {
        name: "🟢 Strikt noodzakelijk",
        description: "Onmisbaar voor het functioneren van de site. Geen toestemming vereist.",
      },
      {
        name: "📊 Analytisch",
        description: "Meten bezoekersaantallen en navigatiegedrag om onze inhoud te verbeteren. Enkel geplaatst met uw toestemming. Gegevens zijn geanonimiseerd.",
      },
    ],
    managementHeading: "Uw voorkeuren beheren",
    management: "Bij uw eerste bezoek kunt u analytische cookies accepteren of weigeren. U kunt uw keuze op elk moment wijzigen.",
    gaOptout: "Google Analytics uitschakelen: https://tools.google.com/dlpage/gaoptout",
    browserSettings: "U kunt ook uw browser configureren om cookies te blokkeren of te verwijderen:",
    moreInfo: "Vragen? Contacteer ons op praxisloten@gmail.com. Klacht: www.gegevensbeschermingsautoriteit.be",
  },
  tr: {
    title: "Çerez Politikası",
    updated: "Son güncelleme: Mayıs 2026",
    intro:
      "Bu web sitesi çerezler ve benzer teknolojiler kullanmaktadır. Bu politika, GDPR ve Belçika elektronik iletişim mevzuatı uyarınca kullandığımız çerezler, amaçları ve haklarınız hakkında sizi bilgilendirmektedir.",
    whatAreCookies: {
      heading: "Çerez nedir?",
      body: "Çerez, bir web sitesini ziyaret ettiğinizde tarayıcınıza veya cihazınıza yerleştirilen küçük bir metin dosyasıdır. Sitenin belirli bilgileri hatırlamasını sağlar (seçilen dil, tercihler).\n\nBazı çerezler sitenin çalışması için zorunludur ve onayınızı gerektirmez. Diğerleri (analitik) önceden onayınızı gerektirir.",
    },
    tableHeading: "Bu sitede kullanılan çerezler",
    tableHeaders: ["Ad", "Sağlayıcı", "Amaç", "Süre", "Kategori"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Site görüntülemesi için dil tercihinizi saklar",
        duration: "Oturum (tarayıcı kapatıldığında silinir)",
        category: "Zorunlu",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Anonim kimlik atayarak benzersiz kullanıcıları ayırt eder — Google Analytics 4",
        duration: "13 ay",
        category: "Analitik",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Bu siteye özgü Google Analytics 4 oturum durumunu korur",
        duration: "13 ay",
        category: "Analitik",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "24 saatlik süre boyunca kullanıcıları ayırt eder",
        duration: "24 saat",
        category: "Analitik",
      },
    ],
    categoriesHeading: "Çerez kategorileri",
    categories: [
      {
        name: "🟢 Zorunlu",
        description: "Sitenin çalışması için gereklidir. Onay gerekmez.",
      },
      {
        name: "📊 Analitik",
        description: "Ziyaretçi sayısını ölçmemizi ve içeriklerimizi geliştirmemizi sağlar. Yalnızca onayınızla yerleştirilir. Veriler anonimleştirilmiştir.",
      },
    ],
    managementHeading: "Tercihlerinizi yönetin",
    management: "İlk ziyaretinizde analitik çerezleri kabul edebilir veya reddedebilirsiniz. Seçiminizi istediğiniz zaman değiştirebilirsiniz.",
    gaOptout: "Google Analytics'i devre dışı bırakmak için: https://tools.google.com/dlpage/gaoptout",
    browserSettings: "Çerezleri engellemek veya silmek için tarayıcı ayarlarınızı da yapılandırabilirsiniz:",
    moreInfo: "Sorularınız için: praxisloten@gmail.com. Belçika Veri Koruma Otoritesi: www.autoriteprotectiondonnees.be",
  },
  ar: {
    title: "سياسة ملفات تعريف الارتباط",
    updated: "آخر تحديث: مايو 2026",
    intro:
      "يستخدم هذا الموقع الإلكتروني ملفات تعريف الارتباط والتقنيات المشابهة. تُعلمك هذه السياسة بملفات تعريف الارتباط التي نستخدمها وأغراضها وحقوقك، وفقًا للائحة العامة لحماية البيانات والقانون البلجيكي للاتصالات الإلكترونية.",
    whatAreCookies: {
      heading: "ما هو ملف تعريف الارتباط؟",
      body: "ملف تعريف الارتباط هو ملف نصي صغير يُودَع في متصفحك أو جهازك عند زيارة موقع إلكتروني. يتيح للموقع تذكّر معلومات معينة (اللغة المختارة والتفضيلات) لتحسين تجربتك.\n\nبعض ملفات تعريف الارتباط ضرورية لعمل الموقع ولا تستلزم موافقتك. والبعض الآخر (التحليلية) يتطلب موافقتك المسبقة.",
    },
    tableHeading: "ملفات تعريف الارتباط المستخدمة في هذا الموقع",
    tableHeaders: ["الاسم", "المزوّد", "الغرض", "المدة", "الفئة"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "يحفظ تفضيل اللغة لعرض الموقع",
        duration: "الجلسة (يُحذف عند إغلاق المتصفح)",
        category: "ضروري تمامًا",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "يُميّز المستخدمين الفريدين بتعيين معرّف مجهول — Google Analytics 4",
        duration: "13 شهرًا",
        category: "تحليلي",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "يحافظ على حالة جلسة قياس Google Analytics 4 الخاصة بهذا الموقع",
        duration: "13 شهرًا",
        category: "تحليلي",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "يُميّز المستخدمين خلال فترة 24 ساعة",
        duration: "24 ساعة",
        category: "تحليلي",
      },
    ],
    categoriesHeading: "فئات ملفات تعريف الارتباط",
    categories: [
      {
        name: "🟢 ضرورية تمامًا",
        description: "ضرورية لعمل الموقع. لا تتطلب موافقة.",
      },
      {
        name: "📊 تحليلية",
        description: "تتيح لنا قياس عدد الزوار وتحليل التصفح لتحسين محتوانا. تُودَع فقط بموافقتك. البيانات مجهولة الهوية.",
      },
    ],
    managementHeading: "إدارة تفضيلاتك",
    management: "في زيارتك الأولى، يمكنك قبول أو رفض ملفات تعريف الارتباط التحليلية. يمكنك تغيير خيارك في أي وقت.",
    gaOptout: "لتعطيل Google Analytics: https://tools.google.com/dlpage/gaoptout",
    browserSettings: "يمكنك أيضًا ضبط إعدادات متصفحك لحظر ملفات تعريف الارتباط أو حذفها:",
    moreInfo: "لأي استفسار: praxisloten@gmail.com. هيئة حماية البيانات: www.autoriteprotectiondonnees.be",
  },
  pl: {
    title: "Polityka plików cookie",
    updated: "Ostatnia aktualizacja: maj 2026",
    intro:
      "Ta strona internetowa używa plików cookie i podobnych technologii. Niniejsza polityka informuje Cię o plikach cookie, które stosujemy, ich celu i Twoich prawach, zgodnie z RODO i dyrektywą ePrivacy transponowaną do prawa belgijskiego.",
    whatAreCookies: {
      heading: "Czym jest plik cookie?",
      body: "Plik cookie to mały plik tekstowy umieszczany w przeglądarce lub urządzeniu podczas odwiedzania strony internetowej. Pozwala stronie zapamiętać pewne informacje (wybrany język, preferencje) w celu poprawy Twojego doświadczenia.\n\nNiektóre pliki cookie są niezbędne do działania strony i nie wymagają zgody. Inne (analityczne) wymagają Twojej uprzedniej zgody.",
    },
    tableHeading: "Pliki cookie używane na tej stronie",
    tableHeaders: ["Nazwa", "Dostawca", "Cel", "Czas trwania", "Kategoria"],
    cookies: [
      {
        name: "NEXT_LOCALE",
        provider: "praxisloten.be",
        purpose: "Przechowuje preferencję językową w celu personalizacji wyświetlania strony",
        duration: "Sesja (usuwany po zamknięciu przeglądarki)",
        category: "Niezbędny",
      },
      {
        name: "_ga",
        provider: "Google LLC",
        purpose: "Rozróżnia unikalnych użytkowników poprzez przypisanie anonimowego ID — Google Analytics 4",
        duration: "13 miesięcy",
        category: "Analityczny",
      },
      {
        name: "_ga_T94F58H1XV",
        provider: "Google LLC",
        purpose: "Utrzymuje stan sesji pomiarowej Google Analytics 4 dla tej strony",
        duration: "13 miesięcy",
        category: "Analityczny",
      },
      {
        name: "_gid",
        provider: "Google LLC",
        purpose: "Rozróżnia użytkowników przez 24 godziny",
        duration: "24 godziny",
        category: "Analityczny",
      },
    ],
    categoriesHeading: "Kategorie plików cookie",
    categories: [
      {
        name: "🟢 Niezbędne",
        description: "Niezbędne do działania strony. Nie wymagają zgody.",
      },
      {
        name: "📊 Analityczne",
        description: "Pozwalają mierzyć liczbę odwiedzających i analizować nawigację w celu ulepszenia treści. Umieszczane wyłącznie za Twoją zgodą. Dane są anonimizowane.",
      },
    ],
    managementHeading: "Zarządzaj swoimi preferencjami",
    management: "Podczas pierwszej wizyty możesz zaakceptować lub odrzucić analityczne pliki cookie. Możesz zmienić swój wybór w dowolnym momencie.",
    gaOptout: "Aby wyłączyć Google Analytics: https://tools.google.com/dlpage/gaoptout",
    browserSettings: "Możesz również skonfigurować przeglądarkę, aby blokować lub usuwać pliki cookie:",
    moreInfo: "Pytania? Skontaktuj się z nami: praxisloten@gmail.com. Organ nadzorczy: www.autoriteprotectiondonnees.be",
  },
};

const BROWSER_LINKS = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
  { name: "Safari", url: "https://support.apple.com/fr-be/guide/safari/sfri11471/mac" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
];

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lang = (Object.keys(CONTENT).includes(locale) ? locale : "en") as LangKey;
  const c = CONTENT[lang];
  const isRtl = locale === "ar";

  return (
    <div className="pt-24 pb-16" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-2">{c.title}</h1>
        <p className="text-sm text-neutral-400 mb-4">{c.updated}</p>
        <p className="text-neutral-600 leading-relaxed mb-10 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm">
          {c.intro}
        </p>

        {/* What are cookies */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-800 mb-3">{c.whatAreCookies.heading}</h2>
          <div className="text-neutral-600 leading-relaxed space-y-3">
            {c.whatAreCookies.body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Cookie table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-800 mb-4">{c.tableHeading}</h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-50 text-neutral-700 font-semibold">
                <tr>
                  {c.tableHeaders.map((h, i) => (
                    <th key={i} className="px-4 py-3 border-b border-neutral-200 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {c.cookies.map((cookie, i) => (
                  <tr key={i} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-neutral-800 whitespace-nowrap">{cookie.name}</td>
                    <td className="px-4 py-3 text-neutral-600 whitespace-nowrap">{cookie.provider}</td>
                    <td className="px-4 py-3 text-neutral-600">{cookie.purpose}</td>
                    <td className="px-4 py-3 text-neutral-600 whitespace-nowrap">{cookie.duration}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                        cookie.category.includes("nécessaire") || cookie.category.includes("necessary") || cookie.category.includes("noodzakelijk") || cookie.category.includes("Zorunlu") || cookie.category.includes("ضروري") || cookie.category.includes("Niezbędny") || cookie.category.includes("erforderlich")
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {cookie.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-800 mb-4">{c.categoriesHeading}</h2>
          <div className="space-y-4">
            {c.categories.map((cat, i) => (
              <div key={i} className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                <p className="font-semibold text-neutral-800 mb-1">{cat.name}</p>
                <p className="text-sm text-neutral-600">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-neutral-800 mb-3">{c.managementHeading}</h2>
          <p className="text-neutral-600 mb-4">{c.management}</p>
          <p className="text-neutral-600 mb-3">{c.gaOptout}</p>
          <p className="text-neutral-600 mb-3">{c.browserSettings}</p>
          <ul className="space-y-1">
            {BROWSER_LINKS.map((b) => (
              <li key={b.name}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0e7490] hover:underline text-sm"
                >
                  {b.name} →
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* More info */}
        <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 text-sm text-neutral-600">
          <p>{c.moreInfo}</p>
        </div>
      </div>
    </div>
  );
}
