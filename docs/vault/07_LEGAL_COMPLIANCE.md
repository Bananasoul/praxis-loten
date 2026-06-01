---
title: "Conformite legale"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, domaine/legal]
aliases: [legal, rgpd, compliance]
related: ["[[editorial-rules]]", "[[04_I18N]]"]
---

# Conformite legale

## RGPD

- **Cadre** : EU 2016/679 + Loi belge du 30 juillet 2018
- **Pages dediees** (hardcodees en 7 langues dans les composants page.tsx) :
  - `src/app/[locale]/legal/page.tsx` — Mentions legales
  - `src/app/[locale]/privacy/page.tsx` — Politique de confidentialite
  - `src/app/[locale]/cookies/page.tsx` — Politique cookies
- **Cookies** : seul GA4 est present, pas de cookies tiers

## Publicite medicale belge

Les contenus du site doivent respecter la reglementation belge sur la publicite des professions de sante :

- **Interdit** : promesses de guerison absolues (« guerison garantie », « 100% de reussite », « guerison definitive »)
- **Preferer** : « soulager », « ameliorer la fonction », « retrouver la confiance », « accompagner »
- **Obligatoire** : mention « parmi de nombreuses approches » si on liste des prises en charge
- **Disclaimer medical** en fin de chaque article de blog

### Formulation type du disclaimer

> Cet article a une vocation informative et ne remplace pas une consultation medicale. Consultez un professionnel de sante pour tout probleme medical.

## Identification du cabinet

| Champ | Valeur |
|-------|--------|
| Denomination | Praxis Loten |
| Adresse | Loten 1, B-4700 Eupen, Belgique |
| INAMI | 5-39936-63-527 |
| Telephone | +32 87 55 56 70 |
| Email | praxisloten@gmail.com |
| Responsable | Philippe Banaszak |

## Impact sur le contenu

→ Les regles anti-nocebo ([[editorial-rules]]) et la conformite pub medicale sont appliquees a chaque article via la checklist du [[workflow-loten-copy-ebp]].
