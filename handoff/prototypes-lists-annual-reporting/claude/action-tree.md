# Action tree

Action list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/annual-reporting/

![Action tree, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-tree.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-tree.phone.png

Members filed by Compliance Index. Actions carry no category of their own, so an action files wherever ITS REQUIREMENTS are placed in the index (Aldo's dcp-index run, compliance-index-memberships.json) — one action can appear under several branches.

## Key decisions

- Label is "By Compliance Index", never "By category".
- Remove from list is a non-danger confirm; the action stays in the project.

## Gotchas

- The Aldo index (92 minors) and the registry's obligation tree (69) drift; do not assume one taxonomy.

## Components

- `bcn-lmt` (spoke) · `src/components/bcn/BcnListMemberTree.astro`
- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-lot` (spoke) · `src/components/bcn/BcnListAddIndexItems.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_27 repeated elements are collapsed in the markup below; the comments say where._

- [action-tree.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-tree.markup-1.md) (47 KB)
- [action-tree.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-tree.markup-2.md) (12 KB)
- [action-tree.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/action-tree.styles.md) (17 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
