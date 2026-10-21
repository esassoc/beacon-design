# Requirements grid

Requirement Tracker · source prototype: https://esassoc.github.io/beacon-design/prototypes/requirement-tracker/

![Requirements grid, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-requirement-tracker/claude/requirements-grid.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-requirement-tracker/claude/requirements-grid.phone.png

The AG Grid itself — the real grid (ag-grid-community), not a styled table. Column set mirrors the live Progress Report view: Source Document · Commitment ID · Requirement Name · Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s) · Resource Category.

## Key decisions

- Theme is the Beacon "gold-star" Quartz theme ported verbatim from esassoc/Beacon (beacon-grid-theme.ts): teal-900 header, ESA-orange accent (#f9a134 — NOT teal), 13px DM Sans, 48/44 header/row heights, Lucide-funnel filter icon via iconOverrides, suppressHeaderMenuButton (funnel only, no hamburger).
- Columns use explicit (wide) widths and DO NOT fit-to-width — the grid overflows the viewport and scrolls left/right, like Beacon's data-catalog grids.
- Status renders as a compact chip (4px radius, 12px, status dot) centered in the row via a flex cell class — it is a renderer, not a theme feature.
- Linked cells (Source Document, Commitment ID, Requirement Name) render as regular-weight underlined links in the brand link color.
- The grid is the only wired view; the data shape is ActionRow in tracker-fixture.ts. The 5 tracking columns the FEIR export lacks (Requirement Text, Status, Comment, Action, Milestone) are synthesized deterministically in the fixture — flag this if real values are needed.

## Gotchas

- AG Grid v33+ defaults to the Theming API (JS object), not CSS-class themes — there is no ag-theme-*.css to import. Beacon ships Material globally but its own backlog promotes this Quartz theme as the target; match Quartz.
- The accent is ORANGE, not the header teal — easy to get wrong since the header is teal.
- Quick-filter fires filterChanged ASYNCHRONOUSLY; read displayed-row-count in the onFilterChanged callback, never synchronously after setting quickFilterText.
- The grid renders client-side; status chip + link styles are injected outside the Astro scope, so they are authored as global rules.

## Done when

- Teal header with funnel filter icons; orange sort/filter-active accent; columns overflow horizontally; status chips compact + centered; links underlined regular-weight.

## Components

- `bcn-grid-name` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`

## Markup and styles

_63 repeated elements are collapsed in the markup below; the comments say where._

- [requirements-grid.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-requirement-tracker/claude/requirements-grid.markup-1.md) (46 KB)
- [requirements-grid.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-requirement-tracker/claude/requirements-grid.markup-2.md) (40 KB)
- [requirements-grid.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-requirement-tracker/claude/requirements-grid.styles.md) (935 B)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
