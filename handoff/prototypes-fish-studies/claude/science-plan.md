# Science Plan

Science Plan (studies index) · source prototype: https://esassoc.github.io/beacon-design/prototypes/fish-studies/

![Science Plan, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.phone.png

## Components

- `bcn-filterbar` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-grid-name` (spoke) · `src/components/bcn/BcnWorkAreaBoard.astro`
- `bcn-roles` (spoke) · `src/components/bcn/BcnRolesMatrix.astro`
- `bcn-status-select` (spoke) · `src/components/bcn/BcnPlanReader.astro`
- `bcn-timeline` (spoke) · `src/components/bcn/BcnScheduleTimeline.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-date-picker` (hub) · `packages/ecology/src/components/esa-date-picker.ts`
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup and styles

_186 repeated elements are collapsed in the markup below; the comments say where._

- [science-plan.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.markup-1.md) (47 KB)
- [science-plan.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.markup-2.md) (47 KB)
- [science-plan.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.markup-3.md) (13 KB)
- [science-plan.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-studies/claude/science-plan.styles.md) (37 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-0` | `#fff` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-status-completed` | `#2e7571` | component |
| `--bcn-status-in-progress` | `#f59e0b` | component |
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--form-border-color` | `#dcdcdc` | component |
| `--form-label-color` | `#525252` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-font-weight` | `500` | semantic |
| `--typography-microcopy-sm-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
