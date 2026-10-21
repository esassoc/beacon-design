# Work-area drawer — comments thread

Site Clearance — Biological · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-bio/

![Work-area drawer — comments thread, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-comments-thread.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-comments-thread.phone.png

A per-work-area collaboration thread (the unified comment system; ported from permit tracking, BCN-1364), DISTINCT from both the append-only Notes and the read-only Activity fold: initials-avatar comments, an @-mention typeahead of project users, and a compose box posting as the current user. It is the coordination layer that replaces the email chain.

## Key decisions

- Comments ≠ Notes ≠ Activity: Comments is human discussion (editable social thread), Notes is the append-only field record (verbatim biologist emails), Activity is the immutable derived change log. Three sections, three write disciplines.
- @-mention is a typeahead over project users; a mention renders highlighted and would drive a notification in production.
- Humans CAN discuss future dates here (fledge windows, re-survey plans) — the forecasting cut removed system-computed dates, not conversation. The seeded DCTR2-DH-010 thread deliberately shows exactly that.

## Gotchas

- Clear the compose box via the esa-textarea HOST .value after posting — the lego re-syncs its value onto the inner <textarea>.
- Comments are per-work-area — opening a different work area must swap the thread.

## Done when

- Existing comments render with initials avatars and highlighted @-mentions; typing @ opens a project-user typeahead; posting appends and clears the compose box; switching work areas swaps the thread.

## Components

- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<section class="wa-comments">
  <h3 class="wa__section">
    <span class="esa-icon esa-icon--sm" aria-hidden="true"
      ><svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></span
    >Comments <span id="wa-comment-count"><span class="wc-badge">2</span></span>
  </h3>
  <ul class="wa__comments" id="wa-comments">
    <li class="wc-comment">
      <span class="wc-comment__avatar" style="--_c: var(--color-commitment)">CA</span>
      <div class="wc-comment__body">
        <div class="wc-comment__meta">
          <span class="wc-comment__author">C. Anderson</span
          ><span class="wc-comment__time">May 18, 2026, 3:10 PM</span>
        </div>
        <p class="wc-comment__text">
          Active SWHA nest confirmed within the 0.5-mi buffer on the clearance visit.
          <span class="wc-mention">@Leah McNearney</span> flagging — this blocks the DH until the
          est. fledge date.
        </p>
      </div>
    </li>
    <li class="wc-comment">
      <span class="wc-comment__avatar" style="--_c: var(--color-source)">LM</span>
      <div class="wc-comment__body">
        <div class="wc-comment__meta">
          <span class="wc-comment__author">Leah McNearney</span
          ><span class="wc-comment__time">May 19, 2026, 8:42 AM</span>
        </div>
        <p class="wc-comment__text">
          Thanks. Holding work here until the post-fledge re-survey clears it.
          <span class="wc-mention wc-mention--me">@Andy Lovseth</span> keep this one on the watch
          list.
        </p>
      </div>
    </li>
  </ul>
  <div class="wa__compose">
    <div class="wa__compose-field">
      <esa-textarea
        id="wa-comment-input"
        rows="2"
        placeholder="Write a comment…  type @ to mention a teammate"
        size="md"
      ></esa-textarea>
      <ul class="wa__mention-menu" id="wa-mention-menu" hidden=""></ul>
    </div>
    <div class="wa__compose-foot">
      <span class="wa__compose-hint">Posting as Andy Lovseth</span
      ><span id="wa-comment-post"
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button">
            <span class="esa-button__label">Post comment</span>
          </button></span
        ></span
      >
    </div>
  </div>
</section>
```

## Styles

```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
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
.esa-button__label {
  white-space: nowrap;
}
.comp-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
#wa-read > .wa-comments,
#wa-read > .wa__more {
  margin-top: var(--spacing-500);
  padding-top: var(--spacing-500);
  border-top: 1px solid var(--color-border-default);
}
.wa__comments {
  margin: 0 0 var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__comments:empty {
  display: none;
}
.wc-comment {
  gap: var(--spacing-300);
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.wc-comment__avatar {
  background: var(--_c, var(--color-background-brand-muted));
  color: #fff;
  width: 28px;
  height: 28px;
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-bold);
  letter-spacing: 0.02em;
  border-radius: 50%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.wc-comment__body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.wc-comment__meta {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.wc-comment__author {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.wc-comment__time {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.wc-comment__text {
  color: var(--color-content-default);
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}
.wc-mention {
  color: var(--color-background-brand);
  font-weight: var(--typography-font-weight-semibold);
  background: color-mix(in srgb, var(--color-background-brand) 10%, transparent);
  border-radius: var(--radius-050);
  padding: 0 2px;
}
.wc-mention--me {
  color: var(--st-cleared);
  background: color-mix(in srgb, var(--st-cleared) 14%, transparent);
}
.wc-badge {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  min-width: 18px;
  height: 18px;
  color: var(--color-content-default-secondary);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-bold);
  vertical-align: middle;
  margin-left: var(--spacing-100);
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  display: inline-flex;
}
.wa__compose {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.wa__compose-field {
  position: relative;
}
.wa__compose-field esa-textarea {
  width: 100%;
}
.wa__mention-menu {
  z-index: 5;
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-5);
  max-height: 208px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  overflow-y: auto;
}
.wa__mention-menu[hidden] {
  display: none;
}
.wa__compose-foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.wa__compose-hint {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.wa__section {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.wa__section .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__footer-start .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-050` | `.125rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--st-cleared` | `#1a9850` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
