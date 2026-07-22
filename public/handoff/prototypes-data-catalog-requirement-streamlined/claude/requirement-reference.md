# Requirement reference

The full requirement reference block (BcnRequirementReference): the source requirement text in serif, then a metadata grid — Resource Category / Type / Phase / Frequency / Milestone / Species / Season / Construction Activities / Responsible Party / Expected Evidence. It is the single source of truth for the merged record's reference data; the rail carries ONLY what this block does not, so there is zero duplication.

## Key decisions
- One reusable bcn-* component owns the whole reference read (text + metadata grid + source link) — the page composes it, it does not re-hand-roll a definition list.
- It carries the FULL conditional trio as first-class rows (Species / Season / Construction Activities) — the MM-BIO-2 nesting-bird survey is the record that exercises all three.
- The block's own footer "Edit Requirement" button is HIDDEN here (the page header owns Edit); its "View in Source Document" trigger ([data-bcn-source]) opens the shared source drawer.
- It sits on the page as a white card (surface white against the page background), not inside a dialog.

## Gotchas
- Do not render an Edit affordance inside this block on the detail page — the page header is the single edit entry point; the block's footer Edit is suppressed with `.bcn-action__main :global([data-bcn-edit]) { display: none }`.
- Rows with no value are hidden (data-field + hidden), not shown empty; keep that conditional so the trio collapses cleanly for requirements that lack a season or activity.

## Done when
- Serif requirement text over a metadata grid including the Species / Season / Construction Activities trio; no inline Edit button; "View in Source Document" opens the PDF drawer.

## Markup
```html
<article class="bcn-reqref">
  <p class="bcn-reqref__text" data-bcn-text="">
    Prior to ground-disturbing activities, a qualified biologist shall complete
    pre-construction survey for nesting raptors and other migratory birds during nesting
    season within the project area and submit findings to the City.
  </p>
  <dl class="bcn-reqref__meta">
    <div class="bcn-reqref__row" data-field="resourceCategory">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"
            ></path>
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
          </svg>
        </span>
        Resource Category
      </dt>
      <dd class="bcn-reqref__val">Biological Resources</dd>
    </div>
    <div class="bcn-reqref__row" data-field="type">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
            ></path>
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </svg>
        </span>
        Type
      </dt>
      <dd class="bcn-reqref__val">Survey</dd>
    </div>
    <div class="bcn-reqref__row" data-field="phase">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        </span>
        Phase
      </dt>
      <dd class="bcn-reqref__val">Pre-Construction</dd>
    </div>
    <div class="bcn-reqref__row" data-field="frequency">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m17 2 4 4-4 4"></path>
            <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
            <path d="m7 22-4-4 4-4"></path>
            <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
          </svg>
        </span>
        Frequency
      </dt>
      <dd class="bcn-reqref__val">One-time</dd>
    </div>
    <div class="bcn-reqref__row" data-field="milestone">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" x2="4" y1="22" y2="15"></line>
          </svg>
        </span>
        Milestone
      </dt>
      <dd class="bcn-reqref__val">Building Permit</dd>
    </div>
    <div class="bcn-reqref__row" data-field="species">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M16 7h.01"></path>
            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
            <path d="m20 7 2 .5-2 .5"></path>
            <path d="M10 18v3"></path>
            <path d="M14 17.75V21"></path>
            <path d="M7 18a6 6 0 0 0 3.84-10.61"></path>
          </svg>
        </span>
        Species
      </dt>
      <dd class="bcn-reqref__val">Nesting raptors, Migratory birds</dd>
    </div>
    <div class="bcn-reqref__row" data-field="season">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
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
            <path d="M2 21c0-3 1.85-5.36 5.08-6"></path>
          </svg>
        </span>
        Season
      </dt>
      <dd class="bcn-reqref__val">Feb 1 – Aug 31</dd>
    </div>
    <div class="bcn-reqref__row" data-field="constructionActivities">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"
            ></path>
            <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
            <path d="M4 15v-3a6 6 0 0 1 6-6"></path>
            <path d="M14 6a6 6 0 0 1 6 6v3"></path>
          </svg>
        </span>
        Construction activity
      </dt>
      <dd class="bcn-reqref__val">Ground disturbance, Vegetation removal</dd>
    </div>
    <div class="bcn-reqref__row" data-field="responsibleParty">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </span>
        Responsible party
      </dt>
      <dd class="bcn-reqref__val">Environmental Lead</dd>
    </div>
    <div class="bcn-reqref__row" data-field="expectedEvidence">
      <dt class="bcn-reqref__key">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
            ></path>
          </svg>
        </span>
        Expected evidence
      </dt>
      <dd class="bcn-reqref__val">Survey report (PDF)</dd>
    </div>
  </dl>
  <footer class="bcn-reqref__footer">
    <!-- Host wires this trigger to its own source-document drawer. -->
    <span class="bcn-reqref__action" data-bcn-source="">
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm"
      >
        <button class="esa-button__native" type="button">
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </span>
          <span class="esa-button__label"> View in Source Document </span>
        </button>
      </span>
    </span>
    <span
      class="bcn-reqref__action"
      data-bcn-edit=""
      data-href="#data-catalog/requirements"
    >
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-fill esa-button--sm"
      >
        <button class="esa-button__native" type="button">
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
                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
              ></path>
              <path d="m15 5 4 4"></path>
            </svg>
          </span>
          <span class="esa-button__label">
            Edit Requirement<span class="bcn-reqref__ext"
              ><span class="esa-icon esa-icon--xs" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path>
                </svg>
              </span>
            </span>
          </span>
        </button>
      </span>
    </span>
  </footer>
</article>
```

## Styles
```css
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
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
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
.bcn-reqref {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.bcn-reqref__text {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-primary);
}
.bcn-reqref__meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 var(--spacing-600);
  margin: 0;
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border);
}
.bcn-reqref__row {
  display: grid;
  grid-template-columns: 178px 1fr;
  align-items: start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) 0;
  border-bottom: 1px solid var(--color-border-light);
}
.bcn-reqref__key {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  margin: 0;
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__val {
  margin: 0;
  font-size: var(--type-size-100);
  color: var(--color-text-primary);
  line-height: 1.5;
}
.bcn-reqref__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-100);
  flex-wrap: wrap;
  padding-top: var(--spacing-200);
}
.bcn-reqref__action {
  display: inline-flex;
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-secondary);
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
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
.bcn-action__main .bcn-reqref {
  background: var(--color-surface);
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
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
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
```

## Tokens
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
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
- `--radius-300`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
