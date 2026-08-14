# BCN-1412 Component Dashboard — session checkpoint

**Written 2026-08-13. Owner: Kim Bordon.**

Read this first if you are resuming this work in a fresh session. It carries the
context that is **not** recoverable from the code: where the source material
lives, what the research turned up, which decisions are settled and why, and what
is still open. The code itself is on branch
`bcn-1412-component-dashboard`.

---

## 1. What this is

The prototype for **BCN-1412 — Component Dashboard**, the follow-up to
**BCN-1039 — Project Dashboard**. BCN-1412 exists in Jira but is still a
two-sentence pre-Claude stub; **this prototype is intended to become its spec**,
the same way `/prototypes/project-dashboard` + its handoff bundle became
BCN-1039's.

Three routes were built:

| Route | What it is |
|---|---|
| `/prototypes/component-dashboard` | **Level 3** — the per-component homepage (the new work) |
| `/prototypes/components` | **Level 2** — the component index. Was at `/prototypes/component-dashboard`; **renamed** so the detail page could take that name |
| `/prototypes/component-setup-models` | Two competing models of the applicable-commitments redesign, side by side |

Andy's tree, in his words: project is level one, component index level two,
component detail level three, work-area detail level four.

## 2. Source material (not in this repo)

- **Call transcript** — `C:\Users\kim.bordon\Desktop\esa\prototyping\2026-08-13-component-dashboard-kim-transcript.md`
  (Andy Lovseth + Kim, 2026-08-13). The design argument in full.
- **Kim's notes** — `C:\Users\kim.bordon\Desktop\esa\prototyping\component_dashboard_prototyping.txt`
- **Jira** (site `sitkatech.atlassian.net`, cloudId `8ae98cd4-8942-4768-bec3-cdb47c442b9c`):
  BCN-1412 (this epic, stub) · BCN-1039 (parent epic, the model to follow) ·
  slices BCN-1040 / 1041 / 1042 / 1573 / 1574 / 1575 / 1576 / 1577 / 1578 / 1581.
- **Beacon prod repo** — `C:\git\sitkatech\Beacon` (**not** `~/Dev/Beacon`; CLAUDE.md
  was corrected). Its local `develop` runs ~2,000 commits behind `origin/develop`
  — read prod state with `git show origin/develop:<path>`, never from the working
  tree.

## 3. Research findings worth not re-deriving

### The applicable-commitments screen is broken in the data model, not the CSS

This is the load-bearing finding of the whole effort.

- `dbo.ComponentCommitment` stores one row per decision with
  `IsApplicable BIT **NOT NULL**` — **there are two states in storage, not three.**
- "Pending" is manufactured by `dbo.vComponentCommitmentDecisions`, which
  **LEFT JOINs every Component in the project against every Commitment in the
  project** (joined on tenant, filtered to the project's sources) and calls the
  misses pending.
- Therefore: the count is a **cross product** — it measures the project, not the
  component; it **re-inflates** whenever any source document gains a commitment,
  so it can never reach zero; and the view-toggle badge counts the **unfiltered**
  set while the pane below renders **one source document**. "52 Pending" over a
  list of three is the normal case.

Other confirmed defects in `component-applicable-commitment-workflow`: the
loading branch is inverted and never clears on the Applied/Dismissed streams; the
source-document selection auto-resets via a `tap()` side effect on every decision
and view switch; bulk stamps **one rationale over every commitment in the batch**,
silently destroying existing ones; the Construction Activity filter is rendered,
populated and **hard-disabled** because commitments are not associated to
construction activities; `handleSourceBulkAproveOrDenyWithRationale()` throws
"not implemented".

**The load-bearing behavior to preserve in any redesign:** the PATCH runs
`Component.PatchComponentCommitmentsAsync` →
`ReconcileImplementationsForApplicabilityChange`, which **materializes
ActionImplementation rows** onto the component (and deletes deletable ones on
dismissal). That is what fills the Tracker. It is why this screen exists, and the
current UI never says so.

### Component boundary geometry does not exist yet

BCN-1582 (Primary-Entity Boundary Geometry) and its slices BCN-1583 / 1584 are
**Ready for Dev with zero commits and no branches**. `dbo.Component` has **no**
geography column; the only `GEOGRAPHY` in the database is `dbo.WorkArea.Geometry`.
`ComponentBuffer` is a red herring (a site-clearance distance ring).

So the component map draws **work areas**, whose real coordinates the work-areas
endpoint already returns and every current surface throws away (Site Clearance
collapses them to a centroid dot). That is honest today and is exactly what
BCN-1583 slice 1 proposes. Shaping doc: `docs/backlog/primary-entity-boundary-geometry.md`
on Beacon's develop.

### Parent-epic state

- Merged: BCN-1040 (#1243), 1041 (#1245), 1042 (#1246), 1573 (#1277), 1574 (#1271), 1575 (#1278).
- **Open, not merged: BCN-1576 (PR #1279)** — component boxes + **per-user
  starring** (`dbo.UserStarredComponent`, `ProjectDashboardComponentsDto`,
  `ComponentPulseDto`). This is the **parent surface** of the component
  dashboard and the starring model BCN-1412 must agree with. Read that PR before
  slicing.
- **Open, draft: BCN-1577 (PR #1281)** — retires the project-details tab pages and
  trims Project nav. It **edits the same nav array** this prototype changes.
- Note: an ADR number collision exists on Beacon develop — `0029` is used by both
  the bottom-drawer ADR and #1279's starring ADR; the latter needs renumbering.

### Prod surfaces this effort retires or moves

- **Component tabs today**: Tracker (default) · Summary · **Setup** (`/commitments`)
  · Milestones · Work Areas. Everything except the Tracker is in scope.
- **Work-areas grid** (`pages/component-work-areas/`) shows only Identifier + edit
  + delete, while the endpoint returns geometry, measure, county, method, depth
  and custom fields — all discarded. Bulk actions to keep: bulk import (CSV or
  zipped shapefile, two-stage with column mapping), bulk delete, create, select-all.
- **Nav** is defined in `Beacon.Web/src/app/shared/components/side-nav-modern/side-nav-modern.component.ts`,
  `buildSections()`. The change: add `components` to the `library` ("Project")
  section; delete `all-components` from the `tracker` section; delete
  `catalog-components` from `data-catalog`. Note `all-components` and
  `catalog-components` are **different pages** (project-scoped vs. global), so
  removing the catalog entry drops the only nav path to the cross-project list —
  confirm that is intended.

## 4. Settled decisions (and why)

1. **No cover photo on the component header.** A component gets a **mark** — one
   of 20 Lucide glyphs × one of 20 swatches, fill or outline — vertically centred
   beside its name. Andy's argument: a landmark, like a theme-park lot or a
   parking-garage floor, so two dozen components are tellable apart. Also a
   question a user can always answer, unlike "what's a good photo for a launch shaft?"
2. **The mark stores keys, never hexes** (`glyph`, `color`, `style`), so the ramp
   stays themeable and dark-safe. Raw values live only in `theme-beacon.css` as
   `--bcn-mark-*`. Marks carry **no semantic weight** — a red component is not a
   component in trouble; that is why the mark palette and the status palette are
   separate.
3. **The rail is four rows, not six.** Component info · Milestones · Source
   documents · Footprint layers. Species, seasons and construction activities are
   **project-level**; a component copy would imply an override the data model does
   not have. Kim corrected this explicitly during the interview. **Do not
   "fix" the asymmetry.**
4. **Milestones is the only thing a component really edits**, matching prod. Rows
   show the project estimate *and* the component override together, because an
   override only means anything against what it overrides.
5. **Work areas replace starred components** in the main column; the work-areas
   tab is retired.
6. **Component Setup replaces the Setup Wizard card** and opens a **wide** drawer
   ("not a slim side panel but a wider one that comes in").
7. **Same spine, same derivations.** `rollupOver()` is the *same function* the
   project dashboard uses, bound to a narrower action set — urgency must mean
   exactly one thing across both surfaces.
8. **The index exists to route.** "It doesn't need to do anything besides routing
   people." The only investment is making 16 rows scannable: the mark and a real
   colored status taxonomy, plus the map Andy asked for. Overlapping component
   geometry is fine and expected.
9. **Neither setup model is recommended.** Same card shape, same button weight.
   Andy asked for the comparison, not for a winner picked in the prototype.
10. **Vocabulary**: "Actions", never "implementations". "Find matches" /
    "Suggested", never "AI", no persona, no sparkle glyphs.

## 5. What was built

**Pages** — `src/pages/prototypes/{component-dashboard,components,component-setup-models}.astro`.
All three are pure manifests, **zero page `<style>`**.

**New components** (`src/components/bcn/`): `BcnComponentHeader`,
`BcnEntityLogo`, `BcnLogoPicker` (+ `logo-picker.ts`), `BcnWorkAreaBoard`,
`BcnComponentMap`, `BcnComponentDataPanel` (+ `component-data-panel.ts`),
`BcnComponentSetupCard`, `BcnComponentGrid`, `BcnSetupWorkspace`
(+ `setup-workspace.ts`), `BcnSetupQueue` (+ `setup-queue.ts`),
`BcnSetupTeardown`, `BcnSetupNotes`, `BcnSetupModelCard`.

**Refactored**: `BcnProjectTimeline` and `BcnModules` now take optional props
(`actions` / `milestones` / `seasons` / `modules` / `idPrefix` / `title`).
**Defaults preserve the project dashboard byte-for-byte** — it passes no props and
must keep working. `project-actions.ts` gained `rollupOver(actions, type)`;
`rollupFor(type)` is now that bound to `PROJECT_ACTIONS`.

**New data**: `component-detail.ts`, `component-commitments.ts`,
`entity-marks.ts`, `component-index-map.ts`, `component-nav.ts`,
`handoff/component-dashboard.mjs`.

**Featured component**: Bouldin Island Launch Shaft. It is already in
`STARRED_COMPONENTS`, already has actions in `PROJECT_ACTIONS` (scoping is by
`where` **name**, not id), and its 35 work areas are the real `geotech-sites.json`
points inside a Bouldin-corridor bbox. `TODAY = '2026-03-25'`, shared with the
project dashboard.

## 6. Bugs found and fixed — do not reintroduce

1. **Signed right-shift on a hash above 2³¹** produced −0.1-acre work areas.
   All hash-derived shifts must be `>>>`. Same bug was latent in
   `component-index-map.ts`.
2. **Milestone override keys matched no real milestone** (read "0 of 12"). Keys
   must match `MILESTONES` in `project-data.ts` exactly.
3. **`componentRollupFor` was a hand-copied second definition of "overdue"** —
   now delegates to `rollupOver`.
4. **`STATUS_META` carried four raw hexes** that would not follow the theme; now
   token refs. `complete` moved off a generic `#22c55e` onto Beacon's own green.
5. **`--bcn-status-on-hold` did not exist** — added, deliberately *darker* than
   not-started (a pause is a decision; not-started is an absence).
6. **A Leaflet map built inside a hidden panel measures 0×0**, so `fitBounds`
   resolves against nothing and it opens zoomed to the ocean. `BcnComponentMap`
   now watches its own box and re-fits on first real size, so no tab/accordion
   host has to remember to poke it.

## 6b. Settled at review round 1 (2026-08-13)

- **Both setup drawers are flush** to the right edge, full height. Model A's 7vh
  inset was cut — it read as a floating panel where every other Beacon drawer
  comes in flush, and approved patterns are canon.
- **Breadcrumbs above the header band**: project › All Components › this
  component, per the Action List pattern. `PageLayout` renders the trail above a
  bleed band and gained a `breadcrumb-end` slot.
- **Sibling prev/next KEPT**, moved from the header into the end of the
  breadcrumb bar — where prod puts it (`breadcrumbs.component` imports
  `<commitment-navigation>`). Row-level access does not complicate it: the
  component-scope global filter means any list the client can obtain is already
  the in-scope set. Order is **alphabetical**, not the grid's needs-attention
  sort, so the sequence is stable.
- **Board view CUT from the index.** Grid answers "which one" and Map answers
  "where"; Board was a second answer to Grid's question. `bcn-component-board`
  and `bcn-component-card` were deleted with it — recoverable from git (`c82fb54`)
  if a cross-component comparison surface ever wants them.
- **Work-area Create and Bulk Import stay UNWIRED on purpose.** Prod's
  `work-area-upsert-dialog` and `work-area-bulk-import-dialog` are reused
  unchanged, so neither is being redesigned. A prototype approximation of both
  was built and then cut (2026-08-13): it could not match their styling, and a
  nearly-right dialog reads as a redesign proposal — a more expensive kind of
  wrong than a button that opens nothing. The instruction lives in the handoff
  spec's work-areas section so the epic carries it. **Do not read their absence
  as license to invent them.**
- The bulk bar no longer covers the grid search — the selection group sits beside
  the chrome, not over it.
- **No evidence surface on the component dashboard.** The retired Summary tab
  ended in a "Highlighted Evidence of Compliance" grid; it is not being ported.
  That grid is fed by `dbo.ComponentSummaryEvidenceOfCompliance`, an opt-in join
  **nothing in develop writes** (no UI touches it, `EvidenceOfComplianceUpsertDto`
  has no field for it), and its template renders nothing at all when empty — which
  is why it is invisible in QA. Evidence already has homes: the app-wide drawer
  attaches it, the Data Catalog lists it. Re-confirm the no-write-path finding at
  slicing. A component-scoped evidence view may earn its place later, as a new
  surface designed on its own terms — not this grid resurrected.
- **The Component details card carries only ComponentDto fields.** An invented
  `files` array was cut (Component has no Files field; component files are
  `EvidenceOfComplianceFile` rows on evidence records). Status and the project
  link are also off it — the header chip and the breadcrumb own those.
- **The header lost its T·M·R pulse strip and its "Edit component" button**, and
  the mark wears the project seal's circle/ring/lift at 72px (not the seal's
  92px: the seal overlaps the hero photo so only 46px sits in the band, and a
  92px mark fully in-band became the tallest thing in it and took the band's
  height away from its content).

## 7. Open questions for review

- Should "new since last review" be **per user or per component**? Per component
  is one stored date and matches the decision record; per user is friendlier and
  is a new table.
- **Can a decision be undone?** There is no unset path today. Both models assume
  undo; neither shows what happens to actions a dismissal already deleted.
- **Does `Suggested` earn its place?** It matches on shared species or requirement
  type with commitments already applied — a weak signal on a consequential decision.
- Removing `catalog-components` from nav drops the only nav path to the
  cross-project component list. Intended?

## 8. Lego gaps to file with `/request-lego`

- **No icon/symbol picker** and no keyed closed-set swatch group (`esa-color-picker`
  is a freeform hex picker — wrong data contract).
- **`esa-bulk-action-bar`** — now hand-built twice (permit-tracking, work-area board).
- **`makeStatusRenderer` cannot be token-driven** (its contract demands a literal hex).
- **`esa-icon-button` cannot express a toggle** (no `pressed`, no attribute pass-through),
  so every star sets `aria-pressed` from JS and ships unset in SSR HTML.
- **`esa-progress-bar` and `esa-filter-pills` are `.astro`-only** — runtime-changing
  values force reaching into their internals.
- **`esa-side-dialog`** takes only `left`/`right` (not `start`/`end`) and has no body-padding hook.
- **`esa-select` takes its value only as a property**, so an SSR'd select cannot carry
  its initial selection in markup.
- **`esa-switch-toggle` has no `label-hidden`**, so a per-row switch is either
  unnamed or repeats its label on every row.
- **`esa-map`** is documented in the catalog but ships no source; three Leaflet maps
  in this spoke now re-derive the same idiom.

## 9. Where things stand / next steps

- `npm run build` **passes** (194 pages). All three routes verified in the browser:
  counts agree with their lists, all 20 glyphs render with valid geometry, the
  index map plots 16 components along the real alignment.
- Nothing was pushed. Work is committed on `bcn-1412-component-dashboard`.
- **Next**: `/design-qa` for the quality pass → then **`/epic-planning`** to write
  BCN-1412, pointing it at this repo, this checkpoint, the transcript, and Kim's
  notes. A handoff spec already exists at
  `src/data/handoff/component-dashboard.mjs`; run `npm run handoff:changed` to
  generate the bundle the epic will cite.
- The old `public/handoff/prototypes-component-dashboard/` bundle is now stale
  (that route changed meaning) and the index's bundle needs regenerating under
  `prototypes-components/`.
- Kim also wanted to **document feedback on the end-to-end prototyping process**
  (prototype → epic → code → PR review) as she goes — first time through the whole
  loop. `docs/system-improvement-ledger.md` is the existing home for that.
