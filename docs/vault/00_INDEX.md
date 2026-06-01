---
title: "Index — Vault Praxis Loten"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/moc]
aliases: [index, sommaire]
related: ["[[99_HANDOFF_LLM]]"]
---

# Index — Vault Praxis Loten

> [!info] Point d'entree
> Nouveau sur le projet ? Commence par [[99_HANDOFF_LLM]].

## Vision et contexte

- [[01_VISION]] — Raison d'etre, public cible, KPI
- [[11_GLOSSARY]] — Jargon metier et projet

## Architecture technique

- [[02_STACK]] — Next.js 16.x, libs, versions figees
- [[03_ARCHITECTURE]] — Routes, layouts, structure fichiers
- [[04_I18N]] — Strategie 7 langues, fallback, routing
- [[05_SEO]] — SEO local Eupen, GA4, schema.org
- [[08_DEPLOYMENT]] — Vercel, DNS, workflow de deploiement

## Systeme blog

- [[06_BLOG_SYSTEM/_MOC]] — Sommaire du sous-dossier
  - [[workflow-loten-copy-ebp]] — Workflow 4 etapes
  - [[editorial-rules]] — Anti-nocebo, biopsychosocial, Vancouver
  - [[article-template]] — Structure ArticleContent + renderMarkdown
  - [[categories-authors]] — Auteurs, categories, articles publies
  - [[infographics]] — 12 composants reutilisables

## Conformite

- [[07_LEGAL_COMPLIANCE]] — RGPD, pub medicale BE, mentions legales

## Decisions

- [[09_DECISIONS/_MOC]] — Index des ADR
  - [[ADR-001-nextjs16]] — Choix Next.js 16
  - [[ADR-002-7-langues]] — Choix 7 langues
  - [[ADR-003-contenu-hardcode]] — Contenu dans TSX, pas de CMS
  - [[ADR-004-anti-nocebo-strict]] — Politique anti-nocebo stricte
  - [[ADR-005-infographies-reutilisables]] — Composants InfographicKind
  - [[ADR-006-vibecoding-workflow]] — Workflow Windsurf + Claude Code

## Roadmap et handoff

- [[10_ROADMAP]] — Prochaines etapes
- [[99_HANDOFF_LLM]] — Resume executif pour LLM externe
