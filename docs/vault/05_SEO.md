---
title: "SEO et Analytics"
created: 2026-05-20
last_validated: 2026-09-05
status: stable
tags: [projet/loten, domaine/seo]
aliases: [seo, analytics, ga4]
related: ["[[04_I18N]]", "[[06_BLOG_SYSTEM/_MOC]]", "[[08_DEPLOYMENT]]"]
---

# SEO et Analytics

## Strategie SEO locale

L'objectif est de se positionner sur les recherches locales liees a la kinesitherapie a Eupen et environs.

**Mots-cles cibles** : kinesitherapie Eupen, therapie manuelle Eupen, osteopathie Eupen, physiotherapie Eupen, Krankengymnastik Eupen.

**Regles pour le blog** :
- « Eupen » mentionne **≥2 fois** par langue et par article (titre, intro, section finale)
- Mots-cles locaux dans les titres H1 et meta descriptions

## Metadata

Chaque page a un `generateMetadata` avec :
- `title.template` : `"%s | Praxis Loten"` (dans le locale layout)
- Titres specifiques par locale (le titre allemand pour `/de/`, francais pour `/fr/`, etc.)

## Google Analytics 4

| Champ | Valeur |
|-------|--------|
| Measurement ID | `G-F58GSSFKQ0` |
| Implementation | `@next/third-parties/google` → `<GoogleAnalytics>` dans `src/app/layout.tsx` |

## Schema.org

Le balisage Schema.org (JSON-LD) est implémenté :
- `MedicalClinic` pour la clinique ;
- `Article` et `MedicalWebPage` pour les contenus editoriaux ;
- `FAQPage` pour les pages de questions frequentes.

Il reste à valider ces données structurées en production, ainsi que les canonicals et les liens `hreflang` après chaque déploiement.

## Cockpit acquisition

Le tableau de bord Codex `praxis-loten-acquisition.canvas.tsx` réunit GA4, Search Console et Google Business Profile/Maps. Il est rafraîchi à la demande et distingue strictement utilisateurs, sessions, clics et actions de contact.

Propriété GA4 de référence : `p539934309` (« Praxis Loten »), identifiant de mesure `G-F58GSSFKQ0`. La détection `page_language` doit encore intégrer `uk`, `es` et `ku` avant toute analyse fiable de ces trois langues.

## Sitemap

Next.js genere automatiquement un sitemap via le SSG. Toutes les pages statiques sont incluses avec leurs variantes locales et leurs liens `hreflang` par URL ; les alternates sont egalement construits par URL. La date `lastModified` du sitemap correspond encore a la date de build, et non a la date de modification reelle des pages.
