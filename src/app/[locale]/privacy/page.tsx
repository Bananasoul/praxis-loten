import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { pageSeo } from "@/i18n/alternates";

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
    "uk": "Політика конфіденційності",
    "es": "Política de privacidad",
    "ku": "Polîtîkaya nepenîtiyê",
  };
  return { title: titles[locale] || titles.fr, ...pageSeo(locale, "/privacy") };
}

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl" | "uk" | "es" | "ku";

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
  "uk": {
    "title": "Політика конфіденційності",
    "updated": "Останнє оновлення: травень 2026 р.",
    "intro": "Захист Ваших персональних даних є пріоритетом для Praxis Loten. Ця політика описує, як ми збираємо, використовуємо та захищаємо Ваші дані відповідно до Регламенту (ЄС) 2016/679 (GDPR) та бельгійського закону від 30 липня 2018 року про захист персональних даних.",
    "sections": [
      {
        "heading": "1. Контролер даних",
        "body": "Praxis Loten\nLoten 1 — B-4700 Eupen — Бельгія\nТелефон: +32 87 55 56 70\nЕл. пошта: praxisloten@gmail.com\n\nКонтролер даних: Philippe Banaszak"
      },
      {
        "heading": "2. Дані, які ми збираємо",
        "body": "Ми можемо збирати такі категорії даних:\n\n• Контактні дані: прізвище, ім'я, номер телефону, адреса електронної пошти — коли Ви заповнюєте форму зворотного зв'язку або запису на прийом.\n• Дані про здоров'я (лише в контексті лікування): інформація, яку Ви повідомляєте під час лікування в кабінеті. Ці дані обробляються з максимальним рівнем захисту, якого вимагає стаття 9 GDPR.\n• Технічні дані: IP-адреса (анонімізована), тип браузера, операційна система, відвідані сторінки, тривалість відвідувань — збираються автоматично через Google Analytics 4.\n• Дані про перегляд (файли cookie): див. нашу Політику щодо файлів cookie."
      },
      {
        "heading": "3. Цілі та правові підстави обробки",
        "body": "Кожна обробка ґрунтується на правовій підставі відповідно до статті 6 GDPR:\n\n• Керування записами на прийом і стосунками з пацієнтом: виконання договору (ст. 6.1.b) — обробка, необхідна для терапевтичного супроводу.\n• Відповіді на запити: законний інтерес (ст. 6.1.f) — Ви самі звернулися до нашого кабінету.\n• Статистика відвідуваності через Google Analytics: згода (ст. 6.1.a) — під час першого відвідування Ви вільні погодитися або відмовитися.\n• Юридичні обов'язки (зберігання медичної документації): юридичний обов'язок (ст. 6.1.c) — бельгійське законодавство вимагає зберігати медичну документацію 30 років."
      },
      {
        "heading": "4. Строки зберігання",
        "body": "• Медична документація: 30 років після останньої консультації (юридичний обов'язок, кодифікований закон від 22 серпня 2002 року про права пацієнта).\n• Контактні дані та листування: 3 роки після останнього контакту.\n• Аналітичні дані (Google Analytics): 14 місяців (стандартне налаштування Google Analytics 4).\n• Дані файлів cookie: див. нашу Політику щодо файлів cookie."
      },
      {
        "heading": "5. Одержувачі та обробники",
        "body": "Ваші дані ніколи не продаються і не передаються третім особам у комерційних цілях. Ними можуть ділитися з:\n\n• Google LLC (Google Analytics 4) — анонімізоване вимірювання відвідуваності. На Google поширюються Стандартні договірні положення (SCC) щодо передавання даних до США. Політика конфіденційності Google: https://policies.google.com/privacy\n• Vercel Inc. — хостинг-провайдер вебсайту. Технічні дані проходять через сервери Vercel, що регулюється SCC відповідно до GDPR.\n• Медичні фахівці-партнери — лише для забезпечення безперервності лікування і з Вашої явної згоди.\n• Державні органи — якщо цього вимагає закон (судове рішення тощо)."
      },
      {
        "heading": "6. Передавання за межі Європейського Союзу",
        "body": "Google Analytics і Vercel обробляють дані на серверах, розташованих у США. Таке передавання регулюється Стандартними договірними положеннями, ухваленими Європейською Комісією (рішення 2021/914), які гарантують рівень захисту, рівнозначний рівню ЄС.\n\nВи можете будь-коли вимкнути Google Analytics через нашу Політику щодо файлів cookie або встановивши офіційне розширення: https://tools.google.com/dlpage/gaoptout"
      },
      {
        "heading": "7. Ваші права",
        "body": "Відповідно до статей 15–22 GDPR Ви маєте такі права:\n\n• Право на доступ (ст. 15): отримати копію своїх даних.\n• Право на виправлення (ст. 16): виправити неточні дані.\n• Право на видалення (ст. 17): вимагати видалення своїх даних (з урахуванням юридичних обов'язків щодо зберігання).\n• Право на обмеження (ст. 18): тимчасово обмежити обробку.\n• Право на перенесення (ст. 20): отримати свої дані в структурованому форматі.\n• Право на заперечення (ст. 21): заперечити проти певної обробки, що ґрунтується на законному інтересі.\n• Право відкликати згоду (ст. 7.3): будь-коли, без впливу на обробку, здійснену раніше.\n\nЩоб скористатися цими правами, напишіть нам на ел. пошту praxisloten@gmail.com або поштою на адресу Praxis Loten, Loten 1, B-4700 Eupen. Ми відповімо протягом щонайбільше 30 днів."
      },
      {
        "heading": "8. Право на подання скарги",
        "body": "Якщо Ви вважаєте, що обробка Ваших даних порушує GDPR, Ви маєте право подати скаргу до Органу із захисту даних (APD):\n\nAutorité de Protection des Données\nRue de la Presse 35 — 1000 Bruxelles\nТел.: +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be"
      },
      {
        "heading": "9. Безпека",
        "body": "Praxis Loten вживає належних технічних та організаційних заходів, щоб захистити Ваші дані від втрати, несанкціонованого доступу, розголошення чи знищення. Сайт працює виключно через HTTPS (TLS 1.3)."
      },
      {
        "heading": "10. Зміни",
        "body": "Ця політика може бути оновлена в будь-який час. Чинною є версія, опублікована на цій сторінці, з датою останнього оновлення, зазначеною вгорі."
      }
    ]
  },
  "es": {
    "title": "Política de privacidad",
    "updated": "Última actualización: mayo de 2026",
    "intro": "La protección de sus datos personales es una prioridad para Praxis Loten. La presente política describe cómo recogemos, utilizamos y protegemos sus datos de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la ley belga de 30 de julio de 2018 relativa a la protección de datos de carácter personal.",
    "sections": [
      {
        "heading": "1. Responsable del tratamiento",
        "body": "Praxis Loten\nLoten 1 — B-4700 Eupen — Bélgica\nTeléfono: +32 87 55 56 70\nCorreo electrónico: praxisloten@gmail.com\n\nResponsable del tratamiento: Philippe Banaszak"
      },
      {
        "heading": "2. Datos recogidos",
        "body": "Podemos recoger las siguientes categorías de datos:\n\n• Datos de contacto: apellido, nombre, número de teléfono, dirección de correo electrónico, cuando rellena un formulario de contacto o de solicitud de cita.\n• Datos de salud (solo en el contexto asistencial): información comunicada durante su atención en la consulta. Estos datos se tratan con el máximo nivel de protección exigido por el artículo 9 del RGPD.\n• Datos técnicos: dirección IP (anonimizada), tipo de navegador, sistema operativo, páginas visitadas, duración de las visitas, recogidos automáticamente mediante Google Analytics 4.\n• Datos de navegación (cookies): véase nuestra Política de cookies."
      },
      {
        "heading": "3. Finalidades y bases jurídicas del tratamiento",
        "body": "Cada tratamiento se basa en una base jurídica conforme al artículo 6 del RGPD:\n\n• Gestión de las citas y de la relación con el paciente: ejecución de un contrato (art. 6.1.b), tratamiento necesario para la atención terapéutica.\n• Respuesta a las solicitudes de contacto: interés legítimo (art. 6.1.f), usted se ha dirigido a nuestra consulta.\n• Estadísticas de audiencia mediante Google Analytics: consentimiento (art. 6.1.a), usted es libre de aceptar o rechazar en su primera visita.\n• Obligaciones legales (conservación de los historiales asistenciales): obligación legal (art. 6.1.c), la ley belga impone la conservación de los historiales médicos durante 30 años."
      },
      {
        "heading": "4. Plazos de conservación",
        "body": "• Historiales asistenciales: 30 años después de la última consulta (obligación legal, ley coordinada de 22 de agosto de 2002 relativa a los derechos del paciente).\n• Datos de contacto y correspondencia: 3 años después del último contacto.\n• Datos analíticos (Google Analytics): 14 meses (parámetro por defecto de Google Analytics 4).\n• Datos de las cookies: véase nuestra Política de cookies."
      },
      {
        "heading": "5. Destinatarios y encargados del tratamiento",
        "body": "Sus datos nunca se venden ni se ceden a terceros con fines comerciales. Pueden compartirse con:\n\n• Google LLC (Google Analytics 4): medición de audiencia anonimizada. Google está sujeto a las Cláusulas Contractuales Tipo (CCT) para las transferencias a los Estados Unidos. Política de privacidad de Google: https://policies.google.com/privacy\n• Vercel Inc.: proveedor de alojamiento del sitio web. Los datos técnicos transitan por los servidores de Vercel, regulados por CCT conformes al RGPD.\n• Profesionales de la salud colaboradores: únicamente en el marco de la continuidad asistencial y con su consentimiento explícito.\n• Autoridades legales: si la ley lo exige (orden judicial, etc.)."
      },
      {
        "heading": "6. Transferencias fuera de la Unión Europea",
        "body": "Google Analytics y Vercel tratan datos en servidores situados en los Estados Unidos. Estas transferencias están reguladas por las Cláusulas Contractuales Tipo adoptadas por la Comisión Europea (Decisión 2021/914), que garantizan un nivel de protección equivalente al de la UE.\n\nPuede desactivar Google Analytics en cualquier momento a través de nuestra Política de cookies o instalando la extensión oficial: https://tools.google.com/dlpage/gaoptout"
      },
      {
        "heading": "7. Sus derechos",
        "body": "De conformidad con los artículos 15 a 22 del RGPD, usted dispone de los siguientes derechos:\n\n• Derecho de acceso (art. 15): obtener una copia de sus datos.\n• Derecho de rectificación (art. 16): corregir datos inexactos.\n• Derecho de supresión (art. 17): solicitar la eliminación de sus datos (sin perjuicio de las obligaciones legales de conservación).\n• Derecho a la limitación (art. 18): restringir temporalmente el tratamiento.\n• Derecho a la portabilidad (art. 20): recibir sus datos en un formato estructurado.\n• Derecho de oposición (art. 21): oponerse a determinados tratamientos basados en el interés legítimo.\n• Derecho a retirar su consentimiento (art. 7.3): en cualquier momento, sin que ello afecte a los tratamientos anteriores.\n\nPara ejercer estos derechos, contáctenos por correo electrónico en praxisloten@gmail.com o por correo postal a Praxis Loten, Loten 1, B-4700 Eupen. Responderemos en un plazo máximo de 30 días."
      },
      {
        "heading": "8. Derecho a presentar una reclamación",
        "body": "Si considera que el tratamiento de sus datos infringe el RGPD, tiene derecho a presentar una reclamación ante la Autoridad de Protección de Datos (APD):\n\nAutorité de Protection des Données\nRue de la Presse 35 — 1000 Bruxelles\nTel.: +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be"
      },
      {
        "heading": "9. Seguridad",
        "body": "Praxis Loten aplica las medidas técnicas y organizativas adecuadas para proteger sus datos contra la pérdida, el acceso no autorizado, la divulgación o la destrucción. El sitio se sirve exclusivamente en HTTPS (TLS 1.3)."
      },
      {
        "heading": "10. Modificaciones",
        "body": "La presente política puede actualizarse en cualquier momento. La versión vigente es la publicada en esta página, con la fecha de la última actualización indicada en la parte superior."
      }
    ]
  },
  "ku": {
    "title": "Polîtîkaya nepenîtiyê",
    "updated": "Nûkirina dawî: Gulan 2026",
    "intro": "Parastina daneyên we yên kesane ji bo Praxis Loten pêşîniyek e. Ev polîtîka rave dike ka em daneyên we çawa berhev dikin, bi kar tînin û diparêzin, li gorî Rêziknameya (YE) 2016/679 (GDPR) û qanûna Belçîkayê ya 30ê Tîrmeha 2018an a derbarê parastina daneyên kesane de.",
    "sections": [
      {
        "heading": "1. Berpirsê pêvajoyê",
        "body": "Praxis Loten\nLoten 1 — B-4700 Eupen — Belçîka\nTelefon: +32 87 55 56 70\nE-name: praxisloten@gmail.com\n\nBerpirsê pêvajoyê: Philippe Banaszak"
      },
      {
        "heading": "2. Daneyên ku têne berhevkirin",
        "body": "Em dikarin van kategoriyên daneyan berhev bikin:\n\n• Daneyên têkiliyê: paşnav, nav, hejmara telefonê, navnîşana e-nameyê — dema ku hûn formeke têkiliyê an girtina randevûyê tijî dikin.\n• Daneyên tenduristiyê (tenê di çarçoveya lênihêrînê de): agahiyên ku hûn di dema lênihêrîna xwe ya li kabîneyê de didin. Ev dane bi asta parastinê ya herî bilind a ku xala 9an a GDPR dixwaze têne pêvajokirin.\n• Daneyên teknîkî: navnîşana IP (bênavkirî), cureyê gerokê, pergala xebitandinê, rûpelên serdankirî, dirêjahiya serdanan — bi rêya Google Analytics 4 bixweber têne berhevkirin.\n• Daneyên gerînê (cookie): li Polîtîkaya me ya cookie binêrin."
      },
      {
        "heading": "3. Armanc û bingehên qanûnî yên pêvajoyê",
        "body": "Her pêvajo li ser bingeheke qanûnî ya li gorî xala 6an a GDPR ye:\n\n• Birêvebirina randevûyan û têkiliya bi nexweş re: cîbicîkirina peymanê (xal 6.1.b) — pêvajoya ku ji bo lênihêrîna terapîk pêwîst e.\n• Bersivdana daxwazên têkiliyê: berjewendiya rewa (xal 6.1.f) — we bi xwe serî li kabîneya me daye.\n• Statîstîkên temaşevanan bi rêya Google Analytics: razîbûn (xal 6.1.a) — di serdana xwe ya yekem de hûn azad in ku qebûl bikin an red bikin.\n• Erkên qanûnî (parastina dosyeyên lênihêrînê): erka qanûnî (xal 6.1.c) — qanûna Belçîkayê parastina dosyeyên bijîjkî 30 salan ferz dike."
      },
      {
        "heading": "4. Demên parastinê",
        "body": "• Dosyeyên lênihêrînê: 30 sal piştî şêwirdariya dawî (erka qanûnî, qanûna koordînekirî ya 22ê Tebaxa 2002an a derbarê mafên nexweş de).\n• Daneyên têkiliyê û nameyan: 3 sal piştî têkiliya dawî.\n• Daneyên analîtîk (Google Analytics): 14 meh (mîhenga standard a Google Analytics 4).\n• Daneyên cookieyan: li Polîtîkaya me ya cookie binêrin."
      },
      {
        "heading": "5. Wergir û pêvajokar",
        "body": "Daneyên we tu caran ji bo armancên bazirganî nayên firotin û nayên dayîn aliyên sêyem. Ew dikarin bi van re werin parvekirin:\n\n• Google LLC (Google Analytics 4) — pîvana temaşevanan a bênavkirî. Google ji bo veguhestinên ber bi Dewletên Yekbûyî ve bi Xalên Peymanê yên Standard (SCC) ve girêdayî ye. Polîtîkaya nepenîtiyê ya Google: https://policies.google.com/privacy\n• Vercel Inc. — mêvandarê malperê. Daneyên teknîkî di serverên Vercel re derbas dibin, ku bi SCCyên li gorî GDPR têne rêkxistin.\n• Pisporên tenduristiyê yên hevkar — tenê di çarçoveya berdewamiya lênihêrînê de û bi razîbûna we ya eşkere.\n• Desthilatdariyên qanûnî — heke qanûn wê bixwaze (fermana dadgehê, hwd.)."
      },
      {
        "heading": "6. Veguhestinên derveyî Yekîtiya Ewropayê",
        "body": "Google Analytics û Vercel daneyan li ser serverên li Dewletên Yekbûyî pêvajo dikin. Ev veguhestin bi Xalên Peymanê yên Standard ên ku Komîsyona Ewropayê pejirandine (biryara 2021/914) têne rêkxistin, ku asteke parastinê ya wekhevî ya YEyê misoger dikin.\n\nHûn dikarin Google Analytics her gav bi rêya Polîtîkaya me ya cookie an bi sazkirina pêveka fermî neçalak bikin: https://tools.google.com/dlpage/gaoptout"
      },
      {
        "heading": "7. Mafên we",
        "body": "Li gorî xalên 15 heta 22an ên GDPR, mafên we yên jêrîn hene:\n\n• Mafê gihîştinê (xal 15): kopiyeke daneyên xwe bistînin.\n• Mafê rastkirinê (xal 16): daneyên şaş rast bikin.\n• Mafê jêbirinê (xal 17): daxwaza jêbirina daneyên xwe bikin (bi şertê erkên qanûnî yên parastinê).\n• Mafê sînordarkirinê (xal 18): pêvajoyê bi awayekî demkî sînordar bikin.\n• Mafê veguhestinê (xal 20): daneyên xwe di formateke birêkxistî de bistînin.\n• Mafê îtirazê (xal 21): li hin pêvajoyên li ser bingeha berjewendiya rewa îtiraz bikin.\n• Mafê vekişandina razîbûnê (xal 7.3): her gav, bêyî ku bandorê li pêvajoyên berê bike.\n\nJi bo bikaranîna van mafan, bi e-nameyê li praxisloten@gmail.com an bi postê li Praxis Loten, Loten 1, B-4700 Eupen bi me re têkilî daynin. Em ê herî dereng di nav 30 rojan de bersiv bidin."
      },
      {
        "heading": "8. Mafê giliyê",
        "body": "Heke hûn difikirin ku pêvajokirina daneyên we GDPRê binpê dike, mafê we heye ku giliyekê pêşkêşî Desthilatdariya Parastina Daneyan (APD) bikin:\n\nAutorité de Protection des Données\nRue de la Presse 35 — 1000 Bruxelles\nTel.: +32 2 274 48 00\ncontact@apd-gba.be\nwww.autoriteprotectiondonnees.be"
      },
      {
        "heading": "9. Ewlehî",
        "body": "Praxis Loten tedbîrên teknîkî û rêxistinî yên guncav digire da ku daneyên we li hember windabûn, gihîştina bê destûr, eşkerekirin an tunekirinê biparêze. Malper tenê bi HTTPS (TLS 1.3) tê pêşkêşkirin."
      },
      {
        "heading": "10. Guhertin",
        "body": "Ev polîtîka dikare her gav were nûkirin. Guhertoya derbasdar ew e ku li ser vê rûpelê hatiye weşandin, bi dîroka nûkirina dawî ya ku li jor hatiye nîşandan."
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
        {AUTHORITATIVE_NOTICE[locale] && (
          <p className="text-sm text-neutral-500 italic mb-8">{AUTHORITATIVE_NOTICE[locale]}</p>
        )}
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
