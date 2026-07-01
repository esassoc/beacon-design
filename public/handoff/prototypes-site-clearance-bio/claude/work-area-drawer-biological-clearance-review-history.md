# Work-area drawer — biological clearance review history

The heart of the drawer: the full biological review history (reverse-chron node rail; the latest COMPLETED review sets the site's status) with an inline Add/Edit-review form. With biology the ONLY gate, this lives directly in the work-area drawer — no 2×2 discipline board, no stacked child drawer (both removed from the cross-discipline parent; one gate makes the extra click redundant).

## Key decisions
- The history is the source of truth for status: the newest review WITH an outcome determines the derived status; an outcome-less review is a SCHEDULED visit ("Scheduled — no outcome yet") that shows in the history + the timeline's Clearance-visits lane but does not yet set a status.
- Add/Edit is ONE inline form (#dd-form) — it renders above the history when adding and is swapped into a node when editing (the pencil affordance) — so a review is created and corrected in place, never in a separate modal.
- A blocking outcome reveals a "Blocked until" date-picker (#dd-until-wrap) — the horizon is captured ON the review that caused it, which is what blockedUntil() reads back for the dates band and the timeline.
- Stipulations are an esa-input-tag (chips), reviewer + note are plain fields — the review record mirrors what a biologist writes on a clearance form.

## Gotchas
- This is the bio-scoping seam: the underlying fixture is cross-discipline, so the history/form are bound to the single BIO dimension (currentReview/disciplineReviews always passed BIO). Non-bio reviews still in wa.reviews must be filtered out, never shown here.
- Status is derived from the LATEST completed review, so editing an OLDER review must not silently change status unless it becomes the latest completed one — recompute after every save.
- "0 reviews" is a real empty state (Add review button + empty rail), not an error — a work area with no biological review yet is "not-surveyed".

## Done when
- History lists reviews newest-first; the latest completed review sets the header status; an outcome-less review reads "Scheduled"; Add renders the inline form above the rail and Edit swaps it into the node; a blocking outcome captures a Blocked-until date that feeds the dates band + timeline.

## Markup
```html
<section class="bioclear">
  <h3 class="wa__section">
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
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        ></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    </span>
    Biological clearance
    <span class="bioclear__add">
      <span class="dd__count" id="dd-count">2 reviews</span>
      <span id="dd-add"
        ><span
          class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
        >
          <button class="esa-button__native" type="button">
            <span class="esa-button__label"> Add review </span>
          </button>
        </span>
      </span>
    </span>
  </h3>
  <!-- Add/Edit review form — inline above the history when adding; swapped
             into a history node when editing (the pencil affordance). The
             "Scheduled — no outcome yet" choice saves an outcome-less review. -->
  <!-- Review history — reverse-chron node rail (JS-injected) -->
  <div class="dd__form" id="dd-form" hidden="">
    <esa-select id="dd-kind" label="Kind" size="sm"></esa-select>
    <div class="we__row">
      <esa-date-picker id="dd-date" label="Date" size="sm"></esa-date-picker>
      <esa-select id="dd-outcome" label="Outcome" size="sm"></esa-select>
    </div>
    <span id="dd-until-wrap" hidden="">
      <esa-date-picker id="dd-until" label="Blocked until" size="sm"></esa-date-picker>
    </span>
    <esa-text-field
      id="dd-reviewer"
      label="Reviewer"
      placeholder="Name (org)"
      size="sm"
    ></esa-text-field>
    <esa-textarea
      id="dd-note"
      label="Note"
      rows="2"
      auto-resize=""
      size="sm"
    ></esa-textarea>
    <esa-input-tag
      id="dd-stips"
      label="Stipulations"
      placeholder="Add stipulation…"
      tags-below="true"
      size="sm"
    ></esa-input-tag>
    <div class="dd__formactions">
      <span id="dd-cancel"
        ><span
          class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
        >
          <button class="esa-button__native" type="button">
            <span class="esa-button__label"> Cancel </span>
          </button>
        </span>
      </span>
      <span id="dd-save"
        ><span
          class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
        >
          <button class="esa-button__native" type="button">
            <span class="esa-button__label"> Save review </span>
          </button>
        </span>
      </span>
    </div>
  </div>
  <ol class="revs" id="dd-history">
    <li class="rev">
      <span class="rev__dot rev__dot--scheduled"></span>
      <div class="rev__main">
        <p class="rev__head">
          Re-survey<span class="rev__when">scheduled Sep 2, 2026</span
          ><span class="rev__edit"
            ><button
              class="esa-icon-button esa-icon-button--sm"
              type="button"
              aria-label="Edit review"
              title="Edit review"
            >
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
            </button>
          </span>
        </p>
        <div class="rev__chiprow">
          <span class="gate__chipwrap"
            ><span
              class="bcn-status-chip"
              data-status="survey-scheduled"
              style="--_chip: var(--st-survey-scheduled)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Survey Scheduled</span>
            </span>
          </span>
        </div>
        <p class="rev__note">
          Post-fledge confirmation visit — SWHA est. fledge Jul 24, 2026.
        </p>
      </div>
    </li>
    <li class="rev">
      <span
        class="rev__dot"
        style="background: var(--st-blocked); border-color: var(--st-blocked)"
      ></span>
      <div class="rev__main">
        <p class="rev__head">
          Clearance survey<span class="rev__when">May 18, 2026 · C. Anderson (ESA)</span
          ><span class="rev__edit"
            ><button
              class="esa-icon-button esa-icon-button--sm"
              type="button"
              aria-label="Edit review"
              title="Edit review"
            >
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
            </button>
          </span>
        </p>
        <div class="rev__chiprow">
          <span class="gate__chipwrap"
            ><span
              class="bcn-status-chip"
              data-status="blocked"
              style="--_chip: var(--st-blocked)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Blocked</span>
            </span> </span
          ><span class="rev__until">until Jul 24, 2026</span
          ><span class="rev__current">Sets current status</span>
        </div>
        <p class="rev__note">
          Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during
          the site clearance visit.
        </p>
      </div>
    </li>
  </ol>
</section>
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
#wa-read > .bioclear {
  padding-top: var(--spacing-500);
}
.wa__section {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.bioclear__add {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
}
.dd__count {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.dd__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.dd__form[hidden],
#dd-until-wrap[hidden] {
  display: none;
}
.revs {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.wa__footer-start .esa-button__label {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.rev {
  position: relative;
  display: grid;
  grid-template-columns: 16px 1fr;
  column-gap: var(--spacing-250);
  padding-bottom: var(--spacing-400);
}
.rev:not(:last-child):before {
  content: "";
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: 2px;
  width: 2px;
  background: var(--color-border);
}
.rev__dot {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  margin-top: 2px;
  z-index: 1;
  background: var(--color-surface);
  border: 2px solid var(--color-border-strong);
  box-sizing: border-box;
}
.rev__dot--scheduled {
  background: var(--color-surface);
  border-color: var(--st-survey-scheduled);
}
.rev__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  min-width: 0;
}
.rev__head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-200);
  margin: 0;
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.rev__when {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.rev__edit {
  margin-left: auto;
}
.rev__chiprow {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-200);
}
.rev__note {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: var(--color-text-secondary);
}
.rev:last-child {
  padding-bottom: 0;
}
.rev__until {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}
.rev__current {
  display: inline-flex;
  align-items: center;
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-primary) 30%, transparent);
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  white-space: nowrap;
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
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #43608a);
  --_accent-hover: var(--color-primary-hover, #39506f);
  --_on: var(--color-text-inverse, #ffffff);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
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
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-survey-scheduled`: #74add1 _(component)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
