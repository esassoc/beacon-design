# Bulk evidence (bottom drawer, list mode)

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Bulk evidence (bottom drawer, list mode), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/bulk-evidence-bottom-drawer-list-mode.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/bulk-evidence-bottom-drawer-list-mode.phone.png

Attach one set of evidence to many list members at once, in the SAME app-wide bottom evidence drawer used everywhere else, opened in "list mode" with this list's members as the targets.

## Key decisions

- Andy rejected a separate side panel: "I thought we were going to use the bottom drawer." One drawer serves action AND obligation lists.
- List mode hides Phase, Type, search and the fixture rows. The component starts EMPTY and wears a brand ring until one is picked.
- Every member is a target by default; an × leaves one out and Restore brings them all back.
- Save requires a component, staged evidence and at least one target. A footer status line names whatever is missing.
- Save emits list:evidence-added {componentId, evidenceIds, memberIds} and closes; the tree bumps evidence counts in place.

## Gotchas

- Opening the drawer from the app bar or any non-list trigger must EXIT list mode, or the next user sees a list's targets.
- Use --color-background-brand for the ring: theme-beacon redefines --color-background-brand-muted to a pale teal that disappears.

## Done when

- Opens with all members as targets and an empty ringed component; Save stays disabled with a reason until component + evidence are set; after save each target's implementation on that component shows the higher evidence count.

## Components

- `bcn-bottom-drawer` (spoke) · `src/components/bcn/BcnBottomDrawer.astro`
- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-countchip` (spoke) · `src/components/bcn/BcnCountChip.astro`
- `bcn-disclosure` (spoke) · `src/components/bcn/BcnDisclosureToggle.astro`
- `bcn-ev` (spoke) · `src/components/bcn/BcnEvidenceDrawer.astro`
- `bcn-ev-attached` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-ev-card` (spoke) · `src/components/bcn/BcnEvidenceStaging.astro`
- `bcn-ev-draft` (spoke) · `src/components/bcn/BcnEvidenceStaging.astro`
- `bcn-ev-row` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-ev-search` (spoke) · `src/components/bcn/BcnEvidenceSearch.astro`
- `bcn-ev-staging` (spoke) · `src/components/bcn/BcnEvidenceStaging.astro`
- `bcn-ev-targets` (spoke) · `src/components/bcn/BcnEvidenceStaging.astro`
- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-combobox` (hub) · `packages/ecology/src/components/esa-combobox.ts`
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-file-upload` (hub) · `packages/ecology/src/components/esa-file-upload.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-loading-spinner` (hub) · `packages/ecology/src/components/esa-loading-spinner.astro`
- `esa-pill` (hub) · `packages/ecology/src/components/esa-pill.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_95 repeated elements are collapsed in the markup below; the comments say where._

- [bulk-evidence-bottom-drawer-list-mode.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/bulk-evidence-bottom-drawer-list-mode.markup-1.md) (47 KB)
- [bulk-evidence-bottom-drawer-list-mode.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/bulk-evidence-bottom-drawer-list-mode.markup-2.md) (18 KB)
- [bulk-evidence-bottom-drawer-list-mode.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/bulk-evidence-bottom-drawer-list-mode.styles.md) (46 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
| `--animation-spin` | `.75s linear infinite` | semantic |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-ev-search-gap` | `.625rem` | component |
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
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-warning-subtle` | `#fefdfb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-info` | `#acd8fc` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--focus-ring-color` | `color-mix(in srgb, #eef5f4 30%, transparent)` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--loading-spinner-color` | `#005862` | component |
| `--loading-spinner-track-color` | `#efefef` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
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
| `--tab-layout-height-sm` | `36px` | component |
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
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
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
