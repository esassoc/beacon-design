# Setup Wizard

Step 5 — Obligations by Commitment · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard/obligations-chain/

![Setup Wizard, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-obligations-chain/claude/setup-wizard.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-obligations-chain/claude/setup-wizard.phone.png

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-swc` (spoke) · `src/components/bcn/BcnSetupWizardCard.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swcp` (spoke) · `src/components/bcn/BcnSwChainPanels.astro`
- `bcn-swf` (spoke) · `src/components/bcn/BcnSetupWizardFrame.astro`
- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `bcn-swsc` (spoke) · `src/components/bcn/BcnSwSelectChip.astro`
- `bcn-swsp` (spoke) · `src/components/bcn/BcnSw3Scan.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_321 repeated elements are collapsed in the markup below; the comments say where._

- [setup-wizard.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-obligations-chain/claude/setup-wizard.markup-1.md) (47 KB)
- [setup-wizard.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-obligations-chain/claude/setup-wizard.markup-2.md) (27 KB)
- [setup-wizard.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-obligations-chain/claude/setup-wizard.styles.md) (31 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-0` | `#fff` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-teal-600` | `#0e807b` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--form-label-color` | `#525252` | component |
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
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
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
