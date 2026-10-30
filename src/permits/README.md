# Permits — ESA design pass on the Permit Tracker

A fork of Laura's **Permit Tracker** (`/prototypes/permit-tracker`), re-shelled as an
ESA-internal micro-app for permits, with one outward-facing view. Served at
**`/prototypes/permits`**. The Permit Tracker itself is untouched; the two prototypes
keep separate browser state (`esa-permits:` vs `permit-tracker:` localStorage keys).

## Layout

| Path | What |
|---|---|
| `src/permits/components/` | Laura's permit components, forked. Filenames kept, so `diff -r src/components/bcn src/permits/components` shows the design pass per file. New: `BcnPermitMix`, `BcnTeamButton`, `BcnShareProject`. |
| `src/permits/data/` | The fixture and permit rules, forked (ROUTES point at `/prototypes/permits`). The CAO research JSON is read from `src/data/` (shared, not copied). |
| `src/permits/lib/` | Browser stores (namespaced keys), `share-store.ts`, `grid-theme.ts`. |
| `src/permits/layouts/` | `PermitsBaseLayout` (Beacon theme + ESA brand layer), `PermitsLayout` (esa-app-shell with the ESA lockup). |
| `src/permits/styles/theme-esa.css` | The ESA brand layer. |
| `src/pages/prototypes/permits/` | Routes, including `shared/[id]` (the client view). |
| `public/brand/esa-logo*.svg` | The ESA logo, from esassoc.com. |

Shared spoke components (`BcnStatusChip`, `BcnGridChrome`, `BcnFileRow`, `BcnChangeLog`, …)
are imported from `src/components/bcn/`, not copied.

## Brand: ESA over Beacon

`<html data-theme="beacon" data-brand="esa">`. Every Beacon refinement carries over (the
status-color standard, warm neutrals, weight 400, 4px radius, Roboto Mono). Color is
rationed: the only saturated color on a page is status meaning.

- **Brand**: ESA teal's hue (H 176) with the saturation taken out: `#265956`
  (hsl 176 40% 25%, OKLCH chroma 0.055, 7.9:1 for white text). Buttons, links, the active
  nav label. Hover and selected fills are effectively neutral.
- **Chrome**: pure neutral, Beacon's measured values on the design layer's surface recipe
  (`ecology/packages/design-layer/surface-recipe.md`): top bar `#efefef`, canvas and
  sidenav `#fafafa` behind a hairline, borders `#bdbdbd` / `#dcdcdc`. `esa-app-shell`
  paints bar and rail the other way round by default, so the layout re-points them
  (ledgered as a hub gap).
- **Grids** drop Beacon's filled teal header band for a quiet neutral header
  (`grid-theme.ts`): every grid here sits in a card that already names it.
- **Accent**: the stamp's ink, `#c9682a` (text step `#a15321`, tint `#fcf2eb`). It marks
  identity and where you are: the stamp, the sidenav's active item, the grid's checkboxes.
  Not a button color, not a status.
- **Type**: DM Sans for UI, body and stats. Public Sans (the U.S. Web Design System's
  typeface) for page titles (h1), section titles (h2) and the wordmark, at 700. Chosen
  from six civic candidates (Public Sans, Overpass, Barlow Semi Condensed, Big Shoulders,
  National Park, Libre Caslon).
- **Lockup**: a small ESA logo | the Permits mark (`BcnPermitsStamp`, a classic round
  rubber stamp: perforated edge, PERMITS in Barlow Condensed Bold centred on the ring, a
  civic building in the middle, worn ink) and the word "Permits" in the display face.
- **Top bar**: 48px, a quiet `#dcdcdc` hairline under it.
- **Rules followed** (ecology `design-principles`): no colored left borders for status,
  status is a dot or an icon (never red text), icons mark structure not items, Title Case
  labels, no text about the page.

## Navigation

Project-scoped, like Beacon. The rail always has an **active project**:

- **Projects**: every project (My Projects cards over the All Projects grid).
- **<the active project>**: Overview (readiness), Permits (List / Board), Schedule. A permit
  page sits under its project's Permits.
- **Library**: All Permits, Permit Types (the cross-project data sets).

On a project or permit page the active project is that page's, and it is remembered; on
Projects and Library pages it is the remembered one (or your first project). Both
parents are opened after the rail renders, because `esa-sidebar-nav` has no prop to start
one open (ledgered as a hub gap).

## What changed, page by page

- **Shell**: the lockup in the sidenav; pages sit in an 88rem column.
- **Grid toolbars**: search first and left-aligned, Clear Filters at the far end. In the
  card's actions slot they floated right of an empty header wherever the card had no title.
- **Projects**: each card leads with the two dates its badge is judged on (expected all
  issued vs construction start) and the permit mix, then number · manager · sites.
- **Project**
  - *Readiness is verdict-first*: a band with the state, a rule in its tone, and one sentence that says why
    ("The last permit is expected Mar 2, 2027, 1 day after construction is set to start…").
  - *Permit mix* (`BcnPermitMix`) replaces the single issued meter and the separate
    Not Started / In Progress / Completed count line: issued / in agency review /
    preparing / not started in one bar.
  - *Keep an eye on*: every risk and flag in one list with a mark per line.
  - *Header*: the team as faces (`BcnTeamButton`), labelled Edit and Share, one primary.
    Configure statuses left the header; the Board toolbar already carries it.
  - *Views*: List / Board / Schedule as underline tabs instead of a full-width grey bar.
- **Permit**: the timeline card's header is the title and Change status; status, day count
  and pace moved to a status line inside it. Status history is collapsed (it is the audit
  trail behind the timeline, which already shows the milestones).
- **Permit types**: cards are whole-card links with the name in body ink.

## Outward sharing (new)

- **Share** on a project opens `BcnShareProject`: a link, who can open it, two include
  choices (agency reference numbers; forecast dates for permits not yet submitted), when it
  expires, and a fixed "never shared" line (ESA owners, checklists, internal notes, files).
- **`/prototypes/permits/shared/<project>`** is what the link opens: ESA masthead, the same
  readiness and schedule components in `readOnly` mode (no links into the app), and one
  plain table of permits staged in a client's words (Issued / With the agency / Preparing
  the application / Not started) with issued or expected dates.

## Not done / next

- The new pages have no handoff bundles (`npx handoff all permits-*`). The gate already
  fails for ~40 other routes in this checkout, so it was left alone.
- Component prefix: these are still `bcn-*`. Once the product has a name, rename the fork
  (it is kept identical for now so it diffs cleanly against the original).
- From Beacon prod's permit tracking (`../Beacon` develop), worth bringing in: a
  non-gating "Not needed" status, `CorrelationID` on status history for bulk updates,
  per-user notification opt-ins and a day-grouped activity feed, the executive-summary
  pattern for the shared view, and an issued permit handed to Beacon as a `Source` so its
  conditions flow into commitments. Not worth bringing: the segment/geometry layer, the flat
  per-tenant status list, free-text agencies.
