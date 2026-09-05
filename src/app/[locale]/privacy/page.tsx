import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/i18n/alternates";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    de: "Datenschutzerklärung",
    fr: "Politique de confidentialité",
    en: "Privacy Policy",
    nl: "Privacybeleid",
    tr: "Gizlilik Politikası",
    ar: "سياسة الخصوصية",
    pl: "Polityka prywatności",
  };
  return { title: titles[locale] || titles.fr, alternates: buildAlternates(locale, "/privacy") };
}

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

interface PrivacyContent {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

const CONTENT: Record<LangKey, PrivacyContent> = {
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : mai 2026",
    intro:
      "La protection de vos données personnelles est une priorité pour Praxis Loten. La présente politique décrit comment nous collectons, utilisons et protégeons vos données conformément au Règlement (UE) 2016/679 (RGPD) et à la loi belge du 30 juillet 2018 relative à la protection des données à caractère personnel.",
    sections: [
      {
        heading: "1. Responsable du traitement",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — Belgique\nTéléphone : +32 87 55 56 70\nCourriel : praxisloten@gmail.com\n\nResponsable de traitement : Philippe Banaszak`,
      },
      {
        heading: "2. Données collectées",
        body: `Nous pouvons collecter les catégories de données suivantes :\n\n• Données de contact : nom, prénom, numéro de téléphone, adresse courriel — lorsque vous remplissez un formulaire de contact ou de prise de rendez-vous.\n• Données de santé (contexte de soins uniquement) : informations communiquées lors de votre prise en charge en cabinet. Ces données sont traitées avec le niveau de protection maximal requis par l'article 9 du RGPD.\n• Données techniques : adresse IP (anonymisée), type de navigateur, système d'exploitation, pages visitées, durée des visites — collectées automatiquement via Google Analytics 4.\n• Données de navigation (cookies) : voir notre Politique de cookies.`,
      },
      {
        heading: "3. Finalités et bases légales du traitement",
        body: `Chaque traitement repose sur une base légale conforme à l'article 6 du RGPD :\n\n• Gestion des rendez-vous et de la relation patient : exécution d'un contrat (art. 6.1.b) — traitement nécessaire à la prise en charge thérapeutique.\n• Réponse aux demandes de contact : intérêt légitime (art. 6.1.f) — vous avez sollicité notre cabinet.\n• Statistiques d'audience via Google Analytics : consentement (art. 6.1.a) — vous êtes libre d'accepter ou de refuser lors de votre première visite.\n• Obligations légales (conservation des dossiers de soins) : obligation légale (art. 6.1.c) — la loi belge impose la conservation des dossiers médicaux pendant 30 ans.`,
      },
      {
        heading: "4. Durées de conservation",
        body: `• Dossiers de soins : 30 ans après la dernière consultation (obligation légale, loi coordonnée du 22 août 2002 relative aux droits du patient).\n• Données de contact et correspondances : 3 ans après le dernier contact.\n• Données analytiques (Google Analytics) : 14 mois (paramètre par défaut de Google Analytics 4).\n• Données des cookies : voir notre Politique de cookies.`,
      },
      {
        heading: "5. Destinataires et sous-traitants",
        body: `Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être partagées avec :\n\n• Google LLC (Google Analytics 4) — mesure d'audience anonymisée. Google est soumis aux Clauses Contractuelles Types (CCT) pour les transferts vers les États-Unis. Politique de confidentialité Google : https://policies.google.com/privacy\n• Vercel Inc. — hébergeur du site web. Les données techniques transitent par les serveurs de Vercel, encadrés par des CCT conformes au RGPD.\n• Professionnels de santé partenaires — uniquement dans le cadre de la continuité des soins et avec votre accord explicite.\n• Autorités légales — si la loi l'exige (injonction judiciaire, etc.).`,
      },
      {
        heading: "6. Transferts hors Union européenne",
        body: `Google Analytics et Vercel traitent des données sur des serveurs situés aux États-Unis. Ces transferts sont encadrés par les Clauses Contractuelles Types adoptées par la Commission européenne (décision 2021/914), garantissant un niveau de protection équivalent à celui de l'UE.\n\nVous pouvez désactiver Google Analytics à tout moment via notre Politique de cookies ou en installant l'extension officielle : https://tools.google.com/dlpage/gaoptout`,
      },
      {
        heading: "7. Vos droits",
        body: `Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :\n\n• Droit d'accès (art. 15) : obtenir une copie de vos données.\n• Droit de rectification (art. 16) : corriger des données inexactes.\n• Droit à l'effacement (art. 17) : demander la suppression de vos données (sous réserve des obligations légales de conservation).\n• Droit à la limitation (art. 18) : restreindre temporairement le traitement.\n• Droit à la portabilité (art. 20) : recevoir vos données dans un format structuré.\n• Droit d'opposition (art. 21) : s'opposer à certains traitements fondés sur l'intérêt légitime.\n• Droit de retirer votre consentement (art. 7.3) : à tout moment, sans que cela affecte les traitements passés.\n\nPour exercer ces droits, contactez-nous par courriel à praxisloten@gmail.com ou par courrier à Praxis Loten, Loten 1, B-4700 Eupen. Nous répondrons dans un délai maximum de 30 jours.`,
      },
      {
        heading: "8. Droit de réclamation",
        body: `Si vous estimez que le traitement de vos données viole le RGPD, vous avez le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données (APD) :\n\nAutorité de Protection des Données\nRue de la Presse 35 — 1000 Bruxelles\nTél. : +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be`,
      },
      {
        heading: "9. Sécurité",
        body: `Praxis Loten met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé, la divulgation ou la destruction. Le site est servi exclusivement en HTTPS (TLS 1.3).`,
      },
      {
        heading: "10. Modifications",
        body: `La présente politique peut être mise à jour à tout moment. La version en vigueur est celle publiée sur cette page, avec la date de dernière mise à jour indiquée en haut.`,
      },
    ],
  },
  de: {
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: Mai 2026",
    intro:
      "Der Schutz Ihrer personenbezogenen Daten hat für die Praxis Loten höchste Priorität. Diese Erklärung beschreibt, wie wir Ihre Daten gemäß der Verordnung (EU) 2016/679 (DSGVO) und dem belgischen Gesetz vom 30. Juli 2018 erheben, verwenden und schützen.",
    sections: [
      {
        heading: "1. Verantwortlicher",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — Belgien\nTelefon: +32 87 55 56 70\nE-Mail: praxisloten@gmail.com\n\nVerantwortlicher: Philippe Banaszak`,
      },
      {
        heading: "2. Erhobene Daten",
        body: `Wir können folgende Datenkategorien erheben:\n\n• Kontaktdaten: Name, Vorname, Telefonnummer, E-Mail-Adresse — wenn Sie ein Kontakt- oder Terminformular ausfüllen.\n• Gesundheitsdaten (nur im Behandlungskontext): Informationen, die Sie im Rahmen Ihrer Behandlung mitteilen. Diese Daten werden mit dem nach Artikel 9 DSGVO erforderlichen Höchstschutz verarbeitet.\n• Technische Daten: IP-Adresse (anonymisiert), Browsertyp, Betriebssystem, besuchte Seiten, Besuchsdauer — automatisch über Google Analytics 4 erhoben.\n• Navigationsdaten (Cookies): siehe unsere Cookie-Richtlinie.`,
      },
      {
        heading: "3. Zwecke und Rechtsgrundlagen",
        body: `Jede Verarbeitung basiert auf einer Rechtsgrundlage gemäß Artikel 6 DSGVO:\n\n• Terminverwaltung und Patientenbeziehung: Vertragserfüllung (Art. 6.1.b) — für die therapeutische Versorgung erforderlich.\n• Beantwortung von Kontaktanfragen: berechtigte Interessen (Art. 6.1.f).\n• Reichweitenmessung via Google Analytics: Einwilligung (Art. 6.1.a) — Sie können bei Ihrem ersten Besuch frei zustimmen oder ablehnen.\n• Gesetzliche Pflichten (Aufbewahrung von Behandlungsunterlagen): rechtliche Verpflichtung (Art. 6.1.c) — belgisches Recht schreibt eine 30-jährige Aufbewahrung medizinischer Akten vor.`,
      },
      {
        heading: "4. Speicherdauer",
        body: `• Behandlungsunterlagen: 30 Jahre nach der letzten Konsultation (gesetzliche Pflicht).\n• Kontaktdaten und Korrespondenz: 3 Jahre nach dem letzten Kontakt.\n• Analysedaten (Google Analytics): 14 Monate.\n• Cookie-Daten: siehe unsere Cookie-Richtlinie.`,
      },
      {
        heading: "5. Empfänger und Auftragsverarbeiter",
        body: `Ihre Daten werden niemals an Dritte zu kommerziellen Zwecken verkauft oder weitergegeben. Sie können geteilt werden mit:\n\n• Google LLC (Google Analytics 4) — anonymisierte Reichweitenmessung. Google unterliegt Standardvertragsklauseln (SCC) für Transfers in die USA.\n• Vercel Inc. — Hosting-Anbieter. Technische Daten werden über DSGVO-konforme Server von Vercel übertragen.\n• Partnerärzte und -therapeuten — nur im Rahmen der Versorgungskontinuität und mit Ihrer ausdrücklichen Zustimmung.\n• Behörden — wenn gesetzlich vorgeschrieben.`,
      },
      {
        heading: "6. Übermittlungen in Drittländer",
        body: `Google Analytics und Vercel verarbeiten Daten auf Servern in den USA. Diese Übermittlungen sind durch Standardvertragsklauseln der Europäischen Kommission (Beschluss 2021/914) abgesichert.\n\nSie können Google Analytics jederzeit über unsere Cookie-Richtlinie oder über das offizielle Browser-Add-on deaktivieren: https://tools.google.com/dlpage/gaoptout`,
      },
      {
        heading: "7. Ihre Rechte",
        body: `Gemäß Artikel 15–22 DSGVO haben Sie folgende Rechte:\n\n• Auskunftsrecht (Art. 15): Kopie Ihrer Daten erhalten.\n• Berichtigungsrecht (Art. 16): unrichtige Daten korrigieren lassen.\n• Recht auf Löschung (Art. 17): Löschung beantragen (vorbehaltlich gesetzlicher Aufbewahrungspflichten).\n• Recht auf Einschränkung (Art. 18): Verarbeitung vorübergehend einschränken.\n• Recht auf Datenübertragbarkeit (Art. 20): Daten in strukturiertem Format erhalten.\n• Widerspruchsrecht (Art. 21): bestimmter Verarbeitungen widersprechen.\n• Recht auf Widerruf (Art. 7.3): Einwilligung jederzeit widerrufen.\n\nUm diese Rechte auszuüben, kontaktieren Sie uns per E-Mail an praxisloten@gmail.com. Wir antworten innerhalb von 30 Tagen.`,
      },
      {
        heading: "8. Beschwerderecht",
        body: `Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, können Sie eine Beschwerde bei der Datenschutzbehörde einreichen:\n\nDataprotection Authority (GBA / APD)\nRue de la Presse 35 — 1000 Brüssel\nTel.: +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be`,
      },
      {
        heading: "9. Sicherheit",
        body: `Die Praxis Loten trifft geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer Daten vor Verlust, unbefugtem Zugriff, Offenlegung oder Vernichtung. Die Website wird ausschließlich über HTTPS (TLS 1.3) bereitgestellt.`,
      },
      {
        heading: "10. Änderungen",
        body: `Diese Datenschutzerklärung kann jederzeit aktualisiert werden. Die jeweils gültige Fassung ist die auf dieser Seite veröffentlichte Version mit dem oben angegebenen Datum der letzten Aktualisierung.`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: May 2026",
    intro:
      "Protecting your personal data is a priority for Praxis Loten. This policy describes how we collect, use and protect your data in accordance with Regulation (EU) 2016/679 (GDPR) and the Belgian Law of 30 July 2018 on the protection of personal data.",
    sections: [
      {
        heading: "1. Data Controller",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — Belgium\nPhone: +32 87 55 56 70\nEmail: praxisloten@gmail.com\n\nController: Philippe Banaszak`,
      },
      {
        heading: "2. Data Collected",
        body: `We may collect the following categories of data:\n\n• Contact data: name, surname, phone number, email address — when you fill in a contact or appointment form.\n• Health data (care context only): information shared during your treatment. Processed with maximum protection as required by Article 9 GDPR.\n• Technical data: IP address (anonymised), browser type, OS, pages visited, visit duration — automatically collected via Google Analytics 4.\n• Navigation data (cookies): see our Cookie Policy.`,
      },
      {
        heading: "3. Purposes and Legal Bases",
        body: `Each processing activity is based on a legal basis under Article 6 GDPR:\n\n• Appointment management and patient relationship: performance of a contract (Art. 6.1.b).\n• Responding to contact requests: legitimate interests (Art. 6.1.f).\n• Audience statistics via Google Analytics: consent (Art. 6.1.a) — you may freely accept or refuse on your first visit.\n• Legal obligations (retention of care records): legal obligation (Art. 6.1.c) — Belgian law requires 30-year retention of medical records.`,
      },
      {
        heading: "4. Retention Periods",
        body: `• Care records: 30 years after the last consultation (legal obligation).\n• Contact data and correspondence: 3 years after last contact.\n• Analytics data (Google Analytics): 14 months.\n• Cookie data: see our Cookie Policy.`,
      },
      {
        heading: "5. Recipients and Sub-processors",
        body: `Your data is never sold or transferred to third parties for commercial purposes. It may be shared with:\n\n• Google LLC (Google Analytics 4) — anonymised audience measurement. Google is subject to Standard Contractual Clauses (SCCs) for US transfers.\n• Vercel Inc. — website host. Technical data transits via GDPR-compliant Vercel servers.\n• Partner healthcare professionals — only for continuity of care and with your explicit agreement.\n• Legal authorities — when required by law.`,
      },
      {
        heading: "6. International Transfers",
        body: `Google Analytics and Vercel process data on servers located in the United States. These transfers are governed by the Standard Contractual Clauses adopted by the European Commission (Decision 2021/914).\n\nYou can disable Google Analytics at any time via our Cookie Policy or by installing the official browser add-on: https://tools.google.com/dlpage/gaoptout`,
      },
      {
        heading: "7. Your Rights",
        body: `Under Articles 15–22 GDPR, you have the following rights:\n\n• Right of access (Art. 15): obtain a copy of your data.\n• Right to rectification (Art. 16): correct inaccurate data.\n• Right to erasure (Art. 17): request deletion (subject to legal retention obligations).\n• Right to restriction (Art. 18): temporarily restrict processing.\n• Right to data portability (Art. 20): receive your data in a structured format.\n• Right to object (Art. 21): object to certain processing based on legitimate interests.\n• Right to withdraw consent (Art. 7.3): at any time, without affecting past processing.\n\nTo exercise these rights, contact us at praxisloten@gmail.com. We will respond within 30 days.`,
      },
      {
        heading: "8. Right to Complain",
        body: `If you believe that the processing of your data violates the GDPR, you have the right to lodge a complaint with the Data Protection Authority (APD/GBA):\n\nAutorité de Protection des Données / Gegevensbeschermingsautoriteit\nRue de la Presse 35 — 1000 Brussels\nTel.: +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be`,
      },
      {
        heading: "9. Security",
        body: `Praxis Loten implements appropriate technical and organisational measures to protect your data against loss, unauthorised access, disclosure or destruction. The website is served exclusively over HTTPS (TLS 1.3).`,
      },
      {
        heading: "10. Updates",
        body: `This policy may be updated at any time. The version in force is the one published on this page, with the last update date indicated at the top.`,
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    updated: "Laatste update: mei 2026",
    intro:
      "De bescherming van uw persoonsgegevens is een prioriteit voor Praxis Loten. Dit beleid beschrijft hoe wij uw gegevens verzamelen, gebruiken en beschermen in overeenstemming met Verordening (EU) 2016/679 (AVG) en de Belgische Wet van 30 juli 2018.",
    sections: [
      {
        heading: "1. Verwerkingsverantwoordelijke",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — België\nTelefoon: +32 87 55 56 70\nE-mail: praxisloten@gmail.com\n\nVerantwoordelijke: Philippe Banaszak`,
      },
      {
        heading: "2. Verzamelde gegevens",
        body: `• Contactgegevens: naam, voornaam, telefoonnummer, e-mailadres — bij het invullen van een contactformulier.\n• Gezondheidsgegevens (enkel zorgcontext): informatie meegedeeld tijdens uw behandeling (maximale bescherming conform art. 9 AVG).\n• Technische gegevens: geanonimiseerd IP-adres, browsertype, besturingssysteem, bezochte pagina's — automatisch via Google Analytics 4.\n• Navigatiegegevens (cookies): zie ons Cookiebeleid.`,
      },
      {
        heading: "3. Doeleinden en rechtsgrondslagen",
        body: `• Afsprakenbeheer en patiëntenrelatie: uitvoering van een overeenkomst (art. 6.1.b).\n• Contactverzoeken beantwoorden: gerechtvaardigd belang (art. 6.1.f).\n• Bezoekersstatistieken via Google Analytics: toestemming (art. 6.1.a).\n• Wettelijke verplichtingen (bewaring zorgdossiers 30 jaar): wettelijke verplichting (art. 6.1.c).`,
      },
      {
        heading: "4. Bewaartermijnen",
        body: `• Zorgdossiers: 30 jaar na de laatste consultatie.\n• Contactgegevens: 3 jaar na het laatste contact.\n• Analysegegevens: 14 maanden (Google Analytics 4).\n• Cookiegegevens: zie ons Cookiebeleid.`,
      },
      {
        heading: "5. Ontvangers",
        body: `Uw gegevens worden nooit verkocht aan derden. Ze kunnen worden gedeeld met Google LLC (Google Analytics), Vercel Inc. (hosting), partnerzorgverleners (met uw akkoord) en wettelijke autoriteiten (indien wettelijk vereist).`,
      },
      {
        heading: "6. Uw rechten",
        body: `U heeft recht op inzage, rectificatie, wissing, beperking, overdraagbaarheid en bezwaar. U kunt uw toestemming te allen tijde intrekken. Neem contact op via praxisloten@gmail.com. We antwoorden binnen 30 dagen.\n\nKlacht indienen bij de GBA: www.gegevensbeschermingsautoriteit.be`,
      },
    ],
  },
  tr: {
    title: "Gizlilik Politikası",
    updated: "Son güncelleme: Mayıs 2026",
    intro:
      "Kişisel verilerinizin korunması Praxis Loten için bir önceliktir. Bu politika, verilerinizi AB Tüzüğü 2016/679 (GDPR) ve Belçika Yasası uyarınca nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklamaktadır.",
    sections: [
      {
        heading: "1. Veri Sorumlusu",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — Belçika\nTelefon: +32 87 55 56 70\nE-posta: praxisloten@gmail.com\n\nSorumlu: Philippe Banaszak`,
      },
      {
        heading: "2. Toplanan Veriler",
        body: `• İletişim verileri: ad, soyad, telefon, e-posta — iletişim veya randevu formu doldurduğunuzda.\n• Sağlık verileri (yalnızca bakım bağlamı): tedavi sırasında paylaştığınız bilgiler (GDPR Madde 9 kapsamında azami koruma).\n• Teknik veriler: anonimleştirilmiş IP adresi, tarayıcı türü, ziyaret edilen sayfalar — Google Analytics 4 aracılığıyla otomatik olarak toplanır.\n• Çerez verileri: Çerez Politikamıza bakın.`,
      },
      {
        heading: "3. Amaçlar ve Hukuki Dayanaklar",
        body: `• Randevu ve hasta ilişkisi yönetimi: sözleşmenin ifası (Md. 6.1.b).\n• İletişim taleplerine yanıt verme: meşru menfaat (Md. 6.1.f).\n• Google Analytics istatistikleri: rıza (Md. 6.1.a).\n• Yasal yükümlülükler (tıbbi kayıtların 30 yıl saklanması): yasal zorunluluk (Md. 6.1.c).`,
      },
      {
        heading: "4. Saklama Süreleri",
        body: `• Bakım kayıtları: son konsültasyondan itibaren 30 yıl.\n• İletişim verileri: son temastan itibaren 3 yıl.\n• Analiz verileri: 14 ay (Google Analytics 4).`,
      },
      {
        heading: "5. Haklarınız",
        body: `GDPR'nin 15-22. Maddeleri uyarınca erişim, düzeltme, silme, kısıtlama, taşınabilirlik ve itiraz haklarına sahipsiniz. praxisloten@gmail.com adresine e-posta göndererek bu hakları kullanabilirsiniz. 30 gün içinde yanıt vereceğiz.\n\nBelçika Veri Koruma Otoritesi: www.autoriteprotectiondonnees.be`,
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: مايو 2026",
    intro:
      "تُعدّ حماية بياناتك الشخصية أولوية قصوى لـ Praxis Loten. تصف هذه السياسة كيفية جمع بياناتك واستخدامها وحمايتها وفقًا للائحة الاتحاد الأوروبي 2016/679 (اللائحة العامة لحماية البيانات) والقانون البلجيكي الصادر في 30 يوليو 2018.",
    sections: [
      {
        heading: "١. مسؤول معالجة البيانات",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — بلجيكا\nالهاتف: +32 87 55 56 70\nالبريد الإلكتروني: praxisloten@gmail.com\n\nالمسؤول: Philippe Banaszak`,
      },
      {
        heading: "٢. البيانات المجمّعة",
        body: `• بيانات الاتصال: الاسم، رقم الهاتف، البريد الإلكتروني — عند ملء نموذج الاتصال أو الحجز.\n• البيانات الصحية (في سياق الرعاية فقط): معلومات تُشاركها خلال علاجك (حماية قصوى وفق المادة 9 من اللائحة).\n• البيانات التقنية: عنوان IP مجهول الهوية، نوع المتصفح، الصفحات المزارة — تُجمع تلقائيًا عبر Google Analytics 4.\n• بيانات التصفح (ملفات تعريف الارتباط): راجع سياسة ملفات تعريف الارتباط.`,
      },
      {
        heading: "٣. الأغراض والأسس القانونية",
        body: `• إدارة المواعيد والعلاقة مع المريض: تنفيذ العقد (م. 6.1.ب).\n• الرد على طلبات التواصل: المصالح المشروعة (م. 6.1.و).\n• إحصائيات Google Analytics: الموافقة (م. 6.1.أ).\n• الالتزامات القانونية (الاحتفاظ بالسجلات الطبية 30 عامًا): الالتزام القانوني (م. 6.1.ج).`,
      },
      {
        heading: "٤. حقوقك",
        body: `وفقًا للمواد 15-22 من اللائحة العامة لحماية البيانات، لك حق الوصول والتصحيح والحذف والتقييد والنقل والاعتراض. تواصل معنا عبر praxisloten@gmail.com وسنرد خلال 30 يومًا.\n\nهيئة حماية البيانات البلجيكية: www.autoriteprotectiondonnees.be`,
      },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: maj 2026",
    intro:
      "Ochrona Twoich danych osobowych jest priorytetem dla Praxis Loten. Niniejsza polityka opisuje, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje dane zgodnie z rozporządzeniem (UE) 2016/679 (RODO) oraz belgijską ustawą z dnia 30 lipca 2018 r.",
    sections: [
      {
        heading: "1. Administrator danych",
        body: `Praxis Loten\nLoten 1 — B-4700 Eupen — Belgia\nTelefon: +32 87 55 56 70\nE-mail: praxisloten@gmail.com\n\nAdministrator: Philippe Banaszak`,
      },
      {
        heading: "2. Zbierane dane",
        body: `• Dane kontaktowe: imię, nazwisko, telefon, e-mail — przy wypełnianiu formularza kontaktowego lub rezerwacji.\n• Dane zdrowotne (wyłącznie kontekst opieki): informacje przekazane podczas leczenia (maksymalna ochrona zgodnie z art. 9 RODO).\n• Dane techniczne: zanonimizowany adres IP, typ przeglądarki, odwiedzane strony — automatycznie gromadzone przez Google Analytics 4.\n• Dane dotyczące nawigacji (pliki cookie): patrz nasza Polityka plików cookie.`,
      },
      {
        heading: "3. Cele i podstawy prawne",
        body: `• Zarządzanie wizytami i relacją z pacjentem: wykonanie umowy (art. 6.1.b).\n• Odpowiadanie na prośby o kontakt: uzasadniony interes (art. 6.1.f).\n• Statystyki Google Analytics: zgoda (art. 6.1.a).\n• Obowiązki prawne (przechowywanie dokumentacji medycznej przez 30 lat): obowiązek prawny (art. 6.1.c).`,
      },
      {
        heading: "4. Twoje prawa",
        body: `Na podstawie art. 15–22 RODO przysługują Ci prawa do: dostępu, sprostowania, usunięcia, ograniczenia, przenoszenia i sprzeciwu. Skontaktuj się z nami pod adresem praxisloten@gmail.com. Odpowiemy w ciągu 30 dni.\n\nSkarga do organu nadzorczego: www.autoriteprotectiondonnees.be`,
      },
    ],
  },
};

export default async function PrivacyPage({
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
        <p className="text-sm text-neutral-400 mb-4">{c.updated}</p>
        <p className="text-neutral-600 leading-relaxed mb-10 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm">
          {c.intro}
        </p>

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
