# Facets rail (class, axes, commitments)

The rail: the class and its definition, the three category axes this obligation is filed under, and the commitments that state the duty — each an esa-collapsible section of pills.

## Key decisions
- CATEGORIES ARE A SET, NOT A PATH. An obligation belongs to every category that fits on three independent axes, so pills are the honest treatment. A tree here would imply the record sits at one place in the registry, which is exactly what the registry's "enter from any axis" rule denies.
- COMMITMENTS ARE A FLAT SET TOO, and this is where a lineage rail was tried and rejected. bcn-detail-lineage draws a strictly linear ol (Program → Study → Sub-study → Task), but an obligation's ancestry FANS OUT at both levels — the exemplar carries fourteen commitments. Fourteen siblings pushed through a linear rail would read as fourteen tiers, which is a lie about the shape of the data.
- Commitments are NOT grouped by source document, because the registry carries no source mapping for a commitment id. Grouping them would mean inferring the source from the id prefix, which is invention.
- An axis the obligation does not sit on renders nothing at all rather than an empty section — 178 of 402 carry no species, and a blank "Species" heading would read as missing data rather than as inapplicable.

## Gotchas
- The category pills show display NAMES, but the underlying record stores category IDS. The name lookup is built once from the axes in src/data/obligations.ts; do not denormalize names onto the row, or the registry and the record can drift.
- Grouping commitments by source document is the obvious next request. It needs a commitment→source mapping that does not exist in this data — treat it as a data dependency, not a UI change.

## Done when
- Class shows the label and the brief's own one-line definition; the notice window appears only for Notify-class records (exactly the 50 that carry one).
- Each axis section lists that obligation's categories as pills, alphabetically, and absent axes render no section.
- On the exemplar (1-087) "Stated by" shows a count of 14 and lists all fourteen commitment references.

## Markup
```html
<div class="stack bcn-ofacets" data-gap="md">
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
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
        ></svg></span
      ><span class="esa-collapsible__title">Class</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Adhere</span
        ><span class="bcn-key-value__val"
          >A rule the work follows while its conditions apply</span
        >
      </div>
    </div>
  </details>
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
      <span class="esa-collapsible__title">Subject</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <ul class="cluster bcn-ofacets__pills" data-gap="xs">
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="subject"
            ><span class="esa-pill__label">Burrowing owl</span></span
          >
          <script type="module">
            document.addEventListener(
              `click`,
              (e) => {
                let t = e.target.closest?.(`[data-esa-pill-remove]`);
                if (!t) return;
                e.stopPropagation();
                let n = t.closest(`.esa-pill`);
                n &&
                  (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })),
                  n.remove());
              },
              !0,
            );
          </script>
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="subject"
            ><span class="esa-pill__label">Fugitive dust</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="subject"
            ><span class="esa-pill__label">Speed limits</span></span
          >
        </li>
      </ul>
    </div>
  </details>
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
      <span class="esa-collapsible__title">Activity</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <ul class="cluster bcn-ofacets__pills" data-gap="xs">
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="activity"
            ><span class="esa-pill__label">Night work</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="activity"
            ><span class="esa-pill__label">Vehicle travel on site</span></span
          >
        </li>
      </ul>
    </div>
  </details>
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
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
        ></svg></span
      ><span class="esa-collapsible__title">Stated by (14)</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <ul class="cluster bcn-ofacets__pills" data-gap="xs">
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">11.29</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">AMM-11</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">AMM-14</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">AMM-17</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">AMM-18</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">BIO-22b</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">BIO-2b</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">COA 11.11</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">COA 11.39</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">COA 11.41</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">COA 11.55</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">COA 11.65</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">EC-11</span></span
          >
        </li>
        <li>
          <span
            class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
            data-category="commitment"
            ><span class="esa-pill__label">EC-14</span></span
          >
        </li>
      </ul>
    </div>
  </details>
</div>
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
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
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-ofacets__pills {
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
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
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--xs {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-100, 0.25rem);
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill--lg {
  --_pill-padding-y: var(--spacing-200, 0.5rem);
  --_pill-padding-x: var(--spacing-300, 0.75rem);
}
.esa-pill--round {
  border-radius: var(--radius-pill, 9999px);
}
.esa-pill--primary {
  --_pill-bg: var(--color-background-brand-subtle, var(--color-grass-2));
  --_pill-text: var(--color-content-brand, var(--color-grass-11));
  --_pill-border: var(--color-border-brand, var(--color-grass-6));
}
.esa-pill--info {
  --_pill-bg: var(--color-background-utility-info-subtle, var(--color-blue-2));
  --_pill-text: var(--color-content-utility-info, #0d74ce);
  --_pill-border: var(--color-border-utility-info, var(--color-blue-6));
}
.esa-pill--success {
  --_pill-bg: var(--color-background-utility-success-subtle, var(--color-green-2));
  --_pill-text: var(--color-content-utility-success, #218358);
  --_pill-border: var(--color-border-utility-success, var(--color-green-6));
}
.esa-pill--warning {
  --_pill-bg: var(--color-background-utility-warning-subtle, var(--color-yellow-2));
  --_pill-text: var(--color-content-utility-warning, #ab6400);
  --_pill-border: var(--color-border-utility-warning, var(--color-yellow-6));
}
.esa-pill--danger {
  --_pill-bg: var(--color-background-utility-danger-subtle, var(--color-red-2));
  --_pill-text: var(--color-content-utility-danger, #ce2c31);
  --_pill-border: var(--color-border-utility-danger, var(--color-red-6));
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
}
.esa-pill__icon {
  flex-shrink: 0;
  display: inline-flex;
}
.esa-pill__remove {
  border-radius: var(--radius-pill, 9999px);
  width: 16px;
  height: 16px;
  color: inherit;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-pill__remove:hover {
  opacity: 1;
  background: var(--color-background-overlay-heavy-hover, #0000001a);
}
.esa-pill__remove:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
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
- `--border-width-default`: 1px _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-heavy-hover`: #0000001a _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-blue-2`: #f4faff _(primitive)_
- `--color-blue-6`: #acd8fc _(primitive)_
- `--color-border-brand`: #b9d6d2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-grass-11`: #2a7e3b _(primitive)_
- `--color-grass-2`: #f5fbf5 _(primitive)_
- `--color-grass-6`: #b2ddb5 _(primitive)_
- `--color-green-2`: #f4fbf6 _(primitive)_
- `--color-green-6`: #adddc0 _(primitive)_
- `--color-red-2`: #fff7f7 _(primitive)_
- `--color-red-6`: #fdbdbe _(primitive)_
- `--color-yellow-2`: #fefbe9 _(primitive)_
- `--color-yellow-6`: #f3d673 _(primitive)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
