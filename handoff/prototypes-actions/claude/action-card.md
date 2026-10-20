# Action card

One implementation: commitment ids (BcnCommitmentBadge, plus a +N for more) and a flag; the action name on up to two lines; type, phase and occurrence; the workflow status chip on the merged board only; then due date, evidence count, comment count and the assignee avatar.

## Key decisions
- Type ramp on DM Sans's variable weights: name 15px / 600, meta 13px / 500, due 13px / 550 rising to 650 when overdue or due soon, counts 13px / 500 with tabular figures (Andy, 2026-10-07: "a little thicker, a little smaller").
- The sizes are fixed, not the viewport-clamped size tokens, so a card lands the same on every monitor.
- The status chip shows only on the merged board, where the column is the category and the workflow column would otherwise be invisible.
- The comment count hides at zero. The whole card opens the record; keyboard focus lands on the name.
- Every line is a field of ActionImplementationTrackerDto. Lines switch off from Configure board's Cards switches.

## Gotchas
- A reset (all: unset) on the name button out-ranks a typography class and hands it the inherited 16px / 350. Set the name's type on the button itself.

## Done when
- Overdue dates read in danger red at 650; completed cards show "Completed <date>" instead of a due date.

## Markup
```html
<article
  class="bcn-acard"
  data-acard=""
  data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJY|southern-forebay-pumping-plant"
>
  <div class="bcn-acard__top" data-acard-field="codes">
    <span class="bcn-acard__codes" data-acard-codes=""
      ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span></span
    ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
      ><span class="esa-icon esa-icon--xs" aria-hidden="true"
        ><svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
    ></span>
  </div>
  <button
    type="button"
    class="bcn-acard__name"
    data-acard-open=""
    title="Submit Credit Bill of Sale and Payment Receipt to CDFW"
  >
    Submit Credit Bill of Sale and Payment Receipt to CDFW
  </button>
  <div class="bcn-acard__meta" data-acard-meta="">Reporting · Pre-Construction · #1</div>
  <div class="bcn-acard__foot">
    <span
      class="bcn-acard__due"
      data-acard-field="due"
      data-acard-due=""
      title="Overdue · due Sep 12, 2026"
      data-urgency="overdue"
      ><span class="esa-icon esa-icon--xs" aria-hidden="true"
        ><svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path></svg></span
      ><span data-acard-due-text="">Sep 12</span></span
    ><span class="bcn-acard__counts"
      ><span
        class="bcn-acard__count"
        data-acard-field="evidence"
        data-acard-evidence=""
        title="0 evidence items"
        data-zero=""
        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
          ><svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
            ></path></svg></span
        ><span data-acard-n="">0</span></span
      ></span
    >
  </div>
</article>
```

## Styles
```css
.bcn-acard {
  --_ink-meta: var(--color-content-default-secondary);
  font-optical-sizing: auto;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-250);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  cursor: grab;
  touch-action: none;
  user-select: none;
  flex-direction: column;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
  display: flex;
  position: relative;
}
.bcn-acard:hover {
  border-color: var(--color-border-default-strong, var(--color-border-default));
  box-shadow: var(--elevation-1, 0 1px 2px #0000000f);
}
.bcn-acard[data-na] {
  background: var(--color-background-elevation-sunken);
}
.bcn-acard[data-na] .bcn-acard__name {
  color: var(--color-content-default-secondary);
}
.bcn-acard__top {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  min-block-size: 20px;
  display: flex;
}
.bcn-acard__codes {
  gap: var(--spacing-100);
  min-inline-size: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-acard__flag {
  color: var(--color-content-utility-danger, var(--color-content-default-secondary));
  display: inline-flex;
}
.bcn-acard__name {
  all: unset;
  font-family: var(--typography-font-family-sans);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  -webkit-line-clamp: 2;
  cursor: inherit;
  -webkit-box-orient: vertical;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-acard__name:after {
  content: "";
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
.bcn-acard__name:focus-visible:after {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-acard__meta {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--_ink-meta);
  line-height: 1.35;
}
.bcn-acard__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  border-block-start: 1px solid var(--color-border-default);
  min-block-size: 28px;
  padding-block-start: var(--spacing-200);
  display: flex;
}
.bcn-acard__due,
.bcn-acard__count {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--_ink-meta);
  white-space: nowrap;
  font-size: 0.8125rem;
  line-height: 1.3;
  display: inline-flex;
}
.bcn-acard__due {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-acard__count {
  font-weight: var(--typography-font-weight-medium);
  font-variant-numeric: tabular-nums;
}
.bcn-acard__due[data-urgency="overdue"] {
  color: var(--color-content-utility-danger);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-urgency="due-soon"] {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-empty] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__counts {
  align-items: center;
  gap: var(--spacing-250);
  margin-inline-start: auto;
  display: inline-flex;
}
.bcn-acard__count[data-zero] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__who,
.bcn-acard__avatar {
  display: inline-flex;
}
.bcn-acard[data-lifted] {
  z-index: 60;
  pointer-events: none;
  box-shadow: var(--elevation-4, 0 12px 28px #0000002e);
  transform-origin: 50%;
  cursor: grabbing;
  position: fixed;
  rotate: 1.5deg;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--elevation-1`: 0 1px 4px 0 #00000008 _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
