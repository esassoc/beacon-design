# Component Setup dialog

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

A first-time setup that trims the component's Applicable Commitments to what it actually needs. Five steps in a vertical rail: Source Documents, Location and Species, Construction Activities, Dates, Recommendations. Each step's answer shows under its name in the rail, and the tally under the rail says what saving would do. Setup only recommends; the person decides, and one Save writes it.

## Key decisions

- SOURCE DOCUMENTS ARE THE OUTER LIMIT. Only selected documents' commitments can apply. Selecting none means every document applies, which is prod today, so a tenant that never runs setup sees no change. Each document row says which components it is already mapped to.
- THE RECOMMENDATION RULE (recommend() in src/data/component-commitments.ts). Tags live on requirements. A requirement misses on a kind only when it carries tags of that kind and none match: species not selected, activities not selected, or no season overlapping the component's start-to-end dates. A requirement with no tags of a kind never misses on it, and a tag on a species, activity or season the project has since deleted never misses either. A commitment is recommended Not Applicable only when it has at least one requirement and EVERY requirement misses on something; the reasons are the distinct misses, species then activity then season.
- The Dates step reads and writes the component's own Start Date and Expected End Date (dbo.Component). A component missing either date, or running a year or more, overlaps every season.
- SAVE CONFIRMS FIRST, with counts: commitments dismissed and applied, actions created, and field records unlinked from the dismissed commitments on this component (ADR 0074). A row moved by hand adds an optional note field to the confirm.
- Construction Activities count only once the person has visited that step. Until then every activity is treated as selected, so skipping the step rules nothing out.
- A span of a year or more overlaps every season. No "Runs N months" line: the season chart simply shows every season overlapping.
- Season chart: a key above it (blue bar = Season, outlined box = Work dates) and a status per season, green circle-check "Overlaps" or gray circle-minus "No overlap". No summary sentence under it.
- Step circles follow the Setup Wizard step nav: 20px circle, 12px digit, current is the brand fill, done is a brand check.
- The header shows the component's mark and name (BcnEntityLogo), not a badge.
- Species and activity names are Title Case data. Species list A–Z (prod orders ProjectSpecies by CommonName); activities keep the project's SortOrder.

## Gotchas

- Nothing is written until the confirm. The setup itself (sources, species, activities, dates) and every decision it makes are saved together in one call; Cancel discards the draft.
- The rail's answer lines wrap one part per line rather than truncating ("26 not applicable", "11 will apply").

## Done when

- In the fixture, with the four Geotech documents selected, the activities Ground Disturbance, Drilling and Boring, Vegetation Removal, Equipment Staging and Haul Truck Traffic, and Oct 5, 2026 – Jan 29, 2027: the review shows 26 Not Applicable (16 from unselected documents, 10 recommended), 11 Will Apply and 5 Already Decided; Save reads "Dismiss 26 and Apply 11", and its confirm says it creates 11 actions and unlinks 3 field records.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-cs` (spoke) · `src/components/bcn/BcnCaoRules.astro`
- `bcn-cs-opt` (spoke) · `src/components/bcn/BcnComponentSetup.astro`
- `bcn-entity-logo` (spoke) · `src/components/bcn/BcnComponentPicker.astro`
- `bcn-hmap` (spoke) · `src/components/bcn/BcnHabitatMap.astro`
- `bcn-so` (spoke) · `src/components/bcn/BcnSeasonOverlap.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app
- `esa-date-picker` (hub) · `packages/ecology/src/components/esa-date-picker.ts`
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup and styles

_17 repeated elements are collapsed in the markup below; the comments say where._

- [component-setup-dialog.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-setup-dialog.markup.md) (9.6 KB)
- [component-setup-dialog.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-setup-dialog.styles.md) (32 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-seal-ring-color` | `#fcfcfc` | component |
| `--bcn-seal-ring-width` | `3px` | component |
| `--bcn-seal-shadow` | `0 2px 12px 0 #00000014` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
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
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
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
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
