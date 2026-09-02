# Breadcrumb (nested help route)

The way back up. A category page is the only nested route in the knowledge base, so it is the only place the help feature shows a breadcrumb: "Help & Guidance / <Category>", with the category as the current page.

## Key decisions
- The breadcrumb comes from PageLayout, which ports Beacon's prod page-layout + breadcrumbs components (home glyph, chevron separators) — the page passes a breadcrumbs array and owns nothing about the chrome.
- The category title is the page H1, supplied through the same PageLayout prop — the category name is stated once as the heading, not repeated as a lede.
- The last crumb is a span carrying aria-current="page", not a link; earlier crumbs are anchors.
- The help home deliberately has NO breadcrumb (it is a top-level destination); only the category level adds one.

## Gotchas
- The crumb back to the help home must go through withBase — a bare /prototypes/help breaks under the deployed base path.
- Do not add a description lede under the title. An earlier revision had one and it was cut: the category description already does that work on the home's card, and repeating it here pushed the article list down for no gain.

## Done when
- The page shows "Help & Guidance / Tracking" above a "Tracking" H1; the first crumb navigates to the help home under any base path; the last crumb is inert and marked as the current page.

## Markup
```html
<section class="page-layout__breadcrumbs">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="breadcrumbs__items">
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
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          ></path>
        </svg>
      </span>
      <a class="breadcrumb-item" href="/beacon-design/prototypes/help">
        Help &amp; Guidance </a
      ><span class="esa-icon esa-icon--sm" aria-hidden="true">
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
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </span>
      <span class="breadcrumb-item" aria-current="page"> Tracking </span>
    </div>
  </nav>
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
.breadcrumbs {
  padding: var(--spacing-400) 0;
}
.breadcrumbs__items {
  display: flex;
  gap: var(--spacing-100);
  align-items: center;
  flex-wrap: wrap;
}
.breadcrumb-item {
  color: var(--bcn-gray-600);
  text-transform: capitalize;
  font-size: 0.875rem;
}
a.breadcrumb-item {
  text-decoration: none;
}
a.breadcrumb-item:hover {
  text-decoration: underline;
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
- `--bcn-gray-600`: #656565 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
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
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
