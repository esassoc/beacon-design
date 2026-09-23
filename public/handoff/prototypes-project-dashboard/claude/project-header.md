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
    /><button class="bcn-phome__edit bcn-phome__edit--cover" type="button">
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
          <path
            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
          ></path>
          <path d="m15 5 4 4"></path></svg
      ></span>
      Change cover
    </button>
  </div>
  <div class="bcn-phome__body">
    <span class="bcn-phome__sealwrap"
      ><img
        class="bcn-phome__seal"
        src="/beacon-design/images/dcp/dwr-logo.png"
        alt="DWR seal" /><button
        class="bcn-phome__edit bcn-phome__edit--logo"
        type="button"
        aria-label="Change logo"
      >
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
            <path
              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
            ></path>
            <path d="m15 5 4 4"></path></svg
        ></span></button
    ></span>
    <div class="bcn-phome__id">
      <div class="bcn-phome__idtop">
        <h1 class="bcn-phome__name">Delta Conveyance Project</h1>
        <span
          class="bcn-status-chip"
          data-status="phase"
          style="--_chip: var(--st-phase, var(--color-background-brand))"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Pre-Construction</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
      </div>
      <p class="bcn-phome__eyebrow">Department of Water Resources</p>
    </div>
  </div>
</section>
```

## Styles
```css
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
.bcn-phome {
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-phome__cover {
  background: var(--color-background-elevation-sunken);
  height: 132px;
  position: relative;
  overflow: hidden;
}
.bcn-phome__hero {
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-phome__body {
  align-items: flex-start;
  gap: var(--spacing-500);
  padding: 0 var(--spacing-600) var(--spacing-500);
  display: flex;
}
.bcn-phome__edit {
  align-items: center;
  gap: var(--spacing-150);
  padding: var(--spacing-150) var(--spacing-250);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  background: color-mix(
    in srgb,
    var(--color-background-elevation-raised) 92%,
    transparent
  );
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s;
  display: inline-flex;
  position: absolute;
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
  flex-shrink: 0;
  position: relative;
}
.bcn-phome__edit--logo {
  padding: var(--spacing-150);
  border-radius: var(--radius-full);
  bottom: 0;
  right: 0;
}
.bcn-phome__sealwrap:hover .bcn-phome__edit--logo,
.bcn-phome__edit--logo:focus-visible {
  opacity: 1;
}
.bcn-phome__seal {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  border: 3px solid var(--color-background-elevation-raised);
  object-fit: contain;
  width: 92px;
  height: 92px;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #00000014);
  flex-shrink: 0;
  margin-top: -46px;
  display: block;
}
.bcn-phome__id {
  gap: var(--spacing-200);
  padding-top: var(--spacing-400);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-phome__idtop {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-phome__name {
  font-family: var(
    --font-decorative,
    var(--typography-font-family-display, var(--typography-font-family-sans))
  );
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-600);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--bcn-gray-1000, var(--color-content-default));
  margin: 0;
}
.bcn-phome__eyebrow {
  margin: 0 0 var(--spacing-200);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
}
```

## Tokens
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
