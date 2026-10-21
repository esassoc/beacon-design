# Component Setup dialog

A first-time setup that trims the component's Applicable Commitments to what it actually needs. Five steps in a vertical rail: Source Documents, Location and Species, Construction Activities, Dates, Recommendations. Each step's answer shows under its name in the rail, and the tally under the rail says what saving would do. Setup only recommends; the person decides, and one Save writes it.

## Key decisions
- SOURCE DOCUMENTS ARE THE OUTER LIMIT. Only selected documents' commitments can apply. Selecting none means every document applies, which is prod today, so a tenant that never runs setup sees no change. Each document row says which components it is already mapped to.
- THE RECOMMENDATION RULE (recommend() in src/data/component-commitments.ts). Tags live on requirements. A requirement misses on a kind only when it carries tags of that kind and none match: species not selected, activities not selected, or no season overlapping the component's start-to-end dates. A requirement with no tags of a kind never misses on it, and a tag on a species, activity or season the project has since deleted never misses either. A commitment is recommended Not Applicable only when it has at least one requirement and EVERY requirement misses on something; the reasons are the distinct misses, species then activity then season.
- The Dates step reads and writes the component's own Start Date and Expected End Date (dbo.Component). A component missing either date, or running a year or more, overlaps every season.
- SAVE CONFIRMS FIRST, with counts: commitments dismissed and applied, actions created, and field records unlinked from the dismissed commitments on this component (ADR 0074). A row moved by hand adds an optional note field to the confirm.
- Construction Activities count only once the person has visited that step. Until then every activity is treated as selected, so skipping the step rules nothing out.
- A span of a year or more overlaps every season. No "Runs N months" line: the season chart simply shows every season overlapping.
- Season chart: a key above it (blue bar = Season, outlined box = Work dates) and a status per season, green circle-check "Overlaps" or gray circle-minus "No overlap". No summary sentence under it.
- Step circles follow the Setup Wizard step nav: 20px circle, 12px digit, current is the brand fill, done is a brand check.
- The header shows the component's mark and name (BcnEntityLogo), not a badge.
- Species and activity names are Title Case data. Species list A–Z (prod orders ProjectSpecies by CommonName); activities keep the project's SortOrder.

## Gotchas
- Nothing is written until the confirm. The setup itself (sources, species, activities, dates) and every decision it makes are saved together in one call; Cancel discards the draft.
- The rail's answer lines wrap one part per line rather than truncating ("27 not applicable", "10 will apply").

## Done when
- In the fixture, with the four Geotech documents selected, the activities Ground Disturbance, Drilling and Boring, Vegetation Removal, Equipment Staging and Haul Truck Traffic, and Oct 5, 2026 – Jan 29, 2027: the review shows 26 Not Applicable (16 from unselected documents, 10 recommended), 11 Will Apply and 5 Already Decided; Save reads "Dismiss 26 and Apply 11", and its confirm says it creates 11 actions and unlinks 3 field records.

## Markup
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
      ><span class="bcn-cs__entityname"
        >Bouldin Island Geotechnical Exploration</span
      ></span
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
        <li>
          <button type="button" class="bcn-cs__step" data-cs-goto="activities">
            <span class="bcn-cs__num" aria-hidden="true"
              ><span class="bcn-cs__digit">3</span
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
              ><span class="bcn-cs__steplabel">Construction Activities</span
              ><span class="bcn-cs__stepsum" data-cs-sum="activities"></span
            ></span>
          </button>
        </li>
        <li>
          <button type="button" class="bcn-cs__step" data-cs-goto="dates">
            <span class="bcn-cs__num" aria-hidden="true"
              ><span class="bcn-cs__digit">4</span
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
              ><span class="bcn-cs__steplabel">Dates</span
              ><span class="bcn-cs__stepsum" data-cs-sum="dates"></span
            ></span>
          </button>
        </li>
        <li>
          <button type="button" class="bcn-cs__step" data-cs-goto="review">
            <span class="bcn-cs__num" aria-hidden="true"
              ><span class="bcn-cs__digit">5</span
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
              ><span class="bcn-cs__steplabel">Recommendations</span
              ><span class="bcn-cs__stepsum" data-cs-sum="review"></span
            ></span>
          </button>
        </li>
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
              ><span class="bcn-cs-opt__name"
                >Delta Conveyance Project Final EIR — MMRP</span
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
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="c-404"
              aria-label="USACE Section 404 Permit"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">USACE Section 404 Permit</span
              ><span class="bcn-cs-opt__meta"
                >Mapped to Intake B — North Delta, Southern Forebay &amp; Pumping
                Plant</span
              ></span
            ><span class="bcn-cs-opt__end">2 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="c-401"
              aria-label="SWRCB Section 401 Water Quality Certification"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name"
                >SWRCB Section 401 Water Quality Certification</span
              ><span class="bcn-cs-opt__meta"
                >Mapped to Intake B — North Delta, Twin Cities Complex +1</span
              ></span
            ><span class="bcn-cs-opt__end">4 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="g-mmrp"
              aria-label="Geotechnical Investigations IS/MND — MMRP"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name"
                >Geotechnical Investigations IS/MND — MMRP</span
              ><span class="bcn-cs-opt__meta">Not mapped to any component</span></span
            ><span class="bcn-cs-opt__end">15 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="g-401"
              aria-label="Geotechnical Investigations Section 401 Certification"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name"
                >Geotechnical Investigations Section 401 Certification</span
              ><span class="bcn-cs-opt__meta">Not mapped to any component</span></span
            ><span class="bcn-cs-opt__end">4 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="g-lsaa"
              aria-label="CDFW Lake or Streambed Alteration Agreement — Geotechnical"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name"
                >CDFW Lake or Streambed Alteration Agreement — Geotechnical</span
              ><span class="bcn-cs-opt__meta">Not mapped to any component</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-source="g-408"
              aria-label="USACE Section 408 Permission — Geotechnical Exploration"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name"
                >USACE Section 408 Permission — Geotechnical Exploration</span
              ><span class="bcn-cs-opt__meta">Not mapped to any component</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
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
                ><span class="bcn-hmap__swatch bcn-hmap__swatch--hab"></span>Habitat
                layer</span
              ><span class="bcn-hmap__key"
                ><span class="bcn-hmap__swatch bcn-hmap__swatch--sel"></span>Selected
                species' habitat</span
              >
            </div>
          </div>
          <script type="application/json" data-bcn-hmap-data="bcn-component-setup-hmap">
            {
              "footprint": [
                [38.22262, -121.45728],
                [38.22462, -121.42734],
                [38.13517, -121.42334],
                [38.04771, -121.42834],
                [38.04571, -121.45128],
                [38.13517, -121.45928]
              ],
              "layers": [
                {
                  "code": "CTS",
                  "name": "CTS Upland and Breeding Habitat",
                  "rings": [
                    [
                      [38.02, -121.39],
                      [38.02, -121.36],
                      [38.06, -121.36],
                      [38.06, -121.39]
                    ]
                  ]
                },
                {
                  "code": "DS",
                  "name": "Delta Smelt Critical Habitat",
                  "rings": [
                    [
                      [38.03, -121.58],
                      [38.03, -121.555],
                      [38.23, -121.545],
                      [38.23, -121.57]
                    ]
                  ]
                },
                {
                  "code": "GGS",
                  "name": "Giant Garter Snake Modeled Habitat",
                  "rings": [
                    [
                      [38.07, -121.53],
                      [38.07, -121.485],
                      [38.15, -121.48],
                      [38.16, -121.525]
                    ]
                  ]
                },
                {
                  "code": "SACR",
                  "name": "Splittail Spawning Habitat",
                  "rings": [
                    [
                      [38.185, -121.41],
                      [38.185, -121.39],
                      [38.235, -121.39],
                      [38.235, -121.41]
                    ]
                  ]
                },
                {
                  "code": "SWHA",
                  "name": "Swainson's Hawk Nesting Habitat",
                  "rings": [
                    [
                      [38.142, -121.462],
                      [38.142, -121.418],
                      [38.2, -121.414],
                      [38.205, -121.452]
                    ]
                  ]
                },
                {
                  "code": "VELB",
                  "name": "Elderberry Shrub Survey 2025",
                  "rings": [
                    [
                      [38.0585, -121.441],
                      [38.0585, -121.429],
                      [38.0635, -121.429],
                      [38.0635, -121.441]
                    ],
                    [
                      [38.112, -121.452],
                      [38.112, -121.442],
                      [38.119, -121.442],
                      [38.119, -121.452]
                    ]
                  ]
                }
              ]
            }
          </script>
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
              <esa-checkbox
                size="sm"
                data-cs-species="DS"
                aria-label="Delta Smelt"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Delta Smelt">Delta Smelt</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="DS"
                  >Delta Smelt Critical Habitat</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="GGS"
                aria-label="Giant Garter Snake"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Giant Garter Snake"
                  >Giant Garter Snake</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="GGS"
                  >Giant Garter Snake Modeled Habitat</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="SACR"
                aria-label="Sacramento Splittail"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Sacramento Splittail"
                  >Sacramento Splittail</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="SACR"
                  >Splittail Spawning Habitat</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="SWHA"
                aria-label="Swainson's Hawk"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Swainson's Hawk"
                  >Swainson's Hawk</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="SWHA"
                  >Swainson's Hawk Nesting Habitat</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="VELB"
                aria-label="Valley Elderberry Longhorn Beetle"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Valley Elderberry Longhorn Beetle"
                  >Valley Elderberry Longhorn Beetle</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="VELB"
                  >Elderberry Shrub Survey 2025</span
                ></span
              >
            </li>
            <li class="bcn-cs-opt">
              <esa-checkbox
                size="sm"
                data-cs-species="WPT"
                aria-label="Western Pond Turtle"
              ></esa-checkbox
              ><span class="bcn-cs-opt__body"
                ><span class="bcn-cs-opt__name" title="Western Pond Turtle"
                  >Western Pond Turtle</span
                ><span class="bcn-cs-opt__meta" data-cs-hab="WPT"
                  >No habitat data</span
                ></span
              >
            </li>
          </ul>
        </div>
      </section>
      <section class="bcn-cs__pane" data-cs-pane="activities" hidden="">
        <header class="bcn-cs__panehead">
          <h3 class="bcn-cs__h">What does the work involve?</h3>
          <span class="bcn-cs__count" data-cs-count="activities"></span>
        </header>
        <ul class="bcn-cs__options bcn-cs__options--grid">
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="ground"
              aria-label="Ground Disturbance"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Ground Disturbance</span></span
            ><span class="bcn-cs-opt__end">16 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="drill"
              aria-label="Drilling and Boring"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Drilling and Boring</span></span
            ><span class="bcn-cs-opt__end">6 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="veg"
              aria-label="Vegetation Removal"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Vegetation Removal</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="staging"
              aria-label="Equipment Staging"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Equipment Staging</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="haul"
              aria-label="Haul Truck Traffic"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Haul Truck Traffic</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="inwater"
              aria-label="In-Water Work"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">In-Water Work</span></span
            ><span class="bcn-cs-opt__end">9 commitments</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="dewater"
              aria-label="Dewatering"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Dewatering</span></span
            ><span class="bcn-cs-opt__end">1 commitment</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="night"
              aria-label="Nighttime Work"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Nighttime Work</span></span
            ><span class="bcn-cs-opt__end">1 commitment</span>
          </li>
          <li class="bcn-cs-opt">
            <esa-checkbox
              size="sm"
              data-cs-activity="pile"
              aria-label="Pile Driving"
            ></esa-checkbox
            ><span class="bcn-cs-opt__body"
              ><span class="bcn-cs-opt__name">Pile Driving</span></span
            ><span class="bcn-cs-opt__end">3 commitments</span>
          </li>
        </ul>
      </section>
      <section class="bcn-cs__pane" data-cs-pane="dates" hidden="">
        <header class="bcn-cs__panehead">
          <h3 class="bcn-cs__h">When does the work run?</h3>
        </header>
        <div class="bcn-cs__dates cluster" data-gap="md">
          <esa-date-picker
            data-cs-date="start"
            label="Start Date"
            size="sm"
          ></esa-date-picker
          ><esa-date-picker
            data-cs-date="end"
            label="Expected End Date"
            size="sm"
          ></esa-date-picker>
        </div>
        <div class="bcn-so" data-bcn-so="bcn-component-setup-so">
          <div class="bcn-so__key">
            <span class="bcn-so__keyitem"
              ><span class="bcn-so__swatch bcn-so__swatch--season"></span>Season</span
            ><span class="bcn-so__keyitem"
              ><span class="bcn-so__swatch bcn-so__swatch--work"></span>Work dates</span
            >
          </div>
          <div class="bcn-so__grid">
            <span></span>
            <div class="bcn-so__axis" aria-hidden="true">
              <span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span
              ><span class="bcn-so__tick" data-so-tick="" hidden=""></span>
            </div>
            <span></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Nesting bird season</span
              ><span class="bcn-so__window">Feb 1 – Aug 31</span></span
            >
            <div class="bcn-so__track" data-so-track="nest">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="nest"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Swainson's Hawk nesting season</span
              ><span class="bcn-so__window">Mar 1 – Sep 15</span></span
            >
            <div class="bcn-so__track" data-so-track="swha">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="swha"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Giant Garter Snake active season</span
              ><span class="bcn-so__window">May 1 – Oct 1</span></span
            >
            <div class="bcn-so__track" data-so-track="ggs">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="ggs"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Wet season</span
              ><span class="bcn-so__window">Oct 15 – Apr 15</span></span
            >
            <div class="bcn-so__track" data-so-track="wet">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="wet"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Fall bird migration</span
              ><span class="bcn-so__window">Sep 1 – Dec 15</span></span
            >
            <div class="bcn-so__track" data-so-track="fall">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="fall"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            ><span class="bcn-so__name"
              ><span class="bcn-so__label">Delta Smelt spawning season</span
              ><span class="bcn-so__window">Dec 1 – Jun 30</span></span
            >
            <div class="bcn-so__track" data-so-track="ds">
              <span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__seg" data-so-seg="" hidden=""></span
              ><span class="bcn-so__band" data-so-band=""></span>
            </div>
            <span class="bcn-so__verdict" data-so-verdict="ds"
              ><span class="bcn-so__yes" data-so-yes=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Overlaps</span
              ><span class="bcn-so__no" data-so-no="" hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path></svg></span
                >No overlap</span
              ></span
            >
          </div>
        </div>
      </section>
      <section class="bcn-cs__pane" data-cs-pane="review" hidden="">
        <div class="bcn-cs__transfer" data-cs-transfer="">
          <div class="bcn-cs__col" data-cs-col="na">
            <header class="bcn-cs__panehead">
              <h3 class="bcn-cs__h">Not Applicable</h3>
              <span class="bcn-cs__count" data-cs-count="na"></span>
            </header>
            <ul class="bcn-cs__options">
              <li class="bcn-cs-opt" data-cs-row="na:cc-001" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker environmental awareness training"
                      >Worker environmental awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-001" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-001"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-1"
                    title="Move to Will Apply: GT-BIO-1"
                    data-cs-move="cc-001"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-002" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-002" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-002"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-2"
                    title="Move to Will Apply: GT-BIO-2"
                    data-cs-move="cc-002"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-003" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk nest buffer"
                      >Swainson’s hawk nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-003" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-003"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-3"
                    title="Move to Will Apply: GT-BIO-3"
                    data-cs-move="cc-003"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-004" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake avoidance"
                      >Giant Garter Snake avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-004" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-004"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-4"
                    title="Move to Will Apply: GT-BIO-4"
                    data-cs-move="cc-004"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-005" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Elderberry shrub avoidance"
                      >Elderberry shrub avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-005" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-005"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-5"
                    title="Move to Will Apply: GT-BIO-5"
                    data-cs-move="cc-005"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-006" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Western Pond Turtle clearance"
                      >Western Pond Turtle clearance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-006" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-006"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-6"
                    title="Move to Will Apply: GT-BIO-6"
                    data-cs-move="cc-006"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-007" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt in-water work window"
                      >Delta Smelt in-water work window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-007" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-007"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-7"
                    title="Move to Will Apply: GT-BIO-7"
                    data-cs-move="cc-007"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-008" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="California Tiger Salamander upland survey"
                      >California Tiger Salamander upland survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-008" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-008"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-8"
                    title="Move to Will Apply: GT-BIO-8"
                    data-cs-move="cc-008"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-009" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Non-listed raptor nest buffer"
                      >Non-listed raptor nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-009" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-009"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-9"
                    title="Move to Will Apply: GT-BIO-9"
                    data-cs-move="cc-009"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-010" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Inadvertent discovery stop-work protocol"
                      >Inadvertent discovery stop-work protocol</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-010" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-010"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-CUL-1"
                    title="Move to Will Apply: GT-CUL-1"
                    data-cs-move="cc-010"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-011" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tribal monitor notification"
                      >Tribal monitor notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-011" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-011"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-CUL-2"
                    title="Move to Will Apply: GT-CUL-2"
                    data-cs-move="cc-011"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-012" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Drilling fluid containment"
                      >Drilling fluid containment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-012" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-012"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-HAZ-1"
                    title="Move to Will Apply: GT-HAZ-1"
                    data-cs-move="cc-012"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-013" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Borehole abandonment"
                      >Borehole abandonment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-013" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-013"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-HAZ-2"
                    title="Move to Will Apply: GT-HAZ-2"
                    data-cs-move="cc-013"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-014" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nighttime drilling noise limits"
                      >Nighttime drilling noise limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-014" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-014"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-NOI-1"
                    title="Move to Will Apply: GT-NOI-1"
                    data-cs-move="cc-014"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-015" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Fugitive dust control"
                      >Fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-015" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-015"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-AIR-1"
                    title="Move to Will Apply: GT-AIR-1"
                    data-cs-move="cc-015"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-016" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Turbidity monitoring for over-water borings"
                      >Turbidity monitoring for over-water borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-016" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-016"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-3"
                    title="Move to Will Apply: GT401-3"
                    data-cs-move="cc-016"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-017" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response"
                      >Spill prevention and response</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-017" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-017"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-5"
                    title="Move to Will Apply: GT401-5"
                    data-cs-move="cc-017"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-018" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Dewatering discharge sampling"
                      >Dewatering discharge sampling</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-018" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-018"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-7"
                    title="Move to Will Apply: GT401-7"
                    data-cs-move="cc-018"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-019" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Wet-season erosion control"
                      >Wet-season erosion control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-019" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-019"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-9"
                    title="Move to Will Apply: GT401-9"
                    data-cs-move="cc-019"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-020" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Channel work only when dry"
                      >Channel work only when dry</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-020" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-020"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-2"
                    title="Move to Will Apply: LSAA-2"
                    data-cs-move="cc-020"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-021" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Riparian vegetation removal limits"
                      >Riparian vegetation removal limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-021" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-021"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-4"
                    title="Move to Will Apply: LSAA-4"
                    data-cs-move="cc-021"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-022" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Splittail spawning window"
                      >Splittail spawning window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-022" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-022"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-6"
                    title="Move to Will Apply: LSAA-6"
                    data-cs-move="cc-022"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-023" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee toe setback for borings"
                      >Levee toe setback for borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-023" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-023"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-1"
                    title="Move to Will Apply: G408-1"
                    data-cs-move="cc-023"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-024" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee deformation monitoring"
                      >Levee deformation monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-024" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-024"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-3"
                    title="Move to Will Apply: G408-3"
                    data-cs-move="cc-024"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-025" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Casing installation vibration limits"
                      >Casing installation vibration limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-025" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-025"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-5"
                    title="Move to Will Apply: G408-5"
                    data-cs-move="cc-025"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-026" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-026" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-026"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: BIO-03"
                    title="Move to Will Apply: BIO-03"
                    data-cs-move="cc-026"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-027" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker cultural resources awareness training"
                      >Worker cultural resources awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-027" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-027"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: CUL-02"
                    title="Move to Will Apply: CUL-02"
                    data-cs-move="cc-027"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-028" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction noise monitoring plan"
                      >Construction noise monitoring plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-028" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-028"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: NOI-03"
                    title="Move to Will Apply: NOI-03"
                    data-cs-move="cc-028"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-029" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction fugitive dust control"
                      >Construction fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-029" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-029"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: AIR-04"
                    title="Move to Will Apply: AIR-04"
                    data-cs-move="cc-029"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-030" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Haul route compliance"
                      >Haul route compliance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-030" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-030"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: TRA-11"
                    title="Move to Will Apply: TRA-11"
                    data-cs-move="cc-030"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-031" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Revegetation of temporarily disturbed areas"
                      >Revegetation of temporarily disturbed areas</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-031" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-031"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: VEG-06"
                    title="Move to Will Apply: VEG-06"
                    data-cs-move="cc-031"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-032" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Vibration limits for adjacent structures"
                      >Vibration limits for adjacent structures</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-032" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-032"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: NOI-12"
                    title="Move to Will Apply: NOI-12"
                    data-cs-move="cc-032"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-033" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake active-season restriction"
                      >Giant Garter Snake active-season restriction</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-033" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-033"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-6.2"
                    title="Move to Will Apply: ITP-6.2"
                    data-cs-move="cc-033"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-034" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk foraging habitat mitigation"
                      >Swainson’s hawk foraging habitat mitigation</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-034" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-034"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-7.1"
                    title="Move to Will Apply: ITP-7.1"
                    data-cs-move="cc-034"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-035" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt entrainment avoidance"
                      >Delta Smelt entrainment avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-035" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-035"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-9.4"
                    title="Move to Will Apply: ITP-9.4"
                    data-cs-move="cc-035"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-036" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tidal marsh restoration monitoring"
                      >Tidal marsh restoration monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-036" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-036"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-11.3"
                    title="Move to Will Apply: ITP-11.3"
                    data-cs-move="cc-036"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-037" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Section 404 preconstruction notification"
                      >Section 404 preconstruction notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-037" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-037"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: USACE-02"
                    title="Move to Will Apply: USACE-02"
                    data-cs-move="cc-037"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-038" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Compensatory mitigation accounting"
                      >Compensatory mitigation accounting</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-038" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-038"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: USACE-07"
                    title="Move to Will Apply: USACE-07"
                    data-cs-move="cc-038"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-039" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Stormwater pollution prevention plan"
                      >Stormwater pollution prevention plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-039" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-039"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-08"
                    title="Move to Will Apply: WQ-08"
                    data-cs-move="cc-039"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-040" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Quarterly SWPPP inspection"
                      >Quarterly SWPPP inspection</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-040" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-040"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-12"
                    title="Move to Will Apply: WQ-12"
                    data-cs-move="cc-040"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-041" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="In-water work turbidity monitoring"
                      >In-water work turbidity monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-041" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-041"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-19"
                    title="Move to Will Apply: WQ-19"
                    data-cs-move="cc-041"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="na:cc-042" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response plan"
                      >Spill prevention and response plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="na:cc-042" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="na:cc-042"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-23"
                    title="Move to Will Apply: WQ-23"
                    data-cs-move="cc-042"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="na" hidden="">
                <span class="bcn-cs-opt__meta">None</span>
              </li>
            </ul>
            <div class="bcn-cs__srcgroups" data-cs-srcgroups="" hidden="">
              <div data-cs-srcgrp="c-mmrp" data-cs-srcname="Construction MMRP" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Construction MMRP</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-026" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Nesting bird preconstruction survey"
                              >Nesting bird preconstruction survey</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-026" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-026"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: BIO-03"
                            title="Move to Will Apply: BIO-03"
                            data-cs-move="cc-026"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-027" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Worker cultural resources awareness training"
                              >Worker cultural resources awareness training</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-027" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-027"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: CUL-02"
                            title="Move to Will Apply: CUL-02"
                            data-cs-move="cc-027"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-028" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Construction noise monitoring plan"
                              >Construction noise monitoring plan</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-028" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-028"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: NOI-03"
                            title="Move to Will Apply: NOI-03"
                            data-cs-move="cc-028"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-029" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Construction fugitive dust control"
                              >Construction fugitive dust control</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-029" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-029"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: AIR-04"
                            title="Move to Will Apply: AIR-04"
                            data-cs-move="cc-029"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-030" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Haul route compliance"
                              >Haul route compliance</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-030" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-030"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: TRA-11"
                            title="Move to Will Apply: TRA-11"
                            data-cs-move="cc-030"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-031" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Revegetation of temporarily disturbed areas"
                              >Revegetation of temporarily disturbed areas</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-031" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-031"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: VEG-06"
                            title="Move to Will Apply: VEG-06"
                            data-cs-move="cc-031"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-032" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Vibration limits for adjacent structures"
                              >Vibration limits for adjacent structures</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-032" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-032"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: NOI-12"
                            title="Move to Will Apply: NOI-12"
                            data-cs-move="cc-032"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="c-itp" data-cs-srcname="ITP" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">ITP</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-033" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Giant Garter Snake active-season restriction"
                              >Giant Garter Snake active-season restriction</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-033" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-033"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: ITP-6.2"
                            title="Move to Will Apply: ITP-6.2"
                            data-cs-move="cc-033"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-034" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Swainson’s hawk foraging habitat mitigation"
                              >Swainson’s hawk foraging habitat mitigation</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-034" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-034"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: ITP-7.1"
                            title="Move to Will Apply: ITP-7.1"
                            data-cs-move="cc-034"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-035" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Delta Smelt entrainment avoidance"
                              >Delta Smelt entrainment avoidance</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-035" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-035"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: ITP-9.4"
                            title="Move to Will Apply: ITP-9.4"
                            data-cs-move="cc-035"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-036" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Tidal marsh restoration monitoring"
                              >Tidal marsh restoration monitoring</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-036" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-036"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: ITP-11.3"
                            title="Move to Will Apply: ITP-11.3"
                            data-cs-move="cc-036"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="c-404" data-cs-srcname="404 Permit" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">404 Permit</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-037" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Section 404 preconstruction notification"
                              >Section 404 preconstruction notification</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-037" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-037"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: USACE-02"
                            title="Move to Will Apply: USACE-02"
                            data-cs-move="cc-037"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-038" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Compensatory mitigation accounting"
                              >Compensatory mitigation accounting</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-038" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-038"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: USACE-07"
                            title="Move to Will Apply: USACE-07"
                            data-cs-move="cc-038"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="c-401" data-cs-srcname="Construction 401" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Construction 401</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-039" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Stormwater pollution prevention plan"
                              >Stormwater pollution prevention plan</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-039" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-039"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: WQ-08"
                            title="Move to Will Apply: WQ-08"
                            data-cs-move="cc-039"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-040" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Quarterly SWPPP inspection"
                              >Quarterly SWPPP inspection</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-040" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-040"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: WQ-12"
                            title="Move to Will Apply: WQ-12"
                            data-cs-move="cc-040"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-041" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="In-water work turbidity monitoring"
                              >In-water work turbidity monitoring</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-041" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-041"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: WQ-19"
                            title="Move to Will Apply: WQ-19"
                            data-cs-move="cc-041"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-042" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Spill prevention and response plan"
                              >Spill prevention and response plan</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-042" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-042"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: WQ-23"
                            title="Move to Will Apply: WQ-23"
                            data-cs-move="cc-042"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="g-mmrp" data-cs-srcname="Geotech MMRP" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Geotech MMRP</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-001" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Worker environmental awareness training"
                              >Worker environmental awareness training</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-001" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-001"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-1"
                            title="Move to Will Apply: GT-BIO-1"
                            data-cs-move="cc-001"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-002" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Nesting bird preconstruction survey"
                              >Nesting bird preconstruction survey</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-002" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-002"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-2"
                            title="Move to Will Apply: GT-BIO-2"
                            data-cs-move="cc-002"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-003" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Swainson’s hawk nest buffer"
                              >Swainson’s hawk nest buffer</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-003" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-003"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-3"
                            title="Move to Will Apply: GT-BIO-3"
                            data-cs-move="cc-003"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-004" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Giant Garter Snake avoidance"
                              >Giant Garter Snake avoidance</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-004" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-004"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-4"
                            title="Move to Will Apply: GT-BIO-4"
                            data-cs-move="cc-004"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-005" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Elderberry shrub avoidance"
                              >Elderberry shrub avoidance</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-005" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-005"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-5"
                            title="Move to Will Apply: GT-BIO-5"
                            data-cs-move="cc-005"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-006" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Western Pond Turtle clearance"
                              >Western Pond Turtle clearance</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-006" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-006"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-6"
                            title="Move to Will Apply: GT-BIO-6"
                            data-cs-move="cc-006"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-007" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Delta Smelt in-water work window"
                              >Delta Smelt in-water work window</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-007" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-007"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-7"
                            title="Move to Will Apply: GT-BIO-7"
                            data-cs-move="cc-007"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-008" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="California Tiger Salamander upland survey"
                              >California Tiger Salamander upland survey</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-008" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-008"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-8"
                            title="Move to Will Apply: GT-BIO-8"
                            data-cs-move="cc-008"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-009" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Non-listed raptor nest buffer"
                              >Non-listed raptor nest buffer</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-009" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-009"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-BIO-9"
                            title="Move to Will Apply: GT-BIO-9"
                            data-cs-move="cc-009"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-010" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Inadvertent discovery stop-work protocol"
                              >Inadvertent discovery stop-work protocol</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-010" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-010"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-CUL-1"
                            title="Move to Will Apply: GT-CUL-1"
                            data-cs-move="cc-010"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-011" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Tribal monitor notification"
                              >Tribal monitor notification</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-011" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-011"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-CUL-2"
                            title="Move to Will Apply: GT-CUL-2"
                            data-cs-move="cc-011"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-012" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Drilling fluid containment"
                              >Drilling fluid containment</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-012" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-012"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-HAZ-1"
                            title="Move to Will Apply: GT-HAZ-1"
                            data-cs-move="cc-012"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-013" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Borehole abandonment"
                              >Borehole abandonment</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-013" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-013"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-HAZ-2"
                            title="Move to Will Apply: GT-HAZ-2"
                            data-cs-move="cc-013"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-014" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Nighttime drilling noise limits"
                              >Nighttime drilling noise limits</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-014" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-014"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-NOI-1"
                            title="Move to Will Apply: GT-NOI-1"
                            data-cs-move="cc-014"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-015" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Fugitive dust control"
                              >Fugitive dust control</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-015" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-015"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT-AIR-1"
                            title="Move to Will Apply: GT-AIR-1"
                            data-cs-move="cc-015"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="g-401" data-cs-srcname="Geotech 401" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Geotech 401</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-016" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Turbidity monitoring for over-water borings"
                              >Turbidity monitoring for over-water borings</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-016" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-016"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT401-3"
                            title="Move to Will Apply: GT401-3"
                            data-cs-move="cc-016"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-017" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Spill prevention and response"
                              >Spill prevention and response</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-017" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-017"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT401-5"
                            title="Move to Will Apply: GT401-5"
                            data-cs-move="cc-017"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-018" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Dewatering discharge sampling"
                              >Dewatering discharge sampling</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-018" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-018"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT401-7"
                            title="Move to Will Apply: GT401-7"
                            data-cs-move="cc-018"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-019" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Wet-season erosion control"
                              >Wet-season erosion control</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-019" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-019"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: GT401-9"
                            title="Move to Will Apply: GT401-9"
                            data-cs-move="cc-019"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="g-lsaa" data-cs-srcname="Geotech LSAA" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Geotech LSAA</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-020" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Channel work only when dry"
                              >Channel work only when dry</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-020" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-020"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: LSAA-2"
                            title="Move to Will Apply: LSAA-2"
                            data-cs-move="cc-020"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-021" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Riparian vegetation removal limits"
                              >Riparian vegetation removal limits</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-021" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-021"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: LSAA-4"
                            title="Move to Will Apply: LSAA-4"
                            data-cs-move="cc-021"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-022" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Splittail spawning window"
                              >Splittail spawning window</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-022" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-022"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: LSAA-6"
                            title="Move to Will Apply: LSAA-6"
                            data-cs-move="cc-022"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
              <div data-cs-srcgrp="g-408" data-cs-srcname="Geotech 408" hidden="">
                <details class="esa-collapsible">
                  <summary class="esa-collapsible__summary typography-label-sm-strong">
                    <span class="esa-collapsible__title">Geotech 408</span>
                  </summary>
                  <div class="esa-collapsible__body typography-body-md">
                    <ul class="bcn-cs__options bcn-cs__options--bare">
                      <li class="bcn-cs-opt" data-cs-row="src:cc-023" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Levee toe setback for borings"
                              >Levee toe setback for borings</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-023" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-023"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: G408-1"
                            title="Move to Will Apply: G408-1"
                            data-cs-move="cc-023"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-024" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Levee deformation monitoring"
                              >Levee deformation monitoring</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-024" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-024"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: G408-3"
                            title="Move to Will Apply: G408-3"
                            data-cs-move="cc-024"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                      <li class="bcn-cs-opt" data-cs-row="src:cc-025" hidden="">
                        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                          ><span class="bcn-cs-opt__titleline"
                            ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                            ><span
                              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                              title="Casing installation vibration limits"
                              >Casing installation vibration limits</span
                            ></span
                          ><span class="bcn-cs-opt__metaline"
                            ><span data-cs-hand="src:cc-025" hidden=""></span
                            ><span
                              class="bcn-cs-opt__meta"
                              data-cs-reason="src:cc-025"
                            ></span></span></span
                        ><span
                          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            aria-label="Move to Will Apply: G408-5"
                            title="Move to Will Apply: G408-5"
                            data-cs-move="cc-025"
                            data-cs-to="apply"
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
                                <path d="m12 5 7 7-7 7"></path></svg
                            ></span></button
                        ></span>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div class="bcn-cs__col" data-cs-col="apply">
            <header class="bcn-cs__panehead">
              <h3 class="bcn-cs__h">Will Apply</h3>
              <span class="bcn-cs__count" data-cs-count="apply"></span>
            </header>
            <ul class="bcn-cs__options">
              <li class="bcn-cs-opt" data-cs-row="apply:cc-001" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker environmental awareness training"
                      >Worker environmental awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-001" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-001"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-1"
                    title="Move to Not Applicable: GT-BIO-1"
                    data-cs-move="cc-001"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-002" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-002" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-002"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-2"
                    title="Move to Not Applicable: GT-BIO-2"
                    data-cs-move="cc-002"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-003" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk nest buffer"
                      >Swainson’s hawk nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-003" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-003"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-3"
                    title="Move to Not Applicable: GT-BIO-3"
                    data-cs-move="cc-003"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-004" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake avoidance"
                      >Giant Garter Snake avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-004" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-004"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-4"
                    title="Move to Not Applicable: GT-BIO-4"
                    data-cs-move="cc-004"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-005" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Elderberry shrub avoidance"
                      >Elderberry shrub avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-005" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-005"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-5"
                    title="Move to Not Applicable: GT-BIO-5"
                    data-cs-move="cc-005"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-006" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Western Pond Turtle clearance"
                      >Western Pond Turtle clearance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-006" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-006"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-6"
                    title="Move to Not Applicable: GT-BIO-6"
                    data-cs-move="cc-006"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-007" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt in-water work window"
                      >Delta Smelt in-water work window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-007" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-007"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-7"
                    title="Move to Not Applicable: GT-BIO-7"
                    data-cs-move="cc-007"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-008" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="California Tiger Salamander upland survey"
                      >California Tiger Salamander upland survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-008" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-008"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-8"
                    title="Move to Not Applicable: GT-BIO-8"
                    data-cs-move="cc-008"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-009" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Non-listed raptor nest buffer"
                      >Non-listed raptor nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-009" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-009"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-BIO-9"
                    title="Move to Not Applicable: GT-BIO-9"
                    data-cs-move="cc-009"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-010" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Inadvertent discovery stop-work protocol"
                      >Inadvertent discovery stop-work protocol</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-010" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-010"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-CUL-1"
                    title="Move to Not Applicable: GT-CUL-1"
                    data-cs-move="cc-010"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-011" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tribal monitor notification"
                      >Tribal monitor notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-011" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-011"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-CUL-2"
                    title="Move to Not Applicable: GT-CUL-2"
                    data-cs-move="cc-011"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-012" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Drilling fluid containment"
                      >Drilling fluid containment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-012" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-012"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-HAZ-1"
                    title="Move to Not Applicable: GT-HAZ-1"
                    data-cs-move="cc-012"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-013" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Borehole abandonment"
                      >Borehole abandonment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-013" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-013"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-HAZ-2"
                    title="Move to Not Applicable: GT-HAZ-2"
                    data-cs-move="cc-013"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-014" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nighttime drilling noise limits"
                      >Nighttime drilling noise limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-014" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-014"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-NOI-1"
                    title="Move to Not Applicable: GT-NOI-1"
                    data-cs-move="cc-014"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-015" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Fugitive dust control"
                      >Fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-015" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-015"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT-AIR-1"
                    title="Move to Not Applicable: GT-AIR-1"
                    data-cs-move="cc-015"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-016" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Turbidity monitoring for over-water borings"
                      >Turbidity monitoring for over-water borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-016" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-016"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT401-3"
                    title="Move to Not Applicable: GT401-3"
                    data-cs-move="cc-016"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-017" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response"
                      >Spill prevention and response</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-017" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-017"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT401-5"
                    title="Move to Not Applicable: GT401-5"
                    data-cs-move="cc-017"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-018" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Dewatering discharge sampling"
                      >Dewatering discharge sampling</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-018" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-018"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT401-7"
                    title="Move to Not Applicable: GT401-7"
                    data-cs-move="cc-018"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-019" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Wet-season erosion control"
                      >Wet-season erosion control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-019" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-019"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: GT401-9"
                    title="Move to Not Applicable: GT401-9"
                    data-cs-move="cc-019"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-020" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Channel work only when dry"
                      >Channel work only when dry</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-020" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-020"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: LSAA-2"
                    title="Move to Not Applicable: LSAA-2"
                    data-cs-move="cc-020"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-021" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Riparian vegetation removal limits"
                      >Riparian vegetation removal limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-021" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-021"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: LSAA-4"
                    title="Move to Not Applicable: LSAA-4"
                    data-cs-move="cc-021"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-022" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Splittail spawning window"
                      >Splittail spawning window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-022" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-022"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: LSAA-6"
                    title="Move to Not Applicable: LSAA-6"
                    data-cs-move="cc-022"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-023" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee toe setback for borings"
                      >Levee toe setback for borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-023" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-023"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: G408-1"
                    title="Move to Not Applicable: G408-1"
                    data-cs-move="cc-023"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-024" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee deformation monitoring"
                      >Levee deformation monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-024" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-024"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: G408-3"
                    title="Move to Not Applicable: G408-3"
                    data-cs-move="cc-024"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-025" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Casing installation vibration limits"
                      >Casing installation vibration limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-025" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-025"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: G408-5"
                    title="Move to Not Applicable: G408-5"
                    data-cs-move="cc-025"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-026" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-026" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-026"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: BIO-03"
                    title="Move to Not Applicable: BIO-03"
                    data-cs-move="cc-026"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-027" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker cultural resources awareness training"
                      >Worker cultural resources awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-027" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-027"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: CUL-02"
                    title="Move to Not Applicable: CUL-02"
                    data-cs-move="cc-027"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-028" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction noise monitoring plan"
                      >Construction noise monitoring plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-028" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-028"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: NOI-03"
                    title="Move to Not Applicable: NOI-03"
                    data-cs-move="cc-028"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-029" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction fugitive dust control"
                      >Construction fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-029" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-029"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: AIR-04"
                    title="Move to Not Applicable: AIR-04"
                    data-cs-move="cc-029"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-030" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Haul route compliance"
                      >Haul route compliance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-030" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-030"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: TRA-11"
                    title="Move to Not Applicable: TRA-11"
                    data-cs-move="cc-030"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-031" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Revegetation of temporarily disturbed areas"
                      >Revegetation of temporarily disturbed areas</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-031" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-031"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: VEG-06"
                    title="Move to Not Applicable: VEG-06"
                    data-cs-move="cc-031"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-032" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Vibration limits for adjacent structures"
                      >Vibration limits for adjacent structures</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-032" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-032"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: NOI-12"
                    title="Move to Not Applicable: NOI-12"
                    data-cs-move="cc-032"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-033" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake active-season restriction"
                      >Giant Garter Snake active-season restriction</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-033" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-033"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: ITP-6.2"
                    title="Move to Not Applicable: ITP-6.2"
                    data-cs-move="cc-033"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-034" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk foraging habitat mitigation"
                      >Swainson’s hawk foraging habitat mitigation</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-034" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-034"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: ITP-7.1"
                    title="Move to Not Applicable: ITP-7.1"
                    data-cs-move="cc-034"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-035" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt entrainment avoidance"
                      >Delta Smelt entrainment avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-035" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-035"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: ITP-9.4"
                    title="Move to Not Applicable: ITP-9.4"
                    data-cs-move="cc-035"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-036" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tidal marsh restoration monitoring"
                      >Tidal marsh restoration monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-036" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-036"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: ITP-11.3"
                    title="Move to Not Applicable: ITP-11.3"
                    data-cs-move="cc-036"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-037" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Section 404 preconstruction notification"
                      >Section 404 preconstruction notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-037" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-037"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: USACE-02"
                    title="Move to Not Applicable: USACE-02"
                    data-cs-move="cc-037"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-038" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Compensatory mitigation accounting"
                      >Compensatory mitigation accounting</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-038" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-038"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: USACE-07"
                    title="Move to Not Applicable: USACE-07"
                    data-cs-move="cc-038"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-039" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Stormwater pollution prevention plan"
                      >Stormwater pollution prevention plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-039" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-039"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: WQ-08"
                    title="Move to Not Applicable: WQ-08"
                    data-cs-move="cc-039"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-040" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Quarterly SWPPP inspection"
                      >Quarterly SWPPP inspection</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-040" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-040"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: WQ-12"
                    title="Move to Not Applicable: WQ-12"
                    data-cs-move="cc-040"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-041" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="In-water work turbidity monitoring"
                      >In-water work turbidity monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-041" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-041"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: WQ-19"
                    title="Move to Not Applicable: WQ-19"
                    data-cs-move="cc-041"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="apply:cc-042" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response plan"
                      >Spill prevention and response plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="apply:cc-042" hidden=""
                      ><span
                        class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                        ><span class="esa-badge__text">Moved by Hand</span></span
                      ></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="apply:cc-042"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Not Applicable: WQ-23"
                    title="Move to Not Applicable: WQ-23"
                    data-cs-move="cc-042"
                    data-cs-to="na"
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
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="M19 12H5"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="apply" hidden="">
                <span class="bcn-cs-opt__meta">None</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bcn-cs__group" data-cs-group="back" hidden="">
          <header class="bcn-cs__panehead">
            <h3 class="bcn-cs__h">Back to Needs a Decision</h3>
            <span class="bcn-cs__count" data-cs-count="back"></span>
          </header>
          <ul class="bcn-cs__options">
            <li class="bcn-cs-opt" data-cs-row="back:cc-001" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Worker environmental awareness training"
                    >Worker environmental awareness training</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-001"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-002" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Nesting bird preconstruction survey"
                    >Nesting bird preconstruction survey</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-002"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-003" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Swainson’s hawk nest buffer"
                    >Swainson’s hawk nest buffer</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-003"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-004" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Giant Garter Snake avoidance"
                    >Giant Garter Snake avoidance</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-004"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-005" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Elderberry shrub avoidance"
                    >Elderberry shrub avoidance</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-005"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-006" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Western Pond Turtle clearance"
                    >Western Pond Turtle clearance</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-006"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-007" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Delta Smelt in-water work window"
                    >Delta Smelt in-water work window</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-007"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-008" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="California Tiger Salamander upland survey"
                    >California Tiger Salamander upland survey</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-008"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-009" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Non-listed raptor nest buffer"
                    >Non-listed raptor nest buffer</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-009"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-010" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Inadvertent discovery stop-work protocol"
                    >Inadvertent discovery stop-work protocol</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-010"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-011" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Tribal monitor notification"
                    >Tribal monitor notification</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-011"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-012" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Drilling fluid containment"
                    >Drilling fluid containment</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-012"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-013" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Borehole abandonment"
                    >Borehole abandonment</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-013"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-014" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Nighttime drilling noise limits"
                    >Nighttime drilling noise limits</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-014"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-015" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Fugitive dust control"
                    >Fugitive dust control</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-015"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-016" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Turbidity monitoring for over-water borings"
                    >Turbidity monitoring for over-water borings</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-016"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-017" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Spill prevention and response"
                    >Spill prevention and response</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-017"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-018" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Dewatering discharge sampling"
                    >Dewatering discharge sampling</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-018"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-019" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Wet-season erosion control"
                    >Wet-season erosion control</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-019"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-020" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Channel work only when dry"
                    >Channel work only when dry</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-020"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-021" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Riparian vegetation removal limits"
                    >Riparian vegetation removal limits</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-021"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-022" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Splittail spawning window"
                    >Splittail spawning window</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-022"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-023" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Levee toe setback for borings"
                    >Levee toe setback for borings</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-023"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-024" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Levee deformation monitoring"
                    >Levee deformation monitoring</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-024"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-025" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Casing installation vibration limits"
                    >Casing installation vibration limits</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-025"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-026" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Nesting bird preconstruction survey"
                    >Nesting bird preconstruction survey</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-026"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-027" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Worker cultural resources awareness training"
                    >Worker cultural resources awareness training</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-027"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-028" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Construction noise monitoring plan"
                    >Construction noise monitoring plan</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-028"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-029" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Construction fugitive dust control"
                    >Construction fugitive dust control</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-029"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-030" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Haul route compliance"
                    >Haul route compliance</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-030"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-031" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Revegetation of temporarily disturbed areas"
                    >Revegetation of temporarily disturbed areas</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-031"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-032" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Vibration limits for adjacent structures"
                    >Vibration limits for adjacent structures</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-032"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-033" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Giant Garter Snake active-season restriction"
                    >Giant Garter Snake active-season restriction</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-033"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-034" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Swainson’s hawk foraging habitat mitigation"
                    >Swainson’s hawk foraging habitat mitigation</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-034"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-035" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Delta Smelt entrainment avoidance"
                    >Delta Smelt entrainment avoidance</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-035"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-036" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Tidal marsh restoration monitoring"
                    >Tidal marsh restoration monitoring</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-036"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-037" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Section 404 preconstruction notification"
                    >Section 404 preconstruction notification</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-037"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-038" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Compensatory mitigation accounting"
                    >Compensatory mitigation accounting</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-038"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-039" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Stormwater pollution prevention plan"
                    >Stormwater pollution prevention plan</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-039"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-040" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Quarterly SWPPP inspection"
                    >Quarterly SWPPP inspection</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-040"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-041" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="In-water work turbidity monitoring"
                    >In-water work turbidity monitoring</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-041"></span
              ></span>
            </li>
            <li class="bcn-cs-opt" data-cs-row="back:cc-042" hidden="">
              <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                ><span class="bcn-cs-opt__titleline"
                  ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                  ><span
                    class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                    title="Spill prevention and response plan"
                    >Spill prevention and response plan</span
                  ></span
                ><span class="bcn-cs-opt__meta" data-cs-reason="back:cc-042"></span
              ></span>
            </li>
          </ul>
        </div>
        <!-- Decisions already made, by hand or by an earlier setup. The save leaves them
             as they are, so they sit apart from the two columns, collapsed. -->
        <div class="bcn-cs__group" data-cs-group="kept" hidden="">
          <details class="esa-collapsible">
            <summary class="esa-collapsible__summary typography-label-sm-strong">
              <span class="esa-collapsible__title">Already Decided</span>
            </summary>
            <div class="esa-collapsible__body typography-body-md">
              <ul class="bcn-cs__options bcn-cs__options--bare">
                <li class="bcn-cs-opt" data-cs-row="kept:cc-001" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Worker environmental awareness training"
                        >Worker environmental awareness training</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-001"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-002" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Nesting bird preconstruction survey"
                        >Nesting bird preconstruction survey</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-002"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-003" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Swainson’s hawk nest buffer"
                        >Swainson’s hawk nest buffer</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-003"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-004" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Giant Garter Snake avoidance"
                        >Giant Garter Snake avoidance</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-004"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-005" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Elderberry shrub avoidance"
                        >Elderberry shrub avoidance</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-005"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-006" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Western Pond Turtle clearance"
                        >Western Pond Turtle clearance</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-006"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-007" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Delta Smelt in-water work window"
                        >Delta Smelt in-water work window</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-007"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-008" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="California Tiger Salamander upland survey"
                        >California Tiger Salamander upland survey</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-008"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-009" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Non-listed raptor nest buffer"
                        >Non-listed raptor nest buffer</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-009"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-010" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Inadvertent discovery stop-work protocol"
                        >Inadvertent discovery stop-work protocol</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-010"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-011" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Tribal monitor notification"
                        >Tribal monitor notification</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-011"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-012" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Drilling fluid containment"
                        >Drilling fluid containment</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-012"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-013" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Borehole abandonment"
                        >Borehole abandonment</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-013"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-014" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Nighttime drilling noise limits"
                        >Nighttime drilling noise limits</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-014"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-015" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Fugitive dust control"
                        >Fugitive dust control</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-015"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-016" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Turbidity monitoring for over-water borings"
                        >Turbidity monitoring for over-water borings</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-016"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-017" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Spill prevention and response"
                        >Spill prevention and response</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-017"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-018" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Dewatering discharge sampling"
                        >Dewatering discharge sampling</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-018"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-019" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Wet-season erosion control"
                        >Wet-season erosion control</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-019"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-020" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Channel work only when dry"
                        >Channel work only when dry</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-020"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-021" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Riparian vegetation removal limits"
                        >Riparian vegetation removal limits</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-021"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-022" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Splittail spawning window"
                        >Splittail spawning window</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-022"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-023" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Levee toe setback for borings"
                        >Levee toe setback for borings</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-023"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-024" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Levee deformation monitoring"
                        >Levee deformation monitoring</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-024"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-025" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Casing installation vibration limits"
                        >Casing installation vibration limits</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-025"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-026" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Nesting bird preconstruction survey"
                        >Nesting bird preconstruction survey</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-026"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-027" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Worker cultural resources awareness training"
                        >Worker cultural resources awareness training</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-027"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-028" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Construction noise monitoring plan"
                        >Construction noise monitoring plan</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-028"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-029" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Construction fugitive dust control"
                        >Construction fugitive dust control</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-029"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-030" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Haul route compliance"
                        >Haul route compliance</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-030"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-031" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Revegetation of temporarily disturbed areas"
                        >Revegetation of temporarily disturbed areas</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-031"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-032" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Vibration limits for adjacent structures"
                        >Vibration limits for adjacent structures</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-032"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-033" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Giant Garter Snake active-season restriction"
                        >Giant Garter Snake active-season restriction</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-033"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-034" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Swainson’s hawk foraging habitat mitigation"
                        >Swainson’s hawk foraging habitat mitigation</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-034"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-035" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Delta Smelt entrainment avoidance"
                        >Delta Smelt entrainment avoidance</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-035"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-036" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Tidal marsh restoration monitoring"
                        >Tidal marsh restoration monitoring</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-036"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-037" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Section 404 preconstruction notification"
                        >Section 404 preconstruction notification</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-037"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-038" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Compensatory mitigation accounting"
                        >Compensatory mitigation accounting</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-038"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-039" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Stormwater pollution prevention plan"
                        >Stormwater pollution prevention plan</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-039"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-040" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Quarterly SWPPP inspection"
                        >Quarterly SWPPP inspection</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-040"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-041" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="In-water work turbidity monitoring"
                        >In-water work turbidity monitoring</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-041"></span
                  ></span>
                </li>
                <li class="bcn-cs-opt" data-cs-row="kept:cc-042" hidden="">
                  <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                    ><span class="bcn-cs-opt__titleline"
                      ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                      ><span
                        class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                        title="Spill prevention and response plan"
                        >Spill prevention and response plan</span
                      ></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="kept:cc-042"></span
                  ></span>
                </li>
              </ul>
            </div>
          </details>
        </div>
        <div data-cs-review-none="" hidden="">
          <div class="esa-empty-state esa-empty-state--sm">
            <h3 class="esa-empty-state__title typography-label-sm-strong">
              Nothing recommended out
            </h3>
            <div class="esa-empty-state__actions typography-label-md"></div>
          </div>
        </div>
      </section>
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
            <span class="esa-button__label"
              ><span data-cs-save-label="">Save Setup</span></span
            >
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
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-countchip__num .esa-badge{--badge-radius:var(--radius-full);--badge-bg:var(--color-border-default);--badge-text-color:var(--color-content-default-secondary);box-sizing:border-box;font-variant-numeric:tabular-nums;min-width:19px;height:19px;box-shadow:0 0 0 1.5px var(--color-background-elevation-raised);justify-content:center;align-items:center;padding:0 4px;font-size:.8125rem;line-height:1;display:inline-flex}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-cbadge{font-family:var(--typography-font-family-mono);font-weight:var(--typography-font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb, var(--color-commitment) 12%, white);border-radius:var(--radius-100);white-space:nowrap;flex-shrink:0;display:inline-block}
.bcn-cbadge--md{font-size:var(--font-size-100);padding:1px var(--spacing-200)}
.bcn-cbadge--sm{padding:1px var(--spacing-150);font-size:.75rem}
.bcn-cbadge--neutral{font-family:var(--typography-font-family-sans);color:var(--bcn-gray-700);background:var(--bcn-gray-100)}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-attached__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
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
.bcn-tl__pop .bcn-cbadge{font-family:var(--typography-font-family-mono);font-weight:var(--typography-font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb, var(--color-commitment) 12%, white);border-radius:var(--radius-100);padding:1px var(--spacing-150);font-size:.75rem;display:inline-block}
.bcn-mod__action-name .bcn-cbadge{margin-right:var(--spacing-150)}
.bcn-mod__link .esa-icon{color:var(--bcn-content-muted)}
.bcn-csc__figures{gap:var(--spacing-400);grid-template-columns:repeat(auto-fit,minmax(11rem,1fr));display:grid}
.bcn-csc__figures>[hidden]{display:none}
.bcn-csc__facts{gap:var(--spacing-300) var(--spacing-400);padding-top:var(--spacing-300);border-top:1px solid var(--color-border-default-subtle);grid-template-columns:repeat(auto-fit,minmax(9rem,1fr));display:grid}
.bcn-csc__facts[hidden]{display:none}
.bcn-csc__val{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-medium);color:var(--color-content-default)}
.bcn-csc__foot{padding-top:var(--spacing-100)}
.bcn-csc__foot>[hidden]{display:none}
.bcn-sw__head .esa-icon{color:var(--color-content-default-secondary)}
.bcn-sw__head .esa-badge{color:var(--color-content-default-secondary);border:1px solid var(--color-border-default);font-weight:var(--typography-font-weight-medium);background:0 0}
.bcn-sw-row__state--applied .esa-badge{--badge-bg:transparent;--badge-text-color:var(--color-background-brand);border:1px solid var(--color-border-brand,var(--color-border-default));font-weight:var(--typography-font-weight-medium)}
.bcn-sw-row__state--dismissed .esa-badge{--badge-bg:transparent;--badge-text-color:var(--color-content-default-secondary);border:1px solid var(--color-border-default);font-weight:var(--typography-font-weight-medium)}
.bcn-sw-prev__acttype .esa-badge{--badge-bg:var(--color-background-elevation-sunken);--badge-text-color:var(--color-content-default-secondary);font-weight:var(--typography-font-weight-medium)}
.bcn-hmap{gap:var(--spacing-300);flex-direction:column;height:100%;min-height:0;display:flex}
.bcn-hmap__bar{flex:none}
.bcn-hmap__surface{border:1px solid var(--color-border-default);border-radius:var(--radius-200);background:var(--color-background-elevation-sunken);flex:1;min-height:320px;overflow:hidden}
.bcn-hmap__surface .leaflet-container{height:100%;font-family:inherit}
.bcn-hmap__legend{gap:var(--spacing-200) var(--spacing-500);color:var(--color-content-default-secondary);flex-wrap:wrap;flex:none;font-size:.8125rem;display:flex}
.bcn-hmap__key{align-items:center;gap:var(--spacing-150);display:inline-flex}
.bcn-hmap__swatch{border-radius:2px;width:12px;height:12px}
.bcn-hmap__swatch--foot{border:2px solid var(--color-content-default);background:color-mix(in srgb, var(--color-content-default) 6%, transparent)}
.bcn-hmap__swatch--hab{background:color-mix(in srgb, var(--color-background-utility-info) 18%, transparent);border:1px solid var(--color-background-utility-info)}
.bcn-hmap__swatch--sel{background:color-mix(in srgb, var(--color-background-brand) 25%, transparent);border:2px solid var(--color-background-brand)}
.bcn-so{gap:var(--spacing-300);flex-direction:column;display:flex}
.bcn-so__grid{align-items:center;gap:var(--spacing-250,.625rem) var(--spacing-400);grid-template-columns:minmax(12rem,auto) minmax(0,1fr) 7rem;display:grid}
.bcn-so__axis{border-bottom:1px solid var(--color-border-default);height:1.25rem;position:relative}
.bcn-so__tick{color:var(--color-content-default-secondary);white-space:nowrap;font-size:.8125rem;position:absolute;bottom:2px;transform:translate(-50%)}
.bcn-so__tick[hidden]{display:none}
.bcn-so__name{flex-direction:column;min-width:0;display:flex}
.bcn-so__label{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-medium);color:var(--color-content-default)}
.bcn-so__window{color:var(--color-content-default-secondary);font-size:.8125rem}
.bcn-so__track{border-radius:var(--radius-100);background:var(--color-background-elevation-sunken);height:1.5rem;position:relative}
.bcn-so__seg{background:color-mix(in srgb, var(--color-background-utility-info) 55%, transparent);border-radius:2px;height:.75rem;position:absolute;top:.375rem}
.bcn-so__seg[hidden]{display:none}
.bcn-so__band{border:2px solid var(--color-background-brand);border-radius:var(--radius-100);background:color-mix(in srgb, var(--color-background-brand) 8%, transparent);position:absolute;top:0;bottom:0}
.bcn-so__verdict{display:inline-flex}
.bcn-so__yes,.bcn-so__no{align-items:center;gap:var(--spacing-150);color:var(--color-content-default);white-space:nowrap;font-size:.8125rem;display:inline-flex}
.bcn-so__yes svg{color:var(--color-content-utility-success)}
.bcn-so__no{color:var(--color-content-default-secondary)}
.bcn-so__yes[hidden],.bcn-so__no[hidden]{display:none}
.bcn-so__key{gap:var(--spacing-500);color:var(--color-content-default-secondary);font-size:.8125rem;display:flex}
.bcn-so__keyitem{align-items:center;gap:var(--spacing-150);display:inline-flex}
.bcn-so__swatch{border-radius:2px;width:1.25rem;height:.75rem}
.bcn-so__swatch--season{background:color-mix(in srgb, var(--color-background-utility-info) 55%, transparent);height:.5rem}
.bcn-so__swatch--work{border:2px solid var(--color-background-brand);background:color-mix(in srgb, var(--color-background-brand) 8%, transparent)}
.bcn-cs{--dialog-bg:var(--color-background-elevation-raised)}
.bcn-cs__head{align-items:center;gap:var(--spacing-300);min-width:0;display:flex}
.bcn-cs__title{font-size:var(--font-size-400);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);white-space:nowrap;margin:0}
.bcn-cs__entity{align-items:center;gap:var(--spacing-200);min-width:0;display:inline-flex}
.bcn-cs__entityname{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-medium);color:var(--color-content-default-secondary);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
.bcn-cs__frame{gap:var(--spacing-500);grid-template-columns:15.5rem minmax(0,1fr);height:min(85vh - 11rem,680px);min-height:0;display:grid}
.bcn-cs__rail{justify-content:space-between;gap:var(--spacing-400);min-height:0;padding-right:var(--spacing-400);border-right:1px solid var(--color-border-default-subtle);flex-direction:column;display:flex}
.bcn-cs__steps{flex-direction:column;gap:0;margin:0;padding:0;list-style:none;display:flex}
.bcn-cs__step{align-items:flex-start;gap:var(--spacing-200);width:100%;padding:var(--spacing-150) var(--spacing-200);border-radius:var(--radius-200);font:inherit;text-align:left;cursor:pointer;color:var(--color-content-default);background:0 0;border:1px solid #0000;display:flex}
.bcn-cs__step:hover{background:var(--color-background-elevation-sunken)}
.bcn-cs__step:focus-visible{outline:var(--focus-ring-width) solid var(--focus-ring-color);outline-offset:1px}
.bcn-cs__step[aria-current=step]{border-color:var(--color-border-default);background:var(--color-background-elevation-sunken)}
.bcn-cs__num{border:1px solid var(--color-border-default-strong);width:1.25rem;height:1.25rem;font-size:var(--font-size-100);line-height:1;font-weight:var(--typography-font-weight-semibold);font-variant-numeric:tabular-nums;color:var(--color-content-default-secondary);border-radius:50%;flex:none;place-items:center;margin-top:1px;display:grid}
.bcn-cs__digit,.bcn-cs__tick{grid-area:1/1;display:inline-flex}
.bcn-cs__tick{display:none}
.bcn-cs__step[data-done] .bcn-cs__num{border-color:var(--color-background-brand);color:var(--color-content-brand)}
.bcn-cs__step[data-done] .bcn-cs__digit{display:none}
.bcn-cs__step[data-done] .bcn-cs__tick{display:inline-flex}
.bcn-cs__step[aria-current=step] .bcn-cs__num{border-color:var(--color-background-brand);background:var(--color-background-brand);color:var(--color-content-default-knockout)}
.bcn-cs__step[aria-current=step] .bcn-cs__digit{display:inline-flex}
.bcn-cs__step[aria-current=step] .bcn-cs__tick{display:none}
.bcn-cs__stepbody{flex-direction:column;gap:0;min-width:0;display:flex}
.bcn-cs__steplabel{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-semibold)}
.bcn-cs__stepsum{color:var(--color-content-default-secondary);white-space:pre-line;font-size:.8125rem}
.bcn-cs__tally{gap:var(--spacing-100);padding-top:var(--spacing-300);border-top:1px solid var(--color-border-default-subtle);flex-direction:column;display:flex}
.bcn-cs__fig{align-items:baseline;gap:var(--spacing-200);margin:0;display:flex}
.bcn-cs__figval{font-size:.8125rem;font-weight:var(--typography-font-weight-semibold);font-variant-numeric:tabular-nums;color:var(--color-content-default)}
.bcn-cs__figlabel{color:var(--color-content-default-secondary);font-size:.8125rem}
.bcn-cs__panel{min-width:0;min-height:0;overflow-y:auto}
.bcn-cs__pane{gap:var(--spacing-300);flex-direction:column;display:flex}
.bcn-cs__pane[hidden],.bcn-cs__group[hidden],[data-cs-review-none][hidden]{display:none}
.bcn-cs__pane--split{gap:var(--spacing-500);grid-template-columns:minmax(0,1fr) 19rem;height:100%;display:grid}
.bcn-cs__pane--split[hidden]{display:none}
.bcn-cs__map{height:100%;min-height:0}
.bcn-cs__side{gap:var(--spacing-300);flex-direction:column;min-height:0;display:flex;overflow-y:auto}
.bcn-cs__panehead{align-items:center;gap:var(--spacing-300);display:flex}
.bcn-cs__h{font-size:var(--font-size-200);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);margin:0}
.bcn-cs__count{color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums;white-space:nowrap;margin-left:auto;font-size:.8125rem}
.bcn-cs__group{gap:var(--spacing-300);flex-direction:column;display:flex}
.bcn-cs__transfer{gap:var(--spacing-400);grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;display:grid}
.bcn-cs__col{gap:var(--spacing-200);flex-direction:column;min-width:0;display:flex}
.bcn-cs-opt__body.bcn-cs-opt__body--stack{align-items:stretch;gap:var(--spacing-050);flex-direction:column}
.bcn-cs-opt__body--stack .bcn-cs-opt__titleline{max-width:none}
.bcn-cs-opt__metaline{align-items:center;gap:var(--spacing-150);min-width:0;display:flex}
.bcn-cs-opt__metaline .bcn-cs-opt__meta{white-space:nowrap;text-overflow:ellipsis;min-width:0;overflow:hidden}
.bcn-cs__srcgroups{gap:var(--spacing-200);flex-direction:column;display:flex}
.bcn-cs__srcgroups[hidden],[data-cs-srcgrp][hidden],.bcn-cs__options[hidden]{display:none}
.bcn-cs__srcgroups .esa-collapsible__summary{padding:var(--spacing-200) var(--spacing-300)}
.bcn-cs__srcgroups .esa-collapsible__body{border-top:1px solid var(--color-border-default-subtle);padding:0}
.bcn-cs__options--bare{background:0 0;border:0;border-radius:0}
.bcn-cs__transfer+.bcn-cs__group,.bcn-cs__group+.bcn-cs__group{padding-top:var(--spacing-400);border-top:1px solid var(--color-border-default-subtle)}
.bcn-cs__options{border:1px solid var(--color-border-default);border-radius:var(--radius-200);background:var(--color-background-elevation-raised);flex-direction:column;margin:0;padding:0;list-style:none;display:flex;overflow:hidden}
.bcn-cs__options--grid{gap:var(--spacing-150);background:0 0;border:0;grid-template-columns:repeat(auto-fill,minmax(17rem,1fr));display:grid;overflow:visible}
.bcn-cs-opt{align-items:center;gap:var(--spacing-250);padding:var(--spacing-150) var(--spacing-300);display:flex}
.bcn-cs-opt+.bcn-cs-opt{border-top:1px solid var(--color-border-default-subtle)}
.bcn-cs__options--grid .bcn-cs-opt{border:1px solid var(--color-border-default);border-radius:var(--radius-200);background:var(--color-background-elevation-raised)}
.bcn-cs-opt[hidden]{display:none}
.bcn-cs-opt__body{align-items:baseline;gap:var(--spacing-300);flex:1;min-width:0;display:flex}
.bcn-cs-opt__body>{min-width:0}
.bcn-cs-opt__titleline{align-items:center;gap:var(--spacing-200);flex:none;min-width:0;max-width:60%;display:flex}
.bcn-cs-opt__name{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-medium);color:var(--color-content-default);white-space:nowrap;flex:none}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__name{text-overflow:ellipsis;flex:0 auto;min-width:0;overflow:hidden}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__meta{flex:none}
.bcn-cs-opt__name--clip{text-overflow:ellipsis;white-space:nowrap;flex:0 auto;min-width:0;overflow:hidden}
.bcn-cs-opt__meta{color:var(--color-content-default-secondary);text-overflow:ellipsis;white-space:nowrap;font-size:.8125rem;overflow:hidden}
.bcn-cs-opt__meta:empty{display:none}
.bcn-cs-opt__end{color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums;flex:none;font-size:.8125rem}
.bcn-cs__dates esa-date-picker{width:13rem}
.bcn-cs__foot{justify-content:space-between;align-items:center;width:100%;display:flex}
.bcn-cs__foot [hidden]{display:none}
.bcn-cs-confirm__body{gap:var(--spacing-300);flex-direction:column;display:flex}
.bcn-cs-confirm__body p{margin:0}
.bcn-cs-confirm__effects{color:var(--color-content-default);margin:0;padding-inline-start:var(--spacing-500)}
.bcn-cs-confirm__effects[hidden],[data-cs-confirm-notewrap][hidden]{display:none}
.bcn-cs__footacts{gap:var(--spacing-300);margin-left:auto;display:inline-flex}
.esa-badge{--_badge-bg:var(--badge-bg,var(--color-background-elevation-raised,#fcfcfc));--_badge-text:var(--badge-text-color,var(--color-content-default-secondary,#646464));--_badge-border:var(--badge-border-color,var(--color-border-default,#cecece));--_badge-padding-y:var(--spacing-150,.375rem);--_badge-padding-x:var(--spacing-200,.5rem);min-width:calc(1lh + 2 * var(--_badge-padding-y));padding-block:var(--_badge-padding-y);padding-inline:var(--_badge-padding-x);border-radius:var(--radius-chip,var(--radius-sm,.25rem));background:var(--_badge-bg);color:var(--_badge-text);white-space:nowrap;box-sizing:border-box;justify-content:center;align-items:center;display:inline-flex}
.esa-badge--xs{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-100,.25rem)}
.esa-badge--sm{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-150,.375rem)}
.esa-badge--lg{--_badge-padding-y:var(--spacing-250,.625rem);--_badge-padding-x:var(--spacing-300,.75rem)}
.esa-badge--primary{--_badge-bg:var(--color-background-brand,#46a758);--_badge-text:var(--color-content-default-knockout,#fcfcfc)}
.esa-badge--secondary{--_badge-bg:var(--color-background-brand-muted,#e9f6e9);--_badge-text:var(--color-content-on-brand-muted,#203c25)}
.esa-badge--success{--_badge-bg:var(--color-background-utility-success-muted,#e6f6eb);--_badge-text:var(--color-content-utility-success,#218358);--_badge-border:var(--color-border-utility-success,#adddc0)}
.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-muted,#fff7c2);--_badge-text:var(--color-content-utility-warning,#ab6400);--_badge-border:var(--color-border-utility-warning,#f3d673)}
.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-muted,#feebec);--_badge-text:var(--color-content-utility-danger,#ce2c31);--_badge-border:var(--color-border-utility-danger,#fdbdbe)}
.esa-badge--info{--_badge-bg:var(--color-background-utility-info-muted,#e6f4fe);--_badge-text:var(--color-content-utility-info,#0d74ce);--_badge-border:var(--color-border-utility-info,#acd8fc)}
.esa-badge--neutral:not(.esa-badge--dot),.esa-badge--success:not(.esa-badge--dot),.esa-badge--warning:not(.esa-badge--dot),.esa-badge--danger:not(.esa-badge--dot),.esa-badge--info:not(.esa-badge--dot){border:1px solid var(--_badge-border,transparent)}
.esa-badge--dot{border-radius:var(--radius-pill,9999px);width:8px;min-width:8px;height:8px;padding:0}
.esa-badge--dot.esa-badge--neutral{--_badge-bg:var(--color-content-default-secondary,#646464)}
.esa-badge--dot.esa-badge--primary{--_badge-bg:var(--color-background-brand-hover,#3e9b4f)}
.esa-badge--dot.esa-badge--secondary{--_badge-bg:var(--color-background-brand,#46a758)}
.esa-badge--dot.esa-badge--success{--_badge-bg:var(--color-background-utility-success-hover,#2b9a66)}
.esa-badge--dot.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-hover,#ffba18)}
.esa-badge--dot.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-hover,#dc3e42)}
.esa-badge--dot.esa-badge--info{--_badge-bg:var(--color-background-utility-info-hover,#0588f0)}
.esa-badge--dot{background:canvastext;border:0;outline:1px solid canvastext}
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
.typography-label-md{font-family:var(--typography-label-md-font-family);font-size:var(--typography-label-md-font-size);font-weight:var(--typography-label-md-font-weight);line-height:var(--typography-label-md-line-height);letter-spacing:var(--typography-label-md-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-2xs{font-family:var(--typography-microcopy-2xs-font-family);font-size:var(--typography-microcopy-2xs-font-size);font-weight:var(--typography-microcopy-2xs-font-weight);line-height:var(--typography-microcopy-2xs-line-height);letter-spacing:var(--typography-microcopy-2xs-letter-spacing)}
.typography-microcopy-md{font-family:var(--typography-microcopy-md-font-family);font-size:var(--typography-microcopy-md-font-size);font-weight:var(--typography-microcopy-md-font-weight);line-height:var(--typography-microcopy-md-line-height);letter-spacing:var(--typography-microcopy-md-letter-spacing)}
.typography-microcopy-2xs-subtle{font-family:var(--typography-microcopy-2xs-subtle-font-family);font-size:var(--typography-microcopy-2xs-subtle-font-size);font-weight:var(--typography-microcopy-2xs-subtle-font-weight);line-height:var(--typography-microcopy-2xs-subtle-line-height);letter-spacing:var(--typography-microcopy-2xs-subtle-letter-spacing)}
.typography-microcopy-md-subtle{font-family:var(--typography-microcopy-md-subtle-font-family);font-size:var(--typography-microcopy-md-subtle-font-size);font-weight:var(--typography-microcopy-md-subtle-font-weight);line-height:var(--typography-microcopy-md-subtle-line-height);letter-spacing:var(--typography-microcopy-md-subtle-letter-spacing)}
.typography-microcopy-2xs-strong{font-family:var(--typography-microcopy-2xs-strong-font-family);font-size:var(--typography-microcopy-2xs-strong-font-size);font-weight:var(--typography-microcopy-2xs-strong-font-weight);line-height:var(--typography-microcopy-2xs-strong-line-height);letter-spacing:var(--typography-microcopy-2xs-strong-letter-spacing)}
.typography-microcopy-md-strong{font-family:var(--typography-microcopy-md-strong-font-family);font-size:var(--typography-microcopy-md-strong-font-size);font-weight:var(--typography-microcopy-md-strong-font-weight);line-height:var(--typography-microcopy-md-strong-line-height);letter-spacing:var(--typography-microcopy-md-strong-letter-spacing)}
.bcn-entity-logo{background:color-mix(in srgb, var(--_c) 12%, transparent);color:var(--_c);border:1px solid color-mix(in srgb, var(--_c) 30%, transparent);flex-shrink:0;justify-content:center;align-items:center;line-height:0;display:inline-flex;overflow:hidden}
.bcn-entity-logo[data-style=fill]{background:var(--_c);color:var(--color-content-default-knockout);border-color:#0000}
.bcn-entity-logo[data-style=image]{background:var(--color-background-elevation-sunken);border-color:var(--color-border-default-subtle)}
.bcn-entity-logo__img{object-fit:cover;width:100%;height:100%;display:block}
.bcn-entity-logo[data-size=sm]{width:24px;height:24px}
.bcn-entity-logo[data-size=md]{--icon-size-sm:18px;width:32px;height:32px}
.bcn-entity-logo[data-size=lg]{width:48px;height:48px}
.bcn-entity-logo[data-size=xl]{--icon-size-xl:36px;width:72px;height:72px}
.bcn-entity-logo[data-size="2xl"]{--icon-size-xl:44px;width:92px;height:92px}
.bcn-entity-logo[data-shape=rounded][data-size=sm],.bcn-entity-logo[data-shape=rounded][data-size=md]{border-radius:var(--radius-200)}
.bcn-entity-logo[data-shape=rounded][data-size=lg],.bcn-entity-logo[data-shape=rounded][data-size=xl],.bcn-entity-logo[data-shape=rounded][data-size="2xl"]{border-radius:var(--radius-400)}
.bcn-entity-logo[data-shape=circle]{border-radius:var(--radius-full)}
.bcn-entity-logo[data-variant=seal]{border:var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);box-shadow:var(--bcn-seal-shadow);box-sizing:content-box}
.esa-collapsible{border:var(--border-width-default,1px) solid var(--color-border-default,#cecece);border-radius:var(--radius-md,.5rem);background:var(--color-background-elevation-raised,#fcfcfc)}
.esa-collapsible--flush{background:0 0;border:none;border-radius:0}
.esa-collapsible--flush>.esa-collapsible__summary,.esa-collapsible--flush>.esa-collapsible__body{padding-inline:0}
.esa-collapsible__summary{align-items:center;gap:var(--spacing-200,.5rem);padding:var(--spacing-300,.75rem) var(--spacing-400,1rem);color:var(--color-content-default,#202020);cursor:pointer;list-style:none;display:flex}
.esa-collapsible__summary::-webkit-details-marker{display:none}
.esa-collapsible__summary:after{content:"";border-right:2px solid var(--color-content-default-secondary,#646464);border-bottom:2px solid var(--color-content-default-secondary,#646464);width:8px;height:8px;margin-left:auto;transition:transform .15s;transform:rotate(-45deg)}
.esa-collapsible[open]>.esa-collapsible__summary:after{transform:rotate(45deg)}
.esa-collapsible__summary .esa-icon{color:var(--color-content-default-secondary,#646464);flex-shrink:0}
.esa-collapsible__body{gap:var(--spacing-400,1rem);padding:0 var(--spacing-400,1rem) var(--spacing-400,1rem);flex-direction:column;display:flex}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.esa-empty-state{--_empty-icon-size:var(--empty-state-icon-size-md,48px);--_empty-gap:var(--spacing-200,.5rem);text-align:center;padding:var(--spacing-600,2rem) var(--spacing-400,1rem);justify-content:center;align-items:center;gap:var(--_empty-gap);flex-direction:column;display:flex}
.esa-empty-state--xs{--_empty-icon-size:var(--empty-state-icon-size-xs,24px);padding:var(--spacing-300,.75rem) var(--spacing-200,.5rem)}
.esa-empty-state--sm{--_empty-icon-size:var(--empty-state-icon-size-sm,32px);padding:var(--spacing-400,1rem) var(--spacing-300,.75rem)}
.esa-empty-state--lg{--_empty-icon-size:var(--empty-state-icon-size-lg,64px);padding:var(--spacing-800,4rem) var(--spacing-400,1rem)}
.esa-empty-state__icon{color:var(--color-content-default-secondary,#646464);margin-bottom:var(--spacing-100,.25rem);display:inline-flex}
.esa-empty-state__icon svg{width:var(--_empty-icon-size);height:var(--_empty-icon-size)}
.esa-empty-state__title{color:var(--color-content-default,#202020);margin:0}
.esa-empty-state__description{color:var(--color-content-default-secondary,#646464);max-width:360px;margin:0}
.esa-empty-state__actions{margin-top:var(--spacing-200,.5rem)}
.esa-empty-state__actions:empty{display:none}
.bcn-key-value__key .esa-icon{color:var(--color-content-default-tertiary)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #fcfcfc _(component)_
- `--badge-border-color`: #dcdcdc _(component)_
- `--badge-text-color`: #525252 _(component)_
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
- `--bcn-seal-ring-color`: #fcfcfc _(component)_
- `--bcn-seal-ring-width`: 3px _(component)_
- `--bcn-seal-shadow`: 0 2px 12px 0 #00000014 _(component)_
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
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
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
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
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
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
