# Applicable Commitments drawer: markup

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
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <path d="m9 14 2 2 4-4"></path></svg
    ></span>
    <h2 class="bcn-sw__headtitle">Applicable Commitments</h2>
    <span class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
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
              class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                data-sw-bulk-clear="true"
              >
                <span class="esa-button__label">Clear</span>
              </button></span
            ><!-- …and 1 more like this (<span class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm">) --></span
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
                      ><esa-tooltip text="Apply to this component" position="top" align="center"
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
                      ><esa-tooltip text="Undo this decision" position="top" align="center"
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
                      ><esa-tooltip text="Apply to this component" position="top" align="center"
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
                      ><esa-tooltip text="Undo this decision" position="top" align="center"
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
            <!-- …and 40 more like this (<li class="bcn-sw-row">) -->
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
      <section class="bcn-sw__pane bcn-sw__pane--preview" aria-label="Selected commitment">
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
              All exploration crew shall complete environmental awareness training before site
              access, covering special-status species, avoidance buffers, and stop-work procedures.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">Geotechnical Investigations IS/MND — MMRP</span>
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                  ><span class="bcn-sw-prev__actname">Crew environmental awareness training</span
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
                  ><span class="bcn-sw-prev__decval" data-sw-prev-rationale=""></span></div
              ></span>
            </section>
          </article>
          <article class="bcn-sw-prev" data-sw-preview="cc-002" hidden="">
            <header class="bcn-sw-prev__head">
              <span class="bcn-cbadge bcn-cbadge--md">GT-BIO-2</span>
              <h3 class="bcn-sw-prev__title">Nesting bird preconstruction survey</h3>
            </header>
            <p class="bcn-sw-prev__doc">
              If exploration occurs during the nesting season (February 1 through August 31), a
              qualified biologist shall survey for active nests within 500 feet of each work area no
              more than 7 days before work begins.
            </p>
            <div class="bcn-sw-prev__facts">
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Source document</span
                ><span class="bcn-key-value__val">Geotechnical Investigations IS/MND — MMRP</span>
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                  ><span class="bcn-sw-prev__actname">Nesting bird preconstruction survey</span
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
                  ><span class="bcn-sw-prev__decval" data-sw-prev-rationale=""></span></div
              ></span>
            </section>
          </article>
          <!-- …and 40 more like this (<article class="bcn-sw-prev">) -->
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
