# Item panel

Custom Compliance Index list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/contractor-field-index/

![Item panel, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/item-panel.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/item-panel.phone.png

One member of this version, an action or an obligation: the obligation list's panel for a version. Live: List title, Category and Subcategory (where this version files it), List description. Read only: the type or class chip, where the Compliance Index files it, the index description and the requirements. Footer: Remove from this list and Duplicate left; Save, Cancel right.

## Key decisions

- The pickers offer the VERSION's outline under this list's names, not the canonical taxonomy: a version files by its own categories. Changing Category refills Subcategory.
- An empty title or description means the index's wording, so the fields hold only what the list says differently. The index description turns tertiary once the list has its own.
- Remove goes through the tree's confirm, the same as the card's x; Duplicate files the copy the way the card's copy verb does.

## Done when

- Clearing both wording fields and saving restores the index title and drops the dot.
- Saving with another Subcategory moves the member there.

## Components

- `bcn-lob` (spoke) · `src/components/bcn/BcnListIndexItemPanel.astro`
- `bcn-swo-edit` (spoke) · `src/components/bcn/BcnListActionPanel.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<esa-side-dialog
  id="lip-editor"
  heading="Item"
  position="right"
  show-close-button="true"
  style="--_width: min(640px, 94vw); --z-modal: 1300; --z-modal-backdrop: 1250"
  size="md"
  open=""
  ><form class="bcn-swo-edit bcn-lob bcn-lip" data-index-item-panel="" data-class="action">
    <div><span class="bcn-lob__class" data-lip="chip">Training &amp; Education</span></div>
    <esa-text-field
      label="List title"
      size="sm"
      name="lip-title"
      help-text="Leave this empty and the list uses the index title."
    ></esa-text-field>
    <div class="bcn-lob__field">
      <div class="bcn-swo-edit__pair">
        <esa-select label="Category" size="sm" name="lip-cat"></esa-select
        ><esa-select label="Subcategory" size="sm" name="lip-sub"></esa-select>
      </div>
      <span class="bcn-lob__registry" data-lip="home"
        >Compliance Index: People and qualifications › Worker training</span
      >
    </div>
    <div class="bcn-lob__field">
      <span class="bcn-swo-edit__label">Index description</span>
      <p class="bcn-lob__prose" data-lip="description" data-superseded="true">
        A Designated Biologist, Fisheries Biologist, or Biological Monitor presents the Condition of
        Approval 9.4 education program to every person working in the Project Area before that
        person performs any work, covering Covered Species biology and timing windows, the
        Conditions of Approval, take-minimization protocols, non-covered listed species, site
        boundaries and disturbance-free zones, habitat avoidance, fencing and staking, roles,
        encounter and emergency procedures, and legal status and…
      </p>
    </div>
    <esa-textarea
      label="List description"
      size="sm"
      rows="4"
      name="lip-description"
      help-text="Leave this empty and the list uses the index description."
    ></esa-textarea>
    <div class="bcn-swo-edit__section">
      <div class="bcn-swo-edit__label-row">
        <span class="bcn-swo-edit__label"
          >Requirements <span class="bcn-swo-edit__label-n" data-lip-req-n="">3</span></span
        >
      </div>
      <div class="bcn-swo-edit__reqs" data-lip-reqs="">
        <details class="bcn-swo-edit__req">
          <summary class="bcn-swo-edit__req-row">
            <span class="bcn-swo-edit__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                ><svg
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-swo-edit__code">COA 11.82</span
            ><span class="bcn-swo-edit__req-name"
              >Train Project Personnel on TRBL Avoidance and Buffer Protocols</span
            >
          </summary>
          <blockquote class="bcn-swo-edit__text">
            The Designated Biologist(s) shall train Project personnel on the required avoidance
            procedures, buffer zones, and protocols in the event that a TRBL flies into an active
            Project construction site (i.e., outside the buffer zone), as part of the education
            program described in Condition of Approval 9.4.
          </blockquote>
        </details>
        <details class="bcn-swo-edit__req">
          <summary class="bcn-swo-edit__req-row">
            <span class="bcn-swo-edit__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                ><svg
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-swo-edit__code">COA 9.4</span
            ><span class="bcn-swo-edit__req-name"
              >Conduct Worker Education Program Before Work Begins</span
            >
          </summary>
          <blockquote class="bcn-swo-edit__text">
            Permittee shall conduct an education program for all persons employed or otherwise
            working in the Project Area before performing any work.
          </blockquote>
        </details>
        <details class="bcn-swo-edit__req">
          <summary class="bcn-swo-edit__req-row">
            <span class="bcn-swo-edit__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                ><svg
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
                  <path d="m9 18 6-6-6-6"></path></svg></span></span
            ><span class="bcn-swo-edit__code">COA 9.4</span
            ><span class="bcn-swo-edit__req-name"
              >Repeat Worker Education Annually for Long-Term Employees</span
            >
          </summary>
          <blockquote class="bcn-swo-edit__text">
            This training shall be repeated at least once annually for long-term and/or permanent
            employees that will be conducting work in the Project Area.
          </blockquote>
        </details>
      </div>
    </div>
  </form>
  <span slot="footer" class="bcn-swo-edit__foot"
    ><span class="bcn-swo-edit__foot-left"
      ><span
        class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lip-remove="true"
        >
          <span class="esa-button__label">Remove from this list</span>
        </button></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lip-duplicate="true"
        >
          <span class="esa-button__label">Duplicate</span>
        </button></span
      ></span
    ><span class="bcn-swo-edit__foot-right"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lip-save="true"
        >
          <span class="esa-button__label">Save</span>
        </button></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lip-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ></span
  ><template data-lip-tpl="req"
    ><details class="bcn-swo-edit__req">
      <summary class="bcn-swo-edit__req-row">
        <span class="bcn-swo-edit__chev" aria-hidden="true"
          ><span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
            ><svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-swo-edit__code"></span><span class="bcn-swo-edit__req-name"></span>
      </summary>
      <blockquote class="bcn-swo-edit__text"></blockquote></details></template
></esa-side-dialog>
```

## Styles

```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-lob[data-class="action"],
.bcn-ci-chip[data-class="action"] {
  --_hue: var(--color-action);
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
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-swo-edit {
  gap: var(--spacing-400);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swo-edit__pair {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: start;
  display: grid;
}
.bcn-swo-edit__section {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-swo-edit__label-row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-swo-edit__label {
  color: var(--form-label-color, #646464);
  font-size: 0.75rem;
  font-weight: 500;
}
.bcn-swo-edit__label-n {
  color: var(--color-content-default-tertiary);
  margin-left: var(--spacing-100);
  font-weight: 400;
}
.bcn-swo-edit__reqs {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-swo-edit__reqs:empty {
  border-top: none;
}
.bcn-swo-edit__req {
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-swo-edit__req.is-new {
  background: color-mix(in srgb, var(--color-obligation) 10%, white);
}
.bcn-swo-edit__req-row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: var(--spacing-100) var(--spacing-100);
  cursor: pointer;
  font-size: 0.8125rem;
  list-style: none;
  display: flex;
}
.bcn-swo-edit__req-row::-webkit-details-marker {
  display: none;
}
.bcn-swo-edit__req-row:hover {
  background: var(--color-background-default);
}
.bcn-swo-edit__chev {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-swo-edit__req[open] > .bcn-swo-edit__req-row .bcn-swo-edit__chev {
  transform: rotate(90deg);
}
.bcn-swo-edit__code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
}
.bcn-swo-edit__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swo-edit__text {
  margin: 0 0 var(--spacing-200) calc(var(--spacing-100) + 20px);
  padding: var(--spacing-200) var(--spacing-300);
  border-left: 3px solid var(--color-commitment);
  background: var(--color-background-default);
  color: var(--color-content-default);
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-swo-edit__req-row:hover .bcn-swo-edit__req-verbs,
.bcn-swo-edit__req-row:focus-within .bcn-swo-edit__req-verbs {
  opacity: 1;
}
.bcn-swo-edit__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-swo-edit__foot-left,
.bcn-swo-edit__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.bcn-lob__field {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-lob__prose {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-lob__prose[data-superseded="true"] {
  color: var(--color-content-default-tertiary);
}
.bcn-lob__registry {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-lob__registry[hidden] {
  display: none;
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
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--form-label-color` | `#525252` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
