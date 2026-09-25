# Document matrix

Rows are exploration locations grouped by agreement batch; columns are the expected document types in three groups. Received is green, received late amber, missing red, not yet due a grey outline.

## Key decisions
- A once-per-hole document is one mark. A daily log is received / expected drill days, red when any past drill day has no log.
- Unscheduled holes (TBD, Bio Stop) carry no expectations; their field note spans the document columns.
- Status is derived, never stored: record on or before the due date is Received, after it Received late, none and past due Missing, otherwise Upcoming.
- A semantic table rather than AG Grid: community AG Grid has no row grouping.

## Gotchas
- Due dates are N calendar days before drill start, rolled back to a working day (the client WORKDAY formula). They are not N working days.
- The tribal notification is one campaign-wide notice; every hole points at the same record.
- The USA ticket is due by the 72-hr site clearance date; the 14-day date opens its window.

## Done when
- Status filter "Missing documents" shows only rows with a red cell.
- Sort "Most missing" reorders inside each batch; batches keep their order.

## Markup
```html
<div class="stack bcn-fd-matrix" data-gap="md" data-fd-matrix="">
  <div class="bcn-filterbar">
    <div class="bcn-filterbar__top">
      <div class="bcn-filterbar__search bcn-filterbar__search--alone">
        <esa-text-field
          slot="search"
          data-fd-search="true"
          placeholder="Search exploration ID or property"
          aria-label="Search drill holes"
          size="md"
        ></esa-text-field
        ><span data-fd-search-clear="" hidden=""
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Clear search"
              title="Clear search"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path></svg
              ></span></button></span
        ></span>
      </div>
    </div>
    <div class="bcn-filterbar__bottom">
      <span class="bcn-filterbar__label">Filters</span>
      <div
        class="esa-filter-container typography-label-md"
        style="
          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
        "
      >
        <esa-filter-dropdown
          data-fd-facet="status"
          label="Status"
          multiple=""
          size="sm"
          data-options='[{"value":"missing","label":"Missing documents","color":"#ce2c31"},{"value":"late","label":"Received late","color":"#f59e0b"},{"value":"upcoming","label":"Upcoming","color":"#bdbdbd"},{"value":"complete","label":"Complete","color":"#2e7571"},{"value":"unscheduled","label":"Not scheduled","color":"#8a8a8a"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          data-fd-facet="agreement"
          label="Agreement"
          multiple=""
          size="sm"
          data-options='[{"value":"Batch 4 (TEP)","label":"Batch 4 (TEP)"},{"value":"Batch 5 (TEP)","label":"Batch 5 (TEP)"},{"value":"ROW (2026)","label":"ROW (2026)"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          data-fd-facet="rig"
          label="Rig"
          multiple=""
          size="sm"
          data-options='[{"value":"1","label":"Rig 1"},{"value":"2","label":"Rig 2"},{"value":"3","label":"Rig 3"},{"value":"4","label":"Rig 4"},{"value":"5","label":"Rig 5"},{"value":"6","label":"Rig 6"},{"value":"7","label":"Rig 7"},{"value":"8","label":"Rig 8"},{"value":"CPT","label":"CPT"},{"value":"HA","label":"Hand auger"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          data-fd-facet="county"
          label="County"
          multiple=""
          size="sm"
          data-options='[{"value":"Alameda","label":"Alameda"},{"value":"Sacramento","label":"Sacramento"},{"value":"San Joaquin","label":"San Joaquin"}]'
        ></esa-filter-dropdown>
      </div>
      <div class="bcn-filterbar__group bcn-filterbar__sort">
        <span class="bcn-filterbar__label">Sort</span
        ><esa-select
          slot="sort"
          data-fd-sort="true"
          size="md"
          data-options='[{"value":"start","label":"Drill start"},{"value":"missing","label":"Most missing"},{"value":"id","label":"Exploration ID"}]'
        ></esa-select>
      </div>
      <span class="bcn-filterbar__clear"
        ><span data-fd-clear=""
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
          </button>
          <script type="module">
            document.addEventListener(`click`, (e) => {
              let t = e.target.closest?.(`[data-esa-filter-clear]`);
              t &&
                t.dispatchEvent(
                  new CustomEvent(`esa-filter-clear`, { bubbles: !0, composed: !0 }),
                );
            });
          </script></span
        ></span
      >
    </div>
  </div>
  <div class="bcn-fd-matrix__module">
    <div class="bcn-fd-matrix__scroll">
      <table class="bcn-fd-table">
        <colgroup>
          <col class="bcn-fd-table__col-id" />
          <col class="bcn-fd-table__col-rig" />
          <col class="bcn-fd-table__col-drill" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc bcn-fd-table__col-daily" />
          <col class="bcn-fd-table__col-doc bcn-fd-table__col-daily" />
          <col class="bcn-fd-table__col-doc bcn-fd-table__col-daily" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Exploration ID</th>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Rig</th>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Drilling</th>
            <th scope="colgroup" colspan="5" class="bcn-fd-table__group-head">
              Notifications
            </th>
            <th scope="colgroup" colspan="3" class="bcn-fd-table__group-head">
              Site clearance + USA
            </th>
            <th scope="colgroup" colspan="3" class="bcn-fd-table__group-head">
              Daily logs
            </th>
          </tr>
          <tr>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">Tribal</th>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">
              Landowner 14‑day
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">
              Landowner 10‑day
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">
              Landowner 72‑hr
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">
              Public 3‑week
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-clearance">
              Site clearance 14‑day
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-clearance">USA ticket</th>
            <th scope="col" class="bcn-fd-table__doc-head is-clearance">
              Site clearance 72‑hr
            </th>
            <th scope="col" class="bcn-fd-table__doc-head is-daily">Biological</th>
            <th scope="col" class="bcn-fd-table__doc-head is-daily">Field coordinator</th>
            <th scope="col" class="bcn-fd-table__doc-head is-daily">Geologist</th>
          </tr>
        </thead>
        <tbody data-fd-group="Batch 4 (TEP)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">Batch 4 (TEP)</span
                ><span class="bcn-fd-table__batch-alert"
                  >8 holes missing documents</span
                ></span
              >
            </th>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-292"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-06-17"
            data-missing="1"
            data-search="dcrds-dh-292 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-292" data-fd-link="DCRDS-DH-292">DCRDS-DH-292</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Jun 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-317"
            data-status="upcoming"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-09-28"
            data-missing="0"
            data-search="dcrds-dh-317 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-317" data-fd-link="DCRDS-DH-317">DCRDS-DH-317</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Sep 28</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 1 received"
                >0/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 0 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily field coordinator log: 0 of 1 received"
                >0/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 0 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily geologist log: 0 of 1 received"
                >0/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-010"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-09-18"
            data-missing="1"
            data-search="dcrai-dh-010 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-010" data-fd-link="DCRAI-DH-010">DCRAI-DH-010</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Sep 18</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-011"
            data-status="complete"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-09-17"
            data-missing="0"
            data-search="dcrai-dh-011 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-011" data-fd-link="DCRAI-DH-011">DCRAI-DH-011</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Sep 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-013"
            data-status="complete"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-09-17"
            data-missing="0"
            data-search="dcrai-dh-013 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-013" data-fd-link="DCRAI-DH-013">DCRAI-DH-013</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Sep 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-294"
            data-status="upcoming"
            data-agreement="Batch 4 (TEP)"
            data-rig="HA"
            data-county="San Joaquin"
            data-start="2026-09-28"
            data-missing="0"
            data-search="dcrds-dh-294 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-294" data-fd-link="DCRDS-DH-294">DCRDS-DH-294</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 28 – Sep 29</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Upcoming">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="upcoming"
                role="img"
                aria-label="USA ticket: Upcoming"
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily field coordinator log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily geologist log: 0 of 2 received"
                >0/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-014"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-06-17"
            data-missing="2"
            data-search="dcrai-dh-014 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-014" data-fd-link="DCRAI-DH-014">DCRAI-DH-014</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Jun 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 10-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 1 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 1 received, 1 missing"
                >0/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-006"
            data-status="complete"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-06-18"
            data-missing="0"
            data-search="dcrai-dh-006 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-006" data-fd-link="DCRAI-DH-006">DCRAI-DH-006</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Jun 18</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-008"
            data-status="upcoming"
            data-agreement="Batch 4 (TEP)"
            data-rig="HA"
            data-county="San Joaquin"
            data-start="2026-09-28"
            data-missing="0"
            data-search="dcrai-dh-008 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-008" data-fd-link="DCRAI-DH-008">DCRAI-DH-008</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 28 – Sep 29</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily field coordinator log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily geologist log: 0 of 2 received"
                >0/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-009"
            data-status="upcoming"
            data-agreement="Batch 4 (TEP)"
            data-rig="HA"
            data-county="San Joaquin"
            data-start="2026-09-28"
            data-missing="0"
            data-search="dcrai-dh-009 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-009" data-fd-link="DCRAI-DH-009">DCRAI-DH-009</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 28 – Sep 29</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily field coordinator log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily geologist log: 0 of 2 received"
                >0/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRAI-DH-012"
            data-status="complete"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-09-18"
            data-missing="0"
            data-search="dcrai-dh-012 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRAI-DH-012" data-fd-link="DCRAI-DH-012">DCRAI-DH-012</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Sep 18</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCPWR-DH-001"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="4"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dcpwr-dh-001 wtr-8202-f"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCPWR-DH-001" data-fd-link="DCPWR-DH-001">DCPWR-DH-001</a>
            </th>
            <td class="bcn-fd-table__rig">4</td>
            <td class="bcn-fd-table__drill is-unscheduled">TBD</td>
            <td class="bcn-fd-table__note" colspan="11">
              Field Flood - GGS Zone (Oct 1)- Harvest
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-100"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dctr2-dh-100 state-7220-m"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-100" data-fd-link="DCTR2-DH-100">DCTR2-DH-100</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill is-unscheduled">Bio Stop</td>
            <td class="bcn-fd-table__note" colspan="11">
              Bio Stop - emailed no work this season SC
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-CPT-099"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="CPT"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dctr2-cpt-099 state-7220-m"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-CPT-099" data-fd-link="DCTR2-CPT-099">DCTR2-CPT-099</a>
            </th>
            <td class="bcn-fd-table__rig">CPT</td>
            <td class="bcn-fd-table__drill is-unscheduled">Bio Stop</td>
            <td class="bcn-fd-table__note" colspan="11">
              Bio Stop - emailed no work this season SC
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-CPT-102"
            data-status="upcoming"
            data-agreement="Batch 4 (TEP)"
            data-rig="CPT"
            data-county="San Joaquin"
            data-start="2026-09-28"
            data-missing="0"
            data-search="dctr2-cpt-102 state-7220-m"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-CPT-102" data-fd-link="DCTR2-CPT-102">DCTR2-CPT-102</a>
            </th>
            <td class="bcn-fd-table__rig">CPT</td>
            <td class="bcn-fd-table__drill">Sep 28 – Sep 29</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily field coordinator log: 0 of 2 received"
                >0/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 0 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="upcoming"
                role="img"
                aria-label="Daily geologist log: 0 of 2 received"
                >0/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-246"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="7"
            data-county="San Joaquin"
            data-start="2026-09-04"
            data-missing="1"
            data-search="dcrds-dh-246 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-246" data-fd-link="DCRDS-DH-246">DCRDS-DH-246</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Sep 4 – Sep 9</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 10-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 3 of 3 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 3 of 3 received"
                >3/3</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 3 of 3 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 3 of 3 received"
                >3/3</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 3 of 3 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 3 of 3 received"
                >3/3</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-248"
            data-status="complete"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-08-28"
            data-missing="0"
            data-search="dcrds-dh-248 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-248" data-fd-link="DCRDS-DH-248">DCRDS-DH-248</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 28</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-253"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-08-28"
            data-missing="2"
            data-search="dcrds-dh-253 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-253" data-fd-link="DCRDS-DH-253">DCRDS-DH-253</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 28</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-255"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-08-28"
            data-missing="1"
            data-search="dcrds-dh-255 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-255" data-fd-link="DCRDS-DH-255">DCRDS-DH-255</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 28</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR4-DH-004"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="8"
            data-county="San Joaquin"
            data-start="2026-08-31"
            data-missing="8"
            data-search="dctr4-dh-004 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR4-DH-004" data-fd-link="DCTR4-DH-004">DCTR4-DH-004</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 31 – Sep 15</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 11 of 11 received"
                >11/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 4 of 11 received, 7 missing, 3 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily field coordinator log: 4 of 11 received, 7 missing, 3 late"
                >4/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 10 of 11 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily geologist log: 10 of 11 received, 1 missing"
                >10/11</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR4-DH-008"
            data-status="missing"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="2026-08-31"
            data-missing="1"
            data-search="dctr4-dh-008 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR4-DH-008" data-fd-link="DCTR4-DH-008">DCTR4-DH-008</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 31 – Sep 10</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Missing">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="USA ticket: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 8 of 8 received"
                >8/8</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCSHF-DH-103"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="8"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dcshf-dh-103 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCSHF-DH-103" data-fd-link="DCSHF-DH-103">DCSHF-DH-103</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill is-unscheduled">TBD</td>
            <td class="bcn-fd-table__note" colspan="11">
              After October 1 Harvest / Bio Zone Travel
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCSHF-DH-098"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="5"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dcshf-dh-098 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCSHF-DH-098" data-fd-link="DCSHF-DH-098">DCSHF-DH-098</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill is-unscheduled">TBD</td>
            <td class="bcn-fd-table__note" colspan="11">
              After October 1 Harvest / Bio Zone Travel
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCSHF-DH-092"
            data-status="unscheduled"
            data-agreement="Batch 4 (TEP)"
            data-rig="8"
            data-county="San Joaquin"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dcshf-dh-092 sjc-0481"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCSHF-DH-092" data-fd-link="DCSHF-DH-092">DCSHF-DH-092</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill is-unscheduled">TBD</td>
            <td class="bcn-fd-table__note" colspan="11">
              After October 1 Harvest / Bio Zone Travel
            </td>
          </tr>
        </tbody>
        <tbody data-fd-group="Batch 5 (TEP)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">Batch 5 (TEP)</span
                ><span class="bcn-fd-table__batch-alert"
                  >8 holes missing documents</span
                ></span
              >
            </th>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-039"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="1"
            data-county="Alameda"
            data-start="2026-06-01"
            data-missing="1"
            data-search="dcbpp-dh-039 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-039" data-fd-link="DCBPP-DH-039">DCBPP-DH-039</a>
            </th>
            <td class="bcn-fd-table__rig">1</td>
            <td class="bcn-fd-table__drill">Jun 1 – Jun 11</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 9 of 9 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 9 of 9 received"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 9 of 9 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily field coordinator log: 9 of 9 received, 1 late"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 9 of 9 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily geologist log: 9 of 9 received, 1 late"
                >9/9</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-036"
            data-status="complete"
            data-agreement="Batch 5 (TEP)"
            data-rig="3"
            data-county="Alameda"
            data-start="2026-06-01"
            data-missing="0"
            data-search="dcbpp-dh-036 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-036" data-fd-link="DCBPP-DH-036">DCBPP-DH-036</a>
            </th>
            <td class="bcn-fd-table__rig">3</td>
            <td class="bcn-fd-table__drill">Jun 1 – Jun 12</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 10 of 10 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 10 of 10 received"
                >10/10</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 10 of 10 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 10 of 10 received"
                >10/10</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 10 of 10 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 10 of 10 received"
                >10/10</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-034"
            data-status="complete"
            data-agreement="Batch 5 (TEP)"
            data-rig="3"
            data-county="Alameda"
            data-start="2026-06-16"
            data-missing="0"
            data-search="dcbpp-dh-034 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-034" data-fd-link="DCBPP-DH-034">DCBPP-DH-034</a>
            </th>
            <td class="bcn-fd-table__rig">3</td>
            <td class="bcn-fd-table__drill">Jun 16 – Jun 25</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 8 of 8 received"
                >8/8</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCSHF-DH-144"
            data-status="late"
            data-agreement="Batch 5 (TEP)"
            data-rig="4"
            data-county="Alameda"
            data-start="2026-06-12"
            data-missing="0"
            data-search="dcshf-dh-144 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCSHF-DH-144" data-fd-link="DCSHF-DH-144">DCSHF-DH-144</a>
            </th>
            <td class="bcn-fd-table__rig">4</td>
            <td class="bcn-fd-table__drill">Jun 12 – Jun 30</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received late">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="late"
                role="img"
                aria-label="USA ticket: Received late"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 13 of 13 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 13 of 13 received"
                >13/13</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 13 of 13 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 13 of 13 received"
                >13/13</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 13 of 13 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily geologist log: 13 of 13 received, 1 late"
                >13/13</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-003"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="3"
            data-county="Alameda"
            data-start="2026-07-13"
            data-missing="2"
            data-search="dcbpp-dh-003 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-003" data-fd-link="DCBPP-DH-003">DCBPP-DH-003</a>
            </th>
            <td class="bcn-fd-table__rig">3</td>
            <td class="bcn-fd-table__drill">Jul 13 – Jul 22</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 7 of 8 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily field coordinator log: 7 of 8 received, 1 missing"
                >7/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 8 of 8 received"
                >8/8</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-066"
            data-status="late"
            data-agreement="Batch 5 (TEP)"
            data-rig="6"
            data-county="Alameda"
            data-start="2026-06-15"
            data-missing="0"
            data-search="dcbpp-dh-066 pwr-8064"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-066" data-fd-link="DCBPP-DH-066">DCBPP-DH-066</a>
            </th>
            <td class="bcn-fd-table__rig">6</td>
            <td class="bcn-fd-table__drill">Jun 15 – Jun 25</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="late"
                role="img"
                aria-label="Landowner notification, 72-hr: Received late"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 9 of 9 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily biological monitoring log: 9 of 9 received, 1 late"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 9 of 9 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily field coordinator log: 9 of 9 received, 1 late"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 9 of 9 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 9 of 9 received"
                >9/9</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-DH-019"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="7"
            data-county="Alameda"
            data-start="2026-07-06"
            data-missing="1"
            data-search="dcbpp-dh-019 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-DH-019" data-fd-link="DCBPP-DH-019">DCBPP-DH-019</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Jul 6 – Jul 15</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 7 of 8 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily field coordinator log: 7 of 8 received, 1 missing"
                >7/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 8 of 8 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily geologist log: 8 of 8 received, 1 late"
                >8/8</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCBPP-CPT-035"
            data-status="complete"
            data-agreement="Batch 5 (TEP)"
            data-rig="CPT"
            data-county="Alameda"
            data-start="2026-07-23"
            data-missing="0"
            data-search="dcbpp-cpt-035 pwr-8063"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCBPP-CPT-035" data-fd-link="DCBPP-CPT-035">DCBPP-CPT-035</a>
            </th>
            <td class="bcn-fd-table__rig">CPT</td>
            <td class="bcn-fd-table__drill">Jul 23 – Jul 24</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 2 of 2 received"
                >2/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 2 of 2 received"
                >2/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 2 of 2 received"
                >2/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCIN3-DH-016"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="2"
            data-county="Sacramento"
            data-start="2026-07-21"
            data-missing="2"
            data-search="dcin3-dh-016 sac-0058"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCIN3-DH-016" data-fd-link="DCIN3-DH-016">DCIN3-DH-016</a>
            </th>
            <td class="bcn-fd-table__rig">2</td>
            <td class="bcn-fd-table__drill">Jul 21 – Jul 27</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 4 of 5 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily biological monitoring log: 4 of 5 received, 1 missing"
                >4/5</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 5 of 5 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 5 of 5 received"
                >5/5</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 5 of 5 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 5 of 5 received"
                >5/5</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-010"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="3"
            data-county="Sacramento"
            data-start="2026-08-17"
            data-missing="1"
            data-search="dctr2-dh-010 sac-2484"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-010" data-fd-link="DCTR2-DH-010">DCTR2-DH-010</a>
            </th>
            <td class="bcn-fd-table__rig">3</td>
            <td class="bcn-fd-table__drill">Aug 17 – Aug 31</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 11 of 11 received"
                >11/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 11 of 11 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily field coordinator log: 11 of 11 received, 1 late"
                >11/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 11 of 11 received"
                >11/11</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-131"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="5"
            data-county="Sacramento"
            data-start="2026-06-25"
            data-missing="1"
            data-search="dcrds-dh-131 sac-2851"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-131" data-fd-link="DCRDS-DH-131">DCRDS-DH-131</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Jun 25</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR1-DH-008"
            data-status="complete"
            data-agreement="Batch 5 (TEP)"
            data-rig="2"
            data-county="Sacramento"
            data-start="2026-06-16"
            data-missing="0"
            data-search="dctr1-dh-008 sac-0274"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR1-DH-008" data-fd-link="DCTR1-DH-008">DCTR1-DH-008</a>
            </th>
            <td class="bcn-fd-table__rig">2</td>
            <td class="bcn-fd-table__drill">Jun 16 – Jun 30</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 11 of 11 received"
                >11/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 11 of 11 received"
                >11/11</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 11 of 11 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 11 of 11 received"
                >11/11</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR1-DH-056"
            data-status="unscheduled"
            data-agreement="Batch 5 (TEP)"
            data-rig="3"
            data-county="Sacramento"
            data-start="9999-12-31"
            data-missing="0"
            data-search="dctr1-dh-056 state-7220-a"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR1-DH-056" data-fd-link="DCTR1-DH-056">DCTR1-DH-056</a>
            </th>
            <td class="bcn-fd-table__rig">3</td>
            <td class="bcn-fd-table__drill is-unscheduled">TBD</td>
            <td class="bcn-fd-table__note" colspan="11">
              Bio Stop Pos - Mow Plan - need clearance
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-029"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="4"
            data-county="Sacramento"
            data-start="2026-08-24"
            data-missing="1"
            data-search="dctr2-dh-029 state-7220-b"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-029" data-fd-link="DCTR2-DH-029">DCTR2-DH-029</a>
            </th>
            <td class="bcn-fd-table__rig">4</td>
            <td class="bcn-fd-table__drill">Aug 24 – Sep 3</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 9 of 9 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 9 of 9 received"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 9 of 9 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 9 of 9 received"
                >9/9</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 9 of 9 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily geologist log: 9 of 9 received, 1 late"
                >9/9</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-CPT-024"
            data-status="complete"
            data-agreement="Batch 5 (TEP)"
            data-rig="CPT"
            data-county="Sacramento"
            data-start="2026-09-04"
            data-missing="0"
            data-search="dctr2-cpt-024 state-7220-b"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-CPT-024" data-fd-link="DCTR2-CPT-024">DCTR2-CPT-024</a>
            </th>
            <td class="bcn-fd-table__rig">CPT</td>
            <td class="bcn-fd-table__drill">Sep 4</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-184"
            data-status="missing"
            data-agreement="Batch 5 (TEP)"
            data-rig="5"
            data-county="Sacramento"
            data-start="2026-08-21"
            data-missing="1"
            data-search="dcrds-dh-184 sac-2484"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-184" data-fd-link="DCRDS-DH-184">DCRDS-DH-184</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 21</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
        </tbody>
        <tbody data-fd-group="ROW (2026)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">ROW (2026)</span
                ><span class="bcn-fd-table__batch-alert"
                  >14 holes missing documents</span
                ></span
              >
            </th>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-012"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="7"
            data-county="Sacramento"
            data-start="2026-08-25"
            data-missing="1"
            data-search="dctr2-dh-012 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-012" data-fd-link="DCTR2-DH-012">DCTR2-DH-012</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Aug 25 – Sep 2</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 7 of 7 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 7 of 7 received"
                >7/7</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 6 of 7 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily field coordinator log: 6 of 7 received, 1 missing"
                >6/7</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 7 of 7 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 7 of 7 received"
                >7/7</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-015"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="7"
            data-county="Sacramento"
            data-start="2026-08-12"
            data-missing="1"
            data-search="dctr2-dh-015 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-015" data-fd-link="DCTR2-DH-015">DCTR2-DH-015</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Aug 12 – Aug 19</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 6 of 6 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 6 of 6 received"
                >6/6</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 6 of 6 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 6 of 6 received"
                >6/6</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 6 of 6 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 6 of 6 received"
                >6/6</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCTR2-DH-017"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="7"
            data-county="Sacramento"
            data-start="2026-07-29"
            data-missing="0"
            data-search="dctr2-dh-017 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCTR2-DH-017" data-fd-link="DCTR2-DH-017">DCTR2-DH-017</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Jul 29 – Aug 7</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 8 of 8 received"
                >8/8</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 8 of 8 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 8 of 8 received"
                >8/8</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCLEV-DH-015"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-19"
            data-missing="0"
            data-search="dclev-dh-015 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCLEV-DH-015" data-fd-link="DCLEV-DH-015">DCLEV-DH-015</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 19 – Aug 20</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 2 of 2 received"
                >2/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 2 of 2 received"
                >2/2</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 2 of 2 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 2 of 2 received"
                >2/2</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCLEV-DH-026"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="7"
            data-county="Sacramento"
            data-start="2026-09-11"
            data-missing="1"
            data-search="dclev-dh-026 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCLEV-DH-026" data-fd-link="DCLEV-DH-026">DCLEV-DH-026</a>
            </th>
            <td class="bcn-fd-table__rig">7</td>
            <td class="bcn-fd-table__drill">Sep 11</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Public notification (3-week look-ahead): Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-158"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-02"
            data-missing="2"
            data-search="dcrds-dh-158 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-158" data-fd-link="DCRDS-DH-158">DCRDS-DH-158</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 2</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Missing">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="USA ticket: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-166"
            data-status="late"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-20"
            data-missing="0"
            data-search="dcrds-dh-166 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-166" data-fd-link="DCRDS-DH-166">DCRDS-DH-166</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 20</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received, 1 late"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-171"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-14"
            data-missing="0"
            data-search="dcrds-dh-171 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-171" data-fd-link="DCRDS-DH-171">DCRDS-DH-171</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 14</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-172"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-13"
            data-missing="0"
            data-search="dcrds-dh-172 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-172" data-fd-link="DCRDS-DH-172">DCRDS-DH-172</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 13</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-177"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="5"
            data-county="Sacramento"
            data-start="2026-08-21"
            data-missing="0"
            data-search="dcrds-dh-177 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-177" data-fd-link="DCRDS-DH-177">DCRDS-DH-177</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 21</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-178"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="5"
            data-county="Sacramento"
            data-start="2026-08-20"
            data-missing="1"
            data-search="dcrds-dh-178 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-178" data-fd-link="DCRDS-DH-178">DCRDS-DH-178</a>
            </th>
            <td class="bcn-fd-table__rig">5</td>
            <td class="bcn-fd-table__drill">Aug 20</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 1 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 1 received, 1 missing"
                >0/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-156"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-01"
            data-missing="1"
            data-search="dcrds-dh-156 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-156" data-fd-link="DCRDS-DH-156">DCRDS-DH-156</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 1</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Missing">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="USA ticket: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-157"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-01"
            data-missing="0"
            data-search="dcrds-dh-157 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-157" data-fd-link="DCRDS-DH-157">DCRDS-DH-157</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 1</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-168"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-17"
            data-missing="0"
            data-search="dcrds-dh-168 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-168" data-fd-link="DCRDS-DH-168">DCRDS-DH-168</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-169"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-17"
            data-missing="1"
            data-search="dcrds-dh-169 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-169" data-fd-link="DCRDS-DH-169">DCRDS-DH-169</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 17</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 10-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-175"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-08"
            data-missing="1"
            data-search="dcrds-dh-175 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-175" data-fd-link="DCRDS-DH-175">DCRDS-DH-175</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 8</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Public notification (3-week look-ahead): Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-176"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-09"
            data-missing="2"
            data-search="dcrds-dh-176 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-176" data-fd-link="DCRDS-DH-176">DCRDS-DH-176</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 9</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Public notification (3-week look-ahead): Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-160"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-03"
            data-missing="3"
            data-search="dcrds-dh-160 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-160" data-fd-link="DCRDS-DH-160">DCRDS-DH-160</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 3</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 72-hr: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Missing">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="USA ticket: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 0 of 1 received, 1 missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="missing"
                role="img"
                aria-label="Daily biological monitoring log: 0 of 1 received, 1 missing"
                >0/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-161"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-03"
            data-missing="0"
            data-search="dcrds-dh-161 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-161" data-fd-link="DCRDS-DH-161">DCRDS-DH-161</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 3</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-162"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-04"
            data-missing="1"
            data-search="dcrds-dh-162 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-162" data-fd-link="DCRDS-DH-162">DCRDS-DH-162</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 4</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="late"
                role="img"
                aria-label="Landowner notification, 72-hr: Received late"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Missing">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="USA ticket: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-170"
            data-status="late"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-14"
            data-missing="0"
            data-search="dcrds-dh-170 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-170" data-fd-link="DCRDS-DH-170">DCRDS-DH-170</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 14</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="late"
                role="img"
                aria-label="Landowner notification, 72-hr: Received late"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-174"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-08"
            data-missing="1"
            data-search="dcrds-dh-174 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-174" data-fd-link="DCRDS-DH-174">DCRDS-DH-174</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 8</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Public notification (3-week look-ahead): Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-159"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-02"
            data-missing="1"
            data-search="dcrds-dh-159 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-159" data-fd-link="DCRDS-DH-159">DCRDS-DH-159</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 2</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Site clearance, 14-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-173"
            data-status="complete"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-13"
            data-missing="0"
            data-search="dcrds-dh-173 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-173" data-fd-link="DCRDS-DH-173">DCRDS-DH-173</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 13</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-164"
            data-status="late"
            data-agreement="ROW (2026)"
            data-rig="HA"
            data-county="Sacramento"
            data-start="2026-09-04"
            data-missing="0"
            data-search="dcrds-dh-164 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-164" data-fd-link="DCRDS-DH-164">DCRDS-DH-164</a>
            </th>
            <td class="bcn-fd-table__rig">HA</td>
            <td class="bcn-fd-table__drill">Sep 4</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 10-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received, 1 late"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received, 1 late"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="late"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received, 1 late"
                >1/1</span
              >
            </td>
          </tr>
          <tr
            class="bcn-fd-table__row"
            data-fd-row=""
            data-hole="DCRDS-DH-167"
            data-status="missing"
            data-agreement="ROW (2026)"
            data-rig="8"
            data-county="Sacramento"
            data-start="2026-08-18"
            data-missing="1"
            data-search="dcrds-dh-167 state or county"
          >
            <th scope="row" class="bcn-fd-table__id">
              <a href="?hole=DCRDS-DH-167" data-fd-link="DCRDS-DH-167">DCRDS-DH-167</a>
            </th>
            <td class="bcn-fd-table__rig">8</td>
            <td class="bcn-fd-table__drill">Aug 18</td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Tribal notification: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Tribal notification: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 10-day: Missing"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="missing"
                role="img"
                aria-label="Landowner notification, 10-day: Missing"
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
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Landowner notification, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Landowner notification, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-notifications"
              title="Public notification (3-week look-ahead): Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Public notification (3-week look-ahead): Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 14-day: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 14-day: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td class="bcn-fd-table__cell is-clearance" title="USA ticket: Received">
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="USA ticket: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-clearance"
              title="Site clearance, 72-hr: Received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md"
                data-status="received"
                role="img"
                aria-label="Site clearance, 72-hr: Received"
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
                    <path d="M20 6 9 17l-5-5"></path></svg></span
              ></span>
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily biological monitoring log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily biological monitoring log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily field coordinator log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily field coordinator log: 1 of 1 received"
                >1/1</span
              >
            </td>
            <td
              class="bcn-fd-table__cell is-daily"
              title="Daily geologist log: 1 of 1 received"
            >
              <span
                class="bcn-fd-mark bcn-fd-mark--md bcn-fd-mark--text"
                data-status="received"
                role="img"
                aria-label="Daily geologist log: 1 of 1 received"
                >1/1</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="repel bcn-fd-matrix__foot">
      <ul class="cluster bcn-fd-legend" data-gap="md" aria-label="Status key">
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--sm"
            data-status="received"
            aria-hidden="true"
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
                <path d="M20 6 9 17l-5-5"></path></svg></span></span
          ><span>Received</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span class="bcn-fd-mark bcn-fd-mark--sm" data-status="late" aria-hidden="true"
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
                <path d="M20 6 9 17l-5-5"></path></svg></span></span
          ><span>Received late</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--sm"
            data-status="missing"
            aria-hidden="true"
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
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path></svg></span></span
          ><span>Missing</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--sm"
            data-status="upcoming"
            aria-hidden="true"
          ></span
          ><span>Upcoming</span>
        </li>
      </ul>
      <span class="bcn-fd-matrix__count"
        >Drill holes: <span data-fd-total="">66</span
        ><span data-fd-shown="" hidden=""></span
      ></span>
    </div>
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
.bcn-fd-mark {
  border-radius: var(--radius-100);
  vertical-align: middle;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 24px;
  display: inline-flex;
}
.bcn-fd-mark--sm {
  width: 22px;
  height: 20px;
}
.bcn-fd-mark--text {
  width: auto;
  min-width: 3.25rem;
  padding: 0 var(--spacing-200);
  font-size: 13px;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
}
.bcn-fd-mark[data-status="received"] {
  background: color-mix(in srgb, var(--bcn-status-completed) 14%, transparent);
  color: var(--bcn-status-completed);
}
.bcn-fd-mark[data-status="late"] {
  background: color-mix(in srgb, var(--bcn-status-in-progress) 26%, transparent);
  color: color-mix(
    in srgb,
    var(--bcn-status-in-progress) 45%,
    var(--color-content-default)
  );
}
.bcn-fd-mark[data-status="missing"] {
  background: var(--bcn-status-overdue);
  color: var(--color-content-on-utility-danger);
}
.bcn-fd-mark[data-status="upcoming"] {
  box-shadow: inset 0 0 0 1px var(--bcn-status-not-started);
  color: var(--color-content-default-tertiary);
}
.bcn-fd-matrix__module {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
}
.bcn-fd-table {
  border-collapse: separate;
  border-spacing: 0;
  font-variant-numeric: tabular-nums;
  width: 100%;
  color: var(--color-content-default);
  font-size: 13px;
}
.bcn-fd-table__col-id {
  width: 8.5rem;
}
.bcn-fd-table__col-rig {
  width: 2.75rem;
}
.bcn-fd-table__col-drill {
  width: 6.75rem;
}
.bcn-fd-table__col-doc {
  width: 4.5rem;
}
.bcn-fd-table__col-daily {
  width: 5rem;
}
.bcn-fd-table thead th {
  z-index: 1;
  background: var(--color-background-default);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  text-align: left;
  vertical-align: bottom;
  padding: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default);
  line-height: 1.25;
  position: sticky;
  top: 0;
}
.bcn-fd-table thead tr:nth-child(2) th {
  top: 2.1rem;
}
.bcn-fd-table__group-head {
  text-align: center !important;
  color: var(--color-content-default) !important;
}
.bcn-fd-table__doc-head {
  text-align: center !important;
  font-weight: var(--typography-font-weight-medium) !important;
}
.bcn-fd-table__group-head,
.bcn-fd-table__doc-head.is-notifications:first-child,
.bcn-fd-table__doc-head.is-notifications + .is-clearance,
.bcn-fd-table__doc-head.is-clearance + .is-daily,
.bcn-fd-table__cell.is-notifications:nth-child(4),
.bcn-fd-table__cell.is-notifications + .is-clearance,
.bcn-fd-table__cell.is-clearance + .is-daily,
.bcn-fd-table__note {
  border-left: 1px solid var(--color-border-default);
}
.bcn-fd-table__batch th {
  text-align: left;
  padding: var(--spacing-250) var(--spacing-300);
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
}
tbody + tbody .bcn-fd-table__batch th {
  border-top: 1px solid var(--color-border-default);
}
.bcn-fd-table__batch-name {
  color: var(--color-content-default);
  font-size: 14px;
}
.bcn-fd-table__batch-alert {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-utility-danger);
}
.bcn-fd-table__row > {
  height: 40px;
  padding: 0 var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default-subtle);
  white-space: nowrap;
}
.bcn-fd-table__row {
  cursor: pointer;
}
.bcn-fd-table__row:hover > {
  background: var(--color-background-default);
}
.bcn-fd-table__row[hidden],
.bcn-fd-table tbody[hidden] {
  display: none;
}
.bcn-fd-table__id {
  text-align: left;
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-fd-table__id a {
  color: var(--color-content-default);
  text-decoration: none;
}
.bcn-fd-table__row:hover .bcn-fd-table__id a,
.bcn-fd-table__id a:focus-visible {
  text-decoration: underline;
}
.bcn-fd-table__rig,
.bcn-fd-table__drill {
  color: var(--color-content-default-secondary);
}
.bcn-fd-table__drill.is-unscheduled {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-fd-table__cell {
  text-align: center;
}
.bcn-fd-table__note {
  color: var(--color-content-default-tertiary);
  white-space: normal;
}
.bcn-fd-matrix__foot {
  padding: var(--spacing-200) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-default);
  border-radius: 0 0 var(--radius-100) var(--radius-100);
  color: var(--color-content-default-secondary);
  font-size: 13px;
}
.bcn-fd-legend {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-fd-matrix__count {
  font-variant-numeric: tabular-nums;
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
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
}
.bcn-filterbar__top {
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__bottom {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__top + .bcn-filterbar__bottom {
  border-top: 1px solid var(--color-border-default);
}
.bcn-filterbar__group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 380px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__search--alone {
  flex: 1;
  margin-left: 0;
}
.bcn-filterbar__sort {
  margin-left: var(--spacing-600);
  --form-height-md: 32px;
  --typography-label-md-font-size: 14px;
}
.bcn-filterbar__sort esa-select {
  width: 9rem;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
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
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
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
- `--bcn-status-completed`: #2e7571 _(component)_
- `--bcn-status-in-progress`: #f59e0b _(component)_
- `--bcn-status-not-started`: #bdbdbd _(component)_
- `--bcn-status-overdue`: #ce2c31 _(component)_
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
- `--color-content-on-utility-danger`: #fcfcfc _(semantic)_
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
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
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
