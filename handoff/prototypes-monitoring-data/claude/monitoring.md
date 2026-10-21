# Monitoring

Monitoring Data catalog · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/data/

## Components

- `bcn-aldo-composer` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-aldo-panel` (spoke) · `src/components/bcn/BcnListAldo.astro`
- `bcn-gd` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-msg` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-row` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-combobox` (hub) · `packages/ecology/src/components/esa-combobox.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_37 repeated elements are collapsed in the markup below; the comments say where._

- [monitoring.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-data/claude/monitoring.markup.md) (26 KB)
- [monitoring.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-data/claude/monitoring.styles.md) (23 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-prompt-ring` | `#08908b8c` | component |
| `--bcn-aldo-prompt-shadow` | `0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-teal-6` | `#a1ded2` | primitive |
| `--color-teal-7` | `#83cdc1` | primitive |
| `--color-teal-9` | `#12a594` | primitive |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
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
