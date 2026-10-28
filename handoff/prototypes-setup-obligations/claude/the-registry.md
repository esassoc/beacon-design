# The registry

Project setup — Obligations (step 5) · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-obligations/

![The registry, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations/claude/the-registry.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations/claude/the-registry.phone.png

The registry as a nested tree — 17 subject areas over 69 headings over 402 standing duties, each duty a one-line row opening in place to its record — with a toolbar carrying selection, the bulk verbs and expand/collapse.

## Key decisions

- ONE COMPONENT, TWO MODES. BcnRegistryTree takes mode="review" (here: selectors, bulk verbs, per-area approval) or mode="browse" (the read-only registry at /prototypes/obligations-registry: same tree, same records, nothing to decide). Build it as one configurable component, never as two surfaces — they will drift.
- THE SHAPE COMES FROM THE PROPOSAL DOCUMENT (actions-obligations-2026-09-02.html, §Obligations Registry): three levels of disclosure, a count beside every name, duties opening to a key-value record, and expand/collapse-all because 86 grouping nodes is more than anyone clicks through. The CHROME does NOT come from that document — it is a content source, not a UI pattern source, and an earlier pass that copied its markup hand-rolled carets, disclosure summaries and a definition list the design system already provides.
- SELECTION IS A SELECTION, NOT A DECISION — prod’s model, and the one BcnSetupWorkspace already implements. A duty is PENDING until somebody acts; the checkbox marks it for a bulk act; Approve and Not applicable are the acts. An earlier pass made the checkbox itself mean “applies”, which left select-all with nothing to mean.
- THREE APPROVAL SCOPES, mirroring prod’s “Approve all (N)”: the selection, one subject area, or the whole registry. The registry-wide button hides while a selection is live so the toolbar never offers two competing approvals at once, and every label counts PENDING duties only.
- SELECT-ALL TAKES WHAT IS VISIBLE, never the hidden remainder — the rule BcnSetupWorkspace set. A control that silently reaches into a collapsed branch is a trap. Collapsing a branch therefore recomputes the toolbar.
- THE DECISION IS ON THE DUTY, NEVER ON THE PLACEMENT. 188 duties sit under two or three areas, so the same duty appears more than once and every write fans out by id. Deciding 16 duties can paint 34 badges — that is the fan-out working, not a double count.
- A decided duty leaves the selection: leaving it ticked invites the same act twice.
- An excluded duty stays legible and struck through rather than disappearing — a decision to see and undo. Approved does NOT dim, because approved is the expected outcome.
- No compliance status anywhere. Obligations carry no verdict by decision (2026-09-03); Approved / Not applicable is SCOPE — whether the duty is this project’s — not performance against it.

## Gotchas

- COMPOSE, DO NOT REBUILD: esa-collapsible is all three disclosure levels AND the duty’s Details, esa-checkbox the select-all and every row selector, esa-button every verb, esa-badge the decision marker and class chip, BcnCommitmentBadge every commitment code, BcnKeyValue every field in the record. What is left as CSS is composition glue — the toolbar row, the branch indentation, and the checkbox-beside-content row grid.
- esa-collapsible takes `title` as a plain STRING with no slot, so a branch count goes IN the title (“Birds (62)”) and a branch’s Approve button lives in the first row of its BODY — which also avoids a click on the verb toggling the disclosure on its way to doing its job.
- EXPAND-ALL MOVES ONLY THE TWO GROUPING LEVELS. Opening 402 duty records is not “expand”, it is a wall.
- The `toggle` event does NOT bubble — listen in the capture phase, or collapsing a branch silently leaves select-all claiming rows nobody can see.
- esa-badge must be re-labelled through its inner .esa-badge__text span. Writing to the badge root replaces that span with a bare text node — the label still READS correctly, so the breakage is invisible, but the lego’s structure is gone.
- esa-button declares its own display and CANNOT be hidden by the `hidden` attribute — wrap it in an element you own. Any element with an author display rule toggled via `hidden` also needs :not([hidden]) on that rule.
- A click handler must not call .closest() on event.target unguarded — with nothing focused that target is the document, which has no closest(), and the throw silently kills every control on the surface.
- BOTH decision badges are rendered on every row and hidden; the controller reveals one. It never builds markup — a panel assembled from a template literal bypasses the design system and no gate can see it.
- PAGE WEIGHT is the cost of server-rendering everything: 691 duty placements and ~1500 <details> elements. Deliberate here. In the Angular app, render areas and headings eagerly but defer each heading’s duty rows until it opens — invisible to the user, because headings ship closed.

## Done when

- Seventeen subject areas render open, each listing its headings with counts; headings and duty records render closed.
- With every heading collapsed, select-all selects nothing; opening one heading and selecting all takes exactly its rows and the count line reads “N selected”.
- Approving a selection badges those duties, clears the selection, and moves the lead band; approving one area badges the area and swaps its button for “N duties approved”.
- Approving 16 duties that are filed twice paints 34 row badges but moves the approved figure by 16.
- The registry-wide Approve all button counts pending only, and disappears whenever a selection is live.
- On /prototypes/obligations-registry the same tree renders with no checkboxes, no bulk verbs and no approve buttons.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-rt` (spoke) · `src/components/bcn/BcnCaoRules.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app

## Markup and styles

_97 repeated elements are collapsed in the markup below; the comments say where._

- [the-registry.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations/claude/the-registry.markup-1.md) (47 KB)
- [the-registry.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations/claude/the-registry.markup-2.md) (979 B)
- [the-registry.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations/claude/the-registry.styles.md) (18 KB)

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
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
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
| `--color-content-brand` | `#005862` | semantic |
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
| `--gap` | `1.5rem` | component |
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
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
