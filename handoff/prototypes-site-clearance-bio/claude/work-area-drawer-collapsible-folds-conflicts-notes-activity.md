# Work-area drawer — collapsible folds (conflicts / notes / activity)

The v2 demotions: ambient detail folded until asked for. Three EsaCollapsible rows carry live counts in their titles — Buffer conflicts (the observations overlapping this site, each opening the observation drawer), Notes (the verbatim field-biologist seed note + dated added notes), and Activity (the read-only derived change log for this site). Conflicts and Notes are shown only when they have content.

## Key decisions
- These are demoted BELOW the review history + comments because they are reference, not decision inputs — the drawer leads with "what is the status and why" and folds the supporting detail.
- Buffer conflicts is the "system detects, humans decide" evidence: it lists the observations whose buffers overlap this site (each row carries data-obs and opens the observation drawer). A non-empty conflicts list is exactly what escalates the site to provisional-block.
- Notes preserves the verbatim field note as a read-only SEED blockquote (never editable — it is the record) with dated added notes below; the "paste-the-biologist-email" flow adds to it in Edit mode.
- EsaCollapsible is used flush with an icon + count in the title (the lego's title span is updated live) — reusing the hub lego rather than a bespoke accordion.

## Gotchas
- Conflicts/Notes folds (#wa-conflicts-col / #wa-notes-col) are hidden when empty, so their presence is data-dependent — do not assume all three folds are always in the DOM.
- The Activity fold here and the Activity TAB feed are the same events for this site — one save must update both; keep them derived from one source.
- Conflict rows open the observation drawer via a delegated [data-obs] handler on #wa-dialog — the rows are inside a collapsible, so a click must expand-then-select in automation.

## Done when
- Three folds with live counts in their titles; Buffer conflicts and Notes appear only with content; a conflict row opens the observation drawer; the Activity fold matches this site's entries in the Activity tab; the seed note is read-only.

## Markup
```html
<div class="wa__more">
  <span class="wa__more-item" id="wa-conflicts-col">
    <details class="esa-collapsible esa-collapsible--flush">
      <summary class="esa-collapsible__summary">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
            ></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </span>
        <span class="esa-collapsible__title">Buffer conflicts (1)</span>
      </summary>
      <div class="esa-collapsible__body">
        <ul class="wa__conflicts" id="wa-conflicts">
          <li
            class="entry entry--card"
            data-obs="SWHA-2289-05182026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">SWHA-2289-05182026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Swainson's Hawk · 2,640 ft buffer</span>
              </p>
            </div>
            <span class="entry__meta">878 ft away · est. end Jul 24</span>
          </li>
        </ul>
      </div>
    </details>
  </span>
  <span class="wa__more-item" id="wa-notes-col">
    <details class="esa-collapsible esa-collapsible--flush">
      <summary class="esa-collapsible__summary">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
            <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
          </svg>
        </span>
        <span class="esa-collapsible__title">Notes (1)</span>
      </summary>
      <div class="esa-collapsible__body">
        <blockquote class="wa__note" id="wa-note">
          This was the site clearance visit that identified the SWHA nest on 5/18.
        </blockquote>
        <ul class="wa__notes-added" id="wa-notes-added"></ul>
      </div>
    </details>
  </span>
  <span class="wa__more-item">
    <details class="esa-collapsible esa-collapsible--flush">
      <summary class="esa-collapsible__summary">
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M12 7v5l4 2"></path>
          </svg>
        </span>
        <span class="esa-collapsible__title">Activity</span>
      </summary>
      <div class="esa-collapsible__body">
        <ul class="wa__activity" id="wa-activity">
          <li class="entry entry--empty">No changes yet — edits made here are logged.</li>
        </ul>
      </div>
    </details>
  </span>
</div>
```

## Styles
```css
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
.esa-collapsible {
  border: 1px solid var(--collapsible-border-color, var(--color-border, #e5e5e5));
  border-radius: var(--collapsible-radius, var(--radius-300, 0.5rem));
  background: var(--collapsible-bg, var(--color-surface, #fff));
}
.esa-collapsible--flush {
  border: none;
  border-radius: 0;
  background: transparent;
}
.esa-collapsible__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem)
    var(--collapsible-padding-x, var(--spacing-400, 1rem));
  font-size: var(--type-size-150, 0.9375rem);
  font-weight: var(--font-weight-semibold, 600);
  color: var(--collapsible-title-color, var(--color-text-primary, #171717));
  cursor: pointer;
  list-style: none;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-collapsible__summary:after {
  content: "";
  width: 8px;
  height: 8px;
  border-right: 2px solid var(--color-text-tertiary, #737373);
  border-bottom: 2px solid var(--color-text-tertiary, #737373);
  transform: rotate(-45deg);
  transition: transform 0.15s ease;
  margin-left: auto;
}
.esa-collapsible__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--collapsible-padding-x, var(--spacing-400, 1rem))
    var(--spacing-400, 1rem);
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
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
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
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
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
#wa-read > .wa-comments,
#wa-read > .wa__more {
  margin-top: var(--spacing-500);
  padding-top: var(--spacing-500);
  border-top: 1px solid var(--color-border);
}
.wa__more {
  display: flex;
  flex-direction: column;
}
.wa__more-item {
  display: block;
}
.wa__more-item[hidden] {
  display: none;
}
.wa__more-item + .wa__more-item {
  border-top: 1px solid var(--color-border-light);
}
.wa__more-item[hidden] + .wa__more-item {
  border-top: none;
}
.wa__conflicts,
.od__impact {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.entry {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
}
.entry--card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s ease,
    border-color 0.12s ease;
}
.entry__badge {
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-100);
  font-family: var(--font-mono, monospace);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}
.entry__badge--obs {
  color: var(--obs-color-strong);
  background: color-mix(in srgb, var(--obs-color) 12%, white);
}
.entry__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.entry__sep {
  color: var(--color-text-tertiary);
}
.entry__primary {
  color: var(--color-text-primary);
}
.entry__badge--wa {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 10%, white);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__meta {
  flex-shrink: 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
  text-align: right;
}
.entry__secondary {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.entry--up {
  padding: var(--spacing-200) 0;
  cursor: pointer;
  flex-wrap: wrap;
}
.entry--up .entry__meta {
  flex-basis: 100%;
  text-align: left;
}
.entry--up + .entry--up {
  border-top: 1px solid var(--color-border-light);
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-strong);
}
.wa__conflicts .entry__meta,
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--collapsible-bg`: #ffffff _(component)_
- `--collapsible-border-color`: #dcdcdc _(component)_
- `--collapsible-padding-x`: 1rem _(component)_
- `--collapsible-radius`: .5rem _(component)_
- `--collapsible-title-color`: #3d3d3d _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--grid-row-bg-hover`: #efefef _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--obs-color-strong`: #5b3f87 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
