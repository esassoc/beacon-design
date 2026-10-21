# Component grid

Components (index) · source prototype: https://esassoc.github.io/beacon-design/prototypes/components/

![Component grid, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.phone.png

The default view and the page's real job: sixteen rows a person can scan to find the one they want. Each row leads with the component's identity MARK, so you find yours by shape and color rather than by reading sixteen long names, and carries the operational figures that tell you whether it needs you — open actions, overdue, work areas, requirements met, last monitoring.

## Key decisions

- The identity mark is the scanning device, and it is the same mark the component dashboard header wears — the "parking-garage floor" idea: a visual landmark that says which one you are on. marksForProject() guarantees the marks within one project are distinct.
- Status is a real colored taxonomy (Not started / In progress / On hold / Complete), not the word "Active". Prod showed one undifferentiated state.
- Status renders as the QUIET CHIP — a dot plus a label on a light ground, the shared makeQuietChipRenderer from src/lib/beacon-grid.ts, identical to the work-area board. It is NOT a saturated pill. Changed at review 2026-08-14: the first pass cloned a tinted pill and drifted from the house pattern.
- AG Grid with the full standard chrome: search field, clear-filters, per-column filters, CSV download, record count.

## Gotchas

- A Board/card view was built and CUT (2026-08-13). Grid already answers "which one do I want" now that the mark and colored status do the scanning, and Map answers "where", which Grid cannot. The board was a second answer to a question Grid already answers, and a toggle whose options overlap makes someone choose before they know what they are choosing between. Do not reintroduce it.
- The component name column must stay wide enough for the real names — "Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft Transition Zone" is a real DCP component, not a stress test. Truncate with an ellipsis, never wrap the row.
- Row-level component access does not complicate this list: IAmComponentScoped + ComponentScopeMiddleware already filter any obtainable component list (see-all-unless-scoped), so the grid needs no scope logic of its own.

## Done when

- Sixteen rows render with distinct marks; status is a quiet dot-and-label chip matching the work-area board exactly; clicking a component name navigates to its dashboard; a click on any cell that is not the name link does not navigate; the grid carries search, clear-filters, download and a record count.

## Components

- `bcn-cg` (spoke) · `src/components/bcn/BcnComponentGrid.astro`
- `bcn-gchrome` (spoke) · `src/components/bcn/BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src/components/bcn/BcnGridFooter.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup and styles

_76 repeated elements are collapsed in the markup below; the comments say where._

- [component-grid.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.markup-1.md) (47 KB)
- [component-grid.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.markup-2.md) (47 KB)
- [component-grid.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.markup-3.md) (4.9 KB)
- [component-grid.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-components/claude/component-grid.styles.md) (16 KB)

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
| `--bcn-status-on-hold` | `#656565` | component |
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
| `--color-background-utility-success` | `#2e7571` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `1.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
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
| `--typography-font-weight-semibold` | `550` | semantic |
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
