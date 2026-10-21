# Document matrix

Notifications & Daily Logs · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/field-documentation/

![Document matrix, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/document-matrix.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/document-matrix.phone.png

Answers what is missing on which hole. Rows are exploration locations grouped by agreement batch; columns are the expected document types in three groups. Received is green, received late amber, missing red, not yet due a grey outline.

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

## Components

- `bcn-fd-legend` (spoke) · `src/components/bcn/BcnFieldDocMatrix.astro`
- `bcn-fd-mark` (spoke) · `src/components/bcn/BcnFieldDocMark.astro`
- `bcn-fd-matrix` (spoke) · `src/components/bcn/BcnFieldDocMatrix.astro`
- `bcn-fd-table` (spoke) · `src/components/bcn/BcnFieldDocMatrix.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_119 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-fd-matrix" data-fd-matrix="">
  <div class="bcn-fd-matrix__module">
    <div class="bcn-fd-matrix__scroll">
      <table class="bcn-fd-table">
        <colgroup>
          <col class="bcn-fd-table__col-id" />
          <col class="bcn-fd-table__col-rig" />
          <col class="bcn-fd-table__col-drill" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc" />
          <col class="bcn-fd-table__col-doc bcn-fd-table__col-daily" />
          <!-- …and 8 more like this (<col class="bcn-fd-table__col-doc">) -->
        </colgroup>
        <thead>
          <tr>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Exploration ID</th>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Rig</th>
            <th scope="col" rowspan="2" class="bcn-fd-table__lead">Drilling</th>
            <th scope="colgroup" colspan="5" class="bcn-fd-table__group-head">Notifications</th>
            <th scope="colgroup" colspan="3" class="bcn-fd-table__group-head">
              Site clearance + USA
            </th>
            <th scope="colgroup" colspan="3" class="bcn-fd-table__group-head">Daily logs</th>
          </tr>
          <tr>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">Tribal</th>
            <th scope="col" class="bcn-fd-table__doc-head is-notifications">Landowner 14‑day</th>
            <th scope="col" class="bcn-fd-table__doc-head is-clearance">Site clearance 14‑day</th>
            <th scope="col" class="bcn-fd-table__doc-head is-daily">Biological</th>
            <!-- …and 7 more like this (<th class="bcn-fd-table__doc-head is-notifications">) -->
          </tr>
        </thead>
        <tbody data-fd-group="Batch 4 (TEP)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">Batch 4 (TEP)</span
                ><span class="bcn-fd-table__batch-alert">8 holes missing documents</span></span
              >
            </th>
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
          </tr>
          <!-- …and 22 more like this (<tr class="bcn-fd-table__row">) -->
        </tbody>
        <tbody data-fd-group="Batch 5 (TEP)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">Batch 5 (TEP)</span
                ><span class="bcn-fd-table__batch-alert">8 holes missing documents</span></span
              >
            </th>
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
          </tr>
          <!-- …and 14 more like this (<tr class="bcn-fd-table__row">) -->
        </tbody>
        <tbody data-fd-group="ROW (2026)">
          <tr class="bcn-fd-table__batch">
            <th scope="colgroup" colspan="14">
              <span class="cluster" data-gap="sm"
                ><span class="bcn-fd-table__batch-name">ROW (2026)</span
                ><span class="bcn-fd-table__batch-alert">14 holes missing documents</span></span
              >
            </th>
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
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
            <td class="bcn-fd-table__cell is-notifications" title="Tribal notification: Received">
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
            <td class="bcn-fd-table__cell is-clearance" title="Site clearance, 14-day: Received">
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
            <!-- …and 7 more like this (<td class="bcn-fd-table__cell is-notifications">) -->
          </tr>
          <!-- …and 24 more like this (<tr class="bcn-fd-table__row">) -->
        </tbody>
      </table>
    </div>
    <div class="repel bcn-fd-matrix__foot">
      <ul class="cluster bcn-fd-legend" data-gap="md" aria-label="Status key">
        <li class="cluster" data-gap="xs">
          <span class="bcn-fd-mark bcn-fd-mark--sm" data-status="received" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
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
        <!-- …and 2 more like this (<li class="cluster">) -->
      </ul>
      <span class="bcn-fd-matrix__count"
        >Drill holes: <span data-fd-total="">66</span
        ><span data-fd-shown="" hidden="">Showing: 66</span></span
      >
    </div>
  </div>
</div>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-fd-mark--bar.bcn-fd-mark--text {
  width: calc(var(--tl-col, 30px) - 2px);
  min-width: 0;
  padding: 0;
  font-size: 12px;
}
.bcn-fd-mark[data-status="received"] {
  background: color-mix(in srgb, var(--bcn-status-completed) 14%, transparent);
  color: var(--bcn-status-completed);
}
.bcn-fd-mark[data-status="late"] {
  background: color-mix(in srgb, var(--bcn-status-in-progress) 26%, transparent);
  color: color-mix(in srgb, var(--bcn-status-in-progress) 45%, var(--color-content-default));
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
@media (width<=87.5rem) {
  .bcn-fd-matrix__scroll {
    overflow-x: auto;
  }
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
  box-shadow: 0 -3px 0 var(--color-background-default);
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
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

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-status-completed` | `#2e7571` | component |
| `--bcn-status-in-progress` | `#f59e0b` | component |
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--bcn-status-overdue` | `#ce2c31` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-utility-danger` | `#fcfcfc` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
