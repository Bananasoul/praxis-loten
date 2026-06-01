---
title: "SEO et Analytics"
created: 2026-05-20
last_validated: 2026-05-20
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
| Measurement ID | `G-T94F58H1XV` |
| Implementation | `@next/third-parties/google` → `<GoogleAnalytics>` dans `src/app/layout.tsx` |

## Schema.org

> [!warning] Etat reel
> Il n'y a **pas encore** de balisage schema.org (JSON-LD) sur le site. C'est un chantier prevu dans la [[10_ROADMAP]].
>
> Schemas a implementer a terme :
> - `LocalBusiness` (page d'accueil)
> - `Article` (pages blog)
> - `MedicalBusiness` (specialisation)

## Sitemap

Next.js genere automatiquement un sitemap via le SSG. Toutes les pages statiques sont incluses avec leurs variantes locales.
