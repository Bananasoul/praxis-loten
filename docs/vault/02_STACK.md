---
title: "Stack technique"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/architecture, domaine/stack]
aliases: [stack, tech-stack]
related: ["[[03_ARCHITECTURE]]", "[[08_DEPLOYMENT]]", "[[ADR-001-nextjs16]]"]
---

# Stack technique

## Versions figees (mai 2026)

> [!warning] Regle
> Si une version majeure change, creer une ADR dans [[09_DECISIONS/_MOC]] et mettre a jour cette note.

| Dependance | Version | Role |
|------------|---------|------|
| `next` | ^16.2.3 | Framework (App Router, Turbopack) |
| `react` / `react-dom` | 19.2.4 | UI |
| `next-intl` | ^4.9.1 | i18n 7 langues → [[04_I18N]] |
| `tailwindcss` | ^4 | Styling utility-first |
| `@tailwindcss/postcss` | ^4 | Integration PostCSS |
| `framer-motion` | ^12.38.0 | Animations (AnimatedSection, etc.) |
| `lucide-react` | ^1.8.0 | Icones |
| `lenis` | ^1.3.21 | Smooth scroll |
| `class-variance-authority` | ^0.7.1 | Variants de classes |
| `clsx` / `tailwind-merge` | ^2.1.1 / ^3.5.0 | Merge de classes |
| `@next/third-parties` | ^16.2.6 | GA4 integration |
| `typescript` | ^5 | Typage |
| `eslint` + `eslint-config-next` | ^9 / 16.2.3 | Linting |

## Dependances absentes notables

- **Pas de CMS** (contenu hardcode) → [[ADR-003-contenu-hardcode]]
- **Pas de base de donnees**
- **Pas de backend API** (site 100% SSG)
- **Pas de testing framework** (ni Jest, ni Playwright)
- **Pas de CI/CD** (deploiement manuel via Vercel CLI) → [[08_DEPLOYMENT]]

## Commandes cles

```bash
# Dev local
npx next dev          # Turbopack, port 3000

# Build
npx next build        # SSG, genere .next/

# Deploy
npx vercel deploy --prod --yes
```
