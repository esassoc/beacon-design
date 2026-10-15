# Console

The foot of the step's panel, as step 1 carries its scan console: the header carries no keys. A sunken tray across the panel under the header rule, every key neutral: Prev at its left end, Next at its right, the step's keys centered between, by phase. No index yet: Build index and + Category (no Prev or Next). Built: Re-run and Draft actions & obligations. During a run: the run's key, disabled. After it: Start over (the undo glyph), Draft again (its title names what is outstanding), Suggest Subcategories (while something fits no subcategory), View Log (the run's record in the console lightbox) and Approve All. Under the tray, once there is an index, every subcategory in index order, step 2's scrubber, a rule and the category's name where each category starts, a band of the category's hue along the foot of its cells and its name marked in the same hue. Drafted: darker gray for drafts never opened, light gray for opened with drafts to review, the step's color once every draft is decided. A dot at the top of a cell when the subcategory holds actions, and one at its foot when it holds obligations, so a cell carries one or two; each is dim while any of its drafts is left to review. No amber: nothing on the strip reads as alarm.

## Key decisions
- Reset the prototype, under the workspace as on step 1, starts step 3 over after a confirm: no index, no drafts, no talk with Aldo.
- The strip is step 1's: 50 cells, 32px tall, the same gaps and the same color logic (light gray undecided, darker gray wants a look, the step's color done).
- Start over is PR #1520's: once a Draft run exists it replaces Re-run, and it deletes the index and every draft back to "No index yet". Prod refuses it while a run is live or an approved record has evidence.
- Approve All approves every pending draft after a confirm that counts the subcategories never opened. Draft actions with no scope stay drafts.
- No position line and no Next to review: Prev and Next, or the arrow keys, step one subcategory at a time; the thumb is where you are.
- Opened is not reviewed. Prod sets FirstOpenedDate the first time a bin with drafts is opened.

## Markup
```html
<div class="bcn-swsn" data-ix-nav="" style="--_done: var(--color-obligation)">
  <div class="bcn-swsn__console">
    <span class="bcn-swsn__end" data-ix-step="" hidden=""
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Previous subcategory (Left arrow)"
          data-ix-prev=""
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
              <path d="m15 18-6-6 6-6"></path></svg></span
          ><span class="esa-button__label">Prev</span>
        </button></span
      ></span
    ><span class="bcn-swsn__keys"
      ><div class="bcn-sw3ia" data-sw3-index-actions="">
        <span data-ia-empty=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ico="play"
              data-ia-build="true"
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
                  data-ico="play"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span
              ><span class="esa-button__label">Build index</span>
            </button></span
          ></span
        ><span data-ia-empty-cat=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ia-add-cat="true"
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
              ><span class="esa-button__label">Category</span>
            </button></span
          ></span
        ><span data-ia-built="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ia-rerun="true"
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
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path></svg></span
              ><span class="esa-button__label">Re-run</span>
            </button></span
          ></span
        ><span data-ia-drafted="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ico="undo-2"
              data-ia-start-over="true"
              title=""
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
                  data-ico="undo-2"
                >
                  <path d="M9 14 4 9l5-5"></path>
                  <path
                    d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
                  ></path></svg></span
              ><span class="esa-button__label">Start over</span>
            </button></span
          ></span
        ><span data-ia-again-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ico="play"
              data-ia-again="true"
              title="Draft again"
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
                  data-ico="play"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span
              ><span class="esa-button__label">Draft again</span>
            </button></span
          ></span
        ><span data-ia-draft-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ico="play"
              data-ia-draft="true"
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
                  data-ico="play"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span
              ><span class="esa-button__label">Draft actions &amp; obligations</span>
            </button></span
          ></span
        ><span data-ia-suggest-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ico="square-dashed"
              data-ia-suggest="true"
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
                  data-ico="square-dashed"
                >
                  <path d="M5 3a2 2 0 0 0-2 2"></path>
                  <path d="M19 3a2 2 0 0 1 2 2"></path>
                  <path d="M21 19a2 2 0 0 1-2 2"></path>
                  <path d="M5 21a2 2 0 0 1-2-2"></path>
                  <path d="M9 3h1"></path>
                  <path d="M9 21h1"></path>
                  <path d="M14 3h1"></path>
                  <path d="M14 21h1"></path>
                  <path d="M3 9v1"></path>
                  <path d="M21 9v1"></path>
                  <path d="M3 14v1"></path>
                  <path d="M21 14v1"></path></svg></span
              ><span class="esa-button__label">Suggest Subcategories</span>
            </button></span
          ></span
        ><span data-ia-log-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ia-log="true"
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span
              ><span class="esa-button__label">View Log</span>
            </button></span
          ></span
        ><span data-ia-approve-wrap="" hidden=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-ia-approve="true"
              disabled=""
              title=""
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path></svg></span
              ><span class="esa-button__label">Approve All</span>
            </button></span
          ></span
        ><esa-confirm-dialog
          heading="Start over?"
          variant="danger"
          confirm-label="Start over"
          cancel-label="Cancel"
          data-ia-confirm-start="true"
        ></esa-confirm-dialog
        ><esa-confirm-dialog
          heading="Approve the Compliance Index?"
          confirm-label="Approve"
          cancel-label="Cancel"
          data-ia-confirm-approve="true"
          variant="default"
        ></esa-confirm-dialog>
      </div>
      <script
        type="module"
        src="/beacon-design/_astro/BcnSw3IndexActions.astro_astro_type_script_index_0_lang.CkAyEBep.js"
      ></script></span
    ><span class="bcn-swsn__end bcn-swsn__end--next" data-ix-step="" hidden=""
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Next subcategory (Right arrow)"
          data-ix-next=""
        >
          <span class="esa-button__label">Next</span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button></span
    ></span>
  </div>
  <div class="bcn-swsn__scrub" data-ix-scrub="" hidden="">
    <div class="bcn-cscrub" data-commitment-scrubber="" data-size="50" style="--_n: 50">
      <span data-cs-prev=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Earlier commitments"
            title="Earlier commitments"
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
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path></svg
            ></span></button></span
      ></span>
      <div
        class="bcn-cscrub__track"
        role="slider"
        tabindex="0"
        aria-label="Subcategory"
        aria-valuemin="1"
        aria-valuemax="1"
        aria-valuenow="1"
        data-cs-track=""
      >
        <span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__cell"></span><span class="bcn-cscrub__cell"></span
        ><span class="bcn-cscrub__thumb" data-cs-thumb="" aria-hidden="true"></span>
      </div>
      <span data-cs-next=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Later commitments"
            title="Later commitments"
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
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path></svg
            ></span></button></span
      ></span>
      <div class="bcn-cscrub__ticks" aria-hidden="true" data-cs-ticks=""></div>
      <span class="bcn-cscrub__tip" data-cs-tip="" hidden="" aria-hidden="true"
        ><span class="bcn-cscrub__tipcode" data-cs-tip-code=""></span
        ><span data-cs-tip-title=""></span
        ><span class="bcn-cscrub__tipstate" data-cs-tip-state=""></span
      ></span>
    </div>
  </div>
</div>
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
.bcn-cscrub {
  align-items: center;
  column-gap: var(--spacing-100);
  user-select: none;
  grid-template-rows: auto auto;
  grid-template-columns: auto minmax(0, 1fr) auto;
  row-gap: 2px;
  display: grid;
}
.bcn-cscrub > [data-cs-prev] {
  grid-area: 1/1;
}
.bcn-cscrub > [data-cs-next] {
  grid-area: 1/3;
}
.bcn-cscrub__track {
  grid-area: 1/2;
}
.bcn-cscrub__ticks {
  grid-area: 2/2;
}
.bcn-cscrub__track {
  grid-template-columns: repeat(var(--_n, 1), minmax(0, 1fr));
  cursor: pointer;
  touch-action: none;
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  gap: 2px;
  height: 44px;
  padding: 6px;
  display: grid;
  position: relative;
}
.bcn-cscrub__track:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-cscrub__track .bcn-cscrub__cell {
  background: color-mix(
    in srgb,
    var(--color-content-default) 16%,
    var(--color-background-elevation-raised)
  );
  box-shadow: inset 0 -4px 0 var(--_hue, transparent);
  --_mark: color-mix(
    in srgb,
    var(--color-content-default) 52%,
    var(--color-background-elevation-raised)
  );
  border-radius: 2px;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding-top: 7px;
  transition: background-color 0.16s;
  display: flex;
}
.bcn-cscrub__track .bcn-cscrub__cell[data-state="none"] {
  box-shadow: none;
  background: 0 0;
}
.bcn-cscrub__track .bcn-cscrub__cell[data-state="flagged"] {
  background: color-mix(
    in srgb,
    var(--color-content-default) 34%,
    var(--color-background-elevation-raised)
  );
  --_mark: var(--color-content-default);
}
.bcn-cscrub__track .bcn-cscrub__cell[data-state="confirmed"] {
  background: var(--_done, var(--color-background-success, var(--color-content-success)));
  --_mark: var(--color-background-elevation-raised);
}
.bcn-cscrub__track .bcn-cscrub__mark {
  background: var(--_mark);
  border-radius: 50%;
  flex: none;
  width: 5px;
  height: 5px;
  display: block;
}
.bcn-cscrub__track .bcn-cscrub__mark[data-dim] {
  opacity: 0.45;
}
.bcn-cscrub__track .bcn-cscrub__mark[data-at="bottom"] {
  margin: auto 0 9px;
}
.bcn-cscrub__track .bcn-cscrub__sep {
  top: -4px;
  bottom: -6px;
  left: calc(6px + (100% - 12px) / var(--_n, 1) * var(--_i, 0) - 1.5px);
  background: var(--_hue, var(--color-content-default));
  pointer-events: none;
  border-radius: 1px;
  width: 2px;
  position: absolute;
}
.bcn-cscrub__thumb {
  top: -3px;
  bottom: -3px;
  left: calc(6px + (100% - 12px) / var(--_n, 1) * var(--_at, 0) - 3px);
  z-index: 1;
  width: max(8px, calc((100% - 12px) / var(--_n, 1) + 6px));
  border: 2px solid var(--color-content-default);
  pointer-events: none;
  border-radius: 3px;
  transition: left 0.12s;
  position: absolute;
}
.bcn-cscrub__ticks {
  height: 16px;
  margin: 0 6px;
  position: relative;
}
.bcn-cscrub__thumb[hidden] {
  display: none;
}
.bcn-cscrub__ticks .bcn-cscrub__tick {
  top: 0;
  left: calc(100% / var(--_n, 1) * (var(--_i, 0) + 0.5));
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  font-size: 0.6875rem;
  line-height: 16px;
  position: absolute;
  transform: translate(-50%);
}
.bcn-cscrub__ticks .bcn-cscrub__tick[data-end] {
  left: auto;
  right: 0;
  transform: none;
}
.bcn-cscrub__ticks .bcn-cscrub__file {
  top: 0;
  left: calc(100% / var(--_n, 1) * var(--_i, 0) - 1.5px);
  border-left: 2px solid var(--_hue, var(--color-content-default));
  text-overflow: ellipsis;
  color: var(--color-content-default);
  white-space: nowrap;
  padding-left: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 16px;
  position: absolute;
  overflow: hidden;
}
.bcn-cscrub__tip {
  z-index: 50;
  background: var(--color-background-inverse, #1f2328);
  max-width: 18rem;
  color: var(--color-content-default-knockout);
  box-shadow: var(--shadow-300, 0 4px 12px #0003);
  pointer-events: none;
  border-radius: 6px;
  flex-direction: column;
  gap: 1px;
  padding: 5px 8px;
  font-size: 0.75rem;
  line-height: 1.3;
  display: flex;
  position: fixed;
  transform: translate(-50%, -100%);
}
.bcn-cscrub__tip[hidden] {
  display: none;
}
.bcn-cscrub__tipcode {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.bcn-cscrub__tipstate {
  opacity: 0.8;
}
.bcn-swsn {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-200);
  border-top: 1px solid var(--color-border-default);
  --color-background-brand-muted: var(--color-background-elevation-raised);
  --color-background-brand-muted-hover: var(--color-background-elevation-sunken);
  --color-content-on-brand-muted: var(--color-content-default);
  flex-direction: column;
  display: flex;
}
.bcn-swsn[hidden],
.bcn-swsn [hidden] {
  display: none !important;
}
.bcn-swsn__console {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  grid-template-columns: 1fr auto 1fr;
  display: grid;
}
.bcn-swsn__keys {
  justify-content: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  grid-column: 2;
  display: flex;
}
.bcn-swsn__keys > * {
  flex: none;
}
.bcn-swsn__end {
  grid-area: 1/1;
  justify-self: start;
}
.bcn-swsn__end--next {
  grid-column: 3;
  justify-self: end;
}
.bcn-swsn button:disabled {
  opacity: 0.38;
}
.bcn-swsn__scrub:empty {
  display: none;
}
.bcn-sw3ia {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3ia [hidden] {
  display: none !important;
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
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
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
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-console-fg`: #ffffffed _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-inverse`: #202020 _(component)_
- `--color-background-success`: #2e7571 _(component)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--shadow-300`: 0 6px 24px -6px #00000012 _(component)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
