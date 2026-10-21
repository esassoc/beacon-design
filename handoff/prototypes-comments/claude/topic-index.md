# Topic Index

Submissions · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/

![Topic Index, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/topic-index.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/topic-index.phone.png

The topic hierarchy, drawn like the Compliance Index: one panel of 13px rows, TOPIC › SUBTOPIC › COMMENT. Topics stay open; subtopics fold. A comment row points at its submission (number and submitter, linking to it with that comment open), then a one-line excerpt and its response. No column header and no counts.

## Key decisions

- No highlighted quotes here: color is a dot beside the topic (family ink) and the subtopic (its highlight shade, ringed in ink).
- The response cell carries its state as a file glyph: pen = draft response (planned once accepted), check = accepted (planned), minus = no response. The glyph has a tooltip; the title links to the response.
- Topic verbs: rename, delete, lock, add subtopic. Subtopic verbs: rename, delete, lock. Comment verbs: move to, duplicate to. Quiet verbs appear on row hover or focus, as on the registry tree; a lock stays visible while locked.
- Move and duplicate open ONE shared picker anchored under the verb: an esa-combobox (sm) with typeahead over every "Topic › Subtopic" plus Unfiled. Enter or click files it; Esc or a click outside closes and returns focus to the verb.
- Delete never loses a comment: its comments go to the Unfiled bucket at the bottom, keeping their response links. Every change offers one-step Undo instead of a confirm.
- Duplicate files the same passage a second time under another subtopic and links the response that filing's comments already use. In the submission reader the passage paints once, as its first filing.
- Guidance is given to Aldo through bcn-aldo-prompt: a green-washed bar that opens a floating composer (auto-growing textarea, the locked topics it will keep, a round send button, ⌘Enter). Sending holds for a beat (shimmer, turning mark), folds the card away and lands the change in view; the bar then reads "Aldo refiled N comments" with Undo. It is the compliance-index guidance + Re-run pattern: it refiles everything not locked in one step, Unfiled first. A locked topic or subtopic neither gives nor takes comments, and cannot be renamed or deleted until unlocked; the composer names what is locked, and says nothing when nothing is. Names a person set are kept.
- Renames and new subtopics reach the submission page's Topic select (comments-store holds the hierarchy).
- Each topic row carries its expert (esa-avatar + an sm esa-select over the study team): the period's topic → expert map. Aldo routes a new response to its topic's expert, and changing the expert re-routes open responses that are still Aldo's routing (suggested), never ones a person assigned.
- Re-run refiles only filings that are still suggested: a person's call stands.

## Gotchas

- The prototype runs no model: Aldo's refiling is keyword-based (comments-store rerun) and moves 3 comments from the opening state. Production sends the guidance with the hierarchy and its locks.
- esa-popover could not host the composer (its anchor shrink-wraps the trigger and centres the panel), so bcn-aldo-prompt anchors its own card: Esc and outside click close it and keep the draft.
- Comment rows render only inside open branches, so a folded tree carries no menus.

## Done when

- Deleting a subtopic moves its comments to Unfiled and Undo restores both.
- Locking a topic or subtopic hides its rename and delete; Aldo's refiling leaves its comments where they are.
- Duplicate to files a second copy under the chosen subtopic, which opens with the copy flashing.
- Moving a comment flashes it in its new subtopic, which opens.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/aldo/BcnAldoMark.astro`
- `bcn-ap` (spoke) · `src/components/bcn/BcnAldoPrompt.astro`
- `bcn-cbt` (spoke) · `src/components/bcn/BcnCommentsByTopic.astro`
- `bcn-topic-dot` (spoke) · `src/components/bcn/BcnSubmissionInbox.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-combobox` (hub) · `packages/ecology/src/components/esa-combobox.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_18 repeated elements are collapsed in the markup below; the comments say where._

- [topic-index.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/topic-index.markup.md) (35 KB)
- [topic-index.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/topic-index.styles.md) (27 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--avatar-font-size-xs` | `clamp(.5rem, .44rem + .3vw, .625rem)` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-xs` | `20px` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-prompt-ring` | `#08908b8c` | component |
| `--bcn-aldo-prompt-shadow` | `0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61` | component |
| `--bcn-aldo-prompt-shimmer` | `linear-gradient(90deg, transparent 0%, #08908be6 50%, transparent 100%)` | component |
| `--bcn-aldo-prompt-wash` | `linear-gradient(100deg, #e8f6f5 0%, #f3fbfa 55%, #fff 100%)` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-topic-amber-1` | `#ffee9c` | component |
| `--bcn-topic-amber-2` | `#f3d673` | component |
| `--bcn-topic-amber-3` | `#e9c162` | component |
| `--bcn-topic-amber-4` | `#e2a336` | component |
| `--bcn-topic-amber-ink` | `#ab6400` | component |
| `--bcn-topic-blue-1` | `#d5efff` | component |
| `--bcn-topic-blue-2` | `#acd8fc` | component |
| `--bcn-topic-blue-3` | `#8ec8f6` | component |
| `--bcn-topic-blue-4` | `#5eb1ef` | component |
| `--bcn-topic-blue-ink` | `#0d74ce` | component |
| `--bcn-topic-crimson-1` | `#fedce7` | component |
| `--bcn-topic-crimson-2` | `#f3bed1` | component |
| `--bcn-topic-crimson-3` | `#eaacc3` | component |
| `--bcn-topic-crimson-4` | `#e093b2` | component |
| `--bcn-topic-crimson-ink` | `#cb1d63` | component |
| `--bcn-topic-grass-1` | `#daf1db` | component |
| `--bcn-topic-grass-2` | `#b2ddb5` | component |
| `--bcn-topic-grass-3` | `#94ce9a` | component |
| `--bcn-topic-grass-4` | `#65ba74` | component |
| `--bcn-topic-grass-ink` | `#2a7e3b` | component |
| `--bcn-topic-orange-1` | `#ffdfb5` | component |
| `--bcn-topic-orange-2` | `#ffc182` | component |
| `--bcn-topic-orange-3` | `#f5ae73` | component |
| `--bcn-topic-orange-4` | `#ec9455` | component |
| `--bcn-topic-orange-ink` | `#cc4e00` | component |
| `--bcn-topic-slate-1` | `#e0e1e6` | component |
| `--bcn-topic-slate-2` | `#d9d9e0` | component |
| `--bcn-topic-slate-3` | `#cdced6` | component |
| `--bcn-topic-slate-4` | `#b9bbc6` | component |
| `--bcn-topic-slate-ink` | `#60646c` | component |
| `--bcn-topic-violet-1` | `#ebe4ff` | component |
| `--bcn-topic-violet-2` | `#d4cafe` | component |
| `--bcn-topic-violet-3` | `#c2b5f5` | component |
| `--bcn-topic-violet-4` | `#aa99ec` | component |
| `--bcn-topic-violet-ink` | `#6550b9` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-success` | `#218358` | component |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-050` | `clamp(.5rem, .44rem + .3vw, .625rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--gap` | `.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-label-2xs-strong-font-weight` | `550` | semantic |
| `--typography-label-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-2xs-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
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
