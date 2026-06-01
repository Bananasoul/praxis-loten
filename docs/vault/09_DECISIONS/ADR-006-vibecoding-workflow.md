---
title: "ADR-006 : Vibecoding workflow"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/adr, domaine/workflow]
aliases: [ADR-006]
related: ["[[02_STACK]]", "[[08_DEPLOYMENT]]", "[[workflow-loten-copy-ebp]]"]
---

# ADR-006 : Vibecoding workflow

## Contexte

Philippe Banaszak (gerant, kinesitherapeute) n'est pas developpeur. Le site est construit et maintenu exclusivement via des IDE assistes par LLM (Windsurf/Cascade, puis Claude Code). Il n'y a pas d'equipe technique.

## Decision

Adopter un workflow **vibecoding** ou tout le developpement se fait via prompts LLM :

- **IDE** : Windsurf (Cascade) pour les premieres iterations, puis Claude Code pour les taches de maintenance et de contenu
- **Deploiement** : `npx vercel deploy --prod --yes` lance manuellement apres validation visuelle
- **Memoire longitudinale** : vault Obsidian dans `/docs/vault/` pour conserver le contexte entre sessions

## Consequences

- ✅ Pas besoin de competences en programmation pour maintenir le site
- ✅ Iterations rapides : un article complet (7 langues) livre en une session
- ✅ Cout nul en developpement humain
- ✅ Le vault Obsidian compense la perte de contexte entre sessions LLM
- ⚠ Dependance totale au LLM : si le modele change de comportement, le workflow est impacte
- ⚠ Pas de CI/CD : risque de deployer du code casse (mitigation : verification visuelle + curl)
- ⚠ Pas de tests automatises : la validation est manuelle
- 🔗 Deploiement manuel documente dans [[08_DEPLOYMENT]]

## Alternatives considerees

- **Embaucher un developpeur freelance** : cout disproportionne pour un site vitrine, perte d'autonomie
- **No-code (Wix, Squarespace)** : pas assez de controle sur l'i18n 7 langues et la politique anti-nocebo
- **WordPress + plugins** : securite a gerer, pas de typage fort, difficulte d'appliquer l'anti-nocebo systematiquement
