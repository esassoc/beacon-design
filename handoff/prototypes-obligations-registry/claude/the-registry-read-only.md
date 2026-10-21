# The registry (read-only)

Obligations Registry (read-only) · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligations-registry/

![The registry (read-only), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligations-registry/claude/the-registry-read-only.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligations-registry/claude/the-registry-read-only.phone.png

The registry as a nested tree — 17 subject areas over 69 headings over 402 standing duties, each duty a one-line row opening in place to its record. No selection, no verbs, nothing to decide.

## Key decisions

- SAME COMPONENT AS STEP 5, mode="browse". The review affordances are a prop, not a fork: passing the other mode drops the select-all, the bulk verbs, the per-area Approve and every row checkbox, and nothing else changes. Do not reimplement a read-only registry.
- Expand/collapse-all SURVIVES into browse mode. It is navigation over 86 grouping nodes, not a decision control, and a reader needs it more than a reviewer does.
- The duty row keeps its class chip and commitment codes, and the record keeps every field including the gate and the value conflict. Read-only means no VERBS, not less information.
- The registry is reachable along any axis a reader thinks in — subject, activity, species. This page shows the SUBJECT axis, the one step 5 approves along. An axis pivot belongs in the component, not on this page.

## Gotchas

- The controller (registry-tree.ts) returns early unless data-mode is "review", so the same script costs one no-op call here. Do not branch at the call site.
- Everything is server-rendered — 691 duty placements, ~1500 <details>. Deliberate for a static prototype. In the Angular app, render areas and headings eagerly but defer each heading’s duty rows until it opens; headings ship closed, so it is invisible.
- A duty filed under two or three subject areas appears in each of them. That is the registry’s own structure — 613 placements over 402 duties — not a duplicate to de-dupe. The record names the other areas under “Also filed under”.

## Done when

- Seventeen subject areas render open with their headings and counts; headings and duty records render closed.
- No checkbox, no Approve control and no bulk verb appears anywhere on the page.
- Expand all opens every area and heading but leaves duty records closed.
- Opening a duty shows Standard, Condition, then Parameters / Notice window / In effect / Installed control where present, then Activities, Species and “Also filed under”, then a link to the full record.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-rt` (spoke) · `src/components/bcn/BcnRegistryTree.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app

## Markup and styles

_97 repeated elements are collapsed in the markup below; the comments say where._

- [the-registry-read-only.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligations-registry/claude/the-registry-read-only.markup.md) (40 KB)
- [the-registry-read-only.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-obligations-registry/claude/the-registry-read-only.styles.md) (17 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-subtle` | `#efefef` | component |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-utility-success` | `#218358` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-label-color` | `#525252` | component |
| `--radius-100` | `.25rem` | primitive |
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
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
