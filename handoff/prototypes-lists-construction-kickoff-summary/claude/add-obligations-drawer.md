# Add obligations drawer

A right-hand side panel with a searchable checkbox tree of every registry obligation the list does not already hold, with facet filters (Phase, Species, Category, Class).

## Key decisions
- Replaces prod's separate edit page: selection happens in a drawer over the list it changes.
- Facet values that differ only by case (the permit spells species both ways) are keyed lowercased.
- Search marks hits in a light-DOM label beside each esa-checkbox; clicking the label toggles the box.

## Gotchas
- esa-checkbox renders its label in shadow DOM with no slot, so a <mark> cannot reach it; the label must live beside the box.
- Escape inside an open filter dropdown closes the whole side dialog. Known lego behaviour.

## Done when
- Ticking obligations and saving adds them to the tree under their registry branches, with counts updated.

## Markup
```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lao-search"
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
        options='[{"value":"agency","label":"Agency reporting and approvals"},{"value":"air","label":"Air quality"},{"value":"herps","label":"Amphibians and reptiles"},{"value":"birds","label":"Birds"},{"value":"fish","label":"Fish"},{"value":"habitat","label":"Habitat protection"},{"value":"hazards","label":"Hazards"},{"value":"mitigation","label":"Mitigation and restoration"},{"value":"noise","label":"Noise and vibration"},{"value":"people","label":"People and qualifications"},{"value":"plants-inverts","label":"Plants and invertebrates"},{"value":"site","label":"Site conduct"},{"value":"water","label":"Water"},{"value":"operations","label":"Water operations"}]'
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
          ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
        >
      </summary>
      <div class="bcn-lao__subs">
        <details class="bcn-lao__sub" data-lao-sub="sightings-reporting">
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
              ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
              data-title="Biological Monitor daily communication and immediate reports to the Designated Biologist"
              data-class="notify"
              data-description="The Biological Monitor(s) shall receive training and direction from the Designated Biologist(s) or Fisheries Biologist(s) for each task performed, and shall communicate daily with the Designated Biologist(s) or Fisheries Biologist(s) and immediately report any occurrence of Covered Species within the Project construction site, as well as any apparent non-compliance with any provision of this ITP."
              data-cat-id="agency"
              data-cat-name="Agency reporting and approvals"
              data-sub-id="sightings-reporting"
              data-sub-name="Species sightings and CNDDB reporting"
              data-reqs='[{"id":"req_01M2ESMDCKEBRF744X854M9ESF","code":"COA 9.2.2","name":"Report Daily to Designated Biologist and Flag Non-Compliance"}]'
              data-f-commitment="COA 9"
              data-f-phase="Construction"
              data-f-species=""
              data-f-category="agency"
              data-f-class="notify"
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
              ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFQ"
              data-title="Carcass salvage, labeling and storage for the wildlife health lab"
              data-class="adhere"
              data-description="The carcass shall be photographed, salvaged, and placed in a labeled, clean plastic, resealable bag or vial and stored in a freezer by the Designated Biologist(s) for shipment to CDFW Wildlife Health Lab."
              data-cat-id="agency"
              data-cat-name="Agency reporting and approvals"
              data-sub-id="take-reporting"
              data-sub-name="Take and injury reporting"
              data-reqs='[{"id":"req_01M2ESMS0VRXQZQ44TNN5TJ4N1","code":"COA 11.103","name":"Salvage and Label CBB Carcass for CDFW Lab"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC4C","code":"COA 11.55","name":"Implement Dust Control to Preserve GGS Monitoring Visibility"},{"id":"req_01M2ESMPZRHNZ4CD80HJSP67JP","code":"COA 11.69","name":"Apply Dust Control to Maintain Visibility for SWHA Monitoring"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall follow earthmoving equipment to look for CTS during initial site grading. All ruts and holes near root structures, foundations, abutments, etc."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMAY0PGV8V7Z8ACMASBJ","code":"COA 11.42","name":"Monitor Initial Grading and Excavation for CTS"},{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5V","code":"COA 11.48","name":"Monitor CTS Hiding Spots Onsite During Clearance Work"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QK","code":"COA 11.62.1","name":"Monitor for GGS On Site During Ground-Disturbing Activities"},{"id":"req_01M2ESMPBRY7DF2GSN7K01R43J","code":"COA 11.63","name":"Monitor Clearing Site Daily for Emerging and Sheltering GGS"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall be present during selection of the preconstruction activity sites, construction sites, and maintenance areas, ingress and egress to these sites, and during set-up activities to guide workers to avoid visible burrows, cracks, crevices, vegetation, or other suitable habitat features until avoidance routes are clearly established."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMM94TH79BEBAWHWR9EE0","code":"COA 11.41","name":"Station Biologist During Site Selection, Access and Set-Up"},{"id":"req_01M2ESMNPC70G96ND7GGB3PC4B","code":"COA 11.55","name":"Biologist Guides Project Access and Work Around ESAs"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P5","code":"COA 11.65","name":"Guide Site Access and Conduct Daily Burrow Surveys in Upland Habitat"}]'
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
              data-class="monitor"
              data-description="38)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYR","code":"COA 11.13","name":"Survey Site for Clearance Before Resuming After Rain"}]'
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
              data-class="adhere"
              data-description="Permittee shall demarcate a no-activity buffer of at least 300 feet around the suitable aquatic breeding habitat and avoid Covered Activities within the suitable aquatic breeding habitat and no-activity buffer."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMM7D459TJFVVKTJEAM9C","code":"COA 11.40","name":"Demarcate 300-Foot No-Activity Buffer Around CTS Breeding Habitat"}]'
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
              data-class="adhere"
              data-description=", grading or excavation areas) or their location poses a risk of direct harm to CTS individuals."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMVTFGK3FTZ4Y74GEMF3","code":"COA 11.49","name":"Avoid Disturbing Burrows Outside Direct-Disturbance Areas"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWE","code":"COA 11.62","name":"Avoid or Hand-Excavate Burrows During Barrier Installation"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species="california tiger salamander|giant garter snake"
              data-f-category="herps"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Burrow avoidance"></esa-checkbox
              ><span class="bcn-lao__label" data-opt-label="" data-text="Burrow avoidance"
                >Burrow avoidance</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFR"
              data-title="Burrow Avoidance"
              data-class="adhere"
              data-description=", grading areas, excavation areas) or their location poses a risk of direct harm to GGS. Permittee shall not destroy or modify burrows or exclude GGS from burrows that are beyond the direct footprint of ground disturbance."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMNSXG45H0H0SE68K0EPJ","code":"COA 11.56","name":"Avoid Disturbing Known or Potentially Occupied Burrows"},{"id":"req_01M2ESMP9YA0W4A4Q9V4P970E3","code":"COA 11.62.2","name":"Avoid Disturbing Known or Potentially Occupied Burrows"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species="giant garter snake"
              data-f-category="herps"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Burrow Avoidance"></esa-checkbox
              ><span class="bcn-lao__label" data-opt-label="" data-text="Burrow Avoidance"
                >Burrow Avoidance</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGQ"
              data-title="Burrow monitoring when night lighting spills toward habitat"
              data-class="monitor"
              data-description="39) to ensure CTS movement is not inhibited by artificial lighting."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMRAVC9JDF9WNS47SGKH","code":"COA 11.47","name":"Survey Burrows and Halt Work on Night-Lighting Spillover"}]'
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
              data-class="adhere"
              data-description="No Project personnel shall capture and/or handle CTS except the Designated Biologist(s)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMN6EK7YFDGGENE53D2NC","code":"COA 11.51.2","name":"Release Relocated CTS Into Suitable Burrows One at a Time"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species="california tiger salamander"
              data-f-category="herps"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Burrow release protocol"></esa-checkbox
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
              data-class="monitor"
              data-description="15)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMG9385GQ6TSP4A11WCN","code":"COA 11.43","name":"Conduct Clearance Survey Before Reinitiating Activities After Barrier Repair"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWD","code":"COA 11.62","name":"Survey and Re-Search the Barrier Line After Repair"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall conduct daily surveys prior to the start of Covered Activities each day to check for burrows within the work site."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMM95JM93STV0ZS9872BP","code":"COA 11.41","name":"Conduct Daily Preconstruction Burrow Surveys"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P5","code":"COA 11.65","name":"Guide Site Access and Conduct Daily Burrow Surveys in Upland Habitat"}]'
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
              data-class="adhere"
              data-description="44)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMM7EFFY55TCP0J01VJ85","code":"COA 11.40","name":"Restrict Unavoidable Breeding-Habitat Work to the Dry Season"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit ground-disturbing Covered Activities in suitable upland habitat and aquatic habitat involving construction and heavy equipment use (such as excavation, road construction, grading, trenching, pipe and culvert installation) to the period of July 15 to October 15 of each year (dry season)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMJ1ZJBJE406FTY5NWYV","code":"COA 11.44","name":"Limit Ground-Disturbing Work to CTS Dry-Season Window"},{"id":"req_01M2ESMNXF8Y5A3Q47BDSYDRSE","code":"COA 11.58","name":"Confine Ground-Disturbing Work to the GGS Active Period"}]'
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
              data-class="adhere"
              data-description="Permittee shall avoid damage to burrows to the maximum extent possible during installation of the exclusion fencing."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWE","code":"COA 11.62","name":"Avoid or Hand-Excavate Burrows During Barrier Installation"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall survey the area each morning following watering. 51)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMCQ2FHMYR575BA568WV","code":"COA 11.42.1","name":"Conduct Morning Survey and Relocate CTS After Burrow Watering"}]'
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
              data-class="adhere"
              data-description="Mowing shall occur in rows in a pattern that would not concentrate animals in the center of the construction site and shall only occur during the day in dry conditions (no rain within the past 24 hours) when the Designated Biologist(s) and/or Biological Monitor(s) determines CTS is unlikely to be aboveground."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAB","code":"COA 11.42.2","name":"Mow in a Non-Concentrating Pattern During Dry Daytime Conditions"}]'
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
              data-class="adhere"
              data-description="Permittee shall mow in rows and not in a circular pattern that would concentrate animals in the center of a construction site."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9T","code":"COA 11.57","name":"Mow in Rows Directed Away From Concentrating Animals"}]'
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
              data-class="adhere"
              data-description="Covered Activities subsequent to construction shall not occur at night for non-emergency work in CTS habitat at any time of the year unless otherwise authorized by CDFW."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMJ42JSX41WJGE87W85HX","code":"COA 11.7","name":"Prohibit Non-Emergency Night Work in CTS Habitat After Construction"}]'
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
              data-class="adhere"
              data-description="Project personnel shall inform the Designated Biologist(s) and/or Biological Monitor(s) if they encounter GGS, or any snake resembling GGS, within or near the Project construction site during all phases of Covered Activities."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMNPDV7QXCBYW8DDTXVYZ","code":"COA 11.55","name":"Report GGS Encounters and Establish Refuge No-Activity Buffer"}]'
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
              data-class="adhere"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall be on-site during selection of the field investigation site, ingress and egress, and during set-up activities to guide Project personnel to avoid visible burrows until access routes are clearly established."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P5","code":"COA 11.65","name":"Guide Site Access and Conduct Daily Burrow Surveys in Upland Habitat"}]'
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
              data-class="adhere"
              data-description="Permittee shall prohibit Covered Activities within a 75-foot radius of that refuge (no-activity buffer) until the Designated Biologist(s) is contacted and on-site."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMM3X13N0WRNT88R8CVN6","code":"COA 11.39","name":"Maintain No-Activity Buffer Around CTS Refuge Sites"},{"id":"req_01M2ESMM95JM93STV0ZS9872BN","code":"COA 11.41","name":"Flag Occupied Burrows With 75-Foot No-Activity Buffers"},{"id":"req_01M2ESMMXNW06J2K6JTX9DFAKJ","code":"COA 11.49.1","name":"Establish 75-Foot No-Activity Buffer Around Flagged Burrows"},{"id":"req_01M2ESMP86ZDJDW04YY8YTW5QJ","code":"COA 11.62.1","name":"Establish and Respect No-Activity Buffers Around Flagged Burrows"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) with assistance (if needed) from Biological Monitor(s) shall be onsite during initial ground disturbing activities to assess the Project construction site each morning before construction work begins."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMPBRY7DF2GSN7K01R43J","code":"COA 11.63","name":"Monitor Clearing Site Daily for Emerging and Sheltering GGS"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall conduct CTS surveys prior to initiation of any Covered Activity within a Project construction site and regularly throughout the workday when Covered Activities are occurring within CTS habitat."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMT2ZR1740F4HF6BZW5W","code":"COA 11.48","name":"Conduct CTS Surveys Before and During Each Workday"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall survey each Project site before construction begins on each day any rain is forecasted."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMMH0D7BAQ0QJ0GX0MM7","code":"COA 11.45","name":"Survey Project Site Before Work on Rain-Forecast Days"}]'
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
              data-class="monitor"
              data-description="CTS active season is defined as the period of time during which CTS are aboveground."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="amphibians"
              data-sub-name="Amphibians"
              data-reqs='[{"id":"req_01M2ESMMPK3754MVG37HGJJK0X","code":"COA 11.46","name":"Assess CTS Active Season Yearly at Each Construction Site"}]'
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
              data-class="adhere"
              data-description="All construction personnel shall avoid ESAs."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X07","code":"COA 11.54","name":"Avoid Environmentally Sensitive Areas During Construction"}]'
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
              data-class="adhere"
              data-description="Any equipment shall be operated from the bank top and Permittee shall excavate from only one side of the canal during a given year so emergent vegetation and bank side cover is left in place."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMP2VS2KH28B9FRJ498KC","code":"COA 11.60","name":"Operate Equipment from Bank Top and Limit Excavation to One Side Per Year"}]'
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
              data-class="adhere"
              data-description=", within three to six feet of) canals."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMP2VS2KH28B9FRJ498K9","code":"COA 11.60","name":"Leave Canal Banks Undisturbed"},{"id":"req_01M2ESMP2WVD08ZN1ZQFKCJS60","code":"COA 11.60","name":"Retain Vegetation on Levees and Canal Sides"}]'
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
              data-class="adhere"
              data-description="Any equipment shall be operated from the bank top and Permittee shall excavate from only one side of the canal during a given year so emergent vegetation and bank side cover is left in place."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMP2VS2KH28B9FRJ498KC","code":"COA 11.60","name":"Operate Equipment from Bank Top and Limit Excavation to One Side Per Year"}]'
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
              data-class="adhere"
              data-description="Permittee shall haul any dredged or excavated material off site or place it in areas lacking rodent burrows, riprap, or other materials that might provide dormant period cover for GGS."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMP2VS2KH28B9FRJ498KD","code":"COA 11.60","name":"Haul or Place Dredged Material Away from GGS Cover Features"},{"id":"req_01M2ESMP2VS2KH28B9FRJ498KB","code":"COA 11.60","name":"Place Canal-Clearing Spoils Away from Bank Tops"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall inspect the stakes and high visibility poly wire before the start of each workday during ground disturbance activities"
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMNMMW9SG3Q6Z79Q52X08","code":"COA 11.54","name":"Inspect ESA Stakes and Poly Wire Before Each Workday"}]'
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
              data-class="adhere"
              data-description="55). Permittee shall not conduct these Covered Activities in suitable GGS aquatic habitat."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMPFFFN6XA2AYSQDTQAAE","code":"COA 11.65","name":"Delineate and Avoid Suitable Aquatic GGS Habitat"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species="giant garter snake"
              data-f-category="herps"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="ESA demarcation observed"></esa-checkbox
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall delineate suitable upland habitat with flagging or other high-visible markers within the Covered Activity sites."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMPFMQ9ZF5A9KB9VN8CD6","code":"COA 11.65","name":"Delineate Suitable Upland GGS Habitat at Work Sites"}]'
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
              data-class="adhere"
              data-description="Permittee shall conduct all in-channel Covered Activities only between October 2 and April 30 (GGS inactive period). 38) have occurred and absence of overwintering GGS has been confirmed by the Designated Biologist(s)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMP2T4KRS4836CF7YNNNX","code":"COA 11.60","name":"Confine In-Channel Work to the Inactive-Season Window and Scope"}]'
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
              data-class="monitor"
              data-description="2) to determine whether the burrows are occupied by GGS."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMNSXG45H0H0SE68K0EPG","code":"COA 11.56","name":"Investigate Burrows for GGS Occupancy"}]'
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
              data-class="adhere"
              data-description="Permittee shall ensure maintenance activities do not include ground disturbance activity that would crush burrows or entomb GGS within a burrow."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMPFRRK7FBN8PGN0GP06G","code":"COA 11.65","name":"Perform Maintenance Without Crushing or Entombing GGS in Burrows"}]'
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
              data-class="monitor"
              data-description="The survey shall be repeated prior to reinitiating Covered Activities if a lapse in Covered Activities of 14 calendar days or greater occurs at the Project construction site during the aestivation period (October 2 to April 30) or if the lapse in Covered Activities is more than 12 hours during the active season (May 1 to October 1)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMNSXG45H0H0SE68K0EPF","code":"COA 11.56","name":"Resurvey After a Lapse in Covered Activities"}]'
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
              data-class="adhere"
              data-description="54)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMNPC70G96ND7GGB3PC49","code":"COA 11.55","name":"Keep Staging, Parking and Stockpiles Away from Suitable Habitat"},{"id":"req_01M2ESMPZRHNZ4CD80HJSP67JN","code":"COA 11.69","name":"Confine Parking, Staging and Surface-Disturbing Activities to the Project Site"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall delineate suitable nesting habitat with flagging or other highly visible markers within each Project preconstruction site(s)."
              data-cat-id="herps"
              data-cat-name="Amphibians and reptiles"
              data-sub-id="ggs"
              data-sub-name="Giant garter snake"
              data-reqs='[{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F1","code":"COA 11.78","name":"Delineate and Avoid SWHA Nesting Habitat at Preconstruction Sites"}]'
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
              data-class="adhere"
              data-description="If active nests are found within the Project construction sites or within 1,300 feet of any Covered Activity and cannot be avoided, Permittee shall ensure that Covered Activities do not occur within a 1,300-foot diameter no-activity buffer zone surrounding the colony and associated suitable habitat during the breeding season (March 1 – September 15), until the young have fledged, or when approved by CDFW."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQZHR8EPFQSHAHGWANV8","code":"COA 11.85","name":"Maintain a 1,300-Foot No-Activity Buffer Around an Unavoidable Active TRBL Colony"},{"id":"req_01M2ESMQZJE9FTSQBMYW339TT8","code":"COA 11.85","name":"Reduce the TRBL Colony Buffer to 300 Feet With CDFW Approval Where Site Conditions Qualify"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CP","code":"COA 11.86","name":"Prohibit Covered Activities Within the Nest Disturbance Buffer"},{"id":"req_01M2ESMR9QBX9TQPQ3P8MZR8Z5","code":"COA 11.90","name":"Restrict Activities Outside Delineated Habitat/Buffers"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) shall: (1) Stop Covered Activities until additional protective measures are implemented; (2) Continue monitoring and ensure additional protective measures remain in place until the Designated Biologist(s) in coordination with CDFW determines SWHA behavior has normalized; (3) Determine if additional protective measures are ineffective and stop Covered Activities until the additional protective measures are modified; and (4) Continue monitoring until it has been…"
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQABV7ZXHTW7CASVJ9Q7","code":"COA 11.75","name":"Continue Monitoring Until CDFW Confirms Normalized SWHA Behavior"}]'
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
              data-class="adhere"
              data-description="Permittee shall not designate any employee break, rest, or meeting areas in proximity to active SWHA nests."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ8KBKTZ8CC3BFJMZ4XG","code":"COA 11.74","name":"Keep Break Areas and Idle Equipment Out of Nest Sightlines"}]'
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
              data-class="adhere"
              data-description="Permittee shall not designate any employee break, rest, or meeting areas adjacent to or within the no-activity nest and roosting buffers."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR7RQNJ6YETZAC5DFVV2","code":"COA 11.89","name":"Prohibit Employee Break, Rest, or Meeting Areas Within or Adjacent to No-Activity Buffers"}]'
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
              data-class="monitor"
              data-description="If nesting TRBL is present within the Project construction site or within 1,300 feet of any Project- related Covered Activity, the Designated Biologist(s) with assistance (if needed) from the Biological Monitor(s) shall monitor the colony daily for at least six hours per day throughout the nesting season to verify the Covered Activities are not disrupting the colony and to determine when the young have fledged, unless otherwise approved by CDFW."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR1RKWTNP0T22SEAXRFG","code":"COA 11.86","name":"Monitor an Active TRBL Colony Daily Through the Nesting Season"}]'
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
              data-class="monitor"
              data-description="38) to verify that Covered Activities are not disrupting roosting TRBL."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR5RJFQKVNDVNS5EKMCS","code":"COA 11.88","name":"Monitor Occupied Roost Sites Within the 300-Foot Buffer Daily"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit Covered Activities to between 30 minutes after sunrise and 30 minutes before sunset."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ6VJGF0K1SVCFFN2SDM","code":"COA 11.73","name":"Limit Work to Daylight Hours Near Occupied SWHA Nest"},{"id":"req_01M2ESMQPP346JX87DN02K8RWW","code":"COA 11.82","name":"Restrict Work Hours Near Occupied TRBL Colony or Roost"}]'
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
              data-class="adhere"
              data-description="To the maximum extent feasible, Permittee shall coordinate with the Designated Biologist(s) and CDFW to time the loudest or otherwise most disruptive Covered Activities outside periods where the TRBL, their nests/colony, their eggs, or their young are most vulnerable to disturbance."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQPQTBPN9DN4Z6YVY3D9","code":"COA 11.82","name":"Coordinate Timing of Disruptive Activities Away From Vulnerable TRBL Periods"}]'
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
              data-class="monitor"
              data-description="Where an occupied nest tree occurs between 325 and 650 feet of Covered Activities, the Designated Biologist(s) shall observe the nest for at least two hours per day during Covered Activities to ensure the SWHA are engaged in normal nesting behavior."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ6VJGF0K1SVCFFN2SDK","code":"COA 11.73","name":"Monitor SWHA Nest Status at Tiered Distances During Construction"},{"id":"req_01M2ESMQACBHVMRN8J6HBT74MM","code":"COA 11.75","name":"Extend Nest Monitoring to Newly Discovered SWHA Nests"}]'
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
              data-class="adhere"
              data-description="Permittee shall not designate any employee break, rest, or meeting areas in proximity to active SWHA nests."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ8KBKTZ8CC3BFJMZ4XG","code":"COA 11.74","name":"Keep Break Areas and Idle Equipment Out of Nest Sightlines"}]'
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
              data-class="adhere"
              data-description="Permittee shall not use helicopters to string SCADA or transmission lines within 200 horizontal feet or 150 vertical feet of breeding colonies or occupied roost sites unless the helicopter is small enough to only cause a down draft of 15 to 18 miles per hour at up to 150 feet."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMRBEZBF5C77H3XMSSWQK","code":"COA 11.91","name":"Maintain Helicopter Distance/Time Buffers Near TRBL Sites"}]'
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
              data-class="adhere"
              data-description="Helicopters shall not be used between 45 minutes before sunset to 45 minutes after sunrise."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMRBEZBF5C77H3XMSSWQM","code":"COA 11.91","name":"Restrict Helicopter Use to Daylight Hours"}]'
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
              data-class="adhere"
              data-description="5 miles of an occupied nest tree."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQHCTEMZ0TEGRQKFWZFT","code":"COA 11.79","name":"Prohibit Helicopter Line Stringing Near Occupied SWHA Nests"}]'
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
              data-class="adhere"
              data-description=", fertilizing, irrigation) to ensure successful tree establishment. Permittee shall irrigate trees for a minimum of five years after planting, and then gradually wean the trees off the irrigation during a period of approximately two years."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMV5WNA9H2H2GRY0Y20RC","code":"COA 12.5.3","name":"Irrigate and Maintain Replacement Nest Trees"}]'
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
              data-class="adhere"
              data-description="Permittee shall consider roosting habitat occupied by large mixed blackbird flocks to be occupied by TRBL if the Designated Biologist(s) cannot clearly identify TRBL absence within the flock."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7E","code":"COA 11.84.2","name":"Presume TRBL Occupancy for Unclearly Identified Mixed Blackbird Flocks"}]'
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
              data-class="monitor"
              data-description="Permittee shall monitor and maintain all replacement trees (mature trees and saplings) for a period of ten years to ensure survival and appropriate growth and development."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMV5V36QAS8SYKGYQNNTW","code":"COA 12.5.3","name":"Monitor Replacement Nest Trees for Ten Years and Beyond"}]'
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
              data-class="adhere"
              data-description="Permittee shall avoid removal or trimming of known or suitable nest trees, to the extent practicable, during SCADA and transmission line stringing and reconductoring activities and during power and pole placement."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQHDSWYB94XYC24TQNXM","code":"COA 11.79","name":"Avoid Nest Tree Removal During SCADA and Transmission Line Work"}]'
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
              data-class="adhere"
              data-description="Permittee shall avoid removal of known SWHA nest trees and suitable nest trees to the maximum extent practicable."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQC3YF21DBHG0A648TP7","code":"COA 11.76","name":"Avoid Removal of Known and Suitable SWHA Nest Trees"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit Covered Activities to occur only outside the SWHA nesting season (February 28 – September 15), to the extent practicable."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ1HMCQ78A08SGPE7Z0F","code":"COA 11.70","name":"Restrict Work Near SWHA Nest Trees to Outside Nesting Season"},{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F2","code":"COA 11.78","name":"Schedule Preconstruction Field Investigations Outside Nesting Season"}]'
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
              data-class="adhere"
              data-description="70)."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQ8J2FGTN88B9YQHXWNB","code":"COA 11.74","name":"Prohibit Physical Contact With Occupied SWHA Nest Trees"}]'
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
              data-class="adhere"
              data-description="87)."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR7RQNJ6YETZAC5DFVV1","code":"COA 11.89","name":"Prohibit Personnel From Exiting Vehicles Inside an Occupied No-Activity Buffer"}]'
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
              data-class="adhere"
              data-description="Permittee shall prohibit physical contact with a breeding colony during the breeding season (March 1 – September 15) from the time of nest site selection until after the chicks have fledged or colony is no longer active, as determined by a Designated Biologist(s) and approved by CDFW."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR7QEP5R4JSR21MA31X4","code":"COA 11.89","name":"Prohibit Physical Contact With Active Breeding Colonies and Occupied Roost Sites"}]'
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
              data-class="adhere"
              data-description="Permittee shall not remove any occupied nest tree during nesting season, until the last young have left the nest, as verified by the Designated Biologist(s)."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQC449CBWAQ4AXX5Q7TC","code":"COA 11.76","name":"Prohibit Removal of Occupied SWHA Nest Trees Until Fledging"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXJ","code":"COA 11.79","name":"Prohibit Occupied Nest Tree Removal for Transmission Line Work"}]'
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
              data-class="monitor"
              data-description="38), to determine whether TRBL later occupies the roost site."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQXS2JVGD9Q9XY1WQM7F","code":"COA 11.84.2","name":"Check Previously Unoccupied Roost Sites for Later TRBL Occupancy"}]'
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
              data-class="adhere"
              data-description="5 miles away from any occupied nest tree, unless otherwise approved by CDFW in writing."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F4","code":"COA 11.78","name":"Keep Field Investigations 0.5 Miles From Occupied SWHA Nests"}]'
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
              data-class="adhere"
              data-description="If occupied roosting habitat is found within the Project construction site, and the occupied roosting habitat cannot be avoided, Permittee shall not conduct Covered Activities within a 300-foot no-activity buffer surrounding the roost site (no-activity buffer)."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR3TEAHJ2FGX74G0945J","code":"COA 11.87","name":"Maintain a 300-Foot No-Activity Buffer Around an Unavoidable Occupied TRBL Roost"},{"id":"req_01M2ESMR3TEAHJ2FGX74G0945M","code":"COA 11.87","name":"Modify the TRBL Roost Buffer Where Site Conditions Qualify, as CDFW Approves"},{"id":"req_01M2ESMR5SS20S0A1492D7DQY8","code":"COA 11.88","name":"Prohibit Covered Activities Within the Roosting Site"},{"id":"req_01M2ESMR9QBX9TQPQ3P8MZR8Z5","code":"COA 11.90","name":"Restrict Activities Outside Delineated Habitat/Buffers"}]'
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
              data-class="adhere"
              data-description="Success shall be measured as an 80% survival rate of mature trees and 80% survival rate of saplings at five and ten years after planting."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMV5WNA9H2H2GRY0Y20RD","code":"COA 12.5.3","name":"Meet Replacement Nest Tree Survival Standard"}]'
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
              data-class="adhere"
              data-description="If TRBL colonizes habitat adjacent to Covered Activities after they have been initiated, Permittee shall reduce the disturbance through establishment of no-activity buffers or sound curtains as determined in consultation with CDFW."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMQZJE9FTSQBMYW339TT9","code":"COA 11.85","name":"Reduce Disturbance When TRBL Colonizes Habitat Adjacent to Ongoing Activities"}]'
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
              data-class="adhere"
              data-description="5 miles apart. 5 miles from any existing occupied nest tree."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMV2AYG1M0RCCZPA7FTW6","code":"COA 12.5.1","name":"Site Replacement Nest Trees per Spacing Criteria"}]'
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
              data-class="adhere"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall continue monitoring and ensure additional protective measures remain in place for the duration of the Covered Activities or until it is determined that TRBL behavior has normalized, as approved by CDFW."
              data-cat-id="birds"
              data-cat-name="Birds"
              data-sub-id="nesting-birds"
              data-sub-name="Nesting birds"
              data-reqs='[{"id":"req_01M2ESMR1SS863DF2A3NHG04CS","code":"COA 11.86","name":"Maintain and Adjust Protective Measures Until TRBL Behavior Normalizes"},{"id":"req_01M2ESMR1SS863DF2A3NHG04CQ","code":"COA 11.86","name":"Stop Work When the Biologist Observes Colony Disruption and Agitated Behavior"},{"id":"req_01M2ESMR5SS20S0A1492D7DQY9","code":"COA 11.88","name":"Implement Additional Protective Measures When Roosting TRBL Show Agitated Behavior"}]'
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
              ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG3"
              data-title="Dead Specimen Preservation"
              data-class="adhere"
              data-description="If the GGS is found recently deceased (as evidenced by lack of odor or decomposition), the carcass shall be immediately bagged, labeled, and preserved in a freezer."
              data-cat-id="fish"
              data-cat-name="Fish"
              data-sub-id="fish"
              data-sub-name="Fish rescue and salvage"
              data-reqs='[{"id":"req_01M2ESMPW6XCT9HBQQBPJGZ894","code":"COA 11.68.3","name":"Bag, Label and Freeze a Recently Deceased GGS Carcass"}]'
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
              data-class="monitor"
              data-description="35)."
              data-cat-id="fish"
              data-cat-name="Fish"
              data-sub-id="fish"
              data-sub-name="Fish rescue and salvage"
              data-reqs='[{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPB","code":"COA 11.37","name":"Station Fisheries Biologist Onsite to Rescue Fish During Dewatering"}]'
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
              data-class="adhere"
              data-description="The Designated Fisheries Biologist(s) shall place dead Covered Fish Species in sealed plastic bags with labels indicating species, location, date, and time of collection, store them on ice, freeze as soon as possible, and provide the frozen specimens to CDFW."
              data-cat-id="fish"
              data-cat-name="Fish"
              data-sub-id="fish"
              data-sub-name="Fish rescue and salvage"
              data-reqs='[{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXQ","code":"COA 11.35","name":"Preserve and Deliver Dead Covered Fish Specimens to CDFW"}]'
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
              data-class="adhere"
              data-description="5-inch portion of the tail tip shall be removed and placed in a labeled tissue tube with 95% ethanol. The carcass shall be immediately bagged, labeled, and preserved in a freezer."
              data-cat-id="fish"
              data-cat-name="Fish"
              data-sub-id="fish"
              data-sub-name="Fish rescue and salvage"
              data-reqs='[{"id":"req_01M2ESMNF9RQGB3NF81P111Q8H","code":"COA 11.52.3","name":"Preserve and Label Tissue Sample and Carcass of Deceased CTS"}]'
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
          ><span class="bcn-swcb" aria-label="54 obligations available">54</span></span
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall inspect the area prior to and during installation of exclusion fencing, including during trenching, vehicular access, erecting fencing material, installing posts, and any other activity requiring vehicle or foot traffic in suitable habitat."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG9385GQ6TSP4A11WCK","code":"COA 11.43","name":"Monitor Exclusion Barrier Installation and Ongoing Integrity"},{"id":"req_01M2ESMMVVR3CR1BGCKGCBA0DH","code":"COA 11.49","name":"Monitor Exclusion Fencing Installation and Block Extending Burrows"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWA","code":"COA 11.62","name":"Monitor Biologically During Barrier Installation"}]'
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
              data-class="adhere"
              data-description="The barrier shall consist of taut wildlife exclusion fencing supported by stakes at least 24 inches tall above the soil surface and buried to a depth of 6-12 inches below the soil surface; and shall be constructed with a top climber barrier lip so that CTS cannot scale and go over the barrier into the Project construction site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG8S1HWB1AND39KY4G9","code":"COA 11.43","name":"Build Exclusion Barrier to Required Fencing Specifications"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWH","code":"COA 11.62","name":"Construct the Barrier to Specification"}]'
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
              data-class="adhere"
              data-description="Permittee shall instruct Project personnel to ensure access gates are securely closed when not in use."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG9385GQ6TSP4A11WCJ","code":"COA 11.43","name":"Keep Exclusion Barrier Access Gates Closed When Not in Use"},{"id":"req_01M2ESMP6D71ETMFGEBPMJCEQ0","code":"COA 11.62","name":"Keep Access Gates Closed and Stop Work if Left Open"}]'
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
              data-class="adhere"
              data-description="Permittee shall install a high visibility exclusion barrier to prevent CTS from dispersing into the Project construction site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG8S1HWB1AND39KY4G8","code":"COA 11.43","name":"Install and Maintain High-Visibility CTS Exclusion Barrier"}]'
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
              data-class="monitor"
              data-description="Permittee shall inspect and maintain all fencing, stakes, and flags until the completion of Covered Activities in that area and include the location of the fenced, staked, or flagged areas."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMDS5E818E06EZYTVMJ35","code":"COA 9.9","name":"Inspect and Maintain Habitat Fencing, Stakes and Flags"}]'
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
              data-class="adhere"
              data-description="Permittee shall maintain and repair the barrier immediately (within 24 hours) to ensure that it is functional and without defects."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG9385GQ6TSP4A11WCM","code":"COA 11.43","name":"Repair Exclusion Barrier Defects Within 24 Hours"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWC","code":"COA 11.62","name":"Maintain and Immediately Repair Barrier Defects"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species="california tiger salamander|giant garter snake"
              data-f-category="habitat"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Exclusion fencing repair"></esa-checkbox
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
              data-class="adhere"
              data-description="Permittee shall ensure the buffer material is supported sufficiently to maintain its integrity under all conditions, such as wind and heavy rain, for the duration of the Covered Activities in the Project construction site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMS64HSCCA956ZZYZCFCS","code":"COA 11.106","name":"Maintain Buffer Fencing Integrity Through Weather"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall inspect the area prior to and during installation of exclusion fencing, including during trenching, vehicular access, erecting fencing material, installing posts, and any other activity requiring vehicle or foot traffic in suitable habitat."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMG9385GQ6TSP4A11WCK","code":"COA 11.43","name":"Monitor Exclusion Barrier Installation and Ongoing Integrity"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWB","code":"COA 11.62","name":"Inspect Barrier Daily and After Rain Events"}]'
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
              data-class="adhere"
              data-description="Permittee shall provide refuge opportunities such as natural cover objects (such as fallen logs and branches), artificial cover boards, or leaf litter along or near both sides of the barrier. 49)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMGAXNN0F9PTZR9D531Y","code":"COA 11.43","name":"Provide Refuge Cover and Maintain Vegetation Along the Barrier"}]'
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
              data-class="adhere"
              data-description="Permittee shall provide refuge opportunities such as natural cover objects (such as fallen logs and branches), artificial cover boards, or leaf litter along or near both sides of the barrier. 49)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="esas-fencing"
              data-sub-name="Exclusion fencing and ESAs"
              data-reqs='[{"id":"req_01M2ESMMGAXNN0F9PTZR9D531Y","code":"COA 11.43","name":"Provide Refuge Cover and Maintain Vegetation Along the Barrier"},{"id":"req_01M2ESMP6CF3YRTR62KB5BMKWG","code":"COA 11.62","name":"Maintain Low Vegetation Along the Barrier&apos;s Outer Side"}]'
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
              ><span class="bcn-swcb" aria-label="8 obligations available">8</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
              data-title="Avoidance Measures in Unmapped Habitat"
              data-class="adhere"
              data-description="If a Covered Species occurrence(s) is observed within a Project construction site outside of the modeled habitat areas shown in Attachment 5, all avoidance and minimization requirements that are applicable to the Covered Species shall apply and Permittee shall consult with CDFW regarding the need for additional avoidance, minimization, or mitigation measures."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMEQGNEXHJ6WJ7QGSE8T9","code":"COA 10.7","name":"Apply Avoidance Measures to Unmapped Species Occurrences"},{"id":"req_01M2ESMES8P77HCP3S39H7JS59","code":"COA 10.8","name":"Apply Avoidance Measures to Unmapped Suitable Habitat"}]'
              data-f-commitment="COA 10"
              data-f-phase="Pre-Construction|Construction|Maintenance"
              data-f-species=""
              data-f-category="habitat"
              data-f-class="adhere"
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
              data-class="adhere"
              data-description="Permittee shall implement a minimum buffer of no less than 50 feet between Covered Activities within the Bethany Complex and adjacent conservation easements to minimize impacts to Covered Species."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESME7HX3P38N1DXDK3KCVC","code":"COA 9.16.1","name":"Maintain 50-Foot Buffer at Bethany Complex Conservation Easements"}]'
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
              data-class="adhere"
              data-description="Preconstruction activities on the surface over tunnel sections shall avoid siting test trenches, CPTs, and boring in aquatic features."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMTNY7D1418K170PZNHSR","code":"COA 12.2","name":"Site Geotechnical Test Locations Away From Aquatic Features"}]'
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
              data-class="adhere"
              data-description="During the entirety of the Project’s preconstruction, construction, and operations phases, Permittee shall not disturb the surface ground of CDFW’s existing conserved and managed lands, namely the Bethany Reservoir Conservation Easement, Woodbridge Ecological Reserve, Cosumnes River Ecological Reserve, or any adjacent lands protected by CDFW such as Christensen Road Burrowing Owl Site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESME5SZR3H6JG2521K9KK5","code":"COA 9.16","name":"Prohibit Surface Disturbance of CDFW Conserved and Managed Lands"}]'
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
              data-class="adhere"
              data-description="55). Permittee shall not conduct these Covered Activities in suitable GGS aquatic habitat."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMPFFFN6XA2AYSQDTQAAE","code":"COA 11.65","name":"Delineate and Avoid Suitable Aquatic GGS Habitat"},{"id":"req_01M2ESMQFNFZT5HSCXF6R3A3F1","code":"COA 11.78","name":"Delineate and Avoid SWHA Nesting Habitat at Preconstruction Sites"},{"id":"req_01M2ESMQZHR8EPFQSHAHGWANV7","code":"COA 11.85","name":"Avoid Suitable TRBL Nesting Habitat Within 1,300 Feet of Construction Sites"},{"id":"req_01M2ESMR3SD02F9Q3Y4KQ0XF8D","code":"COA 11.87","name":"Avoid Suitable TRBL Roosting Habitat and Its 300-Foot Buffer"},{"id":"req_01M2ESMR9QBX9TQPQ3P8MZR8Z5","code":"COA 11.90","name":"Restrict Activities Outside Delineated Habitat/Buffers"}]'
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
              data-class="adhere"
              data-description="38) shall be completely avoided."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMM3WQAYANXSHWPZZ1BSW","code":"COA 11.39","name":"Avoid Suitable CTS Habitat and Confine the Work Footprint"},{"id":"req_01M2ESMNPBE1S42WVDR6P44YNA","code":"COA 11.55","name":"Avoid Suitable GGS Habitat and Confine Work to Disturbed Areas"},{"id":"req_01M2ESMRGSKR1G03BPM15TBD1Q","code":"COA 11.94","name":"Avoid CBB Habitat and Confine Ground Disturbance Footprint"}]'
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
              data-class="adhere"
              data-description="No Project-related construction activities shall occur outside of the delineated Project construction sites unless approved by CDFW prior to initiation of Covered Activities."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMDQ8FGD7Z8V69VMS5X55","code":"COA 9.8","name":"Confine Covered Activities to Delineated Construction Sites"}]'
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
              data-class="adhere"
              data-description="Permittee shall confine ground disturbance activities that could result in take of MALI to the minimal area necessary to conduct Covered Activities."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="habitat-avoidance"
              data-sub-name="Habitat avoidance and work footprint"
              data-reqs='[{"id":"req_01M2ESMS2J8K75A6BFAQ1C7V5H","code":"COA 11.104","name":"Confine MALI Ground Disturbance to Minimal Footprint"},{"id":"req_01M2ESMRGSKR1G03BPM15TBD1Q","code":"COA 11.94","name":"Avoid CBB Habitat and Confine Ground Disturbance Footprint"}]'
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
              ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCT"
              data-title="GIS tracking of land disturbance and suitable habitat feature impacts"
              data-class="monitor"
              data-description="4 for habitat features) within the Project construction site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="impact-tracking"
              data-sub-name="Habitat impact tracking"
              data-reqs='[{"id":"req_01M2ESMEGDMF3XE1YW7BYGW6H7","code":"COA 10.3","name":"Maintain GIS Layers Tracking Land and Habitat Feature Disturbance"}]'
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
              data-class="monitor"
              data-description="Permittee shall track suitable habitat for the Covered Species in each Project construction site and surrounding species-specific buffers."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="impact-tracking"
              data-sub-name="Habitat impact tracking"
              data-reqs='[{"id":"req_01M2ESMEJ50ANJZ1WRG9NY1TNR","code":"COA 10.4","name":"Track and Map Suitable Habitat Features by Species"},{"id":"req_01M2ESMEV1NQSW0M2DXK8JVMJB","code":"COA 10.9","name":"Track Temporary and Permanent Impacts by Project Phase"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor shall be on site during vegetation management activities to monitor for any fossorial Covered Species."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMJS999Z18GR8YFDYGW1J","code":"COA 11.18","name":"Monitor for Fossorial Species During Vegetation Management"},{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAD","code":"COA 11.42.2","name":"Monitor Mowing Operations for Emerging CTS"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9S","code":"COA 11.57","name":"Biologist Monitors Mowing and Halts Work on GGS Detection"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit mowing on banks to one side of the channel per year to maintain cover and escape."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9V","code":"COA 11.57","name":"Limit Channel Bank Mowing to One Side Per Year"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P9","code":"COA 11.65","name":"Limit Channel Bank Mowing and Preserve Emergent Vegetation Cover"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit mowing on channel banks to one side of the channel per year to maintain cover for GGS."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P9","code":"COA 11.65","name":"Limit Channel Bank Mowing and Preserve Emergent Vegetation Cover"}]'
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
              data-class="adhere"
              data-description=", tule, cattail, sedge, rush) to the maximum extent feasible."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9W","code":"COA 11.57","name":"Avoid Mowing Emergent Vegetation"}]'
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
              data-class="adhere"
              data-description=", weed whackers) to gain access to work sites unless otherwise approved by CDFW."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMRXA7VFWYRC008ABK23F","code":"COA 11.101","name":"Hand-Trim Protected Vegetation Only"},{"id":"req_01M2ESMJS8SQ5SW593M924G2B4","code":"COA 11.18","name":"Hand-Trim Protected Vegetation for Access Only"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit mowing on channel banks to one side of the channel per year to maintain cover for GGS."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P9","code":"COA 11.65","name":"Limit Channel Bank Mowing and Preserve Emergent Vegetation Cover"}]'
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
              data-class="adhere"
              data-description="18)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMRXA7VFWYRC008ABK23G","code":"COA 11.101","name":"Set Mower Blade Height to Four Inches Minimum"},{"id":"req_01M2ESMJS999Z18GR8YFDYGW1H","code":"COA 11.18","name":"Set Minimum Mower Blade Heights"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9R","code":"COA 11.57","name":"Maintain Vegetation Height at Minimum Six Inches When Mowing"}]'
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
              data-class="adhere"
              data-description="Permittee shall ensure, to the extent feasible that mowing only occurs when Covered Species are dormant or less active on the surface and during dry conditions (no rain within the past 24 hours)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMJS999Z18GR8YFDYGW1K","code":"COA 11.18","name":"Time Mowing to Species Dormancy and Dry Conditions"}]'
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
              data-class="adhere"
              data-description="Mowing shall occur in rows in a pattern that would not concentrate animals in the center of the construction site and shall only occur during the day in dry conditions (no rain within the past 24 hours) when the Designated Biologist(s) and/or Biological Monitor(s) determines CTS is unlikely to be aboveground."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMMEG0R2D5MWTTDJMHNAB","code":"COA 11.42.2","name":"Mow in a Non-Concentrating Pattern During Dry Daytime Conditions"},{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9P","code":"COA 11.57","name":"Limit Mowing to July–September Window After Clearance Survey"}]'
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
              data-class="adhere"
              data-description="Permittee shall not disc or till upland vegetation as disking is more hazardous to GGS that are underground than mowing."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMNVPGQNZ1HSC42V2SN9X","code":"COA 11.57","name":"Prohibit Discing or Tilling of Upland GGS Habitat"},{"id":"req_01M2ESMP2WVD08ZN1ZQFKCJS5Z","code":"COA 11.60","name":"Prohibit Discing of Upland GGS Habitat"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P7","code":"COA 11.65","name":"Limit Vegetation Control in Upland Habitat to Approved Mowing Methods"}]'
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
              data-class="adhere"
              data-description="Disturbance or removal of vegetation shall be kept to the minimum necessary to complete Covered Activities in suitable CBB habitat."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMRX9BT746KPVF13B0RAP","code":"COA 11.101","name":"Minimize Vegetation Disturbance in CBB Habitat"},{"id":"req_01M2ESMJS8SQ5SW593M924G2B3","code":"COA 11.18","name":"Minimize Vegetation Disturbance and Protect No-Disturbance Buffers"},{"id":"req_01M2ESMNVNRM56GDXBV3B5RXSF","code":"COA 11.57","name":"Avoid Vegetation Removal in ESAs, Burrows and Refugia"}]'
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
              data-class="adhere"
              data-description="Permittee shall not remove vegetation within avoidable burrows, burrow complexes, and suitable refugia to the greatest extent practicable."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMMEFBX4WFR4CPK6HQKWB","code":"COA 11.42.2","name":"Avoid Removing Vegetation Within Burrows and Refugia"}]'
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
              data-class="adhere"
              data-description="Permittee shall immediately haul vegetative material off site for disposal or place the material in piles at least 200 feet from Covered Species habitat to be left undisturbed."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WB","code":"COA 11.16","name":"Haul or Pile Cleared Vegetative Material Away From Habitat"},{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WC","code":"COA 11.16","name":"Restrict Chipping and Stockpiling Over Topsoil"},{"id":"req_01M2ESMPDJBZR8PXAQ1TN7D8EC","code":"COA 11.64","name":"Dispose of Cleared Natural Debris by an Approved Method"}]'
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
              data-class="adhere"
              data-description="Permittee shall conduct removal of woody vegetation (trees and shrubs) only between September 16 - February 28 of any construction year to avoid impacts to nesting birds, unless preconstruction surveys are conducted by the Designated Biologist(s) and recently used SWHA nests or active SWHA nests are determined to be absent from the trees and/or shrubs to be removed."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="vegetation"
              data-sub-name="Vegetation removal"
              data-reqs='[{"id":"req_01M2ESMQDVJ8AQ6Y0J5881DJ9D","code":"COA 11.77","name":"Time Woody Vegetation Removal to September 16–February 28"}]'
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
              ><span class="bcn-swcb" aria-label="14 obligations available"
                >14</span
              ></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y34JV1PFVYQEE7T447XB"
              data-title="Care and authorized release of covered species taken into captivity"
              data-class="adhere"
              data-description="If taken into captivity, the individual shall remain in captivity and shall not be released into the wild unless it has been kept in quarantine and the release is authorized by CDFW and USFWS."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMPTEM53MG569201GQDP6","code":"COA 11.68.2","name":"Restrict Release of Captive GGS to Quarantined, Agency-Authorized Cases"}]'
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
                >Care and authorized release of covered species taken into captivity</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
              data-title="Care of covered species injured by covered activities"
              data-class="adhere"
              data-description="If a Covered Species is injured as a result of Covered Activities, the Designated Biologist shall immediately take it to a CDFW-approved wildlife rehabilitation or veterinary facility specific to the injured individual."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHV7XKMQW8P8NFN047XX","code":"COA 11.2","name":"Transport Injured Covered Species to Rehabilitation Facility"}]'
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
              data-class="adhere"
              data-description="Live injured CTS shall be handled and assessed according to the Restraint and Handling of Live Amphibians43 or the most recent CDFW- approved guidance for handling CTS."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMNA0BX5FD2QMF1667XY4","code":"COA 11.52","name":"Handle and Transport Injured CTS to Rehabilitation Facility"},{"id":"req_01M2ESMNBS2HF5M30P3MV0FTH4","code":"COA 11.52.1","name":"Release CTS With Minor, Survivable Injury"},{"id":"req_01M2ESMNDJ1BPHFJMBQ19Q4267","code":"COA 11.52.2","name":"Transport Seriously Injured CTS to Rehabilitation Facility"},{"id":"req_01M2ESMQMYFBJZP5GR352A38DH","code":"COA 11.81","name":"Transport Injured SWHA to Rehabilitation Facility at Permittee&apos;s Cost"}]'
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
              data-class="adhere"
              data-description="67) and contact the CDFW Representative, via email and telephone, within one business day to discuss the next steps."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMPPXXTTV96MGFP9E403B","code":"COA 11.68","name":"Transport Injured GGS to a CDFW-Approved Rehabilitation Facility"},{"id":"req_01M2ESMPRPJFZ3021PCVGNTYGF","code":"COA 11.68.1","name":"Release GGS With Minor, Survivable Injury Per Relocation Plan"},{"id":"req_01M2ESMPTDWYH9N3QXCAWDTFSR","code":"COA 11.68.2","name":"Transport Seriously Injured GGS to Nearest Rehabilitation Facility"}]'
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
              data-class="adhere"
              data-description="Prior to handling and relocation, the Designated Biologist(s) and Biological Monitor(s) shall take precautions to prevent introduction of amphibian diseases in accordance with the 2003 Interim Guidance on Site Assessment and Field Surveys for Determining Presence or a Negative Finding of the California Tiger Salamander,40 or the most recent guidance approved by CDFW."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMN15BVV0FGVSPSSTJ8RS","code":"COA 11.50","name":"Capture, Handle, and Transport CTS Under CDFW Protocols"}]'
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
              data-class="adhere"
              data-description="The Designated Biologist(s) shall be responsible for and direct efforts to capture and handle Covered Species."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHX0CTAX0Q3ZYCPP7TNK","code":"COA 11.3","name":"Capture and Handle Covered Species per Hygiene Protocol"},{"id":"req_01M2ESMPN4JPXNJPSZSQVFG3AB","code":"COA 11.67.1","name":"Capture and Handle GGS Only Through the Designated Biologist"},{"id":"req_01M2ESMQK69KMKHCS7SXAF6ZQ7","code":"COA 11.80","name":"Restrict SWHA Capture and Handling to Qualified Designated Biologist"}]'
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
              data-class="notify"
              data-description="Permittee shall direct all workers to inform the Designated Biologist(s), Fisheries Biologist(s), or Biological Monitor(s) if they encounter any Covered Species within or near the Project site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHSDAW774SZWKJC8RQZB","code":"COA 11.1","name":"Report Covered Species Encounters and Halt Work"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species=""
              data-f-category="habitat"
              data-f-class="notify"
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
              data-class="adhere"
              data-description="If CTS is encountered within a Project construction site, it is directly threatened by Covered Activities, and it is unable to move to a safe area of its own volition, the Designated Biologist(s) shall relocate CTS to a safe area using the following parameters: (1) CTS shall not be relocated to sites that already contain populations of CTS; (2) CTS shall not be relocated to areas where non-native tiger salamanders or hybrids are within the maximum CTS migration distance (i.e., ≤ 1.3 miles); (3)…"
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMN4PPRTWBTNBYA3CN13C","code":"COA 11.51.1","name":"Relocate Threatened CTS Under Numbered Placement Parameters"}]'
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
              data-class="adhere"
              data-description="If the animal is found within a fenced Project construction site and cannot move of its own volition, the Designated Biologist(s) shall move the animal outside of the area of construction according to their species-specific relocation or transplantation plans described in this ITP for each Covered Species."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHSDAW774SZWKJC8RQZC","code":"COA 11.1","name":"Relocate Trapped or Injured Covered Species from Construction Site"},{"id":"req_01M2ESMPN4JPXNJPSZSQVFG3AC","code":"COA 11.67.1","name":"Relocate GGS Only When Directly Threatened and Unable to Self-Escape"}]'
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
              data-class="adhere"
              data-description="The Designated Biologist(s) shall immediately take the injured TRBL to a CDFW-approved wildlife rehabilitation or veterinary facility identified in the TRBL Relocation Plan (see Condition of Approval 11.92)"
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMRF0PJK8JBTHZN7TQKZ1","code":"COA 11.93","name":"Transport Injured TRBL to Approved Care Facility"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) shall maintain monitoring records that include, but are not limited to: (1) the beginning and ending time the capture and relocation effort, (2) a statement identifying the Covered Species encountered, (3) the time of discovery, by whom, and the condition of the Covered Species, (4) the capture and release locations of each Covered Species individual, (5) photographs of each Covered Species individual, (6) measurements of each Covered Species individual if doing so…"
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHX1CGVWY7BBSAT1ZC2S","code":"COA 11.3","name":"Maintain Capture and Relocation Monitoring Records"}]'
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
              data-class="adhere"
              data-description="If a Covered Species or other animal is encountered in excavated pits, holes, or trenches during Covered Activities, Permittee shall divert Covered Activities away from the Covered Species until Project personnel contact the Designated Biologist(s)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMJGDAZD639XYXVJKZ542","code":"COA 11.14","name":"Divert Activities When Wildlife Found in Excavations"},{"id":"req_01M2ESMJGDAZD639XYXVJKZ543","code":"COA 11.14","name":"Relocate Wildlife Found in Excavations"},{"id":"req_01M2ESMM3X13N0WRNT88R8CVN7","code":"COA 11.39","name":"Notify Designated Biologist of CTS Encounters"}]'
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
              data-class="adhere"
              data-description="67."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMNPDV7QXCBYW8DDTXVZ0","code":"COA 11.55","name":"Stop Work and Relocate GGS Unearthed During Ground Disturbance"},{"id":"req_01M2ESMNR53ZMKFRBNXWPVN05J","code":"COA 11.55.1","name":"Allow or Relocate GGS Found on a Roadway"},{"id":"req_01M2ESMPFQNWZW6VVJM7QKG2P6","code":"COA 11.65","name":"Respond to GGS Encountered at the Work Site"},{"id":"req_01M2ESMPN4JPXNJPSZSQVFG3AB","code":"COA 11.67.1","name":"Capture and Handle GGS Only Through the Designated Biologist"}]'
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
              data-class="adhere"
              data-description="Permittee shall direct all workers to inform the Designated Biologist(s), Fisheries Biologist(s), or Biological Monitor(s) if they encounter any Covered Species within or near the Project site."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="encounters"
              data-sub-name="Wildlife encounters and handling"
              data-reqs='[{"id":"req_01M2ESMHSDAW774SZWKJC8RQZB","code":"COA 11.1","name":"Report Covered Species Encounters and Halt Work"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species=""
              data-f-category="habitat"
              data-f-class="adhere"
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
              ><span class="bcn-swcb" aria-label="6 obligations available">6</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9J"
              data-title="Biologist inspection and presence when excavations are filled or covered"
              data-class="monitor"
              data-description="Before such holes or trenches are filled, the Designated Biologist(s) and/or Biological Monitor(s) shall thoroughly inspect them for trapped animals and be present when holes or trenches are being covered or filled to ensure there is no entrapment of Covered Species and that the cover is secure."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMJGDAZD639XYXVJKZ541","code":"COA 11.14","name":"Inspect Excavations Before Filling for Trapped Animals"}]'
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
              data-class="adhere"
              data-description="Debris piles shall be kept to a minimum and removed regularly after thorough inspection by the Designated Biologist(s) and/or Biological Monitor(s)."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMJJ7FY4RXDK08MWJQGCH","code":"COA 11.15","name":"Minimize and Regularly Remove Debris Piles After Inspection"}]'
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
              data-class="monitor"
              data-description="25 inches or greater that are stored in Project construction sites for one or more overnight periods shall be thoroughly inspected by the Designated Biologist(s) and/or Biological Monitor(s) for Covered Species prior to the initiation of any Covered Activity and when these materials are subsequently buried, capped, or otherwise used or moved in any way."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMJJ6GFENC0595YKR32VJ","code":"COA 11.15","name":"Inspect Stored Pipes and Culverts for Wildlife"}]'
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
              data-class="monitor"
              data-description="All construction equipment, or construction materials left overnight in areas that may be occupied by wildlife shall be inspected by the Designated Biologist(s) and/or Biological Monitor(s) prior to initiation of any Covered Activity within a Project construction site, to prevent inadvertent entrapment of Covered Species during construction."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMJGCA5WEKEPJA6HV1AQE","code":"COA 11.14","name":"Inspect Overnight Equipment and Excavations Each Morning"}]'
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
                >Morning inspection of overnight equipment, materials and excavations for
                trapped wildlife</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GVB9GY756CNBCP3THA"
              data-title="Wildlife check of idle vehicles and equipment before moving"
              data-class="monitor"
              data-description="Vehicles and equipment shall be visually inspected by the Designated Biologist(s), Fisheries Biologist(s), and/or Biological Monitor(s) before being moved if they have been idle and/or unoccupied for 30 minutes or longer."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMDYRSCC4TRN3XVY6KGWD","code":"COA 9.12","name":"Inspect Idle Vehicles and Equipment for Wildlife Before Moving"}]'
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
              data-class="adhere"
              data-description="If Project personnel detect Covered Species or other wildlife within a pipe, culvert, debris pile, or similar structure, they shall notify the Designated Biologist(s) and/or Biological Monitor(s) and allow the animal to safely escape or be relocated by the Designated Biologist(s) outside of the Project construction site before moving, capping, burying, or utilizing the structure."
              data-cat-id="habitat"
              data-cat-name="Habitat protection"
              data-sub-id="entrapment"
              data-sub-name="Wildlife entrapment"
              data-reqs='[{"id":"req_01M2ESMJJ7FY4RXDK08MWJQGCJ","code":"COA 11.15","name":"Respond to Wildlife Found in Stored Pipes or Debris"}]'
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
          ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
        >
      </summary>
      <div class="bcn-lao__subs">
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
              ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY2"
              data-title="Licensed Pesticide Applicator"
              data-class="roster"
              data-description=", backpack sprayer) at a buffer from Covered Species habitat. Permittee shall only apply sprays via ground application when wind speed measures less than three miles per hour."
              data-cat-id="hazards"
              data-cat-name="Hazards"
              data-sub-id="pesticides"
              data-sub-name="Pesticides and rodenticides"
              data-reqs='[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGV","code":"COA 11.4","name":"Apply Sprays via Licensed Applicator Within Wind Speed Limit"},{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGX","code":"COA 11.4","name":"Keep Herbicide and Pesticide Application 300 Feet from Aquatic Habitat"}]'
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
              data-class="adhere"
              data-description=", backpack sprayer) at a buffer from Covered Species habitat. Permittee shall only apply sprays via ground application when wind speed measures less than three miles per hour."
              data-cat-id="hazards"
              data-cat-name="Hazards"
              data-sub-id="pesticides"
              data-sub-name="Pesticides and rodenticides"
              data-reqs='[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGV","code":"COA 11.4","name":"Apply Sprays via Licensed Applicator Within Wind Speed Limit"}]'
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
              data-class="adhere"
              data-description="Herbicides shall not be used within or near 300 feet of Covered Species aquatic habitats or no-activity buffers and ESAs and shall only be applied by an applicator holding a valid license issued by the California Department of Pesticide Regulation."
              data-cat-id="hazards"
              data-cat-name="Hazards"
              data-sub-id="pesticides"
              data-sub-name="Pesticides and rodenticides"
              data-reqs='[{"id":"req_01M2ESMHYSHPSSPHZ1CGQNSKGX","code":"COA 11.4","name":"Keep Herbicide and Pesticide Application 300 Feet from Aquatic Habitat"}]'
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
              data-class="adhere"
              data-description="Permittee shall not use rodenticides, other poisons, or broadcast baiting used to control rodents in the Project Area (including during construction, postconstruction maintenance, and operations)."
              data-cat-id="hazards"
              data-cat-name="Hazards"
              data-sub-id="pesticides"
              data-sub-name="Pesticides and rodenticides"
              data-reqs='[{"id":"req_01M2ESMJ0HTG8W8PBKM9K3J0JS","code":"COA 11.5","name":"Prohibit Rodenticide, Poison, and Broadcast Baiting Use"}]'
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
          ><span class="bcn-swcb" aria-label="20 obligations available">20</span></span
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
              ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3ECJBAXS25FWDD40W6Y"
              data-title="Funding of interim management of Habitat Management lands"
              data-class="adhere"
              data-description="Permittee shall provide funding for interim management of the HM lands by using revenues derived from SWP charges to the SWP Contractors under long-term water supply contracts and any subsequent agreements."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="sub-mitigation-and-restoration-mitigation-funding"
              data-sub-name="Mitigation funding"
              data-reqs='[{"id":"req_01M2ESMWHZGBZBXMKPQ5MRZ3PA","code":"COA 12.11.7","name":"Fund Interim Management from SWP Contractor Charges"}]'
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
              data-class="adhere"
              data-description="the approved Endowment Manager may pool the Endowment with other endowments for the operation, management, and protection of HM lands for local populations of the Covered Species but shall maintain separate accounting for each Endowment."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="sub-mitigation-and-restoration-mitigation-funding"
              data-sub-name="Mitigation funding"
              data-reqs='[{"id":"req_01M2ESMX3TF14WVNXSCGMG8YVV","code":"COA 12.12.4","name":"Hold and Pool Endowment with Separate Accounting"},{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK9","code":"COA 12.12.4","name":"Process CDFW-Directed Endowment Expenditures"},{"id":"req_01M2ESMX3V5B3GJBP6QJF07JK8","code":"COA 12.12.4","name":"Require CDFW Approval Before Principal Disbursement"}]'
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
              ><span class="bcn-swcb" aria-label="8 obligations available">8</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY0"
              data-title="Compensatory habitat acreage for each covered species"
              data-class="adhere"
              data-description="Permittee shall either purchase Covered Species credits from a CDFW- approved mitigation or conservation bank pursuant to Condition of Approval 12.10 to achieve the acreage requirements described in Table 12-1 and Table 12-2, or shall provide for both the permanent protection, restoration, and initial and long-term management and monitoring of Habitat Management (HM) lands pursuant to Condition of Approval 12.11 below and consistent with Covered Species habitat criteria described in Attachment…"
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMTJCND5F4VV6BR1CRRTB","code":"COA 12","name":"Meet Compensatory Mitigation Acreage via Credits or HM Lands"}]'
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
              data-class="adhere"
              data-description="Transfer fee title of the HM lands to CDFW pursuant to terms approved in writing by CDFW."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMW7BVA8PQP436P7Z157Y","code":"COA 12.11.1","name":"Transfer Fee Title of HM Lands to CDFW"}]'
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
              data-class="adhere"
              data-description="Permittee shall ensure the ratio of cumulative HM lands protection and restoration for each Covered Species remains at least 10 percent (10%) greater than the proportional cumulative impacts to each Covered Species habitat until the compensatory mitigation acreages in Table 12-1 and Table 12-2 have been achieved."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMTJDPF4BKMV539XW8FES","code":"COA 12","name":"Maintain 10% HM Lands Stay-Ahead Ratio"}]'
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
              data-class="adhere"
              data-description="5) into shallow spawning habitat design and implementation."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMV7M3QTHZW3VMB5W7Y74","code":"COA 12.6.1","name":"Integrate Spawning Habitat Study into Design"}]'
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
              data-class="adhere"
              data-description="Interim management period activities described in the final management plan shall include fence repair, continuing trash removal, site monitoring, vegetation and invasive species management, and any other expected management activities."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMWHYM7C650MKCRWS45YY","code":"COA 12.11.7","name":"Implement Interim Management of HM Lands"}]'
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
              data-class="monitor"
              data-description="Permittee shall monitor habitat mitigation sites for a period of at least 10 years to ensure the effectiveness both as refuge and spawning habitat."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMV7KRZKKJSNH8GTNVGEN","code":"COA 12.6.1","name":"Monitor Habitat Mitigation Sites for Ten Years"}]'
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
              data-class="notify"
              data-description="During the permit term, Permittee shall demonstrate to CDFW that Covered Species’ requirements have been satisfied on an ongoing basis and consistent with the requirements of Condition of Approval 12, as evidenced by: • Written documentation of the acquisition of the HM lands; • Copies of all executed and recorded conservation easements; • Written confirmation from the approved Endowment Manager of its receipt of the full Endowment, if required; and • Timely submission of all required reports."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMXB61WXZTSWY83SJ53JY","code":"COA 13.3","name":"Provide Ongoing Demonstration of Mitigation Performance"}]'
              data-f-commitment="COA 13"
              data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
              data-f-species=""
              data-f-category="mitigation"
              data-f-class="notify"
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
              data-class="adhere"
              data-description="After the interim management period, Permittee shall ensure that the designated long-term land manager implements the management and monitoring of the HM lands according to the final management plan."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="mitigation-lands"
              data-sub-name="Mitigation lands"
              data-reqs='[{"id":"req_01M2ESMWKQRXTQ20EGY49RWWPS","code":"COA 12.12","name":"Implement Perpetual Management of HM Lands"}]'
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
              data-class="adhere"
              data-description="Minor recontouring may be conducted; however, Permittee shall limit grading, compaction, fill, and other earthmoving activities to the Project construction site."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0E","code":"COA 12.3.3","name":"Protect Restoration Soils and Meet Seeding Window"}]'
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
              data-class="adhere"
              data-description="Permittee shall oversee the management of invasive plants within Project construction sites and Project maintenance areas and may use control methods such as hand removal, light grubbing, mowing, or grazing within seeding and planting areas following vegetation restoration."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0G","code":"COA 12.3.3","name":"Control Invasive Plants at Restoration Sites"}]'
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
              data-class="monitor"
              data-description="Permittee is responsible for monitoring and maintaining the habitat restoration areas for a period of three years or until the Restoration Plan success criteria have been met as determined by the Designated Biologist(s) and/or Biological Monitor(s) and CDFW in writing."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTYP66KXTJEHEW4M81KS","code":"COA 12.3.4","name":"Monitor and Maintain Restoration Areas to Success"}]'
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
              data-class="monitor"
              data-description="Permittee shall monitor the restoration for one year or until restoration success is achieved as determined by the Designated Biologist(s) and/or Biological Monitor(s) and CDFW."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMPHJ9K1JPTSFFKW27FTC","code":"COA 11.66","name":"Monitor Restored GGS Habitat Until Restoration Success"}]'
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
              data-class="adhere"
              data-description="Success standards to ensure a minimum of 70 percent survivorship for three years after the last planting at each site and proposed remedial actions if those standards are not met."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0H","code":"COA 12.3.3","name":"Meet Restoration Survivorship Success Standards"},{"id":"req_01M2ESMTYQKRY2AEA4HFNVAVW1","code":"COA 12.3.4","name":"Perform Remedial Restoration When Standards Are Unmet"}]'
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
              data-class="adhere"
              data-description="Seed mixes shall be identified for approval as part of the Restoration Plan and shall include a mix of locally native species and non-native forage species (no species designated by the California Invasive Plant Council (Cal-IPC) as high or moderate invasive species may be used), including diverse assemblages of native and non-native flora, with an emphasis on nonnative bunchgrasses and other grassland species including local, native wildflowers and/or shrub seeds."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E29","code":"COA 12.3.3","name":"Design Seed Mix and Target Vegetation Communities"}]'
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
              data-class="adhere"
              data-description="Minor recontouring may be conducted; however, Permittee shall limit grading, compaction, fill, and other earthmoving activities to the Project construction site."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0E","code":"COA 12.3.3","name":"Protect Restoration Soils and Meet Seeding Window"}]'
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
              data-class="adhere"
              data-description="Gravel and other invasive substrate shall be removed from restoration areas. (2) To the maximum extent feasible, topsoil shall be salvaged from within on-site Project areas prior to construction."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E2A","code":"COA 12.3.3","name":"Remove Invasive Substrate and Manage Restoration Fill"}]'
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
              data-class="adhere"
              data-description="Seed mixes shall be identified for approval as part of the Restoration Plan and shall include a mix of locally native species and non-native forage species (no species designated by the California Invasive Plant Council (Cal-IPC) as high or moderate invasive species may be used), including diverse assemblages of native and non-native flora, with an emphasis on nonnative bunchgrasses and other grassland species including local, native wildflowers and/or shrub seeds."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E29","code":"COA 12.3.3","name":"Design Seed Mix and Target Vegetation Communities"}]'
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
              data-class="adhere"
              data-description="Drivers may attempt to use adjacent shoulders for parking or to avoid ruts that form in roadways."
              data-cat-id="mitigation"
              data-cat-name="Mitigation and restoration"
              data-sub-id="restoration"
              data-sub-name="Restoration"
              data-reqs='[{"id":"req_01M2ESMTX0GQVZGMA42T89ZK0F","code":"COA 12.3.3","name":"Install Barriers to Protect Restored Road Shoulders"}]'
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
              data-class="monitor"
              data-description="Procedures for hydroacoustic monitoring shall be consistent with the California Department of Transportation 2020 Technical Guidance for the Assessment of Hydroacoustic Effects of Pile Driving on Fish."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH4","code":"COA 11.33","name":"Conduct Two-Hydrophone Hydroacoustic Monitoring Per Site"}]'
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
              data-class="adhere"
              data-description="If more than one pile driving rig is employed, ensuring pile driving activities are initiated in a way that provides an escape route to avoid “trapping” fish between pile drivers in waters exposed to underwater noise levels that could potentially cause injury."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH1","code":"COA 11.33","name":"Provide Fish Escape Route for Multiple Pile Driving Rigs"}]'
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
              data-class="adhere"
              data-description="Restricting impact pile driving activities to specific times of the day and for a specific duration to be determined through coordination with CDFW, NMFS, and USFWS and subject to CDFW approval."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH7","code":"COA 11.33","name":"Coordinate CDFW/NMFS/USFWS Time-of-Day Pile Driving Restriction"}]'
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
              data-class="adhere"
              data-description="34)."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKNRCMV0V8XY1Q4V7P6S","code":"COA 11.31.2","name":"Cap Impact Pile Driving Within Table 4–6 Limits"}]'
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
              data-class="adhere"
              data-description="m. m."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKQKE1D1BZDS4B33EYMB","code":"COA 11.32","name":"Restrict Pile Driving to 7 AM–7 PM"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species=""
              data-f-category="noise"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Pile Driving Hour Limit"></esa-checkbox
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
              data-class="adhere"
              data-description=", wood or micarta), bubble curtains, air-filled fabric barriers, or isolation piles; or installation of piling-specific cofferdams."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZG","code":"COA 11.33","name":"Deploy Noise-Attenuation Equipment for Impact Pile Driving"}]'
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
              data-class="adhere"
              data-description="Initiating impact pile driving with a “soft-start” where feasible, such that pile strikes are initiated at reduced impact and increase to full impact over several strikes to provide fish an opportunity to move out of the area."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH0","code":"COA 11.33","name":"Apply Soft-Start Sequence to Impact Pile Driving"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species=""
              data-f-category="noise"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Pile driving soft start"></esa-checkbox
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
              data-class="adhere"
              data-description=", outside of a cofferdam or sheet pile walls) at the north Delta intakes from May 16 – May 31 and November 1 – November 15 if bubble curtains or other measures for noise attenuation demonstrate that an equivalent level of protection can be achieved as during the June 1 – October 31 work window and real-time monitoring of Covered Species demonstrates absence in the work area, and as approved in writing by CDFW."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKNSX5WPNMGT57793V98","code":"COA 11.31.2","name":"Permit Shoulder-Season Pile Driving With Noise Attenuation"}]'
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
              data-class="adhere"
              data-description="In-channel acoustic monitoring is required to verify that generated sound thresholds do not exceed the disturbance threshold of 150 dB at 10 meters from source."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKNSX5WPNMGT57793V99","code":"COA 11.31.2","name":"Verify Sound Below 150 dB Outside the Work Window"}]'
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
              data-class="adhere"
              data-description="Disturbance threshold for fish of all sizes is 150 dB root mean square relative to 1 micropascal."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH6","code":"COA 11.33","name":"Maintain Disturbance Threshold Outside the Work Window"}]'
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
              data-class="adhere"
              data-description="Injury threshold for fish of all sizes includes a peak sound pressure level (SPL) of 206 dB relative to 1 micropascal; • Injury threshold for fish less than 2 grams is 183 dB relative to 1 micropascal cumulative sound exposure level (SELcumulative); and • Injury threshold for fish greater than or equal to 2 grams is 187 dB relative to 1 micropascal SELcumulative."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSB96CWQM0DXWY5AQH5","code":"COA 11.33","name":"Maintain Injury Thresholds During the Construction Work Window"}]'
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
              data-class="monitor"
              data-description="Monitoring the in-water work area for fish that may be showing signs of distress or injury as a result of pile driving activities and stopping work when distressed or injured fish are observed, for example, if injured fish are seen floating near the surface."
              data-cat-id="noise"
              data-cat-name="Noise and vibration"
              data-sub-id="underwater-sound"
              data-sub-name="Pile driving and underwater sound"
              data-reqs='[{"id":"req_01M2ESMKSA5B31E9JAZ7XQPKZH","code":"COA 11.33","name":"Monitor Work Area for Distressed or Injured Fish"}]'
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
              ><span class="bcn-swcb" aria-label="6 obligations available">6</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGC"
              data-title="Approved Wildlife Handler"
              data-class="roster"
              data-description="Only the CDFW-approved Designated Biologist(s) with appropriate expertise in handling blackbirds shall handle and relocate TRBL."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMRD7GNZNESZEXHQR204E","code":"COA 11.92","name":"Restrict TRBL Handling to CDFW-Approved Biologist"}]'
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
              data-class="roster"
              data-description="A Biological Monitor is an individual who shall have a minimum of four years of academic and professional experience in biological sciences and related resource management activities relevant to this project, has a minimum of six months’ experience with construction level biological monitoring, has training and the ability to recognize the Covered Species in the Project construction area, and who is familiar with the habitats and behavior of the Covered Species."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMDCJSES4G0RSSPXC7J7J","code":"COA 9.2.2","name":"Maintain Qualified Biological Monitor Scope of Work"}]'
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
              data-class="monitor"
              data-description="Following initial ground-disturbance activities, a Designated Biologist(s) and /or Biological Monitor(s) shall be on site to monitor Covered Activities occurring in suitable MALI habitat."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR4","code":"COA 11.104","name":"Monitor Covered Activities in Suitable MALI Habitat"},{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR3","code":"COA 11.104","name":"Station Biologist Onsite Daily During Initial Ground Disturbance"},{"id":"req_01M2ESMS63S5TJRSKN2D93XX9Q","code":"COA 11.106","name":"Station Biologist Onsite During Buffer Installation"},{"id":"req_01M2ESMD8P1D9GP5SHAZ2ZEEXN","code":"COA 9.2","name":"Maintain Biological Monitor Presence During Construction"}]'
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
              data-class="roster"
              data-description="A Designated Biologist and Fisheries Biologist is an individual who shall have a minimum of five years of academic training and professional experience in biological sciences and related resource management activities with experience monitoring, surveying for, collecting, and handling of Covered Species."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMDAT8XEFVPD8J1CHZG7X","code":"COA 9.2.1","name":"Maintain Qualified Designated/Fisheries Biologist Credentials"}]'
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
              data-class="roster"
              data-description="The Covered Species may only be collected and handled by the CDFW-approved Designated Biologist(s) with expertise in handling plants."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGS","code":"COA 11.108","name":"Collect, Handle and Relocate Threatened MALI Plants"}]'
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
              data-class="adhere"
              data-description="the Designated Biologist(s), Fisheries Biologist(s), and/or Biological Monitor(s) shall immediately stop any activity that does not comply with this ITP and/or order any reasonable measure to avoid the unauthorized take of an individual of the Covered Species."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="biologists"
              data-sub-name="Designated biologists and monitors"
              data-reqs='[{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYG","code":"COA 9.3","name":"Exercise Stop-Work Authority for Non-Compliant Activity"}]'
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
              ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y34HZ9RH8ZC58QF7AHXD"
              data-title="Permitted personnel for studies that may take Covered Fish Species"
              data-class="roster"
              data-description="Permittee shall ensure that all Covered Species Monitoring and Scientific Studies which may result in take of DS, LFS, CHNWR, CHNSR, and WS are conducted by a person or entity with necessary state and federal scientific collecting permits and take authorizations."
              data-cat-id="people"
              data-cat-name="People and qualifications"
              data-sub-id="specialists"
              data-sub-name="Qualified specialists"
              data-reqs='[{"id":"req_01M2ESMGSM98FYZAKW9PV13PEW","code":"COA 10.22","name":"Ensure Permitted Personnel Conduct Covered Species Studies"}]'
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
                >Permitted personnel for studies that may take Covered Fish Species</span
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
              data-class="adhere"
              data-description="Permittee shall stop Covered Activities within 50 feet of the nest until the nest senesces or becomes inactive and is no longer in use, as determined by the Designated Biologist(s) in consultation with CDFW."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRZ181JYEY65HZ6AD84A","code":"COA 11.102","name":"Halt Work Within 50-Foot CBB Nest Buffer"},{"id":"req_01M2ESMRR1S26EXFBWQDFTE588","code":"COA 11.98","name":"Enforce No-Activity Buffer Around Discovered CBB Nest"}]'
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
              data-class="monitor"
              data-description="Once Covered Activities within CBB habitat have begun, the Designated Biologist(s) and/or Biological Monitor(s) shall be onsite and shall conduct daily visual sweeps of the Project construction site for CBB flight activity at the start of the daily work window and shall intermittently repeat these visual sweeps throughout the daily work window."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRSSQJYJZ5K02FM5E254","code":"COA 11.99","name":"Conduct Daily Visual Sweeps for CBB Flight Activity"}]'
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
              data-class="adhere"
              data-description="Native or non-native flowering vegetation removal shall occur prior to bloom and before the Colony Active Period to prevent colonization during the active season."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HA","code":"COA 11.95","name":"Time Flowering Vegetation Removal Outside Colony Active Period"}]'
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
              data-class="monitor"
              data-description="During this time, removal of fallen logs, brush piles, woody debris, and other potential refugia for overwintering bees shall be done carefully with prior inspection and then supervision from the Designated Biologist(s) with assistance (if needed) from the Biological Monitor(s)."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HE","code":"COA 11.95","name":"Inspect and Supervise Overwintering Refugia Removal"}]'
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
                >Inspection and supervision of refugia removal during overwintering</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH3"
              data-title="Monitoring of a relocated nest"
              data-class="monitor"
              data-description="Once relocated, the nest shall be monitored for at least one week by the Designated Biologist(s)."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRZ2SQA04DKYQWZHN3NZ","code":"COA 11.102","name":"Monitor Relocated CBB Nest for One Week"}]'
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
              data-class="adhere"
              data-description="2)."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRJMEXEW0QW3QQMZJ1HD","code":"COA 11.95","name":"Avoid Ground Disturbance During Overwintering Period"}]'
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
              data-class="adhere"
              data-description="The Covered Species may only be collected and handled by the CDFW-approved Designated Biologist(s) with expertise in handling plants."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMS9PZAA7R0G27BRK7FGS","code":"COA 11.108","name":"Collect, Handle and Relocate Threatened MALI Plants"}]'
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
              data-class="monitor"
              data-description="If a suspected or confirmed CBB individual is detected within the Project construction site, every effort shall be made by the Designated Biologist(s) with assistance (if needed) from the Biological Monitor(s) to find the active nest."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRSTR9HY12WTKKXTH441","code":"COA 11.99","name":"Search for Active Nest After a CBB Detection"}]'
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
              data-class="adhere"
              data-description="108."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMS2KJG72AVTFC3R8HHR5","code":"COA 11.104","name":"Stop Work Pending MALI Translocation Upon Discovery"},{"id":"req_01M2ESMRGSKR1G03BPM15TBD1R","code":"COA 11.94","name":"Halt Activities Within 50 ft of a Discovered CBB Nest"}]'
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
              data-class="adhere"
              data-description="Permittee shall establish a 50-foot radius no-activity buffer around refugia that can be avoided within the Project preconstruction activity area, construction site, access roads, SCADA and transmission line construction areas, and maintenance areas."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRVHH73JMGM6XG5397KC","code":"COA 11.100","name":"Avoid and Buffer Underground CBB Refugia"}]'
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
              data-class="adhere"
              data-description="38) have been performed by the Designated Biologist(s) and absence of overwintering CBB is confirmed."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="bees-monarchs"
              data-sub-name="Bumble bees and monarchs"
              data-reqs='[{"id":"req_01M2ESMRVJYG082T0SAE12EZMA","code":"COA 11.100","name":"Hold Refugia Vegetation Removal Until Overwintering Absence Confirmed"}]'
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
              ><span class="bcn-swcb" aria-label="5 obligations available">5</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXV"
              data-title="Avoidance of covered plant removal"
              data-class="adhere"
              data-description="108."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="plants"
              data-sub-name="Special-status plants"
              data-reqs='[{"id":"req_01M2ESMS64HSCCA956ZZYZCFCW","code":"COA 11.106","name":"Follow MALI Relocation Plan When Removal Is Unavoidable"}]'
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
              data-class="adhere"
              data-description="Permittee shall avoid removal of the Covered Species to the maximum extent practicable."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="plants"
              data-sub-name="Special-status plants"
              data-reqs='[{"id":"req_01M2ESMS63S5TJRSKN2D93XX9M","code":"COA 11.106","name":"Avoid MALI Removal to Maximum Extent Practicable"}]'
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
              data-class="adhere"
              data-description="Where maintenance or repair of SCADA or transmission lines are necessary, maintenance activities shall occur on the landside of levees where the risk of erosion or debris entering the waterways is low."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="plants"
              data-sub-name="Special-status plants"
              data-reqs='[{"id":"req_01M2ESMS7W6E1HTMTD240D0JJN","code":"COA 11.107","name":"Site SCADA/Transmission Line Maintenance on Levee Landside"}]'
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
              data-class="adhere"
              data-description="Seed mixes shall be identified for approval as part of the Restoration Plan and shall include a mix of locally native species and non-native forage species (no species designated by the California Invasive Plant Council (Cal-IPC) as high or moderate invasive species may be used), including diverse assemblages of native and non-native flora, with an emphasis on nonnative bunchgrasses and other grassland species including local, native wildflowers and/or shrub seeds."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="plants"
              data-sub-name="Special-status plants"
              data-reqs='[{"id":"req_01M2ESMTWZNQTVFA2YPJBP8E29","code":"COA 12.3.3","name":"Design Seed Mix and Target Vegetation Communities"}]'
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
                >Post-disturbance grading to elevations and hydrology suitable for covered
                plants</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y374X4RKETDHB3S1M1MK"
              data-title="Special-status plant occurrence buffer"
              data-class="adhere"
              data-description="Permittee shall establish a 100-foot no-activity buffer zone at least ten feet from the edge of the suitable habitat until Covered Activities in the area are completed."
              data-cat-id="plants-inverts"
              data-cat-name="Plants and invertebrates"
              data-sub-id="plants"
              data-sub-name="Special-status plants"
              data-reqs='[{"id":"req_01M2ESMS63S5TJRSKN2D93XX9N","code":"COA 11.106","name":"Establish 100-Foot No-Activity Buffer Around MALI"},{"id":"req_01M2ESMS7W6E1HTMTD240D0JJQ","code":"COA 11.107","name":"Place Non-Disturbance Buffers Around MALI Before Maintenance"}]'
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
          ><span class="bcn-swcb" aria-label="12 obligations available">12</span></span
        >
      </summary>
      <div class="bcn-lao__subs">
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
              ><span class="bcn-swcb" aria-label="6 obligations available">6</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFY"
              data-title="Agency access to construction sites"
              data-class="adhere"
              data-description="Provide CDFW with unrestricted access to construction sites for the duration of implementation of the fish salvage plan and fish salvage activities."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESMKWX75VN6Q904Q7QHHXS","code":"COA 11.35","name":"Provide CDFW Site Access During Fish Salvage Activities"}]'
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
              data-class="adhere"
              data-description="Permittee shall provide CDFW staff with reasonable access to the Project and mitigation lands under Permittee control and shall otherwise fully cooperate with CDFW efforts to verify compliance with the Project Description, evaluation of effects on Covered Species and their habitats, and compliance with or effectiveness of minimization and mitigation measures set forth in this ITP."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESME404SWG6PS2ESE8KYH7","code":"COA 9.15","name":"Provide CDFW Access to Project and Mitigation Lands"}]'
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
              data-class="adhere"
              data-description="The Designated Biologist(s), Fisheries Biologist(s), or Biological Monitor(s) shall maintain construction-monitoring documentation on-site in either hard copy or digital format throughout the construction period, which shall include a copy of this ITP with attachments and a list of signatures of all personnel who have successfully completed the education program."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESMDHYF867YQNWQK3NVG8W","code":"COA 9.5","name":"Maintain On-Site Construction Monitoring Documentation"}]'
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
              data-class="adhere"
              data-description="Permittee shall not enter into any agreement or contract of any kind, including but not limited to non-disclosure agreements and confidentiality agreements, with its contractors and/or the Designated Biologist(s), Fisheries Biologist(s), and/or Biological Monitor(s) that prohibit or impede open communication with CDFW, including but not limited to providing CDFW staff with the results of any surveys, reports, or studies or notifying CDFW of any non-compliance or take."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESMDEC1Q0RGFP8KGZD7JYJ","code":"COA 9.3","name":"Prohibit Contracts That Restrict CDFW Communication"}]'
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
              data-class="adhere"
              data-description="Permittee shall provide unfettered access to the Project Site and otherwise facilitate the Designated Biologist in the performance of his/her duties."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESMDEBV2KH7CJHQF9ZB8XJ","code":"COA 9.3","name":"Provide Unfettered Biologist Access to the Project Site"}]'
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
              data-class="adhere"
              data-description="Permittee shall prepare and distribute wallet-sized cards or a fact sheet handout containing this information for all workers to carry in the Project Area."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="agency-access"
              data-sub-name="Agency and biologist access"
              data-reqs='[{"id":"req_01M2ESMDG5ZAFW7GT3S4AFYDA6","code":"COA 9.4","name":"Distribute Wallet Cards or Fact Sheets to All Workers"}]'
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
              ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
              data-title="Daily biologist compliance inspection at each construction site and maintenance activity"
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall be present at each Project construction site and during each maintenance activity, each day, to conduct compliance inspections at a minimum of one inspection daily, after periods of inactivity prior to initiating work, and after clearing, grubbing, and grading are completed."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="compliance-inspections"
              data-sub-name="Compliance inspections and records"
              data-reqs='[{"id":"req_01M2ESMEWT6ZZDZ4V47ZTC9YBS","code":"COA 10.10","name":"Conduct Daily Compliance Inspections at Each Site"}]'
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
              data-class="monitor"
              data-description="6), summarizing oversight activities and compliance inspections, observations of Covered Species and their sign, survey results, dates of Covered Activity and inactivity, and monitoring activities required by this ITP."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="compliance-inspections"
              data-sub-name="Compliance inspections and records"
              data-reqs='[{"id":"req_01M2ESMEWT6ZZDZ4V47ZTC9YBT","code":"COA 10.10","name":"Prepare Daily Written Inspection Records"}]'
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
              ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9N"
              data-title="Annual inspection and replacement of bird strike diverters"
              data-class="monitor"
              data-description="Permittee shall inspect bird strike diverters annually and replace malfunctioning or lost diverters until or unless the transmission lines are removed."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="facility-design"
              data-sub-name="Facility design and siting"
              data-reqs='[{"id":"req_01M2ESMJQG67M0XWJTESQAFJ49","code":"COA 11.17.1","name":"Inspect and Replace Bird Strike Diverters Annually"}]'
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
              data-class="adhere"
              data-description="Upon written approval of the Plan by CDFW, Permittee shall install and maintain all bird strike diverters."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="facility-design"
              data-sub-name="Facility design and siting"
              data-reqs='[{"id":"req_01M2ESMV0G2RPZFHW44PCZ3G61","code":"COA 12.4","name":"Maintain Installed Bird Strike Diverters"}]'
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
              data-class="adhere"
              data-description="Permittee shall coordinate with electric utilities to design and construct power transmission and distribution lines and the locations of necessary structures such as supports and substations, to avoid Covered Species terrestrial habitats by 200 feet and aquatic habitats by 300 feet."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="facility-design"
              data-sub-name="Facility design and siting"
              data-reqs='[{"id":"req_01M2ESMJNPKPZXW6GQRP907SEQ","code":"COA 11.17","name":"Site Power Lines and Structures to Avoid Covered Species Habitat"},{"id":"req_01M2ESMQHDSWYB94XYC24TQNXN","code":"COA 11.79","name":"Site Poles and Lines Outside Suitable SWHA Nesting Habitat"}]'
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
              data-class="adhere"
              data-description=", k-cuts) that could prevent Covered Species from crossing or exiting the roadway. If curbs are necessary for safety and/or surface runoff, Permittee shall design and construct them to allow Covered Species to walk over them."
              data-cat-id="site"
              data-cat-name="Site conduct"
              data-sub-id="facility-design"
              data-sub-name="Facility design and siting"
              data-reqs='[{"id":"req_01M2ESMJCW3S0Y78C3N63HEMHA","code":"COA 11.12","name":"Design Wildlife-Passable Roadway Curbs and Barriers"}]'
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
              ><span class="bcn-swcb" aria-label="7 obligations available">7</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXX"
              data-title="Barge Mooring and Anchoring"
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              data-class="monitor"
              data-description="Observe barge operation activities including loading and unloading."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYQ8AM5AR4SCE24X1JB","code":"COA 11.36","name":"Monitor Barge Loading, Unloading and Geotechnical Activities"}]'
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
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              data-class="adhere"
              data-description="Limit vessel speeds to maintain wake heights of less than two feet at shore to minimize the potential for vessel wakes to strand Covered Species and the effects of wakes on unarmored or vegetated banks."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="barges"
              data-sub-name="Barge and vessel operations"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19H","code":"COA 11.36","name":"Operate Vessels per Barge Operations BMPs"}]'
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
              ><span class="bcn-swcb" aria-label="5 obligations available">5</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGT"
              data-title="Biologist present to salvage snakes during dewatering"
              data-class="monitor"
              data-description="The Designated Biologist(s) shall be on site during all dewatering activities, particularly when dewatering begins and when the level of water reaches the level of the intake, to salvage and relocate any GGS that cannot swim away from the suction cups and escape on its own."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="dewatering"
              data-sub-name="Dewatering"
              data-reqs='[{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ13","code":"COA 11.61","name":"Station Biologist to Salvage GGS During Dewatering"}]'
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
              data-class="adhere"
              data-description="Permittee shall screen dewatering pump intakes to prevent entrainment of fish in accordance with screening criteria for salmonid fry found in the NMFS 1997 Fish Screening Criteria for Anadromous Salmonids."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="dewatering"
              data-sub-name="Dewatering"
              data-reqs='[{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPA","code":"COA 11.37","name":"Screen Dewatering Pump Intakes to Prevent Fish Entrainment"}]'
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
              data-class="adhere"
              data-description="67)."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="dewatering"
              data-sub-name="Dewatering"
              data-reqs='[{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ14","code":"COA 11.61","name":"Shut Down Pump and Contact Biologist if GGS Seen at Intake Screen"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species="giant garter snake"
              data-f-category="water"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Dewatering pump shutdown"></esa-checkbox
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
              data-class="adhere"
              data-description="Permittee shall temporarily stop dewatering if the Fisheries Biologist(s) or CDFW personnel determine that water levels may drop too quickly to allow successful fish salvage."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="dewatering"
              data-sub-name="Dewatering"
              data-reqs='[{"id":"req_01M2ESMM0FVKV7MZMMSVC11NPC","code":"COA 11.37","name":"Halt Dewatering When Water Levels Drop Too Quickly for Salvage"}]'
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
              data-class="adhere"
              data-description="Permittee shall limit dewatering to April 15 – October 1 unless otherwise approved by CDFW."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="dewatering"
              data-sub-name="Dewatering"
              data-reqs='[{"id":"req_01M2ESMP4K7W5XYW0R2Z17AQ16","code":"COA 11.61","name":"Limit Dewatering to the April 15–October 1 Window"}]'
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
              data-class="adhere"
              data-description="Paved areas damaged by construction activities shall be repaved to avoid erosion due to pavement damage."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB95CSAHR95M0TPRY01","code":"COA 11.26","name":"Repave Construction-Damaged Pavement to Prevent Erosion"}]'
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
              data-class="adhere"
              data-description="maintaining emergency erosion control supplies at all times during construction and replacing used emergency materials within 48 hours"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCM","code":"COA 11.26","name":"Maintain Emergency Erosion Control Supplies"}]'
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
              data-class="adhere"
              data-description="Permittee shall initiate all erosion control measures prior to all storm events."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYP","code":"COA 11.13","name":"Initiate Erosion Control Measures Before Storm Events"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) and/or Biological Monitor(s) shall monitor each Project construction site before, during, and after each storm event"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRX","code":"COA 9.7","name":"Monitor Construction Sites Before, During and After Storm Events"}]'
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
              data-class="adhere"
              data-description="Any geo-textile material or filter fabric used within Project construction sites shall not contain any petroleum-based products without prior written approval from CDFW."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKD0JHB00RJNR3WFEE55","code":"COA 11.27","name":"Use Approved Erosion Control Material Composition and Installation"}]'
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
              data-class="adhere"
              data-description="limiting ground disturbance to areas of proven stability"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCR","code":"COA 11.26","name":"Limit Ground Disturbance to Stable Areas"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCN","code":"COA 11.26","name":"Minimize Disturbance of Terrain and Natural Land Features"},{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCS","code":"COA 11.26","name":"Sequence Clearing to Minimize Soil Disturbance Time"},{"id":"req_01M2ESMMT11DAME30TN5AWMQ91","code":"COA 11.48","name":"Confine Clearance Work to Minimal Disturbance Area"},{"id":"req_01M2ESMPBQEHX1ATS8PGJM8C33","code":"COA 11.63","name":"Confine Clearance Work to Minimal Disturbance Footprint"}]'
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
              data-class="adhere"
              data-description="Permittee shall use rocks and other inorganic material grubbed from storage sites to backfill borrow pits at that site or shall remove these materials from the site."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WD","code":"COA 11.16","name":"Backfill or Remove Grubbed Rock and Inorganic Material"}]'
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
              data-class="monitor"
              data-description="implementing construction management and site inspections before, during, and after rain events; scheduling measures to mitigate erosion from rainfall events, runoff, or flooding at construction sites"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB95CSAHR95M0TPRXZT","code":"COA 11.26","name":"Inspect Erosion Controls and Schedule Around Rain Events"},{"id":"req_01M2ESMKD1149R8RFXNQY4H35K","code":"COA 11.27","name":"Monitor and Repair Erosion Controls Around Rain Events"}]'
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
                >Inspection of erosion controls before, during and after rain events</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9H"
              data-title="Monitoring of the 72-hour weather forecast for each project site"
              data-class="monitor"
              data-description="gov) 72-hour forecast for each Project Site."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYQ","code":"COA 11.13","name":"Monitor 72-Hour Weather Forecast for Each Project Site"},{"id":"req_01M2ESMKD1149R8RFXNQY4H35H","code":"COA 11.27","name":"Consult 72-Hour Weather Forecasts Before Sediment-Risk Activities"},{"id":"req_01M2ESMMMG5744RQ9XYPGCYB2J","code":"COA 11.45","name":"Monitor NWS 72-Hour Rain Forecast Before Site Work"},{"id":"req_01M2ESMNZAYEXA85ZFZK0QSTVV","code":"COA 11.58.1","name":"Monitor 72-Hour Forecast and Observe Post-Rain Dry-Out Period"}]'
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
              data-class="adhere"
              data-description="Permittee shall not use plastic monofilament netting or similar material such as nylon or netting with cross joins that are bound or stitched (such as straw wattles, fiber rolls, or erosion-control blankets) in the Project Area for erosion control to avoid entanglement, strangling, or entrapment of Covered Species."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKD0JHB00RJNR3WFEE54","code":"COA 11.27","name":"Prohibit Monofilament and Synthetic Netting for Erosion Control"},{"id":"req_01M2ESMKERYGPK854VAVG6EA2F","code":"COA 11.28","name":"Prohibit Monofilament Netting Site-Wide"},{"id":"req_01M2ESMMG9385GQ6TSP4A11WCH","code":"COA 11.43","name":"Prohibit Plastic Monofilament Netting in the Exclusion Barrier"},{"id":"req_01M2ESMP6D71ETMFGEBPMJCEPZ","code":"COA 11.62","name":"Prohibit Plastic Monofilament Netting in the Exclusion Barrier"}]'
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
              data-class="adhere"
              data-description="25 inch per 24-hour period) and periods of dry weather (with less than a 40 percent chance of rain) unless otherwise approved by CDFW."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMNZAYEXA85ZFZK0QSTVT","code":"COA 11.58.1","name":"Restrict Work Period to Low Rainfall and Dry Weather"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species="giant garter snake"
              data-f-category="water"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Precipitation Work Limit"></esa-checkbox
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
              data-class="adhere"
              data-description="diverting runoff away from steep, denuded slopes or other critical areas with barriers, berms, ditches, or other facilities"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCP","code":"COA 11.26","name":"Divert Runoff Away from Steep or Denuded Slopes"},{"id":"req_01M2ESMKB95CSAHR95M0TPRXZV","code":"COA 11.26","name":"Install Runoff and Drainage Control Features"},{"id":"req_01M2ESMKB95CSAHR95M0TPRY00","code":"COA 11.26","name":"Replace or Upgrade Drainage Facilities to Minimize Erosion"}]'
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
              data-class="adhere"
              data-description="Sediment control measures shall include measures to retain sediment transported by on-site run-on or runoff; collect and direct surface runoff at non-erosive velocities to common drainage courses for storage and reuse; use sediment and turbidity areas where ground disturbance is adjacent to surface waters or wetlands; prevent mud tracking;"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB95CSAHR95M0TPRXZY","code":"COA 11.26","name":"Control On-Site Sediment Transport and Turbidity"}]'
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
              data-class="adhere"
              data-description="Permittee shall size the designated storage sites to accommodate all RTM, dredge material, or spoils expected to be generated by Covered Activities and shall size and locate the sites to minimize the impact or encroachment on environmentally sensitive areas within the Project Area."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7W9","code":"COA 11.16","name":"Size and Site Spoils and RTM Storage Areas"}]'
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
              data-class="adhere"
              data-description="e. CTS breeding pools); and shall not locate storage sites where materials may be washed back into a watercourse and pass into any other waters, in accordance with Fish and Game Code section 5650."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WA","code":"COA 11.16","name":"Restrict Storage Site Placement Near Habitat and Watercourses"}]'
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
              data-class="adhere"
              data-description="deposit or store excavated materials away from drainage courses and keep them covered when stored over five days or within 48 hours of a forecasted rain event."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB95CSAHR95M0TPRXZZ","code":"COA 11.26","name":"Cover Stockpiled Excavated Materials Away from Drainage Courses"}]'
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
              data-class="adhere"
              data-description="5 inch during a 24-hour period)."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMDND6Q88AT76ZWVB5VRY","code":"COA 9.7","name":"Restrict Sediment-Generating Work Ahead of Storm Onset"}]'
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
              data-class="adhere"
              data-description="retaining trees and vegetation where practicable to stabilize hillsides, retain moisture, and reduce erosion"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB8BZD2X5Z1JJH7FZCQ","code":"COA 11.26","name":"Retain Trees and Vegetation to Stabilize Hillsides"}]'
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
              data-class="adhere"
              data-description="installing wind erosion control features (e.g., application of hydraulic mulch or bonded fiber matrix)"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMKB95CSAHR95M0TPRXZW","code":"COA 11.26","name":"Install Wind Erosion Control Features"}]'
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
              data-class="adhere"
              data-description="25 inches per 24-hour period) and periods of dry weather (with less than a 30% chance of rain)."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="erosion"
              data-sub-name="Erosion and sediment control"
              data-reqs='[{"id":"req_01M2ESMJEM2TNZCJNZX5RKPYYN","code":"COA 11.13","name":"Restrict Work Near Waters During Rain and Wet Weather"},{"id":"req_01M2ESMMMH0D7BAQ0QJ0GX0MM6","code":"COA 11.45","name":"Cease Construction on 30% Rain Forecast Near CTS Breeding Sites"}]'
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
              ><span class="bcn-swcb" aria-label="3 obligations available">3</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXN"
              data-title="Daily In-Water Work Limit"
              data-class="adhere"
              data-description="32."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="in-water-work"
              data-sub-name="In-water work"
              data-reqs='[{"id":"req_01M2ESMKM1QM5KYNMAGYR6THA7","code":"COA 11.31.1","name":"Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"},{"id":"req_01M2ESMKQJF35M22DBMHN9PNW7","code":"COA 11.32","name":"Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"}]'
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
              data-class="adhere"
              data-description="Permittee shall only conduct in-water Covered Activities associated with construction or modification of bridges over Snodgrass Slough at Hood-Franklin Road and at Burns Cut near Port of Stockton from June 1 – October 31"
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="in-water-work"
              data-sub-name="In-water work"
              data-reqs='[{"id":"req_01M2ESMKNRCMV0V8XY1Q4V7P6R","code":"COA 11.31.2","name":"Restrict In-Water Construction to June 1–Oct 31 Window"}]'
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
              data-class="adhere"
              data-description="Permittee shall only conduct over-water geotechnical exploration from August 1 – October 31."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="in-water-work"
              data-sub-name="In-water work"
              data-reqs='[{"id":"req_01M2ESMKM1QM5KYNMAGYR6THA6","code":"COA 11.31.1","name":"Restrict Geotechnical Exploration to Aug 1–Oct 31 Window"}]'
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
              ><span class="bcn-swcb" aria-label="6 obligations available">6</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR71"
              data-title="Invasive Animal Removal"
              data-class="adhere"
              data-description="Any bullfrogs (Rana catesbeiana) encountered during construction or monitoring shall be permanently removed from the wild. Pursuant to Fish and Game Code section 6854, it is unlawful to take bullfrogs using firearms of any caliber or type."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMJV5HBRQ84EMFSSQ1EN9","code":"COA 11.19","name":"Permanently Remove Bullfrogs Encountered During Work"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species="bullfrogs"
              data-f-category="water"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Invasive Animal Removal"></esa-checkbox
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
              data-class="adhere"
              data-description="3). The Designated Biologist(s) and/or Biological Monitor(s) shall ensure that weed removal does not result in damage to root systems of the installed plants."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMJYNR0JHB8SG91G6WA6E","code":"COA 11.19.2","name":"Oversee Invasive Plant Removal During Restoration"}]'
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
              data-class="monitor"
              data-description="The Designated Biologist(s) or Fisheries Biologist(s) shall conduct visual inspections for invasive aquatic species on all in-water equipment, such as barges and small work boats, prior to equipment deployment into a waterway."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMKYPBG0Z69DC9K48B19K","code":"COA 11.36","name":"Inspect In-Water Equipment for Invasive Species Before Deployment"}]'
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
                >Invasive species inspection of in-water equipment before deployment</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR72"
              data-title="Invasive Species Spread Prevention"
              data-class="adhere"
              data-description=") from one Project construction site and/or water body to another. php)."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMJV4F9SC76BM0QNDZZW0","code":"COA 11.19","name":"Prevent Introduction and Spread of Invasive Species Between Sites"}]'
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
              data-class="adhere"
              data-description="2) to minimize risk of introduction and/or spread of molds such as Phythophthora spp."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMJV4F9SC76BM0QNDZZW1","code":"COA 11.19","name":"Implement BMPs to Prevent Phytophthora and Mold Spread"}]'
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
              data-class="adhere"
              data-description="3 miles of suitable aquatic/breeding CTS habitat."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="invasive-species"
              data-sub-name="Invasive species"
              data-reqs='[{"id":"req_01M2ESMNJTV6GZ0WKJRR39T85N","code":"COA 11.53","name":"Prohibit Introduction of Predatory Fish and Amphibians Near CTS Habitat"}]'
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
              ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7K"
              data-title="Non-Stormwater Discharge Prevention"
              data-class="adhere"
              data-description="measures to prevent non-stormwater discharges from reaching surface waters. Non-stormwater discharge examples include washing vehicles, cleaning streets, or applying erodible landscape material during rain."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="stormwater"
              data-sub-name="Stormwater and discharges"
              data-reqs='[{"id":"req_01M2ESMK9F910VNEH5Y3ZKSX81","code":"COA 11.25","name":"Prevent Non-Stormwater Discharges to Surface Waters"}]'
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
              data-class="adhere"
              data-description="Permittee shall conduct discharges from RTM draining operations in such a way as not to cause erosion at the discharge point."
              data-cat-id="water"
              data-cat-name="Water"
              data-sub-id="stormwater"
              data-sub-name="Stormwater and discharges"
              data-reqs='[{"id":"req_01M2ESMJKZ1ZK3GZFZDFASB7WE","code":"COA 11.16","name":"Prevent Erosion and Toxicity from RTM Drainage Discharge"}]'
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
              ><span class="bcn-swcb" aria-label="5 obligations available">5</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCY"
              data-title="Biological criterion on entrainment, survival and abundance reduction"
              data-class="adhere"
              data-description="Permittee shall ensure that Covered Activities, including construction and operations, do not result in: • A greater than 0.36 probability of reducing DS or LFS larvae exiting past Chipps Island, and instead becoming entrained in the north Delta intakes or central and south Delta, by greater than or equal to 3% as a result of Covered Activities relative to baseline conditions; and • A greater than 0.40 probability of reducing the LFS Fall Midwater Trawl Index by more than 3% as a result of…"
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="biological-criteria"
              data-sub-name="Biological performance criteria"
              data-reqs='[{"id":"req_01M2ESMT49GX2D5VVT0VT7RHK4","code":"COA 11.115.1","name":"Assess Covered Activities Against Smelt Entrainment and Abundance Criteria"},{"id":"req_01M2ESMT9J6H7C4D8AMBPRXB2A","code":"COA 11.116.1","name":"Assess Covered Activities Against Salmonid Survival Criterion"},{"id":"req_01M2ESMTEVCT94CYF2TVVG84MJ","code":"COA 11.117.1","name":"Assess Covered Activities Against Sturgeon Catch Criterion"}]'
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
              data-class="adhere"
              data-description="2."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="biological-criteria"
              data-sub-name="Biological performance criteria"
              data-reqs='[{"id":"req_01M2ESMT614Q1SBCBDNAFM28AQ","code":"COA 11.115.2","name":"Assess Smelt Population Growth Rate Against Baseline"},{"id":"req_01M2ESMTBAKV3R7VSK61G0CBDQ","code":"COA 11.116.2","name":"Assess Salmonid Population Growth Rate Against Baseline"},{"id":"req_01M2ESMTGMW3VF8AG8TM1SGS1C","code":"COA 11.117.2","name":"Assess Sturgeon Population Growth Rate Against Baseline"}]'
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
              data-class="adhere"
              data-description="117)."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="biological-criteria"
              data-sub-name="Biological performance criteria"
              data-reqs='[{"id":"req_01M2ESMGMAMKBY5AJH52CX903X","code":"COA 10.21.8","name":"Ensure Operations Meet Covered Fish Species Biological Criteria"}]'
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
              data-class="monitor"
              data-description="Permittee shall 1) fund the development and refinement of the following life cycle models; and 2) provide data to consider in life cycle model updates to quantify the effects of Covered Activities (construction, operations, and maintenance) through Phase 2 Operations and ensure compliance with Covered Fish Species Biological Criteria (Conditions of Approval 11.115, 11.116, and 11.117)"
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="biological-criteria"
              data-sub-name="Biological performance criteria"
              data-reqs='[{"id":"req_01M2ESMG9R17WXSGP8V7T4FYJV","code":"COA 10.21.2","name":"Fund and Support Covered Fish Species Life Cycle Models"}]'
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
                >Funding and data support for Covered Fish Species life cycle models</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9G"
              data-title="No entrainment of juvenile salmon at the north Delta intakes"
              data-class="adhere"
              data-description="Permittee shall ensure that Phase 1 and Phase 2 operations do not result in entrainment of juvenile CHNWR or CHNSR into the north Delta intakes."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="biological-criteria"
              data-sub-name="Biological performance criteria"
              data-reqs='[{"id":"req_01M2ESMT9J6H7C4D8AMBPRXB29","code":"COA 11.116.1","name":"Monitor for Juvenile Salmon Entrainment at North Delta Intakes"}]'
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
              data-class="adhere"
              data-description="Permittee shall operate SMSCG for additional days, beyond requirements included in the 2024 ITP, between June 1 and October 31."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMVB5C4P4MQC3XXD185QD","code":"COA 12.6.3","name":"Operate SMSCG Additional Days for DS Summer-Fall Habitat"}]'
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
              data-class="adhere"
              data-description="111. 111 allows for risk assessments and real-time decision-making when flows in the Sacramento River are between 20,000 – 35,000 cfs (December – February) or above 35,000 cfs."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHY","code":"COA 11.111.2","name":"Apply Default December Through May Operating Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHZ","code":"COA 11.111.2","name":"Apply Default June Operating Criteria Before Salmon Presence Off-Ramp"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ1","code":"COA 11.111.2","name":"Apply July Risk-Based Diversion Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ0","code":"COA 11.111.2","name":"Apply June Operations Criteria After Salmon Presence Off-Ramp"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNHX","code":"COA 11.111.2","name":"Apply November Risk-Based Diversion Criteria"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ5","code":"COA 11.111.2","name":"Implement Year-Round Diversion Conditions of Approval"}]'
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
              data-class="adhere"
              data-description="110."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSM9VZGDZ0JXS2Q0H0WH","code":"COA 11.111.2","name":"Coordinate Project Operations With CDFW During Phase 1 and 2"}]'
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
              data-class="adhere"
              data-description="Permittee shall not divert from the north Delta intakes unless an instantaneous bypass of Sacramento River flow of 10,000 cfs is maintained below the north Delta intake C."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBD","code":"COA 11.111","name":"Maintain Minimum Bypass Flow Below Intake C (Tidally Dominated)"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ2","code":"COA 11.111.2","name":"Maintain Mandatory Bypass Flow November 1 Through July 30"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ3","code":"COA 11.111.2","name":"Maintain Minimum Bypass Flow August 1 Through September 30"},{"id":"req_01M2ESMSMAA8RVNCHG7JT7CNJ4","code":"COA 11.111.2","name":"Maintain Minimum Bypass Flow October 1 Through October 31"}]'
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
              data-class="adhere"
              data-description="114."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSX62K9KSWNFWGPK95EM","code":"COA 11.112","name":"Cap Combined South and North Delta SWP Diversions"},{"id":"req_01M2ESMT0R3AVAQHERSDS0GMD2","code":"COA 11.114","name":"Cap Combined South and North Delta SWP Diversions"}]'
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
              data-class="adhere"
              data-description="Total Project diversions from the north Delta intakes shall not exceed ten percent (10 %) of the 25-hour running average Sacramento River flow at any time."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBG","code":"COA 11.111","name":"Cap Diversion at 10-12% of Flow, Flow Dominated"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBE","code":"COA 11.111","name":"Cap Diversion at 6% of Flow, Tidally Dominated"},{"id":"req_01M2ESMSGRP9DVS55MKS4X5YBF","code":"COA 11.111","name":"Cap Diversion at 6-10% of Flow, Transitional"}]'
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
              data-class="adhere"
              data-description="114 Permittee shall manage diversions at the north Delta intakes at all times to minimize increases in the timing, magnitude, frequency, or duration of flow reversals in the Sacramento River at the Georgiana Slough junction above pre-Project levels."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMGJJCNQNMMN75S2PQQTY","code":"COA 10.21.7","name":"Manage Diversions to Minimize Sacramento River Flow Reversals"}]'
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
              data-class="adhere"
              data-description="Sacramento River flow at Freeport between 10,900 – 15,000 cfs: Diversions shall not exceed 900 cfs plus 50% of the Sacramento River flow at Freeport above 11,000 cfs."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSJJ0K3HPN6NC01BTT5M","code":"COA 11.111.1","name":"Apply Post-15-Day High-Bypass June Diversion Limits"},{"id":"req_01M2ESMSJH110ZZVFMZ5MD0BV3","code":"COA 11.111.1","name":"Apply Tiered June Diversion Limits by Freeport Flow"}]'
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
              data-class="adhere"
              data-description="Permittee shall implement the final CDFW-approved operational scenario during Phase 1 and Phase 2 operations."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMVEMC08TZ9QWN5G7Y4AB","code":"COA 12.6.5","name":"Implement Approved Operational Scenario During Operations"}]'
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
              data-class="adhere"
              data-description="Shifting of exports from south Delta export facilities to north Delta export facilities during balanced conditions shall be limited by the following: • Export/inflow (E/I) ratio in D-1641; • Operating criteria described in Conditions of Approval 11.109, 11.111, 11.112, and 11.114; • Maintaining combined SWP and CVP south Delta diversions greater than 3,000 cfs; or • Maintaining total combined SWP diversion at the south Delta and north Delta diversions less than or equal to 7,180 cfs, excluding…"
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSYZF2RQ2A0WXRVCBAGM","code":"COA 11.113","name":"Limit Export Shifting to North Delta During Balanced Conditions"}]'
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
              data-class="adhere"
              data-description="Permittee shall not change upstream reservoir operations to move additional stored water through the north Delta intakes."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSX724175190C3250ET8","code":"COA 11.112","name":"Restrict Additional Upstream Reservoir Releases for Diversion"}]'
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
              data-class="adhere"
              data-description="Permittee shall not divert from the north Delta intakes while the Delta Cross Channel Gates are open."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSGQ0CME08SA39ND031V","code":"COA 11.111","name":"Prohibit Diversion While Delta Cross Channel Gates Are Open"}]'
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
              data-class="adhere"
              data-description="When balanced conditions are declared, consistent with COA, and the CVP and SWP are collectively withdrawing water from storage, Permittee shall not conduct diversions at the north Delta intakes when combined south Delta exports are less than or equal to 3,000 cfs."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSYZF2RQ2A0WXRVCBAGK","code":"COA 11.113","name":"Prohibit North Delta Diversions During Low-Export Balanced Conditions"}]'
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
              data-class="adhere"
              data-description="During Intake B and C Operational Performance Testing and Pump Maintenance Activities, Permittee shall not divert more than 500 cfs at any time, the maximum rate needed to conduct Intake B and C Operational Performance Testing and Pump Maintenance Activities, during Phase 1 Operations."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSEZ3J30473DP1TESQHB","code":"COA 11.110","name":"Cap Diversion at 500 CFS During Phase 1 Testing"},{"id":"req_01M2ESMSEYKHGEWS8KFQQF826N","code":"COA 11.110","name":"Cap Phase 1 Operations at One Calendar Year"},{"id":"req_01M2ESMSEZ3J30473DP1TESQHA","code":"COA 11.110","name":"Prohibit Diversion During Bethany Reservoir Contractor&apos;s Test"}]'
              data-f-commitment="COA 11"
              data-f-phase="Operations"
              data-f-species=""
              data-f-category="operations"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Phase 1 Operations Limit"></esa-checkbox
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
              data-class="adhere"
              data-description="Phase 2 Operations are authorized for no more than one calendar year."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSEZ3J30473DP1TESQHC","code":"COA 11.110","name":"Cap Phase 2 Operations at One Calendar Year"}]'
              data-f-commitment="COA 11"
              data-f-phase="Operations"
              data-f-species=""
              data-f-category="operations"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Phase 2 Operations Limit"></esa-checkbox
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
              data-class="adhere"
              data-description="2oC for seven days (does not have to be consecutive) in June."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="diversion-limits"
              data-sub-name="Diversion limits and bypass flows"
              data-reqs='[{"id":"req_01M2ESMSVD1KJC0F34NR5PD1GK","code":"COA 11.111.6","name":"Determine Salmon Passage and Temperature Trigger for June Shift"}]'
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
              ><span class="bcn-swcb" aria-label="5 obligations available">5</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEG"
              data-title="Approach Velocity Maintenance"
              data-class="adhere"
              data-description="Permittee shall employ additional actions such as the decrease of diversion rates at the north Delta intakes, as needed, to maintain Va."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="fish-screens"
              data-sub-name="Fish screens"
              data-reqs='[{"id":"req_01M2ESMHGJED0F8PP04FMVHBE1","code":"COA 10.27.2","name":"Maintain Approach Velocity Within Screening Criteria"}]'
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
              data-class="adhere"
              data-description="During diversions at the north Delta intakes, Permittee shall minimize localized Va by spreading the diversion as much as possible across intakes and fish screens, and by opening more fish screens than would be minimally required to meet the Va criterion."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="fish-screens"
              data-sub-name="Fish screens"
              data-reqs='[{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS8","code":"COA 11.109","name":"Spread Diversion Across Intakes to Minimize Localized Velocity"}]'
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
              data-class="adhere"
              data-description="2 feet per second across the wetted surface of each individual fish screen."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="fish-screens"
              data-sub-name="Fish screens"
              data-reqs='[{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS7","code":"COA 11.109","name":"Divert Only Within Fish Screen Approach Velocity Limit"},{"id":"req_01M2ESMSBE1S7VRTS2Y8GMEDS9","code":"COA 11.109","name":"Maintain Minimum Fish Screen Sweeping Velocity"}]'
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
              data-class="adhere"
              data-description="Permittee shall close the gate behind a screen unit and not divert water through that screen unit at north Delta intake B or C at any time unless the screen unit is fully functional."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="fish-screens"
              data-sub-name="Fish screens"
              data-reqs='[{"id":"req_01M2ESMSD72ZD3PSG8PQ392H6H","code":"COA 11.109.1","name":"Prohibit Diversion Through Non-Functional Screen Units"}]'
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
              data-class="monitor"
              data-description="Permittee shall perform visual inspections of the north Delta intake screens at least several times per year (using a diver and/or underwater inspection surveillance) to evaluate screen integrity, the effectiveness of the cleaning mechanism, and potential impingement of Covered Fish Species."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="fish-screens"
              data-sub-name="Fish screens"
              data-reqs='[{"id":"req_01M2ESMHM3MDV37W0VHBA7M7NS","code":"COA 10.28","name":"Visually Inspect Fish Screens Several Times per Year"}]'
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
              ><span class="bcn-swcb" aria-label="5 obligations available">5</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCV"
              data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
              data-class="adhere"
              data-description="The NDDMT shall begin to conduct risk assessments the last week of October, to look ahead to conditions starting in November, and meet weekly throughout November."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-coordination"
              data-sub-name="Operations coordination and data"
              data-reqs='[{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFK","code":"COA 11.111.3","name":"Begin Risk Assessments Last Week of October and Meet Weekly Through November"}]'
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
              data-class="adhere"
              data-description="The NDDMT shall include representatives from Permittee and CDFW. Upon mutual agreement, representatives from Reclamation, USFWS, and NMFS staff may also attend."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-coordination"
              data-sub-name="Operations coordination and data"
              data-reqs='[{"id":"req_01M2ESMSP28M32XPN201SKGW5F","code":"COA 11.111.3","name":"Establish NDDMT Membership With CDFW and Optional Federal Partners"},{"id":"req_01M2ESMSSPGPGXPREKCV7YCHHF","code":"COA 11.111.5","name":"Convene NDDMT to Review Real-time Operations Data"}]'
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
              data-class="adhere"
              data-description="Permittee may convene the NDDMT and conduct weekly Project operations risk assessments as needed from December – June each year."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-coordination"
              data-sub-name="Operations coordination and data"
              data-reqs='[{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFM","code":"COA 11.111.3","name":"Convene NDDMT As Needed December Through June"},{"id":"req_01M2ESMSP28M32XPN201SKGW5G","code":"COA 11.111.3","name":"Convene NDDMT Weekly Beginning First Week of October"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFN","code":"COA 11.111.3","name":"Convene NDDMT Weekly in July"}]'
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
              data-class="adhere"
              data-description="Permittee and CDFW WOMT representatives shall then confer and attempt to reach a resolution and agreed-upon Project operations."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-coordination"
              data-sub-name="Operations coordination and data"
              data-reqs='[{"id":"req_01M2ESMSSQYYRK2AF6VVNTC1XW","code":"COA 11.111.5","name":"Resolve Disputed Real-time Operations Decisions"}]'
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
              data-class="monitor"
              data-description="The NDDMT shall begin to conduct risk assessments the last week of October, to look ahead to conditions starting in November, and meet weekly throughout November."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-coordination"
              data-sub-name="Operations coordination and data"
              data-reqs='[{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFK","code":"COA 11.111.3","name":"Begin Risk Assessments Last Week of October and Meet Weekly Through November"},{"id":"req_01M2ESMSP3QEZQRVJ3HWC8EAFQ","code":"COA 11.111.3","name":"Conduct Risk Assessments Covering Components A Through G"}]'
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
              ><span class="bcn-swcb" aria-label="4 obligations available">4</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCS"
              data-title="Assessment of juvenile salmon route entrainment by reach and junction"
              data-class="monitor"
              data-description="1)."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-monitoring"
              data-sub-name="Operations monitoring and studies"
              data-reqs='[{"id":"req_01M2ESMGJJCNQNMMN75S2PQQTZ","code":"COA 10.21.7","name":"Assess Juvenile Salmon Route Entrainment by Reach and Junction"}]'
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
              data-class="monitor"
              data-description="27 to 1) ensure that impacts to Covered Fish Species during Phase 2 Operations do not exceed Covered Fish Species Biological Criteria, and 2) prepare for future regulatory processes that may address long-term authorizations for Project operations."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-monitoring"
              data-sub-name="Operations monitoring and studies"
              data-reqs='[{"id":"req_01M2ESMFGZ8HC07KDBN51TGSY5","code":"COA 10.18.2","name":"Evaluate Fish Monitoring Results Against Biological Criteria"}]'
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
              data-class="monitor"
              data-description="117)."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-monitoring"
              data-sub-name="Operations monitoring and studies"
              data-reqs='[{"id":"req_01M2ESMGBHRNY6JFE0S1HFFP8W","code":"COA 10.21.3","name":"Incorporate Food Web and Entrainment Results into Life Cycle Models"}]'
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
              data-class="monitor"
              data-description="Permittee shall work collaboratively with CDFW to model anticipated changes in the spatial and temporal extent of DS suitable habitat in Suisun Marsh and Grizzly Bay as a result of Phase 1 and Phase 2 operations."
              data-cat-id="operations"
              data-cat-name="Water operations"
              data-sub-id="ops-monitoring"
              data-sub-name="Operations monitoring and studies"
              data-reqs='[{"id":"req_01M2ESMVB5C4P4MQC3XXD185QC","code":"COA 12.6.3","name":"Model Operations Effects on DS Habitat in Suisun Marsh"}]'
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
                >Modeling of operations effects on Delta smelt habitat in Suisun Marsh and
                Grizzly Bay</span
              >
            </li>
          </ul>
        </details>
      </div>
    </details>
  </div>
</div>
```

## Styles
```css
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-overlay-hover`: #00000008 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
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
- `--spacing-300`: .75rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
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
