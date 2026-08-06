# Setup Wizard

The project's SETUP PIPELINE as its own slim card — Source Documents → Commitments → Requirements → Actions — with a per-entity rollup at each step. It sits apart from the module row because it is not a work area; it is how a project gets configured in the first place.

## Key decisions
- Steps are numbered in Beacon's setup ramp: --color-source, --color-commitment, --color-requirement, --color-action. These are already global tokens and the same colors the wizard homepage uses, so the two surfaces are one system rather than a match by eye.
- Each step carries its own counts: documents created; commitments created/approved; requirements created/approved; and for Actions the un-triaged figure that matters most — requirements not yet in an action — plus actions created/approved.
- The card wears the prod wizard identity: the teal circular compass mark and the serif title voice.
- Step cards are NEUTRAL (surface-sunken fill, standard border). The colored numeral alone carries the step's color coding.

## Gotchas
- NEVER use a colored border as the category indicator — a colored top rule on these step cards was rejected outright. Category color belongs in a badge, icon, dot, or background tint. This is a standing house rule, not a preference for this card.
- Do not report "actions to create": how many actions a set of requirements becomes is unknowable until triage. Count existing records only.
- esa-button supports a LEFT `icon` prop only; a trailing arrow slotted into the label renders misaligned. A trailing-icon option is a hub gap worth ledgering before designs assume one.

## Done when
- Four steps numbered in their entity colors with per-entity counts; the Actions step surfaces requirements-not-in-an-action with an amber marker; no colored borders anywhere; the CTA resumes setup.

## Markup
```html
<section class="bcn-swc" aria-label="Setup Wizard">
  <div class="bcn-swc__head">
    <span class="bcn-swc__mark"
      ><span class="esa-icon esa-icon--md" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path
            d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
          ></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </span>
    </span>
    <span class="bcn-swc__title">Setup Wizard</span>
    <span class="bcn-swc__cta">
      <span
        class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
      >
        <a class="esa-button__native" href="#project-setup" role="button">
          <span class="esa-button__label"> Continue setup </span>
        </a>
      </span>
    </span>
  </div>
  <ol class="bcn-swc__steps">
    <li class="bcn-swc__step" style="--_step: var(--color-source)">
      <a class="bcn-swc__link" href="#setup-source-documents">
        <span class="bcn-swc__label-row">
          <span class="bcn-swc__n">1</span>
          <span class="bcn-swc__label">Source Documents</span>
        </span>
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>14</dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-commitment)">
      <a class="bcn-swc__link" href="#setup-commitments">
        <span class="bcn-swc__label-row">
          <span class="bcn-swc__n">2</span>
          <span class="bcn-swc__label">Commitments</span>
        </span>
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>212</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Approved</dt>
            <dd>209</dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-requirement)">
      <a class="bcn-swc__link" href="#setup-requirements">
        <span class="bcn-swc__label-row">
          <span class="bcn-swc__n">3</span>
          <span class="bcn-swc__label">Requirements</span>
        </span>
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>486</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Approved</dt>
            <dd>474</dd>
          </div>
        </dl>
      </a>
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-action)">
      <a class="bcn-swc__link" href="#setup-actions">
        <span class="bcn-swc__label-row">
          <span class="bcn-swc__n">4</span> <span class="bcn-swc__label">Actions</span>
        </span>
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>
              <span class="bcn-swc__attn" aria-hidden="true"></span> Requirements not in
              an action
            </dt>
            <dd>12</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>142</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Approved</dt>
            <dd>138</dd>
          </div>
        </dl>
      </a>
    </li>
  </ol>
</section>
```

## Styles
```css
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
.esa-button--xs {
  --_btn-height: var(--form-height-xs, 28px);
  --_btn-padding-x: var(--form-padding-x-xs, 8px);
  --_btn-font-size: var(--form-font-size-xs, 11px);
  --_btn-radius: var(--form-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-height: var(--form-height-lg, 48px);
  --_btn-padding-x: var(--form-padding-x-lg, 20px);
  --_btn-font-size: var(--form-font-size-lg, 16px);
  --_btn-radius: var(--form-radius-lg, 8px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--sm.esa-button--icon-only .esa-button__native {
  height: var(--form-height-sm, 32px);
  padding-block: 0;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--color-secondary {
  --_accent: var(--color-secondary);
  --_accent-hover: var(--color-secondary-hover);
  --_on: var(--color-secondary-on-fill, var(--color-gray-12));
  --_accent-text: var(--color-secondary-strong);
}
.esa-button--color-danger {
  --_accent: var(--color-danger);
  --_accent-hover: var(--color-danger-hover);
  --_accent-text: var(--color-danger-strong);
}
.esa-button--color-success {
  --_accent: var(--color-success);
  --_accent-hover: var(--color-success-hover);
  --_on: var(--color-success-on-fill);
  --_accent-text: var(--color-success-strong);
}
.esa-button--color-warning {
  --_accent: var(--color-warning);
  --_accent-hover: var(--color-warning-hover);
  --_on: var(--button-on-warning, var(--color-gray-12));
  --_accent-text: var(--color-warning-strong);
}
.esa-button--color-info {
  --_accent: var(--color-info);
  --_accent-hover: var(--color-info-hover);
  --_accent-text: var(--color-info-strong);
}
.esa-button--color-ai {
  --_accent: var(--color-ai);
  --_accent-hover: var(--color-ai-hover);
  --_accent-text: var(--color-ai-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
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
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-strong, #d4d4d4);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
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
.esa-button--color-ghost .esa-button__native:hover:not(:disabled),
.esa-button--color-ghost.esa-button--active .esa-button__native {
  background: var(--color-surface-sunken, #efefef);
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
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: 0;
  width: var(--_btn-height);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  visibility: hidden;
  width: 0;
  overflow: hidden;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin 0.6s linear infinite;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-swc {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.bcn-swc__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-swc__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-teal-600, var(--color-secondary));
  color: var(--color-text-inverse);
}
.bcn-swc__title {
  font-family: var(--font-decorative, var(--font-sans));
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-300);
  color: var(--color-text-primary);
}
.bcn-swc__cta {
  margin-left: auto;
  flex-shrink: 0;
}
.bcn-swc__steps {
  list-style: none;
  margin: 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-light);
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--spacing-400);
}
.bcn-swc__step {
  min-width: 0;
}
.bcn-swc__link {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  min-width: 0;
  height: 100%;
  padding: var(--spacing-400);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s ease;
}
.bcn-swc__link:hover {
  border-color: var(--color-border-strong);
}
.bcn-swc__link:hover .bcn-swc__label {
  color: var(--_step);
}
.bcn-swc__label-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  min-width: 0;
  min-height: 2.75rem;
}
.bcn-swc__n {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--_step);
  color: var(--color-text-inverse);
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
}
.bcn-swc__label {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-swc__stats {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-swc__stat {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-200);
}
.bcn-swc__stat dt {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  min-width: 0;
}
.bcn-swc__stat dd {
  margin: 0;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}
.bcn-swc__attn {
  width: 7px;
  height: 7px;
  border-radius: var(--radius-full);
  background: var(--color-warning);
  flex-shrink: 0;
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
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--bcn-teal-600`: #0e807b _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--color-ai`: #699cc6 _(semantic)_
- `--color-ai-hover`: #4c75a9 _(semantic)_
- `--color-ai-strong`: #7d5e54 _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-gray-12`: #202020 _(primitive)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-info-strong`: #0d74ce _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-success-strong`: #5c7c2f _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-strong`: #ab6400 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-lg`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--form-padding-x-lg`: 1rem _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-padding-x-xs`: .5rem _(component)_
- `--form-radius-lg`: .25rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--form-radius-xs`: .25rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
