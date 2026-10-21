# Bulk evidence (bottom drawer, list mode): markup, part 1 of 2

```html
<div
  class="bcn-bottom-drawer__panel"
  data-drawer-panel=""
  role="dialog"
  aria-modal="true"
  aria-label="Add Evidence of Compliance"
  tabindex="-1"
>
  <header class="bcn-bottom-drawer__head">
    <div class="bcn-bottom-drawer__headslot">
      <div class="bcn-ev__head"><h2 class="bcn-ev__title">Add Evidence of Compliance</h2></div>
    </div>
    <span class="bcn-bottom-drawer__close" data-drawer-close=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          aria-label="Close"
          title="Close"
        >
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg
          ></span></button></span
    ></span>
  </header>
  <div class="bcn-bottom-drawer__body">
    <div class="bcn-ev__panels">
      <div class="bcn-ev__pane bcn-ev__pane--left">
        <section class="bcn-ev-staging" aria-labelledby="bcn-ev-staging-title">
          <header class="bcn-ev-staging__head">
            <h3 class="bcn-ev-staging__title" id="bcn-ev-staging-title">
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
                  <path
                    d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                  ></path></svg></span
              >Evidence
            </h3>
          </header>
          <!-- Two tabs: intake, then the list you drag from. The controller sets the labels and
       keeps a count badge on the list tab, so uploading on tab 1 has visible consequences
       even though it leaves you where you are. -->
          <div class="bcn-ev-staging__tabs">
            <esa-tab-layout
              data-staging-tabs="true"
              appearance="underline"
              size="sm"
              variant="underline"
            ></esa-tab-layout>
          </div>
          <!-- ── Tab 1 · Upload ────────────────────────────────────────────────────── -->
          <div
            class="bcn-ev-staging__panel bcn-ev-staging__panel--upload"
            data-staging-panel="upload"
          >
            <!-- The zone owns the WHOLE tab while it is the only thing to do here, and yields the
         moment there is a draft to show. No standing caption underneath: an empty tab whose
         one affordance fills it does not need to be told what it is for. -->
            <div class="bcn-ev-staging__drop" data-upload-zone="">
              <esa-file-upload
                label="Drop files here, or browse"
                multiple="true"
                max-size-mb="50"
                data-staging-dropzone="true"
                name="files"
                data-bcn-chrome-trimmed="true"
              ></esa-file-upload>
            </div>
            <!-- ── The draft ──────────────────────────────────────────────────────────
         One card, however many files land in it — this IS the "several files, one piece of
         evidence" model, made by the act of dropping rather than explained in copy. Always
         expanded: a draft you are still assembling has nothing worth hiding, so it carries
         no disclosure toggle at all. -->
            <div class="bcn-ev-staging__draft" data-draft="" hidden="">
              <div class="esa-card esa-card--outlined">
                <div class="esa-card__body typography-body-md">
                  <div class="bcn-ev-draft">
                    <div class="bcn-ev-draft__titlerow">
                      <h4 class="bcn-ev-draft__title" data-draft-title=""></h4>
                      <!-- Reuses bcn-ev-card__count, the staged cards' class, rather than a draft-only
                 copy: the border-only pill is already defined once there, and a second
                 definition is how the two would drift. --><span
                        class="bcn-ev-card__count"
                        data-draft-count=""
                        ><span
                          class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                          ><span class="esa-pill__label"></span></span></span
                      ><!-- A draft is unsaved BY DEFINITION — it exists only until Save commits it — so
                 this is static rather than toggled. Same glyph, wording and pink as the
                 drawer footer's marker: one condition, stated the same way wherever it
                 appears. --><span class="bcn-ev-draft__unsaved"
                        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                          ><svg
                            width="16"
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
                              d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                            ></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path></svg></span
                        >Unsaved</span
                      >
                    </div>
                    <p class="bcn-ev-draft__notes" data-draft-notes=""></p>
                    <div class="bcn-ev-draft__filesrow">
                      <p class="bcn-ev-draft__fileslabel">Files</p>
                      <ul class="bcn-ev-draft__files" data-draft-files=""></ul>
                    </div>
                    <!-- Windows order — primary left of Cancel inside a right-aligned group, the same
               arrangement the drawer footer uses. -->
                    <footer class="bcn-ev-draft__foot">
                      <span data-draft-add=""
                        ><span
                          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                          ><button class="esa-button__native typography-microcopy-xs" type="button">
                            <span class="esa-button__label">Save</span>
                          </button></span
                        ></span
                      ><span data-draft-cancel=""
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                          ><button class="esa-button__native typography-microcopy-xs" type="button">
                            <span class="esa-button__label">Cancel</span>
                          </button></span
                        ></span
                      >
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <!-- One file pill, for filling in a NEW_SLOTS card at runtime. Cloned, never
         hand-written, so runtime-built markup still comes from the legos. --><template
              data-file-pill=""
              ><li data-astro-cid-qzg7vnux="">
                <span
                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                  data-astro-cid-xtwxlazl=""
                  ><span class="esa-pill__label" data-astro-cid-xtwxlazl=""></span
                ></span></li></template
            ><!-- One draft file row, same bridge: <template> + clone, because Astro legos are
         compile-time and cannot be constructed from JS. --><template data-draft-file-row=""
              ><li class="bcn-ev-draft__file" data-astro-cid-qzg7vnux="">
                <span class="bcn-ev-draft__filename" data-astro-cid-qzg7vnux=""></span
                ><span class="bcn-ev-draft__filesize" data-astro-cid-qzg7vnux=""></span
                ><span class="bcn-ev-draft__fileremove" data-astro-cid-qzg7vnux=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    data-astro-cid-5nhxdd72=""
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Remove this file from the evidence"
                      title="Remove this file from the evidence"
                      data-astro-cid-qzg7vnux="true"
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
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path></svg
                      ></span></button></span
                ></span></li
            ></template>
          </div>
          <!-- ── Tab 2 · The list — the one drag source ────────────────────────────── -->
          <div
            class="bcn-ev-staging__panel bcn-ev-staging__panel--list"
            data-staging-panel="list"
            hidden=""
          >
            <div class="bcn-ev-staging__search">
              <div class="bcn-ev-search">
                <span class="bcn-ev-search__icon" aria-hidden="true"
                  ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                    ><svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      focusable="false"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path></svg></span></span
                ><esa-combobox
                  data-staging-existing="true"
                  mode="autocomplete"
                  size="md"
                  aria-label="Search evidence already in Beacon"
                  placeholder="Search evidence already in Beacon"
                ></esa-combobox>
              </div>
            </div>
            <div class="bcn-ev-staging__scroll">
              <!-- Pre-rendered pool; the script reveals the staged ones. Each card is a DRAG
           SOURCE — grabbed by its grip, exactly as the Setup Wizard's requirement rows
           are. `draggable` is set by the controller, not here, so a card whose evidence
           is already on every action in view can have it withdrawn. -->
              <ul class="bcn-ev-staging__list" data-staging-list="">
                <li
                  class="bcn-ev-staging__item"
                  data-staging-item="ev-staged-swha"
                  data-origin="upload"
                  hidden=""
                  data-collapsed=""
                >
                  <div class="esa-card esa-card--outlined">
                    <div class="esa-card__body typography-body-md">
                      <div class="bcn-ev-card">
                        <span
                          class="bcn-ev-card__grip"
                          data-staging-grip="ev-staged-swha"
                          aria-hidden="true"
                          title="Drag onto an action"
                          draggable="true"
                          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                            ><svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              focusable="false"
                            >
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></span
                          ></span
                        >
                        <div class="bcn-ev-card__top">
                          <p class="bcn-ev-card__title">
                            <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                              class="bcn-ev-card__titlelink"
                              href="/evidence-of-compliance/ev-staged-swha"
                              target="_blank"
                              rel="noopener noreferrer"
                              >Swainson’s hawk nest survey — Jul 14</a
                            >
                          </p>
                          <span class="bcn-ev-card__count"
                            ><span
                              class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                              ><span class="esa-pill__label">3 files</span></span
                            ></span
                          ><esa-tooltip
                            class="bcn-countchip"
                            text="On 0 actions"
                            position="below"
                            data-staging-attached=""
                            hidden=""
                            align="center"
                            ><span class="bcn-countchip__stack"
                              ><span class="bcn-countchip__icon" aria-hidden="true"
                                ><span class="esa-icon esa-icon--md" aria-hidden="true"
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
                                    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                    <path d="M4 6h.01"></path>
                                    <!-- …and 4 more like this (<path>) -->
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                              ><span class="bcn-countchip__num" aria-hidden="true"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--xs typography-microcopy-2xs-strong"
                                  >0</span
                                ></span
                              ><span class="bcn-countchip__sr">On 0 actions</span></span
                            ></esa-tooltip
                          ><span class="bcn-ev-card__remove" data-staging-remove="ev-staged-swha"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Remove Swainson’s hawk nest survey — Jul 14"
                                title="Remove Swainson’s hawk nest survey — Jul 14"
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
                        <span class="bcn-ev-card__toggle"
                          ><button
                            type="button"
                            class="bcn-disclosure"
                            aria-expanded="false"
                            aria-label="Expand Swainson’s hawk nest survey — Jul 14"
                            data-evidence-toggle="ev-staged-swha"
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
                                <path d="m6 9 6 6 6-6"></path></svg
                            ></span></button></span
                        ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                        <p class="bcn-ev-card__desc">
                          Two active nests recorded along the northern levee; surveyed by C.
                          Anderson.
                        </p>
                        <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                        <div class="bcn-ev-card__filesrow">
                          <p class="bcn-ev-card__fileslabel">Files</p>
                          <ul class="bcn-ev-card__files">
                            <li>
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label"
                                  >SWHA-nest-survey-2026-07-14.pdf</span
                                ></span
                              >
                            </li>
                            <li>
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label"
                                  >SWHA-nest-locations-2026-07-14.kmz</span
                                ></span
                              >
                            </li>
                            <li>
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label"
                                  >SWHA-survey-photos-2026-07-14.zip</span
                                ></span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-staging__item"
                  data-staging-item="ev-staged-training"
                  data-origin="upload"
                  hidden=""
                  data-collapsed=""
                >
                  <div class="esa-card esa-card--outlined">
                    <div class="esa-card__body typography-body-md">
                      <div class="bcn-ev-card">
                        <span
                          class="bcn-ev-card__grip"
                          data-staging-grip="ev-staged-training"
                          aria-hidden="true"
                          title="Drag onto an action"
                          draggable="true"
                          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                            ><svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              focusable="false"
                            >
                              <circle cx="9" cy="12" r="1"></circle>
                              <circle cx="9" cy="5" r="1"></circle>
                              <!-- …and 4 more like this (<circle>) -->
                            </svg></span
                          ></span
                        >
                        <div class="bcn-ev-card__top">
                          <p class="bcn-ev-card__title">
                            <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                              class="bcn-ev-card__titlelink"
                              href="/evidence-of-compliance/ev-staged-training"
                              target="_blank"
                              rel="noopener noreferrer"
                              >Worker training roster — Jul 16</a
                            >
                          </p>
                          <span class="bcn-ev-card__count"
                            ><span
                              class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                              ><span class="esa-pill__label">1 file</span></span
                            ></span
                          ><esa-tooltip
                            class="bcn-countchip"
                            text="On 0 actions"
                            position="below"
                            data-staging-attached=""
                            hidden=""
                            align="center"
                            ><span class="bcn-countchip__stack"
                              ><span class="bcn-countchip__icon" aria-hidden="true"
                                ><span class="esa-icon esa-icon--md" aria-hidden="true"
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
                                    <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                                    <path d="M4 6h.01"></path>
                                    <!-- …and 4 more like this (<path>) -->
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="m13.41 10.59 5.66-5.66"></path></svg></span></span
                              ><span class="bcn-countchip__num" aria-hidden="true"
                                ><span
                                  class="esa-badge esa-badge--neutral esa-badge--xs typography-microcopy-2xs-strong"
                                  >0</span
                                ></span
                              ><span class="bcn-countchip__sr">On 0 actions</span></span
                            ></esa-tooltip
                          ><span
                            class="bcn-ev-card__remove"
                            data-staging-remove="ev-staged-training"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Remove Worker training roster — Jul 16"
                                title="Remove Worker training roster — Jul 16"
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
                        <span class="bcn-ev-card__toggle"
                          ><button
                            type="button"
                            class="bcn-disclosure"
                            aria-expanded="false"
                            aria-label="Expand Worker training roster — Jul 16"
                            data-evidence-toggle="ev-staged-training"
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
                                <path d="m6 9 6 6 6-6"></path></svg
                            ></span></button></span
                        ><!-- The description stays visible SHUT — clamped to one line — because it is
                     what tells two similarly-titled records apart in a scanned list. Only
                     the file names are actually hidden. -->
                        <p class="bcn-ev-card__desc">
                          34 crew signatures against the Q3 awareness curriculum.
                        </p>
                        <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                        <div class="bcn-ev-card__filesrow">
                          <p class="bcn-ev-card__fileslabel">Files</p>
                          <ul class="bcn-ev-card__files">
                            <li>
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label"
                                  >WEAP-training-roster-2026-07-16.pdf</span
                                ></span
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- …and 12 more like this (<li class="bcn-ev-staging__item">) -->
              </ul>
              <!-- Nothing staged yet. -->
              <div class="bcn-ev-staging__empty" data-staging-empty="">
                <div class="esa-empty-state esa-empty-state--sm">
                  <h3 class="esa-empty-state__title typography-label-sm-strong">
                    Nothing added yet
                  </h3>
                  <p class="esa-empty-state__description typography-body-xs">
                    Search above for evidence already in Beacon, or upload a file on the Add New
                    tab.
                  </p>
                  <div class="esa-empty-state__actions typography-label-md"></div>
                </div>
              </div>
            </div>
            <!-- The match utility lives with the evidence it reads, not with the actions it
         proposes — and only on this tab, since it has nothing to read from the uploader. -->
            <footer class="bcn-ev-staging__foot">
              <span class="bcn-ev-staging__find" data-targets-find=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Find matches</span>
                  </button></span
                ></span
              >
            </footer>
          </div>
        </section>
      </div>
      <!-- The seam is a 1px grid track — the rule itself, nothing more. It costs the layout
         no width, so either column can run right up to the line. -->
      <div class="bcn-ev__joint" aria-hidden="true"></div>
      <div class="bcn-ev__pane bcn-ev__pane--right">
        <section class="bcn-ev-targets" aria-labelledby="bcn-ev-targets-title">
          <header class="bcn-ev-targets__head">
            <h3 class="bcn-ev-targets__title" id="bcn-ev-targets-title">
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
                  <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
                  <path d="M4 6h.01"></path>
                  <!-- …and 4 more like this (<path>) -->
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="m13.41 10.59 5.66-5.66"></path></svg></span
              ><span data-targets-title-text="">Obligations</span
              ><span class="bcn-ev-targets__count" data-targets-count="" aria-hidden="true"
                >45</span
              >
            </h3>
          </header>
          <!-- The three facets on a ruled row, NOT in a card: its bottom border is the same
       hairline the Evidence column's tab strip draws, at the same height, so the two
       columns share one line across the seam instead of each starting differently.
       The scope lives HERE, not in the drawer header: it governs this column and nothing
       else. Component and Phase are the dimensions the Setup Wizard's Actions step filters
       on; all three are guarded while associations are unsaved (see evidence-drawer.ts). -->
          <div class="bcn-ev-targets__filters">
            <span class="bcn-ev-targets__filter" data-targets-component-filter="" data-needs=""
              ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-component">Component</span
              ><esa-select
                data-evidence-component="true"
                size="sm"
                searchable="true"
                aria-labelledby="bcn-ev-flabel-component"
              ></esa-select></span
            ><span class="bcn-ev-targets__filter" data-targets-scope-only=""
              ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-phase">Phase</span
              ><esa-select
                data-targets-phase="true"
                size="sm"
                aria-labelledby="bcn-ev-flabel-phase"
              ></esa-select></span
            ><span class="bcn-ev-targets__filter" data-targets-scope-only=""
              ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-type">Type</span
              ><esa-select
                data-targets-type="true"
                size="sm"
                aria-labelledby="bcn-ev-flabel-type"
              ></esa-select
            ></span>
          </div>
          <div class="bcn-ev-targets__search" data-targets-scope-only="">
            <div class="bcn-ev-search">
              <span class="bcn-ev-search__icon" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path></svg></span></span
              ><esa-combobox
                data-targets-search="true"
                mode="autocomplete"
                size="md"
                aria-label="Search actions in this component"
                placeholder="Search actions in this component"
              ></esa-combobox>
            </div>
          </div>
          <div class="bcn-ev-targets__scroll">
            <!-- Working state for Find matches — replaced by rows the moment it resolves. -->
            <div class="bcn-ev-targets__working" data-targets-working="" hidden="">
              <span class="esa-loading-spinner esa-loading-spinner--sm"
                ><span
                  class="esa-loading-spinner__ring"
                  role="img"
                  aria-label="Loading"
                ></span></span
              ><span class="typography-body-sm"
                >Reading the evidence and checking actions in this component…</span
              >
            </div>
            <!-- Find matches must never finish silently. A utility that runs and then does nothing
         visible reads as broken, and the two ways it legitimately finds nothing — no
         evidence staged, and nothing new in scope — are different answers that deserve
         different sentences. -->
            <p
              class="bcn-ev-targets__notice typography-body-sm"
              data-targets-notice=""
              hidden=""
            ></p>
            <!-- The one list: searched rows and suggested rows together. -->
            <ul class="bcn-ev-targets__list" data-targets-list="">
              <li
                class="bcn-ev-targets__item"
                data-target-row="act-swha-preconstruction-survey"
                data-component="southern-forebay-pumping-plant"
                data-tier="manual"
                hidden=""
              >
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-ev-row">
                      <div class="bcn-ev-row__head">
                        <div class="bcn-ev-row__main">
                          <div class="bcn-ev-row__titlerow">
                            <button
                              type="button"
                              class="bcn-disclosure"
                              aria-expanded="true"
                              aria-label="Collapse Preconstruction Swainson’s hawk nest survey"
                              data-card-toggle="act-swha-preconstruction-survey"
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
                                  <path d="m6 9 6 6 6-6"></path></svg
                              ></span></button
                            ><!-- Unsaved marker for the CARD, shown when anything about this
                       action's evidence is outstanding — an addition OR a removal. A removal
                       leaves no row behind to carry the pink treatment, so without this the
                       card would look settled while still holding a pending change. --><span
                              class="bcn-ev-row__dot"
                              data-action-unsaved=""
                              hidden=""
                              aria-hidden="true"
                            ></span
                            ><span class="bcn-ev-row__name"
                              >Preconstruction Swainson’s hawk nest survey</span
                            ><span class="bcn-ev-row__codes"
                              ><span class="bcn-cbadge bcn-cbadge--sm">BIO-4.2</span
                              ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                class="bcn-countchip"
                                text="No evidence attached yet"
                                position="below"
                                data-action-evcount=""
                                hidden="true"
                                align="center"
                                ><span class="bcn-countchip__stack"
                                  ><span class="bcn-countchip__icon" aria-hidden="true"
                                    ><span class="esa-icon esa-icon--md" aria-hidden="true"
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
                                        <path
                                          d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                                        ></path></svg></span></span
                                  ><span class="bcn-countchip__num" aria-hidden="true"
                                    ><span
                                      class="esa-badge esa-badge--neutral esa-badge--xs typography-microcopy-2xs-strong"
                                      ><span class="esa-badge__text">0</span></span
                                    ></span
                                  ><span class="bcn-countchip__sr"
                                    >No evidence attached yet</span
                                  ></span
                                ></esa-tooltip
                              ></span
                            ><span class="bcn-ev-row__spacer" aria-hidden="true"></span
                            ><span class="bcn-ev-row__tags"
                              ><span
                                class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">Monitoring</span></span
                              ><span
                                class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">Pre-Construction</span></span
                              ></span
                            >
                          </div>
                        </div>
                        <div class="bcn-ev-row__side">
                          <span
                            class="bcn-ev-row__dismiss"
                            data-target-dismiss="act-swha-preconstruction-survey"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Remove Preconstruction Swainson’s hawk nest survey"
                                title="Remove Preconstruction Swainson’s hawk nest survey"
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
                      <!-- The collapsible body sits BELOW the head rather than inside it, so the
                   list runs the card's full width — under the dismiss button — and is
                   indented on the left to start where the title starts, not where the
                   chevron does. -->
                      <div class="bcn-ev-row__body" data-card-body="">
                        <ul
                          class="bcn-ev-attached"
                          data-attached-list="act-swha-preconstruction-survey"
                        ></ul>
                        <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                          Drag evidence here to attach it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="bcn-ev-targets__item"
                data-target-row="act-swha-buffer-monitoring"
                data-component="southern-forebay-pumping-plant"
                data-tier="manual"
                hidden=""
              >
                <div class="esa-card esa-card--outlined">
                  <div class="esa-card__body typography-body-md">
                    <div class="bcn-ev-row">
                      <div class="bcn-ev-row__head">
                        <div class="bcn-ev-row__main">
                          <div class="bcn-ev-row__titlerow">
                            <button
                              type="button"
                              class="bcn-disclosure"
                              aria-expanded="true"
                              aria-label="Collapse Swainson’s hawk active-nest buffer monitoring"
                              data-card-toggle="act-swha-buffer-monitoring"
                            >
                              <span class="esa-icon esa-icon--sm" aria-hidden="true"
                                ><svg
```
