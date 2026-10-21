# Run console

Step 3: Compliance Index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/compliance-index/

Build index and the Draft run, each as a session. Build index is two tool calls: Read requirements streams each commitment read with its requirement count, and Propose index streams each category and subcategory proposed as a green + line with its citations; it ends on "Done in 12s." with the categories and subcategories to review, and View Log reopens it until the index is drafted. The Draft run: In the step panel it is a peek no taller than 100px: the newest lines of the stage running and the spinner, fading out at the top. Pressing it (or Open log) opens the console by itself in a lightbox over the page, its close key in the corner; Esc and a click outside also close it. When the run ends the peek goes and View log reopens the same lightbox. The key pressed is the prompt line. Each stage is a tool call: a dot (blinking while it runs, green when done), its name and what it works over ("910 requirements"). Under it, behind an elbow, what the run is doing to this project streams: the commitments read with their requirements and items, the subcategories filed into with their item counts and each item that fits none, each draft merged from more than one item with its requirement IDs, each action completed with its type, scope and responsible party. A done stage folds to its sentence ("2,463 of 2,473 items filed, 10 fit no subcategory") with Show N to unfold every line. Below the stages, a spinner names the stage in progress with elapsed seconds and its count, and the four stages tick off under it. The run ends on "Done in 26s." with the drafts filed and what needs attention. After a Re-run (built phase), the same console shows the guidance as the prompt and Propose index as a diff: + added, − removed, and bins kept because they are locked.

## Key decisions

- No percentage bar and no form dialog: the lightbox is the console alone, a thin border on a dimmed page. The count that moves is always a real noun (requirements, items, actions), and the lines are the drafts file's own: commitment codes, subcategory names, requirement IDs.
- The console is the one dark surface on the page, in the --bcn-console-* tokens; every text tone clears 4.5:1 on its ground.
- Warnings are amber lines in the stage that found them (an item that fits no subcategory, an action with no responsible party); requirements that bind nothing are a quiet line under Read requirements.
- bcn-console is reusable: prompt, tool, row, spinner, todo and message are its whole grammar (console.ts).

## Done when

- Pressing Draft actions & obligations opens the console with the prompt line and Read requirements streaming commitment codes; the spinner reads "Reading requirements…" with seconds and "N of 910 requirements".
- The peek is at most 100px tall during a run; pressing it opens the full console in the lightbox, which keeps streaming until the run ends.
- When the run ends the peek goes; View Log in the console opens the same record in the lightbox.
- The lightbox is a terminal window's shape and one fixed size (50rem by 32rem, smaller on a small screen): it never grows as the log fills; the log scrolls inside it.
- The demo runs at twice prod's pace (about 26 seconds for a full run) so it can be watched.
- After a Re-run with guidance, added bins read as green + lines and removed bins as red − lines.

## Components

- `bcn-console` (spoke) · `src/components/bcn/BcnConsole.astro`
- `bcn-sw3ir` (spoke) · `src/components/bcn/BcnSw3IndexRun.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app

## Markup

```html
<div class="bcn-sw3ir__peek" data-ir-peek="" hidden="">
  <div class="bcn-console" style="--_console-max: 100px" data-ir-console="true" aria-hidden="true">
    <div
      class="bcn-console__body"
      role="log"
      aria-live="polite"
      aria-label="Draft run"
      tabindex="-1"
      data-console-body=""
    ></div>
    <template data-console-more=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs"
        data-astro-cid-5nhxdd72=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-5nhxdd72=""
        >
          <span class="esa-button__label" data-astro-cid-5nhxdd72="">More</span>
        </button></span
      ></template
    >
  </div>
  <span class="bcn-sw3ir__expand" data-ir-expand=""
    ><span class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs"
      ><button class="esa-button__native typography-microcopy-2xs" type="button">
        <span class="esa-button__label">Open log</span>
      </button></span
    ></span
  >
</div>
```

## Styles

```css
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
}
@container (width<=640px) {
  .bcn-sw3c__group [data-c-tool] .esa-button__label {
    display: none;
  }
}
@container (width<=540px) {
  .bcn-sw3c__group [data-c-pages] .esa-button__label,
  .bcn-sw3c__rule {
    display: none;
  }
}
.bcn-console {
  --_mono: var(--typography-font-family-mono, ui-monospace, monospace);
  --_indent: 2.75ch;
  border: 1px solid var(--bcn-console-border);
  border-radius: var(--radius-300, 8px);
  background: var(--bcn-console-bg);
  box-shadow: var(--bcn-console-shadow);
  color: var(--bcn-console-fg);
  font-family: var(--_mono);
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
  position: relative;
}
.bcn-console__body {
  max-height: var(--_console-max);
  padding: var(--spacing-400) var(--spacing-500) var(--spacing-400);
  gap: var(--spacing-300);
  scrollbar-color: var(--bcn-console-border) transparent;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
.bcn-console__body:focus-visible {
  outline: 2px solid var(--bcn-console-accent);
  outline-offset: -2px;
  border-radius: inherit;
}
.bcn-console p,
.bcn-console ul {
  margin: 0;
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.bcn-sw3ir__peek {
  cursor: pointer;
  border-radius: var(--radius-300, 8px);
  position: relative;
}
.bcn-sw3ir__peek .bcn-console__body {
  padding-block: var(--spacing-300);
  overflow: hidden;
  -webkit-mask-image: linear-gradient(#0000 0, #000 2.25rem);
  mask-image: linear-gradient(#0000 0, #000 2.25rem);
}
.bcn-sw3ir__peek .bcn-console__more,
.bcn-sw3ir__peek .bcn-console__todo {
  display: none;
}
.bcn-sw3ir__peek:hover .bcn-console {
  border-color: var(--bcn-console-fg-dim);
}
.bcn-sw3ir__expand {
  top: var(--spacing-200);
  right: var(--spacing-300);
  color: var(--bcn-console-fg-muted);
  position: absolute;
}
.bcn-sw3ir__peek:hover .bcn-sw3ir__expand {
  color: var(--bcn-console-fg);
}
.bcn-sw3ir-box .bcn-console__body {
  box-sizing: border-box;
  height: min(32rem, 100vh - 6rem);
  padding-right: calc(var(--spacing-500) + 2.25rem);
}
@container (width<=720px) {
  .bcn-sw3ip__toolkeys :is([data-ip-merge], [data-ip-discard-all]) .esa-button__label {
    display: none;
  }
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-console-accent` | `#4fd1c9` | component |
| `--bcn-console-bg` | `#15171a` | component |
| `--bcn-console-border` | `#ffffff17` | component |
| `--bcn-console-fg` | `#ffffffed` | component |
| `--bcn-console-fg-dim` | `#ffffff8f` | component |
| `--bcn-console-fg-muted` | `#ffffffb8` | component |
| `--bcn-console-shadow` | `0 1px 2px #0a0c0e2e, 0 12px 32px -12px #0a0c0e73` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
