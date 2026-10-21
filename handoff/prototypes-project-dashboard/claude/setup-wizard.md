# Setup Wizard

Project Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/project-dashboard/

![Setup Wizard, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/setup-wizard.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/setup-wizard.phone.png

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

## Components

- `bcn-swc` (spoke) · `src/components/bcn/BcnSetupWizardCard.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

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
          href="/beacon-design/prototypes/setup-wizard"
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
          ><span class="bcn-swc__n">2</span><span class="bcn-swc__label">Commitments</span></span
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
    <!-- …and 3 more like this (<li class="bcn-swc__step">) -->
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
.bcn-swc {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
  container-type: inline-size;
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
  gap: var(--spacing-300);
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0;
  list-style: none;
  display: grid;
}
@container (width<=880px) {
  .bcn-swc__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@container (width<=540px) {
  .bcn-swc__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
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
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-teal-600` | `#0e807b` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
