# Work areas

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

![Work areas, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.phone.png

The work-areas grid, moved onto the dashboard from the tab this effort retires, with its bulk actions intact — create, bulk import (CSV or zipped shapefile), multi-select delete, select-all.

## Key decisions

- The work-areas TAB goes away and the grid lives here. There is still a work-area detail page (level four); there does not need to be a work-area index page.
- The columns are the fields that were always there. Production's grid shows Identifier plus an edit and a delete button, while the endpoint it calls already returns geometry, measure, county, method, depth and custom fields — all discarded. Showing them is most of the improvement.
- Status renders as a quiet chip with a dot, never as a row tint or a colored edge.
- The bulk group sits BESIDE the search + clear-filters chrome, not over it. An earlier pass overlaid the two in one cell to stop the grid shifting on selection; it worked, but it removed the search field at exactly the moment someone who has filtered to a set wants to narrow it further. Selecting rows and searching are not alternatives.
- REUSE PROD'S TWO DIALOGS AS-IS. Create opens `work-area-upsert-dialog` (Identifier, required, plus the tenant's WorkArea custom fields via entity-custom-fields) and Bulk Import opens `work-area-bulk-import-dialog`. Neither is being redesigned, so neither is prototyped: the buttons on the prototype emit an event and open nothing ON PURPOSE. A prototype approximation was built and then deliberately cut, because it could not match their styling and a nearly-right dialog reads as a redesign proposal — a more expensive kind of wrong than an empty click. Do not treat their absence from the prototype as license to invent them.

## Gotchas

- A row click must NOT open the work area when the click originated on a selection checkbox. Guard on .ag-selection-checkbox / .ag-checkbox — the same guard permit-tracking already carries.
- The grid kit's makeStatusRenderer requires a literal hex per status, which collides with token discipline. Use the tone-key renderer so color stays in CSS.
- Bulk import is two-stage in production — upload a CSV or zipped shapefile, then map each source column to Ignore / Identifier / a CustomFieldDefinitionID, with an optional single-column filter and a preview of what will land. Exactly one column must be the Identifier. Do not reduce it to a single file drop, and do not lose the mapping step: a geotech export's headers never already match Beacon's field names.
- The bulk-import dialog also carries prod's limits (10 MB, 5,000 rows, 50 preview rows) and routes shapefiles through POST /work-areas/parse-shapefile before committing via /work-areas/bulk-create.

## Done when

- All of the component's work areas list with their real columns; select-all and per-row selection drive the bulk bar while the search field stays visible and usable; delete confirms and removes; the grid height does not change when filtering or selecting; a checkbox click never navigates; Create and Bulk Import open the existing dialogs unchanged.

## Components

- `bcn-count` (spoke) · `src/components/bcn/BcnCount.astro`
- `bcn-gchrome` (spoke) · `src/components/bcn/BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src/components/bcn/BcnGridFooter.astro`
- `bcn-grid-name` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`
- `bcn-wa` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup and styles

_79 repeated elements are collapsed in the markup below; the comments say where._

- [work-areas.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.markup-1.md) (47 KB)
- [work-areas.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.markup-2.md) (46 KB)
- [work-areas.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.markup-3.md) (47 KB)
- [work-areas.markup-4.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.markup-4.md) (37 KB)
- [work-areas.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/work-areas.styles.md) (16 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-subtle` | `#effefb` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `2rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-font-weight` | `500` | semantic |
| `--typography-title-letter-spacing` | `.01em` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
