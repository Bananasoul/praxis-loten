---
title: "Workflow Loten Copy-EBP v2"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, domaine/contenu, type/workflow]
aliases: [workflow-ebp, loten-copy-ebp, copy-ebp]
related: ["[[editorial-rules]]", "[[article-template]]", "[[categories-authors]]"]
---

# Workflow Loten Copy-EBP v2

Processus obligatoire pour chaque article du blog. Reference complete dans `BLOG_GUIDE.md` a la racine du repo.

## Entree

L'utilisateur fournit une **source** (etude, lien, video YouTube, capture, infographie). Optionnellement : auteur souhaite, angle editorial, categorie.

## Les 4 etapes

### Etape 1 — Analyse EBP et Fact-Checking

- Verdict global sur la source (alignee EBM ou a deconstruire)
- Biais identifies (commercial, paradigme depasse, narratif nocebo)
- 2 a 5 sources scientifiques de haute qualite (meta-analyses, RCTs, guidelines)
- Sources prioritaires : Lancet, BJSM, JOSPT, BMJ, Cochrane, OARSI, ACR, EULAR, NICE, IASP
- Si source anterieure a 2023 : verification web obligatoire

### Etape 2 — Structure SEO

- Titre H1 avec mots-cles locaux (Eupen, kinesitherapie, therapie manuelle)
- Meta-description (max 150 caracteres)
- Architecture H2/H3 selon [[article-template]]

### Etape 3 — Redaction

- Respecter [[editorial-rules]] (anti-nocebo, biopsychosocial, Vancouver)
- Architecture 6 sections fixes → [[article-template]]
- 500-900 mots/langue, 4-7 min de lecture
- Vulgarisation experte, ton rassurant, vouvoiement

### Etape 4 — Livrables (3 code-fences)

1. **Bloc 1** : entree pour `BlogArticlePageContent.tsx` (objet article complet, 7 langues, sans heroImage ni images de section)
2. **Bloc 2** : entree pour `BlogPageContent.tsx` (listing : slug, excerpt, tags)
3. **Bonus** : composant CUSTOM si infographie non disponible

## Sortie

L'utilisateur copie-colle les 2 blocs dans Claude Code pour integration. Puis `npx vercel deploy --prod --yes`. Note : pas d'images (ni hero, ni inline) — les articles n'utilisent pas d'illustrations photographiques.

## Checklist finale

Voir la checklist de 15 points dans `BLOG_GUIDE.md` (section 12). Points critiques :
- [ ] 7 langues completes
- [ ] 0 mot nocebo → [[editorial-rules]]
- [ ] Eupen ≥2x par langue
- [ ] Bibliographie 3-6 refs Vancouver
- [ ] Disclaimer medical present
