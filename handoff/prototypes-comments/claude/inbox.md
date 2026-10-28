# Inbox

Submissions · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/

![Inbox, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/inbox.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/inbox.phone.png

Every submission as a mail-style inbox grouped by month: unread mark, number, submitter, the opening of the text, its topics as overlapping dots, and the date. Tabs (esa-tab-layout with icons): Inbox and Topic index (the Lists view-tab pattern; ?view=topic keeps the choice).

## Key decisions

- Dots overlap by half, each ringed in the row surface: the two most commented topics, then a small "+N" chip in the same stack. Hovering or focusing the stack opens a legend (esa-popover) of EVERY topic in the submission with its comment count.
- The list does not clip overflow, so the legend can hang out of the first row; the end rows round their own corners.
- Read state works like mail: a submission not yet reviewed carries a brand dot in the gutter; reviewed rows go quiet in secondary ink. No per-row comment counts.
- The opening of the submission is the row's content, set a step heavier (medium) than body text.
- Topic color = hue family, subtopic = shade, from --bcn-topic-* in theme-beacon.css via the shared bcn-comment-topics.css.
- Aldo filed every submission as it arrived. A topic with any passage still waiting on a person draws as a hollow, DASHED dot; confirmed is solid. The legend adds "Suggested" beside those topics. Dashed = Aldo proposed, solid = a person confirmed is the one grammar across the module (highlights, dots, cards, avatars).
- All / Mine (esa-button-toggle at the tabs' right, ?mine): Mine keeps submissions holding a comment whose open work sits with the person at the keyboard (their response, or their topic's expert when it has no open response). It steps aside on the Topic Index. An empty Mine is esa-empty-state.

## Done when

- After accepting a response, its submissions lose the unread dot and go quiet.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-ap` (spoke) · `src/components/bcn/BcnAddPermit.astro`
- `bcn-cbt` (spoke) · `src/components/bcn/BcnCommentsByTopic.astro`
- `bcn-ri` (spoke) · `src/components/bcn/BcnResponseIndex.astro`
- `bcn-si` (spoke) · `src/components/bcn/BcnSubmissionInbox.astro`
- `bcn-topic-dot` (spoke) · `src/components/bcn/BcnSubmissionInbox.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-combobox` (hub) · `packages/ecology/src/components/esa-combobox.ts`
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-radio-group` (hub) · `packages/ecology/src/components/esa-radio-group.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup and styles

_23 repeated elements are collapsed in the markup below; the comments say where._

- [inbox.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/inbox.markup.md) (12 KB)
- [inbox.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments/claude/inbox.styles.md) (38 KB)

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
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-subtle` | `#efefef` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--color-content-success` | `#218358` | component |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-050` | `clamp(.5rem, .44rem + .3vw, .625rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
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
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-label-2xs-strong-font-weight` | `550` | semantic |
| `--typography-label-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-2xs-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
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
