# View tabs: markup, part 1 of 2

```html
<esa-tab-layout
  class="bcn-feed"
  tabs='[{"label":"All","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stro… [1813 characters]'
  appearance="underline"
  size="sm"
  active-index="0"
  data-feed-views='["all","important","todo","pinned"]'
  variant="underline"
  ><div slot="panel-0">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="all"
      data-fw-search="feed-all"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work e… [3213 characters]'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-all"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-all-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance co… [478 characters]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records">
            <div class="bcn-fw__scroll" role="listbox" aria-label="Records">
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Today</p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div class="bcn-fw__group" role="group" aria-label="Yesterday" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Yesterday</p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="dmr-daily">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="dmr-daily"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Daily monitoring report</span
                        ><span class="bcn-frc__when">5:05 PM</span></span
                      ><span class="bcn-frc__label"
                        >Daily monitoring report — in-water work at the intake</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging buffer</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="sr-turbid">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="sr-turbid"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Site report</span
                        ><span class="bcn-frc__when">11:25 AM</span></span
                      ><span class="bcn-frc__label"
                        >Turbidity above the approved threshold downstream of dewatering</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <!-- …and 3 more like this (<div class="bcn-fw__group">) -->
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <!-- …and 3 more like this (<div class="bcn-frec__pair">) -->
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label">Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="5 obligations">5</span></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul class="bcn-frec__cards stack" data-gap="sm" data-fw-duties="obs-ggs">
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during the permit
                                term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path></svg
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate reports to the
                                Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path></svg
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <!-- …and 3 more like this (<li class="bcn-loc bcn-foc">) -->
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">Compliance concern</p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Injured Swainson's hawk recovered near a haul road
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 7:10 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Intake B — North Delta</dd>
                          </div>
                          <!-- …and 3 more like this (<div class="bcn-frec__pair">) -->
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/compliance-concerns"
                          role="button"
                          ><span class="esa-button__label">Open in Compliance Concerns</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="5 obligations">5</span></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-hawk"
                              data-fw-link-title="Injured Swainson's hawk recovered near a haul road"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul class="bcn-frec__cards stack" data-gap="sm" data-fw-duties="obs-hawk">
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                            data-class="notify"
                            data-text="ongoing demonstration of mitigation performance during the permit term"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Ongoing demonstration of mitigation performance during the permit
                                term</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path></svg
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate reports to the
                                Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
                                    aria-label="Pin this obligation"
                                    aria-pressed="false"
                                    data-of-pin=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M12 17v5"></path>
                                        <path
                                          d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
                                        ></path></svg
                                    ></span></button></esa-tooltip
                                ><esa-tooltip
                                  text="Remove from this record"
                                  align="end"
                                  position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-loc__verb--danger"
                                    aria-label="Remove from this record"
                                    data-fw-unlink=""
                                  >
                                    <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path></svg
                                    ></span></button></esa-tooltip
                              ></span>
                            </div>
                          </li>
                          <!-- …and 3 more like this (<li class="bcn-loc bcn-foc">) -->
                        </ul>
                        <p
                          class="bcn-frec__none typography-body-sm"
                          data-fw-duties-none=""
                          hidden=""
                        >
                          No obligations linked to this record.
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- …and 19 more like this (<section class="bcn-fw__pane">) -->
            <div class="bcn-fw__pane" data-fw-pane-none="" hidden="">
              <div class="esa-empty-state esa-empty-state--md">
                <h3 class="esa-empty-state__title typography-label-md-strong">
                  No records match these filters
                </h3>
                <p class="esa-empty-state__description typography-body-sm">
                  Widen the time range or clear a filter.
                </p>
                <div class="esa-empty-state__actions typography-label-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="panel-1">
    <div
      class="bcn-fw stack"
      data-gap="md"
      data-fw-view="important"
      data-fw-search="feed-important"
      data-fw-records='{"obs-ggs":{"source":"biological-resources","age":0,"text":"giant garter snake seen in an irrigation canal at the work e… [1190 characters]'
    >
      <div class="bcn-swfr bcn-swfr--panel">
        <esa-text-field
          class="bcn-swfr__search"
          size="sm"
          name="feed-important"
          placeholder="Search records"
          aria-label="Search records"
        ></esa-text-field
        ><esa-select
          class="bcn-swfr__picker"
          size="sm"
          name="feed-important-source"
          options='[{"label":"All sources","value":""},{"label":"Nesting bird observation","value":"nesting-birds"},{"label":"Compliance co… [478 characters]'
          value=""
          placeholder="All sources"
          cue="Filter by source."
        ></esa-select
        ><esa-button-toggle
          slot="filters"
          size="sm"
          aria-label="How far back"
          data-fw-scope="true"
          data-value="30"
          data-options='[{"label":"30 days","value":"30"},{"label":"90 days","value":"90"},{"label":"All","value":"all"}]'
        ></esa-button-toggle>
        <div class="bcn-swfr__verbs"></div>
      </div>
      <div class="bcn-fw__side" data-fw-side="">
        <div
          class="sidebar"
          data-gap="lg"
          style="--sidebar-width: 21rem; --sidebar-content-min: 55%"
        >
          <aside class="bcn-fw__rail" aria-label="Records in your filter">
            <div class="bcn-fw__scroll" role="listbox" aria-label="Records in your filter">
              <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Today</p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="true"
                      data-of-pick="obs-ggs"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Biological resource observation</span
                        ><span class="bcn-frc__when">8:35 AM</span></span
                      ><span class="bcn-frc__label"
                        >Giant garter snake seen in an irrigation canal at the work edge</span
                      >
                    </button>
                  </li>
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-hawk"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Compliance concern</span
                        ><span class="bcn-frc__when">7:10 AM</span></span
                      ><span class="bcn-frc__label"
                        >Injured Swainson's hawk recovered near a haul road</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <div class="bcn-fw__group" role="group" aria-label="Yesterday" data-fw-group="">
                <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Yesterday</p>
                <ul class="bcn-fw__list stack" data-gap="xs" role="none">
                  <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
                    <button
                      type="button"
                      class="bcn-frc__row"
                      role="option"
                      aria-selected="false"
                      data-of-pick="obs-trbl"
                    >
                      <span class="bcn-frc__from"
                        ><span class="bcn-frc__source">Nesting bird observation</span
                        ><span class="bcn-frc__when">3:40 PM</span></span
                      ><span class="bcn-frc__label"
                        >Active tricolored blackbird colony found in the staging buffer</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
              <!-- …and 3 more like this (<div class="bcn-fw__group">) -->
              <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
                Nothing matches these filters.
              </p>
            </div>
          </aside>
          <div class="bcn-fw__detail">
            <section
              class="bcn-fw__pane"
              data-fw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <div class="bcn-frec">
                <div class="esa-card">
                  <div class="esa-card__header typography-title-sm-strong">
                    <div class="bcn-frec__head">
                      <div class="bcn-frec__heading">
                        <p class="bcn-frec__source typography-label-sm">
                          Biological resource observation
                        </p>
                        <h3 class="bcn-frec__title typography-heading-md">
                          Giant garter snake seen in an irrigation canal at the work edge
                        </h3>
                        <dl class="bcn-frec__meta">
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Received</dt>
                            <dd class="typography-body-sm">Wed, Sep 16, 2026, 8:35 AM</dd>
                          </div>
                          <div class="bcn-frec__pair">
                            <dt class="typography-label-sm">Component</dt>
                            <dd class="typography-body-sm">Twin Cities Complex</dd>
                          </div>
                          <!-- …and 3 more like this (<div class="bcn-frec__pair">) -->
                        </dl>
                      </div>
                      <span
                        class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                        ><a
                          class="esa-button__native typography-microcopy-xs"
                          href="/beacon-design/prototypes/monitoring/stream/biological-resources"
                          role="button"
                          ><span class="esa-button__label">Open in Biological Resources</span
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
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path></svg></span></a
                      ></span>
                    </div>
                  </div>
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-frec__body stack" data-gap="md">
                      <section class="stack" data-gap="sm" aria-label="Obligations">
                        <div class="repel">
                          <h4 class="bcn-frec__count typography-label-md">
                            Obligations
                            <span data-fw-duty-count=""
                              ><span class="bcn-swcb" aria-label="4 obligations">4</span></span
                            >
                          </h4>
                          <span
                            class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--xs"
                            ><button
                              class="esa-button__native typography-microcopy-2xs"
                              type="button"
                              data-fw-link="obs-ggs"
                              data-fw-link-title="Giant garter snake seen in an irrigation canal at the work edge"
                            >
                              <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              ><span class="esa-button__label">Add obligations</span>
                            </button></span
                          >
                        </div>
                        <ul class="bcn-frec__cards stack" data-gap="sm" data-fw-duties="obs-ggs">
                          <li
                            class="bcn-loc bcn-foc"
                            data-of-card=""
                            data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                            data-class="notify"
                            data-text="biological monitor daily communication and immediate reports to the designated biologist"
                            data-relation="triggered"
                          >
                            <div class="bcn-loc__main bcn-foc__main">
                              <span class="bcn-loc__class">Notify</span
                              ><span class="bcn-loc__title bcn-foc__title"
                                >Biological Monitor daily communication and immediate reports to the
                                Designated Biologist</span
                              ><esa-tooltip
                                text="This record made the obligation owed"
                                position="above"
                                align="center"
                                ><span class="bcn-foc__relation" data-relation="triggered"
                                  >Triggered</span
                                ></esa-tooltip
                              ><span class="bcn-foc__verbs"
                                ><esa-tooltip text="Pin" align="end" position="above"
                                  ><button
                                    type="button"
                                    class="bcn-loc__verb bcn-foc__pin"
```
