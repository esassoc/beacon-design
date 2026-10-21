# Aldo on a list

Aldo on Lists · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/new-obligation-list/?aldo

![Aldo on a list, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-new-obligation-list/claude/aldo-on-a-list.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-new-obligation-list/claude/aldo-on-a-list.phone.png

Aldo on the list, above Details: a launcher in Aldo's wash ("Ask Aldo to fill this list") that opens the same conversation the setup wizard has, in place. The person says what the list is for in their own words; Aldo names how many records fit and where they file, and offers one key. The list fills when the key is pressed. Andy, 2026-10-19: "I should be able to start a list and then explain what I want and have that populate."

## Key decisions

- Built from the Aldo kit (bcn-aldo-panel, -thread, -composer; docs/aldo-kit-spec.md), docked in the rail at a fixed 32rem height so Details stays put, expandable over the page like the setup wizard's. Collapsing folds it back into the launcher.
- What it reads a message as: add (the default), remove ("take out", "remove", "drop", "leave out"), or a question ("what's on here?", "is dust covered?"), which changes nothing.
- Nothing changes until the key is pressed: "Add 14" (success tone) or "Remove 4" (danger tone), with Dismiss beside it. Pressed, the change goes through the page's own paths: the Add drawer's rows (`list:add-ids`) and the tree's own remove (`list:drop-members`), so counts, filing and the drawer stay as a manual add leaves them. The press is said as one quiet event line ("Added 14 obligations").
- Records already on the list are not offered again; the reply says how many were.
- Prod: one structured-output call per message (AIController, the kit's { actions, reply } contract) given the list, its members and the registry of its type, returning `{ actions: [{ kind: "add" | "remove", ids }], reply }`. The ids must be checked against the registry server-side before the key is offered.
- Not on the canonical Compliance Index: it is the project's own and is not edited here.
- Candidates per list type: every obligation in the registry (reply grouped by category › subcategory), every action on the project (grouped by action type), every commitment (grouped by permit section).
- Depends on the setup wizard's Aldo: the kit and the AI call are that work's, so this epic follows it. The list-export epic's pages work without any of it.

## Gotchas

- The prototype runs no model. It matches words per clause ("dust, spills or refueling" is three asks, "annual reports to CDFW" one), with the phrases records file under and a short synonym list (list-aldo-match.ts). Do not port it; it only stands in for the call.
- A remove from Aldo skips the per-card confirm: the key in the conversation is the confirmation.

## Done when

- Typing "anything about dust, spills or refueling" and pressing Add puts those obligations in the tree under their subcategories, and the title badge moves by the number added.
- Dismiss leaves the list as it was and says so.

## Components

- `bcn-aldo-composer` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-aldo-msg` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-aldo-panel` (spoke) · `src/components/bcn/BcnListAldo.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup and styles

_10 repeated elements are collapsed in the markup below; the comments say where._

- [aldo-on-a-list.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-new-obligation-list/claude/aldo-on-a-list.markup.md) (13 KB)
- [aldo-on-a-list.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-new-obligation-list/claude/aldo-on-a-list.styles.md) (35 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-prompt-ring` | `#08908b8c` | component |
| `--bcn-aldo-prompt-shadow` | `0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61` | component |
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
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-hover` | `#113264` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-warning-hover` | `#ffba18` | semantic |
| `--color-background-utility-warning-muted` | `#fff7c2` | semantic |
| `--color-background-utility-warning-subtle` | `#fefdfb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--elevation-1` | `0 1px 4px 0 #00000008` | semantic |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
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
| `--typography-font-weight-medium` | `500` | semantic |
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
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
