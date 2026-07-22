# Observation card (parent → commitments)

BcnObservationCard — the heart of the reframe. Each card's parent is ONE observation (a Swainson's-hawk nest at DH-039, or a raised compliance concern); its children are the RELEVANT commitments to review. Collapsed it is a scannable summary row; expanded inline it is the dossier (the real field note → the relevant-commitment rows).

## Key decisions
- Native <details>/<summary>, NOT esa-collapsible: the lego only accepts a string title and cannot host this rich summary trigger (species code badge + species name + short id + observed/raised meta + status chip). Inline disclosure (not navigation) keeps you in the list.
- Two variants keyed off find.kind — an OBSERVATION (mono species-code badge + species name) vs a CONCERN (danger triangle + concern title). The date verb flips with it ("observed" vs "raised").
- Compliance status is judged at the OBSERVATION level — exactly one BcnStatusChip on the card — never per commitment. The child rows are "the measures that apply," not individually statused.
- The "~Nd to fledge" summary pill and the BcnFledgingCountdown body panel are HIDDEN (commented out in BcnObservationCard.astro, not deleted) pending sign-off on the hatch/fledge estimate data — re-enable both blocks (plus the import and the hasFledge const) together.

## Gotchas
- The summary is a rich flex row with a custom chevron — suppress the native disclosure marker (list-style: none + ::-webkit-details-marker) or you get a double triangle.
- The dossier body lives in the DOM even when collapsed; the Show filter hides the whole <details>, it does not depend on open state.
- When re-enabling fledging, restore all FOUR commented units together: the import, the hasFledge const, the summary pill, and the body panel — they are commented as one feature.

## Done when
- Collapsed, the card shows species/concern + id + meta + a single status chip; clicking it expands inline to the field note + relevant-commitment rows; concern cards show the danger marker and "raised"; no fledging pill or panel renders while hidden.

## Markup
```html
<details
  class="bcn-obs"
  data-needs-action="true"
  data-species="Swainson’s Hawk"
  data-date="2026-06-16"
  open=""
>
  <summary class="bcn-obs__summary" data-kind="concern">
    <span class="bcn-obs__chev" aria-hidden="true"
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
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-obs__concern-icon" aria-label="Compliance concern"
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
            d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
          ></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </span>
    </span>
    <span class="bcn-obs__name">Staging within the SWHA buffer before clearance</span>
    <span class="bcn-obs__id">CC-1042</span>
    <span class="bcn-obs__meta">raised 2026-06-16 · DCTR2-DH-010</span>
    <span class="bcn-obs__spacer"></span>
    <span
      class="bcn-status-chip"
      data-status="open"
      style="--_chip: var(--st-open, #ef4444)"
    >
      <span class="bcn-status-chip__dot"></span>
      <span class="bcn-status-chip__label">Open</span>
    </span>
  </summary>
  <div class="bcn-obs__body">
    <p class="bcn-obs__desc">
      ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns yet.
      Geotechnical staging equipment was observed inside the Swainson’s hawk
      no-disturbance buffer at DCTR2-DH-010 before clearance was issued. The designated
      biologist halted staging and notified the construction lead.
      <a class="bcn-obs__detail-link" href="#concern/CC-1042">View Concern</a>
    </p>
    <section class="bcn-obs__section">
      <h4 class="bcn-obs__h">Relevant commitments</h4>
      <div class="bcn-obs__rows">
        <div
          class="bcn-crow"
          data-code="BIO-39"
          role="button"
          tabindex="0"
          aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
        >
          <span class="bcn-crow__code">BIO-39</span>
          <span class="bcn-crow__title"
            >Conduct Preconstruction Surveys and Implement Protective Measures to Minimize
            Disturbance of Swainson's Hawk (FEIR)</span
          >
          <span class="bcn-crow__open" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </span>
        </div>
      </div>
    </section>
  </div>
</details>
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
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-obs {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  background: var(--color-surface);
  overflow: hidden;
}
.bcn-obs__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-300) var(--spacing-400);
  cursor: pointer;
  list-style: none;
}
.bcn-obs__chev {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-obs__concern-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-danger);
}
.bcn-obs__name {
  flex-shrink: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-obs__id {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
}
.bcn-obs__meta {
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-obs__spacer {
  flex: 1 1 var(--spacing-300);
}
.bcn-obs__badge {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.bcn-obs[hidden] {
  display: none;
}
.bcn-obs__summary:hover {
  background: var(--color-surface-sunken);
}
.bcn-obs[open] > .bcn-obs__summary .bcn-obs__chev {
  transform: rotate(90deg);
}
.bcn-obs__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border-top: 1px solid var(--color-border-light);
}
.bcn-obs__desc {
  margin: 0;
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-secondary);
}
.bcn-obs__detail-link {
  color: var(--color-text-link);
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}
.bcn-obs__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-obs__h {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-obs__rows {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
}
.bcn-crow {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.bcn-crow__code {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.bcn-crow__title {
  flex: 1;
  min-width: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-crow__open {
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-text-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
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
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
