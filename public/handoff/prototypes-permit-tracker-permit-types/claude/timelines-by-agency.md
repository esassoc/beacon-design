# Timelines by agency

Permit types · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/permit-types/

![Timelines by agency, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.phone.png

How long each permit type has taken at each agency, learned from every issued permit: past permits, typical (median) days, review rounds and the fastest-to-slowest range. A row opens that type at that agency.

## Key decisions

- On the Critical Areas Review page the grid becomes the statewide list: every county and city with its county, ordinance (links to the code site), last amendment, and a Rules column (AI suggested / Edited / Validated / Not read, plus Ordinance changed). Facets: Type, County, Rules, Past permits.
- Ordinance changed compares the ordinance's last amendment with the date the rules were last suggested, edited or validated (a year-only date counts as Jan 1). Check for updates re-reads every code site and stamps when it ran.
- On an agency's Critical Areas Review page, How review works and the wetland and stream buffers are each a card with its status badge, a history line (suggested by AI, edited by, validated by, with dates), Edit (every text, citation and table value) and Validate. The AI suggestion is kept beside any edit; Restore AI suggestion puts it back.
- Governing law is editable per permit type (citation, name, link); on an agency page the local ordinance's chapter and link are editable too.

## Gotchas

- Every citation links to the code section online and opens in a new tab; keep the citations with the text they support so a person can check one against the other.
- Example rules exist only so the sample agencies have something to show; they must stay badged so nobody takes them for the agency's code.

## Done when

- Sorting the Critical Areas Review grid by Rules puts jurisdictions with a changed ordinance first.
- After Validate, the section's badge reads Validated and the history line names who validated it and when.

## Components

- `bcn-duration-range` (spoke) · `src\components\bcn\BcnDurationRange.astro`
- `bcn-gchrome` (spoke) · `src\components\bcn\BcnGridChrome.astro`
- `bcn-gfoot` (spoke) · `src\components\bcn\BcnGridFooter.astro`
- `bcn-ptd` (spoke) · `src\components\bcn\BcnPermitDurations.astro`
- `esa-button` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages\ecology\src\components\esa-card.astro`
- `esa-filter-container` (hub) · `packages\ecology\src\components\esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages\ecology\src\components\esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages\ecology\src\components\esa-collapsible.astro`

## Markup and styles

_80 repeated elements are collapsed in the markup below; the comments say where._

- [timelines-by-agency.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.markup-1.md) (46 KB)
- [timelines-by-agency.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.markup-2.md) (47 KB)
- [timelines-by-agency.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.markup-3.md) (47 KB)
- [timelines-by-agency.markup-4.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.markup-4.md) (7.1 KB)
- [timelines-by-agency.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permit-types/claude/timelines-by-agency.styles.md) (13 KB)

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
| `--color-background-brand-muted` | `#eef5f4` | semantic |
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
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
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
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
