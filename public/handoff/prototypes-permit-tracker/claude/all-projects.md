# All projects

Projects · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/

![All projects, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/all-projects.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/all-projects.phone.png

Every project in the tracker, whoever is on it, as an AG Grid, so anyone can reach a project they are not on, or a closed one, for its permits and files.

## Key decisions

- An esa-button-toggle (Active, Closed, All) filters by project status; Active is the default and Clear Filters returns to it. It is an external filter, so search and column filters apply on top.
- Columns: project (links to the project page), project no., client, project manager, sites, permits issued of total, construction start, status.
- The grid grows to its rows (autoHeight); a tracker holds dozens of projects, not thousands.

## Done when

- Switching to Closed shows only closed projects; each project name opens its project page.

## Components

- `bcn-gchrome` (spoke) · `src\components\bcn\BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src\components\bcn\BcnGridFooter.astro`
- `bcn-pprg` (spoke) · `src\components\bcn\BcnPermitProjectGrid.astro`
- `esa-button` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages\ecology\src\components\esa-card.astro`
- `esa-icon` (hub) · `packages\ecology\src\components\esa-collapsible.astro`

## Markup and styles

_31 repeated elements are collapsed in the markup below; the comments say where._

- [all-projects.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/all-projects.markup-1.md) (47 KB)
- [all-projects.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/all-projects.markup-2.md) (4.8 KB)
- [all-projects.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker/claude/all-projects.styles.md) (11 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-link-hover` | `#00474f` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `.75rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
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
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
