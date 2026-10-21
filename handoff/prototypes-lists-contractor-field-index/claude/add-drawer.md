# Add drawer

Custom Compliance Index list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/contractor-field-index/

![Add drawer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/add-drawer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/add-drawer.phone.png

Put the Compliance Index's items back on this version: every action and obligation the version does not hold, filed where the canonical index files them (category, subcategory, then actions before obligations, A–Z). The obligation list's Add drawer (bcn-list-add-obligations), over the index instead of the registry.

## Key decisions

- Candidates are the items this version removed plus everything in the canonical subcategories it draws on nowhere. Never an item the index does not hold: a version only arranges the index.
- Search by title, Phase and Species filters, every category closed on open, a Selected count, Add to list disabled until something is ticked. Save-left order: Add to list, then Cancel.
- Where an added item lands: the version subcategory that draws on its canonical subcategory. Where none does, the version gains that canonical subcategory under its canonical name (inside the version's category of the same name, else a new category of the canonical name, at the end). The person can then move or rename it.
- The added card is the item's card on the canonical index, in the index's wording; the version can retitle it after.
- Prod: adding a removed item deletes its ComplianceIndexListItemExclusion. Adding from a subcategory the version left out adds that ComplianceIndexListSubcategory (drawing on the canonical one) and its category if needed.

## Gotchas

- An item taken off during the session is not offered again until the page reloads, the same as the obligation drawer.

## Done when

- The drawer never lists an item the version already holds.
- Adding an item the version removed puts it back in its old subcategory and moves every count by one.
- Adding an item from a canonical subcategory the version left out brings in that subcategory under its canonical name, with the item.

## Components

- `bcn-laf` (spoke) · `src/components/bcn/BcnListAddFilters.astro`
- `bcn-lao` (spoke) · `src/components/bcn/list-add.ts`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_65 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  id="bcn-lai"
  heading="Add items"
  position="right"
  show-close-button="true"
  style="--_width: min(680px, 94vw); --z-modal: 1300; --z-modal-backdrop: 1250"
  size="md"
  open=""
  ><div class="bcn-lao">
    <esa-text-field
      size="sm"
      name="lai-search"
      aria-label="Search the Compliance Index"
      placeholder="Search by title"
    ></esa-text-field>
    <div class="bcn-laf" data-add-filters="">
      <div
        class="esa-filter-container typography-label-md"
        style="
          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
        "
      >
        <esa-filter-dropdown
          name="phase"
          label="Phase"
          placeholder="Search phase"
          size="sm"
          multiple=""
          options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"},{"value":"Post-Construction","label":"Post-Construction"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          name="species"
          label="Species"
          placeholder="Search species"
          size="sm"
          multiple=""
          options='[{"value":"black bass","label":"Black bass"},{"value":"bullfrogs","label":"Bullfrogs"},{"value":"california tiger salama… [961 characters]'
        ></esa-filter-dropdown
        ><span class="bcn-laf__clear" data-add-filters-clear="" hidden=""
          ><button
            class="esa-filter-clear-button typography-microcopy-sm"
            type="button"
            data-esa-filter-clear=""
            aria-label="Clear all filters"
          >
            <svg
              class="esa-filter-clear-button__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
              <path d="m22 3-5 5"></path>
              <path d="m17 3 5 5"></path></svg
            ><span class="esa-filter-clear-button__label">Clear all</span>
          </button></span
        >
      </div>
    </div>
    <p class="bcn-lao__nomatch" data-lai-nomatch="" hidden="">No items match.</p>
    <div class="bcn-lao__tree" data-lai-tree="">
      <details class="bcn-lao__cat" data-lai-cat="agency-reporting-and-approvals">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Agency reporting and approvals</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="43 items available">43</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-agency-approvals"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Agency approvals</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="22 items available">22</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HT"
                data-title="Calculate Phase Security Amount Before Phase Approval"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 13"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Calculate Phase Security Amount Before Phase Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Calculate Phase Security Amount Before Phase Approval"
                  >Calculate Phase Security Amount Before Phase Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZR"
                data-title="Consult CDFW on Federal Biological Opinions"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 4"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Consult CDFW on Federal Biological Opinions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Consult CDFW on Federal Biological Opinions"
                  >Consult CDFW on Federal Biological Opinions</span
                >
              </li>
              <!-- …and 20 more like this (<li class="bcn-lao__opt">) -->
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-non-compliance-reporting"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Non-compliance reporting</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6P"
                data-title="Notify CDFW of Inability to Comply with the ITP"
                data-land="agency-reporting-and-approvals-non-compliance-reporting"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of Inability to Comply with the ITP"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of Inability to Comply with the ITP"
                  >Notify CDFW of Inability to Comply with the ITP</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6N"
                data-title="Report ITP Non-Compliance to CDFW"
                data-land="agency-reporting-and-approvals-non-compliance-reporting"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report ITP Non-Compliance to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report ITP Non-Compliance to CDFW"
                  >Report ITP Non-Compliance to CDFW</span
                >
              </li>
            </ul>
          </details>
          <!-- …and 4 more like this (<details class="bcn-lao__sub">) -->
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="amphibians-and-reptiles">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Amphibians and reptiles</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="31 items available">31</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="amphibians-and-reptiles-amphibians">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Amphibians</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="31 items available">31</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR01862"
                data-title="Conduct and Report Annual CTS Surveys"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct and Report Annual CTS Surveys"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct and Report Annual CTS Surveys"
                  >Conduct and Report Annual CTS Surveys</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR01861"
                data-title="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-type="Survey"
                data-f-frequency="AsNeeded"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                  >Conduct CTS Walking Clearance Survey Before Ground Disturbance</span
                >
              </li>
              <!-- …and 29 more like this (<li class="bcn-lao__opt">) -->
            </ul>
          </details>
        </div>
      </details>
      <!-- …and 12 more like this (<details class="bcn-lao__cat">) -->
    </div>
  </div>
  <span slot="footer" class="bcn-lao__foot"
    ><span class="bcn-lao__selected">Selected: <span data-lai-n="">0</span></span
    ><span class="bcn-lao__foot-right"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--disabled"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lai-add="true"
          disabled=""
        >
          <span class="esa-button__label">Add to list</span>
        </button></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lai-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ></span
  ></esa-side-dialog
>
```

## Styles

```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-laf__clear[hidden] {
  display: none;
}
.bcn-lao {
  gap: var(--spacing-300);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__nomatch {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-lao__tree {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-lao__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
}
.bcn-lao__subs {
  flex-direction: column;
  display: flex;
}
.bcn-lao__sub + .bcn-lao__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-lao__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-200);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-lao__row::-webkit-details-marker {
  display: none;
}
.bcn-lao__row:hover {
  background: var(--color-background-default);
}
.bcn-lao__row--cat {
  font-weight: 600;
}
.bcn-lao__row--sub {
  padding-left: calc(var(--spacing-200) + 22px);
}
.bcn-lao__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
}
.bcn-lao__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-lao__row .bcn-lao__chevron {
  transform: rotate(90deg);
}
.bcn-lao__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-lao__opts {
  padding: var(--spacing-150) var(--spacing-200) var(--spacing-300) calc(var(--spacing-200) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lao__opts:empty {
  display: none;
}
.bcn-lao__opt {
  align-items: flex-start;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lao__opt esa-checkbox {
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-lao__label {
  cursor: pointer;
  user-select: none;
  flex: 1;
  min-width: 0;
  line-height: 1.45;
}
.bcn-lao__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__selected {
  color: var(--color-content-default-secondary);
}
.bcn-lao__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
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
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(--color-content-utility-danger, var(--color-content-brand, #2a7e3b));
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-microcopy-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-font-weight` | `500` | semantic |
| `--typography-microcopy-sm-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
