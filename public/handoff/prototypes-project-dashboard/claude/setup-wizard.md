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
      ><span class="esa-icon esa-icon--md" aria-hidden="true"
        ><svg
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
          <circle cx="12" cy="12" r="10"></circle></svg></span></span
    ><span class="bcn-swc__title">Setup Wizard</span
    ><span class="bcn-swc__cta"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><a
          class="esa-button__native typography-microcopy-md"
          href="#project-setup"
          role="button"
          ><span class="esa-button__label">Continue setup</span></a
        ></span
      ></span
    >
  </div>
  <ol class="bcn-swc__steps">
    <li class="bcn-swc__step" style="--_step: var(--color-source)">
      <a class="bcn-swc__link" href="#setup-source-documents"
        ><span class="bcn-swc__label-row"
          ><span class="bcn-swc__n">1</span
          ><span class="bcn-swc__label">Source Documents</span></span
        >
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>14</dd>
          </div>
        </dl></a
      >
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-commitment)">
      <a class="bcn-swc__link" href="#setup-commitments"
        ><span class="bcn-swc__label-row"
          ><span class="bcn-swc__n">2</span
          ><span class="bcn-swc__label">Commitments</span></span
        >
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>212</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Approved</dt>
            <dd>209</dd>
          </div>
        </dl></a
      >
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-requirement)">
      <a class="bcn-swc__link" href="#setup-requirements"
        ><span class="bcn-swc__label-row"
          ><span class="bcn-swc__n">3</span
          ><span class="bcn-swc__label">Requirements</span></span
        >
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>Created</dt>
            <dd>486</dd>
          </div>
          <div class="bcn-swc__stat">
            <dt>Approved</dt>
            <dd>474</dd>
          </div>
        </dl></a
      >
    </li>
    <li class="bcn-swc__step" style="--_step: var(--color-action)">
      <a class="bcn-swc__link" href="#setup-actions"
        ><span class="bcn-swc__label-row"
          ><span class="bcn-swc__n">4</span
          ><span class="bcn-swc__label">Actions</span></span
        >
        <dl class="bcn-swc__stats">
          <div class="bcn-swc__stat">
            <dt>
              <span class="bcn-swc__attn" aria-hidden="true"></span>Requirements not in an
              action
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
        </dl></a
      >
    </li>
  </ol>
</section>
```

## Styles
```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
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
.bcn-swc {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.bcn-swc__head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-swc__mark {
  border-radius: var(--radius-full);
  background: var(--bcn-teal-600, var(--color-background-brand-muted));
  width: 32px;
  height: 32px;
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swc__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-300);
  color: var(--color-content-default);
}
.bcn-swc__cta {
  flex-shrink: 0;
  margin-left: auto;
}
.bcn-swc__steps {
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-default-subtle);
  gap: var(--spacing-400);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  list-style: none;
  display: grid;
}
.bcn-swc__step {
  min-width: 0;
}
.bcn-swc__link {
  gap: var(--spacing-300);
  min-width: 0;
  height: 100%;
  padding: var(--spacing-400);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: inherit;
  flex-direction: column;
  text-decoration: none;
  transition: border-color 0.15s;
  display: flex;
}
.bcn-swc__link:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swc__link:hover .bcn-swc__label {
  color: var(--_step);
}
.bcn-swc__label-row {
  align-items: center;
  gap: var(--spacing-250);
  min-width: 0;
  min-height: 2.75rem;
  display: flex;
}
.bcn-swc__n {
  border-radius: var(--radius-full);
  background: var(--_step);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-knockout);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swc__label {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: var(--line-height-tight);
}
.bcn-swc__stats {
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-swc__stat {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-swc__stat dt {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default-tertiary);
  min-width: 0;
  font-size: 0.8125rem;
  display: inline-flex;
}
.bcn-swc__stat dd {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
  margin: 0;
}
.bcn-swc__attn {
  border-radius: var(--radius-full);
  background: var(--color-background-utility-warning);
  flex-shrink: 0;
  width: 7px;
  height: 7px;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-teal-600`: #0e807b _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
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
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
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
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
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
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
