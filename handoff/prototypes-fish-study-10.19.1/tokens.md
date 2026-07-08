# Token contract — prototypes-fish-study-10.19.1

The 91 design tokens this page actually uses, resolved to their final values for the `beacon` theme. Component CSS still references them by name (`var(--color-primary)`), so the names carry the intent; the values below are what they currently resolve to.

## Semantic

| Token | Value |
|---|---|
| `--color-accent` | `#f76b15` |
| `--color-border` | `#dcdcdc` |
| `--color-border-light` | `#efefef` |
| `--color-info` | `#228be6` |
| `--color-primary` | `#005862` |
| `--color-primary-hover` | `#00474f` |
| `--color-primary-strong` | `#2a7e3b` |
| `--color-secondary` | `#00918b` |
| `--color-secondary-on-fill` | `#203c25` |
| `--color-surface` | `#fcfcfc` |
| `--color-surface-sunken` | `#efefef` |
| `--color-text-inverse` | `#fcfcfc` |
| `--color-text-link` | `#005862` |
| `--color-text-muted` | `#7c7c7c` |
| `--color-text-primary` | `#3d3d3d` |
| `--color-text-secondary` | `#525252` |
| `--color-text-tertiary` | `#656565` |
| `--color-warning-on-fill` | `#4f3422` |

## Component

| Token | Value |
|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` |
| `--avatar-radius` | `9999px` |
| `--avatar-size-md` | `40px` |
| `--avatar-size-sm` | `28px` |
| `--avatar-text-color` | `#fcfcfc` |
| `--badge-bg` | `#005862` |
| `--badge-height-md` | `28px` |
| `--badge-height-sm` | `22px` |
| `--badge-radius` | `.25rem` |
| `--badge-text-color` | `#fcfcfc` |
| `--bcn-gray-100` | `#efefef` |
| `--bcn-gray-1000` | `#000000` |
| `--bcn-gray-200` | `#dcdcdc` |
| `--bcn-gray-300` | `#bdbdbd` |
| `--bcn-gray-400` | `#989898` |
| `--bcn-gray-50` | `#fafafa` |
| `--bcn-gray-500` | `#7c7c7c` |
| `--bcn-gray-600` | `#656565` |
| `--bcn-gray-900` | `#3d3d3d` |
| `--bcn-gray-950` | `#292929` |
| `--collapsible-bg` | `#fcfcfc` |
| `--collapsible-border-color` | `#dcdcdc` |
| `--collapsible-padding-x` | `1rem` |
| `--collapsible-radius` | `.5rem` |
| `--collapsible-title-color` | `#3d3d3d` |
| `--font-decorative` | `"Besley", serif` |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--form-height-md` | `36px` |
| `--form-height-sm` | `28px` |
| `--form-label-color` | `#525252` |
| `--form-padding-x-md` | `.75rem` |
| `--form-padding-x-sm` | `.625rem` |
| `--form-radius-md` | `.25rem` |
| `--form-radius-sm` | `.25rem` |
| `--icon-button-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` |
| `--icon-size-medium` | `20px` |
| `--icon-size-small` | `16px` |
| `--pill-bg` | `#efefef` |
| `--pill-border-color` | `#efefef` |
| `--pill-height-md` | `28px` |
| `--pill-height-sm` | `22px` |
| `--pill-radius` | `.25rem` |
| `--pill-text-color` | `#3d3d3d` |

## Primitive

| Token | Value |
|---|---|
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` |
| `--font-sans` | `"DM Sans", sans-serif` |
| `--font-weight-bold` | `650` |
| `--font-weight-medium` | `450` |
| `--font-weight-regular` | `350` |
| `--font-weight-semibold` | `550` |
| `--icon-size-md` | `20px` |
| `--icon-size-sm` | `16px` |
| `--icon-size-xs` | `14px` |
| `--radius-100` | `.25rem` |
| `--radius-200` | `.5rem` |
| `--radius-300` | `.5rem` |
| `--radius-full` | `9999px` |
| `--spacing-050` | `.125rem` |
| `--spacing-100` | `.25rem` |
| `--spacing-150` | `.375rem` |
| `--spacing-200` | `.5rem` |
| `--spacing-250` | `.625rem` |
| `--spacing-300` | `.75rem` |
| `--spacing-400` | `1rem` |
| `--spacing-500` | `1.5rem` |
| `--spacing-600` | `2rem` |
| `--spacing-700` | `3rem` |
| `--transition-fast` | `.15s ease` |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` |
| `--type-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` |
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` |

## Component-scoped

Defined per-component (not at `:root`); see the component's own rule in `styles.css`.

- `--color-success`
- `--color-warning`
