# Permits (List view)

Project · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/projects/coal-creek-fish-passage/

![Permits (List view), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/permits-list-view.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/permits-list-view.phone.png

Every permit on the project as an AG Grid: permit (links to its page), applies to, level, agency, assigned to, status with flags, submitted, reviews, issued, expires, conditions. Board and Schedule are the other two tabs.

## Key decisions

- Status is user data: each project configures its own status columns per workflow (Configure statuses); rows resolve through the status store and follow board moves.
- Two derived flags ride beside the status and are never statuses: "Waiting on <permit>" (unissued prerequisites) and "Expires soon" / "Expired".
- The Board is one column per status of the chosen workflow (or All permits by backbone category); dragging a card logs a status change. The Schedule draws one bar per permit on a calendar with Today and Construction start lines, each permit indented under the one it waits on.
- Permits added with Add permit join the List, Board and Schedule and link to their own page.

## Done when

- The Applies to filter narrows to one site (project-wide permits stay listed under Project-wide).

## Components

- `bcn-gchrome` (spoke) · `src\components\bcn\BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src\components\bcn\BcnGridFooter.astro`
- `bcn-ptl` (spoke) · `src\components\bcn\BcnPermitTable.astro`
- `bcn-status-chip` (spoke) · `src\components\bcn\BcnActionTable.astro`
- `esa-badge` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages\ecology\src\components\esa-card.astro`
- `esa-filter-dropdown` (hub) · `packages\ecology\src\components\esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages\ecology\src\components\esa-collapsible.astro`

## Markup and styles

_87 repeated elements are collapsed in the markup below; the comments say where._

- [permits-list-view.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/permits-list-view.markup-1.md) (47 KB)
- [permits-list-view.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/permits-list-view.markup-2.md) (37 KB)
- [permits-list-view.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-projects-coal-creek-fish-passage/claude/permits-list-view.styles.md) (14 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
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
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `2rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
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
| `--typography-font-weight-semibold` | `550` | semantic |
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
| `--typography-microcopy-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
