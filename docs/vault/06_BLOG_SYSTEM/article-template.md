---
title: "Template article blog"
created: 2026-05-20
last_validated: 2026-05-20
status: stable
tags: [projet/loten, domaine/contenu, type/template]
aliases: [article-template, blog-template]
related: ["[[editorial-rules]]", "[[infographics]]", "[[03_ARCHITECTURE]]"]
---

# Template article blog

## Fichier cible

`src/components/pages/BlogArticlePageContent.tsx` — objet `ARTICLES: Record<string, ArticleContent>`

## Interface TypeScript

```typescript
interface ArticleContent {
  title: Record<LangKey, string>;
  category: Record<LangKey, string>;
  date: string;                    // ISO "YYYY-MM-DD"
  readMin: number;                 // 4-7
  color: string;                   // Gradient Tailwind
  authorSlug: string;              // → voir [[categories-authors]]
  authorName: string;
  intro: Record<LangKey, string>;  // 80-120 mots
  heroImage?: { src: string; alt: Record<LangKey, string> };
  sections: {
    heading: Record<LangKey, string>;   // 3-7 mots
    body: Record<LangKey, string>;      // 120-200 mots
    infographic?: InfographicKind;      // → [[infographics]]
    image?: { src: string; alt: Record<LangKey, string>; caption?: Record<LangKey, string> };
  }[];
  keyPoints: Record<LangKey, string[]>; // 5 points
  ctaText: Record<LangKey, string>;
  bibliography?: string[];              // 3-6 refs Vancouver
  disclaimer?: Record<LangKey, string>;
}
```

## Architecture 6 sections

| # | Section | Role |
|---|---------|------|
| 1 | Mythe a deconstruire | Idee fausse repandue |
| 2 | Ce qui compte vraiment | Mouvement / approche moderne |
| 3 | Regle d'or pratique | 1 phrase forte (blockquote `> *« ... »*`) |
| 4 | 3 reflexes / actions | Concret, actionnable |
| 5 | Quand consulter | Signaux d'alerte |
| 6 | Au cabinet Praxis Loten | 4 piliers concrets |

## renderMarkdown

Le renderer (`renderMarkdown` dans le meme fichier) supporte :

| Syntaxe | Rendu |
|---------|-------|
| `\n\n` | Nouveau paragraphe (`<span class="block">`) |
| `\n` (simple) | `<br />` |
| `> texte` | Blockquote (bordure verte) |
| `**bold**` | `<strong>` |
| `*italic*` | `<em>` |
| `« guillemets »` | Span stylise |
| `• item\n• item` | `<ul class="list-disc"><li>` |
| `1. item\n2. item` | `<ol class="list-decimal"><li>` |
| `**1. item\n\n**2. item` | `<ol>` (items \n\n-separes) |

## Convention de livraison

Chaque article produit **3 code-fences** :
1. **Bloc 1** : objet `ArticleContent` pour `BlogArticlePageContent.tsx`
2. **Bloc 2** : entree listing pour `BlogPageContent.tsx` (slug, excerpt, tags)
3. **Bloc 3** : prompts Midjourney v6 (1 hero 16:9 + 1-2 inline)

## Slug

- kebab-case, en francais
- Maximum 5 mots
- Exemple : `doser-activite-douleur`
