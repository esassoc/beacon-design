# Beacon: markup

```html
<esa-side-dialog
  class="bcn-gd"
  data-gd="true"
  position="right"
  heading="Help &amp; Guidance"
  size="md"
  ><div slot="header" class="bcn-gd__header">
    <span class="bcn-aldo-mark" data-size="md" data-variant="rings" aria-hidden="true"
      ><svg
        class="bcn-aldo-mark__glyph"
        viewBox="12 12 40 40"
        fill="none"
        stroke="url(#bcn-aldo-ring-mrpzjmd)"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <defs>
          <linearGradient
            id="bcn-aldo-ring-mrpzjmd"
            x1="14"
            y1="12"
            x2="52"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" class="bcn-aldo-mark__from"></stop>
            <stop offset="1" class="bcn-aldo-mark__to"></stop>
          </linearGradient>
        </defs>
        <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
        <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
        <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
        <circle
          cx="33.2"
          cy="31.1"
          r="2"
          fill="url(#bcn-aldo-ring-mrpzjmd)"
          stroke="none"
        ></circle></svg></span
    ><span class="bcn-gd__title">Help &amp; Guidance</span>
  </div>
  <div class="bcn-gd__stream">
    <div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
      <div class="bcn-gd-msg__group">
        <!-- The page: its name as the heading, its description under it (round 17: no box,
             no "You are here" label). An admin, on a page whose description is the
             tenant's rich text, gets an Edit chip at the end of the heading row. -->
        <section class="bcn-gd__section bcn-gd__here">
          <div class="bcn-gd__here-head">
            <h2 class="bcn-gd__label">
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
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                  ></path>
                  <circle cx="12" cy="10" r="3"></circle></svg
              ></span>
              <span data-gd-page="">Beacon</span>
            </h2>
            <span class="bcn-admin-cue" data-gd-here-note="" hidden=""
              ><esa-tooltip
                text="Edit page description for everyone in DWR"
                position="above"
                delay="150"
                align="center"
                ><span class="bcn-admin-btn" data-gd-here-edit=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Edit Page Description"
                      title="Edit Page Description"
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
                          <path
                            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                          ></path>
                          <path d="m15 5 4 4"></path></svg
                      ></span></button></span></span></esa-tooltip
            ></span>
          </div>
          <p class="bcn-gd__here-purpose" data-gd-purpose="">
            Beacon turns a shelf of regulatory documents into a working compliance program —
            cataloged, planned, executed, and proven.
          </p>
        </section>
        <!-- On This Page. On a page with help dots, the section is its dots (round 17: a page
             that mounts <BcnHelpDotList> moves the list into the slot) and lists no articles;
             without dots, the route's how-to articles are the section. -->
        <section class="bcn-gd__section" data-gd-section="howtos">
          <h2 class="bcn-gd__label">
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
                <line x1="8" x2="21" y1="6" y2="6"></line>
                <line x1="8" x2="21" y1="12" y2="12"></line>
                <!-- …and 4 more like this (<line>) -->
              </svg></span
            >
            On this page
          </h2>
          <div data-help-dots-list-slot=""></div>
          <div class="bcn-gd__rows" data-gd-howtos="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="five-minute-tour"
              data-kind="howto"
              data-title="A five-minute tour of Beacon"
              data-summary="The four zones of the app and how a compliance obligation flows through them."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">A five-minute tour of Beacon</span
                ><span class="bcn-gd-row__sub"
                  >The four zones of the app and how a compliance obligation flows through
                  them.</span
                ></span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="global-search-tips"
              data-kind="howto"
              data-title="Finding anything with search"
              data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Finding anything with search</span
                ><span class="bcn-gd-row__sub"
                  >Press / anywhere to search commitments, requirements, actions, and
                  documents.</span
                ></span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span>
            </button>
          </div>
        </section>
        <!-- Terms. An admin attaches a glossary term to this page with + Add Term (a
             typeahead over the glossary) and detaches one with its ×; terms the page takes
             from its parent can only be hidden here or edited there (round 17). -->
        <section class="bcn-gd__section" data-gd-section="terms">
          <div class="bcn-gd__here-head">
            <h2 class="bcn-gd__label">
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
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  ></path></svg
              ></span>
              Terms
            </h2>
            <span class="bcn-admin-cue" data-gd-term-add-wrap="" hidden=""
              ><esa-tooltip
                text="ESA admin: add a term to this page for every tenant"
                position="above"
                delay="150"
                align="center"
                ><span class="bcn-admin-btn" data-gd-term-add=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Add Term"
                      title="Add Term"
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
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path></svg
                      ></span></button></span></span></esa-tooltip
            ></span>
          </div>
          <div class="bcn-gd__pick" data-gd-term-pick="" hidden="">
            <esa-combobox
              mode="autocomplete"
              size="sm"
              label="Add Term"
              placeholder="Search the glossary"
              data-gd-term-combo="true"
            ></esa-combobox>
          </div>
          <div class="bcn-gd__rows" data-gd-terms="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-an-action"
              data-kind="glossary"
              data-title="Action"
              data-summary="One trackable deliverable consolidating requirements that describe the same work."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Action</span
                ><span class="bcn-gd-row__sub"
                  >One trackable deliverable consolidating requirements that describe the same
                  work.</span
                ></span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-commitment"
              data-kind="glossary"
              data-title="Commitment"
              data-summary="One discrete obligation, recorded in its source document’s original language."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Commitment</span
                ><span class="bcn-gd-row__sub"
                  >One discrete obligation, recorded in its source document’s original
                  language.</span
                ></span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-component"
              data-kind="glossary"
              data-title="Component"
              data-summary="A distinct place or package of work within a project, tracked independently."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Component</span
                ><span class="bcn-gd-row__sub"
                  >A distinct place or package of work within a project, tracked
                  independently.</span
                ></span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span>
            </button>
          </div>
          <!-- An admin's row tools, cloned onto each term row: an attached term's ×, an
               inherited term's Hide and Edit on Project. --><template data-gd-trow-attached=""
            ><span class="bcn-gd-trow__tools bcn-admin-cue" data-astro-cid-i5kl5miz=""
              ><esa-tooltip
                text="ESA admin: Detach from this page"
                position="above"
                delay="150"
                data-astro-cid-i5kl5miz="true"
                ><span class="bcn-admin-btn" data-gd-term-detach="" data-astro-cid-i5kl5miz=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    data-astro-cid-5nhxdd72=""
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Detach Term"
                      title="Detach Term"
                      data-astro-cid-i5kl5miz="true"
                      data-astro-cid-5nhxdd72=""
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
                      ></span></button></span></span></esa-tooltip></span></template
          ><template data-gd-trow-inherited=""
            ><span class="bcn-gd-trow__tools bcn-admin-cue" data-astro-cid-i5kl5miz=""
              ><esa-tooltip
                text="ESA admin: Hide on this page"
                position="above"
                delay="150"
                data-astro-cid-i5kl5miz="true"
                ><span class="bcn-admin-btn" data-gd-term-hide="" data-astro-cid-i5kl5miz=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    data-astro-cid-5nhxdd72=""
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Hide on This Page"
                      title="Hide on This Page"
                      data-astro-cid-i5kl5miz="true"
                      data-astro-cid-5nhxdd72=""
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
                      ></span></button></span></span></esa-tooltip
              ><esa-tooltip
                text="ESA admin: Edit on Project"
                position="above"
                delay="150"
                data-astro-cid-i5kl5miz="true"
                ><span class="bcn-admin-btn" data-gd-term-parent="" data-astro-cid-i5kl5miz=""
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    data-astro-cid-5nhxdd72=""
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Edit on Project"
                      title="Edit on Project"
                      data-astro-cid-i5kl5miz="true"
                      data-astro-cid-5nhxdd72=""
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
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path
                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                          ></path></svg
                      ></span></button></span></span></esa-tooltip></span
          ></template>
        </section>
      </div>
    </div>
    <!-- appended Q&A exchanges, in the Aldo kit's message grammar (bcn-aldo.css) -->
    <div class="bcn-aldo-panel bcn-gd__chat" data-gd-chat=""></div>
    <!-- Row pool: every article as a compact row, hidden. The client moves the route's
         rows into the two sections above; the rest stay here (hidden). -->
    <div class="bcn-gd__pool" data-gd-pool="" hidden="">
      <button
        type="button"
        class="bcn-gd-row"
        data-article-id="project-vs-component-scope"
        data-kind="glossary"
        data-title="Scope"
        data-summary="The setting that determines whether work is tracked once, or once per location."
      >
        <span class="bcn-gd-row__text"
          ><span class="bcn-gd-row__title">Scope</span
          ><span class="bcn-gd-row__sub"
            >The setting that determines whether work is tracked once, or once per location.</span
          ></span
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path></svg
        ></span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="tenant"
        data-kind="glossary"
        data-title="Tenant"
        data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
      >
        <span class="bcn-gd-row__text"
          ><span class="bcn-gd-row__title">Tenant</span
          ><span class="bcn-gd-row__sub"
            >The client organization a Beacon workspace, its data, and its configuration are scoped
            to.</span
          ></span
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path></svg
        ></span></button
      ><!-- …and 23 more like this (<button class="bcn-gd-row">) -->
    </div>
  </div>
  <div slot="footer" class="bcn-gd__foot">
    <a class="bcn-gd__browse" data-gd-browse="" href="/beacon-design/prototypes/help"
      >Browse all Help &amp; Guidance<svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7"></path></svg></a
    ><!-- The Aldo kit's composer, as in the Setup Wizard and Lists chats. -->
    <div class="bcn-aldo-panel bcn-gd__aldo">
      <div class="bcn-aldo-composer" data-aldo-composer="" data-mode="thread">
        <div class="bcn-aldo-actions bcn-aldo-composer__suggest" data-composer-suggest=""></div>
        <div class="bcn-aldo-composer__anchor">
          <ul
            class="bcn-aldo-composer__menu"
            data-composer-menu=""
            role="listbox"
            aria-label="Suggestions"
            hidden=""
          ></ul>
          <form class="bcn-aldo-composer__shell" data-composer-form="">
            <div class="bcn-aldo-composer__context" data-composer-context="" hidden=""></div>
            <esa-textarea
              class="bcn-aldo-composer__field"
              data-composer-input="true"
              size="md"
              rows="1"
              max-rows="6"
              auto-resize=""
              aria-label="Ask Aldo a question"
              placeholder="What is a component?"
            ></esa-textarea
            ><span class="bcn-aldo-composer__send" data-empty=""
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Send"
                  title="Send"
                  data-composer-send="true"
                  disabled=""
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
                      <path d="m5 12 7-7 7 7"></path>
                      <path d="M12 19V5"></path></svg
                  ></span></button></span
            ></span>
          </form>
          <p class="bcn-aldo-composer__drop" data-composer-drop="" hidden="">Drop to attach</p>
        </div>
      </div>
      <div class="bcn-aldo-parts" data-aldo-parts="" hidden="">
        <template data-part="message"
          ><li class="bcn-aldo-msg">
            <span class="bcn-aldo-msg__who" data-msg-who=""></span>
            <div class="bcn-aldo-msg__bubble">
              <p class="bcn-aldo-msg__text" data-msg-text=""></p>
              <span class="bcn-aldo-msg__tools" data-msg-tools=""></span>
            </div>
            <div class="bcn-aldo-msg__extra" data-msg-extra=""></div>
            <span class="bcn-aldo-actions" data-msg-acts=""></span
            ><time class="bcn-aldo-msg__time" data-msg-time="" hidden=""></time></li></template
        ><template data-part="button-neutral"
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--xs"
            data-astro-cid-5nhxdd72=""
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              data-astro-cid-5nhxdd72=""
            >
              <span class="esa-button__label" data-astro-cid-5nhxdd72="">Action</span>
            </button></span
          ></template
        ><!-- …and 10 more like this (<template>) -->
      </div>
    </div>
  </div></esa-side-dialog
>
```
