---
title: "ADR-004 : Politique anti-nocebo stricte"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/contenu]
aliases: [ADR-004]
related: ["[[editorial-rules]]", "[[07_LEGAL_COMPLIANCE]]"]
---

# ADR-004 : Politique anti-nocebo stricte

## Contexte

La litterature EBP montre que le langage utilise par les professionnels de sante influence la perception de la douleur par les patients. Des termes comme « usure », « fragile », « blocage » augmentent la kinesiophobie et aggravent les outcomes. Le cabinet Praxis Loten se positionne comme EBP — le contenu du site doit refleter cette philosophie.

De plus, la reglementation belge sur la publicite medicale interdit les promesses de guerison absolues.

## Decision

Appliquer une **politique anti-nocebo stricte** sur l'ensemble du contenu du site, dans les **7 langues**, avec une liste explicite de mots bannis et de reformulations preferees.

## Consequences

- ✅ Coherence avec le positionnement EBP du cabinet
- ✅ Conformite pub medicale belge
- ✅ Contenu rassurant, empowering pour les patients
- ✅ Differenciateur : peu de sites de kine appliquent ce niveau de rigueur
- ⚠ Chaque article doit etre audite en 7 langues (grep systematique)
- ⚠ Cout de maintenance eleve : chaque nouvelle langue ajoute des equivalents a verifier
- 🔗 Liste complete des mots bannis dans [[editorial-rules]]

## Alternatives considerees

- **Anti-nocebo FR/DE uniquement** : insuffisant, les patients lisent aussi les versions EN/NL/TR/AR/PL
- **Pas de politique formelle** : incoherent avec le positionnement EBP et le CV du gerant
