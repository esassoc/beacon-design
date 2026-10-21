# Setup Wizard: markup, part 2 of 2

```html
                          title="Approve every obligation in the registry"
                        >
                          <span class="esa-button__label"
                            ><span class="sw-verb"
                              ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <path d="m9 12 2 2 4-4"></path></svg></span
                              >Approve obligations (333)</span
                            ></span
                          >
                        </button></span
                      >
                    </div>
                  </footer>
                  <!-- The stamp for an obligation leaf: bcn-sw-chain-panels clones this whenever a
       requirement's links change, so new rows carry this file's scope. --><template
                    data-swc-tpl="obl"
                    ><li
                      class="bcn-swc__obl"
                      data-swc-obl=""
                      data-class=""
                      data-astro-cid-zwb5b7zi=""
                    >
                      <span
                        class="bcn-swc__class"
                        data-swc-class=""
                        data-astro-cid-zwb5b7zi=""
                      ></span
                      ><button
                        type="button"
                        class="bcn-swc__obl-title"
                        data-swc-edit=""
                        data-swc-text=""
                        data-astro-cid-zwb5b7zi=""
                      ></button
                      ><span
                        class="bcn-swc__filing"
                        data-swc-filing=""
                        data-astro-cid-zwb5b7zi=""
                      ></span
                      ><span class="bcn-swc__verbs" data-astro-cid-zwb5b7zi=""
                        ><esa-tooltip text="Edit" data-astro-cid-zwb5b7zi="true"
                          ><button
                            type="button"
                            class="bcn-swc__verb"
                            aria-label="Edit obligation"
                            data-swc-edit=""
                            data-astro-cid-zwb5b7zi=""
                          >
                            <span
                              class="esa-icon esa-icon--xs"
                              aria-hidden="true"
                              data-astro-cid-wcwfib5m=""
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
                                data-astro-cid-wcwfib5m=""
                              >
                                <path
                                  d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                ></path>
                                <path
                                  d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                                ></path></svg
                            ></span></button></esa-tooltip
                        ><esa-tooltip text="Unlink" align="end" data-astro-cid-zwb5b7zi="true"
                          ><button
                            type="button"
                            class="bcn-swc__verb bcn-swc__verb--danger"
                            aria-label="Unlink from this obligation"
                            data-swc-unlink=""
                            data-astro-cid-zwb5b7zi=""
                          >
                            <span
                              class="esa-icon esa-icon--xs"
                              aria-hidden="true"
                              data-astro-cid-wcwfib5m=""
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
                                data-astro-cid-wcwfib5m=""
                              >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path></svg
                            ></span></button></esa-tooltip
                      ></span></li
                  ></template>
                </section>
                <!-- script type="module" removed (0 bytes) -->
              </div>
              <!-- 1. The requirement. --><esa-side-dialog
                id="swc-req"
                heading="Requirement"
                position="right"
                style="--_width: min(640px, 94vw); --z-modal: 1300; --z-modal-backdrop: 1250"
                size="md"
                ><div class="bcn-swcp">
                  <p class="bcn-swcp__meta">
                    <span class="bcn-swcp__code" data-swc-req-code=""></span
                    ><span class="bcn-swcp__cmt" data-swc-req-cmt=""></span
                    ><span class="bcn-swcp__sep">·</span><span data-swc-req-type=""></span>
                  </p>
                  <blockquote class="bcn-swcp__text" data-swc-req-text=""></blockquote>
                  <div class="bcn-swcp__section">
                    <div class="bcn-swcp__label-row">
                      <span class="bcn-swcp__label"
                        >Obligations
                        <span class="bcn-swcp__label-n" data-swc-req-obl-n="">0</span></span
                      ><span class="bcn-swcp__label-verbs"
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-swc-req-add="true"
                          >
                            <span class="esa-button__label"
                              ><span class="bcn-swcp__verb"
                                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path></svg></span
                                >Add to an obligation</span
                              ></span
                            >
                          </button></span
                        ><span
                          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                          ><button
                            class="esa-button__native typography-microcopy-2xs"
                            type="button"
                            data-swc-req-new="true"
                          >
                            <span class="esa-button__label"
                              ><span class="bcn-swcp__verb"
                                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path></svg></span
                                >New obligation</span
                              ></span
                            >
                          </button></span
                        ></span
                      >
                    </div>
                    <div class="bcn-swcp__list" data-swc-req-obls=""></div>
                    <p class="bcn-swcp__empty" data-swc-req-obl-empty="" hidden="">
                      Not in any obligation.
                    </p>
                  </div>
                  <div class="bcn-swcp__section">
                    <div class="bcn-swcp__label-row">
                      <span class="bcn-swcp__label"
                        >Actions
                        <span class="bcn-swcp__label-n" data-swc-req-act-n="">0</span></span
                      >
                    </div>
                    <div class="bcn-swcp__list" data-swc-req-acts=""></div>
                    <p class="bcn-swcp__empty" data-swc-req-act-empty="" hidden="">
                      Not in any action.
                    </p>
                  </div>
                </div>
                <span slot="footer" class="bcn-swcp__foot bcn-swcp__foot--end"
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-swc-req-close="true"
                    >
                      <span class="esa-button__label">Close</span>
                    </button></span
                  ></span
                ><template data-swc-tpl="panel-obl"
                  ><div class="bcn-swcp__row" data-obl="" data-astro-cid-cyavspxz="">
                    <span class="bcn-swcp__class" data-astro-cid-cyavspxz=""></span
                    ><button
                      type="button"
                      class="bcn-swcp__row-title"
                      data-swc-panel-edit=""
                      data-astro-cid-cyavspxz=""
                    ></button
                    ><span class="bcn-swcp__filing" data-astro-cid-cyavspxz=""></span
                    ><span class="bcn-swcp__row-verbs" data-astro-cid-cyavspxz=""
                      ><esa-tooltip text="Edit" data-astro-cid-cyavspxz="true"
                        ><button
                          type="button"
                          class="bcn-swcp__x"
                          aria-label="Edit obligation"
                          data-swc-panel-edit=""
                          data-astro-cid-cyavspxz=""
                        >
                          <span
                            class="esa-icon esa-icon--xs"
                            aria-hidden="true"
                            data-astro-cid-wcwfib5m=""
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
                              data-astro-cid-wcwfib5m=""
                            >
                              <path
                                d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                              ></path>
                              <path
                                d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                              ></path></svg
                          ></span></button></esa-tooltip
                      ><esa-tooltip text="Unlink" align="end" data-astro-cid-cyavspxz="true"
                        ><button
                          type="button"
                          class="bcn-swcp__x bcn-swcp__x--danger"
                          aria-label="Unlink from this obligation"
                          data-swc-panel-unlink=""
                          data-astro-cid-cyavspxz=""
                        >
                          <span
                            class="esa-icon esa-icon--xs"
                            aria-hidden="true"
                            data-astro-cid-wcwfib5m=""
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
                              data-astro-cid-wcwfib5m=""
                            >
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path></svg
                          ></span></button></esa-tooltip
                    ></span></div></template
                ><template data-swc-tpl="panel-act"
                  ><div class="bcn-swcp__row bcn-swcp__row--quiet" data-astro-cid-cyavspxz="">
                    <span
                      class="bcn-swcp__row-name"
                      data-astro-cid-cyavspxz=""
                    ></span></div></template></esa-side-dialog
              ><!-- 2. The obligation, over the requirement. --><esa-side-dialog
                id="swc-obl"
                heading="Obligation"
                position="right"
                style="--_width: min(600px, 92vw); --z-modal: 1400; --z-modal-backdrop: 1350"
                size="md"
                ><form class="bcn-swcp bcn-swcp--form" data-swc-obl-form="">
                  <esa-text-field
                    label="Title"
                    size="sm"
                    name="swc-title"
                    required=""
                  ></esa-text-field
                  ><esa-textarea
                    label="Description"
                    size="sm"
                    rows="3"
                    name="swc-description"
                    placeholder="What the project is held to, in a sentence or two."
                  ></esa-textarea
                  ><esa-select
                    label="Class"
                    size="sm"
                    options='[{"label":"Adhere","value":"adhere"},{"label":"Monitor","value":"monitor"},{"label":"Notify","value":"notify"},{"label":"Roster","value":"roster"}]'
                    name="swc-class"
                    required="true"
                  ></esa-select>
                  <div class="bcn-swcp__pair">
                    <esa-select
                      label="Category"
                      size="sm"
                      options='[{"label":"Agency reporting and approvals","value":"agency"},{"label":"Air quality","value":"air"},{"label":"Amphibians … [693 characters]'
                      name="swc-category"
                      required="true"
                    ></esa-select
                    ><esa-select
                      label="Subcategory"
                      size="sm"
                      options="[]"
                      name="swc-subcategory"
                      required="true"
                    ></esa-select>
                  </div>
                  <esa-textarea
                    label="Trigger"
                    size="sm"
                    rows="2"
                    name="swc-trigger"
                  ></esa-textarea>
                  <div class="bcn-swcp__section">
                    <div class="bcn-swcp__label-row">
                      <span class="bcn-swcp__label"
                        >Requirements
                        <span class="bcn-swcp__label-n" data-swc-obl-req-n="">0</span></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                        ><button
                          class="esa-button__native typography-microcopy-2xs"
                          type="button"
                          data-swc-obl-link="true"
                        >
                          <span class="esa-button__label"
                            ><span class="bcn-swcp__verb"
                              ><span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path></svg></span
                              >Link requirement</span
                            ></span
                          >
                        </button></span
                      >
                    </div>
                    <div class="bcn-swcp__list" data-swc-obl-reqs=""></div>
                    <p class="bcn-swcp__empty" data-swc-obl-req-empty="" hidden="">
                      No requirements linked. This obligation has nothing to stand on.
                    </p>
                  </div>
                </form>
                <span slot="footer" class="bcn-swcp__foot"
                  ><span
                    class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-swc-obl-remove="true"
                    >
                      <span class="esa-button__label">Remove obligation</span>
                    </button></span
                  ><span class="bcn-swcp__foot-right"
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-swc-obl-cancel="true"
                      >
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-swc-obl-save="true"
                      >
                        <span class="esa-button__label">Save</span>
                      </button></span
                    ></span
                  ></span
                ><template data-swc-tpl="obl-req"
                  ><details class="bcn-swcp__req" data-req="" data-astro-cid-cyavspxz="">
                    <summary class="bcn-swcp__row" data-astro-cid-cyavspxz="">
                      <span class="bcn-swcp__chev" aria-hidden="true" data-astro-cid-cyavspxz=""
                        ><span
                          class="esa-icon esa-icon--xs"
                          aria-hidden="true"
                          data-astro-cid-wcwfib5m=""
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
                            data-astro-cid-wcwfib5m=""
                          >
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swcp__code" data-astro-cid-cyavspxz=""></span
                      ><span class="bcn-swcp__row-name" data-astro-cid-cyavspxz=""></span
                      ><span class="bcn-swcp__row-verbs" data-astro-cid-cyavspxz=""
                        ><esa-tooltip text="Unlink" align="end" data-astro-cid-cyavspxz="true"
                          ><button
                            type="button"
                            class="bcn-swcp__x bcn-swcp__x--danger"
                            aria-label="Unlink requirement"
                            data-swc-obl-unlink=""
                            data-astro-cid-cyavspxz=""
                          >
                            <span
                              class="esa-icon esa-icon--xs"
                              aria-hidden="true"
                              data-astro-cid-wcwfib5m=""
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
                                data-astro-cid-wcwfib5m=""
                              >
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path></svg
                            ></span></button></esa-tooltip
                      ></span>
                    </summary>
                    <blockquote
                      class="bcn-swcp__text bcn-swcp__text--nested"
                      data-astro-cid-cyavspxz=""
                    ></blockquote></details></template></esa-side-dialog
              ><!-- 3. The picker, over both. --><esa-side-dialog
                id="swc-pick"
                heading="Add to an obligation"
                position="right"
                style="--_width: min(460px, 90vw); --z-modal: 1500; --z-modal-backdrop: 1450"
                size="md"
                ><div class="bcn-swcp bcn-swcp--pick">
                  <esa-text-field
                    size="sm"
                    name="swc-pick-search"
                    placeholder="Search…"
                    aria-label="Search"
                  ></esa-text-field>
                  <p class="bcn-swcp__meta bcn-swcp__meta--quiet" data-swc-pick-meta=""></p>
                  <div class="bcn-swcp__list" data-swc-pick-list="" role="listbox"></div>
                </div>
                <span slot="footer" class="bcn-swcp__foot bcn-swcp__foot--end"
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-swc-pick-cancel="true"
                    >
                      <span class="esa-button__label">Cancel</span>
                    </button></span
                  ><span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      data-swc-pick-ok="true"
                      disabled=""
                    >
                      <span class="esa-button__label">Add</span>
                    </button></span
                  ></span
                ><template data-swc-tpl="pick-obl"
                  ><button
                    type="button"
                    class="bcn-swcp__opt"
                    role="option"
                    aria-selected="false"
                    data-astro-cid-cyavspxz=""
                  >
                    <span class="bcn-swcp__class" data-astro-cid-cyavspxz=""></span
                    ><span class="bcn-swcp__row-name" data-astro-cid-cyavspxz=""></span
                    ><span class="bcn-swcp__n" data-astro-cid-cyavspxz=""></span></button></template
                ><template data-swc-tpl="pick-req"
                  ><button
                    type="button"
                    class="bcn-swcp__opt"
                    role="option"
                    aria-selected="false"
                    data-astro-cid-cyavspxz=""
                  >
                    <esa-checkbox
                      size="sm"
                      aria-hidden="true"
                      tabindex="-1"
                      data-astro-cid-cyavspxz="true"
                    ></esa-checkbox
                    ><span class="bcn-swcp__code" data-astro-cid-cyavspxz=""></span
                    ><span
                      class="bcn-swcp__row-name"
                      data-astro-cid-cyavspxz=""
                    ></span></button></template
                ><template data-swc-tpl="pick-group"
                  ><div
                    class="bcn-swcp__group"
                    role="presentation"
                    data-astro-cid-cyavspxz=""
                  ></div></template></esa-side-dialog
              ><esa-confirm-dialog
                data-swc-confirm="true"
                variant="danger"
                heading="Remove this obligation?"
                confirm-label="Remove"
                cancel-label="Cancel"
                show-close-button="true"
                style="--z-modal: 1600; --z-modal-backdrop: 1550"
              ></esa-confirm-dialog
              ><!-- script type="application/json" removed (625 KB) --><!-- script type="module" removed (0 bytes) -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
```
