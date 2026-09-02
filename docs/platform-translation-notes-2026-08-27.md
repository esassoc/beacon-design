# Platform translation — proposed changes

Drafted **2026-08-27** from an audit of the `bcn-*` catalog and the handoff pipeline.
**No code was changed.** Everything below is proposed work, with the evidence that
motivated it, written so it can be picked up cold.

Related: `system-improvement-ledger.md` (hub-fix ledger — D1 and D2 belong there),
`NEEDS.md` (ecology↔Beacon gap analysis), `CLAUDE.md` (the lookup order).

## Intent

These changes serve two outcomes:

**Reuse inside the spoke.** A new prototype should start from the patterns this spoke has
already established, instead of re-deriving them. Today it can't: 137 components sit in
one flat directory with no index, no tier marking, and no usage signal, so a pattern is
found only if someone happens to remember it. `BcnFilterBar` was hand-copied into six
pages before anyone extracted it.

**Mapping into Beacon.** When a prototype becomes a real feature, someone has to decide
what maps cleanly onto an existing platform pattern, what should extend one, and what is
genuinely new. That decision needs facts about each piece of the prototype — what it is,
how widely it's used, what platform pattern it's closest to, and where it deliberately
departs from prod. Most of those facts exist somewhere in this repo already; none of them
currently survive the handoff.

**Beacon owns the mapping.** The matching logic — deciding what substitutes for what — is
implemented on the Beacon side, where the target library lives and where the port actually
happens. This repo's job is narrower: stay a sandbox where new ideas can be tried, and
hand over an honest, legible description of what was built. Nothing here should enforce
platform conformance or gate a prototype on it.

---

## Context a future agent needs

**Tiers.** `esa-*` legos live in the hub (`@esa/ecology`); `bcn-*` components are this
spoke's; Beacon prod's Angular `ui-*` is the visual source of truth. Tokens and atoms are
effectively **one system** — the hub was ported *from* Beacon's Angular lib
(`component-tokens.css`: "Faithful port of the Angular lib… aligned with Beacon's
UiSize"), so only a small documented delta diverges (secondary color, warm-vs-cool
neutrals, form heights, mono face). Divergence is concentrated in the **composed** tier,
where Beacon has no counterpart — its `shared/ui/` is ~35 components, all single-purpose.

**Use ecology's vocabulary, not atomic design.** "Molecule" appears nowhere in the hub,
this spoke, or spoke-kit — it came from a Slack conversation. Ecology's ladder:

| Term | Covers | Defined in |
|---|---|---|
| Layout primitives | `.stack` `.cluster` `.repel` `.grid` `.sidebar` `.switcher` `.frame` `.reel` | `@esa/tokens/layouts.css` |
| Typography roles | `.type-page-title` `.type-card-title` `.type-body` … | `@esa/tokens/type-roles.css` |
| Legos | `esa-*` generally | the catalog |
| Mid-tier legos | "composed patterns above the atom level" — `esa-page-header`, `esa-stat`, `esa-app-shell` | `lego-lookup.md:59` |
| Section-level | "atoms through section-level" | `lego-lookup.md:70` |
| Page archetypes | the `/patterns` Pattern Library | hub site |

**The handoff has two paths** (`scripts/gen-handoff.mjs`), branching on whether a spec
exists at `src/data/handoff/<slug>.mjs`. 16 specs → **15 curated bundles, 23 fallback**.

| | Curated | Fallback |
|---|---|---|
| Intent / decisions / gotchas / acceptance | ✅ | ❌ |
| Interactive states (dialog open, input filled) | ✅ via `apply` recipes | ❌ resting state only |
| `:hover` / `:focus` CSS | ✅ | ❌ stripped |
| Per-section HTML + CSS + tiered tokens | ✅ | ✅ |
| Component identity (`components.md`) | ❌ not written | ⚠️ written, drops all `bcn-*` |
| Standalone `index.html`, full `styles.css` | ❌ | ✅ |

Intent and component identity never travel together today. That's what C3 + C10 fix.

**Machinery that already exists** (don't rebuild it):

- `ecology/scripts/lib/component-inventory.mjs` — exports `extractPurpose`,
  `extractProps`, `componentName`, `inventoryEntry`, `propOverlap`. Handles `.astro`
  frontmatter/leading comments and `.ts` class comments.
- `ecology/scripts/decomposition-context.mjs` — **already calls it over
  `src/components/bcn/`** to build `spokeInventory` + `reuseHints`. The spoke catalog is
  already computed; it is just never rendered, never exported, and read only post-hoc by
  the (read-only, non-blocking) decomposition-reviewer.
- The hub site already ships two **generated** indexes — `/components` (every lego with
  summary + props) and `/patterns` (page archetypes), plus `ComponentDoc.astro` /
  `PatternDoc.astro` layouts. The spoke tier never got the equivalent.

---

## Verified defects

### D1 — the handoff drops every `bcn-*` component *(hub; ledger candidate)*

`@esa/handoff/src/components.mjs` hardcodes the spoke prefix (`origin/main`, at the file
walk :23, the class scan :42, and `origin:` :49):

```js
if (/^(esa|cbf)-/.test(cls)) blocks.add(blockRoot(cls));
```

`cbf-` is cb-fish. `prototypes/component-dashboard` imports 11 `Bcn*` components; its
`components.md` lists **8, all `esa-*`, zero composed components** — and the boilerplate
names the wrong spoke. `capture.mjs`'s section-labeling regexes hardcode `(cbf|esa)` too,
so `bcn-*` classes never contribute a section name.

Second, independent miss: source resolution matches class root to filename, but emitted
roots don't match — `bcn-cmp`, `bcn-gd`, `bcn-board` vs `BcnComponentSummary.astro`,
`BcnGuidanceDrawer.astro`, `BcnWorkAreaBoard.astro`. Fixing the prefix alone still
resolves most sources to `null`.

**Effect:** the artifact built for porting tells Beacon "this page is 8 atoms and a flat
stylesheet." The composed tier is erased at the boundary.

### D2 — `splitRules` flattens media queries into unconditional rules *(hub + spoke; live; correctness)*

In `@esa/handoff/src/capture.mjs`, inlined into `scripts/lib/capture-curated.mjs` —
**both need fixing.** The regex `/([^{}]+)\{([^}]*)\}/g` has no concept of nesting:

```
input:  .a{color:red}@media (max-width:600px){.a{color:blue}.b{gap:0}}.c{margin:0}
output: [".a", ".b", ".c"]
```

The `@media` header is skipped as an at-rule, **the first inner rule is swallowed with
it**, and every remaining inner rule is emitted **stripped of its wrapper** — a mobile
override becomes a desktop rule. The code comment claiming at-rules are "passed through
whole" is wrong. `@keyframes` degrades into invalid CSS (`to { … }` as a top-level rule).

The fallback path is safe by accident (coverage marks non-matching media rules unused; 0
of 23 bundles leak). The curated path skips coverage, so it **fires**:

- Source `src/components/bcn/BcnAttentionPanel.astro:305` —
  `@media (max-width: 40rem) { … .bcn-apanel__area { grid-column: 1 / -1; } }`
- Shipped `public/handoff/prototypes-monitoring-compliance-dashboard/manifest.json`
  contains `.bcn-apanel__area { grid-column: 1 / -1; }` **unconditionally**.

13 multi-rule media blocks in source can trigger it; worst is `BcnCiaReport.astro`'s
`@media print` (11 rules, several `:global(.topbar) { display: none }`-shaped) — not
curated today, so adding a spec for `due-diligence-report` would activate it.

**Fix:** brace-depth-aware pass that recurses into at-rule bodies and re-emits children
*wrapped*.

### D3 — broken lookup paths

Reuse **is** instructed — `lego-lookup.md:105` and `new-prototype.md:49` both require
checking for an existing spoke component before writing code. The paths just don't
resolve, silently.

| | Documented | Reality |
|---|---|---|
| L1 | `~/Dev/*-design/src/{pages,components}` (canonical-reference table + grep recipe) | `~/Dev` holds only `ccsp/`, `ccsp-design/`. This spoke is at `C:\git\esassoc\beacon-design`. The prescribed grep returns **zero results, exit 0** |
| L2 | Canonical-reference "Filter bar" row → `permit-tracking.astro` | Points at the *page*, not `BcnFilterBar.astro`, the component that page's glue became. Table is 2 rows total |
| L3 | `CLAUDE.md` tier 2 → `C:\git\sitkatech\Beacon\…` | Does not exist; actual checkout is `C:\git\esassoc\beacon` |
| L4 | `lego-lookup.md:145` → `~/Dev/Beacon` | Also absent. The fallback clause reads *"skip to Tier 3 and say so in your `bcn-lego-checked:` reason"* — so the documented response to the broken path is **build bespoke, with a sanctioned justification** |
| L5 | `git show origin/develop:<path>` | Correct advice (local `develop` is **125 commits behind**), but nothing says to fetch — last fetch **2026-08-10**, so the ref is itself stale |

Two of three lookup tiers dead-end, and L4 licenses skipping to bespoke.

Drift in the L5 window is real: `Beacon.Web/src/app/shared/ui/` moved **25 files,
+126/−40**. But `variables/_colors.scss` — the source of truth cited by
`theme-beacon.css` — did **not** change, so the token layer remains accurate.

### D4 — the fallback path loses state and responsive CSS

`public/handoff/prototypes-settings-feature-flags/styles.css`, 232 rules: `:hover` 0,
`:focus` 0, `:focus-visible` 0, `:active` 0, `@media` 0, `@keyframes` 0. Single viewport
(1280×720). Lit legos appear as empty tags (`<esa-switch-toggle>` ×14,
`<esa-side-dialog>` ×2) since `outerHTML` doesn't serialize shadow DOM.

Writing a curated spec for a route is the existing remedy — `capture-curated.mjs`
deliberately dropped the coverage pass for determinism *and* to keep `:hover`/`:focus`.

### D5 — AG Grid DOM dumped into a curated bundle *(spoke)*

`public/handoff/prototypes-requirement-tracker/claude/requirements-grid.md` is **290 KB of
that bundle's 351 KB**; 1,347 of 4,177 lines are AG Grid internals. Beacon also uses AG
Grid — it needs the column set and theme decisions (the prose supplies these well), not
the library's rendered DOM. Class-partition can't see `ag-*`, so that section resolves 9
tiered tokens vs 86 for page-header.

**Fix candidate:** let a spec section opt out of markup capture when the DOM is a
third-party render.

---

## Proposed changes

| # | Change | Addresses | Side |
|---|---|---|---|
| **C1** | Fix the five broken paths: correct the prod path in `CLAUDE.md` and `lego-lookup.md`; make the cross-spoke recipe resolve or derive locations; refresh the canonical-reference table and point the filter-bar row at `BcnFilterBar`; add an explicit `git fetch` before any `origin/develop` read | D3 | hub + spoke |
| **C2** | Brace-depth-aware rule splitting, both copies of `splitRules` | D2 | hub + spoke |
| **C3** | Derive the spoke prefix from config; resolve component source by scanning each file for the class roots it *defines*, not by filename match | D1 | hub |
| **C4** | Declare **durable** facts per component: tier, legos composed, closest Beacon `ui-*` (or "none"), the `bcn-lego-checked` rationale. All of this already exists as prose in the header comments — structure it, don't author it | catalog has no tier marking | spoke |
| **C5** | **Derive** volatile facts at build time: consumer count, tenant breadth, last-adopted date, adopter list, promotion candidacy | facts that rot if hand-written | spoke |
| **C6** | Point the hub's existing catalog generator at the spoke tier. Render `/design-system/patterns` (reusing `ComponentDoc.astro`) and emit `catalog.json`, **ordered by last-adopted** | no catalog to read | spoke |
| **C7** | Scope the awareness surface to the **effort/group** (`prototypeGroups`), not tenant | agent isn't told what its effort already has | spoke |
| **C8** | Emit promotion candidates: composed-tier components crossing ≥3 prototypes or ≥2 tenants. Signal only — never auto-promote | `/request-lego` is manual, no in-repo record | spoke → hub |
| **C9** | Add `platformDelta` as a first-class handoff spec field — `{ pattern, prodBehavior, whyDiverged, portGuidance }` per section, alongside `intent` / `decisions` / `gotchas` / `acceptance` | divergence from prod is an unstructured prose habit in ~5 specs | spoke |
| **C10** | Ship `catalog.md` inside every handoff bundle: the components that page uses, each with identity, reuse evidence, last-adopted, closest `ui-*`, and `platformDelta`. Curated bundles must carry component identity too | intent and identity never travel together; no cross-bundle view | spoke |
| **C11** | Decide whether Beacon grows a composed tier (`ui-filter-bar` etc.) or ported components land in a feature-shared layer by convention | there is nowhere for a match to land | **Beacon — external blocker** |

C10 is the deliverable the Beacon-side mapping logic consumes. Everything upstream exists
to make it truthful. C11 gates what the mapping can *do* with a match; it can proceed in
parallel but not be skipped.

### What C10 should read like

> This section is `BcnFilterBar` — used on 2 prototypes across 2 tenants, last adopted
> 2026-08-24, closest platform pattern `ui-filter` (covers one dropdown, not the bar),
> diverges from prod because prod carries this glue inline on six pages.

Once entries carry usage counts, a component appearing in eight bundles is visibly the
*same* component in all eight, rather than eight unrelated page sections.

---

## Constraints these changes must respect

**Awareness, not enforcement.** This repo is a sandbox. Nothing here should gate a build.
`propOverlap` is already documented as "a GROUNDING HINT, never a verdict" — hold the
whole catalog to that posture.

**Derive volatile facts; never hand-author reusability.** "Single-use" measures *age*, not
reusability. Median birth date is 2026-07-30 for single-prototype components vs 2026-07-15
for multi-prototype; 37 of 63 single-use components were created in the last 30 days. Late
adoption is the norm — `BcnFilterBar` was born 07-24, sat at one consumer for a month, and
now spans two tenants. Any hand-written stability field would have marked it non-reusable
during exactly the window when advertising it mattered most.

**Rank the catalog by last-adopted, not by creation date.** Birth date cannot separate a
live pattern from a dormant one:

| Component | Born | Last adopted | |
|---|---|---|---|
| `BcnKeyValue` | 06-09 | **08-24** | live |
| `BcnChangeLog` | 06-09 | **08-24** | live |
| `BcnStatusChip` | 06-10 | **08-14** | live |
| `BcnRequirementReference` | 06-08 | 06-10 | dormant |
| `BcnNotifications` | 06-09 | 06-09 | dormant |
| `BcnEvidenceList` | 06-09 | 06-09 | dormant |

All six were born within 48 hours. Only 6 of 87 components with consumers have gone >60
days without a new adopter, so the dormant set is small — but the signal discriminates
cleanly and costs nothing. Last *edit* of the component file is a weaker proxy; it moves
on refactors that imply no new adoption.

**Preserve documented divergence from prod.** Specs already record deliberate deviations
with reasons (*"Prologis wants a data grid, not the Kanban prod defaults to — this is the
whole reason the prototype exists"*; *"prod has no KB list / glossary / annotation surface
/ marketing chrome"*). C9 structures this habit; it must not suppress it.

---

## Reference data (as of 2026-08-27)

Of 117 `.astro` components in `src/components/bcn/`: **24** used on ≥2 prototype routes,
**63** on exactly 1, **30** on no prototype route (design-system/index/specimen-only),
**2** with no references anywhere (`BcnConsultationLog`, `BcnSiblingNav`).

**13 components span ≥2 tenants** — `BcnKeyValue` spans all five (aws, beale, dcp,
platform, prologis), which is a hub-promotion argument, not just a Beacon-porting one.
Also: `BcnStatusChip`, `BcnObservationMap`, `BcnDiscussion`, `BcnFilterBar`,
`BcnFootprintMap`, `BcnComponentGrid`, `BcnChangeLog`, `BcnStatusSelect`,
`BcnTimelineExplorer`, `BcnOversightHero`, `BcnAttentionPanel`, `BcnMonitoringStats`.

**Caveat:** 39 of 117 components resolve to zero tenants because they're used only on
routes absent from `src/data/prototypes.ts`. The registry is incomplete as a data source —
C5 must tolerate unregistered routes or the registry must be completed first.

---

## Open questions

1. Where does the generated catalog live? Nothing in `docs/` today is machine-generated or
   machine-read; `src/pages/design-system/` is where reference material renders to humans.
2. Complete `prototypes.ts` so every route is registered, or make the derived index
   tolerate unregistered routes?
3. Prototypes are meant to ship self-contained (own compiled CSS/JS/HTML, unaffected by
   later ecology changes). How does that interact with a shared `bcn-*` catalog?
   Snapshotting at publish time is the obvious answer; it isn't built.
4. `PrototypeStatus` already has `'archived'` — is it used? Is there a retire flow?
5. Visual side-by-side for gray-area elements: the curated manifest already holds
   per-section HTML + CSS and the inspector renders section-by-section. The missing half is
   a Beacon-side render of the candidate `ui-*`.

## Order of work

```
C1 (paths)  →  C3 (identity)  →  C6 (catalog, ordered by last-adopted)
                                        ↓
                              C9 (platformDelta)  →  C10 (catalog.md in the bundle)
```

C1 first: until the paths resolve, the Ecology → Beacon → `bcn-` lookup can only succeed
at tier 1, and everything else assumes a lookup that dead-ends. C2 is independent and can
land any time — it's a correctness bug, so sooner is better. C10 depends on C3; without
component identity in the bundle there is nothing for `catalog.md` to key on.
