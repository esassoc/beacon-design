# Lineage spine

One connected lineage spine leading the rail: the entity chain this requirement descends from — Project → Source Document → Commitment → this Requirement — on a single line with one circular-icon treatment. It places the merged record in the catalog hierarchy and doubles as upward navigation to its provenance.

## Key decisions
- A single <ol> renders all four nodes so they share the connecting line + circular icon chips — it must read as ONE spine, ported verbatim from the standard twin (data-catalog-requirement.astro) so the two workflows stay visually parallel.
- The CURRENT node (this Requirement) gets the secondary-ring accent (border + text in --color-secondary) and a non-link name; ancestry nodes are links in the brand link color.
- Each node shows a "kind" caption (Project / Source Document / Commitment / Requirement) above the entity name. The Commitment node names both id and title (MM-BIO-2 — Nesting Birds and Raptors).
- Lineage LEADS the rail (above Details / Timing / Notifications) — provenance first, config second. It replaced the removed "Track this Requirement" jump-off as the rail's opening module.

## Gotchas
- The connecting line is a ::before on each node, hidden on :last-child — keep all nodes in the one <ol> or the line breaks.
- This is composition glue shared across the catalog detail family (requirement / commitment / source-document), not an esa-* lego — the lego lookup found no ancestry-spine component. If Angular already has an entity-breadcrumb/lineage control, reuse it; otherwise this is a promotion candidate.
- The current-node ring is --color-secondary here (the requirement family), whereas the source-document page fills the current dot with --color-primary — keep each page's family accent.

## Done when
- One unbroken spine Project → Source Document → Commitment → Requirement, the Requirement node carrying the secondary ring and a non-link name; ancestry names link to their catalog targets.

## Markup
```html
<ol class="bcn-lineage">
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
          <path
            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
          ></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <span class="bcn-lineage__kind">Project</span>
      <a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
        >3600 Alameda Avenue Project</a
      >
    </span>
  </li>
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <span class="bcn-lineage__kind">Source Document</span>
      <a class="bcn-lineage__name" href="#data-catalog/source-documents/3600-alameda-feir"
        >3600 Alameda Avenue Project FEIR</a
      >
    </span>
  </li>
  <li class="bcn-lineage__node">
    <span class="bcn-lineage__icon"
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
          <path d="M15 12h-5"></path>
          <path d="M15 8h-5"></path>
          <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
          <path
            d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
          ></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <span class="bcn-lineage__kind">Commitment</span>
      <a
        class="bcn-lineage__name"
        href="/beacon-design/prototypes/data-catalog-commitment"
        >MM-BIO-2 — Nesting Birds and Raptors</a
      >
    </span>
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--current">
    <span class="bcn-lineage__icon"
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
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path
            d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
          ></path>
          <path d="m9 14 2 2 4-4"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <span class="bcn-lineage__kind">Requirement</span>
      <span class="bcn-lineage__name bcn-lineage__name--current"
        >Pre-construction survey for nesting raptors and other migratory birds during
        nesting season</span
      >
    </span>
  </li>
</ol>
```

## Styles
```css
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
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
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
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-lineage {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-lineage__node {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-400);
}
.bcn-lineage__node:before {
  content: "";
  position: absolute;
  left: 13px;
  top: 30px;
  bottom: 2px;
  width: 2px;
  background: var(--color-border);
}
.bcn-lineage__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-lineage__body {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  padding-top: 2px;
}
.bcn-lineage__kind {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-lineage__name {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-lineage__node:last-child {
  padding-bottom: 0;
}
.bcn-lineage__node:last-child:before {
  display: none;
}
.bcn-lineage__node--current .bcn-lineage__icon {
  border-color: var(--color-secondary);
  color: var(--color-secondary);
}
.bcn-lineage__name--current {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}
.bcn-trigger-row .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}
.bcn-context__doc .esa-icon {
  color: var(--color-text-tertiary);
}
.bcn-note .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-text-primary);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
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
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
```

## Tokens
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
