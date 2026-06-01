---
title: "Glossaire du projet"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/reference]
aliases: [glossary, glossaire]
related: ["[[00_INDEX]]", "[[99_HANDOFF_LLM]]"]
---

# Glossaire du projet

Termes utilises dans le vault et le codebase Praxis Loten. Destine a un LLM externe qui decouvre le projet.

## Termes metier

| Terme | Definition |
|---|---|
| **EBP** | Evidence-Based Practice — pratique fondee sur les preuves scientifiques, l'expertise clinique et les preferences du patient |
| **EBM** | Evidence-Based Medicine — synonyme historique, oriente medecin |
| **Anti-nocebo** | Politique editoriale evitant les mots qui aggravent la perception de la douleur (usure, fragile, blocage...). Voir [[editorial-rules]] |
| **Nocebo** | Effet negatif sur la sante cause par des attentes negatives (inverse du placebo) |
| **Kinesiophobie** | Peur du mouvement liee a la croyance que le mouvement cause de la douleur ou des dommages |
| **Biopsychosocial** | Modele de sante integrant facteurs biologiques, psychologiques et sociaux — oppose au modele purement biomedical |
| **IFOMPT** | International Federation of Orthopaedic Manipulative Physical Therapists — formation de reference en therapie manuelle |
| **BFR** | Blood Flow Restriction — technique de renforcement avec garrot partiel, utilisee en reeducation sportive |
| **ATM / CMD** | Articulation temporo-mandibulaire / Cranio-mandibular disorder — trouble de la machoire |
| **INAMI** | Institut National d'Assurance Maladie-Invalidite — organisme belge de remboursement des soins |
| **QPP** | Quality in Physiotherapy Practice — label qualite |

## Termes techniques

| Terme | Definition |
|---|---|
| **LangKey** | Type TypeScript `"de" \| "fr" \| "en" \| "nl" \| "tr" \| "ar" \| "pl"` — les 7 langues supportees |
| **Record<LangKey, string>** | Objet TypeScript avec une cle par langue — pattern central du contenu hardcode |
| **ArticleContent** | Interface TypeScript definissant la structure d'un article de blog (title, sections, keyPoints, etc.) |
| **InfographicKind** | Union type des 12 composants infographiques reutilisables dans les articles |
| **renderMarkdown** | Fonction maison qui transforme du markdown simplifie en React nodes (listes, blockquotes, bold, italic) |
| **SSG** | Static Site Generation — toutes les pages sont pre-rendues au build, pas de rendu serveur dynamique |
| **App Router** | Architecture de routage Next.js basee sur le systeme de fichiers (`app/[locale]/page.tsx`) |
| **Turbopack** | Bundler Rust integre a Next.js, remplace Webpack en mode dev |
| **next-intl** | Librairie i18n pour Next.js App Router — gere les locales, les messages, et le routage |
| **Vibecoding** | Developpement assiste par LLM ou l'operateur decrit ses intentions en langage naturel |

## Termes du vault

| Terme | Definition |
|---|---|
| **ADR** | Architecture Decision Record — note documentant une decision technique et ses consequences |
| **MADR** | Markdown Any Decision Record — format simplifie d'ADR utilise dans ce vault |
| **MOC** | Map of Content — note d'index qui relie les notes d'un dossier entre elles |
| **Wikilink** | Lien interne Obsidian au format `[[nom-de-note]]` |
| **Frontmatter** | Bloc YAML en debut de fichier markdown (entre `---`) contenant les metadonnees |
| **Handoff LLM** | Note autonome (`99_HANDOFF_LLM.md`) resumant le projet en ~300 mots pour un LLM externe |

## Conventions de nommage

| Element | Convention | Exemple |
|---|---|---|
| Slug d'article | kebab-case FR, ≤ 5 mots | `doser-activite-douleur` |
| Slug de therapeute | prenom-nom en kebab-case | `philippe-banaszak` |
| Note du vault | kebab-case ou XX_NOM_MAJUSCULE | `editorial-rules.md`, `04_I18N.md` |
| ADR | `ADR-NNN-titre-court.md` | `ADR-001-nextjs16.md` |
| Branche Git | description en kebab-case | `fix/anti-nocebo-cleanup` |
