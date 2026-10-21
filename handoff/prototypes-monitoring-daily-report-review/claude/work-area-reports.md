# Work Area Reports

Daily Report Review · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/daily-report-review/

![Work Area Reports, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.phone.png

Prod's work-area section restyled to match prod: one collapsible per work area, the work area's Compliance Level (it goes into the regulator report) left of a right-aligned "View as Categories | Chronological Order" toggle, teal category headings, and tinted item rows with prod's entity icons, bold title, muted time, indented write-up and right-aligned thumbnails. Then Notes, Wildlife Observed and Photos (each with an Include in report switch).

## Key decisions

- Prod is the precedent here, so items carry prod's per-item entity icons (triangle-alert, construction cone, bird, flag).
- Excluding a photo is a Beacon-only edit; it fades the photo everywhere it appears and drops it from the report.

## Gotchas

- esa-collapsible only takes a string title, so the header cannot do prod's bold name + regular date + outlined count badge; the count is folded into the title text (filed as a lego gap).
- The Chronological view MOVES the same <li> nodes rather than rendering a second list, so each tracked field exists once on the page.

## Done when

- Switching to Chronological Order lists every item of that work area in time order; switching back restores the categories.
- Turning a photo's Include in report off fades it and removes it from the report preview and PDF.

## Components

- `bcn-cc` (spoke) · `src/components/bcn/BcnComplianceConcern.astro`
- `bcn-detail-fact` (spoke) · `src/components/bcn/BcnDetailFact.astro`
- `bcn-detail-facts` (spoke) · `src/components/bcn/BcnDetailFacts.astro`
- `bcn-disclosure` (spoke) · `src/components/bcn/BcnDisclosureToggle.astro`
- `bcn-dmr-wa` (spoke) · `src/components/bcn/BcnDmrWorkAreas.astro`
- `bcn-tracked-field` (spoke) · `src/components/bcn/BcnTrackedField.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_18 repeated elements are collapsed in the markup below; the comments say where._

- [work-area-reports.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.markup-1.md) (47 KB)
- [work-area-reports.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.markup-2.md) (46 KB)
- [work-area-reports.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.markup-3.md) (47 KB)
- [work-area-reports.markup-4.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.markup-4.md) (47 KB)
- [work-area-reports.markup-5.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.markup-5.md) (22 KB)
- [work-area-reports.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-daily-report-review/claude/work-area-reports.styles.md) (31 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-hover` | `#113264` | semantic |
| `--color-background-utility-info-muted` | `#e6f4fe` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-background-utility-warning-hover` | `#ffba18` | semantic |
| `--color-background-utility-warning-muted` | `#fff7c2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-subtle` | `#efefef` | component |
| `--color-border-utility-info` | `#acd8fc` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-label-color` | `#525252` | component |
| `--gap` | `.75rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-lg` | `.75rem` | semantic |
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
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
