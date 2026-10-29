# Resume prompt: Study Planning prototype (plans-repo)

**Paste everything below the line into a fresh Claude Code session rooted in `beacon-design` (with `../ecology` beside
it).** Last updated 2026-10-28, at commit `ef908bc4c` on `claude/draft-mode-concepts`.

---

We're continuing the **Study Planning prototype** at `/prototypes/plans-repo/` in this Astro spoke. Andy Lovseth (ESA
product designer) steers; you build. Read `CLAUDE.md` first (component-first lookup order, `bcn-lego-checked:` escape
hatch, Title Case labels, semantic tokens only). Then read this file to the end before touching anything.

## Where things are

- **Branch:** `claude/draft-mode-concepts`. Commit and push after each chunk; never push to `main`; no PR unless Andy asks.
  Commit trailer: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` plus the session line the harness gives.
- **Preview:** https://esassoc.github.io/beacon-design/preview/draft-mode-concepts/prototypes/plans-repo/ (gh-pages,
  only `preview/draft-mode-concepts/` is ours). Refresh it when a chunk lands (recipe below).
- **Dev server:** `npx astro dev --port 4321` (no base). It dies when the container restarts; restart it.
- **Checks:** `scripts/plans-repo-checks/*.mjs` (Playwright against the dev server; see `lib.mjs`). Each prints
  `PASS`/`FAIL` lines and a total. Last green on this commit: setup 26, editmodal 13, edraft 15, custom 21, sheet 19,
  revbudget 5, pub 15, ids (deterministic links, not-found, Guest stop).
- **Type check:** `npx tsc --noEmit -p .` and grep for the files you touched. Many unrelated files have old errors;
  only yours matter.

## The surfaces

| Route | What it is |
|---|---|
| `plans-repo/` | Plans index: Sent to You (transmittal inbox) on top, then the plans. New Plan, gear opens Plan Settings. |
| `plans-repo/plan/?id=` | A plan: four tabs on the divider (Schedule Gantt, Budget sheet, Documents, Deliverables), About panel, drafts (plan menu), Review and Publish modal. |
| `plans-repo/element/?plan=&el=` | An item's page: two columns of cards per its level's layout. `&draft=` shows a draft; `&customize=1` opens Customize Page. |
| `plans-repo/transmittal/?plan=&id=` | One transmittal (sender's record or recipient's Confirm Receipt). |
| `plans-repo/inbox/` | Sent to You for whoever is signed in (`?user=` switches persona). |
| `plans-repo/revisions/` | Older revisions page (the review says retire it for the modal). |

Personas: default user is Andy (Owner everywhere). `?user=Alex%20Rivera` (Editor), `Morgan%20Ellis` (Contributor),
`Rowan%20Hale` (Guest, agency reviewer).

## Architecture map (read the file headers; each explains itself)

- **State:** `src/lib/planning/plan-repo.ts` (repos, versions, drafts, attributes, `savePlanConfig`, seeding,
  `SEED_FORMAT` 8), `plan-server.ts` (mock API in localStorage), `plan-records.ts` (documents, transmittals, receipts,
  completion, comments, health), `seed-ids.ts` (deterministic ids while seeding, so pasted links resolve anywhere).
- **Samples:** `src/data/sample-plan.ts` `SAMPLES` (fisheries, geotech, habitat). Fisheries uses the Study Program
  config; the other two use Blank.
- **Configuration:** `src/lib/planning/plan-config.ts` (fields, `LevelConfig`, the 11 module keys and kinds,
  `TEMPLATES`), `plan-templates.ts` (saved templates).
- **Element page:** `element-context.ts` (`ElementContext`, `moduleShows`, hrefs incl. `CUSTOMIZE_HREF`),
  `src/components/bcn/element-module.ts` (module contract), `BcnElementModule.astro` (card shell), `plan-element-page.ts`
  (placement, Edit flow), one `BcnElement<Name>.astro` + `element-<name>.ts` per module.
- **Customize Page:** `BcnElementCustomize.astro` / `element-customize.ts` (scope bar, grips, switches, ghost cards, card
  options), `BcnLevelFieldsDialog.astro` / `level-fields-dialog.ts` (a level's fields), `BcnFieldDefDialog`.
- **Edit:** `BcnElementEditDialog` / `element-edit-dialog.ts` (the form), then the plan's `BcnPlanRevisionsDialog`
  in single mode on a transient draft (`startEditDraft`).
- **Plan Settings:** `BcnPlanSetupDialog.astro` / `plan-setup-dialog.ts`: extra-wide modal, left section nav (General,
  What It Tracks, Levels, People, Lists, Template, Danger Zone). New Plan uses the same modal.
- **Plan page:** `BcnPlanRepoPage.astro` / `plan-repo-page.ts`; tabs `BcnDividerTabs`; filter band `BcnViewToolbar`
  (records) and the scope (`BcnPlanGanttRange stacked`) under the panel header; record tables on
  `src/styles/bcn-record-table.css`; sheet `plan-budget-sheet.ts`.

## Andy's decisions (2026-10-28, all still standing)

1. No fact strips on element pages; status, health, dates and owners are the Details card. Side column 360px, as the
   data catalog pages.
2. Element cards wear the About panel's and the monitoring widgets' chrome (muted header band, 8px radius).
3. A level's page layout is customized on any of its items' pages, not in a settings screen (Customize Page, Owners).
4. Plan basics live in a modal, extra wide with a left section nav ("stacked is not good enough").
5. Edit on an item page is one large form, then Review and Publish (on Live), Save to Draft (in your draft).
6. One filter band on every plan tab, directly under the panel header; same controls; striped record tables at 13px.
7. Draft mode: the panel header fills with the draft owner's color, white text (`fill`, the default). Studies kept:
   `&drafthead=tint|frame|ribbon|full|none`.
8. The Last Update line in the plan header is right-aligned. (The review called that row a fact strip; Andy kept it.)
9. One word for every role: Draft ("Scenario" retired). Buttons small, ghost or outline in headers.
10. Copy: Title Case labels, sentence case descriptions; no em dashes or middots in UI copy; no colored left borders.

## Gotchas that cost time

- `esa-dialog` sends no `close` event when code sets `open = false`; watch the reflected `open` attribute with a
  `MutationObserver`.
- A lego's own `display` beats `[hidden]`; add `:global([hidden]) { display: none !important; }` in the container.
- Astro: `:global(...)` inside `:is(...)` doesn't compile to what you expect; write separate rules. Named slots passed
  from a conditional expression are dropped. `esa-card` renders its `actions` slot only with its default header.
- `esa-switch-toggle` `label-position` is `before` or `after`. `esa-filter-dropdown` emits `selection-change`
  (`detail.value`); clear one with `_selected = []`.
- `--grid-row-stripe-bg` resolves to a value one step off the raised panel, so stripes vanish; the record tables mix
  the sunken surface instead.
- Bumping `SEED_FORMAT` wipes every browser's local plans once (the preview's too).
- The container has no `rsync`. The full build is ~573MB, so the preview carries only the plan pages (other side-nav
  links 404 there).

## Refreshing the preview

```sh
rm -rf dist && NODE_ENV=production npx astro build --base /beacon-design/preview/draft-mode-concepts/
# in a gh-pages checkout (sparse is fine), replace and push only preview/draft-mode-concepts/:
P=preview/draft-mode-concepts; D=<repo>/dist
rm -rf $P/_astro $P/prototypes/plans-repo $P/prototypes/fish-detail $P/prototypes/data-catalog-obligation/{3-032,1-011}
mkdir -p $P/prototypes/data-catalog-obligation
cp -r $D/_astro $P/_astro && cp $D/beacon-icon.svg $P/
cp -r $D/prototypes/plans-repo $D/prototypes/fish-detail $P/prototypes/
cp -r $D/prototypes/data-catalog-obligation/{3-032,1-011} $P/prototypes/data-catalog-obligation/
git add -A preview && git commit -m "Preview: ..." && git push origin HEAD:gh-pages
```

## Open work, in priority order

1. ~~The edit model~~ **Done: draft first.** An item's Edit saves to your draft (started or reused) and the page
   follows it there; Review and Publish sits in the item page's header in your draft. If your own draft already
   changes the item, Edit opens it there. Publish Now shows only for Owners and Editors when no open draft changes the
   item (`draftsTouching` in `plan-repo.ts`) and goes through only when nothing else moves; otherwise the form says
   why. Check: `editmodal.mjs` (26).
   Dependencies are drafted too (Andy, 2026-10-28): a link's lag or Unlink goes to your draft (`PlanRevision.links`,
   `withLinks` in the mock's `previewDraft`, applied first in `publishDraft`); Review and Publish lists them under
   Dependencies and warns when another open draft changes the same items (`draftOverlaps`). A lag change doesn't
   move successors, as it didn't on Live; worth a look. Check: `links.mjs` (16).
1b. **Done: building a plan from scratch** (the build-from-scratch review, 2026-10-28). Drafts carry structure
   (`PlanRevision.structure`: add, remove, move, order, link; `withDraft` in the mock's `previewDraft`;
   `landStructure` + `remapRevision` at publish turn temporary `new-…` ids into real ones). The plan page: an empty
   state with Add {Top Level}, a header Add, each outline row's + Add {Next Level} and menu (Move Up, Move Down,
   Move To…, Delete), the drawer creating in a draft and its Waits On working in drafts (`links` adapter), the
   budget sheet starting your draft on Live, Planned Start and End in Plan Settings (a year in a new plan's name
   fills them) as the chart's window before any dates. Review and Publish lists Added, Deleted, Outline and
   Dependencies. Check: `outline.mjs` (22).
2. **Effects in the review.** Review and Publish should list conflicts created or worsened, overruns, budget left in
   fiscal years an item no longer covers, and deliverable due dates that moved. In single mode drop the slider and
   the Compare toggle; the From column shouldn't show the previous revision's own note.
3. **Gantt legend and draft emphasis.** A compact legend in the Gantt header (end caps, conflict outlines, Scheduled
   windows, planned windows); conflicts stay full strength in a draft instead of fading; done items get a status mark;
   the tooltip names the conflict ("Starts 14 days before its predecessor ends").
4. ~~The Live drawer is a dead end~~ **Done, draft first:** on Live the drawer edits; Save to My Draft opens your draft
   with the edit; Publish Now on the same terms as the item page (a cascading one goes to your draft instead, with a
   warning toast). Check: `drawer.mjs` (14).
5. **Revisions: one UI.** Keep the modal, retire `/revisions/`, point the index's count at the modal.
6. **1024 and 1280.** Content overflows at 1024 and the About rail is pushed off. Below 1280, About becomes an
   esa-side-dialog; the bands wrap inside the panel.
7. **Status words.** One Health vocabulary (On Track, At Risk, Late, Done), shown only when it adds information;
   Progress card uses one denominator and says how it's weighted; one receipt pattern (esa-badge).
8. **Seed a late and a due-soon deliverable relative to today**, so "Late or Due in 30 Days" isn't empty in a demo.
9. Smaller: badge contrast just under AA (On Track 4.21:1); the floating dock covers rows and the review footer;
   the index row's Schedule and Budget chips look like buttons; one date formatter (Mon D, YYYY, time only today);
   the inbox's Confirm Receipt is a badge, not a button; completed items still say "Moves when the plan is
   rescheduled".

## Done on 2026-10-28 (don't redo)

Settings page retired for the modal; Customize Page; filter band and striped tables; real geotech and habitat samples;
deterministic ids; Plan Not Found and Guest stops; Guest plans off the index; Scenario retired; Budget sheet widths
(240px names, years flex with a 100px floor, months on every year, height stops at the window when it scrolls
sideways); receipts after sends; Added and Letter Date columns; breadcrumbs keep the item's case; singular counts;
middots gone; one Edit and one Open in Plan on item pages; draft header fill; Last Update right-aligned.
