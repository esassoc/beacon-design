# Bulk evidence — bottom drawer, list mode

Same list-mode bottom evidence drawer as obligation lists: pick a component, stage evidence, every member targeted by default.

## Done when
- Save bumps the matching implementation rows' evidence counts live.

## Markup
```html
<bcn-bottom-drawer
  id="bcn-evidence-drawer"
  class="bcn-bottom-drawer"
  data-evidence-mode="list"
  open=""
  ><div class="bcn-bottom-drawer__backdrop" data-drawer-backdrop=""></div>
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
        <div class="bcn-ev__head">
          <h2 class="bcn-ev__title">Add Evidence of Compliance</h2>
        </div>
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
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                            >
                              <span class="esa-button__label">Save</span>
                            </button></span
                          ></span
                        ><span data-draft-cancel=""
                          ><span
                            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                            ><button
                              class="esa-button__native typography-microcopy-xs"
                              type="button"
                            >
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
         compile-time and cannot be constructed from JS. --><template
                data-draft-file-row=""
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-staged-swha"
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
                            Two active nests recorded along the northern levee; surveyed
                            by C. Anderson.
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                  <li
                    class="bcn-ev-staging__item"
                    data-staging-item="ev-exist-ggs-survey"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-ggs-survey"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-ggs-survey"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Giant garter snake preconstruction survey — Jun 29</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-ggs-survey"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Giant garter snake preconstruction survey — Jun 29"
                                  title="Remove Giant garter snake preconstruction survey — Jun 29"
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
                              aria-label="Expand Giant garter snake preconstruction survey — Jun 29"
                              data-evidence-toggle="ev-exist-ggs-survey"
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
                            No individuals observed; upland refugia mapped along the north
                            levee toe.
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
                                    >GGS-preconstruction-survey-2026-06-29.pdf</span
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
                    data-staging-item="ev-exist-biologist-quals"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-biologist-quals"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-biologist-quals"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Qualified biologist statements of qualification</a
                              >
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">4 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-biologist-quals"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Qualified biologist statements of qualification"
                                  title="Remove Qualified biologist statements of qualification"
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
                              aria-label="Expand Qualified biologist statements of qualification"
                              data-evidence-toggle="ev-exist-biologist-quals"
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
                            Four approved biologists covering avian, herpetological and
                            botanical scopes.
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
                                    >SOQ-C-Anderson.pdf</span
                                  ></span
                                >
                              </li>
                              <li>
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label"
                                    >SOQ-M-Okafor.pdf</span
                                  ></span
                                >
                              </li>
                              <li>
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label"
                                    >SOQ-R-Delgado.pdf</span
                                  ></span
                                >
                              </li>
                              <li>
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label"
                                    >SOQ-J-Whitfield.pdf</span
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
                    data-staging-item="ev-exist-noise-readings"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-noise-readings"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-noise-readings"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Noise level readings — week of Jul 6</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-noise-readings"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Noise level readings — week of Jul 6"
                                  title="Remove Noise level readings — week of Jul 6"
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
                              aria-label="Expand Noise level readings — week of Jul 6"
                              data-evidence-toggle="ev-exist-noise-readings"
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
                            Five sensitive receptors, all below the 75 dBA construction
                            threshold.
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
                                    >noise-readings-2026-07-06.xlsx</span
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
                    data-staging-item="ev-exist-swppp-inspection"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-swppp-inspection"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-swppp-inspection"
                                target="_blank"
                                rel="noopener noreferrer"
                                >SWPPP inspection report — Jul 9</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-swppp-inspection"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove SWPPP inspection report — Jul 9"
                                  title="Remove SWPPP inspection report — Jul 9"
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
                              aria-label="Expand SWPPP inspection report — Jul 9"
                              data-evidence-toggle="ev-exist-swppp-inspection"
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
                            Two corrective actions logged at the southern stockpile; both
                            closed Jul 11.
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
                                    >SWPPP-inspection-2026-07-09.pdf</span
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
                    data-staging-item="ev-exist-dust-log"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-dust-log"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-dust-log"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Dust control log — Jul 2026</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-dust-log"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Dust control log — Jul 2026"
                                  title="Remove Dust control log — Jul 2026"
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
                              aria-label="Expand Dust control log — Jul 2026"
                              data-evidence-toggle="ev-exist-dust-log"
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
                            Daily watering passes and wind-speed shutdowns for the month
                            to date.
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
                                    >dust-control-log-2026-07.pdf</span
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
                    data-staging-item="ev-exist-haul-agreement"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-haul-agreement"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-haul-agreement"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Executed haul route maintenance agreement</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-haul-agreement"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Executed haul route maintenance agreement"
                                  title="Remove Executed haul route maintenance agreement"
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
                              aria-label="Expand Executed haul route maintenance agreement"
                              data-evidence-toggle="ev-exist-haul-agreement"
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
                            Countersigned by the county public works director.
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
                                    >haul-route-agreement-executed.pdf</span
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
                    data-staging-item="ev-exist-cultural-brief"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-cultural-brief"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-cultural-brief"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Cultural resources monitoring brief — Jul 8</a
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-cultural-brief"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Cultural resources monitoring brief — Jul 8"
                                  title="Remove Cultural resources monitoring brief — Jul 8"
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
                              aria-label="Expand Cultural resources monitoring brief — Jul 8"
                              data-evidence-toggle="ev-exist-cultural-brief"
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
                            No cultural material encountered during the utility trench
                            excavation.
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
                                    >cultural-monitoring-brief-2026-07-08.pdf</span
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
                    data-staging-item="ev-exist-nesting-bird-sweep"
                    data-origin="existing"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-exist-nesting-bird-sweep"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-exist-nesting-bird-sweep"
                                target="_blank"
                                rel="noopener noreferrer"
                                >Nesting bird sweep — Jun 22</a
                              >
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">2 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-exist-nesting-bird-sweep"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Nesting bird sweep — Jun 22"
                                  title="Remove Nesting bird sweep — Jun 22"
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
                              aria-label="Expand Nesting bird sweep — Jun 22"
                              data-evidence-toggle="ev-exist-nesting-bird-sweep"
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
                            Two mourning dove nests flagged with 50-ft buffers; released
                            Jul 6.
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
                                    >nesting-bird-sweep-2026-06-22.pdf</span
                                  ></span
                                >
                              </li>
                              <li>
                                <span
                                  class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                  ><span class="esa-pill__label"
                                    >nest-buffer-map-2026-06-22.pdf</span
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
                    data-staging-item="ev-new-1"
                    data-origin="upload"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-new-1"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-new-1"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">0 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-new-1"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove "
                                  title="Remove "
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
                              aria-label="Expand "
                              data-evidence-toggle="ev-new-1"
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
                          <p class="bcn-ev-card__desc"></p>
                          <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                          <div class="bcn-ev-card__filesrow">
                            <p class="bcn-ev-card__fileslabel">Files</p>
                            <ul class="bcn-ev-card__files"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-staging__item"
                    data-staging-item="ev-new-2"
                    data-origin="upload"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-new-2"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-new-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">0 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-new-2"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove "
                                  title="Remove "
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
                              aria-label="Expand "
                              data-evidence-toggle="ev-new-2"
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
                          <p class="bcn-ev-card__desc"></p>
                          <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                          <div class="bcn-ev-card__filesrow">
                            <p class="bcn-ev-card__fileslabel">Files</p>
                            <ul class="bcn-ev-card__files"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-staging__item"
                    data-staging-item="ev-new-3"
                    data-origin="upload"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-new-3"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-new-3"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">0 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-new-3"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove "
                                  title="Remove "
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
                              aria-label="Expand "
                              data-evidence-toggle="ev-new-3"
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
                          <p class="bcn-ev-card__desc"></p>
                          <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                          <div class="bcn-ev-card__filesrow">
                            <p class="bcn-ev-card__fileslabel">Files</p>
                            <ul class="bcn-ev-card__files"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-ev-staging__item"
                    data-staging-item="ev-new-4"
                    data-origin="upload"
                    hidden=""
                    data-collapsed=""
                  >
                    <div class="esa-card esa-card--outlined">
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-ev-card">
                          <span
                            class="bcn-ev-card__grip"
                            data-staging-grip="ev-new-4"
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
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle></svg></span
                          ></span>
                          <div class="bcn-ev-card__top">
                            <p class="bcn-ev-card__title">
                              <!-- The record's own page, in a NEW TAB: this drawer is a workspace you
                         are part-way through, and navigating away from it would discard the
                         staging list. Route shape matches prod's
                         evidence-of-compliance/:evidenceOfComplianceID. --><a
                                class="bcn-ev-card__titlelink"
                                href="/evidence-of-compliance/ev-new-4"
                                target="_blank"
                                rel="noopener noreferrer"
                              ></a>
                            </p>
                            <span class="bcn-ev-card__count"
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">0 files</span></span
                              ></span
                            ><esa-tooltip
                              class="bcn-countchip"
                              text="On 0 actions"
                              position="below"
                              data-staging-attached=""
                              hidden=""
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
                                      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                                      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                                      <path d="M12 18h.01"></path>
                                      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                                      <circle cx="12" cy="12" r="2"></circle>
                                      <path
                                        d="m13.41 10.59 5.66-5.66"
                                      ></path></svg></span></span
                                ><span class="bcn-countchip__num" aria-hidden="true"
                                  ><span
                                    class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
                                    >0</span
                                  ></span
                                ><span class="bcn-countchip__sr">On 0 actions</span></span
                              ></esa-tooltip
                            ><span
                              class="bcn-ev-card__remove"
                              data-staging-remove="ev-new-4"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove "
                                  title="Remove "
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
                              aria-label="Expand "
                              data-evidence-toggle="ev-new-4"
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
                          <p class="bcn-ev-card__desc"></p>
                          <!-- Expanded only: the label and the rule above it turn the pills from "more
                     text on this card" into a named section, which is what they are — the
                     parts inside this one piece of evidence. The whole row hides when the
                     card shuts, so a collapsed card is still title + count + one line. -->
                          <div class="bcn-ev-card__filesrow">
                            <p class="bcn-ev-card__fileslabel">Files</p>
                            <ul class="bcn-ev-card__files"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- Nothing staged yet. -->
                <div class="bcn-ev-staging__empty" data-staging-empty="">
                  <div class="esa-empty-state esa-empty-state--sm">
                    <h3 class="esa-empty-state__title typography-label-sm-strong">
                      Nothing added yet
                    </h3>
                    <p class="esa-empty-state__description typography-body-xs">
                      Search above for evidence already in Beacon, or upload a file on the
                      Add New tab.
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
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                    >
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
                    <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
                    <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="m13.41 10.59 5.66-5.66"></path></svg></span
                ><span data-targets-title-text="">Actions</span
                ><span
                  class="bcn-ev-targets__count"
                  data-targets-count=""
                  aria-hidden="true"
                  >16</span
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
              <span
                class="bcn-ev-targets__filter"
                data-targets-component-filter=""
                data-needs=""
                ><span class="bcn-ev-targets__flabel" id="bcn-ev-flabel-component"
                  >Component</span
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
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
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
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
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
                                    width="16"
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
                                >Swainson’s hawk active-nest buffer monitoring</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-4.5</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-swha-buffer-monitoring"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Swainson’s hawk active-nest buffer monitoring"
                                  title="Remove Swainson’s hawk active-nest buffer monitoring"
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
                            data-attached-list="act-swha-buffer-monitoring"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ggs-preconstruction-survey"
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
                                aria-label="Collapse Giant garter snake preconstruction survey"
                                data-card-toggle="act-ggs-preconstruction-survey"
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
                                >Giant garter snake preconstruction survey</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-6.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ggs-preconstruction-survey"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Giant garter snake preconstruction survey"
                                  title="Remove Giant garter snake preconstruction survey"
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
                            data-attached-list="act-ggs-preconstruction-survey"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-qualified-biologist"
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
                                aria-label="Collapse Retain qualified biologist for covered species"
                                data-card-toggle="act-qualified-biologist"
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
                                >Retain qualified biologist for covered species</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-1.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Implementation Planning</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-qualified-biologist"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Retain qualified biologist for covered species"
                                  title="Remove Retain qualified biologist for covered species"
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
                            data-attached-list="act-qualified-biologist"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-worker-training"
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
                                aria-label="Collapse Worker environmental awareness training"
                                data-card-toggle="act-worker-training"
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
                                >Worker environmental awareness training</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                ><esa-popover
                                  class="bcn-ev-row__morepop"
                                  position="bottom"
                                  trigger="hover"
                                  offset="6"
                                  appearance="default"
                                  ><span class="bcn-ev-row__more" aria-expanded="false"
                                    ><span
                                      class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                      >+ 2 more</span
                                    ></span
                                  >
                                  <div slot="content" class="bcn-ev-row__poplist">
                                    <p class="bcn-ev-row__poptitle typography-meta">
                                      Commitments
                                    </p>
                                    <ul>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >BIO-2.3</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >BIO-6.4</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >CUL-1.2</span
                                        >
                                      </li>
                                    </ul>
                                  </div></esa-popover
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-worker-training"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Worker environmental awareness training"
                                  title="Remove Worker environmental awareness training"
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
                            data-attached-list="act-worker-training"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-daily-biological-monitoring"
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
                                aria-label="Collapse Daily biological monitoring during ground disturbance"
                                data-card-toggle="act-daily-biological-monitoring"
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
                                >Daily biological monitoring during ground
                                disturbance</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-8.4</span
                                ><esa-popover
                                  class="bcn-ev-row__morepop"
                                  position="bottom"
                                  trigger="hover"
                                  offset="6"
                                  appearance="default"
                                  ><span class="bcn-ev-row__more" aria-expanded="false"
                                    ><span
                                      class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                      >+ 3 more</span
                                    ></span
                                  >
                                  <div slot="content" class="bcn-ev-row__poplist">
                                    <p class="bcn-ev-row__poptitle typography-meta">
                                      Commitments
                                    </p>
                                    <ul>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >BIO-8.4</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >BIO-4.5</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >BIO-6.1</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >CUL-3.3</span
                                        >
                                      </li>
                                    </ul>
                                  </div></esa-popover
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-daily-biological-monitoring"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Daily biological monitoring during ground disturbance"
                                  title="Remove Daily biological monitoring during ground disturbance"
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
                            data-attached-list="act-daily-biological-monitoring"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-monthly-compliance-report"
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
                                aria-label="Collapse Monthly compliance monitoring report"
                                data-card-toggle="act-monthly-compliance-report"
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
                                >Monthly compliance monitoring report</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span
                                ><esa-popover
                                  class="bcn-ev-row__morepop"
                                  position="bottom"
                                  trigger="hover"
                                  offset="6"
                                  appearance="default"
                                  ><span class="bcn-ev-row__more" aria-expanded="false"
                                    ><span
                                      class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                      >+ 3 more</span
                                    ></span
                                  >
                                  <div slot="content" class="bcn-ev-row__poplist">
                                    <p class="bcn-ev-row__poptitle typography-meta">
                                      Commitments
                                    </p>
                                    <ul>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >REP-3.1</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >REP-3.4</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >REP-5.1</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >ADM-2.2</span
                                        >
                                      </li>
                                    </ul>
                                  </div></esa-popover
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Reporting</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-monthly-compliance-report"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Monthly compliance monitoring report"
                                  title="Remove Monthly compliance monitoring report"
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
                            data-attached-list="act-monthly-compliance-report"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-noise-monitoring"
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
                                aria-label="Collapse Construction noise level monitoring at sensitive receptors"
                                data-card-toggle="act-noise-monitoring"
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
                                >Construction noise level monitoring at sensitive
                                receptors</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">NOI-2.2</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-noise-monitoring"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Construction noise level monitoring at sensitive receptors"
                                  title="Remove Construction noise level monitoring at sensitive receptors"
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
                            data-attached-list="act-noise-monitoring"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-dust-control-inspection"
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
                                aria-label="Collapse Fugitive dust control inspection"
                                data-card-toggle="act-dust-control-inspection"
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
                                >Fugitive dust control inspection</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">AIR-1.4</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-dust-control-inspection"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Fugitive dust control inspection"
                                  title="Remove Fugitive dust control inspection"
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
                            data-attached-list="act-dust-control-inspection"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-swppp-inspection"
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
                                aria-label="Collapse SWPPP qualified-personnel site inspection"
                                data-card-toggle="act-swppp-inspection"
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
                                >SWPPP qualified-personnel site inspection</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">WQ-5.2</span
                                ><esa-popover
                                  class="bcn-ev-row__morepop"
                                  position="bottom"
                                  trigger="hover"
                                  offset="6"
                                  appearance="default"
                                  ><span class="bcn-ev-row__more" aria-expanded="false"
                                    ><span
                                      class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                      >+ 1 more</span
                                    ></span
                                  >
                                  <div slot="content" class="bcn-ev-row__poplist">
                                    <p class="bcn-ev-row__poptitle typography-meta">
                                      Commitments
                                    </p>
                                    <ul>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >WQ-5.2</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >WQ-5.5</span
                                        >
                                      </li>
                                    </ul>
                                  </div></esa-popover
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-swppp-inspection"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove SWPPP qualified-personnel site inspection"
                                  title="Remove SWPPP qualified-personnel site inspection"
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
                            data-attached-list="act-swppp-inspection"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-cultural-monitoring"
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
                                aria-label="Collapse Archaeological monitoring during excavation"
                                data-card-toggle="act-cultural-monitoring"
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
                                >Archaeological monitoring during excavation</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">CUL-3.3</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-cultural-monitoring"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Archaeological monitoring during excavation"
                                  title="Remove Archaeological monitoring during excavation"
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
                            data-attached-list="act-cultural-monitoring"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-haul-route-agreement"
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
                                aria-label="Collapse Execute haul route maintenance agreement"
                                data-card-toggle="act-haul-route-agreement"
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
                                >Execute haul route maintenance agreement</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Implementation Planning</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-haul-route-agreement"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Execute haul route maintenance agreement"
                                  title="Remove Execute haul route maintenance agreement"
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
                            data-attached-list="act-haul-route-agreement"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-fish-screen-inspection"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse Fish screen criteria compliance inspection"
                                data-card-toggle="act-ib-fish-screen-inspection"
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
                                >Fish screen criteria compliance inspection</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">FSH-2.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-fish-screen-inspection"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Fish screen criteria compliance inspection"
                                  title="Remove Fish screen criteria compliance inspection"
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
                            data-attached-list="act-ib-fish-screen-inspection"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-inwater-work-window"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse In-water work window conformance record"
                                data-card-toggle="act-ib-inwater-work-window"
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
                                >In-water work window conformance record</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">FSH-1.3</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-inwater-work-window"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove In-water work window conformance record"
                                  title="Remove In-water work window conformance record"
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
                            data-attached-list="act-ib-inwater-work-window"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-turbidity-monitoring"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse Turbidity monitoring during in-water construction"
                                data-card-toggle="act-ib-turbidity-monitoring"
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
                                >Turbidity monitoring during in-water construction</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">WQ-2.4</span
                                ><esa-popover
                                  class="bcn-ev-row__morepop"
                                  position="bottom"
                                  trigger="hover"
                                  offset="6"
                                  appearance="default"
                                  ><span class="bcn-ev-row__more" aria-expanded="false"
                                    ><span
                                      class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                                      >+ 2 more</span
                                    ></span
                                  >
                                  <div slot="content" class="bcn-ev-row__poplist">
                                    <p class="bcn-ev-row__poptitle typography-meta">
                                      Commitments
                                    </p>
                                    <ul>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >WQ-2.4</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >WQ-2.6</span
                                        >
                                      </li>
                                      <li>
                                        <span class="bcn-cbadge bcn-cbadge--sm"
                                          >FSH-3.1</span
                                        >
                                      </li>
                                    </ul>
                                  </div></esa-popover
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-turbidity-monitoring"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Turbidity monitoring during in-water construction"
                                  title="Remove Turbidity monitoring during in-water construction"
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
                            data-attached-list="act-ib-turbidity-monitoring"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-worker-training"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse Worker environmental awareness training"
                                data-card-toggle="act-ib-worker-training"
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
                                >Worker environmental awareness training</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-worker-training"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Worker environmental awareness training"
                                  title="Remove Worker environmental awareness training"
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
                            data-attached-list="act-ib-worker-training"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-monthly-compliance-report"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse Monthly compliance monitoring report"
                                data-card-toggle="act-ib-monthly-compliance-report"
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
                                >Monthly compliance monitoring report</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">REP-3.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Reporting</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-monthly-compliance-report"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Monthly compliance monitoring report"
                                  title="Remove Monthly compliance monitoring report"
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
                            data-attached-list="act-ib-monthly-compliance-report"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-ib-pile-driving-hydroacoustic"
                  data-component="intake-b-north-delta"
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
                                aria-label="Collapse Hydroacoustic monitoring during pile driving"
                                data-card-toggle="act-ib-pile-driving-hydroacoustic"
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
                                >Hydroacoustic monitoring during pile driving</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">FSH-4.2</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-ib-pile-driving-hydroacoustic"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Hydroacoustic monitoring during pile driving"
                                  title="Remove Hydroacoustic monitoring during pile driving"
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
                            data-attached-list="act-ib-pile-driving-hydroacoustic"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-tc-rtm-stockpile-inspection"
                  data-component="twin-cities-complex"
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
                                aria-label="Collapse Reusable tunnel material stockpile inspection"
                                data-card-toggle="act-tc-rtm-stockpile-inspection"
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
                                >Reusable tunnel material stockpile inspection</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">WQ-7.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Construction</span></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-tc-rtm-stockpile-inspection"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Reusable tunnel material stockpile inspection"
                                  title="Remove Reusable tunnel material stockpile inspection"
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
                            data-attached-list="act-tc-rtm-stockpile-inspection"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-tc-haul-route-agreement"
                  data-component="twin-cities-complex"
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
                                aria-label="Collapse Execute haul route maintenance agreement"
                                data-card-toggle="act-tc-haul-route-agreement"
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
                                >Execute haul route maintenance agreement</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">TRA-2.1</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Implementation Planning</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-tc-haul-route-agreement"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Execute haul route maintenance agreement"
                                  title="Remove Execute haul route maintenance agreement"
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
                            data-attached-list="act-tc-haul-route-agreement"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-tc-worker-training"
                  data-component="twin-cities-complex"
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
                                aria-label="Collapse Worker environmental awareness training"
                                data-card-toggle="act-tc-worker-training"
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
                                >Worker environmental awareness training</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-2.3</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Tracking</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-tc-worker-training"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Worker environmental awareness training"
                                  title="Remove Worker environmental awareness training"
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
                            data-attached-list="act-tc-worker-training"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  class="bcn-ev-targets__item"
                  data-target-row="act-tc-nesting-bird-survey"
                  data-component="twin-cities-complex"
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
                                aria-label="Collapse Nesting bird survey before vegetation removal"
                                data-card-toggle="act-tc-nesting-bird-survey"
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
                                >Nesting bird survey before vegetation removal</span
                              ><span class="bcn-ev-row__codes"
                                ><span class="bcn-cbadge bcn-cbadge--sm">BIO-5.2</span
                                ><!-- Right of the codes, INSIDE the same group: the count belongs to this
                         action's identity line, and grouping it with the codes means it
                         wraps with them rather than stranding itself when the row is tight. --><esa-tooltip
                                  class="bcn-countchip"
                                  text="No evidence attached yet"
                                  position="below"
                                  data-action-evcount=""
                                  hidden="true"
                                  ><span class="bcn-countchip__stack"
                                    ><span class="bcn-countchip__icon" aria-hidden="true"
                                      ><span
                                        class="esa-icon esa-icon--md"
                                        aria-hidden="true"
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
                                        class="esa-badge esa-badge--primary esa-badge--xs typography-microcopy-2xs-strong"
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
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text">Monitoring</span></span
                                ><span
                                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                                  ><span class="esa-badge__text"
                                    >Pre-Construction</span
                                  ></span
                                ></span
                              >
                            </div>
                          </div>
                          <div class="bcn-ev-row__side">
                            <span
                              class="bcn-ev-row__dismiss"
                              data-target-dismiss="act-tc-nesting-bird-survey"
                              ><span
                                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                                ><button
                                  class="esa-button__native typography-microcopy-xs"
                                  type="button"
                                  aria-label="Remove Nesting bird survey before vegetation removal"
                                  title="Remove Nesting bird survey before vegetation removal"
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
                            data-attached-list="act-tc-nesting-bird-survey"
                          ></ul>
                          <p
                            class="bcn-ev-row__hint typography-body-sm"
                            data-attached-hint=""
                          >
                            Drag evidence here to attach it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- An attached-evidence row, pre-rendered from the LEGOS once and cloned per
         attachment by the controller. Astro's legos are compile-time, so a template is how
         a runtime-built list still gets real esa-badge / esa-icon-button markup instead of
         hand-written copies of it (the same trick BcnGuidanceDrawer uses for its avatar). --><template
                data-attached-row=""
                ><li class="bcn-ev-attached__row" data-astro-cid-6zu5gb4v="">
                  <span class="bcn-ev-attached__name" data-astro-cid-6zu5gb4v=""></span
                  ><span
                    class="bcn-ev-attached__mark"
                    hidden=""
                    data-astro-cid-6zu5gb4v=""
                    ><span
                      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                      data-astro-cid-yahmuvtj=""
                      ><span class="esa-badge__text" data-astro-cid-yahmuvtj=""
                        >Suggested</span
                      ></span
                    ></span
                  ><span class="bcn-ev-attached__remove" data-astro-cid-6zu5gb4v=""
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                      data-astro-cid-5nhxdd72=""
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Remove this evidence from the action"
                        title="Remove this evidence from the action"
                        data-astro-cid-6zu5gb4v="true"
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
                  ></span></li></template
              ><!-- LIST MODE (a list page's "Add evidence", see evidence-drawer.ts): the column
         holds that list's members instead of a component's actions. Every member is a
         target by default; the x leaves one out of this attach, and Restore brings the
         left-out back. Each row is the list page's OWN slim card (.bcn-loc, from
         bcn-obligation-card.css) cloned off its master tree and pared to chip, title and
         the remove verb, so the drawer shows the member exactly as the page does. -->
              <div class="bcn-ev-targets__listmode" data-targets-listmode="">
                <p
                  class="bcn-ev-targets__leftout typography-body-sm"
                  data-listmode-leftout=""
                  hidden=""
                >
                  <span data-listmode-leftout-text=""
                    >0 actions left out of this attach.</span
                  ><button
                    type="button"
                    class="bcn-ev-targets__restore"
                    data-listmode-restore=""
                  >
                    Restore
                  </button>
                </p>
                <ul class="bcn-ev-targets__list" data-listmode-rows="">
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Financial</span
                      ><span class="bcn-loc__title"
                        >Fund Annual Endowment Deposit Amount Installment</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Fund Annual Endowment Deposit Amount Installment out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3ENYWE6AXT12YDFDJM2"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Financial</span
                      ><span class="bcn-loc__title"
                        >Provide Annual Long-Term HM Lands Management Funding</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Provide Annual Long-Term HM Lands Management Funding out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R3GHBSN2G09CZKZQ72"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Deliver Annual Status Report to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Deliver Annual Status Report to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R6NBY4JTT233FQYDT9"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Deliver Final Phase Mitigation Report to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Deliver Final Phase Mitigation Report to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Notify CDFW of Likely Impact Exceedance and Revised
                        Schedule</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Notify CDFW of Likely Impact Exceedance and Revised Schedule out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3RC1N589S9ETAS5HQJS"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Notify CDFW of TRBL Colony or Roost Disturbance</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Notify CDFW of TRBL Colony or Roost Disturbance out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R99JZNVA7RWDTVTCW3"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Report Construction-Phase CBB and MALI Survey Results</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Report Construction-Phase CBB and MALI Survey Results out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R8HSR7K069ZM5EZCXX"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Report Habitat Disturbance Acreage and GIS Layers to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Report Habitat Disturbance Acreage and GIS Layers to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R99JZNVA7RWDTVTCW5"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Report Hydroacoustic and Pile Driving Monitoring Results</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Report Hydroacoustic and Pile Driving Monitoring Results out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R99JZNVA7RWDTVTCW9"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Report Intake Sediment Deposition Assessment to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Report Intake Sediment Deposition Assessment to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R99JZNVA7RWDTVTCW4"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Report Mercury Monitoring Results to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Report Mercury Monitoring Results to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R5TVSWTRCYD79ASQ4C"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Submit Covered Species Observations to CNDDB</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Submit Covered Species Observations to CNDDB out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3RA6HTPQEBMJTM46QTX"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Submit Phase 2 Project Operations Report to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Submit Phase 2 Project Operations Report to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3R99JZNVA7RWDTVTCW2"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Submit Photo Monitoring Documentation Report</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Submit Photo Monitoring Documentation Report out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3RC1N589S9ETAS5HQK1"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Submit Restoration Monitoring Reports to CDFW</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Submit Restoration Monitoring Reports to CDFW out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                  <li
                    class="bcn-loc"
                    data-class="action"
                    data-member-id="act_01M2G6Y3RB67EQDRWNDJBKFW6W"
                    data-listmode-target=""
                  >
                    <div class="bcn-loc__main">
                      <span class="bcn-loc__class" data-list-class-tag="">Reporting</span
                      ><span class="bcn-loc__title"
                        >Upload Stormwater Forms and Records to SMARTS</span
                      ><esa-tooltip
                        text="Leave out of this attach"
                        align="end"
                        position="above"
                        ><button
                          type="button"
                          class="bcn-loc__verb bcn-loc__verb--danger"
                          aria-label="Leave Upload Stormwater Forms and Records to SMARTS out of this attach"
                          data-listmode-drop=""
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
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button
                      ></esa-tooltip>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Nothing on the list yet. -->
              <div class="bcn-ev-targets__empty" data-targets-empty="">
                <div class="esa-empty-state esa-empty-state--sm">
                  <h3 class="esa-empty-state__title typography-label-sm-strong">
                    No actions selected
                  </h3>
                  <p class="esa-empty-state__description typography-body-xs">
                    Search above to add one, or run Find matches once you have added
                    evidence.
                  </p>
                  <div class="esa-empty-state__actions typography-label-md"></div>
                </div>
              </div>
            </div>
            <!-- ── What is outstanding ─────────────────────────────────────────────────
       Pinned BELOW the scroll rather than inside it: it summarises the whole
       column, so it must not scroll away from the changes it is counting. Shown
       only while associations are unsaved; the Add New tab's draft has its own
       marker and is not counted here. -->
            <div class="bcn-ev-targets__pending" data-targets-pending="" hidden="">
              <div class="esa-alert-box esa-alert-box--warning typography-body-sm">
                <div class="esa-alert-box__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path
                      d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                    ></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                </div>
                <div class="esa-alert-box__body">
                  <strong class="esa-alert-box__title typography-label-sm-strong"
                    >Unsaved changes</strong
                  >
                  <div class="esa-alert-box__message">
                    <span data-targets-pending-text=""></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <esa-confirm-dialog
        data-evidence-confirm="true"
        heading="Discard these associations?"
        message="Evidence you have attached in this session has not been saved. Changing the component or phase re-scopes the action list and discards it."
        variant="warning"
        confirm-label="Discard and change"
        cancel-label="Keep working"
      ></esa-confirm-dialog>
    </div>
    <footer class="bcn-bottom-drawer__foot">
      <div class="bcn-ev__foot">
        <!-- List mode only: what Save is still waiting on, or what it will write. -->
        <p
          class="bcn-ev__status typography-body-sm"
          data-evidence-status=""
          role="status"
        >
          Choose a component first
        </p>
        <div class="bcn-ev__actions">
          <span data-evidence-save=""
            ><span
              class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--disabled"
              ><button
                class="esa-button__native typography-microcopy-md"
                type="button"
                disabled=""
              >
                <span class="esa-button__label">Save</span>
              </button></span
            ></span
          ><span data-drawer-close=""
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Cancel</span>
              </button></span
            ></span
          >
        </div>
      </div>
    </footer>
  </div></bcn-bottom-drawer
>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-loc__edited {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-loc__edited[hidden] {
  display: none;
}
.bcn-loc__dot {
  place-items: center;
  block-size: 1rem;
  inline-size: 1rem;
  display: inline-grid;
}
.bcn-loc__dot:before {
  content: "";
  background: var(--color-content-brand);
  border-radius: 50%;
  block-size: 6px;
  inline-size: 6px;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
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
.bcn-bottom-drawer {
  --_width: var(--bcn-bottom-drawer-width, 90vw);
  --_height: var(--bcn-bottom-drawer-height, 80vh);
  --_inset: var(--bcn-bottom-drawer-inset, 0px);
  --_z: var(--bcn-bottom-drawer-z, 1400);
  display: contents;
}
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__backdrop,
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__panel {
  display: none;
}
.bcn-bottom-drawer__backdrop {
  background: var(--color-background-overlay-backdrop, #00000080);
  backdrop-filter: blur(2px);
  z-index: var(--_z);
  animation: 0.15s bcn-bd-fade;
  position: fixed;
  inset: 0;
}
.bcn-bottom-drawer__panel {
  left: 50%;
  bottom: var(--_inset);
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  height: var(--_height);
  background: var(--color-background-elevation-raised);
  border-radius: var(--radius-300) var(--radius-300) 0 0;
  z-index: calc(var(--_z) + 1);
  outline: none;
  flex-direction: column;
  animation: 0.3s cubic-bezier(0.16, 1, 0.3, 1) bcn-bd-up;
  display: flex;
  position: fixed;
  overflow: hidden;
  transform: translate(-50%);
  box-shadow: 0 -12px 48px -12px #00000052;
}
.bcn-bottom-drawer[closing]:not([open]) .bcn-bottom-drawer__panel {
  animation: 0.22s cubic-bezier(0.5, 0, 0.75, 0) forwards bcn-bd-down;
}
.bcn-bottom-drawer[closing]:not([open]) .bcn-bottom-drawer__backdrop {
  animation: 0.15s forwards bcn-bd-fade-out;
}
.bcn-bottom-drawer__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-400) var(--spacing-500);
  border-bottom: 1px solid var(--color-border-default);
  flex: none;
  display: flex;
}
.bcn-bottom-drawer__headslot {
  flex: 1;
  min-width: 0;
}
.bcn-bottom-drawer__close {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-bottom-drawer__body {
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-bottom-drawer__foot {
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
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
.bcn-ev-search {
  position: relative;
}
.bcn-ev-search esa-combobox {
  --_field-padding-y: var(--spacing-150);
}
.bcn-ev-search__icon {
  color: var(--color-content-default-tertiary);
  pointer-events: none;
  z-index: 1;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.75rem;
}
.bcn-disclosure {
  border-radius: var(--radius-100);
  width: 20px;
  height: 20px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.bcn-disclosure:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-secondary);
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip {
  margin-left: var(--spacing-150);
  flex: none;
  display: inline-flex;
}
.bcn-countchip[hidden] {
  display: none;
}
.bcn-countchip__stack {
  width: 24px;
  height: 24px;
  display: inline-flex;
  position: relative;
}
.bcn-countchip__icon {
  width: 100%;
  height: 100%;
  color: var(--color-content-default-tertiary);
  --icon-size-md: 18px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-countchip__num {
  display: inline-flex;
  position: absolute;
  bottom: -4px;
  right: -5px;
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-countchip__sr {
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.bcn-ev-staging {
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-ev-staging__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  min-height: 60px;
  padding: var(--spacing-350, 0.875rem) var(--spacing-400);
  flex: none;
  display: flex;
}
.bcn-ev-staging__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
  display: flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-staging__search {
  padding: 0 var(--spacing-400);
  margin-top: calc(var(--bcn-ev-search-gap) - var(--spacing-400));
  flex: none;
}
.bcn-ev-staging__scroll {
  min-height: 0;
  padding: var(--spacing-400) var(--spacing-400) var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-staging__tabs {
  padding: 0 var(--spacing-400);
  flex: none;
}
.bcn-ev-staging__tabs esa-tab-layout {
  display: block;
}
.bcn-ev-staging__panel {
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-ev-staging__panel[hidden] {
  display: none;
}
.bcn-ev-staging__panel--upload {
  padding: var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  min-height: 0;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-staging__drop {
  flex-direction: column;
  flex: 1;
  min-height: 140px;
  display: flex;
}
.bcn-ev-staging__draft {
  flex: none;
}
.bcn-ev-staging__draft[hidden] {
  display: none;
}
.bcn-ev-draft {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-ev-draft__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-ev-draft__unsaved {
  --bcn-unsaved: var(--color-action);
  align-items: center;
  gap: var(--spacing-150);
  color: var(--bcn-unsaved);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  white-space: nowrap;
  flex: none;
  margin-left: auto;
  display: inline-flex;
}
.bcn-ev-draft__title {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-ev-draft__notes {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
}
.bcn-ev-draft__filesrow {
  gap: var(--spacing-150);
  min-width: 0;
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-ev-draft__fileslabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  flex: none;
  margin: 0;
}
.bcn-ev-draft__files {
  min-width: 0;
  padding: 0 0 0 var(--spacing-300);
  gap: var(--spacing-100);
  flex-direction: column;
  flex: 1;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-draft__file {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  color: var(--color-content-default);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-ev-draft__filename {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-ev-draft__filesize {
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  flex: none;
}
.bcn-ev-draft__fileremove {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-draft__foot {
  justify-content: flex-end;
  gap: var(--spacing-250, 0.625rem);
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-ev-staging__drop esa-file-upload {
  --color-background-field: var(--color-background-elevation-sunken);
  --form-border-color-focus: var(--color-background-brand-muted);
  flex: 1;
  display: grid;
}
.bcn-ev-staging__dropnote {
  margin: var(--spacing-300) 0 0;
  color: var(--color-content-default-tertiary);
}
.bcn-ev-staging__foot {
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  flex: none;
  justify-content: flex-end;
  display: flex;
}
.bcn-ev-staging__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-staging__list:not(:has(> li:not([hidden]))),
.bcn-ev-staging__item[hidden],
.bcn-ev-staging__empty[hidden] {
  display: none;
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-card {
  column-gap: var(--spacing-300);
  row-gap: var(--spacing-100);
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: center;
  display: grid;
}
.bcn-ev-card__grip {
  grid-area: 1/1;
}
.bcn-ev-card__top {
  grid-area: 1/2;
}
.bcn-ev-card__toggle {
  grid-area: 2/1;
  display: inline-flex;
}
.bcn-ev-card__desc {
  grid-area: 2/2;
}
.bcn-ev-card__filesrow {
  align-items: flex-start;
  gap: var(--spacing-200);
  min-width: 0;
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  grid-area: 3/2;
  display: flex;
}
.bcn-ev-card__fileslabel {
  flex: none;
}
.bcn-ev-card__files {
  flex: 1;
  min-width: 0;
}
.bcn-ev-card__grip {
  width: 20px;
  height: 20px;
  color: var(--bcn-content-muted);
  cursor: grab;
  border-radius: var(--radius-100);
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-ev-card__grip:hover {
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
}
.bcn-ev-card__grip:active {
  cursor: grabbing;
}
.bcn-ev-staging__item[data-exhausted] .bcn-ev-card__grip {
  cursor: not-allowed;
  color: var(--color-content-default-tertiary);
  opacity: 0.4;
  background: 0 0;
}
.bcn-ev-staging__item[data-dragging] {
  opacity: 0.4;
}
.bcn-ev-card__top {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__fileslabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  line-height: var(--pill-height-sm, 22px);
  margin: 0;
}
.bcn-ev-card__desc {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
}
.bcn-ev-staging__item[data-collapsed] .bcn-ev-card__desc {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-staging__item[data-collapsed] .bcn-ev-card__filesrow {
  display: none;
}
.bcn-ev-card__title {
  min-width: 0;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-ev-card__count {
  white-space: nowrap;
  flex: none;
}
.bcn-ev-card__remove {
  margin-left: auto;
}
.bcn-ev-card__titlelink {
  color: inherit;
  text-decoration: none;
}
.bcn-ev-card__titlelink:hover,
.bcn-ev-card__titlelink:focus-visible {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-ev-card__remove {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-card__files {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-staging esa-combobox {
  display: block;
}
.esa-loading-spinner {
  --_spinner-size: 32px;
  --_spinner-border-width: 3px;
  --_spinner-color: var(--loading-spinner-color, var(--color-background-brand, #46a758));
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-loading-spinner--xs {
  --_spinner-size: 14px;
  --_spinner-border-width: 2px;
}
.esa-loading-spinner--sm {
  --_spinner-size: 20px;
  --_spinner-border-width: 2px;
}
.esa-loading-spinner--lg {
  --_spinner-size: 48px;
  --_spinner-border-width: 4px;
}
.esa-loading-spinner__ring {
  width: var(--_spinner-size);
  height: var(--_spinner-size);
  border: var(--_spinner-border-width) solid
    var(--loading-spinner-track-color, var(--color-border-default-subtle, #d9d9d9));
  border-top-color: var(--_spinner-color);
  border-radius: var(--radius-pill, 9999px);
  animation: esa-spinner-rotate var(--animation-spin, 0.75s linear infinite);
  box-sizing: border-box;
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets {
  background: var(--color-background-elevation-sunken);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-ev-targets__head {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 60px;
  padding: var(--spacing-350, 0.875rem) var(--spacing-400);
  flex: none;
  display: flex;
}
.bcn-ev-targets__filters {
  --_lift: var(--spacing-050, 0.125rem);
  align-items: flex-start;
  gap: var(--spacing-400);
  margin: calc(var(--_lift) * -1) var(--spacing-400) 0;
  min-height: calc(var(--tab-layout-height-sm, 36px) + 1px + var(--_lift));
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-border-default);
  flex-wrap: nowrap;
  flex: none;
  display: flex;
}
.bcn-ev-targets__search {
  padding: var(--bcn-ev-search-gap) var(--spacing-400) 0;
  flex: none;
}
.bcn-ev-targets__filter {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: inline-flex;
}
.bcn-ev-targets__listmode[hidden],
.bcn-ev-targets__leftout[hidden] {
  display: none;
}
.bcn-ev-targets__listmode {
  gap: var(--spacing-300);
  display: grid;
}
.bcn-ev-targets__listmode [data-listmode-rows] {
  gap: var(--spacing-150);
  margin: 0;
  padding: 0;
  display: grid;
}
.bcn-ev-targets__listmode .bcn-loc__main {
  cursor: default;
}
.bcn-ev-targets__listmode .bcn-loc__title {
  cursor: inherit;
  text-decoration: none;
}
.bcn-ev-targets__listmode .bcn-loc__main > :last-child {
  margin-left: auto;
}
.bcn-ev-targets__leftout {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-ev-targets__restore {
  font: inherit;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-brand, var(--color-background-brand));
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
  text-decoration: underline;
}
.bcn-ev-targets__filter[data-needs] esa-select {
  border-radius: var(--radius-md, 6px);
  box-shadow:
    0 0 0 1px var(--color-background-brand),
    0 0 0 4px color-mix(in srgb, var(--color-background-brand) 20%, transparent);
}
.bcn-ev-targets__filter[data-needs] .bcn-ev-targets__flabel {
  color: var(--color-background-brand);
}
.bcn-ev-targets__flabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex: none;
}
.bcn-ev-targets__filter esa-select {
  flex: 0 0 var(--_filter-box);
  min-width: 0;
  display: block;
}
.bcn-ev-targets__filters {
  --_filter-box: 200px;
}
.bcn-ev-targets__count {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
}
.bcn-ev-targets__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
  display: flex;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__pending {
  --bcn-unsaved: var(--color-action);
  --color-background-utility-warning-subtle: color-mix(
    in srgb,
    var(--bcn-unsaved) 6%,
    transparent
  );
  --color-border-utility-warning: color-mix(in srgb, var(--bcn-unsaved) 45%, transparent);
  --color-content-utility-warning: var(--bcn-unsaved);
  padding: 0 var(--spacing-400) var(--spacing-400);
  --alert-box-padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  flex: none;
}
.bcn-ev-targets__pending[hidden] {
  display: none;
}
.bcn-ev-targets__scroll {
  min-height: 0;
  padding: var(--spacing-400) var(--spacing-400) var(--spacing-400);
  gap: var(--spacing-300);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-targets__working {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  color: var(--color-content-default-secondary);
  display: flex;
}
.bcn-ev-targets__working[hidden] {
  display: none;
}
.bcn-ev-targets__notice {
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-ev-targets__notice[hidden] {
  display: none;
}
.bcn-ev-targets__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-targets__list:not(:has(> li:not([hidden]))),
.bcn-ev-targets__empty[hidden],
.bcn-ev-targets__item[hidden] {
  display: none;
}
.bcn-ev-row {
  flex-direction: column;
  display: flex;
}
.bcn-ev-row__head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ev-row__body {
  padding-left: calc(20px + var(--spacing-300));
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item[data-blocked] {
  pointer-events: none;
}
.bcn-ev-attached {
  margin: var(--spacing-250, 0.625rem) 0 0;
  gap: var(--spacing-150);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-attached:empty {
  display: none;
}
.bcn-ev-attached__row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-050) var(--spacing-200);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  color: var(--color-content-default);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-ev-attached__row[data-unsaved] {
  --bcn-unsaved: var(--color-action);
  border-color: color-mix(in srgb, var(--bcn-unsaved) 45%, transparent);
  background: color-mix(in srgb, var(--bcn-unsaved) 6%, transparent);
}
.bcn-ev-attached__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-attached__remove {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-row__hint {
  margin: var(--spacing-200) 0 0;
  padding: var(--spacing-200);
  border: 1px dashed var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default-tertiary);
  background: 0 0;
  justify-content: center;
  align-items: center;
  font-style: italic;
  transition:
    background 0.12s,
    border-color 0.12s;
  display: flex;
}
.bcn-ev-row__hint[hidden] {
  display: none;
}
.bcn-ev-targets__item[data-receiving] .bcn-ev-row__hint {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 8%, transparent);
}
.bcn-ev-row__main {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-ev-row__titlerow {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  min-width: 0;
  margin: 0;
  display: flex;
}
.bcn-ev-row__spacer {
  flex: 1 1 0;
  min-width: 0;
}
.bcn-ev-targets__item[data-collapsed] .bcn-ev-row__body {
  display: none;
}
.bcn-ev-row__dot {
  --bcn-unsaved: var(--color-action);
  border-radius: var(--radius-full);
  background: var(--bcn-unsaved);
  flex: none;
  width: 8px;
  height: 8px;
}
.bcn-ev-row__dot[hidden] {
  display: none;
}
.bcn-ev-row__codes {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  margin-right: auto;
  display: inline-flex;
}
.bcn-ev-row__morepop {
  display: inline-flex;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-ev-row__more {
  cursor: default;
  display: inline-flex;
}
.bcn-ev-row__poplist {
  min-width: 0;
}
.bcn-ev-row__poptitle {
  margin: 0 0 var(--spacing-200);
  color: var(--color-content-default-tertiary);
}
.bcn-ev-row__poplist ul {
  align-items: flex-start;
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__name {
  min-width: 22ch;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 0 auto;
  line-height: 1.35;
}
.bcn-ev-row__tags {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  min-width: 0;
  display: flex;
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__why {
  color: var(--color-content-default-secondary);
  margin: 2px 0 0;
  font-style: italic;
}
.bcn-ev-row__why[hidden] {
  display: none;
}
.bcn-ev-row__side {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-tertiary);
  flex: none;
  display: flex;
}
.bcn-ev-row__mark[hidden] {
  display: none;
}
.bcn-ev__head {
  align-items: center;
  gap: var(--spacing-500);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-ev__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.2;
}
.bcn-ev__panels {
  flex: 1;
  grid-template-columns: minmax(300px, 0.72fr) 1px 1fr;
  min-height: 0;
  display: grid;
}
.bcn-ev__pane {
  min-width: 0;
  min-height: 0;
}
.bcn-ev__joint {
  background: var(--color-border-default);
}
.bcn-ev__foot {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-ev__status {
  color: var(--color-content-default-secondary);
  margin: 0 auto 0 0;
}
.bcn-ev__status[hidden] {
  display: none;
}
.bcn-ev__actions {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  flex: none;
  display: flex;
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs,
.bcn-loc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also,
.bcn-loc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-loc__req {
  color: var(--color-content-default-secondary);
  cursor: pointer;
}
.bcn-loc__req-name {
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-loc__req:hover .bcn-loc__req-name {
  color: var(--color-content-default);
}
.bcn-loc__req-name:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-loc__impl[hidden] {
  display: none;
}
.bcn-loc__impl .bcn-status-chip {
  flex-shrink: 0;
}
.bcn-loc__comments {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence {
  text-align: end;
  min-width: 5.5rem;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence[data-none] {
  color: var(--color-content-default-tertiary);
  font-weight: 400;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--xs {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-100, 0.25rem);
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill--lg {
  --_pill-padding-y: var(--spacing-200, 0.5rem);
  --_pill-padding-x: var(--spacing-300, 0.75rem);
}
.esa-pill--round {
  border-radius: var(--radius-pill, 9999px);
}
.esa-pill--primary {
  --_pill-bg: var(--color-background-brand-subtle, var(--color-grass-2));
  --_pill-text: var(--color-content-brand, var(--color-grass-11));
  --_pill-border: var(--color-border-brand, var(--color-grass-6));
}
.esa-pill--info {
  --_pill-bg: var(--color-background-utility-info-subtle, var(--color-blue-2));
  --_pill-text: var(--color-content-utility-info, #0d74ce);
  --_pill-border: var(--color-border-utility-info, var(--color-blue-6));
}
.esa-pill--success {
  --_pill-bg: var(--color-background-utility-success-subtle, var(--color-green-2));
  --_pill-text: var(--color-content-utility-success, #218358);
  --_pill-border: var(--color-border-utility-success, var(--color-green-6));
}
.esa-pill--warning {
  --_pill-bg: var(--color-background-utility-warning-subtle, var(--color-yellow-2));
  --_pill-text: var(--color-content-utility-warning, #ab6400);
  --_pill-border: var(--color-border-utility-warning, var(--color-yellow-6));
}
.esa-pill--danger {
  --_pill-bg: var(--color-background-utility-danger-subtle, var(--color-red-2));
  --_pill-text: var(--color-content-utility-danger, #ce2c31);
  --_pill-border: var(--color-border-utility-danger, var(--color-red-6));
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
}
.esa-pill__icon {
  flex-shrink: 0;
  display: inline-flex;
}
.esa-pill__remove {
  border-radius: var(--radius-pill, 9999px);
  width: 16px;
  height: 16px;
  color: inherit;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-pill__remove:hover {
  opacity: 1;
  background: var(--color-background-overlay-heavy-hover, #0000001a);
}
.esa-pill__remove:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
}
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(
    --alert-box-text-color,
    var(--color-content-default-secondary, #646464)
  );
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--success {
  --_alert-bg: var(--color-background-utility-success-subtle, #fbfefc);
  --_alert-border: var(--color-border-utility-success, #adddc0);
  --_alert-accent: var(--color-content-utility-success, #218358);
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box--danger {
  --_alert-bg: var(--color-background-utility-danger-subtle, #fffcfc);
  --_alert-border: var(--color-border-utility-danger, #fdbdbe);
  --_alert-accent: var(--color-content-utility-danger, #ce2c31);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
}
.esa-alert-box__dismiss {
  border-radius: var(--radius-sm, 0.25rem);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-secondary, #646464);
  cursor: pointer;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-alert-box__dismiss:hover {
  color: var(--color-content-default, #202020);
  background: var(--color-background-overlay-strong-hover, #0000000f);
}
.esa-alert-box__dismiss:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
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
- `--alert-box-text-color`: #525252 _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-bottom-drawer-height`: 92vh _(component)_
- `--bcn-bottom-drawer-width`: 96vw _(component)_
- `--bcn-bottom-drawer-z`: 1400 _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-ev-search-gap`: .625rem _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
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
- `--color-action`: #d45087 _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-brand-subtle`: #effefb _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-backdrop`: #00000080 _(semantic)_
- `--color-background-overlay-heavy-hover`: #0000001a _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-blue-2`: #f4faff _(primitive)_
- `--color-blue-6`: #acd8fc _(primitive)_
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
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-grass-11`: #2a7e3b _(primitive)_
- `--color-grass-2`: #f5fbf5 _(primitive)_
- `--color-grass-6`: #b2ddb5 _(primitive)_
- `--color-green-2`: #f4fbf6 _(primitive)_
- `--color-green-6`: #adddc0 _(primitive)_
- `--color-obligation`: #f95d6a _(component)_
- `--color-red-2`: #fff7f7 _(primitive)_
- `--color-red-6`: #fdbdbe _(primitive)_
- `--color-yellow-2`: #fefbe9 _(primitive)_
- `--color-yellow-6`: #f3d673 _(primitive)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: color-mix(in srgb, #eef5f4 30%, transparent) _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--loading-spinner-color`: #005862 _(component)_
- `--loading-spinner-track-color`: #efefef _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
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
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--tab-layout-height-sm`: 36px _(component)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 350 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
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
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
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
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
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
