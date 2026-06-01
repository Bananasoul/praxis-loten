---
title: "Blog System — MOC"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, type/moc, domaine/contenu]
aliases: [blog-moc, blog-system]
related: ["[[00_INDEX]]", "[[03_ARCHITECTURE]]"]
---

# Blog System — MOC

Le blog de Praxis Loten est le coeur du contenu EBP du site. Tout est centralise dans `src/components/pages/BlogArticlePageContent.tsx`.

## Notes de ce dossier

| Note | Description |
|------|-------------|
| [[workflow-loten-copy-ebp]] | Processus de creation d'article en 4 etapes |
| [[editorial-rules]] | Regles anti-nocebo, biopsychosocial, Vancouver, SEO local |
| [[article-template]] | Structure TypeScript `ArticleContent` + `renderMarkdown` |
| [[categories-authors]] | Auteurs (slugs), categories, liste des 9 articles |
| [[infographics]] | 12 composants `InfographicKind` reutilisables |

## Fichiers source

| Fichier | Role |
|---------|------|
| `src/components/pages/BlogArticlePageContent.tsx` | Objet `ARTICLES`, renderer, interface |
| `src/components/pages/BlogPageContent.tsx` | Liste blog (slugs, excerpts, tags) |
| `src/components/blog/Infographics.tsx` | Composants infographiques |
| `src/app/[locale]/blog/[slug]/page.tsx` | Route dynamique + `generateMetadata` |
| `public/blog/<slug>/` | Images (hero.jpg, section-X.jpg) |

## Flux de creation

```
Source (etude, video, article) 
  → Workflow Loten Copy-EBP (4 etapes)
    → 3 code-fences (article, listing, Midjourney)
      → Integration dans le code via Claude Code
        → Build + Deploy Vercel
```
