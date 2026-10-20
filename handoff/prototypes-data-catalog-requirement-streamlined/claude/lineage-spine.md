# Lineage spine

One connected lineage spine leading the rail: the entity chain this requirement descends from — Project → Source Document → Commitment → this Requirement — on a single line with one circular-icon treatment. It places the merged record in the catalog hierarchy and doubles as upward navigation to its provenance.

## Key decisions
- A single <ol> renders all four nodes so they share the connecting line + circular icon chips — it must read as ONE spine, ported verbatim from the standard twin (data-catalog-requirement.astro) so the two workflows stay visually parallel.
- The CURRENT node (this Requirement) gets the secondary-ring accent (border + text in --color-background-brand-muted) and a non-link name; ancestry nodes are links in the brand link color.
- Each node shows a "kind" caption (Project / Source Document / Commitment / Requirement) above the entity name. The Commitment node names both id and title (MM-BIO-2 — Nesting Birds and Raptors).
- Lineage LEADS the rail (above Details / Timing / Notifications) — provenance first, config second. It replaced the removed "Track this Requirement" jump-off as the rail's opening module.

## Gotchas
- The connecting line is a ::before on each node, hidden on :last-child — keep all nodes in the one <ol> or the line breaks.
- This is composition glue shared across the catalog detail family (requirement / commitment / source-document), not an esa-* lego — the lego lookup found no ancestry-spine component. If Angular already has an entity-breadcrumb/lineage control, reuse it; otherwise this is a promotion candidate.
- The current-node ring is --color-background-brand-muted here (the requirement family), whereas the source-document page fills the current dot with --color-background-brand — keep each page's family accent.

## Done when
- One unbroken spine Project → Source Document → Commitment → Requirement, the Requirement node carrying the secondary ring and a non-link name; ancestry names link to their catalog targets.

## Markup
```html
<ol class="bcn-lineage">
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          ></path></svg></span></span
    ><span class="bcn-lineage__body"
      ><span class="bcn-lineage__kind">Project</span
      ><a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
        >3600 Alameda Avenue Project</a
      ></span
    >
  </li>
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path></svg></span></span
    ><span class="bcn-lineage__body"
      ><span class="bcn-lineage__kind">Source Document</span
      ><a
        class="bcn-lineage__name"
        href="#data-catalog/source-documents/3600-alameda-feir"
        >3600 Alameda Avenue Project FEIR</a
      ></span
    >
  </li>
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
          <path d="M15 12h-5"></path>
          <path d="M15 8h-5"></path>
          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
          <path
            d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
          ></path></svg></span></span
    ><span class="bcn-lineage__body"
      ><span class="bcn-lineage__kind">Commitment</span
      ><a
        class="bcn-lineage__name"
        href="/beacon-design/prototypes/data-catalog-commitment"
        >MM-BIO-2 — Nesting Birds and Raptors</a
      ></span
    >
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--current">
    <span class="bcn-lineage__icon"
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
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          ></path>
          <path d="m9 14 2 2 4-4"></path></svg></span></span
    ><span class="bcn-lineage__body"
      ><span class="bcn-lineage__kind">Requirement</span
      ><span class="bcn-lineage__name bcn-lineage__name--current"
        >Pre-construction survey for nesting raptors and other migratory birds during
        nesting season</span
      ></span
    >
  </li>
</ol>
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
.bcn-lineage {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-lineage__node {
  align-items: flex-start;
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-400);
  display: flex;
  position: relative;
}
.bcn-lineage__node:before {
  content: "";
  background: var(--color-border-default);
  width: 2px;
  position: absolute;
  top: 30px;
  bottom: 2px;
  left: 13px;
}
.bcn-lineage__node:last-child {
  padding-bottom: 0;
}
.bcn-lineage__node:last-child:before {
  display: none;
}
.bcn-lineage__icon {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  width: 28px;
  height: 28px;
  color: var(--color-content-default-secondary);
  border-radius: 50%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-lineage__node--current .bcn-lineage__icon {
  border-color: var(--color-background-brand-muted);
  color: var(--color-background-brand-muted);
}
.bcn-lineage__body {
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  padding-top: 2px;
  display: flex;
}
.bcn-lineage__kind {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-lineage__name {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  line-height: 1.35;
  text-decoration: none;
}
a.bcn-lineage__name:hover {
  text-decoration: underline;
}
.bcn-lineage__name--current {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-trigger-row .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
}
.bcn-context__doc .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-note .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-content-default);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
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
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
