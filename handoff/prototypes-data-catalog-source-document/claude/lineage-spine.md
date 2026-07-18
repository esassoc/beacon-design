# Lineage spine

One connected lineage spine in the rail: the document's ANCESTRY (Project → this Source Document) followed by its CHILD rollups (Commitments / Requirements / Actions), all on a single line with one icon treatment. It places the document in the catalog hierarchy and doubles as navigation into what it contains.

## Key decisions
- A single <ol> renders both ancestry nodes and child-rollup nodes so they share the connecting line + circular icon chips — it must read as ONE spine, not two stacked lists.
- The CURRENT node (this document) gets a filled primary dot + primary-text name; ancestry and child nodes are links in the brand link color.
- Each node shows a "kind" caption (links to that catalog LIST) above the entity name (links to the ENTITY). Child rollups add a neutral count badge and use the smaller caption-size name.
- Counts are fixture-computed (distinct commitments, requirement rows, distinct actions); the full rosters live on the linked catalog lists, not here.

## Gotchas
- The connecting line is a ::before on each node, hidden on :last-child — keep all nodes in the one <ol> or the line breaks between ancestry and children.
- Child-rollup nodes need the double-class selector (.bcn-lineage__node.bcn-lineage__node--child) to win center-alignment over the base node rule (equal specificity, defined later in the sheet).
- The count is the house NEUTRAL badge (esa-badge re-pointed to sunken surface + secondary text), not the teal secondary — it labels a count and must not read as a status chip.

## Done when
- One unbroken spine: Project → Source Document (filled current dot) → Commitments / Requirements / Actions with neutral counts; kind captions and names link to the correct catalog targets.

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
      <a class="bcn-lineage__kind" href="#data-catalog/projects">Project</a>
      <a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
        >3600 Alameda Avenue Project</a
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <a class="bcn-lineage__kind" href="#data-catalog/source-documents"
        >Source Document</a
      >
      <span class="bcn-lineage__name bcn-lineage__name--current"
        >3600 Alameda Avenue Project FEIR</span
      >
    </span>
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--child">
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
      <a
        class="bcn-lineage__name"
        href="/beacon-design/prototypes/data-catalog-commitment"
        >Commitments</a
      >
    </span>
    <span class="bcn-count-neutral"
      ><span class="esa-badge esa-badge--primary esa-badge--sm">
        <span class="esa-badge__text">51</span>
      </span>
    </span>
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--child">
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
          <rect x="3" y="5" width="6" height="6" rx="1"></rect>
          <path d="m3 17 2 2 4-4"></path>
          <path d="M13 6h8"></path>
          <path d="M13 12h8"></path>
          <path d="M13 18h8"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <a
        class="bcn-lineage__name"
        href="/beacon-design/prototypes/data-catalog-requirement"
        >Requirements</a
      >
    </span>
    <span class="bcn-count-neutral"
      ><span class="esa-badge esa-badge--primary esa-badge--sm">
        <span class="esa-badge__text">130</span>
      </span>
    </span>
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--child">
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
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
          <path d="M4 6h.01"></path>
          <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
          <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
          <path d="M12 18h.01"></path>
          <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="m13.41 10.59 5.66-5.66"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-lineage__body">
      <a class="bcn-lineage__name" href="/beacon-design/prototypes/data-catalog-actions"
        >Actions</a
      >
    </span>
    <span class="bcn-count-neutral"
      ><span class="esa-badge esa-badge--primary esa-badge--sm">
        <span class="esa-badge__text">74</span>
      </span>
    </span>
  </li>
</ol>
```

## Styles
```css
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
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.bcn-count-neutral {
  display: inline-flex;
  align-items: center;
  --badge-bg: var(--color-surface-sunken);
  --badge-text-color: var(--color-text-secondary);
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
  color: var(--color-primary);
  text-decoration: none;
  width: fit-content;
}
.bcn-lineage__name {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-lineage__node--current .bcn-lineage__icon {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--color-text-inverse);
}
.bcn-lineage__name--current {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}
.bcn-lineage__node.bcn-lineage__node--child {
  align-items: center;
}
.bcn-lineage__node--child .bcn-lineage__body {
  flex: 1;
  padding-top: 0;
}
.bcn-lineage__node--child .bcn-lineage__name {
  font-size: 0.75rem;
}
.bcn-lineage__node--child .bcn-count-neutral {
  flex-shrink: 0;
}
.bcn-lineage__node:last-child {
  padding-bottom: 0;
}
.bcn-lineage__node:last-child:before {
  display: none;
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
