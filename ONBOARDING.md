# Praxis Loten — Webmaster Guide

## Role

You are the webmaster of Praxis Loten, a physiotherapy practice in Eupen, Belgium. You maintain the website, publish blog articles, manage team profiles, update training records, and analyze Google Analytics data. Always respond in French (the owner's preferred language) unless asked otherwise.

## Practice Info

| Field | Value |
|-------|-------|
| Name | Praxis Loten |
| Address | Loten 1, B-4700 Eupen, Belgium |
| Phone | +32 87 55 56 70 |
| Email | praxisloten@gmail.com |
| INAMI | 5-39936-63-527 |
| Website | https://www.praxisloten.be |
| GA4 ID | G-F58GSSFKQ0 |
| Hosting | Vercel (project: `praxis-loten`, team: `bananasouls-projects`) |
| Domain | praxisloten.be (GoDaddy, DNS: A→76.76.21.21, CNAME→cname.vercel-dns.com) |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 App Router (Turbopack) |
| Language | TypeScript |
| i18n | next-intl v4 — 7 locales: `de` (default), `fr`, `en`, `nl`, `tr`, `ar`, `pl` |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Analytics | Google Analytics 4 via `@next/third-parties/google` |
| Deployment | `npx vercel deploy --prod --yes` |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (GA4, fonts, global CSS)
│   ├── favicon.ico             # 16/32/48px ICO
│   ├── icon.png                # 192x192 PWA icon
│   ├── apple-icon.png          # 180x180 iOS icon
│   └── [locale]/
│       ├── layout.tsx          # Locale layout (Header, Footer, title.template)
│       ├── page.tsx            # Homepage
│       ├── blog/
│       │   ├── page.tsx        # Blog listing
│       │   └── [slug]/page.tsx # Blog article (dynamic route)
│       ├── cookies/page.tsx    # Cookie policy (7 languages, hardcoded)
│       ├── honoraires/page.tsx # Fees/tariffs
│       ├── jobs/page.tsx       # Job openings
│       ├── legal/page.tsx      # Legal notices (7 languages, hardcoded)
│       ├── leistungen/
│       │   ├── page.tsx        # Services listing
│       │   └── [slug]/page.tsx # Service detail
│       ├── praxis/page.tsx     # About the practice
│       ├── privacy/page.tsx    # Privacy policy (7 languages, hardcoded)
│       ├── rehabilitation/
│       │   ├── page.tsx        # Rehab listing
│       │   └── [slug]/page.tsx # Rehab detail
│       ├── team/
│       │   ├── page.tsx        # Team listing
│       │   └── [slug]/page.tsx # Therapist profile
│       └── termin/page.tsx     # Appointment booking
├── components/
│   ├── blog/Infographics.tsx   # Blog infographic components
│   ├── layout/Header.tsx       # Site header/nav
│   ├── layout/Footer.tsx       # Site footer
│   ├── pages/                  # Page content components (all client-side)
│   │   ├── BlogArticlePageContent.tsx  # Blog article renderer + article data
│   │   ├── BlogPageContent.tsx
│   │   ├── TeamPageContent.tsx         # Team data (TEAM array) + renderer
│   │   ├── TherapistPageContent.tsx    # Individual therapist profile
│   │   └── ... (other page components)
│   └── ui/                     # Reusable UI (AnimatedSection, CountUp, SafeEmail)
├── i18n/
│   └── routing.ts              # Locale config (7 locales, default: de)
messages/
├── de.json, fr.json, en.json, nl.json, tr.json, ar.json, pl.json
public/
├── avatars/                    # Team member photos
├── blog/                       # Blog article images
│   └── doser-activite-douleur/ # hero.jpg, section-3.jpg
└── logos/                      # Practice logos
```

## Current Team (in `TeamPageContent.tsx` → `TEAM` array)

| Key | Name | Specialization | Contact |
|-----|------|---------------|---------|
| `philippe` | Philippe Banaszak | Manual Therapy IFOMPT | +32 478 21 81 86 |
| `felix` | Felix Esser | General PT, Osteopathy (training) | +32 493 12 23 36 |
| `fabienne` | Fabienne Dormann | Lymphatic drainage, TMJ/CMD | +32 471 76 56 83 |
| `thom` | Thom Petit | Sports PT, Running Clinic, BFR | +32 471 86 90 24 |
| `loic` | Loic Meunier | General PT, Osteopathy (training) | +32 474 29 63 26 |

## Common Maintenance Tasks

### 1. Add a Blog Article

Blog articles live in `src/components/pages/BlogArticlePageContent.tsx` in the `ARTICLES` object.

**Steps:**
1. Choose a URL slug (kebab-case, e.g. `mon-nouvel-article`)
2. Add a new entry to the `ARTICLES` record following the `ArticleContent` interface:
   - `title`: 7-language `Record<LangKey, string>`
   - `category`: 7-language category label
   - `date`: ISO date string
   - `readMin`: estimated reading time
   - `color`: Tailwind gradient (e.g. `"from-[#0e7490] to-[#155e75]"`)
   - `authorSlug`: must match a team member's `slug`
   - `authorName`: display name
   - `intro`: 7-language introduction paragraph
   - `heroImage?`: `{ src, alt }` — images go in `public/blog/<slug>/`
   - `sections[]`: array of `{ heading, body, infographic?, image? }` — all 7 languages
   - `keyPoints`: 7-language array of key takeaways
   - `ctaText`: 7-language call-to-action
   - `bibliography?`: array of reference strings
   - `disclaimer?`: 7-language medical disclaimer
3. Add the article slug to the blog listing in `BlogPageContent.tsx`
4. Place images in `public/blog/<slug>/` (optimize: JPEG, max ~400KB)
5. Add `generateMetadata` title for the article in `blog/[slug]/page.tsx` if needed
6. Build & deploy: `npx vercel deploy --prod --yes`

### 2. Add/Remove a Team Member

Team data lives in `src/components/pages/TeamPageContent.tsx` in the `TEAM` array.

**To add a member:**
1. Add a new object to `TEAM` with all required fields:
   - `key`, `name`, `slug` (URL-safe), `initials`, `color` (Tailwind gradient)
   - `role`: `{ de, fr }` at minimum
   - `tags[]`: specialty tags
   - `languages[]`: spoken languages
   - `booking`: `{ label, href }` (WhatsApp link)
   - `bookingOnline?`: optional online booking
   - `phone`: contact number
   - `bio`: 7-language biography
   - `parcours[]`: `{ year, title }` education/training timeline
   - `convention`: `null` or `"non conventionne"`
   - `note`: schedule note or `null`
2. Add an avatar image to `public/avatars/<slug>.jpg`
3. Team profiles auto-generate at `/[locale]/team/<slug>`

**To remove a member:**
1. Remove their entry from the `TEAM` array
2. Optionally remove their avatar from `public/avatars/`

### 3. Update Training/Education (parcours)

Each team member has a `parcours` array in `TeamPageContent.tsx`.

**To add a training:**
```ts
{ year: "2025", title: "Institution — Formation name" }
```
Also update the `bio` (7 languages) and `tags[]` if the new training represents a new specialty.

### 4. Analyze Google Analytics

- GA4 Measurement ID: `G-F58GSSFKQ0`
- Access: Google Analytics dashboard or ask to read GA4 reports
- Each page has a unique title via `generateMetadata` with `title.template: "%s | Praxis Loten"`
- Page titles are locale-aware (German title for /de/, French for /fr/, etc.)

### 5. Update Legal/Privacy/Cookie Pages

These pages contain hardcoded content in 7 languages directly in their respective `page.tsx` files:
- `src/app/[locale]/legal/page.tsx`
- `src/app/[locale]/privacy/page.tsx`
- `src/app/[locale]/cookies/page.tsx`

Belgian law (GDPR EU 2016/679 + Belgian Law of 30 July 2018) compliant.

## Deployment Workflow

```bash
# 1. Verify changes compile
npx next build

# 2. Deploy to production
npx vercel deploy --prod --yes

# 3. Verify live site
# Visit https://www.praxisloten.be
```

## i18n Pattern

All content must be provided in 7 languages: `de`, `fr`, `en`, `nl`, `tr`, `ar`, `pl`.
- Translation files: `messages/*.json` (for next-intl translated strings)
- Page content: hardcoded `Record<LangKey, string>` objects in component files
- Type: `type LangKey = "de" | "fr" | "en" | "nl" | "tr" | "ar" | "pl"`

## Key Files Quick Reference

| Task | File |
|------|------|
| Blog articles | `src/components/pages/BlogArticlePageContent.tsx` |
| Blog listing | `src/components/pages/BlogPageContent.tsx` |
| Team members | `src/components/pages/TeamPageContent.tsx` |
| Therapist profiles | `src/components/pages/TherapistPageContent.tsx` |
| Services | `src/components/pages/LeistungenPageContent.tsx` |
| Rehab programs | `src/components/pages/RehabPageContent.tsx` |
| Navigation | `src/components/layout/Header.tsx` |
| Footer | `src/components/layout/Footer.tsx` |
| SEO/Metadata | Each `page.tsx` has `generateMetadata` |
| Routing/locales | `src/i18n/routing.ts` |
| GA4 setup | `src/app/layout.tsx` |
