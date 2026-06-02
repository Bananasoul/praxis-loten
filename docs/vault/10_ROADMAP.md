---
title: "Roadmap & Etat actuel"
created: 2026-05-20
last_validated: 2026-05-31
status: stable
tags: [projet/loten, type/roadmap]
aliases: [roadmap]
related: ["[[00_INDEX]]", "[[02_STACK]]", "[[05_SEO]]", "[[08_DEPLOYMENT]]"]
---

# Roadmap & Etat actuel

## Etat au 2026-05-31 (revu)

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
| Deploiement Vercel | 2025 | DNS GoDaddy → Vercel, domaine praxisloten.be |
| Vault Obsidian | 2026-05-20 | Memoire longitudinale du projet |
| Sitemap.xml + robots.txt dynamiques | 2026-05 | `src/app/sitemap.ts` + `src/app/robots.ts` (next-intl, 7 langues) |

### ⚠ Manquant / A faire

| Priorite | Fonctionnalite | Effort estime | Bloquant ? |
|---|---|---|---|
| 🔴 Haute | **Schema.org / JSON-LD** | 1-2 sessions | Non, mais impact SEO important |
| 🟡 Moyenne | **CI/CD (GitHub Actions)** | 1 session | Non — deploiement manuel fonctionne |
| 🟡 Moyenne | **Tests automatises** | 2-3 sessions | Non — validation manuelle en place |
| 🟡 Moyenne | **Open Graph images** | 1 session | Non — partage social sous-optimal |
| 🟢 Basse | **PWA (manifest.json)** | 1 session | Non |
| 🟢 Basse | **Performance audit (Lighthouse)** | 0.5 session | Non |
| 🟢 Basse | **Animations de page transitions** | 1-2 sessions | Non |

## Schema.org — Detail

Le site n'a actuellement **aucun balisage JSON-LD**. A implementer :

- `LocalBusiness` sur la page d'accueil (nom, adresse, telephone, horaires)
- `MedicalBusiness` ou `Physician` pour chaque therapeute
- `BlogPosting` pour chaque article de blog
- `BreadcrumbList` pour la navigation

Impact attendu : meilleure visibilite dans les resultats Google locaux (knowledge panel, rich snippets).

## CI/CD — Detail

Actuellement, le deploiement est **100 % manuel** : `npx vercel deploy --prod --yes` lance par l'operateur apres validation visuelle. Risques :

- Deploiement de code casse (pas de build check automatique)
- Pas de rollback automatise

Solution recommandee : GitHub Actions avec `vercel build` + `vercel deploy` sur push to main. Voir [[08_DEPLOYMENT]].

## Notes

- Le site est en production et fonctionne bien — les items ci-dessus sont des ameliorations, pas des urgences
- Chaque "session" = ~1-2 heures de travail avec Claude Code
- La priorite est au contenu (nouveaux articles) plutot qu'a l'infra
