# Application needs and waits on

Permit · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracker/permits/cc1-cao/

![Application needs and waits on, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/application-needs-and-waits-on.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracker-permits-cc1-cao/claude/application-needs-and-waits-on.phone.png

The application checklist (the permit type's standard items plus custom ones), then the permits this one waits on and the permits that wait on it, each with its status.

## Key decisions

- Checking an item off stamps who and when; items can be edited, and custom ones removed.
- Waits on is edited in its own drawer; a plain note says the permit cannot be submitted until its unissued prerequisites are issued.

## Done when

- Removing every Waits on entry shows None and drops the blocked note, and the project's list stops flagging "Waiting on".

## Components

- `bcn-pprq` (spoke) · `src\components\bcn\BcnPermitPrerequisites.astro`
- `bcn-status-chip` (spoke) · `src\components\bcn\BcnActionTable.astro`
- `esa-button` (hub) · `packages\ecology\src\components\esa-badge.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages\ecology\src\components\esa-collapsible.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-pprq stack"
  data-gap="lg"
  data-bcn-permit-prereqs=""
  data-permit-id="cc1-cao"
  data-editable=""
>
  <section class="stack" data-gap="xs">
    <div class="repel" data-gap="sm">
      <div class="cluster" data-gap="sm">
        <h4 class="bcn-pprq__heading typography-label-lg-strong">Application requirements</h4>
        <span class="bcn-pprq__muted typography-body-md" data-req-count="">4 of 4 done</span>
      </div>
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-permit-edit="requirement"
        >
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
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg></span
          ><span class="esa-button__label">Add requirement</span>
        </button></span
      >
    </div>
    <p class="bcn-pprq__muted bcn-pprq__none typography-body-md" data-req-empty="" hidden="">
      None
    </p>
    <ul class="bcn-pprq__list stack" data-gap="sm" data-req-list="">
      <li class="bcn-pprq__req" data-done="">
        <esa-checkbox
          size="md"
          data-req-check="true"
          data-req-id="cc1-cao-r1"
          checked=""
        ></esa-checkbox
        ><span class="bcn-pprq__edit" data-req-edit=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Edit Critical areas report (wetland and stream delineation)"
              title="Edit requirement"
              data-permit-edit="requirement"
              data-req-id="cc1-cao-r1"
            >
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
                >
                  <path
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                  ></path>
                  <path d="m15 5 4 4"></path></svg
              ></span></button></span
        ></span>
        <div class="bcn-pprq__meta stack" data-gap="3xs">
          <span class="typography-body-sm bcn-pprq__muted" data-req-meta=""
            >Done Dec 15, 2025 by Grace Huang · Critical-areas-report.pdf</span
          ><span class="typography-body-sm bcn-pprq__muted" data-req-note="" hidden=""></span>
        </div>
      </li>
      <li class="bcn-pprq__req" data-done="">
        <esa-checkbox
          size="md"
          data-req-check="true"
          data-req-id="cc1-cao-r2"
          checked=""
        ></esa-checkbox
        ><span class="bcn-pprq__edit" data-req-edit=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Edit Mitigation plan"
              title="Edit requirement"
              data-permit-edit="requirement"
              data-req-id="cc1-cao-r2"
            >
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
                >
                  <path
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                  ></path>
                  <path d="m15 5 4 4"></path></svg
              ></span></button></span
        ></span>
        <div class="bcn-pprq__meta stack" data-gap="3xs">
          <span class="typography-body-sm bcn-pprq__muted" data-req-meta=""
            >Done Dec 29, 2025 by Grace Huang · Mitigation-plan.pdf</span
          ><span class="typography-body-sm bcn-pprq__muted" data-req-note="" hidden=""></span>
        </div>
      </li>
      <!-- …and 2 more like this (<li class="bcn-pprq__req">) -->
    </ul>
    <template data-req-tpl=""
      ><li class="bcn-pprq__req" data-astro-cid-4yoazefe="">
        <esa-checkbox size="md" data-req-check="true" data-astro-cid-4yoazefe="true"></esa-checkbox
        ><span class="bcn-pprq__edit" data-req-edit="" data-astro-cid-4yoazefe=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            data-astro-cid-ictiiiq6=""
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Edit requirement"
              title="Edit requirement"
              data-permit-edit="requirement"
              data-astro-cid-4yoazefe="true"
              data-astro-cid-ictiiiq6=""
            >
              <span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wgamdple=""
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
                  data-astro-cid-wgamdple=""
                >
                  <path
                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                  ></path>
                  <path d="m15 5 4 4"></path></svg
              ></span></button></span
        ></span>
        <div class="bcn-pprq__meta stack" data-gap="3xs" data-astro-cid-4yoazefe="">
          <span
            class="typography-body-sm bcn-pprq__muted"
            data-req-meta=""
            data-astro-cid-4yoazefe=""
          ></span
          ><span
            class="typography-body-sm bcn-pprq__muted"
            data-req-note=""
            hidden=""
            data-astro-cid-4yoazefe=""
          ></span>
        </div></li
    ></template>
  </section>
  <section class="stack" data-gap="xs" data-pprq-group="waits">
    <div class="repel" data-gap="sm">
      <h4 class="bcn-pprq__heading typography-label-lg-strong">Waits on</h4>
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-permit-edit="dependencies"
        >
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
            >
              <path
                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
              ></path>
              <path d="m15 5 4 4"></path></svg></span
          ><span class="esa-button__label">Edit</span>
        </button></span
      >
    </div>
    <p class="bcn-pprq__blocked typography-body-md" data-pprq-note="" hidden=""></p>
    <p class="bcn-pprq__muted bcn-pprq__none typography-body-md" data-pprq-none="" hidden="">
      None
    </p>
    <ul class="bcn-pprq__list stack" data-gap="sm" data-pprq-rows="">
      <li class="repel" data-gap="sm">
        <div class="stack" data-gap="3xs">
          <a
            class="bcn-pprq__link typography-label-md-strong"
            data-wait-name=""
            href="/beacon-design/prototypes/permit-tracker/permits/cc-sepa"
            >SEPA Threshold Determination</a
          ><span class="bcn-pprq__muted typography-body-sm" data-wait-scope="">Project-wide</span>
        </div>
        <span
          data-permit-status=""
          data-wait-status=""
          data-project-id="coal-creek-fish-passage"
          data-permit-id="cc-sepa"
          data-type-id="sepa"
          data-status-id="land-use-issued"
          data-category="Completed"
          ><span
            class="bcn-status-chip"
            data-status="NotStarted"
            style="--_chip: var(--bcn-status-completed)"
            ><span class="bcn-status-chip__dot"></span
            ><span class="bcn-status-chip__label">Issued</span></span
          ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
        >
      </li>
    </ul>
  </section>
  <section class="stack" data-gap="xs" data-pprq-group="needed">
    <div class="repel" data-gap="sm">
      <h4 class="bcn-pprq__heading typography-label-lg-strong">Needed by</h4>
    </div>
    <p class="bcn-pprq__blocked typography-body-md" data-pprq-note="" hidden=""></p>
    <p class="bcn-pprq__muted bcn-pprq__none typography-body-md" data-pprq-none="" hidden="">
      None
    </p>
    <ul class="bcn-pprq__list stack" data-gap="sm" data-pprq-rows="">
      <li class="repel" data-gap="sm">
        <div class="stack" data-gap="3xs">
          <a
            class="bcn-pprq__link typography-label-md-strong"
            href="/beacon-design/prototypes/permit-tracker/permits/cc1-grading"
            >Clearing and Grading Permit</a
          ><span class="bcn-pprq__muted typography-body-sm">SE 60th St culvert</span>
        </div>
        <span
          data-permit-status=""
          data-project-id="coal-creek-fish-passage"
          data-permit-id="cc1-grading"
          data-type-id="grading"
          data-status-id="land-use-preparing-application"
          data-category="InProgress"
          ><span
            class="bcn-status-chip"
            data-status="InProgress"
            style="--_chip: var(--bcn-status-in-progress)"
            ><span class="bcn-status-chip__dot"></span
            ><span class="bcn-status-chip__label">Preparing Application</span></span
          ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
        >
      </li>
    </ul>
  </section>
  <!-- One Waits on row, cloned when saved edits change the list (keeps scoped styles). --><template
    data-pprq-wait-tpl=""
    ><li class="repel" data-gap="sm" data-astro-cid-4yoazefe="">
      <div class="stack" data-gap="3xs" data-astro-cid-4yoazefe="">
        <a
          class="bcn-pprq__link typography-label-md-strong"
          data-wait-name=""
          data-astro-cid-4yoazefe=""
        ></a
        ><span
          class="bcn-pprq__muted typography-body-sm"
          data-wait-scope=""
          data-astro-cid-4yoazefe=""
        ></span>
      </div>
      <span data-permit-status="" data-wait-status="" data-astro-cid-4yoazefe=""
        ><span
          class="bcn-status-chip"
          data-status="NotStarted"
          style="--_chip: var(--st-NotStarted, var(--bcn-status-not-started))"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label"></span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      >
    </li></template
  >
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-label-lg-strong {
  font-family: var(--typography-label-lg-strong-font-family);
  font-size: var(--typography-label-lg-strong-font-size);
  font-weight: var(--typography-label-lg-strong-font-weight);
  line-height: var(--typography-label-lg-strong-line-height);
  letter-spacing: var(--typography-label-lg-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-pprq__heading,
.bcn-pprq__none,
.bcn-pprq__blocked {
  margin: 0;
}
.bcn-pprq__heading {
  color: var(--color-content-default);
}
.bcn-pprq__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-pprq__req {
  column-gap: var(--spacing-200);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  display: grid;
}
.bcn-pprq__meta {
  grid-column: 1;
  padding-inline-start: 1.75rem;
}
.bcn-pprq__edit {
  margin-block-start: calc(-1 * var(--spacing-100));
}
.bcn-pprq__meta [data-overdue] {
  color: var(--color-content-utility-warning);
}
.bcn-pprq [hidden] {
  display: none;
}
.bcn-pprq__muted {
  color: var(--color-content-default-secondary);
}
.bcn-pprq__blocked {
  color: var(--color-content-default);
}
.bcn-pprq__link {
  color: var(--color-content-link, var(--color-background-brand));
  text-decoration: none;
}
.bcn-pprq__link:hover {
  text-decoration: underline;
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
.esa-button__label {
  white-space: nowrap;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-label-lg-strong {
  font-family: var(--typography-label-lg-strong-font-family);
  font-size: var(--typography-label-lg-strong-font-size);
  font-weight: var(--typography-label-lg-strong-font-weight);
  line-height: var(--typography-label-lg-strong-line-height);
  letter-spacing: var(--typography-label-lg-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--gap` | `1.5rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-lg-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-lg-strong-font-size` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | semantic |
| `--typography-label-lg-strong-font-weight` | `550` | semantic |
| `--typography-label-lg-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-lg-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
