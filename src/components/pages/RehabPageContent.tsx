"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { CalendarPlus, CheckCircle2, Clock, ArrowRight, Activity, Bone, Zap, Shield } from "lucide-react";

type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl";

const REHAB_PROGRAMS = [
  {
    key: "hip",
    icon: Bone,
    color: "from-[#2b3186] to-[#1e2260]",
    iconBg: "bg-[#2b3186]/10",
    iconColor: "text-[#2b3186]",
    weeks: "6–12",
    title: {
      de: "Hüftprothese (TEP)",
      fr: "Prothèse de Hanche (PTH)",
      en: "Hip Replacement",
      nl: "Heupprothese",
      tr: "Kalça Protezi",
      ar: "بدلة الورك",
      pl: "Endoproteza biodra",
    },
    intro: {
      de: "Nach einer Hüfttotalendoprothese (TEP) ist eine strukturierte Rehabilitation entscheidend für eine schnelle und vollständige Genesung. Unser Team begleitet Sie von der ersten postoperativen Phase bis zur vollständigen Rückkehr zu Ihren Aktivitäten.",
      fr: "Après une prothèse totale de hanche (PTH), une rééducation structurée est essentielle pour une récupération rapide et complète. Notre équipe vous accompagne de la phase post-opératoire immédiate jusqu'au retour complet à vos activités.",
      en: "After a total hip replacement, structured rehabilitation is key to a fast and complete recovery. Our team guides you from the immediate post-operative phase through to full return to activities.",
      nl: "Na een totale heupprothese is gestructureerde revalidatie essentieel voor een snelle en volledige herstel. Ons team begeleidt u van de vroege postoperatieve fase tot volledige terugkeer naar activiteiten.",
      tr: "Toplam kalça protezi ameliyatından sonra, yapılandırılmış rehabilitasyon hızlı ve tam bir iyileşme için çok önemlidir. Ekibimiz sizi ameliyat sonrası erken dönemden faaliyetlere tam geri dönüşe kadar rehberlik eder.",
      ar: "بعد عملية استبدال مفصل الورك الكلي، يعد التأهيل المنظم أمرًا أساسيًا للتعافي السريع والكامل. يرافقكم فريقنا من مرحلة ما بعد العملية الفورية حتى العودة الكاملة إلى أنشطتكم.",
      pl: "Po całkowitej endoprotezie biodra ustrukturyzowana rehabilitacja jest kluczem do szybkiego i pełnego powrotu do zdrowia. Nasz zespół prowadzi Cię od wczesnej fazy pooperacyjnej do pełnego powrotu do aktywności.",
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–3", items: ["Schmerzreduktion & Ödembehandlung", "Passive & aktiv-assistierte Mobilisation", "Gangschule mit Gehhilfen", "Lymphdrainage bei Bedarf"] },
        { label: "Phase 2 — Woche 4–6", items: ["Muskelkräftigung (Hüftabduktoren, Gluteus)", "Koordination & Gleichgewicht", "Gangschulung ohne Hilfsmittel", "Treppensteigen"] },
        { label: "Phase 3 — Woche 7–12", items: ["Rückkehr zu Alltagsaktivitäten", "Sportspezifisches Training", "Sturzpräventionstraining", "Abschlussbeurteilung"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–3", items: ["Réduction de la douleur & drainage de l'œdème", "Mobilisation passive & activo-assistée", "Rééducation à la marche avec aides techniques", "Drainage lymphatique si nécessaire"] },
        { label: "Phase 2 — Semaines 4–6", items: ["Renforcement musculaire (abducteurs, fessiers)", "Coordination & équilibre", "Marche sans aide technique", "Montée/descente des escaliers"] },
        { label: "Phase 3 — Semaines 7–12", items: ["Reprise des activités quotidiennes", "Entraînement spécifique au sport", "Prévention des chutes", "Bilan de fin de rééducation"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–3", items: ["Pain reduction & oedema management", "Passive & active-assisted mobilisation", "Gait training with walking aids", "Lymphatic drainage if needed"] },
        { label: "Phase 2 — Weeks 4–6", items: ["Muscle strengthening (hip abductors, gluteus)", "Coordination & balance", "Walking without aids", "Stair climbing"] },
        { label: "Phase 3 — Weeks 7–12", items: ["Return to daily activities", "Sport-specific training", "Fall prevention training", "Final assessment"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–3", items: ["Pijnreductie & oedeembehandeling", "Passieve & actief-geassisteerde mobilisatie", "Looptraining met loophulpmiddelen", "Lymfedrainage indien nodig"] },
        { label: "Fase 2 — Weken 4–6", items: ["Spierversterking (heupabductoren, gluteus)", "Coördinatie & evenwicht", "Stappen zonder hulpmiddelen", "Traplopen"] },
        { label: "Fase 3 — Weken 7–12", items: ["Terugkeer naar dagelijkse activiteiten", "Sportspecifieke training", "Valpreventietraining", "Eindbeoordeling"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–3", items: ["Ağrı azaltma & ödem tedavisi", "Pasif & aktif-yardımlı mobilizasyon", "Yürüme eğitimi (yardımcı cihazlarla)", "Gerekirse lenf drenajı"] },
        { label: "Faz 2 — Haftalar 4–6", items: ["Kas güçlendirme (kalça abduktörleri, gluteus)", "Koordinasyon & denge", "Yardımcı cihaz olmadan yürüme", "Merdiven çıkma"] },
        { label: "Faz 3 — Haftalar 7–12", items: ["Günlük aktivitelere dönüş", "Spora özgü egzersiz", "Düşme önleme eğitimi", "Son değerlendirme"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–3", items: ["تخفيف الألم وعلاج الوذمة", "تعبئة سلبية ومساعدة نشطة", "تدريب المشي بمساعدات", "الصرف اللمفاوي عند الحاجة"] },
        { label: "المرحلة 2 — الأسابيع 4–6", items: ["تقوية العضلات (مبعدات الورك، الألوية)", "التنسيق والتوازن", "المشي بدون مساعدات", "صعود السلالم"] },
        { label: "المرحلة 3 — الأسابيع 7–12", items: ["العودة إلى الأنشطة اليومية", "تدريب رياضي محدد", "الوقاية من السقوط", "التقييم النهائي"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–3", items: ["Redukcja bólu i leczenie obrzęku", "Mobilizacja bierna i czynna-wspomagana", "Trening chodu z pomocami ortopedycznymi", "Drenaż limfatyczny w razie potrzeby"] },
        { label: "Faza 2 — Tygodnie 4–6", items: ["Wzmacnianie mięśni (odwodziciele biodra, pośladkowe)", "Koordynacja i równowaga", "Chód bez pomocy", "Wchodzenie po schodach"] },
        { label: "Faza 3 — Tygodnie 7–12", items: ["Powrót do codziennych aktywności", "Trening sportowy", "Profilaktyka upadków", "Ocena końcowa"] },
      ],
    },
  },
  {
    key: "knee",
    icon: Activity,
    color: "from-[#76b82a] to-[#5c9120]",
    iconBg: "bg-[#76b82a]/10",
    iconColor: "text-[#76b82a]",
    weeks: "8–14",
    title: {
      de: "Knieprothese (TEP)",
      fr: "Prothèse de Genou (PTG)",
      en: "Knee Replacement",
      nl: "Knieprothese",
      tr: "Diz Protezi",
      ar: "بدلة الركبة",
      pl: "Endoproteza kolana",
    },
    intro: {
      de: "Die Rehabilitation nach einer Knie-TEP erfordert konsequente Kräftigung und Mobilisation. Unser spezifisches Programm maximiert Ihre Beweglichkeit und minimiert Schmerzen für einen raschen Alltag.",
      fr: "La rééducation après une prothèse de genou exige un renforcement et une mobilisation constants. Notre programme spécifique maximise votre amplitude articulaire et minimise les douleurs pour un retour rapide au quotidien.",
      en: "Knee replacement rehabilitation requires consistent strengthening and mobilisation. Our specific programme maximises your range of motion and minimises pain for a swift return to daily life.",
      nl: "Revalidatie na een knieprothese vereist consequente versterking en mobilisatie. Ons specifiek programma maximaliseert uw bewegingsvrijheid en minimaliseert pijn voor een snel herstel.",
      tr: "Diz protezi rehabilitasyonu, tutarlı güçlendirme ve mobilizasyon gerektirir. Özel programımız hareket aralığınızı maksimize eder ve günlük hayata hızlı dönüş için ağrıyı en aza indirir.",
      ar: "تتطلب إعادة التأهيل بعد بدلة الركبة تقوية ومتحركة مستمرة. يعمل برنامجنا المتخصص على تعظيم مدى الحركة وتقليل الألم للعودة السريعة إلى الحياة اليومية.",
      pl: "Rehabilitacja po endoprotezie kolana wymaga konsekwentnego wzmacniania i mobilizacji. Nasz program maksymalizuje zakres ruchu i minimalizuje ból dla szybkiego powrotu do codziennego życia.",
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–4", items: ["Kühlung & Ödemreduktion", "Passive Knieextension & -flexion", "Isometrische Quadrizepsübungen", "Gangschule"] },
        { label: "Phase 2 — Woche 5–8", items: ["Kniebeugen (assistiert)", "Fahrradergometer (niedriger Widerstand)", "Propriozeptive Übungen", "Schwimmen erlaubt"] },
        { label: "Phase 3 — Woche 9–14", items: ["Treppensteigen beidbeinig", "Leichtes Joggen (nach Freigabe)", "Funktionelle Sportübungen", "Volle Alltagsfähigkeit"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–4", items: ["Cryothérapie & réduction de l'œdème", "Flexion/extension passive du genou", "Exercices isométriques du quadriceps", "Rééducation à la marche"] },
        { label: "Phase 2 — Semaines 5–8", items: ["Demi-squats assistés", "Vélo ergomètre (faible résistance)", "Exercices proprioceptifs", "Natation autorisée"] },
        { label: "Phase 3 — Semaines 9–14", items: ["Montée d'escaliers à deux jambes", "Jogging léger (après accord médical)", "Exercices fonctionnels sportifs", "Pleine capacité quotidienne"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–4", items: ["Cryotherapy & oedema reduction", "Passive knee flexion/extension", "Isometric quadriceps exercises", "Gait training"] },
        { label: "Phase 2 — Weeks 5–8", items: ["Assisted squats", "Cycling ergometer (low resistance)", "Proprioceptive exercises", "Swimming allowed"] },
        { label: "Phase 3 — Weeks 9–14", items: ["Two-legged stair climbing", "Light jogging (with medical clearance)", "Functional sport exercises", "Full daily capacity"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–4", items: ["Cryotherapie & oedeemreductie", "Passieve knie flexie/extensie", "Isometrische quadricepsoefeningen", "Looptraining"] },
        { label: "Fase 2 — Weken 5–8", items: ["Geassisteerde squats", "Fietsergometer (lage weerstand)", "Proprioceptieve oefeningen", "Zwemmen toegestaan"] },
        { label: "Fase 3 — Weken 9–14", items: ["Traplopen met twee benen", "Licht joggen (na medische goedkeuring)", "Functionele sportoefeningen", "Volledige dagelijkse capaciteit"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–4", items: ["Kriyoterapi & ödem azaltma", "Pasif diz fleksiyonu/ekstansiyonu", "İzometrik quadriseps egzersizleri", "Yürüme eğitimi"] },
        { label: "Faz 2 — Haftalar 5–8", items: ["Yardımlı çömelme", "Bisiklet ergometresi (düşük direnç)", "Proprioseptif egzersizler", "Yüzmeye izin verilir"] },
        { label: "Faz 3 — Haftalar 9–14", items: ["İki bacakla merdiven çıkma", "Hafif koşu (tıbbi onay ile)", "Fonksiyonel spor egzersizleri", "Tam günlük kapasite"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–4", items: ["العلاج بالبرودة وتقليل الوذمة", "ثني/مد الركبة السلبي", "تمارين الرباعية العضلة المتساوية", "تدريب المشي"] },
        { label: "المرحلة 2 — الأسابيع 5–8", items: ["قرفصاء مساعدة", "دراجة ارغومترية (مقاومة منخفضة)", "تمارين التحسس العميق", "السباحة مسموح بها"] },
        { label: "المرحلة 3 — الأسابيع 9–14", items: ["صعود السلالم بساقين", "الجري الخفيف (بموافقة طبية)", "تمارين رياضية وظيفية", "القدرة اليومية الكاملة"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–4", items: ["Krioterapia i redukcja obrzęku", "Bierne zginanie/prostowanie kolana", "Ćwiczenia izometryczne czworogłowego", "Trening chodu"] },
        { label: "Faza 2 — Tygodnie 5–8", items: ["Wspomagane przysiady", "Ergometr rowerowy (niski opór)", "Ćwiczenia proprioceptywne", "Pływanie dozwolone"] },
        { label: "Faza 3 — Tygodnie 9–14", items: ["Wchodzenie po schodach obunóż", "Lekki jogging (po zgodzie lekarskiej)", "Funkcjonalne ćwiczenia sportowe", "Pełna sprawność dzienna"] },
      ],
    },
  },
  {
    key: "acl",
    icon: Zap,
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    weeks: "9–12",
    title: {
      de: "Kreuzband (VKB)",
      fr: "Ligament Croisé (LCA)",
      en: "ACL Reconstruction",
      nl: "Voorste Kruisband",
      tr: "Ön Çapraz Bağ",
      ar: "الرباط الصليبي الأمامي",
      pl: "Więzadło Krzyżowe Przednie",
    },
    intro: {
      de: "Die Kreuzbandrehabilitation ist eine der anspruchsvollsten in der Sportphysiotherapie. Unser Programm folgt einem evidenzbasierten Stufenansatz (Return-to-Sport-Kriterien) für eine sichere Rückkehr zum Sport.",
      fr: "La rééducation après reconstruction du LCA est l'une des plus exigeantes en kinésithérapie sportive. Notre programme suit une approche progressive basée sur les preuves (critères de retour au sport) pour un retour sécurisé.",
      en: "ACL rehabilitation is one of the most demanding in sports physiotherapy. Our programme follows an evidence-based progressive approach (return-to-sport criteria) for a safe return to play.",
      nl: "VKB-rehabilitatie is een van de meest veeleisende in de sportfysiotherapie. Ons programma volgt een evidencebased gefaseerde aanpak (return-to-sport criteria) voor een veilige terugkeer naar sport.",
      tr: "ÖÇB rehabilitasyonu, spor fizyoterapisindeki en zorlu süreçlerden biridir. Programımız, güvenli bir spora dönüş için kanıta dayalı kademeli bir yaklaşımı (spora dönüş kriterleri) takip eder.",
      ar: "إعادة تأهيل الرباط الصليبي الأمامي هي من أكثر العمليات صعوبة في فيزيوتيرابيا الرياضة. يتبع برنامجنا نهجًا تدريجيًا قائمًا على الأدلة (معايير العودة إلى الرياضة) للعودة الآمنة.",
      pl: "Rehabilitacja ACL jest jedną z najbardziej wymagających w fizjoterapii sportowej. Nasz program podąża opartym na dowodach stopniowym podejściem (kryteria powrotu do sportu) dla bezpiecznego powrotu.",
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–3", items: ["Schmerz- & Schwellungsmanagement", "Volle Knieextension wiederherstellen", "Quadrizepsaktivierung (EMS optional)", "Gangschule ohne Gehhilfen"] },
        { label: "Phase 2 — Woche 4–9", items: ["Kräftigung: Squat, Leg Press, Step-up", "Neuromuskuläres Training & Propriozeption", "Laufen (gerades Laufen ab Wk. 12)", "Blood Flow Restriction (BFR) Training"] },
        { label: "Phase 3 — Woche 10+", items: ["Richtungswechsel & Sprünge", "Sport-spezifische Übungen", "Return-to-Sport-Tests (Einbeinsprünge, KTS)", "Psychologische Vorbereitung auf Return"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–3", items: ["Gestion de la douleur & de l'œdème", "Restauration de la pleine extension", "Activation du quadriceps (EMS optionnel)", "Marche sans cannes"] },
        { label: "Phase 2 — Semaines 4–9", items: ["Renforcement : squat, presse, step-up", "Travail neuromusculaire & proprioception", "Course (ligne droite dès sem. 12)", "Blood Flow Restriction (BFR)"] },
        { label: "Phase 3 — Semaine 10+", items: ["Changements de direction & sauts", "Exercices sport-spécifiques", "Tests de retour au sport (saut unipodal, KTS)", "Préparation psychologique au retour"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–3", items: ["Pain & swelling management", "Restore full knee extension", "Quadriceps activation (EMS optional)", "Walking without aids"] },
        { label: "Phase 2 — Weeks 4–9", items: ["Strengthening: squat, leg press, step-up", "Neuromuscular training & proprioception", "Running (straight line from week 12)", "Blood Flow Restriction (BFR) training"] },
        { label: "Phase 3 — Week 10+", items: ["Direction changes & jumps", "Sport-specific exercises", "Return-to-sport tests (single-leg hop, KTS)", "Psychological return-to-sport preparation"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–3", items: ["Pijn- & zwellingsmanagement", "Volledig knie-extensie herstellen", "Quadricepsactivering (EMS optioneel)", "Lopen zonder hulpmiddelen"] },
        { label: "Fase 2 — Weken 4–9", items: ["Versterking: squat, beenpers, step-up", "Neuromusculaire training & proprioceptie", "Lopen (rechte lijn vanaf week 12)", "Blood Flow Restriction (BFR) training"] },
        { label: "Fase 3 — Week 10+", items: ["Richtingsveranderingen & sprongen", "Sportspecifieke oefeningen", "Return-to-sport tests (éénbenige sprong, KTS)", "Psychologische voorbereiding"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–3", items: ["Ağrı & şişlik yönetimi", "Tam diz ekstansiyonunu geri kazanma", "Quadriseps aktivasyonu (EMS opsiyonel)", "Yardımcı cihaz olmadan yürüme"] },
        { label: "Faz 2 — Haftalar 4–9", items: ["Güçlendirme: squat, bacak presi, step-up", "Nöromüsküler antrenman & propriosepsiyon", "Koşu (hafta 12'den itibaren düz hat)", "Kan Akışı Kısıtlama (BFR) antrenmanı"] },
        { label: "Faz 3 — Hafta 10+", items: ["Yön değiştirme & sıçramalar", "Spora özgü egzersizler", "Spora dönüş testleri (tek bacak sıçrama, KTS)", "Psikolojik hazırlık"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–3", items: ["إدارة الألم والتورم", "استعادة امتداد الركبة الكامل", "تنشيط عضلة الرباعية (EMS اختياري)", "المشي بدون مساعدات"] },
        { label: "المرحلة 2 — الأسابيع 4–9", items: ["التقوية: قرفصاء، ضغط الساق، step-up", "تدريب عصبي عضلي وإحساس عميق", "الجري (خط مستقيم من الأسبوع 12)", "تدريب BFR"] },
        { label: "المرحلة 3 — الأسبوع 10+", items: ["تغيير الاتجاه والقفز", "تمارين رياضية محددة", "اختبارات العودة للرياضة", "التحضير النفسي للعودة"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–3", items: ["Zarządzanie bólem i obrzękiem", "Przywrócenie pełnego wyprostu kolana", "Aktywacja czworogłowego (EMS opcjonalnie)", "Chód bez pomocy"] },
        { label: "Faza 2 — Tygodnie 4–9", items: ["Wzmacnianie: przysiad, prasa nożna, step-up", "Trening nerwowo-mięśniowy i propriocepcja", "Bieg (linia prosta od tygodnia 12)", "Trening BFR"] },
        { label: "Faza 3 — Tydzień 10+", items: ["Zmiany kierunku i skoki", "Ćwiczenia sportowe", "Testy powrotu do sportu (skok jednonożny, KTS)", "Psychologiczne przygotowanie do powrotu"] },
      ],
    },
  },
  {
    key: "shoulder",
    icon: Shield,
    color: "from-teal-600 to-teal-800",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    weeks: "8–16",
    title: {
      de: "Schulteroperation",
      fr: "Chirurgie de l'Épaule",
      en: "Shoulder Surgery",
      nl: "Schouderoperatie",
      tr: "Omuz Ameliyatı",
      ar: "جراحة الكتف",
      pl: "Operacja barku",
    },
    intro: {
      de: "Nach Schulteroperationen (Rotatorenmanschette, Bankart, Schulterprothese) ist eine phasengerechte Rehabilitation unerlässlich. Unsere Therapeuten sind in der postoperativen Schulterrehabilitation erfahren und arbeiten eng mit Ihrem Chirurgen zusammen.",
      fr: "Après les chirurgies de l'épaule (coiffe des rotateurs, Bankart, prothèse d'épaule), une rééducation adaptée est indispensable. Nos thérapeutes sont expérimentés en rééducation post-opératoire de l'épaule et travaillent en étroite collaboration avec votre chirurgien.",
      en: "After shoulder surgery (rotator cuff, Bankart, shoulder replacement), phase-appropriate rehabilitation is essential. Our therapists are experienced in post-operative shoulder rehab and work closely with your surgeon.",
      nl: "Na schouderoperaties (rotatormanchet, Bankart, schouderprothese) is gefaseerde revalidatie essentieel. Onze therapeuten zijn ervaren in postoperatieve schoudertherapie en werken nauw samen met uw chirurg.",
      tr: "Omuz ameliyatları (rotator kaf, Bankart, omuz protezi) sonrasında aşamaya uygun rehabilitasyon şarttır. Terapistlerimiz, ameliyat sonrası omuz rehabilitasyonunda deneyimlidir ve cerrahınızla yakın işbirliği yapar.",
      ar: "بعد عمليات الكتف (كفة المدورين، Bankart، بدلة الكتف)، يعد التأهيل المناسب للمرحلة أمرًا ضروريًا. يتمتع معالجونا بخبرة في إعادة التأهيل بعد جراحة الكتف ويعملون بالتنسيق مع جراحك.",
      pl: "Po operacjach barku (stożek rotatorów, Bankart, endoproteza barku) niezbędna jest rehabilitacja dostosowana do fazy. Nasi terapeuci mają doświadczenie w pooperacyjnej rehabilitacji barku i ściśle współpracują z chirurgiem.",
    },
    phases: {
      de: [
        { label: "Phase 1 — Woche 1–4", items: ["Immobilisation respektieren", "Pendel-Übungen (passiv)", "Fingerstreckung & -beugung", "Isometrische Übungen"] },
        { label: "Phase 2 — Woche 5–8", items: ["Aktiv-assistierte Elevation", "Manuelle Techniken (Kapselmobilisation)", "Kräftigung Rotatorenmanschette", "Alltag wiederherstellen"] },
        { label: "Phase 3 — Woche 9–16", items: ["Volle Beweglichkeit anstreben", "Maximale Kräftigung", "Propriozeptive Übungen", "Sport (nach Freigabe des Chirurgen)"] },
      ],
      fr: [
        { label: "Phase 1 — Semaines 1–4", items: ["Respecter l'immobilisation", "Exercices de pendule (passifs)", "Extension/flexion des doigts", "Exercices isométriques"] },
        { label: "Phase 2 — Semaines 5–8", items: ["Élévation active-assistée", "Techniques manuelles (mobilisation capsulaire)", "Renforcement coiffe des rotateurs", "Reprise des activités quotidiennes"] },
        { label: "Phase 3 — Semaines 9–16", items: ["Viser amplitude complète", "Renforcement maximal", "Exercices proprioceptifs", "Sport (après accord du chirurgien)"] },
      ],
      en: [
        { label: "Phase 1 — Weeks 1–4", items: ["Respect immobilisation protocol", "Pendulum exercises (passive)", "Finger flexion/extension", "Isometric exercises"] },
        { label: "Phase 2 — Weeks 5–8", items: ["Active-assisted elevation", "Manual techniques (capsular mobilisation)", "Rotator cuff strengthening", "Restore daily activities"] },
        { label: "Phase 3 — Weeks 9–16", items: ["Target full range of motion", "Maximum strengthening", "Proprioceptive exercises", "Sport (with surgeon's clearance)"] },
      ],
      nl: [
        { label: "Fase 1 — Weken 1–4", items: ["Immobilisatieprotocol respecteren", "Pendeloefeningen (passief)", "Vingerbuiging/-strekking", "Isometrische oefeningen"] },
        { label: "Fase 2 — Weken 5–8", items: ["Actief-geassisteerde elevatie", "Manuele technieken (kapsel mobilisatie)", "Rotatorenmanchet versterking", "Dagelijkse activiteiten herstellen"] },
        { label: "Fase 3 — Weken 9–16", items: ["Volledige bewegingsvrijheid nastreven", "Maximale versterking", "Proprioceptieve oefeningen", "Sport (na goedkeuring chirurg)"] },
      ],
      tr: [
        { label: "Faz 1 — Haftalar 1–4", items: ["İmmobilizasyon protokolüne uymak", "Sarkaç egzersizleri (pasif)", "Parmak fleksiyon/ekstansiyonu", "İzometrik egzersizler"] },
        { label: "Faz 2 — Haftalar 5–8", items: ["Aktif-yardımlı elevasyon", "Manuel teknikler (kapsül mobilizasyonu)", "Rotator kaf güçlendirme", "Günlük aktiviteleri geri kazanma"] },
        { label: "Faz 3 — Haftalar 9–16", items: ["Tam hareket açıklığını hedefleme", "Maksimum güçlendirme", "Proprioseptif egzersizler", "Spor (cerrahın onayıyla)"] },
      ],
      ar: [
        { label: "المرحلة 1 — الأسابيع 1–4", items: ["احترام بروتوكول الشلل", "تمارين البندول (سلبية)", "ثني/مد الأصابع", "تمارين إيزومترية"] },
        { label: "المرحلة 2 — الأسابيع 5–8", items: ["رفع نشط مساعد", "تقنيات يدوية (تعبئة الكبسولة)", "تقوية كفة المدورين", "استعادة الأنشطة اليومية"] },
        { label: "المرحلة 3 — الأسابيع 9–16", items: ["استهداف مدى الحركة الكامل", "تقوية قصوى", "تمارين الإحساس العميق", "الرياضة (بموافقة الجراح)"] },
      ],
      pl: [
        { label: "Faza 1 — Tygodnie 1–4", items: ["Przestrzeganie unieruchomienia", "Ćwiczenia wahadłowe (bierne)", "Zginanie/prostowanie palców", "Ćwiczenia izometryczne"] },
        { label: "Faza 2 — Tygodnie 5–8", items: ["Aktywna-wspomagana elewacja", "Techniki manualne (mobilizacja torebki)", "Wzmacnianie stożka rotatorów", "Przywrócenie codziennych aktywności"] },
        { label: "Faza 3 — Tygodnie 9–16", items: ["Dążenie do pełnego zakresu ruchu", "Maksymalne wzmacnianie", "Ćwiczenia proprioceptywne", "Sport (za zgodą chirurga)"] },
      ],
    },
  },
];

const UI: Record<LangKey, {
  badge: string; title: string; subtitle: string; weeks: string;
  phases: string; cta: string; ctaSub: string; bookBtn: string;
}> = {
  de: { badge: "Post-Op Rehabilitation", title: "Rehabilitation nach Ihrer Operation", subtitle: "Individuelle Rehabilitationsprogramme — von der Hüft-TEP bis zur Kreuzbandrekonstruktion. Unser erfahrenes Team begleitet Sie sicher zurück zu Ihrer vollen Beweglichkeit.", weeks: "Wochen", phases: "Behandlungsphasen", cta: "Bereit für Ihre Rehabilitation?", ctaSub: "Vereinbaren Sie einen Ersttermin — wir erstellen Ihr individuelles Programm.", bookBtn: "Termin vereinbaren" },
  fr: { badge: "Rééducation Post-Op", title: "Rééducation après votre opération", subtitle: "Programmes de rééducation individualisés — de la prothèse de hanche à la reconstruction du LCA. Notre équipe expérimentée vous guide en toute sécurité vers la pleine mobilité.", weeks: "semaines", phases: "Phases de traitement", cta: "Prêt pour votre rééducation ?", ctaSub: "Prenez rendez-vous pour un bilan initial — nous créons votre programme personnalisé.", bookBtn: "Prendre rendez-vous" },
  en: { badge: "Post-Op Rehabilitation", title: "Rehabilitation after your surgery", subtitle: "Individualised rehabilitation programmes — from hip replacement to ACL reconstruction. Our experienced team guides you safely back to full mobility.", weeks: "weeks", phases: "Treatment phases", cta: "Ready for your rehabilitation?", ctaSub: "Book an initial assessment — we create your personalised programme.", bookBtn: "Book appointment" },
  nl: { badge: "Post-Op Revalidatie", title: "Revalidatie na uw operatie", subtitle: "Geïndividualiseerde revalidatieprogramma's — van heupprothese tot VKB-reconstructie. Ons ervaren team begeleidt u veilig naar volledige mobiliteit.", weeks: "weken", phases: "Behandelfasen", cta: "Klaar voor uw revalidatie?", ctaSub: "Maak een eerste afspraak — wij stellen uw gepersonaliseerd programma op.", bookBtn: "Afspraak maken" },
  tr: { badge: "Ameliyat Sonrası Rehabilitasyon", title: "Ameliyat sonrası rehabilitasyon", subtitle: "Bireyselleştirilmiş rehabilitasyon programları — kalça protezinden ÖÇB rekonstrüksiyonuna kadar. Deneyimli ekibimiz sizi tam hareketliliğe güvenle rehberlik eder.", weeks: "hafta", phases: "Tedavi fazları", cta: "Rehabilitasyonunuza hazır mısınız?", ctaSub: "Başlangıç değerlendirmesi için randevu alın — kişisel programınızı oluşturuyoruz.", bookBtn: "Randevu al" },
  ar: { badge: "تأهيل ما بعد الجراحة", title: "إعادة التأهيل بعد عمليتك", subtitle: "برامج إعادة تأهيل فردية — من بدلة الورك إلى إعادة بناء الرباط الصليبي. يرشدك فريقنا ذو الخبرة بأمان نحو التعافي الكامل.", weeks: "أسابيع", phases: "مراحل العلاج", cta: "هل أنت مستعد لإعادة التأهيل؟", ctaSub: "احجز تقييمًا أوليًا — نضع برنامجك الشخصي.", bookBtn: "حجز موعد" },
  pl: { badge: "Rehabilitacja pooperacyjna", title: "Rehabilitacja po operacji", subtitle: "Indywidualne programy rehabilitacji — od endoprotezy biodra do rekonstrukcji ACL. Nasz doświadczony zespół bezpiecznie prowadzi Cię do pełnej sprawności.", weeks: "tygodni", phases: "Fazy leczenia", cta: "Gotowy na rehabilitację?", ctaSub: "Umów wizytę wstępną — tworzymy Twój spersonalizowany program.", bookBtn: "Umów wizytę" },
};

export function RehabPageContent() {
  const locale = useLocale() as LangKey;
  const lang: LangKey = (["de", "fr", "en", "nl", "tr", "ar", "pl"].includes(locale) ? locale : "de") as LangKey;
  const ui = UI[lang];
  const isRtl = lang === "ar";

  return (
    <div className="pt-28 pb-20 min-h-screen bg-neutral-50" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#76b82a]/10 rounded-full text-[#5c9120] text-sm font-semibold mb-4">
            <Activity className="w-4 h-4" />
            {ui.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-5 tracking-tight">
            {ui.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} style={{ color: "#76b82a" }}> {word}</span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-500 leading-relaxed">
            {ui.subtitle}
          </p>
        </AnimatedSection>

        {/* Programs */}
        <StaggerContainer className="space-y-10" staggerDelay={0.12}>
          {REHAB_PROGRAMS.map((program) => {
            const phases = (program.phases as Record<LangKey, typeof program.phases.de>)[lang] ?? program.phases.de;
            const titleStr = (program.title as Record<LangKey, string>)[lang] ?? program.title.de;
            const introStr = (program.intro as Record<LangKey, string>)[lang] ?? program.intro.de;

            return (
              <StaggerItem key={program.key}>
                <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${program.color} px-8 py-6 flex items-center justify-between gap-4`}>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-extrabold text-white">{titleStr}</h2>
                        <p className="text-white/70 text-sm mt-0.5">{introStr.slice(0, 80)}…</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 hidden sm:block">
                      <div className="text-3xl font-extrabold text-white">{program.weeks}</div>
                      <div className="text-white/70 text-xs">{ui.weeks}</div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8">
                    <p className="text-neutral-600 leading-relaxed mb-8">{introStr}</p>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {ui.phases}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {phases.map((phase, pi) => (
                        <motion.div
                          key={pi}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: pi * 0.1 }}
                          className="bg-neutral-50 rounded-2xl p-5"
                        >
                          <div className={`inline-flex items-center justify-center w-8 h-8 rounded-xl mb-3 bg-gradient-to-br ${program.color}`}>
                            <span className="text-white text-xs font-bold">{pi + 1}</span>
                          </div>
                          <h4 className="font-bold text-neutral-900 text-sm mb-3">{phase.label}</h4>
                          <ul className="space-y-1.5">
                            {phase.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-2 text-xs text-neutral-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#76b82a] flex-shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="bg-gradient-to-br from-[#2b3186] to-[#0d1120] rounded-3xl p-10 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">{ui.cta}</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">{ui.ctaSub}</p>
            <Link
              href="/termin"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#76b82a] hover:bg-[#5c9120] text-white rounded-2xl font-bold text-lg transition-all hover:scale-[1.03]"
            >
              <CalendarPlus className="w-5 h-5" />
              {ui.bookBtn}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
