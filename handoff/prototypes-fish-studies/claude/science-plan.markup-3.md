# Science Plan: markup, part 3 of 3

```html
                      </th>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org">DWR-DCO</span></span
                        >
                      </td>
                      <td class="bcn-roles__cell">
                        <span class="bcn-roles__assign"
                          ><span class="bcn-roles__org">DWR-DCO</span
                          ><span class="bcn-roles__person"
                            >in coordination with consultant</span
                          ></span
                        >
                      </td>
                      <!-- …and 9 more like this (<td class="bcn-roles__cell">) -->
                    </tr>
                    <tr
                      class="bcn-roles__row"
                      data-id="10.19.1"
                      data-ref="10.19.1"
                      data-name="migration and survival study"
                      data-lead="DWR-DISE"
                    >
                      <th class="bcn-roles__study" scope="row">
                        <span class="bcn-roles__coa">10.19.1</span
                        ><span class="bcn-roles__name">Migration and Survival Study</span>
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
                    <!-- …and 34 more like this (<tr class="bcn-roles__row">) -->
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
        </section>
      </div>
    </div>
    <esa-dialog id="fs-outputs" size="md" style="--_dialog-width: min(560px, 94vw)"
      ><span slot="header" class="bcn-out__head">Generate outputs</span>
      <p class="bcn-out__lede">
        Every document below is generated live from this single dataset — edit a study once and each
        output regenerates. No more re-keying across four files.
      </p>
      <ul class="bcn-out__list">
        <li class="bcn-out__item">
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          >
          <div>
            <strong>Covered Fish Species Monitoring &amp; Science Plan</strong
            ><span>Word — the 27 study sketches, ready for CDFW review</span>
          </div>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button class="esa-button__native typography-microcopy-xs" type="button">
              <span class="esa-button__label">.docx</span>
            </button></span
          >
        </li>
        <li class="bcn-out__item">
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
              <path d="M12 3v18"></path>
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M3 15h18"></path></svg
          ></span>
          <div>
            <strong>ITP Aquatic Study Crosswalk</strong
            ><span>Excel — the wide reference table</span>
          </div>
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button class="esa-button__native typography-microcopy-xs" type="button">
              <span class="esa-button__label">.xlsx</span>
            </button></span
          >
        </li>
        <!-- …and 2 more like this (<li class="bcn-out__item">) -->
      </ul>
      <div slot="footer" class="bcn-out__foot">
        <span id="fs-outputs-close"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Close</span>
            </button></span
          ></span
        >
      </div></esa-dialog
    ><esa-side-dialog
      id="fs-drawer"
      size="md"
      style="--z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="bcn-drawer-head">
        <span class="bcn-drawer-head__badge" id="fs-drawer-coa">COA —</span
        ><span class="bcn-drawer-head__title" id="fs-drawer-title">Manage study</span>
      </div>
      <div class="bcn-drawer">
        <div class="bcn-status-select" id="fs-drawer-plan" data-value="draft">
          <span class="bcn-status-select__label">Plan status</span>
          <div class="bcn-status-select__dd">
            <button
              type="button"
              class="bcn-status-select__trigger"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span
                class="bcn-status-select__dot bcn-status-select__dot--trigger"
                style="background: #d73027"
              ></span
              ><span class="bcn-status-select__value">Draft</span
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
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <ul class="bcn-status-select__menu" role="listbox" hidden="">
              <li
                class="bcn-status-select__opt"
                role="option"
                data-value="draft"
                data-label="Draft"
                data-color="#d73027"
                aria-selected="true"
              >
                <span class="bcn-status-select__dot" style="background: #d73027"></span>Draft
              </li>
              <li
                class="bcn-status-select__opt"
                role="option"
                data-value="submitted"
                data-label="Submitted to CDFW"
                data-color="#fc8d59"
                aria-selected="false"
              >
                <span class="bcn-status-select__dot" style="background: #fc8d59"></span>Submitted to
                CDFW
              </li>
              <!-- …and 3 more like this (<li class="bcn-status-select__opt">) -->
            </ul>
          </div>
        </div>
        <div class="bcn-status-select" id="fs-drawer-exec" data-value="not-started">
          <span class="bcn-status-select__label">Execution status</span>
          <div class="bcn-status-select__dd">
            <button
              type="button"
              class="bcn-status-select__trigger"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span
                class="bcn-status-select__dot bcn-status-select__dot--trigger"
                style="background: #d73027"
              ></span
              ><span class="bcn-status-select__value">Not Started</span
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
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <ul class="bcn-status-select__menu" role="listbox" hidden="">
              <li
                class="bcn-status-select__opt"
                role="option"
                data-value="not-started"
                data-label="Not Started"
                data-color="#d73027"
                aria-selected="true"
              >
                <span class="bcn-status-select__dot" style="background: #d73027"></span>Not Started
              </li>
              <li
                class="bcn-status-select__opt"
                role="option"
                data-value="planning"
                data-label="Planning"
                data-color="#fc8d59"
                aria-selected="false"
              >
                <span class="bcn-status-select__dot" style="background: #fc8d59"></span>Planning
              </li>
              <!-- …and 2 more like this (<li class="bcn-status-select__opt">) -->
            </ul>
          </div>
        </div>
        <div class="bcn-drawer__dates">
          <esa-date-picker id="fs-drawer-start" label="Schedule start" size="md"></esa-date-picker
          ><esa-date-picker id="fs-drawer-end" label="Schedule end" size="md"></esa-date-picker>
        </div>
        <esa-date-picker id="fs-drawer-due" label="Study plan due" size="md"></esa-date-picker>
      </div>
      <span slot="footer" class="bcn-drawer__foot"
        ><span id="fs-drawer-open"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
            ><a class="esa-button__native typography-microcopy-xs" href="#"
              ><span class="esa-button__label">Open full study</span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
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
                  <path d="m12 5 7 7-7 7"></path></svg></span></a></span></span
        ><span class="bcn-drawer__foot-actions"
          ><span id="fs-drawer-cancel"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Cancel</span>
              </button></span
            ></span
          ><span id="fs-drawer-save"
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Save</span>
              </button></span
            ></span
          ></span
        ></span
      ></esa-side-dialog
    ><!-- script type="application/json" removed (18 KB) --><!-- script type="application/json" removed (6 KB) -->
  </div>
</div>
```
