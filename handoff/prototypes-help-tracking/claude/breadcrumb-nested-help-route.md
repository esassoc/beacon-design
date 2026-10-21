# Breadcrumb (nested help route)

Help category page · source prototype: https://esassoc.github.io/beacon-design/prototypes/help/tracking/

![Breadcrumb (nested help route), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help-tracking/claude/breadcrumb-nested-help-route.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help-tracking/claude/breadcrumb-nested-help-route.phone.png

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

## Components

- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<section class="page-layout__breadcrumbs">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="breadcrumbs__items">
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
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path
            d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          ></path></svg></span
      ><a class="breadcrumb-item" href="/beacon-design/prototypes/help">Help &amp; Guidance</a
      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
          <path d="m9 18 6-6-6-6"></path></svg></span
      ><span class="breadcrumb-item" aria-current="page">Tracking</span>
    </div>
  </nav>
</section>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
.breadcrumbs {
  padding: var(--spacing-400) 0;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.breadcrumbs__items {
  gap: var(--spacing-100);
  flex-wrap: wrap;
  align-items: center;
  display: flex;
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
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
