# Grouped list index

Every list, filed under the registry it draws from, in setup order: Commitments, Actions, Obligations. Each row (bcn-list-card) carries the list's name, description, member count and last change, and opens the list's detail page.

## Key decisions
- The type is STRUCTURAL: each group heading carries its own "Add <type> list" button, so the new list's type is chosen by which button was pressed.
- Within a group, rows sort newest change first; the board never re-sorts.
- A heading's badge counts LISTS in the group (and counts HITS while searching); a row's badge counts that list's MEMBERS. Accessible names tell them apart ("4 commitment lists" vs "64 commitments").
- A group with no hits keeps its heading and its add button and shows a dashed "No lists match" box. Hiding the whole group would hide the add verb at the exact moment the reader learned the list they want does not exist.
- A group that holds no lists at all reads "No commitment lists" (settled at build time), not "No lists match".
- All three types open the same detail route: /lists/<id>.

## Gotchas
- The dashed empty box sets display:grid, which outranks [hidden]; re-assert display:none on the hidden state or the box never goes away.
- Counts are derived from the data (group length / member predicates), never hard-coded, so a new seed list moves the heading without edits.

## Done when
- Three groups in order Commitments → Actions → Obligations; each heading has a count and an add button; searching "report" leaves the headings in place, updates each count to its hits, and shows "No lists match" in any group with none.

## Markup
```html
<div class="stack" data-gap="lg" data-list-index="">
  <div class="bcn-swfr bcn-swfr--panel">
    <esa-text-field
      class="bcn-swfr__search"
      size="sm"
      name="lists-search"
      placeholder="Search lists"
      aria-label="Search lists"
    ></esa-text-field>
    <div class="bcn-swfr__verbs"></div>
  </div>
  <script
    type="module"
    src="/beacon-design/_astro/BcnSwFilterRow.astro_astro_type_script_index_0_lang.EHzWe1vC.js"
  ></script>
  <div class="stack" data-gap="2xl">
    <section
      class="stack"
      data-gap="sm"
      aria-labelledby="lists-commitment"
      data-list-group="commitment"
      data-list-noun="commitment list"
    >
      <div class="bcn-lib__head repel" data-gap="sm">
        <div class="cluster" data-gap="xs">
          <h2 class="bcn-lib__title typography-title-strong" id="lists-commitment">
            Commitment Lists
          </h2>
          <span
            class="bcn-swcb"
            aria-label="4 commitment lists"
            data-group-count="true"
            data-total="4"
            >4</span
          >
        </div>
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-list-create="commitment"
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
            ><span class="esa-button__label">Add Commitment List</span>
          </button></span
        >
      </div>
      <div class="stack" data-gap="xs">
        <article class="bcn-lc" data-list-row="" data-type="commitment">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-commitment)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      ></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/itp-2081-conditions"
                        data-list-text=""
                        >ITP 2081 Conditions</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="294 commitments"
                        >294</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 8, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Every condition of the incidental take permit, as issued.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="commitment">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-commitment)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      ></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/quarterly-agency-briefing"
                        data-list-text=""
                        >Quarterly Agency Briefing</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="12 commitments"
                        >12</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 4, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Read into the quarterly briefing deck for the resource agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="commitment">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-commitment)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      ></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/fish-monitoring-studies"
                        data-list-text=""
                        >Fish Monitoring Studies</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="25 commitments"
                        >25</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 2, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="commitment">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-commitment)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                      <path
                        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                      ></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/consultation-and-authorization"
                        data-list-text=""
                        >Consultation and Authorization</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="18 commitments"
                        >18</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Aug 14, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div class="bcn-lib__empty" data-group-empty="" hidden="">
          <div class="esa-empty-state esa-empty-state--sm">
            <h3 class="esa-empty-state__title typography-label-sm-strong">
              No lists match
            </h3>
            <div class="esa-empty-state__actions typography-label-md"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="stack"
      data-gap="sm"
      aria-labelledby="lists-action"
      data-list-group="action"
      data-list-noun="action list"
    >
      <div class="bcn-lib__head repel" data-gap="sm">
        <div class="cluster" data-gap="xs">
          <h2 class="bcn-lib__title typography-title-strong" id="lists-action">
            Action Lists
          </h2>
          <span
            class="bcn-swcb"
            aria-label="11 action lists"
            data-group-count="true"
            data-total="11"
            >11</span
          >
        </div>
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-list-create="action"
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
            ><span class="esa-button__label">Add Action List</span>
          </button></span
        >
      </div>
      <div class="stack" data-gap="xs">
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/desktop-actions"
                        data-list-text=""
                        >Desktop Actions</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="182 actions"
                        >182</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 14, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Everything completed off site, for the desk-based reviewers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/fieldwork-actions"
                        data-list-text=""
                        >Fieldwork Actions</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="85 actions"
                        >85</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 14, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Everything completed in the field, by crew.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/preconstruction-surveys"
                        data-list-text=""
                        >Preconstruction Surveys</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="9 actions">9</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 10, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/construction-surveys-and-monitoring"
                        data-list-text=""
                        >Construction Surveys and Monitoring</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="22 actions"
                        >22</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 9, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/annual-reporting"
                        data-list-text=""
                        >Annual Reporting</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="16 actions"
                        >16</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Aug 28, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Actions that feed the annual compliance report.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/monthly-reporting"
                        data-list-text=""
                        >Monthly Reporting</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="21 actions"
                        >21</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Aug 28, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/qualified-biologist-for-species"
                        data-list-text=""
                        >Qualified Biologist for Species</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="7 actions">7</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Aug 20, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/survey-protocol-approval"
                        data-list-text=""
                        >Survey Protocol Approval</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="2 actions">2</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Jul 30, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/mapping"
                        data-list-text=""
                        >Mapping</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="2 actions">2</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Jul 22, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/safety-plan-inclusion"
                        data-list-text=""
                        >Safety Plan Inclusion</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="0 actions">0</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Jun 24, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="action">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-action)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                      <path d="M4 6h.01"></path>
                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                      <path d="M12 18h.01"></path>
                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/worker-awareness-training"
                        data-list-text=""
                        >Worker Awareness Training</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="4 actions">4</span>
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Jun 24, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div class="bcn-lib__empty" data-group-empty="" hidden="">
          <div class="esa-empty-state esa-empty-state--sm">
            <h3 class="esa-empty-state__title typography-label-sm-strong">
              No lists match
            </h3>
            <div class="esa-empty-state__actions typography-label-md"></div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="stack"
      data-gap="sm"
      aria-labelledby="lists-obligation"
      data-list-group="obligation"
      data-list-noun="obligation list"
    >
      <div class="bcn-lib__head repel" data-gap="sm">
        <div class="cluster" data-gap="xs">
          <h2 class="bcn-lib__title typography-title-strong" id="lists-obligation">
            Obligation Lists
          </h2>
          <span
            class="bcn-swcb"
            aria-label="3 obligation lists"
            data-group-count="true"
            data-total="3"
            >3</span
          >
        </div>
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-list-create="obligation"
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
            ><span class="esa-button__label">Add Obligation List</span>
          </button></span
        >
      </div>
      <div class="stack" data-gap="xs">
        <article class="bcn-lc" data-list-row="" data-type="obligation">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-obligation)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
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
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/biological-monitoring-field-form"
                        data-list-text=""
                        >Biological Monitoring Field Form</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="15 obligations"
                        >15</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 15, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    The daily monitoring form the designated biologists submit from
                    Fulcrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="obligation">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-obligation)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
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
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/construction-kickoff-summary"
                        data-list-text=""
                        >Construction Kickoff Summary</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="45 obligations"
                        >45</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 12, 2026</span
                    >
                  </div>
                  <p class="bcn-lc__desc typography-body-xs" data-list-text="">
                    Issued to each prime contractor at kickoff, and re-issued when a
                    permit amendment changes a duty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article class="bcn-lc" data-list-row="" data-type="obligation">
          <div class="esa-card esa-card--outlined esa-card--padding-none">
            <div class="esa-card__body typography-body-md">
              <div
                class="bcn-lc__row cluster"
                data-gap="xs"
                style="--_mark: var(--color-obligation)"
              >
                <span class="bcn-lc__mark"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
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
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path></svg></span
                ></span>
                <div class="bcn-lc__body stack" data-gap="3xs">
                  <div class="bcn-lc__head repel" data-gap="sm">
                    <div class="cluster" data-gap="2xs">
                      <a
                        class="bcn-lc__name typography-label-sm-strong"
                        href="/beacon-design/prototypes/lists/contractor-daily-checklist"
                        data-list-text=""
                        >Contractor Daily Checklist</a
                      ><span class="bcn-swcb bcn-swcb--sm" aria-label="21 obligations"
                        >21</span
                      >
                    </div>
                    <span class="bcn-lc__updated typography-body-xs"
                      >Updated Sep 11, 2026</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div class="bcn-lib__empty" data-group-empty="" hidden="">
          <div class="esa-empty-state esa-empty-state--sm">
            <h3 class="esa-empty-state__title typography-label-sm-strong">
              No lists match
            </h3>
            <div class="esa-empty-state__actions typography-label-md"></div>
          </div>
        </div>
      </div>
    </section>
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
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000a);
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
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
}
.esa-card__meta {
  gap: var(--spacing-100, 0.25rem) var(--spacing-500, 1.5rem);
  margin: var(--spacing-050, 0.125rem) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.esa-card__meta-pair {
  align-items: baseline;
  gap: var(--spacing-100, 0.25rem);
  min-width: 0;
  display: flex;
}
.esa-card__meta dt {
  font-size: var(--_card-meta-label-size);
  font-weight: var(--font-weight-medium, 500);
  color: var(--_card-meta-label-color);
}
.esa-card__meta dd {
  font-size: var(--_card-meta-value-size);
  color: inherit;
  margin: 0;
}
.esa-card--header-primary .esa-card__meta dt {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.bcn-lc__row {
  padding: var(--spacing-200) var(--spacing-300);
}
.bcn-lc__body {
  flex: 1;
  min-width: 0;
}
.bcn-lc:hover .bcn-lc__row {
  background: var(--color-background-default-hover);
}
.bcn-lc__mark {
  block-size: calc(var(--font-size-150) * var(--line-height-normal));
  color: var(--_mark);
  flex-shrink: 0;
  align-self: flex-start;
  align-items: center;
  display: inline-flex;
}
.bcn-lc__head {
  align-items: baseline;
}
.bcn-lc__name {
  color: var(--color-content-default);
  text-decoration: none;
}
.bcn-lc__name:hover {
  text-decoration: underline;
}
.bcn-lc__name:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset);
  border-radius: var(--radius-sm);
}
.bcn-lc__updated {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-lc__desc {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  overflow: hidden;
}
.bcn-lib__head {
  border-block-end: 1px solid var(--color-border-default-subtle);
  align-items: baseline;
  padding-block-end: var(--spacing-200);
}
.bcn-lib__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-lib__empty {
  border: 1px dashed var(--color-border-default);
  border-radius: var(--radius-200);
  place-items: center;
  min-block-size: 88px;
  display: grid;
}
.bcn-lib__empty[hidden] {
  display: none;
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
.bcn-swfr {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swfr--inset {
  border-top: none;
}
.bcn-swfr--panel {
  padding: var(--spacing-250) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__picker {
  flex: 0 180px;
  min-width: 140px;
}
.bcn-swfr__verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swfr__verbs:empty {
  display: none;
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--xs {
  --_empty-icon-size: var(--empty-state-icon-size-xs, 24px);
  padding: var(--spacing-300, 0.75rem) var(--spacing-200, 0.5rem);
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state--lg {
  --_empty-icon-size: var(--empty-state-icon-size-lg, 64px);
  padding: var(--spacing-800, 4rem) var(--spacing-400, 1rem);
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
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
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
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
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
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
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 350 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
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
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
