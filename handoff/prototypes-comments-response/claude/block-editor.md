# Block editor

Response · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/response/

![Block editor, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/block-editor.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/block-editor.phone.png

The letter of response in a TipTap block editor modeled on WordPress's: paragraphs, headings 2 to 4, bullet and numbered lists, quote, callout, separator. "/" opens the inserter (blocks, then the Response Library); the + at an empty line opens the same inserter with a search field. The block toolbar sits over the selected block: type switcher, move up / down, Bold / Italic, Options (add before / after, duplicate, delete).

## Key decisions

- Text editing and block insertion only: none of WordPress's layout features (columns, groups beyond the callout, alignment).
- Selecting text raises a small bubble under it: Bold, Italic, Note and Rewrite with Aldo. Both open bcn-note-composer under the selection, which stays tinted while you write. Aldo ("shorter", "plainer", "warmer"…) rewrites only the selection; the bubble then offers Undo or Keep.
- Aldo shows he is working and what he changed: after Send the composer locks, a shimmer runs along its foot, "Aldo is revising…" replaces the shortcut hint, his mark turns, and the held text shimmers in his tint. About a second later the new text replaces the selection washed in his tint, which fades out (about 3s). Reduced motion: no shimmer or fade, a short hold, a still tint.
- The Response Library is inserted as text (its paragraphs), not as a linked block.
- Link was left out of the toolbar; a pasted https address links itself.

## Gotchas

- Ported in part from beacon-dashboard (BpDoc, BpBlockToolbar, editor/callout). The toolbar's controls are esa-button and esa-dropdown-menu rendered at build time with their glyphs swapped at runtime.
- The prototype runs no model. r-04's ten sentences each carry a prewritten shorter, plainer and warmer rewrite (src/data/aldo-rewrites.ts): a selection of whole r-04 sentences is rewritten from them. Anything else falls back to rules: shorter keeps the first sentence, plainer and more formal swap phrasing, warmer leads with an acknowledgement. Sentences are matched whole, not split on periods ("5 a.m.").
- Alt+F10 moves focus into the block toolbar; Esc returns it to the text.

## Done when

- Typing "/callout" + Enter on an empty line inserts a callout.
- Selecting r-04's first two sentences and asking Aldo for "warmer" shows the working state, then lands the prewritten warmer text, which fades from Aldo's tint; ⌘Z or Undo restores it.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-doc` (spoke) · `src/components/bcn/BcnDocSheet.astro`
- `bcn-nc` (spoke) · `src/components/bcn/BcnNoteComposer.astro`
- `bcn-note` (spoke) · `src/components/bcn/BcnResponseEditor.astro`
- `bcn-rn` (spoke) · `src/components/bcn/BcnResponseNotes.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup and styles

_4 repeated elements are collapsed in the markup below; the comments say where._

- [block-editor.markup-1.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/block-editor.markup-1.md) (47 KB)
- [block-editor.markup-2.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/block-editor.markup-2.md) (1.9 KB)
- [block-editor.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/block-editor.styles.md) (35 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--avatar-font-size-xs` | `clamp(.5rem, .44rem + .3vw, .625rem)` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-xs` | `20px` | component |
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
| `--bcn-note-tint` | `#fff7c2` | component |
| `--bcn-note-tint-lit` | `#fbe577` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--elevation-3` | `0 4px 20px -4px #0000000f` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-050` | `clamp(.5rem, .44rem + .3vw, .625rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
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
| `--spacing-700` | `3rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-lg-font-size` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-label-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-label-2xs-strong-font-weight` | `550` | semantic |
| `--typography-label-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-2xs-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
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
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
