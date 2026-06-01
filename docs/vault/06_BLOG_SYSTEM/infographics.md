---
title: "Infographies reutilisables"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, domaine/contenu, type/composants]
aliases: [infographics, infographies]
related: ["[[article-template]]", "[[editorial-rules]]", "[[ADR-005-infographies-reutilisables]]"]
---

# Infographies reutilisables

## Fichier source

`src/components/blog/Infographics.tsx` — export type `InfographicKind` + fonction `InfographicSlot`.

## Les 12 InfographicKind

| Slot | Composant | Usage |
|------|-----------|-------|
| `"spine"` | SpineReassurance | Colonne vertebrale, disques — rassurer (solide / mobile / adaptable) |
| `"movement"` | MovementDoseResponse | Dose minimale d'activite (30-60 min/jour) |
| `"reflexes"` | ThreeReflexes | 3 actions concretes / reflexes a adopter (position assise) |
| `"traffic-light"` | TrafficLightPain | Echelle douleur 0-10, feux tricolores |
| `"pain-alarm"` | PainAlarm | Alarme vs lesion, sensibilite du systeme |
| `"imaging-myth"` | ImagingMyth | Demystification imagerie (IRM ≠ verite) |
| `"manual-therapy-pillars"` | ManualTherapyPillars | 4 piliers de prise en charge |
| `"progression-rule"` | ProgressionRule | Regle de progression (charge, volume) |
| `"lymph-flow"` | LymphFlow | Circuit lymphatique, drainage |
| `"cmd-checklist"` | CmdChecklist | Checklist ATM/CMD |
| `"kine-vs-osteo"` | KineVsOsteo | Comparaison kine / osteopathie |
| `"bfr-zone"` | BfrZone | Zones BFR, protocole |

## Regles d'utilisation

- **Maximum 1 infographie par section**
- **Idealement 2 a 3 par article**
- Le slot doit correspondre au contenu de la section (pas de `"reflexes"` generique partout)
- Si aucun composant ne convient : utiliser `"CUSTOM"` et fournir le composant TSX

> [!warning] Lecon apprise
> L'infographie `"reflexes"` (ThreeReflexes) affiche un contenu hardcode specifique a la position assise (« Levez-vous / Bougez / Faites confiance »). Elle a ete placee par erreur dans 6 articles differents alors qu'elle n'est pertinente que pour `position-assise-mal-de-dos`. Corrige en mai 2026 : chaque article a maintenant une infographie contextuelle adaptee.

## Convention CUSTOM

Si `infographic: "CUSTOM"` est utilise dans un article, le workflow exige :
1. Composant TSX complet fourni en bonus
2. Instructions d'integration dans `Infographics.tsx`
3. Enregistrement dans le mapping des slots
