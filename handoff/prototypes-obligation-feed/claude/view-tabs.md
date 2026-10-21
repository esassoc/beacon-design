# View tabs

Obligations (feed) · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-feed/

![View tabs, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/view-tabs.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/view-tabs.phone.png

Four cuts of one record set as icon tabs: All (inbox), Important (star: records touching the reader's saved categories), To-do (checklist: records that owe a notice), Pinned (pin: records touching a pinned obligation). The view rides ?view=.

## Key decisions

- Kim's outer Feed / Registry segmented row is gone: this page is the feed alone.
- Icons ride esa-tab-layout's own tab.icon (a full inline SVG string), so the tabs need no custom CSS.
- Every view reads by record. Kim's By record / By obligation pivot on Important and Pinned was cut (Andy, 2026-09-23).

## Done when

- Each tab shows its own rail and pane; reloading with ?view=pinned opens Pinned.

## Components

- `bcn-file-row` (spoke) · `src/components/bcn/BcnFileRow.astro`
- `bcn-foc` (spoke) · `src/components/bcn/BcnFeedLinks.astro`
- `bcn-frc` (spoke) · `src/components/bcn/BcnFeedRailCard.astro`
- `bcn-frec` (spoke) · `src/components/bcn/BcnFeedRecord.astro`
- `bcn-fw` (spoke) · `src/components/bcn/BcnFeedWorkspace.astro`
- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_54 repeated elements are collapsed in the markup below; the comments say where._

- [view-tabs.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/view-tabs.markup-1.md) (47 KB)
- [view-tabs.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/view-tabs.markup-2.md) (23 KB)
- [view-tabs.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/view-tabs.styles.md) (30 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand` | `#fcfcfc` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-border-width` | `1px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
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
| `--spacing-600` | `2rem` | primitive |
| `--spacing-900` | `6rem` | primitive |
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
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
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
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
