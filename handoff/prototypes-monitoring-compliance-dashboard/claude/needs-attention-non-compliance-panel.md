# Needs Attention & Non-Compliance panel

BcnAttentionPanel — one card answering the three questions a compliance lead asks in sequence: WHERE the active issues are (a non-interactive map inset), WHAT is still outstanding (the item list, worst first, each row routing into its Observations detail), and HOW to get it off-platform (spreadsheet and KMZ export).

## Key decisions
- The component never sorts, filters, or reasons about severity — the caller hands it a list already ordered worst-first, and it only renders and derives map pins from what it is given. Keeping the ordering policy in the page is what lets the same panel serve a differently-configured project.
- The map inset is BcnObservationMap with interactive={false}: it reads as a picture of where the issues are, not a map you work in. The interactive instance of the same component is the Observations page map.
- It does NOT repeat the category breakdown — that lives in the severity overview above, split by severity. Two widgets showing the same counts in different groupings is how dashboards start disagreeing with themselves.
- Exports are plain client-side Blob downloads (spreadsheet + KMZ), not a server round trip — the dataset is already fully in the page.
- Everything else is a lego: esa-card shell with actions and footer slots, esa-button for all four actions, esa-badge for the age, esa-empty-state for the zero case, bcn-status-chip for the severity colour.

## Gotchas
- The registry has no `download` or `map` icon, and EsaButton does not forward a paths override, so the export buttons use `arrow-down` and `map-pin`, which read slightly off-label. Logged in the ledger — swap them the moment the registry grows.
- The export buttons live in the esa-card actions slot, so they sit in the card HEADER, not next to the list. Do not re-parent them into the body when porting; the slot placement is what keeps the card header pattern consistent with the other trackers.
- The map inset derives its pins from the same outstanding array the list renders. Feeding the two from different sources will silently desynchronise the picture from the list.

## Done when
- The card shows a map inset, an outstanding list ordered worst-first, and four actions; each list row opens that observation in the Observations page.
- Export spreadsheet and Export KMZ both download a file client-side covering exactly the rows shown.
- With no outstanding items the list is replaced by an esa-empty-state and the map inset renders with no pins.

## Markup
```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title typography-title-sm-strong">
          Needs Attention &amp; Non-Compliance
        </h3>
      </div>
    </div>
    <div class="esa-card__actions typography-label-md">
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          id="ap-export-csv"
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
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </span>
          <span class="esa-button__label"> Export spreadsheet </span>
        </button></span
      >
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          id="ap-export-kml"
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
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              ></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </span>
          <span class="esa-button__label"> Export KMZ </span>
        </button></span
      >
    </div>
  </div>
  <div class="esa-card__body typography-body-md">
    <div class="bcn-apanel__body sidebar" data-gap="lg" data-side="end">
      <div class="bcn-apanel__inset stack" data-gap="xs">
        <h4 class="bcn-apanel__heading type-label">Active issue locations</h4>
        <div
          class="bcn-obsmap leaflet-container leaflet-touch leaflet-fade-anim"
          id="bcn-obsmap-attention-panel"
          data-bcn-obsmap=""
          data-map-id="attention-panel"
          data-interactive="false"
          style="height: 260px; position: relative"
          role="img"
          aria-label="Observation map — 10 observations plotted by severity"
          data-bcn-obsmap-ready="true"
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
                    src="https://b.basemaps.cartocdn.com/light_all/13/1379/3234.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(-126px, -137px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://c.basemaps.cartocdn.com/light_all/13/1380/3234.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(130px, -137px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://c.basemaps.cartocdn.com/light_all/13/1379/3235.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(-126px, 119px, 0px);
                      opacity: 1;
                    "
                  /><img
                    alt=""
                    src="https://d.basemaps.cartocdn.com/light_all/13/1380/3235.png"
                    class="leaflet-tile leaflet-tile-loaded"
                    style="
                      width: 256px;
                      height: 256px;
                      transform: translate3d(130px, 119px, 0px);
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
                width="364"
                height="310"
                viewBox="-30 -26 364 310"
                style="transform: translate3d(-30.1367px, -25.6938px, 0px) scale(1)"
              >
                <g>
                  <path
                    class="leaflet-interactive"
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#ce2c31"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M51,91a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#ce2c31"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M126,181a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
                  ></path>
                  <path
                    class="leaflet-interactive"
                    stroke="#fcfcfc"
                    stroke-opacity="1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="#ce2c31"
                    fill-opacity="0.9"
                    fill-rule="evenodd"
                    d="M162,226a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M90,70a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M238,201a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M192,143a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M212,134a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M175,123a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M90,70a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
                    d="M143,32a7,7 0 1,0 14,0 a7,7 0 1,0 -14,0 "
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
              style="transform: translate3d(353302px, 828170px, 0px) scale(4096)"
            ></div>
          </div>
          <div class="leaflet-control-container">
            <div class="leaflet-top leaflet-left"></div>
            <div class="leaflet-top leaflet-right"></div>
            <div class="leaflet-bottom leaflet-left"></div>
            <div class="leaflet-bottom leaflet-right"></div>
          </div>
        </div>
        <script type="application/json" data-bcn-obsmap-data="attention-panel">
          [
            {
              "id": "obs-0121",
              "lat": 35.3572,
              "lng": -119.3678,
              "label": "obs-0121 — Cultural Resources Protection",
              "hex": "var(--color-danger)"
            },
            {
              "id": "obs-0139",
              "lat": 35.3445,
              "lng": -119.3549,
              "label": "obs-0139 — Spill Prevention & Response",
              "hex": "var(--color-danger)"
            },
            {
              "id": "obs-0142",
              "lat": 35.3382,
              "lng": -119.3488,
              "label": "obs-0142 — Stormwater / BMP Maintenance",
              "hex": "var(--color-danger)"
            },
            {
              "id": "obs-0113",
              "lat": 35.3601,
              "lng": -119.3612,
              "label": "obs-0113 — Access & Traffic Control",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0118",
              "lat": 35.3418,
              "lng": -119.3357,
              "label": "obs-0118 — Stormwater / BMP Maintenance",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0126",
              "lat": 35.3499,
              "lng": -119.3437,
              "label": "obs-0126 — Noise Management",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0130",
              "lat": 35.3511,
              "lng": -119.3402,
              "label": "obs-0130 — Vegetation & Habitat Protection",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0136",
              "lat": 35.3527,
              "lng": -119.3465,
              "label": "obs-0136 — Waste Management",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0140",
              "lat": 35.3601,
              "lng": -119.3612,
              "label": "obs-0140 — Access & Traffic Control",
              "hex": "var(--color-warning)"
            },
            {
              "id": "obs-0144",
              "lat": 35.3654,
              "lng": -119.3521,
              "label": "obs-0144 — Erosion & Sediment Control",
              "hex": "var(--color-warning)"
            }
          ]
        </script>
        <script
          type="module"
          src="/beacon-design/_astro/BcnObservationMap.astro_astro_type_script_index_0_lang.CaGBcxyZ.js"
        ></script>
      </div>
      <section class="bcn-apanel__outstanding stack" data-gap="sm">
        <h4 class="bcn-apanel__heading type-label">Outstanding items (10)</h4>
        <ul class="bcn-apanel__list stack" data-gap="2xs">
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0121"
              >obs-0121</a
            >
            <span
              class="bcn-status-chip"
              data-status="non-compliance"
              style="--_chip: var(--st-non-compliance, var(--color-danger))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Non-Compliance</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Cultural Resources Protection</span
            >
            <span class="bcn-apanel__area type-body-small"
              >Perimeter Fence Line — West</span
            >
            <span
              class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">25d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0139"
              >obs-0139</a
            >
            <span
              class="bcn-status-chip"
              data-status="non-compliance"
              style="--_chip: var(--st-non-compliance, var(--color-danger))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Non-Compliance</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Spill Prevention &amp; Response</span
            >
            <span class="bcn-apanel__area type-body-small">Laydown / Staging Yard</span>
            <span
              class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">12d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0142"
              >obs-0142</a
            >
            <span
              class="bcn-status-chip"
              data-status="non-compliance"
              style="--_chip: var(--st-non-compliance, var(--color-danger))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Non-Compliance</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Stormwater / BMP Maintenance</span
            >
            <span class="bcn-apanel__area type-body-small">South Array — Block B</span>
            <span
              class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">7d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0113"
              >obs-0113</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Access &amp; Traffic Control</span
            >
            <span class="bcn-apanel__area type-body-small"
              >Main Access Road (Hwy 58 Spur)</span
            >
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">33d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0118"
              >obs-0118</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Stormwater / BMP Maintenance</span
            >
            <span class="bcn-apanel__area type-body-small">Cottonwood Wash Crossing</span>
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">28d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0126"
              >obs-0126</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small">Noise Management</span>
            <span class="bcn-apanel__area type-body-small">BESS Pad</span>
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">22d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0130"
              >obs-0130</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Vegetation &amp; Habitat Protection</span
            >
            <span class="bcn-apanel__area type-body-small">Substation Yard</span>
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">20d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0136"
              >obs-0136</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small">Waste Management</span>
            <span class="bcn-apanel__area type-body-small">O&amp;M Building Area</span>
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">16d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0140"
              >obs-0140</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Access &amp; Traffic Control</span
            >
            <span class="bcn-apanel__area type-body-small"
              >Main Access Road (Hwy 58 Spur)</span
            >
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">9d active</span>
            </span>
          </li>
          <li class="bcn-apanel__row">
            <a
              class="bcn-apanel__id"
              href="/beacon-design/prototypes/monitoring/compliance-observations?open=obs-0144"
              >obs-0144</a
            >
            <span
              class="bcn-status-chip"
              data-status="needs-attention"
              style="--_chip: var(--st-needs-attention, var(--color-warning))"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Needs Attention</span>
            </span>
            <span class="bcn-apanel__category type-body-small"
              >Erosion &amp; Sediment Control</span
            >
            <span class="bcn-apanel__area type-body-small">North Array — Block A</span>
            <span
              class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
            >
              <span class="esa-badge__text">4d active</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
  <div class="esa-card__footer typography-meta">
    <div class="cluster" data-gap="sm">
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><a
          class="esa-button__native typography-microcopy-xs"
          href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
          role="button"
          ><span class="esa-button__label"> All needs attention (7) </span></a
        ></span
      >
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><a
          class="esa-button__native typography-microcopy-xs"
          href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
          role="button"
          ><span class="esa-button__label"> All non-compliance (3) </span></a
        ></span
      >
    </div>
  </div>
</div>
```

## Styles
```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.bcn-apanel__body {
  --sidebar-width: 19rem;
  --sidebar-content-min: 52%;
  align-items: stretch;
}
.bcn-apanel__heading {
  margin: 0;
  color: var(--color-text-secondary);
}
.bcn-apanel__list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bcn-apanel__row {
  display: grid;
  grid-template-columns: 7.5rem auto minmax(8rem, 1fr) minmax(9rem, 1fr) auto;
  align-items: center;
  gap: var(--spacing-400);
  padding-block: var(--spacing-150);
  padding-inline: var(--spacing-200);
}
.bcn-apanel__list > li + li {
  border-top: 1px solid var(--color-border-light);
}
.bcn-apanel__id {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
}
.bcn-apanel__id:hover {
  color: var(--color-primary-hover);
}
.bcn-apanel__category,
.bcn-apanel__area {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-apanel__category {
  color: var(--color-text-primary);
}
.bcn-apanel__area {
  color: var(--color-text-secondary);
}
.bcn-apanel__category,
.bcn-apanel__area {
  grid-column: 1 / -1;
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-info-subtle);
  --badge-text-color: var(--color-text-primary);
  border: 1px solid color-mix(in srgb, var(--color-info) 35%, transparent);
  font-weight: var(--font-weight-medium);
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  border-radius: var(--spacing-050);
  background: transparent;
  color: var(--bcn-gray-600);
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.sidebar-toggle:hover {
  background: var(--bcn-gray-200);
  color: var(--color-primary);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
.sidebar-toggle__icon {
  transition: transform 0.15s ease;
}
.sidebar-toggle--collapsed .sidebar-toggle__icon {
  transform: scaleX(-1);
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
.sidebar-header {
  flex-shrink: 0;
  padding: var(--spacing-300) var(--spacing-400);
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.type-body-small {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.type-label {
  font-family: var(--typography-label-font-family);
  font-size: var(--typography-label-font-size);
  font-weight: var(--typography-label-font-weight);
  line-height: var(--typography-label-line-height);
  letter-spacing: var(--typography-label-letter-spacing);
}
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-pane > svg,
.leaflet-pane > canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
}
.leaflet-container {
  overflow: hidden;
}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}
.leaflet-tile::selection {
  background: transparent;
}
.leaflet-safari .leaflet-tile {
  image-rendering: -webkit-optimize-contrast;
}
.leaflet-safari .leaflet-tile-container {
  width: 1600px;
  height: 1600px;
  -webkit-transform-origin: 0 0;
}
.leaflet-container .leaflet-overlay-pane svg {
  max-width: none !important;
  max-height: none !important;
}
.leaflet-container .leaflet-marker-pane img,
.leaflet-container .leaflet-shadow-pane img,
.leaflet-container .leaflet-tile-pane img,
.leaflet-container img.leaflet-image-layer,
.leaflet-container .leaflet-tile {
  max-width: none !important;
  max-height: none !important;
  width: auto;
  padding: 0;
}
.leaflet-container img.leaflet-tile {
  mix-blend-mode: plus-lighter;
}
.leaflet-container.leaflet-touch-zoom {
  -ms-touch-action: pan-x pan-y;
  touch-action: pan-x pan-y;
}
.leaflet-container.leaflet-touch-drag {
  -ms-touch-action: pinch-zoom;
  touch-action: none;
  touch-action: pinch-zoom;
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  -ms-touch-action: none;
  touch-action: none;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-container a {
  -webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);
}
.leaflet-tile {
  filter: inherit;
  visibility: hidden;
}
.leaflet-tile-loaded {
  visibility: inherit;
}
.leaflet-overlay-pane svg {
  -moz-user-select: none;
}
.leaflet-pane {
  z-index: 400;
}
.leaflet-tile-pane {
  z-index: 200;
}
.leaflet-overlay-pane {
  z-index: 400;
}
.leaflet-shadow-pane {
  z-index: 500;
}
.leaflet-marker-pane {
  z-index: 600;
}
.leaflet-tooltip-pane {
  z-index: 650;
}
.leaflet-popup-pane {
  z-index: 700;
}
.leaflet-map-pane canvas {
  z-index: 100;
}
.leaflet-map-pane svg {
  z-index: 200;
}
.leaflet-top,
.leaflet-bottom {
  position: absolute;
  z-index: 1000;
  pointer-events: none;
}
.leaflet-top {
  top: 0;
}
.leaflet-right {
  right: 0;
}
.leaflet-bottom {
  bottom: 0;
}
.leaflet-left {
  left: 0;
}
.leaflet-right .leaflet-control {
  float: right;
}
.leaflet-top .leaflet-control {
  margin-top: 10px;
}
.leaflet-bottom .leaflet-control {
  margin-bottom: 10px;
}
.leaflet-left .leaflet-control {
  margin-left: 10px;
}
.leaflet-right .leaflet-control {
  margin-right: 10px;
}
.leaflet-fade-anim .leaflet-popup {
  opacity: 0;
  -webkit-transition: opacity 0.2s linear;
  -moz-transition: opacity 0.2s linear;
  transition: opacity 0.2s linear;
}
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
  opacity: 1;
}
.leaflet-zoom-animated {
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
}
svg.leaflet-zoom-animated {
  will-change: transform;
}
.leaflet-zoom-anim .leaflet-zoom-animated {
  -webkit-transition: -webkit-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  -moz-transition: -moz-transform 0.25s cubic-bezier(0, 0, 0.25, 1);
  transition: transform 0.25s cubic-bezier(0, 0, 0.25, 1);
}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile {
  -webkit-transition: none;
  -moz-transition: none;
  transition: none;
}
.leaflet-interactive {
  cursor: pointer;
}
.leaflet-crosshair,
.leaflet-crosshair .leaflet-interactive {
  cursor: crosshair;
}
.leaflet-popup-pane,
.leaflet-control {
  cursor: auto;
}
.leaflet-dragging .leaflet-grab,
.leaflet-dragging .leaflet-grab .leaflet-interactive,
.leaflet-dragging .leaflet-marker-draggable {
  cursor: move;
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-image-layer,
.leaflet-pane > svg path,
.leaflet-tile-container {
  pointer-events: none;
}
.leaflet-marker-icon.leaflet-interactive,
.leaflet-image-layer.leaflet-interactive,
.leaflet-pane > svg path.leaflet-interactive,
svg.leaflet-image-layer.leaflet-interactive path {
  pointer-events: visiblePainted;
  pointer-events: auto;
}
.leaflet-container {
  background: #ddd;
  outline-offset: 1px;
}
.leaflet-container a {
  color: #0078a8;
}
.leaflet-container {
  font-family:
    Helvetica Neue,
    Arial,
    Helvetica,
    sans-serif;
  font-size: 12px;
  font-size: 0.75rem;
  line-height: 1.5;
}
.leaflet-touch .leaflet-bar a {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.leaflet-touch .leaflet-bar a:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.leaflet-touch .leaflet-bar a:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.leaflet-touch .leaflet-control-zoom-in,
.leaflet-touch .leaflet-control-zoom-out {
  font-size: 22px;
}
.leaflet-touch .leaflet-control-layers-toggle {
  width: 44px;
  height: 44px;
}
.leaflet-container .leaflet-control-attribution {
  background: #fff;
  background: #fffc;
  margin: 0;
}
.leaflet-left .leaflet-control-scale {
  margin-left: 5px;
}
.leaflet-bottom .leaflet-control-scale {
  margin-bottom: 5px;
}
.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  box-shadow: none;
}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-bar {
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
}
.leaflet-container a.leaflet-popup-close-button {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  text-align: center;
  width: 24px;
  height: 24px;
  font:
    16px/24px Tahoma,
    Verdana,
    sans-serif;
  color: #757575;
  text-decoration: none;
  background: transparent;
}
.leaflet-container a.leaflet-popup-close-button:hover,
.leaflet-container a.leaflet-popup-close-button:focus {
  color: #585858;
}
.leaflet-tooltip.leaflet-interactive {
  cursor: pointer;
  pointer-events: auto;
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  display: block;
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
}
.esa-card--filled {
  --_card-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  min-height: 56px;
}
.esa-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
}
.esa-card__titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050, 0.125rem);
}
.esa-card__title {
  margin: 0;
  color: inherit;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, rgba(255, 255, 255, 0.8));
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
}
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: var(--sidebar-content-min);
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
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
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
.leaflet-container .leaflet-tooltip {
  padding: 6px 12px;
  font-family: var(--font-sans, inherit);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold, 600);
  line-height: 1.4;
  color: var(--color-text-primary, #3d3d3d);
  background: var(--color-surface, #ffffff);
  border: 1px solid var(--color-border, #dcdcdc);
  border-radius: var(--radius-100, 4px);
  box-shadow: var(--shadow-300, 0 6px 24px -6px rgba(0, 0, 0, 0.07));
}
.leaflet-container .leaflet-tooltip-top:before {
  border-top-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-bottom:before {
  border-bottom-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-left:before {
  border-left-color: var(--color-surface, #ffffff);
}
.leaflet-container .leaflet-tooltip-right:before {
  border-right-color: var(--color-surface, #ffffff);
}
.bcn-obsmap {
  width: 100%;
  border-radius: var(--radius-200);
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-surface-sunken);
}
.bcn-obsmap .leaflet-container {
  font-family: var(--font-sans, inherit);
  background: var(--color-surface-sunken);
}
.bcn-obsmap[data-interactive="false"] .leaflet-container {
  cursor: default;
}
.bcn-obsmap .leaflet-interactive {
  cursor: pointer;
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
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #46a758 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-600`: #656565 _(component)_
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
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #cecece _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #a18072 _(semantic)_
- `--color-background-ai-hover`: #957468 _(semantic)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-brand-hover`: #3e9b4f _(semantic)_
- `--color-background-brand-muted`: #e9f6e9 _(semantic)_
- `--color-background-brand-muted-hover`: #daf1db _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
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
- `--color-border-default-subtle`: #d9d9d9 _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #2a7e3b _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
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
- `--color-primary-hover`: #00474f _(component)_
- `--color-secondary`: #00918b _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--elevation-2`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-sans`: "DM Sans", sans-serif _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--gap`: 2rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .5rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(component)_
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
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-font-family`: "DM Sans", sans-serif _(component)_
- `--typography-label-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--typography-label-font-weight`: 500 _(component)_
- `--typography-label-letter-spacing`: .01em _(component)_
- `--typography-label-line-height`: 1.6 _(component)_
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
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
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
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
