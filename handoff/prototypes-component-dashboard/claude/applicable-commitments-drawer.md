# Applicable Commitments drawer

The surface that settles applicability one commitment at a time, brought to prod's behavior: three views (Needs a decision / Applied / Dismissed), a preview beside the list, filters, and decisions written on click with one plain Close. Every decided row says why.

## Key decisions
- WRITES ON CLICK, as prod does (BCN-1636 overrode staging). Apply, Dismiss and Undo write immediately; there is no Save and no Cancel, just Close. Undo is the safety net.
- Figures and the View toggle share one header band: Need a decision, Decided N of M, progress. Each view chip carries its own count and matches its list.
- Filters on one unlabelled row: keyword search, Source Document, Requirement Type, Species, with Clear all shown only while a filter is on. Options read A–Z, as prod's drawer sorts them. Search hits are highlighted in the rows.
- Per-row Apply / Dismiss / Undo by state, each with the optional rationale prompt. Bulk Apply / Dismiss / Undo confirm first, and a bulk rationale warns "This overwrites N existing rationales."
- The preview shows the commitment text, its source, requirements and added date; "Creates N actions on this component" while the commitment is not applied (prod: IsApplicable !== true); and the Decision with its date and Rationale once decided.
- With a setup saved, an undecided commitment setup recommends out reads "Recommended not applicable: <reasons>" with "Dismiss with This Reason" in its preview.
- Every confirm states its effects with real counts, the way prod applies them: actions created by applying; unworked to-dos removed and worked ones kept as not applicable by dismissing or undoing an apply (ADR 0035); field records unlinked by dismissing (ADR 0074). Undo of a setup decision and Dismiss with This Reason confirm first; undo of a hand decision stays one click.

## Gotchas
- UNDECIDED IS NO ROW (ADR 0032). The old vComponentCommitmentDecisions view is retired; ComponentCommitment.SetupSummaryAsync returns the honest, de-duplicated counts. Read those, not anything derived from a project-wide join.
- REQUIREMENT TYPE AND SPECIES ARE FILTERS ONLY (decided 2026-08-17). They are not shown on the commitment card or in the preview. Do not re-add them to the card.
- UNDO EXISTS IN PROD: PatchComponentCommitmentDecision(s)Async with IsApplicable empty deletes the row (ADR 0035), removing to-dos nobody has worked and keeping worked ones as not applicable. Undo and the setup re-check both use it.
- The list and the preview scroll independently, and the bulk bar is static, not at the bottom of the list.

## Done when
- Each view's count matches its list; filters narrow it; selecting a card opens its preview; Apply/Dismiss/Undo write at once and move the row between views; a bulk rationale warns before overwriting; Close is the only footer action.

## Markup
```html
<esa-side-dialog
  id="bcn-setup-workspace"
  class="bcn-sw"
  size="lg"
  position="right"
  heading="Applicable Commitments"
  data-setup-workspace="true"
  ><div slot="header" class="bcn-sw__head">
    <span class="esa-icon esa-icon--lg" aria-hidden="true"
      ><svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        ></path>
        <path d="m9 14 2 2 4-4"></path></svg
    ></span>
    <h2 class="bcn-sw__headtitle">Applicable Commitments</h2>
    <span
      class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
      ><span class="esa-badge__text">Bouldin Island Geotechnical Exploration</span></span
    >
  </div>
  <div class="bcn-sw__body">
    <header class="bcn-sw__lead">
      <div class="bcn-sw__figures">
        <p class="bcn-sw__figure">
          <span class="bcn-sw__figval" data-sw-fig="undecided">37</span
          ><span class="bcn-sw__figlabel">Need a decision</span>
        </p>
        <p class="bcn-sw__figure">
          <span class="bcn-sw__figval" data-sw-fig="decided">5 of 42</span
          ><span class="bcn-sw__figlabel">Decided</span>
        </p>
        <div class="bcn-sw__bar" data-sw-progress="">
          <div
            class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--primary"
            role="progressbar"
            aria-valuenow="12"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="Progress"
          >
            <div class="esa-progress-bar__header typography-body-xs">
              <span class="esa-progress-bar__value">12%</span>
            </div>
            <div class="esa-progress-bar__track">
              <div class="esa-progress-bar__fill" style="width: 12%"></div>
            </div>
          </div>
        </div>
      </div>
      <esa-button-toggle data-sw-view="true" size="md" label="View"></esa-button-toggle>
    </header>
    <div class="bcn-sw__controls">
      <div class="bcn-filterbar bcn-filterbar--compact">
        <div class="bcn-filterbar__bottom">
          <div class="bcn-filterbar__search bcn-filterbar__search--filters">
            <span class="bcn-sw__search"
              ><esa-text-field
                data-sw-search="true"
                size="sm"
                placeholder="Search commitments…"
                aria-label="Search commitments"
              ></esa-text-field
            ></span>
          </div>
          <div
            class="esa-filter-container typography-label-md"
            style="
              --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
              --_filter-container-row-gap: var(--spacing-200, 0.5rem);
            "
          >
            <esa-filter-dropdown
              data-sw-facet="source"
              name="source"
              label="Source Document"
              multiple=""
              size="sm"
            ></esa-filter-dropdown
            ><esa-filter-dropdown
              data-sw-facet="type"
              name="type"
              label="Requirement Type"
              multiple=""
              size="sm"
            ></esa-filter-dropdown
            ><esa-filter-dropdown
              data-sw-facet="species"
              name="species"
              label="Species"
              multiple=""
              size="sm"
            ></esa-filter-dropdown>
          </div>
          <span class="bcn-filterbar__clear"
            ><span data-sw-clear="" hidden=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Clear all</span>
                </button></span
              ></span
            ></span
          >
        </div>
      </div>
    </div>
    <div class="bcn-sw__panes">
      <section class="bcn-sw__pane bcn-sw__pane--list" aria-label="Commitments in view">
        <div class="bcn-sw__listhead">
          <esa-checkbox
            size="sm"
            data-sw-check-all="true"
            aria-label="Select every commitment in view"
          ></esa-checkbox
          ><span class="bcn-sw__listcount" data-sw-listcount="">37 commitments</span
          ><span class="bcn-sw__listacts" data-sw-bulk="" hidden=""
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-apply="true"
              >
                <span class="esa-button__label">Apply</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-dismiss="true"
              >
                <span class="esa-button__label">Dismiss</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-undo="true"
              >
                <span class="esa-button__label">Undo</span>
              </button></span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-clear="true"
              >
                <span class="esa-button__label">Clear</span>
              </button></span
            ></span
          ><span class="bcn-sw__listacts" data-sw-accept="" hidden=""
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-accept-all="true"
              >
                <span class="esa-button__label"
                  ><span data-sw-accept-label="">Dismiss 0 recommended</span></span
                >
              </button></span
            ></span
          >
        </div>
        <div class="bcn-sw__scroll" data-sw-scroll="">
          <ul class="bcn-sw__rows" data-sw-rows="">
            <li class="bcn-sw-row" data-sw-row="cc-001" data-decision="applied" hidden="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-001"
                  aria-label="Select GT-BIO-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-1 Worker environmental awareness training in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Worker environmental awareness training"
                        data-sw-name=""
                        >Worker environmental awareness training</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-001"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-1"
                              title="Apply GT-BIO-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-001"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-1"
                              title="Dismiss GT-BIO-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-001"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-1"
                              title="Undo GT-BIO-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note=""
                  >Set by Hand · Feb 11, 2026 · Required for every exploration crew.</span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-002" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-002"
                  aria-label="Select GT-BIO-2"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-2 Nesting bird preconstruction survey in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Nesting bird preconstruction survey"
                        data-sw-name=""
                        >Nesting bird preconstruction survey</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-002"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-2"
                              title="Apply GT-BIO-2"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-002"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-2"
                              title="Dismiss GT-BIO-2"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-002"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-2"
                              title="Undo GT-BIO-2"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-003" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-003"
                  aria-label="Select GT-BIO-3"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-3 Swainson’s hawk nest buffer in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Swainson’s hawk nest buffer"
                        data-sw-name=""
                        >Swainson’s hawk nest buffer</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-003"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-3"
                              title="Apply GT-BIO-3"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-003"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-3"
                              title="Dismiss GT-BIO-3"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-003"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-3"
                              title="Undo GT-BIO-3"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-004" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-004"
                  aria-label="Select GT-BIO-4"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-4 Giant Garter Snake avoidance in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Giant Garter Snake avoidance"
                        data-sw-name=""
                        >Giant Garter Snake avoidance</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-004"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-4"
                              title="Apply GT-BIO-4"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-004"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-4"
                              title="Dismiss GT-BIO-4"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-004"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-4"
                              title="Undo GT-BIO-4"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-005" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-005"
                  aria-label="Select GT-BIO-5"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-5 Elderberry shrub avoidance in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Elderberry shrub avoidance"
                        data-sw-name=""
                        >Elderberry shrub avoidance</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-005"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-5"
                              title="Apply GT-BIO-5"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-005"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-5"
                              title="Dismiss GT-BIO-5"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-005"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-5"
                              title="Undo GT-BIO-5"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-006" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-006"
                  aria-label="Select GT-BIO-6"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-6 Western Pond Turtle clearance in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Western Pond Turtle clearance"
                        data-sw-name=""
                        >Western Pond Turtle clearance</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-006"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-6"
                              title="Apply GT-BIO-6"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-006"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-6"
                              title="Dismiss GT-BIO-6"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-006"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-6"
                              title="Undo GT-BIO-6"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-007" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-007"
                  aria-label="Select GT-BIO-7"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-7 Delta Smelt in-water work window in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Delta Smelt in-water work window"
                        data-sw-name=""
                        >Delta Smelt in-water work window</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-007"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-7"
                              title="Apply GT-BIO-7"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-007"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-7"
                              title="Dismiss GT-BIO-7"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-007"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-7"
                              title="Undo GT-BIO-7"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-008" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-008"
                  aria-label="Select GT-BIO-8"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-8 California Tiger Salamander upland survey in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                      ><span
                        class="bcn-sw-row__name"
                        title="California Tiger Salamander upland survey"
                        data-sw-name=""
                        >California Tiger Salamander upland survey</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-008"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-8"
                              title="Apply GT-BIO-8"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-008"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-8"
                              title="Dismiss GT-BIO-8"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-008"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-8"
                              title="Undo GT-BIO-8"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-009"
              data-decision="dismissed"
              hidden=""
            >
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-009"
                  aria-label="Select GT-BIO-9"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-BIO-9 Non-listed raptor nest buffer in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Non-listed raptor nest buffer"
                        data-sw-name=""
                        >Non-listed raptor nest buffer</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-009"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-BIO-9"
                              title="Apply GT-BIO-9"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-009"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-BIO-9"
                              title="Dismiss GT-BIO-9"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-009"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-BIO-9"
                              title="Undo GT-BIO-9"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note=""
                  >Set by Hand · Feb 11, 2026 · No raptor nests within 500 feet of any
                  work area in the 2025 survey.</span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-010" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-010"
                  aria-label="Select GT-CUL-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-CUL-1 Inadvertent discovery stop-work protocol in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Inadvertent discovery stop-work protocol"
                        data-sw-name=""
                        >Inadvertent discovery stop-work protocol</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-010"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-CUL-1"
                              title="Apply GT-CUL-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-010"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-CUL-1"
                              title="Dismiss GT-CUL-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-010"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-CUL-1"
                              title="Undo GT-CUL-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-011" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-011"
                  aria-label="Select GT-CUL-2"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-CUL-2 Tribal monitor notification in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Tribal monitor notification"
                        data-sw-name=""
                        >Tribal monitor notification</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-011"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-CUL-2"
                              title="Apply GT-CUL-2"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-011"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-CUL-2"
                              title="Dismiss GT-CUL-2"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-011"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-CUL-2"
                              title="Undo GT-CUL-2"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-012" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-012"
                  aria-label="Select GT-HAZ-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-HAZ-1 Drilling fluid containment in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Drilling fluid containment"
                        data-sw-name=""
                        >Drilling fluid containment</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-012"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-HAZ-1"
                              title="Apply GT-HAZ-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-012"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-HAZ-1"
                              title="Dismiss GT-HAZ-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-012"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-HAZ-1"
                              title="Undo GT-HAZ-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-013" data-decision="applied" hidden="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-013"
                  aria-label="Select GT-HAZ-2"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-HAZ-2 Borehole abandonment in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Borehole abandonment"
                        data-sw-name=""
                        >Borehole abandonment</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-013"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-HAZ-2"
                              title="Apply GT-HAZ-2"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-013"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-HAZ-2"
                              title="Dismiss GT-HAZ-2"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-013"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-HAZ-2"
                              title="Undo GT-HAZ-2"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note=""
                  >Set by Hand · Feb 11, 2026 · Governs every boring in the program.</span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-014"
              data-decision="dismissed"
              hidden=""
            >
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-014"
                  aria-label="Select GT-NOI-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-NOI-1 Nighttime drilling noise limits in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Nighttime drilling noise limits"
                        data-sw-name=""
                        >Nighttime drilling noise limits</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-014"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-NOI-1"
                              title="Apply GT-NOI-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-014"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-NOI-1"
                              title="Dismiss GT-NOI-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-014"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-NOI-1"
                              title="Undo GT-NOI-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note=""
                  >Set by Hand · Feb 11, 2026 · The work plan limits drilling to daylight
                  hours.</span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-015" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-015"
                  aria-label="Select GT-AIR-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT-AIR-1 Fugitive dust control in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Fugitive dust control"
                        data-sw-name=""
                        >Fugitive dust control</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-015"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT-AIR-1"
                              title="Apply GT-AIR-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-015"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT-AIR-1"
                              title="Dismiss GT-AIR-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-015"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT-AIR-1"
                              title="Undo GT-AIR-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-016" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-016"
                  aria-label="Select GT401-3"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT401-3 Turbidity monitoring for over-water borings in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Turbidity monitoring for over-water borings"
                        data-sw-name=""
                        >Turbidity monitoring for over-water borings</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-016"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT401-3"
                              title="Apply GT401-3"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-016"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT401-3"
                              title="Dismiss GT401-3"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-016"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT401-3"
                              title="Undo GT401-3"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-017" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-017"
                  aria-label="Select GT401-5"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT401-5 Spill prevention and response in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Spill prevention and response"
                        data-sw-name=""
                        >Spill prevention and response</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-017"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT401-5"
                              title="Apply GT401-5"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-017"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT401-5"
                              title="Dismiss GT401-5"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-017"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT401-5"
                              title="Undo GT401-5"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-018" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-018"
                  aria-label="Select GT401-7"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT401-7 Dewatering discharge sampling in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Dewatering discharge sampling"
                        data-sw-name=""
                        >Dewatering discharge sampling</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-018"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT401-7"
                              title="Apply GT401-7"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-018"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT401-7"
                              title="Dismiss GT401-7"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-018"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT401-7"
                              title="Undo GT401-7"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-019" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-019"
                  aria-label="Select GT401-9"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show GT401-9 Wet-season erosion control in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Wet-season erosion control"
                        data-sw-name=""
                        >Wet-season erosion control</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-019"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply GT401-9"
                              title="Apply GT401-9"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-019"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss GT401-9"
                              title="Dismiss GT401-9"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-019"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo GT401-9"
                              title="Undo GT401-9"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-020" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-020"
                  aria-label="Select LSAA-2"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show LSAA-2 Channel work only when dry in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Channel work only when dry"
                        data-sw-name=""
                        >Channel work only when dry</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-020"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply LSAA-2"
                              title="Apply LSAA-2"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-020"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss LSAA-2"
                              title="Dismiss LSAA-2"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-020"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo LSAA-2"
                              title="Undo LSAA-2"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-021" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-021"
                  aria-label="Select LSAA-4"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show LSAA-4 Riparian vegetation removal limits in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Riparian vegetation removal limits"
                        data-sw-name=""
                        >Riparian vegetation removal limits</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-021"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply LSAA-4"
                              title="Apply LSAA-4"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-021"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss LSAA-4"
                              title="Dismiss LSAA-4"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-021"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo LSAA-4"
                              title="Undo LSAA-4"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-022" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-022"
                  aria-label="Select LSAA-6"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show LSAA-6 Splittail spawning window in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Splittail spawning window"
                        data-sw-name=""
                        >Splittail spawning window</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-022"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply LSAA-6"
                              title="Apply LSAA-6"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-022"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss LSAA-6"
                              title="Dismiss LSAA-6"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-022"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo LSAA-6"
                              title="Undo LSAA-6"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-023" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-023"
                  aria-label="Select G408-1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show G408-1 Levee toe setback for borings in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Levee toe setback for borings"
                        data-sw-name=""
                        >Levee toe setback for borings</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-023"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply G408-1"
                              title="Apply G408-1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-023"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss G408-1"
                              title="Dismiss G408-1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-023"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo G408-1"
                              title="Undo G408-1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-024" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-024"
                  aria-label="Select G408-3"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show G408-3 Levee deformation monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Levee deformation monitoring"
                        data-sw-name=""
                        >Levee deformation monitoring</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-024"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply G408-3"
                              title="Apply G408-3"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-024"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss G408-3"
                              title="Dismiss G408-3"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-024"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo G408-3"
                              title="Undo G408-3"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-025" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-025"
                  aria-label="Select G408-5"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show G408-5 Casing installation vibration limits in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Casing installation vibration limits"
                        data-sw-name=""
                        >Casing installation vibration limits</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-025"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply G408-5"
                              title="Apply G408-5"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-025"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss G408-5"
                              title="Dismiss G408-5"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-025"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo G408-5"
                              title="Undo G408-5"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-026" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-026"
                  aria-label="Select BIO-03"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show BIO-03 Nesting bird preconstruction survey in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Nesting bird preconstruction survey"
                        data-sw-name=""
                        >Nesting bird preconstruction survey</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-026"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply BIO-03"
                              title="Apply BIO-03"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-026"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss BIO-03"
                              title="Dismiss BIO-03"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-026"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo BIO-03"
                              title="Undo BIO-03"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-027" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-027"
                  aria-label="Select CUL-02"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show CUL-02 Worker cultural resources awareness training in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Worker cultural resources awareness training"
                        data-sw-name=""
                        >Worker cultural resources awareness training</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-027"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply CUL-02"
                              title="Apply CUL-02"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-027"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss CUL-02"
                              title="Dismiss CUL-02"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-027"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo CUL-02"
                              title="Undo CUL-02"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-028" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-028"
                  aria-label="Select NOI-03"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show NOI-03 Construction noise monitoring plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Construction noise monitoring plan"
                        data-sw-name=""
                        >Construction noise monitoring plan</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-028"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply NOI-03"
                              title="Apply NOI-03"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-028"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss NOI-03"
                              title="Dismiss NOI-03"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-028"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo NOI-03"
                              title="Undo NOI-03"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-029" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-029"
                  aria-label="Select AIR-04"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show AIR-04 Construction fugitive dust control in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Construction fugitive dust control"
                        data-sw-name=""
                        >Construction fugitive dust control</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-029"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply AIR-04"
                              title="Apply AIR-04"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-029"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss AIR-04"
                              title="Dismiss AIR-04"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-029"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo AIR-04"
                              title="Undo AIR-04"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-030" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-030"
                  aria-label="Select TRA-11"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show TRA-11 Haul route compliance in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Haul route compliance"
                        data-sw-name=""
                        >Haul route compliance</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-030"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply TRA-11"
                              title="Apply TRA-11"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-030"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss TRA-11"
                              title="Dismiss TRA-11"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-030"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo TRA-11"
                              title="Undo TRA-11"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-031" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-031"
                  aria-label="Select VEG-06"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show VEG-06 Revegetation of temporarily disturbed areas in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Revegetation of temporarily disturbed areas"
                        data-sw-name=""
                        >Revegetation of temporarily disturbed areas</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-031"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply VEG-06"
                              title="Apply VEG-06"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-031"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss VEG-06"
                              title="Dismiss VEG-06"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-031"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo VEG-06"
                              title="Undo VEG-06"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-032" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-032"
                  aria-label="Select NOI-12"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show NOI-12 Vibration limits for adjacent structures in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Vibration limits for adjacent structures"
                        data-sw-name=""
                        >Vibration limits for adjacent structures</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-032"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply NOI-12"
                              title="Apply NOI-12"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-032"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss NOI-12"
                              title="Dismiss NOI-12"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-032"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo NOI-12"
                              title="Undo NOI-12"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-033" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-033"
                  aria-label="Select ITP-6.2"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show ITP-6.2 Giant Garter Snake active-season restriction in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Giant Garter Snake active-season restriction"
                        data-sw-name=""
                        >Giant Garter Snake active-season restriction</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-033"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply ITP-6.2"
                              title="Apply ITP-6.2"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-033"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss ITP-6.2"
                              title="Dismiss ITP-6.2"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-033"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo ITP-6.2"
                              title="Undo ITP-6.2"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-034" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-034"
                  aria-label="Select ITP-7.1"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show ITP-7.1 Swainson’s hawk foraging habitat mitigation in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Swainson’s hawk foraging habitat mitigation"
                        data-sw-name=""
                        >Swainson’s hawk foraging habitat mitigation</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-034"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply ITP-7.1"
                              title="Apply ITP-7.1"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-034"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss ITP-7.1"
                              title="Dismiss ITP-7.1"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-034"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo ITP-7.1"
                              title="Undo ITP-7.1"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-035" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-035"
                  aria-label="Select ITP-9.4"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show ITP-9.4 Delta Smelt entrainment avoidance in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Delta Smelt entrainment avoidance"
                        data-sw-name=""
                        >Delta Smelt entrainment avoidance</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-035"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply ITP-9.4"
                              title="Apply ITP-9.4"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-035"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss ITP-9.4"
                              title="Dismiss ITP-9.4"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-035"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo ITP-9.4"
                              title="Undo ITP-9.4"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-036" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-036"
                  aria-label="Select ITP-11.3"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show ITP-11.3 Tidal marsh restoration monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Tidal marsh restoration monitoring"
                        data-sw-name=""
                        >Tidal marsh restoration monitoring</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-036"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply ITP-11.3"
                              title="Apply ITP-11.3"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-036"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss ITP-11.3"
                              title="Dismiss ITP-11.3"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-036"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo ITP-11.3"
                              title="Undo ITP-11.3"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-037" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-037"
                  aria-label="Select USACE-02"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show USACE-02 Section 404 preconstruction notification in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Section 404 preconstruction notification"
                        data-sw-name=""
                        >Section 404 preconstruction notification</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-037"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply USACE-02"
                              title="Apply USACE-02"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-037"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss USACE-02"
                              title="Dismiss USACE-02"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-037"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo USACE-02"
                              title="Undo USACE-02"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-038" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-038"
                  aria-label="Select USACE-07"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show USACE-07 Compensatory mitigation accounting in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Compensatory mitigation accounting"
                        data-sw-name=""
                        >Compensatory mitigation accounting</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-038"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply USACE-07"
                              title="Apply USACE-07"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-038"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss USACE-07"
                              title="Dismiss USACE-07"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-038"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo USACE-07"
                              title="Undo USACE-07"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-039" data-decision="applied" hidden="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-039"
                  aria-label="Select WQ-08"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show WQ-08 Stormwater pollution prevention plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Stormwater pollution prevention plan"
                        data-sw-name=""
                        >Stormwater pollution prevention plan</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-039"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply WQ-08"
                              title="Apply WQ-08"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-039"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss WQ-08"
                              title="Dismiss WQ-08"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-039"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo WQ-08"
                              title="Undo WQ-08"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note=""
                  >Set by Hand · Feb 11, 2026 · Combined disturbance across the borings
                  exceeds one acre.</span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-040" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-040"
                  aria-label="Select WQ-12"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show WQ-12 Quarterly SWPPP inspection in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Quarterly SWPPP inspection"
                        data-sw-name=""
                        >Quarterly SWPPP inspection</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-040"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply WQ-12"
                              title="Apply WQ-12"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-040"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss WQ-12"
                              title="Dismiss WQ-12"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-040"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo WQ-12"
                              title="Undo WQ-12"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-041" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-041"
                  aria-label="Select WQ-19"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show WQ-19 In-water work turbidity monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                      ><span
                        class="bcn-sw-row__name"
                        title="In-water work turbidity monitoring"
                        data-sw-name=""
                        >In-water work turbidity monitoring</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-041"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply WQ-19"
                              title="Apply WQ-19"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-041"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss WQ-19"
                              title="Dismiss WQ-19"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-041"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo WQ-19"
                              title="Undo WQ-19"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
            <li class="bcn-sw-row" data-sw-row="cc-042" data-decision="">
              <span class="bcn-sw-row__check"
                ><esa-checkbox
                  size="sm"
                  data-sw-check="cc-042"
                  aria-label="Select WQ-23"
                ></esa-checkbox></span
              ><span class="bcn-sw-row__content"
                ><span class="bcn-sw-row__top"
                  ><button
                    type="button"
                    class="bcn-sw-row__hit"
                    aria-label="Show WQ-23 Spill prevention and response plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                      ><span
                        class="bcn-sw-row__name"
                        title="Spill prevention and response plan"
                        data-sw-name=""
                        >Spill prevention and response plan</span
                      ></span
                    ></button
                  ><span class="bcn-sw-row__marks"
                    ><span class="bcn-sw-row__state bcn-sw-row__state--applied"
                      ><esa-tooltip
                        text="Applied"
                        position="top"
                        data-sw-tip="applied"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Applied</span></span
                        ></esa-tooltip
                      ></span
                    ><span class="bcn-sw-row__state bcn-sw-row__state--dismissed"
                      ><esa-tooltip
                        text="Dismissed"
                        position="top"
                        data-sw-tip="dismissed"
                        align="center"
                        ><span
                          class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Dismissed</span></span
                        ></esa-tooltip
                      ></span
                    ></span
                  ><span class="bcn-sw-row__acts"
                    ><span class="bcn-sw-row__act bcn-sw-row__act--apply"
                      ><esa-tooltip
                        text="Apply to this component"
                        position="top"
                        align="center"
                        ><span data-sw-apply="cc-042"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Apply WQ-23"
                              title="Apply WQ-23"
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
                                  <path d="M20 6 9 17l-5-5"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--dismiss"
                      ><esa-tooltip text="Not applicable" position="top" align="center"
                        ><span data-sw-dismiss="cc-042"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Dismiss WQ-23"
                              title="Dismiss WQ-23"
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
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path></svg
                              ></span></button></span></span></esa-tooltip></span
                    ><span class="bcn-sw-row__act bcn-sw-row__act--undo"
                      ><esa-tooltip
                        text="Undo this decision"
                        position="top"
                        align="center"
                        ><span data-sw-undo="cc-042"
                          ><span
                            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                              aria-label="Undo WQ-23"
                              title="Undo WQ-23"
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
                                    d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                  ></path>
                                  <path d="M3 3v5h5"></path></svg
                              ></span></button></span></span></esa-tooltip></span></span></span
                ><span class="bcn-sw-row__note" data-sw-note="" hidden=""></span
                ><span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
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
                      <path
                        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                      ></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path></svg></span
                  ><span data-sw-flag-text=""></span></span
              ></span>
            </li>
          </ul>
          <div class="bcn-sw__none" data-sw-none="" hidden="">
            <div class="esa-empty-state esa-empty-state--sm">
              <h3 class="esa-empty-state__title typography-label-sm-strong">
                No commitments match these filters
              </h3>
              <div class="esa-empty-state__actions typography-label-md"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="bcn-sw__pane bcn-sw__pane--preview"
        aria-label="Selected commitment"
      >
        <div class="bcn-sw__scroll bcn-sw__scroll--pad">
          <div class="bcn-sw__nopreview" data-sw-nopreview="">
            <div class="esa-empty-state esa-empty-state--sm">
              <h3 class="esa-empty-state__title typography-label-sm-strong">
                Select a commitment to preview it
              </h3>
              <div class="esa-empty-state__actions typography-label-md"></div>
            </div>
          </div>
          <article class="bcn-sw-prev" data-sw-preview="cc-001" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-1</span>
              <h3 class="bcn-sw-prev__title">Worker environmental awareness training</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              All exploration crew shall complete environmental awareness training before
              site access, covering special-status species, avoidance buffers, and
              stop-work procedures.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-001"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                  ><span class="bcn-sw-prev__actname"
                    >Crew environmental awareness training</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-002" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-2</span>
              <h3 class="bcn-sw-prev__title">Nesting bird preconstruction survey</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              If exploration occurs during the nesting season (February 1 through August
              31), a qualified biologist shall survey for active nests within 500 feet of
              each work area no more than 7 days before work begins.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-002"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                  ><span class="bcn-sw-prev__actname"
                    >Nesting bird preconstruction survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-003" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-3</span>
              <h3 class="bcn-sw-prev__title">Swainson’s hawk nest buffer</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              During the Swainson’s hawk nesting season, a 0.25-mile no-disturbance buffer
              shall be maintained around active nests until a qualified biologist
              determines the young have fledged.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-003"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                  ><span class="bcn-sw-prev__actname"
                    >Swainson’s hawk nest buffer verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-004" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-4</span>
              <h3 class="bcn-sw-prev__title">Giant Garter Snake avoidance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Work areas within 200 feet of Giant Garter Snake aquatic habitat shall be
              surveyed by a qualified biologist within 24 hours before ground disturbance
              and fenced with exclusion fencing.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-004"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                  ><span class="bcn-sw-prev__actname"
                    >Giant Garter Snake preconstruction survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-005" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-5</span>
              <h3 class="bcn-sw-prev__title">Elderberry shrub avoidance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Elderberry shrubs with stems one inch or greater in diameter shall be
              avoided by a minimum 20-foot buffer, fenced and signed before exploration
              equipment arrives.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-005"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                  ><span class="bcn-sw-prev__actname">Elderberry buffer fencing</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-006" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-6</span>
              <h3 class="bcn-sw-prev__title">Western Pond Turtle clearance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Where exploration occurs within channels or ditches, a qualified biologist
              shall survey for Western Pond Turtle and relocate individuals outside the
              work area before work begins.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-006"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                  ><span class="bcn-sw-prev__actname">Pond turtle clearance survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-007" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-7</span>
              <h3 class="bcn-sw-prev__title">Delta Smelt in-water work window</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Over-water borings shall not occur during delta smelt spawning (December 1
              through June 30) unless real-time monitoring shows smelt are absent from the
              action area.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-007"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                  ><span class="bcn-sw-prev__actname"
                    >In-water work window verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-008" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-8</span>
              <h3 class="bcn-sw-prev__title">
                California Tiger Salamander upland survey
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Work areas within suitable upland habitat shall receive a protocol-level
              burrow survey before ground disturbance, and occupied burrows shall be
              avoided by 50 feet.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-008"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                  ><span class="bcn-sw-prev__actname">CTS burrow survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-009" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-9</span>
              <h3 class="bcn-sw-prev__title">Non-listed raptor nest buffer</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              During the nesting season, active nests of non-listed raptors shall receive
              a 250-foot no-disturbance buffer until the young have fledged.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-009"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                  ><span class="bcn-sw-prev__actname">Raptor buffer establishment</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-010" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-CUL-1</span>
              <h3 class="bcn-sw-prev__title">Inadvertent discovery stop-work protocol</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              If cultural materials are encountered, work shall halt within 100 feet of
              the find and a qualified archaeologist shall evaluate the discovery before
              work resumes.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-010"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                  ><span class="bcn-sw-prev__actname"
                    >Discovery protocol acknowledgement</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-011" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-CUL-2</span>
              <h3 class="bcn-sw-prev__title">Tribal monitor notification</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Culturally affiliated tribes shall receive no less than 14 days notice
              before ground disturbance in areas identified as culturally sensitive.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-011"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                  ><span class="bcn-sw-prev__actname">Tribal monitor notification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Reporting</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-012" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-HAZ-1</span>
              <h3 class="bcn-sw-prev__title">Drilling fluid containment</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Drilling fluids shall be fully contained and removed from the site. No
              discharge to surface water or to the levee prism is permitted.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-012"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                  ><span class="bcn-sw-prev__actname"
                    >Drilling fluid containment inspection</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-013" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-HAZ-2</span>
              <h3 class="bcn-sw-prev__title">Borehole abandonment</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Each boring shall be abandoned in accordance with county well-abandonment
              standards and the surface restored to preexisting contours within 30 days.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-013"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                  ><span class="bcn-sw-prev__actname"
                    >Borehole abandonment verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-014" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-NOI-1</span>
              <h3 class="bcn-sw-prev__title">Nighttime drilling noise limits</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Drilling between 10 PM and 7 AM shall not exceed 50 dBA Leq at the nearest
              residence, verified by monitoring on the first night of work at each site.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-014"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                  ><span class="bcn-sw-prev__actname">Nighttime noise verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-015" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-AIR-1</span>
              <h3 class="bcn-sw-prev__title">Fugitive dust control</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exposed surfaces and unpaved access roads shall be watered as needed to
              prevent visible dust, and vehicle speed on unpaved roads shall not exceed 15
              miles per hour.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations IS/MND — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-015"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                  ><span class="bcn-sw-prev__actname">Dust control implementation</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-016" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT401-3</span>
              <h3 class="bcn-sw-prev__title">
                Turbidity monitoring for over-water borings
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Turbidity shall be monitored upstream and downstream of over-water borings
              and shall not exceed background by more than 5 NTU.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations Section 401 Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-016"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                  ><span class="bcn-sw-prev__actname"
                    >Over-water turbidity monitoring</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-017" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT401-5</span>
              <h3 class="bcn-sw-prev__title">Spill prevention and response</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Spill response materials shall be staged within 100 feet of every drill rig
              and fueling location, and spills shall be reported within 24 hours.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations Section 401 Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-017"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                  ><span class="bcn-sw-prev__actname">Spill kit inspection</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-018" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT401-7</span>
              <h3 class="bcn-sw-prev__title">Dewatering discharge sampling</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Dewatering discharge shall be routed through sediment controls and sampled
              for turbidity and pH before release to any surface water.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations Section 401 Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-018"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                  ><span class="bcn-sw-prev__actname">Dewatering discharge sampling</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-019" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT401-9</span>
              <h3 class="bcn-sw-prev__title">Wet-season erosion control</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Between October 15 and April 15, disturbed work areas shall be stabilized
              with erosion control before any forecast rain event of one-half inch or
              more.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Geotechnical Investigations Section 401 Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-019"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                  ><span class="bcn-sw-prev__actname"
                    >Pre-storm erosion control inspection</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-020" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">LSAA-2</span>
              <h3 class="bcn-sw-prev__title">Channel work only when dry</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exploration within the bed, bank or channel of any stream shall occur only
              when the channel is dry or flow has been diverted around the work area.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >CDFW Lake or Streambed Alteration Agreement — Geotechnical</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 8, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-020"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                  ><span class="bcn-sw-prev__actname">Dry-channel verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-021" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">LSAA-4</span>
              <h3 class="bcn-sw-prev__title">Riparian vegetation removal limits</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              During fall bird migration (September 1 through December 15), removal of
              riparian vegetation shall be limited to the minimum necessary for rig
              access, and cleared areas shall be replanted at a 3:1 ratio.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >CDFW Lake or Streambed Alteration Agreement — Geotechnical</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 8, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-021"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                  ><span class="bcn-sw-prev__actname">Riparian replanting report</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Reporting</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-022" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">LSAA-6</span>
              <h3 class="bcn-sw-prev__title">Splittail spawning window</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              In-channel work in Sacramento Splittail spawning habitat shall not occur
              between February 1 and June 30.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >CDFW Lake or Streambed Alteration Agreement — Geotechnical</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 8, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-022"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                  ><span class="bcn-sw-prev__actname">Spawning window verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-023" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">G408-1</span>
              <h3 class="bcn-sw-prev__title">Levee toe setback for borings</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Borings shall be located no closer than 15 feet from the landside levee toe
              unless approved in writing by the District.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >USACE Section 408 Permission — Geotechnical Exploration</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 22, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-023"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                  ><span class="bcn-sw-prev__actname">Boring location plan submittal</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-024" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">G408-3</span>
              <h3 class="bcn-sw-prev__title">Levee deformation monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exploration within 100 feet of a federal project levee shall be accompanied
              by deformation monitoring before, during and after drilling.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >USACE Section 408 Permission — Geotechnical Exploration</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 22, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-024"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                  ><span class="bcn-sw-prev__actname">Levee deformation survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-025" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">G408-5</span>
              <h3 class="bcn-sw-prev__title">Casing installation vibration limits</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Driven casing or sheet pile within 300 feet of a levee shall not exceed 0.5
              in/sec peak particle velocity at the levee crown.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >USACE Section 408 Permission — Geotechnical Exploration</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Jan 22, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-025"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                  ><span class="bcn-sw-prev__actname"
                    >Vibration monitoring at levee crown</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-026" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-03</span>
              <h3 class="bcn-sw-prev__title">Nesting bird preconstruction survey</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A qualified biologist shall conduct preconstruction surveys for nesting
              birds within 500 feet of ground-disturbing activity no more than 7 days
              before the start of work during the nesting season.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-026"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                  ><span class="bcn-sw-prev__actname"
                    >Nesting-bird preconstruction survey</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-027" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">CUL-02</span>
              <h3 class="bcn-sw-prev__title">
                Worker cultural resources awareness training
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              All construction personnel shall receive cultural resources sensitivity
              training before beginning work, covering identification of archaeological
              materials and required stop-work procedures.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-027"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                  ><span class="bcn-sw-prev__actname"
                    >Cultural resources worker training</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-028" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">NOI-03</span>
              <h3 class="bcn-sw-prev__title">Construction noise monitoring plan</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A noise monitoring plan shall be submitted at least 30 days before the start
              of shaft construction where work occurs within 1,000 feet of a sensitive
              receptor.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-028"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                  ><span class="bcn-sw-prev__actname"
                    >Noise monitoring plan submittal</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-029" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">AIR-04</span>
              <h3 class="bcn-sw-prev__title">Construction fugitive dust control</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exposed surfaces shall be watered to maintain minimum soil moisture of 12
              percent, and vehicle speed on unpaved roads shall not exceed 15 miles per
              hour.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-029"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                  ><span class="bcn-sw-prev__actname"
                    >Fugitive dust control implementation</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-030" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">TRA-11</span>
              <h3 class="bcn-sw-prev__title">Haul route compliance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Construction traffic shall use only designated haul routes, and levee road
              segments shall be inspected monthly for load-related damage.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-030"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                  ><span class="bcn-sw-prev__actname"
                    >Haul route compliance verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-031" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">VEG-06</span>
              <h3 class="bcn-sw-prev__title">
                Revegetation of temporarily disturbed areas
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Temporarily disturbed areas shall be revegetated with a native seed mix
              approved by the resource agencies within one growing season of disturbance.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-031"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                  ><span class="bcn-sw-prev__actname"
                    >Revegetation plan agency review</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-032" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">NOI-12</span>
              <h3 class="bcn-sw-prev__title">Vibration limits for adjacent structures</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Ground-borne vibration shall not exceed 0.2 in/sec PPV at any structure of
              normal construction, monitored continuously during impact activities.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >Delta Conveyance Project Final EIR — MMRP</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-032"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                  ><span class="bcn-sw-prev__actname"
                    >Vibration monitoring at receptors</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-033" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">ITP-6.2</span>
              <h3 class="bcn-sw-prev__title">
                Giant Garter Snake active-season restriction
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Ground disturbance within 200 feet of Giant Garter Snake aquatic habitat
              shall be restricted to the active season, May 1 through October 1.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-033"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                  ><span class="bcn-sw-prev__actname"
                    >Active-season work verification</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Monitoring</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-034" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">ITP-7.1</span>
              <h3 class="bcn-sw-prev__title">
                Swainson’s hawk foraging habitat mitigation
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Permanent loss of Swainson’s hawk foraging habitat shall be mitigated at a
              1:1 ratio through conservation easements approved by CDFW.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-034"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                  ><span class="bcn-sw-prev__actname"
                    >Foraging habitat mitigation ledger</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Reporting</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-035" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">ITP-9.4</span>
              <h3 class="bcn-sw-prev__title">Delta Smelt entrainment avoidance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              In-water construction shall be prohibited between December 1 and June 30
              unless real-time monitoring demonstrates delta smelt are absent from the
              action area.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-035"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="" hidden="">
              <h4 class="bcn-sw-prev__efftitle">Creates 0 actions on this component</h4>
              <ul class="bcn-sw-prev__actions"></ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-036" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">ITP-11.3</span>
              <h3 class="bcn-sw-prev__title">Tidal marsh restoration monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Restored tidal marsh acreage shall be monitored annually for 10 years
              against performance criteria for vegetation cover, channel density, and fish
              access.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-036"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="" hidden="">
              <h4 class="bcn-sw-prev__efftitle">Creates 0 actions on this component</h4>
              <ul class="bcn-sw-prev__actions"></ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-037" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">USACE-02</span>
              <h3 class="bcn-sw-prev__title">Section 404 preconstruction notification</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              The permittee shall submit preconstruction notification to the District
              Engineer at least 45 days before commencing work in waters of the United
              States.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-037"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                  ><span class="bcn-sw-prev__actname"
                    >Preconstruction notification submittal</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Reporting</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-038" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">USACE-07</span>
              <h3 class="bcn-sw-prev__title">Compensatory mitigation accounting</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Permanent and temporary impacts to jurisdictional waters shall be accounted
              against the approved mitigation ledger and reported with each annual
              submittal.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-038"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                  ><span class="bcn-sw-prev__actname">Mitigation ledger update</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Reporting</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-039" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-08</span>
              <h3 class="bcn-sw-prev__title">Stormwater pollution prevention plan</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A Stormwater Pollution Prevention Plan shall be prepared by a Qualified
              SWPPP Developer and implemented before any ground disturbance exceeding one
              acre.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >SWRCB Section 401 Water Quality Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Sep 15, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-039"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                  ><span class="bcn-sw-prev__actname"
                    >SWPPP preparation and submittal</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-040" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-12</span>
              <h3 class="bcn-sw-prev__title">Quarterly SWPPP inspection</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A Qualified SWPPP Practitioner shall inspect all stormwater controls
              quarterly and within 48 hours of any qualifying rain event.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >SWRCB Section 401 Water Quality Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-040"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                  ><span class="bcn-sw-prev__actname">SWPPP quarterly inspection</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-041" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-19</span>
              <h3 class="bcn-sw-prev__title">In-water work turbidity monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Turbidity shall be monitored upstream and downstream of in-water work and
              shall not exceed background by more than 5 NTU.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >SWRCB Section 401 Water Quality Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-041"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="" hidden="">
              <h4 class="bcn-sw-prev__efftitle">Creates 0 actions on this component</h4>
              <ul class="bcn-sw-prev__actions"></ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-042" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-23</span>
              <h3 class="bcn-sw-prev__title">Spill prevention and response plan</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A spill prevention and response plan shall be maintained on site, with
              response materials staged within 100 feet of any fueling or fluid transfer
              location.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val"
                  >SWRCB Section 401 Water Quality Certification</span
                >
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Requirements</span
                ><span class="bcn-key-value__val">1 requirement</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Added to the project</span
                ><span class="bcn-key-value__val">Oct 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__rec" data-sw-prev-rec="" hidden="">
              <h4 class="bcn-sw-prev__efftitle" data-sw-prev-rectitle="">
                Recommended not applicable
              </h4>
              <ul class="bcn-sw-prev__reasons" data-sw-prev-reasons=""></ul>
              <span data-sw-prev-accept="cc-042"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Dismiss with This Reason</span>
                  </button></span
                ></span
              >
            </section>
            <section class="bcn-sw-prev__effect" data-sw-prev-effect="">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                  ><span class="bcn-sw-prev__actname">Spill response plan submittal</span
                  ><span class="bcn-sw-prev__acttype"
                    ><span
                      class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Tracking</span></span
                    ></span
                  >
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Decision</span
                ><span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <span data-sw-prev-ratwrap=""
                ><div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Rationale</span
                  ><span
                    class="bcn-sw-prev__decval"
                    data-sw-prev-rationale=""
                  ></span></div
              ></span>
            </section>
          </article>
        </div>
      </section>
    </div>
  </div>
  <div slot="footer" class="bcn-sw__foot">
    <span data-sw-close=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Close</span>
        </button></span
      ></span
    >
  </div></esa-side-dialog
>
```

## Styles
```css
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-tl__pop .bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
  display: inline-block;
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-sw {
  --side-dialog-width-lg: 1180px;
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-backdrop-filter: blur(2px);
  --typography-label-xs-font-size: var(--font-size-150);
}
.bcn-sw__body {
  gap: var(--spacing-400);
  height: 100%;
  min-height: 0;
  color: var(--color-content-default);
  flex-direction: column;
  display: flex;
}
.bcn-sw__head {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-sw__headtitle {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  margin: 0;
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw__head .esa-badge {
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
  background: 0 0;
}
.bcn-sw__search {
  width: 100%;
  display: inline-flex;
}
.bcn-sw__search esa-text-field {
  width: 100%;
}
.bcn-sw__lead {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}
.bcn-sw__figures {
  align-items: center;
  gap: var(--spacing-500);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw__figure {
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0;
  display: inline-flex;
}
.bcn-sw__figval {
  font-size: var(--font-size-500);
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default);
}
.bcn-sw__figlabel {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
}
.bcn-sw__bar {
  width: 140px;
}
.bcn-sw__controls {
  flex: none;
}
.bcn-sw__panes {
  gap: var(--spacing-400);
  flex: 1;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: stretch;
  min-height: 0;
  display: grid;
}
.bcn-sw__pane {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
}
.bcn-sw__pane--list {
  background: var(--color-background-elevation-sunken);
  position: relative;
  overflow: hidden;
}
.bcn-sw__scroll {
  min-height: 0;
  padding: var(--spacing-300);
  flex: 1;
  overflow-y: auto;
}
.bcn-sw__scroll--pad {
  padding: var(--spacing-500);
}
.bcn-sw__rows {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw__none[hidden],
.bcn-sw__nopreview[hidden] {
  display: none;
}
.bcn-sw-row {
  align-items: start;
  column-gap: var(--spacing-400);
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  cursor: pointer;
  grid-template-columns: auto minmax(0, 1fr);
  transition:
    border-color 0.12s,
    background 0.12s;
  display: grid;
}
.bcn-sw-row[hidden] {
  display: none;
}
.bcn-sw-row:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-sw-row[data-active] {
  border-color: var(--color-background-brand);
  background: color-mix(
    in srgb,
    var(--color-background-brand) 5%,
    var(--color-background-elevation-raised)
  );
}
.bcn-sw-row__content {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-sw-row__top {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
  display: flex;
}
.bcn-sw-row__check {
  cursor: default;
  align-items: center;
  min-height: 1.75rem;
  display: inline-flex;
}
.bcn-sw-row__hit {
  min-width: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex: 1;
  padding: 0;
  display: flex;
}
.bcn-sw-row__hit:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-sw-row__titleline {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: nowrap;
  min-width: 0;
  display: flex;
}
.bcn-sw-row__name {
  min-width: 0;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-sw-row__name mark {
  background: var(
    --color-background-utility-warning-subtle,
    color-mix(in srgb, var(--color-background-utility-warning) 25%, transparent)
  );
  color: inherit;
  border-radius: 2px;
}
.bcn-sw-row__note {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-sw-row__note[hidden] {
  display: none;
}
.bcn-sw-row__flag {
  align-items: center;
  gap: var(--spacing-100);
  min-width: 0;
  color: var(--color-content-utility-warning);
  font-size: 0.8125rem;
  line-height: 1.35;
  display: flex;
}
.bcn-sw-row__flag > span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-sw-row__flag[hidden] {
  display: none;
}
.bcn-sw-row__marks {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  display: inline-flex;
}
.bcn-sw-row__state {
  flex: none;
  display: none;
}
.bcn-sw-row[data-decision="applied"] .bcn-sw-row__state--applied,
.bcn-sw-row[data-decision="dismissed"] .bcn-sw-row__state--dismissed {
  display: inline-flex;
}
.bcn-sw-row__state--applied .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-background-brand);
  border: 1px solid var(--color-border-brand, var(--color-border-default));
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-row__state--dismissed .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-row__acts {
  align-items: center;
  gap: var(--spacing-150);
  visibility: hidden;
  cursor: default;
  flex: none;
  margin-left: auto;
  display: flex;
}
.bcn-sw-row:hover .bcn-sw-row__acts,
.bcn-sw-row:focus-within .bcn-sw-row__acts {
  visibility: visible;
}
.bcn-sw-row[data-decision="applied"] .bcn-sw-row__act--apply,
.bcn-sw-row[data-decision="dismissed"] .bcn-sw-row__act--dismiss,
.bcn-sw-row[data-decision=""] .bcn-sw-row__act--undo {
  display: none;
}
.bcn-sw__listhead {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-height: 44px;
  padding: var(--spacing-200) var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex: none;
  display: flex;
}
.bcn-sw__listcount {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-sw__listacts {
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
  display: flex;
}
.bcn-sw__listacts[hidden] {
  display: none;
}
.bcn-sw-prev {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-sw-prev[hidden] {
  display: none;
}
.bcn-sw-prev__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw-prev__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
}
.bcn-sw-prev__doc {
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  background: var(--bcn-citation-bg);
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.65;
}
.bcn-sw-prev__facts {
  gap: var(--spacing-300) var(--spacing-500);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
}
.bcn-sw-prev__effect,
.bcn-sw-prev__rec,
.bcn-sw-prev__decision {
  gap: var(--spacing-250, 0.625rem);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-sw-prev__rec {
  align-items: flex-start;
}
.bcn-sw-prev__decision {
  gap: var(--spacing-300) var(--spacing-500);
  flex-flow: wrap;
}
.bcn-sw-prev__effect[hidden],
.bcn-sw-prev__rec[hidden],
.bcn-sw-prev__decision[hidden],
[data-sw-prev-ratwrap][hidden] {
  display: none;
}
.bcn-sw-prev__efftitle {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-sw-prev__reasons {
  gap: var(--spacing-100);
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  flex-direction: column;
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
}
.bcn-sw-prev__actions {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw-prev__action {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-sw-prev__actname {
  min-width: 0;
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  flex: 1;
}
.bcn-sw-prev__acttype .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-prev__decval {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
}
.bcn-sw__foot {
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-sw-rationale {
  --z-modal-backdrop: 1400;
  --z-modal: 1401;
}
.bcn-sw-rationale__body {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-sw-rationale__what {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-sw-rationale__warn[hidden],
[data-sw-dialog-ratwrap][hidden] {
  display: none;
}
.bcn-sw-rationale__foot {
  justify-content: flex-end;
  gap: var(--spacing-300);
  width: 100%;
  display: flex;
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
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--primary {
  --_badge-bg: var(--color-background-brand, #46a758);
  --_badge-text: var(--color-content-default-knockout, #fcfcfc);
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
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
}
.bcn-filterbar__top {
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__bottom {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__top + .bcn-filterbar__bottom {
  border-top: 1px solid var(--color-border-default);
}
.bcn-filterbar__group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 380px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__search--alone {
  flex: 1;
  margin-left: 0;
}
.bcn-filterbar__scope {
  margin-left: var(--spacing-600);
}
.bcn-filterbar__search--filters {
  width: 20rem;
  min-width: 0;
  margin-left: 0;
}
.bcn-filterbar__sort {
  margin-left: var(--spacing-600);
  --typography-label-md-font-size: 14px;
}
.bcn-filterbar__sort esa-select {
  --_field-padding-y: calc((32px - 1lh) / 2 - var(--form-border-width, 1px));
  width: 9rem;
}
.bcn-filterbar--compact {
  --typography-microcopy-md-font-size: 14px;
  --typography-microcopy-md-strong-font-size: 14px;
  --typography-microcopy-md-subtle-font-size: 14px;
}
.bcn-filterbar--compact esa-button-toggle {
  --_pad-y: calc((26px - 1lh) / 2);
}
.bcn-filterbar--compact esa-button-toggle[data-icons] {
  --_icon-size: 14px;
  --_pad-y: calc((26px - max(1lh, 14px)) / 2);
}
.bcn-filterbar--compact esa-text-field {
  --_field-padding-y: calc((32px - 1.3em) / 2 - var(--form-border-width, 1px));
}
.bcn-filterbar--compact esa-switch-toggle {
  align-items: center;
  display: inline-flex;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--xs {
  --_empty-icon-size: var(--empty-state-icon-size-xs, 24px);
  padding: var(--spacing-300, 0.75rem) var(--spacing-200, 0.5rem);
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state--lg {
  --_empty-icon-size: var(--empty-state-icon-size-lg, 64px);
  padding: var(--spacing-800, 4rem) var(--spacing-400, 1rem);
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
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
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
}
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__header {
  margin-bottom: var(--spacing-100, 0.25rem);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.esa-progress-bar__label {
  color: var(--color-content-default, #202020);
}
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
}
.esa-progress-bar__track {
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  position: relative;
  overflow: hidden;
}
.esa-progress-bar__fill {
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  height: 100%;
  transition: width 0.3s;
}
.esa-progress-bar--xs {
  --_progress-height: var(--progress-bar-height-xs, 2px);
}
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
}
.esa-progress-bar--lg {
  --_progress-height: var(--progress-bar-height-lg, 12px);
}
.esa-progress-bar--success {
  --_progress-fill-bg: var(--color-background-utility-success, #30a46c);
}
.esa-progress-bar--warning {
  --_progress-fill-bg: var(--color-background-utility-warning, #ffc53d);
}
.esa-progress-bar--danger {
  --_progress-fill-bg: var(--color-background-utility-danger, #e5484d);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate
    var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
.esa-progress-bar__fill {
  transition: none;
}
.esa-progress-bar__fill {
  background: highlight;
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
- `--animation-indeterminate`: 1.5s ease-in-out infinite _(semantic)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #fcfcfc _(component)_
- `--badge-border-color`: #dcdcdc _(component)_
- `--badge-text-color`: #525252 _(component)_
- `--bcn-citation-bg`: #f6f3ed _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
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
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-brand`: #b9d6d2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--font-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(primitive)_
- `--form-border-width`: 1px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--progress-bar-height-lg`: 12px _(component)_
- `--progress-bar-height-md`: 8px _(component)_
- `--progress-bar-height-sm`: 4px _(component)_
- `--progress-bar-height-xs`: 2px _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 400 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
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
