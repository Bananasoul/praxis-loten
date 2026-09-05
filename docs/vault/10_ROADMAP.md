---
title: "Roadmap & Etat actuel"
created: 2026-05-20
last_validated: 2026-09-05
status: stable
tags: [projet/loten, type/roadmap]
aliases: [roadmap]
related: ["[[00_INDEX]]", "[[02_STACK]]", "[[05_SEO]]", "[[08_DEPLOYMENT]]"]
---

# Roadmap & Etat actuel

## Etat au 2026-09-05 (revu)

### ✅ Fait

| Fonctionnalite | Date | Notes |
|---|---|---|
| Site vitrine complet (7 langues) | 2025 | Toutes les pages : accueil, equipe, services, rehab, honoraires, blog |
| 10 articles de blog EBP | 2025-2026 | Architecture 6 sections, anti-nocebo, 7 langues (10e : `montre-connectee-douleur`, 2026-05-23) |
| Politique anti-nocebo 7 langues | 2026-05-18 | Audit complet FR/DE/EN/NL/TR/AR/PL — 0 mot banni |
| renderMarkdown avance | 2026-05-19 | Support listes a puces, listes numerotees, blockquotes |
| 12 infographies reutilisables | 2025-2026 | Composants React dans Infographics.tsx |
| Pages legales RGPD | 2025 | Legal, Privacy, Cookies — 7 langues |
| GA4 integre | 2025 | G-F58GSSFKQ0 via @next/third-parties |
| Cockpit acquisition GA4 + GSC + Google Business Profile | 2026-09-05 | Canvas Codex, rafraîchissement à la demande |
| Deploiement Vercel | 2025 | DNS GoDaddy → Vercel, domaine praxisloten.be |
| Vault Obsidian | 2026-05-20 | Memoire longitudinale du projet |
| Sitemap.xml + robots.txt dynamiques | 2026-05 | `src/app/sitemap.ts` + `src/app/robots.ts` (next-intl, 7 langues) |

### ⚠ Manquant / A faire

| Priorite | Fonctionnalite | Effort estime | Bloquant ? |
|---|---|---|---|
| 🔴 Haute | Ajouter uk, es et ku à la dimension GA4 page_language | 0.5 session | Oui — qualité de mesure |
| 🔴 Haute | Mettre le consentement Analytics en conformité avec les textes publiés | 1 session | Oui — conformité |
| 🟠 Moyenne | Valider JSON-LD et canonicals/hreflang après déploiement | 0.5 session | Oui — SEO multilingue |
| 🟡 Moyenne | **CI/CD (GitHub Actions)** | 1 session | Non — deploiement manuel fonctionne |
| 🟡 Moyenne | **Tests automatises** | 2-3 sessions | Non — validation manuelle en place |
| 🟡 Moyenne | **Open Graph images** | 1 session | Non — partage social sous-optimal |
| 🟢 Basse | **PWA (manifest.json)** | 1 session | Non |
| 🟢 Basse | **Performance audit (Lighthouse)** | 0.5 session | Non |
| 🟢 Basse | **Animations de page transitions** | 1-2 sessions | Non |

## Schema.org — Detail

Le site dispose d'un balisage JSON-LD pour :

- `MedicalClinic` pour la clinique ;
- `Article` et `MedicalWebPage` pour les contenus editoriaux ;
- `FAQPage` pour les pages de questions frequentes.

La prochaine etape est de valider les donnees structurees, les canonicals et les liens `hreflang` sur le site deploye. Le sitemap expose les variantes locales et leurs `hreflang`, mais sa date `lastModified` reste calculee a la date de build.

## CI/CD — Detail

Actuellement, le deploiement est **100 % manuel** : `npx vercel deploy --prod --yes` lance par l'operateur apres validation visuelle. Risques :

- Deploiement de code casse (pas de build check automatique)
- Pas de rollback automatise

Solution recommandee : GitHub Actions avec `vercel build` + `vercel deploy` sur push to main. Voir [[08_DEPLOYMENT]].

## Notes

- Le site est en production et fonctionne bien — les items ci-dessus sont des ameliorations, pas des urgences
- Chaque "session" = ~1-2 heures de travail avec Claude Code
- La priorite est au contenu (nouveaux articles) plutot qu'a l'infra
