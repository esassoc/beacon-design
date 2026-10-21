# Obligation tree

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Obligation tree, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.phone.png

The list's obligations filed Category › Subcategory › Obligation, with counts on every branch. Each obligation opens to its IMPLEMENTATIONS: one row per component showing the component name, comment count and evidence count ("3 evidence" / "No evidence").

## Key decisions

- Child rows are implementations, not requirements (Andy reversed this 2026-09-23). Requirement codes and index ride on the card as data, for the mirror views to file by.
- Obligation rows carry NO status pill: evidence count is the only honest progress signal for an obligation.
- Categories and subcategories can be renamed for this list alone: the pencil on the branch row opens the rename side panel (bcn-list-branch-panel, the one a Compliance Index version uses), with the registry's name read only beneath the field. Never inline on the row (2026-10-20, for parity with index versions and the no-inline-edit rule).
- A dot beside an obligation title means the list has its own wording for it (title or description differs from the registry), tooltip "Has its own list wording". No text label.
- Card title and pencil both open the obligation panel; pencil tooltip "Move or retitle for this list".
- Clicking an implementation row emits list:edit-implementation. Prod opens the implementation upsert dialog there; the prototype builds no dialog.

## Gotchas

- The evidence count updates live after a bulk evidence save (list:evidence-added); a component row that did not exist is added.
- A branch emptied by a move or a remove drops out of the tree, and its parent counts recompute.

## Done when

- Branch counts equal the visible obligations under them; each obligation shows 1–3 implementation rows with comments + evidence and no status.

## Components

- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-lot` (spoke) · `src/components/bcn/BcnListAddIndexItems.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_19 repeated elements are collapsed in the markup below; the comments say where._

- [obligation-tree.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.markup-1.md) (47 KB)
- [obligation-tree.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.markup-2.md) (46 KB)
- [obligation-tree.markup-3.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.markup-3.md) (13 KB)
- [obligation-tree.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/obligation-tree.styles.md) (15 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
