---
title: "Handoff LLM — Briefing projet praxisloten.be"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/handoff]
aliases: [handoff, briefing-llm]
related: ["[[00_INDEX]]", "[[01_VISION]]", "[[02_STACK]]", "[[03_ARCHITECTURE]]"]
---

# Handoff LLM — Briefing projet praxisloten.be

> [!tip] Ce document est le point d'entree pour tout LLM externe
> Lis-le en premier. Il resume l'essentiel du projet en ~300 mots. Chaque section renvoie vers la note detaillee.

## Le projet en bref

**Praxis Loten** est un cabinet de kinesitherapie a **Eupen** (Belgique germanophone). Le site [praxisloten.be](https://www.praxisloten.be) est une **vitrine multilingue** presentant l'equipe, les competences, un blog EBP et la prise de rendez-vous.

## Stack technique → [[02_STACK]]

- **Next.js 16.2.3** (App Router, Turbopack), React 19.2.4, TypeScript 5
- **next-intl 4.9.1** pour 7 langues : `de` (defaut), `fr`, `en`, `nl`, `tr`, `ar`, `pl` → [[04_I18N]]
- Tailwind CSS 4, Framer Motion 12, Lucide React
- Hebergement **Vercel**, domaine GoDaddy → [[08_DEPLOYMENT]]
- GA4 : `G-T94F58H1XV` → [[05_SEO]]

## Architecture → [[03_ARCHITECTURE]]

- Routes : `/[locale]/blog/[slug]`, `/[locale]/team/[slug]`, `/[locale]/leistungen/[slug]`, etc.
- Contenu **hardcode** dans les composants TSX (`Record<LangKey, string>`), pas de CMS → [[ADR-003-contenu-hardcode]]
- Donnees equipe dans `TeamPageContent.tsx`, blog dans `BlogArticlePageContent.tsx`

## Blog (9 articles publies) → [[06_BLOG_SYSTEM/_MOC]]

- Workflow **Loten Copy-EBP v2** en 4 etapes → [[workflow-loten-copy-ebp]]
- Regles strictes : **anti-nocebo** (mots bannis en 7 langues), biopsychosocial, Vancouver 3-6 refs, SEO local Eupen ≥2x, conformite pub medicale BE → [[editorial-rules]]
- Architecture article : intro + 6 sections fixes (mythe → au cabinet 4 piliers) → [[article-template]]
- 12 composants infographiques reutilisables → [[infographics]]
- Livraison : 3 code-fences (article, listing, prompts Midjourney)

## Equipe (5 therapeutes)

| Slug | Nom | Specialite principale |
|------|-----|-----------------------|
| `philippe-banaszak` | Philippe Banaszak | Therapie manuelle IFOMPT (gerant) |
| `felix-esser` | Felix Esser | Kine generale + osteopathie |
| `fabienne-dormann` | Fabienne Dormann | Drainage lymphatique, ATM/CMD |
| `thom-petit` | Thom Petit | Sport, Running Clinic, BFR |
| `loic-meunier` | Loic Meunier | Kine generale, osteopathie |

→ Details dans [[categories-authors]]

## Decisions cles → [[09_DECISIONS/_MOC]]

Les choix structurants sont documentes en ADR (Architecture Decision Records) dans le dossier `09_DECISIONS/`.

## Workflow de maintenance

Le proprietaire (Philippe Banaszak) code via **vibecoding** (Windsurf + Claude Code). Le fichier `CLAUDE.md` a la racine du repo contient les regles permanentes pour tout LLM intervenant sur le projet.
