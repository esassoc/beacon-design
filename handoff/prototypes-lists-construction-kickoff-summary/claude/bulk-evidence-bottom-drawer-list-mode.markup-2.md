# Bulk evidence (bottom drawer, list mode): markup, part 2 of 2

```html
                                  width="16"
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
                        <p class="bcn-ev-row__hint typography-body-sm" data-attached-hint="">
                          Drag evidence here to attach it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- …and 20 more like this (<li class="bcn-ev-targets__item">) -->
            </ul>
            <!-- An attached-evidence row, pre-rendered from the LEGOS once and cloned per
         attachment by the controller. Astro's legos are compile-time, so a template is how
         a runtime-built list still gets real esa-badge / esa-icon-button markup instead of
         hand-written copies of it (the same trick BcnGuidanceDrawer uses for its avatar). --><template
              data-attached-row=""
              ><li class="bcn-ev-attached__row" data-astro-cid-6zu5gb4v="">
                <span class="bcn-ev-attached__name" data-astro-cid-6zu5gb4v=""></span
                ><span class="bcn-ev-attached__mark" hidden="" data-astro-cid-6zu5gb4v=""
                  ><span
                    class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                    data-astro-cid-yahmuvtj=""
                    ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">Suggested</span></span
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
                <span data-listmode-leftout-text="">0 obligations left out of this attach.</span
                ><button type="button" class="bcn-ev-targets__restore" data-listmode-restore="">
                  Restore
                </button>
              </p>
              <ul class="bcn-ev-targets__list" data-listmode-rows="">
                <li
                  class="bcn-loc"
                  data-class="adhere"
                  data-member-id="obl_01M2G6YKM0HYHZPHBXBXTP9J34-m1"
                  data-listmode-target=""
                >
                  <div class="bcn-loc__main">
                    <span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                    ><span class="bcn-loc__title">Fire Suppression Supplies On Site</span
                    ><esa-tooltip text="Leave out of this attach" align="end" position="above"
                      ><button
                        type="button"
                        class="bcn-loc__verb bcn-loc__verb--danger"
                        aria-label="Leave Fire Suppression Supplies On Site out of this attach"
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
                  data-class="adhere"
                  data-member-id="obl_01M2G6Y3766PDKM5BW1NBAQNYD-m1"
                  data-listmode-target=""
                >
                  <div class="bcn-loc__main">
                    <span class="bcn-loc__class" data-list-class-tag="">Adhere</span
                    ><span class="bcn-loc__title"
                      >Vegetation clearing method for fire prevention</span
                    ><esa-tooltip text="Leave out of this attach" align="end" position="above"
                      ><button
                        type="button"
                        class="bcn-loc__verb bcn-loc__verb--danger"
                        aria-label="Leave Vegetation clearing method for fire prevention out of this attach"
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
                <!-- …and 43 more like this (<li class="bcn-loc">) -->
              </ul>
            </div>
            <!-- Nothing on the list yet. -->
            <div class="bcn-ev-targets__empty" data-targets-empty="">
              <div class="esa-empty-state esa-empty-state--sm">
                <h3 class="esa-empty-state__title typography-label-sm-strong">
                  No actions selected
                </h3>
                <p class="esa-empty-state__description typography-body-xs">
                  Search above to add one, or run Find matches once you have added evidence.
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
                <div class="esa-alert-box__message"><span data-targets-pending-text=""></span></div>
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
      <p class="bcn-ev__status typography-body-sm" data-evidence-status="" role="status">
        Choose a component first
      </p>
      <div class="bcn-ev__actions">
        <span data-evidence-save=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--disabled"
            ><button class="esa-button__native typography-microcopy-md" type="button" disabled="">
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
</div>
```
