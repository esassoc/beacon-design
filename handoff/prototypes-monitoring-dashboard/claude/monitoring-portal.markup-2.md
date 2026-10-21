# Monitoring Portal: markup, part 2 of 2

```html
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="M10 10h4"></path>
                            <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path>
                            <!-- …and 4 more like this (<path>) -->
                          </svg></span
                        ><span class="bcn-widget-card__state"
                          ><span
                            class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">On dashboard</span></span
                          ></span
                        ></span
                      ><span class="stack" data-gap="xs"
                        ><span class="bcn-widget-card__title typography-label-md-strong"
                          >Active Observations</span
                        ><span class="bcn-widget-card__stream">Observations</span></span
                      ></span
                    >
                  </div>
                </div></button
              ><button
                type="button"
                class="bcn-widget-card"
                data-widget-card=""
                data-widget-id="obs-nesting-birds"
                data-on=""
              >
                <div class="esa-card">
                  <div class="esa-card__body typography-body-md">
                    <span class="bcn-widget-card__body stack" data-gap="md"
                      ><span class="repel"
                        ><span class="esa-icon esa-icon--md" aria-hidden="true"
                          ><svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="M16 7h.01"></path>
                            <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
                            <!-- …and 4 more like this (<path>) -->
                          </svg></span
                        ><span class="bcn-widget-card__state"
                          ><span
                            class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                            ><span class="esa-badge__text">On dashboard</span></span
                          ></span
                        ></span
                      ><span class="stack" data-gap="xs"
                        ><span class="bcn-widget-card__title typography-label-md-strong"
                          >Nesting Birds</span
                        ></span
                      ></span
                    >
                  </div>
                </div></button
              ><!-- …and 9 more like this (<button class="bcn-widget-card">) -->
            </div></esa-dialog
          ><!-- script type="module" removed (2 KB) --><!-- script type="module" removed (587 bytes) --><!-- script type="module" removed (0 bytes) --><esa-dialog
            id="mp-config-dialog"
            data-config-dialog="true"
            heading="Configure widget"
            size="lg"
            show-close-button="true"
            style="--dialog-width-lg: min(1320px, 94vw)"
            ><div class="bcn-cfg">
              <div class="bcn-cfg__preview">
                <div class="bcn-preview-stage" data-preview-stage="" data-stage-armed="1">
                  <span class="bcn-preview-stage__badge" data-stage-badge=""></span>
                  <div class="bcn-preview-stage__scroll" data-stage-scroll="">
                    <div class="bcn-preview-stage__well" data-stage-well="">
                      <div class="bcn-preview-stage__host" data-stage-host=""></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bcn-cfg__options stack" data-gap="lg">
                <span class="bcn-cfg__group typography-label-md-strong">Basics</span
                ><esa-text-field data-cfg-title="true" label="Title" size="sm"></esa-text-field
                ><esa-button-toggle
                  data-cfg-tabs="true"
                  size="sm"
                  label="Columns"
                ></esa-button-toggle>
                <div data-cfg-shows-field="">
                  <esa-select data-cfg-shows="true" label="Shows" size="sm"></esa-select>
                </div>
                <div data-cfg-scope-field="">
                  <esa-select
                    data-cfg-scope="true"
                    label="Default date range"
                    size="sm"
                  ></esa-select>
                </div>
                <div class="stack" data-gap="sm" data-cfg-color-mono="">
                  <span class="bcn-cfg__label typography-label-md-strong">Color</span>
                  <div class="bcn-color-field" data-color-field="">
                    <div class="bcn-color-field__swatches" role="group" aria-label="Color">
                      <button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Orange"
                        data-color-swatch="orange"
                        style="--_fill: var(--bcn-mark-orange)"
                      ></button
                      ><button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Amber"
                        data-color-swatch="amber"
                        style="--_fill: var(--bcn-mark-amber)"
                      ></button
                      ><!-- …and 6 more like this (<button class="bcn-color-field__swatch">) -->
                    </div>
                  </div>
                </div>
                <div class="stack" data-gap="sm" data-cfg-color-series="" hidden="">
                  <span class="bcn-cfg__label typography-label-md-strong">Color</span>
                  <div class="bcn-color-field" data-color-field="" data-series="Nesting Birds">
                    <span class="bcn-color-field__name typography-label-sm">Nesting Birds</span>
                    <div class="bcn-color-field__swatches" role="group" aria-label="Nesting Birds">
                      <button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Orange"
                        data-color-swatch="orange"
                        style="--_fill: var(--bcn-mark-orange)"
                      ></button
                      ><button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Amber"
                        data-color-swatch="amber"
                        style="--_fill: var(--bcn-mark-amber)"
                      ></button
                      ><!-- …and 6 more like this (<button class="bcn-color-field__swatch">) -->
                    </div>
                  </div>
                  <div
                    class="bcn-color-field"
                    data-color-field=""
                    data-series="Biological Resources"
                  >
                    <span class="bcn-color-field__name typography-label-sm"
                      >Biological Resources</span
                    >
                    <div
                      class="bcn-color-field__swatches"
                      role="group"
                      aria-label="Biological Resources"
                    >
                      <button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Orange"
                        data-color-swatch="orange"
                        style="--_fill: var(--bcn-mark-orange)"
                      ></button
                      ><button
                        type="button"
                        class="bcn-color-field__swatch"
                        aria-pressed="false"
                        aria-label="Amber"
                        data-color-swatch="amber"
                        style="--_fill: var(--bcn-mark-amber)"
                      ></button
                      ><!-- …and 6 more like this (<button class="bcn-color-field__swatch">) -->
                    </div>
                  </div>
                </div>
                <div class="stack" data-gap="sm" data-cfg-sections-field="" hidden="">
                  <span class="bcn-cfg__group typography-label-md-strong">Sections</span>
                  <div data-cfg-sections="">
                    <div class="bcn-cfgsec-list stack" data-cfgsec-list="obs-active" hidden="">
                      <div class="bcn-cfgsec" data-cfgsec="count">
                        <div class="bcn-cfgsec__bar">
                          <button
                            type="button"
                            class="bcn-cfgsec__grip"
                            data-cfgsec-grip=""
                            aria-label="Reorder Active observation headline count"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="9" cy="5" r="1.6"></circle>
                              <circle cx="15" cy="5" r="1.6"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></button
                          ><span class="bcn-cfgsec__name"
                            ><esa-switch-toggle
                              class="bcn-cfgsec__switch"
                              data-cfgsec-toggle="true"
                              size="sm"
                              label="Active observations"
                              label-position="after"
                            ></esa-switch-toggle
                            ><span class="bcn-cfgsec__sub typography-microcopy-xs-subtle"
                              >Headline figure</span
                            ></span
                          ><button
                            type="button"
                            class="bcn-cfgsec__caret"
                            data-cfgsec-expand=""
                            aria-expanded="false"
                            aria-label="Active observation headline count settings"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class="bcn-cfgsec__body stack"
                          data-gap="sm"
                          data-cfgsec-body=""
                          hidden=""
                        >
                          <esa-text-field
                            data-cfgsec-setting="title"
                            data-kind="text"
                            label="Section title"
                            size="sm"
                          ></esa-text-field>
                        </div>
                      </div>
                      <div class="bcn-cfgsec" data-cfgsec="breakdown">
                        <div class="bcn-cfgsec__bar">
                          <button
                            type="button"
                            class="bcn-cfgsec__grip"
                            data-cfgsec-grip=""
                            aria-label="Reorder Observation type breakdown donut"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="9" cy="5" r="1.6"></circle>
                              <circle cx="15" cy="5" r="1.6"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></button
                          ><span class="bcn-cfgsec__name"
                            ><esa-switch-toggle
                              class="bcn-cfgsec__switch"
                              data-cfgsec-toggle="true"
                              size="sm"
                              label="Observations by type"
                              label-position="after"
                            ></esa-switch-toggle
                            ><span class="bcn-cfgsec__sub typography-microcopy-xs-subtle"
                              >Donut chart</span
                            ></span
                          ><button
                            type="button"
                            class="bcn-cfgsec__caret"
                            data-cfgsec-expand=""
                            aria-expanded="false"
                            aria-label="Observation type breakdown donut settings"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class="bcn-cfgsec__body stack"
                          data-gap="sm"
                          data-cfgsec-body=""
                          hidden=""
                        >
                          <esa-text-field
                            data-cfgsec-setting="title"
                            data-kind="text"
                            label="Section title"
                            size="sm"
                          ></esa-text-field>
                        </div>
                      </div>
                      <!-- …and 4 more like this (<div class="bcn-cfgsec">) -->
                    </div>
                    <div
                      class="bcn-cfgsec-list stack"
                      data-cfgsec-list="obs-nesting-birds"
                      hidden=""
                    >
                      <div class="bcn-cfgsec" data-cfgsec="count">
                        <div class="bcn-cfgsec__bar">
                          <button
                            type="button"
                            class="bcn-cfgsec__grip"
                            data-cfgsec-grip=""
                            aria-label="Reorder Total nesting-bird observation count"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="9" cy="5" r="1.6"></circle>
                              <circle cx="15" cy="5" r="1.6"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></button
                          ><span class="bcn-cfgsec__name"
                            ><esa-switch-toggle
                              class="bcn-cfgsec__switch"
                              data-cfgsec-toggle="true"
                              size="sm"
                              label="Total nesting-bird observations"
                              label-position="after"
                            ></esa-switch-toggle
                            ><span class="bcn-cfgsec__sub typography-microcopy-xs-subtle"
                              >Headline figure</span
                            ></span
                          ><button
                            type="button"
                            class="bcn-cfgsec__caret"
                            data-cfgsec-expand=""
                            aria-expanded="false"
                            aria-label="Total nesting-bird observation count settings"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class="bcn-cfgsec__body stack"
                          data-gap="sm"
                          data-cfgsec-body=""
                          hidden=""
                        >
                          <esa-text-field
                            data-cfgsec-setting="title"
                            data-kind="text"
                            label="Section title"
                            size="sm"
                          ></esa-text-field>
                        </div>
                      </div>
                      <div class="bcn-cfgsec" data-cfgsec="species">
                        <div class="bcn-cfgsec__bar">
                          <button
                            type="button"
                            class="bcn-cfgsec__grip"
                            data-cfgsec-grip=""
                            aria-label="Reorder Observation counts by species code"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="9" cy="5" r="1.6"></circle>
                              <circle cx="15" cy="5" r="1.6"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></button
                          ><span class="bcn-cfgsec__name"
                            ><esa-switch-toggle
                              class="bcn-cfgsec__switch"
                              data-cfgsec-toggle="true"
                              size="sm"
                              label="Observations by species"
                              label-position="after"
                            ></esa-switch-toggle
                            ><span class="bcn-cfgsec__sub typography-microcopy-xs-subtle"
                              >Bar chart</span
                            ></span
                          ><button
                            type="button"
                            class="bcn-cfgsec__caret"
                            data-cfgsec-expand=""
                            aria-expanded="false"
                            aria-label="Observation counts by species code settings"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class="bcn-cfgsec__body stack"
                          data-gap="sm"
                          data-cfgsec-body=""
                          hidden=""
                        >
                          <esa-text-field
                            data-cfgsec-setting="title"
                            data-kind="text"
                            label="Section title"
                            size="sm"
                          ></esa-text-field>
                        </div>
                      </div>
                      <div class="bcn-cfgsec" data-cfgsec="latest">
                        <div class="bcn-cfgsec__bar">
                          <button
                            type="button"
                            class="bcn-cfgsec__grip"
                            data-cfgsec-grip=""
                            aria-label="Reorder Latest nesting-bird observations"
                          >
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <circle cx="9" cy="5" r="1.6"></circle>
                              <circle cx="15" cy="5" r="1.6"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></button
                          ><span class="bcn-cfgsec__name"
                            ><esa-switch-toggle
                              class="bcn-cfgsec__switch"
                              data-cfgsec-toggle="true"
                              size="sm"
                              label="Latest observations"
                              label-position="after"
                            ></esa-switch-toggle
                            ><span class="bcn-cfgsec__sub typography-microcopy-xs-subtle"
                              >Table</span
                            ></span
                          ><button
                            type="button"
                            class="bcn-cfgsec__caret"
                            data-cfgsec-expand=""
                            aria-expanded="false"
                            aria-label="Latest nesting-bird observations settings"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              aria-hidden="true"
                            >
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </button>
                        </div>
                        <div
                          class="bcn-cfgsec__body stack"
                          data-gap="sm"
                          data-cfgsec-body=""
                          hidden=""
                        >
                          <esa-text-field
                            data-cfgsec-setting="title"
                            data-kind="text"
                            label="Section title"
                            size="sm"
                          ></esa-text-field
                          ><esa-select
                            data-cfgsec-setting="rows"
                            data-kind="count"
                            data-min="1"
                            data-max="7"
                            label="Rows shown"
                            size="sm"
                          ></esa-select>
                        </div>
                      </div>
                    </div>
                    <!-- …and 9 more like this (<div class="bcn-cfgsec-list stack">) -->
                  </div>
                </div>
              </div>
            </div>
            <div slot="footer" class="repel bcn-cfg__foot" data-gap="md">
              <span data-cfg-remove=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Remove widget</span>
                  </button></span
                ></span
              ><span class="cluster" data-gap="sm"
                ><span data-cfg-save=""
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Save widget</span>
                    </button></span
                  ></span
                ><span data-cfg-add="" hidden=""
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Add to dashboard</span>
                    </button></span
                  ></span
                ><span data-cfg-cancel=""
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Cancel</span>
                    </button></span
                  ></span
                ></span
              >
            </div></esa-dialog
          ><!-- script type="module" removed (0 bytes) --><!-- script type="application/json" removed (10 KB) -->
        </section>
      </div>
    </div>
  </div>
</div>
```
