import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageSeo } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Impressum",
    fr: "Mentions légales",
    en: "Legal Notice",
    nl: "Wettelijke vermeldingen",
    tr: "Yasal Bildirim",
    ar: "الإشعار القانوني",
    pl: "Nota prawna",
    "uk": "Правова інформація",
    "es": "Aviso legal",
    "ku": "Agahiya qanûnî",
  };
  return { title: titles[locale] || titles.fr, ...pageSeo(locale, "/legal") };
}

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

interface LegalContent {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

const CONTENT: Record<LangKey, LegalContent> = {
  fr: {
    title: "Mentions légales",
    updated: "Dernière mise à jour : mai 2026",
    sections: [
      {
        heading: "1. Éditeur du site",
        body: `Le présent site web www.praxisloten.be est édité par :\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelgique\n\nTéléphone : +32 87 55 56 70\nCourriel : praxisloten@gmail.com\n\nResponsable de la publication : Philippe Banaszak, kinésithérapeute agréé INAMI n° 5-39936-63-527.\n\nPraxis Loten est un cabinet de kinésithérapie et de thérapie manuelle, exerçant conformément à la législation belge sur les professions de santé (Loi coordonnée du 10 mai 2015 relative à l'exercice des professions des soins de santé).`,
      },
      {
        heading: "2. Hébergement",
        body: `Ce site est hébergé par :\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nÉtats-Unis\nSite web : https://vercel.com\n\nLes données techniques transitent via l'infrastructure mondiale de Vercel, encadrée par des clauses contractuelles types conformes au RGPD pour les transferts hors UE.`,
      },
      {
        heading: "3. Propriété intellectuelle",
        body: `L'ensemble des contenus présents sur ce site (textes, images, photographies, graphismes, logotypes, icônes, sons, logiciels, etc.) est la propriété exclusive de Praxis Loten ou de ses partenaires, et est protégé par les lois belges et internationales relatives au droit d'auteur et à la propriété intellectuelle.\n\nToute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable de Praxis Loten.`,
      },
      {
        heading: "4. Responsabilité",
        body: `Les informations publiées sur ce site ont un caractère purement informatif et ne constituent pas un avis médical, un diagnostic ou une prescription thérapeutique. Elles ne sauraient remplacer une consultation avec un professionnel de santé qualifié.\n\nPraxis Loten s'efforce de maintenir les informations à jour, mais ne peut garantir leur exactitude, exhaustivité ou actualité. Praxis Loten décline toute responsabilité pour les dommages directs ou indirects pouvant résulter de l'utilisation de ce site ou de son contenu.\n\nLes liens hypertextes présents sur ce site vers des sites tiers n'engagent pas la responsabilité de Praxis Loten quant au contenu de ces sites.`,
      },
      {
        heading: "5. Données personnelles et cookies",
        body: `Le traitement des données personnelles collectées via ce site est décrit dans notre Politique de confidentialité.\n\nL'utilisation de cookies est décrite dans notre Politique de cookies.\n\nConformément au Règlement (UE) 2016/679 (RGPD) et à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel, vous disposez de droits sur vos données (accès, rectification, suppression, portabilité, opposition). Ces droits sont exercés en contactant Praxis Loten à l'adresse ci-dessus ou par courriel à praxisloten@gmail.com.`,
      },
      {
        heading: "6. Droit applicable et juridiction",
        body: `Le présent site et les présentes mentions légales sont soumis au droit belge. En cas de litige, et après tentative de résolution amiable, les tribunaux compétents seront ceux de l'arrondissement judiciaire de Liège, sauf disposition légale contraire.`,
      },
    ],
  },
  de: {
    title: "Impressum / Rechtliche Hinweise",
    updated: "Letzte Aktualisierung: Mai 2026",
    sections: [
      {
        heading: "1. Herausgeber der Website",
        body: `Diese Website www.praxisloten.be wird herausgegeben von:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelgien\n\nTelefon: +32 87 55 56 70\nE-Mail: praxisloten@gmail.com\n\nVerantwortlicher für den Inhalt: Philippe Banaszak, zugelassener Physiotherapeut INAMI/RIZIV Nr. 5-39936-63-527.\n\nDie Praxis Loten ist eine Praxis für Physiotherapie und manuelle Therapie, die gemäß den belgischen Vorschriften über Gesundheitsberufe tätig ist (Koordiniertes Gesetz vom 10. Mai 2015 über die Ausübung der Gesundheitspflegeberufe).`,
      },
      {
        heading: "2. Hosting",
        body: `Diese Website wird gehostet von:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nUSA\nWebsite: https://vercel.com\n\nTechnische Daten werden über die globale Infrastruktur von Vercel übertragen, die durch Standardvertragsklauseln gemäß DSGVO für Transfers außerhalb der EU abgesichert ist.`,
      },
      {
        heading: "3. Urheberrecht",
        body: `Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Fotos, Grafiken, Logos, Symbole, Töne, Software usw.) sind ausschließliches Eigentum der Praxis Loten oder ihrer Partner und sind durch belgische und internationale Urheberrechts- und Schutzrechtsgesetze geschützt.\n\nJede Vervielfältigung, Verbreitung, Änderung, Anpassung, Weiterübertragung oder Veröffentlichung dieser Elemente ist ohne vorherige schriftliche Zustimmung der Praxis Loten strengstens untersagt.`,
      },
      {
        heading: "4. Haftungsausschluss",
        body: `Die auf dieser Website veröffentlichten Informationen haben ausschließlich informativen Charakter und stellen keine medizinische Beratung, Diagnose oder therapeutische Verschreibung dar. Sie ersetzen in keiner Weise eine Konsultation bei einem qualifizierten Gesundheitsfachmann.\n\nDie Praxis Loten bemüht sich, die Informationen aktuell zu halten, kann jedoch deren Richtigkeit, Vollständigkeit oder Aktualität nicht garantieren. Die Praxis Loten lehnt jegliche Haftung für direkte oder indirekte Schäden ab, die aus der Nutzung dieser Website oder ihrer Inhalte entstehen könnten.\n\nHyperlinks auf dieser Website zu Websites Dritter begründen keine Haftung der Praxis Loten für den Inhalt dieser Websites.`,
      },
      {
        heading: "5. Personenbezogene Daten und Cookies",
        body: `Die Verarbeitung der über diese Website erhobenen personenbezogenen Daten wird in unserer Datenschutzerklärung beschrieben.\n\nDie Verwendung von Cookies wird in unserer Cookie-Richtlinie beschrieben.\n\nGemäß der Verordnung (EU) 2016/679 (DSGVO) und dem belgischen Gesetz vom 30. Juli 2018 haben Sie Rechte bezüglich Ihrer Daten (Auskunft, Berichtigung, Löschung, Übertragbarkeit, Widerspruch). Diese Rechte können durch Kontaktaufnahme mit der Praxis Loten unter der oben genannten Adresse oder per E-Mail an praxisloten@gmail.com ausgeübt werden.`,
      },
      {
        heading: "6. Anwendbares Recht und Gerichtsbarkeit",
        body: `Diese Website und dieses Impressum unterliegen belgischem Recht. Im Streitfall, nach dem Versuch einer gütlichen Einigung, sind die zuständigen Gerichte die des Gerichtsbezirks Lüttich, sofern keine gegenteiligen gesetzlichen Bestimmungen bestehen.`,
      },
    ],
  },
  en: {
    title: "Legal Notice",
    updated: "Last updated: May 2026",
    sections: [
      {
        heading: "1. Site Publisher",
        body: `This website www.praxisloten.be is published by:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelgium\n\nPhone: +32 87 55 56 70\nEmail: praxisloten@gmail.com\n\nEditor-in-chief: Philippe Banaszak, INAMI-registered physiotherapist, n° 5-39936-63-527.\n\nPraxis Loten is a physiotherapy and manual therapy practice operating in accordance with Belgian legislation on healthcare professions (Coordinated Law of 10 May 2015 on the practice of healthcare professions).`,
      },
      {
        heading: "2. Hosting",
        body: `This website is hosted by:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nUnited States\nWebsite: https://vercel.com\n\nTechnical data transits via Vercel's global infrastructure, governed by Standard Contractual Clauses compliant with the GDPR for transfers outside the EU.`,
      },
      {
        heading: "3. Intellectual Property",
        body: `All content on this website (texts, images, photographs, graphics, logos, icons, sounds, software, etc.) is the exclusive property of Praxis Loten or its partners, and is protected by Belgian and international copyright and intellectual property laws.\n\nAny reproduction, distribution, modification, adaptation, retransmission or publication of these elements is strictly prohibited without the prior written consent of Praxis Loten.`,
      },
      {
        heading: "4. Liability",
        body: `The information published on this website is purely for informational purposes and does not constitute medical advice, diagnosis or therapeutic prescription. It cannot replace a consultation with a qualified healthcare professional.\n\nPraxis Loten strives to keep information up to date but cannot guarantee its accuracy, completeness or currency. Praxis Loten disclaims all liability for direct or indirect damages resulting from the use of this website or its content.\n\nHyperlinks on this website to third-party sites do not engage the liability of Praxis Loten regarding the content of those sites.`,
      },
      {
        heading: "5. Personal Data and Cookies",
        body: `The processing of personal data collected via this website is described in our Privacy Policy.\n\nThe use of cookies is described in our Cookie Policy.\n\nIn accordance with Regulation (EU) 2016/679 (GDPR) and the Belgian Law of 30 July 2018, you have rights over your data (access, rectification, deletion, portability, objection). These rights are exercised by contacting Praxis Loten at the address above or by email at praxisloten@gmail.com.`,
      },
      {
        heading: "6. Applicable Law and Jurisdiction",
        body: `This website and these legal notices are governed by Belgian law. In the event of a dispute, and after an attempt at amicable resolution, the competent courts will be those of the judicial district of Liège, unless otherwise required by law.`,
      },
    ],
  },
  nl: {
    title: "Wettelijke vermeldingen",
    updated: "Laatste update: mei 2026",
    sections: [
      {
        heading: "1. Uitgever van de website",
        body: `Deze website www.praxisloten.be wordt uitgegeven door:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelgië\n\nTelefoon: +32 87 55 56 70\nE-mail: praxisloten@gmail.com\n\nVerantwoordelijke voor de publicatie: Philippe Banaszak, RIZIV-erkend kinesitherapeut, nr. 5-39936-63-527.\n\nPraxis Loten is een praktijk voor kinesitherapie en manuele therapie, werkzaam overeenkomstig de Belgische wetgeving op de gezondheidszorgberoepen.`,
      },
      {
        heading: "2. Hosting",
        body: `Deze website wordt gehost door:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nVerenigde Staten\nWebsite: https://vercel.com\n\nTechnische gegevens worden doorgegeven via de wereldwijde infrastructuur van Vercel, beschermd door standaardcontractbepalingen die conform de AVG zijn voor overdrachten buiten de EU.`,
      },
      {
        heading: "3. Intellectueel eigendom",
        body: `Alle inhoud op deze website (teksten, afbeeldingen, foto's, grafische elementen, logo's, pictogrammen, geluiden, software, enz.) is het exclusieve eigendom van Praxis Loten of haar partners, en wordt beschermd door Belgische en internationale wetgeving inzake auteursrecht en intellectueel eigendom.\n\nElke reproductie, verspreiding, wijziging, aanpassing, overdracht of publicatie van deze elementen is strikt verboden zonder voorafgaande schriftelijke toestemming van Praxis Loten.`,
      },
      {
        heading: "4. Aansprakelijkheid",
        body: `De informatie op deze website is louter informatief en vormt geen medisch advies, diagnose of therapeutisch voorschrift. Ze kan een raadpleging bij een gekwalificeerde zorgverlener niet vervangen.\n\nPraxis Loten streeft ernaar de informatie actueel te houden, maar kan de nauwkeurigheid, volledigheid of actualiteit ervan niet garanderen. Praxis Loten wijst alle aansprakelijkheid af voor directe of indirecte schade die voortvloeit uit het gebruik van deze website of haar inhoud.`,
      },
      {
        heading: "5. Persoonsgegevens en cookies",
        body: `De verwerking van via deze website verzamelde persoonsgegevens wordt beschreven in ons Privacybeleid.\n\nHet gebruik van cookies wordt beschreven in ons Cookiebeleid.\n\nOvereenkomstig de AVG en de Belgische Wet van 30 juli 2018 heeft u rechten met betrekking tot uw gegevens. U kunt deze uitoefenen door contact op te nemen met Praxis Loten via praxisloten@gmail.com.`,
      },
      {
        heading: "6. Toepasselijk recht",
        body: `Deze website en deze wettelijke vermeldingen vallen onder Belgisch recht. Bij een geschil zijn de bevoegde rechtbanken die van het gerechtelijk arrondissement Luik.`,
      },
    ],
  },
  tr: {
    title: "Yasal Bildirim",
    updated: "Son güncelleme: Mayıs 2026",
    sections: [
      {
        heading: "1. Web Sitesi Yayıncısı",
        body: `Bu web sitesi www.praxisloten.be şu tarafından yayınlanmaktadır:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelçika\n\nTelefon: +32 87 55 56 70\nE-posta: praxisloten@gmail.com\n\nYayın sorumlusu: Philippe Banaszak, INAMI onaylı fizyoterapist, n° 5-39936-63-527.\n\nPraxis Loten, Belçika sağlık meslekleri mevzuatına uygun olarak faaliyet gösteren bir fizyoterapi ve manuel terapi kliniğidir.`,
      },
      {
        heading: "2. Barındırma",
        body: `Bu web sitesi şu şirket tarafından barındırılmaktadır:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nAmerika Birleşik Devletleri\nWeb sitesi: https://vercel.com\n\nTeknik veriler, AB dışı transferler için GDPR'ye uygun Standart Sözleşme Maddelerine tabi olan Vercel'in küresel altyapısı üzerinden aktarılmaktadır.`,
      },
      {
        heading: "3. Fikri Mülkiyet",
        body: `Bu web sitesindeki tüm içerikler (metinler, görseller, fotoğraflar, grafikler, logolar, simgeler, sesler, yazılımlar vb.) Praxis Loten'in veya ortaklarının münhasır mülkiyetindedir ve Belçika ile uluslararası telif hakkı ve fikri mülkiyet yasaları ile korunmaktadır.\n\nBu unsurların Praxis Loten'in önceden yazılı onayı olmaksızın çoğaltılması, dağıtılması, değiştirilmesi, uyarlanması, iletilmesi veya yayınlanması kesinlikle yasaktır.`,
      },
      {
        heading: "4. Sorumluluk Reddi",
        body: `Bu web sitesinde yayınlanan bilgiler yalnızca bilgilendirme amaçlıdır ve tıbbi tavsiye, teşhis veya tedavi reçetesi niteliği taşımaz. Nitelikli bir sağlık profesyoneliyle yapılacak konsültasyonun yerini alamaz.\n\nPraxis Loten bilgileri güncel tutmaya çalışmakla birlikte doğruluğunu, eksiksizliğini veya güncelliğini garanti edemez.`,
      },
      {
        heading: "5. Kişisel Veriler ve Çerezler",
        body: `Bu web sitesi aracılığıyla toplanan kişisel verilerin işlenmesi Gizlilik Politikamızda açıklanmaktadır.\n\nÇerez kullanımı Çerez Politikamızda açıklanmaktadır.\n\nAB Yönetmeliği 2016/679 (GDPR) uyarınca verileriniz üzerinde haklarınız bulunmaktadır. Bu hakları praxisloten@gmail.com adresine e-posta göndererek kullanabilirsiniz.`,
      },
      {
        heading: "6. Uygulanacak Hukuk",
        body: `Bu web sitesi ve bu yasal bildirim Belçika hukukuna tabidir. Uyuşmazlık halinde yetkili mahkemeler Liège yargı bölgesi mahkemeleri olacaktır.`,
      },
    ],
  },
  ar: {
    title: "الإشعار القانوني",
    updated: "آخر تحديث: مايو 2026",
    sections: [
      {
        heading: "١. ناشر الموقع الإلكتروني",
        body: `يُنشر هذا الموقع الإلكتروني www.praxisloten.be من قِبَل:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nبلجيكا\n\nالهاتف: +32 87 55 56 70\nالبريد الإلكتروني: praxisloten@gmail.com\n\nالمسؤول عن النشر: Philippe Banaszak، معالج طبيعي معتمد لدى INAMI رقم 5-39936-63-527.\n\nبراكسيس لوتن هو عيادة للعلاج الطبيعي والعلاج اليدوي، تعمل وفقًا للتشريعات البلجيكية المتعلقة بمهن الرعاية الصحية.`,
      },
      {
        heading: "٢. الاستضافة",
        body: `يستضيف هذا الموقع الإلكتروني:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nالولايات المتحدة الأمريكية\nالموقع الإلكتروني: https://vercel.com\n\nتنتقل البيانات التقنية عبر البنية التحتية العالمية لـ Vercel، المحكومة بالبنود التعاقدية القياسية المتوافقة مع اللائحة العامة لحماية البيانات للتحويلات خارج الاتحاد الأوروبي.`,
      },
      {
        heading: "٣. الملكية الفكرية",
        body: `جميع المحتويات الموجودة على هذا الموقع الإلكتروني (نصوص وصور وصور فوتوغرافية ورسومات وشعارات وأيقونات وأصوات وبرمجيات وغيرها) هي ملك حصري لـ Praxis Loten أو شركائها، وتحميها قوانين حقوق الطبع والنشر والملكية الفكرية البلجيكية والدولية.\n\nيُحظر صراحةً نسخ هذه العناصر أو توزيعها أو تعديلها أو تكييفها أو إعادة نقلها أو نشرها دون الحصول على موافقة خطية مسبقة من Praxis Loten.`,
      },
      {
        heading: "٤. إخلاء المسؤولية",
        body: `المعلومات المنشورة على هذا الموقع الإلكتروني هي لأغراض إعلامية بحتة ولا تُشكّل نصيحة طبية أو تشخيصًا أو وصفة علاجية. ولا يمكنها بأي حال أن تحل محل استشارة مع متخصص رعاية صحية مؤهل.\n\nتسعى Praxis Loten إلى إبقاء المعلومات محدّثة، غير أنها لا تستطيع ضمان دقتها أو اكتمالها أو حداثتها.`,
      },
      {
        heading: "٥. البيانات الشخصية وملفات تعريف الارتباط",
        body: `تُوضَّح معالجة البيانات الشخصية المجمّعة عبر هذا الموقع في سياسة الخصوصية الخاصة بنا.\n\nيُوضَّح استخدام ملفات تعريف الارتباط في سياسة ملفات تعريف الارتباط الخاصة بنا.\n\nوفقًا للائحة (الاتحاد الأوروبي) 2016/679 (اللائحة العامة لحماية البيانات)، لديك حقوق تتعلق ببياناتك. يمكنك ممارسة هذه الحقوق بالتواصل مع Praxis Loten عبر praxisloten@gmail.com.`,
      },
      {
        heading: "٦. القانون المطبّق والاختصاص القضائي",
        body: `يخضع هذا الموقع الإلكتروني وهذا الإشعار القانوني للقانون البلجيكي. في حالة النزاع، تكون المحاكم المختصة محاكم الدائرة القضائية في لييج.`,
      },
    ],
  },
  pl: {
    title: "Nota prawna",
    updated: "Ostatnia aktualizacja: maj 2026",
    sections: [
      {
        heading: "1. Wydawca strony",
        body: `Niniejsza strona internetowa www.praxisloten.be jest wydawana przez:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelgia\n\nTelefon: +32 87 55 56 70\nE-mail: praxisloten@gmail.com\n\nRedaktor odpowiedzialny: Philippe Banaszak, fizjoterapeuta zarejestrowany w INAMI, nr 5-39936-63-527.\n\nPraxis Loten to gabinet fizjoterapii i terapii manualnej, działający zgodnie z belgijskim prawem dotyczącym zawodów medycznych.`,
      },
      {
        heading: "2. Hosting",
        body: `Niniejsza strona jest hostowana przez:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nStany Zjednoczone\nStrona internetowa: https://vercel.com\n\nDane techniczne przesyłane są przez globalną infrastrukturę Vercel, objętą standardowymi klauzulami umownymi zgodnymi z RODO dla transferów poza UE.`,
      },
      {
        heading: "3. Własność intelektualna",
        body: `Wszystkie treści na tej stronie (teksty, obrazy, fotografie, grafiki, logotypy, ikony, dźwięki, oprogramowanie itp.) są wyłączną własnością Praxis Loten lub jej partnerów i chronione są przez belgijskie i międzynarodowe przepisy dotyczące praw autorskich i własności intelektualnej.\n\nWszelkie powielanie, rozpowszechnianie, modyfikowanie, adaptowanie, retransmisja lub publikowanie tych elementów jest surowo zabronione bez uprzedniej pisemnej zgody Praxis Loten.`,
      },
      {
        heading: "4. Odpowiedzialność",
        body: `Informacje publikowane na tej stronie mają wyłącznie charakter informacyjny i nie stanowią porady medycznej, diagnozy ani recepty. Nie mogą zastąpić konsultacji z wykwalifikowanym pracownikiem służby zdrowia.\n\nPraxis Loten stara się utrzymywać informacje aktualne, ale nie może zagwarantować ich dokładności, kompletności ani aktualności.`,
      },
      {
        heading: "5. Dane osobowe i pliki cookie",
        body: `Przetwarzanie danych osobowych zbieranych za pośrednictwem tej strony opisane jest w naszej Polityce prywatności.\n\nKorzystanie z plików cookie opisane jest w naszej Polityce plików cookie.\n\nZgodnie z rozporządzeniem (UE) 2016/679 (RODO) przysługują Ci prawa dotyczące Twoich danych. Możesz je wykonywać, kontaktując się z Praxis Loten pod adresem praxisloten@gmail.com.`,
      },
      {
        heading: "6. Prawo właściwe i jurysdykcja",
        body: `Niniejsza strona i niniejsza nota prawna podlegają prawu belgijskiemu. W przypadku sporu właściwe będą sądy okręgu sądowego w Liège.`,
      },
    ],
  },
  "uk": {
    "title": "Правова інформація",
    "updated": "Останнє оновлення: травень 2026",
    "sections": [
      {
        "heading": "1. Видавець сайту",
        "body": "Цей вебсайт www.praxisloten.be видає:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nБельгія\n\nТелефон: +32 87 55 56 70\nЕлектронна пошта: praxisloten@gmail.com\n\nВідповідальний за публікацію: Philippe Banaszak, фізіотерапевт, зареєстрований в INAMI, № 5-39936-63-527.\n\nPraxis Loten — кабінет фізіотерапії та мануальної терапії, що працює відповідно до бельгійського законодавства про професії у сфері охорони здоров'я (Loi coordonnée du 10 mai 2015 relative à l'exercice des professions des soins de santé — Координований закон від 10 травня 2015 року про здійснення професій у сфері охорони здоров'я)."
      },
      {
        "heading": "2. Хостинг",
        "body": "Цей сайт розміщено на хостингу:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nСША\nВебсайт: https://vercel.com\n\nТехнічні дані передаються через глобальну інфраструктуру Vercel, що регулюється стандартними договірними положеннями, які відповідають GDPR (RGPD), для передавання даних за межі ЄС."
      },
      {
        "heading": "3. Інтелектуальна власність",
        "body": "Увесь вміст цього сайту (тексти, зображення, фотографії, графіка, логотипи, іконки, звуки, програмне забезпечення тощо) є виключною власністю Praxis Loten або її партнерів і охороняється бельгійським та міжнародним законодавством про авторське право й інтелектуальну власність.\n\nБудь-яке відтворення, поширення, змінення, адаптація, повторна трансляція чи публікація цих елементів суворо заборонені без попередньої письмової згоди Praxis Loten."
      },
      {
        "heading": "4. Відповідальність",
        "body": "Інформація, опублікована на цьому сайті, має суто інформаційний характер і не є медичною порадою, діагнозом чи терапевтичним призначенням. Вона не може замінити консультацію кваліфікованого медичного фахівця.\n\nPraxis Loten докладає зусиль для підтримання інформації в актуальному стані, але не може гарантувати її точність, повноту чи актуальність. Praxis Loten не несе жодної відповідальності за прямі чи непрямі збитки, які можуть виникнути внаслідок використання цього сайту або його вмісту.\n\nГіперпосилання з цього сайту на сторонні сайти не покладають на Praxis Loten відповідальності за вміст цих сайтів."
      },
      {
        "heading": "5. Персональні дані та файли cookie",
        "body": "Обробку персональних даних, зібраних через цей сайт, описано в нашій Політиці конфіденційності.\n\nВикористання файлів cookie описано в нашій Політиці щодо файлів cookie.\n\nВідповідно до Регламенту (ЄС) 2016/679 (GDPR/RGPD) та бельгійського закону від 30 липня 2018 року про захист фізичних осіб щодо обробки персональних даних Ви маєте права щодо своїх даних (доступ, виправлення, видалення, перенесення, заперечення). Ці права реалізуються шляхом звернення до Praxis Loten за вказаною вище адресою або електронною поштою на praxisloten@gmail.com."
      },
      {
        "heading": "6. Застосовне право та юрисдикція",
        "body": "Цей сайт і ця правова інформація регулюються бельгійським правом. У разі спору, після спроби мирного врегулювання, компетентними є суди судового округу Льєжа, якщо інше не передбачено законом."
      }
    ]
  },
  "es": {
    "title": "Aviso legal",
    "updated": "Última actualización: mayo de 2026",
    "sections": [
      {
        "heading": "1. Editor del sitio",
        "body": "El presente sitio web www.praxisloten.be es editado por:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBélgica\n\nTeléfono: +32 87 55 56 70\nCorreo electrónico: praxisloten@gmail.com\n\nResponsable de la publicación: Philippe Banaszak, fisioterapeuta autorizado por el INAMI, n.º 5-39936-63-527.\n\nPraxis Loten es una consulta de fisioterapia y terapia manual que ejerce de conformidad con la legislación belga sobre las profesiones sanitarias (Loi coordonnée du 10 mai 2015 relative à l'exercice des professions des soins de santé — Ley coordinada de 10 de mayo de 2015 relativa al ejercicio de las profesiones sanitarias)."
      },
      {
        "heading": "2. Alojamiento",
        "body": "Este sitio está alojado por:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nEstados Unidos\nSitio web: https://vercel.com\n\nLos datos técnicos transitan por la infraestructura mundial de Vercel, regulada por cláusulas contractuales tipo conformes al RGPD para las transferencias fuera de la UE."
      },
      {
        "heading": "3. Propiedad intelectual",
        "body": "El conjunto de los contenidos presentes en este sitio (textos, imágenes, fotografías, gráficos, logotipos, iconos, sonidos, programas informáticos, etc.) es propiedad exclusiva de Praxis Loten o de sus socios y está protegido por las leyes belgas e internacionales relativas a los derechos de autor y a la propiedad intelectual.\n\nQueda estrictamente prohibida cualquier reproducción, distribución, modificación, adaptación, retransmisión o publicación de estos elementos sin el consentimiento previo por escrito de Praxis Loten."
      },
      {
        "heading": "4. Responsabilidad",
        "body": "La información publicada en este sitio tiene un carácter puramente informativo y no constituye un consejo médico, un diagnóstico ni una prescripción terapéutica. No puede sustituir una consulta con un profesional sanitario cualificado.\n\nPraxis Loten se esfuerza por mantener la información actualizada, pero no puede garantizar su exactitud, exhaustividad o actualidad. Praxis Loten declina toda responsabilidad por los daños directos o indirectos que puedan derivarse del uso de este sitio o de su contenido.\n\nLos hipervínculos presentes en este sitio hacia sitios de terceros no comprometen la responsabilidad de Praxis Loten en cuanto al contenido de dichos sitios."
      },
      {
        "heading": "5. Datos personales y cookies",
        "body": "El tratamiento de los datos personales recogidos a través de este sitio se describe en nuestra Política de privacidad.\n\nEl uso de cookies se describe en nuestra Política de cookies.\n\nDe conformidad con el Reglamento (UE) 2016/679 (RGPD) y con la ley belga de 30 de julio de 2018 relativa a la protección de las personas físicas en lo que respecta al tratamiento de datos personales, usted dispone de derechos sobre sus datos (acceso, rectificación, supresión, portabilidad, oposición). Estos derechos se ejercen contactando con Praxis Loten en la dirección indicada arriba o por correo electrónico en praxisloten@gmail.com."
      },
      {
        "heading": "6. Ley aplicable y jurisdicción",
        "body": "El presente sitio y el presente aviso legal se rigen por el derecho belga. En caso de litigio, y tras un intento de resolución amistosa, serán competentes los tribunales del distrito judicial de Lieja, salvo disposición legal en contrario."
      }
    ]
  },
  "ku": {
    "title": "Agahiya qanûnî",
    "updated": "Nûkirina dawî: Gulan 2026",
    "sections": [
      {
        "heading": "1. Weşanerê malperê",
        "body": "Ev malpera www.praxisloten.be ji aliyê vê saziyê ve tê weşandin:\n\nPraxis Loten\nLoten 1\nB-4700 Eupen\nBelçîka\n\nTelefon: +32 87 55 56 70\nE-name: praxisloten@gmail.com\n\nBerpirsiyarê weşanê: Philippe Banaszak, fizyoterapîstê ku ji aliyê INAMI ve hatiye pejirandin, hejmar 5-39936-63-527.\n\nPraxis Loten kabîneyeke fizyoterapî û terapiya destî ye, ku li gorî qanûnên Belçîkayê yên li ser pîşeyên tenduristiyê kar dike (Loi coordonnée du 10 mai 2015 relative à l'exercice des professions des soins de santé — Qanûna hevrêzkirî ya 10ê Gulana 2015an li ser pêkanîna pîşeyên lênêrîna tenduristiyê)."
      },
      {
        "heading": "2. Mazûvanî (hosting)",
        "body": "Ev malper ji aliyê vê saziyê ve tê mazûvankirin:\n\nVercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104\nDewletên Yekbûyî yên Amerîkayê\nMalper: https://vercel.com\n\nDaneyên teknîkî di binesaziya cîhanî ya Vercel re derbas dibin, ku ji bo veguhestinên derveyî YE bi xalên peymanê yên standard ên li gorî GDPR (RGPD) tê birêvebirin."
      },
      {
        "heading": "3. Milkiyeta fikrî",
        "body": "Hemû naveroka vê malperê (nivîs, wêne, fotograf, grafîk, logo, îkon, deng, nermalav, hwd.) milkê taybet ê Praxis Loten an hevkarên wê ye, û ji aliyê qanûnên Belçîkayê û navneteweyî yên li ser mafê nivîskar û milkiyeta fikrî ve tê parastin.\n\nHer cure dubarekirin, belavkirin, guhertin, adaptekirin, ji nû ve weşandin an weşandina van hêmanan bêyî razîbûna nivîskî ya pêşîn a Praxis Loten bi tundî qedexe ye."
      },
      {
        "heading": "4. Berpirsiyarî",
        "body": "Agahiyên ku li ser vê malperê tên weşandin tenê ji bo agahdariyê ne û ne şîreteke bijîşkî, ne teşxîs û ne jî reçeteyeke terapîk in. Ew nikarin şûna şêwirdariyeke bi pisporekî tenduristiyê yê jêhatî re bigirin.\n\nPraxis Loten hewl dide ku agahiyan rojane bihêle, lê nikare rastî, temamî an rojanebûna wan garantî bike. Praxis Loten ji bo zirarên rasterast an nerasterast ên ku dikarin ji bikaranîna vê malperê an naveroka wê derkevin, tu berpirsiyariyê qebûl nake.\n\nGirêdanên (hyperlink) li ser vê malperê ber bi malperên aliyên sêyem ve, di derbarê naveroka wan malperan de berpirsiyariya Praxis Loten çênakin."
      },
      {
        "heading": "5. Daneyên kesane û cookie",
        "body": "Pêvajoya daneyên kesane yên ku bi rêya vê malperê tên berhevkirin di Polîtîkaya me ya nepenîtiyê de tê vegotin.\n\nBikaranîna cookie di Polîtîkaya me ya cookie de tê vegotin.\n\nLi gorî Rêziknameya (YE) 2016/679 (GDPR/RGPD) û qanûna Belçîkayê ya 30ê Tîrmeha 2018an li ser parastina kesên xwezayî di derbarê pêvajoya daneyên kesane de, li ser daneyên we mafên we hene (gihîştin, rastkirin, jêbirin, veguhestin, îtîraz). Ev maf bi têkiliya bi Praxis Loten re li navnîşana li jor an bi e-nameyê li praxisloten@gmail.com tên bikaranîn."
      },
      {
        "heading": "6. Qanûna derbasdar û dadgehî",
        "body": "Ev malper û ev agahiya qanûnî girêdayî qanûna Belçîkayê ne. Di rewşa nakokiyekê de, û piştî hewldaneke çareseriya bi aştiyane, dadgehên desthilatdar ên herêma dadwerî ya Liège dê bin, heke qanûn tiştekî din ferz neke."
      }
    ]
  },
};

/** Les traductions des textes legaux sont fournies pour information ; FR et DE font foi. */
const AUTHORITATIVE_NOTICE: Partial<Record<string, string>> = {
  en: "This translation is provided for information only. The French and German versions are authoritative.",
  nl: "Deze vertaling wordt uitsluitend ter informatie verstrekt. De Franse en Duitse versies zijn rechtsgeldig.",
  tr: "Bu çeviri yalnızca bilgilendirme amaçlıdır. Fransızca ve Almanca sürümler esas alınır.",
  ar: "هذه الترجمة مقدمة لأغراض إعلامية فقط. النسختان الفرنسية والألمانية هما المرجع المعتمد.",
  pl: "Niniejsze tłumaczenie ma charakter wyłącznie informacyjny. Wiążące są wersje francuska i niemiecka.",
  uk: "Цей переклад надано лише для ознайомлення. Чинними є французька та німецька версії.",
  es: "Esta traducción se facilita solo a título informativo. Las versiones francesa y alemana son las que dan fe.",
  ku: "Ev werger tenê ji bo agahdariyê ye. Guhertoyên fransî û almanî yên fermî ne.",
};

export default async function LegalPage({
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-2">{c.title}</h1>
        <p className="text-sm text-neutral-400 mb-10">{c.updated}</p>
        {AUTHORITATIVE_NOTICE[locale] && (
          <p className="text-sm text-neutral-500 italic mb-8">{AUTHORITATIVE_NOTICE[locale]}</p>
        )}

        <div className="space-y-10">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-neutral-800 mb-3">{section.heading}</h2>
              <div className="text-neutral-600 leading-relaxed space-y-3">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="whitespace-pre-line">{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 p-5 bg-neutral-50 rounded-xl border border-neutral-200 text-sm text-neutral-500">
          <p className="font-semibold text-neutral-700 mb-1">Praxis Loten</p>
          <p>Loten 1 — B-4700 Eupen — Belgique / Belgien</p>
          <p>📞 +32 87 55 56 70 &nbsp;|&nbsp; ✉ praxisloten@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
