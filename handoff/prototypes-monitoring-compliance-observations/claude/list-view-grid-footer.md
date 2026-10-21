# List view (grid + footer)

Compliance Dashboard — Observations · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/compliance-observations/

![List view (grid + footer), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/list-view-grid-footer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/list-view-grid-footer.phone.png

The default view: the observation set in the shared AG Grid kit already used by Surveys and Permits & Studies, over a footer carrying a CSV download and the record count. Clicking any row opens that observation in the read-only detail panel.

## Key decisions

- AG Grid, not a bespoke table — the kit is already the house grid on two other trackers, and the column/sort/resize behaviour comes free and consistent.
- Row click opens the detail panel rather than navigating. The list is the workspace; the detail is a peek, so you can review several observations without losing your filter and scroll position.
- The footer shows a total AND, when filtering is active, a separate filtered count — so a narrow result set never reads as a small dataset.

## Gotchas

- The CSV download must export the FILTERED rows, not the whole dataset — exporting everything from a filtered view is a quiet data-accuracy bug that looks like it worked.
- Row click is wired through the grid API (onRowClicked), not per-row DOM listeners; rows are virtualised, so DOM-level handlers will silently stop working as you scroll.

## Done when

- The grid lists observations with the filter bar applied; the footer total matches the visible row count.
- Clicking any row opens the detail panel for that observation without leaving the list.
- Download as CSV produces a file containing exactly the currently filtered rows.

## Components

- `bcn-grid-name` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup and styles

_74 repeated elements are collapsed in the markup below; the comments say where._

- [list-view-grid-footer.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/list-view-grid-footer.markup-1.md) (46 KB)
- [list-view-grid-footer.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/list-view-grid-footer.markup-2.md) (30 KB)
- [list-view-grid-footer.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-observations/claude/list-view-grid-footer.styles.md) (9.6 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
