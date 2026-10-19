# Document matrix

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

## Markup
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
.bcn-fd-mark--dot {
  border-radius: var(--radius-full);
  width: 12px;
  height: 12px;
}
.bcn-fd-mark--dot[data-status="missing"] {
  border-radius: 2px;
}
.bcn-fd-mark--bar {
  width: calc(var(--tl-col, 30px) - 2px);
  height: 22px;
  font-size: 12px;
  font-weight: var(--typography-font-weight-semibold);
  border-radius: 3px;
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
.bcn-fd-mark--dot[data-status="received"] {
  background: var(--bcn-status-completed);
}
.bcn-fd-mark--dot[data-status="late"] {
  background: var(--bcn-status-in-progress);
}
.bcn-fd-mark--dot[data-status="upcoming"] {
  box-shadow: inset 0 0 0 1.5px var(--bcn-gray-500);
  background: var(--color-background-elevation-raised);
}
.bcn-fd-mark--bar[data-status="upcoming"] {
  background: var(--color-background-elevation-raised);
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
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-utility-danger`: #fcfcfc _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
