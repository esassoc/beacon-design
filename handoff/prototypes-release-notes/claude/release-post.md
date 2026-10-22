# Release post

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Release post, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/release-post.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/release-post.phone.png

One release, as one post: the version badge and date in a narrow meta column, then two or three features (title, paragraph, optional note on what moved (info icon + text), screenshot in an inset frame with a caption), then the release's full Added / Changed / Fixed list. Every release uses the same shape.

## Key decisions

- Features first, changelog second: a reader who stops after the features knows what matters; the changelog is the complete record beneath.
- The meta column is the Claude Code changelog layout (160px column, 24px gap). It sticks while its post scrolls once the two sit side by side; on a phone it drops above the body as one row (badge, date).
- Version is an esa-badge (neutral, lg), not a brand-tinted pill: badges stay quiet per the design principles.
- A serif display layer (--font-decorative) carries the feature titles; everything else is the sans body face. No status color anywhere.
- Headlines are plain and factual: they name the feature, not a pitch. There is no per-release summary line; the features lead.
- Screenshots sit in an inset frame: a sunken panel with padding and a large radius around an image with its own smaller radius and a hairline, and a short factual caption under it. The caption is the alt text too.
- A feature note is the info icon and the fact itself ("The Action Lists entry in the navigation is gone on every tenant."), with no "Read this first" label: the label addressed the reader instead of stating the change.
- Every post is a hash target (#v1-41-0) and every feature is too (#v1-41-0-lists), with scroll-margin for landing room.

## Gotchas

- Each post is the .sidebar layout primitive. Sticky needs the meta column to stretch (align-self: stretch) and the inner wrapper to stick; sticking the wrapped phone layout would float the badge over the body, so sticky is media-gated.
- Feature screenshots come from one prop (feature.image). Where production captures come from is still open; swap the source, not the layout.

## Done when

- Each release shows badge and date, two or three features each with a captioned, inset screenshot, then Added / Changed / Fixed; a feature note renders only where the data has one; the meta column sticks on desktop and sits above the body on a phone.

## Components

- `bcn-release` (spoke) · `src/components/bcn/BcnReleaseStream.astro`
- `bcn-release-changelog` (spoke) · `src/components/bcn/BcnReleaseChangelog.astro`
- `bcn-release-feature` (spoke) · `src/components/bcn/BcnReleaseFeature.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_20 repeated elements are collapsed in the markup below; the comments say where._

```html
<article class="bcn-release sidebar" data-gap="lg" id="v1-41-0" aria-labelledby="v1-41-0-heading">
  <header class="bcn-release__meta">
    <div class="bcn-release__meta-inner">
      <h2 class="bcn-release__version" id="v1-41-0-heading">
        <span class="esa-badge esa-badge--neutral esa-badge--lg typography-microcopy-md-strong"
          ><span class="esa-badge__text">1.41.0</span></span
        >
      </h2>
      <time class="bcn-release__date typography-label-sm" datetime="2026-10-13"
        >October 13, 2026</time
      >
    </div>
  </header>
  <div class="bcn-release__body">
    <section class="bcn-release-feature" id="v1-41-0-lists" aria-labelledby="v1-41-0-lists-title">
      <h3 class="bcn-release-feature__title" id="v1-41-0-lists-title">
        Lists replace Action Lists
      </h3>
      <p class="bcn-release-feature__text typography-body-md">
        Each project now has one Lists page for action lists and commitment lists. Every list has
        its own page, with a searchable drawer for adding items, Select mode for removing many, and
        CSV export.
      </p>
      <p class="bcn-release-feature__note typography-body-sm">
        <span class="bcn-release-feature__note-icon"
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path></svg></span></span
        ><span
          >The Action Lists entry in the navigation is gone on every tenant. Your lists are all on
          the new page.</span
        >
      </p>
      <figure class="bcn-release-feature__figure">
        <img
          alt="The Lists page, with commitment lists and action lists"
          class="bcn-release-feature__img"
          src="/beacon-design/release-notes/lists-index.jpg"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="bcn-release-feature__caption typography-body-sm" aria-hidden="true">
          The Lists page, with commitment lists and action lists
        </figcaption>
      </figure>
    </section>
    <section
      class="bcn-release-feature"
      id="v1-41-0-monitoring-dashboard"
      aria-labelledby="v1-41-0-monitoring-dashboard-title"
    >
      <h3 class="bcn-release-feature__title" id="v1-41-0-monitoring-dashboard-title">
        Configurable Monitoring Portal dashboard
      </h3>
      <p class="bcn-release-feature__text typography-body-md">
        The dashboard is now a board of widgets. Admins add them from a gallery, then resize,
        reorder, recolor and configure each one, and the layout is saved for the project.
      </p>
      <p class="bcn-release-feature__note typography-body-sm">
        <span class="bcn-release-feature__note-icon"
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path></svg></span></span
        ><span>Monitoring pages moved under each project’s new Data page. Old links redirect.</span>
      </p>
      <figure class="bcn-release-feature__figure">
        <img
          alt="The Monitoring Portal dashboard"
          class="bcn-release-feature__img"
          src="/beacon-design/release-notes/monitoring.jpg"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="bcn-release-feature__caption typography-body-sm" aria-hidden="true">
          The Monitoring Portal dashboard
        </figcaption>
      </figure>
    </section>
    <section
      class="bcn-release-feature"
      id="v1-41-0-list-evidence"
      aria-labelledby="v1-41-0-list-evidence-title"
    >
      <h3 class="bcn-release-feature__title" id="v1-41-0-list-evidence-title">
        Evidence for a whole action list
      </h3>
      <p class="bcn-release-feature__text typography-body-md">
        Choose a component, stage the evidence, and save it to every action on that component in one
        step.
      </p>
      <figure class="bcn-release-feature__figure">
        <img
          alt="Adding evidence to every action on one component"
          class="bcn-release-feature__img"
          src="/beacon-design/release-notes/evidence-bulk.jpg"
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <figcaption class="bcn-release-feature__caption typography-body-sm" aria-hidden="true">
          Adding evidence to every action on one component
        </figcaption>
      </figure>
    </section>
    <section class="bcn-release-changelog" aria-label="Changes in 1.41.0">
      <div class="bcn-release-changelog__group">
        <h3 class="bcn-release-changelog__head typography-label-sm-strong">Added</h3>
        <ul class="bcn-release-changelog__list" role="list">
          <li class="bcn-release-changelog__item typography-body-sm">
            Added a Lists page to every project that holds action lists and commitment lists
            together, with keyword search and an Add button for each kind of list
          </li>
          <li class="bcn-release-changelog__item typography-body-sm">
            Added a page for every list, with editable details, sharing and delete, and views by
            type, by commitment or A to Z
          </li>
          <!-- …and 11 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
        </ul>
      </div>
      <div class="bcn-release-changelog__group">
        <h3 class="bcn-release-changelog__head typography-label-sm-strong">Changed</h3>
        <ul class="bcn-release-changelog__list" role="list">
          <li class="bcn-release-changelog__item typography-body-sm">
            Changed Action Lists to Lists: the Action Lists entry in the navigation is gone on every
            tenant
          </li>
          <li class="bcn-release-changelog__item typography-body-sm">
            Changed where evidence is associated: one dialog on the evidence record’s page replaces
            Associate To Actions and the Associated Work Areas picker
          </li>
          <!-- …and 5 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
        </ul>
      </div>
      <div class="bcn-release-changelog__group">
        <h3 class="bcn-release-changelog__head typography-label-sm-strong">Fixed</h3>
        <ul class="bcn-release-changelog__list" role="list">
          <li class="bcn-release-changelog__item typography-body-sm">
            Fixed deleting a component; the dialog now asks for the component’s name and shows what
            is removed and what is kept
          </li>
          <li class="bcn-release-changelog__item typography-body-sm">
            Fixed the Components link showing in a project’s navigation when Components are turned
            off
          </li>
          <!-- …and 4 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
        </ul>
      </div>
    </section>
  </div>
</article>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.bcn-release-feature {
  gap: var(--spacing-200);
  scroll-margin-top: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-release-feature__title {
  font-family: var(--font-decorative);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-font-weight-medium);
  line-height: var(--typography-title-line-height);
  color: var(--color-content-default);
  text-wrap: balance;
  margin: 0;
}
.bcn-release-feature__text {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-release-feature__note {
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-release-feature__note-icon {
  color: var(--color-content-default-secondary);
  flex: none;
  padding-block-start: var(--spacing-050);
  display: inline-flex;
}
.bcn-release-feature__figure {
  margin: var(--spacing-200) 0 0;
  padding: var(--spacing-400);
  gap: var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-radius: var(--radius-lg);
  flex-direction: column;
  display: flex;
}
.bcn-release-feature__img {
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: top left;
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  background: var(--color-background-default);
  block-size: auto;
  inline-size: 100%;
  display: block;
}
.bcn-release-feature__caption {
  color: var(--color-content-default-secondary);
}
.bcn-release-changelog {
  gap: var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  padding-block-start: var(--spacing-500);
  display: flex;
}
.bcn-release-changelog__head {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-release-changelog__list {
  margin: var(--spacing-200) 0 0;
  gap: var(--spacing-100);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-release-changelog__item {
  color: var(--color-content-default);
  padding-inline-start: var(--spacing-600);
  position: relative;
}
.bcn-release-changelog__item:before {
  content: "";
  border-radius: var(--radius-full);
  background: var(--color-border-default);
  block-size: 5px;
  inline-size: 5px;
  position: absolute;
  inset-block-start: 0.6lh;
  inset-inline-start: var(--spacing-200);
  translate: 0 -50%;
}
.bcn-release-changelog__item .esa-badge {
  vertical-align: 0.0625rem;
  margin-inline-end: var(--spacing-150);
}
.bcn-release-changelog__item strong {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-release {
  --sidebar-width: 10rem;
  --sidebar-content-min: 65%;
  padding-block: var(--spacing-600);
  scroll-margin-top: var(--spacing-500);
}
.bcn-release + .bcn-release {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-release:first-child {
  padding-block-start: var(--spacing-400);
}
.bcn-release__meta-inner {
  align-items: flex-start;
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
@media (width>=48rem) {
  .bcn-release__meta {
    align-self: stretch;
  }
}
@media (width>=48rem) {
  .bcn-release__meta-inner {
    position: sticky;
    inset-block-start: var(--spacing-500);
  }
}
@media (width<=47.99rem) {
  .bcn-release__meta-inner {
    flex-direction: row;
    align-items: center;
  }
}
.bcn-release__version {
  margin: 0;
  line-height: 1;
}
.bcn-release__date {
  color: var(--color-content-default-secondary);
}
.bcn-release__body {
  gap: var(--spacing-700);
  flex-direction: column;
  max-inline-size: 46rem;
  display: flex;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--gap` | `1.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-lg` | `.75rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--sidebar-content-min` | `65%` | component |
| `--sidebar-width` | `10rem` | component |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
