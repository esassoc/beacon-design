# Event row — one event under a duty

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

## Markup
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
            <path
              d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
            ></path></svg></span></span
      ><span class="bcn-tev__head"
        ><span class="bcn-tev__title typography-body-sm"
          >Giant garter snake seen in an irrigation canal at the work edge</span
        ><span class="bcn-tev__meta typography-label-xs"
          ><span class="bcn-tev__kind">Observation</span><span aria-hidden="true">·</span
          ><span>45m ago</span><span aria-hidden="true">·</span
          ><span>16 Sept 2026</span></span
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
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Site</dt>
          <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
        </div>
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Species</dt>
          <dd class="typography-body-sm">giant garter snake</dd>
        </div>
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Buffer</dt>
          <dd class="typography-body-sm">200 ft</dd>
        </div>
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Reported by</dt>
          <dd class="typography-body-sm">A. Mendes, biological monitor</dd>
        </div>
        <div class="bcn-tev__fact">
          <dt class="typography-label-xs">Flagged</dt>
          <dd class="typography-body-sm">Concern</dd>
        </div>
      </dl>
    </div>
  </details>
</li>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
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
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
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
.bcn-tev__reached {
  padding: var(--spacing-050) var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  justify-self: end;
}
.bcn-tev__reached[data-trigger] {
  background: color-mix(in srgb, var(--color-obligation) 14%, white);
  color: var(--color-content-default);
}
.bcn-tev__body {
  padding: 0 var(--spacing-200) var(--spacing-300) var(--spacing-600);
}
.bcn-tev__why {
  margin: 0 0 var(--spacing-300);
  color: var(--color-content-default-secondary);
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
.bcn-tev__reached {
  grid-column: 3;
  justify-self: start;
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
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
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
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-font-weight`: 500 _(semantic)_
- `--typography-label-xs-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-strong-line-height`: 1.6 _(semantic)_
