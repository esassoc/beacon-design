# The registry — two read-only views

Obligation Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-tracking/

The Registry tab, in the same two views setup step 5 offers: BY CATEGORY (the subject taxonomy, four levels: category > subcategory > obligation > requirements) and BY COMMITMENT (the permit top-down: commitment > requirement > the obligations it became, with route and orphan counts). A segmented control swaps them; each carries its own filter row.

## Key decisions

- BOTH TREES ARE THE WIZARD OWN COMPONENTS in mode="browse" — bcn-sw-obligations-tree and bcn-sw-chain-tree. Setup gets rename, remove, add, drag and the editor drawer; browse gets none of them. One component with a mode, so setup approves along these trees and this page reads along them and they cannot drift.
- WHAT SURVIVES BROWSE IS EVERYTHING THAT NAVIGATES rather than decides: expand and collapse, search with hit highlighting, the class and category pickers, and the coverage picker.
- THE SWITCH REVEALS, IT DOES NOT NAVIGATE. The wizard makes these two separate PAGES and its bcn-sw-view-switch changes location. A tab that navigates away is not a tab, and this page already has two levels of tab — a third nesting is what this avoids.
- EACH VIEW CARRIES ITS OWN FILTER ROW, because the two trees listen on different field names (swo-search / swc-search) and narrow by different things: class and category for the taxonomy, coverage for the chain.
- THE CARD AND REQUIREMENT TITLES ARE STATIC SPANS IN BROWSE, not buttons. In review they open a drawer; a read-only page does not carry one, and a control that looks clickable and does nothing is worse than no control.

## Gotchas

- THE TREE SCRIPTS MUST NOT BAIL ON BROWSE. An earlier pass skipped all wiring when mode was browse, which also killed search, expand/collapse and the counts — the parts a read-only registry needs most. Every EDIT path is inert on browse without a guard: the verbs and drag hooks are not rendered, the template stamp is lazy, and the confirm guard is optional-chained.
- CHIPS ANNOUNCE THEMSELVES AS BUBBLING sw:chip EVENTS carrying a name, and each tree listens on the document for its own. That is why a chip works from inside the filter row rather than only from the step title where the wizard puts it.
- BOTH TREES RENDER AT BUILD TIME, one hidden. [hidden] loses to an author display rule, so the visible state is guarded with :not([hidden]).
- The template stamps and the confirm dialog are review-only and are gated out, not merely hidden — a read-only tree should not ship a delete guard.

## Done when

- A segmented control reads By category / By commitment and swaps the panel below it.
- By category renders four levels with no grips, no rename/remove/add verbs, no New category footer and no confirm dialog.
- By commitment renders 294 commitments with route and orphan counts, and no Add or Open verbs.
- Typing in either search box filters its tree and wraps hits in <mark>.
- The setup wizard step 5 pages are unchanged — both still render in review mode with their verbs, drag hooks and drawers.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-swc` (spoke) · `src/components/bcn/BcnSetupWizardCard.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `bcn-swfr` (spoke) · `src/components/bcn/BcnSwFilterRow.astro`
- `bcn-swoc` (spoke) · `src/components/bcn/BcnSwObligationCard.astro`
- `bcn-swot` (spoke) · `src/components/bcn/BcnListAddObligations.astro`
- `bcn-swsc` (spoke) · `src/components/bcn/BcnSwSelectChip.astro`
- `bcn-treg` (spoke) · `src/components/bcn/BcnTrackingRegistry.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_315 repeated elements are collapsed in the markup below; the comments say where._

- [the-registry-two-read-only-views.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-registry-two-read-only-views.markup.md) (44 KB)
- [the-registry-two-read-only-views.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-tracking/claude/the-registry-two-read-only-views.styles.md) (28 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
