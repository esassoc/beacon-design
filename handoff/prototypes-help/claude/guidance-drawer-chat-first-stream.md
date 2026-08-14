# Guidance drawer — chat-first stream

The Aldo drawer, modeled as a CHAT-FIRST conversation rather than a help panel. The body is ONE continuous scroll stream: Aldo's opening message (the route's "You are here" / "On this page" / "Terms" guidance) leads, and every Q&A exchange appends below it — so the intro scrolls up like any older message. A ChatGPT-style composer is pinned in the footer and the stream scrolls behind it.

## Key decisions
- The intro is a MESSAGE, not a static header: it sits in the stream and scrolls away as the conversation grows. That is what makes the drawer read as a conversation rather than a panel with a chat bolted on.
- Ask Aldo is DETERMINISTIC, not generative: the question is tokenized, stopwords are dropped, and each article is scored — title match 4, summary match 2, body match 1 — with the top 3 returned. Ties keep HELP_ARTICLES order via a stable sort. So "what is a component" surfaces the titled article, not one that merely mentions the word.
- The searchable corpus is read from the pre-rendered article bodies via textContent — article prose never enters the JS bundle. Only the route map and the chat copy are imported.
- A ~300ms beat precedes each reply. It is feel, not fake typing — the content is fully deterministic and could render instantly.
- The composer sends on Enter, newlines on Shift+Enter, auto-grows to 5 rows and then scrolls internally, and keeps its send button disabled while the field is empty.
- One persistent "Browse all Help & Guidance" link sits above the composer — the escape hatch from conversation to the full knowledge base.

## Gotchas
- esa-textarea was checked and rejected for the composer: it renders its border/focus/background ON the field itself, offers no slot for an embedded send button, and auto-resizes with overflow:hidden (it clips, with no inner scroll). The embedded composer needs the SHELL to own the border/ring and hold the button, and the field to inner-scroll at max — so the composer input is owned, and that is the one place in this feature where a form primitive is not a lego.
- The drawer FRAME is the esa-side-dialog lego (its own backdrop, focus trap, Esc/backdrop close, symmetric slide-out) — do not hand-roll a drawer.
- When re-pointing --side-dialog-inset for the stacked card-stack effect, the value MUST carry a unit. A unitless value silently kills the lego's width calc and the panel collapses.
- Every article is pre-rendered ONCE as a compact row into a hidden pool; the client MOVES the route's rows into the intro's two sections and leaves the rest hidden. Astro is compile-time and the drawer is route-agnostic at build, so this move is the mechanism that makes it route-aware.
- The article row is an owned two-line button — no lego renders one.

## Done when
- Opening the drawer shows Aldo's intro at the top of the stream; typing a question and pressing Enter appends the question, then Aldo's reply with up to three ranked article links; the intro scrolls up as the exchange grows; the composer grows to 5 rows and then scrolls; Shift+Enter newlines instead of sending.

## Markup
```html
<esa-side-dialog
  class="bcn-gd"
  data-gd="true"
  position="right"
  heading="Help &amp; Guidance"
  size="md"
  open=""
>
  <div slot="header" class="bcn-gd__header">
    <span class="bcn-aldo-mark" data-size="md" aria-hidden="true">
      <span class="bcn-aldo-mark__glyph">
        <span class="esa-icon esa-icon--md" aria-hidden="true">
          <svg
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
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            ></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </span>
    </span>
    <span class="bcn-gd__title">Help &amp; Guidance</span>
  </div>
  <!-- The scroll stream: Aldo's intro message, then appended Q&A. -->
  <div class="bcn-gd__stream">
    <div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
      <div class="bcn-gd-msg__avatar">
        <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true">
          <span class="bcn-aldo-mark__glyph">
            <span class="esa-icon esa-icon--xs" aria-hidden="true">
              <svg
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
                  d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                ></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </span>
          </span>
        </span>
      </div>
      <div class="bcn-gd-msg__group">
        <section class="bcn-gd__section">
          <h2 class="bcn-gd__label">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            You are here
          </h2>
          <div class="bcn-gd__here">
            <span class="bcn-gd__here-page" data-gd-page="">Beacon</span>
            <span class="bcn-gd__here-purpose" data-gd-purpose=""
              >Beacon turns a shelf of regulatory documents into a working compliance
              program — cataloged, planned, executed, and proven.</span
            >
          </div>
        </section>
        <section class="bcn-gd__section" data-gd-section="howtos">
          <h2 class="bcn-gd__label">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                <line x1="8" x2="21" y1="18" y2="18"></line>
                <line x1="3" x2="3.01" y1="6" y2="6"></line>
                <line x1="3" x2="3.01" y1="12" y2="12"></line>
                <line x1="3" x2="3.01" y1="18" y2="18"></line>
              </svg>
            </span>
            On this page
          </h2>
          <div class="bcn-gd__rows" data-gd-howtos="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="five-minute-tour"
              data-kind="howto"
              data-title="A five-minute tour of Beacon"
              data-summary="The four zones of the app and how a compliance obligation flows through them."
            >
              <span class="bcn-gd-row__text">
                <span class="bcn-gd-row__title">A five-minute tour of Beacon</span>
                <span class="bcn-gd-row__sub"
                  >The four zones of the app and how a compliance obligation flows through
                  them.</span
                >
              </span>
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="global-search-tips"
              data-kind="howto"
              data-title="Finding anything with search"
              data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
            >
              <span class="bcn-gd-row__text">
                <span class="bcn-gd-row__title">Finding anything with search</span>
                <span class="bcn-gd-row__sub"
                  >Press / anywhere to search commitments, requirements, actions, and
                  documents.</span
                >
              </span>
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </div>
        </section>
        <section class="bcn-gd__section" data-gd-section="terms">
          <h2 class="bcn-gd__label">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
              <svg
                width="16"
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
                ></path>
              </svg>
            </span>
            Terms
          </h2>
          <div class="bcn-gd__rows" data-gd-terms="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-an-action"
              data-kind="glossary"
              data-title="Action"
              data-summary="One trackable deliverable consolidating requirements that describe the same work."
            >
              <span class="bcn-gd-row__text">
                <span class="bcn-gd-row__title">Action</span>
                <span class="bcn-gd-row__sub"
                  >One trackable deliverable consolidating requirements that describe the
                  same work.</span
                >
              </span>
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-commitment"
              data-kind="glossary"
              data-title="Commitment"
              data-summary="One discrete obligation, recorded in its source document’s original language."
            >
              <span class="bcn-gd-row__text">
                <span class="bcn-gd-row__title">Commitment</span>
                <span class="bcn-gd-row__sub"
                  >One discrete obligation, recorded in its source document’s original
                  language.</span
                >
              </span>
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-component"
              data-kind="glossary"
              data-title="Component"
              data-summary="A distinct place or package of work within a project, tracked independently."
            >
              <span class="bcn-gd-row__text">
                <span class="bcn-gd-row__title">Component</span>
                <span class="bcn-gd-row__sub"
                  >A distinct place or package of work within a project, tracked
                  independently.</span
                >
              </span>
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- appended Q&A exchanges -->
    <div data-gd-chat="">
      <div class="bcn-gd-msg bcn-gd-msg--user">
        <div class="bcn-gd-msg__bubble">what is a component?</div>
      </div>
      <div class="bcn-gd-msg bcn-gd-msg--aldo">
        <div class="bcn-gd-msg__avatar">
          <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true">
            <span class="bcn-aldo-mark__glyph">
              <span class="esa-icon esa-icon--xs" aria-hidden="true">
                <svg
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
                    d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
                  ></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
            </span>
          </span>
        </div>
        <div class="bcn-gd-msg__group">
          <div class="bcn-gd-msg__bubble">
            <p class="bcn-gd-msg__text">Here’s what I have on that:</p>
            <div class="bcn-gd-msg__links">
              <button
                class="bcn-gd-msg__link"
                type="button"
                data-article-id="what-is-a-component"
              >
                Component</button
              ><button
                class="bcn-gd-msg__link"
                type="button"
                data-article-id="starring-components"
              >
                Starring components on your dashboard</button
              ><button class="bcn-gd-msg__link" type="button" data-article-id="work-area">
                Work Area
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Scope</span>
          <span class="bcn-gd-row__sub"
            >The setting that determines whether work is tracked once, or once per
            location.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="tenant"
        data-kind="glossary"
        data-title="Tenant"
        data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Tenant</span>
          <span class="bcn-gd-row__sub"
            >The client organization a Beacon workspace, its data, and its configuration
            are scoped to.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="work-area"
        data-kind="glossary"
        data-title="Work Area"
        data-summary="The finest scope level — a subdivision of a component for field-level tracking."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Work Area</span>
          <span class="bcn-gd-row__sub"
            >The finest scope level — a subdivision of a component for field-level
            tracking.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="actions-vs-implementations"
        data-kind="glossary"
        data-title="Implementation"
        data-summary="A single execution of a published action — the record teams work day to day."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Implementation</span>
          <span class="bcn-gd-row__sub"
            >A single execution of a published action — the record teams work day to
            day.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="permit"
        data-kind="glossary"
        data-title="Permit"
        data-summary="An agency authorization the project must obtain, tracked through the acquisition pipeline."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Permit</span>
          <span class="bcn-gd-row__sub"
            >An agency authorization the project must obtain, tracked through the
            acquisition pipeline.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="reading-permit-tracking"
        data-kind="howto"
        data-title="Reading the Permit Tracking board"
        data-summary="Where each permit stands, what is blocking it, and what is due next."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Reading the Permit Tracking board</span>
          <span class="bcn-gd-row__sub"
            >Where each permit stands, what is blocking it, and what is due next.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="starring-components"
        data-kind="howto"
        data-title="Starring components on your dashboard"
        data-summary="Pin the three-to-five components you actually work in."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Starring components on your dashboard</span>
          <span class="bcn-gd-row__sub"
            >Pin the three-to-five components you actually work in.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="reading-critical-now"
        data-kind="howto"
        data-title="How the dashboard decides what needs attention"
        data-summary="Urgency comes from action due dates, shown in the zone that owns the work."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title"
            >How the dashboard decides what needs attention</span
          >
          <span class="bcn-gd-row__sub"
            >Urgency comes from action due dates, shown in the zone that owns the
            work.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="reading-project-timeline"
        data-kind="howto"
        data-title="Reading the project timeline"
        data-summary="The next 30, 60, or 90 days of due dates, seasons, and milestones."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Reading the project timeline</span>
          <span class="bcn-gd-row__sub"
            >The next 30, 60, or 90 days of due dates, seasons, and milestones.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="what-is-a-dmr"
        data-kind="glossary"
        data-title="Daily Monitoring Report"
        data-summary="The structured field record of one day on site, and a direct source of evidence."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Daily Monitoring Report</span>
          <span class="bcn-gd-row__sub"
            >The structured field record of one day on site, and a direct source of
            evidence.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="what-is-an-observation"
        data-kind="glossary"
        data-title="Observation"
        data-summary="One recorded field event — a species sighting, habitat condition, weather event, or BMP check."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Observation</span>
          <span class="bcn-gd-row__sub"
            >One recorded field event — a species sighting, habitat condition, weather
            event, or BMP check.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="survey"
        data-kind="glossary"
        data-title="Survey"
        data-summary="A field data record synced from a collection app, effective only after quality-control approval."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Survey</span>
          <span class="bcn-gd-row__sub"
            >A field data record synced from a collection app, effective only after
            quality-control approval.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="site-clearance"
        data-kind="glossary"
        data-title="Site Clearance"
        data-summary="The go/no-go determination of whether a site is clear for ground disturbance."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Site Clearance</span>
          <span class="bcn-gd-row__sub"
            >The go/no-go determination of whether a site is clear for ground
            disturbance.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="monitoring-portal"
        data-kind="glossary"
        data-title="Monitoring Portal"
        data-summary="The section that reports commitment compliance from field observations."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Monitoring Portal</span>
          <span class="bcn-gd-row__sub"
            >The section that reports commitment compliance from field observations.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="qc-field-surveys"
        data-kind="howto"
        data-title="Reviewing field surveys before they count"
        data-summary="Surveys sync from field apps, but only QC-approved records drive compliance."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Reviewing field surveys before they count</span>
          <span class="bcn-gd-row__sub"
            >Surveys sync from field apps, but only QC-approved records drive
            compliance.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="site-clearance-go-no-go"
        data-kind="howto"
        data-title="Using Site Clearance go/no-go"
        data-summary="Check whether a work site is clear for ground disturbance — and what is blocking it."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Using Site Clearance go/no-go</span>
          <span class="bcn-gd-row__sub"
            >Check whether a work site is clear for ground disturbance — and what is
            blocking it.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="what-is-evidence"
        data-kind="glossary"
        data-title="Evidence of Compliance"
        data-summary="The documented proof that an obligation was met — the artifact an auditor reviews."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Evidence of Compliance</span>
          <span class="bcn-gd-row__sub"
            >The documented proof that an obligation was met — the artifact an auditor
            reviews.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="assembling-compliance-report"
        data-kind="howto"
        data-title="Assembling a compliance report"
        data-summary="Compile evidence of compliance into a report package for an agency."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Assembling a compliance report</span>
          <span class="bcn-gd-row__sub"
            >Compile evidence of compliance into a report package for an agency.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="what-is-a-source"
        data-kind="glossary"
        data-title="Source Document"
        data-summary="The regulatory document — permit, EIR, or agreement — that obligations are extracted from."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Source Document</span>
          <span class="bcn-gd-row__sub"
            >The regulatory document — permit, EIR, or agreement — that obligations are
            extracted from.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="what-is-a-requirement"
        data-kind="glossary"
        data-title="Requirement"
        data-summary="A specific, actionable sub-obligation broken out of a commitment."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Requirement</span>
          <span class="bcn-gd-row__sub"
            >A specific, actionable sub-obligation broken out of a commitment.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="tracing-lineage"
        data-kind="howto"
        data-title="Tracing a requirement back to its source"
        data-summary="Follow the lineage from any requirement up to the exact document language."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Tracing a requirement back to its source</span>
          <span class="bcn-gd-row__sub"
            >Follow the lineage from any requirement up to the exact document
            language.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="feature-flag"
        data-kind="glossary"
        data-title="Feature Flag"
        data-summary="A tenant-level switch that enables or disables a Beacon capability."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Feature Flag</span>
          <span class="bcn-gd-row__sub"
            >A tenant-level switch that enables or disables a Beacon capability.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="managing-tenant-settings"
        data-kind="howto"
        data-title="Managing tenant settings"
        data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Managing tenant settings</span>
          <span class="bcn-gd-row__sub"
            >Configure the display labels, defaults, and enabled features that apply
            across a tenant.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="managing-users-roles"
        data-kind="howto"
        data-title="Managing users and roles"
        data-summary="Add users to a tenant and assign the roles that govern their access."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Managing users and roles</span>
          <span class="bcn-gd-row__sub"
            >Add users to a tenant and assign the roles that govern their access.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="configuring-notifications"
        data-kind="howto"
        data-title="Configuring notifications"
        data-summary="Set which compliance events generate notifications, and how each user receives them."
      >
        <span class="bcn-gd-row__text">
          <span class="bcn-gd-row__title">Configuring notifications</span>
          <span class="bcn-gd-row__sub"
            >Set which compliance events generate notifications, and how each user
            receives them.</span
          >
        </span>
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
  <!-- Pinned footer: one persistent browse affordance, then the composer. -->
  <div slot="footer" class="bcn-gd__foot">
    <a class="bcn-gd__browse" data-gd-browse="" href="/beacon-design/prototypes/help">
      Browse all Help &amp; Guidance
      <svg
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
        <path d="M5 12h14M13 5l7 7-7 7"></path>
      </svg>
    </a>
    <div class="bcn-gd-composer">
      <textarea
        class="bcn-gd-composer__input"
        data-gd-ask=""
        rows="1"
        placeholder="Ask Aldo a question…"
        aria-label="Ask Aldo a question"
        style="height: 35px; overflow-y: hidden"
      ></textarea>
      <button
        type="button"
        class="bcn-gd-composer__send"
        data-gd-ask-send=""
        aria-label="Send question"
        disabled=""
      >
        <span class="esa-icon esa-icon--sm" aria-hidden="true">
          <svg
            width="16"
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
            <path d="M12 19V5"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</esa-side-dialog>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-aldo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  line-height: 0;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
  --icon-size-xs: 12px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
.bcn-aldo-mark[data-animated] {
  animation: bcn-aldo-pulse 2s ease-in-out infinite;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: bcn-aldo-spin 8s linear infinite;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd-msg {
  display: flex;
  gap: var(--spacing-300);
  align-items: flex-start;
}
.bcn-gd-msg--user {
  justify-content: flex-end;
}
.bcn-gd-msg__avatar {
  flex: none;
  margin-top: 2px;
}
.bcn-gd-msg__group {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-gd-msg__bubble {
  max-width: 88%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-250) var(--spacing-300);
  border-radius: var(--radius-300);
  font-size: var(--type-size-150);
  line-height: 1.5;
}
.bcn-gd-msg--user .bcn-gd-msg__bubble {
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
  white-space: pre-wrap;
}
.bcn-gd-msg--aldo .bcn-gd-msg__bubble {
  background: var(--bcn-aldo-50);
  color: var(--color-text-primary);
}
.bcn-gd-msg__text {
  margin: 0;
}
.bcn-gd-msg__links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
}
.bcn-gd-msg__link {
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-align: left;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.bcn-gd-msg__browse {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.bcn-gd {
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-width: 460px;
  --backdrop-filter: blur(2px);
}
.bcn-gd-article {
  --z-modal-backdrop: 1302;
  --z-modal: 1303;
  --side-dialog-width: 460px;
  --backdrop-filter: blur(2px);
}
.bcn-gd__header {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
}
.bcn-gd__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.2;
}
.bcn-gd__stream {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.bcn-gd__section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-gd__section[hidden] {
  display: none;
}
.bcn-gd__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd__here {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--bcn-aldo-50);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
}
.bcn-gd__here-page {
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-gd__here-purpose {
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
  line-height: 1.5;
}
.bcn-gd__rows {
  display: flex;
  flex-direction: column;
}
.bcn-gd-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-100);
  border: 0;
  border-bottom: 1px solid var(--color-border-light);
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.bcn-gd-row:hover {
  background: var(--color-surface-sunken);
}
.bcn-gd-row__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}
.bcn-gd-row__title {
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.35;
}
.bcn-gd-row__sub {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-regular);
  color: var(--color-text-secondary);
  line-height: 1.4;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd__foot {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-gd__browse {
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-gd__browse:hover {
  text-decoration: underline;
}
.bcn-gd-composer {
  display: flex;
  align-items: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-150) var(--spacing-150) var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.bcn-gd-composer:focus-within {
  border-color: var(--bcn-aldo);
  box-shadow: 0 0 0 3px var(--bcn-aldo-50);
}
.bcn-gd-composer__input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  resize: none;
  font-family: inherit;
  font-size: var(--type-size-200);
  line-height: 1.5;
  color: var(--color-text-primary);
  padding: 6px 0;
  overflow-y: hidden;
}
.bcn-gd-composer__input::placeholder {
  color: var(--color-text-tertiary);
}
.bcn-gd-composer__send {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.bcn-gd-composer__send:hover:not(:disabled) {
  background: var(--bcn-aldo-600);
}
.bcn-gd-composer__send:disabled {
  background: var(--color-surface-sunken);
  color: var(--color-text-tertiary);
  cursor: default;
}
.bcn-gd-article__head {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  cursor: pointer;
}
.bcn-gd-article__back:hover {
  color: var(--color-text-primary);
}
.bcn-gd-article__titlerow {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
}
.bcn-gd-article__title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: 1.25;
}
.bcn-gd-article__kind {
  flex: none;
  padding: 1px 6px;
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  line-height: 1.5;
  white-space: nowrap;
}
.bcn-gd-article__kind[data-kind="glossary"] {
  color: var(--bcn-aldo-600);
  border-color: var(--bcn-aldo-100);
  background: var(--bcn-aldo-50);
}
.bcn-gd-article__panel[hidden] {
  display: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-100`: #cfeceb _(component)_
- `--bcn-aldo-50`: #e8f6f5 _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
