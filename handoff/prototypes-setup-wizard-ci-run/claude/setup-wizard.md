# Setup Wizard

Step 4 — Building the index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-ci/run/

![Setup Wizard, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-ci-run/claude/setup-wizard.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-ci-run/claude/setup-wizard.phone.png

## Components

- `bcn-cirun` (spoke) · `src/components/bcn/BcnCiRunPanel.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swf` (spoke) · `src/components/bcn/BcnSetupWizardFrame.astro`
- `bcn-swsp` (spoke) · `src/components/bcn/BcnSw3Scan.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-progress-bar` (hub) · `packages/ecology/src/components/esa-progress-bar.astro`
- `esa-stat` (hub) · `packages/ecology/src/components/esa-stat.astro`

## Markup and styles

_71 repeated elements are collapsed in the markup below; the comments say where._

- [setup-wizard.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-ci-run/claude/setup-wizard.markup.md) (26 KB)
- [setup-wizard.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-ci-run/claude/setup-wizard.styles.md) (28 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--animation-indeterminate` | `1.5s ease-in-out infinite` | semantic |
| `--bcn-gray-0` | `#fff` | component |
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
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-success-subtle` | `#fbfefc` | component |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-focus` | `#3e9b4f` | component |
| `--color-border-success` | `#adddc0` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-danger` | `#ce2c31` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-disabled` | `#8d8d8d` | semantic |
| `--color-content-on-brand` | `#fcfcfc` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-success` | `#218358` | component |
| `--color-content-warning` | `#ab6400` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-xs` | `2px` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
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
| `--stat-accent-color` | `#005862` | component |
| `--stat-value-color` | `#3d3d3d` | component |
| `--stat-value-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-display-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-display-sm-font-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | semantic |
| `--typography-display-sm-font-weight` | `650` | semantic |
| `--typography-display-sm-letter-spacing` | `-.01em` | semantic |
| `--typography-display-sm-line-height` | `1.3` | semantic |
| `--typography-font-family-display` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
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
