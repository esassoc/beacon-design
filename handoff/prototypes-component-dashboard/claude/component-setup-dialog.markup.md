# Component Setup dialog: markup

```html
<esa-dialog
  id="bcn-component-setup"
  class="bcn-cs"
  data-component-setup="true"
  heading="Component setup"
  size="lg"
  show-close-button="true"
  style="--dialog-width-lg: min(1320px, 94vw)"
  ><div slot="header" class="bcn-cs__head">
    <h2 class="bcn-cs__title">Component Setup</h2>
    <span class="bcn-cs__entity"
      ><span
        class="bcn-entity-logo"
        data-size="sm"
        data-variant="seal"
        data-shape="circle"
        data-style="fill"
        data-glyph="anchor"
        data-color="sky"
        style="--_c: var(--bcn-mark-sky)"
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
            <path d="M12 22V8"></path>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
            <circle cx="12" cy="5" r="3"></circle></svg></span></span
      ><span class="bcn-cs__entityname">Bouldin Island Geotechnical Exploration</span></span
    >
  </div>
  <div class="bcn-cs__frame">
    <nav class="bcn-cs__rail" aria-label="Setup steps">
      <ol class="bcn-cs__steps">
        <li>
          <button type="button" class="bcn-cs__step" data-cs-goto="sources">
            <span class="bcn-cs__num" aria-hidden="true"
              ><span class="bcn-cs__digit">1</span
              ><span class="bcn-cs__tick"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span></span></span
            ><span class="bcn-cs__stepbody"
              ><span class="bcn-cs__steplabel">Source Documents</span
              ><span class="bcn-cs__stepsum" data-cs-sum="sources"></span
            ></span>
          </button>
        </li>
        <li>
          <button type="button" class="bcn-cs__step" data-cs-goto="location">
            <span class="bcn-cs__num" aria-hidden="true"
              ><span class="bcn-cs__digit">2</span
              ><span class="bcn-cs__tick"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span></span></span
            ><span class="bcn-cs__stepbody"
              ><span class="bcn-cs__steplabel">Location and Species</span
              ><span class="bcn-cs__stepsum" data-cs-sum="location"></span
            ></span>
          </button>
        </li>
        <!-- …and 3 more like this (<li>) -->
      </ol>
      <div class="bcn-cs__tally">
        <p class="bcn-cs__fig">
          <span class="bcn-cs__figval" data-cs-tally="source"></span
          ><span class="bcn-cs__figlabel">Source document not applicable</span>
        </p>
        <p class="bcn-cs__fig">
          <span class="bcn-cs__figval" data-cs-tally="out"></span
          ><span class="bcn-cs__figlabel">Recommended not applicable</span>
        </p>
      </div>
    </nav>
    <div class="bcn-cs__panel">
      <section class="bcn-cs__pane" data-cs-pane="sources">
        <header class="bcn-cs__panehead">
          <h3 class="bcn-cs__h">Which source documents apply to this component?</h3>
          <span class="bcn-cs__count" data-cs-count="sources"></span>
        </header>
        <ul class="bcn-cs__options">
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="c-mmrp"
              aria-label="Delta Conveyance Project Final EIR — MMRP"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Delta Conveyance Project Final EIR — MMRP</span
              ><span class="bcn-cs-opt__meta"
                >Mapped to Intake B — North Delta, Twin Cities Complex +1</span
              ></span
            ><span class="bcn-cs-opt__end">7 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="c-itp"
              aria-label="CDFW Incidental Take Permit"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">CDFW Incidental Take Permit</span
              ><span class="bcn-cs-opt__meta"
                >Mapped to Intake B — North Delta, Twin Cities Complex +1</span
              ></span
            ><span class="bcn-cs-opt__end">4 commitments</span>
          </li>
          <!-- …and 6 more like this (<li class="bcn-cs-opt">) -->
        </ul>
      </section>
      <section class="bcn-cs__pane bcn-cs__pane--split" data-cs-pane="location" hidden="">
        <div class="bcn-cs__map">
          <div class="bcn-hmap" data-bcn-hmap="" data-prefix="bcn-component-setup-hmap">
            <div class="bcn-hmap__bar">
              <esa-button-toggle
                data-hmap-method="true"
                size="sm"
                label="Footprint"
              ></esa-button-toggle>
            </div>
            <div
              class="bcn-hmap__surface"
              data-hmap-surface=""
              style="height: 100%"
              role="region"
              aria-label="Component location against habitat layers"
            ></div>
            <div class="bcn-hmap__legend" aria-hidden="true">
              <span class="bcn-hmap__key"
                ><span class="bcn-hmap__swatch bcn-hmap__swatch--foot"></span>Component
                footprint</span
              ><span class="bcn-hmap__key"
                ><span class="bcn-hmap__swatch bcn-hmap__swatch--hab"></span>Habitat layer</span
              ><span class="bcn-hmap__key"
                ><span class="bcn-hmap__swatch bcn-hmap__swatch--sel"></span>Selected species'
                habitat</span
              >
            </div>
          </div>
          <!-- script type="application/json" removed (1 KB) -->
        </div>
        <div class="bcn-cs__side">
          <header class="bcn-cs__panehead">
            <h3 class="bcn-cs__h">Species</h3>
            <span class="bcn-cs__count" data-cs-count="species"></span>
          </header>
          <ul class="bcn-cs__options">
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="CTS"
                aria-label="California Tiger Salamander"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="California Tiger Salamander"
                  >California Tiger Salamander</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="CTS"
                  >CTS Upland and Breeding Habitat</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox size="sm" data-cs-species="DS" aria-label="Delta Smelt"></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Delta Smelt">Delta Smelt</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="DS"
                  >Delta Smelt Critical Habitat</span
                ></span
              >
            </li>
            <!-- …and 5 more like this (<li class="bcn-cs-opt">) -->
          </ul>
        </div>
      </section>
      <!-- …and 3 more like this (<section class="bcn-cs__pane">) -->
    </div>
  </div>
  <div slot="footer" class="bcn-cs__foot">
    <span data-cs-back=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Back</span>
        </button></span
      ></span
    ><span class="bcn-cs__footacts"
      ><span data-cs-next=""
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
          ><button class="esa-button__native typography-microcopy-md" type="button">
            <span class="esa-button__label">Next</span>
          </button></span
        ></span
      ><span data-cs-save="" hidden=""
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
          ><button class="esa-button__native typography-microcopy-md" type="button">
            <span class="esa-button__label"><span data-cs-save-label="">Save Setup</span></span>
          </button></span
        ></span
      ><span data-cs-cancel=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
          ><button class="esa-button__native typography-microcopy-md" type="button">
            <span class="esa-button__label">Cancel</span>
          </button></span
        ></span
      ></span
    >
  </div></esa-dialog
>
```
