# Duty card

One duty, as a collapsed card: a class tag, the title, and a count badge saying how many requirements it was drafted from. Folding it open lists those requirements, each with its commitment code, its name, and a faint "also in n actions" where it is shared.

## Key decisions
- THIS IS THE SETUP WIZARD’S OWN CARD, not a tracking-page one. bcn-sw-obligation-card, mode="browse" — the same component the registry tree and setup step 5 render. A duty therefore looks identical in the feed, in the registry tab and in the wizard, and the commitment codes come along for free.
- THE WRAPPER WAS DELETED (2026-09-16). A bcn-tracking-duty existed to add a Trigger marker and a prose reason to the card; both were removed as the page was pruned, at which point the wrapper only forwarded props and added a margin. A component that only forwards props is deleted, not kept.
- mode="browse" IS A PROP, NOT A SECOND COMPONENT. It drops the grips, the drag hooks, the pencil/× verbs and the per-row duplicate/unlink — everything that decides something — and leaves the reading surface. Everything else, including the class tag’s per-class hue, is shared.
- THE REQUIREMENTS ARE THE LINEAGE, and they are the reason this page moved onto the wizard fixture. The old registry could only reach commitments; these obligations carry the requirements they were drafted from, so a reader can open a duty and see what it came from without leaving the page.
- NO LINK ON THE TITLE. In browse mode the title is a static span, not a button. These are fixture obligations with no detail route, and a title that looks clickable but does nothing is worse than one that does not.

## Gotchas
- THE REQUIREMENT LIST IS UNCAPPED — it is a fold, not a chip row, so a duty drafted from twelve requirements lists twelve. The card ships collapsed; the pane’s Expand all / Collapse all pair drives every card in that pane at once.
- CLASS DOES CARRY COLOUR HERE. The card tints the class tag per class (adhere --color-obligation, monitor #ff7c43, notify #ffa600, roster --color-action, mixed at 14% on white for the fill). It is a categorical facet, not a status — no class is worse than another.
- THE CLASS TAG IS THE ONLY CLASS SIGNAL LEFT. The feed’s own class badge, its trigger quote and its "Raised on X" line are all gone (the badge repeated its group heading 209 times); a feed row states its basis only where that basis DIFFERS from the pane’s dominant one.
- The component’s own header comment still says the browse title "links to the duty’s record". It does not — the code renders a static span. Trust the code.

## Done when
- A card renders in the feed, in the registry tree and in setup step 5, and is visibly the same component in all three.
- In browse mode: no grip, no drag, no pencil, no ×, no duplicate, no unlink, and the title is not a control.
- Every card shows a class tag and a requirement count; opening it lists that many requirement rows, each with a commitment code.
- No card renders a link, a deadline badge, a status or a filing verb.

## Markup
```html
<li
  class="bcn-swoc"
  data-swo-card=""
  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
  data-class="adhere"
  draggable="false"
>
  <details class="bcn-swoc__node" data-swo-branch="">
    <summary class="bcn-swoc__main">
      <span class="bcn-swoc__chevron" aria-hidden="true"
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
      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
      ><span
        class="bcn-swoc__title bcn-swoc__title--static"
        data-swo-text="Avoidance Measures in Unmapped Habitat"
        >Avoidance Measures in Unmapped Habitat</span
      ><span data-swo-count="obligation"
        ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
      >
    </summary>
    <ul class="bcn-swoc__reqs">
      <li
        class="bcn-swoc__req"
        draggable="false"
        data-req="req_01M2ESMEQGNEXHJ6WJ7QGSE8T9"
        data-code="COA 10.7"
      >
        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.7</span
        ><span
          class="bcn-swoc__req-name"
          data-swo-text="Apply Avoidance Measures to Unmapped Species Occurrences"
          >Apply Avoidance Measures to Unmapped Species Occurrences</span
        >
      </li>
      <li
        class="bcn-swoc__req"
        draggable="false"
        data-req="req_01M2ESMES8P77HCP3S39H7JS59"
        data-code="COA 10.8"
      >
        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span
        ><span
          class="bcn-swoc__req-name"
          data-swo-text="Apply Avoidance Measures to Unmapped Suitable Habitat"
          >Apply Avoidance Measures to Unmapped Suitable Habitat</span
        >
      </li>
    </ul>
  </details>
</li>
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
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
.bcn-swoc__title--static {
  cursor: default;
  text-align: left;
}
.bcn-swoc {
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden] {
  display: none;
}
.bcn-swoc.is-dragging {
  opacity: 0.4;
}
.bcn-swoc.is-new {
  animation: 0.9s ease-out bcn-swoc-flash;
}
.bcn-swoc__node {
  min-width: 0;
}
.bcn-swoc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
}
.bcn-swoc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__grip {
  color: var(--bcn-gray-400);
  cursor: grab;
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swoc__grip:active {
  cursor: grabbing;
}
.bcn-swoc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  overflow: hidden;
}
.bcn-swoc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + 22px);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__reqs:empty:after {
  content: "No requirements — drop one here or remove this obligation.";
  padding: var(--spacing-100) var(--spacing-200);
  color: var(--color-content-default-tertiary);
  font-style: italic;
  display: block;
}
.bcn-swoc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__req.is-new {
  animation: 0.9s ease-out bcn-swoc-flash;
}
.bcn-swoc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
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
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
