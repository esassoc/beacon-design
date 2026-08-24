# Project header

The full-bleed identity band that answers "where am I": a cover photo, the tenant/org seal overlapping it in the avatar idiom, the project name as the page's sole H1, the owning organization as an eyebrow, and the current phase worn lightly as a chip. It replaces the old project page, which the review described as showing only "status and description… and a map that shows nothing."

## Key decisions
- Cover image and logo are editable IN PLACE: hovering the header reveals "Change cover" and a logo edit chip. The review was explicit that this must not live in project configuration settings — "you can mouse over either area… just to keep people in one spot."
- The project name is the page H1 and PageLayout's own title row is suppressed — the H1 reads as the entity, not the page.
- Phase is a single chip, never a project-level filter. Detail belongs on the component dashboards.

## Gotchas
- PHASE HAS NO DATA MODEL YET. The chip renders a fixture value; a general project-phase field has to be added before this ships as shown. Raised in the review as "we probably need to build something for that."
- The band is rendered into PageLayout's `bleed` slot so it spans edge-to-edge under the topbar — a sanctioned per-page anomaly, not a layout primitive to generalize.
- Hover-revealed controls need a keyboard path: the edit affordances are real buttons and also appear on :focus-visible. Do not implement them as hover-only CSS.

## Done when
- Cover, seal, project name, org, and phase chip render; hovering the cover or the logo reveals an edit control that is also reachable by keyboard; no image editing is required in settings to change either.

## Markup
```html
<section class="bcn-phome" aria-label="Delta Conveyance Project — project home">
  <div class="bcn-phome__cover">
    <img
      class="bcn-phome__hero"
      src="/beacon-design/images/dcp/hero.jpeg"
      alt=""
      aria-hidden="true"
    />
    <button class="bcn-phome__edit bcn-phome__edit--cover" type="button">
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
          <path
            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
          ></path>
          <path d="m15 5 4 4"></path>
        </svg>
      </span>
      Change cover
    </button>
  </div>
  <div class="bcn-phome__body">
    <span class="bcn-phome__sealwrap">
      <img
        class="bcn-phome__seal"
        src="/beacon-design/images/dcp/dwr-logo.png"
        alt="DWR seal"
      />
      <button
        class="bcn-phome__edit bcn-phome__edit--logo"
        type="button"
        aria-label="Change logo"
      >
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
            <path
              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
            ></path>
            <path d="m15 5 4 4"></path>
          </svg>
        </span>
      </button>
    </span>
    <div class="bcn-phome__id">
      <div class="bcn-phome__idtop">
        <h1 class="bcn-phome__name">Delta Conveyance Project</h1>
        <span
          class="bcn-status-chip"
          data-status="phase"
          style="--_chip: var(--st-phase, var(--color-primary))"
        >
          <span class="bcn-status-chip__dot"></span>
          <span class="bcn-status-chip__label">Pre-Construction</span>
        </span>
      </div>
      <p class="bcn-phome__eyebrow">Department of Water Resources</p>
    </div>
  </div>
</section>
```

## Styles
```css
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
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
.bcn-phome {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.bcn-phome__cover {
  position: relative;
  height: 132px;
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-phome__hero {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.bcn-phome__body {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-500);
  padding: 0 var(--spacing-600) var(--spacing-500);
}
.bcn-phome__edit {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: var(--spacing-150) var(--spacing-250);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  background: color-mix(in srgb, var(--color-surface) 92%, transparent);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;
}
.bcn-phome__edit--cover {
  top: var(--spacing-300);
  right: var(--spacing-600);
}
.bcn-phome__cover:hover .bcn-phome__edit--cover,
.bcn-phome__edit--cover:focus-visible {
  opacity: 1;
}
.bcn-phome__sealwrap {
  position: relative;
  flex-shrink: 0;
}
.bcn-phome__edit--logo {
  right: 0;
  bottom: 0;
  padding: var(--spacing-150);
  border-radius: var(--radius-full);
}
.bcn-phome__sealwrap:hover .bcn-phome__edit--logo,
.bcn-phome__edit--logo:focus-visible {
  opacity: 1;
}
.bcn-phome__seal {
  display: block;
  flex-shrink: 0;
  width: 92px;
  height: 92px;
  margin-top: -46px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  border: 3px solid var(--color-surface);
  object-fit: contain;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.08));
}
.bcn-phome__id {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding-top: var(--spacing-400);
  min-width: 0;
  flex: 1;
}
.bcn-phome__idtop {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.bcn-phome__name {
  margin: 0;
  font-family: var(--font-decorative, var(--font-display, var(--font-sans)));
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-600);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--bcn-gray-1000, var(--color-text-primary));
}
.bcn-phome__eyebrow {
  margin: 0 0 var(--spacing-200);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
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
- `--color-border`: #dcdcdc _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
