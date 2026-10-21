# Lineage spine

Source Document detail (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-source-document/

![Lineage spine, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-source-document/claude/lineage-spine.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-source-document/claude/lineage-spine.phone.png

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

## Components

- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

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
      ><a class="bcn-lineage__kind" href="#data-catalog/projects">Project</a
      ><a class="bcn-lineage__name" href="#data-catalog/projects/3600-alameda"
        >3600 Alameda Avenue Project</a
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <!-- …and 3 more like this (<path>) -->
        </svg></span
      ></span
    ><span class="bcn-lineage__body"
      ><a class="bcn-lineage__kind" href="#data-catalog/source-documents">Source Document</a
      ><span class="bcn-lineage__name bcn-lineage__name--current"
        >3600 Alameda Avenue Project FEIR</span
      ></span
    >
  </li>
  <li class="bcn-lineage__node bcn-lineage__node--child">
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
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="m9 14 2 2 4-4"></path></svg></span></span
    ><span class="bcn-lineage__body"
      ><a class="bcn-lineage__name" href="/beacon-design/prototypes/data-catalog-commitment"
        >Commitments</a
      ></span
    ><span class="bcn-count-neutral"
      ><span class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
        ><span class="esa-badge__text">51</span></span
      ></span
    >
  </li>
  <!-- …and 2 more like this (<li class="bcn-lineage__node">) -->
</ol>
```

## Styles

```css
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-count-neutral {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  align-items: center;
  display: inline-flex;
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
  border-color: var(--color-background-brand);
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
}
.bcn-lineage__body {
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  padding-top: 2px;
  display: flex;
}
.bcn-lineage__kind {
  color: var(--color-background-brand);
  width: fit-content;
  font-size: 0.75rem;
  text-decoration: none;
}
a.bcn-lineage__kind:hover {
  text-decoration: underline;
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
