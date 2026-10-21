# Applicable Commitments drawer

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

The surface that settles applicability one commitment at a time, brought to prod's behavior: three views (Needs a decision / Applied / Dismissed), a preview beside the list, filters, and decisions written on click with one plain Close. Every decided row says why.

## Key decisions

- WRITES ON CLICK, as prod does (BCN-1636 overrode staging). Apply, Dismiss and Undo write immediately; there is no Save and no Cancel, just Close. Undo is the safety net.
- Figures and the View toggle share one header band: Need a decision, Decided N of M, progress. Each view chip carries its own count and matches its list.
- Filters on one unlabelled row: keyword search, Source Document, Requirement Type, Species, with Clear all shown only while a filter is on. Options read A–Z, as prod's drawer sorts them. Search hits are highlighted in the rows.
- Per-row Apply / Dismiss / Undo by state, each with the optional rationale prompt. Bulk Apply / Dismiss / Undo confirm first, and a bulk rationale warns "This overwrites N existing rationales."
- The preview shows the commitment text, its source, requirements and added date; "Creates N actions on this component" while the commitment is not applied (prod: IsApplicable !== true); and the Decision with its date and Rationale once decided.
- With a setup saved, an undecided commitment setup recommends out reads "Recommended not applicable: <reasons>" with "Dismiss with This Reason" in its preview.
- Every confirm states its effects with real counts, the way prod applies them: actions created by applying; unworked to-dos removed and worked ones kept as not applicable by dismissing or undoing an apply (ADR 0035); field records unlinked by dismissing (ADR 0074). Undo of a setup decision and Dismiss with This Reason confirm first; undo of a hand decision stays one click.

## Gotchas

- UNDECIDED IS NO ROW (ADR 0032). The old vComponentCommitmentDecisions view is retired; ComponentCommitment.SetupSummaryAsync returns the honest, de-duplicated counts. Read those, not anything derived from a project-wide join.
- REQUIREMENT TYPE AND SPECIES ARE FILTERS ONLY (decided 2026-08-17). They are not shown on the commitment card or in the preview. Do not re-add them to the card.
- UNDO EXISTS IN PROD: PatchComponentCommitmentDecision(s)Async with IsApplicable empty deletes the row (ADR 0035), removing to-dos nobody has worked and keeping worked ones as not applicable. Undo and the setup re-check both use it.
- The list and the preview scroll independently, and the bulk bar is static, not at the bottom of the list.

## Done when

- Each view's count matches its list; filters narrow it; selecting a card opens its preview; Apply/Dismiss/Undo write at once and move the row between views; a bulk rationale warns before overwriting; Close is the only footer action.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-filterbar` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-sw` (spoke) · `src/components/bcn/BcnSetupWorkspace.astro`
- `bcn-sw-prev` (spoke) · `src/components/bcn/BcnSetupWorkspace.astro`
- `bcn-sw-row` (spoke) · `src/components/bcn/BcnSetupWorkspace.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-progress-bar` (hub) · `packages/ecology/src/components/esa-progress-bar.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_81 repeated elements are collapsed in the markup below; the comments say where._

- [applicable-commitments-drawer.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/applicable-commitments-drawer.markup.md) (31 KB)
- [applicable-commitments-drawer.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/applicable-commitments-drawer.styles.md) (30 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--animation-indeterminate` | `1.5s ease-in-out infinite` | semantic |
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-citation-bg` | `#f6f3ed` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-background-utility-warning-subtle` | `#fefdfb` | semantic |
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
| `--color-content-secondary` | `#525252` | component |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--form-border-width` | `1px` | component |
| `--form-label-color` | `#525252` | component |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--progress-bar-height-md` | `8px` | component |
| `--progress-bar-height-sm` | `4px` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
