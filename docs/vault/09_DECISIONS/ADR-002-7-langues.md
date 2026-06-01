---
title: "ADR-002 : 7 langues"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/i18n]
aliases: [ADR-002]
related: ["[[04_I18N]]", "[[02_STACK]]"]
---

# ADR-002 : 7 langues

## Contexte

Eupen est situe en Communaute germanophone de Belgique. Le cabinet dessert une population diverse : germanophones, francophones, mais aussi des communautes turque, arabe et polonaise. Un site bilingue DE/FR ne couvrirait pas ces patients.

## Decision

Supporter **7 langues** : `de` (defaut), `fr`, `en`, `nl`, `tr`, `ar`, `pl`, via **next-intl v4**.

## Consequences

- ✅ Accessibilite maximale pour la patientele locale
- ✅ Differenciateur concurrentiel (aucun concurrent local n'a 7 langues)
- ✅ SEO multilingue (1 URL par langue)
- ⚠ Cout de traduction x7 pour chaque nouveau contenu
- ⚠ Pas de fallback automatique : chaque cle doit exister dans les 7 langues
- ⚠ Audit anti-nocebo necessaire dans toutes les langues → [[ADR-004-anti-nocebo-strict]]
- 🔗 Chaque article de blog doit etre livre avec les 7 traductions → [[workflow-loten-copy-ebp]]

## Alternatives considerees

- **2 langues (DE/FR)** : insuffisant pour les communautes minoritaires
- **CMS headless avec traduction automatique** : surcout, perte de controle sur le vocabulaire anti-nocebo
- **3 langues (DE/FR/EN)** : meilleur compromis mais exclut les communautes locales
