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
        <h3 class="esa-card__title">Needs Attention &amp; Non-Compliance</h3>
      </div>
    </div>
    <div class="esa-card__actions">
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
      >
        <button class="esa-button__native" type="button" id="ap-export-csv">
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
        </button>
      </span>
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
      >
        <button class="esa-button__native" type="button" id="ap-export-kml">
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
        </button>
      </span>
    </div>
  </div>
  <div class="esa-card__body">
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
                    fill="#e5484d"
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
                    fill="#e5484d"
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
                    fill="#e5484d"
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
            <span class="esa-badge esa-badge--danger esa-badge--sm">
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
            <span class="esa-badge esa-badge--danger esa-badge--sm">
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
            <span class="esa-badge esa-badge--danger esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
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
            <span class="esa-badge esa-badge--warning esa-badge--sm">
              <span class="esa-badge__text">4d active</span>
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
  <div class="esa-card__footer">
    <div class="cluster" data-gap="sm">
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
      >
        <a
          class="esa-button__native"
          href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
          role="button"
        >
          <span class="esa-button__label"> All needs attention (7) </span>
        </a>
      </span>
      <span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
      >
        <a
          class="esa-button__native"
          href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
          role="button"
        >
          <span class="esa-button__label"> All non-compliance (3) </span>
        </a>
      </span>
    </div>
  </div>
</div>
```

## Styles
```css
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
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-height: var(--form-height-xs, 28px);
  --_btn-padding-x: var(--form-padding-x-xs, 8px);
  --_btn-font-size: var(--form-font-size-xs, 11px);
  --_btn-radius: var(--form-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-height: var(--form-height-lg, 48px);
  --_btn-padding-x: var(--form-padding-x-lg, 20px);
  --_btn-font-size: var(--form-font-size-lg, 16px);
  --_btn-radius: var(--form-radius-lg, 8px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--sm.esa-button--icon-only .esa-button__native {
  height: var(--form-height-sm, 32px);
  padding-block: 0;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--color-secondary {
  --_accent: var(--color-secondary);
  --_accent-hover: var(--color-secondary-hover);
  --_on: var(--color-secondary-on-fill, var(--color-gray-12));
  --_accent-text: var(--color-secondary-strong);
}
.esa-button--color-danger {
  --_accent: var(--color-danger);
  --_accent-hover: var(--color-danger-hover);
  --_accent-text: var(--color-danger-strong);
}
.esa-button--color-success {
  --_accent: var(--color-success);
  --_accent-hover: var(--color-success-hover);
  --_on: var(--color-success-on-fill);
  --_accent-text: var(--color-success-strong);
}
.esa-button--color-warning {
  --_accent: var(--color-warning);
  --_accent-hover: var(--color-warning-hover);
  --_on: var(--button-on-warning, var(--color-gray-12));
  --_accent-text: var(--color-warning-strong);
}
.esa-button--color-info {
  --_accent: var(--color-info);
  --_accent-hover: var(--color-info-hover);
  --_accent-text: var(--color-info-strong);
}
.esa-button--color-ai {
  --_accent: var(--color-ai);
  --_accent-hover: var(--color-ai-hover);
  --_accent-text: var(--color-ai-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
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
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-strong, #d4d4d4);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button--color-ghost .esa-button__native:hover:not(:disabled),
.esa-button--color-ghost.esa-button--active .esa-button__native {
  background: var(--color-surface-sunken, #efefef);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: 0;
  width: var(--_btn-height);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  visibility: hidden;
  width: 0;
  overflow: hidden;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin 0.6s linear infinite;
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
.type-body-small {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-label {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 28px);
  --_badge-font-size: 13px;
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  --_badge-min-width: var(--badge-height-md, 28px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--xs {
  --_badge-height: var(--badge-height-xs, 18px);
  --_badge-font-size: 10px;
  --_badge-padding-x: var(--spacing-100, 0.25rem);
  --_badge-min-width: var(--badge-height-xs, 18px);
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 22px);
  --_badge-font-size: 11px;
  --_badge-padding-x: var(--spacing-150, 0.375rem);
  --_badge-min-width: var(--badge-height-sm, 22px);
}
.esa-badge--lg {
  --_badge-height: var(--badge-height-lg, 34px);
  --_badge-font-size: 14px;
  --_badge-padding-x: var(--spacing-300, 0.75rem);
  --_badge-min-width: var(--badge-height-lg, 34px);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-secondary, #65ba74);
  --_badge-text: var(--color-secondary-on-fill, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-success, #bdee63);
  --_badge-text: var(--color-success-on-fill, #37401c);
}
.esa-badge--warning {
  --_badge-bg: var(--color-warning, #ffc53d);
  --_badge-text: var(--color-warning-on-fill, #4f3422);
}
.esa-badge--danger {
  --_badge-bg: var(--color-danger, #e5484d);
}
.esa-badge--info {
  --_badge-bg: var(--color-info, #0090ff);
}
.esa-badge--dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  padding: 0;
  border-radius: var(--radius-full, 9999px);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-primary-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-secondary-hover, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-success-hover, #b0e64c);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-info-hover, #0588f0);
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
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
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
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-surface, #ffffff));
  --_card-border: var(--card-border-color, var(--color-border, #e5e5e5));
  --_card-radius: var(--card-radius, var(--radius-300, 0.5rem));
  --_card-padding: var(--card-padding, var(--spacing-500, 1.5rem));
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--card-header-color, var(--color-text-primary, #171717));
  --_card-header-border: var(
    --card-header-border-color,
    var(--color-border-light, #efefef)
  );
  display: block;
  background: var(--_card-bg);
  border: 1px solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border, #e5e5e5);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
}
.esa-card--filled {
  --_card-bg: var(--color-surface-sunken, #efefef);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-primary, #43608a);
  --_card-header-color: var(--color-text-inverse, #ffffff);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-surface-sunken, #efefef);
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
  border-bottom: 1px solid var(--_card-header-border);
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
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: 600;
  margin: 0;
  color: inherit;
  font-family: var(--font-sans, "DM Sans", sans-serif);
}
.esa-card__subtitle {
  font-size: var(--type-size-150, 0.8125rem);
  color: var(--color-text-secondary, #525252);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: #fffc;
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
  border-top: 1px solid var(--_card-header-border);
  background: var(--card-footer-bg, var(--color-surface-sunken, #efefef));
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
- `--badge-bg`: #005862 _(component)_
- `--badge-height-lg`: 34px _(component)_
- `--badge-height-md`: 28px _(component)_
- `--badge-height-sm`: 22px _(component)_
- `--badge-height-xs`: 18px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-600`: #656565 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--button-on-warning`: #ffffff _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-footer-bg`: #efefef _(component)_
- `--card-header-bg`: transparent _(component)_
- `--card-header-border-color`: #efefef _(component)_
- `--card-header-color`: #3d3d3d _(component)_
- `--card-padding`: 1.5rem _(component)_
- `--card-radius`: .5rem _(component)_
- `--color-ai`: #699cc6 _(semantic)_
- `--color-ai-hover`: #4c75a9 _(semantic)_
- `--color-ai-strong`: #7d5e54 _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-gray-12`: #202020 _(primitive)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-info-strong`: #0d74ce _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-success-strong`: #5c7c2f _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-on-fill`: #4f3422 _(semantic)_
- `--color-warning-strong`: #ab6400 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-lg`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--form-padding-x-lg`: 1rem _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-padding-x-xs`: .5rem _(component)_
- `--form-radius-lg`: .25rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--form-radius-xs`: .25rem _(component)_
- `--gap`: 2rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
- `--sidebar-width`: 280px _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
