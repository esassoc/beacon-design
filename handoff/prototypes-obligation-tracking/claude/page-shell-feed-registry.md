# Page shell — Feed / Registry

Obligation Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-tracking/

![Page shell — Feed / Registry, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.phone.png

The two halves of the page as tabs: Feed (what is happening) and Registry (what the project is signed up to). The outer tablist; the feed carries its own four views inside it.

## Key decisions

- THE TWO HALVES ARE PEERS, NOT A SURFACE WITH AN APPENDIX. Stacking them made the registry read as a footnote you scroll past. Tabs say what is true: you are either asking what is happening or what the project is signed up to.
- TWO LEVELS OF TAB, DELIBERATELY DIFFERENT IN APPEARANCE. The outer row is SEGMENTED and the inner row (the four feed views) is UNDERLINE, so a nested tablist reads as a second level rather than one confusing row of six. Both are esa-tab-layout; only the appearance prop differs.
- NO COUNT ON EITHER OUTER TAB. Registry briefly carried one — the project’s obligation total, the page’s single honest number — while Feed carried none, because its four views count four different slices and any one figure would imply it was the total. Once the volumes were realistic even that one stopped telling a reader anything before they clicked (Kim, 2026-09-16).
- The shell decides nothing else. The feed owns its views; the registry owns its tree and its provenance note.

## Gotchas

- NESTED TABLISTS MUST NOT SHARE AN APPEARANCE, or the two rows read as one broken row. If the outer row is ever restyled, the inner must stay visually subordinate.
- The page also carries an unrelated esa-tab-layout in the staging chrome (data-staging-tabs). Do not count it when testing, and do not confuse it for a third level.

## Done when

- Two tab rows: an outer segmented row reading Feed / Registry, and inside Feed an underline row reading All / Important / To-do / Pinned. No badge on any of them.
- Selecting Registry swaps the whole area for the four-level read-only tree.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-swc` (spoke) · `src/components/bcn/BcnSetupWizardCard.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `bcn-swoc` (spoke) · `src/components/bcn/BcnSwObligationCard.astro`
- `bcn-swot` (spoke) · `src/components/bcn/BcnListAddObligations.astro`
- `bcn-swsc` (spoke) · `src/components/bcn/BcnSwSelectChip.astro`
- `bcn-tev` (spoke) · `src/components/bcn/BcnTrackingEvent.astro`
- `bcn-treg` (spoke) · `src/components/bcn/BcnTrackingRegistry.astro`
- `bcn-tw` (spoke) · `src/components/bcn/BcnTrackingWorkspace.astro`
- `esa-alert-box` (hub) · `packages/ecology/src/components/esa-alert-box.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_476 repeated elements are collapsed in the markup below; the comments say where._

- [page-shell-feed-registry.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.markup-1.md) (47 KB)
- [page-shell-feed-registry.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.markup-2.md) (47 KB)
- [page-shell-feed-registry.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.markup-3.md) (47 KB)
- [page-shell-feed-registry.markup-4.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.markup-4.md) (47 KB)
- [page-shell-feed-registry.markup-5.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.markup-5.md) (25 KB)
- [page-shell-feed-registry.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/page-shell-feed-registry.styles.md) (37 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--alert-box-text-color` | `#525252` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
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
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-info` | `#acd8fc` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
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
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
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
