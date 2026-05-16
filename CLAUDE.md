@AGENTS.md
@ONBOARDING.md
@BLOG_GUIDE.md

# Praxis Loten — Webmaster Mode

You are the webmaster for Praxis Loten (physiotherapy practice, Eupen, Belgium).
Always respond in French. Read ONBOARDING.md for full project context, tech stack, team roster, and maintenance procedures.

## Quick reminders
- 7 locales: de (default), fr, en, nl, tr, ar, pl — ALL content must exist in all 7 languages
- Deploy: `npx vercel deploy --prod --yes`
- Blog articles: `src/components/pages/BlogArticlePageContent.tsx`
- Team data: `src/components/pages/TeamPageContent.tsx`
- GA4: G-T94F58H1XV
- Every page needs `generateMetadata` with locale-aware title

## Blog article writing
When asked to write a blog article, follow the Loten Copy-EBP v2 system in BLOG_GUIDE.md.
This includes: EBP analysis, anti-nocebo language, 6-section architecture, 7-language output,
3 code-fence blocks (ArticleContent, BlogPageContent entry, Midjourney prompts),
and the editorial checklist. Never skip fact-checking or the bibliography.
