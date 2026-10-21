# Obligations grid

Obligations list (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-obligations/

![Obligations grid, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.phone.png

One row per obligation across all 402, using the shared Beacon grid kit (src/lib/beacon-grid.ts) already carried by the component index, the work-area board and the other catalog lists. Columns are the obligation title, its class, and the three category axes it is filed under (subject major/minor, activities, species), plus the commitments that state the duty. Row click and the title link both open the obligation detail page.

## Key decisions

- NO STATUS COLUMN, for two independent reasons. The team dropped the obligation status model on 2026-09-03, so there is no compliance verdict to render at all; and the sibling Actions catalog already omits status on principle, because status is tracking data that belongs to the Tracking area rather than to a configuration surface.
- Class renders as a NEUTRAL chip, never a colored one. Class (Adhere / Monitor / Notify / Roster) is a categorical facet that drives the evidence shape — it is not a status, and giving it status color would say otherwise. Coloring it would also mean inventing a four-value palette with no design token behind it.
- The catalog is FLAT on purpose. An obligation belongs to every category that fits on three independent axes, so its categories are a set rather than a path. The hierarchy is real but it belongs to the registry, which is a different surface; a tree here would imply this record sits at one place in it.
- Multi-valued axis cells join their values with commas and ellipsize with a tooltip rather than wrapping, so row height stays uniform and the grid stays scannable at 402 rows.
- Chrome, counts, CSV export and theme all come from the shared kit (BcnGridChrome, BcnGridFooter, mountBeaconGrid) rather than being rebuilt — the older Actions list predates that extraction and still carries the markup by hand; do not copy that page.

## Gotchas

- The grid prefix ("og") must match between BcnGridChrome, BcnGridFooter and mountBeaconGrid. Two grids on one page sharing a prefix would drive each other's filters, which is why the prop is required rather than defaulted.
- The grid host has a FIXED height (40rem) so the page below it does not jump as filters narrow the set. Do not make it auto-height.
- Row order is alphabetical by title, set once in the data module — not a grid sort model. AG Grid preserves rowData order until the user sorts, which is what lets the grid open on the registry's own ordering rule without fighting the first column-header click.

## Done when

- The grid lists all 402 obligations, alphabetical by title, with the total shown in the footer and the card heading.
- Typing in Search narrows across every column; Clear Filters restores all 402 and empties the search box.
- Filtering the Activities column to a single activity yields every obligation that work carries — the contractor-checklist read.
- Clicking a row, or its title link, opens that obligation's detail page. The title link must also work with a middle click or a new-tab modifier.
- Download as CSV exports the currently filtered rows, and the footer count matches what is on screen.

## Components

- `bcn-gchrome` (spoke) · `src/components/bcn/BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src/components/bcn/BcnGridFooter.astro`
- `bcn-og` (spoke) · `src/components/bcn/BcnObligationGrid.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup and styles

_96 repeated elements are collapsed in the markup below; the comments say where._

- [obligations-grid.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.markup-1.md) (47 KB)
- [obligations-grid.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.markup-2.md) (38 KB)
- [obligations-grid.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligations/claude/obligations-grid.styles.md) (15 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
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
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
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
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
