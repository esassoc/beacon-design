# Event row — one event under a duty

Obligation Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-tracking/

One event as a CHILD of a duty: a glyph for its Event Hub source, the title on one line, and the source plus both a relative and an absolute date. Folding it open shows that source’s own facts, and the relevance service’s stated reason where one applies.

## Key decisions

- THE ABSOLUTE DATE IS BACK, and only in this direction. The feed’s rail shows "45m ago" alone because a timeline is scanned by recency. A duty’s history is read the other way — four events spread across days, where "1d ago" beside "2d ago" stops being a date and becomes arithmetic. Showing both here and only the relative one there is a considered difference.
- A ROW STATES ITS BASIS ONLY WHEN THE PANE’S EVENTS DISAGREE — the SAME rule as the duty row’s, applied in the other direction rather than reversed. Measured against this fixture, NOT ONE pane has a varying basis: five duties have a single event and the other four are uniform (4x "Any covered species", 3x "Trigger"). So the per-row badge was 46 copies of 9 facts. Where every event reached the duty the same way it is hoisted to the pane and stated once; where they differ the rows carry it. Real data will produce the varied case.
- A NATIVE <details> CARRYING data-swo-branch, deliberately, to match bcn-sw-obligation-card — the sibling doing this same job on the same panes. That is the hook the pane’s Expand all / Collapse all already drive, so both kinds of child open together with no new wiring.
- THE FACTS BAND IS PER-SOURCE and arrives assembled. An observation has a species and a buffer; a DMR has neither and has weather instead. The component renders what it is handed and asserts nothing about the shape.
- SOURCE LEADS EVERY BAND, on all three sources. SOURCE is the Event Hub topic a record arrived on — observations, sitereports, dmrs — and those ARE enumerated, by the listeners. TYPE exists only on observations, is VARCHAR(255) with no lookup and no foreign key, and its vocabulary lives in the Angular app rather than the database. Running the two together was a real error once and the band is where the distinction is kept legible.

## Gotchas

- A FLEX ITEM’S AUTO BASIS IS MAX-CONTENT, so a long value takes one unbroken line and is clipped rather than wrapped. min-width: 0 alone does not fix it — it permits shrinking but the basis still asks for max-content. Both facts bands cap the item at 100%.
- Safari draws its own disclosure triangle through ::-webkit-details-marker; the chevron replaces it and the marker is hidden.
- A duty with exactly one event renders it already open — folding the only thing in the pane hides everything it has to say.

## Done when

- Every row shows a source, a relative time and a calendar date; no row shows a status, a verdict or a filing verb.
- Expand all in a by-obligation pane opens every event row in that pane and no other.

## Components

- `bcn-tev` (spoke) · `src/components/bcn/BcnTrackingEvent.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_7 repeated elements are collapsed in the markup below; the comments say where._

```html
<li class="bcn-tev">
  <details class="bcn-tev__node" data-swo-branch="">
    <summary class="bcn-tev__main">
      <span class="bcn-tev__chevron" aria-hidden="true"
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
            <path d="m9 18 6-6-6-6"></path></svg></span></span
      ><span class="bcn-tev__glyph" aria-hidden="true"
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
            <path
              d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
            ></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></span></span
      ><span class="bcn-tev__head"
        ><span class="bcn-tev__title typography-body-sm"
          >Giant garter snake seen in an irrigation canal at the work edge</span
        ><span class="bcn-tev__meta typography-label-xs"
          ><span class="bcn-tev__kind">Observation</span><span aria-hidden="true">·</span
          ><span>45m ago</span
          ><!-- …and 2 more like this (<span>) --></span
        ></span
      >
    </summary>
    <div class="bcn-tev__body">
      <dl class="bcn-tev__facts">
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Source</dt>
          <dd class="typography-body-sm">Observation</dd>
        </div>
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Type</dt>
          <dd class="typography-body-sm">Resource</dd>
        </div>
        <!-- …and 5 more like this (<div class="bcn-tev__fact">) -->
      </dl>
    </div>
  </details>
</li>
```

## Styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
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
.bcn-tev__node {
  border-block-end: 1px solid var(--color-border-default-subtle);
}
.bcn-tev:last-child .bcn-tev__node {
  border-block-end: none;
}
.bcn-tev__main {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-200);
  cursor: pointer;
  grid-template-columns: auto auto 1fr auto;
  list-style: none;
  display: grid;
}
.bcn-tev__main::-webkit-details-marker {
  display: none;
}
.bcn-tev__main:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-tev__main:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: -2px;
}
.bcn-tev__chevron {
  color: var(--color-content-default-tertiary);
  transition: transform 0.12s;
}
.bcn-tev__node[open] > .bcn-tev__main .bcn-tev__chevron {
  transform: rotate(90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-tev__chevron {
    transition: none;
  }
}
.bcn-tev__glyph {
  color: var(--color-content-default-tertiary);
}
.bcn-tev__head {
  min-width: 0;
}
.bcn-tev__title {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
}
.bcn-tev__meta {
  gap: var(--spacing-100);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  margin-block-start: var(--spacing-050);
  display: flex;
}
.bcn-tev__kind {
  color: var(--color-content-default-secondary);
}
.bcn-tev__body {
  padding: 0 var(--spacing-200) var(--spacing-300) var(--spacing-600);
}
.bcn-tev__facts {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-tev__fact {
  min-width: 0;
  max-inline-size: 100%;
}
.bcn-tev__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tev__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
}
@media (width<=40rem) {
  .bcn-tev__main {
    grid-template-columns: auto auto 1fr;
  }
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
