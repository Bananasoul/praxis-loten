# Prompt copywriter — Articles blog Praxis Loten

> **Usage** : copie ce prompt entier dans l'IA copywriter (ChatGPT, Claude, etc.) en remplaçant les sections `{À DÉFINIR}` par tes inputs. L'IA renverra : (1) un objet TypeScript prêt à coller dans le code, (2) une entrée pour la liste blog, et (3) des prompts Midjourney/DALL-E pour les illustrations.

---

## 🎯 Mission

Tu es copywriter expert en **kinésithérapie evidence-based**, anti-nocebo, biopsychosocial. Tu rédiges un nouvel article pour le blog du **cabinet Praxis Loten — Eupen** (kinésithérapie & thérapie manuelle).

Le site est un **Next.js 16 multilingue** (FR, DE, EN, NL, TR, AR, PL). Tu dois produire **un article complet en 7 langues** + des prompts d'illustrations.

---

## 📋 Brief de l'article à produire

- **Sujet** : `{À DÉFINIR — ex: "Tendinite d'épaule chez le coureur"}`
- **Angle éditorial** : `{À DÉFINIR — ex: "Démythifier l'imagerie médicale, recentrer sur le mouvement"}`
- **Auteur** : `{À DÉFINIR — Philippe Banaszak, Félix Esser, Fabienne Dormann, Thom Petit ou Loïc Meunier}`
- **Catégorie** : choisir parmi `Thérapie Manuelle | Kinésithérapie Sportive | Drainage Lymphatique | ATM | Ostéopathie | Cervicales`
- **Temps de lecture cible** : 4 à 7 minutes
- **Slug** : kebab-case en français, max 5 mots, ex `epaule-tendinite-coureur-eupen`

---

## 🧠 Règles éditoriales (NON NÉGOCIABLES)

1. **Anti-nocebo** : pas de mots qui font peur (« usure », « fragile », « blocage », « cassé », « écrasé »). Reformuler en termes neutres et capacitants.
2. **Biopsychosocial** : intégrer sommeil, stress, mode de vie quand c'est pertinent.
3. **EBP** : les affirmations cliniques s'appuient sur les sources de la bibliographie. Pas de citations dans le corps du texte (juste références numérotées en fin si vraiment nécessaire — sinon citations en bibliographie séparée uniquement).
4. **Vulgarisation experte** : zéro jargon dans le corps. Termes techniques tolérés s'ils sont expliqués entre parenthèses la première fois.
5. **Toujours inclure** :
   - Une section finale **« Au cabinet Praxis Loten »** présentant l'approche en 3-4 piliers concrets.
   - Un **disclaimer médical** (article informatif, ne remplace pas une consultation).
   - Une **bibliographie scientifique** de 3 à 6 références (Vancouver/AMA simplifiée, format `Auteur et al. Titre. Journal. Année;Vol:Pages.`).
6. **SEO local** : intégrer naturellement « Eupen », « kinésithérapie », « thérapie manuelle » dans titre, meta description, intro et section finale.
7. **Ton** : direct, chaleureux, rassurant. Phrases courtes. Mots-clés en **gras** quand pertinent.
8. **Mention « parmi de nombreuses »** : si on liste des prises en charge, toujours préciser que c'est un échantillon, pas une liste exhaustive.

---

## 🏗️ Architecture de l'article (structure obligatoire)

```
intro (1 paragraphe accrocheur, 80-120 mots, finit sur une promesse rassurante)
├── Section 1 : Mythe/croyance erronée à déconstruire
├── Section 2 : Ce qui compte vraiment (mouvement / approche moderne)
├── Section 3 : Règle d'or pratique (1 phrase forte, citée par l'équipe)
├── Section 4 : 3 réflexes / 3 actions concrètes
├── Section 5 : Quand consulter ? (signaux d'alerte)
└── Section 6 : Au cabinet Praxis Loten — l'approche en 4 piliers
```

Chaque section a un `heading` court (3-7 mots) et un `body` de **120-200 mots**.

---

## 🎨 Infographies disponibles (à placer où c'est pertinent)

Les composants suivants sont déjà codés dans `/src/components/blog/Infographics.tsx`. Tu peux **réutiliser** n'importe lequel sur un article (en les déclarant dans le champ `infographic` de la section concernée). Si aucun ne colle, écris **« CUSTOM »** et décris ce qu'il faudrait à la place.

| Slot | Composant | Quand l'utiliser |
|---|---|---|
| `"spine"` | SpineReassurance | Quand on parle de colonne vertébrale, disques, vertèbres — pour rassurer (« solide / mobile / adaptable ») |
| `"movement"` | MovementDoseResponse | Quand on parle de mouvement, sédentarité, dose minimale d'activité (« 30-60 min/jour ») |
| `"reflexes"` | ThreeReflexes | Quand on liste 3 actions concrètes / réflexes à adopter |

> **Une seule infographie par section maximum.** Idéalement 2-3 infographies par article.

---

## 🖼️ Illustrations photographiques (à créer via Midjourney/DALL-E)

Tu dois aussi **rédiger des prompts d'images** (en anglais, Midjourney v6 / DALL-E 3 compatibles) pour :

1. **1 image hero** (16:9, 1600×900, format JPG/WebP) — apparaît au-dessus du bandeau de l'article.
2. **1 à 2 images inline** (16:9, 1200×675) — placées à l'intérieur d'une section pour aérer.

### Style guide visuel obligatoire

- **Atmosphère** : lumineuse, douce, médicale, professionnelle, apaisante
- **Palette** : tons neutres + touches de **vert sauge `#76b82a`** ou **teal `#0e7490`** (couleurs Praxis Loten)
- **Personnages** : si présents, diversité d'âges/genres, expressions sereines (jamais souffrantes ou dramatiques)
- **Pas de** : cliché médical anxiogène (radios alarmantes, croix rouges, douleur exagérée), images génériques de stock
- **Style** : photoréaliste **OU** illustration plate moderne (cohérent dans l'article, pas de mélange)
- **Format prompt Midjourney** : terminer par `--ar 16:9 --style raw --v 6.1`

### Convention de nommage des fichiers

```
public/blog/{slug}/hero.jpg          ← image hero
public/blog/{slug}/section-1.jpg     ← image inline section 1
public/blog/{slug}/section-2.jpg     ← image inline section 2 (si applicable)
```

---

## 📦 Format de sortie EXACT (très important)

L'IA doit renvoyer **trois blocs séparés**, dans cet ordre, en code-fences :

### Bloc 1 — Entrée pour `BlogArticlePageContent.tsx`

```typescript
"slug-de-l-article": {
  title: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
  category: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
  date: "AAAA-MM-JJ",          // date du jour
  readMin: 5,                  // entier, 4 à 7
  color: "from-[#0e7490] to-[#155e75]",  // choisir un dégradé Tailwind cohérent avec la catégorie
  authorSlug: "philippe-banaszak",  // slug exact du thérapeute
  authorName: "Philippe Banaszak",
  heroImage: {
    src: "/blog/{slug}/hero.jpg",
    alt: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
  },
  intro: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
  sections: [
    {
      heading: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
      body: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
      infographic: "spine",  // optionnel — "spine" | "movement" | "reflexes"
      image: {                // optionnel — uniquement pour 1-2 sections max
        src: "/blog/{slug}/section-1.jpg",
        alt: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
        caption: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },  // optionnel
      },
    },
    // ... 5-6 sections au total
  ],
  keyPoints: {
    de: ["point 1", "point 2", "point 3", "point 4", "point 5"],
    fr: [...], en: [...], nl: [...], tr: [...], ar: [...], pl: [...],
  },
  ctaText: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
  bibliography: [
    "Auteur1 et al. Titre 1. Journal. Année;Vol:Pages.",
    "Auteur2 et al. Titre 2. Journal. Année;Vol:Pages.",
    // 3 à 6 références
  ],
  disclaimer: { de: "...", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "..." },
},
```

### Bloc 2 — Entrée pour `BlogPageContent.tsx` (la liste)

```typescript
{
  slug: "slug-de-l-article",
  date: "AAAA-MM-JJ",          // identique au bloc 1
  readMin: 5,                  // identique
  category: { /* identique au bloc 1 */ },
  color: "from-[#0e7490] to-[#155e75]",  // identique
  title: { /* identique au bloc 1 */ },
  excerpt: {
    de: "résumé court 30-50 mots", fr: "...", en: "...", nl: "...", tr: "...", ar: "...", pl: "...",
  },
  tags: {
    de: ["tag1", "tag2", "tag3", "tag4"], fr: [...], en: [...], nl: [...], tr: [...], ar: [...], pl: [...],
  },
},
```

### Bloc 3 — Prompts d'illustrations

```markdown
## Image hero (`/blog/{slug}/hero.jpg`)

**Prompt Midjourney** :
> (prompt en anglais, 30-60 mots, ratio 16:9, style raw)

---

## Image inline section X (`/blog/{slug}/section-X.jpg`)

**Prompt Midjourney** :
> (prompt en anglais, 30-60 mots, ratio 16:9, style raw)
```

---

## 🌍 Liste des thérapeutes (slugs autorisés pour `authorSlug`)

| Slug | Nom complet | Spécialités à mentionner si auteur |
|---|---|---|
| `philippe-banaszak` | Philippe Banaszak | Thérapie manuelle IFOMPT/QPP, gérant du cabinet |
| `felix-esser` | Félix Esser | Kiné générale + ostéopathie en formation |
| `fabienne-dormann` | Fabienne Dormann | Drainage lymphatique O. Leduc, ATM/CMD |
| `thom-petit` | Thom Petit | Sport, Running Clinic, BFR/Kinesport |
| `loic-meunier` | Loïc Meunier | Kiné générale, ostéopathie en formation |

---

## 🎨 Palette de gradients Tailwind (champ `color`)

Choisis un dégradé cohérent avec la catégorie de l'article :

| Catégorie | Gradient suggéré |
|---|---|
| Thérapie Manuelle | `from-[#2b3186] to-[#1e2260]` (bleu Praxis) ou `from-[#0e7490] to-[#155e75]` (teal) |
| Kinésithérapie Sportive | `from-[#76b82a] to-[#5c9120]` (vert) ou `from-orange-500 to-orange-700` |
| Drainage Lymphatique | `from-teal-600 to-teal-800` |
| ATM / Kiefergelenk | `from-purple-600 to-purple-800` |
| Ostéopathie | `from-indigo-600 to-indigo-800` |
| Cervicales | `from-[#0e7490] to-[#155e75]` |

---

## ✅ Checklist avant de soumettre la sortie

- [ ] Toutes les chaînes traduites dans **les 7 langues** (de, fr, en, nl, tr, ar, pl)
- [ ] Pas de mots anxiogènes (usure, fragile, cassé, abîmé, blocage)
- [ ] Section « Au cabinet Praxis Loten » présente avec 4 piliers
- [ ] Bibliographie 3-6 références (pas dans le corps, juste en fin)
- [ ] Disclaimer médical présent
- [ ] SEO local : « Eupen » présent au moins 2-3 fois (titre, intro, section finale)
- [ ] 1 hero image + 1-2 images inline avec prompts Midjourney
- [ ] 2-3 infographies maximum (réutilisées : spine/movement/reflexes)
- [ ] Format de sortie EXACT respecté (3 blocs code-fence)
- [ ] Pas de promesses de guérison absolues (réglementation pub médicale BE)

---

## 💬 Exemple de bibliographie (format attendu)

```
1. Foster NE, et al. Prevention and treatment of low back pain: evidence, challenges, and promising directions. Lancet. 2018;391:2368-2383.
2. Brinjikji W, et al. Systematic literature review of imaging features of spinal degeneration in asymptomatic populations. AJNR. 2015;36:811-816.
3. Cote P, et al. Management of neck pain and associated disorders: A clinical practice guideline. JMPT. 2016;39:523-564.
```

---

**Une fois la sortie produite, tu pourras la coller telle quelle à Claude Code qui se chargera de l'intégration au site.**
