# Run console

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

## Markup
```html
<div class="bcn-sw3ir__peek" data-ir-peek="" hidden="">
  <div
    class="bcn-console"
    style="--_console-max: 100px"
    data-ir-console="true"
    aria-hidden="true"
  >
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
        data-astro-cid-4xhmycw5=""
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          data-astro-cid-4xhmycw5=""
        >
          <span class="esa-button__label" data-astro-cid-4xhmycw5="">More</span>
        </button></span
      ></template
    >
  </div>
  <span class="bcn-sw3ir__expand" data-ir-expand=""
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs"
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
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
.bcn-console__prompt {
  color: var(--bcn-console-fg);
  gap: 1ch;
  font-weight: 500;
  display: flex;
}
.bcn-console__caret {
  color: var(--bcn-console-accent);
  flex: none;
}
.bcn-console__call {
  align-items: baseline;
  gap: 1ch;
  min-width: 0;
  display: flex;
}
.bcn-console__dot {
  background: var(--bcn-console-fg-dim);
  border-radius: 50%;
  flex: none;
  width: 0.62em;
  height: 0.62em;
  margin: 0 calc(1ch - 0.62em) 0 0.19em;
  transform: translateY(-0.02em);
}
.bcn-console__tool[data-state="done"] .bcn-console__dot {
  background: var(--bcn-console-ok);
}
.bcn-console__tool[data-state="running"] .bcn-console__dot {
  background: var(--bcn-console-fg);
  animation: 1s steps(2, jump-none) infinite bcn-console-blink;
}
.bcn-console__tool[data-state="pending"] {
  color: var(--bcn-console-fg-dim);
}
.bcn-console__name {
  font-weight: 600;
}
.bcn-console__arg {
  color: var(--bcn-console-fg-muted);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-console__said {
  color: var(--bcn-console-fg);
}
.bcn-console__out {
  padding-left: var(--_indent);
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
}
.bcn-console__out:before {
  content: "";
  border-left: 1px solid var(--bcn-console-fg-dim);
  border-bottom: 1px solid var(--bcn-console-fg-dim);
  width: 1.1ch;
  height: 0.75em;
  position: absolute;
  top: 0.1em;
  left: 0.5ch;
}
.bcn-console__row {
  min-width: 0;
  max-width: 100%;
  color: var(--bcn-console-fg-muted);
  gap: 1.5ch;
  display: flex;
}
.bcn-console__row .bcn-console__t {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  max-width: 72ch;
  overflow: hidden;
}
.bcn-console__m {
  color: var(--bcn-console-fg-dim);
  white-space: nowrap;
  flex: none;
}
.bcn-console__sign {
  flex: none;
  width: 1ch;
  margin-right: -0.5ch;
}
.bcn-console__row[data-tone="warn"] {
  color: var(--bcn-console-warn);
}
.bcn-console__row[data-tone="dim"] {
  color: var(--bcn-console-fg-dim);
}
.bcn-console__row[data-tone="add"],
.bcn-console__row[data-tone="remove"] {
  border-radius: 3px;
  align-self: stretch;
  margin-left: -1ch;
  padding: 0 1ch;
}
.bcn-console__row[data-tone="add"] {
  color: var(--bcn-console-add);
  background: var(--bcn-console-add-bg);
}
.bcn-console__row[data-tone="remove"] {
  color: var(--bcn-console-remove);
  background: var(--bcn-console-remove-bg);
}
.bcn-console__row[data-tone="add"] + .bcn-console__row[data-tone="add"],
.bcn-console__row[data-tone="remove"] + .bcn-console__row[data-tone="remove"] {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.bcn-console__row[data-tone="dim"] .bcn-console__m,
.bcn-console__row[data-tone="warn"] .bcn-console__m {
  color: inherit;
  opacity: 0.8;
}
.bcn-console__more {
  color: var(--bcn-console-fg-dim);
  --button-chrome-bg-hover: var(--bcn-console-raised);
  margin: 0.1em 0 0.1em -1ch;
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
.bcn-console__spin {
  flex-wrap: wrap;
  align-items: baseline;
  gap: 1.5ch;
  display: flex;
}
.bcn-console__glyph {
  width: 1.5ch;
  color: var(--bcn-console-accent);
  margin-right: -0.5ch;
  font-size: 1.1em;
  line-height: 1;
}
.bcn-console__verb {
  color: var(--bcn-console-accent);
  background: linear-gradient(
    90deg,
    var(--bcn-console-accent) 0%,
    var(--bcn-console-accent) 40%,
    var(--bcn-console-fg) 50%,
    var(--bcn-console-accent) 60%,
    var(--bcn-console-accent) 100%
  );
  -webkit-text-fill-color: transparent;
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: 500;
  animation: 2.2s linear infinite bcn-console-shimmer;
}
.bcn-console__todo {
  padding: 0 0 0 var(--_indent);
  list-style: none;
  position: relative;
  margin-top: calc(-1 * var(--spacing-200)) !important;
}
.bcn-console__todo:before {
  content: "";
  border-left: 1px solid var(--bcn-console-fg-dim);
  border-bottom: 1px solid var(--bcn-console-fg-dim);
  width: 1.1ch;
  height: 0.75em;
  position: absolute;
  top: 0.1em;
  left: 0.5ch;
}
.bcn-console__item {
  color: var(--bcn-console-fg-muted);
  align-items: baseline;
  gap: 1ch;
  display: flex;
}
.bcn-console__box {
  border: 1px solid;
  border-radius: 2px;
  flex: none;
  width: 0.8em;
  height: 0.8em;
  position: relative;
  transform: translateY(0.08em);
}
.bcn-console__item[data-state="done"] {
  color: var(--bcn-console-fg-dim);
}
.bcn-console__item[data-state="done"] .bcn-console__t {
  text-decoration: line-through;
  text-decoration-color: var(--bcn-console-fg-dim);
}
.bcn-console__item[data-state="done"] .bcn-console__box {
  border-color: var(--bcn-console-ok);
  background: var(--bcn-console-ok);
}
.bcn-console__item[data-state="done"] .bcn-console__box:after {
  content: "";
  border: solid var(--bcn-console-bg);
  border-width: 0 2px 2px 0;
  width: 0.2em;
  height: 0.42em;
  position: absolute;
  top: 0.06em;
  left: 0.24em;
  transform: rotate(45deg);
}
.bcn-console__item[data-state="active"] {
  color: var(--bcn-console-fg);
  font-weight: 600;
}
.bcn-console__item[data-state="active"] .bcn-console__box {
  border-color: var(--bcn-console-accent);
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-console-accent`: #4fd1c9 _(component)_
- `--bcn-console-add`: #7ad79f _(component)_
- `--bcn-console-add-bg`: #5fcf8f1a _(component)_
- `--bcn-console-bg`: #15171a _(component)_
- `--bcn-console-border`: #ffffff17 _(component)_
- `--bcn-console-fg`: #ffffffed _(component)_
- `--bcn-console-fg-dim`: #ffffff8f _(component)_
- `--bcn-console-fg-muted`: #ffffffb8 _(component)_
- `--bcn-console-ok`: #5fcf8f _(component)_
- `--bcn-console-raised`: #1d2024 _(component)_
- `--bcn-console-remove`: #f29b9b _(component)_
- `--bcn-console-remove-bg`: #f29b9b1a _(component)_
- `--bcn-console-shadow`: 0 1px 2px #0a0c0e2e, 0 12px 32px -12px #0a0c0e73 _(component)_
- `--bcn-console-warn`: #e9b863 _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--radius-300`: .5rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
