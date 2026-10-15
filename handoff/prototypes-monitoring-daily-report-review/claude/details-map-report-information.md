# Details + map, Report Information

Prod's Details card (detail-facts, ported as BcnDetailFacts) with prod's eight facts in prod's order, beside the observations map at the same height; below, full width, the three General Information fields the regulator report carries that prod's card does not (Contractors, Tailboards Attended, Variance Requests Reviewed).

## Key decisions
- Every Fulcrum-sourced value is a BcnTrackedField: same reading as prod plus a provenance marker ("Pending sync" / "Synced" / "Edited in Beacon") whose tooltip names the Fulcrum or inspector value, who changed it and when.
- Inline facts are click-to-edit (the value itself is the edit button, hover tint + focus ring) because a pencil per value made sentence-like facts ("September 11, 2026 7:00 AM – 4:30 PM") wrap.
- Two edit kinds, decided per field: monitoring data syncs to Fulcrum; report wording (tailboards, variances, notes, activity write-ups) is Beacon-only and never pushed.

## Gotchas
- The Details card gets ~60% of the band (not prod's 50%) because the change-log rail takes a column; with the rail collapsed it widens.
- Pin colors on the map follow each work area's CURRENT compliance level and update in place when a level is edited.

## Done when
- Clicking any Details value opens an inline editor whose helper line says where the edit goes (Fulcrum on push, or report only).
- The map is exactly as tall as the Details card; Report Information spans the full width beneath them.

## Markup
```html
<div class="bcn-dmr-details stack" data-gap="lg">
  <div class="bcn-dmr-details__band switcher" data-gap="lg">
    <div class="esa-card esa-card--outlined esa-card--padding-compact">
      <div class="esa-card__header">
        <div class="esa-card__header-content">
          <svg
            class="esa-card__icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <div class="esa-card__titles">
            <h3 class="esa-card__title typography-title-sm-strong">Details</h3>
          </div>
        </div>
      </div>
      <div class="esa-card__body typography-body-md">
        <dl class="bcn-detail-facts" data-columns="2">
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Field Person</dt>
            <dd class="bcn-detail-fact__value">Dana Whitcomb</dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Date</dt>
            <dd class="bcn-detail-fact__value">
              September 11, 2026
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="timeIn"
                data-layout="inline"
                data-label="Time In"
                data-kind="fulcrum"
                data-marker="synced"
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value"
                    >7:00 AM</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text="Inspector's original: 7:30 AM · Changed by Priya Raman, Sep 12, 8:05 AM"
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span class="visually-hidden" data-tf-detail=""
                          >Inspector's original: 7:30 AM · Changed by Priya Raman, Sep 12,
                          8:05 AM</span
                        ></span
                      ></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Time In"
                        title="Edit Time In"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
              <script
                type="module"
                src="/beacon-design/_astro/BcnTrackedField.astro_astro_type_script_index_0_lang.Cy2YcinV.js"
              ></script>
              –
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="timeOut"
                data-layout="inline"
                data-label="End Time"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value"
                    >4:30 PM</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit End Time"
                        title="Edit End Time"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Conditions</dt>
            <dd class="bcn-detail-fact__value">
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="conditions"
                data-layout="inline"
                data-label="Conditions"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value">Clear</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Conditions"
                        title="Edit Conditions"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Air Temperature</dt>
            <dd class="bcn-detail-fact__value">
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="airTempCurrent"
                data-layout="inline"
                data-label="Air Temperature"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value">74°F</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Air Temperature"
                        title="Edit Air Temperature"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
              <span class="bcn-detail-fact__note"
                >High
                <div
                  class="bcn-tracked-field"
                  data-bcn-tracked-field=""
                  data-field-id="airTempHigh"
                  data-layout="inline"
                  data-label="High Temperature"
                  data-kind="fulcrum"
                  data-marker=""
                  data-tf-ready=""
                >
                  <div
                    class="bcn-tracked-field__read cluster"
                    data-gap="2xs"
                    data-tf-read=""
                  >
                    <span data-tf-value="true" class="bcn-tracked-field__value">98°F</span
                    ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="pending"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Pending sync</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="synced"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Synced</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="beacon"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Edited in Beacon</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          aria-label="Edit High Temperature"
                          title="Edit High Temperature"
                          data-tf-edit="true"
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
                              <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                              ></path>
                              <path d="m15 5 4 4"></path></svg
                          ></span></button></span
                    ></span>
                  </div>
                  <div
                    class="bcn-tracked-field__editor stack"
                    data-gap="xs"
                    data-tf-editor=""
                    hidden=""
                  >
                    <div data-tf-slot=""></div>
                    <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                      <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                        ><span
                          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-tf-save="true"
                          >
                            <span class="esa-button__label">Save</span>
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-tf-cancel="true"
                          >
                            <span class="esa-button__label">Cancel</span>
                          </button></span
                        ></span
                      >
                    </div>
                  </div>
                </div>
                · Low
                <div
                  class="bcn-tracked-field"
                  data-bcn-tracked-field=""
                  data-field-id="airTempLow"
                  data-layout="inline"
                  data-label="Low Temperature"
                  data-kind="fulcrum"
                  data-marker=""
                  data-tf-ready=""
                >
                  <div
                    class="bcn-tracked-field__read cluster"
                    data-gap="2xs"
                    data-tf-read=""
                  >
                    <span data-tf-value="true" class="bcn-tracked-field__value">61°F</span
                    ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="pending"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Pending sync</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="synced"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Synced</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><esa-tooltip
                        class="bcn-tracked-field__tip"
                        text=""
                        position="above"
                        align="start"
                        data-tf-marker="beacon"
                        hidden=""
                        ><span class="bcn-tracked-field__marker" tabindex="0"
                          ><span
                            class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">Edited in Beacon</span></span
                          ><span
                            class="visually-hidden"
                            data-tf-detail=""
                          ></span></span></esa-tooltip
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          aria-label="Edit Low Temperature"
                          title="Edit Low Temperature"
                          data-tf-edit="true"
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
                              <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                              ></path>
                              <path d="m15 5 4 4"></path></svg
                          ></span></button></span
                    ></span>
                  </div>
                  <div
                    class="bcn-tracked-field__editor stack"
                    data-gap="xs"
                    data-tf-editor=""
                    hidden=""
                  >
                    <div data-tf-slot=""></div>
                    <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                      <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                        ><span
                          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-tf-save="true"
                          >
                            <span class="esa-button__label">Save</span>
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                          ><button
                            class="esa-button__native typography-microcopy-xs"
                            type="button"
                            data-tf-cancel="true"
                          >
                            <span class="esa-button__label">Cancel</span>
                          </button></span
                        ></span
                      >
                    </div>
                  </div>
                </div></span
              >
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Wind Speed</dt>
            <dd class="bcn-detail-fact__value">
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="windSpeed"
                data-layout="inline"
                data-label="Wind Speed"
                data-kind="fulcrum"
                data-marker="pending"
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value">6 mph</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text="Fulcrum value: 60 mph · Changed by Priya Raman, Sep 12, 8:54 AM"
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span class="visually-hidden" data-tf-detail=""
                          >Fulcrum value: 60 mph · Changed by Priya Raman, Sep 12, 8:54
                          AM</span
                        ></span
                      ></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Wind Speed"
                        title="Edit Wind Speed"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="windDirection"
                data-layout="inline"
                data-label="Wind Direction"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value">SW</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Wind Direction"
                        title="Edit Wind Direction"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Precipitation</dt>
            <dd class="bcn-detail-fact__value">
              <div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="precipitation"
                data-layout="inline"
                data-label="Precipitation"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div
                  class="bcn-tracked-field__read cluster"
                  data-gap="2xs"
                  data-tf-read=""
                >
                  <span data-tf-value="true" class="bcn-tracked-field__value"
                    >0 inches</span
                  ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="start"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-2xs"
                        type="button"
                        aria-label="Edit Precipitation"
                        title="Edit Precipitation"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div>
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Construction Package</dt>
            <dd class="bcn-detail-fact__value">
              2026 Substation &amp; 230 kV Tie-Line Construction
            </dd>
          </div>
          <div class="bcn-detail-fact">
            <dt class="bcn-detail-fact__label">Latitude/Longitude</dt>
            <dd class="bcn-detail-fact__value">
              <span class="bcn-dmr-details__latlng cluster" data-gap="xs"
                ><span data-bcn-dmr-latlng="">34.451900, -116.937100</span
                ><span data-bcn-dmr-copy-latlng=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Copy latitude/longitude"
                      title="Copy latitude/longitude"
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
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path
                            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                          ></path></svg
                      ></span></button></span></span
              ></span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <div class="bcn-dmr-details__map" data-bcn-dmr-map="dmr-details">
      <div
        class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
        id="bcn-obsmap-dmr-details"
        data-bcn-obsmap=""
        data-map-id="dmr-details"
        data-interactive="true"
        style="height: 100%"
        role="region"
        aria-label="Observation map — 3 observations plotted by severity"
        data-bcn-obsmap-ready="true"
        tabindex="0"
      >
        <div
          class="leaflet-pane leaflet-map-pane"
          style="transform: translate3d(0px, 0px, 0px)"
        >
          <div class="leaflet-pane leaflet-tile-pane">
            <div class="leaflet-layer" style="z-index: 1; opacity: 1">
              <div
                class="leaflet-tile-container leaflet-zoom-animated"
                style="z-index: 19; transform: translate3d(0px, 0px, 0px) scale(1)"
              >
                <img
                  alt=""
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2869/6519?access_token=undefined"
                  class="leaflet-tile"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(-107px, -41px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2870/6519?access_token=undefined"
                  class="leaflet-tile"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(149px, -41px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2869/6520?access_token=undefined"
                  class="leaflet-tile"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(-107px, 215px, 0px);
                    opacity: 1;
                  "
                /><img
                  alt=""
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/14/2870/6520?access_token=undefined"
                  class="leaflet-tile"
                  style="
                    width: 256px;
                    height: 256px;
                    transform: translate3d(149px, 215px, 0px);
                    opacity: 1;
                  "
                />
              </div>
            </div>
          </div>
          <div class="leaflet-pane leaflet-overlay-pane">
            <svg
              pointer-events="none"
              class="leaflet-zoom-animated"
              width="434"
              height="562"
              viewBox="-36 -47 434 562"
              style="transform: translate3d(-36.4332px, -46.4657px, 0px) scale(1)"
            >
              <g>
                <path
                  class="leaflet-interactive"
                  stroke="#fcfcfc"
                  stroke-opacity="1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#2e7571"
                  fill-opacity="0.9"
                  fill-rule="evenodd"
                  d="M103,188a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                ></path>
                <path
                  class="leaflet-interactive"
                  stroke="#fcfcfc"
                  stroke-opacity="1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#f59e0b"
                  fill-opacity="0.9"
                  fill-rule="evenodd"
                  d="M180,236a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                ></path>
                <path
                  class="leaflet-interactive"
                  stroke="#fcfcfc"
                  stroke-opacity="1"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="#2e7571"
                  fill-opacity="0.9"
                  fill-rule="evenodd"
                  d="M244,280a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                ></path>
              </g>
            </svg>
          </div>
          <div class="leaflet-pane leaflet-shadow-pane"></div>
          <div class="leaflet-pane leaflet-marker-pane"></div>
          <div class="leaflet-pane leaflet-tooltip-pane"></div>
          <div class="leaflet-pane leaflet-popup-pane"></div>
          <div
            class="leaflet-proxy leaflet-zoom-animated"
            style="transform: translate3d(734752px, 1.66914e6px, 0px) scale(8192)"
          ></div>
        </div>
        <div class="leaflet-control-container">
          <div class="leaflet-top leaflet-left">
            <div class="leaflet-control-zoom leaflet-bar leaflet-control">
              <a
                class="leaflet-control-zoom-in"
                href="#"
                title="Zoom in"
                role="button"
                aria-label="Zoom in"
                aria-disabled="false"
                ><span aria-hidden="true">+</span></a
              ><a
                class="leaflet-control-zoom-out"
                href="#"
                title="Zoom out"
                role="button"
                aria-label="Zoom out"
                aria-disabled="false"
                ><span aria-hidden="true">−</span></a
              >
            </div>
          </div>
          <div class="leaflet-top leaflet-right"></div>
          <div class="leaflet-bottom leaflet-left"></div>
          <div class="leaflet-bottom leaflet-right">
            <div class="leaflet-control-attribution leaflet-control">
              <a
                href="https://leafletjs.com"
                title="A JavaScript library for interactive maps"
                ><svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  class="leaflet-attribution-flag"
                >
                  <path fill="#4C7BE1" d="M0 0h12v4H0z"></path>
                  <path fill="#FFD500" d="M0 4h12v3H0z"></path>
                  <path fill="#E0BC00" d="M0 7h12v1H0z"></path>
                </svg>
                Leaflet</a
              >
              <span aria-hidden="true">|</span> ©
              <a href="https://www.mapbox.com/about/maps/">Mapbox</a> ©
              <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
            </div>
          </div>
        </div>
      </div>
      <script type="application/json" data-bcn-obsmap-data="dmr-details">
        [
          {
            "id": "ts14",
            "lat": 34.4541,
            "lng": -116.9418,
            "label": "CW-TS14 · Level 1 – In Compliance",
            "hex": "var(--color-background-utility-success)"
          },
          {
            "id": "ts22",
            "lat": 34.4507,
            "lng": -116.9352,
            "label": "CW-TS22 · Level 2 – Minor Deviation",
            "hex": "var(--color-background-utility-warning)"
          },
          {
            "id": "ts31",
            "lat": 34.4476,
            "lng": -116.9297,
            "label": "CW-TS31 · Level 1 – In Compliance",
            "hex": "var(--color-background-utility-success)"
          }
        ]
      </script>
      <script
        type="module"
        src="/beacon-design/_astro/BcnObservationMap.astro_astro_type_script_index_0_lang.BpV6USJW.js"
      ></script>
    </div>
  </div>
  <div class="esa-card esa-card--outlined esa-card--padding-compact">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Report Information</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <dl class="bcn-detail-facts" data-columns="1">
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Contractors</dt>
          <dd class="bcn-detail-fact__value">
            <div
              class="bcn-tracked-field"
              data-bcn-tracked-field=""
              data-field-id="contractors"
              data-layout="block"
              data-label="Contractors"
              data-kind="fulcrum"
              data-marker=""
              data-tf-ready=""
            >
              <div class="bcn-tracked-field__read" data-gap="2xs" data-tf-read="">
                <p
                  data-tf-value="true"
                  class="bcn-tracked-field__value typography-body-md"
                >
                  Ridgeline Electric; Mesa Civil Constructors; Arroyo Pole Delivery
                </p>
                <span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="pending"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Pending sync</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="synced"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Synced</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="beacon"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Edited in Beacon</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Edit Contractors"
                      title="Edit Contractors"
                      data-tf-edit="true"
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
              </div>
              <div
                class="bcn-tracked-field__editor stack"
                data-gap="xs"
                data-tf-editor=""
                hidden=""
              >
                <div data-tf-slot=""></div>
                <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                  <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-save="true"
                      >
                        <span class="esa-button__label">Save</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-cancel="true"
                      >
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </dd>
        </div>
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Tailboards Attended</dt>
          <dd class="bcn-detail-fact__value">
            <div
              class="bcn-tracked-field"
              data-bcn-tracked-field=""
              data-field-id="tailboards"
              data-layout="block"
              data-label="Tailboards Attended"
              data-kind="beacon"
              data-marker=""
              data-tf-ready=""
            >
              <div class="bcn-tracked-field__read" data-gap="2xs" data-tf-read="">
                <p
                  data-tf-value="true"
                  class="bcn-tracked-field__value typography-body-md"
                >
                  ridgeline tailboard 0630 at laydown yard
                </p>
                <span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="pending"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Pending sync</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="synced"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Synced</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="beacon"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Edited in Beacon</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Edit Tailboards Attended"
                      title="Edit Tailboards Attended"
                      data-tf-edit="true"
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
              </div>
              <div
                class="bcn-tracked-field__editor stack"
                data-gap="xs"
                data-tf-editor=""
                hidden=""
              >
                <div data-tf-slot=""></div>
                <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                  <span data-tf-restore-wrap="" hidden=""
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-restore="true"
                      >
                        <span class="esa-button__label">Restore inspector's text</span>
                      </button></span
                    ></span
                  ><span class="bcn-tracked-field__actions cluster" data-gap="xs"
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-save="true"
                      >
                        <span class="esa-button__label">Save</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-cancel="true"
                      >
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </dd>
        </div>
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Variance Requests Reviewed</dt>
          <dd class="bcn-detail-fact__value">
            <div
              class="bcn-tracked-field"
              data-bcn-tracked-field=""
              data-field-id="variances"
              data-layout="block"
              data-label="Variance Requests Reviewed"
              data-kind="beacon"
              data-marker=""
              data-tf-ready=""
            >
              <div class="bcn-tracked-field__read" data-gap="2xs" data-tf-read="">
                <p
                  data-tf-value="true"
                  class="bcn-tracked-field__value typography-body-md"
                >
                  None
                </p>
                <span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="pending"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Pending sync</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="synced"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Synced</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="end"
                    data-tf-marker="beacon"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Edited in Beacon</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Edit Variance Requests Reviewed"
                      title="Edit Variance Requests Reviewed"
                      data-tf-edit="true"
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
              </div>
              <div
                class="bcn-tracked-field__editor stack"
                data-gap="xs"
                data-tf-editor=""
                hidden=""
              >
                <div data-tf-slot=""></div>
                <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                  <span data-tf-restore-wrap="" hidden=""
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-restore="true"
                      >
                        <span class="esa-button__label">Restore inspector's text</span>
                      </button></span
                    ></span
                  ><span class="bcn-tracked-field__actions cluster" data-gap="xs"
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-save="true"
                      >
                        <span class="esa-button__label">Save</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-cancel="true"
                      >
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
```

## Styles
```css
/* Type comes from .typography-body-md on the element, leading included — the
       role leads at normal, which is what a one-word label beside a 22px track
       wants. This carried a line-height override back when body-md was relaxed
       (1.8) and the row outgrew the track; the role moved, so the override went. */

    /* FORCED COLORS. The worst case in the kit: on/off is --_bg-on vs --_bg-off
       (both force-adjusted to the same Canvas) and the thumb's ONLY separation
       from the track is its background plus --elevation-1, which is deleted. The
       control becomes an empty pill with an invisible thumb, and the position
       channel is unreadable because the thing being positioned cannot be seen.
       There is no "On"/"Off" text to fall back on — 'label' is the field name and
       is identical in both states.

       Two channels are restored: the thumb FILL (Canvas when off, Highlight when
       on) and its POSITION, which already worked.

       The 'left' re-declaration is not optional. ':host([checked]) .thumb' above
       computes '--_track-w - --_thumb - 2px', which assumes --_track-w is the
       track's padding-box width. Adding a border under box-sizing: border-box
       shrinks that box by 2px while the calc still uses the full value, so the
       checked thumb would overshoot the right edge at every one of the four
       sizes. -4px absorbs it. */
    @media (forced-colors: active) {
      .track {
        box-sizing: border-box;
        border: 1px solid CanvasText;
        background: Canvas;
      }
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.esa-card{--_card-bg:var(--card-bg,var(--color-background-elevation-raised,#fcfcfc));--_card-border:var(--card-border-color,var(--color-border-default,#cecece));--_card-radius:var(--radius-md,.5rem);--_card-padding:var(--spacing-500,1.5rem);--_card-header-bg:var(--card-header-bg,transparent);--_card-header-color:var(--color-content-default,#202020);--_card-header-border:var(--color-border-default-subtle,#d9d9d9);--_card-meta-label-color:var(--color-content-default-secondary,#646464);--_card-meta-label-size:var(--typography-label-sm-font-size,.875rem);--_card-meta-value-size:var(--typography-label-md-font-size,.9375rem);background:var(--_card-bg);border:var(--border-width-default,1px) solid var(--_card-border);border-radius:var(--_card-radius);display:block;overflow:hidden}
.esa-card--outlined{--_card-border:var(--color-border-default,#cecece)}
.esa-card--elevated{--_card-border:transparent;box-shadow:var(--elevation-2,0 2px 12px 0 #0000000a)}
.esa-card--filled{--_card-bg:var(--color-background-elevation-sunken,#f0f0f0);--_card-border:transparent}
.esa-card--header-primary .esa-card__header{--_card-header-bg:var(--color-background-brand,#46a758);--_card-header-color:var(--color-content-default-knockout,#fcfcfc)}
.esa-card--header-muted .esa-card__header{--_card-header-bg:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-card--padding-none{--_card-padding:0}
.esa-card--padding-compact{--_card-padding:var(--spacing-300,.75rem)}
.esa-card--padding-spacious{--_card-padding:var(--spacing-700,3rem)}
.esa-card__header{padding:var(--spacing-400,1rem) var(--_card-padding);background:var(--_card-header-bg);color:var(--_card-header-color);border-bottom:var(--border-width-default,1px) solid var(--_card-header-border);justify-content:space-between;align-items:center;min-height:56px;display:flex}
.esa-card__header-content{align-items:center;gap:var(--spacing-300,.75rem);display:flex}
.esa-card__titles{gap:var(--spacing-050,.125rem);flex-direction:column;display:flex}
.esa-card__title{color:inherit;margin:0}
.esa-card__subtitle{color:var(--color-content-default-secondary,#646464);margin:0}
.esa-card--header-primary .esa-card__subtitle{color:var(--color-content-on-brand,#fffc)}
.esa-card__meta{gap:var(--spacing-100,.25rem) var(--spacing-500,1.5rem);margin:var(--spacing-050,.125rem) 0 0;flex-wrap:wrap;display:flex}
.esa-card__meta-pair{align-items:baseline;gap:var(--spacing-100,.25rem);min-width:0;display:flex}
.esa-card__meta dt{font-size:var(--_card-meta-label-size);font-weight:var(--font-weight-medium,500);color:var(--_card-meta-label-color)}
.esa-card__meta dd{font-size:var(--_card-meta-value-size);color:inherit;margin:0}
.esa-card--header-primary .esa-card__meta dt{color:#fffc}
.esa-card__icon{color:inherit;flex-shrink:0}
.esa-card__actions{align-items:center;gap:var(--spacing-200,.5rem);display:flex}
.esa-card__body{padding:var(--_card-padding)}
.esa-card__footer{padding:var(--spacing-300,.75rem) var(--_card-padding);border-top:var(--border-width-default,1px) solid var(--_card-header-border);background:var(--color-background-elevation-sunken,#f0f0f0)}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-countchip__num .esa-badge{--badge-radius:var(--radius-full);--badge-bg:var(--color-border-default);--badge-text-color:var(--color-content-default-secondary);box-sizing:border-box;font-variant-numeric:tabular-nums;min-width:19px;height:19px;box-shadow:0 0 0 1.5px var(--color-background-elevation-raised);justify-content:center;align-items:center;padding:0 4px;font-size:.8125rem;line-height:1;display:inline-flex}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-staging__item .esa-card{overflow:visible}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-targets__item[data-receiving] .esa-card{border-color:var(--color-background-brand-muted);background:color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent)}
.bcn-ev-targets__item[data-blocked] .esa-card{opacity:.45}
.bcn-ev-attached__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
.bcn-ev-targets__item .esa-card{overflow:visible}
.bcn-ev-row__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
.bcn-ev-row__tags .esa-badge{--badge-bg:var(--bcn-gray-100);--badge-text-color:var(--bcn-gray-700);font-weight:var(--typography-font-weight-medium)}
.topbar__right .esa-icon-button{color:var(--color-content-default-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-background-utility-danger)}
.project-switcher__trigger>.esa-icon:first-child{color:var(--bcn-gray-500);flex-shrink:0}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-background-brand)}
.nav-section__header>.esa-icon:first-child{color:var(--bcn-gray-950);flex-shrink:0;transition:color .15s}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);flex-shrink:0;transition:transform .15s,opacity .2s ease-in-out}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__title,.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;top:0;left:0}
.leaflet-container{overflow:hidden}
.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}
.leaflet-tile::selection{background:0 0}
.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}
.leaflet-safari .leaflet-tile-container{-webkit-transform-origin:0 0;width:1600px;height:1600px}
.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}
.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{width:auto;padding:0;max-width:none!important;max-height:none!important}
.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}
.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}
.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}
.leaflet-container{-webkit-tap-highlight-color:transparent}
.leaflet-container a{-webkit-tap-highlight-color:#33b5e566}
.leaflet-tile{filter:inherit;visibility:hidden}
.leaflet-tile-loaded{visibility:inherit}
.leaflet-overlay-pane svg{-moz-user-select:none}
.leaflet-pane{z-index:400}
.leaflet-tile-pane{z-index:200}
.leaflet-overlay-pane{z-index:400}
.leaflet-shadow-pane{z-index:500}
.leaflet-marker-pane{z-index:600}
.leaflet-tooltip-pane{z-index:650}
.leaflet-popup-pane{z-index:700}
.leaflet-map-pane canvas{z-index:100}
.leaflet-map-pane svg{z-index:200}
.leaflet-control{z-index:800;pointer-events:visiblePainted;pointer-events:auto;position:relative}
.leaflet-top,.leaflet-bottom{z-index:1000;pointer-events:none;position:absolute}
.leaflet-top{top:0}
.leaflet-right{right:0}
.leaflet-bottom{bottom:0}
.leaflet-left{left:0}
.leaflet-control{float:left;clear:both}
.leaflet-right .leaflet-control{float:right}
.leaflet-top .leaflet-control{margin-top:10px}
.leaflet-bottom .leaflet-control{margin-bottom:10px}
.leaflet-left .leaflet-control{margin-left:10px}
.leaflet-right .leaflet-control{margin-right:10px}
.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}
.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}
svg.leaflet-zoom-animated{will-change:transform}
.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}
.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}
.leaflet-interactive{cursor:pointer}
.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}
.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}
.leaflet-popup-pane,.leaflet-control{cursor:auto}
.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}
.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}
.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}
.leaflet-container{outline-offset:1px;background:#ddd}
.leaflet-container a{color:#0078a8}
.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:.75rem;line-height:1.5}
.leaflet-bar{border-radius:4px;box-shadow:0 1px 5px #000000a6}
.leaflet-bar a{text-align:center;color:#000;background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;text-decoration:none;display:block}
.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50%;background-repeat:no-repeat;display:block}
.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}
.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}
.leaflet-bar a:last-child{border-bottom:none;border-bottom-right-radius:4px;border-bottom-left-radius:4px}
.leaflet-bar a.leaflet-disabled{cursor:default;color:#bbb;background-color:#f4f4f4}
.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}
.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}
.leaflet-touch .leaflet-bar a:last-child{border-bottom-right-radius:2px;border-bottom-left-radius:2px}
.leaflet-control-zoom-in,.leaflet-control-zoom-out{text-indent:1px;font:700 18px Lucida Console,Monaco,monospace}
.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}
.leaflet-control-layers{background:#fff;border-radius:5px;box-shadow:0 1px 5px #0006}
.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}
.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}
.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}
.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}
.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}
.leaflet-control-layers-expanded{color:#333;background:#fff;padding:6px 10px 6px 6px}
.leaflet-control-layers-scrollbar{padding-right:5px;overflow:hidden scroll}
.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}
.leaflet-control-layers label{font-size:1.08333em;display:block}
.leaflet-control-layers-separator{border-top:1px solid #ddd;height:0;margin:5px -10px 5px -6px}
.leaflet-container .leaflet-control-attribution{background:#fffc;margin:0}
.leaflet-control-attribution,.leaflet-control-scale-line{color:#333;padding:0 5px;line-height:1.4}
.leaflet-control-attribution a{text-decoration:none}
.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}
.leaflet-attribution-flag{width:1em;height:.6669em;vertical-align:baseline!important;display:inline!important}
.leaflet-left .leaflet-control-scale{margin-left:5px}
.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}
.leaflet-control-scale-line{white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;text-shadow:1px 1px #fff;background:#fffc;border:2px solid #777;border-top:none;padding:2px 5px 1px;line-height:1.1}
.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}
.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}
.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}
.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{background-clip:padding-box;border:2px solid #0003}
.leaflet-container a.leaflet-popup-close-button{text-align:center;color:#757575;background:0 0;border:none;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;text-decoration:none;position:absolute;top:0;right:0}
.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}
.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}
.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}
.bcn-detail-facts{grid-template-columns:minmax(0,1fr);margin:0;display:grid}
.bcn-detail-facts>.bcn-detail-fact+.bcn-detail-fact{border-top:var(--border-width-default,1px) solid var(--color-border-default-subtle)}
.bcn-detail-facts[data-columns="2"]>.bcn-detail-fact:nth-child(2){border-top:none}
.bcn-detail-facts[data-columns="2"]>.bcn-detail-fact[data-full]{grid-column:1/-1}
.bcn-detail-fact{gap:var(--spacing-100,.25rem);padding-block:var(--spacing-300,.75rem);flex-direction:column;display:flex}
.bcn-detail-fact__label{font-size:var(--typography-label-md-font-size);color:var(--color-content-default-secondary)}
.bcn-detail-fact__value{font-size:var(--typography-body-md-font-size,1rem);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);overflow-wrap:anywhere;margin:0}
.bcn-detail-fact__note{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-regular,400);color:var(--color-content-default-secondary);font-style:italic;display:block}
.bcn-tracked-field{gap:var(--spacing-050,.125rem);flex-direction:column;min-width:0;display:flex}
.bcn-tracked-field [hidden]{display:none}
.bcn-tracked-field__key{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-medium);color:var(--form-label-color)}
.bcn-tracked-field[data-layout=fact] .bcn-tracked-field__value{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default)}
.bcn-tracked-field__value{overflow-wrap:anywhere;min-width:0}
.bcn-tracked-field[data-layout=block] .bcn-tracked-field__read{align-items:start;column-gap:var(--spacing-200,.5rem);grid-template-columns:minmax(0,1fr) auto;display:grid}
.bcn-tracked-field[data-layout=block] .bcn-tracked-field__value{color:var(--color-content-default);margin:0}
.bcn-tracked-field[data-layout=inline]{align-items:center;column-gap:var(--spacing-100,.25rem);vertical-align:middle;flex-flow:wrap;display:inline-flex}
.bcn-tracked-field[data-layout=inline][data-editing]{flex-direction:column;align-items:stretch;width:100%;display:flex}
.bcn-tracked-field__aside{flex-wrap:nowrap}
.bcn-tracked-field[data-layout=inline]{border-radius:var(--radius-sm);position:relative}
.bcn-tracked-field[data-layout=inline]:not([data-editing]){place-self:flex-start start}
.bcn-tracked-field[data-layout=inline]:not([data-editing]) .bcn-tracked-field__read{flex-wrap:nowrap}
.bcn-tracked-field[data-layout=inline]:not([data-editing]) [data-tf-edit]{aspect-ratio:auto;opacity:0;block-size:auto;min-block-size:0;inline-size:auto;min-inline-size:0;position:absolute;inset:0}
.bcn-tracked-field[data-layout=inline]:not([data-editing]):hover{background:var(--color-background-default-hover)}
.bcn-tracked-field[data-layout=inline]:has([data-tf-edit]:focus-visible){outline:var(--focus-ring-width,2px) solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset,2px)}
.bcn-tracked-field__editor{font-style:normal;font-weight:var(--typography-font-weight-regular,400)}
.bcn-tracked-field[data-layout=inline] .bcn-tracked-field__tip{z-index:1;position:relative}
.bcn-tracked-field__marker{border-radius:var(--radius-sm);display:inline-flex}
.bcn-tracked-field__marker:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset,2px)}
.bcn-tracked-field__editor{padding-block:var(--spacing-100,.25rem)}
.bcn-tracked-field__actions{margin-inline-start:auto}
.bcn-dmr-details__band{--switcher-threshold:48rem}
.bcn-dmr-details__band>:first-child{flex-grow:3}
.bcn-dmr-details__band>:last-child{flex-grow:2}
.bcn-dmr-details__latlng{flex-wrap:nowrap}
.bcn-dmr-details__map{min-block-size:20rem;position:relative}
.bcn-dmr-details__map>.bcn-obsmap{position:absolute;inset:0}
.bcn-dmr-wa__heading .esa-icon,.bcn-dmr-wa__subhead .esa-icon{color:var(--color-content-default-secondary,#646464)}
.esa-button{--_btn-pad-y:var(--spacing-300,.75rem);--_btn-padding-x:var(--spacing-300,.75rem);--_btn-radius:var(--button-radius-md,.5rem);--_accent:var(--color-background-brand,#46a758);--_accent-hover:var(--color-background-brand-hover,#3e9b4f);--_on:var(--color-content-default-knockout,#fcfcfc);--_accent-text:var(--_accent);--_btn-tint-hover:color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active:color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y:var(--spacing-200,.5rem);--_btn-padding-x:var(--spacing-200,.5rem);--_btn-radius:var(--button-radius-xs,4px)}
.esa-button--sm{--_btn-pad-y:var(--spacing-250,.625rem);--_btn-padding-x:var(--spacing-250,.625rem);--_btn-radius:var(--button-radius-sm,4px)}
.esa-button--lg{--_btn-pad-y:var(--spacing-400,1rem);--_btn-padding-x:var(--spacing-400,1rem);--_btn-radius:var(--button-radius-lg,8px)}
.esa-button--variant-primary{--_accent-text:var(--color-content-brand)}
.esa-button--variant-secondary{--_accent:var(--color-background-brand-muted);--_accent-hover:var(--color-background-brand-muted-hover);--_on:var(--color-content-on-brand-muted,var(--color-content-default));--_accent-text:var(--color-content-brand);--_accent-border:var(--color-border-default-strong,#bbb)}
.esa-button--variant-danger{--_accent:var(--color-background-utility-danger);--_accent-hover:var(--color-background-utility-danger-hover);--_accent-text:var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent:var(--color-background-utility-success);--_accent-hover:var(--color-background-utility-success-hover);--_on:var(--color-content-on-utility-success);--_accent-text:var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent:var(--color-background-utility-warning);--_accent-hover:var(--color-background-utility-warning-hover);--_on:var(--button-on-warning,var(--color-content-on-utility-warning,#4f3422));--_accent-text:var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent:var(--color-background-utility-info);--_accent-hover:var(--color-background-utility-info-hover);--_accent-text:var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent:var(--color-background-ai);--_accent-hover:var(--color-background-ai-hover);--_accent-text:var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border,transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{color:var(--_accent-text);border-color:var(--_accent);background:0 0}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb, var(--color-background-elevation-sunken,#f0f0f0) 45%, var(--color-background-elevation-raised,#fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong,#bbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{color:var(--color-content-default,#202020);background:0 0;border-color:#0000}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default,#cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-button--variant-chrome .esa-button__native{color:inherit;background:0 0;border-color:#0000}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover,color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{justify-content:center;align-items:center;gap:var(--spacing-200,8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default,1px) solid transparent;border-radius:var(--_btn-radius);cursor:pointer;transition:background var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);-webkit-appearance:none;appearance:none;text-decoration:none;display:inline-flex}
.esa-button__native:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{cursor:pointer;list-style:none}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}
.esa-button__spinner{width:1em;height:1em;animation:esa-button-spin var(--animation-spin,.75s linear infinite);border:2px solid;border-right-color:#0000;border-radius:50%;display:inline-block}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-microcopy-2xs{font-family:var(--typography-microcopy-2xs-font-family);font-size:var(--typography-microcopy-2xs-font-size);font-weight:var(--typography-microcopy-2xs-font-weight);line-height:var(--typography-microcopy-2xs-line-height);letter-spacing:var(--typography-microcopy-2xs-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-2xs-subtle{font-family:var(--typography-microcopy-2xs-subtle-font-family);font-size:var(--typography-microcopy-2xs-subtle-font-size);font-weight:var(--typography-microcopy-2xs-subtle-font-weight);line-height:var(--typography-microcopy-2xs-subtle-line-height);letter-spacing:var(--typography-microcopy-2xs-subtle-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-2xs-strong{font-family:var(--typography-microcopy-2xs-strong-font-family);font-size:var(--typography-microcopy-2xs-strong-font-size);font-weight:var(--typography-microcopy-2xs-strong-font-weight);line-height:var(--typography-microcopy-2xs-strong-line-height);letter-spacing:var(--typography-microcopy-2xs-strong-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.typography-title-sm-strong{font-family:var(--typography-title-sm-strong-font-family);font-size:var(--typography-title-sm-strong-font-size);font-weight:var(--typography-title-sm-strong-font-weight);line-height:var(--typography-title-sm-strong-line-height);letter-spacing:var(--typography-title-sm-strong-letter-spacing)}
.bcn-obsmap{border-radius:var(--radius-200);border:1px solid var(--color-border-default);background:var(--color-background-elevation-sunken);z-index:0;isolation:isolate;width:100%;position:relative;overflow:hidden}
.bcn-obsmap .leaflet-container{font-family:var(--typography-font-family-sans,inherit);background:var(--color-background-elevation-sunken)}
.bcn-obsmap[data-interactive=false] .leaflet-container{cursor:default}
.bcn-obsmap .leaflet-interactive{cursor:pointer}
.esa-collapsible__summary .esa-icon{color:var(--color-content-default-secondary,#646464);flex-shrink:0}
.visually-hidden{white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}
.visually-hidden--focusable:focus,.visually-hidden--focusable:focus-within,.visually-hidden--focusable:active{white-space:normal;clip:auto;clip-path:none;width:auto;height:auto;margin:0;position:static;overflow:visible}
.esa-badge{--_badge-bg:var(--badge-bg,var(--color-background-brand,#46a758));--_badge-text:var(--badge-text-color,var(--color-content-default-knockout,#fcfcfc));--_badge-padding-y:var(--spacing-150,.375rem);--_badge-padding-x:var(--spacing-200,.5rem);min-width:calc(1lh + 2 * var(--_badge-padding-y));padding-block:var(--_badge-padding-y);padding-inline:var(--_badge-padding-x);border-radius:var(--radius-chip,var(--radius-sm,.25rem));background:var(--_badge-bg);color:var(--_badge-text);white-space:nowrap;box-sizing:border-box;justify-content:center;align-items:center;display:inline-flex}
.esa-badge--xs{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-100,.25rem)}
.esa-badge--sm{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-150,.375rem)}
.esa-badge--lg{--_badge-padding-y:var(--spacing-250,.625rem);--_badge-padding-x:var(--spacing-300,.75rem)}
.esa-badge--secondary{--_badge-bg:var(--color-background-brand-muted,#e9f6e9);--_badge-text:var(--color-content-on-brand-muted,#203c25)}
.esa-badge--success{--_badge-bg:var(--color-background-utility-success-muted,#e6f6eb);--_badge-text:var(--color-content-utility-success,#218358);--_badge-border:var(--color-border-utility-success,#adddc0)}
.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-muted,#fff7c2);--_badge-text:var(--color-content-utility-warning,#ab6400);--_badge-border:var(--color-border-utility-warning,#f3d673)}
.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-muted,#feebec);--_badge-text:var(--color-content-utility-danger,#ce2c31);--_badge-border:var(--color-border-utility-danger,#fdbdbe)}
.esa-badge--info{--_badge-bg:var(--color-background-utility-info-muted,#e6f4fe);--_badge-text:var(--color-content-utility-info,#0d74ce);--_badge-border:var(--color-border-utility-info,#acd8fc)}
.esa-badge--success:not(.esa-badge--dot),.esa-badge--warning:not(.esa-badge--dot),.esa-badge--danger:not(.esa-badge--dot),.esa-badge--info:not(.esa-badge--dot){border:1px solid var(--_badge-border,transparent)}
.esa-badge--dot{border-radius:var(--radius-pill,9999px);width:8px;min-width:8px;height:8px;padding:0}
.esa-badge--dot.esa-badge--primary{--_badge-bg:var(--color-background-brand-hover,#3e9b4f)}
.esa-badge--dot.esa-badge--secondary{--_badge-bg:var(--color-background-brand,#46a758)}
.esa-badge--dot.esa-badge--success{--_badge-bg:var(--color-background-utility-success-hover,#2b9a66)}
.esa-badge--dot.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-hover,#ffba18)}
.esa-badge--dot.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-hover,#dc3e42)}
.esa-badge--dot.esa-badge--info{--_badge-bg:var(--color-background-utility-info-hover,#0588f0)}
.esa-badge--dot{background:canvastext;border:0;outline:1px solid canvastext}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.leaflet-container .leaflet-tooltip{font-family:var(--typography-font-family-sans,inherit);font-size:.9375rem;font-weight:var(--typography-font-weight-semibold,600);color:var(--color-content-default,#3d3d3d);background:var(--color-background-elevation-raised,#fff);border:1px solid var(--color-border-default,#dcdcdc);border-radius:var(--radius-100,4px);box-shadow:var(--elevation-4,0 6px 24px -6px #00000012);padding:6px 12px;line-height:1.4}
.leaflet-container .leaflet-tooltip-top:before{border-top-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-bottom:before{border-bottom-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-left:before{border-left-color:var(--color-background-elevation-raised,#fff)}
.leaflet-container .leaflet-tooltip-right:before{border-right-color:var(--color-background-elevation-raised,#fff)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.stack{--gap:var(--spacing-400,1rem);gap:var(--gap);flex-direction:column;display:flex}
.stack[data-split]>[data-split]{margin-block-end:auto}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
.switcher{--gap:var(--spacing-400,1rem);--switcher-threshold:32rem;flex-wrap:wrap;display:flex}
.switcher>*{flex-grow:1;flex-basis:calc((var(--switcher-threshold) - 100%) * 999)}
.switcher{gap:var(--gap)}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
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
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
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
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
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
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
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
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
