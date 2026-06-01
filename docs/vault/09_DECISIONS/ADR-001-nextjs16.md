---
title: "ADR-001 : Next.js 16 App Router"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/stack]
aliases: [ADR-001]
related: ["[[02_STACK]]", "[[03_ARCHITECTURE]]"]
---

# ADR-001 : Next.js 16 App Router

## Contexte

Le site Praxis Loten est une vitrine multilingue pour un cabinet de kinesitherapie. Il doit etre rapide, SEO-friendly, et facile a maintenir par un non-developpeur via LLM.

## Decision

Utiliser **Next.js 16** avec l'**App Router** et **Turbopack** comme framework principal.

## Consequences

- ✅ SSG natif : toutes les pages sont pre-rendues, performance optimale
- ✅ Ecosysteme React mature : composants, librairies, support LLM excellent
- ✅ Integration next-intl v4 eprouvee pour le multilingue
- ✅ Turbopack accelere le dev local
- ⚠ Mises a jour Next.js frequentes : suivre les breaking changes
- ⚠ App Router encore en evolution (certaines API peuvent changer)

## Alternatives considerees

- **Astro** : plus leger pour du contenu statique, mais ecosysteme React moins mature, integration i18n moins eprouvee
- **WordPress** : trop lourd, pas de controle fin sur le code, securite a gerer
- **Gatsby** : en perte de vitesse, moins de support communautaire
