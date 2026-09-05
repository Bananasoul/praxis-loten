# Site Operational Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the live website's operational content, SEO inventory, code quality, and dependencies to a consistent and supportable baseline without changing its language or analytics behavior.

**Architecture:** Preserve the existing Next.js and next-intl structure. Correct user-visible content at each current source, simplify client state that exists only for shuffling or route-reset effects, migrate the deprecated Next.js file convention, and update direct packages within supported current versions so vulnerable transitive packages are replaced.

**Tech Stack:** Next.js 16, React 19, TypeScript, next-intl, ESLint, npm, Vercel.

**Spec:** `docs/superpowers/specs/2026-09-05-site-operational-cleanup.md`

## Global Constraints

- Keep all ten existing locales and their current fallback behavior unchanged.
- Leave `<GoogleAnalytics gaId="G-F58GSSFKQ0" />` and GA4 event behavior unchanged.
- Publish no therapist or booking changes.
- Never print, copy, or commit private-key material.

---

### Task 1: Opening hours and content inventories

**Files:**
- Modify: `messages/{de,fr,en,nl,tr,ar,pl,uk,es,ku}.json`
- Modify: `src/components/pages/TerminPageContent.tsx`
- Modify: `src/components/pages/PraxisPageContent.tsx`
- Modify: `src/app/sitemap.ts`
- Modify: `public/llms.txt`

**Interfaces:**
- Consumes: Existing locale dictionaries and the existing manual-therapy blog slug.
- Produces: Rendered hours of 07:30–20:30 Monday–Friday plus a closed weekend, and complete public blog inventories.

- [x] **Step 1: Capture failing behavior**

Run the current production build locally and request `/fr`, `/fr/praxis`, `/fr/termin`, `/sitemap.xml`, and `/llms.txt`. Confirm the pages still expose old hours or omit `/blog/therapie-manuelle-mythes-mouvement`.

- [x] **Step 2: Implement the minimal content corrections**

Replace only the opening-hours values in all ten dictionaries and both page-local data structures. Add the existing slug once to `blogSlugs` and one English-labelled link to the blog section in `llms.txt`.

- [x] **Step 3: Verify rendered behavior**

Build and serve the application, then request the same five URLs. Expect no `08:00`, `19:00`, Saturday-by-appointment wording, or missing manual-therapy URL in the relevant rendered responses.

### Task 2: ESLint failures and obsolete Next.js convention

**Files:**
- Modify: `src/app/not-found.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/pages/TeamPageContent.tsx`
- Modify: `src/components/sections/TeamSection.tsx`
- Modify: `src/components/pages/RehabPageContent.tsx`
- Modify: `src/components/pages/ServiceDetailPageContent.tsx`
- Modify: `src/components/sections/CTASection.tsx`
- Rename: `src/middleware.ts` to `src/proxy.ts`
- Modify: `README.md`
- Delete: `.claude/launch.json`
- Delete: `public/{file,globe,next,vercel,window}.svg`

**Interfaces:**
- Consumes: Next.js `Link`, current pathname, current team arrays, and next-intl middleware factory.
- Produces: Identical navigation and locale routing without synchronous state-setting effects, unused imports, or a deprecated middleware filename.

- [x] **Step 1: Reproduce the quality failure**

Run `npm run lint`. Expect 8 errors and 5 warnings in the listed files.

- [x] **Step 2: Apply root-cause fixes**

Use `next/link` for the 404 route. Key menu-open state by pathname instead of resetting state in an effect. Render team arrays in stable source order instead of shuffling them after hydration. Remove only unused imports. Rename `middleware.ts` to `proxy.ts` without changing its matcher or next-intl handler.

Remove the broken repository-local launcher that targets a nonexistent absolute path and the five unreferenced Create Next App icons. Replace the generic template README with project-specific development, validation, and deployment instructions.

- [x] **Step 3: Verify quality and framework behavior**

Run `npm run lint` and `npm run build`. Expect zero lint findings, a successful build, and no middleware deprecation warning.

### Task 3: Dependency security remediation

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Consumes: npm advisory data and the official current package releases.
- Produces: Next.js 16.3.4, matching Next packages, next-intl 4.14.2, and fixed transitive packages.

- [x] **Step 1: Preserve the failing security baseline**

Run `npm audit --omit=dev`. Expect six production dependency findings: four high, one moderate, and one low.

- [x] **Step 2: Install the supported fixed direct versions**

Install `next@16.3.4`, `eslint-config-next@16.3.4`, `@next/third-parties@16.3.4`, and `next-intl@4.14.2`, allowing npm to refresh the lockfile and patched transitive packages.

- [x] **Step 3: Verify the upgraded dependency graph**

Run a clean install, full audit, lint, and production build. Expect no unresolved audit finding attributable to the application dependency graph and no regression.

### Task 4: Retired credential and tool authentication

**Files:**
- Delete: `/Users/philippe/Documents/Claude/Projects/The Compagny/The Compagny/Dev & Produit/praxis-loten-analytics-9e84ad615ce4.json`

**Interfaces:**
- Consumes: The exact service-account identity and private-key ID from the retired JSON file, without displaying private-key material.
- Produces: A revoked Google Cloud key, no local credential file, and renewed CLI sessions where interactive authorization succeeds.

- [x] **Step 1: Inspect safe credential metadata and cloud access**

Read only `project_id`, `client_email`, and `private_key_id`; check whether an authenticated Google Cloud CLI can list that exact service account's keys.

- [ ] **Step 2: Revoke before removal**

If authorized cloud access exists, delete the exact key from the service account and verify it no longer appears. Then permanently remove the exact local JSON file and verify the path is absent.

- [x] **Step 3: Renew operational CLI sessions**

Run the official GitHub CLI and Vercel CLI browser/device authentication flows. Verify with `gh auth status` and `vercel whoami`; if either requires user completion, report the exact remaining interaction without blocking code cleanup.

### Task 5: Final verification and publication readiness

**Files:**
- Review: all changed files

**Interfaces:**
- Consumes: Tasks 1–4.
- Produces: A reviewable branch with evidence for content, quality, security, and credential cleanup.

- [x] **Step 1: Review the full diff for scope and secrets**

Run `git diff --check`, inspect `git diff --stat`, and search the tracked diff for private-key markers. Expect no whitespace error, no unrelated file, and no secret.

- [x] **Step 2: Run the complete verification suite**

Run clean install, full npm audit, lint, production build, and rendered smoke checks for hours, sitemap, and `llms.txt`.

- [ ] **Step 3: Commit the verified branch**

Commit with a scoped maintenance message only after all checks pass, then use the branch-finishing workflow to decide publication.
