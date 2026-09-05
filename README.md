# Praxis Loten

Multilingual website for the Praxis Loten physiotherapy practice in Eupen, Belgium.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is German and localized routes live below `src/app/[locale]`.

## Quality checks

```bash
npm run lint
npm run build
npm audit
```

Run all three checks before publishing. The production build retrieves Inter and Playfair Display through `next/font`, so it requires network access when those font files are not cached.

## Content and operations

- `CLAUDE.md`: architecture, conventions, and common update workflows.
- `BLOG_GUIDE.md`: evidence-based editorial rules for blog articles.
- `docs/vault/`: SEO, analytics, editorial, and operating documentation.
- `messages/`: interface translations.

Pushing the verified `main` branch to GitHub triggers the connected Vercel production deployment.
