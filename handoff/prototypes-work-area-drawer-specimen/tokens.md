# Token contract — prototypes-work-area-drawer-specimen

The 71 design tokens this page actually uses, resolved to their final values for the `beacon` theme. Component CSS still references them by name (`var(--color-primary)`), so the names carry the intent; the values below are what they currently resolve to.

## Semantic

| Token | Value |
|---|---|
| `--color-background` | `#fafafa` |
| `--color-border` | `#dcdcdc` |
| `--color-border-light` | `#efefef` |
| `--color-border-strong` | `#bdbdbd` |
| `--color-danger` | `#e5484d` |
| `--color-danger-hover` | `#dc3e42` |
| `--color-danger-strong` | `#ce2c31` |
| `--color-primary` | `#005862` |
| `--color-primary-hover` | `#00474f` |
| `--color-primary-strong` | `#2a7e3b` |
| `--color-primary-subtle` | `#effefb` |
| `--color-secondary` | `#00918b` |
| `--color-secondary-on-fill` | `#203c25` |
| `--color-surface` | `#fcfcfc` |
| `--color-text-inverse` | `#fcfcfc` |
| `--color-text-link` | `#005862` |
| `--color-text-primary` | `#3d3d3d` |
| `--color-text-secondary` | `#525252` |
| `--color-text-tertiary` | `#656565` |

## Component

| Token | Value |
|---|---|
| `--badge-bg` | `#005862` |
| `--badge-height-md` | `28px` |
| `--badge-height-sm` | `22px` |
| `--badge-radius` | `.25rem` |
| `--badge-text-color` | `#fcfcfc` |
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
| `--st-blocked` | `#d73027` |
| `--st-provisional-block` | `#d73027` |
| `--st-survey-scheduled` | `#74add1` |

## Primitive

| Token | Value |
|---|---|
| `--font-mono` | `"Roboto Mono", ui-monospace, monospace` |
| `--font-sans` | `"DM Sans", sans-serif` |
| `--font-weight-medium` | `500` |
| `--font-weight-regular` | `350` |
| `--font-weight-semibold` | `550` |
| `--icon-size-md` | `20px` |
| `--icon-size-sm` | `16px` |
| `--radius-100` | `.25rem` |
| `--radius-200` | `.5rem` |
| `--radius-300` | `.5rem` |
| `--radius-full` | `9999px` |
| `--spacing-100` | `.25rem` |
| `--spacing-150` | `.375rem` |
| `--spacing-200` | `.5rem` |
| `--spacing-250` | `.625rem` |
| `--spacing-300` | `.75rem` |
| `--spacing-400` | `1rem` |
| `--spacing-500` | `1.5rem` |
| `--spacing-600` | `2rem` |
| `--spacing-700` | `3rem` |
| `--spacing-800` | `4rem` |
| `--transition-fast` | `.15s ease` |
| `--type-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` |
| `--type-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` |
| `--type-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` |
| `--type-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` |

## Component-scoped

Defined per-component (not at `:root`); see the component's own rule in `styles.css`.

- `--gap`
