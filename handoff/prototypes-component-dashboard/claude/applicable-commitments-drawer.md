# Applicable Commitments drawer

The surface that actually settles applicability: a wide side drawer listing the project commitments not yet decided for THIS component, with a preview beside the list, filters that work, and decisions that stage before they commit. It replaces the Component Setup tab, and it is the largest single piece of new design in this epic.

## Key decisions
- DECISIONS STAGE, THEY DO NOT FIRE. Apply and Dismiss mark a commitment and update the pending-changes summary; nothing is written until Save. That is what makes bulk action safe to offer — prod applies immediately, one PATCH per click, with no way back.
- Every count is scoped to this component and agrees with the list it labels. The view chips (Needs a decision / New since review / Applied / Dismissed) each carry their own figure, so the number and the list can never disagree the way prod's tab badge does.
- A decision names its CONSEQUENCE before it is made — applying materializes action implementations onto the component, which is what fills the tracker. Prod never states this anywhere.
- Filters are keyword search plus Source document / Requirement type / Species. Selecting one does NOT spawn a chip row: the control already shows its own state, and chips restating it were removed at review (2026-08-14).
- Rationale is captured per commitment. A batch rationale must warn, naming how many existing rationales it would overwrite — prod overwrites silently.
- Clicking anywhere on a commitment card except the checkbox and the action buttons opens its preview. The checkbox owns generous space of its own so it reads as the separate, actionable thing it is.

## Gotchas
- THE DIAGNOSIS THIS SURFACE EXISTS FOR: ComponentCommitment.IsApplicable is NOT NULL, so there is no stored "pending" state. vComponentCommitmentDecisions manufactures it by LEFT JOINing every component in the project against every commitment in the project and calling the misses Pending. The badge therefore counts the PROJECT, re-inflates whenever any source document gains a commitment, and can never reach zero. Do not port that figure. Full teardown, including the seven defects it produces, is in docs/component-setup-model-comparison.md.
- REQUIREMENT TYPE AND SPECIES ARE FILTERS ONLY — decided 2026-08-17. They are deliberately NOT shown on the commitment card or in the preview. An earlier pass carried them as a meta line under each row; it was cut as tagline noise, and after review the decision is to leave them off rather than restore them. They remain useful for narrowing a large set and are not useful as per-row decoration. Do not re-add them to the card as part of "completing" it.
- THERE IS NO UNSET PATH TODAY. Once a ComponentCommitment row exists it is applied or dismissed forever. This surface assumes undo is possible; it does NOT show what happens to the action implementations a dismissal already deleted. Resolve that before slicing — it is one of the three open questions in the model-comparison doc.
- A "Suggested" affordance was prototyped and REMOVED (2026-08-14). It matched on shared species or requirement type with commitments already applied here, which is a weak signal on a decision with real consequences, and the prototype was authoring it by hand rather than deriving it. Do not reintroduce it without a real signal behind it.
- The list and the preview scroll INDEPENDENTLY, and the bulk action bar is static rather than living at the bottom of the list — a user acting on several items should not have to scroll to the end of the list to find the controls.

## Done when
- Opening the drawer shows the undecided set with counts that match each view; filters and keyword search narrow the list; selecting a card opens its preview; Apply/Dismiss stage a decision and update a pending-changes summary without writing; Save commits and Cancel discards; a batch rationale warns before overwriting existing ones; nothing on the surface shows requirement type or species outside the filter controls.

## Markup
```html
<esa-side-dialog
  id="bcn-setup-workspace"
  class="bcn-sw"
  size="lg"
  position="right"
  heading="Applicable Commitments"
  data-setup-workspace="true"
>
  <div slot="header" class="bcn-sw__head">
    <span class="esa-icon esa-icon--lg" aria-hidden="true">
      <svg
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
        <path d="m9 14 2 2 4-4"></path>
      </svg>
    </span>
    <h2 class="bcn-sw__headtitle">Applicable Commitments</h2>
    <span
      class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
    >
      <span class="esa-badge__text">Bouldin Island Launch Shaft</span>
    </span>
  </div>
  <div class="bcn-sw__body">
    <header class="bcn-sw__lead">
      <div class="bcn-sw__figures">
        <div class="bcn-sw__figure" data-sw-figure="undecided">
          <div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">26</div>
            <div class="esa-stat__label typography-label-md">Need a decision</div>
          </div>
        </div>
        <div class="bcn-sw__figure" data-sw-figure="new">
          <div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">8</div>
            <div class="esa-stat__label typography-label-md">New since last review</div>
          </div>
        </div>
        <div class="bcn-sw__figure bcn-sw__figure--progress" data-sw-figure="decided">
          <div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">11 of 37</div>
            <div class="esa-stat__label typography-label-md">Decided</div>
          </div>
          <div class="bcn-sw__bar" data-sw-progress="">
            <div
              class="esa-progress-bar esa-progress-bar--sm esa-progress-bar--primary"
              role="progressbar"
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Progress"
            >
              <div class="esa-progress-bar__header typography-body-xs">
                <span class="esa-progress-bar__value">30%</span>
              </div>
              <div class="esa-progress-bar__track">
                <div class="esa-progress-bar__fill" style="width: 30%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- ── 2 + 3. View toggle and the facets it recomputes. Segment counts are counted
         off the rendered rows by the controller, so a segment can never claim a number
         the list beneath it does not produce. ── -->
    <div class="bcn-sw__controls">
      <div class="bcn-filterbar">
        <div class="bcn-filterbar__top">
          <div class="bcn-filterbar__group">
            <esa-button-toggle
              slot="lead"
              data-sw-view="true"
              size="md"
              label="View"
            ></esa-button-toggle>
          </div>
        </div>
        <div class="bcn-filterbar__bottom">
          <span class="bcn-filterbar__label">Filters</span>
          <div
            class="esa-filter-container typography-label-md"
            style="
              --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
              --_filter-container-row-gap: var(--spacing-200, 0.5rem);
            "
          >
            <span class="bcn-sw__search">
              <esa-text-field
                data-sw-search="true"
                size="sm"
                placeholder="Search commitments…"
              ></esa-text-field>
            </span>
            <esa-filter-dropdown
              data-sw-facet="source"
              name="source"
              label="Source document"
              multiple=""
              size="sm"
            ></esa-filter-dropdown>
            <esa-filter-dropdown
              data-sw-facet="type"
              name="type"
              label="Requirement type"
              multiple=""
              size="sm"
            ></esa-filter-dropdown>
            <esa-filter-dropdown
              data-sw-facet="species"
              name="species"
              label="Species"
              multiple=""
              size="sm"
            ></esa-filter-dropdown>
          </div>
          <span class="bcn-filterbar__clear">
            <span data-sw-clear=""
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
          </span>
        </div>
      </div>
    </div>
    <!-- ── 4. Two panes: the list decides, the preview explains. .sidebar primitive —
         list ~40%, preview the rest. ── -->
    <div class="bcn-sw__panes">
      <section class="bcn-sw__pane bcn-sw__pane--list" aria-label="Commitments in view">
        <div class="bcn-sw__listhead">
          <esa-checkbox
            size="sm"
            data-sw-check-all="true"
            aria-label="Select every commitment in view"
          ></esa-checkbox>
          <span class="bcn-sw__listcount" data-sw-listcount="">26 commitments</span>
          <span class="bcn-sw__listacts" data-sw-bulk="" hidden="">
            <span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-apply="true"
              >
                <span class="esa-button__label">Apply</span>
              </button></span
            >
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-dismiss="true"
              >
                <span class="esa-button__label">Dismiss</span>
              </button></span
            >
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-clear="true"
              >
                <span class="esa-button__label">Clear</span>
              </button></span
            >
          </span>
        </div>
        <div class="bcn-sw__scroll" data-sw-scroll="">
          <ul class="bcn-sw__rows" data-sw-rows="">
            <li
              class="bcn-sw-row"
              data-sw-row="cc-001"
              data-code="BIO-03"
              data-decision="applied"
              data-new="false"
              data-source="feir"
              data-type="Survey"
              data-species="SWHA"
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-001"
                  aria-label="Select BIO-03 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-001"
                    aria-label="Show BIO-03 Nesting bird preconstruction survey in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Nesting bird preconstruction survey"
                        >Nesting bird preconstruction survey</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-001">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-03"
                          title="Apply BIO-03"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-001">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-03"
                          title="Dismiss BIO-03"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-001">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-03"
                            title="Undo BIO-03"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-002"
              data-code="BIO-21"
              data-decision="applied"
              data-new="false"
              data-source="itp"
              data-type="Avoidance &amp; BMPs"
              data-species="GGS"
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-002"
                  aria-label="Select BIO-21 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-002"
                    aria-label="Show BIO-21 Giant garter snake avoidance measures in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-21</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Giant garter snake avoidance measures"
                        >Giant garter snake avoidance measures</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-002">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-21"
                          title="Apply BIO-21"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-002">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-21"
                          title="Dismiss BIO-21"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-002">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-21"
                            title="Undo BIO-21"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-003"
              data-code="CUL-02"
              data-decision="applied"
              data-new="false"
              data-source="feir"
              data-type="Training"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-003"
                  aria-label="Select CUL-02 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-003"
                    aria-label="Show CUL-02 Worker cultural resources awareness training in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Worker cultural resources awareness training"
                        >Worker cultural resources awareness training</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-003">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply CUL-02"
                          title="Apply CUL-02"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-003">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss CUL-02"
                          title="Dismiss CUL-02"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-003">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo CUL-02"
                            title="Undo CUL-02"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-004"
              data-code="WQ-08"
              data-decision="applied"
              data-new="false"
              data-source="swrcb"
              data-type="Plan Submittal"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-004"
                  aria-label="Select WQ-08 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-004"
                    aria-label="Show WQ-08 Stormwater pollution prevention plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Stormwater pollution prevention plan"
                        >Stormwater pollution prevention plan</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-004">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply WQ-08"
                          title="Apply WQ-08"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-004">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss WQ-08"
                          title="Dismiss WQ-08"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-004">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo WQ-08"
                            title="Undo WQ-08"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-005"
              data-code="NOI-03"
              data-decision="applied"
              data-new="false"
              data-source="feir"
              data-type="Plan Submittal"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-005"
                  aria-label="Select NOI-03 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-005"
                    aria-label="Show NOI-03 Construction noise monitoring plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Construction noise monitoring plan"
                        >Construction noise monitoring plan</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-005">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply NOI-03"
                          title="Apply NOI-03"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-005">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss NOI-03"
                          title="Dismiss NOI-03"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-005">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo NOI-03"
                            title="Undo NOI-03"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-006"
              data-code="AIR-04"
              data-decision="applied"
              data-new="false"
              data-source="feir"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-006"
                  aria-label="Select AIR-04 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-006"
                    aria-label="Show AIR-04 Fugitive dust control in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span>
                      <span class="bcn-sw-row__name" title="Fugitive dust control"
                        >Fugitive dust control</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-006">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply AIR-04"
                          title="Apply AIR-04"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-006">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss AIR-04"
                          title="Dismiss AIR-04"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-006">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo AIR-04"
                            title="Undo AIR-04"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-007"
              data-code="GEO-01"
              data-decision="applied"
              data-new="false"
              data-source="feir"
              data-type="Inspection"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-007"
                  aria-label="Select GEO-01 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-007"
                    aria-label="Show GEO-01 Geotechnical exploration site restoration in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">GEO-01</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Geotechnical exploration site restoration"
                        >Geotechnical exploration site restoration</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-007">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply GEO-01"
                          title="Apply GEO-01"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-007">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss GEO-01"
                          title="Dismiss GEO-01"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-007">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo GEO-01"
                            title="Undo GEO-01"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-008"
              data-code="BIO-44"
              data-decision="dismissed"
              data-new="false"
              data-source="itp"
              data-type="Monitoring"
              data-species="SACR"
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-008"
                  aria-label="Select BIO-44 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-008"
                    aria-label="Show BIO-44 Tidal marsh restoration monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-44</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Tidal marsh restoration monitoring"
                        >Tidal marsh restoration monitoring</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-008">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-44"
                          title="Apply BIO-44"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-008">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-44"
                          title="Dismiss BIO-44"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-008">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-44"
                            title="Undo BIO-44"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-009"
              data-code="BIO-52"
              data-decision="dismissed"
              data-new="false"
              data-source="itp"
              data-type="Monitoring"
              data-species="DS"
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-009"
                  aria-label="Select BIO-52 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-009"
                    aria-label="Show BIO-52 Fish screen approach velocity verification in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-52</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Fish screen approach velocity verification"
                        >Fish screen approach velocity verification</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-009">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-52"
                          title="Apply BIO-52"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-009">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-52"
                          title="Dismiss BIO-52"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-009">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-52"
                            title="Undo BIO-52"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-010"
              data-code="WQ-19"
              data-decision="dismissed"
              data-new="false"
              data-source="swrcb"
              data-type="Monitoring"
              data-species="DS"
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-010"
                  aria-label="Select WQ-19 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-010"
                    aria-label="Show WQ-19 In-water work turbidity monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span>
                      <span
                        class="bcn-sw-row__name"
                        title="In-water work turbidity monitoring"
                        >In-water work turbidity monitoring</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-010">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply WQ-19"
                          title="Apply WQ-19"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-010">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss WQ-19"
                          title="Dismiss WQ-19"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-010">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo WQ-19"
                            title="Undo WQ-19"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-011"
              data-code="TRA-07"
              data-decision="dismissed"
              data-new="false"
              data-source="feir"
              data-type="Plan Submittal"
              data-species=""
              data-rationale="true"
              hidden=""
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-011"
                  aria-label="Select TRA-07 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-011"
                    aria-label="Show TRA-07 Barge landing traffic management in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">TRA-07</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Barge landing traffic management"
                        >Barge landing traffic management</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-011">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply TRA-07"
                          title="Apply TRA-07"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-011">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss TRA-07"
                          title="Dismiss TRA-07"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-011">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo TRA-07"
                            title="Undo TRA-07"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-012"
              data-code="BIO-09"
              data-decision=""
              data-new="false"
              data-source="itp"
              data-type="Avoidance &amp; BMPs"
              data-species="SWHA"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-012"
                  aria-label="Select BIO-09 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-012"
                    aria-label="Show BIO-09 Swainson’s hawk nest buffer in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-09</span>
                      <span class="bcn-sw-row__name" title="Swainson’s hawk nest buffer"
                        >Swainson’s hawk nest buffer</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-012">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-09"
                          title="Apply BIO-09"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-012">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-09"
                          title="Dismiss BIO-09"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-012">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-09"
                            title="Undo BIO-09"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-013"
              data-code="BIO-18"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Training"
              data-species="SWHA GGS"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-013"
                  aria-label="Select BIO-18 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-013"
                    aria-label="Show BIO-18 Worker environmental awareness program in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-18</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Worker environmental awareness program"
                        >Worker environmental awareness program</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-013">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-18"
                          title="Apply BIO-18"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-013">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-18"
                          title="Dismiss BIO-18"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-013">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-18"
                            title="Undo BIO-18"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-014"
              data-code="BIO-27"
              data-decision=""
              data-new="false"
              data-source="itp"
              data-type="Survey"
              data-species="WPT"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-014"
                  aria-label="Select BIO-27 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-014"
                    aria-label="Show BIO-27 Western pond turtle relocation protocol in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-27</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Western pond turtle relocation protocol"
                        >Western pond turtle relocation protocol</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-014">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-27"
                          title="Apply BIO-27"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-014">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-27"
                          title="Dismiss BIO-27"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-014">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-27"
                            title="Undo BIO-27"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-015"
              data-code="BIO-30"
              data-decision=""
              data-new="false"
              data-source="itp"
              data-type="Survey"
              data-species="CTS"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-015"
                  aria-label="Select BIO-30 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-015"
                    aria-label="Show BIO-30 Vernal pool branchiopod wet-season survey in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-30</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Vernal pool branchiopod wet-season survey"
                        >Vernal pool branchiopod wet-season survey</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-015">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-30"
                          title="Apply BIO-30"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-015">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-30"
                          title="Dismiss BIO-30"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-015">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-30"
                            title="Undo BIO-30"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-016"
              data-code="BIO-36"
              data-decision=""
              data-new="false"
              data-source="itp"
              data-type="Avoidance &amp; BMPs"
              data-species="VELB"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-016"
                  aria-label="Select BIO-36 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-016"
                    aria-label="Show BIO-36 Valley elderberry shrub avoidance in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-36</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Valley elderberry shrub avoidance"
                        >Valley elderberry shrub avoidance</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-016">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-36"
                          title="Apply BIO-36"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-016">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-36"
                          title="Dismiss BIO-36"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-016">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-36"
                            title="Undo BIO-36"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-017"
              data-code="CUL-05"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-017"
                  aria-label="Select CUL-05 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-017"
                    aria-label="Show CUL-05 Inadvertent discovery stop-work protocol in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">CUL-05</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Inadvertent discovery stop-work protocol"
                        >Inadvertent discovery stop-work protocol</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-017">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply CUL-05"
                          title="Apply CUL-05"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-017">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss CUL-05"
                          title="Dismiss CUL-05"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-017">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo CUL-05"
                            title="Undo CUL-05"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-018"
              data-code="CUL-11"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Monitoring"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-018"
                  aria-label="Select CUL-11 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-018"
                    aria-label="Show CUL-11 Archaeological construction monitoring in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">CUL-11</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Archaeological construction monitoring"
                        >Archaeological construction monitoring</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-018">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply CUL-11"
                          title="Apply CUL-11"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-018">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss CUL-11"
                          title="Dismiss CUL-11"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-018">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo CUL-11"
                            title="Undo CUL-11"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-019"
              data-code="WQ-05"
              data-decision=""
              data-new="false"
              data-source="swrcb"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-019"
                  aria-label="Select WQ-05 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-019"
                    aria-label="Show WQ-05 Dewatering discharge management in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">WQ-05</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Dewatering discharge management"
                        >Dewatering discharge management</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-019">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply WQ-05"
                          title="Apply WQ-05"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-019">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss WQ-05"
                          title="Dismiss WQ-05"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-019">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo WQ-05"
                            title="Undo WQ-05"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-020"
              data-code="WQ-12"
              data-decision=""
              data-new="false"
              data-source="swrcb"
              data-type="Inspection"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-020"
                  aria-label="Select WQ-12 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-020"
                    aria-label="Show WQ-12 Quarterly SWPPP inspection in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span>
                      <span class="bcn-sw-row__name" title="Quarterly SWPPP inspection"
                        >Quarterly SWPPP inspection</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-020">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply WQ-12"
                          title="Apply WQ-12"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-020">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss WQ-12"
                          title="Dismiss WQ-12"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-020">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo WQ-12"
                            title="Undo WQ-12"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-021"
              data-code="VEG-06"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Plan Submittal"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-021"
                  aria-label="Select VEG-06 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-021"
                    aria-label="Show VEG-06 Revegetation of temporarily disturbed areas in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Revegetation of temporarily disturbed areas"
                        >Revegetation of temporarily disturbed areas</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-021">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply VEG-06"
                          title="Apply VEG-06"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-021">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss VEG-06"
                          title="Dismiss VEG-06"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-021">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo VEG-06"
                            title="Undo VEG-06"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-022"
              data-code="VEG-14"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-022"
                  aria-label="Select VEG-14 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-022"
                    aria-label="Show VEG-14 Invasive plant material controls in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">VEG-14</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Invasive plant material controls"
                        >Invasive plant material controls</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-022">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply VEG-14"
                          title="Apply VEG-14"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-022">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss VEG-14"
                          title="Dismiss VEG-14"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-022">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo VEG-14"
                            title="Undo VEG-14"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-023"
              data-code="TRA-11"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Inspection"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-023"
                  aria-label="Select TRA-11 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-023"
                    aria-label="Show TRA-11 Haul route compliance in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span>
                      <span class="bcn-sw-row__name" title="Haul route compliance"
                        >Haul route compliance</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-023">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply TRA-11"
                          title="Apply TRA-11"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-023">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss TRA-11"
                          title="Dismiss TRA-11"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-023">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo TRA-11"
                            title="Undo TRA-11"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-024"
              data-code="NOI-08"
              data-decision=""
              data-new="false"
              data-source="feir"
              data-type="Monitoring"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-024"
                  aria-label="Select NOI-08 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-024"
                    aria-label="Show NOI-08 Nighttime work noise limits in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">NOI-08</span>
                      <span class="bcn-sw-row__name" title="Nighttime work noise limits"
                        >Nighttime work noise limits</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-024">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply NOI-08"
                          title="Apply NOI-08"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-024">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss NOI-08"
                          title="Dismiss NOI-08"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-024">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo NOI-08"
                            title="Undo NOI-08"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-025"
              data-code="GEO-04"
              data-decision=""
              data-new="false"
              data-source="usace"
              data-type="Monitoring"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-025"
                  aria-label="Select GEO-04 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-025"
                    aria-label="Show GEO-04 Levee stability monitoring during exploration in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">GEO-04</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Levee stability monitoring during exploration"
                        >Levee stability monitoring during exploration</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-025">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply GEO-04"
                          title="Apply GEO-04"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-025">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss GEO-04"
                          title="Dismiss GEO-04"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-025">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo GEO-04"
                            title="Undo GEO-04"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-026"
              data-code="GEO-09"
              data-decision=""
              data-new="false"
              data-source="usace"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-026"
                  aria-label="Select GEO-09 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-026"
                    aria-label="Show GEO-09 Drilling fluid containment in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">GEO-09</span>
                      <span class="bcn-sw-row__name" title="Drilling fluid containment"
                        >Drilling fluid containment</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-026">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply GEO-09"
                          title="Apply GEO-09"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-026">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss GEO-09"
                          title="Dismiss GEO-09"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-026">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo GEO-09"
                            title="Undo GEO-09"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-027"
              data-code="USACE-02"
              data-decision=""
              data-new="false"
              data-source="usace"
              data-type="Reporting"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-027"
                  aria-label="Select USACE-02 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-027"
                    aria-label="Show USACE-02 Section 404 preconstruction notification in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Section 404 preconstruction notification"
                        >Section 404 preconstruction notification</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-027">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply USACE-02"
                          title="Apply USACE-02"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-027">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss USACE-02"
                          title="Dismiss USACE-02"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-027">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo USACE-02"
                            title="Undo USACE-02"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-028"
              data-code="USACE-07"
              data-decision=""
              data-new="false"
              data-source="usace"
              data-type="Reporting"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-028"
                  aria-label="Select USACE-07 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-028"
                    aria-label="Show USACE-07 Compensatory mitigation accounting in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Compensatory mitigation accounting"
                        >Compensatory mitigation accounting</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-028">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply USACE-07"
                          title="Apply USACE-07"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-028">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss USACE-07"
                          title="Dismiss USACE-07"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-028">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo USACE-07"
                            title="Undo USACE-07"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-029"
              data-code="BIO-39"
              data-decision=""
              data-new="false"
              data-source="itp"
              data-type="Reporting"
              data-species="SWHA GGS"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-029"
                  aria-label="Select BIO-39 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-029"
                    aria-label="Show BIO-39 Biological monitor daily reporting in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-39</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Biological monitor daily reporting"
                        >Biological monitor daily reporting</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-029">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-39"
                          title="Apply BIO-39"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-029">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-39"
                          title="Dismiss BIO-39"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-029">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-39"
                            title="Undo BIO-39"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-030"
              data-code="BIO-41"
              data-decision=""
              data-new="true"
              data-source="itp"
              data-type="Avoidance &amp; BMPs"
              data-species="DS"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-030"
                  aria-label="Select BIO-41 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-030"
                    aria-label="Show BIO-41 Delta smelt entrainment avoidance window in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-41</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Delta smelt entrainment avoidance window"
                        >Delta smelt entrainment avoidance window</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-030">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-41"
                          title="Apply BIO-41"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-030">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-41"
                          title="Dismiss BIO-41"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-030">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-41"
                            title="Undo BIO-41"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-031"
              data-code="BIO-47"
              data-decision=""
              data-new="true"
              data-source="feir"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-031"
                  aria-label="Select BIO-47 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-031"
                    aria-label="Show BIO-47 Nesting raptor buffer for non-listed species in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-47</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Nesting raptor buffer for non-listed species"
                        >Nesting raptor buffer for non-listed species</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-031">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-47"
                          title="Apply BIO-47"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-031">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-47"
                          title="Dismiss BIO-47"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-031">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-47"
                            title="Undo BIO-47"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-032"
              data-code="WQ-23"
              data-decision=""
              data-new="true"
              data-source="swrcb"
              data-type="Plan Submittal"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-032"
                  aria-label="Select WQ-23 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-032"
                    aria-label="Show WQ-23 Spill prevention and response plan in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Spill prevention and response plan"
                        >Spill prevention and response plan</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-032">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply WQ-23"
                          title="Apply WQ-23"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-032">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss WQ-23"
                          title="Dismiss WQ-23"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-032">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo WQ-23"
                            title="Undo WQ-23"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-033"
              data-code="AIR-11"
              data-decision=""
              data-new="true"
              data-source="feir"
              data-type="Inspection"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-033"
                  aria-label="Select AIR-11 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-033"
                    aria-label="Show AIR-11 Off-road equipment emissions tier in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">AIR-11</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Off-road equipment emissions tier"
                        >Off-road equipment emissions tier</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-033">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply AIR-11"
                          title="Apply AIR-11"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-033">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss AIR-11"
                          title="Dismiss AIR-11"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-033">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo AIR-11"
                            title="Undo AIR-11"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-034"
              data-code="CUL-14"
              data-decision=""
              data-new="true"
              data-source="feir"
              data-type="Reporting"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-034"
                  aria-label="Select CUL-14 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-034"
                    aria-label="Show CUL-14 Tribal monitor notification in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">CUL-14</span>
                      <span class="bcn-sw-row__name" title="Tribal monitor notification"
                        >Tribal monitor notification</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-034">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply CUL-14"
                          title="Apply CUL-14"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-034">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss CUL-14"
                          title="Dismiss CUL-14"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-034">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo CUL-14"
                            title="Undo CUL-14"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-035"
              data-code="GEO-12"
              data-decision=""
              data-new="true"
              data-source="usace"
              data-type="Avoidance &amp; BMPs"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-035"
                  aria-label="Select GEO-12 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-035"
                    aria-label="Show GEO-12 Artesian conditions contingency in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">GEO-12</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Artesian conditions contingency"
                        >Artesian conditions contingency</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-035">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply GEO-12"
                          title="Apply GEO-12"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-035">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss GEO-12"
                          title="Dismiss GEO-12"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-035">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo GEO-12"
                            title="Undo GEO-12"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-036"
              data-code="NOI-12"
              data-decision=""
              data-new="true"
              data-source="feir"
              data-type="Monitoring"
              data-species=""
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-036"
                  aria-label="Select NOI-12 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-036"
                    aria-label="Show NOI-12 Vibration limits for adjacent structures in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Vibration limits for adjacent structures"
                        >Vibration limits for adjacent structures</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-036">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply NOI-12"
                          title="Apply NOI-12"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-036">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss NOI-12"
                          title="Dismiss NOI-12"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-036">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo NOI-12"
                            title="Undo NOI-12"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
            </li>
            <li
              class="bcn-sw-row"
              data-sw-row="cc-037"
              data-code="BIO-55"
              data-decision=""
              data-new="true"
              data-source="feir"
              data-type="Avoidance &amp; BMPs"
              data-species="GGS"
              data-rationale="false"
            >
              <span class="bcn-sw-row__check">
                <esa-checkbox
                  size="sm"
                  data-sw-check="cc-037"
                  aria-label="Select BIO-55 for a bulk decision"
                ></esa-checkbox>
              </span>
              <span class="bcn-sw-row__content">
                <span class="bcn-sw-row__top">
                  <button
                    type="button"
                    class="bcn-sw-row__hit"
                    data-sw-open="cc-037"
                    aria-label="Show BIO-55 Lighting shielding for nocturnal wildlife in the preview"
                  >
                    <span class="bcn-sw-row__titleline">
                      <span class="bcn-cbadge bcn-cbadge--sm">BIO-55</span>
                      <span
                        class="bcn-sw-row__name"
                        title="Lighting shielding for nocturnal wildlife"
                        >Lighting shielding for nocturnal wildlife</span
                      >
                    </span>
                  </button>
                  <span class="bcn-sw-row__marks">
                    <span class="bcn-sw-row__state bcn-sw-row__state--applied">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Applied</span>
                      </span>
                    </span>
                    <span class="bcn-sw-row__state bcn-sw-row__state--dismissed">
                      <span
                        class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      >
                        <span class="esa-badge__text">Dismissed</span>
                      </span>
                    </span>
                  </span>
                </span>
                <span class="bcn-sw-row__acts">
                  <esa-tooltip text="Apply to this component" position="top">
                    <span data-sw-apply="cc-037">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Apply BIO-55"
                          title="Apply BIO-55"
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
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <esa-tooltip text="Not applicable" position="top">
                    <span data-sw-dismiss="cc-037">
                      <span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Dismiss BIO-55"
                          title="Dismiss BIO-55"
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span></button
                      ></span>
                    </span>
                  </esa-tooltip>
                  <span class="bcn-sw-row__undo">
                    <esa-tooltip text="Undo this decision" position="top">
                      <span data-sw-undo="cc-037">
                        <span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            aria-label="Undo BIO-55"
                            title="Undo BIO-55"
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
                                  d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                                ></path>
                                <path d="M3 3v5h5"></path>
                              </svg>
                            </span></button
                        ></span>
                      </span>
                    </esa-tooltip>
                  </span>
                </span>
              </span>
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
                Select a commitment
              </h3>
              <div class="esa-empty-state__actions typography-label-md"></div>
            </div>
          </div>
          <article class="bcn-sw-prev" data-sw-preview="cc-001" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-03</span>
              <h3 class="bcn-sw-prev__title">Nesting bird preconstruction survey</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A qualified biologist shall conduct preconstruction surveys for nesting
              birds within 500 feet of ground-disturbing activity no more than 7 days
              prior to the start of work during the nesting season (February 1 through
              August 31).
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">4 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span>
                  <span class="bcn-sw-prev__actname"
                    >Nesting-bird preconstruction survey</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Ground disturbance occurs within the nesting season window at all shaft
                  work areas.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-002" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-21</span>
              <h3 class="bcn-sw-prev__title">Giant garter snake avoidance measures</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Ground disturbance within 200 feet of aquatic habitat shall be restricted to
              the active season (May 1 through October 1). A qualified biologist shall
              survey the work area within 24 hours prior to ground disturbance.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">6 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-21</span>
                  <span class="bcn-sw-prev__actname"
                    >Giant garter snake preconstruction survey</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Shaft footprint is within 200 feet of Bouldin Island agricultural
                  ditches.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-003" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">CUL-02</span>
              <h3 class="bcn-sw-prev__title">
                Worker cultural resources awareness training
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              All construction personnel shall receive cultural resources sensitivity
              training prior to beginning work, covering identification of archaeological
              materials and required stop-work procedures.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span>
                  <span class="bcn-sw-prev__actname"
                    >Cultural resources worker training</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Standard for all ground-disturbing components.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-004" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-08</span>
              <h3 class="bcn-sw-prev__title">Stormwater pollution prevention plan</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A Stormwater Pollution Prevention Plan shall be prepared by a Qualified
              SWPPP Developer and implemented prior to any ground disturbance exceeding
              one acre.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">SWRCB Water Quality Certification</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span>
                  <span class="bcn-sw-prev__actname"
                    >SWPPP preparation and submittal</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Disturbance footprint exceeds one acre across the work areas.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-005" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">NOI-03</span>
              <h3 class="bcn-sw-prev__title">Construction noise monitoring plan</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A noise monitoring plan shall be submitted for review at least 30 days prior
              to the start of shaft construction where work occurs within 1,000 feet of a
              sensitive receptor.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span>
                  <span class="bcn-sw-prev__actname"
                    >Noise monitoring plan submittal</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Residences on Bouldin Island Road are within 1,000 feet.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-006" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">AIR-04</span>
              <h3 class="bcn-sw-prev__title">Fugitive dust control</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exposed surfaces shall be watered at a frequency adequate to maintain
              minimum soil moisture of 12 percent. Vehicle speed on unpaved roads shall
              not exceed 15 miles per hour.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span>
                  <span class="bcn-sw-prev__actname"
                    >Fugitive dust control implementation</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Unpaved access roads serve every work area.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-007" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GEO-01</span>
              <h3 class="bcn-sw-prev__title">
                Geotechnical exploration site restoration
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Each exploration location shall be abandoned in accordance with county
              well-abandonment standards and the surface restored to preexisting contours
              within 30 days of completion.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GEO-01</span>
                  <span class="bcn-sw-prev__actname"
                    >Borehole abandonment verification</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  Directly governs this component’s exploration program.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-008" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-44</span>
              <h3 class="bcn-sw-prev__title">Tidal marsh restoration monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Restored tidal marsh acreage shall be monitored annually for 10 years
              against performance criteria for vegetation cover, channel density, and fish
              access.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">5 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  No tidal marsh restoration occurs within this component.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-009" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-52</span>
              <h3 class="bcn-sw-prev__title">
                Fish screen approach velocity verification
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Approach velocity at the screen face shall not exceed 0.2 feet per second,
              verified by field measurement prior to and following each maintenance event.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">4 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  No intake or screening structure in this component.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-010" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-19</span>
              <h3 class="bcn-sw-prev__title">In-water work turbidity monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Turbidity shall be monitored upstream and downstream of in-water work and
              shall not exceed background by more than 5 NTU.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">SWRCB Water Quality Certification</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  No in-water work in this component.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-011" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">TRA-07</span>
              <h3 class="bcn-sw-prev__title">Barge landing traffic management</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A traffic management plan shall be prepared for each barge landing
              addressing vehicle queuing, flagging, and levee road load limits.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale="">
                  No barge landing associated with this shaft.
                </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-012" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-09</span>
              <h3 class="bcn-sw-prev__title">Swainson’s hawk nest buffer</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A 0.25-mile no-disturbance buffer shall be established around active
              Swainson’s hawk nests and maintained until a qualified biologist determines
              the young have fledged or the nest has failed.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">4 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-09</span>
                  <span class="bcn-sw-prev__actname"
                    >Swainson’s hawk nest buffer verification</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-013" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-18</span>
              <h3 class="bcn-sw-prev__title">Worker environmental awareness program</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              All personnel shall complete an environmental awareness program prior to
              site access, with annual refresher training thereafter.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-18</span>
                  <span class="bcn-sw-prev__actname"
                    >Worker environmental awareness refresher</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-014" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-27</span>
              <h3 class="bcn-sw-prev__title">Western pond turtle relocation protocol</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Where work occurs within 100 feet of aquatic habitat, a qualified biologist
              shall survey for western pond turtle and relocate individuals outside the
              work area prior to disturbance.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-27</span>
                  <span class="bcn-sw-prev__actname">Pond turtle clearance survey</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-015" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-30</span>
              <h3 class="bcn-sw-prev__title">
                Vernal pool branchiopod wet-season survey
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Suitable vernal pool habitat within the work area shall receive
              protocol-level wet-season surveys across two consecutive years prior to
              disturbance.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">4 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-30</span>
                  <span class="bcn-sw-prev__actname"
                    >Vernal pool branchiopod wet-season survey</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-016" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-36</span>
              <h3 class="bcn-sw-prev__title">Valley elderberry shrub avoidance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Elderberry shrubs with stems one inch or greater in diameter shall be
              avoided by a minimum 20-foot buffer, fenced and signed prior to
              construction.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-36</span>
                  <span class="bcn-sw-prev__actname"
                    >Elderberry shrub buffer installation</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-017" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">CUL-05</span>
              <h3 class="bcn-sw-prev__title">Inadvertent discovery stop-work protocol</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              If cultural materials are encountered, work shall halt within 100 feet of
              the find and a qualified archaeologist shall evaluate the discovery before
              work resumes.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 4, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-05</span>
                  <span class="bcn-sw-prev__actname"
                    >Discovery protocol acknowledgement</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-018" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">CUL-11</span>
              <h3 class="bcn-sw-prev__title">Archaeological construction monitoring</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Ground disturbance in areas of elevated archaeological sensitivity shall be
              monitored by a qualified archaeologist and a Native American monitor.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-11</span>
                  <span class="bcn-sw-prev__actname"
                    >Archaeological monitor coverage</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-019" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-05</span>
              <h3 class="bcn-sw-prev__title">Dewatering discharge management</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Dewatering discharge shall be routed through sediment controls and sampled
              for turbidity and pH prior to release to any surface water.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">SWRCB Water Quality Certification</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-05</span>
                  <span class="bcn-sw-prev__actname">Dewatering discharge sampling</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-020" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">WQ-12</span>
              <h3 class="bcn-sw-prev__title">Quarterly SWPPP inspection</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              A Qualified SWPPP Practitioner shall inspect all stormwater controls
              quarterly and within 48 hours of any qualifying rain event.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">SWRCB Water Quality Certification</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Nov 18, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span>
                  <span class="bcn-sw-prev__actname">SWPPP quarterly inspection</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-021" hidden="">
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
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span>
                  <span class="bcn-sw-prev__actname"
                    >Revegetation plan agency review</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-022" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">VEG-14</span>
              <h3 class="bcn-sw-prev__title">Invasive plant material controls</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Equipment arriving from outside the project area shall be washed prior to
              entry, and imported fill shall be certified free of noxious weed propagules.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">VEG-14</span>
                  <span class="bcn-sw-prev__actname">Equipment washing log</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-023" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">TRA-11</span>
              <h3 class="bcn-sw-prev__title">Haul route compliance</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Construction traffic shall use only designated haul routes. Levee road
              segments shall be inspected monthly for load-related damage.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 2, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span>
                  <span class="bcn-sw-prev__actname"
                    >Haul route compliance verification</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-024" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">NOI-08</span>
              <h3 class="bcn-sw-prev__title">Nighttime work noise limits</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Nighttime construction noise shall not exceed 50 dBA Leq at the nearest
              sensitive receptor property line between 10 PM and 7 AM.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-08</span>
                  <span class="bcn-sw-prev__actname"
                    >Nighttime noise level verification</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-025" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GEO-04</span>
              <h3 class="bcn-sw-prev__title">
                Levee stability monitoring during exploration
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Exploration within 100 feet of a federal project levee shall be accompanied
              by deformation monitoring before, during, and after drilling.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GEO-04</span>
                  <span class="bcn-sw-prev__actname">Levee deformation survey</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-026" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GEO-09</span>
              <h3 class="bcn-sw-prev__title">Drilling fluid containment</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Drilling fluids shall be fully contained and removed from the site. No
              discharge to surface water or to the levee prism is permitted.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">GEO-09</span>
                  <span class="bcn-sw-prev__actname"
                    >Drilling fluid containment inspection</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-027" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">USACE-02</span>
              <h3 class="bcn-sw-prev__title">Section 404 preconstruction notification</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              The permittee shall submit preconstruction notification to the District
              Engineer at least 45 days prior to commencing work in waters of the United
              States.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Dec 16, 2025</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span>
                  <span class="bcn-sw-prev__actname"
                    >Preconstruction notification submittal</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Reporting</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-028" hidden="">
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
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">4 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Jan 8, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span>
                  <span class="bcn-sw-prev__actname">Mitigation ledger update</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Reporting</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-029" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-39</span>
              <h3 class="bcn-sw-prev__title">Biological monitor daily reporting</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              The biological monitor shall record daily observations, including species
              detected, avoidance measures implemented, and any incidental take, and
              submit within 5 working days.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Jan 8, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-39</span>
                  <span class="bcn-sw-prev__actname"
                    >Daily biological monitoring report</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Reporting</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-030" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-41</span>
              <h3 class="bcn-sw-prev__title">Delta smelt entrainment avoidance window</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              In-water construction shall be prohibited between December 1 and June 30
              unless real-time monitoring demonstrates delta smelt are absent from the
              action area.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">CDFW Incidental Take Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Feb 24, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-031" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-47</span>
              <h3 class="bcn-sw-prev__title">
                Nesting raptor buffer for non-listed species
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Active nests of non-listed raptors shall receive a 250-foot no-disturbance
              buffer until the young have fledged.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Feb 24, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">BIO-47</span>
                  <span class="bcn-sw-prev__actname">Raptor buffer establishment</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-032" hidden="">
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
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">SWRCB Water Quality Certification</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 3, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span>
                  <span class="bcn-sw-prev__actname">Spill response plan submittal</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-033" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">AIR-11</span>
              <h3 class="bcn-sw-prev__title">Off-road equipment emissions tier</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Off-road diesel equipment greater than 50 horsepower shall meet Tier 4 Final
              emission standards, verified by equipment list prior to mobilization.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 3, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">AIR-11</span>
                  <span class="bcn-sw-prev__actname">Equipment tier verification</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Tracking</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-034" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">CUL-14</span>
              <h3 class="bcn-sw-prev__title">Tribal monitor notification</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Culturally affiliated tribes shall receive no less than 14 days notice prior
              to the start of ground disturbance in areas identified as culturally
              sensitive.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 10, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">CUL-14</span>
                  <span class="bcn-sw-prev__actname">Tribal monitor notification</span>
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Reporting</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-035" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GEO-12</span>
              <h3 class="bcn-sw-prev__title">Artesian conditions contingency</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Where artesian conditions are encountered, drilling shall stop and the
              boring shall be sealed under the direction of a licensed engineering
              geologist.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">USACE Section 404 Permit</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 10, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-036" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">NOI-12</span>
              <h3 class="bcn-sw-prev__title">Vibration limits for adjacent structures</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Ground-borne vibration shall not exceed 0.2 in/sec PPV at any structure of
              normal construction, monitored continuously during impact activities.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">3 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 17, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates 1 action on this component</h4>
              <ul class="bcn-sw-prev__actions">
                <li class="bcn-sw-prev__action">
                  <span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span>
                  <span class="bcn-sw-prev__actname"
                    >Vibration monitoring at receptors</span
                  >
                  <span class="bcn-sw-prev__acttype">
                    <span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    >
                      <span class="esa-badge__text">Monitoring</span>
                    </span>
                  </span>
                </li>
              </ul>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-037" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">BIO-55</span>
              <h3 class="bcn-sw-prev__title">
                Lighting shielding for nocturnal wildlife
              </h3>
            </header>
            <p class="bcn-sw-prev__doc">
              Nighttime lighting shall be directed downward, shielded, and of the minimum
              intensity necessary, with no direct illumination of adjacent aquatic
              habitat.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Source document</span>
                <span class="bcn-key-value__val">Delta Conveyance Project Final EIR</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Requirements</span>
                <span class="bcn-key-value__val">2 requirements</span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Added to the project</span>
                <span class="bcn-key-value__val">Mar 17, 2026</span>
              </div>
            </div>
            <section class="bcn-sw-prev__effect">
              <h4 class="bcn-sw-prev__efftitle">Creates no actions on this component</h4>
            </section>
            <section class="bcn-sw-prev__decision" data-sw-prev-decision="" hidden="">
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Decision</span>
                <span class="bcn-sw-prev__decval" data-sw-prev-decval=""></span>
              </div>
              <div class="bcn-key-value">
                <span class="bcn-key-value__key">Rationale</span>
                <span class="bcn-sw-prev__rationale" data-sw-prev-rationale=""> </span>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  </div>
  <!-- ── 6. Footer — Windows order: the tertiary state far left, the action group right
       with the primary LEFT of Cancel. ── -->
  <div slot="footer" class="bcn-sw__foot">
    <span class="bcn-sw__footacts">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          data-sw-save="true"
        >
          Save decisions
        </button></span
      >
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          data-sw-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      >
    </span>
  </div>
</esa-side-dialog>
```

## Styles
```css
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
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
  --_accent-border: var(--color-border-default-strong, #bbbbbb);
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
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
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
  border-color: var(--color-border-default-strong, #bbbbbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  background: transparent;
  color: var(--color-content-default, #202020);
  border-color: transparent;
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
  background: transparent;
  color: inherit;
  border-color: transparent;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
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
  list-style: none;
  cursor: pointer;
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
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
}
.bcn-tl__pop .bcn-cbadge {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-sw {
  --side-dialog-width-lg: 1180px;
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --backdrop-filter: blur(2px);
  --form-font-size-sm: var(--type-size-150);
}
.bcn-sw__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  height: 100%;
  min-height: 0;
  color: var(--color-text-primary);
}
.bcn-sw__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
}
.bcn-sw__headtitle {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  white-space: nowrap;
}
.bcn-sw__head .esa-icon {
  color: var(--color-text-secondary);
}
.bcn-sw__head .esa-badge {
  background: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  font-weight: var(--font-weight-medium);
}
.bcn-sw__search {
  display: inline-flex;
  min-width: 14rem;
}
.bcn-sw__search esa-text-field {
  width: 100%;
}
.bcn-sw__lead {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-sw__scope {
  margin: 0;
  color: var(--color-text-secondary);
}
.bcn-sw__figures {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-700);
  flex-wrap: wrap;
}
.bcn-sw__figure {
  min-width: 0;
  --stat-value-size: var(--type-size-600);
}
.bcn-sw__figure--progress {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  min-width: 220px;
}
.bcn-sw__bar {
  max-width: 260px;
}
.bcn-sw__controls {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-sw__pills {
  display: inline-flex;
  min-width: 0;
  --filter-pill-bg: var(--color-surface-sunken);
  --filter-pill-bg-hover: var(--color-border);
  --filter-pill-text: var(--color-text-primary);
}
.bcn-sw__pills[hidden],
.bcn-sw__pills .esa-filter-pills__chip[hidden] {
  display: none;
}
.bcn-sw__panes {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: var(--spacing-400);
  flex: 1;
  min-height: 0;
  align-items: stretch;
}
.bcn-sw__pane {
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-sw__pane--list {
  position: relative;
  background: var(--color-surface-sunken);
  overflow: hidden;
}
.bcn-sw__scroll {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--spacing-300);
}
.bcn-sw__scroll--pad {
  padding: var(--spacing-500);
}
.bcn-sw__rows {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-sw__none[hidden],
.bcn-sw__nopreview[hidden] {
  display: none;
}
.bcn-sw-row {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  column-gap: var(--spacing-400);
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
  transition:
    border-color 0.12s ease,
    background 0.12s ease;
}
.bcn-sw-row[hidden] {
  display: none;
}
.bcn-sw-row__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-sw-row__top {
  display: flex;
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
}
.bcn-sw-row__marks {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.bcn-sw-row {
  cursor: pointer;
}
.bcn-sw-row:hover {
  border-color: var(--color-border-strong);
}
.bcn-sw-row__check,
.bcn-sw-row__acts {
  cursor: default;
}
.bcn-sw-row[data-active] {
  border-color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 5%, var(--color-surface));
}
.bcn-sw-row__check {
  display: inline-flex;
  align-items: center;
  min-height: 1.5rem;
}
.bcn-sw-row__hit {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.bcn-sw-row__hit:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-sw-row__titleline {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-sw-row__name {
  min-width: 0;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  line-height: 1.35;
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-sw-row__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
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
  --badge-text-color: var(--color-primary);
  --badge-border-color: var(--color-primary-border, var(--color-border));
  border: 1px solid var(--color-primary-border, var(--color-border));
  font-weight: var(--font-weight-medium);
}
.bcn-sw-row__state--dismissed .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  font-weight: var(--font-weight-medium);
}
.bcn-sw-row__acts {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  visibility: hidden;
}
.bcn-sw-row:hover .bcn-sw-row__acts,
.bcn-sw-row:focus-within .bcn-sw-row__acts {
  visibility: visible;
}
.bcn-sw-row__undo {
  margin-left: auto;
  display: none;
}
.bcn-sw-row[data-staged="true"] .bcn-sw-row__undo {
  display: inline-flex;
}
.bcn-sw-row[data-staged="true"] .bcn-sw-row__acts {
  visibility: visible;
}
.bcn-sw__listhead {
  flex: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-height: 40px;
  padding: var(--spacing-200) var(--spacing-300);
  border-bottom: 1px solid var(--color-border-light);
}
.bcn-sw__listcount {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-sw__listacts {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
}
.bcn-sw__listacts[hidden] {
  display: none;
}
.bcn-sw-prev {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-sw-prev[hidden] {
  display: none;
}
.bcn-sw-prev__head {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-300);
}
.bcn-sw-prev__title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  line-height: 1.25;
  color: var(--color-text-primary);
}
.bcn-sw-prev__doc {
  margin: 0;
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  background: var(--bcn-citation-bg);
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}
.bcn-sw-prev__facts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-300) var(--spacing-500);
}
.bcn-sw-prev__effect {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250, 0.625rem);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-sw-prev__efftitle {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-sw-prev__actions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-sw-prev__action {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  background: var(--color-surface);
}
.bcn-sw-prev__actname {
  flex: 1;
  min-width: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-primary);
}
.bcn-sw-prev__acttype .esa-badge {
  --badge-bg: var(--color-surface-sunken);
  --badge-text-color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}
.bcn-sw-prev__undo {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.bcn-sw-prev__decision {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-300) var(--spacing-500);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-sw-prev__decision[hidden] {
  display: none;
}
.bcn-sw-prev__decval,
.bcn-sw-prev__rationale {
  font-size: var(--form-font-size-md);
  color: var(--color-text-primary);
}
.bcn-sw__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  width: 100%;
}
.bcn-sw__footacts {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-sw-rationale {
  --z-modal-backdrop: 1400;
  --z-modal: 1401;
}
.bcn-sw-rationale__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-sw-rationale__what {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-sw-rationale__warn[hidden] {
  display: none;
}
.bcn-sw-rationale__foot {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-300);
  width: 100%;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border);
  --badge-text-color: var(--color-text-secondary);
  min-width: 19px;
  height: 19px;
  padding: 0 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  box-shadow: 0 0 0 1.5px var(--color-surface);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
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
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  gap: var(--_empty-gap);
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
  margin: 0;
  color: var(--color-content-default, #202020);
}
.esa-empty-state__description {
  margin: 0;
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.bcn-key-value {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-key-value__key {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-key-value__hint {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-cbadge {
  display: inline-block;
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
}
.bcn-cbadge--md {
  font-size: var(--type-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
.bcn-cbadge--neutral {
  font-family: var(--font-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
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
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-pill, 9999px);
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
  border: 0;
  outline: 1px solid CanvasText;
  background: CanvasText;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(
    --color-content-utility-danger,
    var(--color-content-brand, #2a7e3b)
  );
  --_clear-icon-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border: none;
  border-radius: var(--radius-sm, 0.25rem);
  background: transparent;
  color: var(--_clear-text);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, rgba(0, 0, 0, 0.03));
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
.bcn-filterbar {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.bcn-filterbar__top {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-filterbar__bottom {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-filterbar__top + .bcn-filterbar__bottom {
  border-top: 1px solid var(--color-border);
}
.bcn-filterbar__group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  min-width: 300px;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__search--alone {
  margin-left: 0;
  flex: 1;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
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
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  display: block;
  width: 100%;
}
.esa-progress-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: var(--spacing-100, 0.25rem);
}
.esa-progress-bar__label {
  color: var(--color-content-default, #202020);
}
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
}
.esa-progress-bar__track {
  position: relative;
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  overflow: hidden;
}
.esa-progress-bar__fill {
  height: 100%;
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  transition: width 0.3s ease;
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
  width: 40% !important;
  animation: esa-progress-indeterminate
    var(--animation-indeterminate, 1.5s ease-in-out infinite);
}
.esa-progress-bar__fill {
  transition: none;
}
.esa-progress-bar__fill {
  background: Highlight;
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
- `--animation-indeterminate`: 1.5s ease-in-out infinite _(semantic)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #46a758 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-citation-bg`: #f6f3ed _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--button-radius-lg`: .5rem _(component)_
- `--button-radius-md`: .5rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #a18072 _(semantic)_
- `--color-background-ai-hover`: #957468 _(semantic)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-brand-hover`: #3e9b4f _(semantic)_
- `--color-background-brand-muted`: #e9f6e9 _(semantic)_
- `--color-background-brand-muted-hover`: #daf1db _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-background-overlay-hover`: rgba(0, 0, 0, .03) _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #0d74ce _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-success`: #218358 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #ffc53d _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border`: #dcdcdc _(component)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-border-default-strong`: #bbbbbb _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-border-strong`: #bdbdbd _(component)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #2a7e3b _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-info`: #228be6 _(component)_
- `--color-info-subtle`: #fbfdff _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-primary-border`: #b9d6d2 _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-muted`: #7c7c7c _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(component)_
- `--font-sans`: "DM Sans", sans-serif _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-label-color`: #646464 _(component)_
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
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--stat-accent-color`: #2a7e3b _(component)_
- `--stat-value-color`: #202020 _(component)_
- `--stat-value-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--transition-fast`: .15s ease _(semantic)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(component)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 350 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
- `--typography-display-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-display-sm-font-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(semantic)_
- `--typography-display-sm-font-weight`: 650 _(semantic)_
- `--typography-display-sm-letter-spacing`: -.01em _(semantic)_
- `--typography-display-sm-line-height`: 1.3 _(semantic)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
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
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-font-weight`: 500 _(semantic)_
- `--typography-microcopy-sm-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-subtle-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-sm-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-subtle-line-height`: 1 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
