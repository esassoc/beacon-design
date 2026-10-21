# The two-pane registry review

Project setup — Obligations (two-pane alternative) · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-obligations-panes/

![The two-pane registry review, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations-panes/claude/the-two-pane-registry-review.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations-panes/claude/the-two-pane-registry-review.phone.png

The registry itself and the thing this step approves: 17 subject areas over 69 headings over 402 standing duties, as a three-level disclosure tree. An area states its count, offers a single confirm, and opens to its headings; a heading opens to its duties; a duty opens IN PLACE to its record.

## Key decisions

- IT IS PROD’S SETUP-STEP SHAPE, PORTED — not a new surface. Every step of Beacon’s project setup renders `setup-wizard-sidebar` beside a main pane (`project-setup-layout`): the sidebar picks the record you are working through, the main pane does the step’s work on it. Source Documents picks a document, Commitments picks a commitment, Requirements picks a commitment; Obligations picks a SUBJECT AREA. The main pane then follows `commitments-step` / `requirements-step`: a header for the selected record (title + a counts line) over a list of its children. Match that, not something invented.
- IN THE SPOKE IT IS THE THIRD INSTANCE OF AN EXISTING FRAME, not a new one: bcn-registry-workspace is the direct sibling of bcn-inbox-workspace and bcn-triage-workspace, and the area rows use the same anatomy as bcn-inbox-queue’s. A fourth invented list shape would read as a different product.
- AN EARLIER PASS WENT WRONG BY COPYING THE PROPOSAL DOCUMENT’S OWN HTML. The specimen (actions-obligations-2026-09-02.html) is a content source, not a UI pattern source — chasing its look produced hand-rolled carets, hand-rolled disclosure summaries and a hand-rolled definition-list grid, all of which esa-collapsible and BcnKeyValue already provide. Take the specimen’s STRUCTURE (subject area → heading → duty, compact rows, detail on demand) and express it in the design system.
- THE USER IS DECIDING APPLICABILITY, NOT CORRECTNESS. The permit says what it says and the four classes are system-owned. Applicability is inherited from the work: if the project does no in-water work, the in-water duties are not theirs. Same job the Applicable Commitments drawer does at step 2, one level down the chain.
- EVERYTHING STARTS INCLUDED. The registry is authoritative, so the default is that a duty applies and the job is finding the ones that do not. Undecided-by-default would put 402 empty checkboxes in front of someone and call it a queue. Confirming an area is what records that a human looked, which is the only thing an auditor can be shown later.
- THE DECISION IS ON THE DUTY, NEVER ON THE PLACEMENT. 188 duties sit under two or three areas, so the same row appears more than once. Unchecking it anywhere unchecks it everywhere, because it is one duty. Each row names the other areas it appears in so the jump is not a surprise.
- CHANGING AN AREA UN-CONFIRMS IT. The person confirmed a set; once the set changes it is no longer that set.
- An excluded row stays legible and struck through rather than disappearing — it is a decision to see and undo, not a deletion.
- Confirmed state is a value-layered surface change, never a coloured left border, which is banned house-wide as a category or status device.

## Gotchas

- TWO ROW MARKERS, NEITHER OF WHICH IS A DECISION. GATED (17 rows) means the duty does not take effect until an action is approved — a dependency. CONTESTED (232 rows) means the sources state different values ("10 mph in the ITP, 15 in the BiOp") — a conflict somebody must resolve, but a different job from applicability, and at 58% of the registry it is nobody’s exception queue. An earlier plan made these two the "individual review queue"; they are not.
- esa-collapsible takes `title` as a STRING and has no slot in its summary, so an area’s confirm control cannot live in the disclosure row and gets its own header row above it.
- esa-checkbox with no visible label must be named from the HOST via aria-label, which the lego forwards to its inner input. Passing `label` prints the duty title a second time beside the one already in the row.
- esa-button declares its own display and CANNOT be hidden by the `hidden` attribute — wrap it in an element you own and hide that. Any element with an explicit display rule toggled via `hidden` also needs :not([hidden]) on that rule.
- A keydown or click handler must not call .closest() on event.target unguarded — with nothing focused that target is the document, which has no closest(), and the throw silently kills the handler.
- An area’s count and its confirm button are both recomputed from the rows, so a button can never offer to confirm a number its own list disproves.
- PAGE WEIGHT IS THE COST OF SERVER-RENDERING EVERYTHING: 777 <details> elements and 691 checkboxes, 2.0 MB decoded (152 KB gzipped), ~950 ms to load. Fine for a static prototype and deliberate — every panel renders at build time, because a panel assembled from a template literal bypasses the design system and no gate can see it. In the Angular app this is the one place to deviate: render an area’s headings eagerly but defer each heading’s duty rows until it opens, which is invisible to the user because minors ship closed.
- 691 checkboxes render at build time (placements at the minor level, higher than the 613 area placements because a duty can sit under two headings of the same area). Every panel is server-rendered and the controller only reveals, hides and re-labels — a panel assembled from a template literal bypasses the design system and no gate can see it.

## Done when

- Seventeen areas, alphabetical, from Agency reporting and approvals (53) to Water operations (28).
- Unchecking duty 2-094 under Agency reporting also unchecks it under Mitigation and restoration, marks both rows excluded, drops both confirm buttons by one, and moves the headline figure by exactly one.
- Confirming an area swaps its button for a badge reading "N duties confirmed"; unchecking a row inside it restores the button and drops the headline.
- The left pane lists 17 subject areas with a duty count and a heading count; the first is selected on load and the main pane shows it.
- Selecting an area in the left pane swaps the main pane and moves the current-row marker; no pane is ever built at runtime.
- Opening a duty’s Details shows Standard, Condition, then Parameters / Notice window / In effect / Installed control where present, then Activities, Species and "Also filed under" (comma-separated — several subject names contain "and" themselves), then a link to the full record.
- Confirming an area badges it in BOTH panes — the pane header and its row in the sidebar — and moves the sidebar’s own "N of 17 confirmed" line.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-ra` (spoke) · `src/components/bcn/BcnRegistryArea.astro`
- `bcn-registry-area` (spoke) · `src/components/bcn/BcnRegistryAreas.astro`
- `bcn-registry-area-pane` (spoke) · `src/components/bcn/BcnRegistryArea.astro`
- `bcn-registry-areas` (spoke) · `src/components/bcn/BcnRegistryAreas.astro`
- `bcn-registry-workspace` (spoke) · `src/components/bcn/BcnRegistryWorkspace.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app

## Markup and styles

_112 repeated elements are collapsed in the markup below; the comments say where._

- [the-two-pane-registry-review.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations-panes/claude/the-two-pane-registry-review.markup.md) (40 KB)
- [the-two-pane-registry-review.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-obligations-panes/claude/the-two-pane-registry-review.styles.md) (20 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
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
| `--color-background-default` | `#fafafa` | semantic |
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
| `--radius-200` | `.5rem` | primitive |
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
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
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
