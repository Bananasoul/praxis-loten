---
title: "Architecture du projet"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/architecture]
aliases: [architecture, structure]
related: ["[[02_STACK]]", "[[04_I18N]]", "[[06_BLOG_SYSTEM/_MOC]]"]
---

# Architecture du projet

## Arborescence des routes

Toutes les routes sont sous `/[locale]/` (next-intl, `localePrefix: 'always'`).

```
/[locale]/                    → Homepage
/[locale]/blog/               → Blog listing
/[locale]/blog/[slug]         → Article (9 publiés)
/[locale]/team/               → Equipe
/[locale]/team/[slug]         → Profil thérapeute
/[locale]/leistungen/         → Services (listing)
/[locale]/leistungen/[slug]   → Service (détail)
/[locale]/rehabilitation/     → Rééducation (listing)
/[locale]/rehabilitation/[slug] → Rééducation (détail)
/[locale]/termin              → Prise de rendez-vous
/[locale]/praxis              → Le cabinet
/[locale]/honoraires          → Tarifs
/[locale]/jobs                → Offres d'emploi
/[locale]/legal               → Mentions légales (hardcodé 7 langues)
/[locale]/privacy             → Politique de confidentialité
/[locale]/cookies             → Politique cookies
```

## Layouts

| Fichier | Role |
|---------|------|
| `src/app/layout.tsx` | Root layout : GA4, fonts, CSS global |
| `src/app/[locale]/layout.tsx` | Locale layout : Header, Footer, `title.template: "%s \| Praxis Loten"` |

## Composants pages (client-side)

Le contenu de chaque page est dans un composant `*PageContent.tsx` marque `"use client"` :

| Fichier | Contenu |
|---------|---------|
| `BlogArticlePageContent.tsx` | Objet `ARTICLES` (9 articles), `renderMarkdown`, renderer complet |
| `BlogPageContent.tsx` | Liste des articles (slugs, excerpts, tags) |
| `TeamPageContent.tsx` | Tableau `TEAM` (5 membres), donnees biographiques |
| `TherapistPageContent.tsx` | Profil individuel d'un therapeute |
| `LeistungenPageContent.tsx` | Services proposes |
| `RehabPageContent.tsx` | Programmes de reeducation |

→ Pas de CMS : tout le contenu est dans ces fichiers → [[ADR-003-contenu-hardcode]]

## Structure fichiers cle

```
src/
├── app/[locale]/          ← Routes (page.tsx + layout.tsx)
├── components/
│   ├── blog/Infographics.tsx  ← 12 composants infographiques
│   ├── layout/Header.tsx      ← Navigation
│   ├── layout/Footer.tsx      ← Pied de page
│   ├── pages/*PageContent.tsx ← Contenu des pages
│   └── ui/                    ← AnimatedSection, CountUp, SafeEmail
├── i18n/routing.ts            ← Config locales
messages/                      ← Traductions UI (de.json, fr.json, ...)
public/
├── avatars/                   ← Photos equipe
├── blog/                      ← Images articles (hero.jpg, section-X.jpg)
└── logos/                     ← Logos cabinet
```
