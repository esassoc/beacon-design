# Token contract — permit-tracking

The 72 design tokens this page actually uses, resolved to their final values for the `beacon` theme. Component CSS still references them by name (`var(--color-primary)`), so the names carry the intent; the values below are what they currently resolve to.

## Semantic

| Token | Value |
|---|---|
| `--color-accent` | `#f9a134` |
| `--color-info` | `#228be6` |
| `--color-primary` | `#005862` |
| `--color-primary-hover` | `#00474f` |
| `--color-secondary` | `#00918b` |
| `--color-surface` | `#ffffff` |
| `--color-text-inverse` | `#ffffff` |
| `--color-text-link` | `#005862` |
| `--color-text-primary` | `#3d3d3d` |
| `--color-text-secondary` | `#525252` |
| `--color-text-tertiary` | `#656565` |

## Component

| Token | Value |
|---|---|
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
| `--filter-clear-color` | `#7c7c7c` |
| `--filter-container-gap` | `.5rem` |
| `--filter-pill-bg` | `color-mix(in srgb, #005862 8%, transparent)` |
| `--filter-pill-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--filter-pill-padding` | `.25rem .625rem` |
| `--filter-pill-radius` | `9999px` |
| `--filter-pill-remove-color` | `#7c7c7c` |
| `--filter-pill-text` | `#005862` |
| `--font-decorative` | `"Besley", serif` |
| `--form-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` |
| `--form-font-size-sm` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--form-height-md` | `36px` |
| `--form-height-sm` | `28px` |
| `--form-padding-x-md` | `.75rem` |
| `--form-padding-x-sm` | `.625rem` |
| `--form-radius-md` | `.25rem` |
| `--form-radius-sm` | `.25rem` |
| `--grid-cell-padding` | `.5rem .75rem` |
| `--grid-header-bg` | `#fafafa` |
| `--grid-header-border` | `1px solid #dcdcdc` |
| `--grid-header-color` | `#3d3d3d` |
| `--grid-header-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--grid-header-weight` | `550` |
| `--grid-radius` | `.5rem` |
| `--grid-row-bg` | `#ffffff` |
| `--grid-row-border` | `1px solid #efefef` |
| `--grid-row-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` |

## Primitive

| Token | Value |
|---|---|
| `--font-sans` | `"DM Sans", sans-serif` |
| `--font-weight-bold` | `650` |
| `--font-weight-medium` | `450` |
| `--font-weight-regular` | `350` |
| `--font-weight-semibold` | `550` |
| `--radius-200` | `.5rem` |
| `--radius-300` | `.5rem` |
| `--radius-400` | `.75rem` |
| `--radius-full` | `9999px` |
| `--shadow-100` | `0 2px 12px 0 rgba(0, 0, 0, .04)` |
| `--shadow-400` | `0 8px 32px -8px rgba(0, 0, 0, .08)` |
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
| `--type-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` |

## Component-scoped

Defined per-component (not at `:root`); see the component's own rule in `styles.css`.

- `--icon-size-medium`
