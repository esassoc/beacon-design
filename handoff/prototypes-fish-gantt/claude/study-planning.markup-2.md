# Study Planning: markup, part 2 of 3

```html
                <span class="bcn-roles__fb-divider"></span>
                <div class="bcn-roles__fb-group">
                  <span class="bcn-roles__fb-label">Lead</span
                  ><esa-select
                    id="bcn-roles-lead"
                    class="bcn-roles__fb-leadsel"
                    size="sm"
                  ></esa-select>
                </div>
                <span class="bcn-roles__fb-hint">Click a study to edit its roles</span>
              </div>
              <div class="bcn-roles__scroll">
                <table class="bcn-roles__table">
                  <thead>
                    <tr>
                      <th class="bcn-roles__corner" scope="col">Study</th>
                      <th class="bcn-roles__ws" scope="col">Study / Plan Lead</th>
                      <th class="bcn-roles__ws" scope="col">Study / Plan Design</th>
                      <!-- …and 9 more like this (<th class="bcn-roles__ws">) -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="bcn-roles__row"
                      data-id="STY-014"
                      data-ref="10.19.1"
                      data-name="migration &amp; survival study"
                      data-lead="DWR-DISE"
                    >
                      <th class="bcn-roles__study" scope="row">
                        <span class="bcn-roles__coa">10.19.1</span
                        ><span class="bcn-roles__name">Migration &amp; Survival Study</span>
                      </th>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org"
                            >DWR-DISE/DCO<span
                              class="bcn-roles__tentative"
                              title="Tentative — unconfirmed in the source"
                              >?</span
                            ></span
                          ><span class="bcn-roles__person">Kevin, Javier, Chris G.</span></span
                        >
                      </td>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org"
                            >Consultant<span
                              class="bcn-roles__tentative"
                              title="Tentative — unconfirmed in the source"
                              >?</span
                            ></span
                          ><span class="bcn-roles__person">ESA/USGS</span></span
                        >
                      </td>
                      <!-- …and 9 more like this (<td class="bcn-roles__cell">) -->
                    </tr>
                    <tr
                      class="bcn-roles__row"
                      data-id="STY-015"
                      data-ref="10.19.2"
                      data-name="predation study"
                      data-lead="DWR-DISE"
                    >
                      <th class="bcn-roles__study" scope="row">
                        <span class="bcn-roles__coa">10.19.2</span
                        ><span class="bcn-roles__name">Predation Study</span>
                      </th>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org">DWR-DISE</span
                          ><span class="bcn-roles__person">Javier/Parisa</span></span
                        >
                      </td>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org"
                            >DWR-DISE<span
                              class="bcn-roles__tentative"
                              title="Tentative — unconfirmed in the source"
                              >?</span
                            ></span
                          ><span class="bcn-roles__person">Javier/Parisa, ESA/ICF</span></span
                        >
                      </td>
                      <!-- …and 9 more like this (<td class="bcn-roles__cell">) -->
                    </tr>
                    <!-- …and 6 more like this (<tr class="bcn-roles__row">) -->
                  </tbody>
                </table>
              </div>
              <p class="bcn-roles__note">
                Generated from each study’s role assignments — the same records the gantt reads. A
                <span class="bcn-roles__tentative bcn-roles__tentative--legend">?</span> marks an
                assignment the source left unconfirmed.
              </p>
            </div>
            <!-- script type="module" removed (0 bytes) -->
          </div>
          <!-- …and 2 more like this (<div>) -->
        </section>
      </div>
    </div>
    <!-- script type="module" removed (0 bytes) --><!-- script type="module" removed (0 bytes) --><esa-side-dialog
      id="node-drawer"
      size="md"
      style="--z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="bcn-node-head">
        <span class="bcn-node-head__id" id="node-id">—</span
        ><span class="bcn-node-head__title" id="node-title">Select a node</span>
      </div>
      <div class="bcn-node-body">
        <section
          data-node-panel="COA-10.19"
          data-node-name="Fisheries Evaluation Studies"
          data-node-tier="Commitment"
          hidden=""
        >
          <div class="bcn-edit">
            <!-- ── Status (TASKS only — the one tier carrying execution status).
       Section title carries the label; the select itself is label-less so the
       three sections share one typographic hierarchy. ── --><!-- ── Lead (STUDIES only — accountability sits on the Study; sub-studies/tasks
       inherit it; programs roll it up). Writes through wbApi.setLead. ── --><!-- ── Date range (EVERY tier — own dates; parents keep the derived bar) ── -->
            <section class="bcn-edit__section">
              <h3 class="bcn-edit__title">Date range</h3>
              <div class="bcn-edit__sched-grid" role="group" aria-label="Node schedule">
                <esa-select
                  label="Start month"
                  size="sm"
                  placeholder="Month"
                  options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                  data-wb-field="start"
                  data-part="month"
                ></esa-select
                ><esa-select
                  label="Start year"
                  size="sm"
                  placeholder="Year"
                  options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label"… [609 characters]'
                  data-wb-field="start"
                  data-part="year"
                ></esa-select
                ><!-- …and 2 more like this (<esa-select>) -->
              </div>
              <span class="bcn-edit__hint" data-live="sched-hint"
                >The gantt shows the derived span of this node’s children; own dates apply when it
                has none.</span
              >
            </section>
            <!-- ── Budget (per-water-year dollars; tasks sum upward). Slim variant: no
       summary line — the water-year rows + Total read as an addition equation. ── -->
            <section class="bcn-edit__section">
              <h3 class="bcn-edit__title">Budget</h3>
              <div class="bcn-funding bcn-funding--slim">
                <table class="bcn-funding__table">
                  <thead>
                    <tr>
                      <th scope="col">Water year</th>
                      <th scope="col" class="bcn-funding__num">Own</th>
                      <th scope="col" class="bcn-funding__num">Rolled up</th>
                      <th scope="col" class="bcn-funding__num">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-wy="2026">
                      <th scope="row" class="bcn-funding__year">WY2026</th>
                      <td class="bcn-funding__num bcn-funding__edit">
                        <esa-text-field
                          class="bcn-funding__field"
                          size="sm"
                          type="text"
                          prefix="$"
                          placeholder="0"
                          value=""
                          data-wb-funding="true"
                          data-wy="2026"
                        ></esa-text-field>
                      </td>
                      <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">$90k</td>
                      <td class="bcn-funding__num bcn-funding__strong" data-cell="total">$90k</td>
                    </tr>
                    <tr data-wy="2027">
                      <th scope="row" class="bcn-funding__year">WY2027</th>
                      <td class="bcn-funding__num bcn-funding__edit">
                        <esa-text-field
                          class="bcn-funding__field"
                          size="sm"
                          type="text"
                          prefix="$"
                          placeholder="0"
                          value=""
                          data-wb-funding="true"
                          data-wy="2027"
                        ></esa-text-field>
                      </td>
                      <td class="bcn-funding__num bcn-funding__muted" data-cell="sub">$770k</td>
                      <td class="bcn-funding__num bcn-funding__strong" data-cell="total">$770k</td>
                    </tr>
                    <!-- …and 6 more like this (<tr>) -->
                  </tbody>
                  <tfoot>
                    <tr>
                      <th scope="row">Total</th>
                      <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-own">$0</td>
                      <td class="bcn-funding__num bcn-funding__muted" data-cell="foot-sub">
                        $8.5M
                      </td>
                      <td class="bcn-funding__num bcn-funding__strong" data-cell="foot-total">
                        $8.5M
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>
            <!-- ── Actions: add child / delete / full details ── -->
            <section class="bcn-edit__section bcn-edit__actions">
              <span
                class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-wb-add="true"
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
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg></span
                  ><span class="esa-button__label">Add study</span>
                </button></span
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm bcn-edit__details"
                ><a
                  class="esa-button__native typography-microcopy-xs"
                  href="/beacon-design/prototypes/fish-detail/COA-10.19"
                  role="button"
                  data-wb-details="true"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path></svg></span
                  ><span class="esa-button__label">View full details</span></a
                ></span
              >
            </section>
          </div>
        </section>
        <section
          data-node-panel="STY-014"
          data-node-name="Migration &amp; Survival Study"
          data-node-tier="Study"
          hidden=""
        >
          <div class="bcn-edit">
            <!-- ── Status (TASKS only — the one tier carrying execution status).
       Section title carries the label; the select itself is label-less so the
       three sections share one typographic hierarchy. ── --><!-- ── Lead (STUDIES only — accountability sits on the Study; sub-studies/tasks
       inherit it; programs roll it up). Writes through wbApi.setLead. ── -->
            <section class="bcn-edit__section">
              <h3 class="bcn-edit__title">Lead</h3>
              <esa-select
                label=""
                size="sm"
                placeholder="Select lead org"
                options='[{"value":"DWR-DCO","label":"DWR-DCO"},{"value":"DWR-DCO/BDO","label":"DWR-DCO/BDO"},{"value":"DWR-DISE","label":"DWR-DISE"},{"value":"DWR-BDO","label":"DWR-BDO"},{"value":"DCA","label":"DCA"},{"value":"Consultant","label":"Consultant"}]'
                data-wb-lead="true"
              ></esa-select>
            </section>
            <!-- ── Date range (EVERY tier — own dates; parents keep the derived bar) ── -->
            <section class="bcn-edit__section">
              <h3 class="bcn-edit__title">Date range</h3>
              <div class="bcn-edit__sched-grid" role="group" aria-label="Node schedule">
                <esa-select
                  label="Start month"
                  size="sm"
                  placeholder="Month"
                  options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                  data-wb-field="start"
                  data-part="month"
                ></esa-select
                ><esa-select
                  label="Start year"
                  size="sm"
                  placeholder="Year"
                  options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label"… [609 characters]'
                  data-wb-field="start"
                  data-part="year"
                ></esa-select
                ><!-- …and 2 more like this (<esa-select>) -->
              </div>
              <span class="bcn-edit__hint" data-live="sched-hint"
                >The gantt shows the derived span of this node’s children; own dates apply when it
                has none.</span
              >
            </section>
            <!-- ── Budget (per-water-year dollars; tasks sum upward). Slim variant: no
       summary line — the water-year rows + Total read as an addition equation. ── --><!-- ── Actions: add child / delete / full details ── -->
            <section class="bcn-edit__section bcn-edit__actions">
              <span
                class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-wb-add="true"
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
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path></svg></span
                  ><span class="esa-button__label">Add sub-study</span>
                </button></span
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm bcn-edit__details"
                ><a
                  class="esa-button__native typography-microcopy-xs"
                  href="/beacon-design/prototypes/fish-detail/STY-014"
                  role="button"
                  data-wb-details="true"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path></svg></span
                  ><span class="esa-button__label">View full details</span></a
                ></span
              >
            </section>
            <!-- …and 1 more like this (<section class="bcn-edit__section">) -->
          </div>
        </section>
        <!-- …and 64 more like this (<section>) --><template id="bcn-panel-tpl-task"
          ><section data-node-panel="" data-node-name="" hidden="" data-astro-cid-7ci5u7eo="">
            <div class="bcn-edit" data-astro-cid-7ghsj4jb="">
              <!-- ── Status (TASKS only — the one tier carrying execution status).
       Section title carries the label; the select itself is label-less so the
       three sections share one typographic hierarchy. ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Status</h3>
                <div class="bcn-status-select" data-value="not-started" data-astro-cid-wqef4jws="">
                  <div class="bcn-status-select__dd" data-astro-cid-wqef4jws="">
                    <button
                      type="button"
                      class="bcn-status-select__trigger"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-astro-cid-wqef4jws=""
                    >
                      <span
                        class="bcn-status-select__dot bcn-status-select__dot--trigger"
                        style="background: #9aa0a6"
                        data-astro-cid-wqef4jws=""
                      ></span
                      ><span class="bcn-status-select__value" data-astro-cid-wqef4jws=""
                        >Not started</span
                      ><svg
                        class="bcn-status-select__chev"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        data-astro-cid-wqef4jws=""
                      >
                        <path d="m6 9 6 6 6-6" data-astro-cid-wqef4jws=""></path>
                      </svg>
                    </button>
                    <ul
                      class="bcn-status-select__menu"
                      role="listbox"
                      hidden=""
                      data-astro-cid-wqef4jws=""
                    >
                      <li
                        class="bcn-status-select__opt"
                        role="option"
                        data-value="not-started"
                        data-label="Not started"
                        data-color="#9aa0a6"
                        aria-selected="true"
                        data-astro-cid-wqef4jws=""
                      >
                        <span
                          class="bcn-status-select__dot"
                          style="background: #9aa0a6"
                          data-astro-cid-wqef4jws=""
                        ></span
                        >Not started
                      </li>
                      <li
                        class="bcn-status-select__opt"
                        role="option"
                        data-value="on-track"
                        data-label="On track"
                        data-color="#91cf60"
                        aria-selected="false"
                        data-astro-cid-wqef4jws=""
                      >
                        <span
                          class="bcn-status-select__dot"
                          style="background: #91cf60"
                          data-astro-cid-wqef4jws=""
                        ></span
                        >On track
                      </li>
                      <li
                        class="bcn-status-select__opt"
                        role="option"
                        data-value="at-risk"
                        data-label="At risk"
                        data-color="#fc8d59"
                        aria-selected="false"
                        data-astro-cid-wqef4jws=""
                      >
                        <span
                          class="bcn-status-select__dot"
                          style="background: #fc8d59"
                          data-astro-cid-wqef4jws=""
                        ></span
                        >At risk
                      </li>
                      <li
                        class="bcn-status-select__opt"
                        role="option"
                        data-value="blocked"
                        data-label="Blocked"
                        data-color="#d73027"
                        aria-selected="false"
                        data-astro-cid-wqef4jws=""
                      >
                        <span
                          class="bcn-status-select__dot"
                          style="background: #d73027"
                          data-astro-cid-wqef4jws=""
                        ></span
                        >Blocked
                      </li>
                      <li
                        class="bcn-status-select__opt"
                        role="option"
                        data-value="complete"
                        data-label="Complete"
                        data-color="#1a9850"
                        aria-selected="false"
                        data-astro-cid-wqef4jws=""
                      >
                        <span
                          class="bcn-status-select__dot"
                          style="background: #1a9850"
                          data-astro-cid-wqef4jws=""
                        ></span
                        >Complete
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <!-- ── Lead (STUDIES only — accountability sits on the Study; sub-studies/tasks
       inherit it; programs roll it up). Writes through wbApi.setLead. ── --><!-- ── Date range (EVERY tier — own dates; parents keep the derived bar) ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Date range</h3>
                <div
                  class="bcn-edit__sched-grid"
                  role="group"
                  aria-label="Node schedule"
                  data-astro-cid-7ghsj4jb=""
                >
                  <esa-select
                    label="Start month"
                    size="sm"
                    placeholder="Month"
                    options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                    data-wb-field="start"
                    data-part="month"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="Start year"
                    size="sm"
                    placeholder="Year"
                    options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label":"2029"},{"value":"2030","label":"2030"},{"value":"2031","label":"2031"},{"value":"2032","label":"2032"},{"value":"2033","label":"2033"},{"value":"2034","label":"2034"},{"value":"2035","label":"2035"},{"value":"2036","label":"2036"},{"value":"2037","label":"2037"},{"value":"2038","label":"2038"},{"value":"2039","label":"2039"},{"value":"2040","label":"2040"},{"value":"2041","label":"2041"},{"value":"2042","label":"2042"},{"value":"2043","label":"2043"},{"value":"2044","label":"2044"}]'
                    data-wb-field="start"
                    data-part="year"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="End month"
                    size="sm"
                    placeholder="Month"
                    options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                    data-wb-field="end"
                    data-part="month"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="End year"
                    size="sm"
                    placeholder="Year"
                    options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label":"2029"},{"value":"2030","label":"2030"},{"value":"2031","label":"2031"},{"value":"2032","label":"2032"},{"value":"2033","label":"2033"},{"value":"2034","label":"2034"},{"value":"2035","label":"2035"},{"value":"2036","label":"2036"},{"value":"2037","label":"2037"},{"value":"2038","label":"2038"},{"value":"2039","label":"2039"},{"value":"2040","label":"2040"},{"value":"2041","label":"2041"},{"value":"2042","label":"2042"},{"value":"2043","label":"2043"},{"value":"2044","label":"2044"}]'
                    data-wb-field="end"
                    data-part="year"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select>
                </div>
                <span
                  class="bcn-edit__hint"
                  data-live="sched-hint"
                  data-astro-cid-7ghsj4jb=""
                ></span>
              </section>
              <!-- ── Budget (per-water-year dollars; tasks sum upward). Slim variant: no
       summary line — the water-year rows + Total read as an addition equation. ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Budget</h3>
                <div class="bcn-funding bcn-funding--slim">
                  <p class="bcn-funding__empty">None planned.</p>
                </div>
              </section>
              <!-- ── Actions: add child / delete / full details ── -->
              <section class="bcn-edit__section bcn-edit__actions" data-astro-cid-7ghsj4jb="">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm bcn-edit__details"
                  data-astro-cid-5nhxdd72=""
                  ><a
                    class="esa-button__native typography-microcopy-xs"
                    href="/beacon-design/prototypes/fish-detail/"
                    role="button"
                    data-wb-details="true"
                    data-astro-cid-7ghsj4jb="true"
                    data-astro-cid-5nhxdd72=""
                    ><span
                      class="esa-icon esa-icon--sm"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
                      ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        ></path></svg></span
                    ><span class="esa-button__label" data-astro-cid-5nhxdd72=""
                      >View full details</span
                    ></a
                  ></span
                >
              </section>
            </div>
          </section></template
        ><template id="bcn-panel-tpl-branch"
          ><section data-node-panel="" data-node-name="" hidden="" data-astro-cid-7ci5u7eo="">
            <div class="bcn-edit" data-astro-cid-7ghsj4jb="">
              <!-- ── Status (TASKS only — the one tier carrying execution status).
       Section title carries the label; the select itself is label-less so the
       three sections share one typographic hierarchy. ── --><!-- ── Lead (STUDIES only — accountability sits on the Study; sub-studies/tasks
       inherit it; programs roll it up). Writes through wbApi.setLead. ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Lead</h3>
                <esa-select
                  label=""
                  size="sm"
                  placeholder="Select lead org"
                  options='[{"value":"DWR-DCO","label":"DWR-DCO"},{"value":"DWR-DCO/BDO","label":"DWR-DCO/BDO"},{"value":"DWR-DISE","label":"DWR-DISE"},{"value":"DWR-BDO","label":"DWR-BDO"},{"value":"DCA","label":"DCA"},{"value":"Consultant","label":"Consultant"}]'
                  data-wb-lead="true"
                  data-astro-cid-7ghsj4jb="true"
                ></esa-select>
              </section>
              <!-- ── Date range (EVERY tier — own dates; parents keep the derived bar) ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Date range</h3>
                <div
                  class="bcn-edit__sched-grid"
                  role="group"
                  aria-label="Node schedule"
                  data-astro-cid-7ghsj4jb=""
                >
                  <esa-select
                    label="Start month"
                    size="sm"
                    placeholder="Month"
                    options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                    data-wb-field="start"
                    data-part="month"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="Start year"
                    size="sm"
                    placeholder="Year"
                    options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label":"2029"},{"value":"2030","label":"2030"},{"value":"2031","label":"2031"},{"value":"2032","label":"2032"},{"value":"2033","label":"2033"},{"value":"2034","label":"2034"},{"value":"2035","label":"2035"},{"value":"2036","label":"2036"},{"value":"2037","label":"2037"},{"value":"2038","label":"2038"},{"value":"2039","label":"2039"},{"value":"2040","label":"2040"},{"value":"2041","label":"2041"},{"value":"2042","label":"2042"},{"value":"2043","label":"2043"},{"value":"2044","label":"2044"}]'
                    data-wb-field="start"
                    data-part="year"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="End month"
                    size="sm"
                    placeholder="Month"
                    options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
                    data-wb-field="end"
                    data-part="month"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select
                  ><esa-select
                    label="End year"
                    size="sm"
                    placeholder="Year"
                    options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label":"2029"},{"value":"2030","label":"2030"},{"value":"2031","label":"2031"},{"value":"2032","label":"2032"},{"value":"2033","label":"2033"},{"value":"2034","label":"2034"},{"value":"2035","label":"2035"},{"value":"2036","label":"2036"},{"value":"2037","label":"2037"},{"value":"2038","label":"2038"},{"value":"2039","label":"2039"},{"value":"2040","label":"2040"},{"value":"2041","label":"2041"},{"value":"2042","label":"2042"},{"value":"2043","label":"2043"},{"value":"2044","label":"2044"}]'
                    data-wb-field="end"
                    data-part="year"
                    data-astro-cid-7ghsj4jb="true"
                  ></esa-select>
                </div>
                <span class="bcn-edit__hint" data-live="sched-hint" data-astro-cid-7ghsj4jb=""
                  >The gantt shows the derived span of this node’s children; own dates apply when it
                  has none.</span
                >
              </section>
              <!-- ── Budget (per-water-year dollars; tasks sum upward). Slim variant: no
       summary line — the water-year rows + Total read as an addition equation. ── -->
              <section class="bcn-edit__section" data-astro-cid-7ghsj4jb="">
                <h3 class="bcn-edit__title" data-astro-cid-7ghsj4jb="">Budget</h3>
                <div class="bcn-funding bcn-funding--slim">
                  <p class="bcn-funding__empty">None planned.</p>
                </div>
              </section>
              <!-- ── Actions: add child / delete / full details ── -->
              <section class="bcn-edit__section bcn-edit__actions" data-astro-cid-7ghsj4jb="">
                <span
                  class="esa-button esa-button--variant-secondary esa-button--appearance-outline esa-button--sm"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-wb-add="true"
                    data-astro-cid-7ghsj4jb="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--sm"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
                      ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path></svg></span
                    ><span class="esa-button__label" data-astro-cid-5nhxdd72="">Add sub-study</span>
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm bcn-edit__details"
                  data-astro-cid-5nhxdd72=""
                  ><a
                    class="esa-button__native typography-microcopy-xs"
                    href="/beacon-design/prototypes/fish-detail/"
                    role="button"
                    data-wb-details="true"
                    data-astro-cid-7ghsj4jb="true"
                    data-astro-cid-5nhxdd72=""
                    ><span
                      class="esa-icon esa-icon--sm"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
                      ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        focusable="false"
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        ></path></svg></span
                    ><span class="esa-button__label" data-astro-cid-5nhxdd72=""
                      >View full details</span
                    ></a
                  ></span
                >
              </section>
            </div>
          </section></template
        >
      </div>
      <span slot="footer" class="bcn-node-foot"
        ><span id="node-delete"
          ><span
            class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-icon esa-icon--md" aria-hidden="true"
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
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  <line x1="10" x2="10" y1="11" y2="17"></line>
                  <line x1="14" x2="14" y1="11" y2="17"></line></svg></span
              ><span class="esa-button__label">Delete</span>
            </button></span
          ></span
        ><span id="node-close"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Close</span>
            </button></span
          ></span
        ></span
      ></esa-side-dialog
    ><esa-side-dialog
      id="create-drawer"
      size="md"
      style="--z-modal: 1340; --z-modal-backdrop: 1310"
      position="right"
      ><div slot="header" class="bcn-create-head">
        <span class="bcn-create-head__title" id="create-title">New node</span>
      </div>
      <div class="bcn-create">
        <esa-text-field
          id="create-name"
          label="Name"
          placeholder="Name this node"
          size="sm"
          required=""
        ></esa-text-field
        ><esa-text-field
          id="create-coa"
          label="COA reference"
          placeholder="e.g. 10.19.1"
          size="sm"
          help-text="Optional — the ITP Condition-of-Approval number is a secondary reference, not the identity."
        ></esa-text-field>
        <div id="create-lead-wrap" hidden="">
          <esa-select
            id="create-lead"
            label="Lead org"
            size="sm"
            placeholder="Select lead org"
            options='[{"value":"DWR-DCO","label":"DWR-DCO"},{"value":"DWR-DCO/BDO","label":"DWR-DCO/BDO"},{"value":"DWR-DISE","label":"DWR-DISE"},{"value":"DWR-BDO","label":"DWR-BDO"},{"value":"DCA","label":"DCA"},{"value":"Consultant","label":"Consultant"}]'
          ></esa-select>
        </div>
        <div id="create-status-wrap" hidden="">
          <esa-select
            id="create-status"
            label="Status"
            size="sm"
            placeholder="Select status"
            options='[{"value":"not-started","label":"Not started"},{"value":"on-track","label":"On track"},{"value":"at-risk","label":"At risk"},{"value":"blocked","label":"Blocked"},{"value":"complete","label":"Complete"}]'
          ></esa-select>
        </div>
        <section class="bcn-create__section" aria-label="Date range">
          <span class="bcn-create__label">Date range</span>
          <div class="bcn-create__sched-grid" role="group" aria-label="New node schedule">
            <esa-select
              id="create-start-month"
              label="Start month"
              size="sm"
              placeholder="Month"
              options='[{"value":"01","label":"Jan"},{"value":"02","label":"Feb"},{"value":"03","label":"Mar"},{"value":"04","label":"Apr"},{"value":"05","label":"May"},{"value":"06","label":"Jun"},{"value":"07","label":"Jul"},{"value":"08","label":"Aug"},{"value":"09","label":"Sep"},{"value":"10","label":"Oct"},{"value":"11","label":"Nov"},{"value":"12","label":"Dec"}]'
            ></esa-select
            ><esa-select
              id="create-start-year"
              label="Start year"
              size="sm"
              placeholder="Year"
              options='[{"value":"2026","label":"2026"},{"value":"2027","label":"2027"},{"value":"2028","label":"2028"},{"value":"2029","label"… [609 characters]'
            ></esa-select
            ><!-- …and 2 more like this (<esa-select>) -->
          </div>
        </section>
      </div>
      <span slot="footer" class="bcn-create-foot"
        ><span id="create-cancel"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="create-submit"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--disabled"
            ><button class="esa-button__native typography-microcopy-md" type="button" disabled="">
              <span class="esa-button__label">Create</span>
            </button></span
          ></span
        ></span
      ></esa-side-dialog
    ><esa-side-dialog
      id="roles-drawer"
      size="md"
      style="--z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="bcn-roles-edit-head">
        <span class="bcn-roles-edit-head__ref" id="roles-drawer-ref">—</span
        ><span class="bcn-roles-edit-head__title" id="roles-drawer-title">Edit roles</span>
      </div>
      <div class="bcn-roles-edit">
        <div class="bcn-rrep" data-roles-repeater="">
          <div class="bcn-rrep__list" data-rr-list=""></div>
          <template data-rr-row=""
            ><div class="bcn-rrep__row" data-rr-item="" data-astro-cid-gw2s2v3a="">
              <div class="bcn-rrep__selects" data-astro-cid-gw2s2v3a="">
                <esa-select
                  data-rr-ws="true"
                  size="sm"
                  placeholder="Work-stream"
                  label="Work-stream"
                  data-astro-cid-gw2s2v3a="true"
                ></esa-select
                ><esa-select
                  data-rr-org="true"
                  size="sm"
                  placeholder="Org"
                  label="Org"
                  data-astro-cid-gw2s2v3a="true"
                ></esa-select>
              </div>
              <div class="bcn-rrep__second" data-astro-cid-gw2s2v3a="">
                <esa-text-field
                  data-rr-person="true"
                  size="sm"
                  placeholder="Person (optional)"
                  label="Person"
                  data-astro-cid-gw2s2v3a="true"
                ></esa-text-field
                ><label class="bcn-rrep__tent" data-astro-cid-gw2s2v3a=""
                  ><esa-switch-toggle
                    data-rr-tent="true"
                    data-astro-cid-gw2s2v3a="true"
                  ></esa-switch-toggle
                  ><span data-astro-cid-gw2s2v3a="">Tentative</span></label
                ><span class="bcn-rrep__del" data-rr-del="" data-astro-cid-gw2s2v3a=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    data-astro-cid-5nhxdd72=""
                    ><button
```
