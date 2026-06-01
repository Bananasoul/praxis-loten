---
title: "ADR-003 : Contenu hardcode dans TSX"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/contenu]
aliases: [ADR-003]
related: ["[[03_ARCHITECTURE]]", "[[04_I18N]]", "[[article-template]]"]
---

# ADR-003 : Contenu hardcode dans TSX

## Contexte

Le site a un seul editeur (Philippe Banaszak) qui travaille exclusivement via Claude Code (vibecoding). Il n'y a pas d'equipe editoriale separee ni de besoin de preview WYSIWYG.

## Decision

Stocker tout le contenu (articles, bios, services) directement dans les composants TypeScript sous forme de `Record<LangKey, string>`, sans CMS.

## Consequences

- ✅ Zero dependance externe (pas de Sanity, Contentful, Strapi)
- ✅ Typage fort : TypeScript garantit que les 7 langues sont presentes
- ✅ Pas de latence API : tout est compile en SSG
- ✅ Versionne avec le code (Git)
- ⚠ Pas de preview WYSIWYG : il faut builder pour voir le rendu
- ⚠ Fichiers volumineux (`BlogArticlePageContent.tsx` fait ~1800 lignes)
- ⚠ Un seul editeur possible (celui qui a acces au code)
- 🔗 Livraison via 3 code-fences → [[article-template]]

## Alternatives considerees

- **CMS headless (Sanity/Contentful)** : surcout mensuel, complexite d'integration, perte de controle anti-nocebo
- **Fichiers MDX** : possible mais pas de typage fort sur les 7 langues, plus de fichiers a gerer
- **Base de donnees (Supabase)** : overhead pour un site vitrine statique
