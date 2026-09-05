# Praxis Loten Acquisition Cockpit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Codex Canvas that combines current GA4, Search Console, Google Business Profile/Maps and technical SEO findings into one on-demand acquisition cockpit.

**Architecture:** A single `.canvas.tsx` file contains a typed, dated snapshot and all presentation code because Canvas files cannot import local helpers or fetch network data. Refreshes replace the current snapshot and append only comparable historical points; the browser-authenticated Google interfaces remain the read-only collection layer.

**Tech Stack:** React/TypeScript Canvas, `cursor/canvas` primitives, authenticated Chrome access to GA4/Search Console/Google Business Profile, local Next.js source inspection.

**Spec:** `docs/superpowers/specs/2026-09-05-cockpit-acquisition-patients-design.md`

## Global Constraints

- Create exactly one Canvas file at `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`.
- Import only from `cursor/canvas`; do not use npm packages, relative imports, Node built-ins or `fetch()`.
- Embed only aggregate, non-patient data; never include API keys, service-account material or personal visitor data.
- Treat `phone_call`, `whatsapp_click` and `online_booking` as contact actions; keep `termin_page` as a navigation step.
- Keep Google Business Profile actions separate from GA4 actions and never sum them into a patient total.
- Show a source and exact time range for every chart and table.
- Omit unavailable sections rather than rendering placeholders, empty frames or fabricated zeroes.
- Use theme tokens from `useHostTheme()` and built-in Canvas primitives; no hardcoded colors, gradients, emojis or box shadows.
- Apart from Task 0 explicitly authorized by the user, modify neither the production site, Google configuration nor the public Google Business Profile in this implementation.

---

### Task 0: Restore a clean website baseline

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/pages/TeamPageContent.tsx`
- Modify: `src/components/sections/TeamSection.tsx`
- Modify: `src/app/not-found.tsx`
- Modify only if needed to remove reported warnings: `src/components/pages/RehabPageContent.tsx`
- Modify only if needed to remove reported warnings: `src/components/pages/ServiceDetailPageContent.tsx`
- Modify only if needed to remove reported warnings: `src/components/sections/CTASection.tsx`

**Interfaces:**
- Consumes: the latest `origin/main` delivery merged at `8f4bda2`.
- Produces: a zero-error, zero-warning ESLint baseline without changing visible content beyond deterministic team order.

- [ ] **Step 1: Reproduce the exact failure before changing code**

Run `npm run lint` and record the RED evidence: three `react-hooks/set-state-in-effect` errors, five duplicated `@next/next/no-html-link-for-pages` errors on the 404 link, and five unused-import warnings.

- [ ] **Step 2: Remove the root causes with minimal changes**

- In `Header.tsx`, remove the pathname effect that synchronously closes menu state. Preserve close-on-navigation by deriving open state from the pathname on which each menu was opened, or by an equally small event-driven solution that also handles browser navigation.
- In `TeamPageContent.tsx` and `TeamSection.tsx`, remove the post-mount random shuffle and render a stable order. Random server/client ordering is not acceptable because it risks hydration mismatch.
- In `not-found.tsx`, use the Next.js internal `Link` component for `/de`.
- Remove only the imports or variables reported as unused; do not refactor adjacent code.

- [ ] **Step 3: Verify and commit**

Run `npm run lint` until the output is pristine, then run `npm run build`. Commit only the Task 0 files with message `fix: restore clean website checks`.

---

### Task 1: Capture and reconcile the dated source snapshot

**Files:**
- Read: `docs/superpowers/specs/2026-09-05-cockpit-acquisition-patients-design.md`
- Read: `src/app/layout.tsx`
- Read: `src/app/sitemap.ts`
- Read: `src/app/[locale]/layout.tsx`
- Read: `src/components/ui/GA4Events.tsx`
- Read: `docs/vault/05_SEO.md`
- Read: `/Users/philippe/Documents/Claude/Projects/The Compagny/The Compagny/Dev & Produit/plan-de-mesure-praxisloten.md`
- Read: `/Users/philippe/Documents/Claude/Artifacts/ga4-praxis-loten/index.html`
- Create in Task 2: `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`

**Interfaces:**
- Consumes: authenticated browser access to GA4 property `p539934309`, Search Console property `sc-domain:praxisloten.be`, and the managed Google Business Profile.
- Produces: one reconciled `DashboardSnapshot` object ready to paste into the Canvas in Task 2.

- [ ] **Step 1: Record the source contract before collecting values**

Use these exact types and do not introduce a cross-source total:

```ts
type SourceKey = "ga4" | "gsc" | "gbp" | "maps" | "code";
type Freshness = { source: SourceKey; label: string; period: string; checkedAt: string };
type Metric = { label: string; value: number; unit: "count" | "percent" | "position"; deltaPct?: number };
type NamedValue = { name: string; value: number };
type SearchQuery = { query: string; clicks: number; impressions: number };
type SearchPage = { page: string; clicks: number; impressions: number };
type Finding = {
  title: string;
  evidence: string;
  action: string;
  impact: "Élevé" | "Moyen" | "Faible";
  confidence: "Élevée" | "Moyenne";
  effort: "Élevé" | "Moyen" | "Faible";
  kind: "Croissance" | "Mesure" | "Conformité";
};
type DashboardSnapshot = {
  generatedAt: string;
  freshness: Freshness[];
  ga4: {
    recent: Metric[];
    channels: NamedValue[];
    pages: NamedValue[];
    contactActions28d?: NamedValue[];
    therapistActions28d?: NamedValue[];
    actionPages28d?: NamedValue[];
  };
  gsc: { summary: Metric[]; queries: SearchQuery[]; pages?: SearchPage[] };
  gbp: {
    summary: Metric[];
    interactionsByMonth: NamedValue[];
    discovery: NamedValue[];
    queries: NamedValue[];
  };
  maps: { rating: number; reviews: number; bookingLinkActive: boolean; utmLinksPresent: boolean };
  findings: Finding[];
};
```

- [ ] **Step 2: Collect GA4 with homogeneous periods**

Open `https://analytics.google.com/analytics/web/#/a396525599p539934309/reports/intelligenthome` and record:

- Last 7 days with prior-period deltas: active users, new users, events and key events.
- Last 7 days: sessions by default channel and top page titles.
- Last 28 days: `phone_call`, `whatsapp_click`, `online_booking` by event name, page path and therapist when the dimension is populated.

Reject `termin_page` from the contact-action array. If the therapist or page breakdown cannot be read, omit the corresponding optional array and retain the last dated historical result only in explanatory copy.

- [ ] **Step 3: Collect Search Console and derive opportunity CTRs**

Open `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Apraxisloten.be`, select three months, and record clicks, impressions, CTR, average position, the top ten query rows and the top ten page rows. Store the page rows in the optional `gsc.pages` array only when the interface exposes both clicks and impressions.

Derive query CTR only when needed using:

```ts
const ctr = (clicks: number, impressions: number) =>
  impressions === 0 ? undefined : Math.round((clicks / impressions) * 1000) / 10;
```

Do not fabricate per-query position values when the table does not expose them.

- [ ] **Step 4: Collect Google Business Profile and Maps separately**

In the managed profile Performance panel, use the visible date selector and record interactions by month, calls, directions, website clicks, reservations, profile viewers, device/platform split and discovery queries. In public Maps, record rating, review count, website link, booking link and UTM presence.

When Google's headline and breakdown disagree by a small amount, retain the visible headline, retain the visible breakdown, and add a quality note instead of silently forcing reconciliation.

- [ ] **Step 5: Verify arithmetic and freshness**

Use these invariants before rendering:

```ts
const sum = (rows: NamedValue[]) => rows.reduce((total, row) => total + row.value, 0);
const assertNonNegative = (values: number[]) => {
  if (values.some((value) => value < 0 || !Number.isFinite(value))) {
    throw new Error("Dashboard metrics must be finite and non-negative");
  }
};
```

Expected initial anchors from 5 September: GA4 `70` active users and `20` key events over 7 days; Search Console `685` clicks and `10_800` impressions over 3 months; GBP `144` calls, `261` directions and `441` website clicks over April–September; Maps `4.8` rating and `24` reviews.

### Task 2: Build the Canvas shell and primary metrics

**Files:**
- Create: `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`

**Interfaces:**
- Consumes: the `DashboardSnapshot` contract and verified values from Task 1.
- Produces: default export `PraxisLotenAcquisitionCockpit` and internal components `SourceCaption` and `Delta`.

- [ ] **Step 1: Create the Canvas with supported imports and typed data**

```tsx
import {
  BarChart, Callout, Card, CardBody, CardHeader, Divider, Grid,
  H1, H2, H3, LineChart, Pill, Row, Stack, Stat, Table, Text,
  useHostTheme,
} from "cursor/canvas";
```

Define the Task 1 types verbatim, then use this verified baseline. Task 1 may add the three optional 28-day arrays only when the current GA4 view exposes them.

```ts
const snapshot: DashboardSnapshot = {
  generatedAt: "2026-09-05",
  freshness: [
    { source: "ga4", label: "GA4", period: "7 derniers jours", checkedAt: "5 septembre 2026" },
    { source: "gsc", label: "Search Console", period: "4 juin–3 septembre 2026", checkedAt: "5 septembre 2026" },
    { source: "gbp", label: "Fiche Google", period: "avril–septembre 2026", checkedAt: "5 septembre 2026" },
    { source: "maps", label: "Google Maps", period: "état actuel", checkedAt: "5 septembre 2026" },
    { source: "code", label: "Audit technique", period: "code local", checkedAt: "5 septembre 2026" },
  ],
  ga4: {
    recent: [
      { label: "Utilisateurs actifs", value: 70, unit: "count", deltaPct: -23.9 },
      { label: "Nouveaux utilisateurs", value: 60, unit: "count", deltaPct: -29.4 },
      { label: "Événements", value: 469, unit: "count", deltaPct: -33.3 },
      { label: "Actions clés", value: 20, unit: "count", deltaPct: -37.5 },
    ],
    channels: [
      { name: "Organic Search", value: 68 },
      { name: "Direct", value: 13 },
      { name: "AI Assistant", value: 4 },
      { name: "Organic Social", value: 1 },
    ],
    pages: [
      { name: "Accueil DE", value: 44 },
      { name: "Rendez-vous DE", value: 39 },
      { name: "Accueil FR", value: 19 },
      { name: "Services DE", value: 13 },
      { name: "Équipe DE", value: 11 },
      { name: "Rendez-vous FR", value: 11 },
      { name: "Accueil EN", value: 11 },
    ],
  },
  gsc: {
    summary: [
      { label: "Clics Google", value: 685, unit: "count" },
      { label: "Impressions Google", value: 10800, unit: "count" },
      { label: "CTR moyen", value: 6.3, unit: "percent" },
      { label: "Position moyenne", value: 5.8, unit: "position" },
    ],
    queries: [
      { query: "praxis loten", clicks: 66, impressions: 109 },
      { query: "kine eupen", clicks: 44, impressions: 322 },
      { query: "lymphdrainage eupen", clicks: 30, impressions: 81 },
      { query: "physiotherapie eupen", clicks: 23, impressions: 147 },
      { query: "kiné eupen", clicks: 21, impressions: 129 },
      { query: "kinesitherapie eupen", clicks: 19, impressions: 128 },
      { query: "thom petit", clicks: 15, impressions: 62 },
      { query: "osteopath eupen", clicks: 8, impressions: 191 },
      { query: "lymphdrainage", clicks: 6, impressions: 324 },
      { query: "osteopathie eupen", clicks: 4, impressions: 153 },
    ],
  },
  gbp: {
    summary: [
      { label: "Interactions fiche", value: 846, unit: "count" },
      { label: "Vues de la fiche", value: 5476, unit: "count" },
      { label: "Appels", value: 144, unit: "count" },
      { label: "Itinéraires", value: 261, unit: "count" },
      { label: "Clics vers le site", value: 441, unit: "count" },
      { label: "Réservations attribuées", value: 0, unit: "count" },
    ],
    interactionsByMonth: [
      { name: "Avril", value: 161 },
      { name: "Mai", value: 251 },
      { name: "Juin", value: 141 },
      { name: "Juillet", value: 152 },
      { name: "Août", value: 141 },
    ],
    discovery: [
      { name: "Recherche Google · mobile", value: 4218 },
      { name: "Recherche Google · ordinateur", value: 803 },
      { name: "Google Maps · mobile", value: 314 },
      { name: "Google Maps · ordinateur", value: 142 },
    ],
    queries: [
      { name: "kine eupen", value: 256 },
      { name: "physiotherapie eupen", value: 110 },
      { name: "kinesitherapie eupen", value: 87 },
      { name: "kiné eupen", value: 63 },
      { name: "loten", value: 44 },
    ],
  },
  maps: { rating: 4.8, reviews: 24, bookingLinkActive: true, utmLinksPresent: true },
  findings: [
    {
      title: "Le référencement naturel reste le moteur principal",
      evidence: "68 des 86 sessions GA4 récentes viennent d'Organic Search.",
      action: "Prioriser les pages locales et les spécialités déjà visibles avant d'investir dans de nouveaux canaux.",
      impact: "Élevé", confidence: "Élevée", effort: "Moyen", kind: "Croissance",
    },
    {
      title: "Le drainage lymphatique a une demande démontrée",
      evidence: "‘lymphdrainage eupen’ génère 30 clics sur 81 impressions, tandis que ‘lymphdrainage’ génère 324 impressions mais seulement 6 clics.",
      action: "Renforcer le titre et la description de la page drainage pour capter la requête générique sans diluer le signal local.",
      impact: "Élevé", confidence: "Élevée", effort: "Moyen", kind: "Croissance",
    },
    {
      title: "La fiche Google déclenche plus que des visites web",
      evidence: "144 appels et 261 itinéraires sont mesurés directement dans la fiche sur la période affichée.",
      action: "Piloter la fiche comme un canal d'acquisition distinct et suivre chaque mois appels, itinéraires, clics et avis.",
      impact: "Élevé", confidence: "Élevée", effort: "Faible", kind: "Croissance",
    },
    {
      title: "Le marquage GA4 doit couvrir les trois nouvelles langues",
      evidence: "Le code et le vault utilisent désormais G-F58GSSFKQ0, mais la détection page_language ne liste pas uk, es et ku et les attribue donc à de.",
      action: "Ajouter uk, es et ku à SITE_LOCALES dans GA4Events avant d'analyser les performances par langue.",
      impact: "Élevé", confidence: "Élevée", effort: "Faible", kind: "Mesure",
    },
    {
      title: "Le socle SEO technique a été renforcé",
      evidence: "Le code contient maintenant MedicalClinic, Article et FAQPage en JSON-LD ainsi que des canonicals/hreflang par URL.",
      action: "Valider leur détection dans Search Console et le test des résultats enrichis après le prochain déploiement.",
      impact: "Moyen", confidence: "Élevée", effort: "Faible", kind: "Croissance",
    },
    {
      title: "Le consentement publié et le code divergent",
      evidence: "Les pages légales annoncent un consentement préalable, mais GA4 est injecté sans mécanisme de consentement visible dans le code local.",
      action: "Faire un audit RGPD ciblé puis conditionner Analytics au choix de l'utilisateur.",
      impact: "Élevé", confidence: "Élevée", effort: "Moyen", kind: "Conformité",
    },
  ],
};
```

Keep the real zero for Google-attributed bookings in the data, but present it as a factual callout rather than an empty chart or zero-filled row.

- [ ] **Step 2: Add source and change-label helpers**

```tsx
function SourceCaption({ children }: { children: string }) {
  return <Text size="small" tone="tertiary" style={{ marginTop: 8 }}>{children}</Text>;
}

function Delta({ value }: { value?: number }) {
  if (value === undefined) return null;
  return (
    <Text as="span" size="small" weight="semibold">
      {value >= 0 ? "+" : ""}{value.toLocaleString("fr-BE")} % vs période précédente
    </Text>
  );
}
```

Traffic declines remain neutral text because lower traffic is not automatically worse without conversion context.

- [ ] **Step 3: Build the page header and freshness row**

```tsx
function PraxisLotenAcquisitionCockpit() {
  const theme = useHostTheme();
  return (
    <Stack gap={24} style={{ padding: 24, maxWidth: 1240, margin: "0 auto", color: theme.text.primary }}>
      <Stack gap={8}>
        <Row align="center" justify="space-between" wrap>
          <H1>Praxis Loten — acquisition & SEO</H1>
          <Pill active>Vérifié le 5 septembre 2026</Pill>
        </Row>
        <Text tone="secondary">Visibilité → visite → action de contact, sans assimiler les clics à des rendez-vous.</Text>
        <Row gap={8} wrap>
          {snapshot.freshness.map((item) => <Pill key={item.source}>{item.label} · {item.period}</Pill>)}
        </Row>
      </Stack>
    </Stack>
  );
}

export default PraxisLotenAcquisitionCockpit;
```

- [ ] **Step 4: Add the GA4 metric strip**

```tsx
<Grid columns="repeat(auto-fit, minmax(180px, 1fr))" gap={16}>
  {snapshot.ga4.recent.map((metric) => (
    <Card key={metric.label}>
      <CardBody>
        <Stack gap={6}>
          <Stat value={metric.value.toLocaleString("fr-BE")} label={metric.label} />
          <Delta value={metric.deltaPct} />
        </Stack>
      </CardBody>
    </Card>
  ))}
</Grid>
```

- [ ] **Step 5: Add GA4 acquisition and page views**

```tsx
<Grid columns="repeat(auto-fit, minmax(320px, 1fr))" gap={20}>
  <Stack gap={8}>
    <H3>Sessions par canal</H3>
    <BarChart
      horizontal
      categories={snapshot.ga4.channels.map((row) => row.name)}
      series={[{ name: "Sessions", data: snapshot.ga4.channels.map((row) => row.value) }]}
      height={240}
      showValues
    />
    <SourceCaption>Source : GA4 · 7 derniers jours · unité : sessions</SourceCaption>
  </Stack>
  <Stack gap={8}>
    <H3>Pages les plus vues</H3>
    <Table headers={["Page", "Vues"]} rows={snapshot.ga4.pages.map((row) => [row.name, row.value.toLocaleString("fr-BE")])} columnAlign={["left", "right"]} striped />
    <SourceCaption>Source : GA4 · 7 derniers jours · unité : vues</SourceCaption>
  </Stack>
</Grid>
```

- [ ] **Step 6: Validate Canvas compilation**

Open the Canvas in Codex and use the automatic `Canvas TypeScript check` as the authority. Expected: `no errors`. Fix all reported imports or prop mismatches before continuing.

### Task 3: Add SEO, contact-action and Maps analysis

**Files:**
- Modify: `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`

**Interfaces:**
- Consumes: `snapshot`, `SourceCaption`, and the Canvas shell.
- Produces: `SearchConsoleSection`, `ContactSection`, `MapsSection`, and `ActionPanel`.

- [ ] **Step 1: Add Search Console summary and query table**

```tsx
<Table
  headers={["Requête", "Clics", "Impressions", "CTR calculé"]}
  rows={snapshot.gsc.queries.map((row) => [
    row.query,
    row.clicks.toLocaleString("fr-BE"),
    row.impressions.toLocaleString("fr-BE"),
    `${((row.clicks / row.impressions) * 100).toLocaleString("fr-BE", { maximumFractionDigits: 1 })} %`,
  ])}
  columnAlign={["left", "right", "right", "right"]}
  striped
/>
```

Use warning row tone only for high-impression queries with CTR below 5%; do not label branded and non-branded intent as equivalent.

When `snapshot.gsc.pages` exists, render a second table using this exact mapping; otherwise omit the table:

```tsx
{snapshot.gsc.pages && (
  <Table
    headers={["Page Google", "Clics", "Impressions"]}
    rows={snapshot.gsc.pages.map((row) => [row.page, row.clicks, row.impressions])}
    columnAlign={["left", "right", "right"]}
    striped
  />
)}
```

- [ ] **Step 2: Add measurable contact actions**

When `contactActions28d` exists, render a bar chart by event. When `therapistActions28d` exists, render a separate table. When `actionPages28d` exists, render a table with page path and action count. Above all three, show:

```tsx
<Callout tone="info" title="Ce que ces chiffres prouvent">
  Une action indique un clic vers un moyen de contact. Elle ne prouve ni que l'appel a abouti, ni qu'un rendez-vous a été confirmé.
</Callout>
```

If either optional array is absent, omit its chart or table entirely.

- [ ] **Step 3: Add the Google Business Profile funnel and trend**

Render calls, directions, website clicks and reservations separately. Use the complete April–August series for the monthly chart:

```tsx
<LineChart
  categories={snapshot.gbp.interactionsByMonth.map((row) => row.name)}
  series={[{ name: "Interactions fiche", data: snapshot.gbp.interactionsByMonth.map((row) => row.value) }]}
  height={220}
  showValues
/>
<SourceCaption>Source : Google Business Profile · avril–août 2026 · unité : interactions</SourceCaption>
```

Exclude incomplete September from the trend while retaining the cumulative headline period in its source note.

- [ ] **Step 4: Add public Maps health metrics**

```tsx
<Grid columns="repeat(auto-fit, minmax(180px, 1fr))" gap={16}>
  <Stat value={snapshot.maps.rating.toLocaleString("fr-BE")} label="Note Google / 5" />
  <Stat value={snapshot.maps.reviews.toLocaleString("fr-BE")} label="Avis Google" />
  <Stat value={snapshot.maps.bookingLinkActive ? "Actif" : "À vérifier"} label="Lien de réservation" />
  <Stat value={snapshot.maps.utmLinksPresent ? "Présents" : "À vérifier"} label="Liens UTM" />
</Grid>
```

- [ ] **Step 5: Add prioritized recommendations and measurement alerts**

```ts
const impactRank: Record<Finding["impact"], number> = { Élevé: 0, Moyen: 1, Faible: 2 };
const orderedFindings = [...snapshot.findings].sort((a, b) => impactRank[a.impact] - impactRank[b.impact]);
```

Render at most five growth findings first; render measurement and conformity findings below a divider in a collapsible card. Each row includes observation, action, impact, confidence and effort.

- [ ] **Step 6: Re-run Canvas TypeScript validation**

Expected result: `no errors`. Resolve all diagnostics before visual inspection.

### Task 4: Verify the standalone analytical artifact

**Files:**
- Modify if required: `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`

**Interfaces:**
- Consumes: complete Canvas.
- Produces: visually and numerically verified dashboard.

- [ ] **Step 1: Scan for forbidden patterns**

Run:

```bash
rg -n 'fetch\(|#[0-9A-Fa-f]{3,8}|linear-gradient|radial-gradient|boxShadow|box-shadow|TODO|TBD' /Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx
rg -n '^import .* from ' /Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx
```

Expected: no first-command matches; every import target in the second command is `cursor/canvas`.

- [ ] **Step 2: Verify numerical invariants**

- GA4 channels total `68 + 13 + 4 + 1 = 86` sessions.
- GSC query clicks never exceed impressions.
- GBP monthly interactions total `161 + 251 + 141 + 152 + 141 = 846`.
- GBP actions are not presented as patients and are never added to GA4 actions.
- Every chart caption contains source, period and unit.

- [ ] **Step 3: Perform the visual hierarchy check**

Open the Canvas beside the chat and verify the header/KPI strip dominates the first screen, sections are not a wall of identical cards, tables do not clip at the normal panel width, no font exceeds `H1`, and both host themes retain contrast.

- [ ] **Step 4: Correct overflow without adding files**

For any overflowing two-column section, use `Grid columns="repeat(auto-fit, minmax(320px, 1fr))"`. Do not create a stylesheet or helper module.

- [ ] **Step 5: Open the final Canvas in Codex**

Open `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx` beside the chat and retain its full path for delivery.

### Task 5: Update longitudinal analytics documentation

**Files:**
- Modify: `docs/vault/05_SEO.md`
- Modify: `docs/vault/10_ROADMAP.md`

**Interfaces:**
- Consumes: verified cockpit and findings.
- Produces: dated refresh contract and explicit measurement-ID discrepancy.

- [ ] **Step 1: Update `docs/vault/05_SEO.md`**

Set `last_validated: 2026-09-05` and add:

```markdown
## Cockpit acquisition

Le tableau de bord Codex `praxis-loten-acquisition.canvas.tsx` réunit GA4, Search Console et Google Business Profile/Maps. Il est rafraîchi à la demande et distingue strictement utilisateurs, sessions, clics et actions de contact.

Propriété GA4 de référence : `p539934309` (« Praxis Loten »), identifiant de mesure `G-F58GSSFKQ0`. La détection `page_language` doit encore intégrer `uk`, `es` et `ku` avant toute analyse fiable de ces trois langues.
```

- [ ] **Step 2: Update `docs/vault/10_ROADMAP.md`**

Set `last_validated: 2026-09-05`. Add the cockpit to completed work and these follow-ups:

```markdown
| Cockpit acquisition GA4 + GSC + Google Business Profile | 2026-09-05 | Canvas Codex, rafraîchissement à la demande |
| 🔴 Haute | Ajouter uk, es et ku à la dimension GA4 page_language | 0.5 session | Oui — qualité de mesure |
| 🔴 Haute | Mettre le consentement Analytics en conformité avec les textes publiés | 1 session | Oui — conformité |
| 🟠 Moyenne | Valider JSON-LD et canonicals/hreflang après déploiement | 0.5 session | Oui — SEO multilingue |
```

- [ ] **Step 3: Validate repository changes**

Run:

```bash
rg -n '(TBD|TODO|G-F58GSSFKQ0|p539934309|page_language|Cockpit acquisition)' docs/vault/05_SEO.md docs/vault/10_ROADMAP.md
git diff --check
git status --short
```

Expected: no whitespace errors; `p539934309`, `G-F58GSSFKQ0` and the three missing language codes are documented; only the two vault files are modified.

- [ ] **Step 4: Commit the documentation update**

```bash
git add docs/vault/05_SEO.md docs/vault/10_ROADMAP.md
git commit -m "docs: add Praxis Loten acquisition cockpit"
```

### Task 6: Deliver the refresh contract

**Files:**
- Read: `/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx`
- Read: `docs/vault/05_SEO.md`

**Interfaces:**
- Consumes: verified Canvas and updated project memory.
- Produces: concise handoff with Canvas link and refresh phrase.

- [ ] **Step 1: Prepare the final summary**

Report the Canvas link, source periods, most important findings, the limit that actions are not confirmed appointments, and the refresh phrase `rafraîchis le dashboard Praxis Loten`.

- [ ] **Step 2: Link the primary deliverable**

```markdown
[Ouvrir le cockpit Praxis Loten](/Users/philippe/.cursor/projects/empty-window/canvases/praxis-loten-acquisition.canvas.tsx)
```

Explain in one sentence that a Canvas is a live visual panel that can stay open beside the chat.
