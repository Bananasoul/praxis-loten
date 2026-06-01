---
title: "ADR-005 : Infographies reutilisables"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/contenu]
aliases: [ADR-005]
related: ["[[infographics]]", "[[article-template]]"]
---

# ADR-005 : Infographies reutilisables

## Contexte

Les articles de blog beneficient de visuels pedagogiques (echelle de douleur, anatomie rassurante, checklists). Creer des images statiques pour chaque article est couteux et non-i18n.

## Decision

Creer des **composants React reutilisables** (`InfographicKind`) dans `Infographics.tsx`, selectionnes via un champ `infographic` dans chaque section d'article.

## Consequences

- ✅ i18n natif : chaque composant s'adapte a la langue courante
- ✅ Coherence visuelle entre les articles
- ✅ Maintenabilite : un seul fichier a modifier pour changer le design
- ✅ 12 composants couvrent la majorite des besoins
- ⚠ Contenu partiellement hardcode dans certains composants (ex: ThreeReflexes)
- ⚠ Risque de reutilisation inappropriee si le slot ne correspond pas au contenu de la section
- 🔗 Convention CUSTOM pour les cas non couverts → [[infographics]]

## Alternatives considerees

- **Images statiques Midjourney** : pas d'i18n, cout de generation eleve, poids fichiers
- **Bibliotheque de charts (Recharts, Chart.js)** : trop generique, pas le bon style editorial
