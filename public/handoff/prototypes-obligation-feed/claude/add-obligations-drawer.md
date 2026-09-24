# Add obligations drawer

A right-hand side panel for linking more obligations to the open record: the record named at the top, a search, facet filters, and the obligation registry as a category / subcategory checkbox tree. "Link to record" adds the checked ones as Evidence.

## Key decisions
- A link added by hand is always Evidence. The Link-as (Evidence / Triggered) choice was cut: only a source can make a duty owed (Andy, 2026-09-23).
- Obligations the record already holds are hidden from the tree.
- Same tree, facets and search as the Lists add-obligations drawer.

## Done when
- Linking adds the cards to the record in every view and updates the count; relinking the same obligation is impossible.

## Markup
```html
<esa-side-dialog
  id="bcn-fwl"
  heading="Add obligations"
  position="right"
  show-close-button="true"
  style="--_width: min(680px, 94vw); --z-modal: 1300; --z-modal-backdrop: 1250"
  size="md"
  open=""
  ><div class="bcn-lao">
    <dl class="bcn-fwl__to">
      <dt class="typography-label-sm">Record</dt>
      <dd class="typography-body-sm" data-fwl-record="">
        Giant garter snake seen in an irrigation canal at the work edge
      </dd>
    </dl>
    <esa-text-field
      size="sm"
      name="fwl-search"
      aria-label="Search obligations"
      placeholder="Search by obligation title"
    ></esa-text-field>
    <div class="bcn-laf" data-add-filters="">
      <div
        class="esa-filter-container typography-label-md"
        style="
          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
        "
      >
        <esa-filter-dropdown
          name="phase"
          label="Phase"
          placeholder="Search phase"
          size="sm"
          multiple=""
          options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"},{"value":"Post-Construction","label":"Post-Construction"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          name="species"
          label="Species"
          placeholder="Search species"
          size="sm"
          multiple=""
          options='[{"value":"bullfrogs","label":"Bullfrogs"},{"value":"california tiger salamander","label":"California tiger salamander"},{"value":"crotch bumble bee","label":"Crotch bumble bee"},{"value":"delta smelt","label":"Delta smelt"},{"value":"giant garter snake","label":"Giant garter snake"},{"value":"longfin smelt","label":"Longfin smelt"},{"value":"mason’s lilaeopsis","label":"Mason’s lilaeopsis"},{"value":"spring-run chinook salmon","label":"Spring-run chinook salmon"},{"value":"swainson’s hawk","label":"Swainson’s hawk"},{"value":"tricolored blackbird","label":"Tricolored blackbird"},{"value":"white sturgeon","label":"White sturgeon"},{"value":"winter-run chinook salmon","label":"Winter-run chinook salmon"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          name="category"
          label="Category"
          placeholder="Search category"
          size="sm"
          multiple=""
          options='[{"value":"agency","label":"Agency reporting and approvals"},{"value":"air","label":"Air quality"},{"value":"herps","label":"Amphibians and reptiles"},{"value":"birds","label":"Birds"},{"value":"fish","label":"Fish"},{"value":"habitat","label":"Habitat protection"},{"value":"hazards","label":"Hazards"},{"value":"lighting","label":"Lighting"},{"value":"mitigation","label":"Mitigation and restoration"},{"value":"noise","label":"Noise and vibration"},{"value":"people","label":"People and qualifications"},{"value":"plants-inverts","label":"Plants and invertebrates"},{"value":"site","label":"Site conduct"},{"value":"water","label":"Water"},{"value":"operations","label":"Water operations"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          name="class"
          label="Class"
          placeholder="Search class"
          size="sm"
          multiple=""
          options='[{"value":"adhere","label":"Adhere"},{"value":"monitor","label":"Monitor"},{"value":"notify","label":"Notify"},{"value":"roster","label":"Roster"}]'
        ></esa-filter-dropdown
        ><span class="bcn-laf__clear" data-add-filters-clear="" hidden=""
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
      </div>
    </div>
    <p class="bcn-lao__nomatch" data-lao-nomatch="" hidden="">No obligations match.</p>
    <div class="bcn-lao__tree" data-lao-tree="">
      <details class="bcn-lao__cat" data-lao-cat="agency">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Agency reporting and approvals</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="sightings-reporting" hidden="">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Species sightings and CNDDB reporting</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="0 obligations available"
                  >0</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                data-title="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="agency"
                data-f-class="notify"
                hidden=""
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                  >Biological Monitor daily communication and immediate reports to the
                  Designated Biologist</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="take-reporting">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Take and injury reporting</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="1 obligations available"
                  >1</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFQ"
                data-title="Carcass salvage, labeling and storage for the wildlife health lab"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="agency"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Carcass salvage, labeling and storage for the wildlife health lab"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Carcass salvage, labeling and storage for the wildlife health lab"
                  >Carcass salvage, labeling and storage for the wildlife health lab</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="air">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Air quality</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="12 obligations available">12</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="fugitive-dust">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fugitive dust</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="12 obligations available"
                  >12</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXC"
                data-title="Access Route Surface Stabilization"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Access Route Surface Stabilization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Access Route Surface Stabilization"
                  >Access Route Surface Stabilization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXB"
                data-title="Dryer and Conveyor Enclosure"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Dryer and Conveyor Enclosure"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dryer and Conveyor Enclosure"
                  >Dryer and Conveyor Enclosure</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXK"
                data-title="Dust Complaint Sign"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Dust Complaint Sign"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dust Complaint Sign"
                  >Dust Complaint Sign</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX8"
                data-title="Fugitive Dust Suppression"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake|swainson’s hawk"
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fugitive Dust Suppression"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fugitive Dust Suppression"
                  >Fugitive Dust Suppression</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX9"
                data-title="Haul Truck Cover and Freeboard"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Haul Truck Cover and Freeboard"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Haul Truck Cover and Freeboard"
                  >Haul Truck Cover and Freeboard</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXG"
                data-title="Inactive Area Stabilization"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inactive Area Stabilization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inactive Area Stabilization"
                  >Inactive Area Stabilization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXF"
                data-title="Prompt Paving After Grading"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Prompt Paving After Grading"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Prompt Paving After Grading"
                  >Prompt Paving After Grading</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXH"
                data-title="Stabilized Construction Entrances"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stabilized Construction Entrances"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stabilized Construction Entrances"
                  >Stabilized Construction Entrances</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXD"
                data-title="Stockpile Tackifier Application"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stockpile Tackifier Application"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stockpile Tackifier Application"
                  >Stockpile Tackifier Application</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXJ"
                data-title="Tire Wash Stations"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Tire Wash Stations"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Tire Wash Stations"
                  >Tire Wash Stations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXA"
                data-title="Track-Out Removal"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Track-Out Removal"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Track-Out Removal"
                  >Track-Out Removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXE"
                data-title="Wind Breaks"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="air"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Wind Breaks"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Wind Breaks"
                  >Wind Breaks</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="herps">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Amphibians and reptiles</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="38 obligations available">38</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="amphibians">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Amphibians</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="24 obligations available"
                  >24</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA3"
                data-title="Biological monitoring of initial grading and excavation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological monitoring of initial grading and excavation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological monitoring of initial grading and excavation"
                  >Biological monitoring of initial grading and excavation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA2"
                data-title="Biologist presence during site selection, access and set-up"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist presence during site selection, access and set-up"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist presence during site selection, access and set-up"
                  >Biologist presence during site selection, access and set-up</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RF"
                data-title="Biologist survey before work resumes after rain"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist survey before work resumes after rain"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist survey before work resumes after rain"
                  >Biologist survey before work resumes after rain</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N1"
                data-title="Breeding habitat no-activity buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Breeding habitat no-activity buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Breeding habitat no-activity buffer"
                  >Breeding habitat no-activity buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WW"
                data-title="Burrow avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Burrow avoidance"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow avoidance"
                  >Burrow avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFR"
                data-title="Burrow Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Burrow Avoidance"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow Avoidance"
                  >Burrow Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGQ"
                data-title="Burrow monitoring when night lighting spills toward habitat"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Burrow monitoring when night lighting spills toward habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow monitoring when night lighting spills toward habitat"
                  >Burrow monitoring when night lighting spills toward habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X0"
                data-title="Burrow release protocol"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Burrow release protocol"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow release protocol"
                  >Burrow release protocol</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RG"
                data-title="Clearance survey after barrier repair"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Clearance survey after barrier repair"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Clearance survey after barrier repair"
                  >Clearance survey after barrier repair</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA1"
                data-title="Daily burrow check before work starts"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily burrow check before work starts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily burrow check before work starts"
                  >Daily burrow check before work starts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N2"
                data-title="Habitat disturbance work window"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat disturbance work window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat disturbance work window"
                  >Habitat disturbance work window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY4"
                data-title="Habitat Disturbance Work Window"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat Disturbance Work Window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat Disturbance Work Window"
                  >Habitat Disturbance Work Window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WX"
                data-title="Hand excavation of burrows in the trench alignment"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hand excavation of burrows in the trench alignment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hand excavation of burrows in the trench alignment"
                  >Hand excavation of burrows in the trench alignment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA4"
                data-title="Morning survey after burrow watering"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Morning survey after burrow watering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Morning survey after burrow watering"
                  >Morning survey after burrow watering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WP"
                data-title="Mowing pattern"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing pattern"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Mowing pattern"
                  >Mowing pattern</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFT"
                data-title="Mowing Pattern"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing Pattern"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Mowing Pattern"
                  >Mowing Pattern</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG5"
                data-title="Night Work Prohibition After Construction"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species=""
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Night Work Prohibition After Construction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Night Work Prohibition After Construction"
                  >Night Work Prohibition After Construction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFN"
                data-title="No-Activity Buffer Around Occupied Burrows"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No-Activity Buffer Around Occupied Burrows"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No-Activity Buffer Around Occupied Burrows"
                  >No-Activity Buffer Around Occupied Burrows</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGX"
                data-title="No-activity buffer around occupied burrows and refugia"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No-activity buffer around occupied burrows and refugia"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No-activity buffer around occupied burrows and refugia"
                  >No-activity buffer around occupied burrows and refugia</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N0"
                data-title="Occupied burrow no-activity buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Occupied burrow no-activity buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Occupied burrow no-activity buffer"
                  >Occupied burrow no-activity buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGV"
                data-title="Presence surveys before and during each work day"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Presence surveys before and during each work day"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Presence surveys before and during each work day"
                  >Presence surveys before and during each work day</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RJ"
                data-title="Presence surveys before and during each work day"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Presence surveys before and during each work day"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Presence surveys before and during each work day"
                  >Presence surveys before and during each work day</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RH"
                data-title="Site survey before work on days with rain forecast"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Site survey before work on days with rain forecast"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Site survey before work on days with rain forecast"
                  >Site survey before work on days with rain forecast</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA7"
                data-title="Yearly site assessment of the active season"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Yearly site assessment of the active season"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Yearly site assessment of the active season"
                  >Yearly site assessment of the active season</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="ggs">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Giant garter snake</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="14 obligations available"
                  >14</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY9"
                data-title="Avoidance of Federally Listed Species"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Avoidance of Federally Listed Species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Avoidance of Federally Listed Species"
                  >Avoidance of Federally Listed Species</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X3"
                data-title="Canal bank disturbance avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Canal bank disturbance avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Canal bank disturbance avoidance"
                  >Canal bank disturbance avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFZ"
                data-title="Canal Bank Disturbance Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Canal Bank Disturbance Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Canal Bank Disturbance Avoidance"
                  >Canal Bank Disturbance Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X4"
                data-title="Canal excavation limited to one side"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Canal excavation limited to one side"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Canal excavation limited to one side"
                  >Canal excavation limited to one side</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFY"
                data-title="Canal Spoils Placement"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Canal Spoils Placement"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Canal Spoils Placement"
                  >Canal Spoils Placement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGS"
                data-title="Daily inspection of environmentally sensitive area markings"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily inspection of environmentally sensitive area markings"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily inspection of environmentally sensitive area markings"
                  >Daily inspection of environmentally sensitive area markings</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X6"
                data-title="ESA demarcation observed"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="ESA demarcation observed"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="ESA demarcation observed"
                  >ESA demarcation observed</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGW"
                data-title="Flagging of suitable upland habitat at work sites"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Flagging of suitable upland habitat at work sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Flagging of suitable upland habitat at work sites"
                  >Flagging of suitable upland habitat at work sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFX"
                data-title="In-Channel Work Window"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="In-Channel Work Window"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="In-Channel Work Window"
                  >In-Channel Work Window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XKVCCZ66NC7TNFN3WP"
                data-title="Investigation of burrows for occupancy"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Investigation of burrows for occupancy"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Investigation of burrows for occupancy"
                  >Investigation of burrows for occupancy</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG1"
                data-title="Maintenance Ground Disturbance Limit"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Maintenance Ground Disturbance Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Maintenance Ground Disturbance Limit"
                  >Maintenance Ground Disturbance Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XKVCCZ66NC7TNFN3WQ"
                data-title="Resurvey after a lapse in covered activities"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Resurvey after a lapse in covered activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Resurvey after a lapse in covered activities"
                  >Resurvey after a lapse in covered activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFM"
                data-title="Staging Area Setback from Habitat"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake|swainson’s hawk"
                data-f-category="herps"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Staging Area Setback from Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Staging Area Setback from Habitat"
                  >Staging Area Setback from Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X8"
                data-title="Suitable habitat delineation maintained"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="swainson’s hawk"
                data-f-category="herps"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Suitable habitat delineation maintained"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Suitable habitat delineation maintained"
                  >Suitable habitat delineation maintained</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="birds">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Birds</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="30 obligations available">30</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="nesting-birds">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Nesting birds</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="30 obligations available"
                  >30</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY4"
                data-title="Active colony buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Active colony buffer"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Active colony buffer"
                  >Active colony buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH0"
                data-title="Biologist stop-work authority for distressed nesting birds"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist stop-work authority for distressed nesting birds"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist stop-work authority for distressed nesting birds"
                  >Biologist stop-work authority for distressed nesting birds</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XD"
                data-title="Break areas out of nest line of sight"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Break areas out of nest line of sight"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Break areas out of nest line of sight"
                  >Break areas out of nest line of sight</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY8"
                data-title="Break areas outside buffers"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Break areas outside buffers"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Break areas outside buffers"
                  >Break areas outside buffers</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH2"
                data-title="Daily monitoring of an active colony near work"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily monitoring of an active colony near work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily monitoring of an active colony near work"
                  >Daily monitoring of an active colony near work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH3"
                data-title="Daily monitoring of an occupied roost site near work"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily monitoring of an occupied roost site near work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily monitoring of an occupied roost site near work"
                  >Daily monitoring of an occupied roost site near work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XC"
                data-title="Daylight work limit near nests"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk|tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daylight work limit near nests"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daylight work limit near nests"
                  >Daylight work limit near nests</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG9"
                data-title="Disruptive Activity Timing"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Disruptive Activity Timing"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Disruptive Activity Timing"
                  >Disruptive Activity Timing</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGZ"
                data-title="Distance-tiered nest observation during covered activities"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Distance-tiered nest observation during covered activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Distance-tiered nest observation during covered activities"
                  >Distance-tiered nest observation during covered activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XE"
                data-title="Equipment staging out of nest line of sight"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Equipment staging out of nest line of sight"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Equipment staging out of nest line of sight"
                  >Equipment staging out of nest line of sight</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYB"
                data-title="Helicopter buffer from colonies"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Helicopter buffer from colonies"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Helicopter buffer from colonies"
                  >Helicopter buffer from colonies</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGB"
                data-title="Helicopter Daylight Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Helicopter Daylight Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Helicopter Daylight Limit"
                  >Helicopter Daylight Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY2"
                data-title="Helicopter setback from nests"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Helicopter setback from nests"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Helicopter setback from nests"
                  >Helicopter setback from nests</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PS0"
                data-title="Irrigation and maintenance of replacement nest trees"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Irrigation and maintenance of replacement nest trees"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Irrigation and maintenance of replacement nest trees"
                  >Irrigation and maintenance of replacement nest trees</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY3"
                data-title="Mixed flock roost occupancy presumption"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Mixed flock roost occupancy presumption"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Mixed flock roost occupancy presumption"
                  >Mixed flock roost occupancy presumption</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH8"
                data-title="Monitoring of replacement nest trees"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of replacement nest trees"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of replacement nest trees"
                  >Monitoring of replacement nest trees</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XJ"
                data-title="Nest tree removal avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Nest tree removal avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Nest tree removal avoidance"
                  >Nest tree removal avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG6"
                data-title="Nest Tree Removal Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Nest Tree Removal Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Nest Tree Removal Avoidance"
                  >Nest Tree Removal Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XB"
                data-title="Nesting season work restriction"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Nesting season work restriction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Nesting season work restriction"
                  >Nesting season work restriction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XF"
                data-title="No contact with occupied nest trees"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No contact with occupied nest trees"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No contact with occupied nest trees"
                  >No contact with occupied nest trees</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY9"
                data-title="No exiting vehicles within buffers"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No exiting vehicles within buffers"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No exiting vehicles within buffers"
                  >No exiting vehicles within buffers</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYA"
                data-title="No physical contact with colonies"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No physical contact with colonies"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No physical contact with colonies"
                  >No physical contact with colonies</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XG"
                data-title="No removal of occupied nest trees"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No removal of occupied nest trees"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No removal of occupied nest trees"
                  >No removal of occupied nest trees</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH1"
                data-title="Occupancy checks of unoccupied roost sites during work"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Occupancy checks of unoccupied roost sites during work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Occupancy checks of unoccupied roost sites during work"
                  >Occupancy checks of unoccupied roost sites during work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XH"
                data-title="Occupied nest no-activity buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Occupied nest no-activity buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Occupied nest no-activity buffer"
                  >Occupied nest no-activity buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY7"
                data-title="Occupied roost buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Occupied roost buffer"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Occupied roost buffer"
                  >Occupied roost buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PS1"
                data-title="Replacement nest tree survival standard and replanting"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Replacement nest tree survival standard and replanting"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Replacement nest tree survival standard and replanting"
                  >Replacement nest tree survival standard and replanting</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY5"
                data-title="Response to colonization adjacent to work"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Response to colonization adjacent to work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Response to colonization adjacent to work"
                  >Response to colonization adjacent to work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRZ"
                data-title="Siting of replacement nest sites"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="swainson’s hawk"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Siting of replacement nest sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Siting of replacement nest sites"
                  >Siting of replacement nest sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNY6"
                data-title="Stop work on signs of distress"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="tricolored blackbird"
                data-f-category="birds"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stop work on signs of distress"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stop work on signs of distress"
                  >Stop work on signs of distress</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="fish">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Fish</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="fish">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fish rescue and salvage</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG3"
                data-title="Dead Specimen Preservation"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="giant garter snake"
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Dead Specimen Preservation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dead Specimen Preservation"
                  >Dead Specimen Preservation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA0"
                data-title="Fisheries biologist present to rescue fish during dewatering"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="fish"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fisheries biologist present to rescue fish during dewatering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fisheries biologist present to rescue fish during dewatering"
                  >Fisheries biologist present to rescue fish during dewatering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFX"
                data-title="Preservation and delivery of dead covered fish"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Preservation and delivery of dead covered fish"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Preservation and delivery of dead covered fish"
                  >Preservation and delivery of dead covered fish</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGR"
                data-title="Preservation and delivery of dead covered specimens"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Preservation and delivery of dead covered specimens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Preservation and delivery of dead covered specimens"
                  >Preservation and delivery of dead covered specimens</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="habitat">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Habitat protection</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="51 obligations available">51</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="esas-fencing">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Exclusion fencing and ESAs</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="10 obligations available"
                  >10</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA6"
                data-title="Biological monitoring during exclusion barrier installation"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological monitoring during exclusion barrier installation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological monitoring during exclusion barrier installation"
                  >Biological monitoring during exclusion barrier installation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1D"
                data-title="Exclusion barrier construction specification"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction|Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Exclusion barrier construction specification"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Exclusion barrier construction specification"
                  >Exclusion barrier construction specification</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WR"
                data-title="Exclusion fencing gate closure"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Exclusion fencing gate closure"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Exclusion fencing gate closure"
                  >Exclusion fencing gate closure</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WQ"
                data-title="Exclusion fencing in place during covered activities"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Exclusion fencing in place during covered activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Exclusion fencing in place during covered activities"
                  >Exclusion fencing in place during covered activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J37"
                data-title="Exclusion Fencing Inspection and Repair"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Exclusion Fencing Inspection and Repair"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Exclusion Fencing Inspection and Repair"
                  >Exclusion Fencing Inspection and Repair</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WV"
                data-title="Exclusion fencing repair"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Exclusion fencing repair"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Exclusion fencing repair"
                  >Exclusion fencing repair</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MM"
                data-title="Habitat and buffer markers maintained"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat and buffer markers maintained"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat and buffer markers maintained"
                  >Habitat and buffer markers maintained</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA5"
                data-title="Inspection and reporting of habitat fencing, stakes and flags"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspection and reporting of habitat fencing, stakes and flags"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspection and reporting of habitat fencing, stakes and flags"
                  >Inspection and reporting of habitat fencing, stakes and flags</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WS"
                data-title="Refuge cover along exclusion fencing"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Refuge cover along exclusion fencing"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Refuge cover along exclusion fencing"
                  >Refuge cover along exclusion fencing</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WT"
                data-title="Vegetation maintenance along exclusion fencing"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation maintenance along exclusion fencing"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation maintenance along exclusion fencing"
                  >Vegetation maintenance along exclusion fencing</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="habitat-avoidance">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Habitat avoidance and work footprint</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="7 obligations available"
                  >7</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                data-title="Avoidance Measures in Unmapped Habitat"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
                hidden=""
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Avoidance Measures in Unmapped Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Avoidance Measures in Unmapped Habitat"
                  >Avoidance Measures in Unmapped Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J32"
                data-title="Conservation Easement Buffer"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conservation Easement Buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conservation Easement Buffer"
                  >Conservation Easement Buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYC"
                data-title="Geotechnical investigation avoidance of aquatic features"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Geotechnical investigation avoidance of aquatic features"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Geotechnical investigation avoidance of aquatic features"
                  >Geotechnical investigation avoidance of aquatic features</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J31"
                data-title="No Disturbance of CDFW Conserved Lands"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No Disturbance of CDFW Conserved Lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No Disturbance of CDFW Conserved Lands"
                  >No Disturbance of CDFW Conserved Lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X7"
                data-title="Suitable habitat avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake|swainson’s hawk|tricolored blackbird"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Suitable habitat avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Suitable habitat avoidance"
                  >Suitable habitat avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY0"
                data-title="Suitable Habitat Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake|crotch bumble bee"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Suitable Habitat Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Suitable Habitat Avoidance"
                  >Suitable Habitat Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYE"
                data-title="Work footprint limit"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Work footprint limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work footprint limit"
                  >Work footprint limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFV9"
                data-title="Work Footprint Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Work Footprint Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work Footprint Limit"
                  >Work Footprint Limit</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="impact-tracking">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Habitat impact tracking</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="2 obligations available"
                  >2</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCT"
                data-title="GIS tracking of land disturbance and suitable habitat feature impacts"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="GIS tracking of land disturbance and suitable habitat feature impacts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="GIS tracking of land disturbance and suitable habitat feature impacts"
                  >GIS tracking of land disturbance and suitable habitat feature
                  impacts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH2"
                data-title="GIS tracking of land disturbance and suitable habitat feature impacts"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis"
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="GIS tracking of land disturbance and suitable habitat feature impacts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="GIS tracking of land disturbance and suitable habitat feature impacts"
                  >GIS tracking of land disturbance and suitable habitat feature
                  impacts</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="vegetation">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Vegetation removal</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="14 obligations available"
                  >14</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9P"
                data-title="Biologist presence during vegetation management"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist presence during vegetation management"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist presence during vegetation management"
                  >Biologist presence during vegetation management</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X2"
                data-title="Channel bank mowing limits"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Channel bank mowing limits"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Channel bank mowing limits"
                  >Channel bank mowing limits</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5XA"
                data-title="Emergent vegetation left unmowed"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Emergent vegetation left unmowed"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Emergent vegetation left unmowed"
                  >Emergent vegetation left unmowed</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFS"
                data-title="Emergent Vegetation Mowing Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Emergent Vegetation Mowing Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Emergent Vegetation Mowing Avoidance"
                  >Emergent Vegetation Mowing Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEN"
                data-title="Hand Tool Trimming of Protected Vegetation"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hand Tool Trimming of Protected Vegetation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hand Tool Trimming of Protected Vegetation"
                  >Hand Tool Trimming of Protected Vegetation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X9"
                data-title="Mower blade height"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mower blade height"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Mower blade height"
                  >Mower blade height</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFV8"
                data-title="Mower Blade Height"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="crotch bumble bee|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mower Blade Height"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Mower Blade Height"
                  >Mower Blade Height</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR6Z"
                data-title="Mowing Timing Limit"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing Timing Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Mowing Timing Limit"
                  >Mowing Timing Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WN"
                data-title="Mowing timing limits"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing timing limits"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Mowing timing limits"
                  >Mowing timing limits</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFV"
                data-title="Upland Discing Prohibition"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Upland Discing Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Upland Discing Prohibition"
                  >Upland Discing Prohibition</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFV7"
                data-title="Vegetation Removal Minimization"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee|giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation Removal Minimization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation Removal Minimization"
                  >Vegetation Removal Minimization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N4"
                data-title="Vegetation removal minimized"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation removal minimized"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation removal minimized"
                  >Vegetation removal minimized</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y7"
                data-title="Vegetative Material Disposal"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetative Material Disposal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetative Material Disposal"
                  >Vegetative Material Disposal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG7"
                data-title="Woody Vegetation Removal Window"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="swainson’s hawk"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Woody Vegetation Removal Window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Woody Vegetation Removal Window"
                  >Woody Vegetation Removal Window</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="encounters">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Wildlife encounters and handling</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="12 obligations available"
                  >12</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XB"
                data-title="Care and authorized release of covered species taken into captivity"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Care and authorized release of covered species taken into captivity"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Care and authorized release of covered species taken into captivity"
                  >Care and authorized release of covered species taken into
                  captivity</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
                data-title="Care of covered species injured by covered activities"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Care of covered species injured by covered activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Care of covered species injured by covered activities"
                  >Care of covered species injured by covered activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X1"
                data-title="Care of injured covered species"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|swainson’s hawk"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Care of injured covered species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Care of injured covered species"
                  >Care of injured covered species</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG2"
                data-title="Care of Injured Covered Species"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Care of Injured Covered Species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Care of Injured Covered Species"
                  >Care of Injured Covered Species</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WY"
                data-title="Covered species capture and handling"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered species capture and handling"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered species capture and handling"
                  >Covered species capture and handling</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXM"
                data-title="Covered Species Capture and Handling"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake|swainson’s hawk"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Species Capture and Handling"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Species Capture and Handling"
                  >Covered Species Capture and Handling</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                data-title="Covered Species Encounter Reporting to the Biologist"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="notify"
                hidden=""
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Species Encounter Reporting to the Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Species Encounter Reporting to the Biologist"
                  >Covered Species Encounter Reporting to the Biologist</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WZ"
                data-title="Covered species relocation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered species relocation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered species relocation"
                  >Covered species relocation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEJ"
                data-title="Covered Species Relocation"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Species Relocation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Species Relocation"
                  >Covered Species Relocation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGD"
                data-title="Injured Wildlife Rehabilitation Transport"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="tricolored blackbird"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Injured Wildlife Rehabilitation Transport"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Injured Wildlife Rehabilitation Transport"
                  >Injured Wildlife Rehabilitation Transport</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9T"
                data-title="Monitoring record of covered species capture and relocation"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring record of covered species capture and relocation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring record of covered species capture and relocation"
                  >Monitoring record of covered species capture and relocation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MP"
                data-title="Wildlife encounter response"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wildlife encounter response"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wildlife encounter response"
                  >Wildlife encounter response</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFP"
                data-title="Wildlife Encounter Response"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wildlife Encounter Response"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wildlife Encounter Response"
                  >Wildlife Encounter Response</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                data-title="Work Stoppage on Covered Species Encounter"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
                hidden=""
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Work Stoppage on Covered Species Encounter"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work Stoppage on Covered Species Encounter"
                  >Work Stoppage on Covered Species Encounter</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="entrapment">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Wildlife entrapment</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9J"
                data-title="Biologist inspection and presence when excavations are filled or covered"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist inspection and presence when excavations are filled or covered"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist inspection and presence when excavations are filled or covered"
                  >Biologist inspection and presence when excavations are filled or
                  covered</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y5"
                data-title="Debris Pile Removal"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Debris Pile Removal"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Debris Pile Removal"
                  >Debris Pile Removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9M"
                data-title="Inspection of stored pipes, culverts and similar structures for wildlife"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspection of stored pipes, culverts and similar structures for wildlife"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspection of stored pipes, culverts and similar structures for wildlife"
                  >Inspection of stored pipes, culverts and similar structures for
                  wildlife</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9K"
                data-title="Morning inspection of overnight equipment, materials and excavations for trapped wildlife"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Morning inspection of overnight equipment, materials and excavations for trapped wildlife"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Morning inspection of overnight equipment, materials and excavations for trapped wildlife"
                  >Morning inspection of overnight equipment, materials and excavations
                  for trapped wildlife</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THA"
                data-title="Wildlife check of idle vehicles and equipment before moving"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wildlife check of idle vehicles and equipment before moving"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wildlife check of idle vehicles and equipment before moving"
                  >Wildlife check of idle vehicles and equipment before moving</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MQ"
                data-title="Wildlife in stored materials response"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wildlife in stored materials response"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wildlife in stored materials response"
                  >Wildlife in stored materials response</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="hazards">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Hazards</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="26 obligations available">26</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="fire">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fire prevention</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="3 obligations available"
                  >3</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J34"
                data-title="Fire Suppression Supplies On Site"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fire Suppression Supplies On Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fire Suppression Supplies On Site"
                  >Fire Suppression Supplies On Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYD"
                data-title="Vegetation clearing method for fire prevention"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation clearing method for fire prevention"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation clearing method for fire prevention"
                  >Vegetation clearing method for fire prevention</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J33"
                data-title="Vegetation Clearing Method for Fire Prevention"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation Clearing Method for Fire Prevention"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation Clearing Method for Fire Prevention"
                  >Vegetation Clearing Method for Fire Prevention</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="hazmat">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Hazardous materials</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="8 obligations available"
                  >8</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7D"
                data-title="Concrete Washwater Containment"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Concrete Washwater Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Concrete Washwater Containment"
                  >Concrete Washwater Containment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7A"
                data-title="Contaminated Soil Segregation and Removal"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Contaminated Soil Segregation and Removal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Contaminated Soil Segregation and Removal"
                  >Contaminated Soil Segregation and Removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Q"
                data-title="Database of historic contamination and hazardous materials inspections"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Database of historic contamination and hazardous materials inspections"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Database of historic contamination and hazardous materials inspections"
                  >Database of historic contamination and hazardous materials
                  inspections</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR78"
                data-title="Hazardous Materials Container Labeling"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hazardous Materials Container Labeling"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hazardous Materials Container Labeling"
                  >Hazardous Materials Container Labeling</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR77"
                data-title="Hazardous Materials in Designated Storage"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hazardous Materials in Designated Storage"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hazardous Materials in Designated Storage"
                  >Hazardous Materials in Designated Storage</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR79"
                data-title="Hazardous Materials Storage Duration Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hazardous Materials Storage Duration Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hazardous Materials Storage Duration Limit"
                  >Hazardous Materials Storage Duration Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RD"
                data-title="Material Safety Data Sheets provided to site personnel"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Material Safety Data Sheets provided to site personnel"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Material Safety Data Sheets provided to site personnel"
                  >Material Safety Data Sheets provided to site personnel</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7G"
                data-title="Petroleum Storage Containment"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Petroleum Storage Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Petroleum Storage Containment"
                  >Petroleum Storage Containment</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="pesticides">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Pesticides and rodenticides</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY2"
                data-title="Licensed Pesticide Applicator"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Licensed Pesticide Applicator"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Licensed Pesticide Applicator"
                  >Licensed Pesticide Applicator</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY1"
                data-title="Pesticide Application Wind Limit"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pesticide Application Wind Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pesticide Application Wind Limit"
                  >Pesticide Application Wind Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY3"
                data-title="Pesticide Setback from Aquatic Habitat"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pesticide Setback from Aquatic Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pesticide Setback from Aquatic Habitat"
                  >Pesticide Setback from Aquatic Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY7"
                data-title="Rodenticide and Poison Prohibition"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Rodenticide and Poison Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Rodenticide and Poison Prohibition"
                  >Rodenticide and Poison Prohibition</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="refueling">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Refueling and equipment servicing</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THB"
                data-title="Daily contaminant leak check and maintenance of vehicles and equipment"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily contaminant leak check and maintenance of vehicles and equipment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily contaminant leak check and maintenance of vehicles and equipment"
                  >Daily contaminant leak check and maintenance of vehicles and
                  equipment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9R"
                data-title="Daily inspection of equipment in contact with water for petroleum leaks"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily inspection of equipment in contact with water for petroleum leaks"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily inspection of equipment in contact with water for petroleum leaks"
                  >Daily inspection of equipment in contact with water for petroleum
                  leaks</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7J"
                data-title="Fuel Transfer Containment"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fuel Transfer Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fuel Transfer Containment"
                  >Fuel Transfer Containment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Y"
                data-title="Refueling Practices"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Refueling Practices"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Refueling Practices"
                  >Refueling Practices</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2Z"
                data-title="Refueling Setback from Water"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Refueling Setback from Water"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Refueling Setback from Water"
                  >Refueling Setback from Water</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="spills">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Spill prevention and response</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7C"
                data-title="Equipment Cleaning Before Water Contact"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Equipment Cleaning Before Water Contact"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Equipment Cleaning Before Water Contact"
                  >Equipment Cleaning Before Water Contact</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7H"
                data-title="Oil Absorbent Booms in Place"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Oil Absorbent Booms in Place"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Oil Absorbent Booms in Place"
                  >Oil Absorbent Booms in Place</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7E"
                data-title="Spill Containment and Response"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Spill Containment and Response"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Spill Containment and Response"
                  >Spill Containment and Response</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7B"
                data-title="Spill Kits On Site"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Spill Kits On Site"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Spill Kits On Site"
                  >Spill Kits On Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J30"
                data-title="Spill Response"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Spill Response"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Spill Response"
                  >Spill Response</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7F"
                data-title="Staging Area Spill Containment"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Staging Area Spill Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Staging Area Spill Containment"
                  >Staging Area Spill Containment</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="lighting">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Lighting</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="lighting-habitat">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Lighting near habitat and waters</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3XH28NAN3AB46Q787QJ"
                data-title="Access road location assessment before visual barrier installation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="lighting"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Access road location assessment before visual barrier installation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Access road location assessment before visual barrier installation"
                  >Access road location assessment before visual barrier
                  installation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGA"
                data-title="Intake Lighting Restricted from the River Channel"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="lighting"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Intake Lighting Restricted from the River Channel"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Intake Lighting Restricted from the River Channel"
                  >Intake Lighting Restricted from the River Channel</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG8"
                data-title="Lighting Color Near Habitat"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="lighting"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Lighting Color Near Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Lighting Color Near Habitat"
                  >Lighting Color Near Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY6"
                data-title="Night Lighting Spill Control"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species="california tiger salamander"
                data-f-category="lighting"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Night Lighting Spill Control"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Night Lighting Spill Control"
                  >Night Lighting Spill Control</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="mitigation">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Mitigation and restoration</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="19 obligations available">19</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lao-sub="sub-mitigation-and-restoration-mitigation-funding"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Mitigation funding</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="2 obligations available"
                  >2</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3ECJBAXS25FWDD40W6Y"
                data-title="Funding of interim management of Habitat Management lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Funding of interim management of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Funding of interim management of Habitat Management lands"
                  >Funding of interim management of Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3ED1PK4KH8NVSG8XQJ2"
                data-title="Holding, pooling and disbursement of the Endowment"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Holding, pooling and disbursement of the Endowment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Holding, pooling and disbursement of the Endowment"
                  >Holding, pooling and disbursement of the Endowment</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="mitigation-lands">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Mitigation lands</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="7 obligations available"
                  >7</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY0"
                data-title="Compensatory habitat acreage for each covered species"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Compensatory habitat acreage for each covered species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Compensatory habitat acreage for each covered species"
                  >Compensatory habitat acreage for each covered species</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XC"
                data-title="Fee title to Habitat Management lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fee title to Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fee title to Habitat Management lands"
                  >Fee title to Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXZ"
                data-title="Habitat Management lands stay-ahead ratio"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat Management lands stay-ahead ratio"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat Management lands stay-ahead ratio"
                  >Habitat Management lands stay-ahead ratio</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1E"
                data-title="Integration of the spawning habitat study into shallow spawning habitat design"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="delta smelt|longfin smelt"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Integration of the spawning habitat study into shallow spawning habitat design"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Integration of the spawning habitat study into shallow spawning habitat design"
                  >Integration of the spawning habitat study into shallow spawning habitat
                  design</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY1"
                data-title="Interim management of Habitat Management lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Interim management of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Interim management of Habitat Management lands"
                  >Interim management of Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH9"
                data-title="Long-term monitoring of tidal habitat mitigation sites"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Operations|Maintenance"
                data-f-species="delta smelt|longfin smelt"
                data-f-category="mitigation"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Long-term monitoring of tidal habitat mitigation sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Long-term monitoring of tidal habitat mitigation sites"
                  >Long-term monitoring of tidal habitat mitigation sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                data-title="Ongoing demonstration of mitigation performance during the permit term"
                data-f-commitment="COA 13"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="notify"
                hidden=""
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Ongoing demonstration of mitigation performance during the permit term"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Ongoing demonstration of mitigation performance during the permit term"
                  >Ongoing demonstration of mitigation performance during the permit
                  term</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY2"
                data-title="Perpetual management, maintenance and monitoring of Habitat Management lands"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Perpetual management, maintenance and monitoring of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Perpetual management, maintenance and monitoring of Habitat Management lands"
                  >Perpetual management, maintenance and monitoring of Habitat Management
                  lands</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="restoration">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Restoration</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="10 obligations available"
                  >10</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRW"
                data-title="Erosion protection of restoration soils until vegetation establishes"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Erosion protection of restoration soils until vegetation establishes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Erosion protection of restoration soils until vegetation establishes"
                  >Erosion protection of restoration soils until vegetation
                  establishes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRQ"
                data-title="Invasive plant management and cover limit at restoration sites"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive plant management and cover limit at restoration sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive plant management and cover limit at restoration sites"
                  >Invasive plant management and cover limit at restoration sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH7"
                data-title="Monitoring and maintenance of habitat restoration areas"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring and maintenance of habitat restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring and maintenance of habitat restoration areas"
                  >Monitoring and maintenance of habitat restoration areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGY"
                data-title="Monitoring of restored habitat until success"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species="giant garter snake"
                data-f-category="mitigation"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of restored habitat until success"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of restored habitat until success"
                  >Monitoring of restored habitat until success</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRV"
                data-title="Restoration survivorship and cover success standards with remedial action"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Restoration survivorship and cover success standards with remedial action"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Restoration survivorship and cover success standards with remedial action"
                  >Restoration survivorship and cover success standards with remedial
                  action</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRR"
                data-title="Seed mix composition and sourcing for restoration"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Seed mix composition and sourcing for restoration"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Seed mix composition and sourcing for restoration"
                  >Seed mix composition and sourcing for restoration</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRX"
                data-title="Seeding timing and reseeding at restoration sites"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Seeding timing and reseeding at restoration sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Seeding timing and reseeding at restoration sites"
                  >Seeding timing and reseeding at restoration sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRY"
                data-title="Substrate removal, topsoil salvage and imported fill in restoration areas"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Substrate removal, topsoil salvage and imported fill in restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Substrate removal, topsoil salvage and imported fill in restoration areas"
                  >Substrate removal, topsoil salvage and imported fill in restoration
                  areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRT"
                data-title="Target native vegetation community for each restoration area"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Target native vegetation community for each restoration area"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Target native vegetation community for each restoration area"
                  >Target native vegetation community for each restoration area</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGG"
                data-title="Vehicle Barriers on Restored Shoulders"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species=""
                data-f-category="mitigation"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vehicle Barriers on Restored Shoulders"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vehicle Barriers on Restored Shoulders"
                  >Vehicle Barriers on Restored Shoulders</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="noise">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Noise and vibration</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="12 obligations available">12</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="underwater-sound">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Pile driving and underwater sound</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="12 obligations available"
                  >12</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9W"
                data-title="Continual hydroacoustic monitoring of in-water work"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Continual hydroacoustic monitoring of in-water work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Continual hydroacoustic monitoring of in-water work"
                  >Continual hydroacoustic monitoring of in-water work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MY"
                data-title="Escape route during multiple pile driver operation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Escape route during multiple pile driver operation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Escape route during multiple pile driver operation"
                  >Escape route during multiple pile driver operation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XA"
                data-title="Hours of the day for pile driving"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hours of the day for pile driving"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hours of the day for pile driving"
                  >Hours of the day for pile driving</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MR"
                data-title="Impact pile driving limits"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Impact pile driving limits"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Impact pile driving limits"
                  >Impact pile driving limits</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXR"
                data-title="Pile Driving Hour Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pile Driving Hour Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pile Driving Hour Limit"
                  >Pile Driving Hour Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MV"
                data-title="Pile driving noise attenuation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pile driving noise attenuation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pile driving noise attenuation"
                  >Pile driving noise attenuation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MT"
                data-title="Pile driving soft start"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pile driving soft start"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pile driving soft start"
                  >Pile driving soft start</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MS"
                data-title="Shoulder-season pile driving restrictions"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Shoulder-season pile driving restrictions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Shoulder-season pile driving restrictions"
                  >Shoulder-season pile driving restrictions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9V"
                data-title="Underwater noise disturbance threshold outside the construction work window"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Underwater noise disturbance threshold outside the construction work window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Underwater noise disturbance threshold outside the construction work window"
                  >Underwater noise disturbance threshold outside the construction work
                  window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MW"
                data-title="Underwater noise threshold outside the work window"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Underwater noise threshold outside the work window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Underwater noise threshold outside the work window"
                  >Underwater noise threshold outside the work window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MX"
                data-title="Underwater noise threshold within the work window"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Underwater noise threshold within the work window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Underwater noise threshold within the work window"
                  >Underwater noise threshold within the work window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9X"
                data-title="Watch for distressed or injured fish during pile driving"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="noise"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Watch for distressed or injured fish during pile driving"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Watch for distressed or injured fish during pile driving"
                  >Watch for distressed or injured fish during pile driving</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="people">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">People and qualifications</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="7 obligations available">7</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="biologists">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Designated biologists and monitors</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGC"
                data-title="Approved Wildlife Handler"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
                data-f-species="tricolored blackbird"
                data-f-category="people"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Approved Wildlife Handler"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Approved Wildlife Handler"
                  >Approved Wildlife Handler</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XF"
                data-title="Biological Monitor qualifications and permitted scope"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="people"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological Monitor qualifications and permitted scope"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological Monitor qualifications and permitted scope"
                  >Biological Monitor qualifications and permitted scope</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9D"
                data-title="Biologist or monitor on site during take-risk construction activities"
                data-f-commitment="COA 11|COA 9"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="people"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist or monitor on site during take-risk construction activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist or monitor on site during take-risk construction activities"
                  >Biologist or monitor on site during take-risk construction
                  activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XE"
                data-title="Designated Biologist and Fisheries Biologist qualifications and responsibilities"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="people"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Designated Biologist and Fisheries Biologist qualifications and responsibilities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Designated Biologist and Fisheries Biologist qualifications and responsibilities"
                  >Designated Biologist and Fisheries Biologist qualifications and
                  responsibilities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXW"
                data-title="Handling and relocation restricted to the approved Designated Biologist"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="people"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Handling and relocation restricted to the approved Designated Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Handling and relocation restricted to the approved Designated Biologist"
                  >Handling and relocation restricted to the approved Designated
                  Biologist</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THC"
                data-title="Stop-work authority of biologists and monitors"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="people"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stop-work authority of biologists and monitors"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stop-work authority of biologists and monitors"
                  >Stop-work authority of biologists and monitors</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="specialists">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Qualified specialists</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="1 obligations available"
                  >1</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34HZ9RH8ZC58QF7AHXD"
                data-title="Permitted personnel for studies that may take Covered Fish Species"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="people"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Permitted personnel for studies that may take Covered Fish Species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Permitted personnel for studies that may take Covered Fish Species"
                  >Permitted personnel for studies that may take Covered Fish
                  Species</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="plants-inverts">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Plants and invertebrates</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="16 obligations available">16</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="bees-monarchs">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Bumble bees and monarchs</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="11 obligations available"
                  >11</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MH"
                data-title="Active nest buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Active nest buffer"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Active nest buffer"
                  >Active nest buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH5"
                data-title="Daily visual sweeps for bee flight activity during work"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily visual sweeps for bee flight activity during work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily visual sweeps for bee flight activity during work"
                  >Daily visual sweeps for bee flight activity during work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGF"
                data-title="Flowering Vegetation Removal Timing"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Flowering Vegetation Removal Timing"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Flowering Vegetation Removal Timing"
                  >Flowering Vegetation Removal Timing</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH4"
                data-title="Inspection and supervision of refugia removal during overwintering"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspection and supervision of refugia removal during overwintering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspection and supervision of refugia removal during overwintering"
                  >Inspection and supervision of refugia removal during
                  overwintering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH3"
                data-title="Monitoring of a relocated nest"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of a relocated nest"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of a relocated nest"
                  >Monitoring of a relocated nest</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGE"
                data-title="Overwintering Habitat Disturbance Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Overwintering Habitat Disturbance Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Overwintering Habitat Disturbance Avoidance"
                  >Overwintering Habitat Disturbance Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXX"
                data-title="Relocation as a last resort under the approved protocol"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Relocation as a last resort under the approved protocol"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Relocation as a last resort under the approved protocol"
                  >Relocation as a last resort under the approved protocol</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH6"
                data-title="Search for the active nest when a bee is detected on site"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Search for the active nest when a bee is detected on site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Search for the active nest when a bee is detected on site"
                  >Search for the active nest when a bee is detected on site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MJ"
                data-title="Stop work on covered species discovery"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stop work on covered species discovery"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stop work on covered species discovery"
                  >Stop work on covered species discovery</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y373BPFVREHD3RRNHKKV"
                data-title="Underground refugia buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Underground refugia buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Underground refugia buffer"
                  >Underground refugia buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MG"
                data-title="Vegetation removal clearance near refugia"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation removal clearance near refugia"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation removal clearance near refugia"
                  >Vegetation removal clearance near refugia</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="plants">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Special-status plants</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXV"
                data-title="Avoidance of covered plant removal"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Avoidance of covered plant removal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Avoidance of covered plant removal"
                  >Avoidance of covered plant removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVA"
                data-title="Covered Plant Removal Avoidance"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Plant Removal Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Plant Removal Avoidance"
                  >Covered Plant Removal Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVB"
                data-title="Levee Landside Line Maintenance"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Levee Landside Line Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Levee Landside Line Maintenance"
                  >Levee Landside Line Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRS"
                data-title="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                  >Post-disturbance grading to elevations and hydrology suitable for
                  covered plants</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MK"
                data-title="Special-status plant occurrence buffer"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-inverts"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Special-status plant occurrence buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Special-status plant occurrence buffer"
                  >Special-status plant occurrence buffer</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="site">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Site conduct</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="30 obligations available">30</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="access-routes">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Access routes and parking</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFQ"
                data-title="Equipment Confined to Access Routes"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake|swainson’s hawk"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Equipment Confined to Access Routes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Equipment Confined to Access Routes"
                  >Equipment Confined to Access Routes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N3"
                data-title="Equipment confined to designated access routes"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Equipment confined to designated access routes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Equipment confined to designated access routes"
                  >Equipment confined to designated access routes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2X"
                data-title="Equipment Storage Setback from Aquatic Habitat"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Equipment Storage Setback from Aquatic Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Equipment Storage Setback from Aquatic Habitat"
                  >Equipment Storage Setback from Aquatic Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J2W"
                data-title="Staging Area Confinement"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Staging Area Confinement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Staging Area Confinement"
                  >Staging Area Confinement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGK"
                data-title="Use of Established Access Routes"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Use of Established Access Routes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Use of Established Access Routes"
                  >Use of Established Access Routes</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="agency-access">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Agency and biologist access</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFY"
                data-title="Agency access to construction sites"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Agency access to construction sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Agency access to construction sites"
                  >Agency access to construction sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XD"
                data-title="CDFW access to the Project and mitigation lands"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="CDFW access to the Project and mitigation lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="CDFW access to the Project and mitigation lands"
                  >CDFW access to the Project and mitigation lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THD"
                data-title="Construction-monitoring documentation kept on site"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Construction-monitoring documentation kept on site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Construction-monitoring documentation kept on site"
                  >Construction-monitoring documentation kept on site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFZ"
                data-title="No agreements restricting contractor or biologist communication with CDFW"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No agreements restricting contractor or biologist communication with CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No agreements restricting contractor or biologist communication with CDFW"
                  >No agreements restricting contractor or biologist communication with
                  CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNG0"
                data-title="Unfettered biologist access to the Project Site"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Unfettered biologist access to the Project Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Unfettered biologist access to the Project Site"
                  >Unfettered biologist access to the Project Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RE"
                data-title="Wallet card or fact sheet carried by workers in the Project Area"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wallet card or fact sheet carried by workers in the Project Area"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wallet card or fact sheet carried by workers in the Project Area"
                  >Wallet card or fact sheet carried by workers in the Project Area</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="compliance-inspections">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Compliance inspections and records</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="2 obligations available"
                  >2</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
                data-title="Daily biologist compliance inspection at each construction site and maintenance activity"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily biologist compliance inspection at each construction site and maintenance activity"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily biologist compliance inspection at each construction site and maintenance activity"
                  >Daily biologist compliance inspection at each construction site and
                  maintenance activity</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3QRJRM8HB4RC5N41ANR"
                data-title="Daily written observation and inspection record"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily written observation and inspection record"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily written observation and inspection record"
                  >Daily written observation and inspection record</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="facility-design">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Facility design and siting</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9N"
                data-title="Annual inspection and replacement of bird strike diverters"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual inspection and replacement of bird strike diverters"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual inspection and replacement of bird strike diverters"
                  >Annual inspection and replacement of bird strike diverters</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGH"
                data-title="Bird Strike Diverter Maintenance"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species="swainson’s hawk|tricolored blackbird"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Bird Strike Diverter Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Bird Strike Diverter Maintenance"
                  >Bird Strike Diverter Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1C"
                data-title="Power line and support structure siting away from covered species habitat"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species="swainson’s hawk"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Power line and support structure siting away from covered species habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Power line and support structure siting away from covered species habitat"
                  >Power line and support structure siting away from covered species
                  habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1A"
                data-title="Roadway design passable by covered species"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Roadway design passable by covered species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Roadway design passable by covered species"
                  >Roadway design passable by covered species</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="pets-firearms">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Pets, firearms and campfires</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="1 obligations available"
                  >1</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR74"
                data-title="No Pets, Campfires or Firearms On Site"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No Pets, Campfires or Firearms On Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No Pets, Campfires or Firearms On Site"
                  >No Pets, Campfires or Firearms On Site</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="speed-limits">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Speed limits</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVF"
                data-title="Nighttime Speed Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Nighttime Speed Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Nighttime Speed Limit"
                  >Nighttime Speed Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVH"
                data-title="Paved Road Speed Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Paved Road Speed Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Paved Road Speed Limit"
                  >Paved Road Speed Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKVAVAZP863Q0VNAW3E"
                data-title="Speed Limit Near Habitat"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Speed Limit Near Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Speed Limit Near Habitat"
                  >Speed Limit Near Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XV"
                data-title="Speed Limit Posting"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Speed Limit Posting"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Speed Limit Posting"
                  >Speed Limit Posting</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVG"
                data-title="Unpaved Road Speed Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Unpaved Road Speed Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Unpaved Road Speed Limit"
                  >Unpaved Road Speed Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XW"
                data-title="Wildlife Crossing Signage"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wildlife Crossing Signage"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wildlife Crossing Signage"
                  >Wildlife Crossing Signage</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="trash">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Trash and food waste</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR76"
                data-title="Covered Food Waste Containers"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Food Waste Containers"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Food Waste Containers"
                  >Covered Food Waste Containers</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J35"
                data-title="Trash Abatement"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Trash Abatement"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Trash Abatement"
                  >Trash Abatement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR73"
                data-title="Trash Load Covering"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Trash Load Covering"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Trash Load Covering"
                  >Trash Load Covering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR75"
                data-title="Trash Removal Cadence"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Trash Removal Cadence"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Trash Removal Cadence"
                  >Trash Removal Cadence</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="work-hours">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Work hours</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="2 obligations available"
                  >2</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY5"
                data-title="Daytime Work Hour Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daytime Work Hour Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daytime Work Hour Limit"
                  >Daytime Work Hour Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG4"
                data-title="Night Vehicle Travel Caution"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="site"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Night Vehicle Travel Caution"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Night Vehicle Travel Caution"
                  >Night Vehicle Travel Caution</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="water">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Water</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="43 obligations available">43</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="barges">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Barge and vessel operations</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="7 obligations available"
                  >7</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXX"
                data-title="Barge Mooring and Anchoring"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Barge Mooring and Anchoring"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Barge Mooring and Anchoring"
                  >Barge Mooring and Anchoring</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Z"
                data-title="Biological monitoring of barge operations"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological monitoring of barge operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological monitoring of barge operations"
                  >Biological monitoring of barge operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXW"
                data-title="Propeller Wash Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Propeller Wash Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Propeller Wash Limit"
                  >Propeller Wash Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXY"
                data-title="Vessel Deck Loose Material Containment"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Deck Loose Material Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Deck Loose Material Containment"
                  >Vessel Deck Loose Material Containment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXT"
                data-title="Vessel Navigation Regulation Compliance"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Navigation Regulation Compliance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Navigation Regulation Compliance"
                  >Vessel Navigation Regulation Compliance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXS"
                data-title="Vessel Speed and Wake Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Speed and Wake Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Speed and Wake Limit"
                  >Vessel Speed and Wake Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXV"
                data-title="Vessel Spill Kits Onboard"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Spill Kits Onboard"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Spill Kits Onboard"
                  >Vessel Spill Kits Onboard</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="dewatering">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Dewatering</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGT"
                data-title="Biologist present to salvage snakes during dewatering"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist present to salvage snakes during dewatering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist present to salvage snakes during dewatering"
                  >Biologist present to salvage snakes during dewatering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXZ"
                data-title="Dewatering Pump Intake Screening"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Dewatering Pump Intake Screening"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dewatering Pump Intake Screening"
                  >Dewatering Pump Intake Screening</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X5"
                data-title="Dewatering pump shutdown"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Dewatering pump shutdown"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dewatering pump shutdown"
                  >Dewatering pump shutdown</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MZ"
                data-title="Dewatering rate limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Dewatering rate limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dewatering rate limit"
                  >Dewatering rate limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG0"
                data-title="Dewatering Window"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Dewatering Window"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dewatering Window"
                  >Dewatering Window</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="erosion">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Erosion and sediment control</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="20 obligations available"
                  >20</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX4"
                data-title="Damaged Pavement Repaving"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Damaged Pavement Repaving"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Damaged Pavement Repaving"
                  >Damaged Pavement Repaving</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7S"
                data-title="Emergency Erosion Control Supplies On Site"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Emergency Erosion Control Supplies On Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Emergency Erosion Control Supplies On Site"
                  >Emergency Erosion Control Supplies On Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y4"
                data-title="Erosion Control in Place Before Storms"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Erosion Control in Place Before Storms"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Erosion Control in Place Before Storms"
                  >Erosion Control in Place Before Storms</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THE"
                data-title="Erosion control inspection before, during and after storms"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Erosion control inspection before, during and after storms"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Erosion control inspection before, during and after storms"
                  >Erosion control inspection before, during and after storms</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX7"
                data-title="Erosion Control Material Standard"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Erosion Control Material Standard"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Erosion Control Material Standard"
                  >Erosion Control Material Standard</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7R"
                data-title="Ground Disturbance Minimization"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Ground Disturbance Minimization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Ground Disturbance Minimization"
                  >Ground Disturbance Minimization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y6"
                data-title="Grubbed Material Disposal"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Grubbed Material Disposal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Grubbed Material Disposal"
                  >Grubbed Material Disposal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9S"
                data-title="Inspection of erosion controls before, during and after rain events"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspection of erosion controls before, during and after rain events"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspection of erosion controls before, during and after rain events"
                  >Inspection of erosion controls before, during and after rain
                  events</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9H"
                data-title="Monitoring of the 72-hour weather forecast for each project site"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of the 72-hour weather forecast for each project site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of the 72-hour weather forecast for each project site"
                  >Monitoring of the 72-hour weather forecast for each project site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX6"
                data-title="Monofilament Netting Prohibition"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monofilament Netting Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monofilament Netting Prohibition"
                  >Monofilament Netting Prohibition</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFW"
                data-title="Precipitation Work Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Precipitation Work Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Precipitation Work Limit"
                  >Precipitation Work Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7P"
                data-title="Runoff and Drainage Control"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Runoff and Drainage Control"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Runoff and Drainage Control"
                  >Runoff and Drainage Control</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7M"
                data-title="Sediment Control Measures"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Sediment Control Measures"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Sediment Control Measures"
                  >Sediment Control Measures</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1B"
                data-title="Sizing, siting and protection of spoils and RTM storage sites"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Sizing, siting and protection of spoils and RTM storage sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Sizing, siting and protection of spoils and RTM storage sites"
                  >Sizing, siting and protection of spoils and RTM storage sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR6Y"
                data-title="Spoils Storage Site Siting"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Spoils Storage Site Siting"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Spoils Storage Site Siting"
                  >Spoils Storage Site Siting</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7N"
                data-title="Stockpile Placement and Covering"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stockpile Placement and Covering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stockpile Placement and Covering"
                  >Stockpile Placement and Covering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J36"
                data-title="Storm Onset Work Restriction"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Storm Onset Work Restriction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Storm Onset Work Restriction"
                  >Storm Onset Work Restriction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGX5"
                data-title="Vegetation Retention for Erosion Control"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation Retention for Erosion Control"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation Retention for Erosion Control"
                  >Vegetation Retention for Erosion Control</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7Q"
                data-title="Wind Erosion Control"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Wind Erosion Control"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wind Erosion Control"
                  >Wind Erosion Control</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MN"
                data-title="Work limits during precipitation"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Work limits during precipitation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work limits during precipitation"
                  >Work limits during precipitation</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="in-water-work">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">In-water work</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="3 obligations available"
                  >3</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXN"
                data-title="Daily In-Water Work Limit"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily In-Water Work Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily In-Water Work Limit"
                  >Daily In-Water Work Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXQ"
                data-title="In-Water Work Window During Construction"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="In-Water Work Window During Construction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="In-Water Work Window During Construction"
                  >In-Water Work Window During Construction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXP"
                data-title="In-Water Work Window During Pre-Construction"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="In-Water Work Window During Pre-Construction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="In-Water Work Window During Pre-Construction"
                  >In-Water Work Window During Pre-Construction</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="invasive-species">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Invasive species</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="6 obligations available"
                  >6</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR71"
                data-title="Invasive Animal Removal"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="bullfrogs"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive Animal Removal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive Animal Removal"
                  >Invasive Animal Removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXY"
                data-title="Invasive plant removal methods in restoration areas"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive plant removal methods in restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive plant removal methods in restoration areas"
                  >Invasive plant removal methods in restoration areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Y"
                data-title="Invasive species inspection of in-water equipment before deployment"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive species inspection of in-water equipment before deployment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive species inspection of in-water equipment before deployment"
                  >Invasive species inspection of in-water equipment before
                  deployment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR72"
                data-title="Invasive Species Spread Prevention"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive Species Spread Prevention"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive Species Spread Prevention"
                  >Invasive Species Spread Prevention</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR70"
                data-title="Pathogen Spread Prevention BMPs"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pathogen Spread Prevention BMPs"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pathogen Spread Prevention BMPs"
                  >Pathogen Spread Prevention BMPs</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY8"
                data-title="Predatory Species Introduction Prohibition"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="california tiger salamander"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Predatory Species Introduction Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Predatory Species Introduction Prohibition"
                  >Predatory Species Introduction Prohibition</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="stormwater">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Stormwater and discharges</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="2 obligations available"
                  >2</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7K"
                data-title="Non-Stormwater Discharge Prevention"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Non-Stormwater Discharge Prevention"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Non-Stormwater Discharge Prevention"
                  >Non-Stormwater Discharge Prevention</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y8"
                data-title="Reusable Tunnel Material Drainage Discharge"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Reusable Tunnel Material Drainage Discharge"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Reusable Tunnel Material Drainage Discharge"
                  >Reusable Tunnel Material Drainage Discharge</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lao-cat="operations">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
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
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Water operations</span
          ><span data-lao-count=""
            ><span class="bcn-swcb" aria-label="35 obligations available">35</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lao-sub="biological-criteria">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Biological performance criteria</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCY"
                data-title="Biological criterion on entrainment, survival and abundance reduction"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological criterion on entrainment, survival and abundance reduction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological criterion on entrainment, survival and abundance reduction"
                  >Biological criterion on entrainment, survival and abundance
                  reduction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCZ"
                data-title="Biological criterion on population growth rate"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological criterion on population growth rate"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological criterion on population growth rate"
                  >Biological criterion on population growth rate</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K5EMRXM9ZZ0CA3RZAK"
                data-title="Covered Fish Species Biological Criteria met during operations"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Fish Species Biological Criteria met during operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Fish Species Biological Criteria met during operations"
                  >Covered Fish Species Biological Criteria met during operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCQ"
                data-title="Funding and data support for Covered Fish Species life cycle models"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="delta smelt|longfin smelt|spring-run chinook salmon|winter-run chinook salmon|white sturgeon"
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Funding and data support for Covered Fish Species life cycle models"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Funding and data support for Covered Fish Species life cycle models"
                  >Funding and data support for Covered Fish Species life cycle
                  models</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9G"
                data-title="No entrainment of juvenile salmon at the north Delta intakes"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No entrainment of juvenile salmon at the north Delta intakes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No entrainment of juvenile salmon at the north Delta intakes"
                  >No entrainment of juvenile salmon at the north Delta intakes</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="diversion-limits">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Diversion limits and bypass flows</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="16 obligations available"
                  >16</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PS2"
                data-title="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                data-f-commitment="COA 12"
                data-f-phase="Operations"
                data-f-species="delta smelt"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                  >Additional Suisun Marsh Salinity Control Gate operating days for Delta
                  smelt habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y3"
                data-title="Annual Operating Criteria Schedule"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual Operating Criteria Schedule"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual Operating Criteria Schedule"
                  >Annual Operating Criteria Schedule</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9E"
                data-title="Annual schedule for applying the diversion operating criteria"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual schedule for applying the diversion operating criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual schedule for applying the diversion operating criteria"
                  >Annual schedule for applying the diversion operating criteria</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y0"
                data-title="Bypass Flow Minimum"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Bypass Flow Minimum"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Bypass Flow Minimum"
                  >Bypass Flow Minimum</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFR"
                data-title="Combined south and north Delta SWP diversion daily cap"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Combined south and north Delta SWP diversion daily cap"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Combined south and north Delta SWP diversion daily cap"
                  >Combined south and north Delta SWP diversion daily cap</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XZ"
                data-title="Diversion Flow Fraction Limit"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Diversion Flow Fraction Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Diversion Flow Fraction Limit"
                  >Diversion Flow Fraction Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKGY4YJ4PEN2GRTDYZ2"
                data-title="Flow Reversal Minimization"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Flow Reversal Minimization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Flow Reversal Minimization"
                  >Flow Reversal Minimization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y2"
                data-title="June Diversion Limit"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="June Diversion Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="June Diversion Limit"
                  >June Diversion Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGJ"
                data-title="Larval Distribution Operational Scenario"
                data-f-commitment="COA 12"
                data-f-phase="Operations"
                data-f-species="longfin smelt"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Larval Distribution Operational Scenario"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Larval Distribution Operational Scenario"
                  >Larval Distribution Operational Scenario</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFT"
                data-title="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                  >Limits on shifting exports from south Delta to north Delta during
                  balanced conditions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFS"
                data-title="No additional upstream stored water releases for north Delta diversion"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No additional upstream stored water releases for north Delta diversion"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No additional upstream stored water releases for north Delta diversion"
                  >No additional upstream stored water releases for north Delta
                  diversion</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y1"
                data-title="No Diversion When the Delta Cross Channel Gates Are Open"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No Diversion When the Delta Cross Channel Gates Are Open"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No Diversion When the Delta Cross Channel Gates Are Open"
                  >No Diversion When the Delta Cross Channel Gates Are Open</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFV"
                data-title="No north Delta diversion during balanced conditions at low south Delta exports"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No north Delta diversion during balanced conditions at low south Delta exports"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No north Delta diversion during balanced conditions at low south Delta exports"
                  >No north Delta diversion during balanced conditions at low south Delta
                  exports</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XX"
                data-title="Phase 1 Operations Limit"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Phase 1 Operations Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Phase 1 Operations Limit"
                  >Phase 1 Operations Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XY"
                data-title="Phase 2 Operations Limit"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Phase 2 Operations Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Phase 2 Operations Limit"
                  >Phase 2 Operations Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCX"
                data-title="Salmon presence off-ramp from spring operating criteria"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Salmon presence off-ramp from spring operating criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Salmon presence off-ramp from spring operating criteria"
                  >Salmon presence off-ramp from spring operating criteria</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="fish-screens">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fish screens</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEG"
                data-title="Approach Velocity Maintenance"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Approach Velocity Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Approach Velocity Maintenance"
                  >Approach Velocity Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVD"
                data-title="Diversion Spreading Across Screens"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Diversion Spreading Across Screens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Diversion Spreading Across Screens"
                  >Diversion Spreading Across Screens</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVC"
                data-title="Fish Screen Velocity Criteria"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fish Screen Velocity Criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fish Screen Velocity Criteria"
                  >Fish Screen Velocity Criteria</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVE"
                data-title="Unscreened Diversion Prohibition"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Unscreened Diversion Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Unscreened Diversion Prohibition"
                  >Unscreened Diversion Prohibition</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH1"
                data-title="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                  >Visual inspection of intake fish screens for integrity, cleaning and
                  impingement</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="ops-coordination">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Operations coordination and data</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="5 obligations available"
                  >5</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCV"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447X8"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9F"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447X9"
                data-title="Resolution and implementation of real-time operations decisions"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Resolution and implementation of real-time operations decisions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Resolution and implementation of real-time operations decisions"
                  >Resolution and implementation of real-time operations decisions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCW"
                data-title="Weekly operations risk assessment content"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Weekly operations risk assessment content"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Weekly operations risk assessment content"
                  >Weekly operations risk assessment content</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lao-sub="ops-monitoring">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Operations monitoring and studies</span
              ><span data-lao-count=""
                ><span class="bcn-swcb" aria-label="4 obligations available"
                  >4</span
                ></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCS"
                data-title="Assessment of juvenile salmon route entrainment by reach and junction"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Assessment of juvenile salmon route entrainment by reach and junction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Assessment of juvenile salmon route entrainment by reach and junction"
                  >Assessment of juvenile salmon route entrainment by reach and
                  junction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y323R4AB65RD0MJDTZ9G"
                data-title="Covered fish monitoring across baseline, construction and operations periods"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered fish monitoring across baseline, construction and operations periods"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered fish monitoring across baseline, construction and operations periods"
                  >Covered fish monitoring across baseline, construction and operations
                  periods</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCR"
                data-title="Food web and larval fish entrainment study"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Food web and larval fish entrainment study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Food web and larval fish entrainment study"
                  >Food web and larval fish entrainment study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lao-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJD0"
                data-title="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Operations"
                data-f-species="delta smelt"
                data-f-category="operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                  >Modeling of operations effects on Delta smelt habitat in Suisun Marsh
                  and Grizzly Bay</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
    </div>
  </div>
  <span slot="footer" class="bcn-lao__foot"
    ><span class="bcn-lao__selected">Selected: <span data-lao-n="">0</span></span
    ><span class="bcn-lao__foot-right"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--disabled"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lao-add="true"
          disabled=""
        >
          <span class="esa-button__label">Link to record</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lao-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ></span
  ></esa-side-dialog
>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
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
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
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
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
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
  color: inherit;
  background: 0 0;
  border-color: #0000;
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
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
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
  cursor: pointer;
  list-style: none;
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
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-fwl__to {
  align-items: baseline;
  gap: var(--spacing-300);
  grid-template-columns: 5rem minmax(0, 1fr);
  margin: 0;
  display: grid;
}
.bcn-fwl__to dt {
  color: var(--color-content-default-secondary);
}
.bcn-fwl__to dd {
  color: var(--color-content-default);
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
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
.bcn-component-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.bcn-swcb--sm {
  min-width: 18px;
  padding: 2px var(--spacing-100);
  font-size: var(--font-size-050);
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.bcn-laf__clear[hidden] {
  display: none;
}
.bcn-lao {
  gap: var(--spacing-300);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__nomatch {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-lao__tree {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-lao__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
}
.bcn-lao__subs {
  flex-direction: column;
  display: flex;
}
.bcn-lao__sub + .bcn-lao__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-lao__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-200);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-lao__row::-webkit-details-marker {
  display: none;
}
.bcn-lao__row:hover {
  background: var(--color-background-default);
}
.bcn-lao__row--cat {
  font-weight: 600;
}
.bcn-lao__row--sub {
  padding-left: calc(var(--spacing-200) + 22px);
}
.bcn-lao__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
}
.bcn-lao__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-lao__row .bcn-lao__chevron {
  transform: rotate(90deg);
}
.bcn-lao__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-lao__opts {
  padding: var(--spacing-150) var(--spacing-200) var(--spacing-300)
    calc(var(--spacing-200) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lao__opts:empty {
  display: none;
}
.bcn-lao__opt {
  align-items: flex-start;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lao__opt esa-checkbox {
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-lao__label {
  cursor: pointer;
  user-select: none;
  flex: 1;
  min-width: 0;
  line-height: 1.45;
}
.bcn-lao__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__selected {
  color: var(--color-content-default-secondary);
}
.bcn-lao__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(
    --color-content-utility-danger,
    var(--color-content-brand, #2a7e3b)
  );
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
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
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
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
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-hover`: #00000008 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
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
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
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
- `--typography-label-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
