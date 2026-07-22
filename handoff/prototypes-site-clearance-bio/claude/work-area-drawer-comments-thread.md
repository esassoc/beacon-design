# Work-area drawer — comments thread

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

## Markup
```html
<section class="wa-comments">
  <h3 class="wa__section">
    <span class="esa-icon esa-icon--sm" aria-hidden="true">
      <svg
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
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </span>
    Comments <span id="wa-comment-count"><span class="wc-badge">2</span></span>
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
          <span class="wc-mention">@Leah McNearney</span> flagging — this blocks the DH
          until the est. fledge date.
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
          <span class="wc-mention wc-mention--me">@Andy Lovseth</span> keep this one on
          the watch list.
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
      <span class="wa__compose-hint">Posting as Andy Lovseth</span>
      <span id="wa-comment-post"
        ><span
          class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
        >
          <button class="esa-button__native" type="button">
            <span class="esa-button__label"> Post comment </span>
          </button>
        </span>
      </span>
    </div>
  </div>
</section>
```

## Styles
```css
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.comp-picker__trigger .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.wa__section {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
#wa-read > .wa-comments,
#wa-read > .wa__more {
  margin-top: var(--spacing-500);
  padding-top: var(--spacing-500);
  border-top: 1px solid var(--color-border);
}
.wa__comments {
  list-style: none;
  margin: 0 0 var(--spacing-400);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.wa__comments:empty {
  display: none;
}
.wa__compose {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.wa__compose-field {
  position: relative;
}
.wa__compose-field esa-textarea {
  width: 100%;
}
.wa__mention-menu {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 5;
  list-style: none;
  margin: 0;
  padding: var(--spacing-100);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-400);
  max-height: 208px;
  overflow-y: auto;
}
.wa__mention-menu[hidden] {
  display: none;
}
.wa__compose-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.wa__compose-hint {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.wa__footer-start .esa-button__label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wc-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  vertical-align: middle;
  margin-left: var(--spacing-100);
}
.wc-comment {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--spacing-300);
  align-items: start;
}
.wc-comment__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--_c, var(--color-secondary));
  color: #fff;
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  letter-spacing: 0.02em;
}
.wc-comment__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.wc-comment__meta {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
}
.wc-comment__author {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wc-comment__time {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.wc-comment__text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  white-space: pre-wrap;
  word-break: break-word;
}
.wc-mention {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-radius: var(--radius-050);
  padding: 0 2px;
}
.wc-mention--me {
  color: var(--st-cleared);
  background: color-mix(in srgb, var(--st-cleared) 14%, transparent);
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-050`: .125rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-400`: 0 8px 32px -8px rgba(0, 0, 0, .08) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
- `--transition-fast`: .15s ease _(primitive)_
