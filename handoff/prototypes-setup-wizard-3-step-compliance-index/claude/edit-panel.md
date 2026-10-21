# Edit panel

Step 3: Compliance Index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/compliance-index/

A draft's edit form in the side panel, as develop's two edit dialogs carry it. The header names it (Edit obligation, or the action's name) with its status badge. An obligation: Title, Class, Audience, Applies when, Monitor signs (type one and press Enter), then its Sources (each requirement's commitment badge and name, and the words it rests on) and Also filed in. An action, in three tabs: Details (Name, Type, Responsible party, Scope, Action text), Timing (Frequency; one time: deadline milestone, offset, period and direction; recurring: every N periods between a start and an end milestone; as needed: the event that triggers it) and Evidence of compliance (Expected evidence), then its Sources. The footer: Approve and Discard (Restore on a discarded draft) at the left; Save and Cancel at the right.

## Key decisions

- The review's verdicts live in the panel because the row has no record of its own. In develop the subcategory pane holds them; the edit dialog in index mode has only Save and Cancel.
- Approve saves the form first, so setting a scope and approving is one press.
- Sources are read only: what a draft rests on changes only by Merge.

## Done when

- Opening Take Contact Representative Notice shows Reporting, DWR, Project scope and one source, EC-1.

## Components

- `bcn-sw3ee` (spoke) · `src/components/bcn/BcnSw3EntryEdit.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-input-tag` (hub) · `packages/ecology/src/components/esa-input-tag.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<esa-side-dialog heading="Edit" size="md" data-sw3-entry-edit="true" position="right"
  ><div slot="header" class="bcn-sw3ee__head">
    <h2 class="bcn-sw3ee__title typography-title" data-ee-heading=""></h2>
    <span data-ee-status="draft"
      ><span class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
        ><span class="esa-badge__text">Draft</span></span
      ></span
    ><span data-ee-status="approved"
      ><span class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
        ><span class="esa-badge__text">Approved</span></span
      ></span
    ><span data-ee-status="discarded"
      ><span class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
        ><span class="esa-badge__text">Discarded</span></span
      ></span
    >
  </div>
  <form class="bcn-sw3ee" data-ee-form="" id="sw3-ee-form">
    <p class="bcn-sw3ee__block" data-ee-block="" hidden=""></p>
    <div class="bcn-sw3ee__fields" data-ob="">
      <esa-text-field
        label="Title"
        size="sm"
        required=""
        maxlength="510"
        data-ee-title="true"
      ></esa-text-field
      ><esa-button-toggle
        label="Class"
        size="sm"
        data-ee-class="true"
        data-options='[{"value":"Adhere","label":"Adhere"},{"value":"Monitor","label":"Monitor"},{"value":"Notify","label":"Notify"},{"value":"Roster","label":"Roster"}]'
      ></esa-button-toggle
      ><esa-button-toggle
        label="Audience"
        size="sm"
        data-ee-audience="true"
        data-options='[{"value":"Crews","label":"Crews"},{"value":"Monitors","label":"Monitors"},{"value":"Compliance staff","label":"Compliance staff"}]'
      ></esa-button-toggle
      ><esa-textarea
        label="Applies when"
        size="sm"
        rows="2"
        auto-resize=""
        data-ee-trigger="true"
      ></esa-textarea
      ><esa-input-tag
        label="Monitor signs"
        size="sm"
        tags-below="true"
        hint="Type one and press Enter."
        placeholder="Add a sign"
        data-ee-signs="true"
      ></esa-input-tag>
    </div>
    <esa-tab-layout
      size="sm"
      data-ac="true"
      data-ee-tabs="true"
      variant="underline"
      appearance="underline"
      ><div slot="panel-0" class="bcn-sw3ee__fields">
        <esa-text-field label="Name" size="sm" required="" data-ee-name="true"></esa-text-field
        ><esa-select
          label="Type"
          size="sm"
          data-ee-type="true"
          data-options='[{"value":"Analysis","label":"Analysis"},{"value":"Approval &amp; Consultation","label":"Approval &amp; Consultation"},{"value":… [505 characters]'
        ></esa-select
        ><esa-text-field label="Responsible party" size="sm" data-ee-party="true"></esa-text-field
        ><esa-button-toggle
          label="Scope"
          size="sm"
          data-ee-scope="true"
          data-options='[{"value":"Project","label":"Project"},{"value":"Component","label":"Component"}]'
        ></esa-button-toggle
        ><esa-textarea
          label="Action text"
          size="sm"
          rows="4"
          auto-resize=""
          data-ee-text="true"
        ></esa-textarea>
      </div>
      <div slot="panel-1" class="bcn-sw3ee__fields">
        <esa-select
          label="Frequency"
          size="sm"
          data-ee-frequency="true"
          data-options='[{"value":"Onetime","label":"One time"},{"value":"Recurring","label":"Recurring"},{"value":"AsNeeded","label":"As needed"}]'
        ></esa-select>
        <div class="bcn-sw3ee__fields" data-ee-when="Onetime">
          <esa-select label="Deadline milestone" size="sm" data-ee-milestone="true"></esa-select>
          <div class="bcn-sw3ee__row">
            <esa-text-field
              label="Offset"
              size="sm"
              type="number"
              min="0"
              data-ee-offset="true"
            ></esa-text-field
            ><esa-select
              label="Period"
              size="sm"
              data-ee-unit="true"
              data-options='[{"value":"Days","label":"Days"},{"value":"Weeks","label":"Weeks"},{"value":"Months","label":"Months"},{"value":"Years","label":"Years"}]'
            ></esa-select
            ><esa-select
              label="Direction"
              size="sm"
              data-ee-direction="true"
              data-options='[{"value":"Before","label":"Before"},{"value":"After","label":"After"}]'
            ></esa-select>
          </div>
        </div>
        <div class="bcn-sw3ee__fields" data-ee-when="Recurring">
          <div class="bcn-sw3ee__row">
            <esa-text-field
              label="Every"
              size="sm"
              type="number"
              min="1"
              data-ee-every="true"
            ></esa-text-field
            ><esa-select
              label="Period"
              size="sm"
              data-ee-every-unit="true"
              data-options='[{"value":"Days","label":"Days"},{"value":"Weeks","label":"Weeks"},{"value":"Months","label":"Months"},{"value":"Years","label":"Years"}]'
            ></esa-select>
          </div>
          <esa-select label="Start milestone" size="sm" data-ee-from="true"></esa-select
          ><esa-select label="End milestone" size="sm" data-ee-until="true"></esa-select>
        </div>
        <div class="bcn-sw3ee__fields" data-ee-when="AsNeeded">
          <esa-textarea
            label="Event trigger"
            size="sm"
            rows="2"
            auto-resize=""
            data-ee-event="true"
          ></esa-textarea>
        </div>
      </div>
      <div slot="panel-2" class="bcn-sw3ee__fields">
        <esa-textarea
          label="Expected evidence of compliance"
          size="sm"
          rows="4"
          auto-resize=""
          data-ee-evidence="true"
        ></esa-textarea></div
    ></esa-tab-layout>
    <section class="bcn-sw3ee__section" aria-labelledby="sw3-ee-sources">
      <h3 class="bcn-sw3ee__h" id="sw3-ee-sources" data-ee-sources-h="">Sources</h3>
      <ul class="bcn-sw3ee__sources" data-ee-sources=""></ul>
    </section>
    <section class="bcn-sw3ee__section" aria-labelledby="sw3-ee-filed" data-ob="">
      <h3 class="bcn-sw3ee__h" id="sw3-ee-filed">Also filed in</h3>
      <ul class="bcn-sw3ee__filed" data-ee-filed=""></ul>
    </section>
  </form>
  <template data-ee-tpl="source"
    ><li class="bcn-sw3ee__source" data-astro-cid-54wouxcj="">
      <div class="bcn-sw3ee__source-head" data-astro-cid-54wouxcj="">
        <span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""></span
        ><span data-ee-req="" data-astro-cid-54wouxcj=""></span>
      </div>
      <blockquote
        class="bcn-sw3ee__excerpt"
        data-ee-excerpt=""
        data-astro-cid-54wouxcj=""
      ></blockquote></li
  ></template>
  <div slot="footer" class="bcn-sw3ee__foot">
    <span data-ee-approve=""
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button class="esa-button__native typography-microcopy-xs" type="button">
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path></svg></span
          ><span class="esa-button__label">Approve</span>
        </button></span
      ></span
    ><span data-ee-discard=""
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button class="esa-button__native typography-microcopy-xs" type="button">
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg></span
          ><span class="esa-button__label">Discard</span>
        </button></span
      ></span
    ><span data-ee-restore=""
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button class="esa-button__native typography-microcopy-xs" type="button">
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
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path></svg></span
          ><span class="esa-button__label">Restore</span>
        </button></span
      ></span
    ><span class="bcn-sw3ee__main"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="submit"
          form="sw3-ee-form"
        >
          <span class="esa-button__label">Save</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ee-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    >
  </div></esa-side-dialog
>
```

## Styles

```css
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
@container (width<=640px) {
  .bcn-sw3c__group [data-c-tool] .esa-button__label {
    display: none;
  }
}
@container (width<=540px) {
  .bcn-sw3c__group [data-c-pages] .esa-button__label,
  .bcn-sw3c__rule {
    display: none;
  }
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
@container (width<=720px) {
  .bcn-sw3ip__toolkeys :is([data-ip-merge], [data-ip-discard-all]) .esa-button__label {
    display: none;
  }
}
.bcn-sw3ee {
  gap: var(--spacing-500);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-sw3ee [hidden],
.bcn-sw3ee__foot [hidden],
.bcn-sw3ee__head [hidden] {
  display: none !important;
}
.bcn-sw3ee__head {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-sw3ee__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  margin: 0;
  overflow: hidden;
}
.bcn-sw3ee__head > span {
  flex: none;
  line-height: 0;
}
.bcn-sw3ee__fields {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
[data-ee-tabs] .bcn-sw3ee__fields[slot] {
  padding-top: var(--spacing-400);
}
.bcn-sw3ee__row {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fit, minmax(6.5rem, 1fr));
  display: grid;
}
.bcn-sw3ee__block {
  color: var(--color-content-warning);
  margin: 0;
  font-weight: 500;
}
.bcn-sw3ee__section {
  gap: var(--spacing-200);
  padding-top: var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ee__h {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-sw3ee__sources,
.bcn-sw3ee__filed {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3ee__filed {
  gap: var(--spacing-100);
}
.bcn-sw3ee__foot {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-sw3ee__main {
  gap: var(--spacing-200);
  margin-left: auto;
  display: flex;
}
.bcn-sw3ee__foot button:disabled {
  opacity: 0.38;
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
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-console-fg` | `#ffffffed` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-success-muted` | `#e6f6eb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-utility-success` | `#adddc0` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--color-content-warning` | `#ab6400` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
| `--typography-title-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-font-weight` | `500` | semantic |
| `--typography-title-letter-spacing` | `.01em` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
