# The two-pane registry review: markup

```html
<div class="bcn-registry-workspace" data-registry-tree="">
  <div class="bcn-registry-workspace__panes sidebar" data-gap="md">
    <div class="bcn-registry-workspace__areas">
      <div class="bcn-registry-areas" id="bcn-registry-areas">
        <div class="bcn-registry-areas__head">
          <p class="bcn-registry-areas__lede typography-body-sm">
            <span data-areas-count="">0</span> of 17 subject areas confirmed · 402 duties
          </p>
        </div>
        <div class="bcn-registry-areas__scroll">
          <ul class="bcn-registry-areas__list">
            <li class="bcn-registry-area" data-area-row="agency-reporting-and-approvals">
              <button
                type="button"
                class="bcn-registry-area__body"
                data-area-open="agency-reporting-and-approvals"
                aria-label="Review Agency reporting and approvals"
                aria-current="true"
              >
                <span class="bcn-registry-area__line"
                  ><span class="bcn-registry-area__name">Agency reporting and approvals</span
                  ><span class="bcn-registry-area__n" data-area-row-count="">53</span></span
                ><span class="bcn-registry-area__meta">5 headings</span
                ><span class="bcn-registry-area__foot"
                  ><span class="bcn-registry-area__state" data-area-row-state="" hidden=""
                    ><span
                      class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Confirmed</span></span
                    ></span
                  ><span
                    class="bcn-registry-area__excluded"
                    data-area-row-excluded=""
                    hidden=""
                  ></span
                ></span>
              </button>
            </li>
            <li class="bcn-registry-area" data-area-row="air-quality">
              <button
                type="button"
                class="bcn-registry-area__body"
                data-area-open="air-quality"
                aria-label="Review Air quality"
              >
                <span class="bcn-registry-area__line"
                  ><span class="bcn-registry-area__name">Air quality</span
                  ><span class="bcn-registry-area__n" data-area-row-count="">25</span></span
                ><span class="bcn-registry-area__meta">3 headings</span
                ><span class="bcn-registry-area__foot"
                  ><span class="bcn-registry-area__state" data-area-row-state="" hidden=""
                    ><span
                      class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                      ><span class="esa-badge__text">Confirmed</span></span
                    ></span
                  ><span
                    class="bcn-registry-area__excluded"
                    data-area-row-excluded=""
                    hidden=""
                  ></span
                ></span>
              </button>
            </li>
            <!-- …and 15 more like this (<li class="bcn-registry-area">) -->
          </ul>
        </div>
      </div>
    </div>
    <div class="bcn-registry-workspace__area">
      <div class="bcn-registry-area-pane" id="bcn-registry-area">
        <section
          class="bcn-ra"
          data-area="agency-reporting-and-approvals"
          data-area-ids="2-094 1-100 1-109 4-043 1-101 1-106 4-039 1-104 1-108 1-107 1-105 1-102 1-103 4-046 4-041 4-044 4-022 4-016 4-048 4-045 4-018 4-002 4-017 4-014 4-020 4-015 4-019 4-004 4-042 4-038 4-036 4-040 4-037 4-010 4-028 4-026 4-025 4-024 4-035 4-029 4-030 4-031 4-027 4-063 4-005 4-009 4-007 4-011 2-004 4-006 4-001 4-003 4-008"
          aria-label="Agency reporting and approvals"
        >
          <header class="bcn-ra__head">
            <div class="bcn-ra__title">
              <h2 class="bcn-ra__name typography-heading-md">Agency reporting and approvals</h2>
              <span class="bcn-ra__state" data-area-state="" hidden=""
                ><span
                  class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Confirmed</span></span
                ></span
              >
            </div>
            <p class="bcn-ra__meta typography-body-sm" data-area-meta="">
              <span data-area-kept="">53</span> duties · 15 wait on an approval · 26 with
              conflicting values
            </p>
            <div class="bcn-ra__actions">
              <span data-area-confirm-wrap=""
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-area-confirm="agency-reporting-and-approvals"
                  >
                    Confirm all 53
                  </button></span
                ></span
              >
            </div>
          </header>
          <div class="bcn-ra__scroll">
            <div class="stack" data-gap="sm">
              <details class="esa-collapsible" open="">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title">Agency approvals (16)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="bcn-ra__rows">
                    <li class="bcn-ra__row" data-row-id="2-094">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Approval and perpetual management of mitigation projects — applies to this project"
                        data-row-check="2-094"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Approval and perpetual management of mitigation projects</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">COA 12</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.13</span
                          ><!-- …and 3 more like this (<span class="bcn-cbadge bcn-cbadge--sm">) -->
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >CDFW written approval for each protection or restoration project;
                                  ongoing evidence of acquisition, easements and endowment;
                                  perpetual management</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Mitigation project proceeds without approval or lacks perpetual
                                  management</span
                                >
                              </div>
                              <!-- …and 3 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/2-094"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <li class="bcn-ra__row" data-row-id="1-100">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Barge Operations Plan approval before operations — applies to this project"
                        data-row-check="1-100"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Barge Operations Plan approval before operations</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >No barge operations until the Barge Operations Plan is approved
                                  in writing</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Barge operations underway without an approved Barge Operations
                                  Plan</span
                                >
                              </div>
                              <!-- …and 4 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-100"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <!-- …and 14 more like this (<li class="bcn-ra__row">) -->
                  </ul>
                </div>
              </details>
              <details class="esa-collapsible">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title">Non-compliance reporting (12)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="bcn-ra__rows">
                    <li class="bcn-ra__row" data-row-id="4-022">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Air quality exceedance report to the air district — applies to this project"
                        data-row-check="4-022"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Air quality exceedance report to the air district</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Notify</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AQ-5</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Report air quality increment exceedances and corrective actions
                                  to the air district</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >PM or NO2 increment exceedance not reported to the air
                                  district</span
                                >
                              </div>
                              <!-- …and 3 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/4-022"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <li class="bcn-ra__row" data-row-id="4-016">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Barge incident and plan deviation report — applies to this project"
                        data-row-check="4-016"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Barge incident and plan deviation report</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Notify</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AMM-27</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">AQUA-1b</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Report cargo spills, grounding or barge plan deviations to the
                                  Biological Monitor same day</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Barge grounding, spill or plan deviation not reported the same
                                  day</span
                                >
                              </div>
                              <!-- …and 5 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/4-016"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <!-- …and 10 more like this (<li class="bcn-ra__row">) -->
                  </ul>
                </div>
              </details>
              <!-- …and 3 more like this (<details class="esa-collapsible">) -->
            </div>
          </div>
        </section>
        <section
          class="bcn-ra"
          data-area="air-quality"
          data-area-ids="1-043 1-037 1-042 2-055a 1-039 1-038 1-040 1-044 1-041 4-022 1-036 1-045 1-034 2-067 1-030 3-028 1-031 1-087 1-035 2-053 1-032 1-033 1-046 3-048 1-094"
          aria-label="Air quality"
          hidden=""
        >
          <header class="bcn-ra__head">
            <div class="bcn-ra__title">
              <h2 class="bcn-ra__name typography-heading-md">Air quality</h2>
              <span class="bcn-ra__state" data-area-state="" hidden=""
                ><span
                  class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Confirmed</span></span
                ></span
              >
            </div>
            <p class="bcn-ra__meta typography-body-sm" data-area-meta="">
              <span data-area-kept="">25</span> duties · 16 with conflicting values
            </p>
            <div class="bcn-ra__actions">
              <span data-area-confirm-wrap=""
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-area-confirm="air-quality"
                  >
                    Confirm all 25
                  </button></span
                ></span
              >
            </div>
          </header>
          <div class="bcn-ra__scroll">
            <div class="stack" data-gap="sm">
              <details class="esa-collapsible" open="">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title">Equipment emissions (9)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="bcn-ra__rows">
                    <li class="bcn-ra__row" data-row-id="1-043">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Corrective action at air monitoring thresholds — applies to this project"
                        data-row-check="1-043"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Corrective action at air monitoring thresholds</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AQ-5</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Take corrective action when readings reach 80% of the PM or NO2
                                  standard</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Air monitoring reaches 80% of a standard without corrective
                                  action</span
                                >
                              </div>
                              <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-043"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <li class="bcn-ra__row" data-row-id="1-037">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Equipment idling limit — applies to this project"
                        data-row-check="1-037"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname">Equipment idling limit</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AMM-8</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">EC-7</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">EC-8</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Shut off off-road equipment after 5 minutes idle; on-road
                                  vehicles follow California idling rules</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Equipment or vehicle idles beyond the 5-minute limit</span
                                >
                              </div>
                              <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-037"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <!-- …and 7 more like this (<li class="bcn-ra__row">) -->
                  </ul>
                </div>
              </details>
              <details class="esa-collapsible">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title">Fugitive dust (14)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="bcn-ra__rows">
                    <li class="bcn-ra__row" data-row-id="4-022">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Air quality exceedance report to the air district — applies to this project"
                        data-row-check="4-022"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Air quality exceedance report to the air district</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Notify</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AQ-5</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Report air quality increment exceedances and corrective actions
                                  to the air district</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >PM or NO2 increment exceedance not reported to the air
                                  district</span
                                >
                              </div>
                              <!-- …and 3 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/4-022"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <li class="bcn-ra__row" data-row-id="1-036">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Batch plant dust suppression at delivery and loading — applies to this project"
                        data-row-check="1-036"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Batch plant dust suppression at delivery and loading</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AMM-12</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">EC-12</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Apply BACT dust suppression at batch plants: storage piles,
                                  aggregate transfer, cement delivery and mix loading</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Batch plant dust controls not applied during delivery or
                                  loading</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Activities</span
                                ><span class="bcn-key-value__val"
                                  >Concrete work and batch plants, Hauling and deliveries</span
                                >
                              </div>
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-036"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <!-- …and 12 more like this (<li class="bcn-ra__row">) -->
                  </ul>
                </div>
              </details>
              <details class="esa-collapsible">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title"
                    >Greenhouse gas and zero-emission fleet (6)</span
                  >
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="bcn-ra__rows">
                    <li class="bcn-ra__row" data-row-id="1-046">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="EV charging at park-and-ride lots — applies to this project"
                        data-row-check="1-046"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname">EV charging at park-and-ride lots</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AQ-9</span>
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Install EV charging stations at employee park-and-ride lots</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >Park-and-ride lot without EV charging</span
                                >
                              </div>
                              <!-- …and 3 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-046"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <li class="bcn-ra__row" data-row-id="1-042">
                      <esa-checkbox
                        class="bcn-ra__check"
                        checked=""
                        size="sm"
                        aria-label="Greenhouse gas BMPs for hauling, deliveries and waste — applies to this project"
                        data-row-check="1-042"
                      ></esa-checkbox>
                      <div class="bcn-ra__rowbody">
                        <p class="bcn-ra__rowtitle">
                          <span class="bcn-ra__rowname"
                            >Greenhouse gas BMPs for hauling, deliveries and waste</span
                          ><span
                            class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                            ><span class="esa-badge__text">Adhere</span></span
                          >
                        </p>
                        <p class="bcn-ra__codes">
                          <span class="bcn-cbadge bcn-cbadge--sm">AMM-13</span
                          ><span class="bcn-cbadge bcn-cbadge--sm">AQ-9</span
                          ><!-- …and 2 more like this (<span class="bcn-cbadge bcn-cbadge--sm">) -->
                        </p>
                        <details class="esa-collapsible esa-collapsible--flush">
                          <summary class="esa-collapsible__summary typography-label-sm-strong">
                            <span class="esa-collapsible__title">Details</span>
                          </summary>
                          <div class="esa-collapsible__body typography-body-md">
                            <div class="bcn-ra__record">
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Standard</span
                                ><span class="bcn-key-value__val"
                                  >Maintain equipment per manufacturer; SmartWay trucks over 100
                                  miles; off-peak deliveries; 50% waste diverted</span
                                >
                              </div>
                              <div class="bcn-key-value" data-size="md" data-layout="stack">
                                <span class="bcn-key-value__key">Condition</span
                                ><span class="bcn-key-value__val"
                                  >GHG BMPs not followed for maintenance, hauling, deliveries or
                                  waste</span
                                >
                              </div>
                              <!-- …and 2 more like this (<div class="bcn-key-value">) -->
                              <p class="bcn-ra__more">
                                <a href="/beacon-design/prototypes/data-catalog-obligation/1-042"
                                  >Open the full record</a
                                >
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                    </li>
                    <!-- …and 4 more like this (<li class="bcn-ra__row">) -->
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </section>
        <!-- …and 15 more like this (<section class="bcn-ra">) -->
      </div>
    </div>
  </div>
</div>
```
